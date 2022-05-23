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
  GET_SOCIAL
} from "./actions"
import fotoCarbono from '../imagenes/U Y C ACERO CARBONO.png'
import fotoAluminio from '../imagenes/U Y C ALUMINIO.png'
import fotoPavas from '../imagenes/U Y C PAVAS Y CAFETERAS.png'
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
  UsosYCuidados:[
    {
      tipo:'usosYCuidados',
      foto:fotoAluminio,
      title:'Aluminum Products with Non-Stick',
      subTitle:'Avoid the use of maximum fires. Use your product centered on the burner. The flame must not exceed the base of the piece to avoid burns and/or discoloration on the coating or on the handles.',
      recomendacionesGenerales:[
        'Do not leave empty utensils on a heat source (unless you need to heat it for a few seconds before adding the oil).',
        'Never use this type of piece in kitchen ovens, microwaves, direct coals.',
        'Do not use it as a food container.',
        'Avoid the use of salt cooking techniques as they discolor and wear down the surface.',
        'For pieces with non-stick coating, avoid the use of metallic and/or sharp utensils, as they can damage the coating. We recommend the use of the Hudson Steel and Nylon Utensils Set of 6.'
      ],
      extras:[
        {
          title:'Wash Care',
          subTitle:'Extend the shelf life of your products',
          items:[
            'Before its first use, wash with plenty of hot water and neutral detergent if possible, then dry with a dry cloth.',
            'After using the piece, leave it to cool on the stove for a few minutes and then proceed to wash it. Sudden temperature changes are not recommended.',
            'If food remains adhere during cooking, add a small amount of water when the piece is cold. Moisture will cause the remains to detach. It is recommended to support the piece on a grid cloth at the time of washing, to avoid scratches.',
            'Always wash your pots and pans with soft sponges and detergents and dry them with a soft cloth. Avoid the use of abrasive or metal sponges as this will affect the non-stick coating and the external coating of your piece.',
            'Do not leave food in pots and pans for a long time, because the salt they contain can leave stains.'
          ]
        },
        {
          title:'Care in Storage',
          subTitle:'Keep yout products impeccable.',
          items:[
            'Store the pieces in a dry place (well dry, uncovered or partially covered) to preserve the enamel coating on the handles and knobs, avoid scratches and bumps.',
            'When storing pieces with non-stick coating on the inside, do not turn the lids inside of them as the knobs can scratch the inside. To store the stacked pieces, place a cloth or towel between one and the other.',
            'Warning: do not keep the pieces in their original boxes for a long period of time. The cardboard can moisten the piece.'
          ]
        }
      ]
    },

    
    {
      tipo:'usosYCuidados',
      foto:fotoCarbono,
      title:'Carbon Steel Products',
      subtitle:'With Non-Stick',
      recomendacionesGenerales:[
        'Avoid the use of maximum fires. Use your product centered on the burner. The flame must not exceed the base of the piece to avoid burns and/or discoloration on the coating or on the handles.',
        'Do not leave empty utensils on a heat source (unless you need to heat it for a few seconds before adding the oil).',
        'Never use this type of piece in kitchen ovens, microwaves, direct coals.',
        'Do not use it as a food container.',
        'Avoid the use of salt cooking techniques as they discolor and wear down the surface.',
        'For pieces with non-stick coating, avoid the use of metallic and/or sharp utensils, as they can damage the coating. We recommend the use of the Hudson Steel and Nylon Utensils Set of 6 pieces.'
      ],
      extras:[
        {
          title:'Wash Care',
          subTitle:'Extend the shelf life of your products',
          items:[
            'Before its first use, wash with plenty of hot water and neutral detergent if possible, then dry with a dry cloth.',
            'After using the piece, leave it to cool on the stove for a few minutes and then proceed to wash it. Sudden temperature changes are not recommended.',
            'If food remains adhere during cooking, add a small amount of water when the piece is cold. Moisture will cause the remains to detach. It is recommended to support the piece on a grid cloth at the time of washing, to avoid scratches.',
            'Always wash your pots and pans with soft sponges and detergents and dry them with a soft cloth. Avoid the use of abrasive or metal sponges as this will affect the non-stick coating and the external coating of your piece.',
            'Do not leave food in pots and pans for a long time, because the salt they contain can leave stains.'
          ]
        },
        {
          title:'Care in Storage',
          subTitle:'Keep your products impeccable.',
          items:[
            'Store the pieces in a dry place (well dry, uncovered or partially covered) to preserve the enamel coating on the handles and knobs, avoid scratches and bumps.',
            'When storing pieces with non-stick coating on the inside, do not turn the lids inside of them as the knobs can scratch the inside. To store the stacked pieces, place a cloth or towel between one and the other.',
            'Warning: do not keep the pieces in their original boxes for a long period of time. The cardboard can moisten the piece.'
          ]
        }
      ]
    },


    {
      tipo:'usosYCuidados',
      foto:fotoPavas,
      title:'Kettles and Coffee Pots',
      subtitle:'',
      recomendacionesGenerales:[
        'Avoid the use of maximum fires. Use your product centered on the burner. The flame must not exceed the base of the piece to avoid burns and/or discoloration on the Cuidado en el Lavadocoating or on the handles.',
        'Never use this type of piece in kitchen ovens, microwaves, direct coals.',
        'Do not use it as a food container.'
      ],
      extras:[
        {
          title:'Wash Care',
          subTitle:'Extend the shelf life of your products',
          items:[
            'To wash your kettle or coffee pot and make it last much longer, do it with a soft sponge so as not to damage the color.',
            'If you have tartar inside, you can remove it by boiling a little water with vinegar for at least 5 minutes.',
          ]
        },
        {
          title:'Care in Storage',
          subTitle:'Keep your products impeccable.',
          items:[
            'Store the pieces in a dry place to preserve the enamel coating on the handles and knobs, avoid friction and knocks.'
          ]
        }
      ]
    },


    {
      tipo:'usosYCuidados',
      foto:fotoNilon,
      title:'Nylon and Silicone Utensils',
      subtitle:'',
      recomendacionesGenerales:[
        'Avoid using direct fire on nylon or silicone.',
        'Never use this type of piece in kitchen ovens, microwaves, direct coals.',
        'Use your non-stick products with nylon or silicone utensils to avoid scratching the surface and to last much longer: In addition, it is a very stable material that resists high temperatures.'
      ],
      extras:[
        {
          title:'Wash Care',
          subTitle:'Extend the shelf life of your products',
          items:[
            'Silicone and Nylon utensils, although they are easy to clean. You have to take into account: Soft sponges should be used; they should be washed with hot water and should not be soaked for a long time with cleaning products because they could absorb their aromas.',
            'If you wash it in the dishwasher, you must take into account that it should not be put in with food remains and that non-abrasive detergents should be used.i lo lavas en lavavajillas se debe tener en cuenta que no se deben meter con restos de comida y se deben usar detergentes que no sean abrasivos',
          ]
        },
        {
          title:'Care in Storage',
          subTitle:'Keep your products impeccable.',
          items:[
            'Store the pieces in a dry place'
          ]
        }
      ]
    },


    {
      tipo:'usosYCuidados',
      foto:fotoInoxUtensilios,
      title:'Stainless Steel Utensils',
      subtitle:'',
      recomendacionesGenerales:[
        'Avoid using direct fire on these utensils.',
        'Never use this type of piece in kitchen ovens, microwaves, direct coals.',
        'Use your stainless steel products with this type of cookware. Avoid using it on non-stick products.'
      ],
      extras:[
        {
          title:'Wash Care',
          subTitle:'Extend the life of your products',
          items:[
            'Cleaning stainless steel utensils requires only water, detergent and a cloth.',
            'If you wash it in the dishwasher, you must take into account that it should not be put in with food remains and that non-abrasive detergents should be used.',
          ]
        },
        {
          title:'Care in Storage',
          subTitle:'Keep your products impeccable.',
          items:[
            'Store the pieces in a dry place.',
          ]
        }
      ]
    },


    {
      tipo:'usosYCuidados',
      foto:fotoVidrio,
      title:'Oven Glass',
      subtitle:'',
      recomendacionesGenerales:[
        'Avoid the use of direct fire on this type of product.',
        'These pieces are suitable for gas and electric ovens and microwaves.',
        'These pieces are also suitable for refrigerators and freezers.'
      ],
      extras:[
        {
          title:'Wash Care',
          subTitle:'Extend the life of your products',
          items:[
            'Our oven glass products require only water, detergent and a cloth.',
            'If you wash it in the dishwasher, keep in mind that it should not be put in with food remains and that you should use non-abrasive detergents.',
          ]
        },
        {
          title:'Care in Storage',
          subTitle:'Keep your products impeccable.',
          items:[
            'Store the pieces in a dry place.',
          ]
        }
      ]
    },


    {
      tipo:'usosYCuidados',
      foto:fotoInox,
      title:'Stainless steel products',
      subtitle:'',
      recomendacionesGenerales:[
        'Avoid the use of maximum fires. Use your product centered on the burner. The flame must not exceed the base of the piece to avoid burns and/or discoloration on the outside or on the handles.',
        'Do not leave empty utensils on a heat source (unless you need to heat it for a few seconds before adding the oil).',
        'Never use this type of piece in kitchen ovens, microwaves, direct coals.',
        'Do not use it as a food container.',
        'Avoid the use of salt cooking techniques as they can cause stains and wear out the surface.',
        'For pieces that are type of pieces without non-stick coating, you can use Stainless Steel utensils, however, we recommend the use of sharp products, as they can damage the coating.'
      ],
      extras:[
        {
          title:'Wash Care',
          subTitle:'Extend the life of your products',
          items:[
            'Before its first use, wash with plenty of hot water and neutral detergent if possible, then dry with a dry cloth.',
            'After using the piece, leave it to cool on the stove for a few minutes and then proceed to wash it. Sudden temperature changes are not recommended.',
            'If food remains adhere during cooking, add a small amount of water when the piece is cold. Moisture will cause the remains to detach. It is recommended to support the piece on a grid cloth at the time of washing, to avoid scratches.',
            'Wash them with neutral soap and lukewarm water and always use a soft cloth so as not to scratch them and prevent stains from forming.',
            'Do not leave food in pots and pans for a long time, because the salt they contain can leave stains.'
          ]
        },
        {
          title:'Care in Storage',
          subTitle:'Keep your products impeccable.',
          items:[
            'Store the pieces in a dry place (well dry, uncovered or partially covered) to preserve the enamel coating on the handles and knobs, avoid scratches and bumps.',
            'Warning: do not keep the pieces in their original boxes for a long period of time. The cardboard can moisten the piece.',
          ]
        }
      ]
    },


    {
      tipo:'usosYCuidados',
      foto:fotoMolderia,
      title:'Bakeware ',
      subtitle:'With Non-Stick',
      recomendacionesGenerales:[
        'Avoid using on burners, hot coals and microwaves.',
        'All our pieces are suitable for gas and electric ovens.',
        'Do not use it as a food container.',
        'Avoid the use of salt cooking techniques as they can cause stains and wear out the surface.',
        'For pieces with non-stick coating, avoid the use of metallic and/or sharp utensils, as they can damage the coating. We recommend the use of the Hudson Steel and Nylon Utensils Set of 6 pieces'
      ],
      extras:[
        {
          title:'Wash Care',
          subTitle:'Extend the life of your products',
          items:[
            'Before its first use, wash with plenty of hot water and neutral detergent if possible, then dry with a dry cloth.',
            'After using the piece, leave it to cool on the stove for a few minutes and then proceed to wash it. Sudden temperature changes are not recommended.',
            'If food remains adhere during cooking, add a small amount of water when the piece is cold. Moisture will cause the remains to detach. It is recommended to support the piece on a grid cloth at the time of washing, to avoid scratches.',
            'Always wash your pieces with soft sponges and detergents and dry them with a soft cloth. Avoid the use of abrasive or metal sponges as this will affect the non-stick coating and the external coating of your piece.',
            'Do not leave food in the molds for a long time, because the salt they contain can leave stains.',
          ]
        },
        {
          title:'Care in Storage',
          subTitle:'Keep your products impeccable.',
          items:[
            'Store the pieces in a dry place (well dry, uncovered or partially covered) to preserve the enamel coating on the handles and knobs, avoid scratches and bumps.',
            'When storing pieces with non-stick coating on the inside, do not turn the lids inside of them as the knobs can scratch the inside. To store the stacked pieces, place a cloth or towel between one and the other.',
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
  
  
  return state
}
export default rootReducer