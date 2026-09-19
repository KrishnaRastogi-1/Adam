import GooeyNav from "@/components/GooeyNav";

export default function Navbar() {

    const items = [
        { label: "About", href: "#" },
        { label: "Home", href: "#" },
        { label: "Contact", href: "#" },
    ];

    return (
        <div>
            <div className="relative">
                <GooeyNav
                    items={items}
                    particleCount={35}
                    particleDistances={[90, 10]}
                    particleR={100}
                    initialActiveIndex={1}
                    animationTime={600}
                    timeVariance={300}
                    colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                />
            </div>

        </div>
    )
}