import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../Action';

const Form = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      id: new Date().getTime(),
      name,
      gender,
      email,
      mobile,
    };

    dispatch(addUser(newUser));

    setName('');
    setGender('');
    setEmail('');
    setMobile('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="gender">Gender:</label>
      <select
        id="gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        required
      >
        <option value="">-- Select gender --</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label htmlFor="mobile">Mobile:</label>
      <input
        type="tel"
        id="mobile"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        required
      />

      <button type="submit">Add User</button>
    </form>
  );
};

export default Form;