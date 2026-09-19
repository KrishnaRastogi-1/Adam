import ScrollExpand from "@/components/ScrollExpand";


export default function Quote() {
    return (
        <div>
            <div className="font-[Nippo-Bold]">
                <ScrollExpand 
                    
                    src="/monkey.png"
                    alt="Monkey"
                    title="Peoples"
                    scrollHint="Scroll inside the frame"
                    useWindowScroll
                >
                    <p className="text-6xl">People are all imitations of monkeys. Gods are all imitations of people.</p>
                </ScrollExpand>
            </div>
        </div>
    )
}