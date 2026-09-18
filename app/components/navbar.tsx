import GooeyNav from "@/components/GooeyNav";

export default function Navbar() {

    const items = [
        { label: "About", href: "#" },
        { label: "Home", href: "#" },
        { label: "Contact", href: "#" },
    ];

    return (
        <div>
            <div className="relative rounded-xl bg-black/50 px-3 py-1 shadow-sm backdrop-blur-lg">
                <GooeyNav
                    items={items}
                    particleCount={35}
                    particleDistances={[90, 10]}
                    particleR={100}
                    initialActiveIndex={0}
                    animationTime={600}
                    timeVariance={300}
                    colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                />
            </div>

        </div>
    )
}