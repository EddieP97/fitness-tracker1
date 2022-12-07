import { BottomNavigation, BottomNavigationAction, Box, Paper } from "@mui/material";
import { useEffect, useRef, useState } from "react";
//import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import MapRoundedIcon from '@mui/icons-material/MapRounded';
import Rooms from "./rooms/Rooms";
import ClusterMap from "./map/ClusterMap";
import AddRoom from "./addRoom/AddRoom"; 

const BottomNav = () => {
    const [value, setValue] = useState(0)
    const ref = useRef()
    useEffect(()=>{
        ref.current.ownerDocument.body.scrollTop = 0
    }, [value])
    return (
        <Box ref={ref}>
            {{
                0: <ClusterMap/>,
                1: <Rooms/>,
                2: <AddRoom/>,
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
                    
                    <BottomNavigationAction label='Map' icon={<MonitorWeightIcon />} />
                    <BottomNavigationAction label='Rooms' icon={<ForumOutlinedIcon />} />
                    <BottomNavigationAction label='Add' icon={<MapRoundedIcon />} />

                </BottomNavigation>    
            </Paper>
        </Box>
    )
}

export default BottomNav