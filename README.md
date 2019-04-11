# liri-node-app

# Liri

### About

LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

### What it does

### Spotify

`node liri.js spotify-this-song <insert song title>`

This will show the following information about the song in your terminal/bash window

- Artist(s)
- The song's name
- A preview link of the song from Spotify
- The album that the song is from

If no song is provided then your program will default to "The Sign" by Ace of Base

### Bands in town

`node liri.js concert-this <artist/band name here>`

This will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal:

- Name of the venue
- Venue location
- Date of the Event (use moment to format this as "MM/DD/YYYY")

### Movies

`node liri.js movie-this <insert movie title>`

This will output the following information to your terminal/bash window:

- Title of the movie.
- Year the movie came out.
- IMDB Rating of the movie.
- Country where the movie was produced.
- Language of the movie.
- Plot of the movie.
- Actors in the movie.
- Rotten Tomatoes Rating.
- Rotten Tomatoes URL.

If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

### Do What It Says

`node liri.js do-what-it-says`

Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

Right now it will run `spotify-this-song` for "I Want it That Way,".
And `movie-this` for "star wars".

Feel free to change the text in that document to test out the feature for other commands.

## Instructions

- git clone https://github.com/orusaish/liri-node-app.git to clone to my repository
- npm install
- `node liri.js spotify-this-song <insert song title>`
- `node liri.js concert-this <artist/band name here>`
- `node liri.js movie-this <insert movie title>`
- `node liri.js do-what-it-says`

## Preview

### Concert-this

<img width="600" alt="concert-pic" src="https://user-images.githubusercontent.com/46056178/55975516-276f6500-5c58-11e9-8969-d9404c1ea79e.png">

---

---

### spotify-this-song

<img width="861" alt="spotify-pic" src="https://user-images.githubusercontent.com/46056178/55976760-2db31080-5c5b-11e9-882b-8714acf62d04.png">

---

<img width="815" alt="spotify-pic2" src="https://user-images.githubusercontent.com/46056178/55976770-36a3e200-5c5b-11e9-8176-1a674fbb2047.png">

---

---

### Movie-this

<img width="844" alt="movie-pic1" src="https://user-images.githubusercontent.com/46056178/55976785-43283a80-5c5b-11e9-95d9-4e1ead67178b.png">

---

<img width="959" alt="movie-pic2" src="https://user-images.githubusercontent.com/46056178/55976799-4cb1a280-5c5b-11e9-914b-1c47f8ad4fb4.png">

---

---

### Do what it says

<img width="960" alt="do-what-pic" src="https://user-images.githubusercontent.com/46056178/55976807-52a78380-5c5b-11e9-83ea-dc90aaa0ef80.png">
