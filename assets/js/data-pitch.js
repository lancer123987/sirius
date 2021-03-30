let link = location.href.split('data-pitch.html?member')[1];
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

    function pitchAll() {
        //投球總覽
        record.where('投手犯規', '>=', 0).get().then(querySnapshot => {
            let ip = 0,
                k = 0,
                bb = 0,
                deadball = 0,
                h1 = 0,
                h2 = 0,
                h3 = 0,
                hr = 0,
                strike = 0,
                bad = 0,
                er = 0;


            querySnapshot.forEach(doc => {
                ip += doc.data().局數 / 3;
                k += doc.data().三振;
                bb += doc.data().四壞;
                deadball += doc.data().觸身;
                h1 += doc.data().一安;
                h2 += doc.data().二安;
                h3 += doc.data().三安;
                hr += doc.data().全壘打;
                strike += doc.data().好球數;
                bad += doc.data().壞球數;
                er += doc.data().責失;

                let era = Math.round((er / ip) * 9 * 1000) / 1000,
                    k9 = Math.round(k / ip * 9 * 1000) / 1000,
                    bb9 = Math.round(((bb + deadball) / ip) * 9 * 1000) / 1000,
                    whip = Math.round(((h1 + h2 + h3 + hr + bb + deadball) / ip) * 1000) / 1000,
                    strikeAvg = Math.round(strike / (strike + bad) * 1000) / 1000;

                $('#era').text(era);
                $('#whip').text(whip);
                $('#k9').text(k9);
                $('#bb9').text(bb9);
                $('#strike').text(strike);
                $('#bad').text(bad);
                $('#strikeAvg').text(strikeAvg);
                $('#h1').text(h1);
                $('#h2').text(h2);
                $('#h3').text(h3);
                $('#hr').text(hr);
                $('#k').text(k);
                $('#bb').text(bb);
            });
        });
    }

    pitchAll();
    $('select[name="dataFilter"]').change(function() {
        let dataFilterVal = $(this).val();
        console.log(dataFilterVal);
        if (dataFilterVal == 'all') {
            $('select[name="yearFilter"]').empty().append('<option value=\"\">比賽年度<\/option>').hide();
            $('select[name="dateFilter"]').empty().append('<option value=\"\">比賽日期<\/option>').hide();
            pitchAll();
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
                $('select[name="dateFilter"]').append('<option value=\"' + doc.id + '\">' + doc.id + '<\/option>');
            });
        });
    });
    $('select[name="dateFilter"]').change(function() {
        let dateFilterVal = $(this).val();

        db.collection('SiriusMember').doc(link).collection('record').doc(dateFilterVal + '-pitch').get().then(doc => {
            let ip = 0,
                k = 0,
                bb = 0,
                deadball = 0,
                h1 = 0,
                h2 = 0,
                h3 = 0,
                hr = 0,
                strike = 0,
                bad = 0,
                er = 0;

            ip += doc.data().局數 / 3;
            k += doc.data().三振;
            bb += doc.data().四壞;
            deadball += doc.data().觸身;
            h1 += doc.data().一安;
            h2 += doc.data().二安;
            h3 += doc.data().三安;
            hr += doc.data().全壘打;
            strike += doc.data().好球數;
            bad += doc.data().壞球數;
            er += doc.data().責失;

            let era = Math.round((er / ip) * 9 * 1000) / 1000,
                k9 = Math.round(k / ip * 9 * 1000) / 1000,
                bb9 = Math.round(((bb + deadball) / ip) * 9 * 1000) / 1000,
                whip = Math.round(((h1 + h2 + h3 + hr + bb + deadball) / ip) * 1000) / 1000,
                strikeAvg = Math.round(strike / (strike + bad) * 1000) / 1000;

            $('#era').text(era);
            $('#whip').text(whip);
            $('#k9').text(k9);
            $('#bb9').text(bb9);
            $('#strike').text(strike);
            $('#bad').text(bad);
            $('#strikeAvg').text(strikeAvg);
            $('#h1').text(h1);
            $('#h2').text(h2);
            $('#h3').text(h3);
            $('#hr').text(hr);
            $('#k').text(k);
            $('#bb').text(bb);
        });
    });
});