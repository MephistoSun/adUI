var common = require('../common')

var modal = {
    setData: function (data) {
        var app = common.getApp()
        var oldData = app.data.adUI.modal
        var newData = Object.assign(oldData, data)
        app.data.adUI.modal = newData
    },
    getData: function () {
        var app = common.getApp()
        return app.data.adUI.modal
    },
    show: function (isAlert, content, confirmCallback, cancelCallback) {
        var app = common.getApp()
        var currentPage = common.getCurrentPage()
        var modalData = this.getData()
        var title = modalData.title
        var content = content || modalData.content
        var confirmText = modalData.confirmText
        var cancelText = modalData.cancelText
        var confirmCallback = confirmCallback || new Function
        var cancelCallback = cancelCallback || new Function
        currentPage.setData({
            'adUI.modal.isShow': true,
            'adUI.modal.isAlert': isAlert,
            'adUI.modal.title': title,
            'adUI.modal.content': content,
            'adUI.modal.confirmText': confirmText,
            'adUI.modal.cancelText': cancelText
        })
        currentPage.adUIModalConfirmCallback = function () {
            this.hide()
            confirmCallback()
        }.bind(this)
        currentPage.adUIModalCancelCallback = function () {
            this.hide()
            cancelCallback()
        }.bind(this)
    },
    hide: function () {
        var currentPage = getCurrentPages()[0]
        currentPage.setData({
            'adUI.modal.isShow': false
        })
    }
}

module.exports = modal
