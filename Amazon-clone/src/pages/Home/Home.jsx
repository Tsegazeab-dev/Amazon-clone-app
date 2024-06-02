import CarouselBanner from "../../components/Carousel/Carousel";
import Category from "../../components/Category/Category";
import Layout from "../../components/Layout/Layout";
import Product from "../../components/Product/Product";

function Home() {
  return (
    <Layout>
      <CarouselBanner />
      <Category />
      <Product />
    </Layout>
  );
}

export default Home;
