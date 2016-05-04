// JavaScript Document
window.onload = function(){
	showTime();		
	display();
	showPic();
	clicks();
	moveWeather();
    moveIform();
	addAttri();
	test();

}
function insertAfter(newElem,targetElem){
	var parent = target.parentNode;
	if(targetElem == parent.lastNode){
		parent.appendChild(newElem);
	}
	else{
		parent.insertBefore(newElem,targetElem.perviousSibling);
	}
}

function moveElemY(areaId,textId,cloneId,scrollHeight,speed){
	var area = document.getElementById(areaId);
	var con1 = document.getElementById(textId);
	var con2 = document.getElementById(cloneId);
	con2.innerHTML = con1.innerHTML;
	function Scroll(){
		if(area.scrollTop >scrollHeight){
		area.scrollTop = 0;
	}else{
		area.scrollTop += 1;
		}
	}
	var move = setInterval(Scroll,speed);
	area.onmouseover = function(){
		clearInterval(move);
	}
	area.onmouseout = function(){
		move = setInterval(Scroll,speed);
	}
}

function moveElemX(elemId,startPos,endPos,speed){
	var elem = document.getElementById(elemId);
	var xpos = parseInt(elem.style.left);
    if(xpos>endPos){
		xpos--;
	}
	if(xpos == endPos){
		xpos = startPos;
	}
	elem.style.left = xpos + "px";
	var repeat = "moveElemX('"+elemId+"',"+startPos+","+endPos+","+speed+")";
	var move = setTimeout(repeat,speed);
}


function displayTabs(titleId,contentId){
	var title = document.getElementById(titleId);
	var content = document.getElementById(contentId);
	var li = title.getElementsByTagName("li");
	var ul = content.getElementsByTagName("ul");
	
	for(var i=0;i<li.length;i++){
		li[i].index = i;  
		li[i].onmouseover = function(){
			for(var n=0;n<li.length;n++){
			  li[n].className = "";
			  ul[n].className = "hide";
			}
		this.className = "on";
		ul[this.index].className = "";
      }
	}
}


function addAttri(){
	var links = document.getElementsByTagName("a");
	for(i=0;i<links.length;i++){
		var title = links[i].getAttribute("title");
		var target = links[i].getAttribute("target");
		links[i].setAttribute("target","_blank");
		if(title == null){
			var content = links[i].innerHTML+"";
			links[i].setAttribute("title",content);
		}
	}
}
			
			

function showTime(){
	var date = new Date();
	var year=date.getFullYear();
    var month=date.getMonth()+1;
    var day=date.getDate();
	var HH = date.getHours();
	var MM = date.getMinutes();
	var SS = date.getSeconds();
	if(HH<10){
		HH = "0" + HH;
	}
	if(MM<10){
		MM = "0" +MM;
	}
	if(SS<10){
		SS = "0" + SS;
	}
    var weekday=["周日","周一","周二","周三","周四","周五","周六"];
    var num=date.getDay();
	var time=year+"年"+month+"月"+day+"日  "+weekday[num]+"　　　北京时间:"+HH+":"+MM+":"+SS;
	var box = document.getElementById("time");
	box.innerHTML = time;
	var timeout = setTimeout("showTime()",1000);
	var pos = document.getElementById("header").offsetLeft;
	box.style.position = "relative";
	box.style.left = pos + 10+"px";
}


function moveIform(){
	var inform = document.getElementById("inform")
	inform.style.position = "absolute";
	inform.style.left = "900px";
	moveElemX("inform",900,50,20);
}
	
 
function moveWeather(){
	moveElemY("area","text1","text2",252,50);
}


function display(){
	displayTabs("title2","content2");
	displayTabs("title1","content1");
}

function showPic(){
	var Pic = document.getElementById("pic");
	var num = null;
	var text = document.getElementById("description");
	var next = document.getElementById("next");
	var list = new Object();
	var list = [
	{"src":"img/weather/2日8时-3日8时降水量.jpg","href":"http://www.nmc.cn/publish/precipitation/1-7day-precipitation.html","title":"3月2日8时-3日8时全国降水量预报"},
	{"src":"img/weather/2日8时-3日8时最低气温.jpg","href":"http://www.nmc.cn/publish/temperature/low.html","title":"3月2日8时-3日8时全国最低气温预报"},
	{"src":"img/weather/3日8时-4日8时最高气温.jpg","href":"http://www.nmc.cn/publish/temperature/hight.html","title":"3月3日8时-3月4日8时全国最高气温预报"},
	{"src":"img/weather/2日8时-3日8时短时强降水.png","href":"http://www.nmc.cn/publish/bulletin/index.html","title":"3月2日8时-3月3日8时全国短时强降水预报"},
	{"src":"img/weather/3日8时-4日8时降水量.jpg","href":"http://www.nmc.cn/publish/precipitation/1-7day-precipitation.html","title":"3月3日8时-3月4日8时全国降水量预报"},
	{"src":"img/weather/4日8时-5日8时降水量.jpg","href":"http://www.nmc.cn/publish/precipitation/1-7day-precipitation.html","title":"3月4日8时-3月5日8时全国降水量预报"}
	]
	function turnPic(){
		if(num == list.length-1){
			num = 0;
			Pic.setAttribute("src",list[0].src);
		    Pic.setAttribute("title",list[0].title);
		    text.innerHTML = list[0].title;
		    pic.parentNode.setAttribute("href",list[0].href);
		}
		else{
			num+=1;
		}
		Pic.setAttribute("src",list[num].src);
		Pic.setAttribute("title",list[num].title);
		text.innerHTML = list[num].title;
		pic.parentNode.setAttribute("href",list[num].href);
		Pic.timer = setTimeout(arguments.callee,5000);
		index = {};
		index.num = num;
	}	
	turnPic();
}

function next(){
	var Pic = document.getElementById("pic");
	var src = Pic.getAttribute("src");
	var text = document.getElementById("description");
	var list = [
	{"src":"img/weather/2日8时-3日8时降水量.jpg","href":"http://www.nmc.cn/publish/precipitation/1-7day-precipitation.html","title":"3月2日8时-3日8时全国降水量预报"},
	{"src":"img/weather/2日8时-3日8时最低气温.jpg","href":"http://www.nmc.cn/publish/temperature/low.html","title":"3月2日8时-3日8时全国最低气温预报"},
	{"src":"img/weather/3日8时-4日8时最高气温.jpg","href":"http://www.nmc.cn/publish/temperature/hight.html","title":"3月3日8时-3月4日8时全国最高气温预报"},
	{"src":"img/weather/2日8时-3日8时短时强降水.png","href":"http://www.nmc.cn/publish/bulletin/index.html","title":"3月2日8时-3月3日8时全国短时强降水预报"},
	{"src":"img/weather/3日8时-4日8时降水量.jpg","href":"http://www.nmc.cn/publish/precipitation/1-7day-precipitation.html","title":"3月3日8时-3月4日8时全国降水量预报"},
	{"src":"img/weather/4日8时-5日8时降水量.jpg","href":"http://www.nmc.cn/publish/precipitation/1-7day-precipitation.html","title":"3月4日8时-3月5日8时全国降水量预报"}
	]
	if(src == list[0].src){
	Pic.setAttribute("src",list[1].src);
	Pic.setAttribute("title",list[1].title);
	text.innerHTML = list[1].title;
	pic.parentNode.setAttribute("href",list[1].href);
	}
	if(src == list[1].src){
	Pic.setAttribute("src",list[2].src);
	Pic.setAttribute("title",list[2].title);
	text.innerHTML = list[2].title;
	pic.parentNode.setAttribute("href",list[2].href);
	}
	if(src == list[2].src){
	Pic.setAttribute("src",list[3].src);
	Pic.setAttribute("title",list[3].title);
	text.innerHTML = list[3].title;
	pic.parentNode.setAttribute("href",list[3].href);
	}
	if(src == list[3].src){
	Pic.setAttribute("src",list[4].src);
	Pic.setAttribute("title",list[4].title);
	text.innerHTML = list[4].title;
	pic.parentNode.setAttribute("href",list[4].href);
	}
	if(src == list[4].src){
	Pic.setAttribute("src",list[5].src);
	Pic.setAttribute("title",list[5].title);
	text.innerHTML = list[5].title;
	pic.parentNode.setAttribute("href",list[5].href);
	}
	if(src == list[5].src){
	Pic.setAttribute("src",list[0].src);
	Pic.setAttribute("title",list[0].title);
	text.innerHTML = list[0].title;
	pic.parentNode.setAttribute("href",list[0].href);
    }
}


function previous(){
	var Pic = document.getElementById("pic");
	var src = pic.getAttribute("src");
	var text = document.getElementById("description");
	var list = [
	{"src":"img/weather/2日8时-3日8时降水量.jpg","href":"http://www.nmc.cn/publish/precipitation/1-7day-precipitation.html","title":"3月2日8时-3日8时全国降水量预报"},
	{"src":"img/weather/2日8时-3日8时最低气温.jpg","href":"http://www.nmc.cn/publish/temperature/low.html","title":"3月2日8时-3日8时全国最低气温预报"},
	{"src":"img/weather/3日8时-4日8时最高气温.jpg","href":"http://www.nmc.cn/publish/temperature/hight.html","title":"3月3日8时-3月4日8时全国最高气温预报"},
	{"src":"img/weather/2日8时-3日8时短时强降水.png","href":"http://www.nmc.cn/publish/bulletin/index.html","title":"3月2日8时-3月3日8时全国短时强降水预报"},
	{"src":"img/weather/3日8时-4日8时降水量.jpg","href":"http://www.nmc.cn/publish/precipitation/1-7day-precipitation.html","title":"3月3日8时-3月4日8时全国降水量预报"},
	{"src":"img/weather/4日8时-5日8时降水量.jpg","href":"http://www.nmc.cn/publish/precipitation/1-7day-precipitation.html","title":"3月4日8时-3月5日8时全国降水量预报"}
	]
	if(src == list[0].src){
	Pic.setAttribute("src",list[5].src);
	Pic.setAttribute("title",list[5].title);
	text.innerHTML = list[5].title;
	pic.parentNode.setAttribute("href",list[5].href);
	}
	if(src == list[1].src){
	Pic.setAttribute("src",list[0].src);
	Pic.setAttribute("title",list[0].title);
	text.innerHTML = list[0].title;
	pic.parentNode.setAttribute("href",list[0].href);
	}
	if(src == list[2].src){
	Pic.setAttribute("src",list[1].src);
	Pic.setAttribute("title",list[1].title);
	text.innerHTML = list[1].title;
	pic.parentNode.setAttribute("href",list[1].href);
	}
	if(src == list[3].src){
	Pic.setAttribute("src",list[2].src);
	Pic.setAttribute("title",list[2].title);
	text.innerHTML = list[2].title;
	pic.parentNode.setAttribute("href",list[2].href);
	}
	if(src == list[4].src){
	Pic.setAttribute("src",list[3].src);
	Pic.setAttribute("title",list[3].title);
	text.innerHTML = list[3].title;
	pic.parentNode.setAttribute("href",list[3].href);
	}
	if(src == list[5].src){
	Pic.setAttribute("src",list[4].src);
	Pic.setAttribute("title",list[4].title);
	text.innerHTML = list[4].title;
	pic.parentNode.setAttribute("href",list[4].href);
    }
}
function clicks(){
	var buttonNext = document.getElementById("next");
	var buttonPrevious = document.getElementById("previous");
	buttonNext.onclick = next;
	buttonPrevious.onclick  = previous;
}
function test(){
	try{
		
	}
	catch(error){
		alert(error.maeesage);
	}
}

		