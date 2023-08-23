import { useNavigate } from "react-router-dom"

const Home = () => {

    const navigate = useNavigate();

    const handleUseState = () => {
        navigate('/usestate')
    }

    const handleUseEffect = () => {
        navigate('/useeffect')
    }

    const handleUseMemo = () => {
        navigate('/usememo')
    }

    const handleUseCallBack = () => {
        navigate('/usecallback')
    }

    return (
        <div>
            <button onClick={handleUseState}>useState</button>
            <button onClick={handleUseEffect}>useEffect</button>
            <button onClick={handleUseMemo}>useMemo</button>
            <button onClick={handleUseCallBack}>useCallback</button>
        </div>
    )
}

export {Home}