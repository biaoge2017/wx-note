// pages/content/content.js
Page({

  formSubmit: function (e) {
    // wx.request({
    //   url:'',
    //   data:{e},
    //   header:{
    //     'content-type': 'application/json'
    //   },
    //   success:function (res){
    //     console.log(res)
    //   }
    // })
    e.detail.value.id=1;
    wx.setStorage({
      key: "key",
      data: e
    })
    try {
      var value = wx.getStorageSync('key')
      if (value) {
        console.log('这是缓存'+value.detail.value.text)
      }
    } catch (e) {
      // Do something when catch error
    }


  console.log('form发生了submit事件，携带数据为：', e.detail.value)
},
  formReset: function () {
    console.log('form发生了reset事件')
  },
  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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