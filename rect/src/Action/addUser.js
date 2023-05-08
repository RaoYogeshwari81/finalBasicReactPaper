export const addUser = (user) => {
    return (dispatch) => {
      // Make an API call to save the user data to the server
      fetch('http://example.com/api/users', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          // Dispatch the ADD_USER action with the new user data
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
  
  
  
  
  