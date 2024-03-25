<script setup>
import { usePropertyDetailStore } from '@/stores/PropertyStore';
import { getStreet, getZipAnCity, getPriceTag } from '@/utils/utils'



//Store the ID of the listing

const propertyStore = usePropertyDetailStore();


const props = defineProps({
    houseListing: {
        type: Object,
        required: true,
    },
    index: {
        type: Number,
        required: true,
    }
});





//This function save the ID into the store
function setIdPropertyIntoStore() {
    propertyStore.setCurrentPropertyId(props.houseListing.id)


}

</script>



<template>


    <RouterLink style="text-decoration: none;" to="/house-detail">
        <div class="container_listing" @click="setIdPropertyIntoStore">
            <!-- <h1>{{ houseListing }}</h1> -->

            <div class="box_data-listing">

                <img class="image_listing" src="../assets/img-placeholder.png" />


                <div class="details_info-listing">
                    <div class="wrapper_separator-data">
                        <h1>{{ getStreet(houseListing.location) }}</h1>
                        <h2>{{ '€ ' + getPriceTag(houseListing.price) }}</h2>
                        <p>{{ getZipAnCity(houseListing.location) }}</p>
                    </div>
                    <div class="wrapperIcons">
                        <div>
                            <img class="iconsListing" src="./icons/bath.png" alt="bathroom" />
                            <p>{{ houseListing.rooms.bathrooms }}</p>
                        </div>
                        <div>
                            <img class="iconsListing" src="./icons/bed.png" alt="bedroom" />
                            <p> {{ houseListing.rooms.bedrooms }}</p>
                        </div>
                        <div v-if="houseListing.size">
                            <img class="iconsListing" src="./icons/size.png" alt="size" />
                            <p> {{ houseListing.size + " m2" }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="!houseListing.madeByMe" class="iconsActionListing">
                <RouterLink style="text-decoration: none;" to='/edit-listing'>
                    <img src="../components/icons/ic_edit@3x.png" />
                </RouterLink>
                <img src="../components/icons/ic_delete@3x.png" />
            </div>
        </div>
    </RouterLink>
</template>


<style lang="scss" scoped>
.container_listing {
    background-color: var(--color-backgroundwhite);
    width: 100%;
    height: 8rem;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    border-radius: 5px;
    padding: 1rem;
    box-sizing: border-box;
    cursor: pointer;

}


.wrapper_separator-data p {
    color: var(--color-tertiarydarker);
}

.wrapper_separator-data {
    display: flex;
    flex-direction: column;
}

.box_data-listing {
    display: flex;
    gap: 1rem;

}

.details_info-listing {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    letter-spacing: -0.03rem;


}


.image_listing {
    object-fit: cover;
    height: auto;
    width: 6rem;
    border-radius: 5px;

}

.wrapperIcons {
    gap: 1rem;
    display: flex;
    flex-direction: row;
}

.wrapperIcons div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5em;
}


.iconsActionListing {
    display: flex;
    gap: 0.5rem;
    position: relative;
    right: 0;
}


@media (min-width:800px) {
    .container_listing {
        height: 12rem;
    }

    .image_listing {
        width: 10rem;

    }
}
</style>
@/utils/utils