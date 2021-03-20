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
            h_dph = parseInt($('input[name="h_dph"]').val()), //雙殺打
            h_tp = parseInt($('input[name="h_tp"]').val()), //三殺
            h_tph = parseInt($('input[name="h_tph"]').val()), //三殺打
            h_sf = parseInt($('input[name="h_sf"]').val()), //高飛犧牲
            h_sh = parseInt($('input[name="h_sh"]').val()), //犧牲短打
            h_error = parseInt($('input[name="h_error"]').val()), //失誤上壘
            h_sb = parseInt($('input[name="h_sb"]').val()), //盜壘成功
            h_cs = parseInt($('input[name="h_cs"]').val()), //盜壘失敗
            h_fly = parseInt($('input[name="h_fly"]').val()), //飛球
            h_roll = parseInt($('input[name="h_roll"]').val()); //滾地

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
            雙殺打: h_dph,
            三殺: h_tp,
            三殺打: h_tph,
            高飛犧牲: h_sf,
            犧牲短打: h_sh,
            飛球: h_fly,
            滾地: h_roll,
            失誤上壘: h_error,
            盜壘成功: h_sb,
            盜壘失敗: h_cs
        });
    });
});