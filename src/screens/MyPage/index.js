import React from "react";

import LogoiCON from "../../assets/images/logo-icon.svg";
import PageHeader from "../../components/PageHeader";

import SingleCar from "./CarManagement/singleCar/index";

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
                HeaderText="My Page"
                Breadcrumb={[{ navigate: "mypage", name: "My Page" }]}
              />
              <div className="row clearfix">
                <div className="col-md-12 ">
                  {/* <div className="card"> */}
                  <SingleCar />
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default index;
