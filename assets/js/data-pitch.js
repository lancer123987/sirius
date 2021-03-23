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

    let record = db.collection('SiriusMember').doc(link).collection('record');

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

            let era = Math.round((er / ip) * 9 * 1000) / 1000,
                k9 = Math.round(k / ip * 9 * 1000) / 1000,
                bb9 = Math.round(((bb + deadball) / ip) * 9 * 1000) / 1000,
                whip = Math.round(((h1 + h2 + h3 + hr + bb + deadball) / ip) * 1000) / 1000;

            $('#era').text(era);
            $('#whip').text(whip);
            $('#k9').text(k9);
            $('#bb9').text(bb9);
        });
    });
});