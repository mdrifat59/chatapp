import React, { useRef, useState } from 'react'
import { CrossIcon } from '../../svg/Cross'
import { UploadImageIcon } from '../../svg/Upload'
import ImageCropper from '../ImageCropper'

const Modals = ({ setShow }) => {
  let fileref = useRef(null)
  const [image, setImage] = useState();
  const [cropData, setCropData] = useState();
  const cropperRef = useRef();

  let handleChange= (e)=>{
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result); 
      
    };
    reader.readAsDataURL(files[0]);  
  }

  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== "undefined") {
      setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
    }
  };
  return (
    <>
      <div className='fixed top-0 left-0 w-full h-screen bg-[#343636ed] flex justify-center items-center'>
        <div className='w-[30%] bg-white rounded-md py-5 px-2 mx-auto relative'>
          <div>
            <h3 className='font-robotoRegular text-center'>Upload Image</h3>
            <div className='absolute top-2 right-2 text-red-500 cursor-pointer' onClick={() => setShow(false)}>
              <CrossIcon />
            </div>
          </div>
          <div className='w-full h-[200px] bg-slate-400 rounded-md border box-border mt-5 p-2'>
            <div className='w-full h-full bg-slate-200 flex justify-center items-center rounded-md cursor-pointer' onClick={()=>fileref.current.click()}>
              <div>
                <div className='flex justify-center'>
                  <UploadImageIcon />
                </div>
                <h4>Upload your profile photos</h4>
                <input type="file" ref={fileref} hidden onChange={handleChange} />
              </div>
            </div>
          </div>
        </div>
            { image && <ImageCropper setImage={setImage} image={image} cropperRef={cropperRef} getCropData={getCropData} />
            
            }
      </div>
    </>
  )
}

export default Modals