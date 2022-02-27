import RecetaCard from '../RecetaCard/RecetaCard'
import styles from './Inspirado.module.css'
import fideos from '../../imagenes/fideos.jfif'
import AliceCarousel from 'react-alice-carousel'

export default function Inspirado(props){
  const responsive = {
    0: { items: 2 },
    568: { items: 2 },
    1024: { items: 3 },
};
  let items= [
  <RecetaCard img={fideos} title='Pasta mediterranea express'/>,
  <RecetaCard img={fideos} title='Pasta mediterranea express'/>,
  <RecetaCard img={fideos} title='Pasta mediterranea express'/>,
  <RecetaCard img={fideos} title='Pasta mediterranea express'/>,
  <RecetaCard img={fideos} title='Pasta mediterranea express'/>,
  <RecetaCard img={fideos} title='Pasta mediterranea express'/>,
]
  return(
    <div className={styles.inspirado}>
        <div className={styles.titles}>
          <h3>{props.title}</h3>
          <h5>VER MÁS</h5>
        </div>
        <div className={styles.mobile}>
          <AliceCarousel
            items={items}
            touchTracking
            mouseTracking
            controlsStrategy="alternate"
            disableDotsControls
            disableButtonsControls
            responsive={responsive}
            paddingLeft={10}
            paddingRight={10}
            />
        </div>
        <div className={styles.desktop}>
          {items}
        </div>
      </div>
  )
}