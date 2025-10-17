<script setup>
import { ref } from 'vue';

let likes = ref(0);
let dislikes = ref(0);

const addLike = ()=>{
    likes.value +=1
};
const addDislike = ()=>{
    dislikes.value +=1
};

</script>

<template>
    <div>
        <div class="post">
            <div><strong>Название:</strong>Пост о JavaScript</div>
            <div><strong>Описание:</strong>Описание JavaScript</div>
        </div>
    </div>
</template>

<style scoped>

</style>
