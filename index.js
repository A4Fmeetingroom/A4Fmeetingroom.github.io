var result = prompt( "MilkcocoaのAPPIDを入力してください。" , "" );

if(result){	
	console.log(" OK が押された:" + result);
    var milkcocoa = new MilkCocoa(result+".mlkcca.com");
    //var milkcocoa = MilkCocoa.connectWithApiKey(result+".mlkcca.com", "EBMFKPMCMGLNAHNN", "VicgLgOFJSOIaPaNINETIIOHCOKPPDCDcIlNENHP");

    var ds = milkcocoa.dataStore('esp8266');
    
    ds.on('send', function(sent) {
    	console.log(sent.value);
    	if(sent.value.Room 9=='1'){        
           document.getElementById("cb").checked = true;
        }else if(sent.value.Room 9=='0'){
            document.getElementById("cb").checked = false;
        }
    
    });
    
}else{
	console.log(" CANCEL が押された");
}
