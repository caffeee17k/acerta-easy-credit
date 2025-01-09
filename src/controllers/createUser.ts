export const createUser = async ({
  document,
  name,
  email,
  password,
}: {
  document: string;
  name: string;
  email: string;
  password: string;
}) => {
  try {
    const response = await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        document,
        name,
        email,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error('Erro ao criar o usuário');
    }

    const result = await response.json();
    console.log('Usuário criado com sucesso:', result);
  } catch (error) {
    console.error('Erro:', error);
  }
};
