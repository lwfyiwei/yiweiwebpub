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
    export default {
        data() {
            return {
                form: {
                    username: '',
                    password: '',
                }
            }
        },
        methods: {
            submitLogin() {

                if(!this.form.username || !this.form.password){
                    this.errorMsg("请输入用户名和密码")
                    return false
                }
                this.form.url = 'api'
                api.getData(this.form).then(data => {
                    this.$router.replace('/register')
                }, error => {
                    this.errorMsg("登录报错，"+error);
                })

            },
            toRegister(){
                this.$router.replace('/register')
            },
            errorMsg(msg) {
                this.$message({
                  showClose: true,
                  duration:2000,
                  message: msg,
                  type: 'error'
                });
            }
        }
    }
</script>
<style type="text/css">
    .login{
        width: 600px;
        margin-left: auto;
        margin-right: auto;
    }
    .content{
        width: 200px;
        margin-left: auto;
        margin-right: auto;
    }
</style>
