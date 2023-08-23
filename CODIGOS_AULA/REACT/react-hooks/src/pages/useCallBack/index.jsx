import { useState, useCallback } from "react"
import { useNavigate } from "react-router-dom";

const UseCallbackPage = () => {

    const navigate = useNavigate();

    const handleReturnHome = () => {
        navigate('/')
    }

    const [technology, setTechnology] = useState('React')
    const [ color, setColor ] = useState('blue')

    const handleChangeTechonology = useCallback(() => {
        setTechnology(prev => prev === 'React' ? 'Angular' : 'React')
        setColor(prev => prev === 'blue' ? 'red' : 'blue')
        console.log(technology + ' - ' + color)
    }, [technology, color])

    return (
        <div>
            <button onClick={handleReturnHome}>Home</button>
            <hr/>

            <p>{technology + ' - ' + color}</p>
            <button onClick={handleChangeTechonology}>Alterar</button>
        </div>
    )
}

export {UseCallbackPage}