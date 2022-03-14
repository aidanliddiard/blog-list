import { checkError, client } from './client';

export async function fetchCats() {
  const resp = await client.from('cats').select('*');
  return checkError(resp);
}
