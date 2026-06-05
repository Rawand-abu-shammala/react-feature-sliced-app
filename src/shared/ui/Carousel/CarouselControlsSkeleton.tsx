import styles from "./Carousel.module.scss";

export const CarouselControlsSkeleton = () => {
    return (
        <div className={styles["embla-buttons"]}>
            <div className={styles["button-skeleton"]}/>
            <div className={styles["button-skeleton"]}/>
        </div>
    );
};
