import styles from './Contacto.module.css'
import Gradient from "../../components/Gradient/Gradient";
import ContactoImg from '../../imagenes/Contacto.jfif'
import Input from '../../components/input/Input';
import { useEffect, useState } from 'react';
import {AiOutlineCheck} from 'react-icons/ai'
import Boton from '../../components/Boton/Boton'
import Destacado from '../../components/destacados/Destacado';
import imgIzquierda from '../../imagenes/fuenteCuadrada.png'
import imgDerecha from '../../imagenes/bifero26CM.png'
import Footer from '../../components/Footer/Footer';
import RecetaCard from '../../components/RecetaCard/RecetaCard';
import fideos from '../../imagenes/fideos.jfif'
import SeparadorChico from '../../components/SeparadorChico/SeparadorChico';


export default function Contacto (){
  const [revendedor, setRevendedor]=useState(false)
  // useEffect(()=>{
  //   window.scrollTo(0,0)
  // },[])

  
  return(
    <div>
      <Gradient/>
      <div className={styles.header}>
        <h2 className={styles.title}>CONTACTO</h2>
        <img className={styles.headerImg} src={ContactoImg}/>
      </div>
      <div className={styles.preguntas}>
        <div>
          <h3>Dejanos tu mensaje</h3>
          <p>¿Tenés consultas o tuviste un problema con nuestros productos? Queremos escucharte</p>
        </div>
        <div>
          <h4>¿Querés vender productos Hudson?</h4>
          <p>
            Baterías, Cacerolas, Sartenes, Woks y demás productos de cocina al por mayor.
            Escribínos para enterarte de las condiciones para ser revendedor de nuestros productos.
          </p>
        </div>
      </div>


      <div className={styles.info}>
        <Input placeholder='Nombre'/>
        <Input placeholder='email'/>
        <Input placeholder='Teléfono'/>
        <Input placeholder='País' />
        <Input placeholder='Provincia (opcional)'/>
        <div className={styles.empresa}>
          <input id='Empresa' type='checkbox' className={styles.input} onChange={(e)=>{setRevendedor(e.target.checked)}}/>
          <div className={styles.revendedor}>
            <label className={styles.label} htmlFor='Empresa'> 
            {revendedor?<div className={styles.paloma}><AiOutlineCheck/></div>:null}
            </label>
            <h5 className={styles.revendedorText}>Soy revendedor</h5>
          </div>
          <Input placeholder='Empresa (opcional)'/>
        </div>
        <textarea placeholder='Mensaje' className={styles.mensaje}/>
          <Boton dropMenu={false} text='ENVIAR' relleno/>
      </div>
      <SeparadorChico/>
      <div className={styles.inspirado}>
        <div className={styles.titles}>
          <h3>Hudson te Inspira</h3>
          <h5>VER MÁS</h5>
        </div>
        <div className={styles.imagenes}>
          <RecetaCard img={fideos} title='Pasta mediterranea express'/>
          <RecetaCard img={fideos} title='Pasta mediterranea express'/>
        </div>
      </div>

      <div className={styles.destacado}>
        <Destacado leftTitle='Fuente Cuadrada' leftDescription='Vidrio templado' leftImg={imgIzquierda}  
        rightDescription='Antiadherente Cerámico' rightTitle='Bifera 26cm' rightImg={imgDerecha}/>
      </div>
      <Footer/>
    </div>
  )


}