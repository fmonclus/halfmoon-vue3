<script setup>
import { ref, computed } from 'vue'
import { RouterLink, RouterView } from "vue-router";


const home = ref('Home');
const privacidad = ref('Privacidad');
const login = ref('Log-in');
const sibebarMenu1 = ref('Menu 1');
const sibebarMenu2 = ref('Menu 2');
const sibebarMenu3 = ref('Menu 3');

const iconMode = ref('');

validMode();

function toggleMode() {
    halfmoon.toggleDarkMode()
    validMode();
}

function validMode() {
    if (halfmoon.getPreferredMode() == "light-mode") {
        iconMode.value = 'fa fa-moon';
    }
    else if (halfmoon.getPreferredMode() == "dark-mode") {
        iconMode.value = 'fa fa-sun';
    }
    else if (halfmoon.getPreferredMode() == "not-set") {
        iconMode.value = 'fa fa-moon';
    }
}

</script>

<template>
    <div class="page-wrapper with-navbar with-sidebar with-navbar-fixed-bottom"
        data-sidebar-type="overlayed-sm-and-down">

        <!-- Navbar start -->
        <nav class="navbar">
            <div class="navbar-content">
                <button id="toggle-sidebar-btn" class="btn btn-action" type="button" onclick="halfmoon.toggleSidebar()">
                    <i class="fa fa-bars" aria-hidden="true"></i>
                </button>
            </div>
            <a href="#" class="navbar-brand ml-10 ml-sm-15">
                <img src="@/assets/images/fake-logo.svg" class="hidden-dm mr-5 mr-sm-10" alt="halfmoon-logo">
                <img src="@/assets/images/fake-logo.svg" class="hidden-lm mr-5 mr-sm-10" alt="halfmoon-logo-white">
                Brand
            </a>
            <span>&nbsp;&nbsp;</span>
            <span class="badge font-size-12 text-monospace px-5 px-sm-10">
                vue.js version
            </span>
            <ul class="navbar-nav hidden-sm-and-down">
                <li class="nav-item">
                    <router-link to="/" class="nav-link">{{ home }}</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/Privacidad" class="nav-link">{{ privacidad }}</router-link>
                </li>
            </ul>
            <div class="navbar-content ml-auto">
                <button class="btn btn-action mr-5" type="button" @click="toggleMode" aria-label="Toggle dark mode">                  
                    <i v-bind:class="iconMode" aria-hidden="true"></i>
                </button>
                <a href="#" class="btn btn-primary hidden-sm-and-down" role="button">
                    <i class="fa fa-user mr-5" aria-hidden="true"></i>
                    {{ login }}
                </a>

                <div class="dropdown with-arrow hidden-md-and-up">
                    <button class="btn navbar-menu-btn" data-toggle="dropdown" type="button"
                        id="navbar-dropdown-toggle-btn" aria-haspopup="true" aria-expanded="false">
                        <span class="text">Menu </span>
                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </button>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbar-dropdown-toggle-btn">
                        <router-link to="/" class="dropdown-item">{{ home }}</router-link>
                        <router-link to="/Privacidad" class="dropdown-item">{{ privacidad }}</router-link>
                    </div>
                </div>
            </div>
        </nav>
        <!-- Navbar end -->

        <!-- Sidebar overlay -->
        <div class="sidebar-overlay" onclick="halfmoon.toggleSidebar()"></div>
        <!-- Sidebar start -->

        <div class="sidebar" id="sidebar">
            <div class="sidebar-menu list">
                <h5 class="sidebar-title">Menu principal</h5>
                <div class="sidebar-divider"></div>

                <!-- Getting started section start -->
                <router-link v-if="sibebarMenu1 != ''" to="/menu1" class="sidebar-link" id="sidebar-menu-1"
                    data-active-scroll-disabled="disabled">
                    <span class="name">{{ sibebarMenu1 }}</span>
                </router-link>

                <router-link v-if="sibebarMenu2 != ''" to="/menu2" class="sidebar-link" id="sidebar-menu-1"
                    data-active-scroll-disabled="disabled">
                    <span class="name">{{ sibebarMenu2 }}</span>
                </router-link>

                <router-link v-if="sibebarMenu3 != ''" to="/menu3" class="sidebar-link" id="sidebar-menu-1"
                    data-active-scroll-disabled="disabled">
                    <span class="name">{{ sibebarMenu3 }}</span>
                </router-link>
                
                <br />
            </div>
        </div>
        <!-- Sidebar end -->

        <!-- Router -->
        <router-view></router-view>
        <!-- Router end -->

        <nav class="navbar navbar-fixed-bottom">
            <ul class="navbar-nav ml-auto">
            </ul>
            <span class="text-nowrap">
                &copy; Desarrollado por tnmprogramming.com.ar
            </span>
        </nav>
    </div>
</template>

<style scoped>

</style>
