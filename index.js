var result = prompt( "MilkcocoaのAPPIDを入力してください。" , "" );
if(result){
	console.log(" OK が押された:" + result);
    var milkcocoa = new MilkCocoa(result+".mlkcca.com");
    var ds = milkcocoa.dataStore('nefry');
    ds.on('push', function(pushed) {
        if(pushed.value.sw=='1'){        
           document.getElementById("cb").checked = true;
        }else if(pushed.value.sw=='0'){
            document.getElementById("cb").checked = false;
        }
    });
}else{
	console.log(" CANCEL が押された");
}