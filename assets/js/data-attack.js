let link = location.href.split('data-attack.html?member')[1];
//球員資料選單
Vue.component('member-menu-item', {
    props: ['item'],
    template: '<li><a v-bind:href="item.listMenu[1]" v-bind:title="item.listMenu[0]"><img v-bind:src="item.listMenu[2]">{{ item.listMenu[0] }}</a></li>'
})

var mainMenu = new Vue({
    el: '#memberAside',
    data: {
        menu: [
            { listMenu: ['Basic', 'data.html?member' + link, 'assets/images/common/icon_member_white.svg'] },
            { listMenu: ['Attack', 'data-attack.html?member' + link, 'assets/images/common/icon_attack_white.svg'] },
            { listMenu: ['Defend', 'data-defend.html?member' + link, 'assets/images/common/icon_glove_white.svg'] },
            { listMenu: ['Pitcher', 'data-pitch.html?member' + link, 'assets/images/common/icon_baseball_white.svg'] }
        ]
    }
})

$(document).ready(function() {
    boxNumber = parseInt(link);
    if (boxNumber < 10) {
        boxNumber = "0" + boxNumber;
    } else {}
    $('.data__inner__head__number').text(boxNumber);

    var db = firebase.firestore();
    var ref = db.collection('SiriusMember').doc(link);
    ref.get().then(doc => {
        memberName = doc.data().name[1];
        $('.data__inner__head__name').text(doc.data().name[1]);
    });

    //比賽類型寫入
    let gameType = db.collection('gameType');
    gameType.get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
            $('select[name="dataFilter"]').append('<option value=\"' + doc.id + '\">' + doc.id + '<\/option>');
        });
    });

    let record = db.collection('SiriusMember').doc(link).collection('record');

    function attackAll() {
        //攻擊總覽
        record.where('打點', '>=', 0).get().then(querySnapshot => {
            let h1 = 0,
                h2 = 0,
                h3 = 0,
                hr = 0,
                k = 0,
                bb = 0,
                deadball = 0,
                pa = 0,
                ab = 0,
                rib = 0,
                r = 0,
                fc = 0,
                dph = 0,
                tp = 0,
                sf = 0,
                sh = 0,
                error = 0,
                sb = 0,
                cs = 0,
                fly = 0,
                roll = 0;

            querySnapshot.forEach(doc => {
                h1 += doc.data().一安;
                h2 += doc.data().二安;
                h3 += doc.data().三安;
                hr += doc.data().全壘打;
                k += doc.data().三振;
                bb += doc.data().四壞;
                deadball += doc.data().觸身;
                ab += doc.data().打數;
                pa += doc.data().打席;
                fly += doc.data().飛球;
                roll += doc.data().滾地;

                let avg = Math.round(((h1 + h2 + h3 + hr) / ab) * 1000) / 1000,
                    obp = Math.round(((h1 + h2 + h3 + hr + bb + deadball) / (ab + bb + deadball)) * 1000) / 1000,
                    slg = Math.round(((h1 + h2 * 2 + h3 * 3 + hr * 4) / ab) * 1000) / 1000,
                    slgAvg = Math.round(slg / avg * 1000) / 1000,
                    kAvg = Math.round(k / ab * 1000) / 1000,
                    bbAvg = Math.round(bb / pa * 1000) / 1000,
                    flyRollAvg = Math.round(roll / fly * 1000) / 1000,
                    ops = Math.round((slg + obp) * 1000) / 1000;

                $('#avg').text(avg);
                $('#obp').text(obp);
                $('#slgAvg').text(slgAvg);
                $('#ops').text(ops);

                $('#pa').text(pa);
                $('#ab').text(ab);

                $('#h1').text(h1);
                $('#h2').text(h2);
                $('#h3').text(h3);
                $('#hr').text(hr);

                $('#k').text(k);
                $('#bb').text(bb);
                $('#kAvg').text(kAvg);
                $('#bbAvg').text(bbAvg);

                $('#fly').text(fly);
                $('#roll').text(roll);
                $('#flyRollAvg').text(flyRollAvg);
            });
        });
    }
    attackAll();
    $('select[name="dataFilter"]').change(function() {
        let dataFilterVal = $(this).val();
        if (dataFilterVal == 'all') {
            $('select[name="yearFilter"]').empty().append('<option value=\"\">比賽年度<\/option>').hide();
            $('select[name="dateFilter"]').empty().append('<option value=\"\">比賽日期<\/option>').hide();
            attackAll();
        } else {
            $('select[name="yearFilter"]').show();
            let gameType = db.collection('gameType');
            gameType.get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    let year = doc.data().year;
                    for (var i = 0; i < year.length; i++) {
                        $('select[name="yearFilter"]').append('<option value=\"' + year[i] + '\">' + year[i] + '<\/option>');
                    }
                });
            });
        }
    });

    $('select[name="yearFilter"]').change(function() {
        let yearFilterVal = $(this).val();
        let gamefilter = db.collection('game');
        $('select[name="dateFilter"]').empty().append('<option value=\"\">比賽日期<\/option>').show();
        gamefilter.where('比賽年度', '==', yearFilterVal).get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                $('select[name="dateFilter"]').append('<option value=\"' + doc.id + '\">' + doc.id + doc.data().對手 + '<\/option>');
            });
        });
    });

    $('select[name="dateFilter"]').change(function() {
        let dateFilterVal = $(this).val();

        db.collection('SiriusMember').doc(link).collection('record').doc(dateFilterVal + '-attack').get().then(doc => {
            let h1 = 0,
                h2 = 0,
                h3 = 0,
                hr = 0,
                k = 0,
                bb = 0,
                deadball = 0,
                pa = 0,
                ab = 0,
                rib = 0,
                r = 0,
                fc = 0,
                dph = 0,
                tp = 0,
                sf = 0,
                sh = 0,
                error = 0,
                sb = 0,
                cs = 0,
                fly = 0,
                roll = 0;

            h1 += doc.data().一安;
            h2 += doc.data().二安;
            h3 += doc.data().三安;
            hr += doc.data().全壘打;
            k += doc.data().三振;
            bb += doc.data().四壞;
            deadball += doc.data().觸身;
            ab += doc.data().打數;
            pa += doc.data().打席;
            fly += doc.data().飛球;
            roll += doc.data().滾地;

            let avg = Math.round(((h1 + h2 + h3 + hr) / ab) * 1000) / 1000,
                obp = Math.round(((h1 + h2 + h3 + hr + bb + deadball) / (ab + bb + deadball)) * 1000) / 1000,
                slg = Math.round(((h1 + h2 * 2 + h3 * 3 + hr * 4) / ab) * 1000) / 1000,
                slgAvg = Math.round(slg / avg * 1000) / 1000,
                kAvg = Math.round(k / ab * 1000) / 1000,
                bbAvg = Math.round(bb / pa * 1000) / 1000,
                flyRollAvg = Math.round(roll / fly * 1000) / 1000,
                ops = Math.round((slg + obp) * 1000) / 1000;

            $('#avg').text(avg);
            $('#obp').text(obp);
            $('#slgAvg').text(slgAvg);
            $('#ops').text(ops);

            $('#pa').text(pa);
            $('#ab').text(ab);

            $('#h1').text(h1);
            $('#h2').text(h2);
            $('#h3').text(h3);
            $('#hr').text(hr);

            $('#k').text(k);
            $('#bb').text(bb);
            $('#kAvg').text(kAvg);
            $('#bbAvg').text(bbAvg);

            $('#fly').text(fly);
            $('#roll').text(roll);
            $('#flyRollAvg').text(flyRollAvg);
        });
    });
});