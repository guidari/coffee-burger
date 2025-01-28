import { CurrentAccountAdapter } from "../../adapters/currentAccountAdapter";

export const MakeCurrentAccountAdapter = (): CurrentAccountAdapter =>
  new CurrentAccountAdapter();
