<script>
import Article from "@/components/Article.vue";
import Preview from "@/components/Preview.vue";

export default {
    components: {Preview, Article},
    data() {
        return {
            articles: [
                {
                    id:1,
                    image: 'https://img.assets-finance-media.cz//data/newsimg/new/auto-111.jpg',
                    title: "Ceny benzinu a nafty hrozivě rostou! LITR ZA 50 KORUN?!",
                    date: new Date(),
                    text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam egestas wisi a erat.
Integer tempor. Pellentesque ipsum. Integer malesuada. Vestibulum fermentum tortor id mi. Aenean placerat.
Pellentesque arcu. Phasellus rhoncus.
`
                },
                {
                    id:2,
                    image: 'https://1884403144.rsc.cdn77.org/foto/monika-maresova-svatba/MHgwL3NtYXJ0L3RoYg/18-new_article-5557381.jpg?v=0&st=uvqmdBcOJ874iip2gYcmj0PlY1yYcQ1FPdPkvs_fvC0&ts=1600812000&e=0',
                    title: "Otazníky kolem potomka Marešových: Vrchní sestra promluvila!",
                    date: new Date(),
                    text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam egestas wisi a erat.
Integer tempor. Pellentesque ipsum. Integer malesuada. Vestibulum fermentum tortor id mi. Aenean placerat.
Pellentesque arcu. Phasellus rhoncus.
`
                },
                {
                    id:3,
                    image: 'https://1884403144.rsc.cdn77.org/foto/kreml-rusko-putin-matvijenkova-naryskin/NjkweDM2NS9jZW50ZXIvdG9wL2ZpbHRlcnM6cXVhbGl0eSg4NSk6bm9fdXBzY2FsZSgpL2ltZw/7536858.jpg?v=0&st=8bWbqSjZr4RDMtreFIpOxzLoeTiJleFViaYpwDDdurw&ts=1600812000&e=0',
                    title: "Ruská odveta za sankce: Zákaz vývozu od obilí po vagony. A znárodňování majetků firem!",
                    date: new Date(),
                    text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam egestas wisi a erat.
Integer tempor. Pellentesque ipsum. Integer malesuada. Vestibulum fermentum tortor id mi. Aenean placerat.
Pellentesque arcu. Phasellus rhoncus.
`
                },
            ]
        }
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
