import React from 'react';
import '../assets/styles/components/carousel.scss'

const Carousel = ({children}) => {
    return ( 
        <section class="carousel">
            <div class="carousel__container">
                {children}
            </div>
        </section>
     );
}
 
export default Carousel;