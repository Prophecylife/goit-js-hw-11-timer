import refs from './refs.js'

const { daysC, hoursC,  minsC, secondsC} = refs;


class CountdownTimer {
    constructor(targetDate) {
        this.targetDate = targetDate;
        this.intID = null;
        this.time = 0;
    }
    start() {
        this.intID = setInterval(() => {
        let currentTime = Date.now()
        this.time = this.targetDate - currentTime;
        const days = this.pad(Math.floor(this.time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((this.time % (1000 * 60)) / 1000));
        daysC.textContent = days;
        hoursC.textContent = hours;
        minsC.textContent = mins;
        secondsC.textContent = secs;
        }, 1000)
    };
    stop() {
        clearInterval(this.intID)
    };
    pad(value) {
        return String(value).padStart(2, '0')
    }
}



const myTimer = new CountdownTimer(new Date('Sep 01, 2022'))
// console.log(myTimer);
myTimer.start()
// myTimer.stop()
