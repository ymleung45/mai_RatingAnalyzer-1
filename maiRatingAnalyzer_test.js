javascript:
(function()
{

var ex_list=[], ma_list=[], re_list=[], datalist=[], addr="", your_id="", your_rating="";
var hashtag = "%e8%88%9e%e3%83%ac%e3%83%bc%e3%83%88%e8%a7%a3%e6%9e%90test";	// 舞レート解析test
var inner_lv = [
	{levels:["8-", "11.8", ""],	name:"前前前世", nick:""},
	{levels:["9-", "12.2", ""],	name:"Paradisus-Paradoxum", nick:"Para-Para"},
	{levels:["7+", "10.9", ""],	name:"SAKURAスキップ", nick:""},
	{levels:["8+", "11.2", ""],	name:"Now Loading!!!!", nick:"Now Loading"},
	{levels:["8+", "12.0", ""],	name:"真・ハンサム体操でズンドコホイ", nick:"ハンサム体操"},
	{levels:["8-", "11.0", ""],	name:"GET!! 夢&DREAM", nick:"夢DREAM"},
	{levels:["8-", "11.2", ""],	name:"PERFECT HUMAN", nick:""},
	{levels:["8+", "11.7", ""],	name:"SUSHI食べたい feat.ソイソース", nick:"SUSHI食べたい"},
	{levels:["8-", "11.9", ""],	name:"ポップミュージックは僕のもの", nick:"ポップミュージック"},
	{levels:["8+", "11.0", ""],	name:"きらっせ☆ウッド村ファーム", nick:"ウッド村"},
	{levels:["8-", "11.7", ""],	name:"シュガーソングとビターステップ", nick:"シュガビタ"},
	{levels:["9-", "11.1", ""],	name:"紅蓮の弓矢", nick:""},
	{levels:["7-", "8.7", ""],	name:"ようかい体操第一", nick:"ようかい体操"},
	{levels:["7-", "9.9", ""],	name:"ゲラゲラポーのうた", nick:"ゲラゲラポー"},
	{levels:["7-", "10.4", ""],	name:"夏祭り", nick:""},
	{levels:["10-", "11.6", ""],	name:"Scatman (Ski Ba Bop Ba Dop Bop)", nick:"Scatman"},
	{levels:["8+", "11.1", ""],	name:"fake!fake!", nick:"fakefake"},
	{levels:["8+", "11-", ""],	name:"HIMITSUスパーク", nick:""},
	{levels:["8-", "11.2", ""],	name:"でんでんぱっしょん", nick:""},
	{levels:["8-", "10.2", ""],	name:"Dragon Night", nick:""},
	{levels:["9-", "11.8", ""],	name:"Can Do", nick:""},
	{levels:["9-", "10.8", ""],	name:"The Other self", nick:""},
	{levels:["9-", "10.7", ""],	name:"カノン", nick:""},
	{levels:["9-", "10.4", ""],	name:"オルフェ", nick:""},
	{levels:["8-", "10.5", ""],	name:"ヘタリアン☆ジェット", nick:"ヘタリアン"},
	{levels:["7+", "10.4", ""],	name:"POP STAR", nick:""},
	{levels:["8-", "10.1", ""],	name:"Love or Lies", nick:""},
	{levels:["7+", "10.1", ""],	name:"jelly", nick:""},
	{levels:["7+", "9.7", ""],	name:"美しく燃える森", nick:""},
	{levels:["8-", "10.6", ""],	name:"Love You", nick:""},
	{levels:["8+", "10.1", ""],	name:"come again", nick:""},
	{levels:["7+", "9.5", "11.3"],	name:"Future", nick:""},
	{levels:["8-", "11.7", ""],	name:"ウッーウッーウマウマ(ﾟ∀ﾟ)", nick:"ウマウマ"},
	{levels:["8+", "10.1", ""],	name:"NIGHT OF FIRE", nick:""},
	{levels:["8-", "10.0", ""],	name:"YATTA!", nick:""},
	{levels:["8+", "10.9", ""],	name:"1/3の純情な感情", nick:""},
	{levels:["8-", "10.0", ""],	name:"バラライカ", nick:""},
	{levels:["8+", "11.5", ""],	name:"ココロオドル", nick:""},
	{levels:["8-", "11.1", "11.7"],	name:"若い力 -SEGA HARD GIRLS MIX-", nick:"若い力"},
	{levels:["9+", "12.0", ""],	name:"セハガガガンバッちゃう！！", nick:"セハガール"},
	{levels:["8+", "10.8", ""],	name:"ラブリー☆えんじぇる!!", nick:""},
	{levels:["8+", "10.5", ""],	name:"Stand Up!!!!", nick:"StandUp"},
	{levels:["9-", "11.8", ""],	name:"naraku within", nick:"naraku"},
	{levels:["8-", "10.7", ""],	name:"ほとんど違法行為", nick:"違法行為"},
	{levels:["8-", "10.4", ""],	name:"君の知らない物語", nick:"君知ら"},
	{levels:["8-", "10.6", ""],	name:"シリウス", nick:""},
	{levels:["7+", "10.8", ""],	name:"コネクト", nick:""},
	{levels:["9-", "12.4", ""],	name:"SAVIOR OF SONG", nick:"SAVIOR"},
	{levels:["8-", "9.8", ""],	name:"Luminize", nick:""},
	{levels:["8-", "11.0", ""],	name:"秘密の扉から会いにきて", nick:"秘密の扉"},
	{levels:["9-", "11.7", ""],	name:"青春はNon-Stop！", nick:"Non-Stop"},
	{levels:["9-", "12.3", ""],	name:"Falling Roses", nick:""},
	{levels:["8-", "10.7", ""],	name:"イチズレシピ", nick:""},
	{levels:["7+", "10.2", ""],	name:"Daydream café", nick:"ごちうさ"},
	{levels:["7-", "10.3", ""],	name:"ふ・れ・ん・ど・し・た・い", nick:"ふれんどしたい"},
	{levels:["7+", "10.5", ""],	name:"Touch Tap Baby", nick:"TouchTap"},
	{levels:["7-", "9.8", ""],	name:"極上スマイル", nick:""},
	{levels:["8+", "10.2", ""],	name:"7 Girls War", nick:""},
	{levels:["8-", "10.7", ""],	name:"Jumping!!", nick:""},
	{levels:["7-", "10.2", ""],	name:"ゆりゆららららゆるゆり大事件", nick:"ゆるゆり大事件"},
	{levels:["9-", "11.2", ""],	name:"いぇす！ゆゆゆ☆ゆるゆり♪♪", nick:"ゆゆゆゆるゆり"},
	{levels:["9-", "11-", ""],	name:"ちょちょちょ！ゆるゆり☆かぷりっちょ！！！", nick:"かぷりっちょ"},
	{levels:["8-", "11.0", ""],	name:"かくしん的☆めたまるふぉ～ぜっ！", nick:"うまる"},
	{levels:["8+", "11.7", ""],	name:"ファッとして桃源郷", nick:"桃源郷"},
	{levels:["9-", "12.5", ""],	name:"回レ！雪月花", nick:""},
	{levels:["9+", "12.4", ""],	name:"リンカーネイション", nick:""},
	{levels:["9-", "12.5", ""],	name:"六兆年と一夜物語", nick:"六兆年"},
	{levels:["9-", "12.0", ""],	name:"ちがう!!!", nick:""},
	{levels:["9+", "11.8", ""],	name:"バッド・ダンス・ホール", nick:""},
	{levels:["8-", "10.5", ""],	name:"東京レトロ", nick:""},
	{levels:["10-", "12.3", ""],	name:"ARROW", nick:""},
	{levels:["9+", "11.7", ""],	name:"ヘルシーエンド", nick:""},
	{levels:["8-", "10.7", ""],	name:"ラブチーノ", nick:""},
	{levels:["9-", "12.2", "12.9"],	name:"ロストワンの号哭", nick:"ロストワン"},
	{levels:["9-", "12.2", ""],	name:"千本桜", nick:""},
	{levels:["9-", "11.8", ""],	name:"チュルリラ・チュルリラ・ダッダッダ！", nick:"チュルリラ"},
	{levels:["8-", "12.4", ""],	name:"ウミユリ海底譚", nick:"ウミユリ"},
	{levels:["10-", "12.8", ""],	name:"初音ミクの消失", nick:"消失"},
	{levels:["9-", "11.6", ""],	name:"天ノ弱", nick:""},
	{levels:["9-", "12.3", ""],	name:"厨病激発ボーイ", nick:"厨病"},
	{levels:["10+", "12.7", ""],	name:"脳漿炸裂ガール", nick:"脳漿"},
	{levels:["9-", "12.0", ""],	name:"+♂", nick:""},
	{levels:["9-", "11.9", ""],	name:"おこちゃま戦争", nick:""},
	{levels:["8+", "10.9", ""],	name:"だんだん早くなる", nick:""},
	{levels:["8-", "10.0", ""],	name:"恋愛裁判", nick:""},
	{levels:["8+", "10.6", "11.8"],	name:"からくりピエロ", nick:""},
	{levels:["9-", "11.3", ""],	name:"ゴーストルール", nick:""},
	{levels:["8-", "10.9", ""],	name:"おじゃま虫", nick:""},
	{levels:["9-", "11.7", ""],	name:"ストリーミングハート", nick:""},
	{levels:["9-", "10.3", ""],	name:"妄想税", nick:""},
	{levels:["9-", "12.3", ""],	name:"毒占欲", nick:""},
	{levels:["8+", "10.4", ""],	name:"むかしむかしのきょうのぼく", nick:"むかしむかし"},
	{levels:["8+", "11.9", ""],	name:"二息歩行", nick:""},
	{levels:["9-", "10.9", ""],	name:"モザイクロール", nick:""},
	{levels:["9-", "11.2", ""],	name:"弱虫モンブラン", nick:"モンブラン"},
	{levels:["9+", "11.9", ""],	name:"39", nick:""},
	{levels:["7+", "11.0", ""],	name:"＊ハロー、プラネット。", nick:"ハロプラ"},
	{levels:["8+", "11.9", ""],	name:"Mr. Wonderland", nick:"Wonderland"},
	{levels:["10-", "12.3", ""],	name:"吉原ラメント", nick:"ラメント"},
	{levels:["8-", "11.0", ""],	name:"ココロ", nick:""},
	{levels:["9+", "11.8", ""],	name:"ゆっくりしていってね！！！", nick:"ゆっくり"},
	{levels:["9-", "11.8", ""],	name:"生きてるおばけは生きている", nick:"生きてるおばけ"},
	{levels:["8-", "10.7", ""],	name:"踊れオーケストラ", nick:""},
	{levels:["9-", "11.4", ""],	name:"クノイチでも恋がしたい", nick:"クノイチ"},
	{levels:["7-", "10.3", "11.8"],	name:"いーあるふぁんくらぶ", nick:"いーある"},
	{levels:["8-", "12.1", ""],	name:"赤心性：カマトト荒療治", nick:"カマトト"},
	{levels:["8-", "11.0", ""],	name:"イノコリ先生", nick:""},
	{levels:["9+", "12.5", ""],	name:"ECHO", nick:""},
	{levels:["9-", "11.4", ""],	name:"キミノヨゾラ哨戒班", nick:"キミノヨゾラ"},
	{levels:["8+", "11.1", ""],	name:"しんでしまうとはなさけない！", nick:"しんでしまうとは"},
	{levels:["8+", "11.4", ""],	name:"パーフェクト生命", nick:""},
	{levels:["8+", "11.4", ""],	name:"やめろ！聴くな！", nick:"やめろ聴くな"},
	{levels:["7+", "9.8", ""],	name:"東京リアルワールド", nick:"リアルワールド"},
	{levels:["8-", "11.0", ""],	name:"すろぉもぉしょん", nick:"すろも"},
	{levels:["9.7", "12.7", ""],	name:"頓珍漢の宴", nick:"頓珍漢"},
	{levels:["8-", "12.0", ""],	name:"ありふれたせかいせいふく", nick:"せいかいせいふく"},
	{levels:["8-", "11.4", ""],	name:"絵の上手かった友達", nick:"絵の上手い"},
	{levels:["10-", "12.0", ""],	name:"腐れ外道とチョコレゐト", nick:"腐れ外道"},
	{levels:["8+", "11.8", ""],	name:"はじめまして地球人さん", nick:"地球人さん"},
	{levels:["8+", "10.3", ""],	name:"アゲアゲアゲイン", nick:""},
	{levels:["9-", "11.5", ""],	name:"M.S.S.Planet", nick:"M.S.S."},
	{levels:["8+", "10.8", ""],	name:"不毛！", nick:""},
	{levels:["9-", "11.8", ""],	name:"ネトゲ廃人シュプレヒコール", nick:"ネトゲ廃人"},
	{levels:["9+", "11.3", ""],	name:"炉心融解", nick:""},
	{levels:["9-", "11.0", ""],	name:"StargazeR", nick:""},
	{levels:["9-", "11.7", ""],	name:"Just Be Friends", nick:""},
	{levels:["8+", "10.8", ""],	name:"LOL -lots of laugh-", nick:"LOL"},
	{levels:["7+", "10.6", ""],	name:"みくみくにしてあげる♪【してやんよ】", nick:"みくみく"},
	{levels:["9+", "11.3", ""],	name:"Sweet Devil", nick:""},
	{levels:["8-", "11.6", ""],	name:"クローバー♣クラブ", nick:"クローバークラブ"},
	{levels:["8-", "11.7", ""],	name:"深海少女", nick:""},
	{levels:["8-", "11.3", ""],	name:"SPiCa", nick:""},
	{levels:["8-", "11.4", ""],	name:"ぽっぴっぽー", nick:""},
	{levels:["9+", "12.5", ""],	name:"Nyan Cat EX", nick:""},
	{levels:["9+", "11.9", ""],	name:"どういうことなの！？", nick:""},
	{levels:["9+", "12.3", ""],	name:"どうしてこうなった", nick:"こなた"},
	{levels:["9-", "12.1", ""],	name:"ダブルラリアット", nick:"ダブラリ"},
	{levels:["10-", "12.6", ""],	name:"magician's operation", nick:"マジオペ"},
	{levels:["8-", "12.3", ""],	name:"トルコ行進曲 - オワタ＼(^o^)／", nick:"オワタ"},
	{levels:["8-", "9.9", ""],	name:"リリリリ★バーニングナイト", nick:"リリリリ"},
	{levels:["8-", "9.9", ""],	name:"イアイア★ナイトオブデザイア", nick:"イアイア"},
	{levels:["7+", "10.4", ""],	name:"ルカルカ★ナイトフィーバー", nick:"ルカルカ"},
	{levels:["7-", "9.9", ""],	name:"メグメグ☆ファイアーエンドレスナイト", nick:"メグメグ"},
	{levels:["8-", "9.2", ""],	name:"教えて!! 魔法のLyric", nick:"Lyric"},
	{levels:["7-", "10.8", ""],	name:"おちゃめ機能", nick:""},
	{levels:["9-", "11.0", ""],	name:"BAD∞END∞NIGHT", nick:"バドエン"},
	{levels:["7-", "10.8", ""],	name:"shake it!", nick:""},
	{levels:["8-", "10.3", ""],	name:"Heart Beats", nick:""},
	{levels:["7-", "9.9", ""],	name:"Sweetiex2", nick:""},
	{levels:["9-", "10.5", "12.1"],	name:"ロミオとシンデレラ", nick:"ロミシン"},
	{levels:["8-", "10.8", ""],	name:"ハッピーシンセサイザ", nick:"ハピシン"},
	{levels:["9-", "10.5", ""],	name:"ダンシング☆サムライ", nick:""},
	{levels:["8-", "10.7", ""],	name:"ハロ／ハワユ", nick:"ハロハワユ"},
	{levels:["8+", "9.7", "11.0"],	name:"Tell Your World", nick:""},
	{levels:["8+", "11.2", ""],	name:"Hand in Hand", nick:""},
	{levels:["10-", "11.6", ""],	name:"アンハッピーリフレイン", nick:"アンハッピー"},
	{levels:["9+", "12.6", ""],	name:"裏表ラバーズ", nick:"裏表"},
	{levels:["8-", "11.5", ""],	name:"ローリンガール", nick:"ローリン"},
	{levels:["7-", "10.6", "12.1"],	name:"ワールズエンド・ダンスホール", nick:"ワールズエンド"},
	{levels:["8-", "9.9", "11.7"],	name:"マトリョシカ", nick:""},
	{levels:["8-", "9.7", ""],	name:"パンダヒーロー", nick:""},
	{levels:["9+", "10.6", ""],	name:"ゴーゴー幽霊船", nick:"幽霊船"},
	{levels:["9-", "11.2", ""],	name:"セツナトリップ", nick:""},
	{levels:["9-", "11-", ""],	name:"放課後ストライド", nick:"ストライド"},
	{levels:["9+", "11.0", ""],	name:"カゲロウデイズ", nick:""},
	{levels:["10-", "12.0", ""],	name:"夜咄ディセイブ", nick:"ディセイブ"},
	{levels:["7+", "10.1", ""],	name:"メランコリック", nick:""},
	{levels:["7+", "9.2", "11.3"],	name:"ZIGG-ZAGG", nick:""},
	{levels:["7+", "10.6", ""],	name:"I ♥", nick:""},
	{levels:["9-", "10.5", ""],	name:"スイートマジック", nick:""},
	{levels:["9-", "10.7", ""],	name:"林檎華憐歌", nick:""},
	{levels:["9-", "12.3", ""],	name:"木彫り鯰と右肩ゾンビ", nick:"鯰とゾンビ"},
	{levels:["9-", "12.4", ""],	name:"デッドレッドガールズ", nick:"デッドレッド"},
	{levels:["9-", "10.6", ""],	name:"One Step Ahead", nick:"One Step"},
	{levels:["7-", "10.5", ""],	name:"Link", nick:"Link(ni)"},
	{levels:["7+", "9.8", ""],	name:"ひみつをちょーだい", nick:""},
	{levels:["7+", "10.2", ""],	name:"夏にキスしていいですか？", nick:"夏にキスして"},
	{levels:["9-", "12.0", ""],	name:"すーぱーぬこになりたい", nick:"スーパーぬこ"},
	{levels:["9-", "12.2", ""],	name:"チルノのパーフェクトさんすう教室　⑨周年バージョン", nick:"チルノ9周年"},
	{levels:["8-", "11.3", ""],	name:"華鳥風月", nick:""},
	{levels:["8-", "11.3", ""],	name:"色は匂へど散りぬるを", nick:"色は匂へど"},
	{levels:["8+", "11.7", ""],	name:"月に叢雲華に風", nick:"月に叢雲"},
	{levels:["9-", "11.9", ""],	name:"オーディエンスを沸かす程度の能力 feat.タイツォン", nick:"オーディエンス"},
	{levels:["9-", "11.7", ""],	name:"妖精村の月誕祭 ～Lunate Elf", nick:"妖精村"},
	{levels:["8+", "11.1", ""],	name:"Starlight Dance Floor", nick:""},
	{levels:["8+", "11.7", ""],	name:"宿題が終わらないっ！", nick:"宿題"},
	{levels:["9-", "11.4", ""],	name:"東方スイーツ！～鬼畜姉妹と受難メイド～", nick:"東方スイーツ"},
	{levels:["9-", "11.7", ""],	name:"taboo tears you up", nick:"taboo"},
	{levels:["9+", "11.4", ""],	name:"Starlight Vision", nick:""},
	{levels:["9-", "12.3", ""],	name:"幽闇に目醒めしは", nick:"幽闇"},
	{levels:["8-", "11.6", ""],	name:"物凄い勢いでけーねが物凄いうた", nick:"けーね"},
	{levels:["9+", "11.7", ""],	name:"Club Ibuki in Break All", nick:"Club Ibuki"},
	{levels:["8+", "11.7", ""],	name:"チルノのパーフェクトさんすう教室", nick:"チルノ"},
	{levels:["7+", "11.7", ""],	name:"魔理沙は大変なものを盗んでいきました", nick:"魔理沙"},
	{levels:["9-", "12.6", "12.9"],	name:"患部で止まってすぐ溶ける～狂気の優曇華院", nick:"患部～優曇華"},
	{levels:["9-", "10.9", ""],	name:"究極焼肉レストラン！お燐の地獄亭！", nick:"焼肉レストラン"},
	{levels:["9-", "10.8", ""],	name:"お嫁にしなさいっ！", nick:""},
	{levels:["9+","11.9", ""],	name:"キャプテン・ムラサのケツアンカー", nick:"ケツアンカー"},
	{levels:["9-", "11.4", ""],	name:"ひれ伏せ愚民どもっ！", nick:"愚民"},
	{levels:["7-", "11.9", ""],	name:"Grip & Break down !!", nick:"Grip"},
	{levels:["9-", "12.5", ""],	name:"Cosmic Magic Shooter", nick:"Magic Shooter"},
	{levels:["8-", "10.7", ""],	name:"しゅわスパ大作戦☆", nick:"しゅわスパ"},
	{levels:["8+", "10.9", ""],	name:"全人類ノ非想天則", nick:"非想天則"},
	{levels:["9-", "11.7", ""],	name:"Endless, Sleepless Night", nick:"かにぱん"},
	{levels:["9-", "12.0", ""],	name:"No Routine", nick:""},
	{levels:["10+", "12.7", ""],	name:"Scream out! -maimai SONIC WASHER Edit-", nick:"Scream Out"},
	{levels:["9-", "12.9", ""],	name:"幻想のサテライト", nick:"サテライト"},
	{levels:["8-", "11.4", ""],	name:"待チ人ハ来ズ。", nick:"待チ人"},
	{levels:["8-", "11.4", ""],	name:"響縁", nick:""},
	{levels:["9-", "11.2", ""],	name:"囲い無き世は一期の月影", nick:"囲い無き世は"},
	{levels:["9-", "12.6", ""],	name:"儚きもの人間", nick:"儚きもの"},
	{levels:["9-", "11.2", ""],	name:"sweet little sister", nick:""},
	{levels:["9-", "11.0", ""],	name:"ケロ⑨destiny", nick:"ケロ⑨"},
	{levels:["9+", "12.0", ""],	name:"Phantasm Brigade", nick:"Brigade"},
	{levels:["9-", "12.0", ""],	name:"蒼空に舞え、墨染の桜", nick:"墨染"},
	{levels:["8-", "10.4", ""],	name:"フラグメンツ -T.V. maimai edit-", nick:"フラグメンツ"},
	{levels:["8-", "11.4", ""],	name:"橙の幻想郷音頭", nick:"幻想郷音頭"},
	{levels:["7+", "11.4", ""],	name:"神々の祈り", nick:""},
	{levels:["8+", "11.0", ""],	name:"願いを呼ぶ季節", nick:""},
	{levels:["8-", "10.7", "11.0"],	name:"明星ロケット", nick:"明星"},
	{levels:["9-", "11.9", "12.4"],	name:"緋色のDance", nick:"緋色"},
	{levels:["9-", "10.9", ""],	name:"YU-MU", nick:""},
	{levels:["9+", "12.0", ""],	name:"エテルニタス・ルドロジー", nick:"ルドロジー"},
	{levels:["8-", "10.6", "11.9"],	name:"エピクロスの虹はもう見えない", nick:"エピクロス"},
	{levels:["9-", "12.0", ""],	name:"四次元跳躍機関", nick:"四次元"},
	{levels:["9-", "12.3", ""],	name:"少女幻葬戦慄曲 ～ Necro Fantasia", nick:"Necro"},
	{levels:["8+", "11.5", ""],	name:"Jimang Shot", nick:"じまんぐ"},
	{levels:["8-", "10.7", "11.5"],	name:"ってゐ！ ～えいえんてゐVer～", nick:"ってゐ"},
	{levels:["8-", "11.3", ""],	name:"東方妖々夢 ～the maximum moving about～", nick:"妖々夢"},
	{levels:["8+", "11.1", ""],	name:"Yet Another ”drizzly rain”", nick:"drizzly rain"},
	{levels:["7-", "9.9", ""],	name:"シアワセうさぎ", nick:""},
	{levels:["9-", "11-", ""],	name:"最速最高シャッターガール", nick:"シャッターガール"},
	{levels:["10-", "12.7", ""],	name:"最終鬼畜妹・一部声", nick:"最終鬼畜妹"},
	{levels:["9-", "12.7", ""],	name:"ウサテイ", nick:""},
	{levels:["9+", "10.4", ""],	name:"Help me, ERINNNNNN!!", nick:"えーりん"},
	{levels:["10-", "11.7", "13.2"],	name:"ナイト・オブ・ナイツ", nick:"ナイツ"},
	{levels:["8+", "10.9", "12.3"],	name:"Bad Apple!! feat nomico", nick:"Bad Apple"},
	{levels:["9-", "10.8", ""],	name:"CALL HEAVEN!!", nick:""},
	{levels:["8+", "11.0", ""],	name:"Sunshine world tour", nick:""},
	{levels:["9-", "11.5", ""],	name:"終わりなき物語", nick:""},
	{levels:["9-", "11.1", ""],	name:"Our Fighting", nick:""},
	{levels:["8+", "11.9", "11.9"],	name:"Save This World νMIX", nick:"Save This World"},
	{levels:["8+", "10.5", "11.4"],	name:"Living Universe", nick:""},
	{levels:["10-", "10.7", ""],	name:"Ignite Infinity", nick:"Infinity"},
	{levels:["10-", "11.6", ""],	name:"Garden Of The Dragon", nick:"龍の庭"},
	{levels:["9-", "12.4", ""],	name:"Reach For The Stars", nick:"Reach"},
	{levels:["9-", "11.8", ""],	name:"Live & Learn", nick:"リブラン"},
	{levels:["9-", "12.5", ""],	name:"Back 2 Back", nick:"B2B"},
	{levels:["9-", "11.3", ""],	name:"Windy Hill -Zone 1", nick:"Windy Hill"},
	{levels:["8-", "11.2", "11.3"],	name:"City Escape: Act1", nick:"City Escape"},
	{levels:["9+", "10.1", "11.8"],	name:"Rooftop Run: Act1", nick:"Roottop"},
	{levels:["8+", "11.3", ""],	name:"時空を超えて久しぶり！", nick:"アルル"},
	{levels:["9-", "10.3", ""],	name:"Her Dream Is To Be A Fantastic Sorceress", nick:"アミティ"},
	{levels:["7-", "11.8", ""],	name:"キズナの物語", nick:""},
	{levels:["9+", "12.2", ""],	name:"STAIRWAY TO GENERATION", nick:"STAIRWAY"},
	{levels:["10-", "12.5", ""],	name:"Last Brave ～ Go to zero", nick:"Last Brave"},
	{levels:["11.5", "11.5", ""],	name:"Urban Crusher [Remix]", nick:"アーバン"},
	{levels:["9-", "10.6", ""],	name:"Catch The Future", nick:""},
	{levels:["8-", "11.7", ""],	name:"awake", nick:""},
	{levels:["9+", "12.1", ""],	name:"Terminal Storm", nick:"タミスト"},
	{levels:["10-", "11.7", ""],	name:"After Burner", nick:""},
	{levels:["9+", "12.5", ""],	name:"Space Harrier Main Theme [Reborn]", nick:"スペハリ"},
	{levels:["10-", "11.6", ""],	name:"Quartet Theme [Reborn]", nick:"カルテット"},
	{levels:["9-", "11.2", ""],	name:"Sky High [Reborn]", nick:"Sky High"},
	{levels:["9+", "12.5", ""],	name:"Like the Wind [Reborn]", nick:"Like"},
	{levels:["11-", "11.7", ""],	name:"YA･DA･YO [Reborn]", nick:"ヤダヨ"},
	{levels:["10-", "10.1", ""],	name:"Natural Flow", nick:""},
	{levels:["8-", "9.9", ""],	name:"Crush On You", nick:""},
	{levels:["7+", "9.1", ""],	name:"Sun Dance", nick:""},
	{levels:["8-", "10.1", ""],	name:"In Chaos", nick:""},
	{levels:["10-", "10.5", ""],	name:"Beat Of Mind", nick:""},
	{levels:["9-", "12.1", ""],	name:"JACKY [Remix]", nick:"Jacky"},
	{levels:["10-", "12.2", ""],	name:"Mysterious Destiny", nick:"ミステリアス"},
	{levels:["9+", "10.0", ""],	name:"Riders Of The Light", nick:""},
	{levels:["7-", "11.5", ""],	name:"コトバ・カラフル", nick:""},
	{levels:["8-", "11.9", ""],	name:"天国と地獄", nick:""},
	{levels:["8-", "10.6", ""],	name:"きみのためなら死ねる", nick:"きみ死ね"},
	{levels:["8+", "10.0", ""],	name:"The Great Journey", nick:""},
	{levels:["9-", "10.2", "12.5"],	name:"Burning Hearts ～炎のANGEL～", nick:"Burning Hearts"},
	{levels:["8-", "10.5", ""],	name:"かせげ！ジャリンコヒーロー", nick:"ジャリンコヒーロー"},
	{levels:["9-", "12.3", ""],	name:"ココロスキャンのうた", nick:"ココロスキャン"},
	{levels:["10-", "10.8", ""],	name:"超絶！Superlative", nick:"超絶"},
	{levels:["10-", "11.2", ""],	name:"采配の刻 Power of order", nick:"采配"},
	{levels:["11-", "12.0", ""],	name:"DO RORO DERODERO ON DO RORO", nick:"DO RORO"},
	{levels:["9-", "10.8", ""],	name:"源平大戦絵巻テーマソング", nick:"源平"},
	{levels:["8+", "11.3", ""],	name:"怪盗Rのテーマ", nick:"怪盗R"},
	{levels:["7-", "10.1", ""],	name:"マリアをはげませ", nick:"マリア"},
	{levels:["7+", "10.1", ""],	name:"SHOW TIME", nick:""},
	{levels:["9+", "11.7", ""],	name:"円舞曲、君に", nick:"円舞曲"},
	{levels:["10-", "11.0", ""],	name:"御旗のもとに", nick:"御旗"},
	{levels:["9-", "10.7", ""],	name:"地上の戦士", nick:""},
	{levels:["8-", "8.7", "11.0"],	name:"檄！帝国華撃団(改)", nick:"檄帝"},
	{levels:["9-", "12.9", ""],	name:"Outlaw's Lullaby", nick:"Outlaw"},
	{levels:["9-", "11.8", ""],	name:"Brand-new Japanesque", nick:"Japanesque"},
	{levels:["9-", "12.6", ""],	name:"鼓動", nick:""},
	{levels:["10-", "11.1", ""],	name:"神室雪月花", nick:""},
	{levels:["7-", "12.1", ""],	name:"KONNANじゃないっ！", nick:"KONNAN"},
	{levels:["9-", "11.6", ""],	name:"セガサターン起動音[H.][Remix]", nick:"セガサターン"},
	{levels:["10-", "12.8", ""],	name:"GO BACK 2 YOUR RAVE", nick:"GO BACK"},
	{levels:["10-", "12.9", ""],	name:"B.B.K.K.B.K.K.", nick:"BBKK"},
	{levels:["11.0", "12.8", ""],	name:"人里に下ったアタイがいつの間にか社畜になっていた件", nick:"社畜"},
	{levels:["10+", "12.8", ""],	name:"Maxi", nick:""},
	{levels:["9+", "12.1", ""],	name:"KISS CANDY FLAVOR", nick:""},
	{levels:["8+", "11.7", ""],	name:"H-A-J-I-M-A-R-I-U-T-A-!!", nick:"HAJIMARIUTA"},
	{levels:["9-", "11.3", ""],	name:"Star☆Glitter", nick:"StarGlitter"},
	{levels:["10+", "12.9", ""],	name:"conflict", nick:""},
	{levels:["10-", "12.5", ""],	name:"Party 4U ”holy nite mix”", nick:"Party 4U"},
	{levels:["9+", "11.8", ""],	name:"GOODMEN", nick:""},
	{levels:["10+", "12.6", ""],	name:"Sakura Fubuki", nick:"桜吹雪"},
	{levels:["10-", "12.8", ""],	name:"METATRON", nick:""},
	{levels:["9-", "11.5", ""],	name:"オモイヨシノ", nick:""},
	{levels:["9-", "12.5", ""],	name:"L9", nick:""},
	{levels:["10-", "12.9", ""],	name:"Jack-the-Ripper◆", nick:"Ripper"},
	{levels:["11.4", "12.8", ""],	name:"DRAGONLADY", nick:"ドラレ"},
	{levels:["9+", "11.4", ""],	name:"Pursuing My True Self", nick:""},
	{levels:["9+", "11.7", ""],	name:"Signs Of Love (“Never More” ver.)", nick:"Signs Of Love"},
	{levels:["9-", "11.4", ""],	name:"specialist (“Never More” ver.)", nick:"specialist"},
	{levels:["9-", "12.3", ""],	name:"Time To Make History (AKIRA YAMAOKA Remix)", nick:"Time To Make"},
	{levels:["8-", "11.7", ""],	name:"レッツゴー!陰陽師", nick:"陰陽師"},
	{levels:["9-", "11.8", ""],	name:"オパ! オパ! RACER -GMT mashup-", nick:"オパRACER"},
	{levels:["10-", "12.6", ""],	name:"電車で電車でOPA!OPA!OPA! -GMT mashup-", nick:"電OPA"},
	{levels:["10-", "11.7", ""],	name:"リッジでリッジでGO!GO!GO! -GMT mashup-", nick:"リッジでGO"},
	{levels:["7+", "11.3", ""],	name:"電車で電車でGO!GO!GO!GC! -GMT remix-", nick:"電車でGO"},
	{levels:["10-", "11.7", ""],	name:"RIDGE RACER STEPS -GMT remix-", nick:"リッジレーサー"},
	{levels:["9-", "11.5", ""],	name:"ファンタジーゾーン OPA-OPA! -GMT remix-", nick:"OPAOPA"},
	{levels:["10-", "12.5", ""],	name:"DADDY MULK -Groove remix-", nick:"ダディ"},
	{levels:["10-", "13.1", ""],	name:"FUJIN Rumble", nick:"FUJIN"},
	{levels:["10+", "12.7", ""],	name:"Got more raves？", nick:"ゴモア"},
	{levels:["11.0", "12.9", ""],	name:"夜明けまであと３秒", nick:"夜明けまで"},
	{levels:["10+", "12.9", ""],	name:"Ignis Danse", nick:"イグニス"},
	{levels:["11-", "12.8", ""],	name:"きたさいたま2000", nick:"きさま"},
	{levels:["9-", "12.7", ""],	name:"Scars of FAUNA", nick:"FAUNA"},
	{levels:["10-", "12.6", ""],	name:"FLOWER", nick:""},
	{levels:["10.5", "12.8", ""],	name:"デスパレイト", nick:""},
	{levels:["11-", "13.3", ""],	name:"Moon of Noon", nick:""},
	{levels:["11-", "12.9", ""],	name:"Ultranova", nick:""},
	{levels:["10-", "12.8", ""],	name:"KING is BACK!!", nick:"KING is BACK"},
	{levels:["10-", "12.0", ""],	name:"曖昧mind", nick:""},
	{levels:["9+", "11.9", ""],	name:"Limit Break", nick:""},
	{levels:["10.0", "12.0", ""],	name:"ユビキリ", nick:""},
	{levels:["9+", "11.7", ""],	name:"オトヒメモリー☆ウタゲーション", nick:"乙姫"},
	{levels:["9+", "12.7", ""],	name:"夢花火", nick:""},
	{levels:["9+", "11.9", ""],	name:"いっしそう電☆舞舞神拳！", nick:"舞舞神拳"},
	{levels:["11-", "13.2", ""],	name:"Panopticon", nick:""},
	{levels:["10+", "12.9", ""],	name:"四月の雨", nick:""},
	{levels:["11.5", "13.1", ""],	name:"ねぇ、壊れタ人形ハ何処へ棄テらレるノ？", nick:"壊れタ人形"},
	{levels:["10-", "12.4", ""],	name:"Imitation:Loud Lounge", nick:"Imitation"},
	{levels:["10+", "12.9", ""],	name:"HERA", nick:""},
	{levels:["10-", "12.6", ""],	name:"Selector", nick:""},
	{levels:["11.7", "13.3", ""],	name:"AMAZING MIGHTYYYY!!!!", nick:"MIGHTYYYY"},
	{levels:["10+", "13.2", ""],	name:"CITRUS MONSTER", nick:"シトラス"},
	{levels:["11.0", "12.8", ""],	name:"Hyper Active", nick:""},
	{levels:["10+", "12.8", ""],	name:"Jumble Rumble", nick:"Jumble"},
	{levels:["10-", "12.9", ""],	name:"Nitrous Fury", nick:"ナイトラス"},
	{levels:["10-", "12.4", ""],	name:"Revive The Rave", nick:"Revive"},
	{levels:["10-", "12.7", ""],	name:"GEMINI -M-", nick:"GEMINI"},
	{levels:["9-", "12.4", ""],	name:"スリップフリップ", nick:""},
	{levels:["11.3", "12.9", ""],	name:"天火明命", nick:""},
	{levels:["10-", "12.8", ""],	name:"7thSense", nick:""},
	{levels:["10+", "12.9", ""],	name:"Lividi", nick:""},
	{levels:["10+", "13.3", ""],	name:"Axeria", nick:""},
	{levels:["10-", "12.7", ""],	name:"閃鋼のブリューナク", nick:"ブリューナク"},
	{levels:["10+", "13.3", ""],	name:"ガラテアの螺旋", nick:"ガラテア"},
	{levels:["11.0", "13.0", ""],	name:"Caliburne ～Story of the Legendary sword～", nick:"Caliburne"},
	{levels:["11-", "13.4", ""],	name:"Our Wrenally", nick:"あわれなり"},
	{levels:["11-", "13.2", ""],	name:"Contrapasso -paradiso-", nick:"コントラ"},
	{levels:["10.0", "13.0", ""],	name:"Oshama Scramble!", nick:"Oshama"},
	{levels:["11.0", "12.8", ""],	name:"Garakuta Doll Play", nick:"ガラクタ"},
	{levels:["10-", "11.9", "11.7"],	name:"Blew Moon", nick:"ぶるむん"},
	{levels:["11-", "12.2", ""],	name:"We Gonna Party", nick:""},
	{levels:["10.4", "12.9", ""],	name:"MYTHOS", nick:""},
	{levels:["10+", "12.4", ""],	name:"Life Feels Good", nick:""},
	{levels:["11-", "13.1", ""],	name:"Glorious Crown", nick:"グロクラ"},
	{levels:["10.6", "12.9", ""],	name:"Aiolos", nick:""},
	{levels:["9+", "12.6", ""],	name:"LANCE", nick:""},
	{levels:["9-", "12.0", ""],	name:"Dragoon", nick:""},
	{levels:["10-", "12.4", ""],	name:"Death Scythe", nick:"デスサ"},
	{levels:["10-", "11.1", ""],	name:"LUCIA", nick:""},
	{levels:["10-", "12.7", ""],	name:"DON’T  STOP  ROCKIN’", nick:"ドンスト"},
	{levels:["10-", "12.5", ""],	name:"oboro", nick:""},
	{levels:["9.2", "12.6", ""],	name:"CYCLES", nick:""},
	{levels:["9+", "12.3", ""],	name:"Lionheart", nick:""},
	{levels:["10-", "11.3", ""],	name:"Heartbeats", nick:""},
	{levels:["10-", "11.9", ""],	name:"Acceleration", nick:"アクセラ"},
	{levels:["10-", "11.3", ""],	name:"End of Twilight", nick:"Twilight"},
	{levels:["9-", "11.3", ""],	name:"JUMPIN' JUMPIN'", nick:"JUMPIN'"},
	{levels:["9+", "12.4", ""],	name:"L'épilogue", nick:"レピローグ"},
	{levels:["10-", "12.6", ""],	name:"FEEL ALIVE", nick:"フィルアラ"},
	{levels:["9+", "12.2", ""],	name:"FEEL the BEATS", nick:"フィルビー"},
	{levels:["9-", "11.7", ""],	name:"BREAK YOU!!", nick:""},
	{levels:["10+", "12.2", ""],	name:"Streak", nick:""},
	{levels:["10+", "12.2", ""],	name:"Spin me harder", nick:"スピンミー"},
	{levels:["11-", "12.2", ""],	name:"Turn around", nick:"タンアラ"},
	{levels:["10+", "10.9", ""],	name:"Link", nick:"Link(org)"},
	{levels:["11.6", "11.6", ""],	name:"Black Out", nick:""},
	{levels:["11-", "13.1", ""],	name:"Fragrance", nick:"フレグラ"},
	{levels:["10-", "12.8", ""],	name:"Nerverakes", nick:"ナーブ"},
	{levels:["9-", "11.2", ""],	name:"Sprintrances", nick:"スプリン"},
	{levels:["9+", "12.2", ""],	name:"air's gravity", nick:"エアグラ"},
	{levels:["9+", "11.5", ""],	name:"Night Fly", nick:""},
	{levels:["9+", "11.8", ""],	name:"Feel My Fire", nick:""},
	{levels:["10-", "10.6", "11.6"],	name:"Starlight Disco", nick:"ディスコ"},
	{levels:["9-", "11.9", ""],	name:"記憶、記録", nick:"記憶記録"},
	{levels:["9-", "11.1", ""],	name:"connecting with you", nick:"connecting"},
	{levels:["9-", "11.1", ""],	name:"アージェントシンメトリー", nick:"アージェント"},
	{levels:["9+", "11.2", ""],	name:"Dreampainter", nick:""},
	{levels:["9-", "11.0", ""],	name:"Monochrome Rainbow", nick:"Monochrome"},
	{levels:["10-", "12.1", ""],	name:"Beat of getting entangled", nick:"ビトゲ"},
	{levels:["9-", "11.3", ""],	name:"MIRROR of MAGIC", nick:""},
	{levels:["9-", "10.9", ""],	name:"Cosmic Train", nick:""},
	{levels:["9+", "11.7", ""],	name:"高気圧ねこロック", nick:"ねこロック"},
	{levels:["10-", "13.3", ""],	name:"Prophesy One", nick:"Prophesy"},
	{levels:["9-", "10.7", ""],	name:"BETTER CHOICE", nick:""},
	{levels:["10+", "12.2", ""],	name:"Get Happy", nick:""},
	{levels:["11-", "13.0", ""],	name:"System “Z”", nick:"System"},
	{levels:["10-", "13.2", ""],	name:"VERTeX", nick:""},
	{levels:["9-", "13.1", ""],	name:"ジングルベル", nick:"ジングル"},
	{levels:["10-", "12.3", ""],	name:"火炎地獄", nick:""},
	{levels:["9-", "11.8", ""],	name:"Danza zandA", nick:"Danza"},
	{levels:["9+", "11.9", ""],	name:"planet dancer", nick:""},
	{levels:["9-", "10.6", ""],	name:"ナミダと流星", nick:""},
	{levels:["9+", "12.2", ""],	name:"ピーマンたべたら", nick:"ピーマン"},
	{levels:["8-", "9.9", ""],	name:"maimaiちゃんのテーマ", nick:"maimaiちゃん"},
	{levels:["8-", "10.9", ""],	name:"Pixel Voyage", nick:"Pixel"},
	{levels:["8-", "9.7", ""],	name:"Sweets×Sweets", nick:""},
	{levels:["9-", "10.8", ""],	name:"虹と太陽", nick:""},
	{levels:["8-", "10.1", ""],	name:"Color My World", nick:""},
	{levels:["8+", "9.8", ""],	name:"True Love Song", nick:""},
	{levels:["7+", "9.3", ""],	name:"デコボコ体操第二", nick:"デコボコ体操"},
	{levels:["9+", "11.7", ""],	name:"ソーラン☆節", nick:"ソーラン節"},
	{levels:["8+", "11.8", ""],	name:"おても☆Yan", nick:"おてもYan"},
	{levels:["8-", "11.7", ""],	name:"炭★坑★節", nick:"炭坑節"},
	{levels:["7-", "10.6", ""],	name:"ネコ日和。", nick:""},
	{levels:["8+", "10.1", ""],	name:"犬日和。", nick:""},
	{levels:["9+", "10.7", ""],	name:"Endless World", nick:""},
	{levels:["10-", "11.0", ""],	name:"Backyun! －悪い女－", nick:"Backyun"},
	{levels:["10-", "10.1", ""],	name:"BaBan!! －甘い罠－", nick:"BaBan"},
	{levels:["8+", "10.3", ""],	name:"オレンジの夏", nick:""},
	{levels:["9-", "10.8", ""],	name:"ぴぴぱぷぅ！", nick:""},
	{levels:["10-", "12.3", ""],	name:"炎歌 -ほむらうた-", nick:"炎歌"},
	{levels:["9-", "10.6", ""],	name:"泣き虫O'clock", nick:""},
	{levels:["9+", "11.3", ""],	name:"maiム・maiム feat.週刊少年マガジン", nick:"maiム・maiム"},
	{levels:["8-", "11.5", ""],	name:"タカハせ！名人マン", nick:"名人マン"},
	{levels:["9-", "11.5", ""],	name:"みんなのマイマイマー", nick:"マイマイマー"},
	{levels:["8-", "11.2", ""],	name:"welcome to maimai!! with マイマイマー", nick:"welcome maimai"},
	{levels:["8-", "10.7", ""],	name:"ぐるぐるWASH！コインランドリー・ディスコ", nick:"コインランドリー"},
	{levels:["9-", "12.0", ""],	name:"Infantoon Fantasy", nick:"Infantoon"},
	{levels:["9-", "11.7", ""],	name:"幾四音-Ixion-", nick:"幾四音"},
	{levels:["9-", "10.7", ""],	name:"Counselor", nick:""},
	{levels:["8-", "11-", ""],	name:"Invitation", nick:""},
	{levels:["9-", "11.4", ""],	name:"その群青が愛しかったようだった", nick:"群青"},
	{levels:["11-", "13.0", ""],	name:"The wheel to the right", nick:"The wheel"},
	{levels:["9+", "12.0", ""],	name:"光線チューニング", nick:""},
	{levels:["9-", "12.4", ""],	name:"心象蜃気楼", nick:""},
	{levels:["9-", "11.7", ""],	name:"ハート・ビート", nick:"せりな"},
	{levels:["9+", "11.5", ""],	name:"brilliant better", nick:"あーりん"},
	{levels:["7+", "11.2", ""],	name:"フォルテシモBELL", nick:"なずな"},
	{levels:["9-", "12.2", ""],	name:"DETARAME ROCK&ROLL THEORY", nick:"なる"},
	{levels:["8-", "11.7", ""],	name:"私の中の幻想的世界観及びその顕現を想起させたある現実での出来事に関する一考察", nick:"ちゃんなぎ"},
	{levels:["10+", "12.4", ""],	name:"猛進ソリストライフ！", nick:"なっち"},
	{levels:["10-", "12.5", ""],	name:"My Dearest Song", nick:"しろな"},
	{levels:["8+", "12.0", ""],	name:"無敵We are one!!", nick:"We are one"},
	{levels:["9-", "11.7", ""],	name:"Change Our MIRAI！", nick:"MIRAI"},
	{levels:["9+", "11.5", ""],	name:"ドキドキDREAM!!!", nick:"ドキドキDREAM"},
	{levels:["9-", "11.9", ""],	name:"言ノ葉カルマ", nick:""},
	{levels:["8+", "11.3", ""],	name:"悪戯", nick:""},
	{levels:["9-", "11.4", ""],	name:"言ノ葉遊戯", nick:""},
	{levels:["8-", "10.4", ""],	name:"りばーぶ", nick:""},
	{levels:["9-", "10.3", "10.7"],	name:"洗脳", nick:""},
	{levels:["9-", "11.3", ""],	name:"Barbed Eye", nick:""},
	{levels:["9-", "12.0", ""],	name:"空威張りビヘイビア", nick:"ビヘイビア"},
	{levels:["9+", "12.8", ""],	name:"分からない", nick:""},
	{levels:["9+", "11.8", ""],	name:"天国と地獄 -言ノ葉リンネ-", nick:"言ノ葉リンネ"},
	{levels:["9+", "12.2", ""],	name:"相思創愛", nick:""}
];


function diff2tmp(diff)
{
	var difftable =
		[["7-", 7.0], ["7+", 7.7], ["8-", 8.0], ["8+", 8.7], ["9-", 9.0], ["9+", 9.7],["10-", 10.0], 
 			["10+", 10.7], ["11-", 11.0], ["11+", 11.7], ["12-", 12.0], ["12+", 12.7], ["13-", 13.0]];
	for(var i=0; i< difftable.length; i++)
	{
		if(0 == diff.indexOf(difftable[i][0]))
		{
			return 1*difftable[i][1];
		}
	}
	return 1*diff;
}

function diff2s(difficallity)
{
	var tmp = diff2tmp(difficallity),retval=0;
	switch(Math.floor(tmp))
	{
		case 13:
			retval = tmp+0.5;
			break;
		case 12:
			retval = 12.00+(tmp*1-12.00)*(3/2);
			break;
		default:
			retval = tmp;
			break;
	}
	return Math.round(retval*100)/100;
}

function diff2sss(difficallity)
{
	var tmp=diff2tmp(difficallity), retval=0;
	switch(Math.floor(tmp))
	{
		case 13:
			retval = tmp*1+3.0;
			break;
		case 12:
			retval = tmp*2-10.00;
			break;
		case 11:
			retval = 2.00+tmp*1;
			break;
		case 10:
			retval = 7.50+tmp/2;
			break;
		case 9:
		case 8:
			retval = 2.50+tmp*1;
			break;
		case 7:
		default:
			retval = 6.50+tmp/2;
			break;
	}
	return Math.round(retval*100)/100;
}

function rate_XtoY(basis, max, gap, n)
{
	return basis+(max-basis)*n/gap
}

function arch2rate_10000(achievement, difficallity)
{
	var temp = 0;

		var rate_sss = Math.round(10000*diff2sss(difficallity));
		var rate_ss = rate_sss - 10000;
		var rate_s = Math.round(10000*diff2s(difficallity));
		var diff10000 = Math.round(10000*diff2tmp(difficallity));
		var achi_100 = Math.round(achievement*100);
		if(achi_100 >= 10000) {
			temp = rate_sss
		} else if (achi_100 >= 9900) {
			temp = rate_XtoY(rate_ss,     rate_sss-2500,  100, achi_100-9900);
		} else if (achi_100 >= 9700) {
			temp = rate_XtoY(rate_s,      rate_ss-2500,   200, achi_100-9700);
		} else if (achi_100 >= 9400) {
			temp = rate_XtoY(diff10000-15000, rate_s-10000,   300, achi_100-9400);
		} else if (achi_100 >= 9000) {
			temp = rate_XtoY(diff10000-20000, diff10000-15000,  400, achi_100-9000);
		} else if (achi_100 >= 8000) {
			temp = rate_XtoY(diff10000-30000, diff10000-25000, 1000, achi_100-8000);
		} else if (achi_100 >= 6000) {
			temp = rate_XtoY(diff10000*0.4, diff10000-40000, 2000, achi_100-6000);
		} else if (achi_100 >= 4000) {
			temp = rate_XtoY(diff10000*0.2, diff10000*0.4, 2000, achi_100-4000);
		} else if (achi_100 >= 2000) {
			temp = rate_XtoY(diff10000*0.1, diff10000*0.2, 1000, achi_100-2000);
		} else if (achi_100 >= 1000) {
			temp = rate_XtoY(0,           diff10000*0.1, 1000, achi_100-1000);
		} else {
			temp = 0;
		}
	temp -= temp % 1.0;
	return temp;
}

function get_nextpage_address(j,html,diff)	//次の楽曲リストページを探す
{
	var nextaddr="";
	var e = $(j).find('a');	// hrefが含まれると思われるものlist
	var e_length=e.length;	// その個数
	for(var i=0; i<e_length; i++)	//楽曲リストページ用ループ
	{
		var url=e[i].getAttribute('href');	// <a>内のリンク先取得
		if(url.indexOf(html + "?d=" + diff) == 0)
		{
			return url;
		}
	}
	for(var i=0; i<e_length; i++)	//楽曲リストページ以外用ループ
	{
		var url=e[i].getAttribute('href');
		if(url.indexOf(html) == 0)
		{
			return url + "&d=" + diff;
		}
	}

	return nextaddr;
}

function get_music_mdata2(achive_list, addr, diff)	//データ取得と次のアドレス
{
	var nextaddr="";

	$.ajax({type:'GET', url:addr, async: false})
		.done(function(data)
		{
			//成功時の処理本体
			var m=$(data).find("#accordion");
			var m_length=m.find("h3").length;
			for(var i=0; i<m_length; i++)
			{
				achive_list.push(
					[m.find("h3")[i].innerText.trim(), 
					 m.find("tbody")[i].children[1].children[2].innerText.trim().replace(/[(達成率) %]/g, "")]
					);
			}
			if(diff != 6)
				nextaddr=get_nextpage_address($(data), "music.html", diff+1);
			else
				nextaddr=get_nextpage_address($(data), "home.html", 0);				
		});

	return nextaddr;
}

function data2rating(golliramode)
{
	var mlist_length=ma_list.length, re_length=re_list.length, re_count=0, lvlist_count=0;

	for(var i=0; i<mlist_length; i++)
	{
//		console.log(i + "\t" + ma_list[i][0] + "\n");
		//lv表と取得データの名前が一致なら処理を進める
		if(ma_list[i][0].indexOf(inner_lv[lvlist_count].name) == 0)
		{
			datalist.push({
				name:ma_list[i][0],
				nick:inner_lv[lvlist_count].nick,
				achive:[(golliramode == 0)?ex_list[i][1]:0,
				ma_list[i][1],
				(re_count >= re_length)?"---":
					(re_list[re_count][0]==ma_list[i][0])?re_list[re_count++][1]:"---"],
				lv:inner_lv[lvlist_count].levels,
				rate_values:[0,	0, 0],
				music_rate : 0
			});
			datalist[i].rate_values[0] =
				(golliramode == 0)?arch2rate_10000(datalist[i].achive[0], datalist[i].lv[0]):0;
			datalist[i].rate_values[1] = arch2rate_10000(datalist[i].achive[1], datalist[i].lv[1]);
			datalist[i].rate_values[2] = arch2rate_10000(datalist[i].achive[2], datalist[i].lv[2]);
			datalist[i].music_rate = Math.max.apply(null, datalist[i].rate_values);
			
			lvlist_count++;
		}
		else	// 違う場合は空データを入れて終了。
		{
			datalist.push(
				{name:ma_list[i][0],
				 nick:"",
				achive:[(golliramode == 0)?ex_list[i][1]:0,
						ma_list[i][1],
						(re_count >= re_length)?"---":
							(re_list[re_count][0]==ma_list[i][0])?re_list[re_count++][1]:"---"],
				lv:["","",""],
				rate_values:[0,	0, 0],
				music_rate : 0
			});
		}
//		console.log(datalist[i]);
	}
	datalist.sort(function(a,b){return b.music_rate-a.music_rate});
	return;
}
	
function print_result(golliramode)
{
	var str="", next_count=0, dlist_length=datalist.length;
	for(var i=0; i<30; i++)
	{
		str+= i+1 + "/" + datalist[i].name + " : ";
		str+= Math.round(Math.floor(datalist[i].music_rate/100))/100 + "\n";
		if(golliramode == 0)
		{
			str+= "  EX(" + datalist[i].lv[0] + ")/" + datalist[i].achive[0] + " : ";
			str+= Math.round(Math.floor(datalist[i].rate_values[0]/100))/100 + "\n"
		}
		str+= "  MA(" + datalist[i].lv[1] + ")/" + datalist[i].achive[1] + " : "
		str+= Math.round(Math.floor(datalist[i].rate_values[1]/100))/100 + "\n";
		if(datalist[i].lv[2] !="")
		{
			str+= "  Re(" + datalist[i].lv[2] + ")/" + datalist[i].achive[2] + " : ";
			str+= Math.round(Math.floor(datalist[i].rate_values[2]/100))/100 + "\n"
		}
		if(i%5==4)
		{
			confirm(str);
			str="";
		}
	}

	if(str != "")
	{
		confirm(str);
		str="";
	}
	
	
	for(var i=30; next_count<15 && i<dlist_length; i++)
	{
		if(datalist[i].music_rate == 0)	// 未プレー曲のみの場合、確認終了。
			break;
		var max_lv = Math.max(diff2tmp(datalist[i].lv[1]), diff2tmp(datalist[i].lv[2]));
		if(datalist[29].music_rate >= arch2rate_10000(100, String(max_lv)))
			continue;
		
		str+= i+1 + "/" + datalist[i].name + " : ";
		str+= Math.round(Math.floor(datalist[i].music_rate/100))/100 + "\n";
		if(golliramode == 0)
		{
			str+= "  EX(" + datalist[i].lv[0] + ")/" + datalist[i].achive[0] + " : ";
			str+= Math.round(Math.floor(datalist[i].rate_values[0]/100))/100 + "\n";
		}
		str+= "  MA(" + datalist[i].lv[1] + ")/" + datalist[i].achive[1] + " : "
		str+= Math.round(Math.floor(datalist[i].rate_values[1]/100))/100 + "\n";
		if(datalist[i].lv[2] !="")
		{
			str+= "  Re(" + datalist[i].lv[2] + ")/" + datalist[i].achive[2] + " : ";
			str+= Math.round(Math.floor(datalist[i].rate_values[2]/100))/100 + "\n";
		}
		if(next_count%5==4)
		{
			confirm(str);
			str="";
		}
		next_count++;
	}
	
	if(str != "")
		confirm(str);

}

var result_str="";
function print_result2(golliramode)
{
	var rslt_win = window.open("", '_blank');
	var lv_count =0;

	rslt_win.document.write("<html>");
	rslt_win.document.write("<head>");
	rslt_win.document.write("<title>舞レート解析<\/title>");
	rslt_win.document.write("<\/head>");
	rslt_win.document.write("<table border=1 align=center>");
	
	result_str = "<tr>";
	result_str += "<th>RANK<\/th>";
	result_str += "<th>Music Rate<\/th>";
	result_str += "<th><font color=\"#b44c97\">Re:MASTER<\/font><\/th>"
	result_str += "<th bgcolor=\"#b44c97\"><font color=\"white\">MASTER<\/font><\/th>";
	if(golliramode == 0)
	{
		result_str += "<th bgcolor=\"#f62626\"><font color=\"white\">EXPERT<\/font><\/th>";
	}
	result_str += "<\/tr>"
	rslt_win.document.write(result_str);
	
	for(var i=0; i<30; i++)
	{
		result_str = "";
		
		result_str += "<tr>";
		result_str += "<th colspan=" + (5-golliramode) + ">" + datalist[i].name + "<\/th>"
		result_str += "<\/tr>"
	
		result_str += "<tr>";
		result_str += "<td align=\"center\">" + (i+1) + "<\/td>";
		result_str += "<td>" + Math.round(Math.floor(datalist[i].music_rate/100))/100 + "<\/td>";
		
		result_str += "<td bgcolor=\"#ffffff\" align=\"center\"><font color=\"#b44c97\">";
		result_str += datalist[i].lv[2] + "<br>";
		result_str += datalist[i].achive[2] + "%<br>"
		result_str += Math.round(Math.floor(datalist[i].rate_values[2]/100))/100;
		result_str += "<\/font><\/td>";
		
		result_str += "<td bgcolor=\"#b44c97\" align=\"center\"><font color=\"#ffffff\">";
		result_str += datalist[i].lv[1] + "<br>";
		result_str += datalist[i].achive[1] + "%<br>"
		result_str += Math.round(Math.floor(datalist[i].rate_values[1]/100))/100;
		result_str += "<\/font><\/td>";

		if(golliramode == 0)
		{
			result_str += "<td bgcolor=\"#f62626\" align=\"center\"><font color=\"#ffffff\">";
			result_str += datalist[i].lv[0] + "<br>";
			result_str += datalist[i].achive[0] + "%<br>"
			result_str += Math.round(Math.floor(datalist[i].rate_values[0]/100))/100;
			result_str += "<\/font><\/td>";
		}
		result_str += "<\/tr>";
		
		rslt_win.document.write(result_str);
	}
	
	rslt_win.document.write("<\/table>");
	rslt_win.document.write("<\/html>");
	rslt_win.document.close();
}


function print_result_short()
{
	var str="", next_count=0, dlist_length=datalist.length, tmp_rate=0;
	for(var i=0; i<30; i++)
	{
		if(datalist[i].music_rate == 0)	// 未プレー曲のみの場合、確認終了。
			break;

		if(datalist[i].nick != "")
		{
			str += (i+1) + "/" + datalist[i].nick;
		}
		else if(datalist[i].name.length < 13)
		{
			str += (i+1) + "/" + datalist[i].name;
		}
		else
		{
			str += (i+1) + "/" + datalist[i].name.slice(0, 12) + "～";
		}
		
		tmp_rate = datalist[i].music_rate;
		(datalist[i].rate_values[0] == tmp_rate)?(str+=" 赤 : "):
			(datalist[i].rate_values[2] == tmp_rate)?(str+=" 白 : "):(str+= " : ");
		str += Math.round(Math.floor(tmp_rate/100))/100 + "\n";

		if(i%10==9)
		{
			confirm(str);
			str="";
		}
	}
	
	if(str != "")
		confirm(str);

	str="";
	for(var i=30; next_count<30 && i<dlist_length; i++)
	{
		if(datalist[i].music_rate == 0)	// 未プレー曲のみの場合、確認終了。
			break;
		var max_lv = Math.max(diff2tmp(datalist[i].lv[1]), diff2tmp(datalist[i].lv[2]));
		if(datalist[29].music_rate >= arch2rate_10000(100, String(max_lv)))
			continue;
		
		if(datalist[i].nick != "")
		{
			str += (i+1) + "/" + datalist[i].nick;
		}
		else if(datalist[i].name.length < 13)
		{
			str += (i+1) + "/" + datalist[i].name;
		}
		else
		{
			str += (i+1) + "/" + datalist[i].name.slice(0, 12) + "～";
		}
		
		tmp_rate = datalist[i].music_rate;
		(datalist[i].rate_values[0] == tmp_rate)?(str+=" 赤 : "):
			(datalist[i].rate_values[2] == tmp_rate)?(str+=" 白 : "):(str+= " : ");
		str += Math.round(Math.floor(tmp_rate/100))/100 + "\n";

		if(next_count%10==9)
		{
			confirm(str);
			str="";
		}
		next_count++;
	}
	
	if(str != "")
		confirm(str);

}

function get_your_id(addr)
{
	$.ajax({type:'GET', url:addr, async: false})
		.done(function(data)
		{
			//成功時の処理本体
			var m=$(data).find('.status_data')[0];
			your_id = m.children[1].innerText;
			your_rating = m.children[7].innerText.trim().replace(/MAX /g, "");
		});
	 return your_id;
}
	
function tweet_best(id)
{
	var str = ""
	str = your_id + " :" + your_rating + "%0D%0A";
	for(var i=0; i<5; i++)
	{
		if(datalist[i].nick != "")
		{
			str += datalist[i].nick;
		}
		else if(datalist[i].name.length < 13)
		{
			str += datalist[i].name;
		}
		else
		{
			str += datalist[i].name.slice(0, 12) + "%ef%bd%9e";
		}
		
		tmp_rate = datalist[i].music_rate;
		(datalist[i].rate_values[0] == tmp_rate)?(str+=" 赤 : "):
			(datalist[i].rate_values[2] == tmp_rate)?(str+=" 白 : "):(str+= " : ");
		str += Math.round(Math.floor(tmp_rate/100))/100 + "%0D%0A";

	}
	if(window.open
	   ("https://twitter.com/intent/tweet?hashtags=" + hashtag + "&text=" + str, '_blank') == null)
	{
		confirm("ポップアップブロックを無効にしてください。");
	}

}
	
function analyzing_rating()
{
	var best30=0, history434=0, best_ave=0, best_limit=0, hist_limit=0, tmp=0, str="";
	var best_rating=0, top_rate=0, recent_rating=0, hist_rating=0, best_left=0, hist_left=0;
	for(var i=0; i<30; i++)
	{
		tmp = Math.round(Math.floor(datalist[i].music_rate/100));
		best30+=tmp;
	}
	
	history434=best30;
	for(var i=30 ;i<434;i++)
	{
		tmp = Math.round(Math.floor(datalist[i].music_rate/100));
		history434+=tmp;
	}

	best_ave = Math.round(Math.floor(best30/30))/100;
	top_rate = Math.round(Math.floor(datalist[0].music_rate/100))/100;
	best_limit = Math.round(Math.floor(datalist[29].music_rate/100))/100;
	hist_limit = Math.round(Math.floor(datalist[433].music_rate/100))/100;
	if(hist_limit<=0)
	{
		var count=0;
		for(count=0; datalist[count].music_rate > 0; count++);
		hist_limit= "0 (あと" + (434-count) + "曲)";
	}
	
	best_rating = Math.floor(best30/44)/100;	//best30はすでにRating*100
	recent_rating = Math.floor(Math.floor(datalist[0].music_rate/100)*10/44)/100;
	hist_rating = Math.round(Math.floor(history434/(434*11)))/100;	// multiply 4/(434*44)
	
	best_left = (44 - Math.ceil(best30%44))/100;
	hist_left = (434*11 - Math.ceil(history434%44))/100;
	
	var all = Math.round((best_rating + recent_rating + hist_rating)*100)/100;
	
	str += your_id + "\n";
	str += "現在のRating : " + your_rating + "\n\n";
	str += " BEST30の平均 : " + best_ave + " (=" + best30/100 + "/30)\n";
	str += " BEST枠下限 : " + best_limit + "\n";
	str += " HISTORY枠下限 : " + hist_limit + "\n\n";
	str += "予想到達可能Rating : " + all + "\n";
	str += " BEST    : " + best_rating + "\n";
	str += "  (BEST30枠+" + best_left + "でRating+0.01)\n";
	str += " RECENT  : " + recent_rating + "\n";
	str += "  (単曲レートTOP" + top_rate + "を10回出す）\n";
	str += " HISTORY : " + hist_rating + "\n";
	str += "  (HISTORY434枠+" + hist_left + "でRating+0.01)\n";
	str += "\n\n   Supported by sgimera3.hatenablog.com\n\n";
	
	str += "結果をツイートしますか？"
	
	if(confirm(str))
	{
		// tweet用文字列
		str = your_id + " :" + your_rating + "%0D%0A";
		str += "BEST%2f平均%3a" + best_ave + " 下限:" + best_limit + "%0D%0A";
		str += "HIST下限%3a" + hist_limit + "%0D%0A";
		str += "予想到達Rating%3a" + all + "%0D%0A";
		str += "B%3a" + best_rating + " %2B R%3a" + recent_rating + " %2B H%3a" + hist_rating + "%0D%0A";
//		str += "B:" + best_rating + " (" + best_left + ")%0D%0A";
//		str += "R:" + recent_rating + " (" + Math.round(Math.floor(datalist[0].music_rate/100))/100 + ")%0D%0A";
//		str += "H:" + hist_rating + " (" + hist_left + ")%0D%0A";
		if(window.open
		   ("https://twitter.com/intent/tweet?hashtags=" + hashtag + "&text=" + str, '_blank') == null)
		{
			confirm("ポップアップブロックを無効にしてください。");
		}
	}
	
}

var tmpstr = "--舞レート解析 (trial)--\n\n";
tmpstr += inner_lv.length + "songs(2017.10.17) version\n";
tmpstr += "Last Update 2017.10.29\n\n";
tmpstr += "Programmed by @sgimera";
if(!confirm(tmpstr))
	return;
	
tmpstr = "EXPERTのデータを取得しますか？"
var gollira = 0;
	
if(confirm(tmpstr))
{
	addr=get_nextpage_address($(document), "music.html", 4);	// EXPERTリストのアドレス取得 
	addr=get_music_mdata2(ex_list, addr, 4);	// EXPERTデータ取得&MASTERリストのアドレス取得
}
else
{
	gollira = 1;
	addr=get_nextpage_address($(document), "music.html", 5);	// EXPERTリストのアドレス取得 
}
	addr=get_music_mdata2(ma_list, addr, 5);	// MASTERのデータ取得&Re:MASTERリストのアドレス取得
	addr=get_music_mdata2(re_list, addr, 6);	// Re:MASTERのデータ取得&HOMEのアドレス取得
	tmpstr = get_your_id(addr);
	data2rating(gollira);	// データ集計
		
	if(confirm("BEST枠楽曲を出力しますか？\n（キャンセル押すと、纏め画面へ）"))
	{
		print_result_short();		
		if(confirm("TOP5をtweetしますか？"))
		{
			tweet_best();
		}
	}
	
	analyzing_rating();	// 纏め出力 + tweet用文言生成
	if(confirm("全楽曲データを出力しますか？\n（試作品）"))
	{
		print_result2(gollira);
	}
	window.location.href = addr;	//ホームに移動

})()
