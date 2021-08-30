import AOS from "aos";
import { useEffect } from "react";
import {
  FeaturedBanner,
  Footer,
  MainBanner,
  Navbar,
  ReachedBanner,
  StoryBanner,
  TransactionBanner,
} from "../components";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {/* <!-- Navbar --> */}
      <Navbar />

      {/* <!-- Header --> */}
      <MainBanner />

      {/* <!-- 3 Column - Feature --> */}
      <TransactionBanner />

      {/* <!-- 5 Column - Featured-game --> */}

      <FeaturedBanner />

      {/* <!-- Reached --> */}
      <ReachedBanner />

      {/* <!-- Story --> */}
      <StoryBanner />

      {/* <!-- Footer --> */}
      <Footer />
      
    </>
  );
};

export default Home;
