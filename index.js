// UTF-8 BOM無しで保存して下さい。そうしないと日本語が文字化けします。

var milkcocoa = MilkCocoa.connectWithApiKey('hotj38fxucb.mlkcca.com', 'EBMFKPMCMGLNAHNN', 'VicgLgOFJSOIaPaNINETIIOHCOKPPDCDcIlNENHP');
var ds = milkcocoa.dataStore('esp8266');              // データ取得先のデータストア 
img = new Array("images/free.png","images/busy.png");	//画像を配列に格納する

//------------------------------------------------------------------------------

   ds.on('send', changeViewFromSentMode);    //sendを監視
//------------------------------------------------------------------------------
moment.lang('ja', {
    weekdays: ["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"],
    weekdaysShort: ["日","月","火","水","木","金","土"],
});
//------------------------------------------------------------------------------
Autoclose();

//------------------------------------------------------------------------------

function changeViewFromSentMode(sent){
    	//console.log(sent.value);
    	//console.log('接続完了');
    	// Room 4 --------------------------------------------------------------    	
    	if(sent.value.Room4=='2'){  //使用中の場合
    		document.room4.src = img[1];
        }
        if(sent.value.Room4=='1'){  //空室の場合
        	document.room4.src = img[0];
        }
        if(sent.value.Room4 >'0'){
        	 var m = new moment(); //現在の時刻が入る
             var output = m.format('M月D日(ddd)  HH:mm:ss');
             document.getElementById("time4").innerHTML = output.toString();
         }        
    	// Room 5 --------------------------------------------------------------    	
    	if(sent.value.Room5=='2'){
    		document.room5.src = img[1];
        }
        if(sent.value.Room5=='1'){
        	document.room5.src = img[0];
        }
        if(sent.value.Room5 >'0'){
        	 var m = new moment(); //現在の時刻が入る
             var output = m.format('M月D日(ddd)  HH:mm:ss');
             document.getElementById("time5").innerHTML = output.toString();
         }
    	// Room 6 --------------------------------------------------------------    	
    	if(sent.value.Room6=='2'){
    		document.room6.src = img[1];
        }
        if(sent.value.Room6=='1')
        {
        	document.room6.src = img[0];
        }
        if(sent.value.Room6 >'0'){
        	 var m = new moment(); //現在の時刻が入る
             var output = m.format('M月D日(ddd)  HH:mm:ss');
             document.getElementById("time6").innerHTML = output.toString();
         }
    	// Room 7 --------------------------------------------------------------    	
    	if(sent.value.Room7=='2'){
    		document.room7.src = img[1];
        }
        if(sent.value.Room7=='1'){
        	document.room7.src = img[0];
        }
        if(sent.value.Room7 >'0'){
        	 var m = new moment(); //現在の時刻が入る
             var output = m.format('M月D日(ddd)  HH:mm:ss');
             document.getElementById("time7").innerHTML = output.toString();
        }
        // Room 8 --------------------------------------------------------------    	
    	if(sent.value.Room8=='2'){
    		document.room8.src = img[1];
        }
        if(sent.value.Room8=='1'){
        	document.room8.src = img[0];
        }
        if(sent.value.Room8 >'0'){
        	 var m = new moment(); //現在の時刻が入る
             var output = m.format('M月D日(ddd)  HH:mm:ss');
             document.getElementById("time8").innerHTML = output.toString();
        }
    	// Room 9 --------------------------------------------------------------
    	if(sent.value.Room9=='2'){
    	     document.room9.src = img[1];
        }
        if(sent.value.Room9=='1'){
             document.room9.src = img[0];
        }
        if(sent.value.Room9 >'0'){
        	 var m = new moment(); //現在の時刻が入る
             var output = m.format('M月D日(ddd)  HH:mm:ss');
             document.getElementById("time9").innerHTML = output.toString();
        }
        
        //console.log('changeなんちゃらの関数に来たよ。);
	    //milkcocoa.disconnect();
　　　　//console.log('切断　完了！！');
	

}

//---------------------------------------------------------
function kakunin(btnNo){
	if (btnNo == 1){
      ret = confirm("ミルクココアを切断します。宜しいですか？");
       if (ret == true){
       milkcocoa.disconnect();
       }
    }
    if (btnNo == 2){
      ret = confirm("ミルクココアを再接続します。宜しいですか？");
       if (ret == true){
       //var milkcocoa = MilkCocoa.connectWithApiKey('hotj38fxucb.mlkcca.com', 'EBMFKPMCMGLNAHNN', 'VicgLgOFJSOIaPaNINETIIOHCOKPPDCDcIlNENHP');
　　　 //var ds = milkcocoa.dataStore('esp8266');              // データ取得先のデータストア 
       //ds.on('send', changeViewFromSentMode);    //sendを監視
       location.reload();

       }
    }
}
//-------------------------------------------------------
function Autoclose(){
    setTimeout('closeMilk()', 20000);   // 20秒後に関数 closeMilk をコールする
}
//-------------------------------------------------------
function coloseMilk(){
    milkcocoa.disconnect();
}