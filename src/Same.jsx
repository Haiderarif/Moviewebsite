import React, { useRef, useState } from 'react'
import Button from './Button'
import { LuDownload } from "react-icons/lu";
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
function Same({newMovie, title, btn}) {
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageChange = (e) => {
      const file = e.target.files[0];
      setSelectedImage(file);
    };
    const history= useHistory();
  return (
    <div className='createpage'>
        <h2>{title}</h2>
        <div className='contenthere'>

        <div className='emptyborder'>
       
          <div className='column'  >
          <div className="image-upload-container">
        <label htmlFor="image-upload" className="image-upload-label">
        {/* <p className='iconstyling'><LuDownload /></p> */}

        {selectedImage ? ( 
          
          <img src={URL.createObjectURL(selectedImage)} alt="Uploaded" className="uploaded-image" />
        ) : (
          <div>
                    <p className='iconstyling'><LuDownload /></p>

                      <div className="upload-placeholder">Drop an image here or click to upload</div>
          </div>
        )}
      </label>
      <input
        type="file"
        id="image-upload"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: 'none' }}
      />        
    </div>
          {/* <p className='iconstyling'><LuDownload /></p> */}
            {/* <p>Drop an image here</p> */}
          </div>

          </div>
          <div className='secondpart'>
            <input className='fullline input-main' type="text" required placeholder='Title'/><br />
            <input className='halfline input-main' type="text" required placeholder='Publishing year'/><br />
            <Link to='/edit'>
            <button className='buttonsetting1'>
              Cancel
            </button>
            </Link>
            <Link to='/'>
            <button className='buttonsetting2'>
          {btn}
        </button>
            </Link>
      
          </div>

        </div>
        

    </div>
  )
}

export default Same