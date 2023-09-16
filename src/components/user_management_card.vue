<template>
  <v-container class="rounded-md bg-grey-lighten-3">
    <v-row class="flex-container" >
      <!-- Username section -->
      <v-col class="text-left flex-item">
        <div>{{username}}</div>
      </v-col>

      <!-- Role section -->
      <v-col class="text-right flex-item">
        <v-select
            v-model="new_role"
            label="Select"
            :items="['admin', 'member']"
            variant="outlined"
        ></v-select>
      </v-col>



      <!-- Icon section -->
      <v-col class="text-center flex-item">
        <v-btn
            @click="delete_user()"
        >
          <font-awesome-icon
              :icon='["fa", "trash"]'
              size="md"
              class="text-red-darken-4"/>
        </v-btn>
      </v-col>

      <v-col class="text-center flex-item">
        <v-btn
            @click="update_user()"
        >
          Update User
        </v-btn>
      </v-col>

    </v-row>
  </v-container>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import {deleteUserById, modifyUserRole} from "../services/admin.service"


export default defineComponent({
	name: "UserManagementCard",
	props: {
		user_id: String,
		username: {
			type: String,
			default: "Anonymous"
		},
		role: {
			type: String,
			default: "not selected"
		}
	},
	data() {
		return {
			new_role: ""
		}
	},
	computed: {
    
	},
	methods: {
		delete_user() {
			if(this.user_id)
				deleteUserById(this.user_id).then((res) => {
					console.log(res)

					this.reloadPage()
				})
      
		},

		update_user(){

			if(this.new_role !== this.role && this.user_id && this.new_role !== "")
				modifyUserRole(this.username, this.new_role, this.user_id).then((res) => {
					console.log(res)
					this.reloadPage()
				})

			else
				console.log("You should change the role in order to modify it")

		},

		reloadPage() {
			window.location.reload()
		}
	}
})

</script>

<style scoped></style>
