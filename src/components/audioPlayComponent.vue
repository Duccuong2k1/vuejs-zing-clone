<template>
  <div class="row audio-play">

      <div class="col-md-3">
          <div class="info-song">
                <img src="https://avatar-ex-swe.nixcdn.com/singer/avatar/2021/05/12/7/d/c/b/1620802736418_600.jpg" alt="">
                <div class="title-song">
                    <h6>Baby you don't know</h6>
                    <p class="auth text-secondary">son tung mtp</p>
                </div>
                <div class="add-playlist">
                    <i class="far fa-heart mr-2"></i>
                    <i class="fas fa-ellipsis-h"></i>
                </div>
          </div>
      </div>
      <div class="col-md-6">
                 <div class="control">
                    <div class="btn btn-repeat">
                        <i class="fas fa-redo"></i>
                    </div>
                    <div class="btn btn-prev">
                        <i class="fas fa-step-backward"></i>
                    </div>
                    <div class="btn btn-toggle-play">
                        <!-- <i class="fas fa-pause icon-pause"></i> -->
                        <i class="fas fa-play icon-play"></i>
                    </div>
                    <div class="btn btn-next">
                        <i class="fas fa-step-forward"></i>
                    </div>
                    <div class="btn btn-random">
                        <i class="fas fa-random"></i>
                    </div>
                </div>
            <input id="progress" class="progress" type="range" value="0" step="1" min="0" max="100">
            <audio id="audio" src=""></audio>
            <!-- <audio controls autoplay>
                <source src="../assets/musics/CoDocVuongDai.mp3" type="audio/ogg">
                <source src="../assets/musics/CoDocVuongDai.mp3" type="audio/mpeg">
            </audio> -->
            <!-- <label>
            <button class="btn btn-primary btn-sm" @click.prevent="playSound('../assets/musics/CoDocVuongDai.mp3')"><span class="fa fa-play-circle-o"></span></button>
            Play Elevator Ding
            </label> -->

      </div>
      <div class="col-md-3">
          <div class="sound">
              <a href=""><i class="fab fa-youtube"></i></a>
              <a href=""><i class="fas fa-microphone"></i></a>
              <a href=""><i class="fas fa-volume-up"></i></a>
              <a href=""><i class="fas fa-expand-alt"></i></a>
              <a href=""><i class="far fa-list-alt"></i></a>
          </div>
      </div>
  </div>
</template>

<script>
import { Howl, Howler } from 'howler';

export default {
    data(){
        return{

        }
    },
    methods:{
        // playSound (sound) {
        //     if(sound) {
        //         var audio = new Audio(sound);
        //         audio.play();
        //     }
        // },
        playSound(file_path) {
            var sound = new Howl({
                src: file_path,
                volume: 0.5,
            });
            sound.play();
        }
    }
}
</script>

<style scoped>
.audio-play{
    min-height: 80px;
    margin: 5px;
    background-color:#120c1c;
}
.info-song{
    display: flex;
    align-items: center;
    font-size: 14px;
    justify-content: space-between;
    padding: 10px 0 ;
}
.info-song img{
    width: 60px;
    height: 60px;
    border-radius: 50%;

}
.auth{
    margin-left: 0;
}
/* CONTROL */

.control {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0 8px 0;
    margin-left: auto;
    margin-right: auto;
}

.control .btn {
    color: #fff;
    padding: 18px;
    font-size: 18px;
}

.control .btn.active {
    color: #782fd8;
}

.control .btn-toggle-play {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    font-size: 20px;
    color: rgb(152, 101, 245);
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #782fd8;
    /* background:#782fd8; */
    
}

.progress {
    width: 100%;
    -webkit-appearance: none;
    height: 3px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
}

.progress::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 12px;
    height: 6px;
    background-color: var(--primary-color);
    cursor: pointer;
}
.sound{
    display: flex;
    justify-content: flex-end;
    align-items:center;
    margin-top:auto;
    margin-bottom: auto;
    padding-top: 20px;
}
.sound a{
    padding: 20px;
    color:#fff;
}

</style>