<template>
    <div class="container-fluid">
        <div class="row">
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                <div class="collapse navbar-collapse">
                    <div class="navbar-nav">
                        <router-link to="/" class="nav-item nav-link text-white">Products List</router-link>
                        <router-link to="/create-product" class="nav-item nav-link text-white">Create Product</router-link>
                        <router-link to="/users" class="nav-item nav-link text-white">Users List</router-link>
                        <router-link to="/create-user" class="nav-item nav-link text-white">Create User</router-link>
                    
                    </div>
                </div>
            </nav>
        </div>
    </div>
    <div class="container py-4">
        <router-view> </router-view>
    </div>
</template>
 
<script>
export default {}
</script>