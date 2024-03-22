<script setup>

</script>




<template>
    <div class="container_detail">
        <div class="image_detail">

            <div>
                <h1>
                    Name of the house
                </h1>
                <div class="property_location">
                    <img src="../assets/ic_location@3x.png" class="iconsListing">
                    <p>Location</p>
                </div>
            </div>
            <div class="property_data">


                <div class="property_price">
                    <img src="../assets/ic_price@3x.png" class="iconsListing">
                    <p>price of property</p>
                </div>

                <div class="property_size">
                    <img src="../components/icons/size.png" class="iconsListing">
                    <p>size of property</p>
                </div>

                <div class="property_built">
                    <img src="../assets/ic_construction_date@3x.png" class="iconsListing">
                    <p>Built of property</p>
                </div>


                <div class="property_details">
                    <div>
                        <img class="iconsListing" src="./icons/bed.png" alt="bedroom" />
                        <p> {{ }}</p>
                    </div>

                    <img class="iconsListing" src="./icons/bath.png" alt="bathroom" />
                    <p>{{ }}</p>

                    <div v-if="houseListing.size">
                        <img class="iconsListing" src="../assets/ic_garage@3x.png" alt="garage" />
                        <p> {{ }}</p>
                    </div>

                </div>

            </div>
        </div>

    </div>
</template>


<style lang="scss" scoped>
.container_detail {
    display: flex;
}

.image_detail {
    background-image: url(../assets/img-placeholder.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position-x: center;
    width: 400px;
    height: 400px;
    resize: both;
}
</style>