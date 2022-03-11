<template>
    <div class="row">
        <div class="col-md-6 offset-md-3 p-5 bg-light">
            <h3>{{ article.title }}{{ article.id }}</h3>
            <h6>{{ formattedDate }}</h6>
            <p v-html="article.text"></p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Article",
    data() {
        return {
            article: {
                id: null,
                title: null,
                date: null,
                text: null,
                image: null
            }
        }
    },
    computed: {
        formattedDate() {
            return this.article.date ? this.article.date.toLocaleDateString(): '';
        }
    },
    async mounted() {
        this.article = await this.getData();
    },
    methods: {
        async getData() {
            return {
                image: 'https://picsum.photos/seed/picsum/360/240',
                title: 'Jak jsem sel na houby',
                date: new Date(),
                text: `
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam egestas wisi a erat. Integer tempor. Pellentesque ipsum. Integer malesuada. Vestibulum fermentum tortor id mi. Aenean placerat. Pellentesque arcu. Phasellus rhoncus. In dapibus augue non sapien. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna.</p>

<p>Morbi leo mi, nonummy eget tristique non, rhoncus non leo. In enim a arcu imperdiet malesuada. Morbi scelerisque luctus velit. Maecenas aliquet accumsan leo. Etiam egestas wisi a erat. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed, est. Morbi leo mi, nonummy eget tristique non, rhoncus non leo. Integer malesuada. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Etiam dictum tincidunt diam. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Etiam commodo dui eget wisi. Aliquam erat volutpat.</p>

<p>Curabitur sagittis hendrerit ante. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Pellentesque sapien. Donec quis nibh at felis congue commodo. Duis risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque ipsum. Mauris dictum facilisis augue. Etiam quis quam. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Nulla quis diam.</p>

<p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Praesent id justo in neque elementum ultrices. Phasellus faucibus molestie nisl. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Maecenas aliquet accumsan leo. Duis pulvinar. Fusce nibh. Aenean placerat. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Cras elementum. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nullam sapien sem, ornare ac, nonummy non, lobortis a enim. Etiam commodo dui eget wisi. Integer malesuada. Vestibulum fermentum tortor id mi. Quisque porta. In convallis. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed, est. Praesent vitae arcu tempor neque lacinia pretium.</p>

<p>Maecenas sollicitudin. Maecenas lorem. Praesent vitae arcu tempor neque lacinia pretium. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Morbi leo mi, nonummy eget tristique non, rhoncus non leo. Integer malesuada. Etiam egestas wisi a erat. Nulla quis diam. Mauris dictum facilisis augue. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Pellentesque ipsum. Phasellus et lorem id felis nonummy placerat. Fusce nibh. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Pellentesque arcu.</p>
                `
            }
        }
    }
}
</script>

<style scoped>

</style>
