import { useState, useMemo } from "react"
import { useNavigate } from "react-router-dom"

const UseMemoPage = () => {

    const navigate = useNavigate();

    const handleReturnHome = () => {
        navigate('/')
    }

    const [age, setAge] = useState(32)

    const handleChangeAge = () => {
        setAge(prev => prev === 32 ? 40 : 32)
    }

    const calculo = useMemo(() => {
        console.log('calculou', age )
        return 10 * age;
    }, [age])

    console.log('renderizou', calculo)

    return (
        <div>
            <button onClick={handleReturnHome}>Home</button>
            <hr />
            
            <p>{age}</p>
            <button onClick={handleChangeAge}>Alterar</button>
        </div>
    )
}

export {UseMemoPage}