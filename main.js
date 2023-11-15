const {createApp} = Vue;

const vueData = {
    data: function () {
        return {
            messaggio : "MUSHROOMS",
            image : "img/pexels-ameruverse-digital-marketing-media-1643409.jpg",
            size : "resize"
        }     
    }
};
createApp(vueData).mount('#app')