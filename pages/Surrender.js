import styles from '@/styles/Surrender.module.css'
import Image from 'next/image'

const Surrender = () => {
    return (
        <section className={styles.surrenderContainer}>
            <div className={styles.infoContainer}>
                <h1>Surrendering a Ferret</h1>
                <p className={styles.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, sunt? Officiis at possimus incidunt dolorum. Explicabo, beatae recusandae, repellat reiciendis, odit voluptatibus tempora libero sint nostrum ullam soluta voluptas incidunt?</p>
                <p className={styles.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore soluta, recusandae iusto tenetur cum, pariatur perferendis commodi ut alias modi earum, iste consectetur quisquam accusantium perspiciatis beatae possimus magnam eos!</p>
            </div>
            <div>
                <img className={styles.img} src={'/ferret-surrender.jpg'} alt={"ferret in cage"} width={640} height={425} />
            </div>
        </section>
    );
}

export default Surrender;