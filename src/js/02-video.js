
import Player from '@vimeo/player';
import throttle from'lodash.throttle';

const currentTime = `videoplayer-current-time`;
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const onPlay = function(event) {
    localStorage.setItem(currentTime, event.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));
player.setCurrentTime(JSON.parse(localStorage.getItem(currentTime)) || 0);
