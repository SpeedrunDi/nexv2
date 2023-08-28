import React, {useEffect} from 'react';
import Promo from "../../components/Promo/Promo";
import Offer from "../../components/Offer/Offer";
import OurProjects from "../../components/OurProjects/OurProjects";
import Companies from "./Companies/Companies";
import Employees from "../../components/Employees/Employees";
import Reviews from "./Reviews/Reviews";
import Feedback from "../../components/Feedback/Feedback";

const Main = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <>
      <Promo
        main
        title="Улучшить бизнес с NEX"
        titlesecond="поможем выйти на новый уровень"
      />
      <Offer />
      <OurProjects />
      <Companies />
      <Employees main />
      <Reviews />
      <Feedback />
    </>
  );
};

export default Main;