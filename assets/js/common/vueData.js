//主選單
Vue.component('menu-item', {
    props: ['item'],
    template: '<li><a v-bind:href="item.listMenu[1]" v-bind:title="item.listMenu[0]">{{ item.listMenu[0] }}</a></li>'
})

var mainMenu = new Vue({
    el: '#mainMenu',
    data: {
        menu: [
            { listMenu: ['Game', 'game.html'] },
            { listMenu: ['Member', 'member.html'] },
            { listMenu: ['About', 'about.html'] }
        ]
    }
})

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