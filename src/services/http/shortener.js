import client from '@services/http/axios'
import swal from 'sweetalert'

export default {
  url: async function (newShortener) {
    try {
      const response = await client.post('/short_register', newShortener)

      if (response.data.hits >= 1) {
        try {
          const newResponse = await client.put(`/short_update/${response.data._id}`, response.data)

          document.getElementById('shortness').value = newResponse.data.shortener.code

          return await swal({
            title: 'Sucesso',
            text: 'URL atualizada com sucesso!',
            icon: 'success'
          })
        } catch (err) {
          return await swal({
            title: 'Oops!',
            text: 'Atenção! Não foi possivel atualizar!',
            icon: 'error'
          })
        }
      }

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
