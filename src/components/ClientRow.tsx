import {FaTrash} from 'react-icons/fa'
import { useMutation } from '@apollo/client';
import { DELETE_CLIENT } from '../mutations/clientMutations';
import { GET_CLIENTS } from '../queries/clientQueries';
import { ClientProps } from "./Client.types"

export default function ClientRow({ client } : ClientProps ) {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    // refetchQueries: [{ query: GET_CLIENTS }], // This works but a bit messy

    // Alternative way to refetch queries
    update(cache, { data: { deleteClient } }) {
    const { clients }: any = cache.readQuery({ query: GET_CLIENTS });
      cache.writeQuery({
        query: GET_CLIENTS,
        data: {
          clients: clients.filter((client: any) => client.id !== deleteClient.id),
        },
    });
  },
});

  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button className='btn btn-danger btn-sm' onClick={() => deleteClient()}>
          <FaTrash />
        </button>
      </td>
    </tr>
  )
}