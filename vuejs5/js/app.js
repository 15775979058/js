var saveId = "";

var ss = new Vue({
	el: '#app',
	data:function(){
		return {
			id:'',
			regtime:'',
			registerDeviceId:'',
			openid:'',
			list:[]	
		}
	},
	created:function(){
		var vm = this;
		$.getJSON(getdata,function(data){
			if(data.code == 200){
				vm.list = data.msg;
				console.log("yes");
			}else{
				alert("error");
			}
			
		  
		});
	},
	methods:{
		loadmore:function(){
			var vm = this;
			$.getJSON(getdata,function(data){
				if(data.code == 200){
					vm.list = data.msg;
					console.log("yes");
				}else{
					alert("error");
				}
				
			  
			});
		},
		createTask:function(e){

			e.preventDefault();
			$.post(adddata,{id:ss.id,regtime:ss.regtime,registerDeviceId:ss.registerDeviceId,openid:ss.openid},function(response){
				if(response.code == 200){
					alert(response.msg);	
				}else if(response.code == 404){
					alert(response.msg);
				}else{
					alert(response.msg);
				}
				
			});
		},
		deleteTask:function(task){
			$.post(deldata,{id:task.id},function(response){
				if(response.code == 200){
					alert(response.msg);	
				}else if(response.code == 404){
					alert(response.msg);
				}else{
					alert(response.msg);
				}
			})
		},
		saveTask:function(task){
			saveId = task.id;
			window.location.href="demo.html?id="+saveId+"";
		}
	}

});



window.setInterval(function(){ 
ss.loadmore(); 
}, 3000); 



