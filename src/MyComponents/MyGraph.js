import React from 'react';
import Plot from 'react-plotly.js';


export default function MyGraph() {
  return (
    <>
    <div className='radiobtn'>
        <input type="radio" value="Manufacturer" name="manufacturer" checked='checked' /> Manufacturer
        <input type="radio" value="Fuel" name="fuel" />Fuel
        <input type="radio" value="Currency" name="currency" />Currency
        <input type="radio" value="Country" name="country" />Country
      </div>
    <Plot
        data={[
          {
            values: [50,50],
            labels: ['Toyota Ghoul', 'Tesla Land Cruser',],
            type: 'pie',
          },
          
        ]}
        layout={ {width: 500, height: 500, } }
      />
    </>
  )
}
