function Bored() {
    function GetActivity(yourUrl){
        var Httpreq = new XMLHttpRequest();
        Httpreq.open("GET",yourUrl,false);
        Httpreq.send(null);
        return Httpreq.responseText;
    }

    function ParseActivity(response) {
        var json_activity = JSON.parse(response);
        return response
    }
    // "https://www.boredapi.com/api/activity"
    
    var activity = ParseActivity(GetActivity("https://www.boredapi.com/api/activity"))

    return(
        <p>
            {activity}
        </p>
    );
}

export default Bored;