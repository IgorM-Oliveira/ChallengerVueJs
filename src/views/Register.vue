<template>
  <div>
    <b-row class='vh-100 vw-100 row-login'>
      <b-col
        sm='5'
        class='d-flex justify-content-center align-items-center left-login'
      >
        <div class='col-8'>
          <h2 class='text-center mb-5 title-login'>
            Registro
          </h2>

          <b-form
            @submit='onSubmit'
            @reset='onReset'
          >
            <b-form-group
              label='Nome'
              label-for='name'
            >
              <b-form-input
                id='name'
                v-model='form.name'
                type='name'
                placeholder='Digite seu Nome'
                autocomplete='off'
              />
            </b-form-group>

            <div class='d-flex'>
              <b-form-group
                label='Telefone'
                label-for='tel'
                class='mr-1'
                style='width: 100%'
              >
                <b-form-input
                  id='tel'
                  v-model='form.phone'
                  type='phone'
                  placeholder='Digite seu Número'
                  autocomplete='off'
                />
              </b-form-group>
              <b-form-group
                label='Nascimento'
                label-for='date'
                class='ml-1'
                style='width: 100%'
              >
                <b-form-input
                  id='date'
                  v-model='form.birth'
                  type='date'
                  placeholder='DD-MM-YYYY'
                />
              </b-form-group>
            </div>

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
              </label>
              <b-form-input
                id='password'
                v-model='form.password'
                type='password'
                placeholder='Digite sua Senha'
              />
            </b-form-group>

            <b-form-group label-for='confirm'>
              <label class='d-flex justify-content-between'>
                Confirmar Senha
              </label>
              <b-form-input
                id='confirm'
                v-model='form.confirm'
                type='password'
                placeholder='Digite sua Confirmar Senha'
              />
            </b-form-group>

            <div class='d-flex'>
              <b-button
                type='submit'
                variant='primary'
                block
                class='mr-2'
              >
                Salvar
              </b-button>

              <b-button
                type='reset'
                variant='secondary'
              >
                Limpar
              </b-button>
            </div>
            <hr>
            <b-button
              type='button'
              variant='outline-secondary'
              block
              href='/login'
            >
              Voltar
            </b-button>
          </b-form>
        </div>
      </b-col>
      <b-col
        sm='7'
        class='d-flex justify-content-center align-items-center'
      >
        <img
          src='../assets/register.svg'
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
        name: '',
        phone: '',
        birth: '',
        email: '',
        password: '',
        confirm: ''
      },
      showDismissibleAlert: false
    }
  },
  methods: {
    onSubmit (event) {
      event.preventDefault()
      this.showDismissibleAlert = true
    },
    onReset (event) {
      event.preventDefault()
      this.form.name = ''
      this.form.phone = ''
      this.form.birth = ''
      this.form.email = ''
      this.form.password = ''
      this.form.confirm = ''
    },
    onContext (ctx) {
      // The date formatted in the locale, or the `label-no-date-selected` string
      this.formatted = ctx.selectedFormatted
      // The following will be an empty string until a valid date is entered
      this.selected = ctx.selectedYMD
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
