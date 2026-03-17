/**
 * 将微信小程序的 API 转换为 Promise 形式
 * @param {Function} api - 微信小程序的 API 函数
 * @returns {Function} - 返回 Promise 化的函数
 */
function promisify(api) {
  return (options = {}) => {
    return new Promise((resolve, reject) => {
      api({
        ...options,
        success: (res) => resolve(res),
        fail: (err) => reject(err)
      });
    });
  };
}

// 导出常用的 Promise 化 API
const wxp = {
  login: promisify(wx.login),
  getUserProfile: promisify(wx.getUserProfile),
  getUserInfo: promisify(wx.getUserInfo),
  showModal: promisify(wx.showModal),
  showToast: promisify(wx.showToast),
  showLoading: promisify(wx.showLoading),
  hideLoading: wx.hideLoading,
  setStorage: promisify(wx.setStorage),
  getStorage: promisify(wx.getStorage),
  removeStorage: promisify(wx.removeStorage),
  request: promisify(wx.request),
  uploadFile: promisify(wx.uploadFile),
  downloadFile: promisify(wx.downloadFile),
  navigateTo: promisify(wx.navigateTo),
  redirectTo: promisify(wx.redirectTo),
  switchTab: promisify(wx.switchTab),
  reLaunch: promisify(wx.reLaunch),
  navigateBack: promisify(wx.navigateBack),

  // 云开发 API - 使用 getter 延迟绑定
  cloud: {
    get callFunction() {
      return promisify(wx.cloud.callFunction);
    },
    get uploadFile() {
      return promisify(wx.cloud.uploadFile);
    },
    get downloadFile() {
      return promisify(wx.cloud.downloadFile);
    },
    get getTempFileURL() {
      return promisify(wx.cloud.getTempFileURL);
    },
    get deleteFile() {
      return promisify(wx.cloud.deleteFile);
    }
  }
};

module.exports = {
  promisify,
  wxp
};
