function YEAH()
{
	var times;
	var Cong=document.getElementById('Cong');
	Cong.innerHTML='';
	for(times=0;times<document.getElementById('Ones').value;times++)
	{
//		alert();
		Cong.innerHTML += "<div class=\"alert alert-info\"><strong>"+Math.floor(Math.random()*document.getElementById('Range').value+1)+"</strong></div>"
	}
	
}