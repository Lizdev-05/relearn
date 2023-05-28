import React, { useEffect, useState } from "react";
import Sub from "./Sub";
import "./SubList.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SubList = () => {
  const [basic, setBasic] = useState(9.99);
  const [pro, setPro] = useState(19.99);
  const [master, setMaster] = useState(29.99);

  const [yearly, setyearly] = useState(false);

  const handleClick = () => {
    setyearly(!yearly);
  };

  const calcPercentage = (num, per) => {
    return ((num * 12) / 100) * per;
  };
  useEffect(() => {
    if (yearly) {
      setBasic(calcPercentage(basic, 70).toFixed(0));
      setPro(calcPercentage(pro, 70).toFixed(0));
      setMaster(calcPercentage(master, 70).toFixed(0));
    } else {
      setBasic(9.99);
      setPro(19.99);
      setMaster(29.99);
    }
  }, [yearly]);
  return (
    <section className="main">
      <div className="container --center-all">
        <ToastContainer />
        <div>
          <div className="title">
            <h2>Pricing</h2>
            <div className="--line"></div>
          </div>

          <div className="plan --flex-center">
            <p>Monthly</p>

            <div
              className={yearly ? "toggle-btn --m2 toggled" : "toggle-btn --m2"}
              onClick={handleClick}
            >
              <div className={yearly ? "ball moved" : "ball"}></div>
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
            onBuy={() => toast.success(`${"You are about to pay"} ${basic}`)}
          />
          <Sub
            plan={"Pro"}
            theme={"theme2"}
            price={pro}
            isPro={true}
            isYearly={yearly}
            onBuy={() => toast.success(`${"You are about to pay"} ${pro}`)}
          />
          <Sub
            plan={"Master"}
            theme={"theme3"}
            price={master}
            isMaster={true}
            isYearly={yearly}
            onBuy={() => toast.success(`${"You are about to pay"} ${master}`)}
          />
        </div>
      </div>
    </section>
  );
};

export default SubList;
