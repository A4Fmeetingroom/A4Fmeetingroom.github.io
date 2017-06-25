var result = prompt( "Milkcocoa‚ÌAPPID‚ğ“ü—Í‚µ‚Ä‚­‚¾‚³‚¢B" , "" );
if(result){
	console.log(" OK ‚ª‰Ÿ‚³‚ê‚½:" + result);
    //var milkcocoa = new MilkCocoa(result+".mlkcca.com");
    var milkcocoa = new MilkCocoa('hotj38fxucb.mlkcca.com');


    var ds = milkcocoa.dataStore('esp8266');
    ds.on('send', function(pushed) {
        if(pushed.value.Room 9=='1'){        
           document.getElementById("Room 9").checked = true;
        }else if(pushed.value.Room 9=='0'){
            document.getElementById("Room 9").checked = false;
        }
    });
}else{
	console.log(" CANCEL ‚ª‰Ÿ‚³‚ê‚½");
}