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
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 container mx-auto mt-8">
        {productData?.slice(0,8)?.map((item) => (
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
              <button className="bg-emerald-400 text-white  rounded-2xl p-1 px-4 ">
                <Link to={`/cardDetails/${item?._id}`}>View Details</Link>
              </button>
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  };
  
  export default CardsHome;
  