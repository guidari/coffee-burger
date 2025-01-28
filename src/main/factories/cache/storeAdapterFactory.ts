import { StorageAdapter } from "../../../infra/cache/storageAdapter";

export const MakeStorageAdapter = (): StorageAdapter => new StorageAdapter();
