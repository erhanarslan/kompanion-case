
import { RegisterData } from '../../context/registerContextData';

export const postData = async (data: RegisterData) => {
  const rawResponse = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: 'POST',
    body: JSON.stringify({
      ...data
    })
  });
  return await rawResponse.json();
};
