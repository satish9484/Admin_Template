import React from "react";
import { Table, Typography } from "antd";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
// import CustomModal from "../../../../../components/common/Modal";

import "../../CarManagement.scss";

import { useState } from "react";
// import { Link } from "react-router-dom";

let data = [];

const aa = ["Active", "Inactive", "Sold"];
const bb = ["Yes", "No"];

for (let i = 0; i < 50; i++) {
  data.push({
    key: i + 1,
    number: i + 1,
    carName: "Hennessey Venom F5 ",
    brand: "Hennessey Venom GT",
    location:
      "Beside.St.Xaviers College Cross Road, Nr. Vasant Vihar Bunglows, Chimanlal Girdharlal Rd, Navrangpura, Ahmedabad",
    seller: "John Hennessey",
    available: bb[Math.floor(Math.random() * bb.length)],
    status: aa[Math.floor(Math.random() * aa.length)],
    type: "Vehicle",
    sellingPrice: "$2.5M",
  });
}

const SingleCarTable = () => {
 

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  // Edit Row Data
  const editRow = (record) => {
    console.log("Edit Row", record);
    // navigate(`/usedCar/singleCar/edit`);
    // <Redirect to="/usedCar/singleCar/edit" />

  };

  // View Row Data
  const viewRow = (record) => {
    console.log("From viewRow", record);
    // navigate(`/usedCar/singleCar/view`);
  };

  // delete Row Data
  // const deleteRow = (record) => {
  //   console.log("From deleteRow", record);
  // };

  // Table Columns
  const columns = [
    //Post id
    {
      title: "Post id",
      dataIndex: "number",
      key: "number",
      // width: "150px",
      ellipsis: true,
    },
    //Car Name
    {
      title: "Car Name",
      dataIndex: "carName",
      key: "carName",
      // width: "150px",
      ellipsis: true,
    },
    //Brand
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
      // width: "150px",
      ellipsis: true,
    },
    // selling Price
    {
      title: "Selling Price",
      dataIndex: "sellingPrice",
      key: "sellingPrice",
      // width: "150px",
      ellipsis: true,
    },
    //Seller
    {
      title: "Seller",
      dataIndex: "seller",
      key: "seller",
      // width: "150px",
      ellipsis: true,
    },
    //Listed In the Features
    {
      title: "Listed In the Feature",
      dataIndex: "available",
      key: "available",
      // width: "150px",
      ellipsis: true,
    },
    //Status
    {
      title: "Status",
      key: "status",
      // width: "150px",
      dataIndex: "status",
      render: (_, { status }) => {
        return status.toUpperCase() === "ACTIVE" ? (
          <div className="status-active status">{status.toUpperCase()}</div>
        ) : status.toUpperCase() === "INACTIVE" ? (
          <div className="status inActive">{status.toUpperCase()}</div>
        ) : (
          <div className="sold status">{status.toUpperCase()}</div>
        );
      },
    },
    //Package Type
    {
      title: "Package Type",
      dataIndex: "type",
      key: "type",
      // width: "150px",
      ellipsis: true,
    },
    //Location
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      // width: "150px",
      ellipsis: true,
    },
    //Actions
    {
      title: "Action",
      className: "text-clip",
      dataIndex: "operation",
      // width: "150px",
      ellipsis: true,
      key: "operation",
      render: (_, record) => {
        return (
          <div className="d-flex userAction">
            {/* View */}

            <a href='view'>
            <Typography 
              className="mar-right-8"
              onClick={() => viewRow(record)}
            >
              <EyeOutlined style={{ fontSize: "20px", color: "white" }} />
            </Typography>
            </a>
            {/* Edit  */}
            <a href='edit'>
            <Typography to='edit'
              className="mar-right-8"
              style={{
                borderColor: "white",
              }}
              onClick={() => editRow(record)}
            >
              <EditOutlined style={{ fontSize: "20px", color: "white" }} />
            </Typography>
            </a>

            {/*   Delete  */}
            <Typography.Link
              className="mar-right-8"
              onClick={showModal}

              // onClick={() => deleteRow(record)}
            >
              <DeleteOutlined style={{ fontSize: "20px", color: "white" }} />
            </Typography.Link>
          </div>
        );
      },
    },
  ];

  const onShowSizeChange = (page, pageSize) => {
    console.log("pagination values", page, pageSize);
  };

  return (
    <>
      <Table
      
        columns={columns}
        dataSource={data}
        scroll={{ x: 980 }}
        pagination={{
          onChange: onShowSizeChange,
          defaultCurrent: 1,
        }}
      />

      {/* <CustomModal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Are you sure you want to delete?</p>
      </CustomModal> */}
    </>
  );
};

export default SingleCarTable;
