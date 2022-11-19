import React from 'react'
import About from './About'
import ChooseUs from './ChooseUs'
import Contracts from './Contracts'
import Counter from './Counter'
import { Employees } from './Employees'
import Slider from './Slider'
import Testimonials from './Testimonials'
import Youtube from './Youtube'


const Welcome = () => {
    return (
        <>
            <Slider />
            <Counter />
            <About />
            <ChooseUs />
            <Youtube />
            <Employees />
            <Testimonials />
        </>

    )
}

export default Welcome