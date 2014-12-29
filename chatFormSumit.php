<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>chatFormSubmit</title>

</head>

<body>
<?php
	$name = $_POST["name"];
	$content = $_POST["content"];
	echo $name;
	echo $content;
	
	$time = $_POST["time"];
	/*$db=new mysqli("localhost","root","123456","chatroom");
    if(mysqli_connect_error()){
      echo 'Could not connect to database.';
       exit;
  }
  
  $result=$db->query("SELECT id,name FROM chatdetail");
  $row=$result->fetch_row();
	*/
	$con = mysql_connect("localhost","root","123456");
	if (!$con)
	  {
	 	die('Could not connect: ' . mysql_error());
		echo '服务器的基本信息是：' .mysql_get_host_info($con);
	  }
	else echo "连接成功";
	mysql_select_db("chatroom", $con);

	$insertSql = "INSERT INTO chatdetail (name, content, time) VALUES ('$name', '$content', '$time')";
	
	if (!mysql_query($insertSql,$con))
	  {
	  die('Error: ' . mysql_error());
	  }
	echo "1 record added";
	mysql_close();
	/*
	$pdo = new PDO("mysql:host=localhost;dbname=chatroom","root","123456"); 
	if($pdo -> exec("insert into chatdetail(name,content) values('title','content')")){ 
	echo "插入成功！"; }*/
?>

</body>
</html>