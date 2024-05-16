import Banner from "@/components/Banner";
import Catalog from "@/components/Catalog";
import HomePageCarousel from "@/components/HomePageCarousel";
import Testimonial from "@/components/Testimonial";

const HomePage = () => {
  return (
    <div className="mx-auto mt-5 px-6">
      <h1 className="text-center font-bold text-3xl">Best Seller Books</h1>
      <HomePageCarousel />
      <Catalog />
      <Banner />
      <h1 className="text-center font-bold text-3xl">Other Books</h1>
      <HomePageCarousel />
      <h1 className="text-center font-bold text-3xl">Testimonials</h1>
      <Testimonial />
    </div>
  );
};

export default HomePage;
