import { Tabs } from "antd";
import React, { useState } from "react";

import UsedSingleCar from "../UsedCar/singleCar/index";

const UsedCar = (props) => {
  const [currentTab, setCurrentTab] = useState("1");

  const tabNames = [
    {
      label: `Single car post`,
      key: "1",
      children: <UsedSingleCar />,
    },
  ];

  const onChange = (key) => {
    setCurrentTab(key);
  };

  return (
    <>
      <div
        onClick={() => {
          document.body.classList.remove("offcanvas-active");
        }}
      >
        <div>
          <div className="container-fluid">
            <div className="row clearfix">
              <div className="col-lg-12">
                <div className="card">
                  <div className="header">
                    <h2>Lucid Activities</h2>
                  </div>
                  <div className="body">
                    <Tabs
                      onChange={onChange}
                      size="middle"
                      activeKey={currentTab}
                      items={tabNames}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsedCar;
