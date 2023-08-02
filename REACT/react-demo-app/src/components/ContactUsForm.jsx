import React, { useState } from "react";
import "../styles/ContactUsForm.css";

export default function ContactUsForm() {
    const data = {
        name:{
          firstname:"",
          lastname:""
        },
        email:"",
        phone:""
    }

    const [formData, setFormData] = useState(data);
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      console.log(event.target.value);
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(formData);
      alert(`Name: ${formData.firstname}, Email: ${formData.email}`
      );
  };
  

  return (
    <div>
      <div className="container leftAlign">
        <div className="row mt-4">
          <div className="dravid col-md-6">
            <div> First Name </div>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="First Name"
                aria-label="First Name"
                aria-describedby="basic-addon1"
                name="firstname"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="dravid col-md-6">
            <div> Last Name </div>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Last Name"
                aria-label="Last Name"
                aria-describedby="basic-addon1"
                name="lastname"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="dravid col-md-6">
            <div> Email </div>
            <div class="input-group mb-3">
              <input
                type="email"
                class="form-control"
                placeholder="you@domain.com"
                aria-label="you@domain.com"
                aria-describedby="basic-addon1"
                name="email"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="dravid col-md-6">
            <div> Phone </div>
            <div class="input-group mb-3">
              <input
                type="number"
                class="form-control"
                placeholder="Phone"
                aria-label="Phone"
                aria-describedby="basic-addon1"
                onChange={handleChange}
                name="phone"
              />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <input type="checkbox" name="NewsDetails" /> Do you like to received
          news about out product via e-mail?
        </div>
        <div>
        <input class="btn btn-primary me-2 mt-4" type="submit" value="Submit" onClick={handleSubmit}/>
        <input class="btn btn-primary mt-4" type="reset" value="Reset" />
      </div>
      </div>
    </div>
  );
}
