import { MDBCol } from "mdb-react-ui-kit";
import React from "react";

export default function ColumnNames( {tbName,tbFields, sendDataToParent,getColumnValues}) {

    // console.log(tbFields);
  return (
        <MDBCol className="card " style={{width: "18rem"}} id={tbName}>
			<div className="card-header d-flex justify-content-between gradient-custom-2 font-weight-bold" >
            <b>{tbName}</b>
            <i className="fa fa-times cross-icon p-2 rounded" aria-hidden="true"  onClick={()=>sendDataToParent({tbName})} ></i>
		    </div>
			<ul className="list-group list-group-flush">
            {tbFields.map(
			    (obj) =><div className='d-flex justify-content-lg-start'> 
                        <input type="checkbox" id={obj.column_name} 
                        onClick={()=>getColumnValues(obj.column_name)} value={obj.column_name}/>
                        <label className="list-group-item border-0"  for={obj.column_name}>{obj.column_name}</label>
                        </div>)}			
			</ul>
		</MDBCol>
	);
}
