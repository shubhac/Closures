/**
 * Created by sbkloaner-sbktech on 7/22/14.
 */
var zones = [];
var list = "";

function warningMaker( obstacle ){
    var count = 0;
    var i = 0;
    var found = false;
    return function ( number, location ) {
        count++;
        for(i = 0;i < zones.length; i++) {
            if(zones[i][0].indexOf(location) != -1){
                zones[i][1] += number;
                found=true;
                break;
            }
        }
        if(!found){
            zones.push([location,number]);
        }
        list = "";
        for (i = 0; i < zones.length; i++) {
            list = list + zones[i][0] + " (" + zones[i][1] + ")\n";
        }

        alert("Beware! There have been " +
                obstacle +
                " sightings in the Cove today!\n" +
                number +
                " " +
                obstacle +
                "(s) spotted at the " +
                location +
                "!\n" +
                "This is Alert #" +
                count +
                " today for " +
                obstacle +
                " danger.\n" +
                "Current danger zones are:\n" + list
        );
    };
}

var contagiousK = warningMaker( "kangaroos" );

console.log(contagiousK);
contagiousK(2, "Kangaroo Ally");

var tangoT = warningMaker ("tigers");
tangoT(4, "Tiger Turnstile");

contagiousK(4, "Kangaroo Ally");