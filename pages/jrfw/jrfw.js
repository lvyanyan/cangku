//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    /**
        * 页面配置
        */
    winWidth: 0,
    winHeight: 0,
    // tab切换
    currentTab: 0,
    list: [
      {
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
      }, {
        title: "张北县文化教育发展公告",
        time: "2019-04-01",
        imgUrl: "asset/list.png",
        count: 20
      }
    ]
  },
  onLoad: function () {
    var that = this;

    /**
     * 获取系统信息
     */
    wx.getSystemInfo({

      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }

    });
  },
  /**
     * 滑动切换tab
     */
  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

  },
  /**
   * 点击tab切换
   */
  swichNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  }
})