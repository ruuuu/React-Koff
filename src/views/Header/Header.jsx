// компонент
import { Container } from "../Container/Container";
import s from "./Header.module.scss";
import { Logo } from "../../components/Logo/Logo";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import { Navigation } from "../../components/Navigation/Navigation";




export const Header = () => {

  return (
    // названия классов будут неповторяющимися, если использваоть {s.}
    <header className={s.header}>   
      <Container className={s.container}>
        <div className={s.logo}>
          <Logo />
        </div>

        <div className={s.search}>
          <SearchForm />
        </div>

        <div className={s.navigation}>
          <Navigation />
        </div>
      </Container>
    </header>
  );
};
