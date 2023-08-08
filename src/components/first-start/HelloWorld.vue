<template>
  <div class="hello-container">
    <div class="">
      <ConditionalRender />
    </div>
    <h3>Product</h3>
    <div class="product-item-container">
      <div v-for="(product, index) in products" :key="product.id">
        <ProducItem
          :id="product.id"
          :index="index + 1"
          :name="product.name"
          :image="product.image"
          :price="product.price"
          :detail="product"
          @add-to-cart="addToCart"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProducItem from "./Product.vue";
import ConditionalRender from "./conditional-rendering.vue";

export default {
  name: "HelloWorld",
  components: { ProducItem, ConditionalRender },
  props: {},
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Product A",
          image:
            "https://images.unsplash.com/photo-1661956601031-4cf09efadfce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
          price: "30",
        },
        {
          id: 2,
          name: "Product B",
          image:
            "https://images.unsplash.com/photo-1637684666451-423047d6bf5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
          price: "29.99",
        },
        {
          id: 3,
          name: "Product C",
          image:
            "https://images.unsplash.com/photo-1637684666451-423047d6bf5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
          price: "29.99",
        },
      ],
      cart: [],
      name: String,
    };
  },
  mounted() {
    this.onLog();
  },
  methods: {
    onLog() {
      console.log("Mounted");
    },
    addToCart(productId) {
      this.cart.push(productId);
    },
  },
};
</script>

<style scoped>
.hello-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  margin: auto;
}
.product-item-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
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
