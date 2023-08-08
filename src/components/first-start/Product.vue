<template>
  <div class="card product">
    <p class="text-primary"></p>
    <img :src="image" :alt="name" class="product-image" />
    <h3 class="product-name">{{ name }}</h3>
    <p class="product-price">{{ price ? formatPrice(price) : "solid out" }}</p>
    <button
      @click="addToCart"
      :class="{ active: isActive }"
      class="btn btn-sm btn-success text-white text-hover-red"
    >
      Add to Cart
    </button>
  </div>
</template>

<script>
export default {
  name: "ProducItem",
  props: {
    id: Number,
    name: String,
    image: String,
    price: String,
    detail: Object,
  },
  data() {
    return {
      log: "",
      isActive: false,
    };
  },
  mounted() {},
  methods: {
    triggerActive() {
      this.isActive = !this.isActive;
    },
    onLog() {
      console.log("On Log");
    },

    addToCart() {
      this.isActive = !this.isActive;
      this.$emit("add-to-cart", this.id);
      this.onLog();
    },

    formatPrice(price) {
      return "$" + price;
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
  max-height: 500px;
  background: contain;
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
