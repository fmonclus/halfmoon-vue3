<script setup>
defineProps({
    id: String,
    label: String,
    placeholder: String,
    items: Array,
    modelValue: String,
});

emits: ['update:modelValue'];
</script>

<template>
    <label for="area_specialization_lbl" class="required">{{ label }}</label>    
    <select v-model="modelValue" class="form-control" :id="`${id}`" required="required"
        @change="$emit('update:modelValue', modelValue)">
        <option value="" selected="selected" disabled="disabled">{{ placeholder }}</option>
        <option v-for="item in items" :value="item.name" :id="item.id" :key="item">
            {{ item.name }}
        </option>
    </select>
</template>