import axios from "axios";
import { useEffect, useState } from "react";

//import React from 'react'
interface DashBoarResults {
  totalSales: string;
  newSales: string;
  interestedSales: string;
  notSales: string;
 }

export default function DashBoard() {

  useEffect(() => {
    axios.get("http://localhost:9090/deltax/sales/getDashBoard").then((res) => {
      console.log(res);
      setDashData(res.data);
    });
  }, []);
  const [dashData, setDashData] = useState<DashBoarResults>();
  return (
    <div>
<div className="text-center mt-5">
  <h1> Varun Motors Sales Index</h1>
</div>
<div className="row row-cols-1 row-cols-md-3 g-4 mt-5 ms-5 me-5 "  >
    
  <div className="col">
    <div className="card bg-info">
    <div className="card-header bg-transparent border-success">AllEnquiries</div>
      <div className="card-body">
        <h5 className="card-title">Total {dashData?.totalSales}</h5>
        <p className="card-text"> Total Number of all Enquiries 2000</p>
        <a href="/showAll" className="btn btn-primary">Details</a>
      </div>
    </div>
  </div>


  <div className="col">
    <div className="card bg-warning">
    <div className="card-header bg-transparent border-success">New Enquiries</div>
      <div className="card-body">
        <h5 className="card-title">Total {dashData?.newSales}</h5>
        <p className="card-text"> Total Number of New Enquiries 2000</p>
        <a href="/allNew" className="btn btn-primary">Details</a>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card bg-primary">
    <div className="card-header bg-transparent border-success">Interested Enquiries</div>
      <div className="card-body">
        <h5 className="card-title">Total {dashData?.interestedSales}</h5>
        <p className="card-text"> Total Number of interested Enquiries 300</p>
        <a href="/allInterested" className="btn btn-primary">Details</a>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card bg-success">
    <div className="card-header bg-transparent border-success">Not Interested Enquiries</div>
      <div className="card-body">
        <h5 className="card-title">Total {dashData?.notSales}</h5>
        <p className="card-text"> Total Number of not interested  Enquiries 100</p>
        <a href="/allNot" className="btn btn-primary">Details</a>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card bg-danger">
    <div className="card-header bg-transparent border-success"> Update Enquiries</div>
      <div className="card-body">
        <h5 className="card-title">Add/Update/Delete</h5>
        <p className="card-text">Update (Add/Update/Delete) Sales enquiries </p>
        <a href="/all" className="btn btn-primary">Details</a>
      </div>
    </div>
  </div>
  
</div>

    </div>
  )
}
