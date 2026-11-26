
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

async function fetchData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Помилка завантаження даних із сервера');
    }

    return await response.json();
  } catch (error) {
    if (!navigator.onLine) {
      throw new Error('Відсутнє підключення до Інтернету');
    }

    throw error;
  }
}

export async function getPosts() {
  return fetchData(API_URL);
}

export async function getPost(id) {
  const post = await fetchData(`${API_URL}/${id}`);

  if (!post.id) {
    throw new Error('Публікацію не знайдено');
  }

  return post;
}
