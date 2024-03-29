const data = [
    {
      "date": "4/5/2019",
      "plantAppearance": "neutral",
      "didWater": true,
      "didFeed": true,
      "didTransplant": false,
      "didDefoliate": false,
      "didFlip": false,
      "didFlush": false,
      "notes": "Solo cup clone; watered with Mykos"
    },
    {
      "date": "4/6/2019",
      "plantAppearance": "sad",
      "didWater": false,
      "didFeed": false,
      "didTransplant": false,
      "didDefoliate": false,
      "didFlip": false,
      "didFlush": false,
      "notes": ""
    },
    {
      "date": "4/7/2019",
      "plantAppearance": "happy",
      "didWater": false,
      "didFeed": false,
      "didTransplant": false,
      "didDefoliate": false,
      "didFlip": false,
      "didFlush": false,
      "notes": ""
    },
    {
      "date": "4/8/2019",
      "plantAppearance": "happy",
      "didWater": true,
      "didFeed": false,
      "didTransplant": false,
      "didDefoliate": false,
      "didFlip": false,
      "didFlush": false,
      "notes": ""
    },
    {
      "date": "4/10/2019",
      "plantAppearance": "neutral",
      "didWater": false,
      "didFeed": false,
      "didTransplant": false,
      "didDefoliate": false,
      "didFlip": false,
      "didFlush": false,
      "notes": ""
    },
    {
      "date": "4/11/2019",
      "plantAppearance": "sad",
      "didWater": false,
      "didFeed": false,
      "didTransplant": false,
      "didDefoliate": false,
      "didFlip": false,
      "didFlush": false,
      "notes": ""
    },
    {
      "date": "4/12/2019",
      "plantAppearance": "happy",
      "didWater": true,
      "didFeed": false,
      "didTransplant": false,
      "didDefoliate": false,
      "didFlip": false,
      "didFlush": false,
      "notes": "Soil dried out completely"
    },
    {
      "date": "4/15/2019",
      "plantAppearance": "neutral",
      "didWater": true,
      "didFeed": false,
      "didTransplant": false,
      "didDefoliate": false,
      "didFlip": false,
      "didFlush": false,
      "notes": "New growth is starting to really show, solid green coloring"
    },
    {
      "date": "4/18/2019",
      "plantAppearance": "neutral",
      "didWater": true,
      "didFeed": false,
      "didTransplant": false,
      "didDefoliate": false,
      "didFlip": false,
      "didFlush": false,
      "notes": ""
    },
    {
      "date": "4/19/2019",
      "plantAppearance": "happy",
      "didWater": false,
      "didFeed": false,
      "didTransplant": false,
      "didDefoliate": false,
      "didFlip": false,
      "didFlush": false,
      "notes": "Plants looking good so far."
    },
    {
      "date": "4/21/2019",
      "plantAppearance": "happy",
      "didWater": true,
      "didFeed": false,
      "didTransplant": false,
      "didDefoliate": false,
      "didFlip": false,
      "didFlush": false,
      "notes": ""
    },
    {
      "date": "4/25/2019",
      "plantAppearance": "sad",
      "didWater": true,
      "didFeed": true,
      "didTransplant": true,
      "didDefoliate": false,
      "didFlip": false,
      "didFlush": false,
      "notes": "Sad look, but was letting soil dry out completely to transplant. Transplant from solo to 1 gal of Michigan Mix super soil with mykos for root growth and watering."
    },
    {
      "date": "4/27/2019",
      "plantAppearance": "neutral",
      "didWater": false,
      "didFeed": false,
      "didTransplant": false,
      "didDefoliate": false,
      "didFlip": false,
      "didFlush": false,
      "notes": ""
    },
    {
      "date": "4/29/2019",
      "plantAppearance": "happy",
      "didWater": true,
      "didFeed": false,
      "didTransplant": false,
      "didDefoliate": false,
      "didFlip": false,
      "didFlush": false,
      "notes": "Plants bouncing back from transplant"
    },
    {
      "date": "5/2/2019",
      "plantAppearance": "neutral",
      "didWater": true,
      "didFeed": false,
      "didTransplant": false,
      "didDefoliate": false,
      "didFlip": false,
      "didFlush": false,
      "notes": "plants seem ok, nothing new"
    },
    {
      "date": "5/6/2019",
      "plantAppearance": "neutral",
      "didWater": true,
      "didFeed": false,
      "didTransplant": false,
      "didDefoliate": false,
      "didFlip": false,
      "didFlush": false,
      "notes": "topped 3 of the tallest branches to promote lower growth"
    },
    {
      "date": "5/8/2019",
      "plantAppearance": "happy",
      "didWater": false,
      "didFeed": false,
      "didTransplant": false,
      "didDefoliate": false,
      "didFlip": false,
      "didFlush": false,
      "notes": "weaved a few of the longer branches through the net"
    },
    {
      "date": "5/11/2019",
      "plantAppearance": "happy",
      "didWater": true,
      "didFeed": false,
      "didTransplant": false,
      "didDefoliate": false,
      "didFlip": false,
      "didFlush": false,
      "notes": "added an extra day between watering and the plants liked the extra dry down time!"
    },
    {
      "date": "5/12/2019",
      "plantAppearance": "happy",
      "didWater": false,
      "didFeed": false,
      "didTransplant": false,
      "didDefoliate": false,
      "didFlip": false,
      "didFlush": false,
      "notes": "bending some branches under the net"
    },
    {
      "date": "5/15/2019",
      "plantAppearance": "sad",
      "didWater": true,
      "didFeed": false,
      "didTransplant": false,
      "didDefoliate": false,
      "didFlip": false,
      "didFlush": false,
      "notes": "need to start watering more frequently because soil is drying quickly. leaves at the bottom are a little yellow, could be time to transplant"
    },
    {
      "date": "5/17/2019",
      "plantAppearance": "happy",
      "didWater": true,
      "didFeed": false,
      "didTransplant": false,
      "didDefoliate": false,
      "didFlip": false,
      "didFlush": false,
      "notes": "plant looks better after watering"
    },
    {
      "date": "5/19/2019",
      "plantAppearance": "happy",
      "didWater": true,
      "didFeed": false,
      "didTransplant": false,
      "didDefoliate": false,
      "didFlip": false,
      "didFlush": false,
      "notes": "last watering before dry down and transplant to 5 gal"
    },
    {
      "date": "5/23/2019",
      "plantAppearance": "sad",
      "didWater": true,
      "didFeed": true,
      "didTransplant": true,
      "didDefoliate": false,
      "didFlip": false,
      "didFlush": false,
      "notes": "Final pot transplant - 5 gal container. Michigan Soil, mykos, water."
    },
    {
      "date": "5/26/2019",
      "plantAppearance": "happy",
      "didWater": false,
      "didFeed": false,
      "didTransplant": false,
      "didDefoliate": false,
      "didFlip": false,
      "didFlush": false,
      "notes": "looking good after transplant"
    },
    {
      "date": "5/27/2019",
      "plantAppearance": "happy",
      "didWater": false,
      "didFeed": false,
      "didTransplant": false,
      "didDefoliate": false,
      "didFlip": false,
      "didFlush": false,
      "notes": ""
    },
    {
      "date": "5/28/2019",
      "plantAppearance": "neutral",
      "didWater": true,
      "didFeed": false,
      "didTransplant": false,
      "didDefoliate": false,
      "didFlip": false,
      "didFlush": false,
      "notes": "didn't know how many days to wait before watering; potter seemed a little heavy still"
    },
    {
      "date": "5/30/2019",
      "plantAppearance": "happy",
      "didWater": false,
      "didFeed": false,
      "didTransplant": false,
      "didDefoliate": false,
      "didFlip": false,
      "didFlush": false,
      "notes": ""
    },
    {
      "date": "6/1/2019",
      "plantAppearance": "neutral",
      "didWater": true,
      "didFeed": false,
      "didTransplant": false,
      "didDefoliate": false,
      "didFlip": false,
      "didFlush": false,
      "notes": "last water before flip"
    },
    {
      "date": "6/3/2019",
      "plantAppearance": "neutral",
      "didWater": false,
      "didFeed": false,
      "didTransplant": false,
      "didDefoliate": false,
      "didFlip": false,
      "didFlush": false,
      "notes": "bent/moved all branches to lay flat under scrog net"
    },
    {
      "date": "6/4/2019",
      "plantAppearance": "happy",
      "didWater": true,
      "didFeed": false,
      "didTransplant": false,
      "didDefoliate": true,
      "didFlip": true,
      "didFlush": false,
      "notes": "flip to flower, 11on 12off cycle. stripped all leaves below net and any tiny branches that haven't peaked the net. Removed all big leaves at canopy level."
    },
    {
      "date": "6/7/2019",
      "plantAppearance": "neutral",
      "didWater": false,
      "didFeed": false,
      "didTransplant": false,
      "didDefoliate": false,
      "didFlip": false,
      "didFlush": false,
      "notes": "plants are starting to stretch"
    },
    {
      "date": "6/8/2019",
      "plantAppearance": "happy",
      "didWater": true,
      "didFeed": false,
      "didTransplant": false,
      "didDefoliate": false,
      "didFlip": false,
      "didFlush": false,
      "notes": ""
    },
    {
      "date": "6/10/2019",
      "plantAppearance": "happy",
      "didWater": false,
      "didFeed": false,
      "didTransplant": false,
      "didDefoliate": false,
      "didFlip": false,
      "didFlush": false,
      "notes": "weaving plants under canopy"
    },
    {
      "date": "6/12/2019",
      "plantAppearance": "neutral",
      "didWater": true,
      "didFeed": false,
      "didTransplant": false,
      "didDefoliate": false,
      "didFlip": false,
      "didFlush": false,
      "notes": ""
    },
    {
      "date": "6/14/2019",
      "plantAppearance": "happy",
      "didWater": false,
      "didFeed": false,
      "didTransplant": false,
      "didDefoliate": false,
      "didFlip": false,
      "didFlush": false,
      "notes": "bent a few branches that were growing fast. mostly even canopy right now. "
    },
    {
      "date": "6/17/2019",
      "plantAppearance": "sad",
      "didWater": true,
      "didFeed": false,
      "didTransplant": false,
      "didDefoliate": false,
      "didFlip": false,
      "didFlush": false,
      "notes": "let too many days between waterings i think"
    },
    {
      "date": "6/18/2019",
      "plantAppearance": "neutral",
      "didWater": false,
      "didFeed": false,
      "didTransplant": false,
      "didDefoliate": true,
      "didFlip": false,
      "didFlush": false,
      "notes": "starting to bounce back. stripped any new growth below the canopy. Removed all big leaves above the canopy"
    },
    {
      "date": "6/19/2019",
      "plantAppearance": "happy",
      "didWater": false,
      "didFeed": false,
      "didTransplant": false,
      "didDefoliate": false,
      "didFlip": false,
      "didFlush": false,
      "notes": "stretching seems to have really slowed down"
    },
    {
      "date": "6/21/2019",
      "plantAppearance": "happy",
      "didWater": true,
      "didFeed": false,
      "didTransplant": false,
      "didDefoliate": false,
      "didFlip": false,
      "didFlush": false,
      "notes": "buds are starting to form pistils"
    },
    {
      "date": "6/24/2019",
      "plantAppearance": "happy",
      "didWater": false,
      "didFeed": false,
      "didTransplant": false,
      "didDefoliate": false,
      "didFlip": false,
      "didFlush": false,
      "notes": "plants smell nice and fruity!"
    },
    {
      "date": "6/26/2019",
      "plantAppearance": "neutral",
      "didWater": true,
      "didFeed": false,
      "didTransplant": false,
      "didDefoliate": false,
      "didFlip": false,
      "didFlush": false,
      "notes": "plants looking good so far"
    },
    {
      "date": "6/30/2019",
      "plantAppearance": "happy",
      "didWater": true,
      "didFeed": false,
      "didTransplant": false,
      "didDefoliate": false,
      "didFlip": false,
      "didFlush": false,
      "notes": "wow! it looks like they exploded in growth"
    },
    {
      "date": "7/3/2019",
      "plantAppearance": "neutral",
      "didWater": false,
      "didFeed": false,
      "didTransplant": false,
      "didDefoliate": false,
      "didFlip": false,
      "didFlush": false,
      "notes": ""
    },
    {
      "date": "7/4/2019",
      "plantAppearance": "happy",
      "didWater": true,
      "didFeed": false,
      "didTransplant": false,
      "didDefoliate": false,
      "didFlip": false,
      "didFlush": false,
      "notes": "starting to really chunk up "
    },
    {
      "date": "7/8/2019",
      "plantAppearance": "happy",
      "didWater": true,
      "didFeed": false,
      "didTransplant": false,
      "didDefoliate": false,
      "didFlip": false,
      "didFlush": false,
      "notes": "smelling great."
    },
    {
      "date": "7/11/2019",
      "plantAppearance": "neutral",
      "didWater": false,
      "didFeed": false,
      "didTransplant": false,
      "didDefoliate": false,
      "didFlip": false,
      "didFlush": false,
      "notes": "plants look good. chunking up nicely, some orange hairs here and there."
    },
    {
      "date": "7/13/2019",
      "plantAppearance": "sad",
      "didWater": true,
      "didFeed": false,
      "didTransplant": false,
      "didDefoliate": false,
      "didFlip": false,
      "didFlush": false,
      "notes": "too much time between waterings, again. Went on vacation. otherwise they smell great"
    },
    {
      "date": "7/14/2019",
      "plantAppearance": "happy",
      "didWater": false,
      "didFeed": false,
      "didTransplant": false,
      "didDefoliate": false,
      "didFlip": false,
      "didFlush": false,
      "notes": ""
    },
    {
      "date": "7/16/2019",
      "plantAppearance": "netural",
      "didWater": false,
      "didFeed": false,
      "didTransplant": false,
      "didDefoliate": false,
      "didFlip": false,
      "didFlush": false,
      "notes": "looking good, more orange hairs"
    },
    {
      "date": "7/18/2019",
      "plantAppearance": "neutral",
      "didWater": true,
      "didFeed": false,
      "didTransplant": false,
      "didDefoliate": false,
      "didFlip": false,
      "didFlush": false,
      "notes": ""
    },
    {
      "date": "7/20/2019",
      "plantAppearance": "happy",
      "didWater": false,
      "didFeed": false,
      "didTransplant": false,
      "didDefoliate": false,
      "didFlip": false,
      "didFlush": false,
      "notes": "nice and chunky, smell fantastic"
    },
    {
      "date": "7/22/2019",
      "plantAppearance": "neutral",
      "didWater": false,
      "didFeed": false,
      "didTransplant": false,
      "didDefoliate": false,
      "didFlip": false,
      "didFlush": false,
      "notes": "plants look like they're ready to start flushing"
    },
    {
      "date": "7/23/2019",
      "plantAppearance": "neutral",
      "didWater": true,
      "didFeed": false,
      "didTransplant": false,
      "didDefoliate": false,
      "didFlip": false,
      "didFlush": true,
      "notes": "flushing has started. "
    },
    {
      "date": "7/24/2019",
      "plantAppearance": "happy",
      "didWater": false,
      "didFeed": false,
      "didTransplant": false,
      "didDefoliate": false,
      "didFlip": false,
      "didFlush": false,
      "notes": "looks like they're starting to put on weight"
    },
    {
      "date": "7/26/2019",
      "plantAppearance": "happy",
      "didWater": true,
      "didFeed": false,
      "didTransplant": false,
      "didDefoliate": false,
      "didFlip": false,
      "didFlush": true,
      "notes": "looking good"
    },
    {
      "date": "7/29/2019",
      "plantAppearance": "happy",
      "didWater": true,
      "didFeed": false,
      "didTransplant": false,
      "didDefoliate": false,
      "didFlip": false,
      "didFlush": true,
      "notes": "plants are leaning due to weight, colors are starting to fade to a nice reddish purple"
    },
    {
      "date": "8/1/2019",
      "plantAppearance": "neutral",
      "didWater": true,
      "didFeed": false,
      "didTransplant": false,
      "didDefoliate": false,
      "didFlip": false,
      "didFlush": true,
      "notes": "looking good, lots of dark reds and purples, some yellow on other leaves. Fall is here!"
    },
    {
      "date": "8/3/2019",
      "plantAppearance": "neutral",
      "didWater": true,
      "didFeed": false,
      "didTransplant": false,
      "didDefoliate": false,
      "didFlip": false,
      "didFlush": true,
      "notes": "last watering; lights off for 2 days of darkness before chop"
    },
    {
      "date": "8/5/2019",
      "plantAppearance": "neutral",
      "didWater": false,
      "didFeed": false,
      "didTransplant": false,
      "didDefoliate": false,
      "didFlip": false,
      "didFlush": false,
      "notes": "Harvest!"
    }
   ]

   module.exports = data