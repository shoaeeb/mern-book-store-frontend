import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormDescription } from "../ui/form";
import DetailsSection from "./DetailsSection";
import GenreSection from "./GenreSection";
import CoverImage from "./CoverImageSection";
import { Button } from "../ui/button";
import LoadingButton from "../LoadingButton";

type Props = {
  onSubmit: (formData: FormData) => void;
  isLoading: boolean;
};

const formSchema = z.object({
  title: z.string().min(2, "This field is required"),
  author: z.string({
    required_error: "This field is required",
  }),
  publicationYear: z.string({
    required_error: "This field is required",
  }),
  description: z.string({
    required_error: "This field is required",
  }),
  price: z.coerce.number({
    required_error: "Price is required",
    invalid_type_error: "must be a valid number",
  }),
  coverImage: z.instanceof(File, { message: "Image File is required" }),
  genre: z.array(z.string()).nonempty("Atleast one genre is needed"),
});

export type SellBookFormType = z.infer<typeof formSchema>;

const SellBookForm = ({ onSubmit, isLoading }: Props) => {
  const form = useForm<SellBookFormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      genre: [],
    },
  });

  const onSave = (BookFormData: SellBookFormType) => {
    const formData = new FormData();

    formData.append("title", BookFormData.title);
    formData.append("author", BookFormData.author);
    formData.append("description", BookFormData.description);
    formData.append("price", (BookFormData.price * 100).toString());
    formData.append("publicationYear", BookFormData.publicationYear);
    BookFormData.genre.map((g: string, index: number) => {
      formData.append(`genre[${index}]`, g);
    });
    formData.append("coverImage", BookFormData.coverImage);
    onSubmit(formData);
  };

  return (
    <Form {...form}>
      <form
        className="mt-5 bg-gray-100 space-y-3 px-10 py-5 mx-auto ml-6 mr-6"
        onSubmit={form.handleSubmit(onSave)}
      >
        <div className="flex flex-col w-full gap-1">
          <h1 className="font-bold text-xl">Sell Your Book Here</h1>
          <FormDescription>Fill Up Details</FormDescription>
        </div>
        <DetailsSection />
        <GenreSection />
        <CoverImage />
        {isLoading ? (
          <LoadingButton />
        ) : (
          <Button type="submit" className="bg-blue-400 hover:bg-blue-300">
            Submit
          </Button>
        )}
      </form>
    </Form>
  );
};

export default SellBookForm;
