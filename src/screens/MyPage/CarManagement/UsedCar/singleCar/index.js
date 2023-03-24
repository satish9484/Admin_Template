import React from "react";
import SingleCarTable from "./SingleCarTable";

import "../../CarManagement.scss";
import {  Col, Input, Row } from "antd";
const { Search } = Input;



const SingleCar = () => {
  const onSearch = (value) => console.log(value);

  return (
    <>
      <div className="multipleCarPost shadow-paper auto-height "> 
        <Row className="search-filter-container mar-bottom-8">
          <Col  xs={{ span: 24, offset: 0 }} lg={{ span: 10, offset: 14 }}>
            <div className="searchGrp">
              <Search
                placeholder="Input search text"
                size="large"
                onSearch={onSearch}
              />
            </div>
          </Col>
       
        </Row>
        <SingleCarTable />
      </div>
    </>
  );
};

export default SingleCar;
