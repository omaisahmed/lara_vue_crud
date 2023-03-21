<template>
    <div>
      <h1>Edit User</h1>
      <form @submit.prevent="updateUser">
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
        <button type="submit">Update User</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    name: 'UserEdit',
    data () {
      return {
        user: {
          name: '',
          email: '',
          password: ''
        }
      }
    },
    mounted () {
      axios.get(`/api/users/${this.$route.params.id}`)
        .then(response => {
          this.user = response.data
        })
        .catch(error => {
          console.log(error)
        })
    },
    methods: {
      updateUser () {
        axios.put(`/api/users/${this.$route.params.id}`, this.user)
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
  