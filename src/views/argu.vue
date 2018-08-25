<template>
  <div>
    {{ name }}
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'lison'
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      console.log(vm)
    })
  },
  beforeRouteUpdate (to, from, next) {
    console.log(to.name, from.name)
  }
}
</script>
