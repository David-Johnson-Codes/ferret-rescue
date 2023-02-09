import styles from '@/styles/Donation.module.css'
import Image from 'next/image'

const Donation = () => {
    return (
        <section className={styles.donateContainer}>
            <div className={styles.infoContainer}>
                <h1>Donate to Us</h1>
                <p className={styles.para}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa voluptas ut dicta, ipsam soluta itaque.</p>
                <h2 className={styles.donateHeader}>Financial Donations</h2>
                <p className={styles.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quis adipisci nulla rem, veniam dolores accusantium dolorum cupiditate fugiat ea.</p>
                <h2 className={styles.donateHeader}>Financial Donations</h2>
                <p className={styles.para}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat ratione ad incidunt fugiat deserunt perferendis quos architecto amet dolore consequuntur?</p>
            </div>
            <div className={styles.img}>
                <img src={'/ferret-donations.jpg'} alt={"giving hands"} className={styles.img} width={640} height={425} />
            </div>
        </section>
    );
}

export default Donation;