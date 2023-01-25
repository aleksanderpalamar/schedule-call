import { zodResolver } from "@hookform/resolvers/zod";
import { TextArea, TextInput } from "@ignite-ui/react";
import { Button } from "@palamar-ui/react";
import { CalendarBlank, Clock } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { ConfirmForm, FormActions, FormError, FormHeader } from "./styles";

const confirmFormSchema = z.object({
  name: z.string().min(3, { message: "Nome deve ter no mínimo 3 caracteres" }),
  email: z.string().email({ message: "Digite um e-mail válido" }),
  observations: z.string().nullable(),
});

type ConfirmFormData = z.infer<typeof confirmFormSchema>;

export function ConfirmStep() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ConfirmFormData>({
    resolver: zodResolver(confirmFormSchema),
  });

  function handleConfirmScheduling(data: ConfirmFormData) {
    console.log(data);
  }

  return (
    <ConfirmForm as="form" onSubmit={handleSubmit(handleConfirmScheduling)}>
      <FormHeader>
        <p>
          <CalendarBlank />
          21 de Janeiro de 2023
        </p>
        <p>
          <Clock />
          18:00h
        </p>
      </FormHeader>
      <label>
        <p>Nome completo</p>
        <TextInput
          prefix="schedulecall.com/"
          placeholder="Seu nome"
          {...register("name")}          
        />
        {errors.name && <FormError>{errors.name.message}</FormError>}
      </label>
      <label>
        <p>Endereço de e-mail</p>
        <TextInput placeholder="Seu e-mail" {...register("email")} />
        {errors.email && <FormError>{errors.email.message}</FormError>}
      </label>
      <label>
        <p>Observações</p>
        <TextArea {...register("observations")} />
      </label>
      <FormActions>
        <Button type="button" variant="tertiary">
          Cancelar
        </Button>
        <Button type="submit" className="confirm" disabled={isSubmitting}>
          Confirmar agendamento
        </Button>
      </FormActions>
    </ConfirmForm>
  );
}
