import React, { useState, useEffect } from 'react';
import Axios from 'axios';
// import Moment from 'moment';
// import { Alert, Container, Row, Col, Button, Figure } from 'react-bootstrap';
import { Alert, Container, Row, Col, Button, ListGroup } from 'react-bootstrap';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
// import '../../utils/formatTime'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';


export default function  Dashboard(props)  {

    const userId = localStorage.getItem('p3aajjkw-id')
    const [grow, setGrow] = useState({})
    const events = ['didWater', 'didFeed']
    
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // const [logs, setLogs] = useState([])
    // const [logs, setLogs] = useState([{"images":[],"_id":"5d6d2371ed4cf737a713d578","date":"2019-09-30T00:00:00.000Z","plantAppearance":"happy","didWater":true,"didFeed":true,"didTransplant":true,"didFlush":true,"didFlip":true,"didDefoliate":true,"notes":"should be on grow 5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6d2a24e38361390cfc4585","date":"2019-09-25T00:00:00.000Z","plantAppearance":"happy","didWater":false,"didFeed":false,"didTransplant":false,"didFlush":false,"didFlip":false,"didDefoliate":false,"notes":"","__v":0},{"images":[],"_id":"5d6d2aef63099c39217f1110","date":"2019-09-02T00:00:00.000Z","plantAppearance":"happy","didWater":true,"didFeed":true,"didTransplant":true,"didFlush":true,"didFlip":true,"didDefoliate":true,"notes":"test for grow property","__v":0},{"images":[],"_id":"5d6d2cdf70e82a39a0a01313","date":"2019-09-02T00:00:00.000Z","plantAppearance":"happy","didWater":false,"didFeed":false,"didTransplant":false,"didFlush":false,"didFlip":false,"didDefoliate":false,"notes":"","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6d2e57c417633a2ebc3407","date":"2019-09-02T00:00:00.000Z","plantAppearance":"happy","didWater":false,"didFeed":false,"didTransplant":false,"didFlush":false,"didFlip":false,"didDefoliate":false,"notes":"lsjkdhflkjsdhF923740978230497SDLKFJO;SIEDFU0913478URTOI134JRFP089U7E409RJ09ERCULOsef","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc36bb65ca283a0aad62","date":"2019-08-05T04:00:00.000Z","plantAppearance":"neutral","didWater":false,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"Harvest!","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc36bb65ca283a0aad61","date":"2019-08-03T04:00:00.000Z","plantAppearance":"neutral","didWater":true,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":true,"notes":"last watering; lights off for 2 days of darkness before chop","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc36bb65ca283a0aad60","date":"2019-08-01T04:00:00.000Z","plantAppearance":"neutral","didWater":true,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":true,"notes":"looking good, lots of dark reds and purples, some yellow on other leaves. Fall is here!","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc36bb65ca283a0aad5f","date":"2019-07-29T04:00:00.000Z","plantAppearance":"happy","didWater":true,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":true,"notes":"plants are leaning due to weight, colors are starting to fade to a nice reddish purple","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc36bb65ca283a0aad5e","date":"2019-07-26T04:00:00.000Z","plantAppearance":"happy","didWater":true,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":true,"notes":"looking good","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc36bb65ca283a0aad5d","date":"2019-07-24T04:00:00.000Z","plantAppearance":"happy","didWater":false,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"looks like they're starting to put on weight","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc36bb65ca283a0aad5c","date":"2019-07-23T04:00:00.000Z","plantAppearance":"neutral","didWater":true,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":true,"notes":"flushing has started. ","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc36bb65ca283a0aad5b","date":"2019-07-22T04:00:00.000Z","plantAppearance":"neutral","didWater":false,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"plants look like they're ready to start flushing","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc36bb65ca283a0aad5a","date":"2019-07-20T04:00:00.000Z","plantAppearance":"happy","didWater":false,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"nice and chunky, smell fantastic","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc36bb65ca283a0aad59","date":"2019-07-18T04:00:00.000Z","plantAppearance":"neutral","didWater":true,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc36bb65ca283a0aad58","date":"2019-07-16T04:00:00.000Z","plantAppearance":"netural","didWater":false,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"looking good, more orange hairs","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc36bb65ca283a0aad57","date":"2019-07-14T04:00:00.000Z","plantAppearance":"happy","didWater":false,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad56","date":"2019-07-13T04:00:00.000Z","plantAppearance":"sad","didWater":true,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"too much time between waterings, again. Went on vacation. otherwise they smell great","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad55","date":"2019-07-11T04:00:00.000Z","plantAppearance":"neutral","didWater":false,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"plants look good. chunking up nicely, some orange hairs here and there.","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad54","date":"2019-07-08T04:00:00.000Z","plantAppearance":"happy","didWater":true,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"smelling great.","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad53","date":"2019-07-04T04:00:00.000Z","plantAppearance":"happy","didWater":true,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"starting to really chunk up ","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad52","date":"2019-07-03T04:00:00.000Z","plantAppearance":"neutral","didWater":false,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad51","date":"2019-06-30T04:00:00.000Z","plantAppearance":"happy","didWater":true,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"wow! it looks like they exploded in growth","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad50","date":"2019-06-26T04:00:00.000Z","plantAppearance":"neutral","didWater":true,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"plants looking good so far","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad4f","date":"2019-06-24T04:00:00.000Z","plantAppearance":"happy","didWater":false,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"plants smell nice and fruity!","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad4e","date":"2019-06-21T04:00:00.000Z","plantAppearance":"happy","didWater":true,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"buds are starting to form pistils","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad4d","date":"2019-06-19T04:00:00.000Z","plantAppearance":"happy","didWater":false,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"stretching seems to have really slowed down","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad4c","date":"2019-06-18T04:00:00.000Z","plantAppearance":"neutral","didWater":false,"didFeed":false,"didTransplant":false,"didDefoliate":true,"didFlip":false,"didFlush":false,"notes":"starting to bounce back. stripped any new growth below the canopy. Removed all big leaves above the canopy","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad4b","date":"2019-06-17T04:00:00.000Z","plantAppearance":"sad","didWater":true,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"let too many days between waterings i think","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad4a","date":"2019-06-14T04:00:00.000Z","plantAppearance":"happy","didWater":false,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"bent a few branches that were growing fast. mostly even canopy right now. ","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad49","date":"2019-06-12T04:00:00.000Z","plantAppearance":"neutral","didWater":true,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad48","date":"2019-06-10T04:00:00.000Z","plantAppearance":"happy","didWater":false,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"weaving plants under canopy","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad47","date":"2019-06-08T04:00:00.000Z","plantAppearance":"happy","didWater":true,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad46","date":"2019-06-07T04:00:00.000Z","plantAppearance":"neutral","didWater":false,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"plants are starting to stretch","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad45","date":"2019-06-04T04:00:00.000Z","plantAppearance":"happy","didWater":true,"didFeed":false,"didTransplant":false,"didDefoliate":true,"didFlip":true,"didFlush":false,"notes":"flip to flower, 11on 12off cycle. stripped all leaves below net and any tiny branches that haven't peaked the net. Removed all big leaves at canopy level.","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad44","date":"2019-06-03T04:00:00.000Z","plantAppearance":"neutral","didWater":false,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"bent/moved all branches to lay flat under scrog net","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad43","date":"2019-06-01T04:00:00.000Z","plantAppearance":"neutral","didWater":true,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"last water before flip","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad42","date":"2019-05-30T04:00:00.000Z","plantAppearance":"happy","didWater":false,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad41","date":"2019-05-28T04:00:00.000Z","plantAppearance":"neutral","didWater":true,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"didn't know how many days to wait before watering; potter seemed a little heavy still","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad40","date":"2019-05-27T04:00:00.000Z","plantAppearance":"happy","didWater":false,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad3f","date":"2019-05-26T04:00:00.000Z","plantAppearance":"happy","didWater":false,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"looking good after transplant","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad3e","date":"2019-05-23T04:00:00.000Z","plantAppearance":"sad","didWater":true,"didFeed":true,"didTransplant":true,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"Final pot transplant - 5 gal container. Michigan Soil, mykos, water.","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad3d","date":"2019-05-19T04:00:00.000Z","plantAppearance":"happy","didWater":true,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"last watering before dry down and transplant to 5 gal","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad3c","date":"2019-05-17T04:00:00.000Z","plantAppearance":"happy","didWater":true,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"plant looks better after watering","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad3b","date":"2019-05-15T04:00:00.000Z","plantAppearance":"sad","didWater":true,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"need to start watering more frequently because soil is drying quickly. leaves at the bottom are a little yellow, could be time to transplant","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad3a","date":"2019-05-12T04:00:00.000Z","plantAppearance":"happy","didWater":false,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"bending some branches under the net","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad39","date":"2019-05-11T04:00:00.000Z","plantAppearance":"happy","didWater":true,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"added an extra day between watering and the plants liked the extra dry down time!","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad38","date":"2019-05-08T04:00:00.000Z","plantAppearance":"happy","didWater":false,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"weaved a few of the longer branches through the net","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad37","date":"2019-05-06T04:00:00.000Z","plantAppearance":"neutral","didWater":true,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"topped 3 of the tallest branches to promote lower growth","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad36","date":"2019-05-02T04:00:00.000Z","plantAppearance":"neutral","didWater":true,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"plants seem ok, nothing new","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad35","date":"2019-04-29T04:00:00.000Z","plantAppearance":"happy","didWater":true,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"Plants bouncing back from transplant","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad34","date":"2019-04-27T04:00:00.000Z","plantAppearance":"neutral","didWater":false,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad33","date":"2019-04-25T04:00:00.000Z","plantAppearance":"sad","didWater":true,"didFeed":true,"didTransplant":true,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"Sad look, but was letting soil dry out completely to transplant. Transplant from solo to 1 gal of Michigan Mix super soil with mykos for root growth and watering.","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad32","date":"2019-04-21T04:00:00.000Z","plantAppearance":"happy","didWater":true,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad31","date":"2019-04-19T04:00:00.000Z","plantAppearance":"happy","didWater":false,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"Plants looking good so far.","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad30","date":"2019-04-18T04:00:00.000Z","plantAppearance":"neutral","didWater":true,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad2f","date":"2019-04-15T04:00:00.000Z","plantAppearance":"neutral","didWater":true,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"New growth is starting to really show, solid green coloring","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad2e","date":"2019-04-12T04:00:00.000Z","plantAppearance":"happy","didWater":true,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"Soil dried out completely","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc34bb65ca283a0aad2d","date":"2019-04-11T04:00:00.000Z","plantAppearance":"sad","didWater":false,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc34bb65ca283a0aad2c","date":"2019-04-10T04:00:00.000Z","plantAppearance":"neutral","didWater":false,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc34bb65ca283a0aad2b","date":"2019-04-08T04:00:00.000Z","plantAppearance":"happy","didWater":true,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc34bb65ca283a0aad2a","date":"2019-04-07T04:00:00.000Z","plantAppearance":"happy","didWater":false,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":["5d6d6eb6630a793f268d30c6","5d6d6eea630a793f268d30c7","5d6d6f1f630a793f268d30c8","5d6d709bbb2ecb3f6cd29758","5d6d740865df7a3fa54323d6","5d6d7510d1d7273ff5b83c38"],"_id":"5d6abc34bb65ca283a0aad29","date":"2019-04-06T00:00:00.000Z","plantAppearance":"sad","didWater":false,"didFeed":true,"didTransplant":false,"didDefoliate":false,"didFlip":true,"didFlush":false,"notes":"test for image addition 222222","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":["5d6da11dc685a244c65e7ec4"],"_id":"5d6abc34bb65ca283a0aad28","date":"2019-04-05T00:00:00.000Z","plantAppearance":"neutral","didWater":true,"didFeed":true,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"Solo cup clone; watered with Mykos","grow":"5d6abbd6b5f3052823de8332","__v":0}])
    const [eventHistory, setEventHistory] = useState({})
    // const [eventHistory, setEventHistory] = useState({"didWater":[{"images":[],"_id":"5d6d2371ed4cf737a713d578","date":"2019-09-30T00:00:00.000Z","plantAppearance":"happy","didWater":true,"didFeed":true,"didTransplant":true,"didFlush":true,"didFlip":true,"didDefoliate":true,"notes":"should be on grow 5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6d2aef63099c39217f1110","date":"2019-09-02T00:00:00.000Z","plantAppearance":"happy","didWater":true,"didFeed":true,"didTransplant":true,"didFlush":true,"didFlip":true,"didDefoliate":true,"notes":"test for grow property","__v":0},{"images":[],"_id":"5d6abc36bb65ca283a0aad61","date":"2019-08-03T04:00:00.000Z","plantAppearance":"neutral","didWater":true,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":true,"notes":"last watering; lights off for 2 days of darkness before chop","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc36bb65ca283a0aad60","date":"2019-08-01T04:00:00.000Z","plantAppearance":"neutral","didWater":true,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":true,"notes":"looking good, lots of dark reds and purples, some yellow on other leaves. Fall is here!","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc36bb65ca283a0aad5f","date":"2019-07-29T04:00:00.000Z","plantAppearance":"happy","didWater":true,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":true,"notes":"plants are leaning due to weight, colors are starting to fade to a nice reddish purple","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc36bb65ca283a0aad5e","date":"2019-07-26T04:00:00.000Z","plantAppearance":"happy","didWater":true,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":true,"notes":"looking good","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc36bb65ca283a0aad5c","date":"2019-07-23T04:00:00.000Z","plantAppearance":"neutral","didWater":true,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":true,"notes":"flushing has started. ","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc36bb65ca283a0aad59","date":"2019-07-18T04:00:00.000Z","plantAppearance":"neutral","didWater":true,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad56","date":"2019-07-13T04:00:00.000Z","plantAppearance":"sad","didWater":true,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"too much time between waterings, again. Went on vacation. otherwise they smell great","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad54","date":"2019-07-08T04:00:00.000Z","plantAppearance":"happy","didWater":true,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"smelling great.","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad53","date":"2019-07-04T04:00:00.000Z","plantAppearance":"happy","didWater":true,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"starting to really chunk up ","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad51","date":"2019-06-30T04:00:00.000Z","plantAppearance":"happy","didWater":true,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"wow! it looks like they exploded in growth","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad50","date":"2019-06-26T04:00:00.000Z","plantAppearance":"neutral","didWater":true,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"plants looking good so far","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad4e","date":"2019-06-21T04:00:00.000Z","plantAppearance":"happy","didWater":true,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"buds are starting to form pistils","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad4b","date":"2019-06-17T04:00:00.000Z","plantAppearance":"sad","didWater":true,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"let too many days between waterings i think","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad49","date":"2019-06-12T04:00:00.000Z","plantAppearance":"neutral","didWater":true,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad47","date":"2019-06-08T04:00:00.000Z","plantAppearance":"happy","didWater":true,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad45","date":"2019-06-04T04:00:00.000Z","plantAppearance":"happy","didWater":true,"didFeed":false,"didTransplant":false,"didDefoliate":true,"didFlip":true,"didFlush":false,"notes":"flip to flower, 11on 12off cycle. stripped all leaves below net and any tiny branches that haven't peaked the net. Removed all big leaves at canopy level.","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad43","date":"2019-06-01T04:00:00.000Z","plantAppearance":"neutral","didWater":true,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"last water before flip","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad41","date":"2019-05-28T04:00:00.000Z","plantAppearance":"neutral","didWater":true,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"didn't know how many days to wait before watering; potter seemed a little heavy still","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad3e","date":"2019-05-23T04:00:00.000Z","plantAppearance":"sad","didWater":true,"didFeed":true,"didTransplant":true,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"Final pot transplant - 5 gal container. Michigan Soil, mykos, water.","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad3d","date":"2019-05-19T04:00:00.000Z","plantAppearance":"happy","didWater":true,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"last watering before dry down and transplant to 5 gal","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad3c","date":"2019-05-17T04:00:00.000Z","plantAppearance":"happy","didWater":true,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"plant looks better after watering","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad3b","date":"2019-05-15T04:00:00.000Z","plantAppearance":"sad","didWater":true,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"need to start watering more frequently because soil is drying quickly. leaves at the bottom are a little yellow, could be time to transplant","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad39","date":"2019-05-11T04:00:00.000Z","plantAppearance":"happy","didWater":true,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"added an extra day between watering and the plants liked the extra dry down time!","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad37","date":"2019-05-06T04:00:00.000Z","plantAppearance":"neutral","didWater":true,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"topped 3 of the tallest branches to promote lower growth","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad36","date":"2019-05-02T04:00:00.000Z","plantAppearance":"neutral","didWater":true,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"plants seem ok, nothing new","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad35","date":"2019-04-29T04:00:00.000Z","plantAppearance":"happy","didWater":true,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"Plants bouncing back from transplant","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad33","date":"2019-04-25T04:00:00.000Z","plantAppearance":"sad","didWater":true,"didFeed":true,"didTransplant":true,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"Sad look, but was letting soil dry out completely to transplant. Transplant from solo to 1 gal of Michigan Mix super soil with mykos for root growth and watering.","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad32","date":"2019-04-21T04:00:00.000Z","plantAppearance":"happy","didWater":true,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad30","date":"2019-04-18T04:00:00.000Z","plantAppearance":"neutral","didWater":true,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad2f","date":"2019-04-15T04:00:00.000Z","plantAppearance":"neutral","didWater":true,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"New growth is starting to really show, solid green coloring","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad2e","date":"2019-04-12T04:00:00.000Z","plantAppearance":"happy","didWater":true,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"Soil dried out completely","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc34bb65ca283a0aad2b","date":"2019-04-08T04:00:00.000Z","plantAppearance":"happy","didWater":true,"didFeed":false,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":["5d6da11dc685a244c65e7ec4"],"_id":"5d6abc34bb65ca283a0aad28","date":"2019-04-05T00:00:00.000Z","plantAppearance":"neutral","didWater":true,"didFeed":true,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"Solo cup clone; watered with Mykos","grow":"5d6abbd6b5f3052823de8332","__v":0}],"didFeed":[{"images":[],"_id":"5d6d2371ed4cf737a713d578","date":"2019-09-30T00:00:00.000Z","plantAppearance":"happy","didWater":true,"didFeed":true,"didTransplant":true,"didFlush":true,"didFlip":true,"didDefoliate":true,"notes":"should be on grow 5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6d2aef63099c39217f1110","date":"2019-09-02T00:00:00.000Z","plantAppearance":"happy","didWater":true,"didFeed":true,"didTransplant":true,"didFlush":true,"didFlip":true,"didDefoliate":true,"notes":"test for grow property","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad3e","date":"2019-05-23T04:00:00.000Z","plantAppearance":"sad","didWater":true,"didFeed":true,"didTransplant":true,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"Final pot transplant - 5 gal container. Michigan Soil, mykos, water.","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":[],"_id":"5d6abc35bb65ca283a0aad33","date":"2019-04-25T04:00:00.000Z","plantAppearance":"sad","didWater":true,"didFeed":true,"didTransplant":true,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"Sad look, but was letting soil dry out completely to transplant. Transplant from solo to 1 gal of Michigan Mix super soil with mykos for root growth and watering.","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":["5d6d6eb6630a793f268d30c6","5d6d6eea630a793f268d30c7","5d6d6f1f630a793f268d30c8","5d6d709bbb2ecb3f6cd29758","5d6d740865df7a3fa54323d6","5d6d7510d1d7273ff5b83c38"],"_id":"5d6abc34bb65ca283a0aad29","date":"2019-04-06T00:00:00.000Z","plantAppearance":"sad","didWater":false,"didFeed":true,"didTransplant":false,"didDefoliate":false,"didFlip":true,"didFlush":false,"notes":"test for image addition 222222","grow":"5d6abbd6b5f3052823de8332","__v":0},{"images":["5d6da11dc685a244c65e7ec4"],"_id":"5d6abc34bb65ca283a0aad28","date":"2019-04-05T00:00:00.000Z","plantAppearance":"neutral","didWater":true,"didFeed":true,"didTransplant":false,"didDefoliate":false,"didFlip":false,"didFlush":false,"notes":"Solo cup clone; watered with Mykos","grow":"5d6abbd6b5f3052823de8332","__v":0}]})
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    const [loading, setLoading] = useState(true)

    // async function setLogsState(logstmp) {
    //     await setLogs(logstmp)
    //     return
    // }

    // async componentDidMount () => {
    useEffect(() => {
        function populateEventHistory (logs) {

            // logs.forEach(log => console.log("did water   ", log.didWater))
            // console.log("logs", logs)
            const waterHistory = logs.filter(log => { return log.didWater === true})
            const feedHistory = logs.filter(log => { return log.didFeed === true})
            const tempHistory = {
                didWater: waterHistory,
                didFeed: feedHistory
            }

            setEventHistory(tempHistory)
            console.log("HISTORY.temp:" + JSON.stringify(tempHistory))
            console.log("HISTORY:" + JSON.stringify(eventHistory))
        } 
        async function fetchGrow(growId) {
            setLoading(true);
            let response = await Axios.get(`/api/grow/5d6abbd6b5f3052823de8332`);
            let data = response.data
            console.log("LOGS:" + JSON.stringify(data.dailyLogs))
            // setLogs(data.dailyLogs)
            setGrow(data)
            setLoading(false)
            return data;
        }
        async function fetchGrowId() {
            
            setLoading(true);
            let tempGrowId
            if (props.growId) {
                tempGrowId = props.growId
            } else {
                let response = await Axios.get(`/api/user/profile`);
                
                let user = response.data.user
                tempGrowId = user.defaultGrow
                
            }
            setLoading(false)
            
            return tempGrowId;
        }
        
        fetchGrowId().then(growId => {
            console.log(`GROWID: ${growId}`)
            fetchGrow(growId).then(data => {
                console.log("DATA    ", data.dailyLogs)
                // setLogsState(data.dailyLogs).then(console.log("fgid logs: ", logs))
                // console.log(`LOGS.data: ${JSON.stringify(data.dailyLogs)}`)
                // console.log(`LOGS.grow: ${JSON.stringify(grow.dailyLogs)}`)
                // console.log(`LOGS.logs: ${JSON.stringify(logs)}`)
                populateEventHistory (data.dailyLogs)
            })
            .catch(err => {
                console.log(err)
            })
        })
        
        // fetchGrowId().then(growId => {
        //     console.log(`GROWID: ${growId}`)
        //     fetchGrow(growId).then(data => {
        //         console.log("DATA    ", data)
        //         setLogs(data.dailyLogs)
        //         // console.log(`LOGS.data: ${JSON.stringify(data.dailyLogs)}`)
        //         // console.log(`LOGS.grow: ${JSON.stringify(grow.dailyLogs)}`)
        //         // console.log(`LOGS.logs: ${JSON.stringify(logs)}`)
        //         populateEventHistory ()
        //     }).catch(err => {
        //         console.log(err)
        //     })
        // })
    }, []);
    // }, [userId, grow, props.growId]);

    // async function getDidWater () {
    //     let response = await Axios.get('/api/daily/grow/5d6abbd6b5f3052823de8332',{event: 'water'});
    //     console.log(response.data)
    //     return response.data
    // }

    function populateLatest ()  {console.log("POPULATE CALLED")} 


    return (
        
        loading ?
            <LoadingSpinner />
            :
            grow ?
            <Container>
                    <Row>
                        <Col className="text-right">
                            <Button onClick={event => {
                                event.preventDefault()
                                props.history.push(`/newseason/?grow_id=${props.growId}`)
                            }} variant="outline-dark" size="sm">Edit</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h2 className="text-center">{grow.seasonName}</h2>
                        </Col>
                    </Row>

                    {/* <Figure>
                        <Figure.Image
                            width={171}
                            height={180}
                            alt="171x180"
                            src={"put new image here"}
                        >
                        </Figure.Image>
                    </Figure> */}

                    <Row>
                        <Col md={6} className="text-center">
                            <p><strong>Date Strated: </strong>{grow.dateStarted}}</p>
                        </Col>
                        <Col md={6} className="text-center">
                            <p><strong>Date Completed: </strong>{grow.dateCompleted}</p>
                        </Col>
                    </Row>

                    <Row>
                        <ListGroup>
                            <ListGroup.Item><strong>Strain: </strong>{grow.strainName}</ListGroup.Item>
                            <ListGroup.Item><strong>Last Date Watered: </strong>{eventHistory.didWater[0].date}</ListGroup.Item>
                            <ListGroup.Item><strong>Last Data Fed: </strong>{eventHistory.didFeed[0].date}</ListGroup.Item>
                        </ListGroup>
                    </Row>


                </Container>
            : 
                // the user has no grows 
                <Alert >
                    
                </Alert>
    )

}
