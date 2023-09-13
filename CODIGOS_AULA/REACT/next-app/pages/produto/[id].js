import { useRouter } from "next/router"

export default function Produto() {
    const route = useRouter()
    const {id} = route.query
    return (
        <>
            <h1>Produto {id}</h1>
        </>
    )
}
