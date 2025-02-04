import { Button } from "@/components/ui/button";
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

const CardsHome = () => {
  const { data: sProductData } = useGetAllProductsQuery(undefined);
  console.log(sProductData);

  const productData = sProductData?.data?.map(
    ({ _id, name, brand, price, quantity, category, description, image }) => ({
      _id: _id,
      name: name,
      brand: brand,
      price: price,
      quantity: quantity,
      category: category,
      description: description,
      image: image,
    })
  );
  console.log(productData);
  return (
    <div className="mt-5">
         <div className="flex justify-center items-center mt-5">
      
          <h2 className="text-3xl font-semibold">
         Lastest Product
          </h2>
    
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 container mx-auto mt-8">
        {productData?.map((item) => (
          <Card>
            <img src={item.image} alt="" />
            <CardHeader>
              <CardTitle>{item?.name}</CardTitle>

              <CardDescription className="font-bold">
                <span className=" font-semibold text-gray-800 mb-4">
                  Brand:
                </span>
                {item?.brand}
              </CardDescription>
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
      <div className="flex justify-center items-center mt-5">
        <Link to={"/allProduct"}>
          {" "}
          <Button className="bg-emerald-400 hover:bg-emerald-400">
            View All
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CardsHome;
