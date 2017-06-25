var result = prompt( "Milkcocoa‚ÌAPPID‚ğ“ü—Í‚µ‚Ä‚­‚¾‚³‚¢B" , "" );

if(result){	
	console.log(" OK ‚ª‰Ÿ‚³‚ê‚½:" + result);
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
	console.log(" CANCEL ‚ª‰Ÿ‚³‚ê‚½");
}
