<template>
    <div>
        <h2 class="text-center">Products List</h2>

        <table class="table table-dark">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Detail</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in products" :key="product.id">
                    <td>{{ product.id }}</td>
                    <td>{{ product.name }}</td>
                    <td>{{ product.detail }}</td>
                    <td>
                        <div class="btn-group" role="group">
                            <router-link :to="{ name: 'edit', params: { id: product.id } }"
                                class="btn btn-success">Edit</router-link>
                            <button class="btn btn-danger" @click="deleteProduct(product.id)">Delete</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
 
<script>
export default {
    data() {
        return {
            products: []
        }
    },
    created() {
        this.axios
            .get('/api/products/')
            .then(response => {
                this.products = response.data;
            })
            .catch(error => {
              console.log(error);
            });
    },
    methods: {
        // deleteProduct(id) {
        //     this.axios
        //         .delete(`http://localhost:8000/api/products/${id}`)
        //         .then(response => {
        //             let i = this.products.map(data => data.id).indexOf(id);
        //             this.products.splice(i, 1)
        //         });
        // }
        deleteProduct (id) {
        if (confirm('Are you sure you want to delete this product?')) {
          axios.delete(`/api/products/${id}`)
            .then(response => {
              console.log(response)
              this.products = this.products.filter(product => product.id !== id)
            })
            .catch(error => {
              console.log(error)
            })
        }
      }
    }
}
</script>