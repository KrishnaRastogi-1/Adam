"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WarpText from "@/components/WarpText";
import Navbar from "./navbar";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const leftHandRef = useRef<HTMLDivElement>(null);
    const rightHandRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set(leftHandRef.current, {
                x: -20,
                y: -250,
                scale: 1,
            });

            gsap.set(rightHandRef.current, {
                x: 10,
                y: 300,
                scale: 1,
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true,
                },
            });
            tl.to(
                leftHandRef.current,
                {
                    x: 120,
                    y: -127,
                    scale: 1.55,
                    ease: "power2.out",
                    duration: 1,
                },
                0
            );

            tl.to(
                rightHandRef.current,
                {
                    x: -115,
                    y: 140,
                    scale: 1.55,
                    ease: "power2.out",
                    duration: 1,
                },
                0
            );

            tl.to(
                textRef.current,
                {
                    opacity: 0,
                    ease: "none",
                    duration: 0.3,
                },
                0.7
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <main ref={sectionRef} className="h-[300vh]">
            <section className="sticky top-0 flex h-screen w-full items-center justify-between overflow-hidden">
                <div className="absolute top-5 left-1/2 z-[60] -translate-x-1/2">
                    <Navbar />
                </div>
                <div
                    ref={textRef}
                    className="absolute inset-0 z-50 flex items-center justify-center"
                >
                    <WarpText
                        text="Bend the moment"
                        color="#5E4750"
                        warpStrength={0.09}
                        warpScale={1.7}
                        speed={0.55}
                        pointerInfluence={0.42}
                        pointerStrength={0.38}
                        refraction={0.012}
                        ripple
                        fontSize={116}
                        fontWeight={800}
                        style={{ height: "320px" }}
                        fontFamily="mono"
                        letterSpacing={-0.06}
                        lineHeight={0.9}
                    />
                </div>

                <div ref={leftHandRef}>
                    <Image
                        src="/left_hand.png"
                        alt="left hand"
                        width={480}
                        height={450}
                    />
                </div>

                <div ref={rightHandRef}>
                    <Image
                        src="/right_hand.png"
                        alt="right hand"
                        width={480}
                        height={450}
                    />
                </div>
            </section>
        </main>
    );
}