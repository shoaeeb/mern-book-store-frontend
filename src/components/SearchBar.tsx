import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const formSchema = z.object({
  query: z.string().min(6, "query is required"),
});

export type SearchFormType = z.infer<typeof formSchema>;

type Props = {
  placeholder: string;
  onSubmit: (formData: SearchFormType) => void;
};

const SearchBar = ({ onSubmit, placeholder }: Props) => {
  const form = useForm<SearchFormType>({
    resolver: zodResolver(formSchema),
  });
  return (
    <div>
      <Form {...form}>
        <form
          className="flex flex-row gap-2"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="query"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="border-none focus:outline-none focus:border-none border-b-slate-50"
                    placeholder={placeholder}
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="bg-blue-600 text-white hover:bg-blue-500"
          >
            Search
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SearchBar;
