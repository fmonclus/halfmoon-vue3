<script setup>
defineProps({
    label: String,
    items: Array,
    modelValue: Array,
    size: String,
    multiple: String || "",
});

emits: ['update:modelValue'];
</script>

<template>
    <label for="languages_lbl" class="required">{{ label }}</label>
    <select v-model="modelValue" class="form-control" required="required" :size="`${size}`" :multiple="`${multiple}`"
        @change="$emit('update:modelValue', modelValue)">
        <option v-for="item in items" :value="item.name" :id="`opt_item_${item.id}`" :key="item">
            {{ item.name }}</option>
    </select>
</template>