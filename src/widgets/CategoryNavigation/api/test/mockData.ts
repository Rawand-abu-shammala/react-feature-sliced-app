import type {Category} from '@/entities/category';

import {createMockFactory, sequence} from "@/shared/lib/test/createMockFactories";

const categoryNames = ['فواكه', 'خضروات', 'ألبان', 'لحوم', 'مخبوزات'];
const categorySlugs = ['fruits', 'vegetables', 'dairy', 'meat', 'bakery'];

const createCategory = createMockFactory<Category>({
    id: sequence('category'),
    parentId: null,
    slug: (i) => categorySlugs[i % categorySlugs.length],
    name: (i) => categoryNames[i % categoryNames.length],
    slugMap: (i) => ({
        en: categorySlugs[i % categorySlugs.length],
        ar: categorySlugs[i % categorySlugs.length], 
    }),
});

export const mockRootCategory: Category = createCategory({
    id: '0',
    slug: 'all',
    name: 'جميع الفئات', 
    slugMap: {en: 'all', ar: 'all-categories'}, 
});

export const mockFruitsCategory: Category = createCategory({
    id: '1',
    slug: 'fruits',
    name: 'فواكه', 
    slugMap: {en: 'fruits', ar: 'fruits'},
});

export const mockApplesCategory: Category = createCategory({
    id: '11',
    parentId: '1',
    slug: 'apples',
    name: 'تفاح',
    slugMap: {en: 'apples', ar: 'apples'}, 
});

export const mockCategoryNavigationItems: Category[] = createCategory.createList(5);

const subcategoryData: Category[] = [
    {
        id: '12',
        parentId: '1',
        slug: 'bananas',
        name: 'موز',
        slugMap: {en: 'bananas', ar: 'bananas'},
    },
    {
        id: '13',
        parentId: '1',
        slug: 'oranges',
        name: 'برتقال', // الترجمة العربية
        slugMap: {en: 'oranges', ar: 'oranges'}, // تحويل de إلى ar وترجمة القيمة
    },
    {
        id: '14',
        parentId: '1',
        slug: 'berries',
        name: 'توت', 
        slugMap: {en: 'berries', ar: 'berries'}, 
    },
];

export const mockFruitsSubcategories: Category[] = subcategoryData.map(createCategory);


export const mockCategoryNavigation = {
    topLevel: {
        currentCategory: mockRootCategory,
        parentCategory: mockRootCategory,
        items: mockCategoryNavigationItems,
        isShowingSubcategories: false,
    },

    withSubcategories: {
        currentCategory: mockFruitsCategory,
        parentCategory: mockRootCategory,
        items: mockFruitsSubcategories,
        isShowingSubcategories: true,
    },

    empty: {
        currentCategory: mockRootCategory,
        parentCategory: mockRootCategory,
        items: [],
        isShowingSubcategories: false,
    },
};


export const mockElectronicsSubcategories = mockFruitsSubcategories;
