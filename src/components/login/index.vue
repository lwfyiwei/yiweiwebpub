<template>
    <div class="container" :style="{ height: contentheight + 'px'}">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
      <div v-loading.fullscreen="fullscreenLoading"></div>
    </div>
</template>
<script lang="babel">
	export default {

		computed: {
		  contentheight: function () {
		     return $(window).height()
		  },
		  fullscreenLoading: function(){
		  	 return this.$store.state.loading
		  }
		},
	}
</script>
<style type="text/css" scoped>
	.container {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
    }
    .fade-enter-active, .fade-leave-active {
	  transition: all .1s ease 0;
	}
	.fade-enter, .fade-leave-active {
      opacity: 0;
	}
</style>
