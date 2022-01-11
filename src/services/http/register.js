import client from '@services/http/axios'
import swal from 'sweetalert'

export default {
  Register: async function (newUser) {
    try {
      const response = await client.post('/register', newUser)
      const { token } = response.data

      window.localStorage.setItem('jwt', token)
      window.localStorage.setItem('name', response.data.user.name)
      window.localStorage.setItem('birth', response.data.user.birth)
      window.localStorage.setItem('email', response.data.user.email)

      if (token) {
        await swal({
          title: 'Excelente!',
          text: 'Usuário(a) cadastrado com sucesso!',
          icon: 'success'
        })
      }
    } catch (error) {
      await this.$router.push('/')
    }
  }
}
