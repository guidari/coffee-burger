import { AuthenticationModel } from "../../domain";
import { MakeStorageAdapter } from "../factories/cache/storeAdapterFactory";

export class CurrentAccountAdapter {
  get() {
    return MakeStorageAdapter().get("account") as AuthenticationModel;
  }

  set(account: AuthenticationModel) {
    MakeStorageAdapter().set("account", account);
  }

  delete() {
    MakeStorageAdapter().delete("account");
  }
}
