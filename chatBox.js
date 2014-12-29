// JavaScript Document

//验证信息并发送
$(function(){
	//加载消息记录
	$.ajax({
		   url:"getChatDetail.php",
		   success:function(data){
			   		//$("#chatContentView p").html("");
			   		var detailsObj = eval ("(" + data + ")");
					var nameArray = new Array();
					for(var i = 0;i < detailsObj.length; i++){  
   						 //用户
						 var flag = 0;//没有相同的名字
						 if(i == 0){
							 	nameArray[0] = detailsObj[0].name;
								var namesHtml = "<span>" + detailsObj[i].name + "</span>";
						 		$("#chatNamesView div").append(namesHtml);
							 }
						 else{
							 	for(var j = 0; j < nameArray.length; ++j){
							 		if(detailsObj[i].name == nameArray[j])flag = 1;
							 	}
						 		if(flag == 0){
							 		nameArray[nameArray.length] = detailsObj[i].name;
									var namesHtml = "<span>" + detailsObj[i].name + "</span>";
						 			$("#chatNamesView div").append(namesHtml);
							 	}
							 }
			
						 //内容
						 var len = strlen(detailsObj[i].content) * 6.8;
						 if(len > $("#chatContentView div").width()*0.7){
										len = $("#chatContentView div").width()*0.7;
									}
						 var html = "<span><b>" + detailsObj[i].name 
						 			+ "</b><small>" + detailsObj[i].time + "</small><span style='width:" + len + "px;'>" 
									+ detailsObj[i].content + "</span></span>";
						 $("#chatContentView div").append(html);
						 	//滚动条定位到底部
						 scrollBottom();
						 //alert($("#chatContentView div").offset().top);
					}
			   },
		   error:function(XMLHttpRequest,textStatus,errorThrown){
								alert("发送失败");
							 	alert(errorThrown);
								alert(XMLHttpRequest.statusText);
								alert(XMLHttpRequest.readyState);
								return false;}
		});
		   
	$("#chatSubmitButton").click(function(){
		$getName = $("[name='name']").val();
		$getContent = $("[name='content']").val();
		var myDate = new Date();
		var mytime=myDate.toLocaleTimeString();
		if($getName == null ||
			$getName == "" ||
			$getContent == null ||
			$getContent == ""){
				alert("姓名或内容不能为空");
				return false;
			}
		else{
				/*
				$.post("chatFormSumit.php",{ 
						   name:$getName,
						   content:$getContent
						   },
						   function(data, textStatus){
								//$("#chatContentView").append();
							 	alert(textStatus);
							 });//*/
				///*
				$.ajax({
					   	type:"POST",
						url:"chatFormSumit.php",
						data:{ 
							name:$getName,
						 	content:$getContent,
							time:mytime
						 },
						success:function(data){
							 	//alert("发送成功");
								
								alert(mytime);
								var len = strlen($getContent) * 6.8;
								if(len > $("#chatContentView div").width()*0.7){
										len = $("#chatContentView div").width()*0.7;
									}
								var html = "<span><b>" + $getName 
						 			+ "</b><small>" + mytime + "</small><span style='width:" + len + "px;'>" 
									+ $getContent + "</div></span>";
								$("#chatContentView div").append(html);
								scrollBottom();
								$("textarea[name='content']").val("[请输入聊天内容]");
								$("textarea[name='content']").addClass("gray");
							 },
						error:function(XMLHttpRequest,textStatus,errorThrown){
								alert("发送失败");
							 	alert(errorThrown);
								alert(XMLHttpRequest.statusText);
								alert(XMLHttpRequest.readyState);
								return false;
							 }
					   });//*/
			}});
		   }
  );

function strlen(str){
    var len = 0;
    for (var i=0; i<str.length; i++) { 
     var c = str.charCodeAt(i); 
    //单字节加1 
     if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) { 
       len++; 
     } 
     else { 
      len+=2; 
     } 
    } 
    return len;
}

function scrollBottom(){
	$("#chatContentView div").scrollTop(9999);
	}
