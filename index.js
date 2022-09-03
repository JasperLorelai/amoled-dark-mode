const {Plugin} = require("powercord/entities");

module.exports = class AMOLEDDarkModePlugin extends Plugin {

    startPlugin() {
        document.body.classList.add("theme-amoled");
    }

}
