import { render, screen } from '@testing-library/react';
import App from './App';

describe('verification',() => {
test('Textbox verification',()=>{
  render(<App/>);
  const textbox1 = screen.getByTestId("email_1");
  const textbox2= screen.getByTestId("pass_1");
  const loginbutton = screen.getByTestId("loginbutton")

  expect (textbox1).toBeInTheDocument();
  expect (textbox2).toBeInTheDocument();
  expect (loginbutton).toBeInTheDocument();
  expect (loginbutton).toHaveTextContent("Login");
})
it ('Heading verification',() => {
 render(<App/>)
 const label = screen.getByTestId("logg");
 
 expect (label).toBeInTheDocument();
 expect (label).toHaveTextContent("Login"); 
})
test ('placeholder verification',() => {
  render(<App/>)
  const label1 = screen.getByPlaceholderText("Email");
  const label2 = screen.getByPlaceholderText("Password");

  expect (label1).toBeInTheDocument();
  expect (label2).toBeInTheDocument();
})
// test ('authentication verification',() => {
//   render(<App/>)
//   const p = screen.getByTestId("password_error");

//   expect (p).toBeInTheDocument();
//   expect (p).toHaveTextContent("Password cannot be empty");
// })

});
