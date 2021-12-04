import styles from "../styles/Thumbnail.module.scss"

interface ThumbnailProps {
    image: string;
}

export const Thumbnail = (props: ThumbnailProps): JSX.Element => {
    return <img loading="lazy" className={styles["thumbnail"]} src={props.image} alt="thumbnail" />
}