<template>
    <div>
      <h1>Create User</h1>
      <form @submit.prevent="createUser">
        <div>
          <label for="name">Name</label>
          <input type="text" name="name" v-model="user.name" required>
        </div>
        <div>
          <label for="email">Email</label>
          <input type="email" name="email" v-model="user.email" required>
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" name="password" v-model="user.password" required>
        </div>
        <button type="submit">Create User</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    name: 'UserCreate',
    data () {
      return {
        user: {
          name: '',
          email: '',
          password: ''
        }
      }
    },
    methods: {
      createUser () {
        axios.post('/api/users', this.user)
          .then(response => {
            console.log(response)
            this.$router.push('/')
          })
          .catch(error => {
            console.log(error)
          })
      }
    }
  }
  </script>
  