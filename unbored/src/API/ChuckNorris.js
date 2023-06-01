import chuckGif from "../icons/chuck.gif"
import {useDispatch} from "react-redux"
import { save } from "../savedSlice";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';

// Because of props passing as a argunemt now we can call REACT props   !!!---NOT HTML PROPS----!!!! (for html props is func({nameOfProp}))
function ChuckNorris(props) {
  const url = props.url
    // wysłanie akcji do reducera
    const dispatch = useDispatch()

    function GetNewJoke(yourUrl){
      var Httpreq = new XMLHttpRequest();
      Httpreq.open("GET",yourUrl,false);
      Httpreq.send(null);
      return Httpreq.responseText;          
    }

    function GetJokeFromUrl(yourUrl) {
      var Httpreq = new XMLHttpRequest()
      Httpreq.open("GET",yourUrl,false)
      Httpreq.send(null)
      
      return Httpreq.responseText 
    }

    

    function ParseJoke(response) {
        var json_joke = JSON.parse(response);
        return json_joke;
    }

    function functionShare() {
      
      navigator.clipboard.writeText(joke.url);
      alert("Link copied! Now send it to your friends!");
    } 

    // "https://api.chucknorris.io/jokes/random"

    if (url) {
      var joke = ParseJoke(GetJokeFromUrl(url))
    } else {
      var joke = ParseJoke(GetNewJoke("https://api.chucknorris.io/jokes/random"))      
    }

    // Current date - done, works

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

    return(
      <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            C
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Best Chucknorris Jokes!"
        subheader={currentDate}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {joke.value}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        height="fit-content"
        image={chuckGif}
        style={
               {width: "fit-content", height: 70, objectFit: "contain", float: "right", padding: 8}}
        alt="Dancing Chuck"
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={() => dispatch(save(joke.url))}>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share" onClick={() => functionShare()}>
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
    );
}

export default ChuckNorris;