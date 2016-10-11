var app = new Vue({
    el: '#app',
    data: {
        camBearingsCost: 0,
        mainBearingsCost: 0,
        rodBearingsCost: 0 
    },
    computed: {
        total: function(){
            var val = 0;         
            val+=parseInt(this.camBearingsCost); 
            val+=parseInt(this.mainBearingsCost);
            val+=parseInt(this.rodBearingsCost);
            return val;
        }
    }
})