<!-- # Options API -->
<!-- <script>
export default {
  name: 'OptionVsCompositionAPI',
  data() {
    return {
      firstName: '',
      lastName: '',
      position: ''
    }
  },
  mounted() {
    this.test();
  },
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    }
  },
  methods: {
    test() {
      this.firstName = "Seyha";
      this.lastName = "Vorn";
      this.position = 'Web Developer'
    }
  }
}
</script> -->

<!-- # Composition API: -->
<!-- <script>
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  setup() {
    const info = "Web Developer";
    const firstName = ref("Cheat");
    const lastName = ref("Le");

    const fullName = computed(() => firstName.value + ' ' + lastName.value);

    function test() {
      firstName.value = "Seyha";
      lastName.value = "Vorn"
    }

    return { fullName, info, test };
  }
})
</script> -->

<!-- 3: Setup API -->
<!-- <script setup>
import { ref, computed } from 'vue';

const info = "Helo World";
const firstName = ref("Cheat");
const lastName = ref("Le");
const fullName = computed(() => firstName.value + " " + lastName.value);

function test() {
  firstName.value = "Seyha";
  lastName.value = "Vorn";
}

</script> -->

<!-- #4 Hybrid  -->
<script>
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  data: () => ({
    info: 'Web Developer'
  }),
  setup() {
    const firstName = ref("Cheat");
    const lastName = ref("le");

    const fullName = computed(() => firstName.value + " " + lastName.value);

    function test() {
      firstName.value = "Seyha";
      lastName.value = "Vorn";
    }

    return { fullName, test }
  }
});

</script>

<template>
  <div>
    <h4>Full Name: {{ fullName }}</h4>
    <h4>My Position: {{ info }}</h4>
    <h4>Test Function: {{ test }}</h4>
  </div>
</template>

<style></style>