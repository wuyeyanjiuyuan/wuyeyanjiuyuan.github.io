jQuery(document).ready(function() {
    var qcloud = {};
    $('[_t_nav]').hover(function() {
        var _nav = $(this).attr('_t_nav');
        clearTimeout(qcloud[_nav + '_timer']);
        qcloud[_nav + '_timer'] = setTimeout(function() {
            $('[_t_nav]').each(function() {
                $(this)[_nav == $(this).attr('_t_nav') ? 'addClass' : 'removeClass']('nav-up-selected');
            });
            $('#' + _nav).stop(true, true).slideDown(200);
        }, 150);
    }, function() {
        var _nav = $(this).attr('_t_nav');
        clearTimeout(qcloud[_nav + '_timer']);
        qcloud[_nav + '_timer'] = setTimeout(function() {
            $('[_t_nav]').removeClass('nav-up-selected');
            $('#' + _nav).stop(true, true).slideUp(200);
        }, 150);
    });
});

new Vue({
    el: "#index",
    data: {
        /* 导航标题 */
        nevigatelist: [{
            id: '1',
            nav: 'home',
            label: '首页',
        }, {
            id: '2',
            nav: 'product',
            label: '云产品',
        }, {
            id: '3',
            nav: 'wechat',
            label: '微信建站',
        }, {
            id: '4',
            nav: 'solution',
            label: '行业解决方案',
        }, {
            id: '5',
            nav: 'cooperate',
            label: '合作伙伴',
        }, {
            id: '6',
            nav: 'support',
            label: '帮助与支持',
        }, ],
        /* 导航内明细列表 */
        navdetails: [{
                id: 'product',
                /* 明细列表左移距离 */
                leftlength : '100px',
                /* 明细列表标题下内容 */
                childrenlist: [{
                    id: '1',
                    /* 列表标题 */
                    label: '计算机与网络',
                    /* 标题下内容列表 */
                    hreflist: [{
                        label: '云服务器',
                        href: '#',
                    }, {
                        label: '弹性Web引擎',
                        href: '#',
                    }, {
                        label: '负载均衡',
                        href: '#',
                    }, ]
                }, {
                    id: '2',
                    /* 列表标题 */
                    label: '存储与CDN',
                    /* 标题下内容列表 */
                    hreflist: [{
                        label: '云数据库',
                        href: '#',
                    }, {
                        label: 'NoSQL高速存储',
                        href: '#',
                    }, {
                        label: '对象存储服务(beta)',
                        href: '#',
                    }, {
                        label: 'CDN',
                        href: '#',
                    }, ]
                }, {
                    id: '3',
                    /* 列表标题 */
                    label: '监控与安全',
                    /* 标题下内容列表 */
                    hreflist: [{
                        label: '云监控',
                        href: '#',
                    }, {
                        label: '云安全',
                        href: '#',
                    }, {
                        label: '云拨测',
                        href: '#',
                    }, ]
                }, {
                    id: '4',
                    /* 列表标题 */
                    label: '数据分析',
                    /* 标题下内容列表 */
                    hreflist: [{
                        label: '腾讯云分析',
                        href: '#',
                    }, {
                        label: '关键因子',
                        href: '#',
                    }, ]
                }, {
                    id: '5',
                    /* 列表标题 */
                    label: '开发者工具',
                    /* 标题下内容列表 */
                    hreflist: [{
                        label: '移动加速',
                        href: '#',
                    }, {
                        label: '应用加固',
                        href: '#',
                    }, {
                        label: '信鸽推送',
                        href: '#',
                    }, ]
                }, {
                    id: '6',
                    /* 列表标题 */
                    label: '开发者服务',
                    /* 标题下内容列表 */
                    hreflist: [{
                        label: '安全认证服务',
                        href: '#',
                    }, {
                        label: '域名备案',
                        href: '#',
                    }, ]
                }, ]

            },{
                id: 'solution',
                leftlength : '380px',
                childrenlist: [{
                        id: '1',
                        /* 列表标题 */
                        label: '',
                        /* 标题下内容列表 */
                        hreflist: [{
                            label: '微信',
                            href: '#',
                        }, ]
                    },{
                        id: '2',
                        /* 列表标题 */
                        label: '',
                        /* 标题下内容列表 */
                        hreflist: [{
                            label: '游戏',
                            href: '#',
                        }, ]
                    },{
                        id: '3',
                        /* 列表标题 */
                        label: '',
                        /* 标题下内容列表 */
                        hreflist: [{
                            label: '移动应用',
                            href: '#',
                        }, ]
                    },
                ]
            },{
                id:'support',
                leftlength : '610px',
                childrenlist : [
                    {
                        id: '1',
                        /* 列表标题 */
                        label: '',
                        /* 标题下内容列表 */
                        hreflist: [{
                            label: '资料库',
                            href: '#',
                        }, ]
                    },{
                        id: '2',
                        /* 列表标题 */
                        label: '',
                        /* 标题下内容列表 */
                        hreflist: [{
                            label: '论坛',
                            href: '#',
                        }, ]
                    },{
                        id: '3',
                        /* 列表标题 */
                        label: '',
                        /* 标题下内容列表 */
                        hreflist: [{
                            label: '亿元支持',
                            href: '#',
                        }, ]
                    },
                ]
            },{
                id:'cooperate',
                leftlength : '480px',
                childrenlist:[
                    {
                        id: '1',
                        /* 列表标题 */
                        label: '',
                        /* 标题下内容列表 */
                        hreflist: [{
                            label: '代理商',
                            href: '#',
                        }, ]
                    },{
                        id: '2',
                        /* 列表标题 */
                        label: '',
                        /* 标题下内容列表 */
                        hreflist: [{
                            label: '微信服务商',
                            href: '#',
                        }, ]
                    },{
                        id: '3',
                        /* 列表标题 */
                        label: '',
                        /* 标题下内容列表 */
                        hreflist: [{
                            label: '创投机构',
                            href: '#',
                        }, ]
                    },
                ],
            }
        ],
    },
    mounted: function() {

    },
    methods: {

    }
})