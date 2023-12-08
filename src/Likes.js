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

import { useDispatch, useSelector } from 'react-redux';

import { setNewEntry } from "./reactionsSlice";



// Likes component
function Likes() {
  const [thumbUpClicked, setThumbUpClicked] = useState(false)
  const [thumbDownClicked, setThumbDownClicked] = useState(false)
  const [wowClicked, setWowClicked] = useState(false)
  const [loveItClicked, setLoveIt] = useState(false)
  const [totalOfLikes, setTotalOfLikes] = useState(0)

  // setTotalOfLikes(calcTotalOfLikes())

  const dispatch = useDispatch()


  // Reaction Icons
  function thumbUpIcon() {
    return thumbUpClicked ? <Badge badgeContent={1} color="primary"><ThumbUpAltIcon /></Badge> : <Badge badgeContent="0" color='primary'><ThumbUpOffAltIcon /></Badge>
  }
  function thumbDownIcon() {
    return thumbDownClicked ? <Badge badgeContent={1} color="primary"><ThumbDownAltIcon /></Badge> : <Badge badgeContent="0" color='primary'><ThumbDownOffAltIcon/></Badge>
  }
  function wowIcon() {
    return wowClicked ? <Badge badgeContent={1} color="primary"><EmojiEmotionsIcon /></Badge> : <Badge badgeContent="0" color='primary'><SentimentVerySatisfiedIcon/></Badge>
  }
  function loveItIcon() {
    return loveItClicked ? <Badge badgeContent={1} color="primary"><FavoriteIcon /></Badge> : <Badge badgeContent="0" color='primary'><FavoriteBorderIcon/></Badge>
  }

  // Reaction handlers

  function handleThumpUpClicked() {
    setThumbUpClicked(!thumbUpClicked)
    console.log("Like!")
  }

  function test() {
    handleThumpUpClicked()
    setTotalOfLikes(calcTotalOfLikes())
    console.log("thumbUpClicked: " + thumbUpClicked)
    console.log("total from handler: " + totalOfLikes)

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

  function calcTotalOfLikes() {
    let totOfLikes = totalOfLikes;
    if (thumbUpClicked || thumbDownClicked || wowClicked || loveItClicked) {
      console.log("values of state from calc: ")
      console.log("up" + thumbUpClicked)
      console.log("down" + thumbDownClicked)
      console.log("wow" + wowClicked)
      console.log("love" + loveItClicked)
      totOfLikes = totOfLikes+thumbUpClicked+thumbDownClicked+wowClicked+loveItClicked
      setTotalOfLikes(totOfLikes)
    }
    return totOfLikes
  }


  const actions = [
    { icon: thumbUpIcon(), name: 'Like' , onClick: test},
    { icon: thumbDownIcon(), name: 'Dislike', onClick: handleThumpDownClicked },
    { icon: wowIcon(), name: 'Wow!', onClick: handleWowClicked },
    { icon: loveItIcon(), name: 'Love it!', onClick: handleLoveItClicked },
  ];

  return (
    <Box sx={{ height: 56, transform: 'translateZ(0px)', flexGrow: 1, padding: "1em" }}>
      <Badge anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
        }} >
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