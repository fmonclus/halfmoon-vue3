<script setup>
import { ref } from "vue";
import LoadingSpinner from "../components/LoadingSpinner.vue";

const loading = ref(true);

setTimeout(function () {
  loading.value = false;
}, 1500);
</script>

<template>

  <div class="content-wrapper" id="content">
    <div v-if="loading" class="container-fluid">
      <div class="row">
        <div class="col-12">
          <LoadingSpinner />
        </div>
      </div>
    </div>

    <div v-else class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="w-full">
            <div class="card mw-full">

              <h2 class="card-title">Card Example 1</h2>
              The weather forecast didn't say that, but the steel plate in his
              hip did. He had learned over the years to trust his hip over the
              weatherman. It was going to rain, so he better get outside and
              prepare. Sleeping in his car was never the plan but sometimes
              things don't work out as planned. This had been his life for the
              last three months and he was just beginning to get used to it. He
              didn't actually enjoy it, but he had accepted it and come to terms
              with it. Or at least he thought he had. All that changed when he
              put the key into the ignition, turned it and the engine didn't
              make a sound.
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-6">
          <div class="card mw-full">
            <h2 class="card-title">Card Example 2</h2>
            The weather forecast didn't say that, but the steel plate in his hip
            did. He had learned over the years to trust his hip over the
            weatherman.
          </div>
        </div>
        <div class="col-6">
          <div class="card mw-full">
            <h2 class="card-title">Card Example 3</h2>
            The weather forecast didn't say that, but the steel plate in his hip
            did. He had learned over the years to trust his hip over the
            weatherman.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>