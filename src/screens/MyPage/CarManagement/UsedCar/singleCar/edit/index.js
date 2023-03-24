import { Button, Form, Input, InputNumber, Select } from "antd";
import React from "react";
import { Link } from "react-router-dom";

import Card from "../../../../../../components/common/Card";

import LogoiCON from "../../../../../../assets/images/logo-icon.svg";
import PageHeader from "../../../../../../components/PageHeader";

const { TextArea } = Input;

const carAvailable = [
  {
    value: "Yes",
    label: "Yes",
  },
  {
    value: "No",
    label: "No",
  },
];
const status = [
  {
    value: "Active",
    label: "Active",
  },
  {
    value: "Inactive",
    label: "Inactive",
  },
  {
    value: "Sold",
    label: "Sold",
  },
];
const EditSingleCar = (props) => {
  const handleCarAvailableChange = (value) => {
    console.log(value);
  };

  const onFinish = async (values) => {
    console.log("From SingleCarTable Edit:", values);
  };

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
                HeaderText="Used Car"
                Breadcrumb={[
                  { name: "Used Car" },
                  { name: "Single Car" },
                  { name: "Edit Car Detail" },
                ]}
              />

              <div className="row clearfix">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="header">
                      <h2>Lucid Activities</h2>
                    </div>
                    <div className="body">
                      <div className="editSingleCarPost">
                        <Card>
                          <Form
                            layout="vertical"
                            initialValues={{
                              number: "768",
                              carName: "Hennessey Venom F5 ",
                              brand: "Hennessey Venom GT",
                              sellingPrice: "$2.5M",
                              location:
                                "Beside.St.Xaviers College Cross Road, Nr. Vasant Vihar Bunglows, Chimanlal Girdharlal Rd, Navrangpura, Ahmedabad",
                              seller: "John Hennessey",
                              carAvailable: "Yes",
                              status: "Active",
                              packageType: "Vehicle",
                            }}
                            onFinish={onFinish}
                          >
                            <div className="row">
                              <div className="col-xl-12">
                                <h3 className="pageLabel mar-bottom-18">
                                  Edit New Car
                                </h3>
                              </div>
                              {/* Post Id */}
                              <div className="col-xl-6">
                                <Form.Item
                                  className="form-group"
                                  label="Post Id"
                                  labelWrap={true}
                                  name="number"
                                >
                                  <InputNumber />
                                </Form.Item>
                              </div>
                              {/* car Name */}
                              <div className="col-xl-6">
                                <Form.Item
                                  className="form-group"
                                  label="Car Name"
                                  labelWrap={true}
                                  name="carName"
                                  rules={[
                                    {
                                      required: true,
                                      message: "Please Enter Car Name!",
                                    },
                                  ]}
                                >
                                  <Input />
                                </Form.Item>
                              </div>
                              {/* Brand */}
                              <div className="col-xl-6">
                                <Form.Item
                                  className="form-group"
                                  label="Brand"
                                  labelWrap={true}
                                  name="brand"
                                >
                                  <Input />
                                </Form.Item>
                              </div>

                              {/* Selling Price */}
                              <div className="col-xl-6">
                                <Form.Item
                                  className="form-group"
                                  label="Selling Price"
                                  labelWrap={true}
                                  name="sellingPrice"
                                >
                                  <InputNumber />
                                </Form.Item>
                              </div>
                              {/*  Seller*/}
                              <div className="col-xl-6">
                                <Form.Item
                                  className="form-group"
                                  label="Seller"
                                  labelWrap={true}
                                  name="seller"
                                >
                                  <Input />
                                </Form.Item>
                              </div>
                              {/* Package Type */}
                              <div className="col-xl-6">
                                <Form.Item
                                  className="form-group"
                                  label="Package Type"
                                  labelWrap={true}
                                  name="packageType"
                                >
                                  <Input />
                                </Form.Item>
                              </div>
                              {/*   Listed In the Feature  */}
                              <div className="col-xl-6">
                                <Form.Item
                                  className="form-group"
                                  label=" Listed In the Feature"
                                  labelWrap={true}
                                  name="carAvailable"
                                >
                                  <Select
                                    size="large"
                                    defaultValue={carAvailable[0]}
                                    onChange={handleCarAvailableChange}
                                    options={carAvailable.map((item) => ({
                                      label: item.label,
                                      value: item.value,
                                    }))}
                                  />
                                </Form.Item>
                              </div>
                              {/*   Status */}
                              <div className="col-xl-6">
                                <Form.Item
                                  className="form-group"
                                  label="Status"
                                  labelWrap={true}
                                  name="status"
                                >
                                  <Select
                                    defaultValue={status[0]}
                                    size="large"
                                    onChange={handleCarAvailableChange}
                                    options={status.map((item) => ({
                                      label: item.label,
                                      value: item.value,
                                    }))}
                                  />
                                </Form.Item>
                              </div>
                              {/* Location */}
                              <div className="col-xl-12">
                                <Form.Item
                                  className="form-group"
                                  label="Location"
                                  labelWrap={true}
                                  name="location"
                                >
                                  <TextArea rows={3} />
                                </Form.Item>
                              </div>
                              <div className="col-xl-12 d-flex justify-content-end mar-top-8">
                                <Button className="mar-right-8">
                                  <Link to="/usedCar">Cancel</Link>
                                </Button>
                                <Button type="primary" htmlType="submit">
                                  Save
                                </Button>
                              </div>
                            </div>
                          </Form>
                        </Card>
                      </div>
                    </div>
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

export default EditSingleCar;
