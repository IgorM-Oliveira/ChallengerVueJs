<template>
  <div id='app'>
    <b-navbar
      v-if='notIsLoginPage'
      toggleable='lg'
      type='dark'
      variant='dark'
    >
      <b-navbar-brand
        class='ms-3'
        @click='home'
      >
        Inicio
      </b-navbar-brand>

      <b-navbar-toggle target='nav-collapse' />

      <b-collapse
        id='nav-collapse'
        is-nav
        style='display: flex; justify-content: space-between'
      >
        <b-navbar-nav>
          <b-nav-item
            v-if='notIsToken'
            @click='list'
          >
            Listar
          </b-nav-item>
          <b-nav-item @click='ranking'>
            Ranking
          </b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav>
          <b-nav-item-dropdown right>
            <template #button-content>
              <em>{{ name() || 'Anônimo' }}</em>
            </template>
            <b-dropdown-item @click='logout'>
              Logout
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    notIsLoginPage () {
      return this.$route.name !== 'Login' && this.$route.name !== 'Register'
    },

    notIsToken () {
      location.reload()
      return !(window.localStorage.getItem('email') === 'anonymity@gmail.com') || false
    }
  },
  methods: {
    logout () {
      localStorage.removeItem('jwt')
      localStorage.removeItem('name')
      localStorage.removeItem('email')
      localStorage.removeItem('birth')

      this.$router.push('/')
    },

    list () {
      this.$router.push('/list')
    },

    home () {
      this.$router.push('/home')
    },

    ranking () {
      this.$router.push('/ranking')
    },

    name () {
      return localStorage.getItem('name')
    }
  }
}
</script>
