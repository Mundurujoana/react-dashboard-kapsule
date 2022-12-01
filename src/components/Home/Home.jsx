import react, { useState, useEffect } from 'react'
import './Home.css'
import Widget from '../../components/Widget/Widget'
import BarChart from '../Charts/BarChart'
import PieChart from '../Charts/PieChart'
// import { AppData } from '../Charts/Data'
import { db } from '../../Firebase'
import { query, collection, getDocs, doc, where, getDoc, } from "firebase/firestore";
import { useUserAuth } from "../../context/UserAuthContext";



const Home = () => {
  const { user } = useUserAuth();
  const [userInfo, setUserInfo] = useState([])
  const [graphs, setGraphs] = useState([])
  const [currentUserLocation, setCurrentUserLocation] = useState('');
  const [AppData,setAppData] =useState([]);
  const [name,setName] =useState("");
  
  
  const graphStyle = {
    textAlign : "center",
    fontWeight: 600
  };

  //get the specific loggedIn user id and the location
  const loggedInUser = userInfo?.find(info => info.uid === user?.uid)
  console.log(loggedInUser)
  //get the the location of a specific loggedIn user
  // const graphData = graphs?.find(graph => graph.id === loggedInUser?.location)
  // console.log(graphData)


  
  //fetch data from user
  const fetchUsers = async () => {
    const q = query(collection(db, "users"), where("uid", "==", user?.uid));
    
      const docSnap = await getDocs(q);
      const userData = docSnap.docs[0].data()
      console.log(userData.location,"From fetch user")
      setCurrentUserLocation(userData.location);
      setName(userData.location)
  }
  console.log(name, 'name of the loggedin user location')


  const handleSyncData = async () => {
    if(currentUserLocation !== ''){
      const dataRef = await doc(db, `graphs/${currentUserLocation}`); 
      const docSnap = await getDoc(dataRef);
      if (docSnap.exists()) {
        const result = docSnap.data();
        console.log(result)
        setAppData(result.data)
      }
    }
  }
    console.log(currentUserLocation,"is the current user location")


  fetchUsers();
  //rendering data from firestore
  useEffect(() => {
    handleSyncData();
  }, [currentUserLocation])



  //mapping through the userInfo to obtain location and eliminate duplicatiob
  const userYears = AppData.map((dat) => dat.year)
  console.log(userYears)

  const userGain = AppData.map((dat) => dat.userGain)
  console.log(userGain)

  const userLost = AppData.map((dat) => dat.userLost)
  console.log(userLost)

  //Data for barGraphs
  const barState = {
    labels: userYears,
    datasets: [
      {
        label: `Users Gained in ${name}`,
        data: userGain,
        backgroundColor: [
          "#ffffff",
          "#6a2c2c",
          "#2c3230",
          "#5a5127",

        ],
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 1,
      }
    ]
  }

  //Data for pieChart
  const pieState = {
    labels: userYears,
    datasets: [
      {
        label: `Users Lost in ${name}`,
        data: userLost,
        backgroundColor: [
          "#485c71",
          "#000000",
          "#50AF95",
          "#c5ab3a",

        ],
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 1,
      }
    ]
  }
  return (
    <div>

      <Widget />

      <div className='chart-container'>
          <div style={{ width: 500, marginTop: 90, marginLeft: 70 }}>
            <BarChart chartData={barState} />
            <p  style={graphStyle} > Users Gained in {name} </p>
          </div>
          <div style={{ width: 300, marginTop: 50, marginLeft: 100 }}>
            <PieChart chartData={pieState} />
          <p style={graphStyle}> Users Lost in {name} </p>
          </div>
      </div>
    </div>
  )
}

export default Home