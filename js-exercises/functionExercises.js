class Clock {
  constructor() {
    const date = new Date;

    this.hour = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();

    this.printTime();

    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    console.log(`${this.hour}:${this.minutes}:${this.seconds}`);
  }

  _tick() {
    this.incrementSecond();
    console.log(this);
  }

  incrementSecond() {
    this.seconds += 1;

    if (this.seconds === 60) {
      this.seconds = 0;
      this.incrementMinute();
    }
  }

  incrementMinute() {
    this.minutes += 1;

    if (this.minutes === 60) {
      this.minutes = 0;
      this.incrementHour();
    }
  }

  incrementHour() {
    this.hours += 1;

    if (this.hours === 24) {
      this.hours = 0;
    }
  }
}

const clock1 = new Clock();
