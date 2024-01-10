// компонент
import s from "./Footer.module.scss";


export const Footer = () => {
  return (
    <footer>
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
    </footer>
  );
};
