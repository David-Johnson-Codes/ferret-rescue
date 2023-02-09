import Link from 'next/link';
import styles from '../styles/NavBar.module.css'
import Image from 'next/image'



const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.imgContainer}>
                <Image className={styles.logoImg} src={'/ferretlogo.png'} alt={"site logo"} width={232} height={138} />
                <p className={styles.navPhoneNumber}>(555)555-5555</p>
            </div>
            <div className={styles.navBarList}>
                <Link href={"/"} className={styles.link}>Home</Link>
                <Link href={"/Adopt"} className={styles.link}>Adopt</Link>
                <Link href={"/Surrender"} className={styles.surrender}>Surrender</Link>
                <Link href={"/Donation"} className={styles.link}>Donate</Link>
                <Link href={"/Contact"} className={styles.link}>Contact Us</Link>
            </div>
        </nav>
    );
}

export default NavBar;