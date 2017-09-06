import request from 'superagent';

const API_URL = '/api/mazes';

export default {
	getAll() {
		return request.get(API_URL)
			.then(
				r => r.body,
				e => { throw e.response.body; }
			);
	},
	get(id) {
		return request.get(`${API_URL}/${id}`)
			.then(
				r => r.body,
				e => { throw e.response.body; }
			);
	},
	delete(id) {
		return request.delete(`${API_URL}/${id}`)
			.then(
				r => r.body,
				e => { throw e.response.body; }
			);
	},
	add(maze) {
		return request.post(API_URL, maze)
			.then(
				r => r.body,
				e => { throw e.response.body; }
			);
	}
};