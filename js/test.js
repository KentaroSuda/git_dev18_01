// jsを記述する際はここに記載していく

  $("#gu").on("click", function(){
    // 乱数
    const r = Math.ceil(Math.random()*3);
    // if文
    let view = "";
    if(r==1){
      view = 'グー <img src="img/gu.png" width="300">';
    }
    else if(r==2){
      view = 'チョキ <img src="img/choki.png" width="300">';
    }
    else if(r==3){
      view = 'パー <img src="img/pa.png" width="300">';
    }
    console.log(view)
    // 表示処理
    $(".kekka").html(view);

  });

  $("#choki").on("click", function(){
    // 乱数
    const r = Math.ceil(Math.random()*3);
    // if文
    let view = "";
    if(r==1){
      view = 'グー <img src="img/gu.png" width="300">';
    }
    else if(r==2){
      view = 'チョキ <img src="img/choki.png" width="300">';
    }
    else if(r==3){
      view = 'パー <img src="img/pa.png" width="300">';
    }
    console.log(view)
    // 表示処理
    $(".kekka").html(view);

  });

  $("#pa").on("click", function(){
    // 乱数
    const r = Math.ceil(Math.random()*3);
    // if文
    let view = "";
    if(r==1){
      view = 'グー <img src="img/gu.png" width="300">';
    }
    else if(r==2){
      view = 'チョキ <img src="img/choki.png" width="300">';
    }
    else if(r==3){
      view = 'パー <img src="img/pa.png" width="300">';
    }
    console.log(view)
    // 表示処理
    $(".kekka").html(view);

  });



  