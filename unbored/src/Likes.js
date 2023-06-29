import { useState } from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import Badge from '@mui/material/Badge';

// Reactions icons
import AddReactionIcon from '@mui/icons-material/AddReaction';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
    // Like
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
    // Dislike
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
    // Wow
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
    // Love it
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { useSelector } from 'react-redux';



// Likes component
function Likes() {
  const [thumbUpClicked, setThumbUpClicked] = useState(false)
  const [thumbDownClicked, setThumbDownClicked] = useState(false)
  const [wowClicked, setWowClicked] = useState(false)
  const [loveItClicked, setLoveIt] = useState(false)

  // const [noThumbUp, setnoThumbUp] = useSelector(false)
  // const [totalOfLikes, setTotalOfLikes]

  // Reaction Icons

  function thumbUpIcon() {
    return thumbUpClicked ? <ThumbUpAltIcon /> : <ThumbUpOffAltIcon/>
  }

  function thumbDownIcon() {
    return thumbDownClicked ? <Badge badgeContent={1} color="primary"><ThumbDownAltIcon /></Badge> : <Badge badgeContent="0" color='primary'><ThumbDownOffAltIcon/></Badge>
  }
  function wowIcon() {
    return wowClicked ? <EmojiEmotionsIcon /> : <SentimentVerySatisfiedIcon/>
  }
  function loveItIcon() {
    return loveItClicked ? <FavoriteIcon /> : <FavoriteBorderIcon/>
  }

  // Reaction handlers

  function handleThumpUpClicked() {
    setThumbUpClicked(!thumbUpClicked)
    console.log("Like!")
  }
  function handleThumpDownClicked() {
    setThumbDownClicked(!thumbDownClicked)
    console.log("Dislike!")
  }
  function handleWowClicked() {
    setWowClicked(!wowClicked)
    console.log("Wow!")
  }
  function handleLoveItClicked() {
    setLoveIt(!loveItClicked)
    console.log("Love it!")
  }


  const actions = [
    { icon: thumbUpIcon(), name: 'Like' , onClick: handleThumpUpClicked},
    { icon: thumbDownIcon(), name: 'Dislike', onClick: handleThumpDownClicked },
    { icon: wowIcon(), name: 'Wow!', onClick: handleWowClicked },
    { icon: loveItIcon(), name: 'Love it!', onClick: handleLoveItClicked },
  ];

  return (
    <Box sx={{ height: 56, transform: 'translateZ(0px)', flexGrow: 1, padding: "1em" }}>
      <Badge anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
        }} badgeContent={20} color='secondary'>
        <SpeedDial

          ariaLabel="SpeedDial basic example"
          sx={{ position: 'static', bottom: 16, right: 16 }}
          icon={
          <SpeedDialIcon icon={<AddReactionIcon/>} openIcon={<SentimentSatisfiedAltIcon />} />
          }
          direction="right"
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              openIcon
              tooltipTitle={action.name}
              onClick={action.onClick}
            />
          ))}
        </SpeedDial>
      </Badge>
      
      
    </Box>
  );
}

export default Likes;