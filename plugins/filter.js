import Vue from 'vue'

const filters = {
  formateDate(val) {
    let date = new Date(val)
    var Y = date.getFullYear() + '-'
    var M =
      (date.getMonth() + 1 < 10
        ? '0' + (date.getMonth() + 1)
        : date.getMonth() + 1) + '-'
    var D = date.getDate() + ' '
    var h = date.getHours()
    h = h < 10 ? '0' + h + ':' : h + ":"
    var m = date.getMinutes()
    m = m < 10 ? '0' + m + ':' : m + ":"
    var s = date.getSeconds()
    s = s < 10 ? '0' + s : s
    return Y + M + D + h + m + s
  }
}

Object.keys(filters).forEach(key => {
  Vue.filter(key,filters[key])
})