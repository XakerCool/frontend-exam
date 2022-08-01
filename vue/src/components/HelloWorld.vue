<template>
  <div class="container">
    <div class="user" v-for="(user, index) in userList" :key="index"
      v-on:click="setActive"
    >
      <span style="pointer-events: none" class="user-description">{{index + 1}}) My name is {{user.name}} and surname {{user.surname}} I work at company called '{{user.company}}'</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      userList: [
        {
          name: "Danial",
          surname: "Markovich",
          age: "15",
          company: "School"
        },
        {
          name: "Luffy",
          surname: "Monkey",
          age: "17",
          company: "Pirate Ship"
        },
        {
          name: "Zoro",
          surname: "Rareno",
          age: "18",
          company: "Luffy's nakama"
        },
        {
          name: "Sam",
          surname: "Serious",
          age: "55",
          company: "Monsters killer"
        },
        {
          name: "Doom",
          surname: "Guy",
          age: "35",
          company: "Demons killer"
        },
        {
          name: "Imperator",
          surname: "Great",
          age: "1000",
          company: "Imperium"
        }
      ]
    }
  },
  methods: {
    setActive(e) {
      let item = e.target;
      item.classList.toggle('active');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk&display=swap');
  .user-description {
    font-size: 25px;
    font-family: 'Space Grotesk', sans-serif;
  }
  .user {
    margin: 5px 0;
    padding: 2px 0;
    border: 2px solid black;
    text-align: center;
  }
  .active {
    background-color: aquamarine;
  }
</style>