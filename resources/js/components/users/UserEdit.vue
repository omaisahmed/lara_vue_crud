<template>
  <div>
    <h2 class="text-center">Edit User</h2>
    <div class="row justify-content-center">
      <div class="col-md-6"></div>
      <form @submit.prevent="updateUser">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" name="name" class="form-control" v-model="user.name" required>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" name="email" class="form-control" v-model="user.email" required>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" name="password" class="form-control" v-model="user.password" required>
        </div>
        <button type="submit" class="btn btn-primary my-3">Update User</button>
      </form>
    </div>
  </div>
</template>
  
<script>
import axios from 'axios';

export default {
  name: 'UserEdit',
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  mounted() {
    axios.get(`/api/users/${this.$route.params.id}`)
      .then(response => {
        this.user = response.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    updateUser() {
      axios.put(`/api/users/${this.$route.params.id}`, this.user)
        .then(response => {
          console.log(response)
          this.$router.push({ name: 'users' })
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
  