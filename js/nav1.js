function hasClass(obj,cls){
    return obj.className.match(new RegExp("(\\s|^)"+cls+"(\\s|$)"));//判断classname中是否包含class的值
}
function removeClass(obj,cls){
	if(hasClass(obj,cls)){
		var reg=new RegExp("(\\s|^)"+cls+"(\\s|$)");
		obj.className=obj.className.replace(reg,"")//把class删除，替换为空
	}
}
function addClass(obj,cls){
	if (!hasClass(obj,cls)) {
        obj.className+=" "+cls;
	}
}
window.onload=function () {
    /*定位导航*/
	window.onscroll=function(){
		var top=document.body.scrollTop||document.documentElement.scrollTop;
		var  nav=document.getElementById("gas").getElementsByTagName("a");
        var  lis=document.getElementById("gas").getElementsByTagName("li");
		var  pages=document.getElementById("container").getElementsByClassName("Page");
        var currentId=" ";
        for(var i=0;i<pages.length;i++){
        	var _page=pages[i];
        	var _pageTop=_page.offsetTop;
        	if(top>_pageTop-200){
        		currentId=_page.id;
        	}else{
        		break;
        	}
        }
        if(currentId){
        	//给li的class赋值
        	for (var j = 0; j < nav.length; j++) {
        		var _nav=nav[j];
                var _lis=lis[j];
        		var _href=_nav.href.split("#");//当前页面a的类名获取出来
        		if(_href[_href.length-1]!=currentId){
        			removeClass(_lis,"current"); //删除当前li的class值
                    _lis.addEventListener('mouseout',function(){removeClass(this,"current"),false});

                    
        		}else{
        			addClass(_lis,"current");
                    _lis.addEventListener('mouseover',function(){addClass(this,"current");},false);

        		}
        	}

        }
        
	}

}
/*页面平滑切换*/
$('#gas li a').click(function (event) {
    var $anchor = $(this);
        $('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top}, 600);
        event.preventDefault();
});