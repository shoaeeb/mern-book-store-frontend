import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserType } from "@/api/MyUserApi";
import { useEffect } from "react";
import LoadingButton from "./LoadingButton";

const formSchema = z.object({
  email: z.string().optional(),
  name: z
    .string({
      required_error: "This field is required",
    })
    .min(3, "Atleast three characters long"),
  city: z.string({
    required_error: "This field is required",
  }),
  addressLine1: z.string({
    required_error: "This field is required",
  }),
  country: z.string({
    required_error: "This field is required",
  }),
});

export type UserFormType = z.infer<typeof formSchema>;

type Props = {
  currentUser: UserType;
  title?: string;
  buttonText?: string;
  onSave: (formData: UserFormType) => void;
  isLoading: boolean;
};

const UserProfileForm = ({
  title = "User Profile",
  buttonText = "Submit",
  onSave,
  currentUser,
  isLoading,
}: Props) => {
  const form = useForm<UserFormType>({
    resolver: zodResolver(formSchema),
    defaultValues: currentUser,
  });

  useEffect(() => {
    form.reset(currentUser);
  }, [form, currentUser]);

  return (
    <Form {...form}>
      <form
        className="space-y-5 bg-gray-50 px-10 mt-5 py-5"
        onSubmit={form.handleSubmit(onSave)}
      >
        <div>
          <h1 className="text-lg font-bold tracking-tight">{title}</h1>
          <FormDescription>
            View and Change Your Profile Information Here
          </FormDescription>
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  disabled
                  placeholder="enter your email here..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your Name here..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid md:grid-cols-3 gap-5">
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your City here..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your Country here..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="addressLine1"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address Line1</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your Address Line1 here..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {isLoading ? (
          <LoadingButton />
        ) : (
          <Button
            disabled={isLoading}
            type={"submit"}
            className="bg-blue-400 hover:bg-blue-300"
          >
            {buttonText}
          </Button>
        )}
      </form>
    </Form>
  );
};

export default UserProfileForm;
