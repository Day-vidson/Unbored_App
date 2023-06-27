import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import ShareIcon from '@mui/icons-material/Share';

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



// Likes component
export default function Likes() {
  const [ThumbUpClicked, setThumbUpClicked] = React.useState(false)
  const [ThumbDownClicked, setThumbDownClicked] = React.useState(false)
  const [WowClicked, setWowClicked] = React.useState(false)
  const [LoveItClicked, setLoveIt] = React.useState(false)

  // Reaction Icons
  function thumbUpIcon() {
    return ThumbUpClicked ? <ThumbUpAltIcon /> : <ThumbUpOffAltIcon/>
  }
  function thumbDownIcon() {
    return ThumbDownClicked ? <ThumbDownAltIcon /> : <ThumbDownOffAltIcon/>
  }
  function wowIcon() {
    return WowClicked ? <EmojiEmotionsIcon /> : <SentimentVerySatisfiedIcon/>
  }
  function loveItIcon() {
    return LoveItClicked ? <FavoriteIcon /> : <FavoriteBorderIcon/>
  }

  // Reaction handlers

  function handleThumpUpClicked() {
    setThumbUpClicked(!ThumbUpClicked)
    console.log("Like!")
  }
  function handleThumpDownClicked() {
    setThumbDownClicked(!ThumbDownClicked)
    console.log("Dislike!")
  }
  function handleWowClicked() {
    setWowClicked(!WowClicked)
    console.log("Wow!")
  }
  function handleLoveItClicked() {
    setLoveIt(!LoveItClicked)
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
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'static', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon icon={<AddReactionIcon/>} openIcon={<SentimentSatisfiedAltIcon />} />}
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
    </Box>
  );
}