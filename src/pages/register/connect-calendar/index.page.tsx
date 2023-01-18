import { Button, Heading, MultiStep, Text } from "@palamar-ui/react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { ArrowRight, Check, Warning } from "phosphor-react";
//import { api } from "../../lib/axios";
import { Container, Header } from "../styles";
import { AuthError, ConnectBox, ConnectItem } from "./styles";

export default function ConnectCalendar() {
  const session = useSession();
  const router = useRouter();

  const hasAuthError = !!router.query.error;
  const isSignedIn = session.status === "authenticated";

  async function handleSignIn() {
    await signIn("google");
  }

  return (
    <Container>
      <Header>
        <Heading as="strong">Conecte sua agenda!</Heading>
        <Text as="p">
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </Text>
        <MultiStep size={4} currentStep={2} />
      </Header>
      <ConnectBox>
        <ConnectItem>
          <Text>Google Calendar</Text>
          {isSignedIn ? (
            <Button disabled>
              Conectado
              <Check />
            </Button>
          ) : (
            <Button variant="secondary" onClick={handleSignIn}>
            Conectar
            <ArrowRight />
          </Button>
          )}
        </ConnectItem>

        {hasAuthError && (
          <AuthError>
            <Warning size={28} /> Falha ao se conectar com o Google, verifique se você habilitou as
            permissões de acesso ao Google Calendar. E tente novamente.
          </AuthError>
        )}

        <Button type="submit" disabled={!isSignedIn}>
          Próximo passo
          <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  );
}
