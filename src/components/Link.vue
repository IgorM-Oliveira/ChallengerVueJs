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

export default {
  data () {
    return {
      form: {
        url: null,
        user: window.localStorage.getItem('name')
      }
    }
  },

  methods: {
    async onSubmit () {
      await shortener.url(this.form)
    }
  }
}
</script>
