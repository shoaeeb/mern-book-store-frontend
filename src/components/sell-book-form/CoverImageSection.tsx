import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const CoverImage = () => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name="coverImage"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Cover Image</FormLabel>
          <FormControl>
            <Input
              type="file"
              accept=".jpg ,.jpeg, .png"
              onChange={(event) =>
                field.onChange(
                  event.target.files ? event.target.files[0] : null
                )
              }
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CoverImage;
