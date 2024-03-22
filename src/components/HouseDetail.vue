<script setup>
import { usePropertyDetailStore } from '@/stores/PropertyStore';
import { getStreet, getZipAnCity, getPriceTag } from '@/utils/utils'

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

            console.log(data[0])

        })

}
getListingDetails("")



</script>




<template>

    <div v-if="houseListing.id" class="container_detail">

        <img class="back_button" src="../assets/ic_back_white@3x.png" onclick="window.history.go(-1); return false;">
        <div class="back_to_overview" onclick="window.history.go(-1); return false;">
            <img src="../assets/ic_back_grey@3x.png">
            <h2>Back to overview</h2>
        </div>

        <div v-if="!houseListing.madeByMe" class="iconsActionListing">
            <img src="../components/icons/ic_edit_white@3x.png" />
            <img src="../components/icons/ic_delete_white@3x.png" />
        </div>
        <img class="image_detail" src="../assets/img-placeholder.png">


        <!-- Card info of the property -->
        <div class="card_detail">
            <div v-if="!houseListing.madeByMe" class="iconsActionListing_Desk">
                <img src="../components/icons/ic_edit@3x.png" />
                <img src="../components/icons/ic_delete@3x.png" />
            </div>
            <div>
                <h1>
                    {{ getStreet(houseListing.location) }} </h1>
            </div>
            <div class="property_data">

                <div>
                    <img src="../assets/ic_location@3x.png" class="iconsListing">
                    <p>{{ getZipAnCity(houseListing.location) }}</p>
                </div>
                <div>
                    <div>
                        <img src="../assets/ic_price@3x.png" class="iconsListing">
                        <p>{{ getPriceTag(houseListing.price) }}</p>
                    </div>

                    <div>
                        <img src="../components/icons/size.png" class="iconsListing">
                        <p>{{ houseListing.size }} m2</p>
                    </div>

                    <div>
                        <img src="../assets/ic_construction_date@3x.png" class="iconsListing">
                        <p>Built in {{ houseListing.constructionYear }}</p>
                    </div>
                </div>

                <div>
                    <div>
                        <img class="iconsListing" src="./icons/bed.png" alt="bedroom" />
                        <p>{{ houseListing.rooms.bedrooms }}</p>
                    </div>
                    <div>
                        <img class="iconsListing" src="./icons/bath.png" alt="bathroom" />
                        <p>{{ houseListing.rooms.bathrooms }}</p>
                    </div>
                    <div>
                        <img class="iconsListing" src="../assets/ic_garage@3x.png" alt="garage" />
                        <p>{{ houseListing.hasGarage ? "Yes" : 'No' }}</p>
                    </div>
                </div>

                <p>
                    {{ houseListing.description }}
                </p>
            </div>
        </div>

    </div>
</template>


<style lang="scss" scoped>
.card_detail {
    padding: 2rem;
    position: relative;
    top: -4rem;
    background-color: var(--color-backgroundwhite);
    width: 100%;
    border-radius: 15px 15px 0 0;
    box-sizing: border-box;
}

.iconsActionListing {
    position: absolute;
    z-index: 100;
    padding: 3rem 2rem;
}

.iconsActionListing_Desk {
    display: none;
}

.iconsActionListing img {
    width: auto;
    height: 1rem;
}


.container_detail h1 {
    padding: 0.1rem;
}

.back_button {
    position: absolute;
    padding: 3rem 2rem;
    z-index: 100;
    width: auto;
    height: 1rem;
}

.back_to_overview {
    display: none;
}

.image_detail {
    background-size: cover;
    width: 100%;
    height: auto;
    border: 1px solid;
    position: relative;
    border: none;
    resize: both;
}


.property_data {

    gap: 0.7rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}

.property_data div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5em;
}

.property_details div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5em;
}

@media (min-width: 800px) {
    .container_detail {
        padding: 0 10%;
    }

    .card_detail {

        top: 0;
        border-radius: 0;
    }

    .iconsActionListing {
        display: none;
    }

    .back_button {
        display: none;
    }


    .back_to_overview {
        display: flex;
        gap: 1rem;
        padding: 1rem 0;
        color: var(--color-primarytext);
        cursor: pointer;

    }

    .back_to_overview img {
        width: 1.8rem;
        height: 1.8rem;

    }

    .iconsActionListing_Desk {
        display: flex;
        gap: 1.5rem;
        position: absolute;
        z-index: 100;
        right: 0;
        padding: 0 2rem;

    }

    .iconsActionListing_Desk img {
        width: 1.5rem;
        height: auto;
        cursor: pointer;

    }
}
</style>