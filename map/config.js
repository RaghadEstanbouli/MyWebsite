// Number of slides that will drive (more = smoother)
// If this doesn't match the number of slides named 'drive-slide' in config below you will not complete the full journey
var driveSlides = 19;

// Number of points on drive route (more = higher quality, but slower to process)
var driveSmoothness = 800;

// Value used to drive
var driveTime = driveSlides*driveSmoothness;

// Do you want to follow the point? True = follow
// True is not that smpooth- working on seeing if can get it to follow more smoothly 
var followPoint = false;
// ...If so, what zoom, pitch, and bearing should be used to follow?
var followZoomLevel = 18;
var followBearing = -33.38;
var followPitch = 80.00;

// to add 'driving' slides just make sure to add 'drive to beginning of slide id'
// you also need to add a running total to the end of each 'drive-slide', (ex. drive-slide-0, drive-slide-1, drive-slide-2, etc.)
var config = {
    //style: 'mapbox://styles/vanritto/ckp6e61p50nwy17o58eyrsnoe',
	style: 'mapbox://styles/raghadestanbouli/ckrfh6dgt2ggy17oazqz8m8vo',
    accessToken: 'pk.eyJ1IjoicmFnaGFkZXN0YW5ib3VsaSIsImEiOiJja21vdmE1cWgyOHYxMnVtZ2EweTlzNW9rIn0.pH1YN5MUUxqb-py-3V6fcg',
    showMarkers: false,
    // markerColor: 'green',
    theme: 'liberty',
    alignment: 'left',
    title: 'Liberty Project',
    subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'By a Digital Storyteller',
    footer: 'Source: source citations, etc.',
    chapters: [
//--------START----------//               
{
    id: 'start',
    alignment: 'left',
    hidden: false,
    title: 'My career path',
    image: './Images/Screenshot-01.png',
    description: 'Desire to learn by focusing on every project detail to develop a career in GIS',
    location: {
        center: { lon: -81.88715, lat: 41.02239 },
        zoom: 2.19,
        pitch: 0.00,
        bearing: 0.00
    },
    onChapterEnter: [
        {
        layer: 'damascus-university',
        opacity: 1
        },
        {
        layer: '4c',
        opacity: 1
        },
        {
        layer: 'khdamascus',
        opacity: 1
        },
        {
        layer: 'rcuae',
        opacity: 1
        },
        {
        layer: 'khsharjah',
        opacity: 1
        },
        {
        layer: 'mcgill',
        opacity: 1
        },
        {
        layer: 'fleming',
        opacity: 1
        }
            
    ],
    onChapterExit: [
    ]
},
//--------------------------------------------------------------------------
//0
{
    //id: 'drive-slide-0',
    id: 'SlideNum_0',
    hidden: false,
    title: "Diploma in civil engineering",
    image: "./Images/Damascus_University.png",
    description: '2005-2008',
    location: {
        center: [36.27875,33.51397],
        zoom: 16.50,
        pitch: 60.00,
        bearing: -33.38
    },
    onChapterEnter: [
        {
        layer: 'damascus-university',
        opacity: 1
        },
        {
        layer: '4c',
        opacity: 0
        },
        {
        layer: 'khdamascus',
        opacity: 0
        },
        {
        layer: 'rcuae',
        opacity: 0
        },
        {
        layer: 'khsharjah',
        opacity: 0
        },
        {
        layer: 'mcgill',
        opacity: 0
        },
        {
        layer: 'fleming',
        opacity: 0
        }
    ],
    onChapterExit: []
},
//1    
{
    id: 'SlideNum_1',
    hidden: false,
    title: "GIS Specialist ",
    image: "./Images/4c.png",
    description: '2009-2013',
    location: { 
        center: { lon: 36.29567, lat: 33.51578 },
        zoom: 16.60,
        pitch: 60.00,
        bearing: -47.38,
    },
    onChapterEnter: [
        {
            layer: '4c',
            opacity: 1
            },
            {
            layer: 'khdamascus',
            opacity: 0
            },
            {
            layer: 'rcuae',
            opacity: 0
            },
            {
            layer: 'khsharjah',
            opacity: 0
            },
            {
            layer: 'mcgill',
            opacity: 0
            },
            {
            layer: 'fleming',
            opacity: 0
            }
    ],
    onChapterExit: [
        {}
    ]
},
//2    
{
    id: 'SlideNum_2',
    hidden: false,
    title: "GIS Specialist ",
    image: "./Images/KA.png",
    description: '2012-2013',
    location: { 
        center: { lon: 36.29568, lat: 33.51582 },
        zoom: 16.10,
        pitch: 60.00,
        bearing: 163.35
    },
    onChapterEnter: [
            {
            layer: 'khdamascus',
            opacity: 1
            },
            {
            layer: 'rcuae',
            opacity: 0
            },
            {
            layer: 'khsharjah',
            opacity: 0
            },
            {
            layer: 'mcgill',
            opacity: 0
            },
            {
            layer: 'fleming',
            opacity: 0
            }
    ],
    onChapterExit: [
        {}
    ]
},
//3    
 
{
    id: 'SlideNum_3',
    hidden: false,
    title: "Graphic designer",
    image: "./Images/rcuae.png",
    description: 'Feb /2014 – April/2017',
    location: {
        center: [54.38224,24.46772],
        zoom: 13.01,
        pitch: 60.00,
        bearing: 163.35
		},
    onChapterEnter: [
            {
            layer: 'rcuae',
            opacity: 1
            },
            {
            layer: 'khsharjah',
            opacity: 0
            },
            {
            layer: 'mcgill',
            opacity: 0
            },
            {
            layer: 'fleming',
            opacity: 0
            }
    ],
    onChapterExit: [
        {}
    ]
},
//4    
{
    id: 'SlideNum_4',
    hidden: false,
    title: "Khatib & Alami, ",
    image: "./Images/KA.png",
    description: 'May/2015 - May/2016',
    location: { 
        center: [55.39006807596946, 25.340331539744568],
		zoom: 12.84,
		pitch: 60.00,
		bearing: -114.62,
        },
    onChapterEnter: [

            {
            layer: 'khsharjah',
            opacity: 1
            },
            {
            layer: 'mcgill',
            opacity: 0
            },
            {
            layer: 'fleming',
            opacity: 0
            }
    ],
    onChapterExit: [
        {}
    ]
},
//5    
{
    id: 'SlideNum_5',
    hidden: true,

    location: { 
        center: { lon: -81.88715, lat: 41.02239 },
        zoom: 2.19,
        pitch: 0.00,
        bearing: 0.00
        },
    onChapterEnter: [


            {
            layer: 'mcgill',
            opacity: 0
            },
            {
            layer: 'fleming',
            opacity: 0
            }
    ],
    onChapterExit: [
        {}
    ]
},
//6
{
    id: 'SlideNum_6',
    hidden: true,
    location: { 
        center: { lon: -81.88715, lat: 41.02239 },
        zoom: 2.19,
        pitch: 0.00,
        bearing: 0.00
        },
    onChapterEnter: [


            {
            layer: 'mcgill',
            opacity: 0
            },
            {
            layer: 'fleming',
            opacity: 0
            }
    ],
    onChapterExit: [
        {}
    ]
},
//7    
{
    id: 'SlideNum_7',
    hidden: true,
    location: { 
        center: { lon: -81.88715, lat: 41.02239 },
        zoom: 2.19,
        pitch: 0.00,
        bearing: 0.00
        },
    onChapterEnter: [


            {
            layer: 'mcgill',
            opacity: 0
            },
            {
            layer: 'fleming',
            opacity: 0
            }
    ],
    onChapterExit: [
        {}
    ]
},
//8
{
    id: 'SlideNum_8',
    hidden: true,
    location: { 
        center: { lon: -81.88715, lat: 41.02239 },
        zoom: 2.19,
        pitch: 0.00,
        bearing: 0.00
        },
    onChapterEnter: [


            {
            layer: 'mcgill',
            opacity: 0
            },
            {
            layer: 'fleming',
            opacity: 0
            }
    ],
    onChapterExit: [
        {}
    ]
},
//9    
{
    id: 'SlideNum_9',
    hidden: true,
    location: { 
        center: { lon: -81.88715, lat: 41.02239 },
        zoom: 2.19,
        pitch: 0.00,
        bearing: 0.00
        },
    onChapterEnter: [

            {
            layer: 'mcgill',
            opacity: 0
            },
            {
            layer: 'fleming',
            opacity: 0
            }
    ],
    onChapterExit: [
        {}
    ]
},
//10
{
    id: 'SlideNum_10',
    hidden: true,
    location: { 
        center: { lon: -81.88715, lat: 41.02239 },
        zoom: 2.19,
        pitch: 0.00,
        bearing: 0.00
        },
    onChapterEnter: [

            {
            layer: 'mcgill',
            opacity: 0
            },
            {
            layer: 'fleming',
            opacity: 0
            }
    ],
    onChapterExit: [
        {}
    ]
},
//11    
{
    id: 'SlideNum_11',
    hidden: true,
    location: { 
        center: { lon: -81.88715, lat: 41.02239 },
        zoom: 2.19,
        pitch: 0.00,
        bearing: 0.00
        },
    onChapterEnter: [


            {
            layer: 'mcgill',
            opacity: 0
            },
            {
            layer: 'fleming',
            opacity: 0
            }
    ],
    onChapterExit: [
        {}
    ]
},
//12
{
    id: 'SlideNum_12',
    hidden: true,
    location: { 
        center: { lon: -81.88715, lat: 41.02239 },
        zoom: 2.19,
        pitch: 0.00,
        bearing: 0.00
        },
    onChapterEnter: [


            {
            layer: 'mcgill',
            opacity: 0
            },
            {
            layer: 'fleming',
            opacity: 0
            }
    ],
    onChapterExit: [
        {}
    ]
},
//13
{
    id: 'SlideNum_13',
    hidden: false,
    title: 'Start Location: Working in Mozambique.',
    image: './Images/TestImage2.png',
    description: 'mcgill',
    location: { 
        center: { lon: -81.88715, lat: 41.02239 },
        zoom: 2.19,
        pitch: 0.00,
        bearing: 0.00
        },
    onChapterEnter: [


            {
            layer: 'mcgill',
            opacity: 0
            },
            {
            layer: 'fleming',
            opacity: 0
            }
    ],
    onChapterExit: [
        {}
    ]
},
//14
{
    id: 'SlideNum_14',
    hidden: true,
    location: { 
        center: { lon: -81.88715, lat: 41.02239 },
        zoom: 2.19,
        pitch: 0.00,
        bearing: 0.00
        },
    onChapterEnter: [


            {
            layer: 'mcgill',
            opacity: 0
            },
            {
            layer: 'fleming',
            opacity: 0
            }
    ],
    onChapterExit: [
        {}
    ]
},
//15
{
    id: 'SlideNum_15',
    hidden: true,
    location: { 
        center: { lon: -81.88715, lat: 41.02239 },
        zoom: 2.19,
        pitch: 0.00,
        bearing: 0.00
        },
    onChapterEnter: [


            {
            layer: 'mcgill',
            opacity: 0
            },
            {
            layer: 'fleming',
            opacity: 0
            }
    ],
    onChapterExit: [
        {}
    ]
},
//16
{
    id: 'SlideNum_16',
    hidden: true,
    location: { 
        center: { lon: -81.88715, lat: 41.02239 },
        zoom: 2.19,
        pitch: 0.00,
        bearing: 0.00
        },
    onChapterEnter: [

            {
            layer: 'mcgill',
            opacity: 0
            },
            {
            layer: 'fleming',
            opacity: 0
            }
    ],
    onChapterExit: [
        {}
    ]
},
//17
{
    id: 'SlideNum_17',
    hidden: false,
    location: { 
        center: { lon: -81.88715, lat: 41.02239 },
        zoom: 2.19,
        pitch: 0.00,
        bearing: 0.00
        },
    onChapterEnter: [

            {
            layer: 'mcgill',
            opacity: 0
            },
            {
            layer: 'fleming',
            opacity: 0
            }
    ],
    onChapterExit: [
        {}
    ]
},
//18
{
    id: 'SlideNum_18',
    title: 'Certificate in Geographic Information Systems - Applications Specialist',
    image: "./images/fleming.png",
    description: '2020 – 2021 ',
    location: { 
		center: [-78.37437530785537,44.26691251148637],
		zoom: 9.93,
		pitch: 60.00,
		bearing: -114.62,
        },
    onChapterEnter: [


            {
            layer: 'mcgill',
            opacity: 0
            },
            {
            layer: 'fleming',
            opacity: 1
            }
    ],
    onChapterExit: [
        {}
    ]
},
//19
{
    id: 'SlideNum_19',
    hidden: false,
    location: { 
		center: [-78.37437530785537,44.26691251148637],
		zoom: 4,
		pitch: 60.00,
		bearing: -114.62,
        },
    onChapterEnter: [

            {
            layer: 'mcgill',
            opacity: 0
            },
            {
            layer: 'fleming',
            opacity: 1
            }
    ],
    onChapterExit: [
        {}
    ]
},
//20
{
    id: 'SlideNum_20',
    hidden: true,
    title: 'Certificate in Computers and Information Technology',
    image: "./Images/mcgill.png",
    description: '2019-2022 (Ongoing)',
    location: { 
        center: { lon: -73.57777, lat: 45.50527 },
        zoom: 15.05,
        pitch: 60.00,
        bearing: -59.42,
    },
    onChapterEnter: [


            {
            layer: 'mcgill',
            opacity: 1
            }
    ],
    onChapterExit: [
        {}
    ]
},
//21
{
    id: 'SlideNum_21',
    hidden: true,
    image: './Images/Screenshot-02.png',
    location: { 
        center: { lon: -81.88715, lat: 41.02239 },
        zoom: 2.19,
        pitch: 0.00,
        bearing: 0.00
        },
        onChapterEnter: [
            {
                layer: 'damascus-university',
                opacity: 1
                },
                {
                layer: '4c',
                opacity: 1
                },
                {
                layer: 'khdamascus',
                opacity: 1
                },
                {
                layer: 'rcuae',
                opacity: 1
                },
                {
                layer: 'khsharjah',
                opacity: 1
                },
                {
                layer: 'mcgill',
                opacity: 1
                },
                {
                layer: 'fleming',
                opacity: 1
                }
        ],
        onChapterExit: [
            {}
        ]
},
//22
// {
//     id: 'SlideNum_22',
//     hidden: true,
//     title: 'Start Location: Working in Mozambique.',
//     image: './Images/TestImage2.png',
//     description: 'mcgill',
//     location: { 
//         center: { lon: -117.25390, lat: 40.82327 },
//         zoom: 1.89,
//         pitch: 0.00,
//         bearing: 0.00
//         },
//     onChapterEnter: [

//             {
//             layer: 'khsharjah',
//             opacity: 0
//             },
//             {
//             layer: 'mcgill',
//             opacity: 0
//             },
//             {
//             layer: 'fleming',
//             opacity: 0
//             }
//     ],
//     onChapterExit: [
//         {}
//     ]
// },
//23
// {
//     id: 'SlideNum_23',
//     hidden: false,
//     title: 'Start Location: Working in Mozambique.',
//     image: './Images/TestImage2.png',
//     description: 'mcgill',
//     location: { 
//         center: { lon: -117.25390, lat: 40.82327 },
//         zoom: 1.89,
//         pitch: 0.00,
//         bearing: 0.00
//         },
//     onChapterEnter: [

//             {
//             layer: 'khsharjah',
//             opacity: 0
//             },
//             {
//             layer: 'mcgill',
//             opacity: 0
//             },
//             {
//             layer: 'fleming',
//             opacity: 0
//             }
//     ],
//     onChapterExit: [
//         {}
//     ]
// },
//24
// {
//     id: 'SlideNum_24',
//     hidden: true,
//     title: 'Start Location: Working in Mozambique.',
//     image: './Images/TestImage2.png',
//     description: 'mcgill',
//     location: { 
//         center: { lon: -117.25390, lat: 40.82327 },
//         zoom: 1.89,
//         pitch: 0.00,
//         bearing: 0.00
//         },
//     onChapterEnter: [

//             {
//             layer: 'khsharjah',
//             opacity: 0
//             },
//             {
//             layer: 'mcgill',
//             opacity: 0
//             },
//             {
//             layer: 'fleming',
//             opacity: 0
//             }
//     ],
//     onChapterExit: [
//         {}
//     ]
// },
//25
// {
//     id: 'SlideNum_25',
//     hidden: true,
//     title: 'Start Location: Working in Mozambique.',
//     image: './Images/TestImage2.png',
//     description: 'mcgill',
//     location: { 
//         center: { lon: -117.25390, lat: 40.82327 },
//         zoom: 1.89,
//         pitch: 0.00,
//         bearing: 0.00
//         },
//     onChapterEnter: [

//             {
//             layer: 'khsharjah',
//             opacity: 0
//             },
//             {
//             layer: 'mcgill',
//             opacity: 0
//             },
//             {
//             layer: 'fleming',
//             opacity: 0
//             }
//     ],
//     onChapterExit: [
//         {}
//     ]
// },
//26
// {
//     id: 'SlideNum_26',
//     hidden: true,
//     title: 'Start Location: Working in Mozambique.',
//     image: './Images/TestImage2.png',
//     description: 'mcgill',
//     location: {
//         center: { lon: -117.25390, lat: 40.82327 },
//         zoom: 1.89,
//         pitch: 0.00,
//         bearing: 0.00
//     },
//     onChapterEnter: [
//         {
//             layer: 'mcgill',
//             opacity: 0
//             },
//             {
//             layer: 'fleming',
//             opacity: 1
//             }
//     ],
//     onChapterExit: [
//         {}
//     ]
// },
//27
// {
//     id: 'SlideNum_27',
//     hidden: true,
//     title: 'Start Location: Working in Mozambique.',
//     image: './Images/TestImage2.png',
//     description: 'fleming',
//     location: {
//         center: { lon: -117.25390, lat: 40.82327 },
//         zoom: 1.89,
//         pitch: 0.00,
//         bearing: 0.00
//     },
//     onChapterEnter: [
//             {
//             layer: 'mcgill',
//             opacity: 1
//             }
//     ],
//     onChapterExit: [
//         {}
//     ]
// },
//28
// {
//     id: 'SlideNum_28',
//     hidden: true,
//     title: 'Start Location: Working in Mozambique.',
//     image: './Images/TestImage2.png',
//     description: 'mcgill',
//     location: {
//         center: { lon: -117.25390, lat: 40.82327 },
//         zoom: 1.89,
//         pitch: 0.00,
//         bearing: 0.00
//     },
    // onChapterEnter: [
    //     {
    //         layer: 'damascus-university',
    //         opacity: 1
    //         },
    //         {
    //         layer: '4c',
    //         opacity: 1
    //         },
    //         {
    //         layer: 'khdamascus',
    //         opacity: 1
    //         },
    //         {
    //         layer: 'rcuae',
    //         opacity: 1
    //         },
    //         {
    //         layer: 'khsharjah',
    //         opacity: 1
    //         },
    //         {
    //         layer: 'mcgill',
    //         opacity: 1
    //         },
    //         {
    //         layer: 'fleming',
    //         opacity: 1
    //         }
    // ],
    // onChapterExit: [
    //     {}
    // ]
// },

    ]
};
