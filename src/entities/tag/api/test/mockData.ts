import type {Tag} from "@/entities/tag";

import {createMockFactory, sequence} from "@/shared/lib/test/createMockFactories";

const tagNames = ['Organic', 'Fresh', 'Sale', 'New', 'Local', 'Vegan', 'Gluten-Free'];
const tagNamesAr = ['عضوي', 'طازج', 'تخفيضات', 'جديد', 'محلي', 'نباتي', 'خالٍ من الغلوتين'];
const tagSlugs = ['organic', 'fresh', 'sale', 'new', 'local', 'vegan', 'gluten-free'];

export const createMockTag = createMockFactory<Tag>({
    id: sequence('tag'),
    slug: (i) => tagSlugs[i % tagSlugs.length],
    name: (i) => tagNames[i % tagNames.length],
    nameAr: (i) => tagNamesAr[i % tagNamesAr.length],
});


export const mockTags = createMockTag.createList(5);
