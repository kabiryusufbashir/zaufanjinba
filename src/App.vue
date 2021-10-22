<template>
  <router-view/>
</template>

<script>
import AOS from 'aos'

export default {
  name:'App',
  created () {
    AOS.init()
  }
}

</script>