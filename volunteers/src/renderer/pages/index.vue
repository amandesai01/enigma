<template>
  <div>
    <span class="banner">
      <ongoing-tasks-all class="paddingify-small important"/>
      <earnings-card class="paddingify-small"/>
    </span>
  </div>
</template>

<script>
import { remote } from 'electron'
import EarningsCard from '../components/EarningsCard.vue'
import OngoingTasksAll from '../components/OngoingTasksAll.vue'

export default {
  name: 'IndexPage',
  components: {
    EarningsCard,
    OngoingTasksAll
  },
  data () {
    return {
      externalContent: ''
    }
  },
  methods: {
    openURL (url) {
      remote.shell.openExternal(url)
    }
  }
}
</script>

<style>
.paddingify {
    margin: 10%;
}

.paddingify-small {
    margin: 4%;
}
</style>