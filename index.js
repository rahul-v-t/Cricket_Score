let sachin = require("./data/sachin.json");
let sehwag = require("./data/sehwag.json");
let yuvraj = require("./data/yuvraj.json");
let dravid = require("./data/dravid.json");
let ganguly = require("./data/ganguly.json");
let virat = require("./data/virat.json");


let most_fours = 0;
let most_sixes = 0;
let most_runs = 0;
let most_wickets = 0;
 
let most_four_player = "";
let most_sixe_player = "";
let most_runs_player = "";
let most_wicket_player = "";

let check = (data) => {
    let total_fours = 0;
    let total_sixes = 0;
    let total_runs = 0;
    let total_wickets = 0;


    for(let [key, value] of Object.entries(data.data.batting)){
        if (value["4s"]) {
            total_fours += parseInt(value["4s"]);
        }  
        if (value["6s"]) {
            total_sixes += parseInt(value["6s"]);
        }
        if (value["Runs"]) {
            total_runs += parseInt(value["Runs"]);
        }
    }
    for(let [key, value] of Object.entries(data.data.bowling)){
        if (value["Wkts"]) {
            total_wickets += parseInt(value["Wkts"]);
        }
    } 
    if (most_fours < total_fours) {
        most_four_player = data.name;
        most_fours = total_fours
    }
    if (most_sixes < total_sixes) {
        most_six_player = data.name;
        most_sixes = total_sixes
    }
    if (most_runs < total_runs) {
        most_runs_player = data.name;
        most_runs = total_runs
    }
    if (most_wickets < total_wickets) {
        most_wicket_player = data.name;
        most_wickets = total_wickets
    }
};
check(sachin);
check(sehwag);
check(dravid);
check(ganguly);
check(yuvraj);
check(virat);

console.log("Most Fours:" ,most_fours, most_four_player);
console.log("Most Sixes:" ,most_sixes, most_six_player);
console.log("Most Runs:" ,most_runs, most_runs_player);
console.log("Most Wickets:" ,most_wickets, most_wicket_player);