import React from 'react'
import { Doughnut } from 'react-chartjs-2';


const data =  { 
    label: ['red','green','blue','yellow',' blue'],
    dataset : [{
        data : [12,3,5,6,7],
  
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
    }]
 } 

export const PieChart = () => {
  return (
    <div>
        PieChart
        <div style={{width:"100%", margin:"0 auto"}}>
        <Doughnut data={data}/>
        </div>
    </div>
  )
}

export default PieChart
