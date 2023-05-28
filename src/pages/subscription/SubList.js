import React, { useState } from "react";
import Sub from "./Sub";
import "./SubList.css";

const SubList = () => {
  const [basic, setBasic] = useState(9.99);
  const [pro, setPro] = useState(19.99);
  const [master, setMaster] = useState(29.99);

  const [yearly, setyearly] = useState(false);

  const handleClick = () => {
    setyearly(!yearly);
  };
  return (
    <section className="main">
      <div className="container --center-all">
        <div>
          <div className="title">
            <h2>Pricing</h2>
            <div className="--line"></div>
          </div>

          <div className="plan --flex-center">
            <p>Monthly</p>

            <div className="toggle-btn --m2" onClick={handleClick}>
              <div className="ball"></div>
            </div>

            <p>Yearly</p>
          </div>
        </div>

        <div className="sub-plans --my">
          {" "}
          <Sub
            plan={"Basic"}
            theme={"theme1"}
            price={basic}
            isBasic={true}
            isYearly={yearly}
          />
          <Sub
            plan={"Pro"}
            theme={"theme2"}
            price={pro}
            isPro={true}
            isYearly={yearly}
          />
          <Sub
            plan={"Master"}
            theme={"theme3"}
            price={master}
            isMaster={true}
            isYearly={yearly}
          />
        </div>
      </div>
    </section>
  );
};

export default SubList;
