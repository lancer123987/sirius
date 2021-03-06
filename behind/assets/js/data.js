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
            { listMenu: ['Pitcher', '#', 'assets/images/common/icon_baseball_white.svg'] },
            { listMenu: ['Defend', '#', 'assets/images/common/icon_glove_white.svg'] }
        ]
    }
})

$(document).ready(function() {
    let link = location.href.split('data.html?member')[1];

    $('.data__inner__head__number').text(link);

    var db = firebase.firestore();
    var ref = db.collection('SiriusMember').doc(link);
    ref.get().then(doc => {
        memberName = doc.data().name[1];
        $('.data__inner__head__name').text(doc.data().name[1]);
    });
});