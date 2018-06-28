// pages/account/info/index.js

var nowDate = new Date();
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    relations: app.data.relations,
    relationIndex: -1,

    birthMonth: '',
    monthStart: '1990-01', //选择月份 开始值
    monthEnd: nowDate.getFullYear() + '-' + nowDate.getMonth(), //选择月份 结束值

    educations: app.data.educations,
    educationIndex: app.data.educationDefaultIndex,

    region: [], //所在城市

    nativePlace:[],//籍贯

    maritalStatuses: app.data.maritalStatuses, //婚姻状况
    maritalStatusIndex: -1,

    jobs: app.data.jobs,
    jobIndex: -1,

    incomes: app.data.incomes,
    incomeIndex: -1,

    weights: app.data.weights,
    weightIndex: app.data.femaleDefaultIndex,

    heights: app.data.heights,
  },

  bindMonthChange: function(e) {
    this.setData({
      birthMonth: e.detail.value
    })
  },

  bindRelationChange: function(e) {
    this.setData({
      relationIndex: e.detail.value
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
  bindNativePlaceChange: function (e) {
    this.setData({
      nativePlace: e.detail.value
    })
  },
  bindMaritalStatusChange: function(e) {
    this.setData({
      maritalStatusIndex: e.detail.value
    })
  },
  bindJobStatusChange: function(e) {
    this.setData({
      jobIndex: e.detail.value
    })
  }, 
  bindIncomeStatusChange: function (e) {
    this.setData({
      incomeIndex: e.detail.value
    })
  },
  bindWeightChange: function (e) {
    this.setData({
      weightIndex: e.detail.value
    })
  },
  bindHeightChange: function (e) {
    this.setData({
      heightIndex: e.detail.value
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