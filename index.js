var result = prompt( "MilkcocoaのAPPIDを入力してください。" , "" );
if(result){
	console.log(" OK が押された:" + result);
    var milkcocoa = new MilkCocoa(result+".mlkcca.com");
    var ds = milkcocoa.dataStore('esp8266');
    ds.on('send', function(pushed) {
        if(pushed.value.Room 9=='1'){        
           document.getElementById("cb").checked = true;
        }else if(pushed.value.sw=='0'){
            document.getElementById("cb").checked = false;
        }
    });
}else{
	console.log(" CANCEL が押された");
}