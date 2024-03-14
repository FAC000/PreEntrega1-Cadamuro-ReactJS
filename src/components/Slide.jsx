import React from 'react'
import {Carousel} from 'react-bootstrap'

export const Slide = () => {
    return (
        <div className='mt-5 pt-5 slide-img '>
           
            <Carousel className='mt-5 div-slide '>
          
                <Carousel.Item interval={2000}>
                    <img
                        className="img-slide img-fluid w-50   "
                        src="https://fanaticosdelhardware.com/wp-content/uploads/2021/01/hx-promo-headset-cloud-stinger-core-wireless-7-1-lg-1.jpg"
                        alt="First slide"
                        
                    />
                    <Carousel.Caption>
                        <h3>PLAYER ONE</h3>
                        <p>READY?</p>
                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item interval={1500}>
                    <img
                        className=" img-slide img-fluid w-50"
                        src="https://www.byteside.com/content/images/wp-content/uploads/2021/01/razer-naga-trinity.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>LO MEJOR DEL MERCADO</h3>
                        <p>DE GAMERS, PARA GAMERS.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="img-fluid img-slide  w-50"
                        src="https://mlx.com.ar/wp-content/uploads/SlideMOB_LogitechG-2.png"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>NOS ENCARGAMOS DE TODO</h3>
                        <p>ENVIOS A TODO EL PAIS</p>
                    </Carousel.Caption>
                </Carousel.Item>
                
            </Carousel>
       
        </div>
    )
}

export default Slide