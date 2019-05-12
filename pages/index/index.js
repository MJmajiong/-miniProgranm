//index.js
//获取应用实例
const app = getApp()
import Toast from "../../miniprogram_npm/vant-weapp/toast/toast"
var i = 0;
Page({
  data: {
    classInformation:[{classNum:"1、2"},{classNum:"3、4"},{classNum:"5、6"},{classNum:"7、8"},{classNum:"9,10"}],
    weekArray:[{
      classNum:"1、2"
    }, {
      classNum:"3、4"
    }, {
      classNum:'5、6'
    }, {
       classNum:'7、8'
    }, {
      classNum:'9、10'
    }],
    columns:["第1周", "第2周", "第3周", "第4周", "第5周", "第6周","第7周", "第8周", "第9周", "第10周", "第11周", "第12周","第13周", "第14周", "第15周", "第16周", "第17周", "第18周","第19周", "第20周"],
    flag:false,
    month:"第1周",
    week:1
  },
  onLoad: function (options) {
   console.log("onload");
  },
  getData: function () {
    console.log("chenggongle")
    var that = this;    
    wx.request({
      // url: 'http://127.0.0.1:9999/api/getClassInformation' , //服务器地址
      url: 'http://39.108.2.103:9999/api/getClassInformation' ,
      method: 'get',// OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      data: {
        week:this.data.week,
        studentUser:app.globalData.user
      },
      header: {// 设置请求的 header
            'content-type': 'application/json;charset=utf-8'
      },
      success: function (res) {
      //  console.log(res)
        // console.log(that.data.classInformation)
        console.log(res)
        that.dealData(res.data, that)
      },
      fail: function(res) {
        console.log(res)
      }
     })
  },
  dealData: function (classData, that) {
    // console.log(this.data.classInformation)
    // console.log(that.data.weekArray)
    // console.log(that.data.weekArray.length)
    // for(var i = 0; i < that.data.weekArray.length; i++){
      console.log(that.data.weekArray.length)
      console.log(classData)
      var index = 0;
      for(var i = 1; i <= classData.length; i++){
        var flag = classData[i-1]["dayOfWeek"]
        console.log(flag)
        that.data.classInformation[index][flag] = classData[i - 1]
        if(i%7 == 0){
          index += 1
        }
      }
      that.setData({
        weekArray:that.data.classInformation
      })
  },
  mondayClick: function (e) {
    let index = e.currentTarget.dataset.index
    let day = e.currentTarget.dataset.day
    console.log(index, day)
    console.log(this.data.weekArray[index][day],63636363633)
    if(!app.globalData.user){
      return
    }else{
      if(this.data.weekArray[index][day].hasOwnProperty("id")){
        wx.navigateTo({
          url: "../post/post?className=" + this.data.weekArray[index][day].className +"&classRoom=" + this.data.weekArray[index][day].classRoom + "&teacher=" + this.data.weekArray[index][day].teacher + "&weekNum=" + this.data.weekArray[index][day].weekNum + "&id=" + this.data.weekArray[index][day].id + "&descrition=" + this.data.weekArray[index][day].descrition
        })
      }else{
        wx.navigateTo({
          url:"../post/post"
        })
      }
    }
  },
  chooseClick: function () {
    this.setData({
      flag:true
    })
  },
  onConfirm: function (data) {
    this.setData({
      flag:false,
      month:data.detail.value,
      week:data.detail.index + 1
    })
    this.getData()
    console.log(data.detail.index)
    console.log(data)
  },
  onCancel: function () {
    this.setData({
      flag:false
    })
  },
  onShow: function () {
    if(app.globalData.user && i === 0){
      i += 1
      this.getData()
    } 
    // this.dealData()
  }
})
