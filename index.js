var result = prompt( "Milkcocoa��APPID����͂��Ă��������B" , "" );

if(result){	
	console.log(" OK �������ꂽ:" + result);
    var milkcocoa = new MilkCocoa(result+".mlkcca.com");
    //var milkcocoa = MilkCocoa.connectWithApiKey(result+".mlkcca.com", "EBMFKPMCMGLNAHNN", "VicgLgOFJSOIaPaNINETIIOHCOKPPDCDcIlNENHP");

    var ds = milkcocoa.dataStore('esp8266');
    
    ds.on('send', function(sent) {
    	console.log(sent.value);
    	if(pushed.value.sw=='1'){        
           document.getElementById("cb").checked = true;
        }else if(pushed.value.sw=='0'){
            document.getElementById("cb").checked = false;
        }
    
    });
    
}else{
	console.log(" CANCEL �������ꂽ");
}
