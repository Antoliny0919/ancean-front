export default class LocalStorage {
  constructor() {}

  static setItem(key, value) {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, value);
    }
  }

  static getItem(key) {
    if (typeof window !== 'undefined') {
      localStorage.getItem(key);
    }
  }

  static removeItem(key) {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(key);
    }
  }
}
