//球員資料選單
Vue.component('member-menu-item', {
    props: ['item'],
    template: '<li><a v-bind:href="item.listMenu[1]" v-bind:title="item.listMenu[0]"><img v-bind:src="item.listMenu[2]">{{ item.listMenu[0] }}</a></li>'
})

var mainMenu = new Vue({
    el: '#memberAside',
    data: {
        menu: [
            { listMenu: ['Basic', '#', 'assets/images/common/icon_member_white.svg'] },
            { listMenu: ['Attack', '#', 'assets/images/common/icon_attack_white.svg'] },
            { listMenu: ['Defend', '#', 'assets/images/common/icon_glove_white.svg'] },
            { listMenu: ['Pitcher', '#', 'assets/images/common/icon_baseball_white.svg'] }
        ]
    }
})

$(document).ready(function() {
    let link = location.href.split('data.html?member')[1];
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
            ab = d0;
        querySnapshot.forEach(doc => {
            h1 += doc.data().一安;
            h2 += doc.data().二安;
            h3 += doc.data().三安;
            hr += doc.data().全壘打;
            bb += doc.data().四壞;
            deadball += doc.data().觸身;
            ab += doc.data().打數;

            let avg = Math.round(((h1 + h2 + h3 + hr) / ab) * 1000) / 1000,
                obp = Math.round(((h1 + h2 + h3 + hr + bb + deadball) / (ab + bb + deadball)) * 1000) / 1000,
                slg = Math.round(((h1 + h2 * 2 + h3 * 3 + hr * 4) / ab) * 1000) / 1000,
                slgAvg = Math.round(slg / avg * 1000) / 1000,
                ops = slg + obp;

            $('#avg').text(avg);
            $('#obp').text(obp);
            $('#slgAvg').text(slgAvg);
            $('#ops').text(ops);
        });
    });
});