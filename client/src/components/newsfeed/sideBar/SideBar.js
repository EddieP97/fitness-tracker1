import { Home} from "@mui/icons-material";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";

const SideBar = () => {
    return (
        <Box flex={1} p={10} sx={{display: {xs: "none", sm: "block"}}}>
            <Box position="fixed">
            <List>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#home">
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        <ListItemText primary="HomePage"/>
                    </ListItemButton>
                </ListItem>
            </List>
            </Box>
        </Box>
    )
}

export default SideBar;