


//获取css样式属性值
function getStyleAttr(obj, attr){
	if (window.getComputedStyle) {
		return getComputedStyle(obj, null)[attr];
	}
	return obj.currentStyle[attr];
}

//封装缓冲运动
//animate(obj, {left:300, top:300, width:300}, function(){});

function animate(obj, json, fn){
		
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		
		//
		var bstop = true; //表示可以停止，所有属性都到达了目标值
		
		//遍历json对象
		for (var attr in json){
			var target = json[attr];
			//attr: 属性名称
			//target: 目标值
			
			//1, current
			var current;
			if (attr == "opacity") { //透明度
				current = Math.round(getStyleAttr(obj, attr)*100);
			}
			else { //left, top, width,height,...
				current = parseInt( getStyleAttr(obj, attr) );
			}
			
			//2, speed
			var speed = (target-current)/8;
			speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);
			
			//3, 临界值
			if (current != target) {
				bstop = false;
			}
			
			//4， 运动
			if (attr == "opacity") {
				obj.style[attr] = (current + speed)/100 ;
				obj.style.filter = "alpha(opacity="+ (current+speed) +")";
			}
			else {
				obj.style[attr] = current + speed + "px";
			}
		}
		
		//如果所有属性都到达了目标值
		if (bstop){
			clearInterval(obj.timer);
			
			//回调
			if (fn) { 
				fn();
			}			
		}
		
	}, 30)
	
}






