<template>
  <b-col class='d-flex justify-content-center align-items-center'>
    <div
      style='text-align: center'
      class='col-5 mt-5'
    >
      <img
        alt='Vue logo'
        src='../assets/link.svg'
        width='500px'
      >
      <hr>
      <Link />
    </div>
  </b-col>
</template>

<script>
// @ is an alias to /src
import Link from '@/components/Link.vue'

export default {
  name: 'Home',
  components: {
    Link
  }
}
</script>
