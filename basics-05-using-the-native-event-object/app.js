const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    outputFullname(){
      if(this.name === ''){
        return '';
      }
      return this.name + '' + "Jabbarov";
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetinput(){
      this.name ='';
    }
  }
});

app.mount('#events');
// hd