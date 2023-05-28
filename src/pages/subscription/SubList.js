import React from "react";
import Sub from "./Sub";
import "./SubList.css";

const SubList = () => {
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

            <div className="toggle-btn --m2">
              <div className="ball"></div>
            </div>

            <p>Yearly</p>
          </div>
        </div>

        <div className="sub-plans --my">
          {" "}
          <Sub plan={"Basic"} theme={"theme1"} />
          <Sub plan={"Pro"} theme={"theme2"} />
          <Sub plan={"Master"} theme={"theme3"} />
        </div>
      </div>
    </section>
  );
};

export default SubList;
