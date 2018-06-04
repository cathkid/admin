<template>
  <div align="center">
  		<h5 class="table-menu">用户生成列表</h5>
		  <div class="search-box">
				 <div class="el-col el-col-4">
						 <el-input v-model="search" placeholder="请输入用户名查询"></el-input>
				 </div>
				<div class="el-col el-col-2">
				 		<el-button type="primary" @click="searchIp"> 搜 索 </el-button>
				</div>
			</div>
  	  <el-table  v-loading="loading"  :data="tableData" border style="width: 100% overflow: hidden ">
		    <el-table-column prop="id" label="用户id" > </el-table-column>
		    <el-table-column prop="ip" label="用户ip" > </el-table-column>
		    <el-table-column  prop="num" label="数量"> </el-table-column>
				<el-table-column  prop="setname" label="设置二维码名称"> </el-table-column>
		    <el-table-column  prop="username" label="用户名"> </el-table-column>
		    <el-table-column  prop="time" label="时间"> </el-table-column>
				<el-table-column   label="logo">
						<template scope="scope">
							<img :src="scope.row.logo" width="40" height="40" />
						</template>
				</el-table-column>
				<el-table-column label="数据" >
					<template scope="scope">
						<el-popover trigger="hover" placement="top">
							<p> {{ scope.row.value }}</p>
							<div slot="reference" class="name-wrapper">
								<el-tag>生成数据</el-tag>
							</div>
						</el-popover>
					</template>
				</el-table-column>
		    <el-table-column  label="操作"> 
		    	 <template slot-scope="scope">
		        <el-button @click.native.prevent="del_data(scope.$index,tableData)" type="text" size="small">
		          	移除
		        </el-button>
		      </template>
		    </el-table-column>
	  </el-table>
  		
  		<div class="pagebox">
				<el-pagination background layout="total,prev, pager, next" :total="pagetotal" :page-sizes="pagesize"  @current-change="handleCurrentChange">
				</el-pagination>  			
  		</div>
  		
  </div>
</template>
 
<script>
  export default {
  	name:'nav1',
    data() {
      return {
        tableData: [],
        currentPage:1, 
        pagesize:10,
        pagetotal:100,
        loading:false,
        search:null
      }
    },
    methods:{
    	 getinfo:function(){
    	 	 var params = new URLSearchParams() 
						 params.append('status', 'getinfo') 
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
					 params.append('status', 'page') 
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
        params.append('status', 'searchIp') 
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
			}
    },
    mounted:function(){
    	 this.getinfo() 
    } 
  }
</script>