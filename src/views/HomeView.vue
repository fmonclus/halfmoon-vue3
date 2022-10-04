<script setup>
import { ref } from "vue";
import popup from "../views/PopupView.vue";

const titleModal = ref("");
const msgModal = ref("");
const closeModal = ref("");
const confirmModal = ref("");
const confirmVisible = ref(false);
const showModal = ref(false);

const openPopup = () => {
  titleModal.value = "Titulo Popup";
  msgModal.value = "Mensaje Popup";
  closeModal.value = "Cerrar";
  confirmModal.value = "Confirma?";
  confirmVisible.value = true;
  showModal.value = true;
};

const closePopup = () => {
  showModal.value = false;
};

const confirmPopup = () => {
  showModal.value = false;
};
</script>

<template>
  <popup :title="titleModal" :msg="msgModal" :close="closeModal" :confirm="confirmModal"
    :confirmVisible="confirmVisible" :showModal="showModal" @closePopup="closePopup" @confirmPopup="confirmPopup">
  </popup>

  <div class="w-full h-full d-flex align-items-center justify-content-center">
    <div class="content">
      <h1 class="content-title">Home</h1>
      <div class="mt-20">
        <button class="btn btn-sm" type="button" onclick="halfmoon.toggleDarkMode()">
          Switch mode
        </button>

        &nbsp;|&nbsp;

        <button class="btn btn-sm" type="button" onclick="halfmoon.toggleSidebar()">
          Sidebar
        </button>

        &nbsp;|&nbsp;

        <button class="btn btn-sm" type="button" @click="openPopup()">
          Popup
        </button>
      </div>
    </div>
  </div>
</template>
