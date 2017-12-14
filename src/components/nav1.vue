<template>
  <div align="center">
  		<h5 class="table-menu">生成用户列表</h5>
  	  <el-table  v-loading="loading"  :data="tableData" border style="width: 100%;overflow: hidden;">
		    <el-table-column prop="id" label="用户id" > </el-table-column>
		    <el-table-column prop="ip" label="用户ip" > </el-table-column>
		    <el-table-column  prop="num" label="数量"> </el-table-column>
		    <el-table-column  prop="time" label="时间"> </el-table-column>
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
      }
    },
    methods:{
    	 getinfo:function(){
    	 	 var params = new URLSearchParams();
						 params.append('status', 'getinfo');
				 var _this = this;		 
				 _this.loading=true;
    	 	 axios.post('/data/admindata.php',params)
				  .then(function (response) {
				  	_this.tableData = response.data.info;
				  	_this.pagetotal = parseInt(response.data.total.AllNum);
				  	_this.tableData.time = _this.getLocalTime(_this.tableData.time);
				  	_this.loading=false;
				  })
				  .catch(function (response) {
				    console.log(response);
				  });
    	 	 
    	 },
			 handleCurrentChange: function(currentPage){ 
			 this.currentPage = currentPage;
			 var _this = this;	
			 _this.loading=true;
			 var params = new URLSearchParams();
					 params.append('status', 'page');
					 params.append('page', currentPage);
			 		 axios.post('/data/admindata.php',params)
				  .then(function (response) {
				  	_this.tableData = response.data.info;
				  	_this.tableData.time = _this.getLocalTime(_this.tableData.time);
				  	_this.loading=false;
				  })
			 
			 },
			 	getLocalTime:function(nS) {     
		    		return new Date(parseInt(nS) * 1000).toLocaleString().substr(0,17) 
		    },
		    del_data:function(index,rows){
		    		if(confirm('确认删除?')){
		    			 rows.splice(index,1);
		    		}
		    }
    },
    mounted:function(){
    	 this.getinfo();
    } 
  }
</script>