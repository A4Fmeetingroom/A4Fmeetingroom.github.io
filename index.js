var result = prompt( "Milkcocoa��APPID����͂��Ă��������B" , "" );
if(result){
	console.log(" OK �������ꂽ:" + result);
    var milkcocoa = new MilkCocoa(result+".mlkcca.com");
    var ds = milkcocoa.dataStore('esp8266');
    ds.on('send', function(pushed) {
        if(pushed.value.Room 9=='1'){        
           document.getElementById("cb").checked = true;
        }else if(pushed.value.Room 9=='0'){
            document.getElementById("cb").checked = false;
        }
    });
}else{
	console.log(" CANCEL �������ꂽ");
}