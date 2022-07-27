// An array of cities and their locations
var cities = [
  {
    name: "<center><b>Elon Musk</b></center>",
    city: "<center><b>Location:</b> Austin, Texas(USA)",
    location: [30.2672, -97.7431],
    networth: "<left><b>Networth:</b></left> <right>$209 Billion</right>",
    company: "<left><b>Source:</b></left> <right>Tesla, SpaceX</right>",
    rank: "<left><b>Rank:</b></left> <right>1</right>"
  },
  {
    name: "<center><b>Jeff Bezos</b></center>",
    city: "<center><b>Location:</b> Seattle, Washington(USA)",
    location: [47.6062, -122.3321],
    networth: "<left><b>Networth:</b></left> <right>$126 Billion</right>",
    company: "<left><b>Source:</b></left> <right>Amazon</right>",
    rank: "<left><b>Rank:</b></left> <right>2</right>"
  },
  {
    name: "<center><b>Bernard Arnault</b></center>",
    city: "<center><b>Location:</b> Paris, France",
    location: [48.8566, 2.3522],
    networth: "<left><b>Networth:</b></left> <right>$120 Billion</right>",
    company: "<left><b>Source:</b></left> <right>LVMH ( Louis Vuitton )</right>",
    rank: "<left><b>Rank:</b></left> <right>3</right>"
  },
  {
    name: "<center><b>Bill Gates</b></center>",
    city: "<center><b>Location:</b> Medina, Washington(USA)",
    location: [47.6248, -122.2361],
    networth: "<left><b>Networth:</b></left> <right>$113 Billion</right>",
    company: "<left><b>Source:</b></left> <right>Microsoft</right>",
    rank: "<left><b>Rank:</b></left> <right>4</right>"
  },
  {
    name: "<center><b>Warren Buffett</b></center>",
    city: "<center><b>Location:</b> Omaha, Nebraska(USA)",
    location: [41.2565, -95.9345],
    networth: "<left><b>Networth:</b></left> <right>$101 Billion</right>",
    company: "<left><b>Source:</b></left> <right>Berkshire Hathaway</right>",
    rank: "<left><b>Rank:</b></left> <right>5</right>"
  
  },
  {
    name: "<center><b>Larry Page</b></center>",
    city: "<center><b>Location:</b> Palo Alto, California(USA)",
    location: [37.4419, -122.1430],
    networth: "<left><b>Networth:</b></left> <right>$97.6 Billion</right>",
    company: "<left><b>Source:</b></left> <right>Google</right>",
    rank: "<left><b>Rank:</b></left> <right>6</right>"
    
  
  },
  {
    name: "<center><b>Mukesh Ambani</b></center>",
    city: "<center><b>Location:</b> Mumbai, India",
    location: [19.0760, 72.8777],
    networth: "<left><b>Networth:</b></left> <right>$95.4 Billion</right>",
    company: "<left><b>Source:</b></left> <right>Reliance Industries, Diversified</right>",
    rank: "<left><b>Rank:</b></left> <right>7</right>"

  },
  {
    name: "<center><b>Gautam Adani</b></center>",
    city: "<center><b>Location:</b> Gurgaon, India",
    location: [28.4595, 77.0266],
    networth: "<left><b>Networth:</b></left> <right>$94.6 Billion</right>",
    company: "<left><b>Source:</b></left> <right>Infrastructure, Commodoties</right>",
    rank: "<left><b>Rank:</b></left> <right>8</right>"

  },
  {
    name: "<center><b>Sergey Brin</b></center>",
    city: "<center><b>Location:</b> Los Altos, California(USA)",
    location: [37.3852, -122.1141],
    networth: "<left><b>Networth:</b></left> <right>$93.6 Billion</right>",
    company: "<left><b>Source:</b></left> <right>Google</right>",
    rank: "<left><b>Rank:</b></left> <right>9</right>"


  },
  {
    name: "<center><b>Steve Ballmer</b></center>",
    city: "<center><b>Location:</b> Hunts Point, Washington(USA)",
    location: [47.6434, -122.2301],
    networth: "<left><b>Networth:</b></left> <right>$87.3 Billion</right>",
    company: "<left><b>Source:</b></left> <right>Microsoft</right>",
    rank: "<left><b>Rank:</b></left> <right>10</right>"


  },
  {
    name: "<center><b>Larry Ellison</b></center>",
    city: "<center><b>Location:</b> Lanai, Hawaii(USA)",
    location: [20.8166, -156.9273],
    networth: "<left><b>Networth:</b></left> <right>$86.9 Billion</right>",
    company: "<left><b>Source:</b></left> <right>Oracle</right>",
    rank: "<left><b>Rank:</b></left> <right>11</right>"


  },
  {
    name: "<center><b>Carlos Slim</b></center>",
    city: "<center><b>Location:</b> Mexico City, Mexico",
    location: [19.432608, -99.133209],
    networth: "<left><b>Networth:</b></left> <right>$73 Billion</right>",
    company: "<left><b>Source:</b></left> <right>Telmex, América Móvil, Grupo Carso</right>",
    rank: "<left><b>Rank:</b></left> <right>12</right>"


  },
  {
    name: "<center><b>Charles Koch</b></center>",
    city: "<center><b>Location:</b> Wichita, Kansas(USA)",
    location: [37.697948, -97.314835],
    networth: "<left><b>Networth:</b></left> <right>$69 Billion</right>",
    company: "<left><b>Source:</b></left> <right>Koch Industries Inc, INTRUST Financial Corp</right>",
    rank: "<left><b>Rank:</b></left> <right>13</right>"


  },
  {
    name: "<center><b>Julia Flesher Koch</b></center>",
    city: "<center><b>Location:</b> Palm Beach, Florida(USA)",
    location: [26.634132, -80.038818],
    networth: "<left><b>Networth:</b></left> <right>$69 Billion</right>",
    company: "<left><b>Source:</b></left> <right>Heir of David Koch(Koch Industries Inc)</right>",
    rank: "<left><b>Rank:</b></left> <right>14</right>"


  },
  {
    name: "<center><b>Zhong Shanshan</b></center>",
    city: "<center><b>Location:</b> Hangzhou, China",
    location: [30.250000, 120.166664],
    networth: "<left><b>Networth:</b></left> <right>$64.3 Billion</right>",
    company: "<left><b>Source:</b></left> <right>Nongfu Spring beverage company, Beijing Wantai Biological Pharmacy Enterprise</right>",
    rank: "<left><b>Rank:</b></left> <right>15</right>"


  },
  {
    name: "<center><b>Francoise Bettencourt Meyers</b></center>",
    city: "<center><b>Location:</b> Paris, France",
    location: [48.8566, 2.34],
    networth: "<left><b>Networth:</b></left> <right>$63.4 Billion</right>",
    company: "<left><b>Source:</b></left> <right>Heir to Liliane Bettencourt(L'Oreal)</right>",
    rank: "<left><b>Rank:</b></left> <right>16</right>"


  },
  {
    name: "<center><b>Mark Zuckerberg</b></center>",
    city: "<center><b>Location:</b> Palo Alto, California(USA)",
    location: [37.4419, -122.13],
    networth: "<left><b>Networth:</b></left> <right>$60.9 Billion</right>",
    company: "<left><b>Source:</b></left> <right>Facebook</right>",
    rank: "<left><b>Rank:</b></left> <right>17</right>"


  },
  {
    name: "<center><b>Jim Walton</b></center>",
    city: "<center><b>Location:</b> Bentonville, Arkansas(USA)",
    location: [36.372852, -94.208817],
    networth: "<left><b>Networth:</b></left> <right>$57.4 Billion</right>",
    company: "<left><b>Source:</b></left> <right>Walmart Heir</right>",
    rank: "<left><b>Rank:</b></left> <right>18</right>"


  },
  {
    name: "<center><b>Rob Walton</b></center>",
    city: "<center><b>Location:</b> Bentonville, Arkansas(USA)",
    location: [36.372852, -94.22],
    networth: "<left><b>Networth:</b></left> <right>$56.9 Billion</right>",
    company: "<left><b>Source:</b></left> <right>Walmart Heir</right>",
    rank: "<left><b>Rank:</b></left> <right>19</right>"


  },
  {
    name: "<center><b>Alice Walton</b></center>",
    city: "<center><b>Location:</b> Fort Worth, Texas(USA)",
    location: [32.768799, -97.309341],
    networth: "<left><b>Networth:</b></left> <right>$55.2 Billion</right>",
    company: "<left><b>Source:</b></left> <right>Walmart Heir</right>",
    rank: "<left><b>Rank:</b></left> <right>20</right>"


  },
  {
    name: "<center><b>Michael Dell</b></center>",
    city: "<center><b>Location:</b> Austin, Texas(USA)",
    location: [30.2672, -97.76],
    networth: "<left><b>Networth:</b></left> <right>$51.4 Billion</right>",
    company: "<left><b>Source:</b></left> <right>Dell</right>",
    rank: "<left><b>Rank:</b></left> <right>21</right>"


  },
  {
    name: "<center><b>Amancio Ortega</b></center>",
    city: "<center><b>Location:</b> A Coruña, Spain",
    location: [43.362343, -8.411540],
    networth: "<left><b>Networth:</b></left> <right>$48.5 Billion</right>",
    company: "<left><b>Source:</b></left> <right>Inditex Fashion Group(Zara, Bershka)</right>",
    rank: "<left><b>Rank:</b></left> <right>22</right>"


  },
  {
    name: "<center><b>Jacqueline Badger Mars</b></center>",
    city: "<center><b>Location:</b> Bedminster, New Jersey(USA)",
    location: [40.6693, -74.6804],
    networth: "<left><b>Networth:</b></left> <right>$46.9 Billion</right>",
    company: "<left><b>Source:</b></left> <right>Mars Inc Heir</right>",
    rank: "<left><b>Rank:</b></left> <right>23</right>"


  },
  {
    name: "<center><b>John Mars</b></center>",
    city: "<center><b>Location:</b> Jackson, Wyoming(USA)",
    location: [43.4799, -110.7624],
    networth: "<left><b>Networth:</b></left> <right>$46.9 Billion</right>",
    company: "<left><b>Source:</b></left> <right>Mars Inc Heir</right>",
    rank: "<left><b>Rank:</b></left> <right>24</right>"


  },
  {
    name: "<center><b>Zhang Yiming</b></center>",
    city: "<center><b>Location:</b> Beijing, China",
    location: [39.916668, 116.383331],
    networth: "<left><b>Networth:</b></left> <right>$44.5 Billion</right>",
    company: "<left><b>Source:</b></left> <right>ByteDance</right>",
    rank: "<left><b>Rank:</b></left> <right>25</right>"


  }



];

// An array that will store the created cityMarkers
var cityMarkers = [];

for (var i = 0; i < cities.length; i++) {
  // loop through the cities array, create a new marker, and push it to the cityMarkers array
  cityMarkers.push(
    L.marker(cities[i].location).bindPopup("<h1>" + cities[i].name + "</h1>" + "<h5>" + cities[i].city + "</h5>" + "<hr>" + "<h4>" + cities[i].networth + "</h4>" + "<h4>" + cities[i].company + "</h4>" + "<h4>" + cities[i].rank + "</h4>")
  );
}

// Add all the cityMarkers to a new layer group.
// Now, we can handle them as one group instead of referencing each one individually.
var cityLayer = L.layerGroup(cityMarkers);

// Define variables for our tile layers.
var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})

var topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

// Only one base layer can be shown at a time.
var baseMaps = {
  Street: street,
  Topography: topo
};

// Overlays that can be toggled on or off
var overlayMaps = {
  Billionaire: cityLayer
};

// Create a map object, and set the default layers.
var myMap = L.map("map", {
  center: [46.2276, 2.2137],
  zoom: 2,
  layers: [street, cityLayer]
});

// Pass our map layers into our layer control.
// Add the layer control to the map.
L.control.layers(baseMaps, overlayMaps).addTo(myMap);