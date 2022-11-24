import { Link } from 'react-router-dom';

import './style.css';

export default function ButtonNext() { //colocar link de acordo coma pagina em que estiver
    return (
        <div className="next">
            <Link to="/">

            </Link>
        </div>
    )
}

export default function ButtonPrevious() { //colocar link de acordo coma pagina em que estiver
    return (
        <div className="previous">
            <Link to="/"> 

            </Link>
        </div>
    )
}