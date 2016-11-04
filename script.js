// rudimentary access control 
/*
var accessCheck = prompt("Owner's Last Name?");

if( accessCheck.toLowerCase() === 'degeeter') {
    document.getElementById('app').style.display = 'block';


} else { location.reload(); }
*/

    //init vue app 
    var app = new Vue({
        el: '#app',
        data: {
            camBearingsCost: 0,
            mainBearingsCost: 0,
            rodBearingsCost: 0,
            crankshaftCost: 0,
            connectingRodsCost: 0,
            pistonsCost: 0,
            pistonRingsCost: 0, 
        },
        computed: {
            total: function(){
                var val = 0;         
                val+=parseInt(this.camBearingsCost); 
                val+=parseInt(this.mainBearingsCost);
                val+=parseInt(this.rodBearingsCost);
                val+=parseInt(this.crankshaftCost);
                val+=parseInt(this.connectingRodsCost);
                val+=parseInt(this.pistonsCost);
                val+=parseInt(this.pistonRingsCost);
                return val;
            }
        }
    });