import Image from 'next/image'
import next from '../../assets/seta-next.png'

export default function ButtonNext({ children, path }) { 
    return (
        <div>
            <a href={path}><Image 
                src={next} 
                alt="" 
                quality={100}
                width={70}
                height={70}
            /></a>
            {children}
        </div>
    )
}

/*
    <a href={path}><button 
        className="bg-orange-500 px-6 py-4 rounded text-gray-900 font-bold text-sm uppercase hover:bg-orange-700"
        type="submit"
    >
    Avançar
    </button>
    </a>
            
*/