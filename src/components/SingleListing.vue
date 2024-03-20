<script setup>
// eslint-disable-next-line no-unused-vars
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
console.log(props.houseListing)

const getStreet = () => {
    const location = props.houseListing.location;

    let streetNumber = " ";

    if (location.street) {
        streetNumber += location.street + " ";
    }
    if (location.houseNumber) {
        streetNumber += location.houseNumber + " ";
    }
    if (location.houseNumberAddition) {
        streetNumber += location.houseNumberAddition + " ";
    }

    return streetNumber;
}

const getZipAnCity = () => {
    const location = props.houseListing.location;
    let zipAndCity = " ";

    if (location.zip) {
        zipAndCity += location.zip + " ";
    }

    if (location.city) {
        zipAndCity += location.city + " ";
    }

    return zipAndCity
}

const getPriceTag = () => {
    let val = (props.houseListing.price / 1).toFixed(2).replace('.', ',')
    return "€ " + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}



</script>



<template>
    <div class="containerInfoListing">
        <!-- <h1>{{ houseListing }}</h1> -->

        <div class="boxDataListing">

            <img class="image_listing" src="../assets/img-placeholder.png" />


            <div class="informationListing">
                <div class="boxy">
                    <h1>{{ getStreet() }}</h1>
                    <h2>{{ getPriceTag() }}</h2>
                    <p>{{ getZipAnCity() }}</p>
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

        <div class="iconsActionListing">
            <img src="../components/icons/ic_edit@3x.png" />
            <img src="../components/icons/ic_delete@3x.png" />
        </div>
    </div>
</template>


<style lang="scss" scoped>
.containerInfoListing {
    background-color: var(--color-backgroundwhite);
    width: 100%;
    height: 8rem;
    min-width: 320px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    border-radius: 5px;
    padding: 1rem;
    box-sizing: border-box;

}

.boxy {
    display: flex;
    flex-direction: column;
}

.boxDataListing {
    display: flex;
    gap: 1rem;

}

.informationListing {
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


.iconsListing {
    width: 13px;
    height: 13px;
}


.iconsActionListing img {
    width: 13px;
    height: 13px;
}

.iconsActionListing {
    display: flex;
    gap: 0.5rem;
    position: relative;
    right: 0;
}


@media (min-width:800px) {


    .containerInfoListing {
        height: 12rem;
    }

    .image_listing {
        width: 10rem;

    }

    .iconsListing {
        width: 20px;
        height: 20px;
    }


    .iconsActionListing img {
        width: 20px;
        height: 20px;
    }
}
</style>
