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
      <hr>

      <b-form-input
        id='shortness'
        type='url'
      />
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
      } catch (err) {
        await swal({
          title: 'Oops!',
          text: 'Alguma coisa deu errado aqui!',
          icon: 'error'
        })
      }
    }
  }
}
</script>
