<script setup>
defineProps({
    title: String,
    msg: String,
    close: String,
    confirm: String,
    confirmVisible: Boolean,
    showModal: Boolean
});

const emit = defineEmits(['closePopup', 'confirmPopup']);
</script>

<template>
  <div class="modal" id="modal-1" tabindex="-1" role="dialog" display="block" v-bind:class="{show: showModal}">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <a href="#" class="close" role="button" aria-label="{{ close }}">
          <span aria-hidden="true">&times;</span>
        </a>
        <h5 class="modal-title">{{ title }}</h5>
        <p>
          {{ msg }}
        </p>
        <div class="text-right mt-20">
          <!-- text-right = text-align: right, mt-20 = margin-top: 2rem (20px) -->
          <button @click="emit('closePopup')" class="btn mr-5" role="button">{{ close }}</button>
          <button v-if="confirmVisible" @click="emit('confirmPopup')" class="btn btn-primary" role="button">{{ confirm }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

