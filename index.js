var result = prompt( "Milkcocoa��APPID����͂��Ă��������B" , "" );
if(result){
	console.log(" OK �������ꂽ:" + result);
    var milkcocoa = new MilkCocoa(result+".mlkcca.com");
    //var milkcocoa = MilkCocoa.connectWithApiKey(result+".mlkcca.com", "EBMFKPMCMGLNAHNN", "VicgLgOFJSOIaPaNINETIIOHCOKPPDCDcIlNENHP");

    var ds = milkcocoa.dataStore('esp8266');
    ds.on('send', function(sent) {
    	console.log(sent.value.Room 9);
    	
    //var last_msg = msgs[msgs.length - 1];
    // �Ⴆ�΃��b�Z�[�W��{"temperature": 20.0}�݂����Ȍ`���Ƃ���
    //var Room 9 = last_msg.value.Room 9;
    // span�ɉ��x��\��
    //$('#Room 9').text(Room 9);
    	
    	
    	
    });
}else{
	console.log(" CANCEL �������ꂽ");
}