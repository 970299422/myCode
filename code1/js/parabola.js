

//parabola(box, {left:300, top:200});

//抛物线运动
function parabola(obj, target){
	
	//抛物线公式： y = a*x*x + b*x + c;
	// 经过原点（0,0） =>  0=a*0*0 + b*0 + c; => c=0
	// y = a*x*x + b*x;
	
	//直接给定a的值
	var a = 0.01; 
	
	//终点在坐标系的位置
	var end = {
		x: target.left - obj.offsetLeft,
		y: target.top - obj.offsetTop
	}
	
	//求出b的值
	var b = (end.y - a*end.x*end.x)/end.x;
	
	//起点位置
	var center = {
		left: obj.offsetLeft,
		top: obj.offsetTop
	}
	
	//开启定时器
	var offsetx = 0;
	var timer = setInterval(function(){
		offsetx += 6;
		
		var x = offsetx;
		var y = a*x*x + b*x;
		
		obj.style.left = center.left + x + "px";
		obj.style.top = center.top + y + "px";
		
		if (x >= end.x) {
			obj.style.left = target.left + "px";
			obj.style.top = target.top + "px";
			clearInterval(timer);
		}
		
	}, 30);
	
}







