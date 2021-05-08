import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                {/* <h1>Ninja List</h1> */}
                {/* <img src="/logo.png" /> */}
                <Image src="/logo.png" width={128} height={77}/>{/*  este componente hace las imágenes responsive según los parámetros que le pase */}
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/guti"><a>Ninja List</a></Link>
            
        </nav>
     );
}
 
export default Navbar;