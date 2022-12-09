// pages/caihongpi/caihongpi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    textVal: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    wx.request({
      url: 'https://api.shadiao.pro/chp',

      success: (res) => {
        let result = res.data.data.text

        this.setData({
          textVal: result,
        })
      },
      fail: (res) => {
        wx.showToast({
          title: '请求失败'
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    wx.showShareMenu({
      withShareTicket: true
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  copy() {
    wx.setClipboardData({
      data: this.data.textVal,
      success: function (res) {
        wx.showToast({
          title: '复制成功',
        })
      }
    })
  },
  once() {
    wx.request({
      url: 'https://api.shadiao.pro/chp',

      success: (res) => {
        let result = res.data.data.text

        this.setData({
          textVal: result,
        })
      },
      fail: (res) => {
        wx.showToast({
          title: '请求失败'
        })
      }
    })
  }

})