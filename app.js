var jsData;
console.log("Hello world!")
function init(){

    var selector = d3.select("#selDataset");
 // K & A
    d3.csv("static/Resources/2022_forbes_billionaires.csv").then((data) =>{
      csvData = data;
        var subjectID = data.name;
        subjectID.forEach((ID) => {
            selector
            .append('option')
            .text(ID)
            .property('value', ID);
        });
  
    const firstbutton = subjectID[0];
    updateCharts(firstbutton);
    updateMetadata(firstbutton);
    });
}
  function updateCharts(sample) {    
    d3.csv("static/Resources/2022_forbes_billionaires.csv").then((data) => {
    var samples = data.samples;
   
    var filterArray = samples.filter(sampleObject => sampleObject.id == sample);
    var result = filterArray[0];
    var sample_values = result.sample_values;

    var otu_ids = result.otu_ids;
    var otu_labels = result.otu_labels; 
   
    //Create World Map -- Will
    var map = L.map('map').setView([50.84673, 4.35247], 1);
    L.tileLayer('https://tile.openstreetmap.be/osmbe/{z}/{x}/{y}.png', {
      attribution:
          '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors' +
          ', Tiles courtesy of <a href="https://geo6.be/">GEO-6</a>',
      maxZoom: 18

  }).addTo(map);

 
    //Create Bar Chart
    var trace1 = {
        x: sample_values.slice(0,10).reverse(),
        y: otu_ids.slice(0,10).map(otuID => `OTU ${otuID}`).reverse(),
        text: otu_labels.slice(0,10).reverse(),
        name: "Greek",
        type: "bar",
        orientation: "l"
    };
    var data = [trace1];
    var layout = {
        title: "Top Ten OTUs for Individual " +sample,
        margin: {l: 100, r: 100, t: 100, b: 100},
        font: { color: "black", family: "Arial" }
    };
    Plotly.newPlot("bar", data, layout);  
    });
  }
  //Pie Chart Time -- Dave

  



  
  function optionChanged(newSample) {
    updateMetadata(newSample);
    updateCharts(newSample);
  }
  
  init();

