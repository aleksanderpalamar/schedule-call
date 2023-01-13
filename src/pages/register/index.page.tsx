import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Heading, MultiStep, Text } from "@palamar-ui/react";
import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { ArrowRight } from "phosphor-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { api } from "../../lib/axios";
import { Container, Form, FormError, Header, TextInput } from "./styles";

const registerFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: "O usuário deve ter pelo menos 3 letras" })
    .regex(/^([a-z\\-]+)$/i, {
      message: "O usuário pode ter apenas letras e hifens.",
    })
    .transform((username) => username.toLowerCase()),
  name: z.string().min(3, { message: "O nome deve ter pelo menos 3 letras" }),
});

type RegisterFormData = z.infer<typeof registerFormSchema>;

export default function Register() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  });

  const router = useRouter();

  useEffect(() => {
    if (router.query?.username) {
      setValue("username", String(router.query.username));
    }
  }, [router.query?.username, setValue]);

  async function handleRegister(data: RegisterFormData) {
    try {
      await api.post('/users', {
        name: data.name,
        username: data.username,
      })

      await router.push('/register/connect-calendar')
    } catch (err) {
      if (err instanceof AxiosError && err?.response?.data?.message) {
        alert(err.response.data.message)
        return
      }
      console.log(err)
    }
  }

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
      <Form onSubmit={handleSubmit(handleRegister)}>
        <label>
          <Text as="span">Nome do Usuário</Text>
          <TextInput
            prefix="palamar.app/"
            placeholder="Confirme o seu nome de usuário"
            {...register("username")}
          />

          {errors.username && <FormError>{errors.username.message}</FormError>}
        </label>
        <label>
          <Text as="span">Nome Completo</Text>
          <TextInput placeholder="Seu nome" {...register("name")} />
          {errors.name && <FormError>{errors.name.message}</FormError>}
        </label>

        <Button type="submit" disabled={isSubmitting}>
          Próximo passo
          <ArrowRight />
        </Button>
      </Form>
    </Container>
  );
}
