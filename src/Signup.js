import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './signup.css';
import { useUserAuth } from "./context/UserAuthContext";
import { setDoc, doc, query, collection, getDocs, where,} from "firebase/firestore";
import { auth, db, storage } from './Firebase'
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateProfile } from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";




const Signup = () => {
  const [name, setName] = useState("")
  const [location, setLocation ] = useState("")
  const [error, setError] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [image, setImage] = useState(null)//We need to store the selected file somewhere
  // so that we can send that file to firebase
  let navigate = useNavigate()
 
  const imageRef = ref(storage, image?.name)
  const getImageDownloadURL = (user) =>{
    getDownloadURL(imageRef).then((url) =>{
      const docRef = doc(db, 'users',user.uid);
      setDoc(docRef, {
        uid: user.uid,
        name,
        email,
        location,
        profilePic:url
      })
     alert("registered successfully")
      navigate("/");
    })
  }
  
  const  uploadImage = (user) =>{
    if (image == null) {
      alert("Please upload an image first!");
    }
    uploadBytes(imageRef, image).then(() => {
      alert('success image')
      getImageDownloadURL(user)
    })
    .catch((error) => {
    alert(`${error.message},error getting the images`)
    })
  }

const createUser = async() => {
  try {
    const userCredential =  await createUserWithEmailAndPassword(auth, email, password);
   const user = userCredential.user
   uploadImage(user)
     }
     catch (err) {
       console.log(err.message)
         setError(err.message);
       }
}

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
   createUser()
  }

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
    const res=  await signInWithPopup(auth, provider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.empty) {
    const docRef = doc(db, 'users',user.uid);
    await setDoc(docRef, {
      uid: user.uid,
      name: user.name,
      email: user.email,
    })
  }
    navigate("/dashboard");
  } catch (error) {
    console.log(error.message);
    alert("unsuccessful")
  }
}

  return (
    <div className="body">
    <div className='main-container'>
    {/* <img src={logo} className="logo" alt="Business view - Reports" /> */}
    <h1 className="sign-title">Sign up </h1>
    {error && <p className='errors'>{error}</p>}
<div className="main-container__">
  <div className="content__inputs">
    <form className="content__input--form" >
    <label Htmlfor="name">
        <input type="name" placeholder="Name"  value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label Htmlfor="email">
        <input type="email" placeholder="Email"  value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label Htmlfor="password">
        <input type="password" placeholder="Password"  value={password}  onChange={(e) => setPassword(e.target.value)}/>
      </label>
      <label Htmlfor="location">
        <input type="location" placeholder="Location"  value={location}  onChange={(e) => setLocation(e.target.value)}/>
      </label>
      <input type="file" accept="image/*" onChange={(e)=>{setImage(e.target.files[0])}} />
    </form>
  </div>

  <div className="content__submit">
    <button type="button" onClick={ handleSubmit }  className="btn-sign">Sign up</button>
    <p>OR</p>
    <div className="button google-button">
      <div className="google-btn__google-icon"></div>
      <p className="no-select" onClick={ handleGoogleSignIn }>Sign in with Google </p>
    </div>
    <div className="content__submit--line"></div> 
    <p>
      Already have an account? 
      <Link  className="link" to="/">Log In</Link>
    </p>
    <div className="cont__footer">
      <p>
        By clicking "Sign up" button above you agree to our
        <a href="/">
          <strong>terms of use</strong>
        </a>
        </p>
    </div>
  </div>
</div>
</div>
</div>
  )
}

export default Signup