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

        //投球數據
        let p_ip = parseInt($('input[name="p_ip"]').val()), //局數*3
            p_s = parseInt($('input[name="p_s"]').val()), //好球數
            p_b = parseInt($('input[name="p_b"]').val()), //壞球數
            p_w = parseInt($('input[name="p_w"]').val()), //暴投
            p_k = parseInt($('input[name="p_k"]').val()), //三振
            p_bb = parseInt($('input[name="p_bb"]').val()), //四壞
            p_db = parseInt($('input[name="p_db"]').val()), //觸身
            p_1h = parseInt($('input[name="p_1h"]').val()), //一安
            p_2h = parseInt($('input[name="p_2h"]').val()), //二安
            p_3h = parseInt($('input[name="p_3h"]').val()), //三安
            p_hr = parseInt($('input[name="p_hr"]').val()), //全壘打
            p_dp = parseInt($('input[name="p_dp"]').val()), //雙殺
            p_tp = parseInt($('input[name="p_tp"]').val()), //三殺
            p_fly = parseInt($('input[name="p_fly"]').val()), //飛球
            p_roll = parseInt($('input[name="p_roll"]').val()), //滾地
            p_po = parseInt($('input[name="p_po"]').val()), //牽制數
            p_pos = parseInt($('input[name="p_pos"]').val()), //牽制成功
            p_bk = parseInt($('input[name="p_bk"]').val()), //投手犯規
            p_r = parseInt($('input[name="p_r"]').val()), //失分
            p_er = parseInt($('input[name="p_er"]').val()), //責失
            p_cg = parseInt($('select[name="p_cg"]').val()), //完投
            p_sho = parseInt($('select[name="p_sho"]').val()); //完封

        //投球數據
        db.collection('SiriusMember').doc(game_member).collection('record').doc(game_date + '-pitch').set({
            局數: p_ip,
            好球數: p_s,
            壞球數: p_b,
            暴投: p_w,
            三振: p_k,
            四壞: p_bb,
            觸身: p_db,
            一安: p_1h,
            二安: p_2h,
            三安: p_3h,
            全壘打: p_hr,
            雙殺: p_dp,
            三殺: p_tp,
            飛球: p_fly,
            滾地: p_roll,
            牽制數: p_po,
            牽制成功: p_pos,
            投手犯規: p_bk,
            失分: p_r,
            責失: p_er,
            完投: p_cg,
            完封: p_sho
        });
    });
});