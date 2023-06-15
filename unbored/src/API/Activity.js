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
import { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { lime } from '@mui/material/colors'
import minion from "./../icons/bird.gif"
import coin from "./../icons/coin.gif"


function Activity() {
  const [clicked, setClicked] = useState(false)
  
  var activityType = ""
  var activityCost = ""

  function handleSaveClick() {
    setClicked(!clicked)
   // change <AddCircleIcon /> to <BlockIcon /> at "id"
  }

  function functionShare() {
    navigator.clipboard.writeText();
    alert("Link copied! Now send it to your friends!");
  } 

  function GetActivity(yourUrl){
    var Httpreq = new XMLHttpRequest();
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;
  }

  function mapCost(cost) {
    cost = cost*10

    switch(true) {
      case cost>=8:
        return "Expensive"
      case cost>=5:
        return "Medium"
      case cost>0:
        return "Cheap"
      case cost==0:
        return "Free"
    }
  }

  function ParseActivity(response) {
    var json_activity = JSON.parse(response);

    // First letter capital
    var str = json_activity.type
    activityType = str.charAt(0).toUpperCase() + str.slice(1);

    // Mapping cost
    activityCost = mapCost(json_activity.price)
    return json_activity.activity
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
  
  var activityText = ParseActivity(GetActivity("https://www.boredapi.com/api/activity"))

  return(
    <div class="post">
      <Card  >
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
          title={activityType}
          subheader={currentDate}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {activityText}
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
            {activityCost}
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="fit-content"
          image={minion}
          style={
                {width: "fit-content", height: "8vh", objectFit: "contain", float: "right", padding: 10}}
          alt="Happy parrot"
        />
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorite" onClick={() => handleSaveClick()}>
            {clicked ? <FavoriteIcon /> : <FavoriteBorderIcon/>}
          </IconButton>
          <IconButton aria-label="share" onClick={() => functionShare()}>
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}

export default Activity;