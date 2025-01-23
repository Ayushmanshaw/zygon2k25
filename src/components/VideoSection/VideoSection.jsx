import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles.css';

gsap.registerPlugin(ScrollTrigger);

const VideoSection = () => {
    useEffect(() => {

        gsap.set('.slidem', {
            scale: 10,
        });

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.home',
                start: 'top top',
                end: 'bottom top',
                pin: true,
                pinSpacing: true,
                scrub: 6,
            },
        });

        timeline
            .to(
                '.videoDiv',
                {
                    '--clip': '0%',
                    ease: 'power2',
                },
                'flag-a'
            )
            .to(
                '.slidem',
                {
                    scale: 1.2,
                    ease: 'power2',
                },
                'flag-a'
            )
            .to(
                '.lft-side',
                {
                    xPercent: -20,
                    ease: 'power2',
                    stagger: 0.3,
                },
                'flag-a'
            )
            .to(
                '.rht-side',
                {
                    xPercent: 10,
                    ease: 'power2',
                    stagger: 0.3,
                },
                'flag-a'
            );

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div className="main w-full">

            <div className="home section w-full h-screen relative">
                <div
                    style={{ '--clip': '100%' }}
                    className="videoDiv w-full h-screen absolute z-[2] top-0 left-0 bg-black overflow-hidden"
                >
                    <video
                        className="absolute w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        src="video1.mp4"
                        autoPlay
                        muted
                        loop
                        controls
                    ></video>
                </div>


                <div className="marqueesContainer w-full h-screen relative overflow-hidden">
                    <div className="slidem scale-[1.1] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%]">

                        {['lft-side', 'rht-side', 'lft-side', 'rht-side'].map((side, index) => (
                            <div
                                key={index}
                                className={`row ${side} w-full py-3 flex items-center gap-5 whitespace-nowrap ${side === 'lft-side' ? '-translate-x-[60px]' : '-translate-x-[190px]'
                                    }`}
                            >
                                {[
                                    'Energetic',
                                    'Electrifying',
                                    'Vibrant',
                                    'Ignite',
                                    'Sparkling',
                                    'Unleashed',
                                    'Dynamic',
                                    'Creativity',
                                    'Zygon',
                                ].map((text, idx) => (
                                    <div key={idx} className="elem flex items-center gap-3">
                                        <h1 className="text-3xl">{text}</h1>
                                        {text !== 'Zygon' && (
                                            <div className="imgdiv w-[1.9rem] h-[1.9rem] bg-yellow-500 rounded-full"></div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default VideoSection;
