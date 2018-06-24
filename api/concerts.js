const app = require('express')()

module.exports = { path: '/api', handler: app }


/*
Synthensize a list of concert dates.
Generates one month of concerts in the future, then filters it based on search criteria.
*/
app.get('/concerts', (req, res) => {

  let oneWeekData = [
    {
      "day": 0,
      "venue": "The Local Pub",
      "available": false
    },
    {
      "day": 1,
      "venue": "The Local Pub or somewhere else nearby as the weather permits",
      "available": true
    },
    {
      "day": 1,
      "venue": "The Other Pub",
      "available": true
    },
    {
      "day": 2,
      "venue": "Back Lane",
      "available": false
    },
    {
      "day": 2,
      "venue": "The Local Pub",
      "available": false
    },
    {
      "day": 2,
      "venue": "The Local Pub or somewhere else nearby as the weather permits",
      "available": true
    },
    {
      "day": 4,
      "venue": "The Other Pub",
      "available": true
    },
    {
      "day": 5,
      "venue": "Back Lane",
      "available": false
    }
  ];

  let data = oneWeekData.concat(
      oneWeekData.map(({day, venue, available}) => {
        return { day: day + 7, venue, available };
      }),
      oneWeekData.map(({day, venue, available}) => {
        return { day: day + 14, venue, available };
      }),
      oneWeekData.map(({day, venue, available}) => {
        return { day: day + 21, venue, available };
      }),
      oneWeekData.map(({day, venue, available}) => {
        return { day: day + 28, venue, available };
      }),
      oneWeekData.map(({day, venue, available}) => {
        return { day: day + 35, venue, available };
      })
  );

  const now = new Date();

  // Synthesize the data.
  data = data.map(({day, venue, available}) => {

    let d = new Date(now);
    d.setDate(d.getDate() + day);
    let date = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][d.getMonth()] + ' ' + d.getDate();

    let dateStamp = d.toISOString().split('T')[0];

    let status = available ? "Available" : "Sold Out";

    return { dateStamp, date, venue, status, available };
  });

  if (req.query.startDate && req.query.startDate != "null") {
    data = data.filter((concert) => (concert.dateStamp >= req.query.startDate));
  }

  if (req.query.endDate && req.query.endDate != "null") {
    data = data.filter((concert) => (concert.dateStamp <= req.query.endDate));
  }

  if (req.query.venue && req.query.venue != "null") {
    data = data.filter((concert) => (concert.venue.includes(req.query.venue)));
  }

  res.json({items: data, query: req.query});
});
