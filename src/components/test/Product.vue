<template>
  <div class="product">
    <img :src="image" :alt="name" class="product-image" />
    <h3 class="product-name">{{ name }}</h3>
    <p class="product-price">{{ formatPrice(price) }}</p>
    <button @click="addToCart" class="add-to-cart-button">Add to Cart</button>
  </div>
</template>

<script>
export default {
  name: "ProducItem",
  props: {
    id: Number,
    name: String,
    image: String,
    price: Number,
  },
  data() {
    return {
      log: "",
    };
  },
  mounted() {
    this.onLog();
    console.log('Component Mouted');
  },
  methods: {
    onLog() {
      console.log("On Log");
    },

    addToCart() {
      this.$emit("add-to-cart", this.id);
      this.onLog();
    },

    formatPrice(price) {
      return `$${price.toFixed(2)}`;
    },
  },
};
</script>

<style scoped>
.product {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  text-align: center;
}

.product-image {
  max-width: 500px;
  height: auto;
}

.product-name {
  font-size: 1.2rem;
  margin-top: 5px;
}

.product-price {
  font-weight: bold;
  color: #007bff;
}

.add-to-cart-button {
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
