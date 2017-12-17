<template>
  <div id="app">
	 <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
  	return {	
  		navClassIcon:'el-icon-arrow-down',
  		navStatus:true
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
  			 this.navStatus = false 
  		}else{
  			this.navStatus = true 
  		}
  	}
  }
}
</script>

 
