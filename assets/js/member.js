$(document).ready(function() {
    var db = firebase.firestore();
    var ref = db.collection('SiriusMember');

    ref.get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
            //console.log(doc.id, doc.data());
            console.log(doc.id);
        });
    });
});