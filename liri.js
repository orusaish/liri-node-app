var dotenv = require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var fs = require("fs");
var moment = require("moment");

var axios = require("axios");

var command = process.argv[2];
var secondCommand = process.argv[3];
var i = 4;
while (process.argv[i]) {
  secondCommand += " " + process.argv[i];
  i++;
}
function sw(command, secondCommand) {
  // console.log("command " + command + " second command = " + secondCommand);
  switch (command) {
    case "concert-this":
      getBand(secondCommand);
      break;
    case "spotify-this-song":
      if (secondCommand) {
        spotifyThisSong(secondCommand);
      } else {
        spotifyThisSong("ace of base");
      }
      break;
    case "movie-this":
      if (secondCommand) {
        omdb(secondCommand);
      } else {
        omdb("Mr. Nobody.");
      }
      break;
    case "do-what-it-says":
      doThing();
      break;
    default:
      console.log(
        "\n" +
          "Type any command after 'node liri.js':" +
          "\n" +
          "Bands-in-town" +
          "\n" +
          "spotify-this-song 'any song Title'" +
          "\n" +
          "movie-this 'any movie title'" +
          "\n" +
          "do-what-it-says" +
          "\n"
      );
  }
}
sw(command, secondCommand);

//-------------------------------------------------------------------------------------------------------------------------
function getBand(artist) {
  var queryUrl =
    "https://rest.bandsintown.com/artists/" +
    artist +
    "/events?app_id=codingbootcamp";
  axios.get(queryUrl).then(function(response) {
    console.log("\n");
    console.log("Found " + response.data.length + " concerts for this band");
    console.log("\n");
    for (var i = 0; i < response.data.length; i++) {
      var concert = response.data[i];
      console.log("The Name of Venue: " + concert.venue.name);
      console.log(
        "The Address of Venue: " +
          concert.venue.city +
          concert.venue.region +
          ", " +
          concert.venue.country
      );
      console.log(
        "The Date of Event: " + moment(concert.datetime).format("MM/DD/YYYY")
      );
      console.log("\n");
    }
  });
}
// ------------------------------------------------------------------------------------------------------------------------
function spotifyThisSong(song) {
  spotify.search({ type: "track", query: song, limit: 1 }, function(err, data) {
    if (err) {
      return console.log("Error occurred: " + err);
    }

    for (var i = 0; i < data.tracks.items.length; i++) {
      var songData = data.tracks.items[i];
      console.log("\n");
      //artist
      console.log("Artist: " + songData.artists[0].name);
      //song name
      console.log("Song: " + songData.name);
      //spotify preview link
      console.log("Preview URL: " + songData.preview_url);
      //album name
      console.log("Album: " + songData.album.name);
      console.log("--------------------------------------");
    }
  });
}
//--------------------------------------------------------------------------------------------------------------------------

function omdb(movieName) {
  var queryUrl =
    "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

  axios.get(queryUrl).then(function(response) {
    console.log("\n");
    console.log("Title: " + response.data.Title);
    console.log("Release Year: " + response.data.Year);
    console.log("Country: " + response.data.Country);
    console.log("Language: " + response.data.Language);
    console.log("Plot: " + response.data.Plot);
    console.log("Actors: " + response.data.Actors);
    console.log("IMDB Rating" + response.data.imdbRating);

    for (var i = 0; i < response.data.Ratings.length; i++) {
      if (response.data.Ratings[i].Source === "Rotten Tomatoes") {
        console.log(
          "Rotten Tomatoes Rating: " + response.data.Ratings[i].Value
        );
      }
    }
    console.log("-----------------------");
  });
}
//-----------------------------------------------------------------------------------------------------------------------------

function doThing() {
  fs.readFile("random.txt", "utf8", function(error, data) {
    var lines = data.split("\n");
    for (var i = 0; i < lines.length; i++) {
      var txt = lines[i].split(",");
      console.log("\n");
      // spotifyThisSong(txt[1]);
      if (txt[0] != "" && txt[1] != "") {
        sw(txt[0], txt[1]);
      }
    }
  });
}
