<template>
    <div class="container-fluid">
        <div class="row">
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                <div class="collapse navbar-collapse">
                    <div class="navbar-nav">
                        <router-link to="/" class="nav-item nav-link text-white">Products List</router-link>
                        <router-link to="/create" class="nav-item nav-link text-white">Create Product</router-link>
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