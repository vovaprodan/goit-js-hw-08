import Player from '@vimeo/player'
const iframe = document.querySelector('iframe');


    const player = new Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

//     const onPlay = function(data) {
//    console.log( 'час');
// };

// player.on('timeupdate', onPlay);

// localStorage.setItem("videoplayer-current-time", JSON.stringify(player.on('timeupdate', onPlay)))
player.on('timeupdate', function(data) {
  const currentTime = data.seconds;
  localStorage.setItem("videoplayer-current-time", currentTime);
});

player.setCurrentTime(second).then(function(seconds) {
    const second = localStorage.getItem("videoplayer-current-time");
    console.log(second)
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