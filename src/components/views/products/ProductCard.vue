<template>
  <div class="card">
    <img :src="image" class="card-img-top image-props" :alt="title" />
    <div class="card-body">
      <h5 class="card-title text-success">{{ title }}</h5>
      <p class="card-text fs-6">
        {{ description }}
      </p>
      <div class="d-flex align-content-center justify-content-between gap-3">
        <a href="#" class="btn btn-sm btn-success">Add to Cart</a>
        <router-link
          :to="{ name: 'ProductDetail', params: { id } }"
          class="btn btn-sm btn-info"
          >Detail</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    id: Number,
    image: String,
    title: String,
    description: String,
  },
  methods: {},
};
</script>

<style>
.image-props {
  height: 260px;
  object-fit: cover;
}
</style>