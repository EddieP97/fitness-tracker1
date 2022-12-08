import { BottomNavigation, BottomNavigationAction, Box, Paper } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
//import PostAddIcon from '@mui/icons-material/PostAdd';
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import MapRoundedIcon from '@mui/icons-material/MapRounded';
import Newsfeed from "./newsfeed/Newsfeed";
import Dashboard from "./dashboard/Dashboard";
//import AddPost from "./addPost/AddPost"; 
//import Protected from './protected/Protected'
import Tracker from "./tracker/Tracker";
import Calories from "./calories/Calories";

const BottomNav = () => {
    const [value, setValue] = useState(0)
    const ref = useRef()
    useEffect(()=>{
        ref.current.ownerDocument.body.scrollTop = 0
    }, [value])
    return (
        <Box ref={ref}>
            {{
                0: <Dashboard/>,
                1: <Calories />,
                2: <Newsfeed/>,
                3: <Tracker />,
            }[value]}
            <Paper
            elevation={3}
            sx={{position:'fixed', bottom:0, left:0, right:0, zIndex:2}}
            >
                <BottomNavigation
                showLables
                value={value}
                onChange={(e, newValue)=> setValue(newValue)}
                >
                    
                    <BottomNavigationAction label='Dashboard' icon={<DashboardOutlinedIcon />} />
                    <BottomNavigationAction label='Calories' icon={<MonitorWeightIcon />} />
                    <BottomNavigationAction label='Newsfeed' icon={<ForumOutlinedIcon />} />
                    <BottomNavigationAction label='Tracker' icon={<MapRoundedIcon />} />
                    

                </BottomNavigation>    
            </Paper>
        </Box>
    )
}

export default BottomNav