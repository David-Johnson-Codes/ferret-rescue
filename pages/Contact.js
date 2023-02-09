import styles from '@/styles/Contact.module.css'
import Image from 'next/image'

const Contact = () => {
    return (
        <section className={styles.contactContainer}>
            <div className={styles.contactUsContainer}>
                <h1>Conact Us</h1>
                <p className={styles.contactPara}>
                    Ferret Rescue <br />
                    55555 East Street, Suite D90 <br />
                    Some City, WA 99999
                </p>
                <p className={styles.contactPara}>
                    Phone: (555)555-5555<br />
                    Email: someemail@email.com
                </p>
                <p className={styles.contactPara}>
                    Hours of Operation:<br />
                    Mon-Fri 9am - 5pm<br />
                    Sat/Sun Closed
                </p>
            </div>
            <div className={styles.messageContainer}>
                <h2 className={styles.messageHeader}>Send a Message</h2>
                <form className={styles.form}>
                    <input className={styles.input} type="text" placeholder="Name" />
                    <input className={styles.input} type="text" placeholder="Phone Number" />
                    <textarea className={styles.textArea} name="message" placeholder="Message"></textarea>
                    <input className={styles.submitForm} type="submit" value="Submit" />
                </form>
            </div>

        </section>
    );
}

export default Contact;