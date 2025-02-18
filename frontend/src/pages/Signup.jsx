import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";

export function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className='flex justify-center text-center bg-blue-100'>
      <div className='bg-white my-20 px-10 py-2.5'>
        <Heading label={"Sign up"} />
        <SubHeading label='Enter your information to create an account' />
        <InputBox
          onChange={(e) => setFirstName(e.target.value)}
          label='First Name'
          placeholder='John'
        />
        <InputBox
          label='Last Name'
          placeholder='Doe'
          onChange={(e) => setLastName(e.target.value)}
        />
        <InputBox
          label='Email'
          placeholder='john@gmail.com'
          onChange={(e) => setUserName(e.target.value)}
        />
        <InputBox
          label='Password'
          placeholder='******'
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          onClick={async () => {
            const response = await axios.post(
              "http://localhost:3000/api/v1/user/signup",
              {
                username,
                password,
                firstName,
                lastName
              }
            );
            localStorage.setItem("token", response.data.token);
          }}
          label='Sign up'
        />
        <BottomWarning
          label='Already have an account?'
          buttonText='Sign in'
          to='/signin'
        />
      </div>
    </div>
  );
}

/*import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";

export const Signup = () => {
  return (
    <div className='bg-slate-300 flex justify-center'>
      <div className='rounded-lg bg-white w-80 text-center p-2 px-4'>
        <Heading label={"Sign up"} />
        <SubHeading label={"Enter your infromation to create an account"} />
        <InputBox placeholder='John' label={"First Name"} />
        <InputBox placeholder='Doe' label={"Last Name"} />
        <InputBox placeholder='harkirat@gmail.com' label={"Email"} />
        <InputBox placeholder='123456' label={"Password"} />
        <div className='pt-4'>
          <Button label={"Sign up"} />
        </div>
        <BottomWarning
          label={"Already have an account?"}
          buttonText={"Sign in"}
          to={"/signin"}
        />
      </div>
    </div>
  );
};*/
