<template>
	<div id="app">
		<div class="row">
			<div class="col-md-2">
				<SideBar/>
			</div>
			<div class="col-md-10">
				<Content/>
				
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<AudioPlay/>

			</div>
		</div>
	</div>
</template>

<script>
import Content from "./components/contentComponent.vue";
import SideBar from "./components/sidebarComponent.vue";
import AudioPlay from "./components/audioPlayComponent.vue";
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
	Content,
    SideBar,
	AudioPlay
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #170f23;
  /* background: #75ba75; */
  color: #fff;
  overflow-x: hidden;
  height: 100vh;

}


</style>
