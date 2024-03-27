import React from "react";
import {  Routes, Route } from "react-router-dom";
import {
  Navigation,
  Navigationfr,
  Home,
  Blog,
  Postphotography,
  Footer,
  Contact,
} from "./components";
import Typesofphoto from "./components/typesofphoto";
import Wintermarketing from "./components/Wintermarketing";
import Easyproductphoto from "./components/Easyproductphoto";
import Topshopify from "./components/Topshopify";
import Videoediting from "./components/Videoediting";
import Softbox from "./components/Softbox";
import Minimizebounce from "./components/Minimizebounce";
import Termsconditions from "./components/Termsconditions";
import Privacypolicy from "./components/Privacypolicy";
import ClothingPhoto from "./components/ClothingPhoto";
import CarPhoto from "./components/CarPhoto";
import ProductReselling from "./components/ProductReselling";
import FoodPhoto from "./components/FoodPhoto";
import InfluenceMarketing from "./components/InfluenceMarketing";
import ScrollToTop from "./components/ScrollToTop";
import Newyear from "./components/Newyear";
import Productphotography from "./components/Productphotography";
import Thankyou from "./components/Thankyou";
import NotFound from "./components/NotFound";
import AllBlogs from "./components/AllBlogs";
import EcomToBrand from "./components/EcomToBrand";
import ArtInteli from "./components/ArtInteli";
import AmazonImage from "./components/AmazonImage";
import PhotoStyle from "./components/PhotoStyle";
import PhotoStyle2 from "./components/PhotoStyle2";
import GraphicsDesign from "./components/GraphicsDesign";
import ReducingBounce from "./components/ReducingBounce";
import CreativeImageEdit from "./components/CreativeImageEdit";
import PhotoFact from "./components/PhotoFact";
import SrgbColorspace from "./components/SrgbColorspace";
import OutsourcePhoto from "./components/OutsourcePhoto";
import PostProduction from "./components/PostProduction";
import OurIntegration from "./components/OurIntegration";

function App() {
  return (
    
      <div className="App">
        <ScrollToTop />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" exact component={() => <Home />} /> */}
          <Route path="/contact-us" element={ <Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/footer" element={ <Footer />} />
          <Route
            path="/5-important-photography-tips-for-beginners"
            element={ <Postphotography />}
          />
          <Route
            path="/types-of-photography-which-one-drive-your-inner-passion-most"
            element={ <Typesofphoto />}
          />
          <Route
            path="/7-creative-winter-marketing-ideas-for-e-commerce-businesses"
            element={ <Wintermarketing />}
          />
          <Route
            path="/our-integration"
            element={ <OurIntegration />}
          />
          <Route
            path="/easy-product-photography-solutions-for-small-business"
            element={<Easyproductphoto />}
          />
          <Route
            path="/top-shopify-marketing-strategy-for-sellers"
            element={ <Topshopify />}
          />
          <Route
            path="/5-interesting-video-editing-facts"
            element={ <Videoediting />}
          />
          <Route
            path="/minimize-your-bounce-rate"
            element={ <Minimizebounce />}
          />
          <Route
            path="/how-to-make-a-softbox-for-product-photography"
            element={ <Softbox />}
          />
          <Route
            path="/terms-and-conditions"
            element={ <Termsconditions />}
          />
          <Route
            path="/privacy-policy"
            element={ <Privacypolicy />}
          />
          <Route
            path="/top-new-year-resolution-for-your-online-store"
            element={ <Newyear />}
          />
          <Route
            path="/product-photography-how-to-take-photos-for-your-e-commerce-business"
            element={ <Productphotography />}
          />
          <Route
            path="/a-beginners-how-to-guide-for-clothing-photography"
            element={ <ClothingPhoto />}
          />
          <Route
            path="/car-photography-a-beginners-how-to-guide-and-tips"
            element={ <CarPhoto />}
          />
          <Route
            path="/product-reselling-photography-why-and-how-to-do-it"
            element={ <ProductReselling />}
          />
          <Route
            path="/top-8-food-photography-tips-for-beginners"
            element={ <FoodPhoto />}
          />
          <Route
            path="/influencer-marketing-how-to-find-the-right-one"
            element={<InfluenceMarketing />}
          />
          <Route path="/thank-you/*" element={<Thankyou />} />
          <Route path="/all-blogs" element={ <AllBlogs />} />
          <Route
            path="/how-to-turn-your-e-commerce-business-into-a-brand"
            element={ <EcomToBrand />}
          />
          <Route
            path="/artificial-intelligence-is-used-in-image-editing"
            element={ <ArtInteli />}
          />
          <Route
            path="/an-introduction-to-amazon-image-guidelines"
            element={ <AmazonImage />}
          />
          <Route
            path="/photography-style-guide"
            element={ <PhotoStyle />}
          />
          <Route
            path="/photography-style-guide2"
            element={ <PhotoStyle2 />}
          />
          <Route
            path="/why-post-production-services-are-important-for-e-commerce-businesses"
            element={ <PostProduction />}
          />
          <Route
            path="/why-you-should-outsource-your-image-editing"
            element={ <OutsourcePhoto />}
          />
          <Route
            path="/srgb-colorspace-the-journey-from-introduction-to-importance"
            element={ <SrgbColorspace />}
          />
          <Route
            path="/tips-for-reducing-bounce-rate-and-increasing-conversion"
            element={<ReducingBounce />}
          />
          <Route
            path="/why-is-graphic-design-important-for-e-commerce-business"
            element={<GraphicsDesign />}
          />
          <Route
            path="/importance-of-creative-image-editing-for-product-photos"
            element={ <CreativeImageEdit />}
          />
          <Route
            path="/5-interesting-photo-editing-facts"
            element={ <PhotoFact />}
          />
          <Route path="" element={<NotFound/>} />
        </Routes>
        {/* <Footer/> */}
      </div>
  
  );
}

export default App;
