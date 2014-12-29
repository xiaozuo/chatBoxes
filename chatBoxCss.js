// JavaScript Document
$(function(){
	$name = $("input[name='name']");
	$content = $("textarea[name='content']");
	if($name.val() == "[请输入聊天显示名称]"){
		$name.addClass("gray");
		}
	if($content.val() == "[请输入聊天内容]"){
		$content.addClass("gray");
		}
	
	$name.focus(function(){
					if($name.val() == "[请输入聊天显示名称]"){
						$name.val("");
						$name.removeClass("gray");
						}})
		 .blur(function(){
					if($name.val() == ""){
						$name.val("[请输入聊天显示名称]");
						$name.addClass("gray");
						}});
	$content.focus(function(){
					if($content.val() == "[请输入聊天内容]"){
						$content.val("");
						$content.removeClass("gray");
						}})
		 .blur(function(){
					if($content.val() == ""){
						$content.val("[请输入聊天内容]");
						$content.addClass("gray");
						}});
		   });