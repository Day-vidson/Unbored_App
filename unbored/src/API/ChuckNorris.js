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
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useEffect, useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';


// Because of props passing as a argunemt now we can call REACT props   !!!---NOT HTML PROPS----!!!! (for html props is func({nameOfProp}))
function ChuckNorris(props) {
  // Starting value
  const isLiked = props.isLiked

  const url = props.url



  // States
  const [clicked, setClicked] = useState(isLiked)
  const [joke, setJoke] = useState({})


  function handleSaveClick() {
    let isClicked = clicked

    // changes from unclicked to clicked
    if (isClicked !== true) {
      setClicked(!clicked)
      shouldComponentUpdate(clicked)
      dispatch(save(joke.url))


    } else {
      // changes from clicked to unclicked
      setClicked(!clicked)
      shouldComponentUpdate(clicked)
      // dispatch(save(joke.url))    nie zapisuj tylko usun z zapisanych postow
    }
    
    

   // change <FavoriteIcon/> to <FavoriteBorderIcon/> at <CardActions/> -> <IconButton/>
  }

    // Send action to reducer
    const dispatch = useDispatch()

    useEffect(() => {
      if (url) {
        setJoke(ParseJoke(GetJokeFromUrl(url)))

      } else {
        setJoke(ParseJoke(GetNewJoke("https://api.chucknorris.io/jokes/random")))
 
      }
    }, [url])


    

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

    

    // Current date

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

    // date----------------------------------------------------------------------//

    function shouldComponentUpdate(prevState) { 
      if (prevState != undefined) { 
        return false;
      }
      return true;
    }

    return(
      <div class="post">
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
                  {width: "fit-content", height: "8vh", objectFit: "contain", float: "right", padding: 10}}
            alt="Dancing Chuck"
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

export default ChuckNorris;