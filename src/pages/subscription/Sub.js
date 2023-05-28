import React from "react";
import "./Sub.css";

const Sub = ({ plan, theme, price, isBasic, isPro, isMaster }) => {
  return (
    <div className="price-box --card">
      <div className={`${theme} --p2`}>
        <p className="--text-light">{plan}</p>
        <h4 className="--text-light">
          <span>$</span>
          <span>{price}</span>
        </h4>
      </div>
      <div className="feaures">
        <ul>
          {isBasic && <li>Unlimited Pages</li>}
          {isBasic && <li>Unlimited Bandwidth</li>}
          {isBasic && <li>500GB Storage</li>}

          {isPro && <li>10 Backups</li>}
          {isPro && <li>Email Support</li>}
          {isPro && <li>GitHub Tool</li>}

          {isMaster && <li>20 Backups</li>}
          {isMaster && <li>Push Notification</li>}
          {isMaster && <li>Priority Support</li>}
        </ul>
      </div>

      <button className={`${theme} btn`}>Buy Now!</button>
    </div>
  );
};

export default Sub;
