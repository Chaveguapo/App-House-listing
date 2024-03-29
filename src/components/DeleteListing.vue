<script setup>
import { usePropertyDetailStore } from '@/stores/PropertyStore';
import { ref } from 'vue';



const propertyStore = usePropertyDetailStore();


</script>



<template>
    <div v-if="propertyStore.displayModal" class="modal-wrapper">
        <div class="modal">
            <h2>Delete listing</h2>
            <p>Are you sure you want to delete this listing? This action cannot be undone.</p>
            <button @click="hideDeleteModal">YES, DELETE</button>
            <button @click="hideDeleteModal">GO BACK</button>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.modal-wrapper {
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 100;
}
</style>
