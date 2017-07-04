// UTF-8 BOM無しで保存して下さい。そうしないと日本語が文字化けします。

window.onload = function () {
	
    //var result = prompt( "MilkcocoaのAPPIDを入力してください。" , "" );
   //if(result){	
	//console.log(" OK が押された:" + result);   
    //var milkcocoa = MilkCocoa.connectWithApiKey(result+".mlkcca.com", "EBMFKPMCMGLNAHNN", "VicgLgOFJSOIaPaNINETIIOHCOKPPDCDcIlNENHP");
var milkcocoa = MilkCocoa.connectWithApiKey('hotj38fxucb.mlkcca.com', 'EBMFKPMCMGLNAHNN', 'VicgLgOFJSOIaPaNINETIIOHCOKPPDCDcIlNENHP');
var ds = milkcocoa.dataStore('esp8266');              // データ取得先のデータストア 
	
//画像を配列に格納する
img = new Array("images/free.png","images/busy.png");	
	
ds.on('send', changeViewFromSentMode);

function changeViewFromSentMode(sent){
    	//console.log(sent.value);
    	
    	// Room 4 --------------------------------------------------------------    	
    	if(sent.value.Room4=='2'){
    	document.room4.src = img[1];
    	document.getElementById("time4").innerHTML = sent.value.LastTime4;
        }else if(sent.value.Room4=='1'){
        document.room4.src = img[0];
        document.getElementById("time4").innerHTML = sent.value.LastTime4;
        }
    	// Room 5 --------------------------------------------------------------    	
    	if(sent.value.Room5=='2'){
    	document.room5.src = img[1];
    	document.getElementById("time5").innerHTML = sent.value.LastTime5;
        }else if(sent.value.Room5=='1'){
        document.room5.src = img[0];
        document.getElementById("time5").innerHTML = sent.value.LastTime5;
        }
    	// Room 6 --------------------------------------------------------------    	
    	if(sent.value.Room6=='2'){
    	document.room6.src = img[1];
    	document.getElementById("time6").innerHTML = sent.value.LastTime6;
        }else if(sent.value.Room6=='1')
        {
        document.room6.src = img[0];
        document.getElementById("time6").innerHTML = sent.value.LastTime6;
        }
    	// Room 7 --------------------------------------------------------------    	
    	if(sent.value.Room7=='2'){
    	document.room7.src = img[1];
    	document.getElementById("time7").innerHTML = sent.value.LastTime7;
        }else if(sent.value.Room7=='1'){
        document.room7.src = img[0];
        document.getElementById("time7").innerHTML = sent.value.LastTime7;
        }
        // Room 8 --------------------------------------------------------------    	
    	if(sent.value.Room8=='2'){
    	document.room8.src = img[1];
    	document.getElementById("time8").innerHTML = sent.value.LastTime8;
        }else if(sent.value.Room8=='1'){
        document.room8.src = img[0];
        document.getElementById("time8").innerHTML = sent.value.LastTime8;
        }
    	// Room 9 --------------------------------------------------------------
    	if(sent.value.Room9=='2'){
    	document.room9.src = img[1];
    	//document.getElementById("time9").innerHTML = sent.value.LastTime9;
    	var ms1 = Date.parse(sent.value.LastTime9);	
        var d1 = new Date(ms1);
        document.getElementById("time9").innerHTML = d1.toString();
        //var new AAA = dateToFormatString(new  Date(ms1), '%YYYY%年%MM%月%DD%日 (%w%) %HH%時%mm%分%ss%秒');
        //document.getElementById("time9").innerHTML = AAA;
    	var m = moment(); //現在の時刻が入る
        var output = m.format('YYYY年MM月DD日 HH:mm:ss dddd');
        document.getElementById("time9").innerHTML = output; // => 2014年10月24日 11:44:00 Friday
    	
    	
    	
        }else if(sent.value.Room9=='1'){
        document.room9.src = img[0];
        //document.getElementById("time9").innerHTML = sent.value.LastTime9;
        
        var ms1 = Date.parse(sent.value.LastTime9);	 //文字列として受信したものを日時データに変換する
        var d1 = new Date(ms1);
        document.getElementById("time9").innerHTML = d1.toString();
        
        //var new AAA = dateToFormatString(new  Date(ms1), '%YYYY%年%MM%月%DD%日 (%w%) %HH%時%mm%分%ss%秒');
        //document.getElementById("time9").innerHTML = AAA;
        
        var m = moment(); //現在の時刻が入る
        var output = m.format('YYYY年MM月DD日 HH:mm:ss dddd');
        document.getElementById("time9").innerHTML = output; // => 2014年10月24日 11:44:00 Friday
        
        
	}
}
    
   // document.getElementById("Room9").src=img[1].src;  //とりあえず、条件にかかわらず画像を切り替える
//}else{
	//console.log(" CANCEL が押された");
//}

};
