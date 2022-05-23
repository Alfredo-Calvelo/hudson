import styles from './Nosotros.module.css'
import Gradient from '../../components/Gradient/Gradient'
import grupoGente from '../../imagenes/grupoGente.jfif'
import { createRef, useEffect, useState } from 'react'
import HistoriaCard from '../../components/HistoriaCard/HistoriaCard'
import SeparadorChico from '../../components/SeparadorChico/SeparadorChico'
import Inspirado from '../../components/Inpirado/Inspirado'
import Destacado from '../../components/destacados/Destacado'
import Footer from '../../components/Footer/Footer'
import { useSelector } from 'react-redux'

export default function Nosotros(){
  document.title='Hudson | Conocenos'
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  let imagen1 = createRef()
  let imagen2 = createRef()
  let imagen3 = createRef()
  let imagen4 = createRef()
  let imagen5 = createRef()
  


  let alturaPantalla = useSelector(state=>state.alturaPantalla)
  let vieportHeight = useSelector(state=>state.vieportHeight)

  const [bloque1, setBloque1] = useState(false)
  const [alturaImagen2, setAlturaImagen2] = useState(0)
  const [alturaImagen3, setAlturaImagen3] = useState(0)
  const [alturaImagen4, setAlturaImagen4] = useState(0)
  const [alturaImagen5, setAlturaImagen5] = useState(0)

  
  useEffect(()=>{
    setAlturaImagen2(imagen2.current.offsetTop);
    setAlturaImagen4(imagen4.current.offsetTop);
    setAlturaImagen5(imagen4.current.offsetTop);
    
    setBloque1(true)
  })

  
  return(
    <div >
      <Gradient/>
      <div className={`${styles.bloque} 
      ${
        !bloque1
        ?styles.Invisible
        :styles.Visible
        }
        `}>
        <div className={styles.header }>
          <h2 className={styles.headerTitle}>{'About us'.toUpperCase()}</h2>
          <div className={styles.imgDesktop}>
          </div>
        </div>
        <div className={styles.bajada} >
          <h3 className={styles.title}>{'know us'.toUpperCase()}</h3>
          <h5 className={styles.subTitle}></h5>
          <p className={styles.parrafo}>
          Hudson BK LLC is oriented to new trends in the design and marketing of products for the kitchen and home.
          <br></br>
          <br></br>
          We seek to lead the market by working with professionalism, creativity and confidence, making our company an attractive place for the growth and development of our people.
          </p>
        </div>
      </div>
      <div className={`${styles.bloque} 
      ${
        alturaPantalla + vieportHeight <= alturaImagen4
        ?styles.Invisible
        :styles.Visible
        }
        `}ref={imagen4}>
        
        <div className={styles.imgDesktop1}></div>
        <div className={styles.bajada} >
          <h3 className={styles.title}>{'Our presence'.toUpperCase()}</h3>
          <h5 className={styles.subTitle}></h5>
          <p className={styles.parrafo}>
          In 2010 we began to sell our products in Argentina and actually we are leaders selling kitchen products such as pots, pans, woks, sets and utensils.
          In other categories, such as bakeware, coffe makers, tableware and teapots, we continue to grow steadily accompanied by the recognition of our Brand.
          <br></br>
          <br></br>
          Since 2020 we are present in the Uruguyan market and during 2022, we have proposed to enter the North American market.
          </p>
        </div>
      </div>
      <div className={`${styles.bloque} 
      ${
        alturaPantalla- 100 <= alturaImagen5
        ?styles.Invisible
        :styles.Visible
        }
        `}ref={imagen5}>
        
        <div className={styles.imgDesktop2}></div>
        <div className={styles.bajada} >
          <h3 className={styles.title}>{'Vision, mision y values.'.toUpperCase()}</h3>
          <h5 className={styles.subTitleCard}>Our vision</h5>
          <p className={styles.parrafoCard}>
          Be leaders and trends producers developing  kitchen and home products.
          </p>
          <h5 className={styles.subTitleCard}>Our mision</h5>
          <p className={styles.parrafoCard}>
          Innovate with uses, shapes and colors to make the kitchen and home evolve as a creative space of continuos pleasure.
          </p>
          <h5 className={styles.subTitleCard}>Our values</h5>
          <p className={styles.parrafoCard}>
          <ul>
            <li className={styles.liCard}>We use passion to add value to what we do.</li>
            <li className={styles.liCard}>Creativity in the development of our ideas and precesses.</li>
            <li className={styles.liCard}>Trust in our teams, customers, suppliers and shareholders.</li>
            <li className={styles.liCard}>Efficiency in the management of our resources to achieve our objectives and results.</li>
            <li className={styles.liCard}>Integrity and Credibility in pur actions and decisions.</li>
          </ul>
          </p>
        </div>
      </div>
      <div className={` 
      ${
        alturaPantalla +700  <= alturaImagen2
        ?styles.Invisible
        :styles.Visible
        }
        `} ref={imagen2}>
        <div className={styles.imgDesktop3}>
          </div>
        <div className={styles.bajada}  >
          <h3 className={styles.title}>{'Hudson Brand'.toUpperCase()}</h3>
          <h5 className={styles.subTitle}></h5>
          <p className={styles.parrafo2}>
          Our Brand inspires strenght and confidence. When tou pick up a Hudson producto, yo have the feeling of being in contact with a durable item.
          <br></br><br></br>
          We work to achieve unique products with the right balance betweem innovation and functionality.
          <br></br><br></br>
          We admire chefs who dare to reinvent each dish and explore new flavors for their affections.<br></br>
          We want the kitchen to become a space of encounter and creativity.<br></br>
          We seek to revolutionize gastronomy, and we invete you to join us.<br></br>
          Beacause the table is set. <br></br>
          And because the next dish is always the best.<br></br>
          </p>
        </div>
        <div className={styles.bajada} >
          <h3 className={styles.title}>{'Our Sourcing'.toUpperCase()}</h3>
          <h5 className={styles.subTitle}></h5>
          <p className={styles.parrafo}>
          For more tan ten years, we have mainteined comercial relationships with factories in Asia, Europe, Mexico and Argentina, wich allows us to ensure the maintence of quality and the fulfillment of deliveries.
          <br></br><br></br>
          Our offer is composed of kitchenware ítems, produced in different materials such as aluminum, stainless Steel, oven glass.
          <br></br><br></br>
          Portuguese table ware is parto f our protfolio, together with a wide range of kitchen utensils and plastic ítems, among others.
          <br></br><br></br>
          Our strategy is to sell attractive products made with the latest technologies ensuring good quality at a competitive price.
          </p>
        </div>
      </div>
      
      <SeparadorChico/>
      <Inspirado title='Hudson te inspira'/>
      <Destacado leftTitle='Fuente Cuadrada' leftDescription='Vidrio templado' 
      rightDescription='Antiadherente Cerámico' rightTitle='Bifera 26cm' />
      <Footer contacto/>
    </div>
  )
}