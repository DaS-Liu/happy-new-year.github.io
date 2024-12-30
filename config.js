// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "心爱的姑娘",  // 同上...
        "今天是跨年夜",
        "这是我们在一起后",
        "第二次一起跨年！",
        "我们在一起已经684天！",
        "这两年里",
        "我见过你",
        "奇怪的样子",
        "还是奇怪的样子",
        "可爱的样子",
        "生气的样子",
        "都是我喜欢的样子",
        "对了，新年第一吻给我了吗？",
        "今年要吃好好的",
        "喂饱饱的",
        "然后才有力气好好生活",
        "和爱我！",
        "新的一年",
        "我们一起",
        "新年快乐，小宛圆~~"
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "送给我": "./imgs/songxinxin.jpeg",
        "心爱的姑娘": "./imgs/xinai.jpg",
        "今天是跨年夜": "./imgs/kuanian.jpg",
        "这是我们在一起后": "./imgs/zaiyiqi.jpg",
        "第二次一起跨年！": "./imgs/kuanian2.jpg",
        "我们在一起已经684天！": "./imgs/684.jpg",
        "这两年里": "./imgs/liangnian.jpg",
        "我见过你": "./imgs/jianguo.jpg",
        "奇怪的样子": "./imgs/qiguai1.jpg",
        "还是奇怪的样子": "./imgs/qiguai2.jpg",
        "可爱的样子": "./imgs/keai.jpg",
        "生气的样子": "./imgs/shengqi.jpg",
        "都是我喜欢的样子": "./imgs/xihuan.jpg",
        "对了，新年第一吻给我了吗？": "./imgs/chuo.gif",
        "今年要吃好好的": "./imgs/chi.jpg",
        "喂饱饱的": "./imgs/weibao.jpg",
        "然后才有力气好好生活": "./imgs/shenghuo.jpg",
        "和爱我！": "./imgs/aiwo.jpg",
        "新的一年": "./imgs/xindeyinian.jpg",
        "我们一起": "./imgs/yiqi.jpg",
        "新年快乐，小宛圆~~": "./imgs/xinian.jpg"
    },
    
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "点我开始",
        play: "上音乐",
        bannar_coming: "搞点颜色",
        balloons_flying: "好像还少点东西",
        yanhua: "烟花？",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "新年快乐！～",
        story: "A MESSAGE FOR YOU"
    },

    // 结束语
    loveText: '爱你的刘先生~'
};
