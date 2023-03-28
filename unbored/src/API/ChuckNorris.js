import chuckGif from "../icons/chuck.gif"
import {useDispatch} from "react-redux"
import { save } from "../savedSlice";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';


function ChuckNorris() {
    // wysłanie akcji do reducera
    const dispatch = useDispatch()

    function GetJoke(yourUrl){
        var Httpreq = new XMLHttpRequest();
        Httpreq.open("GET",yourUrl,false);
        Httpreq.send(null);
        return Httpreq.responseText;          
    }

    

    function ParseJoke(response) {
        var json_joke = JSON.parse(response);
        return json_joke;
    }

    // "https://api.chucknorris.io/jokes/random"
    
    var joke = ParseJoke(GetJoke("https://api.chucknorris.io/jokes/random"))

    return(
        // <div className="joke">
        //     <div className="gif">
        //         <img className="gifImage" src={chuckGif}></img>   
        //     </div>
        //     <div className="jokeContainer">
        //         <h2 className="jokeTitle">jokeTitle</h2>
        //         <div className="jokeText">
        //             <p>
        //                 {joke.value}
        //             </p>
                    
        //         </div>
        //         <div className="jokeButtonsDiv">
        //         <button className="Saved jokeButtons" onClick={() => dispatch(save(joke.url))}>❤</button>
        //         <button className="Shared jokeButtons">✈</button>
        //         </div>
        //     </div>
        // </div>

        <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={chuckGif}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={() => dispatch(save(joke.url))}>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
    );
}

export default ChuckNorris;