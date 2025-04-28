const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  computed: {
    fullname() {
      console.log('Running again...');
      if(this.name === ''){
        return '';
      }
      return this.name + '' + "Jabbarov";
    }
  },
  methods: {
    outputFullname(){
      console.log('Running again...');
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
