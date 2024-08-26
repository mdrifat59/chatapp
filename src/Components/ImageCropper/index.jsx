import React from 'react'
import { CrossIcon } from '../../svg/Cross'
import { Cropper } from 'react-cropper'

const ImageCropper = ({ setImage, image, cropperRef, getCropData }) => {
  return (
    <>
      <div className='fixed top-0 left-0 w-full h-screen   flex justify-center items-center'>
        <div className='w-[30%] bg-white rounded-md py-5 px-2 mx-auto relative'>
          <div>
            <h3 className='font-robotoRegular text-center'>Upload Image</h3>
            <div className='absolute top-2 right-2 text-red-500 cursor-pointer' onClick={() => setImage()} >
              <CrossIcon />
            </div>
          </div>      

          <div className='w-20 h-20 overflow-hidden mx-auto rounded-full'>          
          <div
            className="img-preview"
            style={{ width: "100%", float: "left", height: "300px" }}
          /> 
          </div>

          <div className='w-30 h-30 overflow-hidden my-5'>
            <Cropper
              ref={cropperRef}
              style={{ height: 300, width: "100%" }}
              zoomTo={0.1}
              initialAspectRatio={1}
              preview=".img-preview"
              src={image}
              viewMode={1}
              minCropBoxHeight={10}
              minCropBoxWidth={10}
              background={false}
              responsive={true}
              autoCropArea={1}
              checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
              guides={true}
            />
          </div>
            <button className='bg-[#6CD0FB] w-full p-2 rounded-md font-robotoBold' onClick={getCropData}>Upload</button>         

        </div>
      </div>
    </>
  )
}

export default ImageCropper