import { useState, useEffect } from "react";

import type { Product } from "../types";
import Header from "../components/Header";
import ProductsGrid from "../components/ProductsGrid";
import FeaturedBanner from "../components/FeaturedBanner";
import Loading from "../components/Loading";

const HomeScreen = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);

      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data: Product[] = await res.json();

        // Add random offer from 0–50%
        const productsWithOffers = data.map((p) => ({
          ...p,
          offer: [0, 5, 10, 15, 20, 30, 40, 50][Math.floor(Math.random() * 8)],
        }));

        setProducts(productsWithOffers);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (isLoading) return <Loading />;

  return (
    <>
      <Header />

      <main className="container mx-auto py-12">
        <FeaturedBanner />
        <ProductsGrid products={products} />
      </main>
    </>
  );
};

export default HomeScreen;
