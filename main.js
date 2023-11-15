const {createApp} = Vue;

const vueData = {
    data: function () {
        return {
            messaggio : "Carpe Diem"
        }
        
    }
}
createApp(vueData).map('#app')