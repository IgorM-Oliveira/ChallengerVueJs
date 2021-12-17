<template>
  <div>
    <b-row class='vh-100 vw-100 row-login'>
      <b-col
        sm='5'
        class='d-flex justify-content-center align-items-center left-login'
      >
        <div class='col-8'>
          <h2 class='text-center mb-5 title-login'>
            Login
          </h2>

          <b-form>
            <b-form-group
              label='E-mail'
              label-for='email'
            >
              <b-form-input
                id='email'
                v-model='form.email'
                type='email'
                placeholder='Digite seu Email'
                autocomplete='off'
              />
            </b-form-group>

            <b-form-group label-for='password'>
              <label class='d-flex justify-content-between'>
                Senha
                <small><a href='#'>Esqueceu a Senha</a></small>
              </label>
              <b-form-input
                id='password'
                v-model='form.password'
                type='password'
                placeholder='Digite sua Senha'
              />
            </b-form-group>

            <b-button
              type='button'
              variant='primary'
              block
            >
              Entrar
            </b-button>
            <hr>
            <b-button
              type='button'
              variant='outline-secondary'
              block
            >
              Não tenho conta
            </b-button>
          </b-form>
        </div>
      </b-col>
      <b-col
        sm='7'
        class='d-flex justify-content-center align-items-center'
      >
        <img
          src='../assets/login_one.svg'
          alt='login'
          class='img-login'
        >
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  }
}
</script>

<style>

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}

.row-login {
  margin-left: 0;
}

.left-login {
  background-color: #f2f2f2;
}

.title-login {
  font-weight: bold;
}

.img-login {
  width: 600px;
  height: 600px;
}

</style>
