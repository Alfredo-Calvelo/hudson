import styles from './Contacto.module.css'
import Gradient from "../../components/Gradient/Gradient";
import ContactoImg from '../../imagenes/Contacto.jfif'
import Input from '../../components/input/Input';
import { useEffect, useState } from 'react';
import {AiOutlineCheck} from 'react-icons/ai'
import Boton from '../../components/Boton/Boton'
import Destacado from '../../components/destacados/Destacado';
import Footer from '../../components/Footer/Footer';
import SeparadorChico from '../../components/SeparadorChico/SeparadorChico';
import Inspirado from '../../components/Inpirado/Inspirado';


export default function Contacto (){
  document.title='Hudson | Contaco'
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  const [revendedor, setRevendedor]=useState(false)
  
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
      <Inspirado title='Hudson te inspira'/>
      <div className={styles.destacado}>
        <Destacado leftTitle='Fuente Cuadrada' leftDescription='Vidrio templado' 
        rightDescription='Antiadherente Cerámico' rightTitle='Bifera 26cm' />
      </div>
      <Footer/>
    </div>
  )


}