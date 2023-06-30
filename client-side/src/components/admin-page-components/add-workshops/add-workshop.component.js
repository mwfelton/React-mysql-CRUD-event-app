import React from 'react'
import { useState, useEffect } from 'react'
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import {db, storage} from "../../../utils/firebase/firebase.utils"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { userInputs } from "../../../formSource";
import '../add-workshops/add-workshop.styles.scss';

const AddWorkshop = () => {
    const [file, setFile] = useState("");
    const [data, setData] = useState({});
    const [per, setPerc] = useState(null);

      //FORM - UPLOAD FUNCTIONS
  // upload image
  useEffect(() => {
    const uploadFile = () => {
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
  )
}

export default AddWorkshop