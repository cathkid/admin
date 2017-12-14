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
                <div class="el-col el-col-4">
                     <el-col :span="24">
                        <el-menu
                          default-active="2"
                          class="el-menu-vertical-demo"
                          @open="handleOpen"
                          @close="handleClose">
                          <el-submenu index="1">
                            <template slot="title">
                              <i class="el-icon-location"></i>
                              <span>基本操作</span>
                            </template>
                            <el-menu-item-group>
                              <template slot="title">信息管理</template>
                              <el-menu-item index="1-1" @click="router_path('/frame/nav1')" >生成列表</el-menu-item>
                              <el-menu-item index="1-2" @click="router_path('/')" >主页 </el-menu-item>
                              <el-menu-item index="1-3" @click="router_path('/login')"> 登陆页 </el-menu-item>
                            </el-menu-item-group>
                          </el-submenu>
                          <el-menu-item index="2">
                            <i class="el-icon-menu"></i>
                            <span slot="title">导航二</span>
                          </el-menu-item>
                          <el-menu-item index="3">
                            <i class="el-icon-setting"></i>
                            <span slot="title">导航三</span>
                          </el-menu-item>
                        </el-menu>
                      </el-col>
                    </el-row>
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
  		system_status:false
  		}
  },
  mounted(){
  	
  },
  methods:{
  	router_path:function(url){
  		this.$router.push({ path:url })
  	},
  	change_system:function(){
  		 this.system_status = !this.system_status;
  	},
  	handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>