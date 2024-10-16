import React, { useState } from "react";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import useImageStore from "./useImageStore";
import { useNavigate } from "react-router-dom";
import { CiImageOn } from "react-icons/ci";

// Register the FilePond plugins (optional)
registerPlugin(FilePondPluginImagePreview);

const CameraAndFilePicker = () => {
  const { imageData, setImageData } = useImageStore(); // ดึง imageData และ setImageData จาก zustand store
  const navigate = useNavigate();

  const handleTakePhoto = (dataUri) => {
    setImageData(dataUri); // อัปเดต imageData ใน zustand store
    
    
    navigate("/blueBin");
  };

  // sendImageData(imageData)

    
    // battery', 'spray']

    // const receivedData = ['battery', 'spray']
    
    // const r['edBin = ['battery', 'spray','light-bulb']
    // const builrfldf
    // const classes = ['battery', 'spray']
    
    // const data = ['red', 'blue' ,'yellow']
    
    // for (i in classes) {
    //   if (redBin.includes(i)) {
    //     // navigate("/BlueBin")
    //   }
    //   else if (redBin.includes(i)) {
    //     // navigate("/BlueBin")
    //   }
    //   else if (redBin.includes(i)) {
    //     // navigate("/BlueBin")
    //   }
    //   else if (redBin.includes(i)) {
    //     // navigate("/BlueBin")
    //     data.push("red")
    //   }
      
      
    // }

  

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUri = e.target.result; // นี่คือ Data URI ของรูปภาพ
        setImageData(imageUri); // บันทึก Data URI ลงใน state
      };
      reader.readAsDataURL(file); // อ่านไฟล์เป็น Data URI
      navigate("/blueBin");
    }
  };
  // const a = (qwe, sdfdsf) => ( 
  //   handleTakePhoto(dataUri)
  //   sdfsdfsdfsddf
  //   sdfsdfsdfsddfsfsd

  // )

  // const a = (dataUri) => handleTakePhoto(dataUri)

  

  // const a = (qwe, sdfdsf) => {
  //   const g = sdfsdrf

  //   return handleTakePhoto(dataUri)
  // }

  // function b (dsfdf) {

  // }

  // const c = a("kuay", "dfer")

  // m("kuay")

  return (
    <div>
      <div>
        <Camera
          onTakePhoto={(dataUri) => handleTakePhoto(dataUri)} // เมื่อถ่ายภาพจะส่ง URI
        />
      </div>
      <p>ถ่ายรูปเพื่อนจำแนกประเภทของขยะ</p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          justifyContent: "center",
        }}
      >
        <label
          htmlFor="file-upload"
          style={{
            width: "fit-content",
          }}
        >
          <CiImageOn 
          style={{fontSize: "64px",}}/>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </label>
      </div>
      <p>หรือเลือกรูปภาพจากคลังรูปภาพ</p>
    </div>
  );
};

export default CameraAndFilePicker;
