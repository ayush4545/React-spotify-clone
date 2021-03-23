import React from 'react'
import './sidebar.css';
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import {useDataLayerValue} from './DataLayer'
function Sidebar() {
    const [{playlists},dispatch]=useDataLayerValue();
    console.log('sidebar playlists >>>> ',playlists)
    return (
        <div className='sidebar'>
            <img className='sidebar__logo' src="https://imgix.bustle.com/uploads/image/2018/10/5/32a337c4-a6e9-4c0e-b512-010bb98e0049-spotify-logo.png?w=1020&h=574&fit=crop&crop=faces&auto=format%2Ccompress" alt="spotify logo" />
            <SidebarOption title='Home' Icon={HomeIcon }/>
            <SidebarOption title='Search' Icon={SearchIcon } />
            <SidebarOption title='Your Library' Icon={LibraryMusicIcon }/>
            
            <br/>
            <strong className='sidebar_title'>PLAYLIST</strong> 
            <hr/>
             
            {playlists?.items?.map(playlist =>{
             return <SidebarOption title={playlist.name} /> 

            })}
            
        </div>
        
    )
}

export default Sidebar
