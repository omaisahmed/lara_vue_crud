<template>
    <div>
      <h1>Users</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>
              <router-link :to="{ name: 'edit', params: { id: user.id }}">Edit</router-link>
              <button @click="deleteUser(user.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    name: 'UserList',
    data () {
      return {
        users: []
      }
    },
    mounted () {
      axios.get('/api/users')
        .then(response => {
          this.users = response.data
        })
        .catch(error => {
          console.log(error)
        })
    },
    methods: {
      deleteUser (id) {
        if (confirm('Are you sure you want to delete this user?')) {
          axios.delete(`/api/users/${id}`)
            .then(response => {
              console.log(response)
              this.users = this.users.filter(user => user.id !== id)
            })
            .catch(error => {
              console.log(error)
            })
        }
      }
    }
  }
  </script>
  