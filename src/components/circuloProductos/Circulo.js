import styles from './Circulo.module.css'
// LAS IMAGENES PARA ESTE CIRCULO TIENEN QUE SER DE 400x400 PARA EL DISEÑO MOBILE

export default function Circulo (props){

  return(
    <div className={styles.container}>
      <a className={styles.subContainer} href={props?.ruta}>
      <div className={styles.Circulo}>
        <img alt='' draggable={false} className={styles.Img} src={props.srcImg}/>
      </div>
        <span className={styles.label}>{props.label}</span>
      </a>

    </div>
  )

}