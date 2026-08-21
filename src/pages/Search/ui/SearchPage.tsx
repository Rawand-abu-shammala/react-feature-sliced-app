import {useTranslation} from "react-i18next";
import {useSearchParams} from "react-router";

import {ProductCard} from "@/entities/product";
import {useGetProducts} from "@/entities/product/api/productApi";
import {selectUserCurrency} from "@/entities/user";

import {Footer} from "@/widgets/Footer";
import {Header} from "@/widgets/Header";

import {useAppSelector} from "@/shared/lib";
import {AppPage} from "@/shared/ui";

import styles from "./SearchPage.module.scss";

const SearchPage = () => {
    const {i18n} = useTranslation();
    const [searchParams] = useSearchParams();
    const currency = useAppSelector(selectUserCurrency);
    const query = searchParams.get("q")?.trim() ?? "";
    const {data, isLoading, isError} = useGetProducts(
        {search: query, locale: i18n.language, currency},
        {skip: !query}
    );
    const normalizedQuery = query.toLocaleLowerCase();
    const products = data?.products.filter((product) =>
        [product.name, product.nameAr, product.slug]
            .some((value) => value.toLocaleLowerCase().includes(normalizedQuery))
    ) ?? [];

    return (
        <AppPage>
            <Header/>
            <AppPage.Content className={styles.content}>
                <h1 className={styles.title}>Search results{query ? ` for “${query}”` : ""}</h1>
                {!query && <p>Enter a product name in the search field.</p>}
                {isLoading && <p>Loading results…</p>}
                {isError && <p>Unable to load search results.</p>}
                {query && !isLoading && !isError && products.length === 0 && (
                    <p>No products found.</p>
                )}
                {products.length > 0 && (
                    <div className={styles.grid}>
                        {products.map((product) => <ProductCard key={product.id} product={product}/>) }
                    </div>
                )}
            </AppPage.Content>
            <Footer/>
        </AppPage>
    );
};

export default SearchPage;
