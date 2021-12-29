import client from '@services/http/axios'
import swal from 'sweetalert'

export default {
  Login: async function (user) {
    try {
      const response = await client.post('/authenticate', user)
      const { token } = response.data

      window.localStorage.setItem('jwt', token)
      window.localStorage.setItem('name', response.data.user.name)
      window.localStorage.setItem('birth', response.data.user.birth)
      window.localStorage.setItem('email', response.data.user.email)

      if (token) {
        await swal({
          title: 'Sucesso!',
          text: 'Usuário(a) logado com sucesso!',
          icon: 'success'
        })
      }
    } catch (error) {
      await swal({
        title: 'Oops!',
        text: 'Alguma coisa deu errado aqui!',
        icon: 'error'
      })
      await this.$router.push('/')
    }
  }
}
