import { Chart } from 'react-chartjs-2';
let theHelp = Chart.helpers;

export const severityOptions = {
  title: {
    display: true,
    text: 'How severe are the crashes registered?',
    position: 'top',
  },
  rotation: -0.7 * Math.PI,
  legend: {
    display: true,
    position: 'bottom',
    labels: {
      generateLabels: function(chart) {
        var data = chart.data;
        if (data.labels.length && data.datasets.length) {
          return data.labels.map(function(label, i) {
            var meta = chart.getDatasetMeta(0);
            var ds = data.datasets[0];
            var arc = meta.data[i];
            var custom = (arc && arc.custom) || {};
            var getValueAtIndexOrDefault = theHelp.getValueAtIndexOrDefault;
            var arcOpts = chart.options.elements.arc;
            var fill = custom.backgroundColor
              ? custom.backgroundColor
              : getValueAtIndexOrDefault(
                  ds.backgroundColor,
                  i,
                  arcOpts.backgroundColor,
                );
            var stroke = custom.borderColor
              ? custom.borderColor
              : getValueAtIndexOrDefault(
                  ds.borderColor,
                  i,
                  arcOpts.borderColor,
                );
            var bw = custom.borderWidth
              ? custom.borderWidth
              : getValueAtIndexOrDefault(
                  ds.borderWidth,
                  i,
                  arcOpts.borderWidth,
                );
            return {
              // And finally :
              text: ds.data[i] + '% of the crashes are ' + label,
              fillStyle: fill,
              strokeStyle: stroke,
              lineWidth: bw,
              hidden: isNaN(ds.data[i]) || meta.data[i].hidden,
              index: i,
            };
          });
        }
        return [];
      },
    },
  },
};
export const causesOptions = {
  title: {
    display: true,
    text: 'How severe are the crashes registered?',
    position: 'top',
  },
  rotation: -0.7 * Math.PI,
  legend: {
    display: true,
    position: 'bottom',
    align: 'end',
    labels: {
      generateLabels: function(chart) {
        var data = chart.data;
        if (data.labels.length && data.datasets.length) {
          return data.labels.map(function(label, i) {
            var meta = chart.getDatasetMeta(0);
            var ds = data.datasets[0];
            var arc = meta.data[i];
            var custom = (arc && arc.custom) || {};
            var getValueAtIndexOrDefault = theHelp.getValueAtIndexOrDefault;
            var arcOpts = chart.options.elements.arc;
            var fill = custom.backgroundColor
              ? custom.backgroundColor
              : getValueAtIndexOrDefault(
                  ds.backgroundColor,
                  i,
                  arcOpts.backgroundColor,
                );
            var stroke = custom.borderColor
              ? custom.borderColor
              : getValueAtIndexOrDefault(
                  ds.borderColor,
                  i,
                  arcOpts.borderColor,
                );
            var bw = custom.borderWidth
              ? custom.borderWidth
              : getValueAtIndexOrDefault(
                  ds.borderWidth,
                  i,
                  arcOpts.borderWidth,
                );
            return {
              // And finally :
              text: ds.data[i] + '% of the crashes are ' + label,
              fillStyle: fill,
              strokeStyle: stroke,
              lineWidth: bw,
              hidden: isNaN(ds.data[i]) || meta.data[i].hidden,
              index: i,
            };
          });
        }
        return [];
      },
    },
  },
};
