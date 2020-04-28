import React from 'react';

import '../assets/styles/app.scss'
import Header from '../components/header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarrouselItem';
import Footer from '../components/Footer';

const App = () =>(
    <div className="App">
        <Header />
        <Search/>

        <Categories title='Mi lista'>
            <Carousel>
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
            </Carousel>
        </Categories>

        <Categories title='Mejor valorados'>
            <Carousel>
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
            </Carousel>
        </Categories>

        <Categories title='Exclusivos de Platzi Video'>
            <Carousel>
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
            </Carousel>
        </Categories>


        <Footer/>
    </div>
)
export default App