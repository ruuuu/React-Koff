import s from "./Developers.module.scss";


export const Developers = () => {

   return (
      <ul className={s.developers}>
         <li className={s.item}>
            Designer: &nbsp; <a className={s.link} href="https://t.me/Mrshmallowww" target="_blank" rel="noreferrer"> Anastasia Ilina </a>
         </li>

         <li className={s.item}>
            Developer: &nbsp; <a className={s.link} href="https://t.me/rufi99" target="_blank" rel="noreferrer"> Rufina </a>
         </li>
      </ul>
   )
}