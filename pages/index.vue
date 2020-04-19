<template>
  <div class="container">
    <vue-command
      :yargs-options="{ alias: { color: ['colour'] } }"
      :commands="commands"
      :executed.sync="executed"
      title="Open Marketplace Applications Chat Demo"
      prompt="~user@oma:#	"
      help-text="send <your message>"
      :show-help="true"
      intro="Loading messages..."
      :is-in-progress="loading"
      :show-intro="loading"
    />
  </div>
</template>

<script>
import VueCommand, { createStdout } from 'vue-command'
import 'vue-command/dist/vue-command.css'

export default {
  components: {
    VueCommand
  },
  data() {
    return {
      history: [],
      loading: true,
      // yargs arguments
      commands: {
        send: (message) => {
          console.log('send message', message)
          console.log('send message', message._[0])
          this.sendMessage(message._[0]).then(function(response) {
            console.log('hmmm', response)
          })
          return createStdout('sending...')
        }
      },
      executed: new Set()
    }
  },
  async created() {
    console.log('index', this.$freighter)
    this.history = await this.$freighter.loadHistory()
    this.loading = false
    this.history.forEach((element) => {
      createStdout(element.message)
    })
  },
  methods: {
    async sendMessage(message) {
      const response = await this.$freighter.sendMessage(
        'FREIGHTER9EXAMPLE',
        message
      )
      console.log('response', response)
      return response
    }
  }
}
</script>

<style lang="scss">
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #000;
}

.vue-command {
  min-height: 100vh;
  min-width: 100%;
  .term {
  }

  .term-std {
    height: calc(100vh - 42px);
    overflow-y: scroll;
  }
}
</style>
