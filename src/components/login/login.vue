<template>
	<div class="login">
        <el-form :model="form" ref="form" label-width="100px" class="content">
            <el-form-item prop="email" label="用户名">
              <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="form.password" placeholder="请输入密码" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click.native.prevent="submitLogin">登录</el-button>
              <el-button @click.native.prevent="toRegister">注册</el-button>
            </el-form-item>
          </el-form>
	</div>
</template>
<script lang="babel">
    import api from '../../api'
    import { mapActions, mapGetters } from 'vuex'
    export default {
        mounted: function () {
            this.form.username = this.$store.state.user.userName + this.$store.state.test;
        },
        data() {
            return {
                form: {
                    username:'',
                    password: '',
                }
            }
        },
        computed : {
            ...mapGetters({
                getUserName : 'getUserName'
            })
        },
        methods: {
            ...mapActions({
              updateUserName: 'updateUserName'
            }),
            submitLogin() {

                if(!this.form.username || !this.form.password){
                    this.errorMsg("请输入用户名和密码")
                    return false
                }
                api.getDataByVR('api', this.form).then(data => {
                    this.updateUserName(this.form.username)
                    this.$router.replace({name: 'main'})
                }, error => {
                    this.errorMsg("登录报错，"+error);
                })

            },
            toRegister(){
                this.$router.replace({name: 'regi'})
            },
            errorMsg(msg) {
                this.$message({
                  showClose: true,
                  duration:2000,
                  message: msg,
                  type: 'error'
                });
            }
        },
        beforeRouteEnter (route, redirect, next) {
            console.log('login beforeRouteEnter')
            next(vm => {
                console.log('hello world')
            })
        },
        beforeRouteLeave (route, redirect, next) {
            console.log('login beforeRouteLeave',this.form.username)
            next()
        },
        watch: {
            $route() {
                console.log('login watch $route')
            }
        }
    }
</script>
<style>
    .login {
        width: 600px;
        margin-left: auto;
        margin-right: auto;
    }
    .content {
        width: 600px;
        margin-left: auto;
        margin-right: auto;
    }
</style>
