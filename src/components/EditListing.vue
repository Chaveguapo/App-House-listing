<script setup>

</script>


<template>
    <div>
        <!--Property details -->
        <form class="container-form-field">
            <div class="title-create-new">
                <img class="back_button" src="../assets/ic_back_grey@3x.png"
                    onclick="window.history.go(-1); return false;">
                <h1>Create new listing</h1>
            </div>


            <div class="form-field">
                <label class="form-label" for="streetName">Street Name*</label>
                <input type="text" id="streetName" placeholder="Enter the street name" class="form-input" required>
            </div>
            <div class="form-row">
                <div class="form-field">
                    <label class="form-label" for="houseNumber">House Number*</label>
                    <input type="text" id="houseNumber" placeholder="Enter the house number" class="form-input"
                        required>
                </div>
                <div class="form-field">
                    <label class="form-label" for="addition">Addition (optional)</label>
                    <input type="text" id="addition" placeholder="e.g A" class="form-input" required>
                </div>
            </div>


            <div class="form-field">
                <label class="form-label" for="postalCode">Postal Code*</label>
                <input type="text" id="postalCode" placeholder="e.g 1000 AA" class="form-input" required>
            </div>
            <div class="form-field">
                <label class="form-label" for="city">City*</label>
                <input type="text" id="city" placeholder="e.g Utrecht" class="form-input" required>
            </div>

            <!-- Upload pic -->

            <div class="form-field">
                <label class="form-label" for="uploadPicture">Upload Picture (PNG or JPG)*</label>

                <div class="uploadPicture">
                    <img src="../assets/ic_plus_grey@3x.png">
                </div>
            </div>

            <!--Property details -->

            <div class="form-field">
                <label class="form-label" for="price">Price*</label>
                <input type="text" inputmode="numeric" id="price" placeholder="e.g. € 500.000 " class="form-input"
                    required>
            </div>
            <div class="form-row">
                <div class="form-field">
                    <label class="form-label" for="size">Size*</label>
                    <input type="text" inputmode="numeric" id="size" placeholder="e.g. 60m2" class="form-input"
                        required>
                </div>
                <div class="form-field">
                    <label class="form-label" for="garage">Garage*</label>
                    <input type="text" id="garage" placeholder="Select" class="form-input" required>
                </div>
            </div>
            <div class="form-row">
                <div class="form-field">
                    <label class="form-label" for="bedrooms">Bedrooms*</label>
                    <input type="text" inputmode="numeric" id="bedrooms" placeholder="Enter amount" class="form-input"
                        required>
                </div>
                <div class="form-field">
                    <label class="form-label" for="bathrooms">Bathrooms*</label>
                    <input type="text" inputmode="numeric" id="bathrooms" placeholder="Enter amount" class="form-input"
                        required>
                </div>
            </div>
            <div class="form-field">
                <label class="form-label" for="construction-date">Construction date*</label>
                <input type="number" inputmode="numeric" id="construction_date" placeholder="e.g. 1990"
                    class="form-input" required>
            </div>
            <div class="form-field">
                <label class="form-label" for="description">Description*</label>
                <input type="" id="description" placeholder="Enter description" class="form-textarea" required>
            </div>
            <button class="submit-button form-submit"> POST</button>
        </form>

    </div>



</template>


<style lang="scss" scoped>
.container-form-field {
    padding: 0 2rem;
    box-sizing: border-box;
}

//-------Box that have header of new listing 
.title-create-new {
    display: flex;
    flex-direction: row;
    justify-content: start;
    gap: 1rem;
    padding-top: 2rem;
    padding-bottom: 1rem;

}

.back_button {
    position: relative;
    z-index: 100;
    width: auto;
    height: 1rem;
}

//---------form styles
.form-row {
    display: flex;
    gap: 1rem
}

.form-field {
    width: 100%;
    font-size: 12px;
    font-weight: 600;
}

.form-label {
    display: block;
    padding: 10px
}

//Properties of the input (form-textarea,form-select)
.form-input,
.form-textarea,
.form-select {
    width: inherit;
    color: var(--color-secondary);
    padding: 1rem;
    box-sizing: border-box;
    border-radius: 5px;
    border: none;


}

.form-submit {
    background-color: var(--color-primary);
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.form-submit:hover {
    background-color: var(--color-secondary);
}



.uploadPicture {
    width: 80px;
    height: 80px;
    border: dashed 2px var(--color-secondary);
    opacity: 50%;
    display: flex;
    justify-content: center;
}


.uploadPicture img {
    align-self: center;
    width: 20px;
    height: 20px;
}
</style>
