<template>
    <div class="main-content">
        <!-- <h1>hello world cuong</h1> -->
        <div class="header-search">
            <div class="input-search">
                <i class="fas fa-search"></i>
                <input type="text" placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV ..." >
            </div>
            <div class="control-user">
                <a href="" class="upload"><i class="fas fa-upload"></i></a>
                <a href="" class="setting"><i class="fas fa-cog"></i></a>
                <a href="" class="info-user dropdown" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="">
                </a>
                 <div class="dropdown-menu m-3" aria-labelledby="dropdownMenuButton">
                     <router-link to="/registerLogin">
                            <a class="dropdown-item" href="#">Đăng Nhập</a>
                     </router-link>
                     <router-link to="/mymusic">
                            <a class="dropdown-item" href="#">Thông tin tài khoản</a>
                     </router-link>
                     <router-link to="/registerLogin">
                            <a class="dropdown-item" href="#">Đăng Xuất</a>
                     </router-link>
                   
                </div>
               
            </div>
        </div>
        <!-- end header search -->
        <!-- <ListSong/> -->
        <router-view></router-view>
        
    </div>
</template>

<script>
import ListSong from "./listSongComponent.vue"
export default {
    data(){
        return {

        }
    },
     components:{
        ListSong
    }
}
</script>

<style scoped>
/*======= custom thanh scroll ====== */
#style-2::-webkit-scrollbar {
    width: 6px;
    height:10px;
    background-color: #eee4ff;
}
#style-2::-webkit-scrollbar-thumb {
    background-color: #868686;
}

/*======= end scroll ====== */
h1{
    color: #fff;
}
.header-search{
    display:flex;
    justify-content:space-between;
    flex-grow:1;
    margin-top: 10px;
    margin-right:20px;
}
.input-search{
    position: relative;
    display:flex;
    background-color:#2f2739;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    width: 60%;
}
.input-search i{
    position: absolute;
    left:10px;
    top: 15px;
    /* padding: 20px; */
    cursor: pointer;
}
.input-search input{
    outline: none;
    border: none;
    background: none;
    color: #fff;
    padding: 10px 40px;
    width:100% ;
}
.control-user .upload,.setting{
    padding: 12px;
    border-radius: 20px;
    background-color:#2f2739;
    color: #ccc;
   
}
.info-user img{
    width: 40px;
    height: 40px;
    border-radius:50%;
}
.dropdown-menu{
    background: #5d2d97;
    color: #fff;
}
.dropdown-menu a{
    border-bottom: 1px solid #a099a8;
    color: #fff;
    text-decoration: none;
}
.dropdown-menu a:hover{
    background: #2f2739;
    color: #fff;
}
</style>