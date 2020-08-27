$(document).ready(function() {
    $('#submit').click(function() {
        var num = $('#num').val();
        var name = $('#name').val();
        var nick = $('#nick').val();
        var hobit_p = $('#hobit_p').val();
        var hobit_h = $('#hobit_h').val();
        var size_head = $('#size_head').val();
        var size_clothes = $('#size_clothes').val();
        db.collection("SiriusMember").doc(num).set({
            name: [name, nick],
            hobit: [hobit_p, hobit_h],
            size: [size_head, size_clothes],
        });
    });
});