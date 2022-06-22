import styles from './Contacto.module.css'
import Gradient from "../../components/Gradient/Gradient";
import ContactoImg from '../../imagenes/HEADER BANNER CONTACTO.jpg'
import Input from '../../components/input/Input';
import { useEffect, useState } from 'react';
import {AiOutlineCheck} from 'react-icons/ai'
import Boton from '../../components/Boton/Boton'
import Destacado from '../../components/destacados/Destacado';
import Footer from '../../components/Footer/Footer';
import SeparadorChico from '../../components/SeparadorChico/SeparadorChico';
import Inspirado from '../../components/Inpirado/Inspirado';


export default function Contacto (){
  document.title='Hudson | Contacto'
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  const [revendedor, setRevendedor]=useState(false)
  
  
  const [visible, setVisible ] = useState(false)
  useEffect(()=>{
    setVisible(true)
  })


  return(
    <div>
      <Gradient/>
      <div className={`
      ${
        !visible
        ?styles.Invisible
        :styles.Visible
        }
        `}>
        <div className={styles.header}>
          <h2 className={styles.title}>CONTACTO</h2>
          <div className={styles.headerImgDesktop}>
          </div>
        </div>
        <div className={styles.desktopInputs}>

          <div className={styles.preguntas}>
            <div>
              <h3>¿Cómo podemos ayudarte?</h3>
              <p>En Hudson queremos escucharte, envianos cualquier consulta, comentario u observación a cerca de nuestros productos o servicios y te responderemos a la brevedad.</p>
            </div>
            <div>
              <h4>¿Estas interesado en revender productos Hudson?</h4>
              <p>
              Escribanos para enterarte de las condiciones para ser revendedor de nuestras Baterías, Cacerolas, Sartenes, Woks y demás productos de cocina.
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
              <Boton text='ENVIAR' relleno/>
          </div>
        </div>
      </div>
      <SeparadorChico/>
      <Inspirado title='Hudson te inspira'/>
      <Destacado leftTitle='Fuente Cuadrada' leftDescription='Vidrio templado' 
      rightDescription='Antiadherente Cerámico' rightTitle='Bifera 26cm' />
      <Footer/>
    </div>
  )


}