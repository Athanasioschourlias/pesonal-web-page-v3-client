<template>
  <v-card
      class="mx-auto"
      max-width="344"
  >
    <v-img
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        height="200px"
        cover
    ></v-img>

    <v-card-title>
      {{ title }}
    </v-card-title>

    <v-card-subtitle>
      {{ articleText.substr(0, 20) + "....." }}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
          color="success"
          variant="text"
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
          @click="arrowDir = !arrowDir"
      >
        <font-awesome-icon
            :icon=arrowDirection
            size="md"
            :class="{'text-black':arrowDir, 'text-gray-500':!arrowDir}"/>
      </v-btn>
      <v-btn
          @click="!are_u_sure"
      >
        <font-awesome-icon
            :icon='["fa", "trash"]'
            size="md"
            class="text-red-darken-4"/>
      </v-btn>
    </v-card-actions>

    <modal v-model="are_u_sure" :are_u_sure="are_u_sure">
      <template #card>
        <v-card
            width="400"
            title="Would you like to delete this article?"
            class="flex-column flex"
        >
          <v-card-actions class=" justify-center">
            <v-btn variant="outlined" @click="delete_article()">
              Yes
            </v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </modal>

    <v-expand-transition>
      <div v-show="arrowDir">
        <v-divider></v-divider>

        <v-card-text>
          {{ articleText }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import dynamic_modal from "./dynamic_modal.vue"
import {delete_article, get_article} from "../services/admin.service"
import {article} from "../types/article.types"
import {ar} from "vuetify/locale"

export default defineComponent({
	name: "BlogArticlesCards",
	components: {
		"modal": dynamic_modal
	},
	props: {
		title: {
			type: String,
			default: "No Title :("
		},
		articleText: {
			type: String,
			default: "Seems we could not found a text?!? :( Let's refresh the page and check again!"
		},
	},
	data() {
		return {
			are_u_sure: false,
			arrowDown: ["fa", "chevron-down"],
			arrowUp: ["fa", "chevron-up"],
			arrowDir: false
		}
	},
	computed: {
		arrowDirection: function() {
			return this.arrowDir ? this.arrowUp : this.arrowDown
		}
	},

	methods: {
		delete_article: function() {
			get_article().then((article ) => {
				article.forEach((art) => {

					if(art.title == this.title && art._id) {

						delete_article(art._id, art.category).then(() => {
							console.log("The article was deleted successfully")

							this.reloadPage()
						})
					}
				})

			})
		},
		reloadPage() {
			window.location.reload()
		}
	}
})
</script>