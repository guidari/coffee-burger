import Login from "../../../../presentation/pages/Login";
import { MakeCurrentAccountAdapter } from "../../cache";
import { MakeAuthentication } from "../../usecases/AuthenticationFactory.ts";

export default function LoginFactory() {
  return (
    <Login
      authentication={MakeAuthentication()}
      currentAccount={MakeCurrentAccountAdapter()}
    />
  );
}
