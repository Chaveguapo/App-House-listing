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

</script>



<template>
    <div class="containerInfoListing">
        <!-- <h1>{{ houseListing.streetName }}</h1> -->
        <div>
            <img class="image_listing" src="../assets/img-placeholder.png" />
        </div>


        <div class="informationListing">
            <h1>Name of street and Number</h1>
            <h2>$50.00</h2>
            <p>1001 Amsterdam</p>
            <div class="wrapperIcons">
                <div>
                    <img class="iconsListing" src="./icons/bath.png" alt="bathroom" />
                    <p>1</p>
                </div>
                <div>
                    <img class="iconsListing" src="./icons/bed.png" alt="bathroom" />
                    <p>1</p>
                </div>
                <div>
                    <img class="iconsListing" src="./icons/size.png" alt="bathroom" />
                    <p>1</p>
                </div>
            </div>
        </div>


        <div class="iconsActionListing">
            <img src="../components/icons/ic_delete@3x.png" />
            <img src="../components/icons/ic_edit@3x.png" />
        </div>
    </div>
</template>


<style lang="scss" scoped>
.containerInfoListing {
    background-color: var(--color-backgroundwhite);
    border: 2px red solid;
    width: 90vw;
    height: 7rem;
    display: flex;
    flex-direction: row;
    border-radius: 5px;
    margin-bottom: 1rem;

}

.informationListing {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2px;
    align-items: center;
    justify-content: space-between;
    letter-spacing: -0.03rem;
}




.image_listing {
    border-radius: 0.8rem;
    padding: 1rem;
    height: 60px;
    width: 60px;

}

.wrapperIcons {
    gap: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.iconsListing {
    width: 15px;
    height: 15px;
}


.iconsActionListing img {
    width: 15px;
    height: 15px;

}
</style>
