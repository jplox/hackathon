import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function TabelData() {
    const [rows , setRows] = useState([]);
  
    const fetchData = () => {
      fetch("https://63037d409eb72a839d824580.mockapi.io/Vehicle")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setRows(data)
      });
  };
  
  console.log(rows , 'rows')
  
  
    useEffect(() => {
      fetchData();
    }, []);
    const columns = [
      { field: "name", headerName: "NAME", width: 200 },
      { field: "manufacturer", headerName: "MANUFACTURER", width: 130 },
      { field: "modal", headerName: "MODAL", width: 130 },
      { field: "fuel", headerName: "FUEL", width: 130 },
      { field: "color", headerName: "COLOR", width: 130 },
      { field: "price", headerName: "PRICE", width: 130 },
      { field: "currency", headerName: "CURRENCY", width: 130 },
      { field: "city", headerName: "CITY", width: 130 },
      { field: "country", headerName: "COUNTRY", width: 130 },
    ];
  return (
    <>
    <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </>
  )
}
