import chuckGif from "../icons/chuck.gif"
import { useDispatch } from "react-redux"
import { deletePost, savePost } from "../savedSlice";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useEffect, useState } from 'react';
import * as React from 'react';
import Likes from '../Likes.js';

// bookmark icons
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';



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
      dispatch(savePost(joke.url))


    } else {
      // changes from clicked to unclicked
      setClicked(!clicked)
      shouldComponentUpdate(clicked)
      dispatch(deletePost(joke.url))
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
      if (prevState !== undefined) { 
        return false;
      }
      return true;
    }

    return(
      <div class="post">
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: blue[500] }} aria-label="Chuck">
                C
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Best Chuck Norris Jokes!"
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
            className="DancingChuck"
            alt="Dancing Chuck"
          />
          <CardActions sx={{  display: "flexbox", alignItems:"flex-start" , flexDirection: "column" }} disableSpacing>
            <Likes sx={{ alignItems: "none", flex: "100%" }} ></Likes>
            
            <IconButton className="IconButton" aria-label="add to favorite" onClick={() => handleSaveClick()}>
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

export default ChuckNorris;