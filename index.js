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
    	
    	if(sent.value.Room9=='1'){        
           document.getElementById("Room9").innerHTML = "会議室9：　使用中です　　最終更新日時：　" + sent.value.LastUpdatedTime; 
           //document.getElementById("Room9").innerHTML = "会議室9：　使用中です"; 
           //image.src = "images/nanami.jpg";
	   //document.getElementById("Room9").src=img[1].src;  //画像を切り替える
           document.Room9.src = img[1];
		
        }else if(sent.value.Room9=='0'){
           document.getElementById("Room9").innerHTML = "会議室9：　空いています　　最終更新日時：　" + sent.value.LastUpdatedTime; 
           //document.getElementById("Room9").innerHTML = "会議室9：　空いています";
	   //document.getElementById("Room9").src=img[0].src;  //画像を切り替える
	   document.Room9.src = img[0];
	   var elem = document.getElementById("test");
elem.innerText = "innerText";
        }	
}
    
   // document.getElementById("Room9").src=img[1].src;  //とりあえず、条件にかかわらず画像を切り替える
//}else{
	//console.log(" CANCEL が押された");
//}

};
