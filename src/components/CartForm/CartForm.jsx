import s from './CartForm.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { submitCartForm } from '../../store/formCart/formCart.slice';



// форма отправки заказа в Корзине
// испотльзуем библиотетку react-hook-form


export const CartForm = () => {


   const dispatch = useDispatch();  
   const navigate = useNavigate();               // хук для перехода на указанный урл
   
   const { register, handleSubmit, formState: {errors} } = useForm();  // useForm- хук котрый управляет формой, register это функция для работы с полями формы, handleSubmit-нужнв будет для отпрвки формы, она отключит перезагрузку станицы, соберет все значения полей  офрмы по атрибуту name
   //console.log('formState ', formState)
   
   const orderSatatus = useSelector(state => state.formCart);              // задает доступ к state { loading, error, success, orderId }

   useEffect(() => {  // в компоненте нельзя вызвать асинхронную функию(fetchProduct), а внутри useEffect() можно 
      if(orderSatatus.success){
         navigate(`/order/${orderSatatus.orderId}`)               // переход на страницу  /order/${orderSatatus.orderId}
      }
          
   }, [ orderSatatus, navigate ]);  // коллбэк вызывается когда  меняется orderSatatus, navigate нужен чтобы после отправки перейти на др станицу
  


   const onSubmit = (data) => {  // отправа данных формы заказа
      dispatch(submitCartForm(data))
   }




   return (
      <form className={s.form} id="orderForm" onSubmit = {handleSubmit(onSubmit)}>
         <h3 className={s.subtitle}> Данные для доставки </h3>

         <fieldset className={s.fieldsetInput}>
            <label>
                                                                                          {/* троеточие перед register(это есть в доке), тк она возвращает несколько пропсов */}
               <input className={s.input} type="text" placeholder="Фамилия Имя Отчество"  {...register('name', {required: true})} />  {/* name это значение атрибута name */}
               { errors.name && <p className={s.error}> Это поле обязательное </p> }               {/* если  errors.name true, то выдаст ошибку */}
            </label>

            <label>                                                                
               <input className={s.input} type="tel"  placeholder="Телефон"  {...register('phone', {required: true})}  />  {/* phone это значение атрибута name(name=phone) */}
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
               <textarea className={s.textarea}  placeholder="Комментарий к заказу" {...register('comments')} ></textarea>
            </label>
         </fieldset>


         <fieldset className={s.fieldsetRadio} >
            <legend className={s.legend}> Доставка </legend>

            <label className={s.radio}>
               <input className={s.radioInput} type="radio"  value="delivery" {...register('deliveryType', {required: true})} /> Доставка       {/* name="deliveryType" */}
            </label>

            <label className={s.radio}>
               <input className={s.radioInput} type="radio"  value="pickup" {...register('deliveryType', {required: true})} /> Самовывоз     {/* name="deliveryType" */}
            </label>
            { errors.deliveryType && <p className={s.error}> Выберите тип доставки </p> }
         </fieldset>


         <fieldset className={s.fieldsetRadio}>
            <legend className={s.legend}> Оплата </legend>

            <label className={s.radio}>
               <input className={s.radioInput} type="radio"  value="card" {...register('paymentType', {required: true})}  /> Картой при получении     {/* name="paymentType" */}
            </label>

            <label className={s.radio}>
               <input className={s.radioInput} type="radio"  value="cash"  {...register('paymentType', {required: true})}  /> Наличными при получении        {/* name="paymentType" */}
            </label>
         </fieldset>
      </form>
      )
}