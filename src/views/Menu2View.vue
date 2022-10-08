<script setup>
import { ref, onMounted, onUpdated, watch } from "vue";

import treeviewcontrol from '../components/treeviewcomponent.vue'
import multiplecontrol from '../components/multiplecomponent.vue'
import selectcontrol from '../components/selectcomponent.vue'
import { getTreeviewItems } from "../composables/getTreeviewItems";



const name = ref("");
const gender = ref("");
const areas = ref("");
const languages = ref([]);
const interest = ref([]);
const description = ref("");
const picture = ref("");
const pictureBlob = ref("");
const remember = ref(false);
const agree = ref(false);
const password = ref("");
const finish = ref(false);

const genderItems = [
    { name: "Male", id: 1 },
    { name: "Female", id: 2 },
    { name: "Other", id: 3 },
];

const areasItems = [
    { name: "Front-end", id: 1 },
    { name: "Back-end", id: 2 },
    { name: "Full-stack", id: 3 },
];

const languagesItems = [
    { name: "JavaScript", id: 1 },
    { name: "Python", id: 2 },
    { name: "C#", id: 3 },
    { name: "PHP", id: 4 },
    { name: "Java", id: 5 },
];

const interestItems = [
    { name: "Human Sciences", id: 1 },
    { name: "Technology", id: 2 },
    { name: "Marketing", id: 3 },
];

function onSubmit(e) {
    finish.value = true;
}

// function changeLanguages(e) {
//     languages.value = [...e.target.selectedOptions].map((o) => o.value)
// }

function selectedFile(e) {
    var file = e.target.files[0];
    var tmpPath = URL.createObjectURL(file);

    //let req = new XMLHttpRequest();
    //let formData = new FormData();
    //formData.append("photo", file);
    //req.open("POST", '/upload/image');
    //req.send(formData);

    picture.value = file.name;
    pictureBlob.value = tmpPath;
}

function unCheck(event, id, text) {
    // const interestArray = interest.value        
    // if (event) {
    //     interestArray.push(text);
    // } else {
    //     for (var i = interestArray.length - 1; i >= 0; i--) {
    //         if (interestArray[i] == text) {
    //             interestArray.splice(i, 1);
    //         } 
    //     }
    // }    
    // interest.value = interestArray;

    const { getItems, data, error } = getTreeviewItems();
    getItems(interest.value, event, text);
    interest.value = (error != false) ? data.value : [];
}

function itemChecked() {
    const interestChk = document.getElementsByName("interestChk");
    const interestArray = interest.value;
    if (interestChk.length != 0 && interestArray.length != 0) {
        interestChk.forEach((item, index) => {
            const position = interestArray.indexOf(item.value);
            if (position != -1) {
                item.checked = true;
            }
        })
    }
}

function Back() {
    finish.value = false;
}

watch(gender, (newValue, old) => {
    gender.value = newValue;
});

watch(languages, (newValue, old) => {
    languages.value = newValue;
});

onMounted(() => {
    // interest.value = ['Technology'];
    // itemChecked();
});


onUpdated(() => {    // text content should be the same as current `count.value`
    itemChecked();
})
</script>

<template>
    <div class="content-wrapper" id="content">
        <div class="container-fluid">
            <div class="w-full">
                <div class="card mw-full">
                    <div v-if="!finish" class="w-400 mw-full">
                        <form @submit.prevent="onSubmit">
                            <h3>Form controls</h3>

                            <!-- Input -->
                            <div class="form-group">
                                <label for="full_name" class="required">Full name</label>
                                <input v-model="name" class="form-control" id="full_name" placeholder="Full name"
                                    autocomplete="off" required="required">
                            </div>

                            <!-- Radio -->
                            <div class="form-group">
                                <label for="gendermale" class="required">Gender</label>
                                <div v-for="item in genderItems" :key="item" class="custom-radio">
                                    <input v-model="gender" type="radio" name="gender_opt" :id="`gender_${item.id}`"
                                        :value="item.name" required="required">
                                    <label :for="`gender_${item.id}`">{{ item.name }}</label>
                                </div>
                            </div>

                            <!-- Select -->
                            <div class="form-group">
                                <!-- <label for="area_specialization_lbl" class="required">Area of specialization</label>
                                <select v-model="areas" class="form-control" id="areas_opt" required="required">
                                    <option value="" selected="selected" disabled="disabled">Select your area of specialization</option>
                                    <option v-for="item in areasItems" :value="item.name" :id="item.id" :key="item">{{ item.name }}</option>
                                </select>                                -->

                                <selectcontrol v-model="areas" :label="'Area of specialization'" :id="`areas_opt`"
                                    :placeholder="`Select your area of specialization`" :items="areasItems">
                                </selectcontrol>
                            </div>

                            <!-- Multi-select -->
                            <div class="form-group">
                                <!-- <label for="languages_lbl" class="required">Languages</label>
                                <select v-model="languages" class="form-control" id="languages_opt" multiple="multiple" required="required" size="5">
                                    <option v-for="item in languagesItems" :value="item.name" :id="item.id" :key="item">
                                        {{ item.name }}</option>
                                </select> -->

                                <multiplecontrol v-model="languages" :label="'Languages'" :items="languagesItems"
                                    :size="`5`" :multiple="`multiple`"></multiplecontrol>
                            </div>

                            <div class="form-group">
                                <!-- <fieldset>
                                    <legend id="area_interest_lbl">Area of interest</legend>s
                                    <div v-for="item in interestItems" :key="item" class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">
                                                <div class="custom-checkbox">
                                                    <input type="checkbox" :id="`chk_interest_${item.id}`"
                                                        :value="item.name" name="interestChk"
                                                        @change="emitUncheck($evwent.target.checked, $event.target.id, $event.target.value)">
                                                    <label :for="`chk_interest_${item.id}`" class="blank"></label>
                                                </div>
                                            </div>
                                        </div>
                                        <input type="text" class="form-control" :tabindex="-1" :value="item.name"
                                            :disabled="true">
                                    </div>
                                </fieldset> -->

                                <treeviewcontrol :label="'Area of interest'" :items="interestItems" @unCheck="unCheck">
                                </treeviewcontrol>
                            </div>

                            <!-- Textarea -->
                            <div class="form-group">
                                <label for="description_txt">Description</label>
                                <textarea v-model="description" class="form-control" id="description_txt"
                                    placeholder="Write a short description about yourself."></textarea>
                            </div>

                            <!-- File input -->
                            <div class="form-group">
                                <label for="picture_txt">Display picture</label>
                                <div class="custom-file">
                                    <input @change="selectedFile" type="file" id="picture_txt" accept="image/*">
                                    <label for="picture_txt">Choose picture</label>
                                    &nbsp;
                                    <small>{{ picture }}</small>
                                </div>
                            </div>

                            <!-- Switch -->
                            <div class="form-group">
                                <div class="custom-switch">
                                    <input v-model="remember" type="checkbox" id="remember_chk">
                                    <label for="remember_chk">Remember my information</label>
                                </div>
                            </div>

                            <!-- Checkbox -->
                            <div class="form-group">
                                <div class="custom-checkbox">
                                    <input v-model="agree" type="checkbox" id="agree_chk">
                                    <label for="agree_chk">I agree to all the <a href="#" class="hyperlink">terms and
                                            conditions</a></label>
                                </div>
                            </div>

                            <!-- Input -->
                            <div class="form-group">
                                <label for="password_txt" class="required">Password</label>
                                <input v-model.trim="password" type="password" class="form-control" id="password_txt"
                                    required="required" autocomplete="off">
                            </div>

                            <!-- Submit button -->
                            <input class="btn btn-primary" type="submit" value="Send">
                        </form>
                    </div>

                    <div v-else class="w-400 mw-full">
                        <h3>Your answers</h3>
                        <p><strong>Name: </strong>{{ name }}</p>
                        <p><strong>Gender: </strong>{{ gender }}</p>
                        <p><strong>Areas: </strong>{{ areas }}</p>
                        <p><strong>Languages: </strong>{{ languages }}</p>
                        <p><strong>Interest: </strong>{{ interest }}</p>
                        <p><strong>Description: </strong>{{ description }}</p>
                        <p><strong>Picture: </strong>{{ picture }}</p>
                        <p v-show="pictureBlob!=''">
                            <a target="_blank" :href="`${pictureBlob}`">
                                <img class="thumb img" :src="pictureBlob" alt="" />                                                                
                            </a>
                            <span class="break"><small>click over image to open</small></span>
                        </p>
                        <p><strong>Remember: </strong>{{ remember }}</p>
                        <p><strong>Agree: </strong>{{ agree }}</p>
                        <p><strong>Password: </strong>{{ password }}</p>

                        <input class="btn btn-primary" type="submit" @click="Back" value="Back">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.thumb {
    width: 150px;
}

.thumb img {
    border-radius: 4px;
    padding: 5px;
}

.break{
    display: block;
}

a {
    color:darkgrey;

}

strong {
    color: #1890FF;
}
</style>