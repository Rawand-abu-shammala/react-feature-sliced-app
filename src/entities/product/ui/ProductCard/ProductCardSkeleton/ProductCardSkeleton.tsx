import { cn } from "@/shared/lib";

import styles from "./ProductCardSkeleton.module.scss";

interface ProductCardSkeletonProps {
  className?: string;
}

export const ProductCardSkeleton = ({
  className,
}: ProductCardSkeletonProps) => {
  return (
    <div className={cn(styles.skeleton, className)}>
      <div className={styles["img-container"]}>
        <div className={styles["img-skeleton"]} />
        <div className={styles["button-skeleton"]} />
      </div>
      <div className={styles.content}>
        <div className={styles["title-skeleton"]} />
        <div className={styles["subtitle-skeleton"]} />
        <div className={styles.prices}>
          <div className={styles["price-skeleton"]} />
          <div className={styles["old-price-skeleton"]} />
        </div>
        <div className={styles["amount-left-skeleton"]} />
      </div>
    </div>
  );
};
