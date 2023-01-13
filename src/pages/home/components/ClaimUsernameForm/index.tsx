import { Button, Text } from "@palamar-ui/react";
import { ArrowRight } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormAnnotation, TextInput } from "./styles";
import { useRouter } from "next/router";

const claimUsernameSchema = z.object({
  username: z
    .string()
    .min(3, { message: "O usuário deve ter pelo menos 3 letras" })
    .regex(/^([a-z\\-]+)$/i, {
      message: "O usuário pode ter apenas letras e hifens.",
    })
    .transform((username) => username.toLowerCase()),
});

type ClaimUsernameFormData = z.infer<typeof claimUsernameSchema>;

export function ClaimUsernameForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ClaimUsernameFormData>({
    resolver: zodResolver(claimUsernameSchema),
  });

  const router = useRouter();

  async function handleClaimUsername(data: ClaimUsernameFormData) {
    const { username } = data;

    await router.push(`/register?username=${username}`);
  }

  return (
    <>
      <Form onSubmit={handleSubmit(handleClaimUsername)}>
        <TextInput
          size={1}
          prefix="palamar.app/"
          placeholder="Digite seu nome de usuário"
          {...register("username")}
        />
        <Button size="sm" type="submit" disabled={isSubmitting}>
          Reservar usuário
          <ArrowRight />
        </Button>
      </Form>
      <FormAnnotation>
        <Text as="span" size="sm">
          {errors.username
            ? errors.username.message
            : "Digite o nome de usuário que deseja reservar"}
        </Text>
      </FormAnnotation>
    </>
  );
}
