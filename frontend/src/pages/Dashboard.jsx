import { AppBar } from "../components/AppBar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";

export function Dashboard() {
  return (
    <div>
      <AppBar label='Payments App' username='Hello, User' profile='U' />
      <Balance value='10,000' />
      <Users />
    </div>
  );
}
