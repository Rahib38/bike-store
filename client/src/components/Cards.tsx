import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useGetAllProductsQuery } from "@/Redux/Features/Admin/adminManagement";
import { Link } from "react-router-dom";

const Cards = () => {
  const { data: sProductData } = useGetAllProductsQuery(undefined);
  console.log(sProductData);

  const productData = sProductData?.data?.map(
    ({ _id, name, brand, price, quantity, category, description }) => ({
      _id: _id,
      name: name,
      brand: brand,
      price: price,
      quantity: quantity,
      category: category,
      description: description,
    })
  );
  console.log(productData);
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 container mx-auto mt-8">
      {productData?.map((item) => (
        <Card>
          <img
            src="https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/royalenfield-hunter-350-retro-factory1727790756803.jpg?q=80"
            alt=""
          />
          <CardHeader>
            <CardTitle>{item?.name}</CardTitle>

            <CardDescription>{item?.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>price: ${item?.price}</p>
          </CardContent>
          <CardFooter>
            <Link to={`/cardDetails/${item?._id}`}>
              <button className="bg-emerald-400 text-white  rounded-xl p-2 px-4 ">
                View Details
              </button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Cards;
