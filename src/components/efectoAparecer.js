let alturaPantalla = useSelector(state=>state.alturaPantalla)
  let video = createRef()

  let vieportHeight = useSelector(state=>state.vieportHeight)
  
  const [alturaVideo, setAlturaVideo] = useState(0)
  useEffect(()=>{
    setAlturaVideo(video.current?.offsetTop)
  })

function EfectoAparecer(){
  return(
    <div className={`${styles.claseBase} 
      ${
        alturaPantalla + vieportHeight/1.2 <= alturaVideo
        ?styles.Invisible
        :styles.Visible
        }
        `}
    >
    </div>

  )
}