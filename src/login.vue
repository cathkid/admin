<template>
	<div class="main">
	  <div align="center">
	  	 <div class="login-box">
	  	 		 <h5>登录后台管理系统</h5>
	  	 		 <el-input type="text" v-model="input_name" placeholder="请输入账号"></el-input>
	  	 		 <el-input type="password"  v-model="input_password" placeholder="请输入密码"></el-input>
	  	 		 <el-button type="primary" @click="login">登录</el-button>
	  	 </div>
	  </div>
  </div>
</template>
 
<script>
  export default {
  	name:'login',
    data() {
      return {
      }
    },
    methods:{
    	login:function(){
    		
    	}
    },
    mounted:function(){
    } 
  }
</script>