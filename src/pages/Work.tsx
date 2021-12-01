import styles from "../styles/Work.module.scss"
import { useParams } from "react-router";

import { works } from "../context"
import { NotFound } from "./NotFound";

export const Work = (): JSX.Element => {
    const { id } = useParams();

    if(!id){
        return <NotFound />
    }

    const work = works.find(work => work.id === parseInt(id));

    if(!work){
        return <NotFound />
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
                    {work.images.map(image => {
                        return <img loading="lazy" src={image} alt="left" style={{width: 100 / work.images.length + "%"}} className={styles["work-img"]} />
                    })}
                </div>
            </div>
        </div>
    )
}