const {createApp} = Vue;

const vueData = {
    data: function () {
        return {
            messaggio : "MUSHROOMS",
            image : "img/pexels-ameruverse-digital-marketing-media-1643409.jpg",
            size : "resize",
            color: "color-0"
        }     
    },
    methods: {
        clicked:function (){
            this.color = "color-2"
        }
    }
};
createApp(vueData).mount('#app')