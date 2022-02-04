import styles from './CardCatalogo.module.css'
import lineaCobre from '../../imagenes/lineaCobre.png'
export default function CardCatalogo(){

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={lineaCobre} className={styles.img} />
      </div>
      <div className={styles.description}>
        <h2 className={styles.title}>CONVERTITE EN UN MASTERCHEF</h2>
          <h3 className={styles.subtitle}>Crea con Hudson como lo hacen los celebrities del Show más famoso de la TV con nuestras líneas:</h3>
        <ul className={styles.lista}>
          <li>Línea profesional Carbon Steel.</li>
          <li>Línea Aluminio con Antiadherente.</li>
          <li>Línea Cobre con Antiadherente Cerámico.</li>
          <li>Línea Vintage con Antiadherente Cerámico.</li>
          <li>Línea vidrio para horno.</li>
          <li>Línea de Utensilios y Kitchen Tools.</li>
          <li>Línea de Ralladores</li>
          <li>Línea de Pavas y Cafeteras.</li>
        </ul>
      </div>
    </div>
  )


}