import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

const Cards = () => {
  return (
    <div >
      <Card>
        <img src="https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/royalenfield-hunter-350-retro-factory1727790756803.jpg?q=80" alt="" />
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
         <button className="bg-emerald-400 text-white  rounded-2xl p-1 px-4 ">View Details</button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Cards;
