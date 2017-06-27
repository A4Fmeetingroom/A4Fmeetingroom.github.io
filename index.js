//window.onload = function(){
	
    //var result = prompt( "MilkcocoaのAPPIDを入力してください。" , "" );
   //if(result){	
	//console.log(" OK が押された:" + result);
    //var milkcocoa = new MilkCocoa(result+".mlkcca.com");
    //var milkcocoa = MilkCocoa.connectWithApiKey(result+".mlkcca.com", "EBMFKPMCMGLNAHNN", "VicgLgOFJSOIaPaNINETIIOHCOKPPDCDcIlNENHP");
var milkcocoa = MilkCocoa.connectWithApiKey('hotj38fxucb.mlkcca.com', 'EBMFKPMCMGLNAHNN', 'VicgLgOFJSOIaPaNINETIIOHCOKPPDCDcIlNENHP');
var ds = milkcocoa.dataStore('esp8266');              // データ取得先のデータストア 
	

ds.on('send', changeViewFromSentMode);
	//console.log(sent.value);
	
function changeViewFromSentMode(sent){

    //ds.on('send', function(sent) {
    	console.log(sent.value);
    	
    	if(sent.value.Room9=='1'){        
           document.getElementById("Room9").innerHTML = "会議室9：使用中です"; 
        }else if(sent.value.Room9=='0'){
           document.getElementById("Room9").innerHTML = "会議室9：空いています";            
        }
           //document.getElementById("LastUpdatedtime").innerHTML = sent.value.LastUpdatedtime; 
}
  
    
//}else{
	//console.log(" CANCEL が押された");
//}

//};