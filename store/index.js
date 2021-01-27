export const state = () => ({
  isAuth: false //STATE SEBAGAI TANDAI SUDAH LOGIN JIKA BELUM
})

export const mutations = {
  //MUTATION UNTUK MENGUBAH STATE DI ATAS
  SET_IS_AUTH(state, payload) {
      state.isAuth = payload
  }
}

export const actions = {
  //PERMASALAH BARU AKAN MUNCUL KETIKA HALAMAN DIRELOAD, MAKA STATE ISAUTH AKAN DISET KEMBALI JADI FALSE KARENA PADA DASARKAN STATE AKAN HILANG JIKA HALAMAN DIRELOAD
  //MAKA KITA JALANKAN FUNGSI DIBAWHA INI, DIMANA INI AKAN BERJALAN SECARA OTOMATIS KETIKA APLIKASI KITA DILOAD
  nuxtServerInit({ commit }, context) {
      //KEMUDIAN KITA SET ISAUTH MENYESUAIKAN VALUE DARI STATE AUTHENTICATION
      commit('SET_IS_AUTH', context.app.$auth.$state.loggedIn)
  }
}