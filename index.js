var result = prompt( "MilkcocoaのAPPIDを入力してください。" , "" );
if(result){
	console.log(" OK が押された:" + result);
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
	console.log(" CANCEL が押された");
}