<script setup>
import { ref, onMounted, onUpdated, watch } from "vue";


const name = ref("");
const gender = ref("");
const areas = ref([]);
const languages = ref([]);
const interest = ref([]);
const description = ref("");
const picture = ref("");
const pictureBlob = ref("");
const remember = ref(false);
const agree = ref(false);
const password = ref("");
const finish = ref(false);


function onSubmit(e) {
    name.value = full_name.value;
    areas.value = areas_opt.value;
    description.value = description_txt.value;
    remember.value = remember_chk.value === 'on' ? true : false;
    agree.value = agree_chk.value === 'on' ? true : false;
    password.value = password_txt.value;
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

function emitUncheck(event, id, text) {
    const interestArray = interest.value;
    if (event) {
        interestArray.push(text);
    } else {
        for (var i = interestArray.length - 1; i >= 0; i--) {
            if (interestArray[i] == text) {
                interestArray.splice(i, 1);
            }
        }
    }
    interest.value = interestArray;
}

function Back() {
    finish.value = false;
}

onUpdated(() => {    // text content should be the same as current `count.value`
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
})

watch(gender, (newValue, old) => {
    gender.value = newValue;
});

watch(languages, (newValue, old) => {
    languages.value = newValue;
});
// onMounted(() => {
// });

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
                                <div class="custom-radio">
                                    <input v-model="gender" type="radio" name="gender_opt" id="gendermale" value="male"
                                        required="required">
                                    <label for="gendermale">Male</label>
                                </div>
                                <div class="custom-radio">
                                    <input v-model="gender" type="radio" name="gender_opt" id="genderfemale"
                                        value="female" required="required">
                                    <label for="genderfemale">Female</label>
                                </div>
                                <div class="custom-radio">
                                    <input v-model="gender" type="radio" name="gender_opt" id="genderother"
                                        value="other" required="required">
                                    <label for="genderother">Other</label>
                                </div>
                            </div>

                            <!-- Select -->
                            <div class="form-group">
                                <label for="areas_opt" class="required">Area of specialization</label>
                                <select v-model="areas" class="form-control" id="areas_opt" required="required">
                                    <option value="" selected="selected" disabled="disabled">Select your area of
                                        specialization</option>
                                    <option value="front-end">Front-end</option>
                                    <option value="back-end">Back-end</option>
                                    <option value="full-stack">Full-stack</option>
                                </select>
                            </div>

                            <!-- Multi-select -->
                            <div class="form-group">
                                <label for="languages_opt" class="required">Languages</label>
                                <!-- <select @change="changeLanguages" v-model="languages" class="form-control" -->
                                <select v-model="languages" class="form-control" id="languages_opt" multiple="multiple"
                                    required="required" size="5">
                                    <option value="javascript">JavaScript</option>
                                    <option value="python">Python</option>
                                    <option value="c#">C#</option>
                                    <option value="php">PHP</option>
                                    <option value="java">Java</option>
                                    ...
                                </select>
                            </div>

                            <div class="form-group">
                                <fieldset>
                                    <legend id="lblAreaInteresse">Area of interest</legend>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">
                                                <div class="custom-checkbox">
                                                    <input type="checkbox" id="option1_chk" value="Human Sciences"
                                                        name="interestChk"
                                                        @change="emitUncheck($event.target.checked, $event.target.id, $event.target.value)">
                                                    <label for="option1_chk" class="blank"></label>
                                                </div>
                                            </div>
                                        </div>
                                        <input type="text" class="form-control" :tabindex="-1" value="Human Sciences"
                                            style="cursor: pointer;" :disabled="true">
                                    </div>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">
                                                <div class="custom-checkbox">
                                                    <input type="checkbox" id="option2_chk" value="Technology"
                                                        name="interestChk"
                                                        @change="emitUncheck($event.target.checked, $event.target.id, $event.target.value)">
                                                    <label for="option2_chk" class="blank"></label>
                                                </div>
                                            </div>
                                        </div>
                                        <input type="text" class="form-control" :tabindex="-1" value="Technology"
                                            style="cursor: pointer;" :disabled="true">
                                    </div>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">
                                                <div class="custom-checkbox">
                                                    <input type="checkbox" id="option3_chk" value="Marketing"
                                                        name="interestChk"
                                                        @change="emitUncheck($event.target.checked, $event.target.id, $event.target.value)">
                                                    <label for="option3_chk" class="blank"></label>
                                                </div>
                                            </div>
                                        </div>
                                        <input type="text" class="form-control" :tabindex="-1" value="Marketing"
                                            style="cursor: pointer;" :disabled="true">
                                    </div>

                                </fieldset>
                            </div>

                            <!-- Textarea -->
                            <div class="form-group">
                                <label for="description_txt">Description</label>
                                <textarea v-model="description" class="form-control" id="description_txt"
                                    placeholder="Write a short description about yourself."></textarea>
                            </div>

                            <!-- File input -->
                            <div class="form-group">
                                <label for="picture_txt" class="required">Display picture</label>
                                <div class="custom-file">
                                    <input @change="selectedFile" type="file" id="picture_txt" accept="image/*"
                                        required="required">
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
                            <input class="btn btn-primary" type="submit"  value="Send">
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
                        <p v-show="pictureBlob!=''"><img class="thumb img" :src="pictureBlob" alt="" /></p>
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
    width: 200px;
    height: 150px;
    overflow: hidden;
}

.thumb img {
    min-width: 200px;
    min-height: 150px;
    width: 200px;
}

strong {
    color: #1890FF;
}
</style>