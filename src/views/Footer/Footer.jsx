// компонент
import s from "./Footer.module.scss";
import { Container } from "../Container/Container";
import { Logo } from "../../components/Logo/Logo";
import { Contacts } from "../../components/Contacts/Contacts";
import { Developers } from "../../components/Developers/Developers";


// в папке views добавбляем  компоненты которые не дублируются

export const Footer = () => {

  return (
    <footer className={s.footer}>
       <Container className={s.container}>
          <div className={s.logo}>
            <Logo />
          </div>

          <div className={s.contacts}>
            <Contacts />
          </div>

          <div className={s.developers}>
            <Developers />
          </div>

          <p className={s.copyright}>@ Koff, 2024 </p>
      </Container>
    </footer>
  );
};

