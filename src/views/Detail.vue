<template> 
<br>
<br>
<center>
    <div v-if="detail == undefined">404 NOT FOUND !!!</div>
    <div v-else>
        <img :src="getImgSrc (detail.img)" alt="Category Image" />
    <h1>Detail {{ detail.nama }}</h1>
    <h4>Deskripsi :</h4>
    <h4>{{ detail.Deskripsi }}</h4>
    <h4>Harga : {{ detail.harga }}</h4>
    </div>                                                                                                                                                                                                                                                                                                      .
</center>
</template>
<script>
import { produk } from '@/assets/Produk';

export default {
    props: [
        "id_produk"
    ],
    setup(props)
    {
        const detail = produk["produk"].find(function(item) {
            return item.id == props.id_produk;
        });
        const getImgSrc = (imgFileName) => {
                return '../src/assets/img/' + imgFileName + '';
            };
        return{
            detail,
            getImgSrc
        }
    }
}
</script>