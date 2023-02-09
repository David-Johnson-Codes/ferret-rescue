import styles from '../styles/Donate.module.css'
import Image from 'next/image'
//need to figure out a donate button thing. Probably with paypal.

const Donate = () => {
    return (
        <section className={styles.donateContainer}>
            <Image className={styles.logoImg} src={'/paypal-donate.png'} alt={"Donate Button"} width={115} height={70} />

        </section>
    );
}

export default Donate;