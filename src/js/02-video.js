import Player from '@vimeo/player'
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const time = localStorage.getItem("videoplayer-current-time")
let timeCheck = 0;

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

player.on('timeupdate', function(data) {
  const currentTime = data.seconds;
  localStorage.setItem("videoplayer-current-time", currentTime);
});

player.setCurrentTime(time).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});


throttle(function(e) {
    timeCheck += 1},1000)