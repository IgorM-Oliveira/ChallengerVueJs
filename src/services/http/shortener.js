import client from '@services/http/axios'
import swal from 'sweetalert'

export default {
  async url (newShortener) {
    try {
      const response = await client.post('/shortener', newShortener)
      await swal({
        title: 'Sucesso',
        text: `${response.data.message}`,
        icon: 'success'
      })
    } catch (error) {
      await swal({
        title: 'Oops!',
        text: 'Alguma coisa deu errado aqui!',
        icon: 'error'
      })
    }
  }
}
