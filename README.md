#How to use it

###1.at app.js require adUI and init it
```js
var adUI = require('./adUI/adUI')

App({
  onLaunch: function () {
    adUI.init(this)
  },
  onShow: function () {
  },
  onHide: function () {
  }
})
```
###2.at app.wxss bottom import adUI style
```css
@import './adUI/adUI.wxss'
```
###3.import template where you use the page
```html
<import src="../../adUI/adUI.wxml" />
<template is="adUI" data="{{ adUI }}" />
```
###4.in your js use adUi like this!
```js
var app = getApp()

Page({
  data: {
  },
  onLoad: function () {
  },
  onReady: function () {
  },
  onShow: function () {
    app.modal.alert('This is alert', function () {
      console.log('confirm')
    })
  },
  onHide: function () {
  },
  onUnload: function () {
  }
})
```

#adUI API

####app.modal.alert
use adUI alert component
```js
/**
 * @param {string} content
 * @param {function} confirmCallback
 */
app.modal.alert(content, confirmCallback)
```

####app.modal.confirm
use adUI confirm component
```js
/**
 * @param {string} content
 * @param {function} confirmCallback
 * @param {function} cancelCallback
 */
app.modal.confirm(content, confirmCallback, cancelCallback)
```

####app.modal.setData
set app modal components default settings
```js
/**
 * @param {string} settings.title
 * @param {string} settings.content
 * @param {string} settings.confirmText
 * @param {string} settings.cancelText
 */
app.modal.setData(settings)
```

####app.modal.getData
set app modal components default settings
```js
/**
 * @return {string} settings.title
 * @return {string} settings.content
 * @return {string} settings.confirmText
 * @return {string} settings.cancelText
 */
app.modal.getData()
```

####app.toast.show
show adUI toast component
PS1:ico only support four default params:load,success,danger,info
PS2:all ico is vender 'font awesome'
PS3:you can expend your custom toast used this function
```js
/**
 * @param {string} ico
 * @param {string} content
 */
app.toast.show(ico, content)
```

####app.toast.hide
hide adUI toast component
```js
app.toast.hide()
```

####app.toast.load
show adUI loading toast component and loading toast have route animation
```js
/**
 * @param {string} content
 */
app.toast.load(content)
```

####app.toast.success
show adUI success toast component
```js
/**
 * @param {string} content
 */
app.toast.success(content)
```

####app.toast.danger
show adUI loading toast component
```js
/**
 * @param {string} content
 */
app.toast.danger(content)
```

####app.toast.info
show adUI info toast component
```js
/**
 * @param {string} content
 */
app.toast.info(content)
```

##How to expand the app.toast
add your custom style in the app.wxss like this
```css
.adUI-toast-ico.address-book::after {
  content: "\f2b9";
}
```
use adUI app.toast.show like this
```js
app.toast.show('address-book', content)
```
then you can use your custom toast!

##enjoy it
