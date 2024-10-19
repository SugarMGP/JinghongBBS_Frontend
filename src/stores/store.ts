import {defineStore} from "pinia";
import {ref} from "vue";

export const loginStore = defineStore('login', 
	() => {
		const loginStatus = ref(false);
		const setLogin = (status: boolean) => {
            loginStatus.value = status;
		};

		return {
			loginStatus,
			setLogin,
		};
	},
	{
		persist: true
	}
  )

export const userStore = defineStore("user",
	() => {
		const userInfo = ref({
			id: -1,
			username: "",
		});
		const setUserInfo = (id : number, username : string) => {
            userInfo.value.id = id;
			userInfo.value.username = username;
		};

		return {
			userInfo,
			setUserInfo,
		};
	},
	{
		persist: true
	}
);