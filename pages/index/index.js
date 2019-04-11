Page({
  data: {
    background: null,
    ip: "http://192.168.8.92:8080",
    list:[
      {
        title:"张北县文化教育发展公告",
        time:"2019-04-01",
        imgUrl:"asset/list.png",
        count:20
      }, {
        title: "张北县文化教育发展公告",
        time: "2019-04-01",
        imgUrl: "asset/list.png",
        count: 20
      }, {
        title: "张北县文化教育发展公告",
        time: "2019-04-01",
        imgUrl: "asset/list.png",
        count: 20
      }, {
        title: "张北县文化教育发展公告",
        time: "2019-04-01",
        imgUrl: "asset/list.png",
        count: 20
      }
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    circular: true,
    interval: 2000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,
    rel: [
      {
        img: 'asset/jgg.png',
        text: '官方小程序介绍视频'
      },
      {
        img: 'asset/jgg.png',
        text: '官方小程序介绍视频'
      },
      {
        img: 'asset/jgg.png',
        text: '官方小程序介绍视频'
      },
      {
        img: 'asset/jgg.png',
        text: '官方小程序介绍视频'
      },
      {
        img: 'asset/jgg.png',
        text: '官方小程序介绍视频'
      },
      {
        img: 'asset/jgg.png',
        text: '官方小程序介绍视频'
      },
      {
        img: 'asset/jgg.png',
        text: '官方小程序介绍视频'
      },
      {
        img: 'asset/jgg.png',
        text: '官方小程序介绍视频'
      }
    ]
  },
  onLoad:function(){
      var that = this;
      wx.request({
        url: 'http://192.168.8.92:8080/rotationChart/getRotationChartList?limit=10&page=1&isRelease=0', // 仅为示例，并非真实的接口地址
        data: {
          x: '',
          y: ''
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {
          that.setData({ background: res.data.data })
        }
      })
     
  },
  changeProperty: function (e) {
    var propertyName = e.currentTarget.dataset.propertyName
    var newData = {}
    newData[propertyName] = e.detail.value
    this.setData(newData)
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  }
})
