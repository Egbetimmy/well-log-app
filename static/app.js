function plotLog(logData) {
  // Create plotly trace for each log
  var traces = [];
  for (var i = 1; i < logData[0].length; i++) {
    var trace = {
      x: [],
      y: [],
      type: 'scatter',
      mode: 'lines',
      name: logData[0][i],
      line: {
        width: 1,
        color: 'black'
      },
      fill: 'tozeroy'
    };
    for (var j = 1; j < logData.length; j++) {
      trace.x.push(logData[j][i]);
      trace.y.push(logData[j][0]);
    }
    traces.push(trace);
  }

  // Set layout options
  var layout = {
    title: '',
    font: {
      family: 'Arial, sans-serif',
      size: 12
    },
    xaxis: {
      title: '',
      showgrid: true,
      gridcolor: '#cccccc',
      tickfont: {
        family: 'Arial, sans-serif',
        size: 10
      }
    },
    yaxis: {
      title: '',
      autorange: 'reversed',
      showgrid: true,
      gridcolor: '#cccccc',
      zeroline: false,
      tickfont: {
        family: 'Arial, sans-serif',
        size: 10
      }
    },
    margin: {
      t: 50,
      l: 80,
      r: 20,
      b: 50
    },
    legend: {
      orientation: 'h',
      x: 0,
      y: -0.15,
      font: {
        family: 'Arial, sans-serif',
        size: 10
      }
    }
  };

  // Plot data
  Plotly.newPlot('plot', traces, layout);
}

function clearPlot() {
  Plotly.purge('plot');
}
