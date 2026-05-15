import type { EmblaCarouselType } from "embla-carousel";
import { useCallback, useEffect, useState } from "react";

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined
) => {
  const [prevBtnDisabled, setPrevBtnDisabled] =
    useState(true);

  const [nextBtnDisabled, setNextBtnDisabled] =
    useState(true);

  const onPrevButtonClick = () => {
    if (!emblaApi) return;

    emblaApi.scrollPrev();
  };

  const onNextButtonClick = () => {
    if (!emblaApi) return;

    emblaApi.scrollNext();
  };

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());

    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    queueMicrotask(() => {
      onSelect(emblaApi);
    });

    emblaApi
      .on("reInit", onSelect)
      .on("select", onSelect);

    return () => {
      emblaApi
        .off("reInit", onSelect)
        .off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};