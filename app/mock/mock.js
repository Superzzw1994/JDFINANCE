import Mock from 'mockjs';

export default Mock.mock('/zzw', {
    home:{
        index:{
            title:"理财精选",
            items:[
                {
                    title:"定期理财",
                    sub:"理财首选",
                    rate:"5.60%",
                    text:"历史年化回报率"
                },
                {
                    title:"小白理财",
                    sub:"理财首选",
                    rate:"4.22%",
                    text:"7日年化收益率"
                },
                {
                    title:"月月盈",
                    sub:"养老保障",
                    rate:"5%",
                    text:"七日年化收益率"
                },
                {
                    title:"小白基金",
                    sub:"天天赚钱",
                    rate:"4.27%",
                    text:"7日年化收益率"
                }
            ]
        },
        Hslider:{
            items:[
                {
                    href:'/home',
                    src:'//img12.360buyimg.com/jrpmobile/jfs/t16588/225/2090263765/46163/d17f76d8/5a8acde6N2b357bb8.jpg?width=750&height=320'
                },
                {
                    href:'/home',
                    src:'//img12.360buyimg.com/jrpmobile/jfs/t18235/74/492908201/27698/ce4197e2/5a8acdb9Nb104dab9.jpg?width=750&height=320'
                },
                {
                    href:'/home',
                    src:'//img12.360buyimg.com/jrpmobile/jfs/t16672/61/485752320/46238/388f82ca/5a8acd83N73a6ea6b.jpg?width=750&height=320'
                }
            ],
            enters:[
                {
                    href:'/home',
                    img:'//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132',
                    title:'优惠券'
                },
                {
                    href:'/home',
                    img:'//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132',
                    title:'领红包'
                },
                {
                    href:'/home',
                    img:'//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132',
                    title:'抢钢镚'
                },
                {
                    href:'/home',
                    img:'//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135',
                    title:'白条提额'
                }
            ],
            options:{
                   autoplay:true,
                   loop:true,
                   pagination: {
                      el: '.swiper-pagination'
                   },
                   noNextTick:false
            }
        },
        product:{
            title:"新品推荐",
            items:[
                {
                  src:'//img12.360buyimg.com/jrpmobile/jfs/t16591/349/2066779042/42386/92c7a2f6/5a7d5b56N263586c8.jpg?width=335&height=421',
                  href:'/home'
                },
                {
                  src:'//img12.360buyimg.com/jrpmobile/jfs/t16858/332/448124625/49189/717a1c58/5a7d5b8cNa734cd9f.jpg?width=335&height=421',
                  href:'/home'
                },
                {
                  src:'//img12.360buyimg.com/jrpmobile/jfs/t18736/21/452113740/50445/b97274fb/5a7d5bc4N592e324e.jpg?width=335&height=421',
                  href:'/home'
                },
                {
                  src:'//img12.360buyimg.com/jrpmobile/jfs/t19438/256/457591773/38627/1f0fb065/5a7d5bd0N656c015c.jpg?width=335&height=421',
                  href:'/home'
                }
            ],
            options:{
               grabCursor : true,
               spaceBetween:30,
               slidesPerView:2.3,
               freeMode:true
            }
        },
        service:{
            title:"生活服务",
          items:[
              {
                src:'//img12.360buyimg.com/jrpmobile/jfs/t4375/104/1184122472/3976/89741da4/58be8a6eNf10193d0.png?width=135&height=135',
                href:'/home',
                title:'惠加油',
              },
              {
                src:'//img12.360buyimg.com/jrpmobile/jfs/t4747/185/1901740991/5892/1383fb93/58f57851N17ee6993.jpg?width=132&height=132',
                href:'/home',
                title:'小白信用',
                des:'全新升级'
              },
              {
                src:'//img12.360buyimg.com/jrpmobile/jfs/t3241/234/8044685271/3713/7b29f77f/58be89c8Nb9d41295.png?width=135&height=135',
                href:'/home',
                title:'信用卡还款'
              },
              {
                src:'//img12.360buyimg.com/jrpmobile/jfs/t3172/259/7993557249/4351/fd082707/58be8a81Nd7716a06.png?width=135&height=135',
                href:'/home',
                title:'卡转让'
              },
              {
                src:'//img12.360buyimg.com/jrpmobile/jfs/t3085/320/8107659086/4344/cdbba2dd/58be8acfNdadcaf00.png?width=135&height=135',
                href:'/home',
                title:'定期还款'
              }
          ]
        },
        money:{
            title:"理财精选",
          items:[
              {
                  title:"定期理财",
                  sub:"理财首选",
                  rate:"5.60%",
                  text:"历史年化回报率"
              },
              {
                  title:"小白理财",
                  sub:"理财首选",
                  rate:"4.22%",
                  text:"7日年化收益率"
              },
              {
                  title:"月月盈",
                  sub:"养老保障",
                  rate:"5%",
                  text:"七日年化收益率"
              },
              {
                  title:"小白基金",
                  sub:"天天赚钱",
                  rate:"4.27%",
                  text:"7日年化收益率"
              }
          ]
        }
    },
    financial:[

    ],
    IOUs:[

    ],
    raise:[

    ]
});