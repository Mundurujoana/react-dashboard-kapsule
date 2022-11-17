import react,{ useState, useEffect } from 'react'
import {Bar} from 'react-chartjs-2';
import { auth, db } from '../../Firebase'
import { query, collection, getDocs, doc, where,} from "firebase/firestore";
import { useUserAuth } from "../../context/UserAuthContext";
import { Line } from "react-chartjs-2";




const Bar = () => {
    const [dailyData, setDailyData] = useState([]);

    const fetchUsers = async() => {
        const userRef = await getDocs(collection(db, "users")).then((querySnapshot)=>{              
                   
            const newData = querySnapshot.docs
                        .map((doc) => ({...doc.data()}))
                    setDailyData(newData)      
                    labels.push(doc.labels);
                   data.push(doc.data);     
                    console.log(newData)
                })
     
    }
    
    useEffect(() => {
        fetchUsers();
      }, []);
     

//     const state = {
//         labels: ['January', 'February', 'March',
//                  'April', 'May'],
//         datasets: [
//           {
//             label: 'Rainfall',
//             backgroundColor: 'rgba(75,192,192,1)',
//             borderColor: 'rgba(0,0,0,1)',
//             borderWidth: 2,
//             data: [65, 59, 80, 81, 56]
//           }
//         ]
//       }

//     return (
//       <div>
//         <Bar
//           data={state}
//           options={{
//             title:{
//               display:true,
//               text:'Average Rainfall per month',
//               fontSize:20
//             },
//             legend:{
//               display:true,
//               position:'right'
//             }
//           }}
//         />
//       </div>
//     );
//   }

// export default Bar
const BarChart = dailyData[0] ? (
    <Bar
      data={{
        labels: dailyData.map((dat) => dat.location),
        datasets: [
                      {
                        label: 'Rainfall',
                        backgroundColor: 'rgba(75,192,192,1)',
                        borderColor: 'rgba(0,0,0,1)',
                        borderWidth: 2,
                        data: dailyData.map((data) => data.name)
                      }
                    ]
      }}
    />
  ) : null;

  return (
    <>
      <div>{BarChart}</div>
    </>
  );
};

export default Bar