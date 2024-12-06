import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//import '../css/table.css'
import axios from "axios";

interface SalesForm {
  id: string;
  name: string;
  phone: string;
  city: string;
  model: string;
  company: string;
  status: string;
}

export default function AllSales() {
  const myNav = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:9090/deltax/sales/all").then((res) => {
      console.log(res);
      setEmpData(res.data);
    });
  }, []);
  const [empData, setEmpData] = useState<SalesForm[]>([]);

  return (
    <div>
      <button className="btn btn-primary m-1" onClick={() => myNav("/add")}>
        ADD
      </button>
      <button className="btn btn-primary m-1" onClick={() => myNav("/")}>
        DashBoard
      </button>
      <table className="table p-3 mb-2 bg-danger">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Area/City</th>
            <th>Model</th>
            <th>Company</th>
            <th>Status</th>
            <th>Action</th>
            
          </tr>
        </thead>
        <tbody>
          {empData.map((data) => (
            <tr key={data.name}>
              <td>{data.name}</td>  
              <td>{data.phone}</td>
              <td>{data.city}</td>
              <td>{data.model}</td>
              <td>{data.company}</td>
              <td>{data.status}</td>

              <td>
                <button
                  className="btn btn-primary m-1"
                  onClick={() => myNav("/update/" + data.id)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
