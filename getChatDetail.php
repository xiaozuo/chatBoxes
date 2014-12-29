<?php
	$con = mysql_connect("localhost","root","123456");
	if(!$con)
	{
		die('Could not connect: ' . mysql_error());
	}
	else 
	{
		mysql_select_db("chatroom", $con);
		$querySQL = "select * from chatdetail order by id asc";//按时间最新顺序
		if (!mysql_query($querySQL,$con))
	  	{
	  		die('Error: ' . mysql_error());
	  	}
		else
		{
			$result = mysql_query($querySQL,$con);
			$i = 0;
			while($row = mysql_fetch_array($result))
			{
				$detail['id'] = $row['id'];
				$detail['name'] = $row['name'];
				$detail['content'] = $row['content'];
				$detail['time'] = $row['time'];
				
				$details[$i] = $detail;
				$i++;
			}
			mysql_close();
		}
	}
	echo json_encode($details);
?>