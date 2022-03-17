<template>
    <div class="row">
        <div class="col-8 offset-2">
            <NewArticle></NewArticle>
        </div>
    </div>
</template>

<script>
import NewArticle from "@/components/NewArticle.vue";
export default {
    name: "NewArticleView",
    components: {NewArticle}
}
</script>

<style scoped>

</style>
