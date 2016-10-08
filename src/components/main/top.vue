<template>
    <div>
        <el-button type="text" class="logout" @click.native.prevent="logout">退出登录</el-button>
    </div>
</template>
<script lang="babel">
	export default {

         methods: {
                logout(index){
                    this.$router.replace({name: 'index'})
                }
            }
	}
</script>
<style type="text/css" scoped>
	.logout {
        position: absolute;
        right: 20px;
        top: 10px;
    }
</style>