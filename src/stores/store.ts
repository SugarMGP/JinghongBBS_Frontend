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
		const userId = ref(-1);
		const setUserInfo = (id : number) => {
            userId.value = id;
		};

		return {
			userId,
			setUserInfo,
		};
	},
	{
		persist: true
	}
);