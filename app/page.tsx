import Hero from "./components/hero";
import WarpText from "@/components/WarpText";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div>
      <div className="fixed z-70 top-5 left-1/2 -translate-x-1/2 items-center justify-center">
        <Navbar />
      </div>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
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
      <Hero />
      <div className="w-[600px] h-[600px] bg-red-500">

      </div>
    </div>
  );
}