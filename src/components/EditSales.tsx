//import React from 'react'

import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
//import NavBar from "./navbar";
import { useNavigate, useParams } from "react-router-dom";
import '../css/form.css'

interface SalesForm {
    id: string;
    name: string;
    phone: string;
    city: string;
    model: string;
    company: string;
    status: string;
  }


export default function EditSales() {
  const myNav = useNavigate();
  const idV = useParams();
 
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [model, setModel] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const jObj = JSON.stringify(idV);
    const jValue = JSON.parse(jObj).idV;
    axios
      .get<SalesForm>("http://localhost:9090/deltax/sales/get?id=" + jValue)
      .then((res) => {
        console.log("res--->" + res.data);
        setName(res.data.name);
        setId(res.data.id);
        setPhone(res.data.phone);
        setCity(res.data.city);
        setModel(res.data.model);
        setCompany(res.data.company);
        setStatus(res.data.status);
        
      });
  }, []);

  
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    console.log("submit clicked....");

    //var id = Number(idV);
    
    const empjson = { id,name, phone,city,model,company,status };

    axios.put("http://localhost:9090/deltax/sales/update", empjson).then((res) => {
      console.log(res);
      myNav("/all");
    });
  };

  const handleDelete = (event: FormEvent) => {
    event.preventDefault();

    console.log("delete clicked....");

    axios
      .delete("http://localhost:9090/deltax/sales/delete?id=" + id)
      .then((res) => {
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
    setCompany(e.target.value);
  };
  const getStatus = (e: any) => {
    setStatus(e.target.value);
  };
 
  
  return (
    <div>
      
      <div className="container center_div margin-left=20" >
        <div className="formContent">
        <h4>Update Sales Enquiry Form</h4>
        </div>
     
        <form className="formContent">
          <div className="col-6">
            <label className="form-label">Name</label>
            <input
              name="Name"
              type="text"
              value={name}
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
              value={phone}
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
              value={city}
              className="form-control"
              placeholder="enter City/Area"
            />
          </div>
          <div className="col-6">
            <label className="form-label">Car Model</label>
            <input
              name="designation"
              type="text"
              value={model}
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
              value={company}
              onChange={getCompany}
              className="form-control"
              placeholder="enter Comapny"
            />
            
          </div>
          <div className="col-6">
            <label className="form-label">Status</label>
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={getStatus}
            >
                <option value={status} selected>{status}</option>
              <option value="interested">Interested</option>
              <option value="not">Not Interested</option>
              <option value="new">New</option>
              </select>
          </div>
          <div><br /> </div>
          <div className="col-auto">
            <button onClick={handleSubmit} className="btn btn-primary mb-3 btn-space ms-5">
              Save
            </button>
            <button onClick={handleDelete} className="btn btn-primary mb-3 ms-5">
            Delete
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}
