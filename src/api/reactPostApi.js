import axiosClient from "./axiosClient";

const reactPostApi = {
	postComment: (data) => {
		const url = "/comment/create";
		return axiosClient.post(url, data);
	},
	loadComment: (params) => {
		const url = "/comment/load";
		return axiosClient.post(url, params);
	},
	deleteComment: (params) => { 
		const url = "/comment/delete";
		return axiosClient.get(url, {params});
	},
	postLike: (data) => {
		const url = "/like/create";
return axiosClient.post(url, data);
	},
postUnLike: (data) => {
	const url = "/like/unlike";
	return axiosClient.post(url, data);
},
	postRate: (data) => {
		const url = "/rate/create";
		return axiosClient.post(url, data);
	}
}

export default reactPostApi;