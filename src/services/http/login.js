import client from '@services/http/axios'
import swal from 'sweetalert'

export default {
  LoginUser: async function (user) {
    const response = await client.post('/user_login', user)
    const { token } = response.data

    window.localStorage.setItem('jwt', token)
    window.localStorage.setItem('name', response.data.user.name)
    window.localStorage.setItem('birth', response.data.user.birth)
    window.localStorage.setItem('email', response.data.user.email)

    if (token) {
      await swal({
        title: 'Sucesso!',
        text: `${response.data.message}`,
        icon: 'success'
      })
    } else {
      await swal({
        title: 'Oops!',
        text: 'Alguma coisa deu errado aqui!',
        icon: 'error'
      })
      await this.$router.push('/')
    }
  }
}
