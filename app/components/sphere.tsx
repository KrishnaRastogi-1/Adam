import InfiniteMenu from "@/components/InfiniteMenu";


export default function Sphere() {
    const items = [
        {   
            image: 'https://assets.lummi.ai/assets/QmXgEt541VLPBwk6TkAEnxqi9C7DE7UXkegKsaGMCHcK38?auto=format&w=1500',
            link: 'https://google.com/',
            title: '', 
            description: ''
        },
        {
            image: 'https://assets.lummi.ai/assets/QmVtFA9djGFUFJZnzP79AKvDcJNrVPX29UJiUpBBH9P3ef?auto=format&w=1500',
            link: 'https://google.com/',
            title: '',
            description: ''
        },
        {
            image: 'https://images.unsplash.com/photo-1776394254711-4a0d7345269a?q=80&w=600&h=600&fit=crop&sat=-100&auto=format',
            link: 'https://google.com/',
            title: '',
            description: ''
        },
        {
            image: 'https://images.unsplash.com/photo-1781242629922-6f39cc3671cd?q=80&w=600&h=600&fit=crop&sat=-100&auto=format',
            link: 'https://google.com/',
            title: '',
            description: ''
        }
    ];

    return (
        <div className="flex relative h-screen w-screen items-center text-white">
            <InfiniteMenu items={items}
                scale={0.8}
            />
        </div>
    )
}