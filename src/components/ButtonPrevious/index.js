import Image from 'next/image'
import prev from '../../assets/seta-voltar.png'

export default function ButtonPrevious({ children, path }) {
    return (
        <div>
            <a href={path}><Image 
                src={prev} 
                alt="" 
                quality={100}
                width={70}
                height={70}
            /></a>
            {children}
        </div>
    )
}