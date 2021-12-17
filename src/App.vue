<template>
  <div id='app'>
    <b-navbar
      v-if='notIsLoginPage'
      type='dark'
      variant='dark'
    >
      <b-navbar-nav>
        <b-nav-item href='/'>
          Home
        </b-nav-item>

        <b-nav-item href='/list'>
          Listar
        </b-nav-item>

        <b-nav-item href='/person'>
          User
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    notIsLoginPage () {
      return this.$route.name !== 'Login'
    }
  }
}
</script>
