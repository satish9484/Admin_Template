import React, { useState } from "react";
import { Button, Table, Typography } from "antd";
import {
  EditOutlined,
  CopyOutlined,
  EyeOutlined,
  CopyFilled,
} from "@ant-design/icons";
// import CustomModal from "../../../../../components/common/Modal";

import "../../";

import CopyToClipboard from "react-copy-to-clipboard";
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
    copyId: `You have copied the ${i + 1}-row id. `,
    copyIdSatus: false,
  });
}

const SingleCarTable = () => {
  const [copied, setCopied] = React.useState(false);

  const [previousRecord, setPreviousRecord] = useState({});

  const onCopy = (text) => {
    console.log("Copy Value", text);
    setCopied(true);
  };

  // Edit Row Data
  const editRow = (record) => {
    console.log("Edit Row", record);
  };

  // View Row Data
  const viewRow = (record) => {
    console.log("From viewRow", record);

    // navigate(`/usedCar/singleCar/view`);
  };

  const handleCopyRecord = (record) => {
    console.log("handleCopyRecord");

    if (record.copyIdSatus) {
      data[record.key - 1].copyIdSatus = false;
      console.log(data[record.key - 1].copyIdSatus);
      setPreviousRecord({});
    }
  };

  const handleUnCopyRecord = (record) => {
    console.log("handleUnCopyRecord");

    if (
      Object.keys(previousRecord).length > 0 &&
      previousRecord !== null &&
      previousRecord !== undefined
    ) {
      data[previousRecord.key - 1].copyIdSatus = false;
      console.log(data[previousRecord.key - 1].copyIdSatus);

      data[record.key - 1].copyIdSatus = true;
      console.log(data[record.key - 1].copyIdSatus);

      setPreviousRecord(record);
    } else {
      data[record.key - 1].copyIdSatus = true;
      console.log(data[record.key - 1].copyIdSatus);
      setPreviousRecord(record);
    }
  };

  console.log("Set Previous Record", previousRecord);

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
      width: "120px",
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
      ellipsis: true,
      key: "operation",
      render: (_, record) => {
        return (
          <div className="d-flex userAction">
            {/* View */}

            <a href="view">
              <Typography
                className="mar-right-10"
                onClick={() => viewRow(record)}
              >
                <EyeOutlined style={{ fontSize: "30px", color: "white" }} />
              </Typography>
            </a>
            {/* Edit  */}
            <a href="edit">
              <Typography
                to="edit"
                className="mar-right-10"
                style={{
                  borderColor: "white",
                }}
                onClick={() => editRow(record)}
              >
                <EditOutlined style={{ fontSize: "30px", color: "white" }} />
              </Typography>
            </a>
          </div>
        );
      },
    },

    // Copy
    {
      title: "Copy",
      className: "text-clip",
      dataIndex: "copyId",
      ellipsis: true,
      key: "copyId",

      render: (_, record) => {
        return (
          <Typography.Link
          // onClick={() => handleCopy(record)}
          >
            {copied && record.copyIdSatus ? (
              <Button
                type="link"
                onClick={() => handleCopyRecord(record)}
                className=" d-flex flex-column gap-5 align-items-start  "
              >
                <CopyFilled style={{ fontSize: "25px", color: "white" }} />
                {/* <span style={{ color: "red" }}>Copied.</span> */}
              </Button>
            ) : (
              <CopyToClipboard
                onCopy={onCopy}
                options={{ message: "Whoa!" }}
                text={record.copyId}
              >
                <Button type="link" onClick={() => handleUnCopyRecord(record)}>
                  <CopyOutlined style={{ fontSize: "25px", color: "white" }} />
                </Button>
              </CopyToClipboard>
            )}
          </Typography.Link>
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

      <section className="section">
        <textarea rows="3" style={{ marginTop: "1em", width: "100%" }} />
      </section>

      {/* <CustomModal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Are you sure you want to delete?</p>
      </CustomModal> */}
    </>
  );
};

export default SingleCarTable;
