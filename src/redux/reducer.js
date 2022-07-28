import {
  ACTIVAR_MENU_DESPLEGABLE, 
  CAMBIAR_NAV_BAR,
  CAMBIAR_OPCIONES,
  CAMBIAR_MENU_CATALOGO, 
  CERRAR_TODO,
  CARD_ACTIVA,
  MENU_ACTIVO_MENU,
  MENU_ACTIVO_NAVBAR,
  ALTURA_PANTALLA,
  GET_DATA,
  GET_SOCIAL,
  BUSQUEDA,
  GET_CARD_CATALOGO,
  FALTA_COMPLETAR,
  CARGANDO_MAIL,
  SEND_EMAIL,
  GET_ACTIVO
  
} from "./actions"
import fotoCarbono from '../imagenes/U Y C ACERO CARBONO.png'
import fotoAluminio from '../imagenes/U Y C ALUMINIO.png'
import fotoPavas from '../imagenes/U Y C PAVA SIL.png'
import fotoCafeteras from '../imagenes/U Y C CAFETERAS.png'
import fotoNilon from '../imagenes/U Y C UT NYLON SILICONA.png'
import fotoInox from '../imagenes/U Y C ACERO INOX.png'
import fotoInoxUtensilios from '../imagenes/U Y C UT ACERO.png'
import fotoVidrio from '../imagenes/U Y C VIDRIO HORNO.png'
import fotoMolderia from '../imagenes/U Y C MOLDERIA.png'




//-----------MODELO DE DATOS DE USOS Y CUIDADOS-----------
    // {
    //   title:'',
    //   subtitle:'',
    //   recomendacionesGenerales:[
    //     '',
    //     '',
    //   ],
    //   extras:[
    //     {
    //       title:'',
    //       subTitle:'',
    //       items:[
    //         '',
    //         '',
    //       ]
    //     },
    //     {
    //       title:'',
    //       subTitle:'',
    //       items:[
    //         '',
    //         '',
    //       ]
    //     }
    //   ]
    // }




const initialState={
  menuDesplegable:false,
  navBar:true,
  opciones:false,
  menuCatalgo:false,
  cardActiva:null,
  menuActivoNavBar:false,
  menuActivoMenu:false,
  alturaPantalla:0,
  vieportHeight: window.innerHeight,
  tiempoCarrusell:4000,
  faltaCompletar:false,
  busqueda:'',
  UsosYCuidados:[
    {
      tipo:'usosYCuidados',
      foto:fotoAluminio,
      title:'Piezas de Aluminio',
      subTitle:'Con Antiadherente',
      recomendacionesGenerales:[
        'Evitar el uso de fuegos máximos. Usa tu producto centrado en la hornalla. La llama no debe superar la base de la pieza para evitar quemaduras y/o decoloraciones en revestimiento o en los mangos.',
        'No dejes los utensilios vacíos sobre una fuente de calor (a menos que requieras calentarlo durante unos pocos segundos antes de incorporar el aceite).',
        'Nunca utilizar este tipo de piezas en hornos de cocina, microondas, brasas directas.',
        'No usarlo como contenedor de alimentos.',
        'Evitar el uso de técnicas de cocción a la sal ya que decoloran y desgastan la superficie.',
        'Para piezas con recubrimiento antiadherente, evitar el uso de utensilios metálicos y/o cortantes, ya que pueden dañar el recubrimiento. Aconsejamos el uso del Set 6 Utensilios Nylon Y Acero Hudson'
      ],
      extras:[
        {
          title:'Cuidado en el lavado',
          subTitle:'Extendé la vida útil de tus productos',
          items:[
            'Antes de su primer uso, lavar con abundante agua caliente y detergente neutro en lo ser posible, luego secar con trapo seco.',
            'Luego de utilizar la pieza, dejar enfriar sobre la cocina por algunos minutos y después proceder a su lavado. Los cambios bruscos de temperatura no son recomendables.',
            'Si se adhieren restos de comida durante la cocción, agregar una pequeña cantidad de agua cuando la pieza esté fría. La humedad provocará que se despeguen los restos. Se recomienda apoyar la pieza sobre un trapo rejilla en el momento del lavado, para evitar ralladuras.',
            'Siempre lava tus ollas y sartenes con esponjas suaves y detergentes y sécalas con un repasador suave. Evitar el uso de esponjas abrasivas o de metal ya que esto afectará al antiadherente y al recubrimiento externo de tu pieza.',
            'No dejes alimentos en las sartenes y ollas durante mucho tiempo, porque la sal que los mismos contienen pueden dejar manchas.'
          ]
        },
        {
          title:'Cuidado en el Guardado',
          subTitle:'Mantené impecable tus productos.',
          items:[
            'Guardá las piezas en un lugar seco (bien secas, destapadas o semi tapadas) para preservar el recubrimiento del esmalte de mangos y perillas, evitar roces y golpes. ',
            'Al guardar piezas revestidas interiormente con antiadherente, no dar vuelta las tapas dentro de las mismas ya que las perillas pueden rayar su interior. Para guardar las piezas apiladas, colocar entre una y otra un paño o repasador.',
            'Advertencia: no guardar las piezas en sus cajas originales por un largo período de tiempo. El cartón puede humedecer la pieza.'
          ]
        }
      ]
    },

    
    {
      tipo:'usosYCuidados',
      foto:fotoCarbono,
      title:'Piezas de acero al carbono',
      subtitle:'Con Antiadherente',
      recomendacionesGenerales:[
        'Evitar el uso de fuegos máximos. Usa tu producto centrado en la hornalla. La llama no debe superar la base de la pieza para evitar quemaduras y/o decoloraciones en revestimiento o en los mangos.',
        'No dejes los utensilios vacíos sobre una fuente de calor (a menos que requieras calentarlo durante unos pocos segundos antes de incorporar el aceite).',
        'Nunca utilizar este tipo de piezas en hornos de cocina, microondas, brasas directas.',
        'No usarlo como contenedor de alimentos.',
        'Evitar el uso de técnicas de cocción a la sal ya que decoloran y desgastan la superficie.',
        'Para piezas con recubrimiento antiadherente, evitar el uso de utensilios metálicos y/o cortantes, ya que pueden dañar el recubrimiento. Aconsejamos el uso del Set 6 Utensilios Nylon Y Acero Hudson'
      ],
      extras:[
        {
          title:'Cuidado en el Lavado',
          subTitle:'Extendé la vida útil de tus productos',
          items:[
            'Antes de su primer uso, lavar con abundante agua caliente y detergente neutro en lo ser posible, luego secar con trapo seco.',
            'Luego de utilizar la pieza, dejar enfriar sobre la cocina por algunos minutos y después proceder a su lavado. Los cambios bruscos de temperatura no son recomendables.',
            'Si se adhieren restos de comida durante la cocción, agregar una pequeña cantidad de agua cuando la pieza esté fría. La humedad provocará que se despeguen los restos. Se recomienda apoyar la pieza sobre un trapo rejilla en el momento del lavado, para evitar ralladuras.',
            'Siempre lava tus ollas y sartenes con esponjas suaves y detergentes y sécalas con un repasador suave. Evitar el uso de esponjas abrasivas o de metal ya que esto afectará al antiadherente y al recubrimiento externo de tu pieza.',
            'No dejes alimentos en las sartenes y ollas durante mucho tiempo, porque la sal que los mismos contienen pueden dejar manchas.'
          ]
        },
        {
          title:'Cuidado en el Guardado',
          subTitle:'Mantené impecable tus productos.',
          items:[
            'Guardá las piezas en un lugar seco (bien secas, destapadas o semi tapadas) para preservar el recubrimiento del esmalte de mangos y perillas, evitar roces y golpes.',
            'Al guardar piezas revestidas interiormente con antiadherente, no dar vuelta las tapas dentro de las mismas ya que las perillas pueden rayar su interior. Para guardar las piezas apiladas, colocar entre una y otra un paño o repasador. ',
            'Advertencia: no guardar las piezas en sus cajas originales por un largo período de tiempo. El cartón puede humedecer la pieza.'
          ]
        }
      ]
    },


    {
      tipo:'usosYCuidados',
      foto:fotoPavas,
      title:'Pavas',
      subtitle:'',
      recomendacionesGenerales:[
      'Evitar el uso de fuegos máximos. Usa tu producto centrado en la hornalla. La llama no debe superar la base de la pieza para evitar quemaduras y/o decoloraciones en revestimiento o en los mangos.',
      'Nunca utilizar este tipo de piezas en hornos de cocina, microondas, brasas directas.',
      'No usarlo como contenedor de alimentos.'
      ],
      extras:[
        {
          title:'Cuidado en el Lavado',
          subTitle:'Extendé la vida útil de tus productos',
          items:[
            'Para lavar tu pava o cafetera y que dure mucho más tiempo hacerlo con una esponja suave para no dañar el color.',
            'Si por dentro tiene sarro, podes sacárselo hirviendo un poco de agua con vinagre por al menos 5 minutos.',
          ]
        },
        {
          title:'Cuidado en el Guardado',
          subTitle:'Mantené impecable tus productos.',
          items:[
            'Guardá las piezas en un lugar seco para preservar el recubrimiento del esmalte de mangos y perillas, evitar roces y golpes.'
          ]
        }
      ]
    },

    
    {
      tipo:'usosYCuidados',
      foto:fotoCafeteras,
      title:'Cafeteras',
      subtitle:'',
      recomendacionesGenerales:[
      'Evitar el uso de fuegos máximos. Usa tu producto centrado en la hornalla. La llama no debe superar la base de la pieza para evitar quemaduras y/o decoloraciones en revestimiento o en los mangos.',
      'Nunca utilizar este tipo de piezas en hornos de cocina, microondas, brasas directas.',
      'No usarlo como contenedor de alimentos.'
      ],
      extras:[
        {
          title:'Cuidado en el Lavado',
          subTitle:'Extendé la vida útil de tus productos',
          items:[
            'Para lavar tu cafetera o cafetera y que dure mucho más tiempo hacerlo con una esponja suave para no dañar el color.',
            'Si por dentro tiene sarro, podes sacárselo hirviendo un poco de agua con vinagre por al menos 5 minutos.',
          ]
        },
        {
          title:'Cuidado en el Guardado',
          subTitle:'Mantené impecable tus productos.',
          items:[
            'Guardá las piezas en un lugar seco para preservar el recubrimiento del esmalte de mangos y perillas, evitar roces y golpes.'
          ]
        }
      ]
    },


    {
      tipo:'usosYCuidados',
      foto:fotoNilon,
      title:'Utensilios de Nylon y Silicona',
      subtitle:'',
      recomendacionesGenerales:[
        'Evitar el uso de fuegos directo sobre el nylon o silicona.',
        'Nunca utilizar este tipo de piezas en hornos de cocina, microondas, brasas directas.',
        'Usa tus productos con antiadherente con utensilios de nylon o silicona para no rayar la superficie y que te duren mucho más tiempo: Además, es un material muy estable que resiste altas temperaturas.'
      ],
      extras:[
        {
          title:'Cuidado en el Lavado',
          subTitle:'Extendé la vida útil de tus productos',
          items:[
            'Los utensilios de Silicona y Nylon si bien son fáciles de limpiar Tenes que tener en cuenta: Se deben usar esponjas suaves; se deben lavar con agua caliente y no se deben dejar mucho tiempo en remojo con productos de limpieza porque podrían absorber los aromas de los mismos.',
            'Si lo lavas en lavavajillas se debe tener en cuenta que no se deben meter con restos de comida y se deben usar detergentes que no sean abrasivos',
          ]
        },
        {
          title:'Cuidado en el Guardado',
          subTitle:'Mantené impecable tus productos.',
          items:[
            'Guardá las piezas en un lugar seco. '
          ]
        }
      ]
    },


    {
      tipo:'usosYCuidados',
      foto:fotoInoxUtensilios,
      title:'Utensilios de Acero Inoxidable',
      subtitle:'',
      recomendacionesGenerales:[
        'Evitar el uso de fuegos directo sobre estos utensilios',
        'Nunca utilizar este tipo de piezas en hornos de cocina, microondas,brasas directas.',
        'Usa tus productos de acero inoxidable con este tipo de utensilios.',
        'No utilizar este tipo de utensilios sobre productos con antiadherente porque su filo y dureza agreden al mismo.'
      ],
      extras:[
        {
          title:'Cuidado en el Lavado',
          subTitle:'Extendé la vida útil de tus productos',
          items:[
            'Para limpiar los utensilios de acero inoxidable solo se necesita agua, detergente y un paño.',
            'Si lo lavas en lavavajillas se debe tener en cuenta que no se deben meter con restos de comida y se deben usar detergentes que no sean abrasivos',
          ]
        },
        {
          title:'Cuidado en el Guardado',
          subTitle:'Mantené impecable tus productos.',
          items:[
            'Guardá las piezas en un lugar seco. ',
          ]
        }
      ]
    },


    {
      tipo:'usosYCuidados',
      foto:fotoVidrio,
      title:'Piezas de vidrio para horno',
      subtitle:'',
      recomendacionesGenerales:[
        'Evitar el uso de fuegos directo sobre este tipo de productos.',
        'Estas piezas son aptas hornos a gas y eléctricos y microondas.',
        'Estas piezas también son aptas heladera y freezer.',
        'Evitar el choque térmico. Tanto del freezer al horno o viceversa aguardar a que el producto este a temperatura ambiente.'
      ],
      extras:[
        {
          title:'Cuidado en el Lavado',
          subTitle:'Extendé la vida útil de tus productos',
          items:[
            'Para nuestros productos de vidrio para horno solo se necesita agua, detergente y un paño.',
            'Si lo lavas en lavavajillas se debe tener en cuenta que no se deben meter con restos de comida y se deben usar detergentes que no sean abrasivos.',
          ]
        },
        {
          title:'Cuidado en el Guardado',
          subTitle:'Mantené impecable tus productos.',
          items:[
            'Guardá las piezas en un lugar seco. ',
          ]
        }
      ]
    },


    {
      tipo:'usosYCuidados',
      foto:fotoInox,
      title:'Piezas de Acero Inoxidable',
      subtitle:'',
      recomendacionesGenerales:[
        'Evitar el uso de fuegos máximos. Usa tu producto centrado en la hornalla. La llama no debe superar la base de la pieza para evitar quemaduras y/o decoloraciones en el exterior o en los mangos.',
        'No dejes los utensilios vacíos sobre una fuente de calor (a menos que requieras calentarlo durante unos pocos segundos antes de incorporar el aceite).',
        'Nunca utilizar este tipo de piezas en hornos de cocina, microondas, brasas directas.',
        'No usarlo como contenedor de alimentos.',
        'Evitar el uso de técnicas de cocción a la sal ya que pueden generar manchas y desgastar la superficie.',
        'Para piezas es tipo de piezas sin recubrimiento antiadherente, puede utilizar utensilios de Acero Inoxidable, de todas formas, no recomendamos el uso de productos cortantes., ya que pueden dañar el recubrimiento.'
      ],
      extras:[
        {
          title:'Cuidado en el Lavado',
          subTitle:'Extendé la vida útil de tus productos',
          items:[
            'Antes de su primer uso, lavar con abundante agua caliente y detergente neutro en lo ser posible, luego secar con trapo seco.',
            'Luego de utilizar la pieza, dejar enfriar sobre la cocina por algunos minutos y después proceder a su lavado. Los cambios bruscos de temperatura no son recomendables.',
            'Si se adhieren restos de comida durante la cocción, agregar una pequeña cantidad de agua cuando la pieza esté fría. La humedad provocará que se despeguen los restos. Se recomienda apoyar la pieza sobre un trapo rejilla en el momento del lavado, para evitar ralladuras.',
            'Lávalas con jabón neutro y agua tibia y siempre usa un paño suave para no rallarlas y evitar que se formen manchas.',
            'No dejes alimentos en las sartenes y ollas durante mucho tiempo, porque la sal que los mismos contienen pueden dejar manchas.'
          ]
        },
        {
          title:'Cuidado en el Guardado',
          subTitle:'Mantené impecable tus productos.',
          items:[
            'Guardá las piezas en un lugar seco (bien secas, destapadas o semi tapadas) para preservar el recubrimiento del esmalte de mangos y perillas, evitar roces y golpes. ',
            'Advertencia: no guardar las piezas en sus cajas originales por un largo período de tiempo. El cartón puede humedecer la pieza.',
          ]
        }
      ]
    },


    {
      tipo:'usosYCuidados',
      foto:fotoMolderia,
      title:'Piezas de Moldería',
      subtitle:'Con Antiadherente',
      recomendacionesGenerales:[
        'Nuestros moldes fueron concebidos para uso dentro del horno, para cocinar tortas, postres, tartas, pizzas, panes, etc.',
        'No usarlos sobre hornallas en fuego directo, brasas directas y microondas.',
        'Todas nuestras piezas son aptas hornos a gas y eléctricos.',
        'No usarlo como contenedor de alimentos.',
        'Evitar el uso de técnicas de cocción a la sal ya que pueden generar manchas y desgastar la superficie.',
        'Para piezas con recubrimiento antiadherente, evitar el uso de utensilios metálicos y/o cortantes, ya que pueden dañar el recubrimiento. Aconsejamos el uso del Set 6 Utensilios Nylon Y Acero Hudson'
      ],
      extras:[
        {
          title:'Cuidado en el Lavado',
          subTitle:'Extendé la vida útil de tus productos',
          items:[
            'Antes de su primer uso, lavar con abundante agua caliente y detergente neutro en lo ser posible, luego secar con trapo seco.',
            'Luego de utilizar la pieza, dejar enfriar sobre la cocina por algunos minutos y después proceder a su lavado. Los cambios bruscos de temperatura no son recomendables.',
            'Si se adhieren restos de comida durante la cocción, agregar una pequeña cantidad de agua cuando la pieza esté fría. La humedad provocará que se despeguen los restos. Se recomienda apoyar la pieza sobre un trapo rejilla en el momento del lavado, para evitar ralladuras.',
            'Siempre lava tus piezas con esponjas suaves y detergentes y sécalas con un repasador suave. Evitar el uso de esponjas abrasivas o de metal ya que esto afectará al antiadherente y al recubrimiento externo de tu pieza.',
            'No dejes alimentos en los moldes durante mucho tiempo, porque la sal que los mismos contienen pueden dejar manchas.',
          ]
        },
        {
          title:'Cuidado en el Guardado',
          subTitle:'Mantené impecable tus productos.',
          items:[
            'Guardá las piezas en un lugar seco (bien secas, destapadas o semi tapadas) para preservar el recubrimiento del esmalte de mangos y perillas, evitar roces y golpes.',
            'Al guardar piezas revestidas interiormente con antiadherente, no dar vuelta las tapas dentro de las mismas ya que las perillas pueden rayar su interior. Para guardar las piezas apiladas, colocar entre una y otra un paño o repasador.',
          ]
        }
      ]
    }



  ]
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
  if (action.type === CARD_ACTIVA) {
      
        return{
          ...state,
          cardActiva:action.payload
        }
      
  }
  if (action.type === GET_SOCIAL) {
        return{
          ...state,
          social:action.payload
        }
  }
  if (action.type === MENU_ACTIVO_NAVBAR){
    return{
      ...state,
      menuActivoNavBar:action.payload
    }
  }
  if (action.type === MENU_ACTIVO_MENU){
    return{
      ...state,
      menuActivoMenu:action.payload
    }
  }
  if (action.type === FALTA_COMPLETAR){
    return{
      ...state,
      faltaCompletar:action.payload
    }
  }
  if (action.type === ALTURA_PANTALLA){
    return{
      ...state,
      alturaPantalla:action.payload
    }
  }
  if (action.type === GET_DATA){

    return {
      ...state,
      [action.propiedadName]: action.payload,
    }
  }
  if (action.type === BUSQUEDA){

    return {
      ...state,
      busqueda: action.payload,
    }
  }
  if (action.type === GET_CARD_CATALOGO){
    return {
      ...state,
      CardCatalogo: action.payload,
    }
  }
  if (action.type === CARGANDO_MAIL){
    return {
      ...state,
      cargandoMail: action.payload,
    }
  }
  if (action.type === SEND_EMAIL){
    return {
      ...state,
      cargandoMail: 'Email cargado correctamente',
    }
  }
  if (action.type === GET_ACTIVO) {
    console.log(action.payload);
    if (action.payload?.length > 0){
      return{
        ...state,
        activo:action.payload[0].activo
      }
    }
  }
  
  
  return state
}
export default rootReducer