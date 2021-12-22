<template>
  <b-col class='d-flex justify-content-center align-items-center'>
    <div class='col-7 mt-5'>
      <b-table
        :fields='fields'
        :items='items'
      />
    </div>
  </b-col>
</template>

<script>
export default {
  data () {
    return {
      fields: [
        {
          key: 'first',
          label: 'Nome'
        },
        {
          key: 'age',
          label: 'Idade'
        },
        {
          key: 'sex',
          label: 'Gênero'
        },
        {
          // A virtual column with custom formatter
          key: 'birthYear',
          label: 'Nascimento',
          formatter: (value, key, item) => {
            return new Date().getFullYear() - item.age
          }
        }
      ],
      items: [
        { first: 'Igor', sex: 'Masculino', age: 20 },
        { first: 'Helton', sex: 'Masculino', age: 25 },
        { first: 'Ednei', sex: 'Masculino', age: 35 }
      ]
    }
  },
  methods: {
    fullName (value) {
      return `${ value.first } ${ value.last }`
    }
  }
}
</script>
