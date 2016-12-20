var app = getApp()

Page({
  data: {
  },
  onLoad: function () {
  },
  onReady: function () {
  },
  onShow: function () {
  },
  onHide: function () {
  },
  onUnload: function () {
  },
  alertMessage: function () {
    app.modal.alert('This is alert', function () {
      console.log('confirm')
    })
  },
  confirmMessage: function () {
    app.modal.confirm('This is confirm', function () {
      console.log('confirm')
    }, function () {
      console.log('cancel')
    })
  },
  toastLoad: function () {
    app.toast.load('loading')
    setTimeout(app.toast.hide, 1000)
  },
  toastSuccess: function () {
    app.toast.success('success')
    setTimeout(app.toast.hide, 1000)
  },
  toastDanger: function () {
    app.toast.danger('danger')
    setTimeout(app.toast.hide, 1000)
  },
  toastInfo: function () {
    app.toast.info('info')
    setTimeout(app.toast.hide, 1000)
  }
})
