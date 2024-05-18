import { Button } from "./ui/button";
import { Loader } from "lucide-react";

const LoadingButton = () => {
  return (
    <Button className="bg-gray-300">
      <Loader className="mr-2 animate-spin" /> Loading
    </Button>
  );
};

export default LoadingButton;
