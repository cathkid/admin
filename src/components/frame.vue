<template>
 		<div class="main">
 				<!-- 头部  -->
 				<div class="header el-col el-col-24">
 				<!-- logo  -->	
    			<div class="logo el-col el-col-8">后台管理系统</div>
    			<div class= "top_menu el-col el-col-13"></div>
    			<div class= "system_btn el-col el-col-3" >
    			<!-- 下拉菜单  -->	
    				<el-dropdown  trigger="click"  @command="handleCommand" >
					      <span class="el-dropdown-link">
					        	{{username}},操作中心<i class="el-icon-arrow-down el-icon--right"></i>
					      </span>
					      <el-dropdown-menu slot="dropdown">
									<el-dropdown-item   ><a href="/">前端首页</a></el-dropdown-item>
					        <el-dropdown-item  command="0">注销</el-dropdown-item>
					        <el-dropdown-item  command="1">修改密码</el-dropdown-item>
					      </el-dropdown-menu>
					 </el-dropdown>
    			</div>
			  </div>
			  
		    <div class="contents el-container el-col el-col-24">
           <div class="el-col el-col-3">
                	 <!-- 左侧菜单  -->
                     <el-col :span="24">
                        <el-menu
                          default-active="2"
                          class="el-menu-vertical-demo"
						  :default-openeds="openeds"
                          @open="handleOpen"
                          @close="handleClose">
                          <el-submenu index="1">
                            <template slot="title">
                              <i class="el-icon-location"></i>
                              <span>基本操作</span>
                            </template>
                            <el-menu-item-group>
							  <el-menu-item  index="1-1" @click="router_path('/frame/nav4')" >汇总信息</el-menu-item>
                              <el-menu-item  index="1-2" @click="router_path('/frame/nav1')" >生成列表</el-menu-item>
                              <el-menu-item  index="1-9" @click="router_path('/frame/nav9')" >活码列表</el-menu-item>
                              <el-menu-item  index="1-10" @click="router_path('/frame/nav10')" >短链列表</el-menu-item>
                              <el-menu-item  index="1-7" @click="router_path('/frame/nav7')" >图文码列表</el-menu-item>
                              <el-menu-item index="1-3" @click="router_path('/frame/nav2')" >用户列表 </el-menu-item>
                              <el-menu-item index="1-4" @click="router_path('/frame/nav3')" >会员充值</el-menu-item>
							  <el-menu-item index="1-5" @click="router_path('/frame/nav5')" >咨询</el-menu-item>
							  <el-menu-item index="1-8" @click="router_path('/frame/nav8')" >充值日志</el-menu-item>
							  <el-menu-item index="1-6" @click="router_path('/frame/nav6')" >日志</el-menu-item>
                            </el-menu-item-group>
                          </el-submenu>
<!--                          <el-menu-item index="2">
                            <i class="el-icon-menu"></i>
                            <span slot="title">导航二</span>
                          </el-menu-item>-->
                        </el-menu>
                      </el-col>
                    </el-row>
                </div>
		    		
		    	 <div class="main el-col el-col-21">
		    	 		 <!-- 内容  -->
		    	 		 <router-view/>
		    	 </div>
		    </div>
		    
		    <!-- 修改密码  -->
		    <el-dialog title="修改密码" :visible.sync="dialogFormVisible">
			  <el-form :model="form">
			    <el-form-item type="password" label="新密码" :label-width="formLabelWidth">
			      <el-input v-model="newpass" auto-complete="off"></el-input>
			    </el-form-item>
			  </el-form>
			  <div slot="footer" class="dialog-footer">
			    <el-button @click="dialogFormVisible = false">取 消</el-button>
			    <el-button type="primary" @click="sureEditPass">确 定</el-button>
			  </div>
			</el-dialog>
			
			<el-dialog
			  title="提示信息"
			  :visible.sync="centerDialogVisible"
			  width="30%"
			  center>
			  <span>{{message}}</span>
			  <span slot="footer" class="dialog-footer">
			    <el-button @click="centerDialogVisible = false">取 消</el-button>
			    <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
			  </span>
			</el-dialog>
 		</div>
</template>


<script>
export default {
  name: 'frame',
  data(){
  	return {
  	  username:null,
  		system_status:false,
  		dialogFormVisible:false,
  		newpass:null,
  		centerDialogVisible:false,
  		message:null,
      openeds:['1']
  		}
  },
  mounted(){
  	this.username = localStorage.login
  },
  methods:{
  	router_path:function(url){
  		this.$router.push({ path:url })
  	},
  	handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    unlogin:function(){
    	localStorage.login = ''
    	this.$router.push('/login')
    },
    editpass:function(){
    	this.dialogFormVisible = true
    },
    sureEditPass:function(){
    	if(this.newpass == null){
    		this.message = '密码不得为空！'
    		this.centerDialogVisible = true
    		return;
    		
    	}
    	this.message = '密码修改成功！'
    	this.centerDialogVisible = true
    	this.dialogFormVisible = false
    },
    handleCommand(command) {
        if(command == '0'){
        	this.unlogin()
        }
        if(command == '1'){
        	this.editpass()
        }
    }
  }
}
</script>