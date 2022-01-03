<template>
  <b-col class='d-flex justify-content-center align-items-center'>
    <div class='col-10 mt-5'>
      <b-table
        striped
        hover
        :fields='fields'
        :items='items'
      />
    </div>
  </b-col>
</template>

<script>
import shortener from '../services/http/list'

export default {
  data () {
    return {
      fields: [
        {
          key: 'code',
          label: 'Código'
        },
        {
          key: 'url',
          label: 'Relacionado'
        },
        {
          key: 'hits',
          label: 'Ranking'
        }
      ]
    }
  },
  methods: {
    async items () {
      const array = await shortener.list()
      return array.data.links
    }
  }
}
</script>
