<script setup>
import SingleListing from './SingleListing.vue';
import { ref } from 'vue';




const listingsArray = ref([]);

const searchValue = ref('');



const getHouselistings = (inputValue) => {
  searchValue.value = inputValue

  fetch("https://api.intern.d-tt.nl/api/houses"
    , {
      method: "get",
      headers: {
        'X-Api-Key': 'rYIVmiv8HRaS2nsX_GxjOKP3ez6EFT4t',
      }
    })
    .then(response => response.json())
    .then(data => {
      listingsArray.value = data.filter((listing) => {
        return String(listing.id).includes(inputValue)
          || String(listing.price).includes(inputValue)
          || String(listing.location.city).includes(inputValue)
          || String(listing.location.zip).includes(inputValue)
          || String(listing.size).includes(inputValue)
      })

    })


}

getHouselistings("");

let currentOrder = "";


const sort_list = (orderBy) => {
  currentOrder = orderBy;
  switch (orderBy) {
    case 'priceAsc':
      listingsArray.value.sort(function (a, b) {
        return a.price - b.price
      })
      break;
    case 'priceDesc':
      listingsArray.value.sort(function (a, b) {
        return b.price - a.price
      })
      break;
    case 'sizeAsc':
      listingsArray.value.sort(function (a, b) {
        return b.size - a.size
      })
      break;
    case 'sizeDesc':
      listingsArray.value.sort(function (a, b) {
        return a.size - b.size
      })
      break;
  }


}



</script>



<template>
  <div class="container_houses-listings">
    <section class="search_container">
      <img class="add_listing" src="../assets/Add.png">
      <h1>Houses</h1>


      <div class="search_header">
        <div class="search_bar">
          <img class="search_icon" src="../assets/ic_search@3x.png">
          <input class="search_input" type="search" @input="getHouselistings($event.target.value)"
            placeholder="Search for a house">
        </div>
        <div>
        </div>
        <div class="sort_options">
          <button @click="sort_list(currentOrder == 'priceAsc' ? 'priceDesc' : 'priceAsc')"
            class="btn left">Price</button>
          <button @click="sort_list(currentOrder == 'sizeAsc' ? 'sizeDesc' : 'sizeAsc')" class="btn right">Size</button>
        </div>
      </div>
    </section>




    <section class="houses_container" v-if="listingsArray.length > 0">
      <div class="listings">
        <h2 v-if="searchValue">{{ listingsArray.length }} results found</h2>
        <SingleListing v-for="(listing, index) in listingsArray" :key="index" :houseListing="listing" :index="index" />
        <div>
        </div>
      </div>
    </section>


    <section class="house_search-empty" v-if="listingsArray.length <= 0">
      <img src="../assets/img_empty_houses@3x.png">
      <h2>No results found.<br>Please try another keyword.</h2>
    </section>
  </div>

</template>


<style lang="scss" scoped>
//Mobile Styles
//Main container for houses listings

.container_houses-listings {
  padding: 0 10%;

}

//-----Search Styles


.search_header {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}


.search_container {
  padding: 2rem 0;
  text-align: center;
}

.search_container h1 {
  padding-bottom: 1rem;
}

.add_listing {
  position: relative;
  float: right;
  width: 20px;
  height: 20px;
  right: 0;
}

.search_input {
  background-color: transparent;
  border: none;
  width: 95%;

  &:focus {
    background: transparent;
    border: none;
    transition: 0.35s ease;
    color: var(--color-secondarytext);
    outline: none;
  }

}

input[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
  height: 1.5em;
  width: 1.5em;
  background: url(../assets/ic_clear@3x.png) no-repeat 50% 50%;
  background-size: contain;
}

.search_bar {
  display: flex;
  width: 100%;
  gap: 0.5rem;
  justify-content: flex-start;
  padding: 0.5rem 0;
  align-self: center;
  background-color: var(--color-tertiary);
  border-radius: 5px;
  border: none;
  box-sizing: border-box;

}

.search_icon {
  padding-left: 10px;
  position: relative;
  float: left;
  top: 0;
  width: 18px;
  height: 18%;
}

.clear-search_icon {
  display: none;
  width: 18px;
  height: 18px;
  cursor: pointer;
}


.sort_options button {
  width: 50%;
  height: 2rem;
  border: none;
  background-color: var(--color-tertiarydarker);
  color: var(--color-backgroundwhite);
  cursor: pointer;

}

.sort_options button:focus {
  background-color: var(--color-primary);
}

.left {
  border-radius: 5px 0 0 5px;
}

.right {
  border-radius: 0 5px 5px 0;
}

//-----Houses listings Styles


.houses_container {

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}

.listings {

  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

}

.houses_container header {
  display: flex;

}

.houses_container img {
  height: 15px;
  width: 15px;
}


//----Section of empty search
.house_search-empty {
  display: flex;
  flex-direction: column;
  text-align: center
}

.house_search-empty img {
  align-self: center;
  width: 12rem;
  height: auto;
}

.house_search-empty h2 {
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 12px;
}

//----Desk styles
@media (min-width: 800px) {


  .house_search-empty h2 {
    font-size: 14px;
  }

  .house_search-empty img {
    width: 15rem;

  }


  .sort_options button {
    width: 10rem;
    height: 2rem;
  }

  .search_header {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .search_bar {
    width: 40%;
  }
}
</style>@/stores/PropertyStore