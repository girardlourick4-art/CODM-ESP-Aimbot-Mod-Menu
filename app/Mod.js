/**
 * Mod - module pour le projet CODM-ESP-Aimbot-Mod-Menu
 * Fournit une classe Mod simple pour gérer état et options du mod.
 * Auteur: girardlourick4-art (auto-generated)
 */

class Mod {
  constructor(name = 'Mod', options = {}) {
    this.name = name;
    this.enabled = false;
    this.options = Object.assign({
      esp: false,
      aimbot: false,
      fov: 90,
      smooth: 0.5,
    }, options);
  }

  enable() {
    this.enabled = true;
    // TODO: initialiser hooks ou timers liés au mod
  }

  disable() {
    this.enabled = false;
    // TODO: désactiver hooks ou timers
  }

  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  }

  setOption(key, value) {
    if (key in this.options) {
      this.options[key] = value;
      return true;
    }
    return false;
  }

  getOption(key) {
    return this.options[key];
  }

  toJSON() {
    return {
      name: this.name,
      enabled: this.enabled,
      options: this.options,
    };
  }
}

module.exports = Mod;