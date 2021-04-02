const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(spaceXResults => console.log(spaceXResults.map(x=>[x.location.latitude,x.location.latitude])));
