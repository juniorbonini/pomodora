import type { MainProps } from "@/types/Main/main";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { Menu } from "@/components/Menu";
import { Footer } from "@/components/Footer";

export const Main = ({ children }: MainProps) => {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu icon />
      </Container>

      {children}

      <Container>
        <Footer />
      </Container>
    </>
  );
};
