import React,{useContext} from "react";
import AutomobileCard from "./AutomobileCard";
import axios from "axios";
import useOnline from "../../utils/useOnline";
import Shimmer from "./Shimmer";
import Carousel from "../automobiles/carousel";
import { AuthContext } from "../../utils/AuthContext";

const AutomobileBody = () => {
  const apiLink = "https://fakestoreapi.com/products";
  const { isLoggedIn, username } = useContext(AuthContext);

  const [automobiles, setAutomobiles] = React.useState([]);

  React.useEffect(() => {
    getApiData();
  }, []);

  async function getApiData() {
    try {
      const response = await axios.get(apiLink);
      console.table(response)
      setAutomobiles(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  const offline = useOnline();
  if (!offline) {
    return (
      <h1 className="text-5xl">Your are Offline please check the Internet</h1>
    );
  }

  return automobiles?.length === 0 ? (<>
    <Carousel/>
    <Shimmer /></>
  ) : (
    <>
    
      <div>
        <Carousel/>
      </div>
      {/* <div>
        <CarsForRental />
      </div> */}
      <div className="justify-start" p-2 ><h1 className="font-medium text-4xl pl-7"> Need a Automobile for Rent</h1></div>
      <div className="flex flex-wrap justify-center mt-2">
        
        {automobiles.map((automobile,index) => {
           if (index > 11) {
            // eslint-disable-next-line array-callback-return
            return;
        }

          return <AutomobileCard key={automobile.id} {...automobile} />;
        })}
      </div>
    </>
  );
};
export default AutomobileBody;
