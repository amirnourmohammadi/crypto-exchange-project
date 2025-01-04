import React from "react";
import aboutImg from "../assets/images/about.png";
const AboutUsPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 bg-info p-3 rounded">
          <h3>AboutUs</h3>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          deserunt non nisi, dignissimos nam temporibus aliquam rem doloribus
          possimus repudiandae at recusandae vero enim nobis. Pariatur sequi
          culpa minus iure sed ipsum expedita vero eaque quo nostrum et corrupti
          suscipit ullam, veniam repellat iste inventore consectetur enim autem!
          Architecto rem adipisci dolorum atque exercitationem veritatis
          excepturi doloribus, et numquam qui magni minus debitis recusandae!
          Possimus, quo. Rerum repellendus quo dolorem quibusdam sit
          reprehenderit libero illum magni blanditiis ratione. Distinctio sit
          aliquid ipsum nihil velit, amet blanditiis laudantium a harum
          possimus, architecto beatae, doloribus labore ratione consequuntur?
          Dignissimos dolore magnam alias?
        </div>
        <div className="col-md-5 text-center">
          <img src={aboutImg} alt="about" className="img-fluid about-img" />
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
