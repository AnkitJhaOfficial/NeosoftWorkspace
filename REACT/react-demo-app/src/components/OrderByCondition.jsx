import { MDBBtn } from "mdb-react-ui-kit";
import React from "react";

export const OrderByCondition = ({ id, removeOrderBy, tableFields }) => {


    return (
        <div id="addOrder">
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
                    style={{ paddingLeft: 16, paddingRight: 16 }}
                >
                    select your field:
                    {tableFields.map((columnName) => {
                        return <option value={columnName.column_name} style={{ border: "1px solid #0A001A" }}>
                            <MDBBtn>{columnName.column_name}</MDBBtn>
                        </option>;
                    })}
                </select>
                <select
                    className=" pt-2 pb-2  rounded"
                    id="fields"
                    style={{ paddingLeft: 16, paddingRight: 16 }}
                >
                    <option value="ASC">Ascending</option>
                    <option value="DSC">Descending</option>
                </select>

                <MDBBtn
                    className="bg-transparent shadow-none"
                    onClick={() => {
                        removeOrderBy(id);
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
    )
}