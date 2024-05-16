import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import book1 from "@/assets/banner-books/book1.png";
import book2 from "@/assets/banner-books/book2.png";
import book3 from "@/assets/banner-books/book3.png";
import book4 from "@/assets/banner-books/book4.png";
import book5 from "@/assets/banner-books/book5.png";
import { Card, CardContent } from "./ui/card";

const booksRow = [
  { id: 1, name: "Book1", img: book1 },
  { id: 2, name: "Book2", img: book2 },
  { id: 3, name: "Book3", img: book3 },
  { id: 4, name: "Book4", img: book4 },
  { id: 5, name: "Book5", img: book5 },
];

const HeroCarousel = () => {
  return (
    <Carousel className="w-full  ">
      <CarouselContent className="h-full w-full ">
        {booksRow.map((item) => (
          <CarouselItem className="h-full" key={item.id}>
            <div className="p-1 h-full w-full ">
              <Card className="border-none bg-transparent  outline-none">
                <CardContent className="flex border-none outline-none aspect-square items-center justify-center p-6">
                  <img src={item.img} alt={item.name} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default HeroCarousel;
