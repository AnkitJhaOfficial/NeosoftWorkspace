import React, { useEffect, useState, useRef } from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import {API_BASE_URI} from "../constants/ApiConstants";
import axios from "axios";
import "../styles/Connection.css";
import { useNavigate } from "react-router-dom";
import LoaderComponent from './LoaderComponent';

export default function TableData(props) {
  const navigate = useNavigate();
  var [connectionDetails, setConnectionDetails] = useState();
  // const [isLoading,setIsLoading]=useState(false);
  const dataFetch = useRef(false)

  useEffect(() => {
    if (dataFetch.current)	
            return
        dataFetch.current = true
		const fetchData = async () => {
      // setIsLoading(true);

				 axios.get(
					`${API_BASE_URI}/connect/get-all-connection?userId=` +
						sessionStorage.getItem("userId")
				).then((response) => {
          console.log(response);
          // setIsLoading(false);
          setConnectionDetails(response);
        }
          
        ).catch((error) =>{
          // setIsLoading(false);
          console.log(error);
        })
		};
		fetchData();
	}, []);

  const NavigateSchemaBoard = (e) => {
		e.preventDefault();
		let conn = e.target.id;
		sessionStorage.setItem("connectionName",conn)
		console.log("connect name ",conn);
		navigate("/schemaboard");
	};

  const handleClose = (e) => {
		console.log("HC");
    props.m1(false);
	}
  return (
    <div className="container ConnectionTable shadow overflow-auto p-3 mt-5 mb-5 bg-white rounded" style={{height:"50vh",
		 width:"50vw"}}>
			
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Your Connections</th>
          <th scope='col'>DataBase Name</th>
          <th scope='col'>Status</th>
          <th scope='col'>Connect</th>
       
        </tr>
      </MDBTableHead>
      <MDBTableBody>

          { connectionDetails !== undefined	? connectionDetails.data.data.map((obj) => (
							<tr key={obj.connectionName}>
              <td>                    
                    {obj.connectionName}                                       
              </td>
              <td >
                    {obj.databaseName}
              </td>
              <td>
              <MDBBadge color= {obj.status==='INACTIVE'? "danger":"success"} pill>
                {obj.status==='INACTIVE'? "INACTIVE":"ACTIVE"}
              </MDBBadge>
              </td>
              <td>
                <MDBBtn
                style={{backgroundColor:"#0E2954"}}
                  id={obj.connectionName}
                  disabled={obj.status==='INACTIVE'}
                  onClick={NavigateSchemaBoard}
                >
                  Connect
                </MDBBtn>
              </td>
            </tr>
          ))
        :<div style={{marginLeft:"80%",marginTop:"25%"}}><LoaderComponent/></div> }			
      </MDBTableBody>
    </MDBTable>
    <div >
					<i className="fa fa-times cross-icon p-2 m-4 rounded" aria-hidden="true"  onClick={handleClose} ></i>
		</div>
    </div>
  );
}