import {ACTIVAR_MENU_DESPLEGABLE, CAMBIAR_NAV_BAR,CAMBIAR_OPCIONES,CAMBIAR_MENU_CATALOGO, CERRAR_TODO } from "./actions"
import fondoHome from '../imagenes/Fondo HomexD.jfif'
import conccionYHorneado from '../imagenes/Circulos/coccionYHorneado.png'
import cafeTeYMate from '../imagenes/Circulos/cafeTeYMate.png'
import Utensillios from '../imagenes/Circulos/Utensillios.png'
import Vajilla from '../imagenes/Circulos/Vajilla.png'
import Reposteria from '../imagenes/Circulos/Reposteria.png'
import Organizacion from '../imagenes/Circulos/Organizacion.png'
import lineaMasterchef from '../imagenes/lineaMasterchef.png'
import lineaVintage from '../imagenes/lineaVintage.png'
import grupoGente from '../imagenes/grupoGente.jfif'
import fuenteCuadrada from '../imagenes/fuenteCuadrada.png'
import img1 from '../imagenes/UltimasPublicaciones/1.png'
import img2 from '../imagenes/UltimasPublicaciones/2.png'
import img3 from '../imagenes/UltimasPublicaciones/3.png'
import img4 from '../imagenes/UltimasPublicaciones/4.png'
import img5 from '../imagenes/UltimasPublicaciones/5.png'
import img6 from '../imagenes/UltimasPublicaciones/6.png'
import lineaCobre from '../imagenes/lineaCobre.png'
import fideos from '../imagenes/fideos.jfif'


const initialState={
  menuDesplegable:false,
  navBar:true,
  opciones:false,
  menuCatalgo:false,
  Home:{
    header:{
      title:'SEMANA DE DESCUENTOS PARA MAMÁ',
      subtitle: 'Con el cupón: MAMACHEF20. Sed aliquam et risus fusce a. Risus neque ultricies suscipit diam nulla ultrices volutpat.',
      aclaracion:'Línea de vigencia de la promoción ',
      backgroundImg: fondoHome
    },
    carrusell1:[
      {label:'Coccion y Horneado' ,img:conccionYHorneado},
      {label:'Cafe y Mate' ,img:cafeTeYMate},
      {label:'Utensilios' ,img:Utensillios},
      {label:'Vajilla' ,img:Vajilla},
      {label:'Reposteria' ,img:Reposteria},
      {label:'Organizacion' ,img:Organizacion},
    ],
    cards:[
      {
        img:lineaMasterchef,
        info:{
          title:'Linea masterchef',
          subtitle:'Sentite un chef en la cocina de tu casa',
          ruta:'ver productos'
        }
      },
      {
        img:lineaMasterchef,
        info:{
          title:'Linea masterchef',
          subtitle:'Sentite un chef en la cocina de tu casa',
          ruta:'ver productos'
        }
      },
      {
        img:lineaMasterchef,
        info:{
          title:'Linea masterchef',
          subtitle:'Sentite un chef en la cocina de tu casa',
          ruta:'ver productos'
        }
      },
      {
        img:lineaMasterchef,
        info:{
          title:'Linea masterchef',
          subtitle:'Sentite un chef en la cocina de tu casa',
          ruta:'ver productos'
        }
      },
    ],
    video:'https://www.youtube.com/watch?v=krRvyeapHio',
    carrusell2:[
      {
        img:lineaVintage,
        info:{
          title:'línea vintage',
          subtitle:'Lucí tu cocina con colores y un estilo único',
          ruta:'ver catálogo'
        }
      },
      {
        img:lineaVintage,
        info:{
          title:'línea vintage',
          subtitle:'Lucí tu cocina con colores y un estilo único',
          ruta:'ver catálogo'
        }
      },
      {
        img:lineaVintage,
        info:{
          title:'línea vintage',
          subtitle:'Lucí tu cocina con colores y un estilo único',
          ruta:'ver catálogo'
        }
      },
    ],
    conocenos:{
      img:grupoGente,
      info:{
        title:'conocenos',
        subtitle: 'Somos más que una marca, somos familia',
        ruta:'ver más'
      }
    }
  },
  productosDestacados:{
    left:{
      img:fuenteCuadrada,
      title: 'Fuente cuadrada',
      subtitle:'Vidrio Templado'
    },
    right:{
      img:fuenteCuadrada,
      title: 'Fuente cuadrada',
      subtitle:'Vidrio Templado'
    },
  },
  ultimasPublicaciones:{
    images:[img1,img2,img3,img4,img5,img6]
  },
  Catalogos:{
    masterChef:{
      name:'Masterchef',
      header:{
        img:fondoHome,
        title:'línea hudson masterchef'
      },
      cards:[
        {
          img:lineaCobre,
          title:'presumí con hudson y su línea cobre',
          subtitle:'Realizá tus preparaciones con estilo y hacé brillar tu cocina.',
          listItems:[
            'Hechos en Aluminio de 2.1 mm de espesor.',
            'Triple capa de antiadherente cerámico degradado, reduce o elimina el uso de aceites para cocinar. Evitará que los productos se peguen y podrás realizar comidas que serán más sanas.',
            'Mangos y asas recubiertas con tecnología Soft Touch, permite manipular sin quemarte durante la cocción y una sensación agradable al tacto.',
            'Difusor de calor en la base, permitiendo equilibrar la distribución del calor y ahorrar energía.',
            'Disponible en 7 piezas.',
            'Diseño de packaging exclusivo Masterchef.'
          ]
        },
        {
          img:lineaCobre,
          title:'presumí con hudson y su línea cobre',
          subtitle:'Realizá tus preparaciones con estilo y hacé brillar tu cocina.',
          listItems:[
            'Hechos en Aluminio de 2.1 mm de espesor.',
            'Triple capa de antiadherente cerámico degradado, reduce o elimina el uso de aceites para cocinar. Evitará que los productos se peguen y podrás realizar comidas que serán más sanas.',
            'Mangos y asas recubiertas con tecnología Soft Touch, permite manipular sin quemarte durante la cocción y una sensación agradable al tacto.',
            'Difusor de calor en la base, permitiendo equilibrar la distribución del calor y ahorrar energía.',
            'Disponible en 7 piezas.',
            'Diseño de packaging exclusivo Masterchef.'
          ]
        },
        {
          img:lineaCobre,
          title:'presumí con hudson y su línea cobre',
          subtitle:'Realizá tus preparaciones con estilo y hacé brillar tu cocina.',
          listItems:[
            'Hechos en Aluminio de 2.1 mm de espesor.',
            'Triple capa de antiadherente cerámico degradado, reduce o elimina el uso de aceites para cocinar. Evitará que los productos se peguen y podrás realizar comidas que serán más sanas.',
            'Mangos y asas recubiertas con tecnología Soft Touch, permite manipular sin quemarte durante la cocción y una sensación agradable al tacto.',
            'Difusor de calor en la base, permitiendo equilibrar la distribución del calor y ahorrar energía.',
            'Disponible en 7 piezas.',
            'Diseño de packaging exclusivo Masterchef.'
          ]
        },
        {
          img:lineaCobre,
          title:'presumí con hudson y su línea cobre',
          subtitle:'Realizá tus preparaciones con estilo y hacé brillar tu cocina.',
          listItems:[
            'Hechos en Aluminio de 2.1 mm de espesor.',
            'Triple capa de antiadherente cerámico degradado, reduce o elimina el uso de aceites para cocinar. Evitará que los productos se peguen y podrás realizar comidas que serán más sanas.',
            'Mangos y asas recubiertas con tecnología Soft Touch, permite manipular sin quemarte durante la cocción y una sensación agradable al tacto.',
            'Difusor de calor en la base, permitiendo equilibrar la distribución del calor y ahorrar energía.',
            'Disponible en 7 piezas.',
            'Diseño de packaging exclusivo Masterchef.'
          ]
        },
        {
          img:lineaCobre,
          title:'presumí con hudson y su línea cobre',
          subtitle:'Realizá tus preparaciones con estilo y hacé brillar tu cocina.',
          listItems:[
            'Hechos en Aluminio de 2.1 mm de espesor.',
            'Triple capa de antiadherente cerámico degradado, reduce o elimina el uso de aceites para cocinar. Evitará que los productos se peguen y podrás realizar comidas que serán más sanas.',
            'Mangos y asas recubiertas con tecnología Soft Touch, permite manipular sin quemarte durante la cocción y una sensación agradable al tacto.',
            'Difusor de calor en la base, permitiendo equilibrar la distribución del calor y ahorrar energía.',
            'Disponible en 7 piezas.',
            'Diseño de packaging exclusivo Masterchef.'
          ]
        },
        {
          img:lineaCobre,
          title:'presumí con hudson y su línea cobre',
          subtitle:'Realizá tus preparaciones con estilo y hacé brillar tu cocina.',
          listItems:[
            'Hechos en Aluminio de 2.1 mm de espesor.',
            'Triple capa de antiadherente cerámico degradado, reduce o elimina el uso de aceites para cocinar. Evitará que los productos se peguen y podrás realizar comidas que serán más sanas.',
            'Mangos y asas recubiertas con tecnología Soft Touch, permite manipular sin quemarte durante la cocción y una sensación agradable al tacto.',
            'Difusor de calor en la base, permitiendo equilibrar la distribución del calor y ahorrar energía.',
            'Disponible en 7 piezas.',
            'Diseño de packaging exclusivo Masterchef.'
          ]
        },
        {
          img:lineaCobre,
          title:'presumí con hudson y su línea cobre',
          subtitle:'Realizá tus preparaciones con estilo y hacé brillar tu cocina.',
          listItems:[
            'Hechos en Aluminio de 2.1 mm de espesor.',
            'Triple capa de antiadherente cerámico degradado, reduce o elimina el uso de aceites para cocinar. Evitará que los productos se peguen y podrás realizar comidas que serán más sanas.',
            'Mangos y asas recubiertas con tecnología Soft Touch, permite manipular sin quemarte durante la cocción y una sensación agradable al tacto.',
            'Difusor de calor en la base, permitiendo equilibrar la distribución del calor y ahorrar energía.',
            'Disponible en 7 piezas.',
            'Diseño de packaging exclusivo Masterchef.'
          ]
        },
        {
          img:lineaCobre,
          title:'presumí con hudson y su línea cobre',
          subtitle:'Realizá tus preparaciones con estilo y hacé brillar tu cocina.',
          listItems:[
            'Hechos en Aluminio de 2.1 mm de espesor.',
            'Triple capa de antiadherente cerámico degradado, reduce o elimina el uso de aceites para cocinar. Evitará que los productos se peguen y podrás realizar comidas que serán más sanas.',
            'Mangos y asas recubiertas con tecnología Soft Touch, permite manipular sin quemarte durante la cocción y una sensación agradable al tacto.',
            'Difusor de calor en la base, permitiendo equilibrar la distribución del calor y ahorrar energía.',
            'Disponible en 7 piezas.',
            'Diseño de packaging exclusivo Masterchef.'
          ]
        },
        {
          img:lineaCobre,
          title:'presumí con hudson y su línea cobre',
          subtitle:'Realizá tus preparaciones con estilo y hacé brillar tu cocina.',
          listItems:[
            'Hechos en Aluminio de 2.1 mm de espesor.',
            'Triple capa de antiadherente cerámico degradado, reduce o elimina el uso de aceites para cocinar. Evitará que los productos se peguen y podrás realizar comidas que serán más sanas.',
            'Mangos y asas recubiertas con tecnología Soft Touch, permite manipular sin quemarte durante la cocción y una sensación agradable al tacto.',
            'Difusor de calor en la base, permitiendo equilibrar la distribución del calor y ahorrar energía.',
            'Disponible en 7 piezas.',
            'Diseño de packaging exclusivo Masterchef.'
          ]
        },
      ]
    }
  },
  Inspirate:{
    recetas:[
      {
        img:fideos,
        title:'Pasta medtierranea express',
        header:true
      },
      {
        img:fideos,
        title:'Pasta medtierranea express',
        header:true
      },
      {
        img:fideos,
        title:'Pasta medtierranea express',
        header:true
      },
      {
        img:fideos,
        title:'Pasta medtierranea express',
      },
      {
        img:fideos,
        title:'Pasta medtierranea express',
      },
      {
        img:fideos,
        title:'Pasta medtierranea express',
      },
      {
        img:fideos,
        title:'Pasta medtierranea express',
      },
      {
        img:fideos,
        title:'Pasta medtierranea express',
      },
      {
        img:fideos,
        title:'Pasta medtierranea express',
      },
    ],
  }
}

function rootReducer(state=initialState, action){
  
  if (action.type === ACTIVAR_MENU_DESPLEGABLE) {
    return{
      ...state,
      menuDesplegable:action.payload
    }
  }
  if (action.type === CAMBIAR_NAV_BAR) {
      return{
        ...state,
        navBar:action.payload
      }
  }
  if (action.type === CAMBIAR_OPCIONES) {
      return{
        ...state,
        opciones:action.payload
      }
  }
  if (action.type === CAMBIAR_MENU_CATALOGO) {
      return{
        ...state,
        menuCatalgo:action.payload
      }
  }
  if (action.type === CERRAR_TODO) {
      
        return{
          ...state,
          menuCatalgo:false,
          opciones:false,
        }
      
  }
  
  
  return state
}
export default rootReducer