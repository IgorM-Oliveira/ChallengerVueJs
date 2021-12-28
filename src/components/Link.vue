<template>
  <div>
    <b-form
      @submit.stop.prevent='onSubmit'
    >
      <b-form-input
        id='url'
        v-model='form.url'
        type='url'
        placeholder='https://example.com'
        pattern='https://.*'
        autocomplete='off'
      />

      <hr>
      <b-button
        type='submit'
        variant='primary'
        block
        style='color: white'
      >
        Reduzir
      </b-button>
    </b-form>
  </div>
</template>

<script>
import shortener from '../services/http/shortener'
import swal from 'sweetalert'

export default {
  data () {
    return {
      form: {
        url: null
      }
    }
  },

  methods: {
    async onSubmit () {
      try {
        await shortener.url(this.form)
      } catch (error) {
        await swal({
          title: 'Senha Incorreta!',
          text: 'Digite a senha cadastrada!',
          icon: 'error'
        })
      }
    }
  }
}
</script>
