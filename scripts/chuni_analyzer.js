javascript:
(function()
{
var ma_list=[], ex_list=[], adv_list=[], ba_list=[], mname_list=[];
var chuni_dom='https://chunithm-net.com/mobile/';
var genre_number=[0, 2, 3, 6, 7, 8, 5];
var genre_name=["POPS & ANIME", "niconico", "東方Project", "VARIETY", "イロドリミドリ", "言ノ葉Project", "ORIGINAL"]
var name_init=["あ行", "か行", "さ行", "た行", "な行", "は行", "ま行", "や行", "ら行", "わ行", "A～G", "H～N", "O～U", "V～Z", "数字"];


function score2eval(score)
{
	return  (score>=1010000)?{rank:'SSS', achi:1.00}:
		(score>=1007500)?{rank:'SSS', achi:(score-1007500)*0.75/ 2500}:
		(score>=1005000)?{rank:'SS', achi:0.5+(score-1005000)*0.5 / 2500}:
		(score>=1000000)?{rank:'SS' , achi:(score-1000000)*0.5 / 5000}:
		(score>= 975000)?{rank:'S'  , achi:(score- 975000)/ 25000}:
		(score>= 950000)?{rank:'AAA', achi:(score- 950000)*1.5 /25000}:
		(score>= 925000)?{rank:'AA' , achi:(score- 925000)*1.5/ 25000}:
		(score>= 900000)?{rank:'A'  , achi:(score- 900000)*2.0/ 25000}:
		(score>= 800000)?{rank:'BBB', achi:(score- 800000)/100000}:
		(score>= 500000)?{rank:'C'  , achi:(score- 500000)/100000}:
		{rank:'D', achi:score/500000};
}

function list2data(x)
{
  var lamplist=[
	'common/images/icon_clear.png',
	'common/images/icon_fullcombo.png',
	'common/images/icon_alljustice.png',
	'common/images/icon_fullchain.png',
	'common/images/icon_fullchain2.png'
  ]
  var lamp_rslt=['Clr', 'FC', 'AJ', 'FCh', 'FCh-'];
  var name, score, clr="", fcaj="", fch="", tmp;
  name=$(x).find('.music_title')[0].innerText.trim();
  tmp=$(x).find('.text_b');
  score=score2eval((tmp.length!=0)?(Number(tmp[0].innerText.replace(/,/g, ""))):0);
  var lamp=Array.prototype.slice.call($(x).find('img')).map(function(x){return x.getAttribute('src')})
  
  for(var i=0; i<lamp.length; i++)
  {
  	var idx=lamplist.indexOf(lamp[i])
	switch(idx)
	{
		case -1: continue;
		default: break;
	}
	switch(lamp_rslt[idx])
	{
		case 'Clr':
			clr=lamp_rslt[idx];
			break;
		case 'FC':
		case 'AJ':
			fcaj=lamp_rslt[idx];
			break;
		case 'FCh':
		case 'FCh-':
			fch=lamp_rslt[idx];
			break;
		default: break;
	}
}
return {rank:score.rank, achi:score.achi, lamp0:clr, lamp1:fcaj, lamp2:fch};
}

function get_scoredata(addr, diff, array)
{
	$.ajax({type:'POST', url:addr, data:'genre=99&level=' + diff + '&music_genre=music_genre', async: false})
		.done(function(data)
		{
			//成功時の処理本体
			Array.prototype.slice.call($(data).find('.w388')).map(list2data).map(function(x){array.push(x)});
		}
	);
	return;
}

function get_musicname(addr, diff, array)
{
	$.ajax({type:'POST', url:addr, data:'genre=99&music_genre=level_' + diff, async: false})
		.done(function(data)
		{
			//成功時の処理本体
			Array.prototype.slice.call($(data).find('.music_title'))
				.map(function(x){return x.innerText.trim().replace(/\n/, "");}).map(function(x){array.push(x)});
		}
	);
	return;
}

function eval2pdata(l,d)
{
	var tmp ="";
	
	switch(d.rank)
	{
		case 'SSS':
		case 'SS':
		case 'S':
		case 'AAA':
		case 'AA':
		case 'A':
			tmp += l + '/ ' + d.rank + '+' + (Math.floor(d.achi * 100)/100).toFixed(2);
			break;
		case 'BBB':
		case 'C':
		case 'D' :
			tmp += l + '/ ' + d.rank + '+' + (Math.floor(d.achi *10000)/100).toFixed(2) + '%';
			break;
		default:
			break;
	}
	if(d.lamp1!="")
		tmp += '+' + d.lamp1;
	return tmp;
}

function eval2op(l,d)	//100倍で計算。A未満は0になる。
{
	var base = (l.slice(-1)=='+')?Number(l.slice(0,-1) + '70'):
		(l.slice(-1)=='-')?Number(l.slice(0,-1) + '00'):
		Number(l.slice(0,-2) + l.slice(-1) + '0');
	
	var rank_v=0, lamp_v=0, achi_v=0;

	switch(d.rank)
	{
		case 'SSS':	rank_v=200; break;
		case 'SS':	rank_v=100; break;
		case 'S':	rank_v=0; break;
		case 'AAA':	rank_v=-150; break;
		case 'AA':	rank_v=-300; break;
		case 'A':	rank_v=-500; break;
		default:
			return 0;	// A未満は考察外。
	}
	switch(d.lamp1)
	{
		case 'FC':	lamp_v=10; break;
		case 'AJ':	lamp_v=20; break;
		default:	lamp_v=0; break;
	}
	
	achi_v = Math.floor(100*d.achi);

	return 5*(base + rank_v + achi_v + lamp_v)
}

//メインはここから
get_musicname(chuni_dom + 'MusicRanking.html', 'master', mname_list);
get_scoredata(chuni_dom + 'MusicGenre.html', 'master', ma_list);
get_scoredata(chuni_dom + 'MusicGenre.html', 'expert', ex_list);
get_scoredata(chuni_dom + 'MusicGenre.html', 'advanced', adv_list);
get_scoredata(chuni_dom + 'MusicGenre.html', 'basic', ba_list);
	
var scoretable="";
var ma_op=0, ex_op=0, adv_op=0, ba_op=0;

/*
for(var g=0; g<genre_list.length; g++)
{
	var g_num=genre_list[g];
	scoretable += "<table border=1 align=center>";
	for(var i=0; i<mname_list.length; i++)
	{
		if(chuni_music_list[i].genre != g_num) continue;
		var musicname=(chuni_music_list[i].nick!="")?chuni_music_list[i].nick:chuni_music_list[i].name
		scoretable += "<tr><th>" + musicname + "</th>";
		scoretable += "<td>" + eval2pdata(chuni_music_list[i].lv[3], ma_list[i]) + "</td>";
		scoretable += "<td>" + eval2pdata(chuni_music_list[i].lv[2], ex_list[i]) + "</td>";
		scoretable += "<td>" + eval2pdata(chuni_music_list[i].lv[1], adv_list[i]) + "</td>";
		scoretable += "<td>" + eval2pdata(chuni_music_list[i].lv[0], ba_list[i]) + "</td>";
		scoretable += "</tr>";
	}
	scoretable += "</table>";
}
*/

scoretable += "<table border=1 align=center>";
for(var w=0; w<15; w++)
{
	ma_op=0, ex_op=0, adv_op=0, ba_op=0;
	
	for(var i=0; i<mname_list.length; i++)
	{
		if(chuni_music_list[i].word != w) continue;
		ma_op += eval2op(chuni_music_list[i].lv[3], ma_list[i]);
		ex_op += eval2op(chuni_music_list[i].lv[2], ex_list[i]);
		adv_op += eval2op(chuni_music_list[i].lv[1], adv_list[i]);
		ba_op += eval2op(chuni_music_list[i].lv[0], ba_list[i]);
	}
	scoretable += "<tr><th>" + name_init[w] + "</th>";
	scoretable += "<td>" + ma_op + "</td>";
	scoretable += "<td>" + ex_op + "</td>";
	scoretable += "<td>" + adv_op + "</td>";
	scoretable += "<td>" + ba_op + "</td>";
	scoretable += "</tr>";
}
scoretable += "</table>";

document.open();
document.write(scoretable);
document.close();

})(); void(0);
