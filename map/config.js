var config = {
  // Refernence the mapbox style here
  style: "mapbox://styles/raghadestanbouli/ckrfh6dgt2ggy17oazqz8m8vo",
  accessToken:
    // Replace with clients accessToken
    "pk.eyJ1IjoicmFnaGFkZXN0YW5ib3VsaSIsImEiOiJja21vdmE1cWgyOHYxMnVtZ2EweTlzNW9rIn0.pH1YN5MUUxqb-py-3V6fcg",
  showMarkers: false,
  theme: "liberty",
  // true or false to turn 3D terrain on/off
  use3dTerrain: true,
  title: "SCROLL THE MAP TO VIEW EACH STOP ALONG THE JOURNEY.",
  // subtitle: 'A descriptive and interesting subtitle to draw in the reader',
  // byline: 'By a Digital Storyteller',
  footer:
    "Made with <a href= https://www.mapbox.com/ target=_blank>Mapbox</a> resources. Content provided by The Liberty Project.",
  // Chapter Content- use description to alter text
  // image for the image link
  // Location for camera positioning
  chapters: [
    {
      id: "overview",
      alignment: "left",
      hidden: false,
      title: 'My career path',
      image: './Images/Screenshot-01.png',
      description: 'Desire to learn by focusing on every project detail<a href= https://www.mapbox.com/ target=_blank>Mapbox</a> to develop a career in GIS',
      location: {
        center: { lon: -57.67905, lat: 41.85173 },
        zoom: 1.59,
        pitch: 0.00,
        bearing: 0.00
      },
      nimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [{}],
      onChapterExit: [],
    },
        {
      id: "fake1",
      alignment: "left",
      hidden: true,
      title: 'My career path',
      image: './Images/Screenshot-01.png',
      description: 'Desire to learn by focusing on every project detail to develop a career in GIS',
      location: {
          center: [36.27875,33.51397],
          zoom: 15,
          pitch: 60.00,
          bearing: -33.38
      },
      nimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: [{}],
      onChapterExit: [],
    },
    {
      id: "Damascus_University_id",
      alignment: "left",
      hidden: false,
      title: "Diploma in civil engineering",
      image: "./Images/Damascus_University.png",
      description: '2005-2008',
      location: {
          center: [36.27875,33.51397],
          zoom: 15,
          pitch: 60.00,
          bearing: -33.38
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [{}],
      onChapterExit: [],
    },
    {
      id: "fake2",
      alignment: "left",
      hidden: true,
      title: 'My career path',
      image: './Images/Screenshot-01.png',
      description: 'Desire to learn by focusing on every project detail to develop a career in GIS',
      location: {
        center: { lon: 36.29567, lat: 33.51578 },
        zoom: 14,
        pitch: 60.00,
        bearing: -47.38,
      },
      nimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: [{}],
      onChapterExit: [],
    },
    {
      id: "4c_id",
      alignment: "left",
      hidden: false,
      title: "GIS Specialist ",
      image: "./Images/4c.png",
      description: '2009-2013',
      location: { 
        center: { lon: 36.29567, lat: 33.51578 },
        zoom: 14,
        pitch: 60.00,
        bearing: -47.38,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [{}],
      onChapterExit: [],
    },
    {
      id: "fake3",
      alignment: "left",
      hidden: true,
      title: 'My career path',
      image: './Images/Screenshot-01.png',
      description: 'Desire to learn by focusing on every project detail to develop a career in GIS',
      location: {
        center: { lon: 36.29568, lat: 33.51582 },
        zoom: 14,
        pitch: 60.00,
        bearing:-47.38
      },
      nimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: [{}],
      onChapterExit: [],
    },
    {
      id: "KAd_id",
      alignment: "left",
      hidden: false,
      title: "GIS Specialist ",
      image: "./Images/KA.png",
      description: '2012-2013',
      location: { 
          center: { lon: 36.29568, lat: 33.51582 },
          zoom: 14,
          pitch: 80.00,
          bearing:-47.38
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [{}],
      onChapterExit: [],
    },
    {
      id: "rcuae_id",
      alignment: "left",
      hidden: false,
      title: "Graphic designer",
      image: "./Images/rcuae.png",
      description: 'Feb /2014 – April/2017',
      location: {
        center: [54.445417332210184,24.422985086482136],
        zoom: 14.52,
        pitch: 60.00,
        bearing: -47.42
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: [{}],
      onChapterExit: [],
    },
    {
      id: "KhCh_id",
      alignment: "left",
      hidden: false,
      title: "Khatib & Alami, ",
      image: "./Images/KA.png",
      description: 'May/2015 - May/2016',
      location: { 
          center: [55.39006807596946, 25.340331539744568],
      zoom: 12.84,
      pitch: 60.00,
      bearing: -59.42,
          },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: [{}],
      onChapterExit: [],
    },
    {
      id: 'fleming_id',
      hidden: false,
      alignment: "left",
      title: 'Certificate in Geographic Information Systems - Applications Specialist',
      image: "./Images/fleming.png",
      description: '2020 – 2021 ',
      location: { 
      center: [-78.37437530785537,44.26691251148637],
      zoom: 9.93,
      pitch: 60.00,
      bearing: -59.42,
          },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: [{}],
      onChapterExit: [],
    },
    {
      id: "mcgill_id",
      alignment: "left",
      hidden: false,
      title: 'Certificate in Computers and Information Technology',
      image: "./Images/mcgill.png",
      description: '2019-2022 (Ongoing)',
      location: { 
          center: { lon: -73.57777, lat: 45.50527 },
          zoom: 15.05,
          pitch: 60.00,
          bearing: -59.42,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: [{}],
      onChapterExit: [],
    },
    {
      id: "finish_id",
      alignment: "left",
      hidden: false,
      image: './Images/Screenshot-02.png',
      location: { 
        center: { lon: -27.67905, lat: 41.85173 },
        zoom: 1.59,
        pitch: 0.00,
        bearing: 0.00
          },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [{}],
      onChapterExit: [],
    }
  ],
};
