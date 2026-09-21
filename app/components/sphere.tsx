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
            image: 'https://assets.lummi.ai/assets/QmZqNT65TBxKxy8BJeaXbTywznt8evBHHxpbMwh1W8Jc4x?auto=format&w=1500',
            link: 'https://google.com/',
            title: '',
            description: ''
        },
        {
            image: 'https://assets.lummi.ai/assets/Qmcu28rtqnuniEiqjHDeH5fYJ3bMHaDVQ818yiCB5JsxsV?auto=format&w=1500',
            link: 'https://google.com/',
            title: '',
            description: ''
        },
        {
            image: 'https://assets.lummi.ai/assets/QmRBKbMkzU5V7CMRpBpAX8xo5Gr366xcRkYtc9NeXqwG4h?auto=format&w=1500',
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