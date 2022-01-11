<template>
  <b-col class='d-flex justify-content-center align-items-center'>
    <div class='col-10 mt-5'>
      <b-table
        striped
        hover
        :busy.sync='isBusy'
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
      isBusy: false,
      fields: [
        {
          key: 'ranking',
          label: 'Ranking',
          class: 'text-center'
        },
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
          label: 'Visitas',
          class: 'text-center'
        }
      ]
    }
  },
  methods: {
    async items () {
      const array = await shortener.listAll()
      const newArray = []
      array.data.links.map((item, index) => {
        newArray[index] = {
          ranking: index + 1 + 'º',
          code: item.code,
          url: item.url,
          hits: item.hits
        }
      })
      return newArray
    }
  }
}
</script>
