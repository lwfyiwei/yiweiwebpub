<template>
	<el-form :model="ruleForm2" ref="ruleForm2" label-width="100px" class="content">
    <el-form-item prop="email" label="邮箱">
      <el-input v-model="ruleForm2.email"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="pass">
      <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="checkPass">
      <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click.native.prevent="handleSubmit2">提交</el-button>
      <el-button @click.native.prevent="toLogin">登录</el-button>
    </el-form-item>
  </el-form>
</template>
<script lang="babel">
  export default {
    data() {
      return {
        ruleForm2: {
          email: '',
          pass : '',
          checkPass : ''
        }
      }
    },
    methods: {
            handleSubmit2() {
            },
            toLogin(){
                this.$router.push('/login')
            },
           
        }
}
</script>
<style type="text/css">

 .content{
        width: 600px;
        margin-left: auto;
        margin-right: auto;
  }
  
</style>