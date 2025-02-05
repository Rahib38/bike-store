import Cards from "@/components/Cards";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Slider } from "@/components/ui/slider"; // Ensure you have a slider component
import { Helmet } from "react-helmet";
const AllProductsPage = () => {
  // const [searchTerm, setSearchTerm] = useState("");
  // const [price, setPrice] = useState(5000);
  // const [category, setCategory] = useState("");
  // const [sortBy, setSortBy] = useState("");

  // const { data, isLoading } = useGetAllProductsQuery([
  //   { name: "search", value: searchTerm },
  //   { name: "category", value: category },
  //   { name: "price", value: price.toString() },
  //   { name: "sort", value: sortBy },

  // ]);
  // const products = data?.data || [];

  // const handleSearch = (e: FieldValues) => {
  //   setSearchTerm(e.target.value.toLowerCase());
  // };

  return (
    <div className="container mx-auto mt-5 ">
      <Helmet>
        <title>RideOn Wheels | All Products</title>
      </Helmet>
      <div className="w-full h-[60px] border rounded-xl flex flex-col md:flex-row justify-between">
        <div className="relative mt-2 ml-2">
          <input
            id="id-s01"
            type="search"
            name="id-s01"
            placeholder="Search here"
            aria-label="Search content"
            className="peer relative h-10 w-full border-b border-slate-200 px-4 pr-12 text-sm text-slate-500 outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            // onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-4 top-2.5 h-5 w-5 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
            aria-label="Search icon"
            role="graphics-symbol"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
        <div className="relative mt-2 mr-2 md:w-60">
          <select
            // onValueChange={setSortBy}
            id="id-04"
            name="id-04"
            required
            className="peer relative h-10 w-full appearance-none rounded border border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
          >
            <option value="" disabled selected></option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
          <label className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
            Select an option
          </label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="pointer-events-none absolute top-2.5 right-2 h-5 w-5 fill-slate-400 transition-all peer-focus:fill-emerald-500 peer-disabled:cursor-not-allowed"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-labelledby="title-04 description-04"
            role="graphics-symbol"
          >
            <title id="title-04">Arrow Icon</title>
            <desc id="description-04">Arrow icon of the select list.</desc>
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      <div className=" grid lg:grid-cols-12 gap-4 mt-5  top-20">
        <div className="lg:mt-10  lg:h-80 sticky lg:top-28 p-4 bg-white shadow-lg rounded-lg lg:col-span-3">
          {/* Price Range Slider */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">
              Price Range
            </label>
            <Slider
              min={0}
              max={5000}
              step={10}
              // value={[price]}
              // onValueChange={(value) => setPrice(value[0])}
            />
            {/* <p className="text-sm text-gray-500 mt-2">Selected: ${price}</p> */}
          </div>

          {/* Price Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Set Price</label>
            <input
              type="number"
              // value={price}
              // onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          {/* Category Select */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Category</label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mountain">Mountain</SelectItem>
                <SelectItem value="road">Road</SelectItem>
                <SelectItem value="hybrid">Hybrid</SelectItem>
                <SelectItem value="electric">Electric</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid lg:col-span-9 ">
          <Cards></Cards>
        </div>
      </div>
    </div>
  );
};

export default AllProductsPage;
