import Boton from '../Boton/Boton'
import Input from '../input/Input'
import styles from './Footer.module.css'


export default function Footer(){


  return(
    <div className={styles.container}>
      <div className={styles.top}>
        <h3 className={styles.title}>¿Quieres vender productos Hudson?</h3>
        <Boton text='CONTACTANOS' />
      </div>
      <div className={styles.medium}>
        <h3 className={styles.subscription}>SUBSCRIPCION A NEWSLETTER</h3>
        <h3 className={styles.recibirMail}>Recibe en tu email las novedades sobre nuevos productos, recetas y consejos culinarios.</h3>
      </div>
      <div className={styles.bottom}>
        <Input/>
        <Boton text='SUSCRIBIRME' relleno />
      </div>
      <h5 className={styles.copyright}>Copyright © 2022 Hudson Kitchenware.</h5>
    </div>
  )
}