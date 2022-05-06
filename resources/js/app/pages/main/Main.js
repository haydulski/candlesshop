import React, { useEffect, useRef } from 'react';
import { Container, Heading, Slider } from './Main.css.js'
import Section1 from './Section1.js';
import Section2 from './Section2.js';
import Section3 from './Section3.js';
import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Main = () => {

    const pageTitle = useRef(null)
    const slides = useRef(null)
    const title = gsap.timeline()
    const sliderAnimation = gsap.timeline()


    useEffect(() => {
        // page titl
        if (window.matchMedia("(min-width:1024px)").matches) {

            gsap.registerPlugin(ScrollTrigger)
            title.from(pageTitle.current, 0.4, { x: -200, delay: .5, duration: .5, opacity: 0 })

            // slider 


            sliderAnimation.from('.slide.slide1', {
                xPercent: -100, opacity: 0.6
            }).from('.slide.slide2', {
                xPercent: 100, opacity: 0.6
            })

            ScrollTrigger.create({
                animation: sliderAnimation,
                trigger: '.main-slider',
                start: "top -50px",
                end: "+=4000",
                // snap: 1 / 2,
                scrub: 2,
                pin: true,
                anticipaePin: 1
            })

            return () => {
                sliderAnimation.kill();
                title.kill();
            };
        }
    }, [])

    return (
        <div>
            <Container>
                <Heading ref={pageTitle}>
                    candles<br />shop
                </Heading>
            </Container>
            <Slider className='main-slider' useRef={slides}>
                <Section1 />
                <Section2 />
                <Section3 />
            </Slider>
        </div>
    )
}
export default Main
