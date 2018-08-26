<template>
  <div>
    <a-input @input="handleInput"/>
    <p>{{ inputValue }} -> lastLetter is {{ inputValueLastLetter }}</p>
    <!-- <a-show :content="inputValue"/> -->
    <p>appName: {{ appName }}, appNameWithVersion : {{ appNameWithVersion }}</p>
    <p>userName : {{ userName }}, firstLetter is : {{ firstLetter }}</p>
  </div>
</template>
<script>
import AInput from '_c/AInput.vue'
import AShow from '_c/AShow.vue'
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'store',
  data () {
    return {
      inputValue: ''
    }
  },
  components: {
    AInput,
    AShow
  },
  computed: {
    // ...mapState({
    //   appName: state => state.appName,
    //   userName: state => state.user.userName
    // })
    ...mapState({
      userName: state => state.user.userName
    }),
    ...mapGetters([
      'appNameWithVersion',
      'firstLetter'
    ]),
    appName () {
      return this.$store.state.appName
    },
    // appNameWithVersion () {
    //   return this.$store.getters.appNameWithVersion
    // },
    // userName () {
    //   return this.$store.state.user.userName
    // },
    inputValueLastLetter () {
      return this.inputValue.substr(-1, 1)
    }
  },
  methods: {
    handleInput (val) {
      this.inputValue = val
    }
  }
}
</script>
