import { httpClient } from '@/shared/api';
import { mockProducts, mockFacets } from '@/entities/product/api/test/mockData';
import { mockCategoryNavigation } from '@/widgets/CategoryNavigation/api/test/mockData';
import { mockCategories } from '@/entities/category/api/test/mockData.ts';
import { mockTags } from '@/entities/tag/api/test/mockData.ts';
import { mockBanners } from '@/widgets/PromoCarousel/api/test/mockData.ts';

const jsonResponse = (data: unknown, status = 200) => {
    return new Response(JSON.stringify(data), {
        status,
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

const matchPath = (pathname: string, pattern: RegExp) => pattern.test(pathname);

const buildResponseData = async (url: URL, method: string) => {
    const pathname = url.pathname;

    if (method === 'POST' && pathname === '/auth/refresh') {
        return { data: {} };
    }

    if (method === 'GET' && pathname === '/promo-banners/active') {
        return { data: mockBanners || [] };
    }

    if (method === 'GET' && matchPath(pathname, /^\/categories\/navigation\/.*$/)) {
        return { data: mockCategoryNavigation.topLevel };
    }

    if (method === 'GET' && matchPath(pathname, /^\/categories\/slug\/.*$/)) {
        const slug = pathname.split('/').pop();
        const category = mockCategories.find((c: any) => c.slug === slug) || mockCategories[0];
        return { data: category };
    }

    if (method === 'GET' && pathname === '/products/best-sellers') {
        return {
            data: {
                facets: mockFacets,
                products: mockProducts.slice(0, 8),
                total: 8,
                hasMore: false,
            },
        };
    }

    if (method === 'GET' && pathname === '/products/first-order-discount') {
        return {
            data: {
                facets: mockFacets,
                products: mockProducts.slice(8, 16),
                total: 8,
                hasMore: false,
            },
        };
    }

    if (method === 'GET' && pathname === '/tags/popular') {
        return { data: mockTags };
    }

    if (method === 'GET' && pathname === '/products') {
        return {
            data: {
                facets: mockFacets,
                products: mockProducts,
                total: mockProducts.length,
                hasMore: false,
            },
        };
    }

    return null;
};

export const setupDevMocking = () => {
    const originalFetch = window.fetch.bind(window);

    window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
        try {
            const request = new Request(input, init);
            if (request.url.startsWith(window.location.origin)) {
                const responseData = await buildResponseData(new URL(request.url), request.method);
                if (responseData) {
                    return jsonResponse(responseData.data);
                }
            }
        } catch {
            // fall through to original fetch
        }

        return originalFetch(input, init);
    };

    const originalAdapter = httpClient.defaults.adapter as any;

    httpClient.defaults.adapter = async (config: any) => {
        const url = new URL(config.url ?? '', window.location.origin);
        const responseData = await buildResponseData(url, config.method?.toUpperCase() || 'GET');

        if (responseData) {
            return {
                data: responseData.data,
                status: 200,
                statusText: 'OK',
                headers: config.headers || {},
                config,
                request: {},
            };
        }

        if (originalAdapter) {
            return originalAdapter(config);
        }

        throw new Error('No axios adapter available');
    };
};
