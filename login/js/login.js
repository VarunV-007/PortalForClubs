




xhr=new XMLHttpRequest();
srn=document.getElementById("srn");
pass=document.getElementById("pass");
role=document.getElementById("role");
hdiv=document.getElementById("hdiv");

//console.log(role.innerHTML);
//console.log(role.value);

function chk(){
	 
	 //console.log("here2");
	 //console.log(srn.value+pass.value+role.value);
	if(srn.value && pass.value && (role.innerHTML=='Student' || role.innerHTML=='Admin'))
	{
		//console.log("pass.value");
	xhr.onreadystatechange=update;
	xhr.open("POST","../php/validate.php",true);
	xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded")
	xhr.send("srn="+srn.value+"&pass="+pass.value+"&role="+role.innerHTML);
	
	}
	else if(!srn.value)
	{
		hdiv.style.visibility="visible";
		hdiv.innerHTML="Enter Srn";
		hdiv.style.color="red";
		
	}
	else if(!pass.value)
	{
		hdiv.style.visibility="visible";
		hdiv.innerHTML="Enter Password";
		hdiv.style.color="red";
		
	}
	
	
}
function update()
{
	
	if(this.readyState==4 && this.status==200){
		var res=this.responseText;
		//console.log(res)
		if(res=="-1")
		{

			hdiv.style.visibility="visible";
			hdiv.style.color="red";
			hdiv.innerHTML="Invalid Srn or Password";
			
		
			srn.value="";
			pass.value="";
		}
		else if(res=="1")
			
		{	
				
				hdiv.innerHTML="";
				if(role.innerHTML=="Admin"){
					console.log("here");								
					window.location="../../admin/html/admin.html";
				}
				else if(role.innerHTML=="Student")
					window.location="../../student/html/student.html";
			
		}
	
	}
}
function cr()
{
	
	hdiv.style.visibility="hidden";
	hdiv.innerHTML="";
}

if ('addEventListener' in window) {
window.addEventListener('load', function() { document.body.className = document.body.className.replace(/\bis-preload\b/, ''); });
document.body.className += (navigator.userAgent.match(/(MSIE|rv:11\.0)/) ? ' is-ie' : '');
}	





