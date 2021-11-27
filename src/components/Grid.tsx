import { Link } from "react-router-dom"
import { works } from "../context"
import styles from "../styles/Grid.module.scss"

export const Grid = (): JSX.Element => {
    return (
        <div className={styles["grid-container"]}>
            {works.map((work) => {
                return (
                    <Link to={`work/${work.id}`} style={{margin: work.margin}}>
                        <div className={styles["grid-item"]}>
                            {work.stickers?.map((sticker) => {
                                return <img src={sticker.image} alt="sticker" style={{top: sticker.top, right: sticker.right, bottom: sticker.bottom, left: sticker.left, position: "absolute", width: "200px", zIndex: 1, transform: "rotate(" + sticker.rotate + "deg)" }} />
                            })}
                            <img style={{width: "100%"}} src={work.thumbnail} alt="thumbnail" />
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}