<script setup>
defineProps({
    navbarItems: Array,
    iconMode: String,
    leftButtons: Array,
    badge: String,
    logo: String,
    logoWhite: String,
    brand: String,
});
</script>

<template>
    <nav class="navbar">
        <div class="navbar-content">
            <button id="toggle-sidebar-btn" class="btn btn-action" type="button" onclick="halfmoon.toggleSidebar()">
                <i class="fa fa-bars" aria-hidden="true"></i>
            </button>
        </div>
        <a href="#" class="navbar-brand ml-10 ml-sm-15">
            <img :src="`${logo}`" class="hidden-dm mr-5 mr-sm-10" alt="halfmoon-logo">
            <img :src="`${logoWhite}`" class="hidden-lm mr-5 mr-sm-10" alt="halfmoon-logo-white">
            <div v-if="brand!=''">
                {{ brand }}
            </div>

        </a>
        <span>&nbsp;&nbsp;</span>
        <span v-if="badge!=''" class="badge font-size-12 text-monospace px-5 px-sm-10">
            {{ badge }}
        </span>
        <ul class="navbar-nav hidden-sm-and-down">
            <div v-for="item in navbarItems" :key="item">
                <li class="nav-item">
                    <router-link :to="`${item.path}`" class="nav-link">{{ item.text }}</router-link>
                </li>
            </div>
        </ul>
        <div class="navbar-content ml-auto">
            <button class="btn btn-action mr-5" type="button" @click="$emit('toggleMode')"
                aria-label="Toggle dark mode">
                <i :class="`${iconMode}`" aria-hidden="true"></i>
            </button>
            <div v-for="item in leftButtons" :key="item">
                <a href="#" class="btn btn-primary hidden-sm-and-down" role="button">
                    <i class="fa fa-user mr-5" aria-hidden="true"></i>
                    {{ item.text }}
                </a>
            </div>

            <div class="dropdown with-arrow hidden-md-and-up">
                <button class="btn navbar-menu-btn" data-toggle="dropdown" type="button" id="navbar-dropdown-toggle-btn"
                    aria-haspopup="true" aria-expanded="false">
                    <span class="text">Menu </span>
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                </button>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbar-dropdown-toggle-btn">
                    <div v-for="item in navbarItems" :key="item">
                        <router-link :to="`${item.path}`" class="dropdown-item">{{ item.text }}</router-link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>