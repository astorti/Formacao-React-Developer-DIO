import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const UseEffectPage = () => {

    const navigate = useNavigate();

    const handleReturnHome = () => {
        navigate('/')
    }

    const [programmingLanguage, setProgrammingLanguage] = useState('Javascript')

    const handleChangeProgrammingLanguage = () => {
        setProgrammingLanguage(prev => prev === 'Javascript' ? 'C#' : 'Javascript')
    }

    useEffect(() => {
        alert("Programming language changed to " + programmingLanguage);
    }, [programmingLanguage])

    return (
        <div>
            <button onClick={handleReturnHome}>Home</button>
            <hr/>

            <p>{programmingLanguage}</p>
            <button onClick={handleChangeProgrammingLanguage}>Alterar</button>
        </div>
    )
}

export {UseEffectPage}