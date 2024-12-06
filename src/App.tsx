//import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DashBoard from './components/DashBoard'
import AddSales from './components/AddSales'
import EditSales from './components/EditSales'
import AllSales from './components/AllSales'
import AllNew from './components/AllNew'
import AllInterested from './components/AllInterested'
import AllNotInterested from './components/AllNotInterested'
import AllEnquiries from './components/AllEnquiries'

export default function App() {
  return (
    <div>

<BrowserRouter>
<Routes>

  <Route path="/" element={<DashBoard />} /> 
  <Route path="/add" element={<AddSales />} />
  <Route path="/update/:idV" element={<EditSales />} />
  <Route path="/all" element={<AllSales />} />
  <Route path="/allNew" element={<AllNew />} />
  <Route path="/allInterested" element={<AllInterested />} />
  <Route path="/allNot" element={<AllNotInterested />} />
  <Route path="/showAll" element={<AllEnquiries />} />
  
   
</Routes>
</BrowserRouter>


    </div>
  )
}
