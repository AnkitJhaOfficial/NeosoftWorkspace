import { MDBBtn } from "mdb-react-ui-kit";
import React from "react";

export default function GroupByCondition({ id, tableFields, removeGroupBy }) {
  return (
    <div>
      <div>
        <div
          className="container-fluid  mb-4"
          style={{
            height: "auto",
            zIndex: 10,
            display: "flex",
            justifyContent: "space-around",
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
            <option value="null">select your field:</option>
            {tableFields.map((columnName) => {
              return (
                <option
                  value={columnName.column_name}
                  style={{ border: "1px solid #0A001A" }}
                >
                  <MDBBtn>{columnName.column_name}</MDBBtn>
                </option>
              );
            })}
          </select>
          <MDBBtn
            className="bg-transparent shadow-none"
            onClick={() => {
              removeGroupBy(id);
            }}
            style={{ margin: "1%", padding: "0%" }}
          >
            <i
              className="bi bi-x bhagwaGradient rounded-circle"
              style={{ fontSize: "200%" }}
            ></i>
          </MDBBtn>
        </div>
      </div>
    </div>
  );
}
