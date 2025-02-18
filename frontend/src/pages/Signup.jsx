import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";

export function Signup() {
  return (
    <div className='flex justify-center text-center bg-blue-100'>
      <div className='bg-white my-20 px-10 py-2.5'>
        <Heading label={"Sign up"} />
        <SubHeading label='Enter your information to create an account' />
        <InputBox label='First Name' />
        <InputBox label='Last Name' />
        <InputBox label='Email' />
        <InputBox label='Password' />
        <Button label='Sign up' />
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
