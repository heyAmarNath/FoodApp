/*
APP LAYOUT
Header
 - Logo
 - Nav-items
 - Cart
Body
  - Search Bar
  - RestaurantList
    - RestuarantCard
     - Image
     - Name
     - Rating
     - Cusines
Footer
 - Links
 - Copyright

*/

export const IMG_CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const restaurantList = [
  {
    info: {
      id: "85216",
      name: "McDonald's",
      cloudinaryImageId: "ee5f8e06b300efc07c9fe3f4df40dfc4",
      locality: "Akshayanagar",
      areaName: "Arekere",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "85216",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2500,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2500,
      },
      parentId: "630",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 17,
        lastMileTravel: 2.1,
        serviceability: "SERVICEABLE",
        slaString: "17 mins",
        lastMileTravelString: "2.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-04 02:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "ABOVE ₹999",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-358b1a85-ff1d-43fe-9cff-33f018e402e4",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/mcdonalds-akshayanagar-arekere-bangalore-85216",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "201224",
      name: "Asha tiffins",
      cloudinaryImageId: "n15vckntsiboiod3gpco",
      locality: "7th Sector",
      areaName: "HSR Layout",
      costForTwo: "₹200 for two",
      cuisines: ["Indian", "South Indian", "Beverages"],
      avgRating: 4.4,
      veg: true,
      feeDetails: {
        restaurantId: "201224",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 5000,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 5000,
      },
      parentId: "236243",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "30 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-03 15:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-358b1a85-ff1d-43fe-9cff-33f018e402e4",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/asha-tiffins-7th-sector-hsr-layout-bangalore-201224",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "272237",
      name: "EatFit",
      cloudinaryImageId: "94d3bc5e6392fbaf50686cf8cfab10ef",
      locality: "Sector-2",
      areaName: "HSR Layout",
      costForTwo: "₹270 for two",
      cuisines: [
        "Chinese",
        "Healthy Food",
        "Tandoor",
        "Pizzas",
        "North Indian",
        "Thalis",
        "Biryani",
      ],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "272237",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3500,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3500,
      },
      parentId: "76139",
      avgRatingString: "4.2",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 4.6,
        serviceability: "SERVICEABLE",
        slaString: "27 mins",
        lastMileTravelString: "4.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-04 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-358b1a85-ff1d-43fe-9cff-33f018e402e4",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/eatfit-sector-2-hsr-layout-bangalore-272237",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "323187",
      name: "Meghana Foods",
      cloudinaryImageId: "nw2xeql0jokm2rqnkzfs",
      locality: "Singasandra",
      areaName: "Hosur Road",
      costForTwo: "₹500 for two",
      cuisines: [
        "Biryani",
        "Andhra",
        "South Indian",
        "North Indian",
        "Chinese",
        "Seafood",
      ],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "323187",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3500,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3500,
      },
      parentId: "635",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 4.5,
        serviceability: "SERVICEABLE",
        slaString: "23 mins",
        lastMileTravelString: "4.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-04 01:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-358b1a85-ff1d-43fe-9cff-33f018e402e4",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/meghana-foods-singasandra-hosur-road-bangalore-323187",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "382760",
      name: "Andhra Gunpowder",
      cloudinaryImageId: "p9djxkqexhtpmpqndod6",
      locality: "Akshayanagar",
      areaName: "Arekere",
      costForTwo: "₹350 for two",
      cuisines: ["Andhra", "Biryani", "South Indian"],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "382760",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2500,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2500,
      },
      parentId: "10496",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 18,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "18 mins",
        lastMileTravelString: "1.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-04 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-358b1a85-ff1d-43fe-9cff-33f018e402e4",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/andhra-gunpowder-akshayanagar-arekere-bangalore-382760",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "590119",
      name: "Bakingo",
      cloudinaryImageId: "ctjaedvif65wepxpjwwk",
      locality: "1st  Stage",
      areaName: "BTM Layout",
      costForTwo: "₹299 for two",
      cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "590119",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 5800,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 5800,
      },
      parentId: "3818",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 6.7,
        serviceability: "SERVICEABLE",
        slaString: "31 mins",
        lastMileTravelString: "6.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-04 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-358b1a85-ff1d-43fe-9cff-33f018e402e4",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/bakingo-1st-stage-btm-layout-bangalore-590119",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "246632",
      name: "Great Indian Khichdi by EatFit",
      cloudinaryImageId: "6d7f8c8a9d2499f93478c88ea540a835",
      locality: "Roopena Agrahara",
      areaName: "Bommanahalli",
      costForTwo: "₹200 for two",
      cuisines: [
        "Home Food",
        "Indian",
        "North Indian",
        "Healthy Food",
        "Snacks",
        "Desserts",
        "Rajasthani",
        "South Indian",
        "Maharashtrian",
        "Sweets",
      ],
      avgRating: 4.3,
      veg: true,
      feeDetails: {
        restaurantId: "246632",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3500,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3500,
      },
      parentId: "319582",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 4.1,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        lastMileTravelString: "4.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-04 01:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-358b1a85-ff1d-43fe-9cff-33f018e402e4",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/great-indian-khichdi-by-eatfit-roopena-agrahara-bommanahalli-bangalore-246632",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "405999",
      name: "Big Bowl",
      cloudinaryImageId: "992f217c2f122c0d8fc385855ca30722",
      locality: "Akshay Nagar",
      areaName: "Arekere",
      costForTwo: "₹250 for two",
      cuisines: ["North Indian", "Chinese", "Tibetan", "Desserts"],
      avgRating: 3.8,
      feeDetails: {
        restaurantId: "405999",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2500,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2500,
      },
      parentId: "434792",
      avgRatingString: "3.8",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 2,
        serviceability: "SERVICEABLE",
        slaString: "20 mins",
        lastMileTravelString: "2.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-04 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "EVERY ITEM",
        subHeader: "@ ₹149",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-358b1a85-ff1d-43fe-9cff-33f018e402e4",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/big-bowl-akshay-nagar-arekere-bangalore-405999",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "294128",
      name: "Nandhana Palace",
      cloudinaryImageId: "195876a3181ef63f76e45e3a7b49b585",
      locality: "Doddathoguru village",
      areaName: "Electronic City",
      costForTwo: "₹500 for two",
      cuisines: ["Biryani", "Andhra", "South Indian", "North Indian"],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "294128",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 5800,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 5800,
      },
      parentId: "2120",
      avgRatingString: "4.1",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 6.3,
        serviceability: "SERVICEABLE",
        slaString: "30 mins",
        lastMileTravelString: "6.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-04 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-358b1a85-ff1d-43fe-9cff-33f018e402e4",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/nandhana-palace-doddathoguru-village-electronic-city-bangalore-294128",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];
