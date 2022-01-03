<template>
  <b-col class='d-flex justify-content-center align-items-center'>
    <div class='col-10 mt-5'>
      <b-table
        striped
        hover
        :fields='fields'
        :items='items'
      >
        <template #cell(actions)='row'>
          <b-button
            size='sm'
            class='mr-1'
            @click='remove(row.item)'
          >
            Remover
          </b-button>
        </template>
      </b-table>
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
        },
        {
          key: 'actions',
          label: 'Ação  '
        }
      ]
    }
  },
  methods: {
    async items () {
      const array = await shortener.list()
      console.log(array)
      return array.data.links
    },
    async remove (item) {
      await shortener.delete(item._id)
    }
  }
}
</script>
