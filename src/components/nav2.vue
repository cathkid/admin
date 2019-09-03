<template>
  <div align="center">
  		<h5 class="table-menu">用户列表</h5>
		  <div class="search-box">
				 <div class="el-col el-col-4">
						 <el-input v-model="search" placeholder="请输入账号查询"></el-input>
				 </div>
				<div class="el-col el-col-2">
				 		<el-button type="primary" @click="searchIp"> 搜 索 </el-button>
				</div>
			</div>
  	  <el-table  v-loading="loading"  :data="tableData" border style="width: 100% overflow: hidden ">
		    <el-table-column prop="id" sortable  label="用户id" > </el-table-column>
		    <el-table-column prop="username" label="账号" > </el-table-column>
		    <el-table-column  prop="time" sortable  label="时间"> </el-table-column>
				<el-table-column  prop="phone" sortable  label="手机"> </el-table-column>
		    <el-table-column  prop="vip" sortable label="会员"> </el-table-column>
				<el-table-column  prop="endtime" label="最后登录"> </el-table-column>
		    <el-table-column  prop="endviptime" label="会员到期时间"> </el-table-column>
				<el-table-column  prop="num" sortable label="总数量"> </el-table-column>
				<el-table-column  prop="email" sortable label="邮箱"> </el-table-column>
		    <el-table-column  label="操作"> 
		    	 <template slot-scope="scope">
		        <el-button  @click.native.prevent="del_data(scope.$index,tableData)" type="success" size="small">
		          	移除
		        </el-button>
		        <el-button @click.native.prevent="edit_data(scope.row.id,tableData[scope.$index])" type="success" size="small">
		          	编辑
		        </el-button>
		      </template>
		    </el-table-column>
		  </el-table>
  		
  		<div class="pagebox">
				<el-pagination background layout="total,prev, pager, next" :total="pagetotal" :page-sizes="pagesize"  @current-change="handleCurrentChange">
				</el-pagination>  			
  		</div>
  		
  		<el-dialog title="编辑" :visible.sync="dialogFormVisible">
			  <el-form >
			    <el-form-item label="账号"  >
			      <el-input v-model="guest[0].username" value="" auto-complete="off" placeholder="账号"></el-input>
			    </el-form-item>
		    	<el-form-item label="VIP状态"  >
			       <el-input v-model="guest[0].vip" value="" auto-complete="off" placeholder="会员等级"></el-input>
		    	</el-form-item>
		    	<el-form-item label="VIP到期时间"  >
		    		<div class="el-col el-col-12">
		    			 <el-date-picker value-format="yyyy-MM-dd HH:mm:ss"  v-model="guest[0].endviptime"  type="datetime"  placeholder="选择到期时间"> </el-date-picker>
		    		</div>
		    	</el-form-item> 
			  </el-form>
			  <div slot="footer" class="dialog-footer">
			    <el-button @click="dialogFormVisible = false">取 消</el-button>
			    <el-button type="primary" @click="submit2(guest[0].id)">确 定</el-button>
			  </div>
			</el-dialog>
  		
  </div>
</template>
 
<script>
  export default {
  	name:'nav2',
    data() {
      return {
        tableData: [],
        currentPage:1, 
        pagesize:10,
        pagetotal:100,
        loading:false,
        search:null,
        dialogFormVisible:false,
        guest:[{ "username":'', "vip":'' , "endviptime":''}],
      }
    },
    methods:{
    	 getinfo:function(){
    	 	 var params = new URLSearchParams() 
						 params.append('status', 'getuser')
				 var _this = this 		 
				 _this.loading=true 
    	 	 axios.post('/data/admindata.php',params)
				  .then(function (response) {
				  	_this.tableData = response.data.info 
				  	_this.pagetotal = parseInt(response.data.total.AllNum) 
				  	_this.tableData.time = _this.getLocalTime(_this.tableData.time) 
				  	_this.loading=false 
				  })
				  .catch(function (response) {
				    console.log(response) 
				  }) 
    	 },
			 handleCurrentChange: function(currentPage){ 
			 this.currentPage = currentPage 
			 var _this = this 	
			 _this.loading=true 
			 var params = new URLSearchParams() 
					 params.append('status', 'pageuser')
					 params.append('page', currentPage) 
			 		 axios.post('/data/admindata.php',params)
				  .then(function (response) {
				  	_this.tableData = response.data.info 
				  	_this.tableData.time = _this.getLocalTime(_this.tableData.time) 
				  	_this.loading=false 
				  })
			 
			 },
			 	getLocalTime:function(nS) {     
		    		return new Date(parseInt(nS) * 1000).toLocaleString().substr(0,17) 
		    },
		    del_data:function(index,rows){
		    		if(confirm('确认删除?')){
		    			 rows.splice(index,1) 
		    		}
		    },
      searchIp:function(){
		    if(this.search == null){
						return;
				}
        var params = new URLSearchParams() 
        params.append('status', 'searchUser')
        params.append('username',this.search)
        var _this = this 
        _this.loading=true 
        axios.post('/data/admindata.php',params)
          .then(function (response) {
            _this.tableData = response.data.info 
            _this.pagetotal = parseInt(response.data.total.AllNum) 
            _this.tableData.time = _this.getLocalTime(_this.tableData.time) 
            _this.loading=false 
          })
          .catch(function (response) {
            console.log(response) 
          }) 
			},edit_data:function(id,rows){
		    	 console.info(rows)
		    	 this.guest[0] = rows;
		    	 this.dialogFormVisible = true
	    },
	    submit2:function(id){
	    	var _this = this
	    	var params = new URLSearchParams() 
					 params.append('status', 'edit_guest')
					 params.append('username',_this.guest[0].username)
					 params.append('vip', _this.guest[0].vip)
					 params.append('endviptime', _this.guest[0].endviptime)
					 params.append('id',_this.guest[0].id)
					 var _this = this 		 
					 _this.loading=true 
	    	 	 axios.post('../data/admindata.php',params)
					  .then(function (response) {
					  	alert('修改成功！');
					  	_this.getinfo() 
					  	_this.loading=false
					  	_this.dialogFormVisible = false
					  })
					  .catch(function (response) {
					    console.log(response) 
					  }) 
	    } 
    },
    mounted:function(){
    	 this.getinfo() 
    } 
  }
</script>