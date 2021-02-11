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