<script setup>
</script>

<template>
  <div class="content-wrapper" id="content">
    <div class="container-fluid">
      <div class="w-full">
        <div class="card mw-full">

            <div class="alert" role="alert">
              <h4 class="alert-heading">Default alert</h4>
              This is a default alert with some content and <a href="#" class="alert-link">a link</a>.
            </div>
            <div class="alert alert-primary" role="alert">
              <h4 class="alert-heading">Primary alert</h4>
              This is a primary alert with some content and <a href="#" class="alert-link">a link</a>.
            </div>
            <div class="alert alert-success" role="alert">
              <h4 class="alert-heading">Success alert</h4>
              This is a success alert with some content and <a href="#" class="alert-link">a link</a>.
            </div>
            <div class="alert alert-secondary" role="alert">
              <h4 class="alert-heading">Secondary alert</h4>
              This is a secondary alert with some content and <a href="#" class="alert-link">a link</a>.
            </div>
            <div class="alert alert-danger" role="alert">
              <h4 class="alert-heading">Danger alert</h4>
              This is a danger alert with some content and <a href="#" class="alert-link">a link</a>.
            </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.alert {
  margin-bottom: 10px !important;
}
</style>