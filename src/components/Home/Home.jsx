import react, { useState, useEffect } from 'react'
import './Home.css'
import Widget from '../../components/Widget/Widget'
import BarChart from '../Charts/BarChart'
import { AppData } from '../Charts/Data'
import PieChart from '../Charts/PieChart'
import { auth, db } from '../../Firebase'
import { query, collection, getDocs, doc, where, } from "firebase/firestore";
import { useUserAuth } from "../../context/UserAuthContext";



const Home = () => {
  const { user } = useUserAuth();
  const [userInfo, setUserInfo] = useState([])
  const [graphs, setGraphs] = useState([])
  const [all, setAll] = useState();
  const [currentUserLocation, setCurrentUserLocation] = useState('');
  
  
  //get the specific loggedIn user id and the location
  const loggedInUser = userInfo?.find(info => info.uid === user?.uid)
  // console.log(loggedInUser?.uid)
  //get the the location of a specific loggedIn user
  const graphData = graphs?.find(graph => graph.id === loggedInUser?.location)
  // console.log(graphData)


  // const fetchUsers = async() => {
    // const userRef = await getDocs(collection(db, "users")).then((querySnapshot)=>{             
    //             const newData = querySnapshot.docs
    //                 .map((doc) => ({...doc.data()}))
    //             setUserInfo(newData)          
    //         })
    // const q = query(collection(db, "users"), where("uid", "==", user?.uid));
    //   const docSnap = await getDocs(q);
    //   const userData = docSnap.docs[0].data() //
    //   console.log(userDat)
  // }

  
  //fetch data from user
  const fetchUsers = async () => {
    const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const docSnap = await getDocs(q);
      const userData = docSnap.docs[0].data()
      setCurrentUserLocation(userData.location);
  }





  //fetch data from graph
  const fetchGraphs = async () => {
  const [currentUserLocation, setCurrentUserLocation] = useState('');
    const graphRef = await getDocs(collection(db, "graphs/"+currentUserLocation)).then((querySnapshot) => {
      const newGraphData = querySnapshot.docs
        .map((doc) => {
          if(doc.data().location === currentUserLocation){
           return { ...doc.data(), location: doc.id, status: "ok" }
          }
        })
      setGraphs(newGraphData)
      // newGraphData.map((item) => {
      //   console.log(item.location)
      //   console.log(user.location, 'current user')
      // })
      // console.log(newGraphData)
    })
  }


  //rendering data from firestore
  useEffect(() => {
    fetchUsers()
    fetchGraphs()
    // getAll()
  }, [])

  //mapping through the userInfo to obtain location and eliminate duplication
  const labs = userInfo.map((dat) => dat.location)
  let uniqueLabs = [...new Set(labs)];




  //mapping through the userInfo to obtain location and eliminate duplicatiob
  const ulabs = graphs.map((dat) => dat.id)
  console.log(ulabs)

  const dlabs = graphs.map((dat) => dat.graph1.userGain)
  console.log(dlabs)

  const slabs = graphs.map((dat) => dat.graph1.userLost)
  console.log(slabs)

  //Data for barGraphs
  const barState = {
    labels: ulabs,
    datasets: [
      {
        label: 'Users Gained',
        data: dlabs,
        backgroundColor: [
          "#ffffff",
          "#000000",
          "#50AF95",
          "#c5ab3a",

        ],
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 1,
      }
    ]
  }

  //Data for pieChart
  const pieState = {
    labels: ulabs,
    datasets: [
      {
        label: 'Users Lost',
        data: slabs,
        backgroundColor: [
          "#ffffff",
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
        {graphData ? (
          <div style={{ width: 550, marginTop: 50, marginLeft: 200 }}>
            <BarChart chartData={barState} />
          </div>
        ) : (
          <div style={{ width: 550, marginTop: 50, marginLeft: 200 }}>
            <BarChart chartData={pieState} />
          </div>
        )}
      </div>
    </div>
  )
}

export default Home