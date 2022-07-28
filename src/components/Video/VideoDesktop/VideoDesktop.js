import { createRef, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styles from './VideoDesktop.module.css'

export default function VideoDesktop(props){


  let alturaPantalla = useSelector(state=>state.alturaPantalla)
  let video = createRef()
  let vieportHeight = useSelector(state=>state.vieportHeight)
  
  const [alturaVideo, setAlturaVideo] = useState(0)
  useEffect(()=>{
    setAlturaVideo(video.current?.offsetTop)
  })
  
  let [IdVideo , setIdVideo]= useState()
  useEffect(()=>{
    if (props.videoID) {
      setIdVideo(props.videoID)
    }
  },[props])

  return(
    <div ref={video} className={`${styles.videoDesktop} 
    ${
      alturaPantalla + vieportHeight/1.2 <= alturaVideo
      ?styles.videoInvisible
      :styles.videoVisible
      }
      `}>
      {IdVideo?
      <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${IdVideo}`}title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
      :null
      }
    </div>
  )
}