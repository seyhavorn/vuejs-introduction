<template>
  <div class="productdetail">
    <h3>Product Detail</h3>
    <div class="row">
      <div class="col-md-5">
        <img
          src="/assets/images/products/pro1.jpg"
          class="card-img-top image-props"
          alt="Product Title"
        />
      </div>
      <div class="col-md-7">
        <h4>Shoes {{ id  }}</h4>
        <div class="">
          <h4>Price: <span>300$</span></h4>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          labore. Perspiciatis ut aliquid sunt quasi. Voluptatibus commodi
          doloremque dolores necessitatibus inventore, fugiat itaque eaque porro
          nihil. Pariatur illum temporibus corporis?
        </p>
        <div class="">
          <button class="btn btn-sm btn-primary float-end">Add To Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetail",
  props: ['id'],
  // data() {
  //   return {
  //     id: this.$route.params.id,
  //   }
  // },
  created() {
    // this.onLog();
  },
  methods: {
    onLog() {
      console.log(this.$route.params.is);
    }
  }
};
</script>

<style>
</style>