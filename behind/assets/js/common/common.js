//logo
Vue.component('logo', {
    template: '<a href="../index.html"><img src="assets/images/common/logo_word.svg" alt="Sirius"></a>'
})

var loho = new Vue({
    el: '#logo',
})

//主選單
Vue.component('menu-item', {
    props: ['item'],
    template: '<li><a v-bind:href="item.listMenu[1]" v-bind:title="item.listMenu[0]">{{ item.listMenu[0] }}</a></li>'
})

var mainMenu = new Vue({
    el: '#mainMenu',
    data: {
        menu: [
            { listMenu: ['Game', 'game_push.html'] },
            { listMenu: ['Member', 'member_push.html'] }
        ]
    }
})

//初始化 firebase
var firebaseConfig = {
    apiKey: "AIzaSyDlA_6VGaaEOogKMxFFaNvgyPUkBMsQfUg",
    authDomain: "baseballsirius.firebaseapp.com",
    databaseURL: "https://baseballsirius.firebaseio.com",
    projectId: "baseballsirius",
    storageBucket: "baseballsirius.appspot.com",
    messagingSenderId: "254226143983",
    appId: "1:254226143983:web:85852267eecb7dde"
};
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();


$(document).ready(function() {
    $('.c-aside__bt').click(function() {
        $(this).parent('.c-aside').toggleClass('open');
    });
});