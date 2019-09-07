const data = [
    {
      "date": "4/5/2019",
      "temp": { hi: 78, lo: 67},
      "humidity": { hi: 64, lo: 58}
    },
    {
      "date": "4/6/2019",
      "temp": { hi: 76, lo: 68},
      "humidity": { hi: 64, lo: 57}
    },
    {
      "date": "4/7/2019",
      "temp": { hi: 74, lo: 69},
      "humidity": { hi: 68, lo: 56}
    },
    {
      "date": "4/8/2019",
      "temp": { hi: 77, lo: 63},
      "humidity": { hi: 69, lo: 55}
    },
    {
      "date": "4/10/2019",
      "temp": { hi: 79, lo: 64},
      "humidity": { hi: 70, lo: 55}
    },
    {
      "date": "4/11/2019",
      "temp": { hi: 78, lo: 64},
      "humidity": { hi: 70, lo: 55}
    },
    {
      "date": "4/12/2019",
      "temp": { hi: 78, lo: 65},
      "humidity": { hi: 69, lo: 55}
    },
    {
      "date": "4/15/2019",
      "temp": { hi: 72, lo: 65},
      "humidity": { hi: 64, lo: 56}
    },
    {
      "date": "4/18/2019",
      "temp": { hi: 71, lo: 66},
      "humidity": { hi: 62, lo: 56}
    },
    {
      "date": "4/19/2019",
      "temp": { hi: 75, lo: 66},
      "humidity": { hi: 64, lo: 57}
    },
    {
      "date": "4/21/2019",
      "temp": { hi: 76, lo: 67},
      "humidity": { hi: 60, lo: 58}
    },
    {
      "date": "4/25/2019",
      "temp": { hi: 76, lo: 67},
      "humidity": { hi: 61, lo: 58}
    },
    {
      "date": "4/27/2019",
      "temp": { hi: 78, lo: 61},
      "humidity": { hi: 61, lo: 50}
    },
    {
      "date": "4/29/2019",
      "temp": { hi: 81, lo: 63},
      "humidity": { hi: 61, lo: 49}
    },
    {
      "date": "5/2/2019",
      "temp": { hi: 78, lo: 64},
      "humidity": { hi: 62, lo: 48}
    },
    {
      "date": "5/6/2019",
      "temp": { hi: 77, lo: 68},
      "humidity": { hi: 63, lo: 48}
    },
    {
      "date": "5/8/2019",
      "temp": { hi: 76, lo: 68},
      "humidity": { hi: 64, lo: 49}
    },
    {
      "date": "5/11/2019",
      "temp": { hi: 76, lo: 67},
      "humidity": { hi: 64, lo: 50}
    },
    {
      "date": "5/12/2019",
      "temp": { hi: 75, lo: 67},
      "humidity": { hi: 65, lo: 51}
    },
    {
      "date": "5/15/2019",
      "temp": { hi: 74, lo: 66},
      "humidity": { hi: 65, lo: 52}
    },
    {
      "date": "5/17/2019",
      "temp": { hi: 73, lo: 65},
      "humidity": { hi: 66, lo: 54}
    },
    {
      "date": "5/19/2019",
      "temp": { hi: 73, lo: 65},
      "humidity": { hi: 68, lo: 54}
    },
    {
      "date": "5/23/2019",
      "temp": { hi: 76, lo: 65},
      "humidity": { hi: 68, lo: 54}
    },
    {
      "date": "5/26/2019",
      "temp": { hi: 77, lo: 66},
      "humidity": { hi: 68, lo: 55}
    },
    {
      "date": "5/27/2019",
      "temp": { hi: 78, lo: 67},
      "humidity": { hi: 68, lo: 55}
    },
    {
      "date": "5/28/2019",
      "temp": { hi: 79, lo: 65},
      "humidity": { hi: 67, lo: 56}
    },
    {
      "date": "5/30/2019",
      "temp": { hi: 79, lo: 64},
      "humidity": { hi: 67, lo: 57}
    },
    {
      "date": "6/1/2019",
      "temp": { hi: 75, lo: 64},
      "humidity": { hi: 64, lo: 59}
    },
    {
      "date": "6/3/2019",
      "temp": { hi: 74, lo: 63},
      "humidity": { hi: 64, lo: 53}
    },
    {
      "date": "6/4/2019",
      "temp": { hi: 75, lo: 63},
      "humidity": { hi: 64, lo: 53}
    },
    {
      "date": "6/7/2019",
      "temp": { hi: 75, lo: 64},
      "humidity": { hi: 61, lo: 55}
    },
    {
      "date": "6/8/2019",
      "temp": { hi: 76, lo: 65},
      "humidity": { hi: 62, lo: 53}
    },
    {
      "date": "6/10/2019",
      "temp": { hi: 77, lo: 65},
      "humidity": { hi: 61, lo: 53}
    },
    {
      "date": "6/12/2019",
      "temp": { hi: 72, lo: 65},
      "humidity": { hi: 62, lo: 52}
    },
    {
      "date": "6/14/2019",
      "temp": { hi: 72, lo: 66},
      "humidity": { hi: 59, lo: 54}
    },
    {
      "date": "6/17/2019",
      "temp": { hi: 71, lo: 67},
      "humidity": { hi: 59, lo: 56}
    },
    {
      "date": "6/18/2019",
      "temp": { hi: 73, lo: 67},
      "humidity": { hi: 61, lo: 51}
    },
    {
      "date": "6/19/2019",
      "temp": { hi: 74, lo: 66},
      "humidity": { hi: 62, lo: 51}
    },
    {
      "date": "6/21/2019",
      "temp": { hi: 75, lo: 67},
      "humidity": { hi: 63, lo: 52}
    },
    {
      "date": "6/24/2019",
      "temp": { hi: 75, lo: 65},
      "humidity": { hi: 64, lo: 53}
    },
    {
      "date": "6/26/2019",
      "temp": { hi: 77, lo: 68},
      "humidity": { hi: 66, lo: 50}
    },
    {
      "date": "6/30/2019",
      "temp": { hi: 78, lo: 70},
      "humidity": { hi: 63, lo: 50}
    },
    {
      "date": "7/3/2019",
      "temp": { hi: 80, lo: 71},
      "humidity": { hi: 69, lo: 50}
    },
    {
      "date": "7/4/2019",
      "temp": { hi: 80, lo: 70},
      "humidity": { hi: 70, lo: 49}
    },
    {
      "date": "7/8/2019",
      "temp": { hi: 79, lo: 69},
      "humidity": { hi: 69, lo: 50}
    },
    {
      "date": "7/11/2019",
      "temp": { hi: 75, lo: 64},
      "humidity": { hi: 69, lo: 51}
    },
    {
      "date": "7/13/2019",
      "temp": { hi: 74, lo: 62},
      "humidity": { hi: 68, lo: 53}
    },
    {
      "date": "7/14/2019",
      "temp": { hi: 74, lo: 62},
      "humidity": { hi: 67, lo: 53}
    },
    {
      "date": "7/16/2019",
      "temp": { hi: 72, lo: 59},
      "humidity": { hi: 64, lo: 53}
    },
    {
      "date": "7/18/2019",
      "temp": { hi: 72, lo: 59},
      "humidity": { hi: 66, lo: 53}
    },
    {
      "date": "7/20/2019",
      "temp": { hi: 73, lo: 65},
      "humidity": { hi: 64, lo: 53}
    },
    {
      "date": "7/22/2019",
      "temp": { hi: 71, lo: 69},
      "humidity": { hi: 64, lo: 53}
    },
    {
      "date": "7/23/2019",
      "temp": { hi: 77, lo: 68},
      "humidity": { hi: 64, lo: 53}
    },
    {
      "date": "7/24/2019",
      "temp": { hi: 75, lo: 66},
      "humidity": { hi: 70, lo: 65}
    },
    {
      "date": "7/26/2019",
      "temp": { hi: 76, lo: 65},
      "humidity": { hi: 75, lo: 74}
    },
    {
      "date": "7/29/2019",
      "temp": { hi: 78, lo: 68},
      "humidity": { hi: 74, lo: 70}
    },
    {
      "date": "8/1/2019",
      "temp": { hi: 79, lo: 68},
      "humidity": { hi: 70, lo: 53}
    },
    {
      "date": "8/3/2019",
      "temp": { hi: 76, lo: 68},
      "humidity": { hi: 66, lo: 59}
    },
    {
      "date": "8/5/2019",
      "temp": { hi: 75, lo: 65},
      "humidity": { hi: 64, lo: 53}
    }
   ]

   module.exports = data