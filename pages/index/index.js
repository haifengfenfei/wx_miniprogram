//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    item:[
        {
        index: 1,
        msg: 'this is a template \n',
        time: '2021-09-15'
      }, {
        index: 2,
        msg: 'this is a template \n',
        time: '2021-09-15'
      }, {
        index: 3,
        msg: 'this is a template \n',
        time: '2021-09-15'
      },
    ]
  },
  getPhoneNumber (e) {
    console.log(e.detail)
    console.log(e.detail.errMsg)
    console.log(e.detail.iv)
    console.log(e.detail.encryptedData)
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //点击事件跳转
  getNewTap: function(e){
    // 跳转到 非tabBar 页面
    // wx.navigateTo({
    //   url: '../news/news',
    // })

    // 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
    wx.switchTab({
      url: '../news/news'
    })
},
  onLoad: function () {

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }

})
