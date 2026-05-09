import type { FunctionComponent, SVGProps } from "react";
import type { supportedLngs } from "./i18n";

import ArabicIcon from "../../assets/icons/Arabic.svg?react";
import EnglishIcon from "@/shared/assets/icons/English.svg?react";

export type SupportedLngsType = (typeof supportedLngs)[number];

type LanguageIconListType = Record<
  SupportedLngsType,
  FunctionComponent<SVGProps<SVGSVGElement>>
>;

export const languageIconList: LanguageIconListType = {
  en: EnglishIcon,
  ar: ArabicIcon,
};
