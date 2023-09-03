<template>
  <v-container class="d-flex flex-column">

    <v-card
        class="mx-auto flex-grow-1 flex-shrink-0"
        max-width="100%"
        min-width="40%"
        title="User Registration"
    >
      <v-container>
        <v-text-field
            v-model="username"
            color="primary"
            label="First name"
            variant="underlined"
        ></v-text-field>

        <v-text-field
            v-model="password"
            color="primary"
            label="Password"
            placeholder="Enter your password"
            variant="underlined"
        ></v-text-field>
      </v-container>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="success">
          Complete Registration
        </v-btn>
      </v-card-actions>
    </v-card>



    <v-card
        class="mx-auto mt-20 flex-grow-1 flex-shrink-0"
        max-width="100%"
        min-width="40%"
        title="Adding an article"
    >
      <v-container>
        <v-select
            v-model="category_selected"
            label="Select"
            :items="categories_list"
            variant="outlined"
        ></v-select>

        <v-text-field
            v-model="art_title"
            color="primary"
            label="Title"
            placeholder="Enter your password"
            variant="underlined"
        ></v-text-field>

        <v-text-field
            v-model="story"
            color="primary"
            label="Article Story"
            placeholder="Enter your password"
            variant="underlined"
        ></v-text-field>
      </v-container>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="success" @click="post_article()">
          Post Article
        </v-btn>
      </v-card-actions>
    </v-card>



  </v-container>
</template>

<script lang="ts">

import {defineComponent} from "vue"
import {fetch_categories} from "../services/blog.service"
import {post_article} from "../services/admin.service"

export default defineComponent({
	name: "AdminPage",
	data() {
		return {
			username: "",
			password: "",
			category_selected: "",
			art_title: "",
			story: "",
			categories_list: [""]
		}
	},
	mounted() {
		fetch_categories().then((data) => {
			this.categories_list = Object.values(data)
		})
	},
	methods: {
		post_article() {
			post_article(this.category_selected, this.art_title, this.story).then((res) => {
				console.log(res)
			}).catch(err => {
				console.log(err)
			})
		}
	}
  
})

</script>

<style scoped></style>
