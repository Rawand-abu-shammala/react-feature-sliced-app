import {mockTags} from "@/entities/tag/api/test/mockData";

import {API_URL} from '@/shared/config';
import {createHandlers} from "@/shared/lib/test/msw/createHandlers";


export const trendingProductsHandlers = createHandlers({
    endpoint: `${API_URL}/tags/popular`,
    method: 'get',
    defaultData: mockTags,
    errorData: {error: 'Failed to load trending products'},
    errorStatus: 500,
});