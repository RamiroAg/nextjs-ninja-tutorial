import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {

    const router = useRouter();

    useEffect(() => { //se ejecutará la función enviada por parámetro cuando el componente se monte por primera vez
        // console.log('useEffect ejecutado')
        const timeout = 3000;
        setTimeout(() => {
            // router.go(-1);
            router.push('/');
        }, timeout);
    }, []) //este array vacío indica que esto se ejecutará solo una vez, incluso si el estado del componente cambia

    return (
        <div className="not-found">
            <h1>Ups...</h1>
            <h2>Esta página no pudo ser encontrada</h2>
            <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
        </div>
    );
}

export default NotFound;