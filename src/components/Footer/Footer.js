import Boton from '../Boton/Boton'
import Input from '../input/Input'
import styles from './Footer.module.css'
import instagram from '../../imagenes/iconos/instagramGris.png'
import facebook from '../../imagenes/iconos/facebookGris.png'
import twitter from '../../imagenes/iconos/twitterGris.png'
import youtube from '../../imagenes/iconos/youtubeGris.png'
import SeparadorChico from '../SeparadorChico/SeparadorChico'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

export default function Footer(props){
  const Catalogos = useSelector(state=>state.Catalogo)
  const navigate = useNavigate()
  const instagramUser = useSelector(state=>state?.social?.instagramUser)
  const Productos = useSelector(state=>state.Producto)
  const [prodFinales, setProductosFinales] = useState()
  useEffect(()=>{
    if (Productos && Productos.length > 0) {
      let prodOrdenados = Productos.sort(function(a,b){
        if (a.ID > b.ID) {
          return 1
        }
        if(a.ID < b.ID){
          return -1
        }
      })
      let prodFinales =[]
      prodOrdenados.map((elem)=>{
        prodFinales.push({title:elem.nombre,ruta:elem.link, nueva:true, tipo:'producto'})
      })
      setProductosFinales(prodFinales)
    }
  },[Productos])

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
            <a href={`https://www.instagram.com/${instagramUser}/`} target='_blank'><img src={instagram} className={styles.linkLogo}/></a>
            <a href='https://www.facebook.com/HudsonKitchenware/' target='_blank'><img src={facebook} className={styles.linkLogo}/></a>
            <a href='https://twitter.com/HudsonKitchen_' target='_blank'><img src={twitter} className={styles.linkLogo}/></a>
            <a href='https://www.youtube.com/channel/UCmATVdmApr3S6W-rGrxyitQ' target='_blank'><img src={youtube} className={styles.linkLogo}/></a>
          </div>
        </div>
        <div className={styles.bottomFondo}>

        <div className={styles.bottomDesktop}>
          <div className={styles.left}>
            <h3 className={styles.bottomTitle}>Productos</h3>
            {
              prodFinales?.map((elem,index)=>{
                return(
                    <a target='_blank' href={elem.ruta.includes('https') || elem.ruta.includes('http')?elem.ruta:`https://${elem.ruta}` } className={styles.links}>{elem.title}</a>
                )
              })
            }
          </div>


          <div className={styles.center}>
            <h3 className={styles.bottomTitle}>Catálogo</h3>
            {Catalogos?.map((elem,index)=>{
              return <Link to={`../Catalogo/${elem.title}`} key={index} className={styles.links}>{elem.title}</Link>
            })}
          </div>


          <div className={styles.right}>

            <div className={styles.containers}>
              <h3 className={styles.bottomTitle}>Hudson</h3>
              <Link className={styles.links} to={'../Inspirate/1'}>Inspirate</Link>
              <Link className={styles.links} to={'../Uso_Y_Cuidados'}>Uso y cuidados</Link>
              <Link className={styles.links} to={'../Nosotros'}>Nosotros</Link>
              <Link className={styles.links} to={'../Contacto'}>Contacto</Link>
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