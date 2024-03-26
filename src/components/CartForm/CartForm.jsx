import s from "./CartForm.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";


// форма отправки заказа в Корзине
// испотльзуем библиотетку react-hook-form


export const CartForm = () => {


   const dispatch = useDispatch();  
   const navigate = useNavigate();               // хук для перехода на указанный урл
   
   const { register, handleSubmit, formState: {errors} } = useForm();  // useForm- хук котрый управляет формой, register это функция для работы с полями формы
   console.log('errors ', formState.errors)
   
   const orderSatatus = useSelector(state => state.formCart);              // { loading, error, success, orderId }

   useEffect(() => {  // в компоненте нельзя вызвать асинхронную функию(fetchProduct), а внутри useEffect() можно 
      if(orderSatatus.success){
         navigate(`/order/${orderSatatus.orderId}`)               // переход на страницу  /order/${orderSatatus.orderId}
      }
          
   }, [ dispatch, orderSatatus, navigate ]);  // коллбэк вызывается когда  меняется orderSatatus, navigate нужен чтобы после отправки перейти на др станицу
  


   return (
      <form className={s.form} id="order" action="#" method="POST">
         <h3 className={s.subtitle}> Данные для доставки </h3>

         <fieldset className={s.fieldsetInput}>
            <label>
                                                                                          {/* троеточие перед register, тк она возвращает несколько пропсов */}
               <input className={s.input} type="text" placeholder="Фамилия Имя Отчество"  {...register('name', {required: true})} />  {/* name это значение атрибута name */}
               { errors.name && <p className={s.error}> Это поле обязательное </p> }   
            </label>

            <label>                                                                
               <input className={s.input} type="tel"  placeholder="Телефон"  {...register('phone', {required: true})}  />  {/* phone это значение атрибута name */}
               { errors.phone && <p className={s.error}> Это поле обязательное </p> }
            </label>

            <label>
               <input className={s.input} type="email"  placeholder="E-mail" {...register('email', {required: true})} />
               { errors.email && <p className={s.error}> Это поле обязательное </p> }
            </label>

            <label>
               <input className={s.input} type="text"  placeholder="Адрес доставки" {...register('address', {required: true})}  />
               { errors.address && <p className={s.error}> Это поле обязательное </p> }
            </label>

            <label>
               <textarea className={s.textarea}  placeholder="Комментарий к заказу" {...register('comments', {required: true})}  ></textarea>
               { errors.comments && <p className={s.error}> Это поле обязательное </p> }
            </label>
         </fieldset>


         <fieldset className={s.fieldsetRadio} >
            <legend className={s.legend}> Доставка </legend>

            <label className={s.radio}>
               <input className={s.radioInput} type="radio"  value="delivery" /> Доставка
               {...register('deliveryType', {required: true})} 
            </label>

            <label className={s.radio}>
               <input className={s.radioInput} type="radio"  value="pickup" /> Самовывоз
               {...register('deliveryType', {required: true})} 
            </label>
            { errors.deliveryType && <p className={s.error}> Выберите тип доставки </p> }
         </fieldset>


         <fieldset className={s.fieldsetRadio}>
            <legend className={s.legend}> Оплата </legend>

            <label className={s.radio}>
               <input className={s.radioInput} type="radio" name="paymentType" value="card" /> Картой при получении
            </label>

            <label className={s.radio}>
               <input className={s.radioInput} type="radio" name="paymentType" value="cash" /> Наличными при получении
            </label>
         </fieldset>
      </form>
      )
}