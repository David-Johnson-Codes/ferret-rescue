import styles from '@/styles/Adopt.module.css'
import Image from 'next/image'

const Adopt = () => {
    return (
        <section className={styles.adoptContainer}>
            <div className={styles.infoContainer}>
                <h1>Adopt a Ferret</h1>
                <p className={styles.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, sunt? Officiis at possimus incidunt dolorum. Explicabo, beatae recusandae, repellat reiciendis, odit voluptatibus tempora libero sint nostrum ullam soluta voluptas incidunt?</p>
                <p className={styles.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore soluta, recusandae iusto tenetur cum, pariatur perferendis commodi ut alias modi earum, iste consectetur quisquam accusantium perspiciatis beatae possimus magnam eos!</p>
            </div>
            <div>
                <img className={styles.img} src={'/ferret-adopt.jpg'} alt={"ferret yawning"} width={640} height={425} />
            </div>
        </section>
    );
}

export default Adopt;