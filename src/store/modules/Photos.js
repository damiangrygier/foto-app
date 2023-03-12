import axios from 'axios'
import { apiUrl } from '@/config'

export default {
  namespaced: true,
  state: {
    photos: [],
    photosRequest: {
      pending: false,
      error: false,
      success: false
    },
    allPhotosLoaded: false,
    singlePhoto: null,
    loading: false
  },
  getters: {
    Photos (state) {
      return state.photos
    },
    PhotosRequest (state) {
      return state.photosRequest
    },
    allPhotosLoaded (state) {
      return state.allPhotosLoaded
    },
    singlePhoto (state) {
      return state.singlePhoto
    },
    loading (state) {
      return state.loading
    }
  },
  mutations: {
    UPDATE (state, data) {
      state.photos = data
    },
    ADD (state, data) {
      state.photos = [...state.photos, ...data]
    },
    START_REQUEST (state) {
      state.photosRequest = {
        pending: true,
        error: false,
        success: false
      }
    },
    END_REQUEST (state) {
      state.photosRequest = {
        pending: false,
        error: false,
        success: true
      }
    },
    ERROR_REQUEST (state) {
      state.photosRequest = {
        pending: false,
        error: true,
        success: false
      }
    },
    TOGGLE_ALL_PHOTOS_LOADED (state) {
      state.allPhotosLoaded = !state.allPhotosLoaded
    },
    ADD_VOTE (state, _id) {
      const photo = state.photos.find(photo => photo._id === _id)
      if (photo) {
        photo.votes++
      }
    },
    SET_SINGLE_PHOTO (state, photo) {
      state.singlePhoto = photo
    },
    SET_LOADING (state, loading) {
      state.loading = loading
    }
  },
  actions: {
    async fetchPhotosFromAPI ({ commit, state }, { url, page }) {
      try {
        // if it's first set of photos and allPhotosLoaded is true => make it default false
        if (state.allPhotosLoaded && page === 1) commit('TOGGLE_ALL_PHOTOS_LOADED')

        // it's not the first page and allPhotosLoaded is true? => stop function
        if (state.allPhotosLoaded) return false

        commit('START_REQUEST')
        const res = await axios.get(url)
        commit('END_REQUEST')

        // if the set is not full, toggle allPhotosLoaded
        if (res.data.length < 12) commit('TOGGLE_ALL_PHOTOS_LOADED')

        if (page > 1) commit('ADD', res.data)
        else commit('UPDATE', res.data)
      } catch (err) {
        commit('ERROR_REQUEST')
      }
    },

    async fetchPhotos ({ dispatch }, page) {
      dispatch('fetchPhotosFromAPI', { url: `${apiUrl}/photos/${page}`, page })
    },

    async fetchCategoryPhotos ({ dispatch }, { category, page }) {
      dispatch('fetchPhotosFromAPI', { url: `${apiUrl}/photos/${category}/${page}`, page })
    },

    addVote ({ commit }, _id) {
      axios.put(`${apiUrl}/photos/vote/${_id}`)
      commit('ADD_VOTE', _id)
      console.log('addvote')
      console.log(_id)
    },

    fetchSinglePhoto ({ commit }, _id) {
      commit('SET_LOADING', true)
      axios.get(`${apiUrl}/photos/${_id}`)
        .then(response => {
          commit('SET_SINGLE_PHOTO', response.data)
          commit('SET_LOADING', false)
          console.log(response.data)
        })
        .catch(error => {
          console.error(error)
          commit('SET_SINGLE_PHOTO', null)
          commit('SET_LOADING', false)
        })
    }
  }
}
