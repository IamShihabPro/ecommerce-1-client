import React, { useContext } from "react";
import ProductSlider from "../../Components/ProductSlider/ProductSlider";
import ShopPage from "../ShopPage/ShopPage";
import { AuthContext } from "../../Provider/AuthProvider";
import Loader from "../../Components/Loader/Loader";
import Banner from "../../Components/Banner/Banner";
import ContactForm from "../ContactForm/ContactForm";
import ShowReview from "../ShowReview/ShowReview";

const Home = () => {
  const { user, loading , theme} = useContext(AuthContext);
  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div >
      <Banner></Banner>
      {/* <ProductData></ProductData> */}
      
      <ShopPage></ShopPage>

      <ProductSlider></ProductSlider>

      <div className="my-20 mb-10">
      <ShowReview></ShowReview>
      </div>

      <ContactForm></ContactForm>
    </div>
  );
};

export default Home;
