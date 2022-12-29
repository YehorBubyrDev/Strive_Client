import AuthStore from "./AuthStore";

export default class RootStore {
  authStore: AuthStore;
  // sizeSwitcherStore: ReturnType<typeof sizeSwitcherStoreFactory>;

  constructor() {
    this.authStore = new AuthStore(this);
  }
}