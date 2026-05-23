import {useEffect, useState} from "react";

import {cn} from "@/shared/lib";

import styles from "./PromoCarousel.module.scss";

interface PromoSlideProps {
    src: string
    fallbackSrc: string
}

export const PromoSlide = (props: PromoSlideProps) => {
    const {src, fallbackSrc} = props
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setHasError(false);
        setIsLoading(true);
    }, [src]);

    return (
        <div className={styles["slide-wrapper"]}>
            {isLoading && (
                <div className={styles["slide-img-skeleton"]}/>
            )}
            <img
                className={cn(styles["slide-img"], {[styles["hidden"]]: isLoading})}
                src={hasError ? fallbackSrc : src}
                onLoad={() => setIsLoading(false)}
                onError={() => {
                    setHasError(true);
                    setIsLoading(false);
                }}
                alt="Promo"
            />
        </div>
    );
};