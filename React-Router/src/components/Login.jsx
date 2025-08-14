import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Login() {
  return (
    <Form >
      <Form.Group className="mt-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
       <Form.Group  className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2"> Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary w-100 mt-3">Login</Button> 
    </Form>
  );
}

export default Login;