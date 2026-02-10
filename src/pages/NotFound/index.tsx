import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Heading } from "@/components/Heading";
import { Logo } from "@/components/Logo";
import { Menu } from "@/components/Menu";

export const NotFound = () => {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu icon />
      </Container>
      <Container>
        <Heading>404 - Página nao encontrada 🚀</Heading>
        <Container>
          <span>
            Opa! Parece que a página que você está tentando acessar não existe.
            Talvez ela tenha tirado férias, resolvido explorar o universo ou se
            perdido em algum lugar entre dois buracos negros. 🌌
            <br />
            <br />
            Mas calma, você não está perdido no espaço (ainda). Dá pra voltar em
            segurança para a
            <a href="#" style={{ color: "var(--primary)" }}>
              página principal
            </a>
            ou
            <a
              href="#"
              style={{ color: "var(--accent-color)", textDecoration: "none" }}
            >
              para o histórico
            </a>
            — ou pode ficar por aqui e fingir que encontrou uma página secreta
            que só os exploradores mais legais conseguem acessar. 🧭✨
            <br />
            <br />
            Se você acha que essa página deveria existir (ou se quiser bater um
            papo sobre viagem no tempo e buracos de minhoca), é só entrar em
            contato. Caso contrário, use o menu para voltar ao mundo real.
            <br />
            <br />
            Enquanto isso, fica aqui uma reflexão:
            <br />
            “Se uma página não existe na internet, será que ela existiu de
            verdade?” 🤔💭
          </span>
        </Container>
        <Container>
          <Footer />
        </Container>
      </Container>
    </>
  );
};
