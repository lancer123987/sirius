let link = location.href.split('data-defend.html?member')[1];
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

    //守備總覽
    record.where('守備機會', '>=', 0).get().then(querySnapshot => {
        let po = 0,
            a = 0,
            tc = 0;
        querySnapshot.forEach(doc => {
            po += doc.data().刺殺;
            a += doc.data().助殺;
            tc += doc.data().守備機會;

            let fp = Math.round(((po + a) / tc) * 1000) / 1000;
            $('#fp').text(fp);
        });
    });
});