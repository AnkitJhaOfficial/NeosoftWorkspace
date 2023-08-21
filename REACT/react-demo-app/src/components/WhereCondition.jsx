import { MDBBtn } from "mdb-react-ui-kit";
import React from "react";

export default function WhereCondition({ id, removeWhere, tableFields }) {
  return (
    <div>
      <div>
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
            {tableFields.map((columnName) => {
              return <option  value={columnName.column_name} style={{ border: "1px solid #0A001A" }}>
                <MDBBtn>{columnName.column_name}</MDBBtn>
              </option>;
            })}
          </select>
          <label>Choose your Condition:</label>
          <select
            className="p-2 rounded m-1"
            id="fields"
            style={{
              paddingLeft: 16,
              paddingRight: 16,
              border: "1px solid #0A001A",
            }}
          >
            select your field:
            <option className="gradient-custom-2">
              <MDBBtn className="gradient-custom-2 btn btn-primary">
                less than
              </MDBBtn>
            </option>
            <option className="gradient-custom-2">
              <MDBBtn className="gradient-custom-2 btn btn-primary">
                greater than
              </MDBBtn>
            </option>
            <option className="gradient-custom-2">
              <MDBBtn className="gradient-custom-2 btn btn-primary">
                equal to
              </MDBBtn>
            </option>
            <option className="gradient-custom-2">
              <MDBBtn className="gradient-custom-2 btn btn-primary">
                less than equal to
              </MDBBtn>
            </option>
            <option className="gradient-custom-2">
              <MDBBtn className="gradient-custom-2 btn btn-primary">
                greater than equal to
              </MDBBtn>
            </option>
            <option className="gradient-custom-2">
              <MDBBtn className="gradient-custom-2 btn btn-primary">
                contains
              </MDBBtn>
            </option>
          </select>
          <input
            placeholder="Enter the value"
            className="m-1 p-1 rounded"
            style={{ border: "1px solid #0A001A" }}
          ></input>

          <MDBBtn
            className="bg-transparent shadow-none"
            onClick={() => {
              removeWhere(id);
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
