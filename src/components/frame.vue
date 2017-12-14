<template>
 		<div class="main">
 				<div class="header el-col el-col-24">
    			<div class="logo el-col el-col-8">后台管理系统</div>
    			<div class= "top_menu el-col el-col-12"></div>
    			<div class= "system_btn el-col el-col-4" @click="change_system">
    				<i class="system_menu el-icon-menu"> 信息中心 </i>
    			</div>
			  </div>
			  
			  <ul v-if="system_status" class="system_box">
			  	 <transition name="el-zoom-in-top">
				  	 <li>修改密码</li>
				  	 <li @click="unclick">注销登录</li>
			  	 </transition>
			  </ul>
			  
		    <div class="contents el-container el-col el-col-24">
		    	 	<div class="nav el-col el-col-4">
		    	 		<h5 class="nav-menu">菜单</h5>
		    	 		<div class="menu-title" @click="showNav">基本操作  <i class="float-right " :class="navClassIcon"></i> </div>
		    	 		<transition name="el-zoom-in-top">
			    	 		<ul v-if="navStatus">
			    	 			<li @click="router_path('/')">主页</li>
			    	 			<li @click="router_path('/login')">登陆页</li>
			    	 			<li @click="router_path('/frame/nav1')">生成列表</li>
			    	 		</ul>
		    	 		</transition>
		    		</div> 
		    		
		    	 <div class="main el-col el-col-20">
		    	 		 <router-view/>
		    	 </div>
		    </div>
 		</div>
</template>
 
<script>
export default {
  name: 'frame',
  data(){
  	return {	
  		navClassIcon:'el-icon-arrow-down',
  		navStatus:true,
  		system_status:false
  		}
  },
  mounted(){
  	
  },
  methods:{
  	showNav:function(){
  		if(this.navClassIcon == 'el-icon-arrow-right'){
  				this.navClassIcon = 'el-icon-arrow-down'
  		}else{
  				this.navClassIcon = 'el-icon-arrow-right'
  		}
  		
  		if(this.navClassIcon == 'el-icon-arrow-right'){
  			 this.navStatus = false;
  		}else{
  			this.navStatus = true;
  		}
  	},
  	router_path:function(url){
  		this.$router.push({ path:url })
  	},
  	change_system:function(){
  		 this.system_status = !this.system_status;
  	}
  }
}
</script>