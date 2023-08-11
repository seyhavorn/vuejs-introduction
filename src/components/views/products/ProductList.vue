<template>
  <div class="productList">
    <h3>Product List:</h3>
    <div class="row">
      <div class="col-md-4" v-for="product in products" :key="product.id">
        <ProductCard
          :image="product.image"
          :title="product.title"
          :description="product.description"
          :id="product.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue';
export default {
  name: "ProdcutList",
  components: {
    ProductCard,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          image: require("@/assets/images/products/pro1.jpg"),
          title: "Shoes",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea reprehenderit illum alias et unde similique ipsa, sit laboriosam. Commodi neque",
        },
        {
          id: 2,
          image: require("@/assets/images/products/pro2.jpg"),
          title: "Shoes",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea reprehenderit illum alias et unde similique ipsa, sit laboriosam. Commodi neque",
        },
        {
          id: 3,
          image: require("@/assets/images/products/pro3.jpg"),
          title: "Shoes",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea reprehenderit illum alias et unde similique ipsa, sit laboriosam. Commodi neque",
        },
        {
          id: 4,
          image: require("@/assets/images/products/pro1.jpg"),
          title: "Shoes",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea reprehenderit illum alias et unde similique ipsa, sit laboriosam. Commodi neque",
        },
        {
          id: 5,
          image: require("@/assets/images/products/pro1.jpg"),
          title: "Shoes",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea reprehenderit illum alias et unde similique ipsa, sit laboriosam. Commodi neque",
        },
      ],
      carts: [],
    };
  },
  methods: {},
};
</script>

<style>
</style>