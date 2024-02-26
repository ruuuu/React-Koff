// компонент
import s from './Container.module.scss';


// в папке views добавбляем  компоненты которые не дублируются
export const Container = (props) => props.className ? ( <div className={`${s.container} ${props.className}`}> {props.children} </div> ) : ( <div className={s.container}> {props.children} </div> )     // children-внутренность <Container></Container>
    
  

