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
    var trace1 = {
        x: otu_ids,
        y: sample_values,
        text: otu_labels,
        mode: 'markers',
        marker: {
        size: sample_values,
        color: otu_ids,
        colorscale:"Rainbow"
        }
    };
  
    var data = [trace1];

    var layout = {
        title: 'Bacteria Cultures per Sample',
        showlegend: false,
        hovermode: 'closest',
        xaxis: {title:"OTU (Operational Taxonomic Unit) ID " +sample},
        font: { color: "Black", family: "Arial" },
        margin: {t:30}
    };
    Plotly.newPlot('bubble', data, layout); 
 
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
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
