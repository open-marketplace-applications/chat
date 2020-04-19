import Vue from 'vue'

import { composeAPI } from '@iota/core'
import { Freighter } from './Freighter/index'

const iota = composeAPI({
  provider: 'https://nodes.tanglebay.org'
})

Freighter.install = function(Vue, options) {
  const freighter = new Freighter(iota, '1234')

  let historyIndex = -1
  let messages = []

  async function loadHistory() {
    const historyMessages = await Freighter.getChannelHistory(
      iota,
      freighter.getAddressSeed(),
      historyIndex,
      15
    )
    if (historyMessages !== null && historyMessages.length > 0) {
      messages = messages.concat(historyMessages)
      historyIndex = historyMessages[0].index - 1

      if (historyIndex > -1) {
        await loadHistory()
      }
    }
    return historyMessages
  }

  Vue.prototype.$freighter = freighter
  Vue.prototype.$freighter.loadHistory = loadHistory
}

Vue.use(Freighter)
