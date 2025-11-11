import Header from "../components/Header";
import ProductsGrid from "../components/ProductsGrid";
import FeaturedBanner from "../components/FeaturedBanner";
import BgDecoration from "../components/BgDecoration";

const HomeScreen = () => {
  return (
    <>
      <BgDecoration />
      <Header />

      <main className="container mx-auto py-12">
        <FeaturedBanner />
        <ProductsGrid />
      </main>
    </>
  );
};

export default HomeScreen;
