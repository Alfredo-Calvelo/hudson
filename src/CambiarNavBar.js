import { useDispatch } from "react-redux";
import { alturaPantalla, cambiarNavBar } from "./redux/actions";



export default function CambiarNavBar(){
    const dispatch = useDispatch()
    dispatch(alturaPantalla(window.scrollY))
    if (window.scrollY >=25) {
    }else{
      dispatch(cambiarNavBar(true))
    }
    console.log('scroll');
}

