import { http, HttpResponse } from 'msw';

import { mockProducts, mockFacets } from '@/entities/product/api/test/mockData';
import { mockCategoryNavigation } from '@/widgets/CategoryNavigation/api/test/mockData';
import { mockCategories } from '@/entities/category/api/test/mockData';
import { mockTags } from '@/entities/tag/api/test/mockData';
import { mockBanners } from '@/widgets/PromoCarousel/api/test/mockData';
import { API_URL } from '@/shared/config';

export const handlers = [
    http.get(`${API_URL}/products`, () => {
        return HttpResponse.json({
            products: mockProducts,
            total: mockProducts.length,
            hasMore: false,
            facets: mockFacets,
        });
    }),

    http.get(`${API_URL}/categories/navigation/:slug`, () => {
        return HttpResponse.json(mockCategoryNavigation.topLevel);
    }),

    http.get(`${API_URL}/categories/slug/:slug`, ({ params }) => {
        const slug = String(params.slug ?? '');
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const category = mockCategories.find((c: any) => c.slug === slug) || mockCategories[0];
        return HttpResponse.json(category);
    }),

    http.post(`${API_URL}/auth/refresh`, () => {
        return HttpResponse.json({});
    }),

    http.get(`${API_URL}/promo-banners/active`, () => {
        return HttpResponse.json(mockBanners || []);
    }),

    http.get(`${API_URL}/products/best-sellers`, () => {
        return HttpResponse.json({ products: mockProducts.slice(0, 8) });
    }),

    http.get(`${API_URL}/products/first-order-discount`, () => {
        return HttpResponse.json({ products: mockProducts.slice(8, 16) });
    }),

    http.get(`${API_URL}/tags/popular`, () => {
        return HttpResponse.json(mockTags);
    }),
];
