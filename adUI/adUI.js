var adUI = require('./components/index')

module.exports = adUI
module.exports.init = function (app) {
    if (!app.data) app.data = {}
    app.data.adUI = {
        toast: {
        },
        modal: {
            title: 'title',
            content: '',
            confirmText: 'confirm',
            cancelText: 'cancel'
        },
    }
    app.modal = {
        setData: adUI.modal.setData,
        getData: adUI.modal.getData,
        alert: function (content, confirmCallback) {
            adUI.modal.show(true, content, confirmCallback)
        },
        confirm: function (content, confirmCallback, cancelCallback) {
            adUI.modal.show(false, content, confirmCallback, cancelCallback)
        }
    }
    app.toast = {
        load: function (text) {
            adUI.toast.show('load', text)
        },
        success: function (text) {
            adUI.toast.show('success', text)
        },
        danger: function (text) {
            adUI.toast.show('danger', text)
        },
        info: function (text) {
            adUI.toast.show('info', text)
        },
        show: adUI.toast.show,
        hide: adUI.toast.hide
    }
}
