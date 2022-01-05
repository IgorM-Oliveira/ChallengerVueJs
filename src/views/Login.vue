<template>
  <div>
    <validation-observer
      ref='observer'
      v-slot='{ handleSubmit }'
    >
      <b-row class='vh-100 vw-100 row-login'>
        <b-col
          sm='5'
          class='d-flex justify-content-center align-items-center left-login'
        >
          <div class='col-8'>
            <h2 class='text-center mb-5 title-login'>
              Login
            </h2>

            <b-form
              @submit.stop.prevent='handleSubmit(onSubmit)'
              @reset='onReset'
            >
              <validation-provider
                v-slot='validationContext'
                name='E-mail'
                :rules='{ required: true, min: 3 }'
              >
                <b-form-group
                  label='E-mail'
                  label-for='email'
                >
                  <b-form-input
                    id='email'
                    v-model='form.email'
                    :state='getValidationState(validationContext)'
                    type='email'
                    placeholder='Digite seu Email'
                    autocomplete='off'
                  />
                  <b-form-invalid-feedback id='input-1-live-feedback'>
                    O campo E-mail é obrigatório
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>

              <validation-provider
                v-slot='validationContext'
                name='Senha'
                :rules='{ required: true }'
              >
                <b-form-group label-for='password'>
                  <label class='d-flex justify-content-between'>
                    Senha
                    <small><a href='#'>Esqueceu a Senha</a></small>
                  </label>
                  <b-form-input
                    id='password'
                    v-model='form.password'
                    :state='getValidationState(validationContext)'
                    type='password'
                    placeholder='Digite sua Senha'
                  />
                  <b-form-invalid-feedback id='input-1-live-feedback'>
                    O campo Senha é obrigatório
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>

              <div class='d-flex'>
                <b-button
                  type='submit'
                  variant='primary'
                  block
                  class='my-2 mt-3'
                >
                  Entrar
                </b-button>

                <b-button
                  type='reset'
                  variant='secondary'
                  class='my-2 ms-2 mt-3'
                >
                  Limpar
                </b-button>
              </div>

              <hr>
              <b-button
                type='button'
                variant='outline-secondary'
                block
                href='/register'
                style='width: 100%'
              >
                Não tenho conta
              </b-button>

<!--              <hr>
              <b-button
                type='button'
                variant='outline-secondary'
                block
                href='/anonymous'
                style='width: 100%'
              >
                Anônimo
              </b-button>-->
            </b-form>
          </div>
        </b-col>
        <b-col
          sm='7'
          class='d-flex justify-content-center align-items-center'
        >
          <img
            src='../assets/login.svg'
            alt='login'
            class='img-login'
          >
        </b-col>
      </b-row>
    </validation-observer>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import LoginService from '../services/http/login'
import swal from 'sweetalert'

export default {
  setup () {
    return { v$: useVuelidate() }
  },
  data () {
    return {
      form: {
        email: null,
        password: null
      },
      showDismissibleAlert: false,
      isSubmitted: false
    }
  },

  validations () {
    return {
      email: { required },
      password: { required }
    }
  },

  methods: {
    getValidationState ({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null
    },
    async onSubmit () {
      try {
        await LoginService.Login(this.form)

        await this.$router.push('/home')
      } catch (error) {
        await swal({
          title: 'Senha Incorreta!',
          text: 'Digite a senha cadastrada!',
          icon: 'error'
        })
      }
    },
    onReset (event) {
      event.preventDefault()
      this.form.email = ''
      this.form.password = ''

      this.$nextTick(() => {
        this.$refs.observer.reset()
      })
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
