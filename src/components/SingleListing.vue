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







</script>



<template>


    <div class="container_listing">
        <RouterLink style="text-decoration: none;" :to="{ path: '/house-detail/' + houseListing.id }">
            <!-- <h1>{{ houseListing }}</h1> -->

            <div class="box_data-listing">

                <img class="image_listing"
                    :src='houseListing.image ? houseListing.image : "../src/assets/img-placeholder.png"' />


                <div class="details_info-listing">
                    <div class="wrapper_separator-data">
                        <h1>{{ getStreet(houseListing.location) }}</h1>
                        <h2>{{ '€ ' + getPriceTag(houseListing.price) }}</h2>
                        <p>{{ getZipAnCity(houseListing.location) }}</p>
                    </div>
                    <div class="wrapper-icons">
                        <div>
                            <img class="icon-listing" src="./icons/bath.png" alt="bathroom" />
                            <p>{{ houseListing.rooms.bathrooms }}</p>
                        </div>
                        <div>
                            <img class="icon-listing" src="./icons/bed.png" alt="bedroom" />
                            <p> {{ houseListing.rooms.bedrooms }}</p>
                        </div>
                        <div v-if="houseListing.size">
                            <img class="icon-listing" src="./icons/size.png" alt="size" />
                            <p> {{ houseListing.size + " m2" }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </RouterLink>

        <div v-if="houseListing.madeByMe" class="icons-action-listing">
            <RouterLink style="text-decoration: none;" :to="{ path: '/edit-listing/' + houseListing.id }">
                <img src=" ../components/icons/ic_edit@3x.png" />
            </RouterLink>

            <img src="../components/icons/ic_delete@3x.png" @click="propertyStore.showDeleteModal(houseListing.id)" />
        </div>
    </div>
</template>


<style lang="scss" scoped>
.container_listing {
    background-color: var(--color-backgroundwhite);
    width: 100%;
    height: 8rem;
    position: relative;
    justify-content: space-between;
    flex-direction: row;
    border-radius: 5px;
    padding: 1rem;
    box-sizing: border-box;
    cursor: pointer;
}


.wrapper_separator-data {
    display: flex;
    flex-direction: column;
}

.wrapper_separator-data h1 {
    color: var(--color-primarytext);
}

.wrapper_separator-data p {
    color: var(--color-tertiarydarker);
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

.wrapper-icons {
    gap: 1rem;
    display: flex;
    flex-direction: row;
}

.wrapper-icons div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5em;
}


.icons-action-listing {
    display: flex;
    gap: 0.5rem;
    position: absolute;
    right: 1rem;
    top: 1rem
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