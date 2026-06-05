import type { CategoryNavigationReturn } from "@/widgets/CategoryNavigation/api/categoryNavigationApi.ts";
import type { Category } from "@/entities/category";

export const mockCategoryNavigationItems: Category[] = [
    {
        id: '1',
        parentId: null,
        slug: 'electronics',
        name: 'Electronics',
        slugMap: {
            en: 'electronics',
            ar: 'الإلكترونيات'
        }
    },
    {
        id: '2',
        parentId: null,
        slug: 'clothing',
        name: 'Clothing',
        slugMap: {
            en: 'clothing',
            ar: 'الملابس'
        }
    },
    {
        id: '3',
        parentId: null,
        slug: 'home-garden',
        name: 'Home & Garden',
        slugMap: {
            en: 'home-garden',
            ar: 'المنزل-والحديقة'
        }
    },
    {
        id: '4',
        parentId: null,
        slug: 'sports',
        name: 'Sports',
        slugMap: {
            en: 'sports',
            ar: 'الرياضة'
        }
    },
    {
        id: '5',
        parentId: null,
        slug: 'books',
        name: 'Books',
        slugMap: {
            en: 'books',
            ar: 'الكتب'
        }
    },
];

export const mockElectronicsSubcategories: Category[] = [
    {
        id: '11',
        parentId: '1',
        slug: 'smartphones',
        name: 'Smartphones',
        slugMap: {
            en: 'smartphones',
            ar: 'الهواتف-الذكية'
        }
    },
    {
        id: '12',
        parentId: '1',
        slug: 'laptops',
        name: 'Laptops',
        slugMap: {
            en: 'laptops',
            ar: 'الحواسيب-المحمولة'
        }
    },
    {
        id: '13',
        parentId: '1',
        slug: 'tablets',
        name: 'Tablets',
        slugMap: {
            en: 'tablets',
            ar: 'الأجهزة-اللوحية'
        }
    },
    {
        id: '14',
        parentId: '1',
        slug: 'headphones',
        name: 'Headphones',
        slugMap: {
            en: 'headphones',
            ar: 'سماعات-الرأس'
        }
    },
];

export const mockRootCategory: Category = {
    id: '0',
    parentId: null,
    slug: 'all',
    name: 'All Categories',
    slugMap: {
        en: 'all',
        ar: 'جميع-الفئات'
    }
};

export const mockElectronicsCategory: Category = {
    id: '1',
    parentId: null,
    slug: 'electronics',
    name: 'Electronics',
    slugMap: {
        en: 'electronics',
        ar: 'الإلكترونيات'
    }
};

export const mockSmartphonesCategory: Category = {
    id: '11',
    parentId: '1',
    slug: 'smartphones',
    name: 'Smartphones',
    slugMap: {
        en: 'smartphones',
        ar: 'الهواتف-الذكية'
    }
};

export const mockCategoryNavigation: Record<string, CategoryNavigationReturn> = {
    topLevel: {
        currentCategory: mockRootCategory,
        parentCategory: mockRootCategory,
        items: mockCategoryNavigationItems,
        isShowingSubcategories: false,
    },

    withSubcategories: {
        currentCategory: mockElectronicsCategory,
        parentCategory: mockRootCategory,
        items: mockElectronicsSubcategories,
        isShowingSubcategories: true,
    },

    deepSubcategories: {
        currentCategory: mockSmartphonesCategory,
        parentCategory: mockElectronicsCategory,
        items: [
            {
                id: '111',
                parentId: '11',
                slug: 'iphone',
                name: 'iPhone',
                slugMap: {
                    en: 'iphone',
                    ar: 'آيفون'
                }
            },
            {
                id: '112',
                parentId: '11',
                slug: 'samsung',
                name: 'Samsung',
                slugMap: {
                    en: 'samsung',
                    ar: 'سامسونج'
                }
            },
            {
                id: '113',
                parentId: '11',
                slug: 'xiaomi',
                name: 'Xiaomi',
                slugMap: {
                    en: 'xiaomi',
                    ar: 'شاومي'
                }
            },
        ],
        isShowingSubcategories: true,
    },

    empty: {
        currentCategory: mockRootCategory,
        parentCategory: mockRootCategory,
        items: [],
        isShowingSubcategories: false,
    },
};