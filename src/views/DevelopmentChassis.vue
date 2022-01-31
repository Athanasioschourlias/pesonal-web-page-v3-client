<template>
  <div class="mx-2 lg:mx-24 flex flex-col min-h-90v h-auto">
    <!--Category's-->
    <articles-category-box category-title="Chassis and Structures"/>


  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import articles_category_box from "../components/articles_category_box.vue"
import development_articles from "../components/development_articles.vue"

export default defineComponent({
	name: "DevelopmentChassis",
	components:{
		"articles-category-box": articles_category_box,
	}
})
</script>

<style scoped>

</style>