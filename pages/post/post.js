// pages/detail/detail.js
// const weeks = {
//   '1':['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
//   '2':['3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
//   '3':['4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
//   '4':['5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
//   '5':['6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
//   '6':['7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
//   '7':['8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
//   '8':['9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
//   '9':['10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
//   '10':['11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
//   '11':['12', '13', '14', '15', '16', '17', '18', '19', '20'],
//   '12':[ '13', '14', '15', '16', '17', '18', '19', '20'],
//   '13':['14', '15', '16', '17', '18', '19', '20'],
//   '14':['15', '16', '17', '18', '19', '20'],
//   '15':['16', '17', '18', '19', '20'],
//   '16':['17', '18', '19', '20'],
//   '17':['18', '19', '20'],
//   '18':['19', '20'],
//   '19':['20'],
//   '20':[]
// }
Page({

  /**
   * 页面的初始数据
   */
  data: {
      id:'',
      className:'',
      classRoom:'',
      teacher:'',
      weekNum:"",
      descrition:"",
      isDisabled:false,
      isEditShow:false,
      isSaveShow:true
  },
  // onChange:function (event) {
  //   console.log(event)
  //   const {picker, value, index} = event.detail;
  //   picker.setColumnValues(1, weeks[value[0]]);
  // },
  // onClose:function () {
  //   this.setData({
  //     flag:false
  //   })
  // },
  // onCancel:function () {
  //   this.setData({
  //     flag:false
  //   })
  // },
  // onConfirm:function (data) {
  //   this.setData({
  //     flag:false
  //   })
  //   console.log(data)
  //   let str = data.detail.value[0] + '-' + data.detail.value[1] + "周"
  //   console.log(str)
  //   this.data.weekconfig.push(str)
  //   console.log(this.data.weekconfig)
  //   this.setData({
  //     weekNum:this.data.weekconfig.toString()
  //   })
  //   // this.data.weekNum = this.data.weekconfig.toString()
  // },
  onEdit:function () {
    this.setData({
      isSaveShow:true,
      isEditShow:false,
      isDisabled:false
    })
  },
  focusWeekNum:function () {
    console.log(33555)
    this.setData({
      flag:true
    })
  },
  changeClassName:function (value) {
    this.setData({
      className:value.detail
    })
    console.log(this.data.className)
  },
  changeClassRoom: function (value) {
    this.setData({
      classRoom:value.detail
    })
    console.log(this.data.classRoom)
  },
  changeWeekNum:function (value) {
    this.setData({
      weekNum:value.detail
    })
    console.log(this.data.weekNum)
  },
  changeTeacher:function (value) {
    this.setData({
      teacher:value.detail
    })
  },
  changeDescrition:function (value) {
    this.setData({
      descrition:value.detail
    })
  },
  onSave: function () {
    console.log(this.data.className)
    var that = this;//=====注意此处，要用that 指代this=====
    wx.request({
    url: 'http://127.0.0.1:9999/api/saveData', //服务器地址
    method: 'post',// OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    data: {
      id:this.data.id,
      className:this.data.className,
      classRoom:this.data.classRoom,
      weekNum:this.data.weekNum,
      teacher:this.data.teacher,
      descrition:this.data.descrition
    },
    header: {// 设置请求的 header
          'content-type': 'application/json;charset=utf-8'
    },
    success: function (res) {
          console.log(res);
    }
   })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options, 3333)
    console.log(Boolean(options.className))
    if(options.className){
      console.log("jinlaile")
      this.setData({
        id:options.id,
        className:options.className,
        classRoom:options.classRoom,
        weekNum:options.weekNum,
        teacher:options.teacher,
        descrition:options.descrition,
        isEditShow:true,
        isDisabled:true,
        isSaveShow:false       
      })
    }else{
      this.setData({
        id:options.id,
        className:options.className,
        classRoom:options.classRoom,
        weekNum:options.weekNum,
        teacher:options.teacher,
        descrition:options.descrition,
        isEditShow:false,
        isDisabled:false,
        isSaveShow:true       
      })
    }
    console.log(this.data.id)
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