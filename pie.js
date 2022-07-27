// JS 
var chart; 
  
JSC.fetch('./resources/2022_forbes_billionaires.csv') 
  .then(function(response) { 
    return response.text(); 
  }) 
  .then(function(text) { 
    var data = JSC.csv2Json(text); 
    chart = renderChart(makeSeries(data)); 
  }); 
  
function renderChart(series) { 
  return JSC.chart('chartDiv', { 
    palette: 'midTones', 
    /* Each series is a pie */
    defaultSeries_type: 'pie', 
    defaultPoint: { 
      tooltip: 
        '<b>%name</b><br>Percentage of Billionaires by Industry: <b>%percentOfTotal%</b><span style="width:500px;"></span> <br>', 
      label: { 
        text: '%name', 
        placement: 'outside'
      } 
    }, 
    legend_visible: false, 
    series: series 
  }); 
} 
  
function makeSeries(data) { 
  return JSC.nest() 
    .key('industry')
    .pointRollup(function(key, val) { 
      var countries = val.map(function(a) { 
        return a.country; 
      }); 
      return { 
        x: key, 
        y: JSC.sum(val, 'networth'), 
        attributes_countries: countries.join(', ') 
      }; 
    }) 
    .series(data); 
} 

// JS 
var chart; 
  
JSC.fetch('./resources/2022_forbes_billionaires.csv') 
  .then(function(response) { 
    return response.text(); 
  }) 
  .then(function(text) { 
    var data = JSC.csv2Json(text); 
    chart = renderChart(makeSeries(data)); 
  }); 
  
function renderChart(series) { 
  return JSC.chart('smartDiv', { 
    palette: 'midTones', 
    /* Each series is a pie */
    defaultSeries_type: 'pie', 
    defaultPoint: { 
      tooltip: 
        '<b>%name</b><br>Percentage of Billionaires by Industry: <b>%percentOfTotal%</b><span style="width:500px;"></span> <br>', 
      label: { 
        text: '%name', 
        placement: 'outside'
      } 
    }, 
    legend_visible: false, 
    series: series 
  }); 
} 
  
function makeSeries(data) { 
  return JSC.nest() 
    .key('industry')
    .pointRollup(function(key, val) { 
      var countries = val.map(function(a) { 
        return a.country; 
      }); 
      return { 
        x: key, 
        y: JSC.sum(val, 'networth'), 
        attributes_countries: countries.join(', ') 
      }; 
    }) 
    .series(data); 
} 


