<template>
  <div class="conditional-rendering">
    <!-- NOTE: Check conditional rendering!! -->
    <div class="">
      <h3 class="text-info mt-4">Do you love me??? {{}}</h3>
      <div class="content-answer">
        <h5 v-if="yes && !no" class="text-success">Yes</h5>
        <h5 v-if="no && !yes" class="text-success">No</h5>
        <h5 v-else class="text-primary">NO</h5>
      </div>
      <button v-if="!no" class="btn btn-sm btn-primary" @click="yes = !yes">
        Yes
      </button>
      <button v-if="!yes" class="btn btn-sm btn-success mx-4" @click="no = !no">
        No
      </button>
    </div>

    <!-- List Rendering: -->
    <h3>How to rendering:</h3>
    <div
      v-for="product in products"
      :key="product.id"
      :id="product.id"
      class="row"
    >
      <div class="card product col-md-12">
        <p class="text-primary"></p>
        <h3 class="product-name">{{ product.name }}</h3>
        <p class="product-price text-primary fw-bold">
          {{ product.price ? formatToDollar(product.price) : "Solid Out" }}
        </p>
        <p class="text-primary">{{ product.category }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ConditionalRender",
  data() {
    return {
      yes: false,
      no: false,
      products: [
        {
          id: 1,
          name: "Phone",
          price: "100",
          category: "phone",
        },
        {
          id: 1,
          name: "Phone",
          price: "100",
          category: "phone",
        },
      ],
    };
  },
  props: {},
  methods: {
    formatToDollar(price) {
      return "$" + price;
    },
  },
};
</script>

<style scoped>
.conditional-rendering {
  width: 100%;
}
.content-answer {
  color: red;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
