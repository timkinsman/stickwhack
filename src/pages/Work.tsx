import styles from "../styles/Work.module.scss"
import { useParams } from "react-router";

import { works } from "../context"

export const Work = (): JSX.Element => {
    const { id } = useParams();

    if(!id){
        return <div>Param not found</div>
    }

    const work = works.find(x => x.id === parseInt(id));

    if(!work){
        return <div>Work not found</div>
    }

    return (
        <div className={styles["work-container"]}>
            <div className={styles["work-grid"]}>
                <div className={styles["work-content-grid"]}>
                    <div className={styles["work-headings"]}>
                        <h2>{work.heading}</h2>
                        <h2>{work.subheading}</h2>
                    </div>
                    <div>
                        <h2 style={{fontWeight: "lighter"}}>{work.brief}</h2>
                    </div>
                </div>
                <div className={styles["work-img-grid"]}>
                    <img src={work.images[0]} alt="left" className={styles["work-img"]} />
                    <img src={work.images[1]} alt="right" className={styles["work-img"]} />
                </div>
            </div>
        </div>
    )
}