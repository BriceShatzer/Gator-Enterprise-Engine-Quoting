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
            timingSetCost: 0,
            camAndLifterSetCost: 0,
            cylinderHeadCost: 325,
            headGasketCost: 0,
            headBoltsCost: 0,
            pushRodsCost: 0,
            rockerNutCost: 0,
            intakeManifoldCost: 0,
            starterNeeded: false,
            carbCost: 0,
        },
        computed: {
            total: function(){
                var val = 0;
                val+=175; // Block (core)
                val+=450; // Block Machine Work
                val+=90; // Block Prep (labor)
                val+=25; // Block Prep (parts)
                //val+=150; // In-house machine work (for freshen only)
                val+=parseInt(this.camBearingsCost); 
                val+=parseInt(this.mainBearingsCost);
                val+=parseInt(this.rodBearingsCost);
                val+=parseInt(this.crankshaftCost);
                val+=parseInt(this.connectingRodsCost);
                val+=parseInt(this.pistonsCost);
                val+=parseInt(this.pistonRingsCost);
                val+=parseInt(this.oilPumpCost);
                val+=15; // Oil Filter Adapter
                val+=14; // Oil Pump Pick-up
                val+=13; // Intermediate Shaft
                val+=16; // Rear Main Seal 
                val+=75; // Oil Pan and gasket
                val+=26; // timing cover and seal
                val+=65; // Harmonic Balancer 
                val+=32; // Flex plate
                val+=parseInt(this.timingSetCost);
                val+=parseInt(this.camAndLifterSetCost);
                val+=35; // Shortblock Fasteners
                val+=parseInt(this.cylinderHeadCost);
                val+=parseInt(this.headGasketCost);
                val+=parseInt(this.headBoltsCost);
                val+=parseInt(this.pushRodsCost);
                val+=parseInt(this.rockerNutCost);
                val+=35; // Valve Covers
                val+=parseInt(this.intakeManifoldCost);
                val+=55; // Water Pump
                val+=16; // Water Inlet
                val+=99; // Pulley Set
                val+=175; // Distributors
                val+=89; // Plug Wires
                val+=35; // Spark Plugs
                val+=25; // Top End Gaskets
                if(this.starterNeeded){val+=130}
                //val+=130; // Starter
                val+=parseInt(this.carbCost);
                val+=150; // Consumables
                val+=175; // Shipping
                val+=675; // Labor 
                return val;
            }
        }
    });