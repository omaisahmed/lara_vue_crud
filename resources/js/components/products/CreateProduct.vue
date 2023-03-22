<template>
    <div>
        <h3 class="text-center">Create Product</h3>
        <div class="row justify-content-center">
            <div class="col-md-6">
                <form @submit.prevent="addProduct">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="product.name">
                    </div>
                    <div class="form-group">
                        <label>Detail</label>
                        <input type="text" class="form-control" v-model="product.detail">
                    </div>
                    <button type="submit" class="btn btn-primary my-3">Create</button>
                </form>
            </div>
        </div>
    </div>
</template>
 
<script>
export default {
    data() {
        return {
            product: {}
        }
    },
    methods: {
        addProduct() {
            this.axios
                .post('/api/products', this.product)
                .then(response => (
                    this.$router.push('/')
                ))
                .catch(err => console.log(err))
                .finally(() => this.loading = false)
        }
    }
}
</script>