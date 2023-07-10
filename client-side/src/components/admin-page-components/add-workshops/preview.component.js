import React from 'react'
import HideImageTwoToneIcon from '@mui/icons-material/HideImageTwoTone';
import CameraRollIcon from '@mui/icons-material/CameraRoll';
import WallpaperIcon from '@mui/icons-material/Wallpaper';
import CloseIcon from '@mui/icons-material/Close';

import './add-workshop.styles.scss';

const PreviewCard = ({ data, file }) => {

    console.log(file)

    return (
        <div className='preview-main'>
            {
            Object.entries(data).length === 0 
            ? <WallpaperIcon  sx={{ fontSize: '80px'}}/>
            :  
            <div className='preview-card'>
                <div className='image-div'>
                    {
                        !data.image ? (
                            <div className='delete-image'>
                        <CloseIcon 
                            sx={{ 
                                position: 'absolute',
                                right: 0
                            }} />
                    </div>
                    ) : <div className='no-image'>
                        <HideImageTwoToneIcon 
                            sx={{ 
                                fontSize: '40px'
                            }}
                        />
                    </div>
                    }
                    {/* <div className='delete-image'>
                        <CloseIcon 
                            sx={{ 
                                position: 'absolute',
                                right: 0
                            }} />
                    </div> */}
                    
                    {/* <div className='no-image'>
                        <HideImageTwoToneIcon 
                            sx={{ 
                                fontSize: '40px'
                            }}
                        />
                    </div> */}

                    {!data.image ? (
                        <div className='image-container'>
                            <img src={data.img} alt="" />
                        </div>
                    ) : null}
                </div>
        
                <div className='preview-inputs'>
                    <p>{data.practice}</p>
                    <p>{data.location}</p>
                    <p>{data.date}</p>
                    <p>{data.price}</p>
                    <p>{data.sessions}</p>
                </div>
            </div>
            }
        </div>
    )
}

export default PreviewCard
