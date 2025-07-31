import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Login() {
  return (
   
    <Form>
         <h1>Login Form</h1>
      <Form.Group className="mb-3 w-50" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      
       <Form.Label htmlFor="inputPassword5">Password</Form.Label>
      <Form.Control
      className='w-50'
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
      <Form.Text id="passwordHelpBlock" muted>
        Your password must be 8-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.
      </Form.Text>
      <Form.Group className="mb-3 w-50" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
       <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    
  );
}

export default Login;