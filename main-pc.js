<script src="https://code.jquery.com/jquery-1.12.1.min.js"></script>
<script src="http://cdn.mlkcca.com/v2.0.0/milkcocoa.js"></script>
<script>
  // Milkcocoaに接続
  var milkcocoa = new MilkCocoa('hotj38fxucb.mlkcca.com');


  // データストアを取得
  var ds = milkcocoa.dataStore('esp8266');
  ds.stream().next(function(err, msgs){
    // データストアの最新メッセージ
    var last_msg = msgs[msgs.length - 1];
    // 例えばメッセージが{"Room 9": 1}みたいな形式とする
    var temperature = last_msg.value.Room 9;
    // spanに温度を表示
    $('#val').text(val);
  });
</script>