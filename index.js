window.onload = function(){
//var result = prompt( "MilkcocoaのAPPIDを入力してください。" , "" );
//if(result){	
	//console.log(" OK が押された:" + result);
    //var milkcocoa = new MilkCocoa(result+".mlkcca.com");
    //var milkcocoa = MilkCocoa.connectWithApiKey(result+".mlkcca.com", "EBMFKPMCMGLNAHNN", "VicgLgOFJSOIaPaNINETIIOHCOKPPDCDcIlNENHP");
var milkcocoa = MilkCocoa.connectWithApiKey('hotj38fxucb.mlkcca.com', 'EBMFKPMCMGLNAHNN', 'VicgLgOFJSOIaPaNINETIIOHCOKPPDCDcIlNENHP');
var ds = milkcocoa.dataStore('esp8266');              // データ取得先のデータストア 
	
//ds.stream().size(1).sort("MeetingRoomCheck").next(function(err, data){  // 1番新しいデータを1件取得 
  //document.getElementById("Room9").innerHTML = "会議室9の状況：" + data[0].value.Room9 + "999999"; 
  //document.getElementById("nama data").innerHTML = "生データフラグ回数：" + data[0].value.nama data + "回"; 
  //document.getElementById("LastUpdatedTime").innerHTML = "最終更新日：" + data[0].value.LastUpdatedTime + " "; 
//}); 


    ds.on('send', function(sent) {
    	console.log(sent.value);
    	//if(sent.value.Room9=='1'){        
           //document.getElementById("cb").checked = true;
           document.getElementById("Room9").innerHTML = "会議室9の状況：" + sent.value.Room9 + "999999"; 
        //}else if(sent.value.Room 9=='0'){
            //document.getElementById("cb").checked = false;
        //}
    }
 
    
//}else{
	//console.log(" CANCEL が押された");
//}

};