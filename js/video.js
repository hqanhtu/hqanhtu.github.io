             var video = document.getElementsByTagName('video')[0];
             var playPause = document.getElementById('playPause');

             function setPlayPause(e) {
                 video.paused
                 playPause.value = 'Play';
                 playPause.onclick = function(e) {
                     video.play()
                 };

                 function setPlayPause(m) {
                     video.paused
                     playPause.value = 'Pause';
                     playPause.onclick = function(e) {
                         video.pause();
                     }
                 }
             }

             function makeSmall() {
                 video.width = 350;
             }

             function makeNormal() {
                 video.width = 500;
             }

             function makeBig() {
                 video.width = 900;
             }