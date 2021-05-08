import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
	return (
		<>
			<Head>
				<title>Guti Ninja List | Home</title>
				<meta name="keyword" content="ninjas guti"/>
			</Head>

			<div>
				{/* <div className={styles.container}> */}
				{/* se agrega así la clase para que sea única para este componente */}
				<h1 className={styles.title}>Homepage</h1>
				<p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ex quas fuga impedit neque labore earum dolores repudiandae ipsam, deleniti ab magnam repellat esse aliquam magni qui reiciendis nulla odio!</p>
				<p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ex quas fuga impedit neque labore earum dolores repudiandae ipsam, deleniti ab magnam repellat esse aliquam magni qui reiciendis nulla odio!</p>
				<p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ex quas fuga impedit neque labore earum dolores repudiandae ipsam, deleniti ab magnam repellat esse aliquam magni qui reiciendis nulla odio!</p>
				<Link href="/guti">
					<a className={styles.btn}>See Guti Listing</a>
				</Link>
			</div>
		</>
	)
}
