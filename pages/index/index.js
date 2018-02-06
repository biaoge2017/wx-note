//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    
    motto: '开启新世界',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  addnote:function(){
    //console.log('click me ok');
    wx.switchTab({
      url: '../content/content'
    })
  },
  editnote: function(){
    console.log('click me ok');
    wx.navigateTo({
      url: '../edit/edit?id=2'
    })
  },
  onshow:function(){
    
  },
  onLoad: function () {
    var storgeMsg = wx.getStorageSync('key');
    var wills=storgeMsg.detail;
    this.setData({
      wills:wills
    })
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
