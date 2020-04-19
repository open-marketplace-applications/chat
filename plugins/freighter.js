import Vue from 'vue'

import { composeAPI } from '@iota/core'
import { Freighter } from './Freighter/index'

const iota = composeAPI({
  provider: 'https://nodes.tanglebay.org'
})

Freighter.install = function(Vue, options) {
  const freighter = new Freighter(iota, 'MySecretChannelKey')

  Vue.prototype.$freighter = freighter
}

Vue.use(Freighter)
