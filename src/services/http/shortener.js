import client from '@services/http/axios'
import swal from 'sweetalert'

export default {
  url: async function (newShortener) {
    console.log(newShortener)
    try {
      const response = await client.post('/short_register', newShortener)

      document.getElementById('shortness').value = response.data.shortener.code

      await swal({
        title: 'Sucesso',
        text: 'URL encurtada com sucesso!',
        icon: 'success'
      })
    } catch (error) {
      await swal({
        title: 'Oops!',
        text: 'Atenção! Este URL já possui registro!',
        icon: 'error'
      })
    }
  }
}
