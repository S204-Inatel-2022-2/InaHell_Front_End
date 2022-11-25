import Image from 'next/image'
import logo from '../../assets/logo.png'


export default function Title() {
    return (
        <div className="title">
            <a href="/"><Image 
                src={logo} 
                alt="" 
                quality={100}
                width={180}
                height={180}
            /></a>
        </div>
    )
}