<template>
  <div class="register-login" id="style-4">
      <!-- <h2>hello</h2> -->
      <div class="row">
          <div class="col-md-12">
                <div class="wp-register-login">
                    <div class="tab-reg-login nav nav-tabs py-4" id="myTab" role="tablist">
                        <a class="tab-register " id="register-tab" data-toggle="tab" href="#register" role="tab" aria-controls="register" aria-selected="false">Đăng ký</a>
                        <a class="tab-login active" id="login-tab" data-toggle="tab" href="#login" role="tab" aria-controls="login" aria-selected="true">Đăng nhập</a>
                    </div>
                     <div class="tab-content" id="myTabContent">

                        <div class="tab-pane fade" id="register" role="tabpanel" aria-labelledby="register-tab">
                            <form class="form-register">
                                <div class="form-group">
                                    <label for="name">Họ Tên</label>
                                    <input type="text" class="form-control" id="name">
                                    
                                </div>
                                <div class="form-group">
                                    <label for="password">Mật khẩu</label>
                                    <input type="password" class="form-control" id="password">
                                </div>
                                <div class="form-group">
                                    <label for="phone">Số Điện Thoại</label>
                                    <input type="text" class="form-control" id="phone">
                                </div>
                                <div class="form-group form-check text-center">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                    <label class="form-check-label" for="exampleCheck1">nhớ tôi</label>
                                </div>
                                <button type="submit" class="btn btn-register-login mt-3">Đăng ký</button>
                            </form>
                        </div>

                        <div class="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab">
                            <form class="form-login">
                                <div class="form-group">
                                    <label for="phone">Số Điện Thoại</label>
                                    <input type="text" class="form-control" id="phone">
                                </div>
                                 <div class="form-group">
                                    <label for="password">Mật khẩu</label>
                                    <input type="password" class="form-control" id="password">
                                </div>
                                
                                <button type="submit" class="btn btn-register-login">Đăng Nhập</button>
                            </form>
                        </div>
                        
                    </div>
                </div>
                
               
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/*======= custom thanh scroll ====== */
#style-4::-webkit-scrollbar {
    width: 6px;
    height:10px;
    background-color: #eee4ff;
}
#style-4::-webkit-scrollbar-thumb {
    background-color: #868686;
}

/*======= end scroll ====== */
.register-login{
    height: 600px;
    overflow-x: hidden;
    overflow-y: scroll;
    margin-top: 10px;
}
.wp-register-login{
    width: 500px;
    min-height: 500px;
    margin-left: auto;
    margin-right: auto;
}
.tab-reg-login{
    display:flex;
    justify-content: space-between;
}
.form-group {
    color: #fff;
    border: none;
}
.form-group input{
    background:none;
    color: #fff;
    border: none;
    background:#21192c;
    outline: none;

}
.btn-register-login{
    background:#651fa9;
    padding: 10px 15px;
    width: 100%;
    font-size: 20px;
    color: #fff;
}
.tab-register,.tab-login{
    background:#651fa9;
    border-radius: 5px;
    padding: 3px 8px;
    color: #fff;
    text-decoration: none;
}
</style>