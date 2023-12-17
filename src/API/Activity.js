import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useEffect, useState } from 'react';
import { lime } from '@mui/material/colors'
import minion from "./../icons/bird.gif"
import coin from "./../icons/coin.gif"
import Likes from '../Likes';
import difficultyImage from "./../icons/difficulty.png"
import participantsImage from "./../icons/participants.png"
import { useDispatch } from 'react-redux';
import { deletePost, savePost } from "../savedActivitySlice";


import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';


function Activity(props) {
  const dispatch = useDispatch()
  const isLiked = props.isLiked
  const url = props.url

  // States
  const [clicked, setClicked] = useState(isLiked)
  const [activity, setActivity] = useState({})

  useEffect(() => {
    if (url) {
      setActivity(ParseActivity(GetActivity(url)))

    } else {
      setActivity(ParseActivity(GetActivity("http://www.boredapi.com/api/activity")))

    }
  }, [url])

  const link = "http://www.boredapi.com/api/activity?key=" + activity.key
  

  function handleSaveClick() {
    let isClicked = clicked

    if (isClicked !== true) {
      setClicked(!clicked)
      // shouldComponentUpdate(clicked)
      dispatch(savePost(link))

    } else {
      setClicked(!clicked)
      // shouldComponentUpdate(clicked)
      dispatch(deletePost(link))
    }
  }

  

  function GetActivity(yourUrl){
    var Httpreq = new XMLHttpRequest();
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);

    return Httpreq.responseText;
  }

  function ParseActivity(response) {
    var json_activity = JSON.parse(response);

    // first letter of type big
    const word = json_activity.type
    const firstLetter = word.charAt(0)
    const firstLetterCap = firstLetter.toUpperCase()
    const remainingLetters = word.slice(1)
    json_activity.type = firstLetterCap + remainingLetters

    return json_activity
  }

  

  function functionShare() {
    navigator.clipboard
      .writeText(link)
      .then(() => {
        alert("Link successfully copied, now send it to your friends!");
      })
      .catch(() => {
        alert("something went wrong");
      });
  } 

  function mapCost() {
    let cost = activity.price*10

    switch(true) {
      case cost>=8:
        return "Expensive"
      case cost>=5:
        return "Medium"
      case cost>0:
        return "Cheap"
      case cost===0:
        return "Free"
      default:
        return ""
    }
  }

  function mapAccess() {
    let access = activity.accessibility*10

    switch(true) {
      case access>=8:
        return "Challenging"
      case access>=5:
        return "Demanding"
      case access>0:
        return "Easy"
      case access===0:
        return "Piece of cake"
      default:
        return ""
    }
  }

  

  function mapMonthNumberToName(index) {
    // This function returns name of month of given index (start from 0 - january).
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let monthName = monthNames[index]
    return monthName
  }

  const date = new Date();
  let day = date.getDate();
  let month = mapMonthNumberToName(date.getMonth())
  let year = date.getFullYear();
  
  // This arrangement can be altered based on how we want the date's format to appear.
  let currentDate = `${month} ${day}, ${year}`;

  // "https://www.boredapi.com/api/activity"

  let difficultyText = mapAccess()
  let cost = mapCost()
  

  return(
    <div class="post activityPost">
      <Card sx={{ maxWidth:345, border: 2, borderColor: 'lightgray' , borderRadius: 6 }} >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: lime[500] }} aria-label="Activity">
              A
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={activity.type}
          subheader={currentDate}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {activity.activity}
          </Typography>
          <CardMedia
          component="img"
          height="fit-content"
          image={coin}
          style={
                {width: "fit-content", height: "3vh", float: "left", display: 'inline'}}
          alt="Coin"
          />
          <Typography variant="body2" color="text.secondary" style={{marginLeft: "2em" ,padding: "0.5em", height: "2em"}}>
            {cost}
          </Typography>


          <CardMedia
          component="img"
          height="fit-content"
          image={difficultyImage}
          style={
            {width: "fit-content", height: "3vh", float: "left", display: 'inline'}
          }
          alt="Difficulty"
          />
          <Typography variant="body2" color="text.secondary" style={{marginLeft: "2em" ,padding: "0.5em", height: "2em"}}>
            {difficultyText}
          </Typography>

          <CardMedia
          component="img"
          height="fit-content"
          image={participantsImage}
          style={
            {width: "fit-content", height: "3vh", float: "left", display: 'inline'}
          }
          alt="Accessibility"
          />
          <Typography variant="body2" color="text.secondary" style={{marginLeft: "2em" ,padding: "0.5em", height: "2em"}}>
            {activity.participants}
          </Typography>
        </CardContent>
        
        <CardMedia
          component="img"
          height="fit-content"
          className="DancingChuck"
          image={minion}
          style={
                {width: "fit-content", height: "8vh", objectFit: "contain", float: "right", padding: 10}}
          alt="Happy parrot"
        />


        <CardActions sx={{  display: "flexbox", alignItems:"flex-start" , flexDirection: "column" }} disableSpacing>
            <Likes sx={{ alignItems: "none", flex: "100%" }} ></Likes>
            
            <IconButton className="IconButton" aria-label="save" onClick={() => handleSaveClick()}>
              {clicked ? <BookmarkIcon /> : <BookmarkBorderIcon/>}
            </IconButton>
            <IconButton className="IconButton" aria-label="share" onClick={() => functionShare()}>
              <ShareIcon />
            </IconButton>

        </CardActions>
      </Card>
    </div>
  );
}

export default Activity;