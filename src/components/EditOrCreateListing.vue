<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { usePropertyDetailStore } from '@/stores/PropertyStore';


const propertyStore = usePropertyDetailStore();

let isCreate = ref(false);

/**
 * Read the form data and send the data to the API
 */
const createOrEdit = () => {
    var myHeaders = new Headers();
    myHeaders.append("X-Api-Key", "rYIVmiv8HRaS2nsX_GxjOKP3ez6EFT4t");

    var formdata = new FormData();
    formdata.append("price", propertyStore.currentHouseListing.price);
    formdata.append("bedrooms", propertyStore.currentHouseListing.rooms.bedrooms);
    formdata.append("bathrooms", propertyStore.currentHouseListing.rooms.bathrooms);
    formdata.append("size", propertyStore.currentHouseListing.size);
    formdata.append("streetName", propertyStore.currentHouseListing.location.street);
    formdata.append("houseNumber", propertyStore.currentHouseListing.location.houseNumber);
    formdata.append("zip", propertyStore.currentHouseListing.location.zip);
    formdata.append("city", propertyStore.currentHouseListing.location.city);
    formdata.append("constructionYear", propertyStore.currentHouseListing.constructionYear);
    formdata.append("hasGarage", propertyStore.currentHouseListing.hasGarage);
    formdata.append("description", propertyStore.currentHouseListing.description);

    if (propertyStore.currentHouseListing.location.houseNumberAddition) {
        formdata.append("numberAddition", propertyStore.currentHouseListing.location.houseNumberAddition);
    }

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };
    if (isCreate.value) {
        propertyStore.createListing(requestOptions)
    } else {
        propertyStore.editListing(requestOptions, propertyStore.currentHouseListing.id)
    }
}

function setImage(event) {
    const file = event.target.files[0];
    if (file) {
        propertyStore.currentHouseListing.image = URL.createObjectURL(file);
    }
}

const clearImage = () => {
    propertyStore.currentHouseListing.image = null;
}

// If the route has a ID then we edit and get the details otherwise is a create
if (useRoute().params.id) {
    propertyStore.getListingDetails(useRoute().params.id)
} else {
    isCreate.value = true
}
</script>


<template>
    <div class="background-image"></div>
    <form style="width: 100%; height: 100%;" @submit.prevent="createOrEdit">

        <!--Property details -->
        <div v-if="propertyStore.currentHouseListing.id || isCreate" class="container-form-field">
            <div class="title-create-new">
                <img class="back_button" src="../assets/ic_back_grey@3x.png" @click="this.$router.back()">
                <div class="back_to_overview" @click="this.$router.back()">

                    <img src="../assets/ic_back_grey@3x.png">

                    <p>Back to detail page</p>
                </div>
                <h1 v-if="isCreate">Create new listing</h1>
                <h1 v-if="!isCreate">Edit listing</h1>
            </div>

            <div class="form-field">
                <label class="form-label" for="streetName">Street Name*</label>
                <input v-model="propertyStore.currentHouseListing.location.street" type="text" id="streetName"
                    placeholder="Enter the street name" class="form-input" required>
            </div>
            <div class="form-row">
                <div class="form-field">
                    <label class="form-label" for="houseNumber">House Number*</label>
                    <input v-model="propertyStore.currentHouseListing.location.houseNumber" type="text" id="houseNumber"
                        placeholder="Enter the house number" class="form-input" required>
                </div>
                <div class="form-field">
                    <label class="form-label" for="addition">Addition (optional)</label>
                    <input v-model="propertyStore.currentHouseListing.location.houseNumberAddition" type="text"
                        id="addition" placeholder="e.g A" class="form-input">
                </div>
            </div>

            <div class="form-field">
                <label class="form-label" for="postalCode">Postal Code*</label>
                <input v-model="propertyStore.currentHouseListing.location.zip" type="text" id="postalCode"
                    placeholder="e.g 1000 AA" class="form-input" required>
            </div>
            <div class="form-field">
                <label class="form-label" for="city">City*</label>
                <input v-model="propertyStore.currentHouseListing.location.city" type="text" id="city"
                    placeholder="e.g Utrecht" class="form-input" required>
            </div>

            <!-- Upload pic -->
            <div class="form-field">
                <label class="form-label" for="uploadPicture">Upload Picture (PNG or JPG)*</label>
                <div class="uploadPicture">
                    <img v-if="propertyStore.currentHouseListing.image" @click="clearImage" class="clear-picture"
                        src="../assets/ic_clear_white@3x.png">
                    <img v-if="propertyStore.currentHouseListing.image" class="listing-image"
                        :src='propertyStore.currentHouseListing.image ? propertyStore.currentHouseListing.image : "../src/assets/img-placeholder.png"'>
                    <img v-if="!propertyStore.currentHouseListing.image" class="listing-image-placeholder"
                        src="../assets/ic_plus_grey@3x.png">
                    <input type="file" name="uploadPicture" @change="setImage">
                </div>
            </div>

            <div class="form-field">
                <label class="form-label" for="price">Price*</label>
                <input v-model=propertyStore.currentHouseListing.price type="text" inputmode="numeric" id="price"
                    placeholder="e.g. € 500.000 " class="form-input" required>
            </div>
            <div class="form-row">
                <div class="form-field">
                    <label class="form-label" for="size">Size*</label>
                    <input v-model="propertyStore.currentHouseListing.size" type="text" inputmode="numeric" id="size"
                        placeholder="e.g. 60m2" class="form-input" required>
                    <div class="form-field">
                        <label class="form-label" for="garage">Garage*</label>
                        <select v-model="propertyStore.currentHouseListing.hasGarage" id="garage" class="form-input"
                            required>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="form-row">
                <div class="form-field">
                    <label class="form-label" for="bedrooms">Bedrooms*</label>
                    <input v-model="propertyStore.currentHouseListing.rooms.bedrooms" type="text" inputmode="numeric"
                        id="bedrooms" placeholder="Enter amount" class="form-input" required>
                </div>
                <div class="form-field">
                    <label class="form-label" for="bathrooms">Bathrooms*</label>
                    <input v-model="propertyStore.currentHouseListing.rooms.bathrooms" type="text" inputmode="numeric"
                        id="bathrooms" placeholder="Enter amount" class="form-input" required>
                </div>
            </div>
            <div class="form-field">
                <label class="form-label" for="construction-date">Construction date*</label>
                <input v-model="propertyStore.currentHouseListing.constructionYear" type="number" inputmode="numeric"
                    id="construction_date" placeholder="e.g. 1990" class="form-input" required min="1950" max="2026">
            </div>
            <div class="form-field">
                <label class="form-label" for="description">Description*</label>
                <input v-model="propertyStore.currentHouseListing.description" type="text" id="description"
                    placeholder="Enter description" class="form-textarea" required>
            </div>
            <div class="form-field">
                <input type="submit" class="submit-button" :value='isCreate ? "POST" : "SAVE"'>
            </div>
        </div>

    </form>


</template>


<style lang="scss" scoped>
.container-form-field {
    background-color: transparent;
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
    width: auto;
    height: 1rem;
    left: 0;
    cursor: pointer;
}

.back_to_overview {
    display: none;
}

// form styles
.form-row {
    display: flex;
    gap: 1rem
}

.form-field {
    padding-bottom: 1rem;
    width: 100%;
    font-size: 12px;
    font-weight: 600;
}

.form-label {
    display: block;
    padding: 10px 0
}

// Properties of the input (form-textarea,form-select)
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
    border: dashed 2px var(--color-tertiarydarker);
    display: flex;
    justify-content: center;
    border-radius: 5px;
    position: relative;
}

.uploadPicture input[type='file'] {
    opacity: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    position: absolute;
    cursor: pointer;
}

.uploadPicture img {
    align-self: center;

}

.clear-picture {
    width: 30px;
    height: 30px;
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    z-index: 10;
}

.listing-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.listing-image-placeholder {
    width: 20px;
    height: 20px;

}

.background-image {
    z-index: -10;
    position: absolute;
    height: 99%;
    width: 100%;
    background-image: url(../assets/img_background@3x.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
}

@media(min-width: 800px) {
    .container-form-field {
        padding: 0 10%;
        width: 50%;
    }

    .back_button {
        width: 1.8rem;
        height: 1.8rem;
    }

    .submit-button {
        position: absolute;
        width: 50%;
        right: 0;

    }

    .form-field {
        position: relative;
    }

    .back_button {
        display: none;
    }

    .back_to_overview {
        display: flex;
        gap: 0.5rem;
        padding: 1rem 0;
        color: var(--color-primarytext);
        cursor: pointer;
    }

    .back_to_overview img {
        width: 1rem;
        height: 1rem;
    }

    .back_to_overview p {
        font-weight: 600;
        font-family: var(--ff-primary);
        color: var(--color-primarytext);
        text-align: left;
    }

    .title-create-new {
        padding: 0
    }

    .title-create-new h1 {
        text-align: left;
    }

}
</style>
