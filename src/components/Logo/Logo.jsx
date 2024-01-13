import logoSvg from './logo.svg';
import s from './Logo.module.scss';



export const Logo = () => {

   return (
         <a className={s.link} href="/">
                                       {/* "/img/logo.svg" */}
            <img className={s.logo} src={logoSvg} alt="Логотип мебельного маркета Khoff" />  {/* картинки из папки public */}
         </a>
   )
}