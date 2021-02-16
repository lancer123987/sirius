$(document).ready(function() {
    $('.j-login').click(function(e) {
        e.preventDefault();
        let account = $(this).parents('.login').find('input[name="account"]').val();
        let password = $(this).parents('.login').find('input[name="password"]').val();
        if (account == '') {
            alert('帳號空白');
        } else if (password == '') {
            alert('密碼空白');
        } else {
            $('.c-loading').css('display', 'flex');
            var db = firebase.firestore();
            var ref = db.collection('account');
            let accountBox = [];
            ref.get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    accountBox.push(doc.id);
                });
                let accountExist = accountBox.indexOf(account);
                if (accountExist == -1) {
                    $('.c-loading').hide();
                    alert('帳號不存在');
                } else {
                    ref.doc(account).get().then(doc => {
                        if (doc.data().password == password) {
                            window.location = "behind/system.html";
                        } else {
                            $('.c-loading').hide();
                            alert('密碼錯誤');
                        }
                    });
                }
            });
        }
    });
});