import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { genre } from "@/config/Genre-config";
import { Checkbox } from "../ui/checkbox";

const GenreSection = () => {
  const { control } = useFormContext();
  return (
    <>
      <FormLabel>
        <h1 className="text-sm font-semibold tracking-tight">Genre</h1>
      </FormLabel>
      <FormField
        name="genre"
        control={control}
        render={() => (
          <FormItem>
            <div className="grid md:grid-cols-3 gap-2">
              {genre.map((g, i) => (
                <FormField
                  control={control}
                  key={i}
                  name="genre"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes(g)}
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([...field.value, g])
                              : field.onChange(
                                  field.value?.filter(
                                    (value: string) => value !== g
                                  )
                                );
                          }}
                        />
                      </FormControl>
                      <FormLabel>{g}</FormLabel>
                    </FormItem>
                  )}
                />
              ))}
              <FormMessage />
            </div>
          </FormItem>
        )}
      />
    </>
  );
};

export default GenreSection;
