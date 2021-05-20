// pages/video/video.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    content: ''
  },
  bindTitle: function(e) {
    this.setData({
      title: e.detail.value
    })
  },
  bindContent: function(e) {
    this.setData({
      content: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

      // wx.setStorage({
      //   key:'name',
      //   data:'aaa'
      // })
      // wx.getStorage({
      //   key:'name',
      //   success (res) {
      //     console.log(res.data)
      //   }
      // })

      // wx.setStorageSync('age', '41')

      // var aa = wx.getStorageSync('age')
      // wx.getSystemInfo({
      //   success: (res) => {
      //     console.log(res)
      //   },
      // })

      // console.log(aa)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})