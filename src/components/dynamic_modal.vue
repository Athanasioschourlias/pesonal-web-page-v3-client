<template>
  <v-dialog
      activator="parent"
      width="auto"
  >
    <v-card>
      <slot name="card">

      </slot>
<!--      <v-card-text>-->
<!--        -->
<!--        -->
<!--        -->
<!--      </v-card-text>-->
<!--      <v-card-actions>-->
<!--        <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>-->
<!--      </v-card-actions>-->
    </v-card>
  </v-dialog>
</template>

<script lang="ts">

import {defineComponent} from "vue"

export default defineComponent({
	name: "DynamicModal",
	props: {
    are_u_sure: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
    
		}
	},
	mounted() {
    
	},
	methods: {
    
	}

})

</script>

<style scoped></style>
