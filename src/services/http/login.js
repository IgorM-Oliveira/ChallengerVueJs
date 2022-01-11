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
      await this.$router.push('/')
    }
  },
  Anonymous: async function () {
    try {
      const response = await client.post('/register_anonymous')

      if (response.data._id) {
        try {
          const newResponse = await client.post('/authenticate', {
            email: response.data.email,
            password: 'anonymous'
          })

          console.log(newResponse)

          const { token } = newResponse.data

          window.localStorage.setItem('jwt', token)
          window.localStorage.setItem('name', newResponse.data.user.name)
          window.localStorage.setItem('birth', newResponse.data.user.birth)
          window.localStorage.setItem('email', newResponse.data.user.email)

          await swal({
            title: 'Sucesso',
            text: 'Login anônimo, bem sucedido!',
            icon: 'success'
          })
        } catch (err) {
          return await swal({
            title: 'Oops!',
            text: 'Login anônimo, mau sucedido!',
            icon: 'error'
          })
        }
      }

      const { token } = response.data

      if (token) {
        await swal({
          title: 'Excelente!',
          text: 'Logado como anônimo!',
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
