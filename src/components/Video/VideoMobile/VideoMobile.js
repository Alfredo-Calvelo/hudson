import { createRef, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styles from './VideoMobile.module.css'


export default function VideoMobile(props){
  let alturaPantalla = useSelector(state=>state.alturaPantalla)
  let video = createRef()

  let vieportHeight = useSelector(state=>state.vieportHeight)
  
  const [alturaVideo, setAlturaVideo] = useState(0)
  useEffect(()=>{
    setAlturaVideo(video.current?.offsetTop)
  })

  return(
    <div ref={video} className={`${styles.video} 
    ${
      alturaPantalla + vieportHeight/1.2 <= alturaVideo
      ?styles.videoInvisible
      :styles.videoVisible
      }
      `}>
        <iframe width="100%" height="315" src={`https://www.youtube.com/embed/${props.videoID}`} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
      </div>
  )
}