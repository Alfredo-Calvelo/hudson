import Boton from '../Boton/Boton'
import Input from '../input/Input'
import styles from './Footer.module.css'
import instagram from '../../imagenes/iconos/instagramGris.png'
import facebook from '../../imagenes/iconos/facebookGris.png'
import twitter from '../../imagenes/iconos/twitterGris.png'
import youtube from '../../imagenes/iconos/youtubeGris.png'
import SeparadorChico from '../SeparadorChico/SeparadorChico'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { EnviarMail, faltaCompletarCartel } from '../../redux/actions'
import AsteriscoObligatorio from '../AsteriscoObligatorio/AsteriscoObligatorio'

export default function Footer(props){
  const Catalogos = useSelector(state=>state.Catalogo)
  const navigate = useNavigate()
  const instagramUser = useSelector(state=>state?.social?.instagramUser)
  const CategoriasHome = useSelector(state=>state.CategoriasHome)
  const [categoriasFinales, setCategoriasFinales]= useState([])
  const [email, setEmail] = useState()
  const dispatch = useDispatch()
  useEffect(()=>{
    if (CategoriasHome){
      let categoriasFinales =[]
      CategoriasHome.map((elem)=>{
        categoriasFinales.push({title:elem.title,ruta:elem.link, nueva:true, tipo:'producto'})
      })
      setCategoriasFinales(categoriasFinales)
    }
  },[CategoriasHome])

  const Tiendas = useSelector(state=>state.Tiendas)
  const [tiendasFinales, setTiendasFinales] = useState([])
  useEffect(()=>{
    if (Tiendas && Tiendas[0]?.tiendas) {
      let copiaTiendas =[] 
      Tiendas[0].tiendas.map((elem, index)=>{
        copiaTiendas.push({title:elem.title, link:elem.URL, tipo:'producto'})
      })
      
      setTiendasFinales(copiaTiendas)
    }
  },[Tiendas])
  function dispatchMail(params) {
    if (!email) {
      dispatch(faltaCompletarCartel(true))
    }
    dispatch(EnviarMail({email:email, tipo:'Subscripcion'}))
  }
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
          <Input obligatorio value={email} setValue={setEmail} placeholder='Email'/>
          <Boton text='SUSCRIBIRME' click={dispatchMail} relleno />
        </div>
        <h5 className={styles.copyright}>Copyright © 2022 Hudson Kitchenware.</h5>
      </div>
      {/* ----------DESKTOP---------- */}
      <div className={styles.Desktop}>
        <div className={styles.topDesktop}>
          <h3 className={`${styles.subscription} ${styles.subscriptionDesktop}`}>¡RECIBE LAS NOVEDADES!</h3>
          <div className={styles.inputMail}>
            <input value={email}  onChange={e=>setEmail(e.target.value)}  placeholder='Email' autoComplete='false' className={styles.input}/>
            <AsteriscoObligatorio/>
          </div>
          <Boton text='SUSCRIBIRME' click={dispatchMail} relleno />
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
              categoriasFinales?.map((elem,index)=>{
                return(
                    <a key={index} target='_blank' href={elem.ruta==="undefined"?null:elem.ruta.includes('https') || elem.ruta.includes('http')?elem.ruta:`https://${elem.ruta}` } className={styles.links}>{elem.title}</a>
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
              {tiendasFinales.map((elem, index)=>{
                return(<a target='_blank' key={index} href={elem.link==='undefined'?null:elem.link?.includes('https') || elem.link?.includes('http')?elem.link:`https://${elem.link}` } className={styles.links}> {elem.title} </a>)
              })}
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