$(document).ready(function() {
    /**讀取資料 & 選項渲染**/

    //場次
    var ref = db.collection('game');
    ref.get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
            $('select[name="game_date"]').append('<option value=\"' + doc.id + '\">' + doc.id + '<\/option>');
        });
    });

    //場次
    var ref = db.collection('SiriusMember');
    ref.get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
            $('select[name="game_member"]').append('<option value=\"' + doc.id + '\">' + doc.id + '<\/option>');
        });
    });


    //比賽內容
    $('#submit').click(function() {
        let game_date = $('select[name="game_date"]').val(),
            game_member = $('select[name="game_member"]').val();

        $('input[type="text"]').each(function() {
            let val = $(this).val();
            if (val == '') {
                $(this).val(parseInt(0));
            } else {}
        });

        //守備數據
        let d_position = $('select[name="d_position"]').val(), //位置
            d_tc = parseInt($('input[name="d_tc"]').val()), //守備機會
            d_po = parseInt($('input[name="d_po"]').val()), //刺殺
            d_a = parseInt($('input[name="d_a"]').val()), //助殺
            d_dp = parseInt($('input[name="d_dp"]').val()), //雙殺
            d_tp = parseInt($('input[name="d_tp"]').val()), //三殺
            d_cs = parseInt($('input[name="d_cs"]').val()), //阻殺
            d_error_catch = parseInt($('input[name="d_error_catch"]').val()), //接球失誤
            d_error_pass = parseInt($('input[name="d_error_pass"]').val()), //傳球失誤
            d_error_roll = parseInt($('input[name="d_error_roll"]').val()), //滾地失誤
            d_error_fly = parseInt($('input[name="d_error_fly"]').val()), //高飛失誤
            d_pb = parseInt($('input[name="d_pb"]').val()) //捕逸

        //守備數據
        db.collection('SiriusMember').doc(game_member).collection('record').doc(game_date + '-defend-' + d_position).set({
            守備機會: d_tc,
            刺殺: d_po,
            助殺: d_a,
            雙殺: d_dp,
            三殺: d_tp,
            阻殺: d_cs,
            接球失誤: d_error_catch,
            傳球失誤: d_error_pass,
            滾地失誤: d_error_roll,
            高飛失誤: d_error_fly,
            捕逸: d_pb
        });
    });
});