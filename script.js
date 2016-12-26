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
            oilPumpCost: 0,
            carbCost: 0,
            intakeManifoldCost: 0,
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
                val+=parseInt(this.oilPumpCost);    
                val+=parseInt(this.carbCost);
                val+=parseInt(this.intakeManifoldCost);
                val+=35; // Valve Covers
                val+=55; // Water Pump
                val+=16; // Water Inlet
                val+=99; // Pulley Set
                val+=175; // Distributors
                val+=89; // Plug Wires
                val+=35; // Spark Plugs
                val+=25; // Top End Gaskets
                val+=130; // Starter
                val+=150; // Consumables
                val+=175; // Shipping
                val+=675; // Labor 
                return val;
            }
        }
    });