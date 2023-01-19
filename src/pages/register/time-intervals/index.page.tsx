import { zodResolver } from "@hookform/resolvers/zod";
import { TextInput } from "@ignite-ui/react";
import { Button, Checkbox, Heading, MultiStep, Text } from "@palamar-ui/react";
import { useRouter } from "next/router";
import { ArrowRight, Warning } from "phosphor-react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { api } from "../../../lib/axios";
import { convertTimeStringToMinutes } from "../../../utils/conver-time-string-to-minutes";
import { getWeekDays } from "../../../utils/get-week-days";
import { Container, Header } from "../styles";
import {
  FormError,
  IntervalBox,
  IntervalContainer,
  IntervalDay,
  IntervalInputs,
  IntervalItem,
} from "./styles";

const timeIntervalFormSchema = z.object({
  intervals: z
    .array(
      z.object({
        weekDay: z.number().min(0).max(6),
        enable: z.boolean(),
        startTime: z.string(),
        endTime: z.string(),
      })
    )
    .length(7)
    .transform((intervals) =>
      intervals.filter((interval) => interval.enable === true)
    )
    .refine((intervals) => intervals.length > 0, {
      message: "Selecione pelo menos um dia da semana!",
    })
    .transform((intervals) => {
      return intervals.map((interval) => {
        return {
          weekDay: interval.weekDay,
          startTimeInMinutes: convertTimeStringToMinutes(interval.startTime),
          endTimeInMinutes: convertTimeStringToMinutes(interval.endTime),
        };
      });
    })
    .refine(
      (intervals) => {
        return intervals.every(
          (interval) =>
            interval.endTimeInMinutes - 60 >= interval.startTimeInMinutes
        );
      },
      {
        message: "O intervalo de tempo deve ser de no mínimo 1 hora!",
      }
    ),
});

type timeIntervalsFormInput = z.input<typeof timeIntervalFormSchema>;
type timeIntervalsFormOutput = z.output<typeof timeIntervalFormSchema>;

export default function TimeIntervals() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { isSubmitting, errors },
  } = useForm<timeIntervalsFormInput>({
    resolver: zodResolver(timeIntervalFormSchema),
    defaultValues: {
      intervals: [
        { weekDay: 0, enable: false, startTime: "08:00", endTime: "18:00" },
        { weekDay: 1, enable: true, startTime: "08:00", endTime: "18:00" },
        { weekDay: 2, enable: true, startTime: "08:00", endTime: "18:00" },
        { weekDay: 3, enable: true, startTime: "08:00", endTime: "18:00" },
        { weekDay: 4, enable: true, startTime: "08:00", endTime: "18:00" },
        { weekDay: 5, enable: true, startTime: "08:00", endTime: "18:00" },
        { weekDay: 6, enable: false, startTime: "08:00", endTime: "18:00" },
      ],
    },
  });

  const router = useRouter();

  const weekDays = getWeekDays();

  const { fields } = useFieldArray({
    control,
    name: "intervals",
  });

  const intervals = watch("intervals");

  async function handleSetTimeIntervals(data: any) {
    const { intervals } = data as timeIntervalsFormOutput;
    
    await api.post("/users/time-intervals", {
      intervals,
    })

    await router.push("/register/update-profile")
  } 

  return (
    <Container>
      <Header>
        <Heading as="strong">Quase lá!</Heading>
        <Text as="p">
          Defina o intervalo de horários que você está disponível em cada dia da
          semana.
        </Text>
        <MultiStep size={4} currentStep={3} />
      </Header>
      <IntervalBox onSubmit={handleSubmit(handleSetTimeIntervals)}>
        <IntervalContainer>
          {fields.map((field, index) => {
            return (
              <IntervalItem key={field.id}>
                <IntervalDay>
                  <Controller
                    name={`intervals.${index}.enable`}
                    control={control}
                    render={({ field }) => {
                      return (
                        <Checkbox
                          onCheckedChange={(checked) => {
                            field.onChange(checked === true);
                          }}
                          checked={field.value}
                        />
                      );
                    }}
                  />
                  <Text as="span">{weekDays[field.weekDay]}</Text>
                </IntervalDay>
                <IntervalInputs>
                  <TextInput
                    type="time"
                    step={60}
                    disabled={intervals[index].enable === false}
                    {...register(`intervals.${index}.startTime`)}
                  />
                  <TextInput
                    type="time"
                    step={60}
                    disabled={intervals[index].enable === false}
                    {...register(`intervals.${index}.endTime`)}
                  />
                </IntervalInputs>
              </IntervalItem>
            );
          })}
        </IntervalContainer>
        {errors.intervals && (
          <FormError>
            <Warning size={28} />
            {errors.intervals.message}
          </FormError>
        )}
        <Button type="submit" disabled={isSubmitting}>
          Próximo passo
          <ArrowRight />
        </Button>
      </IntervalBox>
    </Container>
  );
}
