window.onload = function(){
//var result = prompt( "Milkcocoa��APPID����͂��Ă��������B" , "" );
//if(result){	
	//console.log(" OK �������ꂽ:" + result);
    //var milkcocoa = new MilkCocoa(result+".mlkcca.com");
    //var milkcocoa = MilkCocoa.connectWithApiKey(result+".mlkcca.com", "EBMFKPMCMGLNAHNN", "VicgLgOFJSOIaPaNINETIIOHCOKPPDCDcIlNENHP");
var milkcocoa = MilkCocoa.connectWithApiKey('hotj38fxucb.mlkcca.com', 'EBMFKPMCMGLNAHNN', 'VicgLgOFJSOIaPaNINETIIOHCOKPPDCDcIlNENHP');
var ds = milkcocoa.dataStore('esp8266');              // �f�[�^�擾��̃f�[�^�X�g�A 
	
//ds.stream().size(1).sort("MeetingRoomCheck").next(function(err, data){  // 1�ԐV�����f�[�^��1���擾 
  //document.getElementById("Room9").innerHTML = "��c��9�̏󋵁F" + data[0].value.Room9 + "999999"; 
  //document.getElementById("nama data").innerHTML = "���f�[�^�t���O�񐔁F" + data[0].value.nama data + "��"; 
  //document.getElementById("LastUpdatedTime").innerHTML = "�ŏI�X�V���F" + data[0].value.LastUpdatedTime + " "; 
//}); 


    ds.on('send', function(sent) {
    	console.log(sent.value);
    	//if(sent.value.Room9=='1'){        
           //document.getElementById("cb").checked = true;
           document.getElementById("Room9").innerHTML = "��c��9�̏󋵁F" + sent.value.Room9 + "999999"; 
        //}else if(sent.value.Room 9=='0'){
            //document.getElementById("cb").checked = false;
        //}
    }
 
    
//}else{
	//console.log(" CANCEL �������ꂽ");
//}

};