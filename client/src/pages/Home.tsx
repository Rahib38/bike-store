import Banner from "./home/Banner";
import BikerCulb from "./home/BikerCulb";
import CardsHome from "./home/CradsHome";
import ExtraSectionBike from "./home/ExtraSectionBike";
import ExtraSectionShipping from "./home/ExtraSectionShipping";
import PowerFulBike from "./home/PowerFulBike";
import {Helmet} from "react-helmet";
import TestimonialSection from "./home/TestimonialSection";


const Home = () => {
  return (
    <div>
      <Helmet><title>RideOn Wheels</title></Helmet>
      <Banner />
      <ExtraSectionBike></ExtraSectionBike>
      <ExtraSectionShipping></ExtraSectionShipping>
      <BikerCulb></BikerCulb>

      <div className="grid">
        <CardsHome />
      </div>
      <PowerFulBike></PowerFulBike>
      <TestimonialSection></TestimonialSection>
    </div>
  );
};

export default Home;
