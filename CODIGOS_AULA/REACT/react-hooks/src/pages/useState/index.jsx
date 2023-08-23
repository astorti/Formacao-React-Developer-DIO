import { useState } from "react"
import { useNavigate } from "react-router-dom";

const UseStatePage = () => {

    const navigate = useNavigate();

    const handleReturnHome = () => {
        navigate('/')
    }

    const [color, setColor] = useState('Azul')

    const handleChangeColor = () => {
        setColor(prev => prev === 'Azul' ? 'Amarelo' : 'Azul')
    }

    return (
        <div>
            <button onClick={handleReturnHome}>Home</button>
            <hr/>

            <p>{color}</p>
            <button onClick={handleChangeColor}>Alterar</button>
        </div>
    )
}

export {UseStatePage}