<template>
    <div class="container">
      <transition name="fade" mode="out-in">
        <router-view class="router"></router-view>
      </transition>
    </div>
</template>
<style type="text/css">
	.container {
        width: 600px;
        margin-left: auto;
        margin-right: auto;
    }
    .router{
    	width: 600px;
        margin-left: auto;
        margin-right: auto;
    }
    .fade-enter-active, .fade-leave-active {
	  transition: all .1s ease;
	}
	.fade-enter, .fade-leave-active {
      opacity: 0;
	}
</style>
