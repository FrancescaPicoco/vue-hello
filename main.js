const {createApp} = Vue;

const vueData = {
    data: function () {
        return {
            messaggio : "Carpe Diem",
            image : "img/pexels-ameruverse-digital-marketing-media-1643409.jpg",
            size : "resize"
        }     
    }
};
createApp(vueData).mount('#app')