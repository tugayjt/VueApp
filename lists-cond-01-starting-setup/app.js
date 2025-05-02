const app = Vue.createApp({
  data() {
    return{ 
    enteredGoalValue: '',
     goals: [] 
    };
  },
  methods: {
    addGoal(){
      this.goal.push(this.enteredGoalValue);
    }
  }
});

app.mount('#user-goals');


if (true) {
  // ...
}