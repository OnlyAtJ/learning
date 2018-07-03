  //app.js

  var $weights = ['<40'];
  var $i = 40;
  for ($i; $i <= 80; $i++) {
    $weights.push($i);
  }
  $weights.push('>80');

  var $heights = [];
  for (var $i = 140; $i <= 230; $i++) {
    $heights.push($i);
  }

  App({
    data: {
      relations: ["好友", "儿子", "女儿", "其他亲戚"], //制作名片的对象关系 选项
      ages: ["22-26", "27-35", ">35", "不限"], //年龄 选项
      educations: ["大专及以下", "本科", "硕士", "硕士以上"], //学历 选项
      educationDefaultIndex: 1, //学历默认 本科
      maritalStatuses: ["单身", "离异", "丧偶"], //婚姻状况 选项
      jobs: ['个体户', '民营企业', '合资/外企', '国企/央企', '事业单位', '公务员'], //单位性质 选项
      incomes: ['3000~5000', '5000~8000', '8000~12000', '12000~20000', '>20000'], //月收入 选项
      positions: ['普通员工', '中层经理', '高管', '老板'], //职位
      weights: $weights, //体重
      femaleDefaultIndex: 11, //女生默认体重50
      maleDefaultIndex: 26, //男生默认体重65
      heights: $heights, //身高
      economics: ["有房有贷", "有房无贷", "无房"], //经济实力 选项
      sexs: [{
        "value": '0',
        "option": 'male',
        'ch': '男'
      }, {
        "value": '1',
        "option": 'female',
        'ch': '女'
      }], //性别选项
    },


    domainName: 'local.xq.com',
    ImageUrl: 'http://local.xq.com/images/',
    onLaunch: function() {


      // 展示本地存储能力
      var logs = wx.getStorageSync('logs') || []
      logs.unshift(Date.now())
      wx.setStorageSync('logs', logs)

      // 登录
      wx.login({
        success: res => {
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
        }
      })
      // 获取用户信息
      wx.getSetting({
        success: res => {
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
            wx.getUserInfo({
              success: res => {
                // 可以将 res 发送给后台解码出 unionId
                this.globalData.userInfo = res.userInfo

                // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                // 所以此处加入 callback 以防止这种情况
                if (this.userInfoReadyCallback) {
                  this.userInfoReadyCallback(res)
                }
              }
            })
          }
        }
      })
    },
    globalData: {
      userInfo: null
    }
  })