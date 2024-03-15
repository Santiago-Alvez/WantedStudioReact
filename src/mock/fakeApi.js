const productos = [
    {
        id:'1',
        name:'Cera para el Pelo Natural - Fijación Media ',
        stock:5,
        price:628,
        description:'Cera para el pelo de acabado natural que aporta un ligero brillo, con su fijación media permite el movimiento del cabello, para aquellos peinados que quieres que queden poco marcados. Se elimina fácilmente con agua. No deja residuos.',
        image:'../images/cera-para-el-pelo-natural-fijacion-media.jpg',
        category:'cera'
    },
    {
        id:'2',
        name:'Cera para el Pelo Strong - Fijación Fuerte ',
        stock:5,
        price:628,
        description:'Cera de alta fijación y acabado brillante. Se puede aplicar tanto en cabello seco como húmedo. Se disuelve en el agua, por lo que se elimina fácilmente sin dejar residuos.',
        image:'../images/cera-para-el-pelo-strong-fijacion-fuerte.jpg',
        category:'cera'
    },
    {
        id:'3',
        name:'Cera para el pelo Mate - Fijación Media',
        stock:5,
        price:628,
        description:'Cera de peinar para un acabado total mate, sin brillos. Fijación Media que permite controlar tus peinados, sin perder la flexibilidad del cabello. Se elimina fácilmente del pelo con agua y no deja residuos en el pelo.',
        image:'../images/cera-para-el-pelo-mate-fijacion-media.jpg',
        category:'cera'
    },
    {   
        id:'4',
        name:'Densify - Champú Anticaída y Redensificante',
        stock:5,
        price:610,
        description:'Beardburys Densify es un champú redensificante que ayuda a frenar la caída del cabello. Su fórmula rica en cafeína activa la microcirculación y el Oxycell favorece la oxigenación celular del cuero cabelludo. El Aloe Vera acondiciona el cabello dejándolo más suave e hidratado. Aroma mentolado para una sensación de frescor. Champú anticaída libre de parabenos.',
        image:'../images/densify-champu-anticaida-y-redensificante.jpg',
        category:'shampoo'
    },
    {
        id:'5',
        name:'Grey - Champú Matizador para Cabellos Blancos y Rubios',
        stock:6,
        price:610,
        description:'Champú específico para cabello blanco y gris. Los pigmentos que contiene el champú lo convierten en matizador de canas. Fórmula enriquecida con una refinada mezcla de aceites, Aloe Vera y Tomillo para aportar hidratación y sedosidad del cabello y purificar el cuero cabelludo.',
        image:'../images/grey-champu-matizador-para-cabellos-blancos-y-rubios.jpg',
        category:'shampoo'
    },
    {
        id:'6',
        name:'Clear - Champú para Cabellos Grasos',
        stock:3,
        price:610,
        description:'Champú purificante y calmante que elimina eficazmente el exceso de grasa. Fórmula suave que respeta el pH, con extracto de tomillo, menta y ginseng disminuyendo el picor y la irritación. Cabello limpio, brillante y suelto durante más días.',
        image:'../images/clear-champu-para-cabellos-grasos.jpg',
        category:'shampoo'
    },
    {
        id:'7',
        name:'Tinte para Barba y Bigote | Champú de Color - Negro',
        stock:2,
        price:567,
        description:'Coloración semi-permanente con cobertura graduable en formato champú aplicable en cabello, barba y bigote para cubrir canas. Fija en sólo 5 minutos con un acabado natural (acabado intenso con 10 minutos de exposición). Sin efecto raíz ya que va desapareciendo progresivamente con los lavados. Incluye el activador del color.',
        image:'../images/tinte-para-barba-y-bigote-champu-de-color-negro.jpg',
        category:'tintas'  
    },
    {
        id:'8 ',
        name:'Pack Tinte para Barba y Bigote Gris | Tinte+Bowl+Paletina',
        stock:1,
        price:711,
        description:'Coloración semi-permanente con cobertura graduable en formato champú aplicable en cabello, barba y bigote para cubrir canas. Fija en sólo 5 minutos con un acabado natural (acabado intenso con 10 minutos de exposición). Sin efecto raíz ya que va desapareciendo progresivamente con los lavados.      Incluye todo lo necesario para hacer tu tinte: Color, Activador, Bowl y Paletina. Fórmula libre de amoniaco y parabenos. Fácil aplicación. Perfume suave. Para zonas pequeñas como la barba y el bigote se recomienda utilizar una paletina de tinte para extender mejor el producto. Para el primer lavado se recomienda secar el cabello o la barba con una toalla de barbero de color oscuro. 50 gr.',
        image:'../images/pack-tinte-para-barba-y-bigote-gris-tintebowlpaletina.jpg',
        category:'ofertas'
    },

]

export const getProducts =() => {
    let error = false
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Surgio un error intente mas tarde')
            }else{
                resolve(productos)
            }
        },2000)
    })
}
export const getOneProduct =(id) => {
    return new Promise ((resolve, reject)=>{
        let error = false
        setTimeout(()=>{
            if(error){
                reject('Ocurrio un error inesperado')
            }else{
                let product= productos.find((item)=> item.id === id)
                resolve(product)
            }
        },2000)
    })    
}