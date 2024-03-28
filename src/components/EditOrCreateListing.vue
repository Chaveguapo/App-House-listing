<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';



const houseListing = ref({
    location: {},
    rooms: {},
});

let isCreate = ref(false);

const createOrEdit = () => {
    var myHeaders = new Headers();
    myHeaders.append("X-Api-Key", "rYIVmiv8HRaS2nsX_GxjOKP3ez6EFT4t");

    var formdata = new FormData();
    formdata.append("price", houseListing.value.price);
    formdata.append("bedrooms", houseListing.value.bedrooms);
    formdata.append("bathrooms", houseListing.value.bathrooms);
    formdata.append("size", houseListing.value.size);
    formdata.append("streetName", houseListing.value.location.street);
    formdata.append("houseNumber", houseListing.value.location.houseNumber);
    formdata.append("zip", houseListing.value.location.zip);
    formdata.append("city", houseListing.value.location.city);
    formdata.append("constructionYear", houseListing.value.constructionYear);
    formdata.append("hasGarage", houseListing.value.hasGarage);
    formdata.append("description", houseListing.value.description);

    if (houseListing.value.location.houseNumberAddition) {
        formdata.append("numberAddition", houseListing.value.location.houseNumberAddition);
    }

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };
    if (isCreate.value) {
        createListing(requestOptions)
    } else {
        editListing(requestOptions)
    }


    const editListing = (requestOptions) => {


        fetch("https://api.intern.d-tt.nl/api/houses/" + houseListing.value.id, requestOptions)
            .then(response => response.text())
            .then(result => {
                window.history.go(-1);
                return false
            })
            .catch(error => console.log('error', error));
    }


    const createListing = (requestOptions) => {

        fetch("https://api.intern.d-tt.nl/api/houses", requestOptions)
            .then(response => response.text())
            .then(result => {
                window.history.go(-1);
                return false
            })
            .catch(error => console.log('error', error));
    }
}
//Calling the API to display the data and get it by ID

const getListingDetails = () => {

    fetch("https://api.intern.d-tt.nl/api/houses/" + useRoute().params.id
        , {

            method: "get",
            headers: {
                'X-Api-Key': 'rYIVmiv8HRaS2nsX_GxjOKP3ez6EFT4t',
            }
        })
        .then(response => response.json())
        .then(data => {

            houseListing.value = data[0];
        })

}




function setImage(event) {
    const file = event.target.files[0];
    if (file) {
        houseListing.value.image = URL.createObjectURL(file);
    }
}



if (useRoute().params.id) {
    getListingDetails()
} else {
    isCreate.value = true
}

const clearImage = () => {
    houseListing.value.image = null;

}

</script>


<template>
    <div class="background-image"></div>
    <div style="width: 100%; height: 100%;">

        <!--Property details -->
        <div v-if="houseListing.id || isCreate" class="container-form-field">
            <div class="title-create-new">
                <img class="back_button" src="../assets/ic_back_grey@3x.png"
                    onclick="window.history.go(-1); return false;">
                <div class="back_to_overview" onclick="window.history.go(-1); return false;">

                    <img src="../assets/ic_back_grey@3x.png">

                    <p>Back to detail page</p>
                </div>

                <h1 v-if="isCreate">Create new listing</h1>
                <h1 v-if="!isCreate">Edit listing</h1>

            </div>


            <div class="form-field">
                <label class="form-label" for="streetName">Street Name*</label>
                <input v-model="houseListing.location.street" type="text" id="streetName"
                    placeholder="Enter the street name" class="form-input" required>
            </div>
            <div class="form-row">
                <div class="form-field">
                    <label class="form-label" for="houseNumber">House Number*</label>
                    <input v-model="houseListing.location.houseNumber" type="text" id="houseNumber"
                        placeholder="Enter the house number" class="form-input" required>
                </div>
                <div class="form-field">
                    <label class="form-label" for="addition">Addition (optional)</label>
                    <input v-model="houseListing.location.houseNumberAddition" type="text" id="addition"
                        placeholder="e.g A" class="form-input" required>
                </div>
            </div>


            <div class="form-field">
                <label class="form-label" for="postalCode">Postal Code*</label>
                <input v-model="houseListing.location.zip" type="text" id="postalCode" placeholder="e.g 1000 AA"
                    class="form-input" required>
            </div>
            <div class="form-field">
                <label class="form-label" for="city">City*</label>
                <input v-model="houseListing.location.city" type="text" id="city" placeholder="e.g Utrecht"
                    class="form-input" required>
            </div>

            <!-- Upload pic -->

            <div class="form-field">
                <label class="form-label" for="uploadPicture">Upload Picture (PNG or JPG)*</label>
                <div class="uploadPicture">
                    <img v-if="houseListing.image" @click="clearImage" class="clear-picture"
                        src="../assets/ic_clear_white@3x.png">
                    <img v-if="houseListing.image" class="listing-image"
                        :src='houseListing.image ? houseListing.image : "../src/assets/img-placeholder.png"'>
                    <img v-if="!houseListing.image" class="listing-image-placeholder"
                        src="../assets/ic_plus_grey@3x.png">
                    <input type="file" id="uploadPicture" name="uploadPicture" @change="setImage">
                </div>
            </div>

            <!--Property details -->

            <div class="form-field">
                <label class="form-label" for="price">Price*</label>
                <input v-model=houseListing.price type="text" inputmode="numeric" id="price"
                    placeholder="e.g. € 500.000 " class="form-input" required>
            </div>
            <div class="form-row">
                <div class="form-field">
                    <label class="form-label" for="size">Size*</label>
                    <input v-model="houseListing.size" type="text" inputmode="numeric" id="size" placeholder="e.g. 60m2"
                        class="form-input" required>
                    <div class="form-field">
                        <label class="form-label" for="garage">Garage*</label>
                        <select v-model="houseListing.hasGarage" id="garage" class="form-input" required>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="form-row">
                <div class="form-field">
                    <label class="form-label" for="bedrooms">Bedrooms*</label>
                    <input v-model="houseListing.rooms.bedrooms" type="text" inputmode="numeric" id="bedrooms"
                        placeholder="Enter amount" class="form-input" required>
                </div>
                <div class="form-field">
                    <label class="form-label" for="bathrooms">Bathrooms*</label>
                    <input v-model="houseListing.rooms.bathrooms" type="text" inputmode="numeric" id="bathrooms"
                        placeholder="Enter amount" class="form-input" required>
                </div>
            </div>
            <div class="form-field">
                <label class="form-label" for="construction-date">Construction date*</label>
                <input v-model="houseListing.constructionYear" type="number" inputmode="numeric" id="construction_date"
                    placeholder="e.g. 1990" class="form-input" required>
            </div>
            <div class="form-field">
                <label class="form-label" for="description">Description*</label>
                <input v-model="houseListing.description" type="" id="description" placeholder="Enter description"
                    class="form-textarea" required>
            </div>

            <div class="form-field">
                <button class="submit-button" @click="createOrEdit"> POST</button>
            </div>
        </div>


    </div>


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
    z-index: 100;
    width: auto;
    height: 1rem;
    left: 0;
    cursor: pointer;
}

.back_to_overview {
    display: none;
}

//---------form styles
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
    border: dashed 2px var(--color-tertiarydarker);
    display: flex;
    justify-content: center;
    border-radius: 5px;
    position: relative;
}

.uploadPicture input[type='file'] {
    opacity: 0;
    z-index: 100;
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
    z-index: 101;
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
