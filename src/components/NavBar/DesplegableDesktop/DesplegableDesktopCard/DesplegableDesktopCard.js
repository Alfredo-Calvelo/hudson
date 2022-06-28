import { useNavigate } from "react-router-dom"
import styles from './DesplegableDesktopCard.module.css'
import { BsChevronRight } from "react-icons/bs"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"

export default function DesplegableDesktopCard(props){
    const navigate = useNavigate()
    const CardCatalogo = useSelector(state=>state.CardCatalogo)
    const Catalogos = useSelector(state => state.Catalogo)
    const [title, setTitle] = useState('')
    const [colorTitle, setColorTitle] = useState('')
    const [subTitle, setSubTitle] = useState('')
    const [foto, setFoto] = useState('')
    useEffect(()=>{
        if (CardCatalogo && CardCatalogo.length > 0 && Catalogos && Catalogos.length > 0) {
            Catalogos.map((elem,index) => {
                if (elem.title === CardCatalogo[0].title) {
                    console.log(elem)
                    setColorTitle(elem.colorFondo)
                }
            })
            console.log(CardCatalogo[0]);
            setTitle(CardCatalogo[0].title)
            setSubTitle(CardCatalogo[0].subtitle)
            setFoto(CardCatalogo[0].image)

        }
    },[CardCatalogo])
    return(
        <>
        {props.ruta?
        <div className={styles.container} onClick={()=>navigate(props.ruta)}>
            <div className={styles.titulos}>
                <span style={props.masterchef?{color:'var(--naranjaMasterChef)'}:null} className={styles.title}>{props.title}</span>
                <span className={styles.subTitle}>{props.subTitle}</span>
                <span className={styles.rutaTitle}>{props.rutaTitle} <BsChevronRight/></span>
            </div>
            <img className={styles.img} src={props.img}/>
        </div>
        :<div className={styles.container} onClick={()=>navigate(`../Catalogo/${title}`)}>
            <div className={styles.titulos}>
                <span style={{color:colorTitle}} className={styles.title}>{title.toUpperCase()}</span>
                <span className={styles.subTitle}>{subTitle}</span>
                <span className={styles.rutaTitle}>VER CATALOGO <BsChevronRight/></span>
            </div>
            <img className={styles.img} src={foto}/>
        </div>
        }
        </>
    )
}