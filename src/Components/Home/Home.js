import React,{ useEffect,useRef } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import samurai from '../../assets/samurai.jpg';
import samurai1 from '../../assets/samurai1.jpg';
import pointer from '../../assets/pointer2.png';
import SummaryJAP from '../../assets/SummJP.jpg';
import CallJP from '../../assets/callgrp.jpg';
import './Home.css';

const Home = ({moveup}) => {

    gsap.registerPlugin(ScrollTrigger);
    const ref1=useRef(null);
    const ref2=useRef(null);
    const ref3=useRef(null);
    const ref4=useRef(null);
    const ref5=useRef(null);

    useEffect(() =>{
        window.onload=()=>{
            scroll.scrollToTop();
        }
        if(moveup){
            scroll.scrollToTop();
        }
        gsap.to(ref1.current,
        {
            scrollTrigger:{
                target:ref1.current,
                toggleActions:"restart none none none"
            },
            opacity:1,
            scale:1,
            delay:0.1,
            ease:"power3",
            duration:0.4
        });
        gsap.from(ref2.current,{
            scrollTrigger:{
                target:ref2.current,
                toggleActions:"restart none none none"
            },
            opacity:0,
            width:"0%",
            delay:1,
            ease:"power3",
            duration:1
        });
        gsap.from(ref3.current,{
            scrollTrigger:{
                target:ref3.current,
                toggleActions:"restart none none none"
            },
            opacity:0,
            width:"0%",
            delay:3,
            ease:"power3",
            duration:4
        });
    },[moveup]);

    return (
        <div className="Home">
            <div className="Home_1">
                <div className="Home_2">
                    <h1>The</h1>
                    <h1>Summarizing</h1>
                    <h1>Samurai</h1>
                </div>
                <img src={samurai} alt="Warrior"/>
            </div>
            {window.innerWidth>1000?<div className="Home_3">
                <h1 className="Homehdr_1">Long text and you're running out of time?</h1>
                <div className="Homebx_1">
                    Japanese is a Japonic or Japanese-Ryukyuan language spoken mainly in Japan. According to the 2010 census there are 125 million Japanese speakers in Japan. There are another 3 million Japanese speakers elsewhere, particularly in Brazil, the USA, Peru, Argentina, Australia, Canada, the Philippines and Taiwan.
                    Japanese is part of the Japonic or Japanese-Ryukyuan language family. Related languages include the Ryukyuan languages, such as Okinawan, which are spoken in the Ryukyuan islands. This language family is classified as isolated with no known links to other language families.
                </div>
                <div className="txt_flx">
                    <span>R</span>
                    <span>E</span>
                    <span>F</span>
                    <span>I</span>
                    <span>N</span>
                    <span>E</span>
                    <span>D</span>
                </div>
                <img src={pointer} alt="" className="HomeImg_1"/>
                <h1 className="Homehdr_2">Get your text eased up in a Jiff! All thanks to our text KATANA...</h1>
                <div className="Homebx_2">
                Japanese is a Japonic or Japanese-Ryukyuan language spoken mainly in Japan. There are 125 million Japanese speakers in Japan and 3 million others in Brazil, the USA, Peru, Argentina, Australia, Canada, the Philippines and Taiwan. This language family is classified as isolated with no known links to other language families.
                </div>
            </div>:null}
            <div className="Home_4">
                    <h1 ref={ref1}>Give us your text and leave the rest to the Warrior.</h1>
                    <div className="Home4bx1" ref={ref2}>
                        <h1>Be it summarizing your text.</h1>
                        <img src={SummaryJAP} alt=""/>
                    </div>
                    <div className="Home4bx2" ref={ref3}>
                        <img src={CallJP} alt=""/>
                        <h1>Be it you wanting to vocabularize your text.</h1>
                    </div>
            </div>
            <div className="Home_5">
                <h1>Consider it done.</h1>
                <img src={samurai1} alt="" className="Home5Img1"/>
            </div>
        </div>
    );
}

export default Home;