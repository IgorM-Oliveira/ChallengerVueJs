<template>
  <div id='app'>
    <b-navbar
      v-if='notIsLoginPage'
      type='dark'
      variant='dark'
    >
      <b-navbar-brand href='/'>
        Inicio
      </b-navbar-brand>

      <b-collapse
        id='nav-collapse'
        is-nav
      >
        <b-navbar-nav>
          <b-nav-item href='/list'>
            Listar
          </b-nav-item>
          <b-nav-item href='/person'>
            Contador
          </b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class='ml-auto'>
          <b-nav-item-dropdown
            text='Perfil'
            right
          >
            <b-dropdown-item href='/login'>
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
    }
  }
}
</script>
