import { Header } from "./views/Header/Header";
import { Footer } from "./views/Footer/Footer";
import { Main } from "./views/Main/Main";


const App = () => {

  return (
    <>            {/* либо писать так <React.Fragment></React.Fragment> */}
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;
