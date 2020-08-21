TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMax": 120,
  "class": "Panorama",
  "label": "INTSource-01S",
  "partial": false,
  "hfovMin": 60,
  "id": "panorama_071EAB13_0980_0802_41A1_84CCAB4A6E08",
  "hfov": 360,
  "thumbnailUrl": "media/panorama_071EAB13_0980_0802_41A1_84CCAB4A6E08_t.jpg",
  "vfov": 180,
  "pitch": 0,
  "frames": [
   {
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_071EAB13_0980_0802_41A1_84CCAB4A6E08_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 2544,
       "width": 2544
      },
      {
       "url": "media/panorama_071EAB13_0980_0802_41A1_84CCAB4A6E08_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 1273,
       "width": 1273
      }
     ],
     "class": "ImageResource"
    },
    "right": {
     "levels": [
      {
       "url": "media/panorama_071EAB13_0980_0802_41A1_84CCAB4A6E08_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 2544,
       "width": 2544
      },
      {
       "url": "media/panorama_071EAB13_0980_0802_41A1_84CCAB4A6E08_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 1273,
       "width": 1273
      }
     ],
     "class": "ImageResource"
    },
    "back": {
     "levels": [
      {
       "url": "media/panorama_071EAB13_0980_0802_41A1_84CCAB4A6E08_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 2544,
       "width": 2544
      },
      {
       "url": "media/panorama_071EAB13_0980_0802_41A1_84CCAB4A6E08_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 1273,
       "width": 1273
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_071EAB13_0980_0802_41A1_84CCAB4A6E08_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 2544,
       "width": 2544
      },
      {
       "url": "media/panorama_071EAB13_0980_0802_41A1_84CCAB4A6E08_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 1273,
       "width": 1273
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_071EAB13_0980_0802_41A1_84CCAB4A6E08_0_HS_3_0.png",
           "class": "ImageResourceLevel",
           "height": 94,
           "width": 67
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 3.05,
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 6.82,
        "yaw": -0.83
       }
      ],
      "id": "overlay_01208234_0980_1806_419A_59BC2821C447",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 6.82,
        "image": {
         "levels": [
          {
           "url": "media/panorama_071EAB13_0980_0802_41A1_84CCAB4A6E08_0_HS_3_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 47,
           "width": 33
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -0.83,
        "hfov": 3.05
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "toolTip": "About Us",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "var newWindow = window.open(\"https://intercontinentalsource.com/\", \"_blank\"); newWindow.focus()"
       }
      ]
     },
     {
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_071EAB13_0980_0802_41A1_84CCAB4A6E08_0_HS_2_0.png",
           "class": "ImageResourceLevel",
           "height": 58,
           "width": 49
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 2.2,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -7.78,
        "yaw": -12.58
       }
      ],
      "id": "overlay_0624A357_0980_1802_41A2_6698C18C4F04",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -7.78,
        "image": {
         "levels": [
          {
           "url": "media/panorama_071EAB13_0980_0802_41A1_84CCAB4A6E08_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 29,
           "width": 24
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -12.58,
        "hfov": 2.2
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "toolTip": "Contact Us",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "var newWindow = window.open(\"mailto:order@intercontinentalsource.com\", \"_blank\"); newWindow.focus()"
       }
      ]
     },
     {
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_071EAB13_0980_0802_41A1_84CCAB4A6E08_0_HS_1_0.png",
           "class": "ImageResourceLevel",
           "height": 76,
           "width": 60
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 2.7,
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 12.2,
        "yaw": 18.14
       }
      ],
      "id": "overlay_015DEA8C_0980_0806_41AA_5FDDC25FE2CE",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 12.2,
        "image": {
         "levels": [
          {
           "url": "media/panorama_071EAB13_0980_0802_41A1_84CCAB4A6E08_0_HS_1_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 38,
           "width": 30
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 18.14,
        "hfov": 2.7
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "toolTip": "About Us",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "var newWindow = window.open(\"https://intercontinentalsource.com/\", \"_blank\"); newWindow.focus()"
       }
      ]
     },
     {
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_071EAB13_0980_0802_41A1_84CCAB4A6E08_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 229,
           "width": 55
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 2.5,
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 5.02,
        "yaw": 18.22
       }
      ],
      "id": "overlay_0114AC97_0980_0802_41A6_3E895FD31E78",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 5.02,
        "image": {
         "levels": [
          {
           "url": "media/panorama_071EAB13_0980_0802_41A1_84CCAB4A6E08_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 114,
           "width": 27
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 18.22,
        "hfov": 2.5
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "toolTip": "Recent Projects",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "var newWindow = window.open(\"https://intercontinentalsource.com/projects/\", \"_blank\"); newWindow.focus()"
       }
      ]
     }
    ],
    "class": "CubicPanoramaFrame",
    "left": {
     "levels": [
      {
       "url": "media/panorama_071EAB13_0980_0802_41A1_84CCAB4A6E08_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 2544,
       "width": 2544
      },
      {
       "url": "media/panorama_071EAB13_0980_0802_41A1_84CCAB4A6E08_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 1273,
       "width": 1273
      }
     ],
     "class": "ImageResource"
    },
    "front": {
     "levels": [
      {
       "url": "media/panorama_071EAB13_0980_0802_41A1_84CCAB4A6E08_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 2544,
       "width": 2544
      },
      {
       "url": "media/panorama_071EAB13_0980_0802_41A1_84CCAB4A6E08_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 1273,
       "width": 1273
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_071EAB13_0980_0802_41A1_84CCAB4A6E08_t.jpg"
   }
  ]
 },
 {
  "mouseControlMode": "drag_rotation",
  "id": "MainViewerPanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "gyroscopeVerticalDraggingEnabled": true,
  "displayPlaybackBar": true,
  "class": "PanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "preloadEnabled": false
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  },
  "id": "panorama_071EAB13_0980_0802_41A1_84CCAB4A6E08_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "hfovMax": 120,
  "class": "Panorama",
  "label": "INTSource-02S",
  "partial": false,
  "hfovMin": 60,
  "id": "panorama_077D7622_0980_7802_41A8_AE84B0948ED9",
  "hfov": 360,
  "thumbnailUrl": "media/panorama_077D7622_0980_7802_41A8_AE84B0948ED9_t.jpg",
  "vfov": 180,
  "pitch": 0,
  "frames": [
   {
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_077D7622_0980_7802_41A8_AE84B0948ED9_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 2544,
       "width": 2544
      },
      {
       "url": "media/panorama_077D7622_0980_7802_41A8_AE84B0948ED9_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 1273,
       "width": 1273
      }
     ],
     "class": "ImageResource"
    },
    "right": {
     "levels": [
      {
       "url": "media/panorama_077D7622_0980_7802_41A8_AE84B0948ED9_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 2544,
       "width": 2544
      },
      {
       "url": "media/panorama_077D7622_0980_7802_41A8_AE84B0948ED9_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 1273,
       "width": 1273
      }
     ],
     "class": "ImageResource"
    },
    "back": {
     "levels": [
      {
       "url": "media/panorama_077D7622_0980_7802_41A8_AE84B0948ED9_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 2544,
       "width": 2544
      },
      {
       "url": "media/panorama_077D7622_0980_7802_41A8_AE84B0948ED9_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 1273,
       "width": 1273
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_077D7622_0980_7802_41A8_AE84B0948ED9_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 2544,
       "width": 2544
      },
      {
       "url": "media/panorama_077D7622_0980_7802_41A8_AE84B0948ED9_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 1273,
       "width": 1273
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_077D7622_0980_7802_41A8_AE84B0948ED9_0_HS_3_0.png",
           "class": "ImageResourceLevel",
           "height": 63,
           "width": 33
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 1.53,
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 3.9,
        "yaw": 16.55
       }
      ],
      "id": "overlay_01565D88_0980_080D_41A9_7FFE37A3C73A",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 3.9,
        "image": {
         "levels": [
          {
           "url": "media/panorama_077D7622_0980_7802_41A8_AE84B0948ED9_0_HS_3_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 31,
           "width": 16
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 16.55,
        "hfov": 1.53
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "toolTip": "Follow Us on Instagram",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "var newWindow = window.open(\"https://www.instagram.com/intercontinentalsource/\", \"_blank\"); newWindow.focus()"
       }
      ]
     },
     {
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_077D7622_0980_7802_41A8_AE84B0948ED9_0_HS_2_0.png",
           "class": "ImageResourceLevel",
           "height": 59,
           "width": 34
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 1.56,
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 7.75,
        "yaw": 16.69
       }
      ],
      "id": "overlay_06BFBE91_0980_081E_4186_8B8181E8A0F0",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 7.75,
        "image": {
         "levels": [
          {
           "url": "media/panorama_077D7622_0980_7802_41A8_AE84B0948ED9_0_HS_2_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 29,
           "width": 17
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 16.69,
        "hfov": 1.56
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "toolTip": "Connect with Us via Linkedin",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "var newWindow = window.open(\"https://www.linkedin.com/in/huy-tran-1b309644/\", \"_blank\"); newWindow.focus()"
       }
      ]
     },
     {
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_077D7622_0980_7802_41A8_AE84B0948ED9_0_HS_1_0.png",
           "class": "ImageResourceLevel",
           "height": 56,
           "width": 30
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 1.36,
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 11.18,
        "yaw": 16.71
       }
      ],
      "id": "overlay_01AEC2AB_0980_1802_418E_6BD8478214CF",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 11.18,
        "image": {
         "levels": [
          {
           "url": "media/panorama_077D7622_0980_7802_41A8_AE84B0948ED9_0_HS_1_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 28,
           "width": 15
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 16.71,
        "hfov": 1.36
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "toolTip": "Like Us on Facebook",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "var newWindow = window.open(\"https://www.facebook.com/intsource7\", \"_blank\"); newWindow.focus()"
       }
      ]
     },
     {
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_077D7622_0980_7802_41A8_AE84B0948ED9_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 93,
           "width": 76
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 3.45,
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 8.78,
        "yaw": 2.42
       }
      ],
      "id": "overlay_06FC7E12_0980_0802_4172_EE70108DDFC4",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 8.78,
        "image": {
         "levels": [
          {
           "url": "media/panorama_077D7622_0980_7802_41A8_AE84B0948ED9_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 46,
           "width": 38
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 2.42,
        "hfov": 3.45
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "toolTip": "About Us",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "var newWindow = window.open(\"https://intercontinentalsource.com/\", \"_blank\"); newWindow.focus()"
       }
      ]
     }
    ],
    "class": "CubicPanoramaFrame",
    "left": {
     "levels": [
      {
       "url": "media/panorama_077D7622_0980_7802_41A8_AE84B0948ED9_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 2544,
       "width": 2544
      },
      {
       "url": "media/panorama_077D7622_0980_7802_41A8_AE84B0948ED9_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 1273,
       "width": 1273
      }
     ],
     "class": "ImageResource"
    },
    "front": {
     "levels": [
      {
       "url": "media/panorama_077D7622_0980_7802_41A8_AE84B0948ED9_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 2544,
       "width": 2544
      },
      {
       "url": "media/panorama_077D7622_0980_7802_41A8_AE84B0948ED9_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 1273,
       "width": 1273
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_077D7622_0980_7802_41A8_AE84B0948ED9_t.jpg"
   }
  ]
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  },
  "id": "panorama_077D7622_0980_7802_41A8_AE84B0948ED9_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "hfovMax": 120,
  "class": "Panorama",
  "label": "INTSource-03S",
  "partial": false,
  "hfovMin": 60,
  "id": "panorama_07644878_0980_080E_4182_B3EEC7567394",
  "hfov": 360,
  "thumbnailUrl": "media/panorama_07644878_0980_080E_4182_B3EEC7567394_t.jpg",
  "vfov": 180,
  "pitch": 0,
  "frames": [
   {
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_07644878_0980_080E_4182_B3EEC7567394_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 2544,
       "width": 2544
      },
      {
       "url": "media/panorama_07644878_0980_080E_4182_B3EEC7567394_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 1273,
       "width": 1273
      }
     ],
     "class": "ImageResource"
    },
    "right": {
     "levels": [
      {
       "url": "media/panorama_07644878_0980_080E_4182_B3EEC7567394_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 2544,
       "width": 2544
      },
      {
       "url": "media/panorama_07644878_0980_080E_4182_B3EEC7567394_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 1273,
       "width": 1273
      }
     ],
     "class": "ImageResource"
    },
    "back": {
     "levels": [
      {
       "url": "media/panorama_07644878_0980_080E_4182_B3EEC7567394_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 2544,
       "width": 2544
      },
      {
       "url": "media/panorama_07644878_0980_080E_4182_B3EEC7567394_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 1273,
       "width": 1273
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_07644878_0980_080E_4182_B3EEC7567394_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 2544,
       "width": 2544
      },
      {
       "url": "media/panorama_07644878_0980_080E_4182_B3EEC7567394_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 1273,
       "width": 1273
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_07644878_0980_080E_4182_B3EEC7567394_0_HS_1_0.png",
           "class": "ImageResourceLevel",
           "height": 67,
           "width": 127
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 5.73,
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 11.26,
        "yaw": -6.58
       }
      ],
      "id": "overlay_06830895_0980_0806_41A8_9C389BD20FC0",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 11.26,
        "image": {
         "levels": [
          {
           "url": "media/panorama_07644878_0980_080E_4182_B3EEC7567394_0_HS_1_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 33,
           "width": 63
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -6.58,
        "hfov": 5.73
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "toolTip": "About Us",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "var newWindow = window.open(\"https://intercontinentalsource.com/\", \"_blank\"); newWindow.focus()"
       }
      ]
     },
     {
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_07644878_0980_080E_4182_B3EEC7567394_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 226,
           "width": 108
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 4.87,
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 3.8,
        "yaw": -6.66
       }
      ],
      "id": "overlay_0106DE1B_0980_0803_41A7_1B4F51C2D156",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 3.8,
        "image": {
         "levels": [
          {
           "url": "media/panorama_07644878_0980_080E_4182_B3EEC7567394_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 113,
           "width": 54
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -6.66,
        "hfov": 4.87
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "toolTip": "Recent projects",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "var newWindow = window.open(\"https://intercontinentalsource.com/shop/\", \"_blank\"); newWindow.focus()"
       }
      ]
     }
    ],
    "class": "CubicPanoramaFrame",
    "left": {
     "levels": [
      {
       "url": "media/panorama_07644878_0980_080E_4182_B3EEC7567394_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 2544,
       "width": 2544
      },
      {
       "url": "media/panorama_07644878_0980_080E_4182_B3EEC7567394_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 1273,
       "width": 1273
      }
     ],
     "class": "ImageResource"
    },
    "front": {
     "levels": [
      {
       "url": "media/panorama_07644878_0980_080E_4182_B3EEC7567394_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 2544,
       "width": 2544
      },
      {
       "url": "media/panorama_07644878_0980_080E_4182_B3EEC7567394_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 1273,
       "width": 1273
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_07644878_0980_080E_4182_B3EEC7567394_t.jpg"
   }
  ]
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  },
  "id": "panorama_07644878_0980_080E_4182_B3EEC7567394_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "hfovMax": 120,
  "class": "Panorama",
  "label": "INTSource-04S",
  "partial": false,
  "hfovMin": 60,
  "id": "panorama_0777A661_0980_183F_41A8_8DB3229D509D",
  "hfov": 360,
  "thumbnailUrl": "media/panorama_0777A661_0980_183F_41A8_8DB3229D509D_t.jpg",
  "vfov": 180,
  "pitch": 0,
  "frames": [
   {
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_0777A661_0980_183F_41A8_8DB3229D509D_d_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 2544,
       "width": 2544
      },
      {
       "url": "media/panorama_0777A661_0980_183F_41A8_8DB3229D509D_d.jpeg",
       "class": "ImageResourceLevel",
       "height": 1273,
       "width": 1273
      }
     ],
     "class": "ImageResource"
    },
    "right": {
     "levels": [
      {
       "url": "media/panorama_0777A661_0980_183F_41A8_8DB3229D509D_r_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 2544,
       "width": 2544
      },
      {
       "url": "media/panorama_0777A661_0980_183F_41A8_8DB3229D509D_r.jpeg",
       "class": "ImageResourceLevel",
       "height": 1273,
       "width": 1273
      }
     ],
     "class": "ImageResource"
    },
    "back": {
     "levels": [
      {
       "url": "media/panorama_0777A661_0980_183F_41A8_8DB3229D509D_b_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 2544,
       "width": 2544
      },
      {
       "url": "media/panorama_0777A661_0980_183F_41A8_8DB3229D509D_b.jpeg",
       "class": "ImageResourceLevel",
       "height": 1273,
       "width": 1273
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_0777A661_0980_183F_41A8_8DB3229D509D_u_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 2544,
       "width": 2544
      },
      {
       "url": "media/panorama_0777A661_0980_183F_41A8_8DB3229D509D_u.jpeg",
       "class": "ImageResourceLevel",
       "height": 1273,
       "width": 1273
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_0777A661_0980_183F_41A8_8DB3229D509D_0_HS_1_0.png",
           "class": "ImageResourceLevel",
           "height": 65,
           "width": 69
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 3.08,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": 9.12,
        "yaw": 1.35
       }
      ],
      "id": "overlay_06928681_0981_F8FE_4166_097BE6F629B6",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 9.12,
        "image": {
         "levels": [
          {
           "url": "media/panorama_0777A661_0980_183F_41A8_8DB3229D509D_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 32,
           "width": 34
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 1.35,
        "hfov": 3.08
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "toolTip": "Recent Projects",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "var newWindow = window.open(\"https://intercontinentalsource.com/projects/\", \"_blank\"); newWindow.focus()"
       }
      ]
     },
     {
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_0777A661_0980_183F_41A8_8DB3229D509D_0_HS_0_0.png",
           "class": "ImageResourceLevel",
           "height": 63,
           "width": 69
          }
         ],
         "class": "ImageResource"
        },
        "hfov": 3.12,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -1.58,
        "yaw": -9
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_069C4F1E_0980_0802_41A4_AA7A7EB76960",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -1.58,
        "image": {
         "levels": [
          {
           "url": "media/panorama_0777A661_0980_183F_41A8_8DB3229D509D_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel",
           "height": 31,
           "width": 34
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -9,
        "hfov": 3.12
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "displayTooltipInTouchScreens": true,
        "toolTip": "Live Chat",
        "mapColor": "#FF0000"
       }
      ]
     }
    ],
    "class": "CubicPanoramaFrame",
    "left": {
     "levels": [
      {
       "url": "media/panorama_0777A661_0980_183F_41A8_8DB3229D509D_l_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 2544,
       "width": 2544
      },
      {
       "url": "media/panorama_0777A661_0980_183F_41A8_8DB3229D509D_l.jpeg",
       "class": "ImageResourceLevel",
       "height": 1273,
       "width": 1273
      }
     ],
     "class": "ImageResource"
    },
    "front": {
     "levels": [
      {
       "url": "media/panorama_0777A661_0980_183F_41A8_8DB3229D509D_f_hq.jpeg",
       "class": "ImageResourceLevel",
       "height": 2544,
       "width": 2544
      },
      {
       "url": "media/panorama_0777A661_0980_183F_41A8_8DB3229D509D_f.jpeg",
       "class": "ImageResourceLevel",
       "height": 1273,
       "width": 1273
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_0777A661_0980_183F_41A8_8DB3229D509D_t.jpg"
   }
  ]
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  },
  "id": "panorama_0777A661_0980_183F_41A8_8DB3229D509D_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "media": "this.panorama_071EAB13_0980_0802_41A1_84CCAB4A6E08",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_071EAB13_0980_0802_41A1_84CCAB4A6E08_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "media": "this.panorama_077D7622_0980_7802_41A8_AE84B0948ED9",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_077D7622_0980_7802_41A8_AE84B0948ED9_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "media": "this.panorama_07644878_0980_080E_4182_B3EEC7567394",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_07644878_0980_080E_4182_B3EEC7567394_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "media": "this.panorama_0777A661_0980_183F_41A8_8DB3229D509D",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0777A661_0980_183F_41A8_8DB3229D509D_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 0)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "playList_0C8220F3_0217_7925_4177_A3813F3BC9BA",
  "items": [
   {
    "media": "this.panorama_071EAB13_0980_0802_41A1_84CCAB4A6E08",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_071EAB13_0980_0802_41A1_84CCAB4A6E08_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_0C8220F3_0217_7925_4177_A3813F3BC9BA, 0, 1)"
   },
   {
    "media": "this.panorama_077D7622_0980_7802_41A8_AE84B0948ED9",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_077D7622_0980_7802_41A8_AE84B0948ED9_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_0C8220F3_0217_7925_4177_A3813F3BC9BA, 1, 2)"
   },
   {
    "media": "this.panorama_07644878_0980_080E_4182_B3EEC7567394",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_07644878_0980_080E_4182_B3EEC7567394_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_0C8220F3_0217_7925_4177_A3813F3BC9BA, 2, 3)"
   },
   {
    "media": "this.panorama_0777A661_0980_183F_41A8_8DB3229D509D",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_0777A661_0980_183F_41A8_8DB3229D509D_camera",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_0C8220F3_0217_7925_4177_A3813F3BC9BA, 3, 0)"
   }
  ]
 },
 {
  "id": "audio_0B054FF3_01C3_0BB5_412A_75378B1B73A4",
  "autoplay": true,
  "class": "MediaAudio",
  "audio": {
   "oggUrl": "media/audio_0B054FF3_01C3_0BB5_412A_75378B1B73A4.ogg",
   "mp3Url": "media/audio_0B054FF3_01C3_0BB5_412A_75378B1B73A4.mp3",
   "class": "AudioResource"
  }
 }
], "children": [
 {
  "borderRadius": 0,
  "toolTipTextShadowColor": "#000000",
  "progressLeft": 0,
  "playbackBarProgressOpacity": 1,
  "playbackBarHeadBorderColor": "#000000",
  "toolTipFontSize": 12,
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipPaddingBottom": 4,
  "top": 0,
  "toolTipOpacity": 1,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarBorderSize": 0,
  "paddingLeft": 0,
  "toolTipShadowOpacity": 1,
  "shadow": false,
  "playbackBarHeadBorderSize": 0,
  "playbackBarHeadShadowColor": "#000000",
  "toolTipBorderColor": "#767676",
  "toolTipFontWeight": "normal",
  "progressRight": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipTextShadowBlurRadius": 3,
  "progressOpacity": 1,
  "playbackBarHeadShadow": true,
  "progressBackgroundOpacity": 1,
  "toolTipBorderRadius": 3,
  "playbackBarOpacity": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarLeft": 0,
  "toolTipShadowColor": "#333333",
  "playbackBarHeadHeight": 15,
  "progressBarOpacity": 1,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "progressBackgroundColorRatios": [
   0
  ],
  "toolTipShadowVerticalLength": 0,
  "paddingBottom": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "progressBottom": 0,
  "toolTipTextShadowOpacity": 0,
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadOpacity": 1,
  "progressHeight": 10,
  "minWidth": 100,
  "height": "100%",
  "progressBorderSize": 0,
  "playbackBarBottom": 5,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBorderColor": "#000000",
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "progressBackgroundColorDirection": "vertical",
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "id": "MainViewer",
  "minHeight": 50,
  "paddingRight": 0,
  "toolTipShadowBlurRadius": 3,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "progressBorderRadius": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeadShadowOpacity": 0.7,
  "toolTipPaddingRight": 6,
  "playbackBarHeight": 10,
  "playbackBarBorderColor": "#FFFFFF",
  "toolTipPaddingLeft": 6,
  "playbackBarHeadWidth": 6,
  "borderSize": 0,
  "playbackBarProgressBorderSize": 0,
  "width": "100%",
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarRight": 0,
  "toolTipShadowSpread": 0,
  "progressBarBorderRadius": 0,
  "progressBarBorderSize": 0,
  "toolTipFontColor": "#606060",
  "paddingTop": 0,
  "toolTipFontFamily": "Arial",
  "transitionMode": "blending",
  "toolTipShadowHorizontalLength": 0,
  "playbackBarProgressBorderRadius": 0,
  "left": 0,
  "playbackBarBorderRadius": 0,
  "toolTipFontStyle": "normal",
  "toolTipBorderSize": 1,
  "playbackBarProgressBorderColor": "#000000",
  "toolTipPaddingTop": 4,
  "playbackBarHeadBorderRadius": 0,
  "class": "ViewerArea",
  "playbackBarHeadShadowHorizontalLength": 0
 },
 {
  "horizontalAlign": "center",
  "minHeight": 20,
  "children": [
   {
    "horizontalAlign": "left",
    "itemLabelFontSize": 14,
    "minHeight": 0,
    "selectedItemLabelFontWeight": "bold",
    "itemPaddingRight": 3,
    "itemLabelFontFamily": "Arial",
    "itemLabelFontWeight": "normal",
    "itemBorderRadius": 0,
    "itemPaddingBottom": 3,
    "itemThumbnailShadow": true,
    "itemThumbnailShadowBlurRadius": 4,
    "itemThumbnailWidth": 100,
    "paddingLeft": 20,
    "maxWidth": 800,
    "shadow": false,
    "itemPaddingTop": 3,
    "borderSize": 0,
    "scrollBarWidth": 10,
    "maxHeight": 600,
    "itemLabelHorizontalAlign": "center",
    "scrollBarVisible": "rollOver",
    "itemBackgroundColorRatios": [],
    "itemMode": "normal",
    "scrollBarMargin": 2,
    "itemThumbnailOpacity": 1,
    "layout": "horizontal",
    "itemThumbnailShadowSpread": 1,
    "itemThumbnailShadowColor": "#000000",
    "verticalAlign": "top",
    "itemPaddingLeft": 3,
    "paddingTop": 10,
    "itemLabelFontColor": "#FFFFFF",
    "itemThumbnailShadowOpacity": 0.8,
    "itemBackgroundColor": [],
    "itemThumbnailBorderRadius": 5,
    "itemThumbnailShadowHorizontalLength": 3,
    "itemOpacity": 1,
    "itemLabelTextDecoration": "none",
    "itemLabelPosition": "bottom",
    "itemLabelGap": 5,
    "paddingBottom": 10,
    "itemThumbnailHeight": 75,
    "scrollBarColor": "#FFFFFF",
    "itemVerticalAlign": "middle",
    "gap": 10,
    "itemThumbnailScaleMode": "fit_outside",
    "minWidth": 0,
    "itemLabelFontStyle": "normal",
    "backgroundColor": [
     "#000000"
    ],
    "backgroundOpacity": 0.2,
    "itemBackgroundOpacity": 0,
    "itemHorizontalAlign": "center",
    "itemThumbnailShadowVerticalLength": 3,
    "scrollBarOpacity": 0.5,
    "borderRadius": 5,
    "itemBackgroundColorDirection": "vertical",
    "class": "ThumbnailList",
    "backgroundColorDirection": "vertical",
    "playList": "this.playList_0C8220F3_0217_7925_4177_A3813F3BC9BA",
    "backgroundColorRatios": [
     0
    ],
    "paddingRight": 20
   }
  ],
  "bottom": 0,
  "borderSize": 0,
  "paddingLeft": 0,
  "shadow": false,
  "scrollBarWidth": 10,
  "scrollBarVisible": "rollOver",
  "scrollBarMargin": 2,
  "layout": "horizontal",
  "verticalAlign": "bottom",
  "overflow": "visible",
  "paddingTop": 0,
  "left": 0,
  "paddingBottom": 0,
  "right": 0,
  "scrollBarColor": "#000000",
  "gap": 10,
  "scrollBarOpacity": 0.5,
  "height": 200,
  "backgroundOpacity": 0,
  "contentOpaque": false,
  "minWidth": 20,
  "borderRadius": 0,
  "class": "Container",
  "paddingRight": 0
 },
 {
  "shadowBlurRadius": 10,
  "horizontalAlign": "left",
  "contentOpaque": false,
  "minHeight": 0,
  "children": [
   {
    "horizontalAlign": "center",
    "minHeight": 0,
    "iconURL": "skin/IconButton_0D0876D9_0241_3DF5_4187_A924F6D29064.png",
    "top": "10%",
    "borderSize": 0,
    "paddingLeft": 0,
    "shadow": false,
    "verticalAlign": "middle",
    "mode": "toggle",
    "paddingTop": 0,
    "transparencyActive": false,
    "cursor": "hand",
    "paddingBottom": 0,
    "right": "25%",
    "minWidth": 0,
    "height": 40,
    "backgroundOpacity": 0,
    "pressedIconURL": "skin/IconButton_0D0876D9_0241_3DF5_4187_A924F6D29064_pressed.png",
    "id": "IconButton_0D0876D9_0241_3DF5_4187_A924F6D29064",
    "width": 40,
    "borderRadius": 0,
    "class": "IconButton",
    "paddingRight": 0
   },
   {
    "horizontalAlign": "center",
    "minHeight": 1,
    "top": "-9.5%",
    "borderSize": 0,
    "paddingLeft": 0,
    "maxWidth": 55,
    "shadow": false,
    "maxHeight": 55,
    "verticalAlign": "middle",
    "scaleMode": "fit_inside",
    "paddingTop": 0,
    "left": "-1573.12%",
    "paddingBottom": 0,
    "minWidth": 1,
    "height": "22%",
    "backgroundOpacity": 0,
    "id": "Image_0C22F72F_0247_1CAD_4160_60AF7851E5E0",
    "width": "45.161%",
    "borderRadius": 0,
    "url": "skin/Image_0C22F72F_0247_1CAD_4160_60AF7851E5E0.png",
    "class": "Image",
    "paddingRight": 0
   },
   {
    "horizontalAlign": "center",
    "minHeight": 0,
    "bottom": "10%",
    "borderSize": 0,
    "paddingLeft": 0,
    "shadow": false,
    "verticalAlign": "middle",
    "scaleMode": "fit_inside",
    "paddingTop": 0,
    "click": "var newWindow = window.open(\"mailto:order@intercontinentalsource.com\", \"_blank\"); newWindow.focus()",
    "cursor": "hand",
    "paddingBottom": 0,
    "right": "25%",
    "minWidth": 0,
    "height": 40,
    "backgroundOpacity": 0,
    "id": "Image_0CB084F8_0241_1DB3_4184_27716B06A03C",
    "width": 40,
    "borderRadius": 0,
    "url": "skin/Image_0CB084F8_0241_1DB3_4184_27716B06A03C.png",
    "class": "Image",
    "paddingRight": 0
   }
  ],
  "scrollBarOpacity": 0.5,
  "top": "2%",
  "paddingLeft": 0,
  "shadow": true,
  "shadowOpacity": 0.72,
  "borderSize": 1,
  "scrollBarWidth": 10,
  "scrollBarVisible": "rollOver",
  "layout": "absolute",
  "borderColor": "#FFFFFF",
  "scrollBarMargin": 2,
  "overflow": "scroll",
  "paddingTop": 0,
  "verticalAlign": "top",
  "shadowSpread": 1,
  "shadowHorizontalLength": 7,
  "shadowVerticalLength": 10,
  "backgroundColorDirection": "vertical",
  "right": "2%",
  "scrollBarColor": "#000000",
  "gap": 10,
  "minWidth": 0,
  "backgroundColor": [
   "#FFFFFF",
   "#666666"
  ],
  "backgroundOpacity": 0.5,
  "id": "Container_0C6F931C_0241_3473_4178_6DCA3B5132B4",
  "width": 85.04,
  "borderRadius": 10,
  "height": 136,
  "class": "Container",
  "paddingBottom": 0,
  "shadowColor": "#333333",
  "backgroundColorRatios": [
   0,
   1
  ],
  "paddingRight": 0
 }
], 
 "horizontalAlign": "left",
 "contentOpaque": false,
 "minHeight": 20,
 "start": "this.playAudioList([this.audio_0B054FF3_01C3_0BB5_412A_75378B1B73A4]); this.syncPlaylists([this.playList_0C8220F3_0217_7925_4177_A3813F3BC9BA,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0)",
 "width": "100%",
 "paddingLeft": 0,
 "shadow": false,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "layout": "absolute",
 "verticalAlign": "top",
 "overflow": "visible",
 "paddingTop": 0,
 "backgroundPreloadEnabled": true,
 "mouseWheelEnabled": true,
 "scripts": {
  "unregisterKey": function(key){    delete window[key]; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           this.stopGlobalAudio(audio);           if(isPanorama) {               var media = playListItem.get('media');               var audios = media.get('audios');               audios.splice(audios.indexOf(audio), 1);               media.set('audios', audios);           }           playList.unbind('change', changeFunction, this);           if(endCallback)               endCallback();       }   };   var audios = window.currentGlobalAudios;   if(audios && audio.get('id') in audios){       audio = audios[audio.get('id')];       if(audio.get('state') != 'playing'){           audio.play();       }       return;   }   playList.bind('change', changeFunction, this);   var playListItem = playList.get('items')[index];   var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem';   if(isPanorama) {       var media = playListItem.get('media');       var audios = (media.get('audios') || []).slice();       if(audio.get('class') == 'MediaAudio') {           var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio');           panoramaAudio.set('autoplay', false);           panoramaAudio.set('audio', audio.get('audio'));           panoramaAudio.set('loop', audio.get('loop'));           panoramaAudio.set('id', audio.get('id'));           audio = panoramaAudio;       }       audios.push(audio);       media.set('audios', audios);   }   this.playGlobalAudio(audio, endCallback); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){    var resetFunction = function(){       panoramaPlayListItem.unbind('stop', resetFunction, this);       player.set('mapPlayer', null);   };   panoramaPlayListItem.bind('stop', resetFunction, this);   var player = panoramaPlayListItem.get('player');   player.set('mapPlayer', mapPlayer); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){    var enabled = this.get(playerFlag);   for(var i in components){       components[i].set('visible', enabled);   } },
  "shareTwitter": function(url){    window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "updateVideoCues": function(playList, index){    var playListItem = playList.get('items')[index];   var video = playListItem.get('media');   if(video.get('cues').length == 0)       return;   var player = playListItem.get('player');   var cues = [];   var changeFunction = function(){       if(playList.get('selectedIndex') != index){           video.unbind('cueChange', cueChangeFunction, this);           playList.unbind('change', changeFunction, this);       }   };   var cueChangeFunction = function(event){       var activeCues = event.data.activeCues;       for(var i = 0, count = cues.length; i<count; ++i){           var cue = cues[i];           if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){               cue.trigger('end');           }       }       cues = activeCues;   };   video.bind('cueChange', cueChangeFunction, this);   playList.bind('change', changeFunction, this); },
  "shareGoogle": function(url){    window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "existsKey": function(key){    return key in window; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){    var self = this;   var showEndFunction = function() {       popupPanoramaOverlay.unbind('showEnd', showEndFunction);       closeButton.bind('click', hideFunction, this);       setCloseButtonPosition();       closeButton.set('visible', true);   };   var endFunction = function() {       if(!popupPanoramaOverlay.get('loop'))           hideFunction();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       if(!self.isCardboardViewMode())           popupPanoramaOverlay.set('visible', false);       closeButton.set('visible', false);       closeButton.unbind('click', hideFunction, this);       popupPanoramaOverlay.unbind('end', endFunction, self);       self.resumePlayers(playersPaused, true);       self.resumeGlobalAudios();   };   var setCloseButtonPosition = function() {       var right = 10;       var top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   this.MainViewer.set('toolTipEnabled', false);   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(true);   this.pauseGlobalAudios();   popupPanoramaOverlay.bind('end', endFunction, this, true);   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); },
  "setMainMediaByIndex": function(index){    if(index >= 0 && index < this.mainPlayList.get('items').length){       this.mainPlayList.set('selectedIndex', index);   } },
  "shareFacebook": function(url){    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "syncPlaylists": function(playLists){    var changeToMedia = function(media, playListDispatched){       for(var i = 0, count = playLists.length; i<count; ++i){           var playList = playLists[i];           if(playList != playListDispatched){               var items = playList.get('items');               for(var j = 0, countJ = items.length; j<countJ; ++j){                   if(items[j].get('media') == media){                       if(playList.get('selectedIndex') != j){                           playList.set('selectedIndex', j);                       }                       break;                   }               }           }       }   };   var changeFunction = function(event){       var playListDispatched = event.source;       var selectedIndex = playListDispatched.get('selectedIndex');       if(selectedIndex < 0)           return;       var media = playListDispatched.get('items')[selectedIndex].get('media');       changeToMedia(media, playListDispatched);   };   var mapPlayerChangeFunction = function(event){       var panoramaMapLocation = event.source.get('panoramaMapLocation');       if(panoramaMapLocation){           var map = panoramaMapLocation.get('map');           changeToMedia(map);       }   };   for(var i = 0, count = playLists.length; i<count; ++i){       playLists[i].bind('change', changeFunction, this);   }   var mapPlayers = this.getByClassName('MapPlayer');   for(var i = 0, count = mapPlayers.length; i<count; ++i){       mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this);   } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){    var self = this;   var stateChangeFunction = function(event){       if(event.data.state == 'stopped'){           dispose();       }   };   var changeFunction = function(){       var index = playListDispatcher.get('selectedIndex');       if(index != -1){           indexDispatcher = index;           dispose();       }   };   var dispose = function(){       if(!playListDispatcher) return;       playList.set('selectedIndex', -1);       if(panoramaSequence && panoramaSequenceIndex != -1){           if(panoramaSequence) {               if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){                   var initialPosition = camera.get('initialPosition');                   var oldYaw = initialPosition.get('yaw');                   var oldPitch = initialPosition.get('pitch');                   var oldHfov = initialPosition.get('hfov');                   var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1];                   initialPosition.set('yaw', previousMovement.get('targetYaw'));                   initialPosition.set('pitch', previousMovement.get('targetPitch'));                   initialPosition.set('hfov', previousMovement.get('targetHfov'));                   var restoreInitialPositionFunction = function(event){                       initialPosition.set('yaw', oldYaw);                       initialPosition.set('pitch', oldPitch);                       initialPosition.set('hfov', oldHfov);                       itemDispatcher.unbind('end', restoreInitialPositionFunction, self);                   };                   itemDispatcher.bind('end', restoreInitialPositionFunction, self);               }               panoramaSequence.set('movementIndex', panoramaSequenceIndex);           }       }       playListDispatcher.set('selectedIndex', indexDispatcher);       if(player){           player.unbind('stateChange', stateChangeFunction, self);       }       if(sameViewerArea){           if(playList != playListDispatcher)               playListDispatcher.unbind('change', changeFunction, self);       }       else{           viewerArea.set('visible', false);       }       playListDispatcher = undefined;   };   if(!mediaDispatcher){       var currentIndex = playList.get('selectedIndex');       var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer);       if(currentPlayer) {           var playerClass = currentPlayer.get('class');           if(playerClass == 'PanoramaPlayer') mediaDispatcher = currentPlayer.get('panorama');           else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video');           else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum');           else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map');       }   }   var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined;   if(!playListDispatcher){       playList.set('selectedIndex', index);       return;   }   var indexDispatcher = playListDispatcher.get('selectedIndex');   if(playList.get('selectedIndex') == index || indexDispatcher == -1){       return;   }   var item = playList.get('items')[index];   var itemDispatcher = playListDispatcher.get('items')[indexDispatcher];   var viewerArea = item.get('player').get('viewerArea');   var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea');   if(sameViewerArea){       if(playList != playListDispatcher){           playListDispatcher.set('selectedIndex', -1);           playListDispatcher.bind('change', changeFunction, this);       }   }   else{       viewerArea.set('visible', true);   }   var panoramaSequenceIndex = -1;   var panoramaSequence = undefined;   var camera = itemDispatcher.get('camera');   if(camera){       panoramaSequence = camera.get('initialSequence');       if(panoramaSequence) {           panoramaSequenceIndex = panoramaSequence.get('movementIndex');       }   }   playList.set('selectedIndex', index);   var player = undefined;   if(item.get('player') != itemDispatcher.get('player')){       player = item.get('player');       player.bind('stateChange', stateChangeFunction, this);   }   this.executeFunctionWhenChange(playList, index, dispose); },
  "fixTogglePlayPauseButton": function(player){    var state = player.get('state');   var button = player.get('buttonPlayPause');   if(typeof button !== 'undefined' && player.get('state') == 'playing'){       button.set('pressed', true);   } },
  "stopGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];       delete audios[audio.get('id')];   }   audio.stop(); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){    var self = this;   var closed = false;   var playerClickFunction = function() {       zoomImage.unbind('loaded', loadedFunction, self);       hideFunction();   };   var clearAutoClose = function(){       zoomImage.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var loadedFunction = function(){       self.unbind('click', playerClickFunction, self);       veil.set('visible', true);       setCloseButtonPosition();       closeButton.set('visible', true);       zoomImage.unbind('loaded', loadedFunction, this);       zoomImage.bind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this);       timeoutID = setTimeout(timeoutFunction, 200);   };   var timeoutFunction = function(){       timeoutID = undefined;       if(autoCloseMilliSeconds){           var autoCloseFunction = function(){               hideFunction();           };           zoomImage.bind('click', clearAutoClose, this);           timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);       }       zoomImage.bind('backgroundClick', hideFunction, this);       if(toggleImage) {           zoomImage.bind('click', toggleFunction, this);           zoomImage.set('imageCursor', 'hand');       }       closeButton.bind('click', hideFunction, this);       if(loadedCallback)           loadedCallback();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       closed = true;       if(timeoutID)           clearTimeout(timeoutID);       if(autoCloseMilliSeconds)           clearAutoClose();       if(hideCallback)           hideCallback();       zoomImage.set('visible', false);       if(hideEffect && hideEffect.get('duration') > 0){           hideEffect.bind('end', endEffectFunction, this);       }       else{           zoomImage.set('image', null);       }       closeButton.set('visible', false);       veil.set('visible', false);       self.unbind('click', playerClickFunction, self);       zoomImage.unbind('backgroundClick', hideFunction, this);       zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true);       if(toggleImage) {           zoomImage.unbind('click', toggleFunction, this);           zoomImage.set('cursor', 'default');       }       closeButton.unbind('click', hideFunction, this);       self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               self.resumeGlobalAudios();           }           self.stopGlobalAudio(audio);       }   };   var endEffectFunction = function() {       zoomImage.set('image', null);       hideEffect.unbind('end', endEffectFunction, this);   };   var toggleFunction = function() {       zoomImage.set('image', isToggleVisible() ? image : toggleImage);   };   var isToggleVisible = function() {       return zoomImage.get('image') == toggleImage;   };   var setCloseButtonPosition = function() {       var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10;       var top = zoomImage.get('imageTop') + 10;       if(right < 10) right = 10;       if(top < 10) top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var userInteractionStartFunction = function() {       if(timeoutUserInteractionID){           clearTimeout(timeoutUserInteractionID);           timeoutUserInteractionID = undefined;       }       else{           closeButton.set('visible', false);       }   };   var userInteractionEndFunction = function() {       if(!closed){           timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300);       }   };   var userInteractionTimeoutFunction = function() {       timeoutUserInteractionID = undefined;       closeButton.set('visible', true);       setCloseButtonPosition();   };   this.MainViewer.set('toolTipEnabled', false);   var veil = this.veilPopupPanorama;   var zoomImage = this.zoomImagePopupPanorama;   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);   if(audio){       if(stopBackgroundAudio){           this.pauseGlobalAudios();       }       this.playGlobalAudio(audio);   }   var timeoutID = undefined;   var timeoutUserInteractionID = undefined;   zoomImage.bind('loaded', loadedFunction, this);   setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0);   zoomImage.set('image', image);   zoomImage.set('customWidth', customWidth);   zoomImage.set('customHeight', customHeight);   zoomImage.set('showEffect', showEffect);   zoomImage.set('hideEffect', hideEffect);   zoomImage.set('visible', true);   return zoomImage; },
  "getKey": function(key){    return window[key]; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){    var self = this;   var endObject = undefined;   var changePlayListFunction = function(event){       if(event.data.previousSelectedIndex == index){           if(changeFunction) changeFunction();           if(endFunction) endObject.unbind('end', endFunction, self);           playList.unbind('change', changePlayListFunction, self);       }   };   if(endFunction){       var playListItem = playList.get('items')[index];       var playListItemClass = playListItem.get('class');       if(playListItemClass == 'PanoramaPlayListItem'){           var camera = playListItem.get('camera');           endObject = camera.get('initialSequence');           if(!endObject) return;       }       else{           endObject = playListItem.get('media');       }       endObject.bind('end', endFunction, this);   }   playList.bind('change', changePlayListFunction, this); },
  "getPlayListWithMedia": function(media, onlySelected){    var playLists = this.getByClassName('PlayList');   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       if(onlySelected && playList.get('selectedIndex') == -1)           continue;       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           if(items[j].get('media') == media)               return playList;       }   }   return undefined; },
  "pauseGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];   }   audio.pause(); },
  "playGlobalAudio": function(audio, endCallback){    var endFunction = function(){       audio.unbind('end', endFunction, this);       this.stopGlobalAudio(audio);       if(endCallback)           endCallback();   };   audio = this.getGlobalAudio(audio);   var audios = window.currentGlobalAudios;   if(!audios){       audios = window.currentGlobalAudios = {};   }   audios[audio.get('id')] = audio;   if(audio.get('state') == 'playing'){       return;   }   if(!audio.get('loop')){       audio.bind('end', endFunction, this);   }   audio.play(); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){    var changeFunction = function(){       var index = playList.get('selectedIndex');       if(index >= 0){           var beginFunction = function(){               playListItem.unbind('begin', beginFunction);               setMediaLabel(index);           };           var setMediaLabel = function(index){               var media = playListItem.get('media');               var text = media.get('data');               if(!text)                   text = media.get('label');               setHtml(text);           };           var setHtml = function(text){               if(text !== undefined)                   htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>');               else                   htmlText.set('html', '');           };           var playListItem = playList.get('items')[index];           if(htmlText.get('html')){               setHtml('Loading...');               playListItem.bind('begin', beginFunction);           }           else{               setMediaLabel(index);           }       }   };   var disposeFunction = function(){       htmlText.set('html', undefined);       playList.unbind('change', changeFunction, this);       playListItemStopToDispose.unbind('stop', disposeFunction, this);   };   if(playListItemStopToDispose){       playListItemStopToDispose.bind('stop', disposeFunction, this);   }   playList.bind('change', changeFunction, this);   changeFunction(); },
  "startPanoramaWithCamera": function(panorama, camera){    var playLists = this.getByClassName('PlayList');   if(playLists.length == 0)       return;    var restoreItems = [];   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           var item = items[j];           if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){               restoreItems.push({camera: item.get('camera'), item: item});               item.set('camera', camera);           }       }   }   if(restoreItems.length > 0) {       var restoreCameraOnStop = function(){           for (var i = 0; i < restoreItems.length; i++) {               restoreItems[i].item.set('camera', restoreItems[i].camera);           }           restoreItems[0].item.unbind('stop', restoreCameraOnStop, this);       };       restoreItems[0].item.bind('stop', restoreCameraOnStop, this);   } },
  "resumeGlobalAudios": function(caller){    if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller)       return;   window.currentGlobalAudiosActionCaller = undefined;   var audios = window.currentGlobalAudios;   if(!audios) return;   for(var audio in audios){       audios[audio].play();   } },
  "isCardboardViewMode": function(){    var players = this.getByClassName('PanoramaPlayer');   return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "autotriggerAtStart": function(player, callback){    var stateChangeFunction = function(event){        if(event.data.state == 'playing'){           callback();           player.unbind('stateChange', stateChangeFunction, this);       }   };   player.bind('stateChange', stateChangeFunction, this); },
  "pauseGlobalAudios": function(caller){    var audios = window.currentGlobalAudios;   window.currentGlobalAudiosActionCaller = caller;   if(!audios) return;   for(var audio in audios){       audios[audio].pause();   } },
  "getGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios != undefined && audio.get('id') in audios){       audio = audios[audio.get('id')];   }   return audio; },
  "changeBackgroundWhilePlay": function(playList, index, color){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           playList.unbind('change', changeFunction, this);           if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){               viewerArea.set('backgroundColor', backgroundColorBackup);               viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup);           }       }   };   var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var viewerArea = player.get('viewerArea');   var backgroundColorBackup = viewerArea.get('backgroundColor');   var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios');   var colorRatios = [0];   if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){       viewerArea.set('backgroundColor', color);       viewerArea.set('backgroundColorRatios', colorRatios);       playList.bind('change', changeFunction, this);   } },
  "setMainMediaByName": function(name){    var items = this.mainPlayList.get('items');   for(var i = 0; i<items.length; ++i){       if(items[i].get('media').get('label') == name) {           this.mainPlayList.set('selectedIndex', i);           return;       }   } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('state') == 'playing') {           if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){               player.pauseCamera();           }           else{               player.pause();           }       }       else {           players.splice(i, 1);       }   }   return players; },
  "registerKey": function(key, value){    window[key] = value; },
  "loopAlbum": function(playList, index){    var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var loopFunction = function(){       player.play();   };   this.executeFunctionWhenChange(playList, index, loopFunction); },
  "playAudioList": function(audios){    if(audios.length == 0) return;   var currentAudioCount = -1;   var currentAudio;   var playGlobalAudioFunction = this.playGlobalAudio;   var playNext = function(){       if(++currentAudioCount >= audios.length)           currentAudioCount = 0;       currentAudio = audios[currentAudioCount];       playGlobalAudioFunction(currentAudio, playNext);   };   playNext(); },
  "getActivePlayerWithViewer": function(viewerArea){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   players = players.concat(this.getByClassName('MapPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('viewerArea') == viewerArea) {           var playerClass = player.get('class');           if(playerClass == 'PanoramaPlayer' && player.get('panorama') != undefined) return player;           else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player;           else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player;           else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player;       }   }   return undefined; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){    var setVisibility = function(visible){       for(var i = 0, length = components.length; i<length; i++){           components[i].set('visible', visible);       }   };   if (this.rootPlayer.touchEnabled){       setVisibility(true);   } else {       var timeoutID = -1;       var rollOverFunction = function(){           setVisibility(true);           if(timeoutID >= 0) clearTimeout(timeoutID);           parentComponent.unbind('rollOver', rollOverFunction, this);           parentComponent.bind('rollOut', rollOutFunction, this);       };       var rollOutFunction = function(){           var timeoutFunction = function(){               setVisibility(false);               parentComponent.unbind('rollOver', rollOverFunction, this);           };           parentComponent.unbind('rollOut', rollOutFunction, this);           parentComponent.bind('rollOver', rollOverFunction, this);           timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut);       };       parentComponent.bind('rollOver', rollOverFunction, this);   } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){    var endFunction = function(){       if(playList.get('selectedIndex') == fromIndex)           playList.set('selectedIndex', toIndex);   };   this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){    this.unregisterKey('visibility_'+component.get('id'));   var changeVisibility = function(){        if(effect && propertyEffect){            component.set(propertyEffect, effect);        }        component.set('visible', visible);       if(component.get('class') == 'ViewerArea'){           try{               if(visible) component.restart();               else        component.pause();           }           catch(e){};       }   };   var effectTimeoutName = 'effectTimeout_'+component.get('id');   if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){       var effectTimeout = window[effectTimeoutName];       if(effectTimeout instanceof Array){           for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) }       }else{           clearTimeout(effectTimeout);       }       delete window[effectTimeoutName];   }   else if(visible == component.get('visible') && !ignoreClearTimeout)       return;   if(applyAt && applyAt > 0){       var effectTimeout = setTimeout(function(){            if(window[effectTimeoutName] instanceof Array) {                var arrayTimeoutVal = window[effectTimeoutName];               var index = arrayTimeoutVal.indexOf(effectTimeout);               arrayTimeoutVal.splice(index, 1);               if(arrayTimeoutVal.length == 0){                   delete window[effectTimeoutName];               }           }else{               delete window[effectTimeoutName];            }           changeVisibility();        }, applyAt);       if(window.hasOwnProperty(effectTimeoutName)){           window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout];       }else{           window[effectTimeoutName] = effectTimeout;       }   }   else{       changeVisibility();   } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){    var audios = window.currentGlobalAudios;   if(!audios) return;   var resumeFunction = this.resumeGlobalAudios;   var endFunction = function(){       if(playList.get('selectedIndex') != index) {           resumeFunction(caller);       }   };   this.pauseGlobalAudios(caller);   this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "loadFromCurrentMediaPlayList": function(playList, delta){    var currentIndex = playList.get('selectedIndex');   var totalItems = playList.get('items').length;   var newIndex = (currentIndex + delta) % totalItems;   while(newIndex < 0){       newIndex = totalItems + newIndex;   };   if(currentIndex != newIndex){       playList.set('selectedIndex', newIndex);   }; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){    for(var i = 0; i<players.length; ++i){       var player = players[i];       if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){           player.resumeCamera();       }       else{           player.play();       }   } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){    var self = this;   var closeFunction = function(){       self.MainViewer.set('toolTipEnabled', true);       this.resumePlayers(playersPaused, !containsAudio);       if(isVideo) {           this.unbind('resize', resizeFunction, this);       }       w.unbind('close', closeFunction, this);   };   var endFunction = function(){       w.hide();   };   var resizeFunction = function(){       var parentWidth = self.get('actualWidth');       var parentHeight = self.get('actualHeight');       var mediaWidth = media.get('width');       var mediaHeight = media.get('height');       var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100;       var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100;       var windowWidth = popupMaxWidthNumber * parentWidth;       var windowHeight = popupMaxHeightNumber * parentHeight;       var footerHeight = w.get('footerHeight');       var headerHeight = w.get('headerHeight');       if(!headerHeight) {           var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom');           var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom');           headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight;           headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom');       }       if(!footerHeight) {           footerHeight = 0;       }       var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight');       var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom');       var parentAspectRatio = contentWindowWidth / contentWindowHeight;       var mediaAspectRatio = mediaWidth / mediaHeight;       if(parentAspectRatio > mediaAspectRatio) {           windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight');       }       else {           windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom');       }       if(windowWidth > parentWidth * popupMaxWidthNumber) {           windowWidth = parentWidth * popupMaxWidthNumber;       }       if(windowHeight > parentHeight * popupMaxHeightNumber) {           windowHeight = parentHeight * popupMaxHeightNumber;       }       w.set('width', windowWidth);       w.set('height', windowHeight);       w.set('x', (parentWidth - w.get('actualWidth')) * 0.5);       w.set('y', (parentHeight - w.get('actualHeight')) * 0.5);   };   if(autoCloseWhenFinished){       this.executeFunctionWhenChange(playList, 0, endFunction);   }   var isVideo = media.get('class') == 'Video';   if(isVideo){       this.bind('resize', resizeFunction, this);       resizeFunction();   }   else {       w.set('width', popupMaxWidth);       w.set('height', popupMaxHeight);   }   this.MainViewer.set('toolTipEnabled', false);   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){    var closeFunction = function(){       clearAutoClose();       this.resumePlayers(playersPaused, !containsAudio);       w.unbind('close', closeFunction, this);   };   var clearAutoClose = function(){       w.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var timeoutID = undefined;   if(autoCloseMilliSeconds){       var autoCloseFunction = function(){           w.hide();       };       w.bind('click', clearAutoClose, this);       timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); }
 },
 "scrollBarColor": "#000000",
 "gap": 10,
 "minWidth": 20,
 "buttonToggleMute": "this.IconButton_0D0876D9_0241_3DF5_4187_A924F6D29064",
 "id": "rootPlayer",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "height": "100%",
 "class": "Player",
 "paddingBottom": 0,
 "paddingRight": 0
})