let link = location.href.split('data.html?member')[1];

//球員資料選單
Vue.component('member-menu-item', {
    props: ['item'],
    template: '<li><a v-bind:href="item.listMenu[1]" v-bind:title="item.listMenu[0]"><img v-bind:src="item.listMenu[2]">{{ item.listMenu[0] }}</a></li>'
})

var mainMenu = new Vue({
    el: '#memberAside',
    data: {
        menu: [{
                listMenu: ['Basic', 'data.html?member' + link, 'assets/images/common/icon_member_white.svg']
            },
            {
                listMenu: ['Attack', 'data-attack.html?member' + link, 'assets/images/common/icon_attack_white.svg']
            },
            {
                listMenu: ['Defend', 'data-defend.html?member' + link, 'assets/images/common/icon_glove_white.svg']
            },
            {
                listMenu: ['Pitcher', 'data-pitch.html?member' + link, 'assets/images/common/icon_baseball_white.svg']
            }
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

    let record = db.collection('SiriusMember').doc(link).collection('record');

    //攻擊總覽
    record.where('打點', '>=', 0).get().then(querySnapshot => {
        let h1 = 0,
            h2 = 0,
            h3 = 0,
            hr = 0,
            bb = 0,
            deadball = 0,
            ab = 0;

        querySnapshot.forEach(doc => {
            h1 += doc.data().一安;
            h2 += doc.data().二安;
            h3 += doc.data().三安;
            hr += doc.data().全壘打;
            bb += doc.data().四壞;
            deadball += doc.data().觸身;
            ab += doc.data().打數;

            let avg = rounding((h1 + h2 + h3 + hr) / ab),
                obp = rounding((h1 + h2 + h3 + hr + bb + deadball) / (ab + bb + deadball)),
                slg = rounding((h1 + h2 * 2 + h3 * 3 + hr * 4) / ab),
                slgAvg = rounding(slg / avg),
                ops = rounding(slg + obp);

            $('#avg').text(avg);
            $('#obp').text(obp);
            $('#slgAvg').text(slgAvg);
            $('#ops').text(ops);
        });
    });

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
            er += doc.data().責失;

            let era = rounding((er / ip) * 9),
                k9 = rounding(k / ip * 9),
                bb9 = rounding(((bb + deadball) / ip) * 9),
                whip = rounding((h1 + h2 + h3 + hr + bb + deadball) / ip);

            $('#era').text(era);
            $('#whip').text(whip);
            $('#k9').text(k9);
            $('#bb9').text(bb9);
        });
    });

    //守備總覽
    record.where('守備機會', '>=', 0).get().then(querySnapshot => {
        let po = 0,
            a = 0,
            tc = 0;
        querySnapshot.forEach(doc => {
            po += doc.data().刺殺;
            a += doc.data().助殺;
            tc += doc.data().守備機會;
            let fp = rounding((po + a) / tc);
            $('#fp').text(fp);
        });
    });
});