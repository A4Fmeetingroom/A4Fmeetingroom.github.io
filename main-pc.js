<script src="https://code.jquery.com/jquery-1.12.1.min.js"></script>
<script src="http://cdn.mlkcca.com/v2.0.0/milkcocoa.js"></script>
<script>
  // Milkcocoa�ɐڑ�
  var milkcocoa = new MilkCocoa('hotj38fxucb.mlkcca.com');


  // �f�[�^�X�g�A���擾
  var ds = milkcocoa.dataStore('esp8266');
  ds.stream().next(function(err, msgs){
    // �f�[�^�X�g�A�̍ŐV���b�Z�[�W
    var last_msg = msgs[msgs.length - 1];
    // �Ⴆ�΃��b�Z�[�W��{"Room 9": 1}�݂����Ȍ`���Ƃ���
    var temperature = last_msg.value.Room 9;
    // span�ɉ��x��\��
    $('#val').text(val);
  });
</script>