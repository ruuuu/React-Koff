import s from "./Card.module.scss";
import { Container } from "../../views/Container/Container";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../store/product/product.slice.js";
import { Slider } from "../Slider/Slider";
import { FavoriteButon } from "../FavoriteButton/FavoriteButon";
import { AddCartButton } from "../addCartButton/addCartButton";


// в папке components добавляем переиспользуемые компоненты



// страница товара
export const Card = () => {

   const dispatch = useDispatch();      // dispatch  нужен чтобы вызывать action(редьюсеры), после обтрабоки  dispatch, обновляется состояние

   const { productId } = useParams();                          // хук, нужен чтобы получить id товара из урла /product/:productId


   const { data, loading, error } = useSelector((state)=> state.product);  // задает доступ к state = {data, loading, error}, state.product (из store.js).
  

   useEffect(() => {  // в компоненте нельзя вызвать асинхронную функию(fetchProduct), а внутри useEffect() можно 
      dispatch(fetchProduct(productId));
   }, [ dispatch, productId ]);  // коллбэк вызывается когда  меняется productId.  [ dispatch, productId ] - массив зависимостей. Сюда заносятся поля, котрые используютя  вколлбэке
  

   if(!data){
      return <div> Продукт не наден </div>
   }

   if(loading ){  // пока загружается товар
      return <div> Загрузка товара  </div>
   }
  
   if(error){
      return <div> Ошибка: { error }</div>
   }



   return (
     
      <section className={s.card}> 
         <Container className={s.container}>       {/* Грид контегнйер  */}
            <h2 className={s.title}> {data.name} </h2>  

            <Slider data={data}  />               

            <div className={s.info}> {/* Грид элемент  */}
               <p className={s.price}> {data.price.toLocaleString()}&nbsp;Р </p>         
               <p className={s.article}> {`арт. ${data.article}`} </p>   

                <div className={s.characteristics}>     
                     <h3 className={s.characteristicsTitle}> Общие характеристики </h3>
                     <table className={s.table}>
                        <tbody>
                           { data?.characteristics.map((item, i) => (  
                              <tr className={s.row} key={i}>
                                 <td className={s.field}> {item[0]} </td>
                                 <td className={s.value}> {item[1]} </td>
                              </tr>
                              ))
                           }
                        </tbody>
                     </table>

                     <div className={s.btns}>
                        <AddCartButton  className={s.btn} id={data.id} />    
                        <FavoriteButon  className={s.like}  id={data.id} />
                     </div>
               </div>
            </div>
         </Container>
      </section> 
   )

}