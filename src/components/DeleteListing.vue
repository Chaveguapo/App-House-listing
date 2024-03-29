<script setup>
import { usePropertyDetailStore } from '@/stores/PropertyStore';

const propertyStore = usePropertyDetailStore();

</script>


<template>
    <div v-if="propertyStore.displayModal" class="modal-wrapper" @click="propertyStore.hideDeleteModal">
        <div class="modal">
            <h1>Delete listing</h1>
            <p>Are you sure you want to delete this listing? This action cannot be undone.</p>
            <button @click="propertyStore.deleteListing(propertyStore.currentListingId)">YES,
                DELETE</button>
            <button style="background-color: var(--color-secondary);" @click="propertyStore.hideDeleteModal">GO
                BACK</button>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.modal-wrapper {
    z-index: 100;
    padding: 1rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
}

.modal {
    background-color: white;
    padding: 4rem;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.modal p {
    padding-bottom: 1rem;
}

.modal button {
    width: 70%;
    padding: 0.5rem;
    border: none;
    border-radius: 0.2rem;
    color: var(--color-backgroundwhite);
    background-color: var(--color-primary);
    font-family: var(--ff-primary);
    font-weight: 600;
}

@media(min-width: 800px) {
    .modal {
        width: 40%;
    }
}
</style>
