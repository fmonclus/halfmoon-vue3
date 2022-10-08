<script setup>
defineProps({        
    label: String,
    items: Array
});
</script>

<template>
    <fieldset>
        <legend id="area_interest_lbl">{{ label }}</legend>
        <div v-for="item in items" :key="item" class="input-group">
            <div class="input-group-prepend">
                <div class="input-group-text">
                    <div class="custom-checkbox">
                        <input type="checkbox" :id="`chk_interest_${item.id}`" :value="item.name" name="interestChk"
                            @change="$emit('unCheck', $event.target.checked, $event.target.id, $event.target.value)">                        
                            <label :for="`chk_interest_${item.id}`" class="blank"></label>
                    </div>
                </div>
            </div>
            <input type="text" class="form-control" :tabindex="-1" :value="item.name" :disabled="true">
        </div>
    </fieldset>    
</template>

