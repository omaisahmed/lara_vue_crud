<template>
    <div>
        <h3 class="text-center">Edit Product</h3>
        <div class="row justify-content-center">
            <div class="col-md-6">
                <form @submit.prevent="updateProduct">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="product.name">
                    </div>
                    <div class="form-group">
                        <label>Detail</label>
                        <input type="text" class="form-control" v-model="product.detail">
                    </div>
                    <button type="submit" class="btn btn-primary my-3">Update</button>
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
    created() {
        this.axios
            .get(`/api/products/${this.$route.params.id}`)
            .then((res) => {
                this.product = res.data;
            });
    },
    methods: {
        updateProduct() {
            this.axios
                .patch(`/api/products/${this.$route.params.id}`, this.product)
                .then((res) => {
                    this.$router.push({ name: 'products' });
                });
        }
    }
}
</script>