<template>
  <div>
    <h3 class="text-center">Create User</h3>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <form @submit.prevent="createUser">
          <div class="form-group">
            <label>Name</label>
            <input type="text" name="name" class="form-control" v-model="user.name" required>
          </div>
          <div class="form-group">
            <label>Email</label>
            <input type="email" name="email" class="form-control" v-model="user.email" required>
          </div>
          <div class="form-group">
            <label>Password</label>
            <input type="password" name="password" class="form-control" v-model="user.password" required>
          </div>
          <button type="submit" class="btn btn-primary my-3">Create</button>
        </form>
      </div>
    </div>
  </div>
</template>

  
<script>
import axios from 'axios'

export default {
  name: 'UserCreate',
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    createUser() {
      axios.post('/api/users', this.user)
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
  