var result = prompt( "MilkcocoaのAPPIDを入力してください。" , "" );
if(result){
	console.log(" OK が押された:" + result);
    //var milkcocoa = new MilkCocoa(result+".mlkcca.com");
    //var milkcocoa = new MilkCocoa('hotj38fxucb.mlkcca.com');
    //var milkcocoa = MilkCocoa.connectWithApiKey(result+".mlkcca.com", "EBMFKPMCMGLNAHNN", "VicgLgOFJSOIaPaNINETIIOHCOKPPDCDcIlNENHP");
      var milkcocoa = MilkCocoa.connectWithApiKey("hotj38fxucb.mlkcca.com", "EBMFKPMCMGLNAHNN", "VicgLgOFJSOIaPaNINETIIOHCOKPPDCDcIlNENHP");

    var ds = milkcocoa.dataStore('esp8266');
    ds.on('send', function(sent) {
    	console.log(sent.value);
    	/*
        if(pushed.value.Room 9=='1'){        
           document.getElementById("Room 9").checked = true;
        }else if(pushed.value.Room 9=='0'){
            document.getElementById("Room 9").checked = false;
        }
        
         document.getElementById("Room 9").checked = true;
         */
    });
}else{
	console.log(" CANCEL が押された");
}