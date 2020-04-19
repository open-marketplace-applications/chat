/* eslint-disable */

const EventEmitter = require('events')

export default class FreighterPolling extends EventEmitter {
  #addressSeed = null
  #currentIndex = 0

  constructor(Freighter, iota, addressSeed) {
    super()
    this.#currentIndex = 0
    this.#addressSeed = addressSeed
    this.Freighter = Freighter
    this.iota = iota
    this.offset = 0
    this.interval = 2e3
    this.timer = null
  }

  async startPolling() {
    const _this = this
    const startTimestamp = Math.round(new Date().getTime() / 1000)
    this.#currentIndex = await this.Freighter.findChannelIndex(
      this.iota,
      _this.#addressSeed,
      this.#currentIndex,
      (txs) => {
        if (txs.length > 0) {
          return startTimestamp < txs[0].timestamp
        }
        return true
      }
    )
    this.offset = this.#currentIndex
    let failTries = 0
    const tick = () => {
      _this.timer = setTimeout(async () => {
        try {
          const data = await this.Freighter.getDataList(
            _this.iota,
            _this.#addressSeed,
            _this.offset,
            5
          )
          failTries = 0
          if (data.length > 0) {
            this.emit('messages', data)
            let newOffset = 0
            for (const d of data) {
              newOffset = Math.max(d.index + 1, newOffset)
            }
            _this.offset = newOffset
          }
        } catch (e) {
          console.error(`getDataList(${_this.offset}) error`, e)
          failTries++
          if (failTries > 5) {
            console.warn(
              'Failed more than 5 times, skipping this offset (for now)'
            )
            failTries = 0
            _this.offset += 5
          }
        } finally {
          tick()
        }
      }, _this.interval)
    }
    tick()
  }
}
