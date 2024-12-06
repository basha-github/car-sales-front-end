//import React from 'react'

import axios from "axios";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/form.css'

export default function AddSales() {
  const myNav = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [model, setModel] = useState("");
  const [company, setCompany] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    console.log("submit clicked....");

    const empjson = {
      name,
      phone,
      city,
      model,
      company,
    };

    axios.post("http://localhost:9090/deltax/sales/add", empjson).then((res) => {
      console.log(res);
      myNav("/all");
    });
  };
  const getName = (e: any) => {
    setName(e.target.value);
    //console.log("hello");
  };

  const getPhone = (e: any) => {
    setPhone(e.target.value);
  };
  const getCity = (e: any) => {
    setCity(e.target.value);
  };
  const getModel = (e: any) => {
    setModel(e.target.value);
  };
  const getCompany = (e: any) => {
    console.log("state got selected---->" + e.target.value);
    setCompany(e.target.value);
  };
  return (
    <div>
     
      <div className="container center_div margin-left=20" >
        <div className="formContent">
        <h4>Add New Sales Enquiry</h4>
        </div>
     
        <form className="formContent">
          <div className="col-6">
            <label className="form-label">Name</label>
            <input
              name="Name"
              type="text"
              onChange={getName}
              className="form-control"
              placeholder="enter customer name"
            />
          </div>
          <div className="col-6">
            <label className="form-label">Phone Number</label>
            <input
              name="code"
              type="text"
              onChange={getPhone}
              className="form-control"
              placeholder="enter Phone Number"
            />
          </div>
          <div className="col-6">
            <label className="form-label">City/Area</label>
            <input
              name="pay"
              type="text"
              onChange={getCity}
              className="form-control"
              placeholder="enter City/Area"
            />
          </div>
          <div className="col-6">
            <label className="form-label">Car Model</label>
            <input
              name="designation"
              type="text"
              onChange={getModel}
              className="form-control"
              placeholder="enter Model"
            />
            
          </div>
          <div className="col-6">
            <label className="form-label">Car Company</label>
            <input
              name="designation"
              type="text"
              onChange={getCompany}
              className="form-control"
              placeholder="enter Comapny"
            />
            
          </div>
          <div><br /> </div>
          <div className="col-auto">
            <button onClick={handleSubmit} className="btn btn-primary mb-3">
              Submitt
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
