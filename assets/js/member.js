$(document).ready(function() {
    var ref = db.collection('SiriusMember');
    let boxData = [];
    ref.get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
            numberId = doc.id;
            boxData.push(doc.data().name[1]);

            boxNumber = parseInt(numberId);
            if (boxNumber < 10) {
                boxNumber = "0" + boxNumber;
            } else {}

            $('#member .member__inner').append('<a class=\"member__inner__item\" href=\"data.html?member' + numberId + '\"><figure class=\"member__inner__item__pic\"><img src="assets/images/data/pic.jpg\"></figure><div class=\"member__inner__item__text\"><p class=\"member__inner__item__text__number\">' + boxNumber + '</p><p class=\"member__inner__item__text__name\">' + doc.data().name[1] + '</p></div></a>');
        });
        $('.c-loading').fadeOut();
    });
});