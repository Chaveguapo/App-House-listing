<script setup>
import { usePropertyDetailStore } from '@/stores/PropertyStore';
import { ref } from 'vue';


const propertyStore = usePropertyDetailStore();
// console.log(propertyStore.currentPropertyId)
const houseListing = ref({})


//Calling the API to display the data and get it by ID

const getListingDetails = () => {

    fetch("https://api.intern.d-tt.nl/api/houses/" + propertyStore.currentPropertyId
        , {
            method: "get",
            headers: {
                'X-Api-Key': 'rYIVmiv8HRaS2nsX_GxjOKP3ez6EFT4t',
            }
        })
        .then(response => response.json())
        .then(data => {
            houseListing.value = data[0]
            console.log(propertyStore.currentPropertyId)

        })

}
getListingDetails("")



</script>


<template>
    <div>
        <!--Property details -->
        <div class="container-form-field">
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
                    <input type="file" id="uploadPicture" name="uploadPicture">
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

            <div class="form-field">
                <button class="submit-button"> POST</button>
            </div>
        </div>

    </div>

</template>


<style lang="scss" scoped>
.container-form-field {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0 2rem;
    box-sizing: border-box;
}

//-------Box that have header of new listing 
.title-create-new {
    position: relative;
    padding: 2rem;

}

.title-create-new h1 {
    text-align: center;
}

.back_button {
    position: absolute;
    z-index: 100;
    width: auto;
    height: 1rem;
    left: 0;
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
    padding: 10px 0
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





.uploadPicture {
    width: 80px;
    height: 80px;
    border: dashed 2px var(--color-secondary);
    opacity: 50%;
    display: flex;
    justify-content: center;
    border-radius: 5px;
}

.uploadPicture input[type='file'] {
    background-color: aqua;
    opacity: 0;
    width: inherit;
    height: inherit;
    position: absolute;
    cursor: pointer;
}



.uploadPicture img {
    align-self: center;
    width: 20px;
    height: 20px;

}

@media(min-width: 800px) {


    .container-form-field {
        width: 30%;
    }

    .submit-button {
        position: absolute;
        width: 50%;
        right: 0;

    }


    .form-field {
        position: relative;
    }

}
</style>
