import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Heading, MultiStep, Text, TextInput } from "@palamar-ui/react";
import { ArrowRight } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Container, Form, FormError, Header } from "./styles";

const registerFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: "O usuário deve ter pelo menos 3 letras" })
    .regex(/^([a-z\\-]+)$/i, {
      message: "O usuário deve conter apenas letras e hifens",
    })
    .transform((username) => username.toLowerCase()),
  name: z.string().min(3, { message: "O nome deve ter pelo menos 3 letras" }),
});

type RegisterFormData = z.infer<typeof registerFormSchema>;

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema)
  });

  async function handleRegister(data: RegisterFormData) {}

  return (
    <Container>
      <Header>
        <Heading as="strong">Bem Vindo ao Schedule Call!</Heading>
        <Text as="p">
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois.
        </Text>
        <MultiStep size={4} currentStep={1} />
      </Header>
      <Form 
        onSubmit={handleSubmit(handleRegister)}
      >
        <label>
          <Text as="span">Nome do Usuário</Text>
          <TextInput
            prefix="palamar.app/"
            placeholder="Digite seu nome de usuário"
            {...register("username")}
          />

          {errors.username && (
            <FormError>{errors.username.message}</FormError>
          )}
        </label>
        <label>
          <Text as="span">Nome Completo</Text>
          <TextInput 
            placeholder="Seu nome" 
            {...register("name")}
          />
          {errors.name && (
            <FormError>{errors.name.message}</FormError>
          )}
        </label>

        <Button type="submit" disabled={isSubmitting}>
          Próximo passo
          <ArrowRight />
        </Button>
      </Form>
    </Container>
  );
}
