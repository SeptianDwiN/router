<template>
    <center>
        <div v-if="state.length == 0">
        <h2>Produk Tidak Ada</h2></div>
        <div v-else> 
    <h1>Daftar Produk {{ NamaKategori }}</h1>
    <div :class="img" class="flex-container">
        <div v-for="produk in state" :key="produk.id" class="card">
            <img :src="getImgSrc (produk.img)" alt="Category Image" />
          <router-link class="container" :to="{ name: 'Detail', params: { id_produk: produk.id}}">
            <h4>{{ produk.nama }}</h4>           
        </router-link>
        </div>
    </div>
    </div>
</center>
</template>
<script> 
import { computed } from 'vue';
import { produk } from '../assets/Produk';
import { kategori } from '../assets/Kategori';

export default {
    props : [
        "id_kategori"
    ],
    setup(props){
        const detail = kategori["kategori"].find(function(item)
        {
            return item.id == props.id_kategori
        });
        
        const state = produk["produk"].filter(function(a){
            return detail.id == a.id_kategori
        });
        
        const NamaKategori = computed(() => {
            const foundKategori = kategori.kategori.find((kat) => kat.id == props.id_kategori)
                return foundKategori ? foundKategori.nama : ""
        });
        const getImgSrc = (imgFileName) => {
                return '../src/assets/img/' + imgFileName + '';
            };
        return {
            detail,
            state,
            NamaKategori,
            getImgSrc,
        }
    }

}
</script>
<style scoped>
.flex-container {
    display: flex;
}
.card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    margin: 10px;
    min-width: 200px;
    cursor: pointer;
}

.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0,2);
}

.container {
    padding: 2px 16px;
}
img {
    height: 150px;
}
</style>