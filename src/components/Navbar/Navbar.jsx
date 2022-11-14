import React, { useEffect, useState } from "react";
import './Navbar.css'
import logo from "./kapsule-logo-bg.png";
// import pic from "./pic.png"
import { FaRegBell, FaCog, FaRegTimesCircle} from "react-icons/fa";
import SearchBar from "../../components/Navbar/SearchBar";
import { useUserAuth } from "../../context/UserAuthContext";
import { useNavigate } from "react-router-dom";
import { auth, db } from '../../Firebase'
import { query, collection, getDocs, doc, where, updateDoc } from "firebase/firestore";



const Navbar = () => {
  const { user} = useUserAuth(auth);
  const[error, setError] = useState("")
  const [name, setName] = useState("");
  const[email, setEmail] = useState("")
  const[location, setLocation] = useState("")
  const [photo, setPhoto] = useState("");
  const [popup,setPop]=useState(false)
  const[image, setImage] = useState("")
  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const docSnap = await getDocs(q);
      const userData = docSnap.docs[0].data() // call the data method from the doc document
      setName(userData.name)
      setPhoto(userData.profilePic)
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    if (!user) return navigate("/")
    fetchUserName();
  }, [user])


  const handleClickOpen=()=>{
      setPop(!popup)
  }
  const closePopup=()=>{
      setPop(false)
  }
const UpdateUserData = async() =>{
  try {
    const userRef = query(collection(db, "users"), where("uid", "==", user.uid));
    const findUsers = await getDocs(userRef);
    findUsers.forEach( async (user) => {
      const getUser = doc(db, 'users', user.id);
      await updateDoc(getUser, {
       name: name,
       email: email,
       location: location,
       profilePic:  image
      })
    })
    alert("updated sucessfully")
  } catch (err) {
   alert(`${err.message} try again`)
  }

}

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    UpdateUserData()
   
  }

 
  return (
    <div className='navbar'>
     <div className="navbarMain">
      <div className="left">
    <img src={logo} alt='logo'className='logo' />
    </div>
    {/* <div className="search-center">
      <SearchBar/>
    </div> */}
      <div className="right">
        <div className="bellIconContainer">
   <FaRegBell />
        </div>
        
        <img src={photo} alt="" className="pic"  onClick={handleClickOpen} />
        <span className='name'>{name}</span>
      </div>
     </div>
     {/* editprofile---section */}
     <div>{
                    popup?
                    <div className='editProfile'>
                        <div className="popup">
                            <div className="popup-header">
                                <h1>Edit Profile</h1>
                                <h1  className="close" onClick={closePopup} ><FaRegTimesCircle/></h1>
                            </div>
                            <div className="main">
                            <div className="content__inputs">
    <form className="content__input--form"  >
    {error && <p className='errors'>{error}</p>}
    <label Htmlfor="name">
        <input type="name" placeholder="Name" value={name}  onChange={(e) => setName(e.target.value)} />
      </label>
      <label Htmlfor="email">
        <input type="email" placeholder="Email" value={email}  onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label Htmlfor="location">
        <input type="location" placeholder="Location" value={location}  onChange={(e) => setLocation(e.target.value)} />
      </label>
      <input type="file" accept="image/*"  onChange={(e)=>{setImage(e.target.files[0])}} />
      <button type="button"  className="update_btn"onClick={handleSubmit}>Update</button>
    </form>
  </div>
                            </div>
                        </div>
                    </div>:""
                }
            </div>
      </div>
  )
}

export default Navbar