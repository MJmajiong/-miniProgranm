// pages/login/login.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user:'',
    password:'',
    userErrorMessage:"",
    passwordErrorMessage:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  userOnChange: function (event) {
    console.log(event.detail)
    this.setData({
      user:event.detail,
      userErrorMessage:''
    })
  },
  passwordOnChange: function (event) {
    console.log(event.detail)
    this.setData({
      password:event.detail,
      passwordErrorMessage:''
    })
  },
  searchClick: function () {
    // console.log(this.data.user, this.data.password)
    var that = this;
    wx.request({
      // url: 'http://127.0.0.1:9999/api/search', //服务器地址
      url: 'http://39.108.2.103:9999/api/search',
      method: 'post',// OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      data: {
        user:this.data.user,
        password:this.data.password
      },
      header: {// 设置请求的 header
            'content-type': 'application/json;charset=utf-8'
      },
      success: function (res) {
        console.log(res)
        if(res.data.msg == 1){
          app.globalData.user = that.data.user
          wx.switchTab({
            url:"/pages/index/index"
          })
        }else{
          if(res.data.message === "密码错误"){
            that.setData({
              passwordErrorMessage:res.data.message
            })
            return
          }else{
            that.setData({
              userErrorMessage:res.data.message
            })
            return
          }
        }
      },
      fail: function(res) {
        console.log(res)
      }
     })
  },
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