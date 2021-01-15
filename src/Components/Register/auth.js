class Auth {
  constructor() {
    this.authenticated = false;
  }
  
  home(cb) {
    this.authenticated = true;
    cb();
  }
  login(cb) {
    this.authenticated = true;
    cb();
  }

  logout(cb) {
    this.authenticated = false;
    cb();
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();
