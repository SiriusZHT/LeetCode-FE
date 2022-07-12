class Event {
  constructor() {
    this.events = {};
  }
  on(event, fn) {
    if(this.events[event] !== undefined) {
        this.events[event].push(fn);
    } else {
        this.events[event] = [fn];
    }
  }
  emit(event, ...args) {
    if(this.events[event] !== undefined) {
        for(let fn of this.events[event]) {
            fn(...args);
        }
    } else {
        console.error('No fn');
    }
  }
  off(event, fn) {
    let index = this.events[event].indexOf(fn);
    if(index !== -1) {
        this.events[event].splice(index, 1);
    } 
    if(!this.events[event].length) {
        console.error('No event');
    }
  }
  once(event, fn) {
    const foo = (...args) => {
        fn(...args);
        this.off(event, foo);
    }
    this.on(event, foo);
  }
}

const event = new Event();
const fn = (...args) => console.log(...args);
event.once('event1', fn);
event.emit('event1', 'event1');
event.emit('event1', 'event1');
event.off('event1');
event.emit('event1', 'event1');
