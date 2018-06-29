// pages/account/demand/demand.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ages: ["22-26", "27-35", ">35", "不限"],
    ageIndex: 0,


    heights: app.data.heights,

    educations: app.data.educations,
    educationIndex: app.data.educationDefaultIndex,


    region: [], //所在城市

    describtion: '' //相亲宣言
  },
  bindAgeChange: function(e) {
    this.setData({
      ageIndex: e.detail.value
    })
  },
  bindHeightChange: function(e) {
    this.setData({
      heightIndex: e.detail.value
    })
  },
  bindEducationChange: function(e) {
    this.setData({
      educationIndex: e.detail.value
    })
  },
  bindRegionChange: function(e) {
    this.setData({
      region: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})