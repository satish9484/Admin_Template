import React from "react";
// import BreadCrumbs from "../../../../../components/common/Breadcrumbs";
// import Card from "../../../../../../components/common/Card";
import { Button } from "antd";
import { Link } from "react-router-dom";

import LogoiCON from "../../../../../assets/images/logo-icon.svg";
import PageHeader from "../../../../../components/PageHeader";

const data = {
  number: "768",
  carName: "Hennessey Venom F5 ",
  brand: "Hennessey Venom GT",
  sellingPrice: "$2.5M",

  seller: "John Hennessey",
  carAvailable: "Yes",
  status: "Active",
  packageType: "Vehicle",
  location:
    "Beside.St.Xaviers College Cross Road, Nr. Vasant Vihar Bunglows, Chimanlal Girdharlal Rd, Navrangpura, Ahmedabad",
};
const ViewSignleCar = (props) => {
  console.log("We are in View");
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
                Breadcrumb={[
                  { name: "My Page", navigate: "mypage" },
                  { name: "View Details" },
                ]}
              />

              <div className="row clearfix">
                <div className="col-lg-12">
                  <div className="body viewRowDataLayout">
                    {Object.keys(data).map((value, i) => {
                      return value === "location" ? (
                        <div key={i} className="field col-span">
                          <p className="filed-label">{value}</p>
                          <p className="filed-content ">{data[value]}</p>
                        </div>
                      ) : (
                        <div key={i} className="field">
                          <p className="filed-label">{value}</p>
                          <p className="filed-content ">{data[value]}</p>
                        </div>
                      );
                    })}
                    <Button className="back-button">
                      <Link to="/mypage">Back</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewSignleCar;
