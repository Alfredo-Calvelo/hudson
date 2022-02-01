import styles from './Circulo.module.css'


export default function Circulo (props){

  return(
    <div className={styles.container}>
    <div className={styles.Circulo}>
      <img className={styles.Img} src={props.srcImg}/>
    </div>
      <label className={styles.label}>{props.label}</label>
    </div>
  )

}