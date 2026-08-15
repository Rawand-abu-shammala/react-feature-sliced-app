import {
    createMockFactory,
    random,
    sequence,
} from "@/shared/lib/test/createMockFactories";

import type {
    Product,
    ProductFacets,
} from "../../model/types/Product";

const productNames = [
    "Organic Bananas",
    "Fresh Milk",
    "Whole Wheat Bread",
    "Chicken Breast",
    "Greek Yogurt",
    "Red Apples",
    "Cheddar Cheese",
    "Fresh Salmon",
    "Avocados",
    "Orange Juice",
    "Eggs Free Range",
    "Butter Unsalted",
    "Tomatoes",
    "Ground Beef",
    "Pasta Spaghetti",
    "Olive Oil Extra Virgin",
    "Rice Basmati",
    "Honey Natural",
    "Oatmeal Organic",
    "Carrots Fresh",
];

const productNamesAr = [
    "موز عضوي",
    "حليب طازج",
    "خبز قمح كامل",
    "صدر دجاج",
    "زبادي يوناني",
    "تفاح أحمر",
    "جبنة شيدر",
    "سلمون طازج",
    "أفوكادو",
    "عصير برتقال",
    "بيض حر",
    "زبدة غير مملحة",
    "طماطم",
    "لحم بقري مفروم",
    "مكرونة سباغيتي",
    "زيت زيتون بكر ممتاز",
    "أرز بسمتي",
    "عسل طبيعي",
    "شوفان عضوي",
    "جزر طازج",
];

const productDescriptions = [
    "Fresh and organic produce straight from local farms",
    "Premium quality dairy products for your healthy lifestyle",
    "Freshly baked goods made with natural ingredients",
    "High-protein meat products from trusted suppliers",
];

const productDescriptionsAr = [
    "منتجات طازجة وعضوية مباشرة من المزارع المحلية",
    "منتجات ألبان عالية الجودة لنمط حياة صحي",
    "مخبوزات طازجة مصنوعة بمكونات طبيعية",
    "منتجات لحوم عالية البروتين من موردين موثوقين",
];

const productImages = [
    "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1518569656558-1f25e69d93d8?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1474978528675-4a50a8a9f9f9?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1517940310602-26535839fe84?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1447175008436-054170c2e979?auto=format&fit=crop&w=900&q=80",
];

export const createMockProduct = createMockFactory<Product>({
    id: sequence("prod"),

    name: (i) =>
        productNames[i % productNames.length],

    nameAr: (i) =>
        productNamesAr[i % productNamesAr.length],

    description: (i) =>
        productDescriptions[i % productDescriptions.length],

    descriptionAr: (i) =>
        productDescriptionsAr[i % productDescriptionsAr.length],

    shortDescription: "Fresh quality groceries",

    shortDescriptionAr: "بقالة طازجة وعالية الجودة",

    slug: (i) =>
        productNames[i % productNames.length]
            .toLowerCase()
            .replace(/\s+/g, "-"),

    stock: () =>
        random.int(0, 200),

    price: () =>
        random.int(1, 50),

    images: (i) => [
        {
            url: productImages[i % productImages.length],
            alt: productNames[i % productNames.length],
            isMain: true,
        },
    ],

    brand: random.oneOf([
        "organic-valley",
        "nestle",
        "kraft",
        "dannon",
        "tyson",
        "del-monte",
    ]),

    country: random.oneOf([
        "Ukraine",
        "Poland",
        "Netherlands",
        "Italy",
        "Spain",
    ]),
});

export const createMockFacets = (): ProductFacets => ({
    countries: [
        {
            value: "Ukraine",
            label: "Ukraine",
            count: 45,
        },
        {
            value: "Poland",
            label: "Poland",
            count: 32,
        },
        {
            value: "Netherlands",
            label: "Netherlands",
            count: 28,
        },
        {
            value: "Italy",
            label: "Italy",
            count: 20,
        },
        {
            value: "Spain",
            label: "Spain",
            count: 15,
        },
    ],

    brands: [
        {
            value: "organic-valley",
            label: "Organic Valley",
            count: 23,
        },
        {
            value: "nestle",
            label: "Nestlé",
            count: 18,
        },
        {
            value: "kraft",
            label: "Kraft",
            count: 15,
        },
        {
            value: "dannon",
            label: "Dannon",
            count: 12,
        },
        {
            value: "tyson",
            label: "Tyson",
            count: 10,
        },
        {
            value: "del-monte",
            label: "Del Monte",
            count: 8,
        },
    ],

    priceRange: {
        min: 1,
        max: 100,
    },
});

export const mockFacets = createMockFacets();

export const mockProducts: Product[] =
    createMockProduct.createList(20);

export const emptyFacets: ProductFacets = {
    countries: [],
    brands: [],
    priceRange: {
        min: 0,
        max: 0,
    },
};