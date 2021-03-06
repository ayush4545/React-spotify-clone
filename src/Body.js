import React from 'react'
import './body.css';
import Header from './Header'
import SongRow from './SongRow'
import {useDataLayerValue} from './DataLayer'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
function Body({spotify}) {
    const [{discover_weekly},dispatch]=useDataLayerValue();
   
    return (
        <div className='body'>
            <Header spotify={spotify}/>
            <div className="body_info">
                <img src={discover_weekly?.images[0].url} alt="" />
                <div className="body_infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>
            <div className="body_songs">
                <div className="body_icons">
                   <PlayCircleOutlineIcon className='body_shuffle'/>
                   <FavoriteIcon fontSize='large'/>
                   <MoreHorizIcon />
                </div>

                {discover_weekly?.tracks.items.map(item=>{
                    return <SongRow track={item.track} />
                })}
            </div>
        </div>
    )
}

export default Body
