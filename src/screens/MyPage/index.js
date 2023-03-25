import React from "react";

import LogoiCON from "../../assets/images/logo-icon.svg";
import PageHeader from "../../components/PageHeader";

import UsedCar from "./CarManagement/UsedCar/index";

const index = (props) => {
  const { loadingPage } = props;
  return (
    <>
      {loadingPage ? (
        <div className="page-loader-wrapper">
          <div className="loader">
            <div className="m-t-30">
              <img src={LogoiCON} width="48" height="48" alt="Lucid" />
            </div>
            <p>Please wait...</p>
          </div>
        </div>
      ) : (
        <div
          onClick={() => {
            document.body.classList.remove("offcanvas-active");
          }}
        >
          <div>
            <div className="container-fluid">
              <PageHeader
                HeaderText="Dashboard"
                Breadcrumb={[{ name: "MyPage" }]}
              />
              <UsedCar />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default index;
