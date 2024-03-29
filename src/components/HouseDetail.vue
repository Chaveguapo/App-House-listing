<script setup>
import { getStreet, getZipAnCity, getPriceTag } from '@/utils/utils'
import { useRoute } from 'vue-router';
import { usePropertyDetailStore } from '@/stores/PropertyStore';

const propertyStore = usePropertyDetailStore();

propertyStore.getListingDetails(useRoute().params.id)

</script>


<template>

    <div v-if="propertyStore.currentHouseListing.id" class="container_detail">

        <img class="back_button" src="../assets/ic_back_white@3x.png" @click="this.$router.back()">

        <div class="back_to_overview" @click="this.$router.back()">

            <img src="../assets/ic_back_grey@3x.png">

            <h2>Back to overview</h2>
        </div>

        <div v-if="propertyStore.currentHouseListing.madeByMe" class="icons-action-listing">
            <RouterLink style="text-decoration: none;"
                :to="{ path: '/edit-listing/' + propertyStore.currentHouseListing.id }">
                <img src="../components/icons/ic_edit_white@3x.png" />
            </RouterLink>
            <img src="../components/icons/ic_delete_white@3x.png" />
        </div>
        <img class="image_detail"
            :src='propertyStore.currentHouseListing.image ? propertyStore.currentHouseListing.image : "../src/assets/img-placeholder.png"'>


        <!-- Card info of the property -->
        <div class="card_detail">
            <div v-if="propertyStore.currentHouseListing.madeByMe" class="icons-action-listing-desk">
                <RouterLink style="text-decoration: none;"
                    :to="{ path: '/edit-listing/' + propertyStore.currentHouseListing.id }">
                    <img src="../components/icons/ic_edit@3x.png" />
                </RouterLink>

                <img src="../components/icons/ic_delete@3x.png" />
            </div>
            <div>
                <h1>
                    {{ getStreet(propertyStore.currentHouseListing.location) }} </h1>
            </div>
            <div class="property_data">

                <div>
                    <img src="../assets/ic_location@3x.png" class="icon-listing">
                    <p>{{ getZipAnCity(propertyStore.currentHouseListing.location) }}</p>
                </div>
                <div>
                    <div>
                        <img src="../assets/ic_price@3x.png" class="icon-listing">
                        <p>{{ getPriceTag(propertyStore.currentHouseListing.price) }}</p>
                    </div>

                    <div>
                        <img src="../components/icons/size.png" class="icon-listing">
                        <p>{{ propertyStore.currentHouseListing.size }} m2</p>
                    </div>

                    <div>
                        <img src="../assets/ic_construction_date@3x.png" class="icon-listing">
                        <p>Built in {{ propertyStore.currentHouseListing.constructionYear }}</p>
                    </div>
                </div>

                <div>
                    <div>
                        <img class="icon-listing" src="./icons/bed.png" alt="bedroom" />
                        <p>{{ propertyStore.currentHouseListing.rooms.bedrooms }}</p>
                    </div>
                    <div>
                        <img class="icon-listing" src="./icons/bath.png" alt="bathroom" />
                        <p>{{ propertyStore.currentHouseListing.rooms.bathrooms }}</p>
                    </div>
                    <div>
                        <img class="icon-listing" src="../assets/ic_garage@3x.png" alt="garage" />
                        <p>{{ propertyStore.currentHouseListing.hasGarage ? "Yes" : 'No' }}</p>
                    </div>
                </div>

                <p>
                    {{ propertyStore.currentHouseListing.description }}
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

.icons-action-listing {
    position: absolute;
    z-index: 3;
    padding: 3rem 2rem;
}

.icons-action-listing-desk {
    display: none;
}

.icons-action-listing img {
    width: auto;
    height: 1rem;
}

.container_detail {
    position: relative;
}

.container_detail h1 {
    padding: 0.1rem;
}

.back_button {
    position: absolute;
    padding: 3rem 2rem;
    z-index: 3;
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

    .icons-action-listing {
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

    .icons-action-listing-desk {
        display: flex;
        gap: 1.5rem;
        position: absolute;
        right: 0;
        padding: 0 2rem;

    }

    .icons-action-listing-desk img {
        width: 1.5rem;
        height: auto;
        cursor: pointer;

    }
}
</style>