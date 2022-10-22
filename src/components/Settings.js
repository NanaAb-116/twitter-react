import React, { useState, useEffect } from "react";
import { doc, setDoc } from "firebase/firestore";
import { v4 as uuid } from "uuid";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { db, storage } from "../firebase/firebaseConfig";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const SettingsSec = styled.section`
   {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #31404e;
    min-height: 100vh;
    width: 100vw;
    color: white;
  }
  .modal {
    position: relative;
    border-radius: 1rem;
    background-color: #15202b;
    width: 35rem;
    height: 40rem;
  }
  .close-btn {
    background-color: transparent;
    position: absolute;
    cursor: pointer;
    top: 1.5rem;
    left: 0;
    border: 0;
    width: 3rem;
    color: white;
    font-size: 1.5rem;
  }
  form {
  }
  .top {
    display: flex;
    justify-content: space-between;
    margin: 1rem 2rem 0 5rem;
  }
  .upload {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem auto;
    background-repeat: no-repeat;
    background-size: cover;
    height: 10rem;
    width: 10rem;
    border-radius: 50%;
  }
  .upload span {
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: #31404ea1;
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
  }
  .upload span:hover {
    background-color: #31404ec9;
  }
  .submit {
    border-radius: 2rem;
    width: 6rem;
    height: 3rem;
    cursor: pointer;
  }
  .username {
    margin: 4px auto;
    width: 95%;
  }
  #name {
    display: block;
    margin: 1rem 0;
    padding: 8px;
    background-color: transparent;
    border: 1px solid #31404ea1;
    width: 100%;
    height: 3rem;
    outline: 0;
    color: white;
  }

  @media (max-width: 600px) {
    .modal {
      width: 100vw;
      height: 100vh;
    }
  }
`;

function Settings() {
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.user);
  const [name, setName] = useState(user?.userName || user?.displayName);
  const [img, setImg] = useState(user?.photoURL);

  useEffect(() => {
    setName(user?.userName || user?.displayName);
    setImg(user?.photoURL);
  }, [user]);

  const uploadImage = (e) => {
    const image = e.target.files[0];
    const storageRef = ref(storage, `Photos/${uuid()}-${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploadProgress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImg(downloadURL);
        });
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await setDoc(
        doc(db, "Users", user?.email),
        {
          userName: name,
          photoURL: img,
        },
        {
          merge: true,
        }
      );
    } catch (error) {
      console.log(error);
    }

    sessionStorage.setItem(
      "user",
      JSON.stringify({ ...user, userName: name, photoURL: img })
    );

    navigate("/");
  };

  return (
    <SettingsSec>
      <div className="modal">
        <button className="close-btn" onClick={() => {}}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <form onSubmit={handleSubmit}>
          <div className="top">
            <h1>Edit Profile</h1>
            <button type="submit" className="submit">
              Save
            </button>
          </div>
          <div className="upload" style={{ backgroundImage: ` url(${img})` }}>
            <span>
              <i className="fa-solid fa-camera"></i>
            </span>
          </div>
          <div className="username">
            <label htmlFor="name">User Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input type="file" name="" id="" onChange={uploadImage} />
          </div>
        </form>
      </div>
    </SettingsSec>
  );
}

export default Settings;
