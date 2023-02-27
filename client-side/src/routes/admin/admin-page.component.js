import { useState, useEffect, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../contexts/admin.context";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { doc, collection, addDoc, serverTimestamp, deleteDoc} from "firebase/firestore";
import {db, storage} from "../../utils/firebase/firebase.utils"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { WorkshopsContext } from '../../contexts/workshop.context'
import WorkshopTable from '../../components/admin-page-components/workshop-table/workshop-table.component'
import { userInputs } from "../../formSource";
import './admin-page.styles.scss';

const Admin = () => {
  const { user, logout } = UserAuth();
  const [file, setFile] = useState("");
  const [data, setData] = useState({});
  const [per, setPerc] = useState(null);
  const navigate = useNavigate()
  const {workshops} = useContext(WorkshopsContext);

  //Auth function
  const handleLogout = async () => {
    try {
      await logout()
      navigate('/')
      console.log('logged out')
    } catch (e) {
      console.log(e.message)
    }
  }

  //FORM - UPLOAD FUNCTIONS
  // upload image
  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, file.name);

      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPerc(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);
  
  //add workshop
  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setData({ ...data, [id]: value });
  };

  const handleAddWorkshop = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "upcoming-workshops"), {
        ...data,
        timeStamp: serverTimestamp(),
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
    <div className="title-container">
        <h1 className="title">ADMIN PAGE</h1>
        <h1 className="title">Current User: {user && user.email}</h1>
        <button onClick={handleLogout}>Logout</button>
    </div>

    <div className='admin-form-container'>
      <form className='admin-form' onSubmit={handleAddWorkshop}>
        {userInputs.map((input) => (
          <div className="formInput" key={input.id}>
            <label>{input.label}</label>
            <input
              id={input.id}
              type={input.type}
              placeholder={input.placeholder}
              onChange={handleInput}
            />
          </div>
        ))}
        <div className="formInput">
          <label htmlFor="file">
            Image: <DriveFolderUploadOutlinedIcon className="icon" />
          </label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
            style={{ display: "none" }}
          />
        </div>
        <button className="send-button" disabled={per !== null && per < 100} type="submit">Send</button>
      </form>
    </div>
    <div className="all workshops">
    <h2>All Workshops</h2>
      <div className="workshops-container">
        {workshops.map((workshop) => (
          <WorkshopTable key={workshop.id} workshop={workshop} />
        ))}
      </div>
    </div>
    </>
  )
};

export default Admin;
   