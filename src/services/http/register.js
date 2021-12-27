import client from '@services/http/axios'
import swal from 'sweetalert'

export default {
  async registerNewUser (newUser) {
    const response = await client.post('/user_register', newUser)
    const { token } = response.data

    if (token) {
      // eslint-disable-next-line no-undef
      localStorage.setItem('jwt', token)
      await this.$router.push('/')
      await swal({
        title: 'Excelente!',
        text: 'Usuário(a) cadastrado com sucesso!',
        icon: 'success'
      })
    } else {
      await this.$router.push('/register')
      await swal({
        title: 'Oops!',
        text: 'Alguma coisa deu errado aqui!',
        icon: 'error'
      })
    }
  }
}
