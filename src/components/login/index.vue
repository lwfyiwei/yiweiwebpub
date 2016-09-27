<template>
    <div class="container">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
</template>
<script lang="babel">
	export default {

	}
</script>
<style type="text/css">
	.container {
        width: 700px;
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
