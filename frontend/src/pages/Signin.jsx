import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";

export function Signin() {
  return (
    <div className='flex justify-center text-center bg-gray-500'>
      <div className='bg-white my-26 px-6 py-1.5'>
        <Heading label={"Sign in"} />
        <SubHeading label='Enter your credentials to access your account' />
        <InputBox label='Email' />
        <InputBox label='Password' />
        <Button label='Sign in' />
        <BottomWarning
          label='Already have an account?'
          buttonText='Sign Up'
          to='/signup'
        />
      </div>
    </div>
  );
}
