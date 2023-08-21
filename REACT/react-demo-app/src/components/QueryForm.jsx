import { MDBBtn } from "mdb-react-ui-kit";
import React, { useState } from "react";
import WhereCondition from "./WhereCondition";
import GroupByCondition from "./GroupByCondition";
import { OrderByCondition } from "./OrderByCondition";

function QueryForm({tableFields,onSubmitOfClause}) {
  const [flagWhereByClause, setflagWhereByClause] = useState(false);
  const [flagOrderByClause, setflagOrderByClause] = useState(false);
  const [flagGroupByClause, setflagGroupByClause] = useState(false);
  const [whereActive, setWhereActive] = useState(false);
  const [orderActive, setOrderActive] = useState(false);
  const [groupByActive, setGroupByActive] = useState(false);
  const [whereCounter, setWhereCounter] = useState(0);
  const [groupByCounter, setGroupByCounter] = useState(0);
  const [orderByCounter, setOrderByCounter] = useState(0);
  const [whereList, setWhereList] = useState([]);
  const [groupByList, setGroupByList] = useState([]);
  const [orderByList, setOrderByList] = useState([]);
  let [whereItems, setWhereItems] = useState([]);
  let [groupItems, setGroupItems] = useState([]);
  let [orderItems, setOrderItems] = useState([]);
  const [groupCounter, setGroupCounter] = useState(0);
  const [orderCounter, setOrderCounter] = useState(0);

  const whereClause = (e) => {
    e.preventDefault();
    setflagWhereByClause(true);
    setflagGroupByClause(false);
    setflagOrderByClause(false);
    setWhereActive(true);
    setOrderActive(false);
    setGroupByActive(false);
  };
  const GroupByClause = (e) => {
    e.preventDefault();
    setflagGroupByClause(true);
    setflagOrderByClause(false);
    setflagWhereByClause(false);
    setWhereActive(false);
    setOrderActive(false);
    setGroupByActive(true);
  };
  const OrderByClause = (e) => {
    e.preventDefault();
    setflagOrderByClause(true);
    setflagGroupByClause(false);
    setflagWhereByClause(false);
    setWhereActive(false);
    setOrderActive(true);
    setGroupByActive(false);
  };


  const AddGroup = () => {
    let a = groupCounter + 1;
    console.log(a);
    setGroupCounter(a);
    let groupByListTemp = groupByList;
    groupByListTemp.push(
      <div id={`addgrp-${a}`}>
        <div
          className="container-fluid  mb-4"
          style={{
            height: "auto",
            zIndex: 10,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <label>Choose your Field:</label>
          <select
            className=" pt-2 pb-2  rounded"
            id="fields"
            style={{
              paddingLeft: 16,
              paddingRight: 16,
              border: "1px solid #0A001A",
            }}
          >
            select your field:
            <option>
              <MDBBtn className="gradient-custom-2">field-1</MDBBtn>
            </option>
          </select>
          <MDBBtn
            className="bg-transparent shadow-none"
            onClick={() => {
              Removegrp(a);
            }}
            style={{ margin: "1%", padding: "0%" }}
          >
            <i
              className="bi bi-x bhagwaGradient rounded-circle"
              style={{ fontSize: "200%" }}
            ></i>
            Remove
          </MDBBtn>
        </div>
      </div>
    );
    setGroupByList(groupByListTemp);
  };

  const Removegrp = (id) => {
    document.getElementById(`addgrp-${id}`).remove();
  };
  
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };


  const removeWhere=(id)=>{
    setWhereList((data)=>{
        data=data.filter(ids=>ids!=id);
        return data;
    })
    console.log(id);
  }

  const addwheres=()=>{

    setWhereList((data)=>{
        data[data.length]=whereCounter;
        console.log(data);
        return data;
    })
    setWhereCounter(whereCounter+1);
  }

  const removeGroupBy=(id)=>{
    setGroupByList((data)=>{
        data=data.filter(ids=>ids!=id);
        return data;
    })
    console.log(id);
  }

  const addGroupBy=()=>{

    setGroupByList((data)=>{
        data[data.length]=groupByCounter;
        console.log(data);
        return data;
    })
    setGroupByCounter(groupByCounter+1);
  }


  const addOrderBy=()=>{

    setOrderByList((data)=>{
        data[data.length]=orderByCounter;
        console.log(data);
        return data;
    })
    setOrderByCounter(orderByCounter+1);
  }

  const removeOrderBy=(id)=>{
    setOrderByList((data)=>{
        data=data.filter(ids=>ids!=id);
        return data;
    })
    console.log(id);
  }

  return (
    <>
      <div className="" style={{ backgroundColor: "white" }}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div>
            <ul className="navbar-nav">
              <li className="nav-item active">
                <MDBBtn
                  className=" m-4 active"
                  onClick={whereClause}
                  style={{
                    backgroundColor: whereActive ? "#0B666A" : "#35A29F",
                  }}
                >
                  where
                </MDBBtn>
              </li>
              <li className="nav-item">
                <MDBBtn
                  className=" m-4 active"
                  onClick={GroupByClause}
                  style={{
                    backgroundColor: groupByActive ? "#0B666A" : "#35A29F",
                  }}
                >
                  Group-By
                </MDBBtn>
              </li>
              <li className="nav-item">
                <MDBBtn
                  className=" m-4 active"
                  onClick={OrderByClause}
                  style={{
                    backgroundColor: orderActive ? "#0B666A" : "#35A29F",
                  }}
                >
                  Order-By
                </MDBBtn>
              </li>
            </ul>
          </div>
        </nav>

        {flagWhereByClause ? (
          <MDBBtn
            className="bg-transparent shadow-none"
            onClick={addwheres}
            style={{ margin: "1%", color: "#0B666A", padding: "0%" }}
          >
            <i className="bi bi-plus-circle-fill " style={{ fontSize: "200%" }}></i>
          </MDBBtn>
        ) : (
          ""
        )}
        {flagGroupByClause ? (
          <MDBBtn
            className="bg-transparent shadow-none"
            onClick={addGroupBy}
            style={{ margin: "1%", color: "#0B666A", padding: "0%" }}
          >
            <i className="bi bi-plus-circle-fill " style={{ fontSize: "200%" }}></i>
          </MDBBtn>
        ) : (
          ""
        )}
        {flagOrderByClause ? (
          <MDBBtn
            className="bg-transparent shadow-none"
            onClick={addOrderBy}
            style={{ margin: "1%", color: "#0B666A", padding: "0%" }}
          >
            <i className="bi bi-plus-circle-fill " style={{ fontSize: "200%" }}></i>
          </MDBBtn>
        ) : (
          ""
        )}
        <div>
          {flagWhereByClause ? (
            <div id="where" className="container">
              {whereList.map((id)=> <WhereCondition key={id} id={id} removeWhere={removeWhere} tableFields={tableFields}/>)}
              {whereList.length > 0 ? (
                <MDBBtn
                  className="btn  mb-3 "
                  onClick={onSubmit}
                  style={{ marginLeft: "45%", backgroundColor: "#0E2954" }}
                >
                  Submit
                </MDBBtn>
              ) : null}
            </div>
          ) : null}
        </div>
        <div>
          {flagGroupByClause ? (
            <div id="groupBy">
              {groupByList?.map((id) => <GroupByCondition key={id} id={id} removeGroupBy={removeGroupBy} tableFields={tableFields}/>)}
              {groupByList.length > 0 ? (
                <MDBBtn
                  className="btn  mb-3 "
                  onClick={()=>onSubmitOfClause()}
                  style={{ marginLeft: "48%", backgroundColor: "#0E2954" }}
                >
                  Submit
                </MDBBtn>
              ) : null}
            </div>
          ) : null}
        </div>
        <div>
          {flagOrderByClause ? (
            <div id="orderBy">
              {orderByList.map((id)=> <OrderByCondition key={id} id={id} removeOrderBy={removeOrderBy} tableFields={tableFields} />)}
              {orderByList.length > 0 ? (
                <MDBBtn
                  className="btn  mb-3 "
                  onClick={onSubmit}
                  style={{ marginLeft: "48%", backgroundColor: "#0E2954" }}
                >
                  Submit
                </MDBBtn>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default QueryForm;
