javascript:
var mra_update_mlist = "2017.12.14";	/* 公式の楽曲リスト更新日 タイトルに表示*/
var mra_update_llist = "2017.12.14";	/* Lv.情報、名前変更日 */
var maimai_inner_lv = [
	{levels:["8-", "11-", ""],	name:"ようこそジャパリパークへ", nick:""},
	{levels:["8-", "11+", ""],	name:"前前前世", nick:""},
	{levels:["9-", "11+", ""],	name:"REVIVER オルタンシア・サーガ -蒼の騎士団- オリジナルVer.", nick:""},
	{levels:["9-", "11-", ""],	name:"あ・え・い・う・え・お・あお!!", nick:""},
	{levels:["9-", "11+", ""], 	name:"日本の米は世界一", nick:""},
	{levels:["8-", "11-", ""],	name:"PERFECT HUMAN", nick:""},
	{levels:["8+", "11+", ""],	name:"SUSHI食べたい feat.ソイソース", nick:""},
	{levels:["8-", "11+", ""],	name:"ポップミュージックは僕のもの", nick:""},
	{levels:["8+", "11-", ""],	name:"きらっせ☆ウッド村ファーム", nick:""},
	{levels:["8-", "11+", ""],	name:"シュガーソングとビターステップ", nick:""},
	{levels:["9-", "11-", ""],	name:"紅蓮の弓矢", nick:""},
	{levels:["7-", "8+", ""],	name:"ようかい体操第一", nick:""},
	{levels:["7-", "9+", ""],	name:"ゲラゲラポーのうた", nick:""},
	{levels:["7-", "10-", ""],	name:"夏祭り", nick:""},
	{levels:["10-", "11-", ""],	name:"Scatman (Ski Ba Bop Ba Dop Bop)", nick:""},
	{levels:["8+", "11-", ""],	name:"fake!fake!", nick:""},
	{levels:["8+", "11-", ""],	name:"HIMITSUスパーク", nick:""},
	{levels:["8-", "11-", ""],	name:"でんでんぱっしょん", nick:""},
	{levels:["8-", "10-", ""],	name:"Dragon Night", nick:""},
	{levels:["7+", "10-", ""],	name:"POP STAR", nick:""},
	{levels:["8-", "10-", ""],	name:"Love or Lies", nick:""},
	{levels:["7+", "10-", ""], 	name:"jelly", nick:""},
	{levels:["7+", "9+", ""],	name:"美しく燃える森", nick:""},
	{levels:["8-", "10-", ""],	name:"Love You", nick:""},
	{levels:["8+", "10-", ""],	name:"come again", nick:""},
	{levels:["7+", "9-", "11-"],	name:"Future", nick:""},
	{levels:["8-", "11+", ""],	name:"ウッーウッーウマウマ(ﾟ∀ﾟ)", nick:""},
	{levels:["8+", "10-", ""],	name:"NIGHT OF FIRE", nick:""},
	{levels:["8-", "10-", ""],	name:"YATTA!", nick:""},
	{levels:["8+", "10+", ""],	name:"1/3の純情な感情", nick:""},
	{levels:["8-", "10-", ""], 	name:"バラライカ", nick:""},
	{levels:["8-", "11-", "11+"],	name:"若い力 -SEGA HARD GIRLS MIX-", nick:""},
	{levels:["9+", "11+", ""],	name:"セハガガガンバッちゃう！！", nick:""},
	{levels:["8+", "10+", ""],	name:"ラブリー☆えんじぇる!!", nick:""},
	{levels:["8+", "10+", ""],	name:"Stand Up!!!!", nick:""},
	{levels:["8+", "12-", ""],	name:"真・ハンサム体操でズンドコホイ", nick:""},
	{levels:["8-", "11-", ""],	name:"GET!! 夢&DREAM", nick:""},
	{levels:["8-", "10-", ""],	name:"君の知らない物語", nick:""},
	{levels:["7+", "10+", ""],	name:"コネクト", nick:""},
	{levels:["9-", "12-", ""],	name:"SAVIOR OF SONG", nick:""},
	{levels:["8-", "10-", ""],	name:"Luminize", nick:""},
	{levels:["8-", "11-", ""],	name:"秘密の扉から会いにきて", nick:""},
	{levels:["8-", "10+", ""],	name:"イチズレシピ", nick:""},
	{levels:["7+", "10+", ""],	name:"Daydream café", nick:""},
	{levels:["7-", "10-", ""],	name:"ふ・れ・ん・ど・し・た・い", nick:""},
	{levels:["7+", "10-", ""],	name:"Touch Tap Baby", nick:""},
	{levels:["7-", "9+", ""],	name:"極上スマイル", nick:""},
	{levels:["8+", "10-", ""],	name:"7 Girls War", nick:""},
	{levels:["8-", "10+", ""],	name:"Jumping!!", nick:""},
	{levels:["7-", "10-", ""],	name:"ゆりゆららららゆるゆり大事件", nick:""},
	{levels:["9-", "11-", ""],	name:"いぇす！ゆゆゆ☆ゆるゆり♪♪", nick:""},
	{levels:["9-", "11-", ""],	name:"ちょちょちょ！ゆるゆり☆かぷりっちょ！！！", nick:""},
	{levels:["8-", "11-", ""],	name:"未来(ソラ)の歌", nick:""},
	{levels:["9-", "11-", ""],	name:"ホシトハナ", nick:""},
	{levels:["9-", "12-", ""],	name:"Paradisus-Paradoxum", nick:""},
	{levels:["8-", "11-", ""],	name:"かくしん的☆めたまるふぉ～ぜっ！", nick:""},
	{levels:["8+", "11+", ""],	name:"ファッとして桃源郷", nick:""},
	{levels:["9-", "12-", ""],	name:"回レ！雪月花", nick:""},
	{levels:["7+", "10+", ""],	name:"SAKURAスキップ", nick:""},
	{levels:["8+", "11-", ""],	name:"Now Loading!!!!", nick:""},
	{levels:["9-", "12-", ""],	name:"砂の惑星 feat. HATSUNE MIKU", nick:""},
	{levels:["10-", "12+", ""],	name:"拝啓ドッペルゲンガー", nick:""},
	{levels:["9+", "12-", ""],	name:"アンノウン・マザーグース", nick:""},
	{levels:["9+", "12-", ""],	name:"リンカーネイション", nick:""},
	{levels:["9-", "12-", ""],	name:"六兆年と一夜物語", nick:""},
	{levels:["10+", "12+", ""],	name:"幸せになれる隠しコマンドがあるらしい", nick:""},
	{levels:["8-", "11+", ""],	name:"フラジール", nick:""},
	{levels:["9-", "12-", ""],	name:"ちがう!!!", nick:""},
	{levels:["9+", "11-", ""],	name:"名探偵連続殺人事件", nick:""},
	{levels:["8-", "10-", ""],	name:"東京レトロ", nick:""},
	{levels:["10-", "12-", ""],	name:"ARROW", nick:""},
	{levels:["9+", "11+", ""],	name:"ヘルシーエンド", nick:""},
	{levels:["9-", "12-", "12+"],	name:"ロストワンの号哭", nick:""},
	{levels:["9-", "12-", ""],	name:"千本桜", nick:""},
	{levels:["9-", "12-", ""],	name:"チュルリラ・チュルリラ・ダッダッダ！", nick:""},
	{levels:["8-", "12-", ""],	name:"ウミユリ海底譚", nick:""},
	{levels:["9+", "11+", ""],	name:"白ゆき", nick:""},
	{levels:["10-", "12+", ""],	name:"初音ミクの消失", nick:""},
	{levels:["9-", "11-", ""],	name:"天ノ弱", nick:""},
	{levels:["9-", "12-", ""],	name:"厨病激発ボーイ", nick:""},
	{levels:["10+", "12+", ""],	name:"脳漿炸裂ガール", nick:""},
	{levels:["9-", "12-", ""],	name:"+♂", nick:""},
	{levels:["9-", "11+", ""],	name:"おこちゃま戦争", nick:""},
	{levels:["8+", "10+", ""],	name:"だんだん早くなる", nick:""},
	{levels:["8-", "10-", ""],	name:"恋愛裁判", nick:""},
	{levels:["8+", "10-", "11+"],	name:"からくりピエロ", nick:""},
	{levels:["9-", "11-", ""],	name:"ゴーストルール", nick:""},
	{levels:["8-", "10+", ""],	name:"おじゃま虫", nick:""},
	{levels:["9-", "11+", ""],	name:"ストリーミングハート", nick:""},
	{levels:["9-", "10-", ""],	name:"妄想税", nick:""},
	{levels:["9-", "12-", ""],	name:"毒占欲", nick:""},
	{levels:["8+", "10.7", ""],	name:"むかしむかしのきょうのぼく", nick:"むかしむかし"},
	{levels:["8+", "11+", ""],	name:"二息歩行", nick:""},
	{levels:["9-", "10+", ""],	name:"モザイクロール", nick:""},
	{levels:["9-", "11-", ""],	name:"弱虫モンブラン", nick:""},
	{levels:["9+", "11+", ""],	name:"39", nick:""},
	{levels:["7+", "11-", ""],	name:"＊ハロー、プラネット。", nick:""},
	{levels:["8+", "12-", ""],	name:"Mr. Wonderland", nick:""},
	{levels:["10-", "12-", ""],	name:"吉原ラメント", nick:""},
	{levels:["8-", "10+", ""],	name:"ココロ", nick:""},
	{levels:["9+", "11+", ""],	name:"ゆっくりしていってね！！！", nick:""},
	{levels:["9-", "11+", ""],	name:"生きてるおばけは生きている", nick:""},
	{levels:["8-", "10+", ""],	name:"踊れオーケストラ", nick:""},
	{levels:["9-", "11+", ""],	name:"クノイチでも恋がしたい", nick:""},
	{levels:["7-", "10-", "11+"],	name:"いーあるふぁんくらぶ", nick:""},
	{levels:["8-", "12-", ""],	name:"赤心性：カマトト荒療治", nick:""},
	{levels:["8-", "11-", ""],	name:"イノコリ先生", nick:""},
	{levels:["9+", "12-", ""],	name:"ECHO", nick:""},
	{levels:["9-", "11+", ""],	name:"キミノヨゾラ哨戒班", nick:""},
	{levels:["8+", "11+", ""],	name:"しんでしまうとはなさけない！", nick:""},
	{levels:["8+", "11-", ""],	name:"エイリアンエイリアン", nick:""},
	{levels:["8+", "11+", ""],	name:"パーフェクト生命", nick:""},
	{levels:["8+", "11-", ""],	name:"やめろ！聴くな！", nick:""},
	{levels:["7+", "9+", ""],	name:"東京リアルワールド", nick:""},
	{levels:["8-", "11-", ""],	name:"すろぉもぉしょん", nick:""},
	{levels:["9+", "12+", ""],	name:"頓珍漢の宴", nick:""},
	{levels:["8-", "12-", ""],	name:"ありふれたせかいせいふく", nick:""},
	{levels:["8-", "11-", ""],	name:"絵の上手かった友達", nick:""},
	{levels:["10-", "12-", ""],	name:"腐れ外道とチョコレゐト", nick:""},
	{levels:["8+", "11+", ""],	name:"はじめまして地球人さん", nick:""},
	{levels:["8+", "10-", ""],	name:"アゲアゲアゲイン", nick:""},
	{levels:["9-", "11-", ""],	name:"M.S.S.Planet", nick:""},
	{levels:["8+", "11-", ""],	name:"不毛！", nick:""},
	{levels:["9-", "11+", ""],	name:"ネトゲ廃人シュプレヒコール", nick:""},
	{levels:["9+", "11-", ""],	name:"炉心融解", nick:""},
	{levels:["9-", "11-", ""],	name:"StargazeR", nick:""},
	{levels:["9-", "11+", ""],	name:"Just Be Friends", nick:""},
	{levels:["8+", "10+", ""],	name:"LOL -lots of laugh-", nick:""},
	{levels:["7+", "10-", ""],	name:"みくみくにしてあげる♪【してやんよ】", nick:""},
	{levels:["9+", "11-", ""],	name:"Sweet Devil", nick:""},
	{levels:["8-", "11-", ""],	name:"クローバー♣クラブ", nick:""},
	{levels:["8-", "11+", ""],	name:"深海少女", nick:""},
	{levels:["8-", "11-", ""],	name:"SPiCa", nick:""},
	{levels:["8-", "11-", ""],	name:"ぽっぴっぽー", nick:""},
	{levels:["9+", "12-", ""],	name:"Nyan Cat EX", nick:""},
	{levels:["9+", "11+", ""],	name:"どういうことなの！？", nick:""},
	{levels:["9+", "12-", ""],	name:"どうしてこうなった", nick:""},
	{levels:["9-", "12-", ""],	name:"ダブルラリアット", nick:""},
	{levels:["10-", "12-", ""],	name:"magician's operation", nick:""},
	{levels:["8-", "12-", ""],	name:"トルコ行進曲 - オワタ＼(^o^)／", nick:""},
	{levels:["8-", "9+", ""],	name:"リリリリ★バーニングナイト", nick:""},
	{levels:["8-", "9+", ""],	name:"イアイア★ナイトオブデザイア", nick:""},
	{levels:["7+", "10-", ""],	name:"ルカルカ★ナイトフィーバー", nick:""},
	{levels:["7-", "9+", ""],	name:"メグメグ☆ファイアーエンドレスナイト", nick:""},
	{levels:["8-", "9+", ""],	name:"教えて!! 魔法のLyric", nick:""},
	{levels:["7-", "11-", ""],	name:"おちゃめ機能", nick:""},
	{levels:["9-", "11-", ""],	name:"BAD∞END∞NIGHT", nick:""},
	{levels:["7-", "10+", ""],	name:"shake it!", nick:""},
	{levels:["8-", "10-", ""],	name:"Heart Beats", nick:""},
	{levels:["7-", "9+", ""],	name:"Sweetiex2", nick:""},
	{levels:["9-", "10-", "12-"],	name:"ロミオとシンデレラ", nick:""},
	{levels:["8-", "10+", ""],	name:"ハッピーシンセサイザ", nick:""},
	{levels:["9-", "10-", ""],	name:"ダンシング☆サムライ", nick:""},
	{levels:["8-", "10+", ""],	name:"ハロ／ハワユ", nick:""},
	{levels:["8+", "9+", "11-"],	name:"Tell Your World", nick:""},
	{levels:["8+", "11-", ""],	name:"Hand in Hand", nick:""},
	{levels:["10-", "11-", ""],	name:"アンハッピーリフレイン", nick:""},
	{levels:["9+", "12-", ""],	name:"裏表ラバーズ", nick:""},
	{levels:["8-", "11-", ""],	name:"ローリンガール", nick:""},
	{levels:["7-", "10-", "12-"],	name:"ワールズエンド・ダンスホール", nick:""},
	{levels:["8-", "9+", "11+"],	name:"マトリョシカ", nick:""},
	{levels:["8-", "9+", ""],	name:"パンダヒーロー", nick:""},
	{levels:["9+", "10-", ""],	name:"ゴーゴー幽霊船", nick:""},
	{levels:["9-", "11-", ""],	name:"セツナトリップ", nick:""},
	{levels:["9-", "11-", ""],	name:"放課後ストライド", nick:""},
	{levels:["9+", "11-", ""],	name:"カゲロウデイズ", nick:""},
	{levels:["10-", "12-", ""],	name:"夜咄ディセイブ", nick:""},
	{levels:["7+", "10-", ""],	name:"メランコリック", nick:""},
	{levels:["7+", "9-", "11-"],	name:"ZIGG-ZAGG", nick:""},
	{levels:["7+", "10-", ""],	name:"I ♥", nick:""},
	{levels:["8-", "10+", ""],	name:"ラブチーノ", nick:""},
	{levels:["9-", "10-", ""],	name:"スイートマジック", nick:""},
	{levels:["9+", "11-", ""],	name:"林檎華憐歌", nick:""},
	{levels:["9-", "12-", ""],	name:"木彫り鯰と右肩ゾンビ", nick:""},
	{levels:["9-", "12-", ""],	name:"デッドレッドガールズ", nick:""},
	{levels:["9-", "10-", ""],	name:"One Step Ahead", nick:""},
	{levels:["7-", "10-", ""],	name:"Link", nick:""},
	{levels:["7+", "9+", ""],	name:"ひみつをちょーだい", nick:""},
	{levels:["7+", "10-", ""],	name:"夏にキスしていいですか？", nick:""},
	{levels:["9-", "12-", ""],	name:"すーぱーぬこになりたい", nick:""},
	{levels:["9+", "12-", ""],	name:"バッド・ダンス・ホール", nick:""},
	{levels:["9-", "11-", ""],	name:"ないせんのうた", nick:""},
	{levels:["8+", "11-", ""],	name:"泡沫、哀のまほろば", nick:""},
	{levels:["8-", "11-", ""],	name:"華鳥風月", nick:""},
	{levels:["8-", "11-", ""],	name:"色は匂へど散りぬるを", nick:""},
	{levels:["8+", "11+", ""],	name:"月に叢雲華に風", nick:""},
	{levels:["8+", "11+", ""],	name:"宿題が終わらないっ！", nick:""},
	{levels:["9-", "11-", ""],	name:"東方スイーツ！～鬼畜姉妹と受難メイド～", nick:""},
	{levels:["9-", "11+", ""],	name:"taboo tears you up", nick:""},
	{levels:["9+", "11-", ""],	name:"Starlight Vision", nick:""},
	{levels:["9-", "12-", ""],	name:"幽闇に目醒めしは", nick:""},
	{levels:["8-", "11-", ""],	name:"物凄い勢いでけーねが物凄いうた", nick:""},
	{levels:["9-", "11+", ""],	name:"オーディエンスを沸かす程度の能力 feat.タイツォン", nick:""},
	{levels:["9+", "11+", ""],	name:"Club Ibuki in Break All", nick:""},
	{levels:["9-", "12-", ""],	name:"チルノのパーフェクトさんすう教室　⑨周年バージョン", nick:""},
	{levels:["8+", "11+", ""],	name:"チルノのパーフェクトさんすう教室", nick:""},
	{levels:["7+", "11+", ""],	name:"魔理沙は大変なものを盗んでいきました", nick:""},
	{levels:["9-", "12-", "12+"],	name:"患部で止まってすぐ溶ける～狂気の優曇華院", nick:""},
	{levels:["9-", "10+", ""],	name:"究極焼肉レストラン！お燐の地獄亭！", nick:""},
	{levels:["9-", "11-", ""],	name:"お嫁にしなさいっ！", nick:""},
	{levels:["9+", "11+", ""],	name:"キャプテン・ムラサのケツアンカー", nick:""},
	{levels:["9-", "11+", ""],	name:"ひれ伏せ愚民どもっ！", nick:""},
	{levels:["7-", "11+", ""],	name:"Grip & Break down !!", nick:""},
	{levels:["9-", "12-", ""],	name:"Cosmic Magic Shooter", nick:""},
	{levels:["8-", "10+", ""],	name:"しゅわスパ大作戦☆", nick:""},
	{levels:["8+", "10+", ""],	name:"全人類ノ非想天則", nick:""},
	{levels:["9-", "11+", ""],	name:"Endless, Sleepless Night", nick:""},
	{levels:["9-", "12-", ""],	name:"No Routine", nick:""},
	{levels:["10+", "12+", ""],	name:"Scream out! -maimai SONIC WASHER Edit-", nick:""},
	{levels:["9-", "12+", ""],	name:"幻想のサテライト", nick:""},
	{levels:["8-", "11-", ""],	name:"待チ人ハ来ズ。", nick:""},
	{levels:["8-", "11-", ""],	name:"響縁", nick:""},
	{levels:["9-", "11-", ""],	name:"囲い無き世は一期の月影", nick:""},
	{levels:["9-", "12+", ""],	name:"儚きもの人間", nick:""},
	{levels:["9-", "11+", ""],	name:"sweet little sister", nick:""},
	{levels:["9-", "11-", ""],	name:"ケロ⑨destiny", nick:""},
	{levels:["9+", "12-", ""],	name:"Phantasm Brigade", nick:""},
	{levels:["9-", "12-", ""],	name:"蒼空に舞え、墨染の桜", nick:""},
	{levels:["8-", "10+", ""],	name:"フラグメンツ -T.V. maimai edit-", nick:""},
	{levels:["8-", "11-", ""],	name:"橙の幻想郷音頭", nick:""},
	{levels:["8+", "11-", ""],	name:"Starlight Dance Floor", nick:""},
	{levels:["7+", "11-", ""],	name:"神々の祈り", nick:""},
	{levels:["8+", "11-", ""],	name:"願いを呼ぶ季節", nick:""},
	{levels:["8-", "10+", "11-"],	name:"明星ロケット", nick:""},
	{levels:["9-", "11+", "12-"],	name:"緋色のDance", nick:""},
	{levels:["9-", "10+", ""],	name:"YU-MU", nick:""},
	{levels:["9+", "12.O", ""],	name:"エテルニタス・ルドロジー", nick:"ルドロジー"},
	{levels:["8-", "10-", "11+"],	name:"エピクロスの虹はもう見えない", nick:""},
	{levels:["9-", "12-", ""],	name:"四次元跳躍機関", nick:""},
	{levels:["9-", "12-", ""],	name:"少女幻葬戦慄曲 ～ Necro Fantasia", nick:""},
	{levels:["9-", "11+", ""],	name:"妖精村の月誕祭 ～Lunate Elf", nick:""},
	{levels:["8+", "11.7", ""],	name:"Jimang Shot", nick:"じまんぐ"},
	{levels:["8-", "10+", "11-"],	name:"ってゐ！ ～えいえんてゐVer～", nick:""},
	{levels:["8-", "11-", ""],	name:"東方妖々夢 ～the maximum moving about～", nick:""},
	{levels:["8+", "11-", ""],	name:"Yet Another ”drizzly rain”", nick:""},
	{levels:["7-", "9+", ""],	name:"シアワセうさぎ", nick:""},
	{levels:["9-", "11-", ""],	name:"最速最高シャッターガール", nick:""},
	{levels:["10-", "12+", ""],	name:"最終鬼畜妹・一部声", nick:""},
	{levels:["9-", "12+", ""],	name:"ウサテイ", nick:""},
	{levels:["9+", "10-", ""],	name:"Help me, ERINNNNNN!!", nick:""},
	{levels:["10-", "11+", "13-"],	name:"ナイト・オブ・ナイツ", nick:""},
	{levels:["8+", "10+", "12-"],	name:"Bad Apple!! feat nomico", nick:""},
	{levels:["11-", "13-", ""],	name:"Calamity Fortune", nick:""},
	{levels:["9-", "10+", ""],	name:"CALL HEAVEN!!", nick:""},
	{levels:["8+", "11-", ""],	name:"Sunshine world tour", nick:""},
	{levels:["9-", "11-", ""],	name:"終わりなき物語", nick:""},
	{levels:["9-", "11-", ""],	name:"Our Fighting", nick:""},
	{levels:["8+", "11+", "11+"],	name:"Save This World νMIX", nick:""},
	{levels:["8+", "10-", "11-"],	name:"Living Universe", nick:""},
	{levels:["10-", "10+", ""],	name:"Ignite Infinity", nick:""},
	{levels:["10-", "11-", ""],	name:"Garden Of The Dragon", nick:""},
	{levels:["9-", "12-", ""],	name:"Reach For The Stars", nick:""},
	{levels:["9-", "11+", ""],	name:"Live & Learn", nick:""},
	{levels:["9-", "12-", ""],	name:"Back 2 Back", nick:""},
	{levels:["9-", "11+", ""],	name:"Windy Hill -Zone 1", nick:""},
	{levels:["8-", "11-", "11-"],	name:"City Escape: Act1", nick:""},
	{levels:["9+", "10-", "11+"],	name:"Rooftop Run: Act1", nick:""},
	{levels:["8+", "11-", ""],	name:"時空を超えて久しぶり！", nick:""},
	{levels:["9-", "10-", ""],	name:"Her Dream Is To Be A Fantastic Sorceress", nick:""},
	{levels:["7-", "11+", ""],	name:"キズナの物語", nick:""},
	{levels:["9+", "12-", ""],	name:"STAIRWAY TO GENERATION", nick:""},
	{levels:["10-", "12-", ""],	name:"Last Brave ～ Go to zero", nick:""},
	{levels:["11-", "11+", ""],	name:"Urban Crusher [Remix]", nick:""},
	{levels:["9-", "10-", ""],	name:"Catch The Future", nick:""},
	{levels:["8-", "11+", ""],	name:"awake", nick:""},
	{levels:["9+", "12-", ""],	name:"Terminal Storm", nick:""},
	{levels:["10-", "12-", ""],	name:"After Burner", nick:""},
	{levels:["9+", "12-", ""],	name:"Space Harrier Main Theme [Reborn]", nick:""},
	{levels:["10-", "11-", ""],	name:"Quartet Theme [Reborn]", nick:""},
	{levels:["9-", "11-", ""],	name:"Sky High [Reborn]", nick:""},
	{levels:["9+", "12.g", ""],	name:"Like the Wind [Reborn]", nick:"ライク"},
	{levels:["11-", "11+", ""],	name:"YA･DA･YO [Reborn]", nick:""},
	{levels:["10-", "10-", ""],	name:"Natural Flow", nick:""},
	{levels:["8-", "9+", "12+"],	name:"Crush On You", nick:""},
	{levels:["7+", "9-", "12+"],	name:"Sun Dance", nick:""},
	{levels:["8-", "10-", "13-"],	name:"In Chaos", nick:""},
	{levels:["10-", "10-", "13-"],	name:"Beat Of Mind", nick:""},
	{levels:["9-", "12-", ""],	name:"JACKY [Remix]", nick:""},
	{levels:["10-", "12-", ""],	name:"Mysterious Destiny", nick:""},
	{levels:["9+", "10-", ""],	name:"Riders Of The Light", nick:""},
	{levels:["7-", "11-", ""],	name:"コトバ・カラフル", nick:""},
	{levels:["8-", "11+", ""],	name:"天国と地獄", nick:""},
	{levels:["8-", "10-", ""],	name:"きみのためなら死ねる", nick:""},
	{levels:["8+", "10-", ""],	name:"The Great Journey", nick:""},
	{levels:["9-", "10-", "12-"],	name:"Burning Hearts ～炎のANGEL～", nick:""},
	{levels:["8-", "10-", ""],	name:"かせげ！ジャリンコヒーロー", nick:""},
	{levels:["9-", "12-", ""],	name:"ココロスキャンのうた", nick:""},
	{levels:["10-", "10+", ""],	name:"超絶！Superlative", nick:""},
	{levels:["10-", "11-", ""],	name:"采配の刻 Power of order", nick:""},
	{levels:["11-", "12.O", ""],	name:"DO RORO DERODERO ON DO RORO", nick:"どろろ"},
	{levels:["9-", "10+", ""],	name:"源平大戦絵巻テーマソング", nick:""},
	{levels:["8+", "11-", ""],	name:"怪盗Rのテーマ", nick:""},
	{levels:["7-", "10-", ""],	name:"マリアをはげませ", nick:""},
	{levels:["7+", "10-", ""],	name:"SHOW TIME", nick:""},
	{levels:["9+", "11+", ""],	name:"円舞曲、君に", nick:""},
	{levels:["10-", "11-", ""],	name:"御旗のもとに", nick:""},
	{levels:["9-", "10+", ""],	name:"地上の戦士", nick:""},
	{levels:["8-", "8+", "11-"],	name:"檄！帝国華撃団(改)", nick:""},
	{levels:["9-", "12+", ""],	name:"Outlaw's Lullaby", nick:""},
	{levels:["9-", "11+", ""],	name:"Brand-new Japanesque", nick:""},
	{levels:["9-", "12-", ""],	name:"鼓動", nick:""},
	{levels:["10+", "11-", ""],	name:"神室雪月花", nick:""},
	{levels:["7-", "12.I", ""],	name:"KONNANじゃないっ！", nick:"KONNAN"},
	{levels:["9-", "11-", ""],	name:"セガサターン起動音[H.][Remix]", nick:""},
	{levels:["10+", "12+", ""],	name:"MilK", nick:""},
	{levels:["10-", "12+", ""],	name:"GO BACK 2 YOUR RAVE", nick:""},
	{levels:["10-", "12+", ""],	name:"B.B.K.K.B.K.K.", nick:""},
	{levels:["11-", "12+", ""],	name:"人里に下ったアタイがいつの間にか社畜になっていた件", nick:""},
	{levels:["10+", "12+", ""],	name:"Maxi", nick:""},
	{levels:["9+", "12-", ""],	name:"KISS CANDY FLAVOR", nick:""},
	{levels:["8+", "11+", ""],	name:"H-A-J-I-M-A-R-I-U-T-A-!!", nick:""},
	{levels:["9-", "11-", ""],	name:"Star☆Glitter", nick:""},
	{levels:["10+", "13-", ""],	name:"conflict", nick:""},
	{levels:["10-", "12-", ""],	name:"Party 4U ”holy nite mix”", nick:""},
	{levels:["9+", "11+", ""],	name:"GOODMEN", nick:""},
	{levels:["10+", "12+", ""],	name:"Sakura Fubuki", nick:""},
	{levels:["10-", "12+", ""],	name:"METATRON", nick:""},
	{levels:["9-", "11-", ""],	name:"オモイヨシノ", nick:""},
	{levels:["9-", "12-", ""],	name:"L9", nick:""},
	{levels:["10-", "12+", ""],	name:"Jack-the-Ripper◆", nick:""},
	{levels:["11-", "12+", ""],	name:"DRAGONLADY", nick:""},
	{levels:["9+", "11-", ""],	name:"Pursuing My True Self", nick:""},
	{levels:["9+", "11+", ""],	name:"Signs Of Love (“Never More” ver.)", nick:""},
	{levels:["9-", "11-", ""],	name:"specialist (“Never More” ver.)", nick:""},
	{levels:["9-", "12-", ""],	name:"Time To Make History (AKIRA YAMAOKA Remix)", nick:""},
	{levels:["8-", "11+", ""],	name:"レッツゴー!陰陽師", nick:""},
	{levels:["9-", "11+", ""],	name:"オパ! オパ! RACER -GMT mashup-", nick:""},
	{levels:["10-", "12-", ""],	name:"電車で電車でOPA!OPA!OPA! -GMT mashup-", nick:""},
	{levels:["10-", "11+", ""],	name:"リッジでリッジでGO!GO!GO! -GMT mashup-", nick:""},
	{levels:["7+", "11-", ""],	name:"電車で電車でGO!GO!GO!GC! -GMT remix-", nick:""},
	{levels:["10-", "11+", ""],	name:"RIDGE RACER STEPS -GMT remix-", nick:""},
	{levels:["9-", "11-", ""],	name:"ファンタジーゾーン OPA-OPA! -GMT remix-", nick:""},
	{levels:["10-", "12-", ""],	name:"DADDY MULK -Groove remix-", nick:""},
	{levels:["10-", "13-", ""],	name:"FUJIN Rumble", nick:""},
	{levels:["10+", "12+", ""],	name:"Got more raves？", nick:""},
	{levels:["11-", "12.q", ""],	name:"夜明けまであと３秒", nick:"夜明け"},
	{levels:["10+", "12.q", ""],	name:"Ignis Danse", nick:"Ignis"},
	{levels:["11-", "12+", ""],	name:"きたさいたま2000", nick:""},
	{levels:["9-", "12+", ""],	name:"Scars of FAUNA", nick:""},
	{levels:["10-", "12-", ""],	name:"FLOWER", nick:""},
	{levels:["", "12-", ""],	name:"Magical Flavor", nick:""},
	{levels:["10-", "12-", ""],	name:"ユビキリ", nick:""},
	{levels:["10-", "12+", ""],	name:"デスパレイト", nick:""},
	{levels:["11-", "13-", ""],	name:"Moon of Noon", nick:""},
	{levels:["11-", "12+", ""],	name:"Ultranova", nick:""},
	{levels:["10-", "12-", ""],	name:"曖昧mind", nick:""},
	{levels:["9+", "11+", ""],	name:"Limit Break", nick:""},
	{levels:["9+", "11+", ""],	name:"オトヒメモリー☆ウタゲーション", nick:""},
	{levels:["9+", "12+", ""],	name:"夢花火", nick:""},
	{levels:["9+", "12-", ""],	name:"いっしそう電☆舞舞神拳！", nick:""},
	{levels:["11-", "13-", ""],	name:"Panopticon", nick:""},
	{levels:["10+", "12+", ""],	name:"四月の雨", nick:""},
	{levels:["11-", "13-", ""],	name:"ねぇ、壊れタ人形ハ何処へ棄テらレるノ？", nick:""},
	{levels:["10-", "12-", ""],	name:"Imitation:Loud Lounge", nick:""},
	{levels:["10+", "12+", ""],	name:"HERA", nick:""},
	{levels:["10-", "12-", ""],	name:"Selector", nick:""},
	{levels:["11+", "13-", ""],	name:"AMAZING MIGHTYYYY!!!!", nick:""},
	{levels:["10+", "13-", ""],	name:"CITRUS MONSTER", nick:""},
	{levels:["11-", "12+", ""],	name:"Hyper Active", nick:""},
	{levels:["10+", "12+", ""],	name:"Jumble Rumble", nick:""},
	{levels:["10-", "12+", ""],	name:"Nitrous Fury", nick:""},
	{levels:["10-", "12-", ""],	name:"Revive The Rave", nick:""},
	{levels:["10-", "12+", ""],	name:"GEMINI -M-", nick:""},
	{levels:["9-", "12-", ""],	name:"スリップフリップ", nick:""},
	{levels:["11-", "12+", ""],	name:"天火明命", nick:""},
	{levels:["10-", "12+", ""],	name:"7thSense", nick:""},
	{levels:["10+", "12+", ""],	name:"Lividi", nick:""},
	{levels:["10+", "13-", ""],	name:"Axeria", nick:""},
	{levels:["10-", "12+", ""],	name:"閃鋼のブリューナク", nick:""},
	{levels:["11-", "13-", ""],	name:"ガラテアの螺旋", nick:""},
	{levels:["11-", "13-", ""],	name:"Caliburne ～Story of the Legendary sword～", nick:""},
	{levels:["11-", "13-", ""],	name:"Our Wrenally", nick:""},
	{levels:["11-", "13-", ""],	name:"Contrapasso -paradiso-", nick:""},
	{levels:["10-", "13-", ""],	name:"Oshama Scramble!", nick:""},
	{levels:["11-", "12+", ""],	name:"Garakuta Doll Play", nick:""},
	{levels:["10-", "11+", "11+"],	name:"Blew Moon", nick:""},
	{levels:["11-", "12-", ""],	name:"We Gonna Party", nick:""},
	{levels:["10-", "12+", ""],	name:"MYTHOS", nick:""},
	{levels:["10+", "12-", ""],	name:"Life Feels Good", nick:""},
	{levels:["11-", "13-", ""],	name:"Glorious Crown", nick:""},
	{levels:["10-", "12+", ""],	name:"Aiolos", nick:""},
	{levels:["9+", "12-", ""],	name:"LANCE", nick:""},
	{levels:["9-", "12.O", ""],	name:"Dragoon", nick:""},
	{levels:["10-", "12-", ""],	name:"Death Scythe", nick:""},
	{levels:["10-", "11-", ""],	name:"LUCIA", nick:""},
	{levels:["10-", "12+", ""],	name:"DON’T  STOP  ROCKIN’", nick:""},
	{levels:["10-", "12-", ""],	name:"oboro", nick:""},
	{levels:["9-", "12-", ""],	name:"CYCLES", nick:""},
	{levels:["9+", "12-", ""],	name:"Lionheart", nick:""},
	{levels:["10-", "11-", ""],	name:"Heartbeats", nick:""},
	{levels:["10-", "11+", ""],	name:"Acceleration", nick:""},
	{levels:["10-", "11-", ""],	name:"End of Twilight", nick:""},
	{levels:["9-", "11-", ""],	name:"JUMPIN' JUMPIN'", nick:""},
	{levels:["9+", "12-", ""],	name:"L'épilogue", nick:""},
	{levels:["10-", "12-", ""],	name:"FEEL ALIVE", nick:""},
	{levels:["9+", "12-", ""],	name:"FEEL the BEATS", nick:""},
	{levels:["9-", "12-", ""],	name:"BREAK YOU!!", nick:""},
	{levels:["10-", "12+", ""],	name:"KING is BACK!!", nick:""},
	{levels:["10+", "12-", ""],	name:"Streak", nick:""},
	{levels:["10+", "12.Z", ""],	name:"Spin me harder", nick:"スピンミー"},
	{levels:["11-", "12.Z", ""],	name:"Turn around", nick:"タンアラ"},
	{levels:["10+", "10+", ""],	name:"Link", nick:"Link(org)"},
	{levels:["11-", "11-", ""],	name:"Black Out", nick:""},
	{levels:["11-", "13.I", ""],	name:"Fragrance", nick:"フレグラ"},
	{levels:["10-", "12+", ""],	name:"Nerverakes", nick:""},
	{levels:["9-", "11+", ""],	name:"Sprintrances", nick:""},
	{levels:["9+", "12-", ""],	name:"air's gravity", nick:""},
	{levels:["9+", "11-", ""],	name:"Night Fly", nick:""},
	{levels:["9+", "11+", ""],	name:"Feel My Fire", nick:""},
	{levels:["10-", "10-", "11-"],	name:"Starlight Disco", nick:""},
	{levels:["9-", "11+", ""],	name:"記憶、記録", nick:""},
	{levels:["9-", "11-", ""],	name:"connecting with you", nick:""},
	{levels:["9-", "11-", ""],	name:"アージェントシンメトリー", nick:""},
	{levels:["9+", "11-", ""],	name:"Dreampainter", nick:""},
	{levels:["9-", "11-", ""],	name:"Monochrome Rainbow", nick:""},
	{levels:["10-", "12-", ""],	name:"Beat of getting entangled", nick:""},
	{levels:["9-", "11-", ""],	name:"MIRROR of MAGIC", nick:""},
	{levels:["9-", "10+", ""],	name:"Cosmic Train", nick:""},
	{levels:["9+", "12-", ""],	name:"高気圧ねこロック", nick:""},
	{levels:["10-", "13-", ""],	name:"Prophesy One", nick:""},
	{levels:["9-", "11-", ""],	name:"BETTER CHOICE", nick:""},
	{levels:["10+", "12-", ""],	name:"Get Happy", nick:""},
	{levels:["11-", "13-", ""],	name:"System “Z”", nick:""},
	{levels:["10-", "13-", ""],	name:"VERTeX", nick:""},
	{levels:["9-", "13-", ""],	name:"ジングルベル", nick:""},
	{levels:["10-", "12-", ""],	name:"火炎地獄", nick:""},
	{levels:["9-", "12-", ""],	name:"Danza zandA", nick:""},
	{levels:["9+", "11+", ""],	name:"planet dancer", nick:""},
	{levels:["9-", "10-", ""],	name:"ナミダと流星", nick:""},
	{levels:["9+", "12-", ""],	name:"ピーマンたべたら", nick:""},
	{levels:["8-", "10-", ""],	name:"maimaiちゃんのテーマ", nick:""},
	{levels:["8-", "10+", ""],	name:"Pixel Voyage", nick:""},
	{levels:["8-", "9+", ""],	name:"Sweets×Sweets", nick:""},
	{levels:["9-", "10+", ""],	name:"虹と太陽", nick:""},
	{levels:["8-", "10-", ""],	name:"Color My World", nick:""},
	{levels:["8+", "9+", ""],	name:"True Love Song", nick:""},
	{levels:["7+", "9-", ""],	name:"デコボコ体操第二", nick:""},
	{levels:["9+", "11+", ""],	name:"ソーラン☆節", nick:""},
	{levels:["8+", "11+", ""],	name:"おても☆Yan", nick:""},
	{levels:["8-", "11+", ""],	name:"炭★坑★節", nick:""},
	{levels:["7-", "10-", ""],	name:"ネコ日和。", nick:""},
	{levels:["8+", "10-", ""],	name:"犬日和。", nick:""},
	{levels:["9+", "10+", ""],	name:"Endless World", nick:""},
	{levels:["10-", "11-", ""],	name:"Backyun! －悪い女－", nick:""},
	{levels:["10+", "10-", ""],	name:"BaBan!! －甘い罠－", nick:""},
	{levels:["8+", "10-", ""],	name:"オレンジの夏", nick:""},
	{levels:["9-", "10+", ""],	name:"ぴぴぱぷぅ！", nick:""},
	{levels:["10-", "12-", ""],	name:"炎歌 -ほむらうた-", nick:""},
	{levels:["9-", "10-", ""],	name:"泣き虫O'clock", nick:""},
	{levels:["9+", "11-", ""],	name:"maiム・maiム feat.週刊少年マガジン", nick:""},
	{levels:["8-", "11-", ""],	name:"タカハせ！名人マン", nick:""},
	{levels:["9-", "11-", ""],	name:"みんなのマイマイマー", nick:""},
	{levels:["8-", "11-", ""],	name:"welcome to maimai!! with マイマイマー", nick:""},
	{levels:["8-", "10+", ""],	name:"ぐるぐるWASH！コインランドリー・ディスコ", nick:""},
	{levels:["9-", "12-", ""],	name:"Infantoon Fantasy", nick:""},
	{levels:["9-", "11+", ""],	name:"幾四音-Ixion-", nick:""},
	{levels:["9-", "10+", ""],	name:"Counselor", nick:""},
	{levels:["8-", "11-", ""],	name:"Invitation", nick:""},
	{levels:["9-", "11-", ""],	name:"その群青が愛しかったようだった", nick:""},
	{levels:["11-", "12+", ""],	name:"The wheel to the right", nick:""},
	{levels:["9+", "12-", ""],	name:"光線チューニング", nick:""},
	{levels:["9-", "12-", ""],	name:"心象蜃気楼", nick:""},
	{levels:["9-", "12-", ""],	name:"ハート・ビート", nick:""},
	{levels:["9+", "11-", ""],	name:"brilliant better", nick:""},
	{levels:["7+", "11-", ""],	name:"フォルテシモBELL", nick:""},
	{levels:["9-", "12-", ""],	name:"DETARAME ROCK&ROLL THEORY", nick:""},
	{levels:["8-", "11+", ""],	name:"私の中の幻想的世界観及びその顕現を想起させたある現実での出来事に関する一考察", nick:""},
	{levels:["10+", "12-", ""],	name:"猛進ソリストライフ！", nick:""},
	{levels:["10-", "12-", ""],	name:"My Dearest Song", nick:""},
	{levels:["8+", "12-", ""],	name:"無敵We are one!!", nick:""},
	{levels:["9-", "11+", ""],	name:"Change Our MIRAI！", nick:""},
	{levels:["9+", "11-", ""],	name:"ドキドキDREAM!!!", nick:""},
	{levels:["9-", "11+", ""],	name:"言ノ葉カルマ", nick:""},
	{levels:["8+", "11-", ""],	name:"悪戯", nick:""},
	{levels:["9-", "11-", ""],	name:"言ノ葉遊戯", nick:""},
	{levels:["8-", "10-", ""],	name:"りばーぶ", nick:""},
	{levels:["9-", "10-", "10+"],	name:"洗脳", nick:""},
	{levels:["9-", "11+", ""],	name:"Barbed Eye", nick:""},
	{levels:["9-", "12-", ""],	name:"空威張りビヘイビア", nick:""},
	{levels:["9+", "12+", ""],	name:"分からない", nick:""},
	{levels:["9+", "11+", ""],	name:"天国と地獄 -言ノ葉リンネ-", nick:""},
	{levels:["9+", "12-", ""],	name:"相思創愛", nick:""},
	{levels:["10-", "12-", ""],	name:"咲キ誇レ常世ノ華", nick:""}
];

function mra_diff2tmp(diff)
{
	var difftable =
		[["7-", 7.0], ["7+", 7.7], ["8-", 8.0], ["8+", 8.7], ["9-", 9.0], ["9+", 9.7],["10-", 10.0], 
 		 ["10+", 10.7], ["11-", 11.0], ["11+", 11.7], ["12-", 12.0], ["12+", 12.7], ["13-", 13.0],
		 ["12.O", 12.0], ["12.I", 12.1], ["12.Z", 12.2], ["12.E", 12.3], ["12.A", 12.4],
      		 ["12.S", 12.5], ["12.b", 12.6], ["12.L", 12.7], ["12.B", 12.8], ["12.q", 12.9],
		 ["13.O", 13.0], ["13.I", 13.1], ["13.Z", 13.2], ["13.E", 13.3], ["13.A", 13.4],
		 ["13.S", 13.5], ["13.b", 13.6], ["13.L", 13.7], ["13.B", 13.8], ["13.q", 13.9]];
      		 // 'O', 'I', 'Z', 'E', 'A', 'S', 'b', 'L', 'B', 'q'
      
	for(var i=0; i< difftable.length; i++)
	{
		if(0 == diff.indexOf(difftable[i][0]))
		{
			return 1*difftable[i][1];
		}
	}
	return 1*diff;
}
