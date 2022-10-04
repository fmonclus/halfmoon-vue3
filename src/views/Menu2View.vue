<script default>

</script>

<template>
    <div class="content-wrapper" id="content">
        <div class="container-fluid">
            <div class="w-full">
                <div class="card mw-full">
                    <form class="w-400 mw-full">
                        <!-- w-400 = width: 40rem (400px), mw-full = max-width: 100% -->
                        <!-- Input -->
                        <div class="form-group">
                            <label for="full-name" class="required">Full name</label>
                            <input type="text" class="form-control" id="full-name" placeholder="Full name"
                                required="required">
                        </div>

                        <!-- Radio -->
                        <div class="form-group">
                            <label for="gender-male" class="required">Gender</label>
                            <div class="custom-radio">
                                <input type="radio" name="gender" id="gender-male" value="male" required="required">
                                <label for="gender-male">Male</label>
                            </div>
                            <div class="custom-radio">
                                <input type="radio" name="gender" id="gender-female" value="female" required="required">
                                <label for="gender-female">Female</label>
                            </div>
                            <div class="custom-radio">
                                <input type="radio" name="gender" id="gender-other" value="other" required="required">
                                <label for="gender-other">Other</label>
                            </div>
                        </div>

                        <!-- Select -->
                        <div class="form-group">
                            <label for="area-of-specialization" class="required">Area of specialization</label>
                            <select class="form-control" id="area-of-specialization" required="required">
                                <option value="" selected="selected" disabled="disabled">Select your area of
                                    specialization</option>
                                <option value="front-end">Front-end</option>
                                <option value="back-end">Back-end</option>
                                <option value="full-stack">Full-stack</option>
                            </select>
                        </div>

                        <!-- Multi-select -->
                        <div class="form-group">
                            <label for="languages" class="required">Languages</label>
                            <select class="form-control" id="languages" multiple="multiple" required="required"
                                size="5">
                                <option value="javascript">JavaScript</option>
                                <option value="python">Python</option>
                                <option value="php">PHP</option>
                                ...
                            </select>
                        </div>

                        <!-- Textarea -->
                        <div class="form-group">
                            <label for="description">Description</label>
                            <textarea class="form-control" id="description"
                                placeholder="Write a short description about yourself."></textarea>
                        </div>

                        <!-- File input -->
                        <div class="form-group">
                            <label for="picture" class="required">Display picture</label>
                            <div class="custom-file">
                                <input type="file" id="picture" required="required">
                                <label for="picture">Choose picture</label>
                            </div>
                        </div>

                        <!-- Switch -->
                        <div class="form-group">
                            <div class="custom-switch">
                                <input type="checkbox" id="remember-my-information">
                                <label for="remember-my-information">Remember my information</label>
                            </div>
                        </div>

                        <!-- Checkbox -->
                        <div class="form-group">
                            <div class="custom-checkbox">
                                <input type="checkbox" id="agree-to-terms">
                                <label for="agree-to-terms">I agree to all the <a href="#" class="hyperlink">terms and
                                        conditions</a></label>
                            </div>
                        </div>

                        <!-- Submit button -->
                        <input class="btn btn-primary" type="submit" value="Submit">
                    </form>


                </div>
            </div>
        </div>
    </div>
</template>
