import { Avatar, AvatarGroup, Box, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import React from "react";

const RightBar = () => {
    return (
        <Box flex={2} p={4} sx={{display: {xs: "none", sm: "block"}}}>
            <Box position="fixed" width={200}>
            <Typography variant="h6" frontWeight={100}>
                Gym Buddies
            </Typography>
            <AvatarGroup max={4}>
                <Avatar alt="Remy Sharp" src="" />
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                <Avatar alt="Cindy Baker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnZm2ZatubBeYhnkaOyzP49RKwTbB85jO0UA&usqp=CAU" />
                <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                <Avatar alt="Trevor Henderson" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdywyua7BcDb8T_10weiZIsb4y_AnVNQKkRg&usqp=CAU" />
            </AvatarGroup>
            <Typography variant="h6" frontWeight={100}>
                Trainers
            </Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN4dngWJ5Z6Ab64J_yufd-b1OOxas5_jbHig&usqp=CAU" />
        </ListItemAvatar>
        <ListItemText
          primary="REMY SHARP"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                This time, fitness revolves around you! --
              </Typography>
              {"$50 per hour"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNj4VCsUCmT2YhNFZjAj0Z7bR8Qs54oCKNSA&usqp=CAU" />
        </ListItemAvatar>
        <ListItemText
          primary="Travis Howard"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Better body, better life! --
              </Typography>
              {" $75 per hour "}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBc9lwsYfMfT1oCa9vvIdOmNuwCnCDek1Pjg&usqp=CAU" />
        </ListItemAvatar>
        <ListItemText
          primary="Cindy Baker"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Train in confidence, believe in yourself! --
              </Typography>
              {' $45 per hour'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
            </Box>
        </Box>
    )
}

export default RightBar;