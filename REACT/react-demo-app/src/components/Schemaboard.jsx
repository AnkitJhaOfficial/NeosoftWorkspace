import React, { useLayoutEffect, useState } from "react";
// import Navbar from "./Navbar";
import "../styles/Schemaboard.css";
import "../styles/Login.css";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MDBBtn, MDBRow } from "mdb-react-ui-kit";
import axios from "axios";
import QueryForm from "./QueryForm";
import { API_BASE_URI } from "../constants/ApiConstants";
import { toast } from "react-hot-toast";
import jwtDecode from "jwt-decode";
import ColumnNames from "./ColumnNames";
function Schemaboard() {
  const navigate = useNavigate();
  const dataFetch = useRef(false);
  let [colNames, setColNames] = useState([]);
  const [flagForOneTable, setFlagForOneTable] = useState(false);
  const [whereConditionValue, setWhereConditionValue] = useState("");
  const [whereCondition, setWhereCondition] = useState("");
  const [existTable, setExistTable] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [tableFields, setTableFields] = useState([]);
  const [tableNames, setTableNames] = useState([]);
  const [columns, setColumns] = useState([]);
  let userId = 1;
  let connectionName = "testdb";

  //   let query = {
  // 	select_list :[],
  // 	where_list :[],
  // 	join_list :[]
  //   }

  useEffect(() => {
    document.getElementById("cardRow").innerHTML = "";
    if (dataFetch.current) return;
    dataFetch.current = true;
    // if (sessionStorage.getItem("userId") === null) {
    //   toast.error("Please login first");
    //   navigate("/login");
    // } else {
    //   const jwt = jwtDecode(sessionStorage.getItem("token"));
    //   if (jwt.sub != sessionStorage.getItem("userId")) {
    //     navigate("/login");
    //   }
    //   if (sessionStorage.getItem("connectionName") === null) {
    //     toast.error("Select connection first");
    //     navigate("/dashboard");
    //   }
    //   console.log("Status ", jwt.sub == sessionStorage.getItem("userId"));
    // }
    axios
      .get(
        `${API_BASE_URI}/query/get-all-tables?userId=${userId}&connectionName=${connectionName}`
      )
      .then((response) => {
        console.log(response.data.data);
        setTableData(response.data.data.tableNames);
      })
      .catch((err) => console.log(err));
  }, []);

  const getTheConditionValue = (e) => {
    setWhereConditionValue(e.target.value);
    console.log(e.target.value);
  };

  const getCondition = (e) => {
    setWhereCondition(e.target.value);
    console.log(e.target.value);
  };

  const onSubmitOfClause = () => {
    let select_list_for_saving = [
      {
        table_name: `${tableFields[0].table_name}`,
        column_list: [
          columns.map((obj) => {
            return {
              table_name: `${tableFields[0].table_name}`,
              column_name: `${obj}`,
            };
          }),
        ],
      },
    ];
    let where_list_for_saving = [
      {
        table_name: `${tableFields[0].table_name}`,
        column_list: [
          {
            table_name: `${tableFields[0].table_name}`,
            column_name: `${tableFields[0].column_name}`,
            column_type: `${tableFields[0].column_type}`,
            value_one: `${whereConditionValue}`,
            condition: `${whereCondition}`,
          },
        ],
      },
    ];
    //   query.select_list = select_list_for_saving;
    //   query.where_list = where_list_for_saving;
    //join_list: [],
    let query = {
      select_list: [
        {
          table_name: `${tableFields[0].table_name}`,
          column_list: columns.map((obj) => {
            return {
              table_name: `${tableFields[0].table_name}`,
              column_name: `${obj}`,
            };
          }),
          // {
          // 	"table_name": `${tableFields[0].table_name}`,
          // 	"column_name": `${columns[0]}`
          //   }
        },
      ],
      where_list: [
        {
          table_name: `${tableFields[0].table_name}`,
          column_list: [
            {
              table_name: `${tableFields[0].table_name}`,
              column_name: `${tableFields[0].column_name}`,
              column_type: `${tableFields[0].column_type}`,
              valueOne: `${whereConditionValue}`,
              condition: `${whereCondition}`,
            },
          ],
        },
      ],
      join_list: [],
    };
    console.log(query);
    axios
      .post(
        `${API_BASE_URI}/query/create-query?userId=${userId}&connectionName=${connectionName}`,
        query
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  const firstUpdate = useRef(true);
  const getColumnValues = (column_values) => {
    if (columns.includes(column_values)) {
      var index = columns.indexOf(column_values);
      if (index > -1) {
        // only splice array when item is found
        columns.splice(index, 1); // 2nd parameter means remove one item only
      }
    } else {
      columns.push(column_values);
      setColumns(columns);
      console.log(columns);
    }
  };
  const sendDataToParent = (index) => {
    console.log(index);
    setExistTable((tables) => {
      tables = tables.filter((tableName) => index.tbName != tableName);
      return tables;
    });
    document.getElementById(index.tbName).remove();    
    setFlagForOneTable(false);
  };

  const submitQuery = () => {
    let query = {
      select_list: [
        {
          table_name: `${tableFields[0].table_name}`,
          column_list: columns.map((obj) => {
            return {
              table_name: `${tableFields[0].table_name}`,
              column_name: `${obj}`,
            };
          }),
        },
      ],
	  where_list: [
        {
          table_name: `${tableFields[0].table_name}`,
          column_list: [
          ],
        },
      ],
      join_list: [],
    };

    axios
      .post(
        `${API_BASE_URI}/query/create-query?userId=${userId}&connectionName=${connectionName}`,
        query
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  

  const descTableData = (tableNames) => {
    if (flagForOneTable == false) {
      console.log("TB", tableNames);
      //table fields
      axios
        .get(
          `${API_BASE_URI}/query/get-all-table-fields?userId=${userId}&connectionName=${connectionName}&tableName=${tableNames}`
        )
        .then((response) => {
          console.log(response.data.data, "This is response.data.data");
          setTableFields(response.data.data);
          setTableNames(tableNames.toUpperCase());
          console.log("Updated ", existTable);
          if (!existTable.includes(tableNames)) {
            existTable.push(tableNames);
            let colNamesTemp = colNames;
            setColNames(colNamesTemp);
            colNamesTemp.push(
              <ColumnNames
                tbName={response.data.data[0].table_name}
                tbFields={response.data.data}
                sendDataToParent={sendDataToParent}
                getColumnValues={getColumnValues}
              />
              // <ColumnNames abc/>
            );
          } else {
            console.log("t ", tableNames.length);
            if (tableNames.length) {
              toast.success(tableNames + " details already displayed..");
            }
          }
          console.log(tableFields, "This is tablefeilds");
        })
        .catch((err) => console.log(err));
    }

    setFlagForOneTable(true);
  };
  return (
    <>
      {/* <Navbar /> */}
      <div className="sidebar" id="divSidebar">
        <a className="active" id="anchor">
          <b style={{ fontSize: "2rem", height: "auto" }}>
            {sessionStorage.getItem("connectionName")}
          </b>
        </a>
        {tableData.map((obj) => (
          <a id="anchor" onClick={() => descTableData(obj)}>
            {obj}
          </a>
        ))}
      </div>
      <div className="content mt-2" id="divSidebar" >
        <MDBRow id="cardRow" style={{height:"75%",overflow:"scroll"}}>
          {colNames?.map((obj) => obj)}
          {flagForOneTable ? (
            <MDBBtn onClick={submitQuery}>Submit</MDBBtn>
          ) : null}
        </MDBRow>
        <div className="queryform fixed-bottom " style={{marginLeft:"15%"}}>
        {flagForOneTable ? (
          <QueryForm 
            tableFields={tableFields}
            getTheConditionValue={getTheConditionValue}
            getCondition={getCondition}
            onSubmitOfClause={onSubmitOfClause}
          />
        ) : null}
      </div>
      </div>
    </>
  );
}

export default Schemaboard;
