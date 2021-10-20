<template>
    <div class="list-main-music" id="style-2">
        <div class="row">
            <div class="col-md-4">
                <div class="text-center">
                    <div class="cd">
                        <div class="cd-thumb">
                            <img src="https://i.ytimg.com/vi/xypzmu5mMPY/maxresdefault.jpg" alt="" class="img-song">
                        </div>
                    </div>
                    <h5 class="name-song">Muộn Rồi Mà Sao Còn Sơn tùng mtp</h5>
                    <p>Nổi Bật</p>
                    <p class="text-secondary">166k nguoi yeu thich</p>
                    <button class="btn bg-btn">Tạm dừng</button>
                    <div class="add-playlist">
                        <a href="">
                            <i class="far fa-heart"></i>
                        </a>
                        <a href="">
                            <i class="fas fa-ellipsis-h"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-md-8">
                <h6 class="my-4">Lời tựa Pop Ballad Việt của những năm gần đây có gì nổi bật? Và đây là câu trả lời...</h6>
                <div class="title-list-song">
                    <p>Bài hát</p>
                    <p>Thời gian</p>
                    <p>Mặc định</p>
                </div>
                <ul class="list-song" v-for="(item,index) in listSongs" :key="index">
                    <li class="song-item" >
                        <div class="song-item-link">
                            <img :src="item.img" alt="" class="img-song-item">
                            <div class="info-song">
                                <p>{{item.name}}</p>
                                <p> {{item.author}}</p> 
                            </div>
                        </div>
                        <div class="time">
                            <p> {{item.time}} </p>
                        </div>
                        <div class="follow">
                            <a href="">
                                <i class="far fa-heart"></i>
                            </a>
                            <a href="">
                                <i class="fas fa-ellipsis-h"></i>
                            </a>
                        </div>
                    </li>
                </ul>
                
            </div>
        </div>
    </div>
        <!-- end list main song -->
</template>

<script>

export default {
    data(){
        return{
            listSongs:[]
        }
    },
    created(){
        // lay danh sach bai hat tu rest API 
        fetch("http://localhost:3000/listSongs")
            .then(response =>{
                return response.json();
            })
            .then(data =>{
                this.listSongs = data;
            })

    }
   
}
</script>

<style>
/* =========== list music ============== */
.list-main-music{
    height: 600px;
    overflow-x: hidden;
    overflow-y: scroll;
    margin-top: 10px;
}
.cd{
    width :260px;
    margin: auto;
}
.cd-thumb{
    width: 100%;
    margin: auto;
    background-size: cover;
    animation: round;
    animation-duration: 2s;
    animation-delay: 1s;
    animation-iteration-count:Interval;
    
}
@keyframes round{
    0%{
        transform:rotate(0deg);
    }
    50%{
        transform:rotate(180deg);
    }
    100%{
        transform:rotate(360deg);
    }
    

}
.img-song{
    width: 250px;
    height: 250px;
    border-radius: 50%;
    margin-bottom: 10px;
}
.bg-btn{
    border-radius: 20px;
    background-color:#7200a1;
    color: #fff;
    padding: 5px 20px;
    margin-bottom: 20px;
}
.add-playlist a{
    color: #fff;
    padding: 12px;
    background-color: #2f2739;
    align-items: center;
    border-radius: 50%;
}
.title-list-song{
    display:flex;
    justify-content: space-between;
    width:800px;
    border-bottom: 1px solid #21192c ;
    margin-bottom: 20px;
    color: rgb(184, 184, 184);


}
.list-song{
    list-style: none;
    width:800px;
    margin-right: 50px;
    padding-left: 0;    
}
.song-item{
    display: flex;
    justify-content:space-between;  
    border-bottom: 1px solid #21192c ;
    padding: 5px 10px;
    cursor: pointer;
}
.song-item:hover{
    background-color: #2f2739;
    /* opacity: 0.2; */
}
.img-song-item{
    width: 55px;
    height: 55px;
    border-radius: 5px;
}
.song-item-link{
    display: flex;
    /* justify-content:space-between; */
    text-decoration: none;
    color: #fff;
}
.song-item-link:hover{
    text-decoration: none;
    color: rgb(134, 0, 218);
}
.info-song p{
    margin-bottom: 0;
    padding: 3px;
    align-items: center;
    margin-left: 10px;
}
.time p{
    color: rgb(167, 161, 161);
}
.follow a{
    text-decoration:none;
    color: #fff;
    margin: 0 10px;
    justify-content:center;
}

</style>