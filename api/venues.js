const app = require('express')()

module.exports = { path: '/api', handler: app }


/*
Synthensize a list of concert dates.
Generates one month of concerts in the future, then filters it based on search criteria.
*/
app.get('/venues', (req, res) => {

  let data = [
    {
      "venue": "The Local Pub",
    },
    {
      "venue": "The Local Pub or somewhere else nearby as the weather permits",
    },
    {
      "venue": "The Other Pub",
    },
    {
      "venue": "Back Lane",
    },
  ];

  if (req.query.venue && req.query.venue != "null") {
    data = data.filter((concert) => (concert.venue.includes(req.query.venue)));
  }

  res.json({items: data, query: req.query});
});
