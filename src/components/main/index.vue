<template>
    <div class="container">
      <el-row>
          <el-col :span="24">
              <div :style="{ height: topheight + 'px' }"  class="grid-top bg-top">
                  <top></top>
              </div>
          </el-col>
      </el-row>
      <el-row>
          <el-col :span="4">
              <div class="grid-left bg-left" :style="{ height: contentheight + 'px' }">
                  <el-menu default-active="/main/welcome" :unique-opened="uniqueOpened" :router="userRouter" class="el-menu-vertical-demo" @open="handleopen" @close="handleclose" >
                    <el-menu-item index="/main/welcome">欢迎页</el-menu-item>
                    <el-submenu index="1">
                      <template slot="title">彩票管理</template>
                      <el-menu-item-group title="分组一">
                        <el-menu-item index="/main/example1">彩票种类管理</el-menu-item>
                        <el-menu-item index="/main/example2">选项2</el-menu-item>
                      </el-menu-item-group>
                      <el-menu-item-group title="分组2">
                        <el-menu-item index="1-3">选项3</el-menu-item>
                      </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">导航二</template>
                        <el-menu-item index="2-1">选项4</el-menu-item>
                        <el-menu-item index="2-2">选项5</el-menu-item>
                        <el-menu-item-group title="分组2-1">
                          <el-menu-item index="2-3">选项6</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                  </el-menu>
              </div>
          </el-col>
          <el-col :span="20">
              <div :style="{ height: contentheight + 'px' }" class="grid-right bg-right">
                  <transition name="fade" mode="out-in">
                    <router-view></router-view>
                  </transition>
              </div>
          </el-col>
      </el-row>
    </div>
</template>
<script lang="babel">
  import top from "./top"
	export default {

    components : {
      top
    },

    data() {
      return {
         userRouter : true,
         uniqueOpened : false,
         topheight : 60,
      }
    },

    computed: {
      contentheight: function () {
        return $(window).height() - this.topheight
      }
    },

     methods: {
            handleselect(index, indexPath) {
              console.log("handleselect", index)
              this.$router.replace(index)
            },
            handleopen(index){
              console.log("handleopen", index)
            },
            handleclose(index){
              console.log("handleclose index", index)
            }
        }
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
  .grid-top {
      width: 100%
  }
  .bg-top {
      background-color: #475669;
  }
  .grid-left {
      width: 100%
  }
  .bg-left {
      background-color: #D3DCE6;
  }
  .grid-right {
      width: 100%
  }
  .bg-right {
      background-color: #F9FAFC;
  }
  .el-menu-item.is-active {
    color: #20a0ff;
  }
</style>
