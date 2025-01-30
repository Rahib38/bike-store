import Cards from "@/components/Cards";
import Banner from "./home/Banner";
import ExtraSectionBike from "./home/ExtraSectionBike";
import ExtraSectionShipping from "./home/ExtraSectionShipping";
import BikerCulb from "./home/BikerCulb";
import PowerFulBike from "./home/PowerFulBike";

const Home = () => {
  return (
    <div>
      <Banner />
      <ExtraSectionBike></ExtraSectionBike>
      <ExtraSectionShipping></ExtraSectionShipping>
<BikerCulb></BikerCulb>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 container mx-auto mt-8">
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
      </div>
      <PowerFulBike></PowerFulBike>
    </div>
  );
};

export default Home;
