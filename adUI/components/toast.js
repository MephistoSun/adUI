var common = require('../common')

var toast = {
    show: function (ico, text) {
        var currentPage = getCurrentPages()[0]
        currentPage.setData({
            'adUI.toast.isShow': true,
            'adUI.toast.ico': ico,
            'adUI.toast.text': text
        })
        var animation = wx.createAnimation({
            duration: 0,
            transformOrigin: "50% 50%"
        })
        if (ico == 'load') {
            var rotate = 0
            function rotataAnimation() {
                rotate += (360 / 8)
                animation.rotate(rotate).step();
                currentPage.setData({
                    'adUI.toast.loading.animation': animation.export()
                })
            }
            rotataAnimation()
            toast.animation = setInterval(rotataAnimation, 125)
        } else {
            animation.rotate(0).step()
            currentPage.setData({
                'adUI.toast.loading.animation': animation.export()
            })
        }
    },
    hide: function () {
        var currentPage = getCurrentPages()[0]
        currentPage.setData({
            'adUI.toast.isShow': false,
            'adUI.toast.loading.animation': {}
        })
        clearInterval(toast.animation)
    },
    animation: function () {
    }
}

module.exports = toast
