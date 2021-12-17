<template>
  <div>
    <b-form>
      <b-form-input
        id='email'
        type='email'
        placeholder='Digite o Link a ser reduzido'
        autocomplete='off'
      />

      <hr>
      <b-button
        type='button'
        variant='primary'
        block
        href='/'
        style='color: white'
      >
        Entrar
      </b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'Link',
  props: {
    msg: String
  }
}
</script>
