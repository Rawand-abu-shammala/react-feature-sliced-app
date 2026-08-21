import {useTranslation} from "react-i18next";
import {useLocation, useNavigate} from "react-router";

import type {Product} from "@/entities/product";
import {ProductCard} from "@/entities/product";
import {Footer} from "@/widgets/Footer";
import {Header} from "@/widgets/Header";
import {AppPage, Button} from "@/shared/ui";

const ProductPage = () => {
    const {i18n} = useTranslation();
    const navigate = useNavigate();
    const {state} = useLocation() as {state?: {product?: Product}};
    const product = state?.product;

    return <AppPage>
        <Header/>
        <AppPage.Content>
            <Button theme="outline" onClick={() => navigate(-1)}>Back</Button>
            {product ? <ProductCard product={product}/> : <p>{i18n.language === "ar" ? "لم يتم العثور على المنتج." : "Product not found."}</p>}
        </AppPage.Content>
        <Footer/>
    </AppPage>;
};

export default ProductPage;
