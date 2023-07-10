import { useState, useEffect } from 'react'
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import {db, storage} from "../../../utils/firebase/firebase.utils"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import PreviewCard from './preview.component'

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { alpha, styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import Button from '@mui/material/Button';

import { userInputs } from "../../../formSource";
import '../add-workshops/add-workshop.styles.scss';

const AddWorkshop = () => {
    const [file, setFile] = useState("");
    const [data, setData] = useState({});
    const [per, setPerc] = useState(null);
    // const { country, price, location, practice, sessions, img } = workshop;


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
      <div className='form-main'>
        <form className='admin-form' onSubmit={handleAddWorkshop}>
          {userInputs.map((input) => (
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                marginTop: 0,
                paddingTop: 0.5,
                paddingBottom: 0.5
              }}
              >
              <h4>{input.label}</h4>
              <TextField fullWidth
              inputProps={{
                style: {
                  padding: 10,
                  paddingLeft:1,
                  }
                }}
                id={input.id}
                type={input.type}
                margin="none"
                required
                placeholder={input.placeholder}
                onBlur={handleInput}
              />
            </Box>
          ))}

          <div className="formInput">
            <DriveFolderUploadOutlinedIcon sx={{ fontSize: '60px'}}/>
            <label htmlFor="file">
              Upload an Image
            </label>
            <input
              type="file"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
          </div>

          <Button
              type="submit"
              variant="contained"
              size="small"
              sx={{ 
                width: '50%',
                margin: 'auto',
                marginTop: 2
               }}
              disabled={per !== null && per < 100}
              >
              Create
          </Button>
        </form>
      </div>
      {/* <div className='preview'> */}
        <PreviewCard data={data} />
      {/* </div> */}
    </div>
  )
}

export default AddWorkshop