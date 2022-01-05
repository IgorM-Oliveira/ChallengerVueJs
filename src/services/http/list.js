import client from '@services/http/axios'
import swal from 'sweetalert'

export default {
  async listAll () {
    try {
      return await client.get('/shortlist/all')
    } catch (error) {
      const message = error.response.data.message
      await swal({
        title: 'Oops!',
        text: `${message}`,
        icon: 'error'
      })
    }
  },
  async list () {
    try {
      return await client.get('/shortlist/person')
    } catch (error) {
      const message = error.response.data.message
      await swal({
        title: 'Oops!',
        text: `${message}`,
        icon: 'error'
      })
    }
  },
  async delete (id) {
    try {
      await client.delete(`/shortlist/${id}`)
      await swal({
        title: 'Sucesso!',
        text: 'Usuário(a) logado com sucesso!',
        icon: 'success'
      })
      window.location.reload()
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
