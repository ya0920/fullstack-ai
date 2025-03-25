export const baseUrl = 'http://localhost:3000'

// banner
export const apiGetBanner = (data) => {
	return uni.request({
		url: baseUrl + '/banner',
		method: 'GET',
		data
	})
}

// ball
export const apiGetBall = (data) => {
	return uni.request({
		url: baseUrl + '/homepage/dragon/ball',
		method: 'GET',
		data
	})
}

// 新歌
export const apiGetNewSongs = (data) => {
	return uni.request({
		url: baseUrl + '/recommend/songs',
		method: 'GET',
		data
	})
}

//  歌曲资源
export const apiGetSongUrl = (id) => {
	return uni.request({
		url: baseUrl + '/song/url/v1',
		method: 'GET',
		data: {
			id: id,
			level: 'jymaster'
		}
	})
}