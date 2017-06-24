window.onload = function(){

  var image = document.getElementById('image');

  // app_id, API_Key, API_SecretÇÕé©ï™ÇÃÇ‡ÇÃÇ…èëÇ´ä∑Ç¶ÇƒÇ≠ÇæÇ≥Ç¢
  var milkcocoa = MilkCocoa.connectWithApiKey('hotj38fxucb.mlkcca.com', 'EBMFKPMCMGLNAHNN', 'VicgLgOFJSOIaPaNINETIIOHCOKPPDCDcIlNENHP');
  var ds = milkcocoa.dataStore('gravity');

  ds.on('send', changeViewFromSentMode);

  function changeViewFromSentMode(sent){
    if(sent.value.mode === 'portrait'){
      image.className = '';
    }
    if(sent.value.mode === 'landscape'){
      image.className = 'is-landscape';
    }
  }
};