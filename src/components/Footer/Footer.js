import Boton from '../Boton/Boton'
import Input from '../input/Input'
import styles from './Footer.module.css'
import instagram from '../../imagenes/iconos/instagramGris.png'
import facebook from '../../imagenes/iconos/facebookGris.png'
import twitter from '../../imagenes/iconos/twitterGris.png'
import youtube from '../../imagenes/iconos/youtubeGris.png'
import SeparadorChico from '../SeparadorChico/SeparadorChico'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

export default function Footer(props){
  const Catalogos = useSelector(state=>state.Catalogo)
  useEffect(()=>{
    console.log(Catalogos);
  },[Catalogos])
  const navigate = useNavigate()
  return(
    <div className={styles.container}>
      {props.contacto?<div className={styles.top}>
        <h3 className={styles.title}>¿Quieres vender productos Hudson?</h3>
        <Boton text='CONTACTANOS' ruta='../Contacto'/>
      </div>:null}
      <div className={styles.mobile}>
        <div className={styles.medium}>
          <h3 className={styles.subscription}>SUBSCRIPCION A NEWSLETTER</h3>
          <h3 className={styles.recibirMail}>Recibe en tu email las novedades sobre nuevos productos, recetas y consejos culinarios.</h3>
        </div>
        <div className={styles.bottom}>
          <Input placeholder='Su email, por favor'/>
          <Boton text='SUSCRIBIRME' relleno />
        </div>
        <h5 className={styles.copyright}>Copyright © 2022 Hudson Kitchenware.</h5>
      </div>
      {/* ----------DESKTOP---------- */}
      <div className={styles.Desktop}>
        <div className={styles.topDesktop}>
          <h3 className={`${styles.subscription} ${styles.subscriptionDesktop}`}>¡RECIBE LAS NOVEDADES!</h3>
          <input  placeholder='Su email, por favor' autoComplete='false' className={styles.input}/>
          <Boton text='SUSCRIBIRME' relleno />
          <div className={styles.linksLogos}>
            <img src={instagram} className={styles.linkLogo}/>
            <img src={facebook} className={styles.linkLogo}/>
            <img src={twitter} className={styles.linkLogo}/>
            <img src={youtube} className={styles.linkLogo}/>
          </div>
        </div>
        <div className={styles.bottomFondo}>

        <div className={styles.bottomDesktop}>
          <div className={styles.left}>
            <h3 className={styles.bottomTitle}>Productos</h3>
            <span className={styles.links}>Coccion y horneado</span>
            <span className={styles.links}>Cafe, te y mate</span>
            <span className={styles.links}>Utensilios</span>
            <span className={styles.links}>Vajilla</span>
            <span className={styles.links}>Reposteria</span>
            <span className={styles.links}>Organizadores</span>
          </div>


          <div className={styles.center}>
            <h3 className={styles.bottomTitle}>Catálogo</h3>
            {Catalogos?.map((elem,index)=>{
              return <span onClick={e=>navigate(`../Catalogo/${elem.title}`)} key={index} className={styles.links}>{elem.title}</span>
            })}
            {/* <span className={styles.links}>Línea Acero al Carbono</span>
            <span className={styles.links}>Línea Vidrio</span>
            <span className={styles.links}>Línea Vintage</span>
            <span className={styles.links}>Línea Acero al Carbono</span>
            <span className={styles.links}>Línea Vidrio</span>
            <span className={styles.links}>Línea Vintage</span>
            <span className={styles.links}>Línea Vidrio</span>
            <span className={styles.links}>Línea Vintage</span> */}
          </div>


          <div className={styles.right}>

            <div className={styles.containers}>
              <h3 className={styles.bottomTitle}>Hudson</h3>
              <span className={styles.links} onClick={()=>navigate('../Inspirate/1')}>Inspirate</span>
              <span className={styles.links} onClick={()=>navigate('../Uso_Y_Cuidados')}>Uso y cuidados</span>
              <span className={styles.links} onClick={()=>navigate('../Nosotros')}>Nosotros</span>
              <span className={styles.links}>Contacto</span>
            </div>

            <div className={`${styles.containers} ${styles.containerBottom}`}>
              <h3 className={styles.bottomTitle}>Tiendas Online</h3>
              <span className={styles.links}>Argentina</span>
              <span className={styles.links}>Uruguay</span>
              <span className={styles.links}>USA</span>
            </div>
          </div>


        </div>
        </div>
        <div className={styles.copyrightDesktop}>
            <SeparadorChico/>
            <h5 className={styles.copyright}>Copyright © 2022 Hudson Kitchenware.</h5>
        </div>

      </div>
      <div>

      </div>
    </div>
  )
}