
import {useTranslation} from "react-i18next";

import { Button } from "@/shared/ui";

import type { Tag } from "../../model/types/Tag";

import styles from "./TagList.module.scss";

export interface TagListProps {
  tags?: Tag[];
  isLoading: boolean;
  onTagChange?: (tagId: string) => void;
  currentTagId?: string;
}

export const TagList = (props: TagListProps) => {
  const { isLoading, currentTagId, onTagChange, tags } = props;
  const {i18n} = useTranslation();

  const handleTagChange = (tagId: string) => {
    onTagChange?.(tagId);
  };

  if (isLoading) {
    return (
      <div className={styles.tags}>
        <div className={styles["tag-skeleton"]} />
        <div className={styles["tag-skeleton"]} />
        <div className={styles["tag-skeleton"]} />
        <div className={styles["tag-skeleton"]} />
        <div className={styles["tag-skeleton"]} />
        <div className={styles["tag-skeleton"]} />
      </div>
    );
  }

  return (
    <div className={styles.tags}>
      {tags?.map((tag) => {
        const isSelected = tag.id === currentTagId;
        return (
          <Button
            key={tag.id}
            theme={isSelected ? "outline" : "tertiary"}
            className={styles.tag}
            onClick={() => handleTagChange(tag.id)}
          >
            {i18n.language === "ar" ? tag.nameAr ?? tag.name : tag.name}
          </Button>
        );
      })}
    </div>
  );
};
