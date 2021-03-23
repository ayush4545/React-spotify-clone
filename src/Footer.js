import React from 'react'
import './footer.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import {Grid,Slider } from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
function Footer() {
    return (
        <div className='footer'>
            <div className="footer_left">
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Usher_Cannes_2016_retusche.jpg/330px-Usher_Cannes_2016_retusche.jpg" alt="" className='footer_albumLogo'/>
               <div className="footer_songInfo">
                   <h4>Yeah!</h4>
                   <p>Usher</p>
               </div>
            </div>
            <div className="footer_center">
               <ShuffleIcon className='footer_green'/>
               <SkipPreviousIcon className='footer_icon'/>
               <PlayCircleOutlineIcon className='footer_icon' fontSize='large'/>
               <SkipNextIcon className='footer_icon'/>
               <RepeatIcon className='footer_green'/>
            </div>
            <div className="footer_right">
               <Grid container spacing={2}>
                   <Grid item>
                       <PlaylistPlayIcon />
                   </Grid>
                   <Grid item>
                       <VolumeDownIcon />
                   </Grid>
                   <Grid item>
                       <Slider aria-labelledby='continuous-slider'/>
                   </Grid>
               </Grid>
            </div>
        </div>
    )
}

export default Footer
