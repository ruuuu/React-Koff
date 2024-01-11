// компонент
import s from "./Footer.module.scss";
import { Container } from "../Container/Container";
import { Logo } from "../../components/Logo/Logo";
import { Contacts } from "../../components/Contacts/Contacts";
import { DeveloperList } from "../../components/DeveloperList/DeveloperList";



export const Footer = () => {

  return (
    <footer className={s.footer}>
       <Container className={s.footer__container}>
          <div className={s.footer__logo}>
            <Logo />
          </div>

          <div className={s.footer__contacts}>
            <Contacts />
          </div>

          <div className={s.footer__developerList}>
            <DeveloperList />
          </div>

          <p className={s.footer__copyright}>@ Koff, 2023 </p>
      </Container>
    </footer>
  );
};

