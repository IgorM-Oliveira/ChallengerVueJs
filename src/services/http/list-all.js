import client from '@services/http/axios'
import swal from 'sweetalert'

export default {
  async listAll () {
    try {
      return await client.get('/shortlist_all')
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
