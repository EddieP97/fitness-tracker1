import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import {
  Box,
  Paper,
  Typography,
} from '@mui/material';
import React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';


import PieC from './PieC';
import AreaC from './AreaC';
 

const Dashboard = () => {
  return (
    <Box
      sx={{
        display: { xs: 'flex', md: 'grid' },
        gridTemplateColumns: 'repeat(3,1fr)',
        gridAutoRows: 'minmax(100px, auto)',
        gap: 3,
        textAlign: 'center',
        flexDirection: 'column',
      }}
    >
      <Paper elevation={5} sx={{ p: 3 }}>
        <Typography variant="h4">Steps</Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <DirectionsWalkIcon sx={{ height: 100, width: 100, opacity: 0.3, mr: 1 }} />
          <Typography variant="h4"></Typography>
        </Box>
      </Paper>
      <Paper elevation={5} sx={{ p: 3 }}>
        <Typography variant="h4"> Excercise</Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <FitnessCenterIcon sx={{ height: 100, width: 100, opacity: 0.3, mr: 1 }} />
          <Typography variant="h4"></Typography>
        </Box>
      </Paper>
      <Paper elevation={3} sx={{ p: 2, gridColumn: 3, gridRow: '1/4' }}>
        
      </Paper>
      <Paper elevation={3} sx={{ p: 2, gridColumn: '1/3' }}>
        <PieC />
      </Paper>
      <Paper elevation={3} sx={{ p: 2, gridColumn: '1/3' }}>
        <AreaC />
      </Paper>
      <Paper elevation={3} sx={{ p: 2, gridColumn: 3, gridRow: '1/4' }}>
        <Box>
        <Typography variant="h6" frontWeight={100}>
                Recent Chat
            </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="data:image/jpeg;base64,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" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="data:image/jpeg;base64,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" />
        </ListItemAvatar>
        <ListItemText
          primary="Workout Session?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="data:image/jpeg;base64,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" />
        </ListItemAvatar>
        <ListItemText
          primary="See you at the Gym"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Okay im heading there now '}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
        </Box>
         </Paper>
    </Box>

  );
};

export default Dashboard;