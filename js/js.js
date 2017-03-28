//定义全局变量
var ban = document.getElementById('banner'),
	//图片索引
	index = 0,
	//定时器ID
	timer = null,
	bannerImg = ban.getElementsByTagName("div");
	len = bannerImg.length,
	nav = document.getElementById("nav"),
	navA=nav.getElementsByTagName("a"),
	navBox=document.getElementById("nav-box");
//图片切换函数
function slideImg() {
	//鼠标离开banner区域时：
	ban.onmouseout = function() {
		//图片每隔1秒切换一次
		timer = setInterval(function() {
			index++;
			if(index >= len) {
				index = 0
			}
			changeImg()
		}, 1000)
	}
	//	鼠标滑过时清除定时器 离开继续
	ban.onmouseover = function() {
		clearInterval(timer);
	}	
	ban.onmouseout();
	console.log(navA);

		for(var i = 0; i < len; i++) {
		navA[i].id=i;
		
//		navA[i].onmouseover=function  () {
//			index = this.id;
//		clearInterval(timer);
//		changeImg();
//		}
//onclick事件需要点击两次才会有效，改成onmouseover就没问题，请问是哪里出错？
		navA[i].onclick= function() {
			clearInterval(timer);
			index = this.id;
			changeImg();
		}
	}

	
}
//切换图片的函数
function changeImg() {
	for(var i = 0; i < len; i++) {
		bannerImg[i].style.display = "none";
		navA[i].className = "";
	}
	bannerImg[index].style.display = "block";
	navA[index].className = "active-nav";
	
}
slideImg();