import { useState } from 'react'
import './Home.css'
import Widget from '../../components/Widget/Widget'
import BarChart from '../Charts/BarChart'
import { AppData } from '../Charts/Data'
import PieChart from '../Charts/PieChart'

const Home = () => {
  const [appData, setUserData] = useState({
    labels: AppData.map((data) => data.year),
    datasets: [{
      label: "Users Gained",
      data: AppData.map((data) => data.userGain),
      backgroundColor: [
        "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
      ],
      borderColor: 'black',
      borderWidth: 1,
    },
  ],
  });


  return (
    <div>
<Widget/>

<div className='chart-container'>
<div style={{ width:550, marginTop:50, marginLeft:30 }}>
<BarChart chartData={appData} />
</div>
<div style={{ width:300, marginTop:50, marginLeft:70 }}>
<PieChart chartData={appData} />
</div>
    </div>
    </div>
  )
}

export default Home