$(document).ready(function() {
    var db = firebase.firestore();
    var ref = db.collection('SiriusMember');
    let box = [];
    let boxNumber = [];
    let boxData = [];
    ref.get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
            boxNumber.push(doc.id);
            boxData.push(doc.data().name[1]);

            $('#member .member__inner').append('<a class=\"member__inner__item\" href=\"data.html?member' + doc.id + '\"><figure class=\"member__inner__item__pic\"><img src="assets/images/data/pic.jpg\"></figure><div class=\"member__inner__item__text\"><p class=\"member__inner__item__text__number\">' + doc.id + '</p><p class=\"member__inner__item__text__name\">' + doc.data().name[1] + '</p></div></a>');
        });
    });
});