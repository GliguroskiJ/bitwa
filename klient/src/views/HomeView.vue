<script>
import Article from "@/components/Article.vue";
import Preview from "@/components/Preview.vue";

export default {
    components: {Preview, Article},
    data() {
        return {
            articles: []
        }
    },
    async created() {
        const res = await fetch('http://localhost:3000/articles', {method:'GET'});
        console.log(res);
        this.articles = await res.json();
    }
}
</script>

<template>
    <div class="row">
        <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2  pb-3 pt-3" v-for="article in articles">
            <Preview :title="article.title" :date="article.date" :text="article.text" :image="article.image"></Preview>
        </div>
    </div>
</template>
