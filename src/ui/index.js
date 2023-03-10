const path = require("path");

function loading(window) {
  window.webContents.removeAllListeners("did-finish-load");
  window.hide();
  window.loadFile(path.join(__dirname, "../views/loading.html"));
  window.setSize(800, 300);
  window.center();
  window.show();
}

function index(window, store) {
  window.webContents.removeAllListeners("did-finish-load");
  window.hide();
  store.set("files", []);
  store.set("pacreg", null);
  store.set("convenio", null);
  setTimeout(() => {
    window.loadFile(path.join(__dirname, "../views/index.html"));
    window.setSize(800, 300);
    window.center();
    window.hide();
  }, 300);
}

function logout(mainWindow, trayMenu, store) {
  mainWindow.setSize(800, 500);
  mainWindow.setPosition(50, 50);
  mainWindow.loadFile(path.join(__dirname, "../views/login.html"));
  mainWindow.show();
  var logoutButton = trayMenu.getMenuItemById("logout");
  logoutButton.enabled = false;
  store.set("login", false);
  store.set("token", null);
  store.set("convenio", null);
}

function login(window, trayMenu) {
  setTimeout(() => {
    window.loadFile(path.join(__dirname, "../views/login.html"));
    window.setSize(800, 500);
    window.center();
    window.show();
    logoutButton = trayMenu.getMenuItemById("logout");
    logoutButton.enabled = false;
  }, 300);
}

module.exports = {
  login,
  index,
  loading,
  logout,
};
