import React, {useEffect} from 'react';
import Promo from "../../components/Promo/Promo";
import OurCourses from "../../components/Offer/OurCourses";
import Feedback from "../../components/Feedback/Feedback";
import OurAdvantages from "../../components/OurProjects/OurAdvantages";
import Employees from "../../components/Employees/Employees";
import News from "./News/News";

const Courses = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <>
      <Promo
        title="войти в it вместе"
        titlesecond="next-gen exellence"
      />
      <OurCourses />
      <OurAdvantages />
      <Employees />
      <News />
      <Feedback />
    </>
  );
};

export default Courses;