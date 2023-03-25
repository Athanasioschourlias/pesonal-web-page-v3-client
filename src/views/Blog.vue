<template>
  <v-container fluid class="min-h-80v pt-4 flex flex-col justify-start align-center">
    <section class="w-full h-52 flex items-center overflow-hidden justify-center">
      <img class="object-cover" src="/public/images/Development/coding_dev.png"/>
      <h1 class="text-white
                  text-xl
                  sm:text-4xl
                  md:text-6xl
                  lg:text-7xl
                  absolute
                  font-thin">Personal Blog</h1>
    </section>
<!--Container for the categories box-->
    <v-container fluid class="min-h-10v flex flex-row justify-center">

      <v-btn v-for="(value, key) in articles_categories"
             :key="key" 
             variant="outlined" 
             class="ma-2"
             @click="changeCategory(value)">
        {{key}}
      </v-btn>
    </v-container>
<!--    Conditional container for the article cards-->
    <v-container
        v-if="articles.length > 0 "
        fluid class="min-h-80v flex flex-row justify-center"
    >

      <v-row>
        <v-col v-for="(item, index) in articles" :key="index" cols="14" sm="6" md="4" lg="3">
          <article_cards :title=item.title :article-text=item.article_text />
        </v-col>
      </v-row>

    </v-container>
    <v-container v-else fluid class="min-h-80v flex flex-column justify-center align-center">
      <font-awesome-icon :icon="['fas', 'heart']" style="color: #b93737; width:20%; height:auto;" />
      <div>
        <div class="flex self-center">
          <h1 class="text-4xl
                    font-extrabold
                    bg-clip-text
                    bg-gradient-to-r
                    from-purple-dark
                    to-green-500
                    text-transparent
                    text-center
                    p-5">
            Sorry, it seems that currently there are no articles
          </h1>
        </div>
      </div>
    </v-container>


  </v-container>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import {fetch_all_articles, fetch_articles_by_category, fetch_categories} from "../services/blog.service"
import {article} from "../types/article.types"
import Blog_articles_cards from "./Blog_articles_cards.vue"

export default defineComponent({
	name: "Blog",
	components: {
		"article_cards": Blog_articles_cards
	},
	data() {
		return {
			articles_categories: {},
			selected_category: "all",
			articles: [] as article[]
		}
	},
	watch: {
		selected_category(newValue, oldValue) {
			this.categorySelected()
		},
	},
	mounted() {

		//Fetching all the available categories 
		fetch_categories().then(response => {
			if(response) {
				this.articles_categories= response

			} else {
				console.log("The data, payload of the response in undefined!!") //TODO-Create an error message?!!??!
			}
		}).catch(error => {
			//TODO- Here we would not emit an event but maybe we should let the usert know that something failed
			console.error("Error geting the alignbments:", error)
		})

		fetch_all_articles().then(response => {
			if(response) {
				console.log(response)
				this.articles= response
			} else {
				console.log("The data, payload of the response in undefined!!") //TODO-Create an error message?!!??!
			}
		}).catch(error => {
			//TODO- Here we would not emit an event but maybe we should let the usert know that something failed
			console.error("Error geting the alignbments:", error)
		})
	},
	methods: {
		changeCategory(new_category: string) {
			this.selected_category = new_category
		},
    
		categorySelected() {
			fetch_articles_by_category(this.selected_category).then(response => {
				if(response) {
					console.log(response)
					this.articles = response
				} else {
					console.log("The data, payload of the response in undefined!!") //TODO-Create an error message?!!??!
				}
			}).catch(error => {
				//TODO- Here we would not emit an event but maybe we should let the usert know that something failed
				console.error("Error geting the alignbments:", error)
			})

		}
	}
})
</script>