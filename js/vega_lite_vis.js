// Embed Map 1
vegaEmbed("#map1", "charts/map1_proportional.vg.json", { actions: false }).catch(console.error);

// Embed Map 2
vegaEmbed("#map2", "charts/map2_choropleth.vg.json", { actions: false }).catch(console.error);

// Embed Map 3
vegaEmbed("#map3", "charts/map3_faceted.vg.json", { actions: false }).catch(console.error);

// Embed Non-Map Idioms
vegaEmbed("#chart4", "charts/chart4_heatmap.vg.json", { actions: false }).catch(console.error);
vegaEmbed("#chart5", "charts/chart5_dumbbell.vg.json", { actions: false }).catch(console.error);
vegaEmbed("#chart6", "charts/chart6_slope.vg.json", { actions: false }).catch(console.error);
vegaEmbed("#chart7", "charts/chart7_scatter.vg.json", { actions: false }).catch(console.error);
vegaEmbed("#chart8", "charts/chart8_streamgraph.vg.json", { actions: false }).catch(console.error);
vegaEmbed("#chart9", "charts/chart9_multiples.vg.json", { actions: false }).catch(console.error);
vegaEmbed("#chart10", "charts/chart10_treemap.vg.json", { actions: false }).catch(console.error);
vegaEmbed("#chart11", "charts/chart11_details.vg.json", { actions: false }).catch(console.error);