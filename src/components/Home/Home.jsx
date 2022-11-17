import react,{ useState, useEffect } from 'react'
import './Home.css'
import Widget from '../../components/Widget/Widget'
import BarChart from '../Charts/BarChart'
import { AppData } from '../Charts/Data'
import PieChart from '../Charts/PieChart'
import { auth, db } from '../../Firebase'
import { query, collection, getDocs, doc, where,} from "firebase/firestore";
import { useUserAuth } from "../../context/UserAuthContext";



const Home = () => {
  const { user} = useUserAuth(auth);
  const [userInfo, setUserInfo] = useState([])

  
  const fetchUsers = async() => {
    const userRef = await getDocs(collection(db, "users")).then((querySnapshot)=>{             
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data()}))
                setUserInfo(newData)          
                console.log(newData)
            })
}
useEffect(()=>{
  fetchUsers()
},[])

const labs = userInfo.map((dat)=> dat.location)
let uniqueLabs = [...new Set(labs)];
const dats = userInfo.map((dat) => dat.name)
// AppData.map((dat) => dat.year),
// AppData.map((dat) => dat.userGain),

 const state = {
  labels: uniqueLabs,
  datasets: [
    {
      label: 'Users',
      data: dats,
      backgroundColor: [
        "#ffffff",
        "#000000",
          "#50AF95",
          // "#f3ba2f",
          // "#2a71d0",
      ],
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 1,
    }
  ]
}

  return (
    <div>
      
<Widget/>
<div className='chart-container'>
<div style={{ width:550, marginTop:50, marginLeft:30 }}>
<BarChart chartData={state} />
</div>
{/* <div style={{ width:300, marginTop:50, marginLeft:70 }}>
<PieChart chartData={state} />
</div> */}
    </div>
    {/* <button onClick={fetchUsers}>click</button>
    {userInfo.map((doc) =>{
      return(
        <h1>{doc.email}</h1>
      )
    })} */}
    
    </div>
  )
}

export default Home