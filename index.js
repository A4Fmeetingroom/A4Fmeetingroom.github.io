function kakunin(btnNo){
  if (btnNo == 1){
    link = "Yahoo!Japan";
    href = "http://www.yahoo.co.jp/";
  }else{
    link = "Google";
    href = "http://www.google.co.jp/";
  }

  ret = confirm(link + "へ飛んでいいか？");
  if (ret == true){
    location.href = href;
  }
}

/*

function changeViewFromSentMode(sent){
    	//console.log(sent.value);
    	console.log('接続完了');
    	// Room 4 --------------------------------------------------------------    	
    	if(sent.value.Room4=='2'){  //使用中の場合
    		document.room4.src = img[1];
        }
        if(sent.value.Room4=='1'){  //空室の場合
        	document.room4.src = img[0];
        }
        if(sent.value.Room4 >'0'){
        	 var m = new moment(); //現在の時刻が入る
             var output = m.format('M月D日(ddd)  HH:mm:ss');
             document.getElementById("time4").innerHTML = output.toString();
         }        
    	// Room 5 --------------------------------------------------------------    	
    	if(sent.value.Room5=='2'){
    		document.room5.src = img[1];
        }
        if(sent.value.Room5=='1'){
        	document.room5.src = img[0];
        }
        if(sent.value.Room5 >'0'){
        	 var m = new moment(); //現在の時刻が入る
             var output = m.format('M月D日(ddd)  HH:mm:ss');
             document.getElementById("time5").innerHTML = output.toString();
         }
    	// Room 6 --------------------------------------------------------------    	
    	if(sent.value.Room6=='2'){
    		document.room6.src = img[1];
        }
        if(sent.value.Room6=='1')
        {
        	document.room6.src = img[0];
        }
        if(sent.value.Room6 >'0'){
        	 var m = new moment(); //現在の時刻が入る
             var output = m.format('M月D日(ddd)  HH:mm:ss');
             document.getElementById("time6").innerHTML = output.toString();
         }
    	// Room 7 --------------------------------------------------------------    	
    	if(sent.value.Room7=='2'){
    		document.room7.src = img[1];
        }
        if(sent.value.Room7=='1'){
        	document.room7.src = img[0];
        }
        if(sent.value.Room7 >'0'){
        	 var m = new moment(); //現在の時刻が入る
             var output = m.format('M月D日(ddd)  HH:mm:ss');
             document.getElementById("time7").innerHTML = output.toString();
        }
        // Room 8 --------------------------------------------------------------    	
    	if(sent.value.Room8=='2'){
    		document.room8.src = img[1];
        }
        if(sent.value.Room8=='1'){
        	document.room8.src = img[0];
        }
        if(sent.value.Room8 >'0'){
        	 var m = new moment(); //現在の時刻が入る
             var output = m.format('M月D日(ddd)  HH:mm:ss');
             document.getElementById("time8").innerHTML = output.toString();
        }
    	// Room 9 --------------------------------------------------------------
    	if(sent.value.Room9=='2'){
    	     document.room9.src = img[1];
        }
        if(sent.value.Room9=='1'){
             document.room9.src = img[0];
        }
        if(sent.value.Room9 >'0'){
        	 var m = new moment(); //現在の時刻が入る
             var output = m.format('M月D日(ddd)  HH:mm:ss');
             document.getElementById("time9").innerHTML = output.toString();
        }
        
        console.log('changeなんちゃらの関数に来たよ。);
	    //milkcocoa.disconnect();
　　　　//console.log('切断　完了！！');
	

	
}
*/