import AliceCarousel from 'react-alice-carousel'
import styles from './UltimasPublicaciones.module.css'


export default function UltimasPublicaciones (props){

  
  return(
    <div className={styles.container}>
      <div className={styles.titles}>
        <h3 className={styles.title}>Últimas publicaciones</h3>
        <h3 className={styles.arroba}>@HUDSONKITCHENWARE</h3>
      </div>
      <div className={styles.mobile}>
        <AliceCarousel
        touchTracking
        mouseTracking
        items={props.items}
        controlsStrategy="alternate"
        autoWidth 
        disableDotsControls
        disableButtonsControls
        paddingLeft={10}
        paddingRight={10}
      />
      </div>
      <div className={styles.desktop}>
        {props.items}
      </div>
    </div>
  )

}