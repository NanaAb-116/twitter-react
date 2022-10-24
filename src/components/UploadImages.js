import React, { useEffect } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../firebase/firebaseConfig";

function UploadImages({
  images,
  setImages,
  setImageUrls,
  imageUrls,
  setIsImageLoading,
  setMsg,
}) {
  const handleUpload = (e) => {
    if (
      e.target.files.length > 4 ||
      images.length > 4 ||
      imageUrls.length > 4
    ) {
      setMsg("Please choose up to 4 photos ");
      setTimeout(() => {
        setMsg("");
      }, 3000);
      setImages([]);
      setImageUrls([]);
    } else {
      for (let i = 0; i < e.target.files.length; i++) {
        const newImage = e.target.files[i];
        newImage["id"] = Math.random();
        setImages((prevState) => [...prevState, newImage]);
      }
    }
  };
  const upload = () => {
    setImages([]);
    setIsImageLoading(true);
    images.forEach((image) => {
      const storageRef = ref(
        storage,
        `${image.name}-${new Date().toLocaleDateString}`
      );
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const uploadProgress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(uploadProgress);
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageUrls((prevState) => [...prevState, downloadURL]);
          });
        }
      );
    });
    setIsImageLoading(false);
  };

  useEffect(() => {
    if (images.length > 4 || imageUrls.length > 4) {
      setMsg("Please choose up to 4 photos ");
      setTimeout(() => {
        setMsg("");
      }, 3000);
      setImages([]);
      setImageUrls([]);
    }
    if (images.length > 0) {
      upload();
    }
  });
  return (
    <>
      <label id="upload">
        <span className="material-icons-outlined">perm_media</span>
        <input
          style={{ width: "0", height: "0" }}
          type="file"
          name="images"
          id="images"
          accept="image/*"
          multiple
          onChange={handleUpload}
        />
      </label>
    </>
  );
}

export default UploadImages;
