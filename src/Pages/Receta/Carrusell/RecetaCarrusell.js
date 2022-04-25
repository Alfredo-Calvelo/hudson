import { createRef, useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import { useSelector } from 'react-redux'
import DotButton from '../../../components/DotButton/DotButton'
import styles from './RecetaCarrusell.module.css'

export default function RecetaCarrusell(props){

  
  return(
    <div  >
      <div className={styles.containerxD}>
        <div className={styles.overflow}>
          <div className={styles.carrusellDesktop}>
            <AliceCarousel
              items={props.items}
              controlsStrategy="alternate"
              mouseTracking
              disableButtonsControls
              autoWidth
              activeIndex={2}
              renderDotsItem={DotButton}
              />
          </div>
        </div>
      </div>
      <div className={styles.containerMobile}>
        <div className={styles.overflowMobile}>
          <div className={styles.carrusellMobile}>
            <AliceCarousel
              items={props.items}
              controlsStrategy="alternate"
              mouseTracking
              touchTracking
              disableButtonsControls
              autoWidth
              activeIndex={2}
              disableDotsControls
              
              />
          </div>
        </div>
      </div>
</div>
  )
}