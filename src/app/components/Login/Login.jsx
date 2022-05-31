import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import { useAuth } from "../../../context/auth/store";
import { useNavigate } from "react-router-dom";

const Login = () => { 
  const [username, setUsername] = React.useState(null);
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    auth.signin(username, () => {
      setUsername('');
      navigate('/profile');
    })
  };

  const handleRegister = (event) => {
    event.preventDefault();
    auth.register(username, () => {
      setUsername('');
      navigate('/profile');
    })
  };

  const handleChange = (event) => {
    setUsername(event.currentTarget.value);
  };

  return (
    <div style={{
      backgroundColor: 'darkslategray',
      height: '100vh',
      color: 'whitesmoke'
    }}>
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label >Email address</Form.Label>
            <Form.Control onChange={handleChange} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleLogin}>
            Login
          </Button>
          <Button variant="secondary" type="submit" onClick={handleRegister}>
            Register
          </Button>
        </Form>
      </Container>
    </div>

  );
};

export default Login;
