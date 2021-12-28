import client from '@services/http/axios'
import swal from 'sweetalert'

export default {
  async url (newShortener) {
    try {
      const response = await client.post('/shortener', newShortener)

      document.getElementById('shortness').value = response.data.shortener

      await swal({
        title: 'Sucesso',
        text: `${response.data.message}`,
        icon: 'success'
      })
    } catch (error) {
      const message = error.response.data.message
      await swal({
        title: 'Oops!',
        text: `${message}`,
        icon: 'error'
      })
    }
  }
}
