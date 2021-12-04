import { Sticker as StickerProps } from "../interfaces"
import styles from "../styles/Sticker.module.scss"

export const Sticker = (props: StickerProps): JSX.Element => {
    return (
        <img loading="lazy" className={styles["sticker"]} src={props.image} alt="sticker" style={{
            top: props.top,
            right: props.right,
            bottom: props.bottom,
            left: props.left,
            width: props.width ? props.width : "200px",
            transform: "rotate(" + props.rotate + "deg)"
        }} />
    )
}