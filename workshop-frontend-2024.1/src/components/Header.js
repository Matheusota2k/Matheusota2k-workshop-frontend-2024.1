'use client'

import Nav from './Nav';


export default function Header() {
    
    return (
        <main>
        <div>
            <img src='https://t.ctcdn.com.br/tBiOezzZAuJtYldGP2IUl6ANKzs=/i489931.jpeg'className="flex bg-black flex-icon w-12 h-12 py-0 px-0 " />  
            <Nav titulo="inicio" url="/" className = 'flex  '/>
        </div>
        </main>
    );
}