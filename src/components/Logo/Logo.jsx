import logoSvg from './logo.svg';
import s from './Logo.module.scss';
import { Link } from 'react-router-dom';
//import classNames from 'classnames';

export const Logo = () => { // передаем {className}

   return (
      // <a className={classNames(s.link, className)}>
         <Link className={s.link} to="/">
                                       {/* "/img/logo.svg" */}
            <img className={s.logo} src={logoSvg} alt="Логотип мебельного маркета Khoff" />  {/* картинки из папки public */}
         </Link>
   )
}