javascript:

var mra_not_evaluated="", mra_evaluated="", mra_max_rating="";

(function()
{
	
function get_ratingrank(rating)
{
	return (rating>=15)?("mai_rainbow"):(rating>=14.5)?("mai_gold"):(rating>=14)?("mai_silver"):(rating>=13)?("mai_copper"):
	(rating>=12)?("mai_violet"):(rating>=10)?("mai_red"):(rating>=7)?("mai_yellow"):(rating>=4)?("mai_green"):
	(rating>=1)?("mai_blue"):("mai_white");
}

function mra_add_musiclevel_unknown_list(lv_list, m_list)
{
	var liststr="";
	for(var i=0; i<lv_list.length; i++)
	{
		liststr += "<tr><th>" + lv_list[i] + "<\/th>";
		liststr += "<td>" + ((m_list[i]=="")?("（全部検証済）"):(m_list[i])) + "<\/td><\/tr>";
	}
	
	return liststr;
}

function mra_add_musiclevel_list(lv_list, m_list)
{
	var liststr="";
	for(var i=0; i<lv_list.length; i++)
	{
		liststr += "<tr><th>" + lv_list[i] + "<\/th> <td>" + m_list[i] + "<\/td><\/tr>";
	}
	
	return liststr;
}

function mra_level_lavel(lv_str)
{
	var str ="";
	str += "<tr><th colspan=2><font color=\"#ff5252\">転載禁止<\/font> ";
	str += lv_str;
	str += " <font color=\"#ff5252\">転載禁止<\/font><\/th><\/tr>";
	return str;
}

	
mra_not_evaluated += "<table border=1>";
mra_not_evaluated += "<tr><th colspan=2>" + mra_update_mlist + "追加分までのうちの未検証譜面<\/th><\/tr>";
mra_not_evaluated += mra_add_musiclevel_unknown_list(["13", "12+", "12", "11+", "11", "10+", "10", "9+", "9"],
					     [lv13_, lv12p, lv12_, lv11p, lv11_, lv10p, lv10_, lv09p, lv09_]);
mra_not_evaluated += "<\/table>";


mra_evaluated += "<table border=1>";
mra_evaluated += "<tr><th colspan=2>" + mra_update_llist + "時点での検証済譜面<\/th><\/tr>";
mra_evaluated += mra_level_lavel("Level 13");
mra_evaluated += "<tr><th>Lv.<br>13<\/th> <td>未検証譜面以外<\/td><\/tr>";
mra_evaluated += mra_level_lavel("Level 12+");
mra_evaluated += "<tr><th>" + lv12puls.join('<br>') + "<\/th> <td>未検証譜面以外<\/td><\/tr>";
mra_evaluated += mra_level_lavel("Level 12 上位");
mra_evaluated += "<tr><th>" + lv12equal.join('<br>') + "<\/th> <td>" + lv12e_rslt + "<\/td><\/tr>";
mra_evaluated += mra_level_lavel("Level 12 下位");
mra_evaluated += "<tr><th>" + lv12minus.join('<br>') + "<\/th> <td>" + lv12m_rslt + "<\/td><\/tr>";
mra_evaluated += mra_level_lavel("Level 11+");
mra_evaluated += mra_add_musiclevel_list(lv11plus, lv11p_rslt);
mra_evaluated += mra_level_lavel("Level 11");
mra_evaluated += mra_add_musiclevel_list(lv11minus, lv11m_rslt);
mra_evaluated += mra_level_lavel("Level 10+");
mra_evaluated += mra_add_musiclevel_list(lv10plus, lv10p_rslt);
mra_evaluated += mra_level_lavel("Level 10");
mra_evaluated += mra_add_musiclevel_list(lv10minus, lv10m_rslt);
mra_evaluated += mra_level_lavel("Level 9+");
mra_evaluated += mra_add_musiclevel_list(lv9plus, lv9p_rslt);
mra_evaluated += mra_level_lavel("Level 9");
mra_evaluated += mra_add_musiclevel_list(lv9minus, lv9m_rslt);
mra_evaluated += mra_level_lavel("Level 8+");
mra_evaluated += mra_add_musiclevel_list(lv8plus, lv8p_rslt);
mra_evaluated += "<\/table>"



})()