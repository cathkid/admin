<template>
  <div align="center">
  		<h5 class="table-menu">管理信息中心</h5>
		  <div class="search-box">
				 <div class="el-col el-col-4">

				 </div>
			</div>
			
  	  <el-table  v-loading="loading"  :data="tableData"  style="width: 100%;overflow: hidden ">
		    <el-table-column  prop="countNum" label="生成总条数" > </el-table-column>
				<el-table-column  prop="countTodayNum" label="今日生成总条数"> </el-table-column>
				<el-table-column  prop="newuser" label="今日活跃用户"> </el-table-column>
				<el-table-column  prop="countMemberToday" label="今日注册人数" > </el-table-column>
		    <el-table-column  prop="countMember" label="注册人数" > </el-table-column>
				<el-table-column  prop="vipNum" label="VIP会员"> </el-table-column>
				<el-table-column  prop="countMonthMoney" label="会员当月金额"> </el-table-column>
				<el-table-column  prop="countMoney" label="会员总金额"> </el-table-column>
		  </el-table>
  </div>
</template>
 
<script>
  export default {
  	name:'nav3',
    data() {
      return {
        tableData: [],
        loading:false
      }
    },
    methods:{
    	 getinfo:function(){
    	 	 var params = new URLSearchParams() 
						 params.append('status', 'getcenter')
				 var _this = this 		 
				 _this.loading=true 
    	 	 axios.post('/data/admindata.php',params)
				  .then(function (response) {
				  	_this.tableData = response.data.info ;
				  	_this.loading=false 
				  })
				  .catch(function (response) {
				    console.log(response) 
				  }) 
    	 },
			 	getLocalTime:function(nS) {     
		    		return new Date(parseInt(nS) * 1000).toLocaleString().substr(0,17) 
		    },
		    del_data:function(index,rows){
		    		if(confirm('确认删除?')){
		    			 rows.splice(index,1) 
		    		}
		    }
    },
    mounted:function(){
    	 this.getinfo() 
    } 
  }
</script>