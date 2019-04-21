<template>
  <div id="exercise">
    <!-- 1) Fill the <p> below with your Name and Age - using Interpolation -->
    <p>VueJS is pretty cool - {{name}} ({{age}})</p>
    <!-- 2) Output your age, multiplied by 3 -->
    <p>Your age multiplied by 3 : {{age * 3}}</p>
    <!-- 3) Call a function to output a random float between 0 and 1 (Math.random()) -->
    <p>Random number: {{randomize()}}</p>
    <!-- 4) Search any image on Google and output it here by binding the "src" attribute -->
    <div>
      <img :src="img" style="width:100px;height:100px">
    </div>
    <!-- 5) Pre-Populate this input with your name (set the "value" attribute) -->
    <div>
      <input type="text" :value="name">
    </div>

    <!--EVENT EXERCISE-->
    <div>
      <button @click="alertMe">Show alert</button>
    </div>
    <div>
      <input type="text" @keydown.enter="value = $event.target.value">
      <p>{{value}}</p>
    </div>

    <!--REACTIVE PROPERTIES-->
    <!-- 1) Show a "result" of 'not there yet' as long as "value" is not equal to 37 - you can change "value" with the buttons. Print 'done' once you did it -->
    <div>
      <p>Current Value: {{ value2 }}</p>
      <button @click="value2 += 5">Add 5</button>
      <button @click="value2 += 1">Add 1</button>
      <p>{{ result }}</p>
    </div>
    <!-- 2) Watch for changes in the "result" and reset the "value" after 5 seconds (hint: setTimeout(..., 5000) -->
    <div>
      <input type="text">
      <p>{{ value2 }}</p>
    </div>
  </div>


</template>

<script>
  export default {
    data() {
      return {
        name: 'Dinh Thi Hai Yen',
        age: 21,
        img: 'https://vuejs.org/images/logo.png',
        value: '',
        value2: 0,
      }
    },
    methods: {
      randomize() {
        return Math.random();
      },
      alertMe() {
        alert('alert me');
      }
    },
    computed: {
      result() {
        return this.value2 >= 37 ? 'Done' : 'not there yet';
      }
    },
    watch: {
      result() {

      }
    }
  }
</script>
