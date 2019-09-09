const data = [
    {
      "temp": { hi: 78, lo: 67},
      "humidity": { hi: 64, lo: 58}
    },
    {
      "temp": { hi: 76, lo: 68},
      "humidity": { hi: 64, lo: 57}
    },
    {
      "temp": { hi: 74, lo: 69},
      "humidity": { hi: 68, lo: 56}
    },
    {
      "temp": { hi: 77, lo: 63},
      "humidity": { hi: 69, lo: 55}
    },
    {
      "temp": { hi: 79, lo: 64},
      "humidity": { hi: 70, lo: 55}
    },
    {
      "temp": { hi: 78, lo: 64},
      "humidity": { hi: 70, lo: 55}
    },
    {
      "temp": { hi: 78, lo: 65},
      "humidity": { hi: 69, lo: 55}
    },
    {
      "temp": { hi: 72, lo: 65},
      "humidity": { hi: 64, lo: 56}
    },
    {
      "temp": { hi: 71, lo: 66},
      "humidity": { hi: 62, lo: 56}
    },
    {
      "temp": { hi: 75, lo: 66},
      "humidity": { hi: 64, lo: 57}
    },
    {
      "temp": { hi: 76, lo: 67},
      "humidity": { hi: 60, lo: 58}
    },
    {
      "temp": { hi: 76, lo: 67},
      "humidity": { hi: 61, lo: 58}
    },
    {
      "temp": { hi: 78, lo: 61},
      "humidity": { hi: 61, lo: 50}
    },
    {
      "temp": { hi: 81, lo: 63},
      "humidity": { hi: 61, lo: 49}
    },
    {
      "temp": { hi: 78, lo: 64},
      "humidity": { hi: 62, lo: 48}
    },
    {
      "temp": { hi: 77, lo: 68},
      "humidity": { hi: 63, lo: 48}
    },
    {
      "temp": { hi: 76, lo: 68},
      "humidity": { hi: 64, lo: 49}
    },
    {
      "temp": { hi: 76, lo: 67},
      "humidity": { hi: 64, lo: 50}
    },
    {
      "temp": { hi: 75, lo: 67},
      "humidity": { hi: 65, lo: 51}
    },
    {
      "temp": { hi: 74, lo: 66},
      "humidity": { hi: 65, lo: 52}
    },
    {
      "temp": { hi: 73, lo: 65},
      "humidity": { hi: 66, lo: 54}
    },
    {
      "temp": { hi: 73, lo: 65},
      "humidity": { hi: 68, lo: 54}
    },
    {
      "temp": { hi: 76, lo: 65},
      "humidity": { hi: 68, lo: 54}
    },
    {
      "temp": { hi: 77, lo: 66},
      "humidity": { hi: 68, lo: 55}
    },
    {
      "temp": { hi: 78, lo: 67},
      "humidity": { hi: 68, lo: 55}
    },
    {
      "temp": { hi: 79, lo: 65},
      "humidity": { hi: 67, lo: 56}
    },
    {
      "temp": { hi: 79, lo: 64},
      "humidity": { hi: 67, lo: 57}
    },
    {
      "temp": { hi: 75, lo: 64},
      "humidity": { hi: 64, lo: 59}
    },
    {
      "temp": { hi: 74, lo: 63},
      "humidity": { hi: 64, lo: 53}
    },
    {
      "temp": { hi: 75, lo: 63},
      "humidity": { hi: 64, lo: 53}
    },
    {
      "temp": { hi: 75, lo: 64},
      "humidity": { hi: 61, lo: 55}
    },
    {
      "temp": { hi: 76, lo: 65},
      "humidity": { hi: 62, lo: 53}
    },
    {
      "temp": { hi: 77, lo: 65},
      "humidity": { hi: 61, lo: 53}
    },
    {
      "temp": { hi: 72, lo: 65},
      "humidity": { hi: 62, lo: 52}
    },
    {
      "temp": { hi: 72, lo: 66},
      "humidity": { hi: 59, lo: 54}
    },
    {
      "temp": { hi: 71, lo: 67},
      "humidity": { hi: 59, lo: 56}
    },
    {
      "temp": { hi: 73, lo: 67},
      "humidity": { hi: 61, lo: 51}
    },
    {
      "temp": { hi: 74, lo: 66},
      "humidity": { hi: 62, lo: 51}
    },
    {
      "temp": { hi: 75, lo: 67},
      "humidity": { hi: 63, lo: 52}
    },
    {
      "temp": { hi: 75, lo: 65},
      "humidity": { hi: 64, lo: 53}
    },
    {
      "temp": { hi: 77, lo: 68},
      "humidity": { hi: 66, lo: 50}
    },
    {
      "temp": { hi: 78, lo: 70},
      "humidity": { hi: 63, lo: 50}
    },
    {
      "temp": { hi: 80, lo: 71},
      "humidity": { hi: 69, lo: 50}
    },
    {
      "temp": { hi: 80, lo: 70},
      "humidity": { hi: 70, lo: 49}
    },
    {
      "temp": { hi: 79, lo: 69},
      "humidity": { hi: 69, lo: 50}
    },
    {
      "temp": { hi: 75, lo: 64},
      "humidity": { hi: 69, lo: 51}
    },
    {
      "temp": { hi: 74, lo: 62},
      "humidity": { hi: 68, lo: 53}
    },
    {
      "temp": { hi: 74, lo: 62},
      "humidity": { hi: 67, lo: 53}
    },
    {
      "temp": { hi: 72, lo: 59},
      "humidity": { hi: 64, lo: 53}
    },
    {
      "temp": { hi: 72, lo: 59},
      "humidity": { hi: 66, lo: 53}
    },
    {
      "temp": { hi: 73, lo: 65},
      "humidity": { hi: 64, lo: 53}
    },
    {
      "temp": { hi: 71, lo: 69},
      "humidity": { hi: 64, lo: 53}
    },
    {
      "temp": { hi: 77, lo: 68},
      "humidity": { hi: 64, lo: 53}
    },
    {
      "temp": { hi: 75, lo: 66},
      "humidity": { hi: 70, lo: 65}
    },
    {
      "temp": { hi: 76, lo: 65},
      "humidity": { hi: 75, lo: 74}
    },
    {
      "temp": { hi: 78, lo: 68},
      "humidity": { hi: 74, lo: 70}
    },
    {
      "temp": { hi: 79, lo: 68},
      "humidity": { hi: 70, lo: 53}
    },
    {
      "temp": { hi: 76, lo: 68},
      "humidity": { hi: 66, lo: 59}
    },
    {
      "temp": { hi: 75, lo: 65},
      "humidity": { hi: 64, lo: 53}
    }
   ]

   module.exports = data