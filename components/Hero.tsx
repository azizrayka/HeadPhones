'use client'
import gsap from "gsap";
import Image from "next/image"
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
    

const Hero = () => {
    useGSAP(() => {
        const tl4 = gsap.timeline({
            scrollTrigger: {
                trigger: ".pure",
                start: "top 95%",
                end: "bottom bottom",
                scrub: true
            }
        });
        tl4.from(".movingtexte",{
            y:70,
            opacity: 0,
            duration:1.5,
            ease: "power2.inOut",
        });
        const tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: ".photos",
                start: "top 95%",
                end: "bottom bottom",
                scrub: true
            }
        });
        tl3.to(".headphones",{
            x:30,
            y:2300,
            rotate: 0,
            duration: 1.5,
        }).to(".headphones",{
            x:10,
            y:2950,
            width: "15%",
            duration: 1.5,
        })
        gsap.fromTo(".img1",{
            y:-15,
            x:-15,
            opacity: 0,
        },{
            y:0,
            x:0,
            opacity: 1,
            duration: 4,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: ".img1",
                start: "top 95%",
                end: "bottom bottom",
                scrub: true
            }
        });
        gsap.fromTo(".master_title",{
            opacity: 0,
            y:-15,
        },{
            opacity: 1,
            y:0,
            duration: 4,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: ".master_title",
                start: "top 95%",
                end: "bottom bottom",
                scrub: true
            }
        });
       const tl = gsap.timeline({
           scrollTrigger:{
               trigger: ".true",
               start: "top center",
               end: "bottom bottom",
               scrub: true
           }
       });
       tl.to(".headphones",{
           x:350,
           y: 420,
           duration: 1.5,
           rotate: 90
       });
       const tl2 = gsap.timeline({
           scrollTrigger:{
               trigger: ".master",
               start: "top bottom",
               end: "bottom bottom",
               scrub: true
           }
       });
       tl2.to(".headphones",{
           x:90,
           y: 1500,
           duration: 4,
           rotate: 45
       });
    });

    useEffect(() => {
        document.querySelectorAll(".ltl").forEach((lettre) => {
            gsap.from(lettre,{
                rotate: -35,
                duration: 1.5,
                opacity: -1.5,
            });
        });
        document.querySelectorAll(".ltmr").forEach((lettre) => {
            gsap.from(lettre,{
                y: -150,
                rotate: -15,
                duration: 1.5,
                opacity: -1.5,
            });
        });
        document.querySelectorAll(".ltml").forEach((lettre) => {
            gsap.from(lettre,{
                y: 150,
                rotate: 15,
                duration: 1.5,
                opacity: -1.5,
            });
        });
        document.querySelectorAll(".ltm").forEach((lettre) => {
            gsap.from(lettre,{
                x: 150,
                rotate: 15,
                duration: 1.5,
                opacity: -1.5,
            });
        });
        document.querySelectorAll(".lbm").forEach((lettre) => {
            gsap.from(lettre,{
                x: -150,
                rotate: -15,
                duration: 1.5,
                opacity: -1.5,
            });
        });
        gsap.timeline().to(".headphones",{
            opacity: 0.1,
            duration: 1.5,
        }).to(".headphones",{
            y:-250,
            opacity: 1,
            duration: 1.5,
            width: "40%",
        });
    },[]);

  return (
    <div className="flex flex-col">

        { /** Hero */}

        <div className="relative h-screen flex flex-col items-center justify-center">
            <Image className="absolute opacity-0 top-90 z-5 headphones" src="/brown.png" alt="logo" width={140} height={130} />
            <div className="absolute top-40 flex text-[#805538] text-[12vw] font-bold z-2">
                <div className="ltl">M</div>
                <div className="ltml">O</div>
                <div className="ltm">D</div>
                <div className="ltl">E</div>
                <div className="ltmr">R</div>
                <div className="ltl">N</div>
            </div>
            <div className="absolute top-80 flex text-[#805538] text-[12vw] font-bold z-2">
                <div className="ltml">H</div>
                <div className="ltmr">A</div>
                <div className="ltm">R</div>
                <div className="lbm">M</div>
                <div className="ltml">O</div>
                <div className="lbm">N</div>
                <div className="ltmr">Y</div>
            </div>
        </div>

        { /** True Carity */}

        <div className="flex flex-col mx-20 h-screen pt-20 true">
            <span className="text-[#805538] text-[6vw] font-bold uppercase leading-none">
                <p>True</p>
                <p>Carity</p>
            </span>
            <span className="mt-7">
                <p>Engineered for clarity, comfort, and immersive sound -</p>
                <p>Audira redefines your listening experience with style and </p>
                <p>performance in perfect harmony.</p>
            </span>
            <button className="bg-black text-white rounded-lg py-2 px-5 cursor-pointer mt-7 w-40">Buy Now</button>
            <div className="flex flex-row gap-5">
                <div className="flex flex-col border-solid border-black border-2 w-fit py-4 px-10 mt-30 rounded-xl">
                    <span className="font-bold text-xl">CRYSTAL-CLEAR AUDIO</span>
                    <span>Hear every detail with balanced bass and<br/> studio-quality mids and highs.</span>
                </div>
                <div className="flex flex-col border-solid border-black border-2 w-fit py-4 px-10 mt-30 rounded-xl">
                    <span className="font-bold text-xl">ALL-DAY COMFORT</span>
                    <span>Lightweight build with plush ear cushions<br/> and ergonomic fit.</span>
                </div>
                <div className="flex flex-col border-solid border-black border-2 w-fit py-4 px-10 mt-30 rounded-xl">
                    <span className="font-bold text-xl">CRYSTAL-CLEAR AUDIO</span>
                    <span>Hear every detail with balanced bass and<br/> studio-quality mids and highs.</span>
                </div>
            </div>
        </div>

        { /** MasterBeat */}

        <div className="relative flex flex-col mx-20 h-auto mb-20 master">
            <span className="text-[#805538] text-[13vw] font-bold uppercase mx-auto master_title">MASTERBEAT</span>
            <div className="flex flex-row mt-20">
                <video src="/video.mp4" muted autoPlay loop className="w-140 h-160"/>
                <div className="flex flex-col gap-4 ml-auto">
                    <span>
                        <p>Crafted for the modern audiophile, Audira headphones</p>
                        <p>deliver sound so rich, it pulses through your senses. From</p>
                        <p>crisp highs to deep, rolling bass-you don&rsquo;t just hear it, you</p>
                        <p>feel it.</p>
                    </span>
                    <span>
                        <p>Whether you&rsquo;re in focus mode or free flow, the precision-</p>
                        <p>tuned audio adapts to your pace. With Masterbeat, music</p>
                        <p>becomes your personal soundtrack-bold, immersive,</p>
                        <p>unforgettable.</p>
                    </span>
                </div>
            </div>
        </div>

        { /** photos */}

        <div className="relative flex mx-20 h-fill photos">
            <Image className="img1 absolute rounded-md z-5 border-solid border-white border-10 w-50 h-40 left-10 rotate-[20deg]" src="/img1.jpeg" alt="logo" width={140} height={130} />
            <Image className="img1 absolute rounded-md z-5 border-solid border-white border-10 w-100 h-70 top-20 left-230 rotate-[20deg]" src="/img2.jpeg" alt="logo" width={140} height={130} />
            <Image className="img1 absolute rounded-md z-5 border-solid border-white border-10 w-70 h-50 top-60 left-50 rotate-[-20deg]" src="/img3.jpeg" alt="logo" width={140} height={130} />
            <div className="mt-130 mx-auto flex flex-col">
                <span  className="text-[#805538] text-[6vw] font-bold mx-auto">Top Picks</span>
                <div className="flex flex-row gap-50 mt-10">
                    <div className="flex flex-col">
                        <Image className="w-60 h-60 pb-6" src="/green.png" alt="logo" width={140} height={130} />
                        <span className="pl-20">Audira One</span>
                        <span className="pl-23">$44,49</span>
                    </div>
                    <div className="flex flex-col justify-end">
                        <span>Audira Pulse</span>
                        <span className="pl-5">$79,99</span>
                    </div>
                    <div className="flex flex-col">
                        <Image className="w-60 h-60 pb-6" src="/black.png" alt="logo" width={140} height={130} />
                        <span className="pl-15">Audira Max Pro</span>
                        <span className="pl-20">$114,99</span>
                    </div>
                </div>
            </div>
        </div>

        { /** Pure */}

        <div className="relative flex flex-row gap-20 h-auto m-20 pure">
            <Image className="w-180 h-150 rounded-md" src="/img4.jpg" alt="logo" width={140} height={130} />
            <div className="movingtexte">
                <span className="text-[#805538] text-[6vw] font-bold uppercase leading-none">
                    <p>Pure</p>
                    <p>Escape</p>
                </span>
                <span>
                    <p className="mt-10">Step into a world where every note feels alive. Audira</p>
                    <p>headphones are engineered to create a sound experience</p>
                    <p className="mb-5">that surrounds you-deep, rich, and breathtaking.</p>
                    <p>Whether you&lsquo;re working, relaxing, or moving, our design</p>
                    <p>blends comfort and clarity for every lifestyle. You don&apos;t just</p>
                    <p>listen - you feel the moment.</p>
                </span>
            </div>
        </div>

        {/* Footer */}

        <div className="flex flex-col pb-4">
            <div className="w-[90%] mx-auto border-t-2 border-[#805538]" />
            <div className="flex items-center justify-between px-20 pt-5 w-full">
                <Image
                    className="w-28 object-contain"
                    src="/logo.png"
                    alt="Audira logo"
                    width={110}
                    height={100}
                />
                <div className="flex flex-row gap-6">
                    <Image
                        className="w-7 h-7 object-contain cursor-pointer hover:opacity-70 transition-opacity"
                        src="/fb.png"
                        alt="Facebook"
                        width={32}
                        height={32}
                    />
                    <Image
                        className="w-8 h-8 object-contain cursor-pointer hover:opacity-70 transition-opacity"
                        src="/insta.png"
                        alt="Instagram"
                        width={32}
                        height={32}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
