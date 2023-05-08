
export const addUser = (user) => {
  return (dispatch) => {
    fetch('http://example.com/api/users', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: 'ADD_USER',
          payload: data,
        });
      })
      .catch((error) => {
        console.error('Error adding user: ', error);
      });
  };
};