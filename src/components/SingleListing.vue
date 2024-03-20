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
        <div class="textInfo">
            <h1>Name of street and Number</h1>
            <p> $5000</p>
            <p>1001 Amsterdam</p>
        </div>

        <div>
            <div class="iconsInfo" style="width: 20px; height: 20px;">
                <img src="./icons/bath.png" alt="bathroom" />
                <p>1</p>
            </div>
            <div>
                <img src="./icons/bed.png" alt="bathroom" />
                <p>1</p>
            </div>
            <div>
                <img src="./icons/size.png" alt="bathroom" />
                <p>1</p>
            </div>
        </div>

        <div class="iconsActions" style="width: 15px; height: 20px">
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
    gap: 0.5rem;
    border-radius: 5px;
    margin-bottom: 1rem;

}


.image_listing {
    border-radius: 0.8rem;
    padding: 1rem;
    height: 60px;
    width: 60px;

}

.textInfo {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    justify-content: space-evenly;
}


.iconsInfo .iconsActions {
    width: 5px;
    height: 5px;
}
</style>
