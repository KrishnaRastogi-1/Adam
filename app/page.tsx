"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftHandRef = useRef<HTMLDivElement>(null);
  const rightHandRef = useRef<HTMLDivElement>(null);
  

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(leftHandRef.current, {
        x: -20,
        y: -200,
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
          markers: true
        },
      });

      // Hands move together AND zoom together
      tl.to(
        leftHandRef.current,
        {
          x: 100,
          y: -127,
          scale: 1.55,
          ease: "none",
        },
        0
      );

      tl.to(
        rightHandRef.current,
        {
          x: -102,
          y: 150,
          scale: 1.55,
          ease: "none",
        },
        0
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={sectionRef} className="h-[300vh]">
      <section className="sticky top-0 flex h-screen w-full items-center justify-between overflow-hidden">

        {/* LEFT HAND */}
        <div ref={leftHandRef}>
          <Image
            src="/left_hand.png"
            alt="left hand"
            width={500}
            height={500}
          />
        </div>

        {/* RIGHT HAND */}
        <div ref={rightHandRef}>
          <Image
            src="/right_hand.png"
            alt="right hand"
            width={500}
            height={500}
          />
        </div>

      </section>
    </main>
  );
}