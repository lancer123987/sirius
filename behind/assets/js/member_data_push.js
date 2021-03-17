$(document).ready(function() {
    /**讀取資料 & 選項渲染**/

    //場次
    var ref = db.collection('game');
    ref.get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
            $('select[name="game_date"]').append('<option value=\"' + doc.id + '\">' + doc.id + '<\/option>');
        });
    });

    //場次
    var ref = db.collection('SiriusMember');
    ref.get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
            $('select[name="game_member"]').append('<option value=\"' + doc.id + '\">' + doc.id + '<\/option>');
        });
    });
});