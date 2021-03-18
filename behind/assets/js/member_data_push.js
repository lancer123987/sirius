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

        //打擊數據
        let h_pa = parseInt($('input[name="h_pa"]').val()), //打席
            h_ab = parseInt($('input[name="h_ab"]').val()), //打數
            h_1h = parseInt($('input[name="h_1h"]').val()), //一安
            h_2h = parseInt($('input[name="h_2h"]').val()), //二安
            h_3h = parseInt($('input[name="h_3h"]').val()), //三安
            h_hr = parseInt($('input[name="h_hr"]').val()), //全壘打
            h_rbi = parseInt($('input[name="h_rbi"]').val()), //打點
            h_r = parseInt($('input[name="h_r"]').val()), //得分
            h_bb = parseInt($('input[name="h_bb"]').val()), //四壞
            h_db = parseInt($('input[name="h_db"]').val()), //觸身
            h_k = parseInt($('input[name="h_k"]').val()), //三振
            h_fc = parseInt($('input[name="h_fc"]').val()), //野選
            h_dp = parseInt($('input[name="h_dp"]').val()), //雙殺
            h_tp = parseInt($('input[name="h_tp"]').val()), //三殺
            h_sf = parseInt($('input[name="h_sf"]').val()), //高飛犧牲
            h_sh = parseInt($('input[name="h_sh"]').val()), //犧牲短打
            h_error = parseInt($('input[name="h_error"]').val()), //失誤上壘
            h_sc = parseInt($('input[name="h_sc"]').val()), //盜壘成功
            h_cs = parseInt($('input[name="h_cs"]').val()), //盜壘失敗
            h_fly = parseInt($('input[name="h_fly"]').val()), //飛球
            h_roll = parseInt($('input[name="h_roll"]').val()); //滾地

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

        //投球數據
        let p_pp = parseInt($('input[name="p_pp"]').val()), //局數*3
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


        $('input[type="text"]').each(function() {
            let val = $(this).val();
            if (val == '') {
                $(this).val(parseInt(0));
            } else {}
        });

        //進攻數據
        db.collection('SiriusMember').doc(game_member).collection('record').doc(game_date + '-attack').set({
            打席: h_pa,
            打數: h_ab,
            一安: h_1h,
            二安: h_2h,
            三安: h_3h,
            全壘打: h_hr,
            打點: h_rbi,
            得分: h_r,
            三振: h_k,
            四壞: h_bb,
            觸身: h_db,
            野選: h_fc,
            雙殺: h_dp,
            三殺: h_tp,
            高飛犧牲: h_sf,
            犧牲短打: h_sh,
            飛球: h_fly,
            滾地: h_roll,
            失誤上壘: h_error,
            盜壘成功: h_sc,
            盜壘失敗: h_cs
        });
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
        //投球數據
        db.collection('SiriusMember').doc(game_member).collection('record').doc(game_date + '-pitch').set({
            局數: p_pp,
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
        // $('.hit, .process, .remark, .score').val('');
    });
});