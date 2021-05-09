let link = location.href.split('data-defend.html?member')[1];
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

    //比賽類型寫入
    let gameType = db.collection('gameType');
    gameType.get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
            $('select[name="dataFilter"]').append('<option value=\"' + doc.id + '\">' + doc.id + '<\/option>');
        });
    });

    let record = db.collection('SiriusMember').doc(link).collection('record');

    function defendAll() {
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
    }

    defendAll();

    $('select[name="dataFilter"]').change(function() {
        let dataFilterVal = $(this).val();
        if (dataFilterVal == 'all') {
            $('select[name="yearFilter"]').empty().append('<option value=\"\">比賽年度<\/option>').hide();
            $('select[name="dateFilter"]').empty().append('<option value=\"\">比賽日期<\/option>').hide();
            attackAll();
        } else {
            $('select[name="yearFilter"]').empty().append('<option value=\"\">比賽年度<\/option>').show();
            let gameType = db.collection('gameType').doc(dataFilterVal);
            gameType.get().then(doc => {
                let year = doc.data().year;
                for (var i = 0; i < year.length; i++) {
                    $('select[name="yearFilter"]').append('<option value=\"' + year[i] + '\">' + year[i] + '<\/option>');
                }
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

    // $('select[name="dateFilter"]').change(function() {
    //     let dateFilterVal = $(this).val();
    //     db.collection('SiriusMember').doc(link).collection('record').doc(dateFilterVal + '-defend').get().then(doc => {
    //         let po = 0,
    //             a = 0,
    //             tc = 0;
    //         po += doc.data().刺殺;
    //         a += doc.data().助殺;
    //         tc += doc.data().守備機會;

    //         let fp = Math.round(((po + a) / tc) * 1000) / 1000;
    //         $('#fp').text(fp);
    //     });
    // });
});