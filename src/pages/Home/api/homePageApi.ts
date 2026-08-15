import type { Product } from "@/entities/product";

import { baseAPI } from "@/shared/api";
import type { CurrencyType } from "@/shared/config";

interface FirstOrderProductsQueryArgs {
    locale: string;
    currency: CurrencyType;
}

type FirstOrderProductsResponse = Product[] | { products?: Product[] };

const homePageApi = baseAPI.injectEndpoints({
    endpoints: (build) => ({
        getFirstOrderProducts: build.query<Product[], FirstOrderProductsQueryArgs>({
            query: (params) => ({
                url: "/products/first-order-discount",
                params: params,
            }),
            transformResponse: (response: FirstOrderProductsResponse) => {
                if (Array.isArray(response)) {
                    return response;
                }

                return Array.isArray(response.products) ? response.products : [];
            },
        }),
    }),
});

export const { useGetFirstOrderProductsQuery } =
    homePageApi;
