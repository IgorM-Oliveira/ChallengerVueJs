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
              Registro
            </h2>

            <b-form
              @submit.stop.prevent='handleSubmit(onSubmit)'
              @reset='onReset'
            >
              <validation-provider
                v-slot='validationContext'
                name='Nome'
                :rules='{ required: true, min: 3 }'
              >
                <b-form-group
                  label='Nome'
                  label-for='name'
                >
                  <b-form-input
                    id='name'
                    v-model='form.name'
                    :state='getValidationState(validationContext)'
                    placeholder='Digite seu Nome'
                    autocomplete='off'
                    :maxlength='100'
                  />
                  <b-form-invalid-feedback id='input-1-live-feedback'>
                    O campo Nome é obrigatório
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>

              <div class='d-flex'>
                <b-form-group
                  label='Telefone'
                  label-for='tel'
                  class='me-1'
                  style='width: 100%'
                >
                  <b-form-input
                    id='tel'
                    v-model='form.phone'
                    type='tel'
                    placeholder='Digite seu Número'
                    autocomplete='off'
                    :maxlength='12'
                  />
                </b-form-group>
                <b-form-group
                  label='Nascimento'
                  label-for='date'
                  class='mb-1'
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
                    placeholder='Digite seu Email'
                    autocomplete='off'
                    :maxlength='50'
                  />
                  <b-form-invalid-feedback id='input-1-live-feedback'>
                    O campo E-mail é obrigatório
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>

              <validation-provider
                v-slot='validationContext'
                name='Senha'
                :rules='{ required: true, min: 3 }'
              >
                <b-form-group label-for='password'>
                  <label class='d-flex justify-content-between'>
                    Senha
                  </label>
                  <b-form-input
                    id='password'
                    v-model='form.password'
                    :state='getValidationState(validationContext)'
                    type='password'
                    placeholder='Digite sua Senha'
                    :maxlength='10'
                  />
                  <b-form-invalid-feedback id='input-1-live-feedback'>
                    O campo Senha é obrigatório
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>

              <validation-provider
                v-slot='validationContext'
                name='Confirmar Senha'
                :rules='{ required: true, min: 3 }'
              >
                <b-form-group label-for='confirm'>
                  <label class='d-flex justify-content-between'>
                    Confirmar Senha
                  </label>
                  <b-form-input
                    id='confirm'
                    v-model='form.confirm'
                    :state='getValidationState(validationContext)'
                    type='password'
                    placeholder='Digite sua Confirmar Senha'
                    :maxlength='10'
                  />
                  <b-form-invalid-feedback id='input-1-live-feedback'>
                    O campo Confirmar Senha é obrigatório
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
                  Salvar
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
                variant='outline-secondary'
                block
                style='width: 100%'
                href='/'
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
    </validation-observer>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import RegisterService from '../services/http/register'
import swal from 'sweetalert'

export default {
  setup () {
    return { v$: useVuelidate() }
  },
  data () {
    return {
      form: {
        name: null,
        phone: null,
        birth: null,
        email: null,
        password: null,
        confirm: null
      },
      showDismissibleAlert: false,
      showConfirmAlert: false,
      isSubmitted: false
    }
  },

  validations () {
    return {
      name: { required },
      email: { required },
      password: { required },
      confirm: { required }
    }
  },

  methods: {
    getValidationState ({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null
    },
    async onSubmit () {
      try {
        if (this.form.confirm === this.form.password) {
          await RegisterService.Register(this.form)
          await this.$router.push('/home')
        } else {
          await swal({
            title: 'Oops!',
            text: 'Senha e Confirmar Senha não são iguais',
            icon: 'error'
          })
        }
      } catch (error) {
        await swal({
          title: 'Oops! teste',
          text: 'Alguma coisa deu errado aqui!',
          icon: 'error'
        })
      }
    },
    onReset () {
      this.form.name = null
      this.form.phone = null
      this.form.birth = null
      this.form.email = null
      this.form.password = null
      this.form.confirm = null

      this.$nextTick(() => {
        this.$refs.observer.reset()
      })
    },

    format () {
      this.form.phone.substring(0, 100)
      this.form.phone.substring(0, 12)
      this.form.email.substring(0, 50)
      this.form.password.substring(0, 10)
      this.form.confirm.substring(0, 10)
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
