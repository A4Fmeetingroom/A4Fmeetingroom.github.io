var result = prompt( "MilkcocoaのAPPIDを入力してください。" , "" );

if(result){	
	console.log(" OK が押された:" + result);
    var milkcocoa = new MilkCocoa(result+".mlkcca.com");
    //var milkcocoa = MilkCocoa.connectWithApiKey(result+".mlkcca.com", "EBMFKPMCMGLNAHNN", "VicgLgOFJSOIaPaNINETIIOHCOKPPDCDcIlNENHP");

    var ds = milkcocoa.dataStore('esp8266');
    
    ds.on('send', function(sent) {
    	console.log(sent.value.Room 9);
    
    };
    
}else{
	console.log(" CANCEL が押された");
}