/* global slabs */

var testData = {
    values: ['mentions_17283728', 'mentions_17283729' ],
    categories: ['1288323623006', '19/01/2015', '20/01/2015'],
    labels: {
        'mentions_17283728':'"hate" on the dailymail.co.uk',
        'mentions_17283729':'"terror" on the dailymail.co.uk'
    },
    schemas:{
        "mentions_17283728":{
           "value":"number"
        },
        "mentions_17283729":{
           "value":"number",
           "url":"url"
        }
    },
    data: [
        {
            'mentions_17283729' : [{value: 131, url:"http://www.google.com"}]
        },
        {
            'mentions_17283728' : [{value:130}],
            'mentions_17283729' : [{value:35}]
        },
        {
            'mentions_17283728': [{value: 33}],
            'mentions_17283729' : [{value: 93}]
        }
    ]
};

slabs.getData().then(function(obj){
    
    var data = obj||testData;
    
    $('.jsonpanel').jsonpanel({
        data: data
    });
});