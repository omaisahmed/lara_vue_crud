<template>
  <div>
    <h2 class="text-center">Users</h2>
    <table class="table table-dark">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>
            <div class="btn-group" role="group">
              <router-link :to="{ name: 'edit-user', params: { id: user.id } }" class="btn btn-success">Edit</router-link>
              <button class="btn btn-danger" @click="deleteUser(user.id)">Delete</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
  
<script>
import axios from 'axios';

export default {
  name: 'UserList',
  data() {
    return {
      users: []
    }
  },
  mounted() {
    axios.get('/api/users')
      .then(response => {
        this.users = response.data
      })
      .catch(error => {
        console.log(error)
      });
  },
  methods: {
    deleteUser(id) {
      if (confirm('Are you sure you want to delete this user?')) {
        axios.delete(`/api/users/${id}`)
          .then(response => {
            console.log(response)
            // const index = this.users.findIndex(user => user.id === id)
            // if (index !== -1) {
            //   this.users.splice(index, 1)
            // }
            this.users = this.users.filter(user => user.id !== id)
          })
          .catch(error => {
            console.log(error)
          });
      }
    }
  }
}
</script>
  