"use strict";

class ParkingMeter {
  #table;
  constructor() {
    this.#table = {
      "30min": 1,
      "60min": 1.75,
      "120min": 3,
    };
  }
  getUserValue() {
    return parseFloat(document.getElementById("user-entry").value);
  }
  restartUserEntry() {
    return (document.getElementById("user-entry").value = "");
  }
  calculateTime() {
    const userValue = this.getUserValue();
    if (userValue < 1) {
      return this.showInfo("Invalid amount!");
    } else {
      if (userValue >= this.#table["30min"] && userValue < this.#table["60min"]) {
        const timeRemaining = "30min";
        const change = this.calculateChange(this.#table["30min"], userValue);
        this.restartUserEntry();
        return this.showInfo(`You have ${timeRemaining} left and your change is U$ ${change}`);
      } else if (userValue >= this.#table["60min"] && userValue < this.#table["120min"]) {
        const timeRemaining = "60min";
        const change = this.calculateChange(this.#table["60min"], userValue);
        this.restartUserEntry();
        return this.showInfo(`You have ${timeRemaining} left and your change is U$ ${change}`);
      } else if (userValue >= this.#table["120min"]) {
        const timeRemaining = "120min";
        const change = this.calculateChange(this.#table["120min"], userValue);
        this.restartUserEntry();
        return this.showInfo(`You have ${timeRemaining} left and your change is U$ ${change}`);
      } else {
        return this.showInfo(`Internal error,try again!`);
      }
    }
  }
  calculateChange(amount, userAmount) {
    return (userAmount - amount).toFixed(2).replace(".", ",");
  }

  showInfo(info) {
    return (document.getElementById("result").textContent = info);
  }
}

const parkingMeter = new ParkingMeter();
const currentYear = new Date().getFullYear();
document.getElementById("footer").textContent = `© ${currentYear} Fabiano`;
