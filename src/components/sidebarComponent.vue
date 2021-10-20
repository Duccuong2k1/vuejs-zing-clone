<template>
  <div class="sidebar">
      <div class="logo">
          <a href="/">
              <h3>Cdd<span class="">Song</span></h3>
            <!-- <img src="../assets/logomusic.PNG" alt=""> -->
          </a>
      </div>
      <ul class="list-carouse">
        <li>
            <router-link to="/mymusic">
                <a href=""><i class="fas fa-address-book"></i>Cá Nhân</a>
            </router-link>
        </li>
        <li class="active">
            <router-link to="/">
                <a href="" class=""><i class="fab fa-bandcamp"></i> Khám Phá</a>
            </router-link>
        </li>
        <li>
            <router-link to="">
                <a href=""><i class="far fa-kiss-wink-heart"></i> #loveChart</a>
            </router-link>
        </li>
        <li>
            <router-link to="">
                <a href=""><i class="fab fa-audible"></i>Radio</a>
            </router-link>
        </li>
      </ul>
      <div class="scroll-list" id="style-1">
          <ul>
              <li><a href=""><i class="fas fa-music"></i> Nhạc Mới</a></li>
              <li><a href=""><i class="fab fa-creative-commons-sampling"></i> Thể Loại</a></li>
              <li><a href=""><i class="far fa-star"></i> Top 100</a></li>
              <li><a href=""><i class="fas fa-play-circle"></i> MV</a></li>
              <li><a href="" class="text-success">Thư Viện</a> </li>
              <li><a href="">Bài hát</a></li>
              <li><a href="">Playlist</a></li>
              <li><a href="">Gần Đây</a></li>
          </ul>
      </div>
      <div class="create-list">
          <a href="" data-toggle="modal" data-target="#create-list-music"><i class="fas fa-plus"></i>Tạo playlist mới</a>
      </div>
      <!-- Modal -->
        <div class="modal fade" id="create-list-music" tabindex="-1" aria-labelledby="create-list-musicLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content bg-playlist ">
                <div class="modal-header text-center">
                    <h5 class="modal-title " id="create-list-musicLabel">Tạo Playlist Mới</h5>
                </div>
                <div class="modal-body">
                    <input type="text" class="playlist-input mb-3" placeholder="Nhập tên playlist">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                        <label for="">Công khai</label>
                        <p>mọi người trong playlist này đều thấy</p>
                    </div>
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                        <label for="">Phát ngẫu nhiên</label>
                        <p>luôn phát ngẫu nhiên tất cả các bài hát</p>
                    </div>
                </div>
                <div class="modal-footer">
                    
                    <button type="button" class="btn btn-playlist">Tạo Mới</button>
                </div>
            </div>
        </div>
        </div>
  </div>
</template>

<script>
export default {
    data() {
        return{

        }
    },
    method() {

    }
}
</script>

<style scoped>


.sidebar{
    padding: 10px;
    background: #231b2e;
    height: 90vh;
}
.logo a img{
    width: 50px;
    height: 50px;
}
.logo a {
  color: #f78f50;
  text-decoration: none;
  font-weight: bold;
}
.logo a span{
  color: #fff;
  text-decoration: none;
}
ul.list-carouse{
    list-style: none;
    padding-left: 0;
    margin-top: 20px;
    border-bottom: 1px solid rgb(233, 233, 233);
}
ul.list-carouse li{
    margin: 10px 0;
    padding: 10px 0;
}
ul.list-carouse li a{
    padding: 10px;
    text-decoration: none;
    color: #ccc;
}
.active{
    background-color: #3a3344;
    border-left: 4px solid #7b1dff;
    color: #fff;
}
ul.list-carouse li a i{
    margin-right: 10px;
}
/*======= custom thanh scroll ====== */
#style-1::-webkit-scrollbar {
    width: 6px;
    background-color: #eee4ff;
}
#style-1::-webkit-scrollbar-thumb {
    background-color: #20013d;
}

/*======= end scroll ====== */

.scroll-list{
    padding-bottom: 10px;
    height:300px;
    width:auto;
    overflow-y:auto;
    border-bottom: 1px solid rgb(233, 233, 233);

}
.scroll-list ul{
    list-style: none;
    padding-left: 0;
    margin-top: 20px;
}
.scroll-list ul li{
    margin: 10px 0;
    padding: 10px 0;
    
}
.scroll-list ul li a{
    padding: 10px;
    text-decoration: none;
    color: #ccc;
}

.scroll-list ul li a i{
    margin-right: 10px;
}
.create-list{
    margin:20px 0;
}
.create-list a{
    color:#fff;
    font-size:17px;
    text-decoration: none;
}
.create-list a i{
    margin-right:10px;
}
.modal-dialog{
    width: 350px;
}
.form-switch{
    font-size: 12px;
    color:rgb(201, 201, 201);
}
.bg-playlist{
    background-color:#7b1dff;
}
.btn-playlist{
    background-color:#50278a;
    color:#fff;
}
.playlist-input{
    width: 100%;
    /* background-color:#9481af; */
    outline: none;
    border-radius:5px ;
    border: none;
    padding: 10px;
    /* background: none; */
}
</style>