import styles from './Circulo.module.css'


export default function Circulo (props){

  return(
    <div className={styles.container}>
      <a className={styles.subContainer} href={props?.ruta}>
      <div className={styles.Circulo}>
        <img alt='' className={styles.Img} src={props.srcImg}/>
      </div>
        <span className={styles.label}>{props.label}</span>
      </a>

    </div>
  )

}