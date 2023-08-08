<template>
  <div class="hello">
    <h3>Product</h3>
    <ProducItem
      v-for="product in products"
      :key="product.id"
      :id="product.id"
      :name="product.name"
      :image="product.image"
      :price="product.price"
      @add-to-cart="addToCart"
    />
  </div>
</template>

<script>
import ProducItem from "./test/Product.vue";
export default {
  name: "HelloWorld",
  components: { ProducItem },
  props: {},
  data() {
    return {
      products: [
        { id: 1, name: "Product A", image: "https://images.unsplash.com/photo-1661956601031-4cf09efadfce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80", price: 19.99 },
        { id: 2, name: "Product B", image: "https://images.unsplash.com/photo-1637684666451-423047d6bf5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80", price: 29.99 },
      ],
      cart: [],
    };
  },
  methods: {
    addToCart(productId) {
      this.cart.push(productId);
    },
    created() {
      this.isLog();
    },
    mounted() {},
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.product-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
