import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import profile from "../assets/profile.jpg";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const customers = [
  {
    id: 1,
    name: "Anne",
    profileUrl: profile,
    designation: "CEO ,ABC Company",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quibusdam fugit velit adipisci accusamus omnis ratione modi sit molestias dolorem.",
  },
  {
    id: 2,
    name: "Anne",
    profileUrl: profile,
    designation: "CEO ,ABC Company",
    rating: 4,

    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quibusdam fugit velit adipisci accusamus omnis ratione modi sit molestias dolorem.",
  },
  {
    id: 3,
    name: "Anne",
    profileUrl: profile,
    designation: "CEO ,ABC Company",
    rating: 4,

    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quibusdam fugit velit adipisci accusamus omnis ratione modi sit molestias dolorem.",
  },
  {
    id: 4,
    name: "Anne",
    profileUrl: profile,
    designation: "CEO ,ABC Company",
    rating: 4,

    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quibusdam fugit velit adipisci accusamus omnis ratione modi sit molestias dolorem.",
  },
  {
    id: 5,
    name: "Anne",
    profileUrl: profile,
    designation: "CEO ,ABC Company",
    rating: 4,

    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quibusdam fugit velit adipisci accusamus omnis ratione modi sit molestias dolorem.",
  },
  {
    id: 6,
    name: "Anne",
    profileUrl: profile,
    designation: "CEO ,ABC Company",
    rating: 4,

    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quibusdam fugit velit adipisci accusamus omnis ratione modi sit molestias dolorem.",
  },
  {
    id: 7,
    name: "Anne",
    profileUrl: profile,
    designation: "CEO ,ABC Company",
    rating: 4,

    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quibusdam fugit velit adipisci accusamus omnis ratione modi sit molestias dolorem.",
  },
  {
    id: 8,
    name: "Anne",
    profileUrl: profile,
    designation: "CEO ,ABC Company",
    rating: 4,

    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quibusdam fugit velit adipisci accusamus omnis ratione modi sit molestias dolorem.",
  },
  {
    id: 9,
    name: "Anne",
    profileUrl: profile,
    designation: "CEO ,ABC Company",
    rating: 4,

    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quibusdam fugit velit adipisci accusamus omnis ratione modi sit molestias dolorem.",
  },
  {
    id: 10,
    name: "Anne",
    profileUrl: profile,
    designation: "CEO ,ABC Company",
    rating: 5,

    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quibusdam fugit velit adipisci accusamus omnis ratione modi sit molestias dolorem.",
  },
  {
    id: 11,
    name: "Anne",
    profileUrl: profile,
    designation: "CEO ,ABC Company",
    rating: 5,

    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quibusdam fugit velit adipisci accusamus omnis ratione modi sit molestias dolorem.",
  },
  {
    id: 12,
    name: "Anne",
    profileUrl: profile,
    designation: "CEO ,ABC Company",
    rating: 4,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quibusdam fugit velit adipisci accusamus omnis ratione modi sit molestias dolorem.",
  },
];
const Testimonial = () => {
  return (
    <div className="w-full  mt-5 flex justify-center overflow-hidden">
      <Carousel className="w-full  sm:max-w-xs md:max-w-[800px]">
        <CarouselContent className="-ml-1">
          {customers.map((customer, index) => (
            <CarouselItem
              key={index}
              className="pl-1 basis-1/2 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card className="w-full">
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <div className="w-full flex flex-col gap-3">
                      <div className="flex">
                        {Array.from({ length: customer.rating || 5 }).map(
                          (_, index) => (
                            <Star
                              fill={"currentColor"}
                              className="text-yellow-300 "
                              key={index}
                              size={24}
                            />
                          )
                        )}
                      </div>
                      <span className="text-sm text-wrap truncate ">
                        {customer.review}
                      </span>
                      <Avatar>
                        <AvatarImage src={customer.profileUrl} />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <span className="text-sm">
                        {customer.name} - {customer.designation}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Testimonial;
