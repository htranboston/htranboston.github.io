TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "class": "Panorama",
  "label": "golderlobbyvr01_180_r1",
  "hfovMin": 80,
  "partial": true,
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_CAD83AE6_CDC7_F27C_41D8_463388E6C1E9_t.jpg",
  "hfov": 180,
  "vfov": 180,
  "cardboardMenu": {
   "class": "Menu",
   "rollOverBackgroundColor": "#000000",
   "rollOverOpacity": 0.8,
   "backgroundColor": "#404040",
   "opacity": 0.4,
   "label": "Media",
   "fontColor": "#FFFFFF",
   "selectedBackgroundColor": "#202020",
   "id": "Menu_C4671C04_CDFB_E61F_41E0_44B4CA2C7A8E",
   "rollOverFontColor": "#FFFFFF",
   "children": [
    {
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 0)",
     "label": "golderlobbyvr01_180_r1"
    },
    {
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 1)",
     "label": "golderlobbyvr02_180_r1"
    },
    {
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 2)",
     "label": "golderlobbyvr03_180_r1"
    }
   ],
   "fontFamily": "Arial",
   "selectedFontColor": "#FFFFFF"
  },
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 2.7,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_CAD83AE6_CDC7_F27C_41D8_463388E6C1E9_0_HS_3_0_0_map.gif",
           "height": 30,
           "width": 30
          }
         ]
        },
        "pitch": -1.45,
        "yaw": -12.74
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_C4DCDD25_CDD7_EC2C_41A5_7009D863C577",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_CAD83AE6_CDC7_F27C_41D8_463388E6C1E9_0_HS_3_0.png",
           "height": 60,
           "width": 60
          }
         ]
        },
        "hfov": 2.7,
        "pitch": -1.45,
        "yaw": -12.74
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "toolTip": "Check-in",
        "click": "this.showPopupMedia(this.window_C7D3C1BE_CDD5_F41D_41DA_0497A831F5B3, this.album_A5C76E95_AFB1_353C_41E4_FB59D8D9F493, this.playList_C5DFCC8E_CDEC_662B_41D2_BF6DD7B5A306, '50%', '50%', false, false); this.playList_C5DFCC8E_CDEC_662B_41D2_BF6DD7B5A306.set('selectedIndex', 0); ",
        "displayTooltipInTouchScreens": true
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 22.56,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_CAD83AE6_CDC7_F27C_41D8_463388E6C1E9_0_HS_2_1_0_map.gif",
           "height": 31,
           "width": 126
          }
         ]
        },
        "pitch": 2.6,
        "yaw": 0.33
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_C7E054F8_CDCB_7C26_41DF_0A97D505EBCB",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_CAD83AE6_CDC7_F27C_41D8_463388E6C1E9_0_HS_2_0.png",
           "height": 63,
           "width": 253
          }
         ]
        },
        "hfov": 22.56,
        "pitch": 2.6,
        "yaw": 0.33
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "toolTip": "Home",
        "click": "var newWindow = window.open(\"https://www.golder.com/\", \"_blank\"); newWindow.focus()",
        "displayTooltipInTouchScreens": true
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 3.51,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_CAD83AE6_CDC7_F27C_41D8_463388E6C1E9_0_HS_1_0_0_map.gif",
           "height": 40,
           "width": 40
          }
         ]
        },
        "pitch": -12.48,
        "yaw": 23.57
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_C40C17E2_CDCA_DC29_41E3_AE1E5F0FE18A",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_CAD83AE6_CDC7_F27C_41D8_463388E6C1E9_0_HS_1_0.png",
           "height": 80,
           "width": 80
          }
         ]
        },
        "hfov": 3.51,
        "pitch": -12.48,
        "yaw": 23.57
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "toolTip": "Right Hall",
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "displayTooltipInTouchScreens": true
       }
      ],
      "enabledInCardboard": true
     },
     {
      "maps": [
       {
        "hfov": 3.51,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_CAD83AE6_CDC7_F27C_41D8_463388E6C1E9_0_HS_0_0_0_map.gif",
           "height": 40,
           "width": 40
          }
         ]
        },
        "pitch": -12.64,
        "yaw": -25.09
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_C42636C7_CDCA_DC77_41B4_16BC71AF8265",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_CAD83AE6_CDC7_F27C_41D8_463388E6C1E9_0_HS_0_0.png",
           "height": 80,
           "width": 80
          }
         ]
        },
        "hfov": 3.51,
        "pitch": -12.64,
        "yaw": -25.09
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "toolTip": "Left Hall",
        "click": "this.mainPlayList.set('selectedIndex', 2)",
        "displayTooltipInTouchScreens": true
       }
      ],
      "enabledInCardboard": true
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_CAD83AE6_CDC7_F27C_41D8_463388E6C1E9_r_hq.jpeg",
       "height": 2544,
       "width": 2544
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_CAD83AE6_CDC7_F27C_41D8_463388E6C1E9_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_CAD83AE6_CDC7_F27C_41D8_463388E6C1E9_l_hq.jpeg",
       "height": 2544,
       "width": 2544
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_CAD83AE6_CDC7_F27C_41D8_463388E6C1E9_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_CAD83AE6_CDC7_F27C_41D8_463388E6C1E9_u_hq.jpeg",
       "height": 2544,
       "width": 2544
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_CAD83AE6_CDC7_F27C_41D8_463388E6C1E9_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_CAD83AE6_CDC7_F27C_41D8_463388E6C1E9_d_hq.jpeg",
       "height": 2544,
       "width": 2544
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_CAD83AE6_CDC7_F27C_41D8_463388E6C1E9_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_CAD83AE6_CDC7_F27C_41D8_463388E6C1E9_t.jpg",
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_CAD83AE6_CDC7_F27C_41D8_463388E6C1E9_f_hq.jpeg",
       "height": 2544,
       "width": 2544
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_CAD83AE6_CDC7_F27C_41D8_463388E6C1E9_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "id": "panorama_CAD83AE6_CDC7_F27C_41D8_463388E6C1E9"
 },
 {
  "class": "PanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "id": "MainViewerPanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true,
  "preloadEnabled": false,
  "displayPlaybackBar": true,
  "mouseControlMode": "drag_rotation",
  "touchControlMode": "drag_rotation"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_CAD83AE6_CDC7_F27C_41D8_463388E6C1E9_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "label": "golderlobbyvr02_180_r1",
  "hfovMin": 80,
  "partial": true,
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_CADFD2E5_CDC7_F27D_41D9_BE744C797670_t.jpg",
  "hfov": 180,
  "vfov": 180,
  "cardboardMenu": "this.Menu_C4671C04_CDFB_E61F_41E0_44B4CA2C7A8E",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 3.58,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_CADFD2E5_CDC7_F27D_41D9_BE744C797670_0_HS_5_0_0_map.gif",
           "height": 39,
           "width": 40
          }
         ]
        },
        "pitch": 5.96,
        "yaw": 9.02
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_C7D9F99B_CDF6_F41F_41B4_801CDA02E798",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_CADFD2E5_CDC7_F27D_41D9_BE744C797670_0_HS_5_0.png",
           "height": 79,
           "width": 80
          }
         ]
        },
        "hfov": 3.58,
        "pitch": 5.96,
        "yaw": 9.02
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "toolTip": "Play Video",
        "click": "var newWindow = window.open(\"https://www.youtube.com/watch?v=LouAbxh6W48\", \"_blank\"); newWindow.focus()",
        "displayTooltipInTouchScreens": true
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 2.68,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_CADFD2E5_CDC7_F27D_41D9_BE744C797670_0_HS_4_0_0_map.gif",
           "height": 30,
           "width": 30
          }
         ]
        },
        "pitch": -7.4,
        "yaw": 71.94
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_C743B38C_CDF5_D4FA_41DD_5C9B4336ABED",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_CADFD2E5_CDC7_F27D_41D9_BE744C797670_0_HS_4_0.png",
           "height": 60,
           "width": 60
          }
         ]
        },
        "hfov": 2.68,
        "pitch": -7.4,
        "yaw": 71.94
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "toolTip": "Zoom Meeting",
        "click": "var newWindow = window.open(\"https://zoom.us/meetings\", \"_blank\"); newWindow.focus()",
        "displayTooltipInTouchScreens": true
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 7,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_CADFD2E5_CDC7_F27D_41D9_BE744C797670_0_HS_3_1_0_map.gif",
           "height": 72,
           "width": 38
          }
         ]
        },
        "pitch": 0.96,
        "yaw": -80.67
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_C74A77F7_CDF6_DC15_41AE_054BAFA1F70C",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_CADFD2E5_CDC7_F27D_41D9_BE744C797670_0_HS_3_0.png",
           "height": 145,
           "width": 77
          }
         ]
        },
        "hfov": 7,
        "pitch": 0.96,
        "yaw": -80.67
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "toolTip": "Manufacturing",
        "click": "var newWindow = window.open(\"https://www.golder.com/expertise/manufacturing/\", \"_blank\"); newWindow.focus()",
        "displayTooltipInTouchScreens": true
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 6.58,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_CADFD2E5_CDC7_F27D_41D9_BE744C797670_0_HS_2_1_0_map.gif",
           "height": 69,
           "width": 36
          }
         ]
        },
        "pitch": 0.79,
        "yaw": -72.14
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_C71429BF_CDF5_F415_41E2_62D01D51434E",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_CADFD2E5_CDC7_F27D_41D9_BE744C797670_0_HS_2_0.png",
           "height": 139,
           "width": 73
          }
         ]
        },
        "hfov": 6.58,
        "pitch": 0.79,
        "yaw": -72.14
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "toolTip": "Transportation",
        "click": "var newWindow = window.open(\"https://www.golder.com/expertise/transportation/\", \"_blank\"); newWindow.focus()",
        "displayTooltipInTouchScreens": true
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 3.59,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_CADFD2E5_CDC7_F27D_41D9_BE744C797670_0_HS_1_1_0_map.gif",
           "height": 79,
           "width": 19
          }
         ]
        },
        "pitch": 0.68,
        "yaw": -61.46
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_C68930F3_CDCA_F42D_41E2_268D3E2AA675",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_CADFD2E5_CDC7_F27D_41D9_BE744C797670_0_HS_1_0.png",
           "height": 159,
           "width": 39
          }
         ]
        },
        "hfov": 3.59,
        "pitch": 0.68,
        "yaw": -61.46
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "toolTip": "Waste",
        "click": "var newWindow = window.open(\"https://www.golder.com/expertise/waste/\", \"_blank\"); newWindow.focus()",
        "displayTooltipInTouchScreens": true
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 4.97,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_CADFD2E5_CDC7_F27D_41D9_BE744C797670_0_HS_0_1_0_map.gif",
           "height": 95,
           "width": 27
          }
         ]
        },
        "pitch": 0.77,
        "yaw": -56.08
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_C635DB3B_CDCB_D41D_41D9_0DFB1C63ADEE",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_CADFD2E5_CDC7_F27D_41D9_BE744C797670_0_HS_0_0.png",
           "height": 191,
           "width": 55
          }
         ]
        },
        "hfov": 4.97,
        "pitch": 0.77,
        "yaw": -56.08
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "toolTip": "Water",
        "click": "var newWindow = window.open(\"https://www.golder.com/expertise/water/\", \"_blank\"); newWindow.focus()",
        "displayTooltipInTouchScreens": true
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_CADFD2E5_CDC7_F27D_41D9_BE744C797670_r_hq.jpeg",
       "height": 2544,
       "width": 2544
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_CADFD2E5_CDC7_F27D_41D9_BE744C797670_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_CADFD2E5_CDC7_F27D_41D9_BE744C797670_l_hq.jpeg",
       "height": 2544,
       "width": 2544
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_CADFD2E5_CDC7_F27D_41D9_BE744C797670_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_CADFD2E5_CDC7_F27D_41D9_BE744C797670_u_hq.jpeg",
       "height": 2544,
       "width": 2544
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_CADFD2E5_CDC7_F27D_41D9_BE744C797670_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_CADFD2E5_CDC7_F27D_41D9_BE744C797670_d_hq.jpeg",
       "height": 2544,
       "width": 2544
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_CADFD2E5_CDC7_F27D_41D9_BE744C797670_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_CADFD2E5_CDC7_F27D_41D9_BE744C797670_t.jpg",
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_CADFD2E5_CDC7_F27D_41D9_BE744C797670_f_hq.jpeg",
       "height": 2544,
       "width": 2544
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_CADFD2E5_CDC7_F27D_41D9_BE744C797670_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "id": "panorama_CADFD2E5_CDC7_F27D_41D9_BE744C797670"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_CADFD2E5_CDC7_F27D_41D9_BE744C797670_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "label": "golderlobbyvr03_180_r1",
  "hfovMin": 80,
  "partial": true,
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_CA064BAD_CDC7_92CD_4195_32347B8F0D30_t.jpg",
  "hfov": 180,
  "vfov": 180,
  "cardboardMenu": "this.Menu_C4671C04_CDFB_E61F_41E0_44B4CA2C7A8E",
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 3.8,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_CA064BAD_CDC7_92CD_4195_32347B8F0D30_0_HS_5_1_0_map.gif",
           "height": 93,
           "width": 21
          }
         ]
        },
        "pitch": 2.77,
        "yaw": -65.75
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_C6A9590E_CDFD_55F4_41DD_342B426C0576",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_CA064BAD_CDC7_92CD_4195_32347B8F0D30_0_HS_5_0.png",
           "height": 186,
           "width": 42
          }
         ]
        },
        "hfov": 3.8,
        "pitch": 2.77,
        "yaw": -65.75
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "toolTip": "Environmental",
        "click": "var newWindow = window.open(\"https://www.golder.com/expertise/environmental/\", \"_blank\"); newWindow.focus()",
        "displayTooltipInTouchScreens": true
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 7.41,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_CA064BAD_CDC7_92CD_4195_32347B8F0D30_0_HS_4_1_0_map.gif",
           "height": 134,
           "width": 41
          }
         ]
        },
        "pitch": 3.9,
        "yaw": -54.65
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_C70AB84D_CDFA_B475_41AB_3587A04B543A",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_CA064BAD_CDC7_92CD_4195_32347B8F0D30_0_HS_4_0.png",
           "height": 268,
           "width": 82
          }
         ]
        },
        "hfov": 7.41,
        "pitch": 3.9,
        "yaw": -54.65
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "toolTip": "Remediation",
        "click": "var newWindow = window.open(\"https://www.golder.com/expertise/remediation/\", \"_blank\"); newWindow.focus()",
        "displayTooltipInTouchScreens": true
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 15.43,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_CA064BAD_CDC7_92CD_4195_32347B8F0D30_0_HS_3_1_0_map.gif",
           "height": 199,
           "width": 86
          }
         ]
        },
        "pitch": 5.67,
        "yaw": -31.72
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_C6AC378B_CDFB_FCFD_41D9_F1C5B790979B",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_CA064BAD_CDC7_92CD_4195_32347B8F0D30_0_HS_3_0.png",
           "height": 399,
           "width": 172
          }
         ]
        },
        "hfov": 15.43,
        "pitch": 5.67,
        "yaw": -31.72
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "toolTip": "Mining",
        "click": "var newWindow = window.open(\"https://www.golder.com/expertise/mining/\", \"_blank\"); newWindow.focus()",
        "displayTooltipInTouchScreens": true
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 20.86,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_CA064BAD_CDC7_92CD_4195_32347B8F0D30_0_HS_2_1_0_map.gif",
           "height": 200,
           "width": 105
          }
         ]
        },
        "pitch": 5.79,
        "yaw": 8.85
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_C72C0D29_CDFA_EC3D_41E3_343B331FECEA",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_CA064BAD_CDC7_92CD_4195_32347B8F0D30_0_HS_2_0.png",
           "height": 444,
           "width": 234
          }
         ]
        },
        "hfov": 20.86,
        "pitch": 5.79,
        "yaw": 8.85
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "toolTip": "Oil & Gas",
        "click": "var newWindow = window.open(\"https://www.golder.com/expertise/oil-gas/\", \"_blank\"); newWindow.focus()",
        "displayTooltipInTouchScreens": true
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 11.31,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_CA064BAD_CDC7_92CD_4195_32347B8F0D30_0_HS_1_1_0_map.gif",
           "height": 173,
           "width": 63
          }
         ]
        },
        "pitch": 4.62,
        "yaw": 43.52
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_C6CAF8CC_CDF5_D47B_41E9_1159AAD183DD",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_CA064BAD_CDC7_92CD_4195_32347B8F0D30_0_HS_1_0.png",
           "height": 346,
           "width": 126
          }
         ]
        },
        "hfov": 11.31,
        "pitch": 4.62,
        "yaw": 43.52
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "toolTip": "Pipelines",
        "click": "var newWindow = window.open(\"https://www.golder.com/expertise/ground-engineering/pipelines/\", \"_blank\"); newWindow.focus()",
        "displayTooltipInTouchScreens": true
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 5.28,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_CA064BAD_CDC7_92CD_4195_32347B8F0D30_0_HS_0_1_0_map.gif",
           "height": 116,
           "width": 29
          }
         ]
        },
        "pitch": 3.54,
        "yaw": 60.21
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_C72C6C31_CDF7_AC2D_41E4_F6EDD4C835E6",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_CA064BAD_CDC7_92CD_4195_32347B8F0D30_0_HS_0_0.png",
           "height": 233,
           "width": 58
          }
         ]
        },
        "hfov": 5.28,
        "pitch": 3.54,
        "yaw": 60.21
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "toolTip": "Power",
        "click": "var newWindow = window.open(\"https://www.golder.com/expertise/power/\", \"_blank\"); newWindow.focus()",
        "displayTooltipInTouchScreens": true
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_CA064BAD_CDC7_92CD_4195_32347B8F0D30_r_hq.jpeg",
       "height": 2544,
       "width": 2544
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_CA064BAD_CDC7_92CD_4195_32347B8F0D30_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_CA064BAD_CDC7_92CD_4195_32347B8F0D30_l_hq.jpeg",
       "height": 2544,
       "width": 2544
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_CA064BAD_CDC7_92CD_4195_32347B8F0D30_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_CA064BAD_CDC7_92CD_4195_32347B8F0D30_u_hq.jpeg",
       "height": 2544,
       "width": 2544
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_CA064BAD_CDC7_92CD_4195_32347B8F0D30_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_CA064BAD_CDC7_92CD_4195_32347B8F0D30_d_hq.jpeg",
       "height": 2544,
       "width": 2544
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_CA064BAD_CDC7_92CD_4195_32347B8F0D30_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_CA064BAD_CDC7_92CD_4195_32347B8F0D30_t.jpg",
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_CA064BAD_CDC7_92CD_4195_32347B8F0D30_f_hq.jpeg",
       "height": 2544,
       "width": 2544
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_CA064BAD_CDC7_92CD_4195_32347B8F0D30_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "id": "panorama_CA064BAD_CDC7_92CD_4195_32347B8F0D30"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_CA064BAD_CDC7_92CD_4195_32347B8F0D30_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "PlayList",
  "items": [
   {
    "media": "this.panorama_CAD83AE6_CDC7_F27C_41D8_463388E6C1E9",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_CAD83AE6_CDC7_F27C_41D8_463388E6C1E9_camera"
   },
   {
    "media": "this.panorama_CADFD2E5_CDC7_F27D_41D9_BE744C797670",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_CADFD2E5_CDC7_F27D_41D9_BE744C797670_camera"
   },
   {
    "media": "this.panorama_CA064BAD_CDC7_92CD_4195_32347B8F0D30",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 0)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_CA064BAD_CDC7_92CD_4195_32347B8F0D30_camera"
   }
  ],
  "id": "mainPlayList"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "media": "this.panorama_CAD83AE6_CDC7_F27C_41D8_463388E6C1E9",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_A778EE3D_AF6A_078D_41D2_27D1B992A088, 0, 1)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_CAD83AE6_CDC7_F27C_41D8_463388E6C1E9_camera"
   },
   {
    "media": "this.panorama_CADFD2E5_CDC7_F27D_41D9_BE744C797670",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_A778EE3D_AF6A_078D_41D2_27D1B992A088, 1, 2)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_CADFD2E5_CDC7_F27D_41D9_BE744C797670_camera"
   },
   {
    "media": "this.panorama_CA064BAD_CDC7_92CD_4195_32347B8F0D30",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_A778EE3D_AF6A_078D_41D2_27D1B992A088, 2, 0)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_CA064BAD_CDC7_92CD_4195_32347B8F0D30_camera"
   }
  ],
  "id": "playList_A778EE3D_AF6A_078D_41D2_27D1B992A088"
 },
 {
  "class": "PhotoAlbum",
  "label": "Photo Album golderlogin",
  "id": "album_A5C76E95_AFB1_353C_41E4_FB59D8D9F493",
  "playList": {
   "class": "PhotoPlayList",
   "items": [
    {
     "media": {
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_A5C76E95_AFB1_353C_41E4_FB59D8D9F493_0.png"
        }
       ]
      },
      "label": "golderlogin",
      "thumbnailUrl": "media/album_A5C76E95_AFB1_353C_41E4_FB59D8D9F493_0_t.png",
      "width": 522,
      "height": 427,
      "id": "album_A5C76E95_AFB1_353C_41E4_FB59D8D9F493_0",
      "duration": 5000
     },
     "class": "PhotoPlayListItem",
     "camera": {
      "scaleMode": "fit_inside",
      "class": "PhotoCamera"
     }
    }
   ],
   "id": "album_A5C76E95_AFB1_353C_41E4_FB59D8D9F493_AlbumPlayList"
  },
  "thumbnailUrl": "media/album_A5C76E95_AFB1_353C_41E4_FB59D8D9F493_t.png"
 },
 "this.album_A5C76E95_AFB1_353C_41E4_FB59D8D9F493_0",
 {
  "class": "PlayList",
  "items": [
   {
    "media": "this.album_A5C76E95_AFB1_353C_41E4_FB59D8D9F493",
    "class": "PhotoAlbumPlayListItem",
    "begin": "this.updateMediaLabelFromPlayList(this.album_A5C76E95_AFB1_353C_41E4_FB59D8D9F493_AlbumPlayList, this.htmltext_C4636BF5_CDFB_E1F9_41AC_C2BF54E40447, this.albumitem_C5DBFC90_CDEC_6637_41C1_5128A61811AF); this.loopAlbum(this.playList_C5DFCC8E_CDEC_662B_41D2_BF6DD7B5A306, 0)",
    "id": "albumitem_C5DBFC90_CDEC_6637_41C1_5128A61811AF",
    "player": {
     "class": "PhotoAlbumPlayer",
     "viewerArea": {
      "progressRight": 0,
      "progressOpacity": 1,
      "toolTipShadowSpread": 0,
      "toolTipShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "vertical",
      "playbackBarHeadShadow": true,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipPaddingLeft": 6,
      "progressBackgroundOpacity": 1,
      "progressBarBorderColor": "#000000",
      "playbackBarOpacity": 1,
      "progressBarBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "shadow": false,
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadOpacity": 1,
      "toolTipFontColor": "#606060",
      "progressBackgroundColorDirection": "vertical",
      "paddingTop": 0,
      "progressBarOpacity": 1,
      "progressHeight": 10,
      "class": "ViewerArea",
      "progressBorderColor": "#000000",
      "progressBottom": 2,
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "progressBorderSize": 0,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarBottom": 0,
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarHeadShadowOpacity": 0.7,
      "progressBorderRadius": 0,
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "playbackBarHeight": 10,
      "toolTipFontStyle": "normal",
      "width": "100%",
      "height": "100%",
      "id": "viewer_uidC47CBBF5_CDFB_E1F9_41E9_B37E6D5A1C1C",
      "playbackBarHeadWidth": 6,
      "playbackBarBorderColor": "#FFFFFF",
      "playbackBarProgressBorderSize": 0,
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarRight": 0,
      "toolTipPaddingBottom": 4,
      "paddingLeft": 0,
      "toolTipPaddingTop": 4,
      "progressBarBorderRadius": 0,
      "toolTipBorderSize": 1,
      "progressBarBorderSize": 0,
      "minWidth": 100,
      "playbackBarProgressBorderRadius": 0,
      "toolTipTextShadowColor": "#000000",
      "transitionMode": "blending",
      "borderRadius": 0,
      "minHeight": 50,
      "toolTipShadowColor": "#333333",
      "toolTipTextShadowOpacity": 0,
      "playbackBarProgressBorderColor": "#000000",
      "playbackBarBorderRadius": 0,
      "toolTipBorderColor": "#767676",
      "toolTipFontFamily": "Arial",
      "toolTipFontWeight": "normal",
      "toolTipBorderRadius": 3,
      "toolTipFontSize": 12,
      "playbackBarHeadBorderRadius": 0,
      "paddingBottom": 0,
      "toolTipOpacity": 1,
      "toolTipShadowHorizontalLength": 0,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarProgressOpacity": 1,
      "progressLeft": 0,
      "playbackBarHeadBorderColor": "#000000",
      "toolTipShadowOpacity": 1,
      "progressBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarBorderSize": 0,
      "paddingRight": 0,
      "playbackBarLeft": 0,
      "playbackBarBackgroundOpacity": 1,
      "toolTipBackgroundColor": "#F6F6F6",
      "borderSize": 0,
      "toolTipPaddingRight": 6,
      "playbackBarHeadHeight": 15,
      "playbackBarHeadShadowColor": "#000000",
      "playbackBarHeadBorderSize": 0
     },
     "id": "viewer_uidC5D91C8F_CDEC_6629_41D2_E4A76191F99APhotoAlbumPlayer"
    }
   }
  ],
  "id": "playList_C5DFCC8E_CDEC_662B_41D2_BF6DD7B5A306"
 },
 "this.Menu_C4671C04_CDFB_E61F_41E0_44B4CA2C7A8E",
 {
  "scrollBarColor": "#000000",
  "headerPaddingLeft": 10,
  "bodyPaddingRight": 0,
  "showEffect": {
   "duration": 500,
   "class": "FadeInEffect",
   "easing": "cubic_in_out"
  },
  "bodyPaddingLeft": 0,
  "layout": "vertical",
  "backgroundColorDirection": "vertical",
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColorDirection": "vertical",
  "shadowHorizontalLength": 3,
  "closeButtonPressedIconColor": "#FFFFFF",
  "titlePaddingTop": 5,
  "headerVerticalAlign": "middle",
  "closeButtonIconWidth": 20,
  "closeButtonBackgroundColor": [],
  "shadowBlurRadius": 6,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "bodyBackgroundOpacity": 0,
  "shadow": true,
  "closeButtonIconHeight": 20,
  "closeButtonRollOverBackgroundColor": [],
  "headerPaddingBottom": 5,
  "paddingTop": 0,
  "veilColorRatios": [
   0,
   1
  ],
  "shadowOpacity": 0.5,
  "class": "Window",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "modal": true,
  "footerBackgroundOpacity": 0,
  "closeButtonIconColor": "#B2B2B2",
  "closeButtonRollOverIconColor": "#FFFFFF",
  "shadowVerticalLength": 0,
  "titleTextDecoration": "none",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "titleFontWeight": "normal",
  "overflow": "scroll",
  "title": "Check-in",
  "close": "this.playList_C5DFCC8E_CDEC_662B_41D2_BF6DD7B5A306.set('selectedIndex', -1);",
  "width": 400,
  "horizontalAlign": "center",
  "gap": 10,
  "closeButtonBorderRadius": 11,
  "id": "window_C7D3C1BE_CDD5_F41D_41DA_0497A831F5B3",
  "children": [
   {
    "rollOver": "this.showComponentsWhileMouseOver(this.container_C47C9BF5_CDFB_E1F9_41E4_06459AAA2C7E, [this.htmltext_C4636BF5_CDFB_E1F9_41AC_C2BF54E40447,this.component_C4633BF5_CDFB_E1F9_41CF_BB256D10B771,this.component_C4630BF5_CDFB_E1F9_41D3_3D4722C7EAFF], 2000)",
    "borderSize": 0,
    "scrollBarColor": "#000000",
    "paddingLeft": 0,
    "scrollBarOpacity": 0.5,
    "backgroundColorDirection": "vertical",
    "children": [
     "this.viewer_uidC47CBBF5_CDFB_E1F9_41E9_B37E6D5A1C1C",
     {
      "borderSize": 0,
      "scrollBarColor": "#FFFFFF",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "backgroundColorDirection": "vertical",
      "children": [
       {
        "borderSize": 0,
        "scrollBarColor": "#000000",
        "paddingLeft": 10,
        "scrollBarOpacity": 0.5,
        "backgroundColorDirection": "vertical",
        "backgroundOpacity": 0.7,
        "minWidth": 0,
        "minHeight": 0,
        "shadow": false,
        "backgroundColorRatios": [
         0
        ],
        "borderRadius": 0,
        "paddingTop": 5,
        "html": "",
        "class": "HTMLText",
        "scrollBarVisible": "rollOver",
        "scrollBarWidth": 10,
        "paddingBottom": 5,
        "scrollBarMargin": 2,
        "backgroundColor": [
         "#000000"
        ],
        "paddingRight": 10,
        "width": "100%",
        "id": "htmltext_C4636BF5_CDFB_E1F9_41AC_C2BF54E40447",
        "hideEffect": {
         "duration": 250,
         "class": "FadeOutEffect",
         "easing": "cubic_in_out"
        },
        "showEffect": {
         "duration": 250,
         "class": "FadeInEffect",
         "easing": "cubic_in_out"
        },
        "visible": false
       }
      ],
      "layout": "vertical",
      "bottom": 0,
      "minWidth": 20,
      "minHeight": 20,
      "shadow": false,
      "backgroundColorRatios": [],
      "contentOpaque": true,
      "verticalAlign": "bottom",
      "borderRadius": 0,
      "paddingTop": 0,
      "class": "Container",
      "scrollBarVisible": "rollOver",
      "scrollBarWidth": 7,
      "paddingBottom": 0,
      "left": 0,
      "scrollBarMargin": 2,
      "right": 0,
      "horizontalAlign": "left",
      "gap": 10,
      "backgroundColor": [],
      "paddingRight": 0,
      "overflow": "scroll",
      "height": "30%",
      "backgroundOpacity": 0.3
     },
     {
      "paddingLeft": 0,
      "top": "45%",
      "minWidth": 0,
      "minHeight": 0,
      "shadow": false,
      "verticalAlign": "middle",
      "borderRadius": 0,
      "paddingTop": 0,
      "mode": "push",
      "class": "IconButton",
      "iconURL": "skin/album_left.png",
      "paddingBottom": 0,
      "click": "this.loadFromCurrentMediaPlayList(this.album_A5C76E95_AFB1_353C_41E4_FB59D8D9F493_AlbumPlayList, -1)",
      "cursor": "hand",
      "left": 10,
      "horizontalAlign": "center",
      "paddingRight": 0,
      "transparencyActive": false,
      "borderSize": 0,
      "id": "component_C4633BF5_CDFB_E1F9_41CF_BB256D10B771",
      "hideEffect": {
       "duration": 250,
       "class": "FadeOutEffect",
       "easing": "cubic_in_out"
      },
      "showEffect": {
       "duration": 250,
       "class": "FadeInEffect",
       "easing": "cubic_in_out"
      },
      "visible": false,
      "backgroundOpacity": 0
     },
     {
      "paddingLeft": 0,
      "minWidth": 0,
      "top": "45%",
      "minHeight": 0,
      "shadow": false,
      "verticalAlign": "middle",
      "borderRadius": 0,
      "paddingTop": 0,
      "mode": "push",
      "class": "IconButton",
      "iconURL": "skin/album_right.png",
      "paddingBottom": 0,
      "click": "this.loadFromCurrentMediaPlayList(this.album_A5C76E95_AFB1_353C_41E4_FB59D8D9F493_AlbumPlayList, 1)",
      "cursor": "hand",
      "right": 10,
      "horizontalAlign": "center",
      "paddingRight": 0,
      "transparencyActive": false,
      "borderSize": 0,
      "id": "component_C4630BF5_CDFB_E1F9_41D3_3D4722C7EAFF",
      "hideEffect": {
       "duration": 250,
       "class": "FadeOutEffect",
       "easing": "cubic_in_out"
      },
      "showEffect": {
       "duration": 250,
       "class": "FadeInEffect",
       "easing": "cubic_in_out"
      },
      "visible": false,
      "backgroundOpacity": 0
     }
    ],
    "layout": "absolute",
    "minWidth": 20,
    "minHeight": 20,
    "shadow": false,
    "backgroundColorRatios": [],
    "contentOpaque": false,
    "verticalAlign": "top",
    "borderRadius": 0,
    "paddingTop": 0,
    "class": "Container",
    "scrollBarVisible": "rollOver",
    "scrollBarWidth": 10,
    "paddingBottom": 0,
    "scrollBarMargin": 2,
    "horizontalAlign": "left",
    "gap": 10,
    "backgroundColor": [],
    "paddingRight": 0,
    "width": "100%",
    "id": "container_C47C9BF5_CDFB_E1F9_41E4_06459AAA2C7E",
    "overflow": "scroll",
    "height": "100%",
    "backgroundOpacity": 0.3
   }
  ],
  "headerBorderSize": 0,
  "height": 600,
  "shadowColor": "#000000",
  "bodyPaddingBottom": 0,
  "bodyPaddingTop": 0,
  "closeButtonPressedBackgroundColor": [],
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "paddingLeft": 0,
  "scrollBarOpacity": 0.5,
  "closeButtonPressedIconLineWidth": 3,
  "backgroundOpacity": 1,
  "minWidth": 20,
  "veilColorDirection": "horizontal",
  "titleFontSize": 14,
  "closeButtonIconLineWidth": 2,
  "titleFontColor": "#000000",
  "borderRadius": 5,
  "minHeight": 20,
  "titlePaddingBottom": 5,
  "titleFontStyle": "normal",
  "veilOpacity": 0.4,
  "backgroundColorRatios": [],
  "contentOpaque": false,
  "verticalAlign": "middle",
  "footerHeight": 5,
  "headerBackgroundOpacity": 0,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonBackgroundColorRatios": [],
  "scrollBarVisible": "rollOver",
  "titlePaddingRight": 5,
  "scrollBarWidth": 10,
  "paddingBottom": 0,
  "headerBorderColor": "#000000",
  "titlePaddingLeft": 5,
  "scrollBarMargin": 2,
  "shadowSpread": 1,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "titleFontFamily": "Arial",
  "veilHideEffect": {
   "duration": 500,
   "class": "FadeOutEffect",
   "easing": "cubic_in_out"
  },
  "backgroundColor": [],
  "veilShowEffect": {
   "duration": 500,
   "class": "FadeInEffect",
   "easing": "cubic_in_out"
  },
  "paddingRight": 0,
  "headerBackgroundColorDirection": "vertical",
  "hideEffect": {
   "duration": 500,
   "class": "FadeOutEffect",
   "easing": "cubic_in_out"
  },
  "borderSize": 0,
  "headerPaddingRight": 0,
  "headerPaddingTop": 10
 },
 {
  "class": "MediaAudio",
  "id": "audio_A0506B1C_AF6E_0D92_41CD_BE6FC628C667",
  "autoplay": true,
  "audio": {
   "mp3Url": "media/audio_A0506B1C_AF6E_0D92_41CD_BE6FC628C667.mp3",
   "class": "AudioResource",
   "oggUrl": "media/audio_A0506B1C_AF6E_0D92_41CD_BE6FC628C667.ogg"
  }
 }
], "children": [
 {
  "progressRight": 0,
  "progressOpacity": 1,
  "toolTipShadowSpread": 0,
  "toolTipShadowBlurRadius": 3,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadShadow": true,
  "top": 0,
  "toolTipPaddingLeft": 6,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "progressBackgroundOpacity": 1,
  "progressBarBorderColor": "#000000",
  "playbackBarOpacity": 1,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "shadow": false,
  "toolTipShadowVerticalLength": 0,
  "playbackBarHeadOpacity": 1,
  "toolTipFontColor": "#606060",
  "progressBackgroundColorDirection": "vertical",
  "paddingTop": 0,
  "progressBarOpacity": 1,
  "progressHeight": 10,
  "class": "ViewerArea",
  "progressBorderColor": "#000000",
  "progressBottom": 0,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressBorderSize": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarBottom": 5,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBorderRadius": 0,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeight": 10,
  "toolTipFontStyle": "normal",
  "width": "100%",
  "height": "100%",
  "id": "MainViewer",
  "playbackBarHeadWidth": 6,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarRight": 0,
  "toolTipPaddingBottom": 4,
  "paddingLeft": 0,
  "toolTipPaddingTop": 4,
  "progressBarBorderRadius": 0,
  "toolTipBorderSize": 1,
  "progressBarBorderSize": 0,
  "minWidth": 100,
  "playbackBarProgressBorderRadius": 0,
  "toolTipTextShadowColor": "#000000",
  "transitionMode": "blending",
  "borderRadius": 0,
  "minHeight": 50,
  "toolTipShadowColor": "#333333",
  "toolTipTextShadowOpacity": 0,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarBorderRadius": 0,
  "toolTipBorderColor": "#767676",
  "toolTipFontFamily": "Arial",
  "toolTipFontWeight": "normal",
  "toolTipBorderRadius": 3,
  "toolTipFontSize": 12,
  "playbackBarHeadBorderRadius": 0,
  "paddingBottom": 0,
  "toolTipOpacity": 1,
  "left": 0,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarProgressOpacity": 1,
  "progressLeft": 0,
  "playbackBarHeadBorderColor": "#000000",
  "toolTipShadowHorizontalLength": 0,
  "toolTipShadowOpacity": 1,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarBorderSize": 0,
  "paddingRight": 0,
  "playbackBarLeft": 0,
  "playbackBarBackgroundOpacity": 1,
  "toolTipBackgroundColor": "#F6F6F6",
  "borderSize": 0,
  "toolTipPaddingRight": 6,
  "playbackBarHeadHeight": 15,
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarHeadBorderSize": 0
 },
 {
  "scrollBarColor": "#000000",
  "scrollBarOpacity": 0.5,
  "paddingLeft": 0,
  "children": [
   {
    "itemPaddingLeft": 3,
    "itemHorizontalAlign": "center",
    "borderSize": 0,
    "scrollBarColor": "#FFFFFF",
    "itemOpacity": 1,
    "paddingLeft": 20,
    "itemThumbnailShadow": true,
    "scrollBarOpacity": 0.5,
    "playList": "this.playList_A778EE3D_AF6A_078D_41D2_27D1B992A088",
    "backgroundColorDirection": "vertical",
    "itemBackgroundOpacity": 0,
    "itemMode": "normal",
    "minWidth": 0,
    "itemThumbnailOpacity": 1,
    "itemThumbnailWidth": 100,
    "itemLabelHorizontalAlign": "center",
    "itemThumbnailShadowOpacity": 0.8,
    "itemLabelFontColor": "#FFFFFF",
    "borderRadius": 5,
    "itemLabelFontFamily": "Arial",
    "minHeight": 0,
    "itemBackgroundColor": [],
    "itemVerticalAlign": "middle",
    "shadow": false,
    "backgroundColorRatios": [
     0
    ],
    "itemThumbnailShadowBlurRadius": 4,
    "itemThumbnailHeight": 75,
    "verticalAlign": "top",
    "itemThumbnailScaleMode": "fit_outside",
    "paddingTop": 10,
    "itemThumbnailShadowSpread": 1,
    "class": "ThumbnailList",
    "itemLabelPosition": "bottom",
    "itemPaddingBottom": 3,
    "itemThumbnailBorderRadius": 5,
    "maxWidth": 800,
    "itemBorderRadius": 0,
    "scrollBarVisible": "rollOver",
    "scrollBarWidth": 10,
    "paddingBottom": 10,
    "selectedItemLabelFontWeight": "bold",
    "layout": "horizontal",
    "itemLabelFontSize": 14,
    "itemThumbnailShadowColor": "#000000",
    "scrollBarMargin": 2,
    "maxHeight": 600,
    "itemThumbnailShadowVerticalLength": 3,
    "itemBackgroundColorRatios": [],
    "itemPaddingRight": 3,
    "itemLabelFontWeight": "normal",
    "gap": 10,
    "backgroundColor": [
     "#000000"
    ],
    "paddingRight": 20,
    "itemLabelFontStyle": "normal",
    "itemLabelTextDecoration": "none",
    "itemPaddingTop": 3,
    "horizontalAlign": "left",
    "itemBackgroundColorDirection": "vertical",
    "itemThumbnailShadowHorizontalLength": 3,
    "itemLabelGap": 5,
    "backgroundOpacity": 0.2
   }
  ],
  "layout": "horizontal",
  "bottom": 0,
  "minWidth": 20,
  "minHeight": 20,
  "shadow": false,
  "contentOpaque": false,
  "verticalAlign": "bottom",
  "borderRadius": 0,
  "paddingTop": 0,
  "class": "Container",
  "scrollBarVisible": "rollOver",
  "scrollBarWidth": 10,
  "paddingBottom": 0,
  "left": 0,
  "scrollBarMargin": 2,
  "right": 0,
  "horizontalAlign": "center",
  "gap": 10,
  "paddingRight": 0,
  "borderSize": 0,
  "overflow": "visible",
  "height": 200,
  "backgroundOpacity": 0
 },
 {
  "scrollBarColor": "#000000",
  "paddingLeft": 0,
  "scrollBarOpacity": 0.5,
  "backgroundColorDirection": "vertical",
  "children": [
   {
    "transparencyActive": true,
    "toolTipShadowHorizontalLength": 0,
    "paddingLeft": 0,
    "toolTipPaddingTop": 4,
    "toolTipShadowSpread": 0,
    "toolTipBorderSize": 1,
    "minWidth": 1,
    "bottom": 15,
    "toolTipShadowBlurRadius": 3,
    "toolTipPaddingLeft": 6,
    "borderRadius": 0,
    "minHeight": 1,
    "shadow": false,
    "toolTipTextShadowColor": "#000000",
    "toolTipFontColor": "#606060",
    "toolTipShadowColor": "#333333",
    "verticalAlign": "middle",
    "toolTipTextShadowOpacity": 0,
    "paddingTop": 0,
    "mode": "toggle",
    "class": "IconButton",
    "toolTipShadowVerticalLength": 0,
    "iconURL": "skin/IconButton_A1E435C3_AF9A_04F6_41D5_8E1A9611C737.png",
    "toolTip": "Fullscreen",
    "toolTipBorderColor": "#767676",
    "maxWidth": 128,
    "toolTipFontFamily": "Arial",
    "toolTipFontWeight": "normal",
    "toolTipBorderRadius": 3,
    "toolTipFontSize": 12,
    "paddingBottom": 0,
    "toolTipOpacity": 1,
    "cursor": "hand",
    "maxHeight": 128,
    "right": 15,
    "toolTipShadowOpacity": 1,
    "toolTipTextShadowBlurRadius": 3,
    "paddingRight": 0,
    "width": 40,
    "toolTipPaddingRight": 6,
    "toolTipBackgroundColor": "#F6F6F6",
    "borderSize": 0,
    "id": "IconButton_A1E435C3_AF9A_04F6_41D5_8E1A9611C737",
    "toolTipFontStyle": "normal",
    "horizontalAlign": "center",
    "height": 40,
    "toolTipPaddingBottom": 4,
    "backgroundOpacity": 0
   },
   {
    "fontFamily": "Arial",
    "fontSize": 12,
    "shadowColor": "#000000",
    "fontColor": "#FFFFFF",
    "backgroundColorDirection": "vertical",
    "paddingLeft": 0,
    "layout": "horizontal",
    "minWidth": 0,
    "pressedBackgroundOpacity": 0,
    "top": 15,
    "pressedIconWidth": 40,
    "rollOverIconHeight": 40,
    "iconWidth": 40,
    "fontStyle": "normal",
    "iconHeight": 40,
    "shadowBlurRadius": 6,
    "minHeight": 0,
    "rollOverIconWidth": 40,
    "shadow": false,
    "backgroundColorRatios": [
     0,
     1
    ],
    "verticalAlign": "middle",
    "pressedIconURL": "skin/Button_A1C7783F_AF96_0B8E_41D7_BD529DDBCFDA_pressed.png",
    "borderRadius": 0,
    "borderColor": "#000000",
    "paddingTop": 0,
    "mode": "toggle",
    "class": "Button",
    "iconURL": "skin/Button_A1C7783F_AF96_0B8E_41D7_BD529DDBCFDA.png",
    "fontWeight": "normal",
    "pressedIconHeight": 40,
    "paddingBottom": 0,
    "rollOverBackgroundOpacity": 0,
    "cursor": "hand",
    "shadowSpread": 1,
    "iconBeforeLabel": true,
    "right": 15,
    "horizontalAlign": "center",
    "gap": 0,
    "backgroundColor": [
     "#5794FE",
     "#0065CD"
    ],
    "paddingRight": 0,
    "width": 40,
    "borderSize": 0,
    "id": "Button_A1C7783F_AF96_0B8E_41D7_BD529DDBCFDA",
    "textDecoration": "none",
    "height": 40,
    "backgroundOpacity": 0
   }
  ],
  "layout": "absolute",
  "minWidth": 1,
  "top": "5%",
  "minHeight": 1,
  "shadow": false,
  "backgroundColorRatios": [
   0,
   1
  ],
  "contentOpaque": false,
  "borderColor": "#000000",
  "borderRadius": 5,
  "verticalAlign": "top",
  "paddingTop": 0,
  "class": "Container",
  "scrollBarVisible": "rollOver",
  "scrollBarWidth": 10,
  "paddingBottom": 0,
  "scrollBarMargin": 2,
  "right": "3%",
  "horizontalAlign": "left",
  "gap": 10,
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "paddingRight": 0,
  "width": 70,
  "borderSize": 1,
  "id": "Container_BFADFF8B_AF6A_0575_41BD_D158D2D6CE02",
  "overflow": "scroll",
  "height": 125,
  "backgroundOpacity": 0.3
 }
], 
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scripts": {
  "shareFacebook": function(url){    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "shareGoogle": function(url){    window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "shareTwitter": function(url){    window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "isCardboardViewMode": function(){    var players = this.getByClassName('PanoramaPlayer');   return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){    var setVisibility = function(visible){       for(var i = 0, length = components.length; i<length; i++){           components[i].set('visible', visible);       }   };   if (this.rootPlayer.touchEnabled){       setVisibility(true);   } else {       var timeoutID = -1;       var rollOverFunction = function(){           setVisibility(true);           if(timeoutID >= 0) clearTimeout(timeoutID);           parentComponent.unbind('rollOver', rollOverFunction, this);           parentComponent.bind('rollOut', rollOutFunction, this);       };       var rollOutFunction = function(){           var timeoutFunction = function(){               setVisibility(false);               parentComponent.unbind('rollOver', rollOverFunction, this);           };           parentComponent.unbind('rollOut', rollOutFunction, this);           parentComponent.bind('rollOver', rollOverFunction, this);           timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut);       };       parentComponent.bind('rollOver', rollOverFunction, this);   } },
  "loopAlbum": function(playList, index){    var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var loopFunction = function(){       player.play();   };   this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){    var self = this;   var closeFunction = function(){       self.MainViewer.set('toolTipEnabled', true);       this.resumePlayers(playersPaused, !containsAudio);       if(isVideo) {           this.unbind('resize', resizeFunction, this);       }       w.unbind('close', closeFunction, this);   };   var endFunction = function(){       w.hide();   };   var resizeFunction = function(){       var parentWidth = self.get('actualWidth');       var parentHeight = self.get('actualHeight');       var mediaWidth = media.get('width');       var mediaHeight = media.get('height');       var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100;       var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100;       var windowWidth = popupMaxWidthNumber * parentWidth;       var windowHeight = popupMaxHeightNumber * parentHeight;       var footerHeight = w.get('footerHeight');       var headerHeight = w.get('headerHeight');       if(!headerHeight) {           var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom');           var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom');           headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight;           headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom');       }       if(!footerHeight) {           footerHeight = 0;       }       var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight');       var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom');       var parentAspectRatio = contentWindowWidth / contentWindowHeight;       var mediaAspectRatio = mediaWidth / mediaHeight;       if(parentAspectRatio > mediaAspectRatio) {           windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight');       }       else {           windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom');       }       if(windowWidth > parentWidth * popupMaxWidthNumber) {           windowWidth = parentWidth * popupMaxWidthNumber;       }       if(windowHeight > parentHeight * popupMaxHeightNumber) {           windowHeight = parentHeight * popupMaxHeightNumber;       }       w.set('width', windowWidth);       w.set('height', windowHeight);       w.set('x', (parentWidth - w.get('actualWidth')) * 0.5);       w.set('y', (parentHeight - w.get('actualHeight')) * 0.5);   };   if(autoCloseWhenFinished){       this.executeFunctionWhenChange(playList, 0, endFunction);   }   var isVideo = media.get('class') == 'Video';   if(isVideo){       this.bind('resize', resizeFunction, this);       resizeFunction();   }   else {       w.set('width', popupMaxWidth);       w.set('height', popupMaxHeight);   }   this.MainViewer.set('toolTipEnabled', false);   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "loadFromCurrentMediaPlayList": function(playList, delta){    var currentIndex = playList.get('selectedIndex');   var totalItems = playList.get('items').length;   var newIndex = (currentIndex + delta) % totalItems;   while(newIndex < 0){       newIndex = totalItems + newIndex;   };   if(currentIndex != newIndex){       playList.set('selectedIndex', newIndex);   }; },
  "getKey": function(key){    return window[key]; },
  "getPlayListWithMedia": function(media, onlySelected){    var playLists = this.getByClassName('PlayList');   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       if(onlySelected && playList.get('selectedIndex') == -1)           continue;       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           if(items[j].get('media') == media)               return playList;       }   }   return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('state') == 'playing') {           if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){               player.pauseCamera();           }           else{               player.pause();           }       }       else {           players.splice(i, 1);       }   }   return players; },
  "existsKey": function(key){    return key in window; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){    var audios = window.currentGlobalAudios;   if(!audios) return;   var resumeFunction = this.resumeGlobalAudios;   var endFunction = function(){       if(playList.get('selectedIndex') != index) {           resumeFunction(caller);       }   };   this.pauseGlobalAudios(caller);   this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){    var self = this;   var showEndFunction = function() {       popupPanoramaOverlay.unbind('showEnd', showEndFunction);       closeButton.bind('click', hideFunction, this);       setCloseButtonPosition();       closeButton.set('visible', true);   };   var endFunction = function() {       if(!popupPanoramaOverlay.get('loop'))           hideFunction();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       if(!self.isCardboardViewMode())           popupPanoramaOverlay.set('visible', false);       closeButton.set('visible', false);       closeButton.unbind('click', hideFunction, this);       popupPanoramaOverlay.unbind('end', endFunction, self);       self.resumePlayers(playersPaused, true);       self.resumeGlobalAudios();   };   var setCloseButtonPosition = function() {       var right = 10;       var top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   this.MainViewer.set('toolTipEnabled', false);   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(true);   this.pauseGlobalAudios();   popupPanoramaOverlay.bind('end', endFunction, this, true);   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];   }   audio.pause(); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){    var self = this;   var closed = false;   var playerClickFunction = function() {       zoomImage.unbind('loaded', loadedFunction, self);       hideFunction();   };   var clearAutoClose = function(){       zoomImage.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var loadedFunction = function(){       self.unbind('click', playerClickFunction, self);       veil.set('visible', true);       setCloseButtonPosition();       closeButton.set('visible', true);       zoomImage.unbind('loaded', loadedFunction, this);       zoomImage.bind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this);       timeoutID = setTimeout(timeoutFunction, 200);   };   var timeoutFunction = function(){       timeoutID = undefined;       if(autoCloseMilliSeconds){           var autoCloseFunction = function(){               hideFunction();           };           zoomImage.bind('click', clearAutoClose, this);           timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);       }       zoomImage.bind('backgroundClick', hideFunction, this);       if(toggleImage) {           zoomImage.bind('click', toggleFunction, this);           zoomImage.set('imageCursor', 'hand');       }       closeButton.bind('click', hideFunction, this);       if(loadedCallback)           loadedCallback();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       closed = true;       if(timeoutID)           clearTimeout(timeoutID);       if(autoCloseMilliSeconds)           clearAutoClose();       if(hideCallback)           hideCallback();       zoomImage.set('visible', false);       if(hideEffect && hideEffect.get('duration') > 0){           hideEffect.bind('end', endEffectFunction, this);       }       else{           zoomImage.set('image', null);       }       closeButton.set('visible', false);       veil.set('visible', false);       self.unbind('click', playerClickFunction, self);       zoomImage.unbind('backgroundClick', hideFunction, this);       zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true);       if(toggleImage) {           zoomImage.unbind('click', toggleFunction, this);           zoomImage.set('cursor', 'default');       }       closeButton.unbind('click', hideFunction, this);       self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               self.resumeGlobalAudios();           }           self.stopGlobalAudio(audio);       }   };   var endEffectFunction = function() {       zoomImage.set('image', null);       hideEffect.unbind('end', endEffectFunction, this);   };   var toggleFunction = function() {       zoomImage.set('image', isToggleVisible() ? image : toggleImage);   };   var isToggleVisible = function() {       return zoomImage.get('image') == toggleImage;   };   var setCloseButtonPosition = function() {       var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10;       var top = zoomImage.get('imageTop') + 10;       if(right < 10) right = 10;       if(top < 10) top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var userInteractionStartFunction = function() {       if(timeoutUserInteractionID){           clearTimeout(timeoutUserInteractionID);           timeoutUserInteractionID = undefined;       }       else{           closeButton.set('visible', false);       }   };   var userInteractionEndFunction = function() {       if(!closed){           timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300);       }   };   var userInteractionTimeoutFunction = function() {       timeoutUserInteractionID = undefined;       closeButton.set('visible', true);       setCloseButtonPosition();   };   this.MainViewer.set('toolTipEnabled', false);   var veil = this.veilPopupPanorama;   var zoomImage = this.zoomImagePopupPanorama;   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);   if(audio){       if(stopBackgroundAudio){           this.pauseGlobalAudios();       }       this.playGlobalAudio(audio);   }   var timeoutID = undefined;   var timeoutUserInteractionID = undefined;   zoomImage.bind('loaded', loadedFunction, this);   setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0);   zoomImage.set('image', image);   zoomImage.set('customWidth', customWidth);   zoomImage.set('customHeight', customHeight);   zoomImage.set('showEffect', showEffect);   zoomImage.set('hideEffect', hideEffect);   zoomImage.set('visible', true);   return zoomImage; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){    var closeFunction = function(){       clearAutoClose();       this.resumePlayers(playersPaused, !containsAudio);       w.unbind('close', closeFunction, this);   };   var clearAutoClose = function(){       w.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var timeoutID = undefined;   if(autoCloseMilliSeconds){       var autoCloseFunction = function(){           w.hide();       };       w.bind('click', clearAutoClose, this);       timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "pauseGlobalAudios": function(caller){    var audios = window.currentGlobalAudios;   window.currentGlobalAudiosActionCaller = caller;   if(!audios) return;   for(var audio in audios){       audios[audio].pause();   } },
  "startPanoramaWithCamera": function(panorama, camera){    var playLists = this.getByClassName('PlayList');   if(playLists.length == 0)       return;    var restoreItems = [];   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           var item = items[j];           if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){               restoreItems.push({camera: item.get('camera'), item: item});               item.set('camera', camera);           }       }   }   if(restoreItems.length > 0) {       var restoreCameraOnStop = function(){           for (var i = 0; i < restoreItems.length; i++) {               restoreItems[i].item.set('camera', restoreItems[i].camera);           }           restoreItems[0].item.unbind('stop', restoreCameraOnStop, this);       };       restoreItems[0].item.bind('stop', restoreCameraOnStop, this);   } },
  "playAudioList": function(audios){    if(audios.length == 0) return;   var currentAudioCount = -1;   var currentAudio;   var playGlobalAudioFunction = this.playGlobalAudio;   var playNext = function(){       if(++currentAudioCount >= audios.length)           currentAudioCount = 0;       currentAudio = audios[currentAudioCount];       playGlobalAudioFunction(currentAudio, playNext);   };   playNext(); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           this.stopGlobalAudio(audio);           if(isPanorama) {               var media = playListItem.get('media');               var audios = media.get('audios');               audios.splice(audios.indexOf(audio), 1);               media.set('audios', audios);           }           playList.unbind('change', changeFunction, this);           if(endCallback)               endCallback();       }   };   var audios = window.currentGlobalAudios;   if(audios && audio.get('id') in audios){       audio = audios[audio.get('id')];       if(audio.get('state') != 'playing'){           audio.play();       }       return;   }   playList.bind('change', changeFunction, this);   var playListItem = playList.get('items')[index];   var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem';   if(isPanorama) {       var media = playListItem.get('media');       var audios = (media.get('audios') || []).slice();       if(audio.get('class') == 'MediaAudio') {           var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio');           panoramaAudio.set('autoplay', false);           panoramaAudio.set('audio', audio.get('audio'));           panoramaAudio.set('loop', audio.get('loop'));           panoramaAudio.set('id', audio.get('id'));           audio = panoramaAudio;       }       audios.push(audio);       media.set('audios', audios);   }   this.playGlobalAudio(audio, endCallback); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){    var changeFunction = function(){       var index = playList.get('selectedIndex');       if(index >= 0){           var beginFunction = function(){               playListItem.unbind('begin', beginFunction);               setMediaLabel(index);           };           var setMediaLabel = function(index){               var media = playListItem.get('media');               var text = media.get('data');               if(!text)                   text = media.get('label');               setHtml(text);           };           var setHtml = function(text){               if(text !== undefined)                   htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>');               else                   htmlText.set('html', '');           };           var playListItem = playList.get('items')[index];           if(htmlText.get('html')){               setHtml('Loading...');               playListItem.bind('begin', beginFunction);           }           else{               setMediaLabel(index);           }       }   };   var disposeFunction = function(){       htmlText.set('html', undefined);       playList.unbind('change', changeFunction, this);       playListItemStopToDispose.unbind('stop', disposeFunction, this);   };   if(playListItemStopToDispose){       playListItemStopToDispose.bind('stop', disposeFunction, this);   }   playList.bind('change', changeFunction, this);   changeFunction(); },
  "playGlobalAudio": function(audio, endCallback){    var endFunction = function(){       audio.unbind('end', endFunction, this);       this.stopGlobalAudio(audio);       if(endCallback)           endCallback();   };   audio = this.getGlobalAudio(audio);   var audios = window.currentGlobalAudios;   if(!audios){       audios = window.currentGlobalAudios = {};   }   audios[audio.get('id')] = audio;   if(audio.get('state') == 'playing'){       return;   }   if(!audio.get('loop')){       audio.bind('end', endFunction, this);   }   audio.play(); },
  "syncPlaylists": function(playLists){    var changeToMedia = function(media, playListDispatched){       for(var i = 0, count = playLists.length; i<count; ++i){           var playList = playLists[i];           if(playList != playListDispatched){               var items = playList.get('items');               for(var j = 0, countJ = items.length; j<countJ; ++j){                   if(items[j].get('media') == media){                       if(playList.get('selectedIndex') != j){                           playList.set('selectedIndex', j);                       }                       break;                   }               }           }       }   };   var changeFunction = function(event){       var playListDispatched = event.source;       var selectedIndex = playListDispatched.get('selectedIndex');       if(selectedIndex < 0)           return;       var media = playListDispatched.get('items')[selectedIndex].get('media');       changeToMedia(media, playListDispatched);   };   var mapPlayerChangeFunction = function(event){       var panoramaMapLocation = event.source.get('panoramaMapLocation');       if(panoramaMapLocation){           var map = panoramaMapLocation.get('map');           changeToMedia(map);       }   };   for(var i = 0, count = playLists.length; i<count; ++i){       playLists[i].bind('change', changeFunction, this);   }   var mapPlayers = this.getByClassName('MapPlayer');   for(var i = 0, count = mapPlayers.length; i<count; ++i){       mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this);   } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){    for(var i = 0; i<players.length; ++i){       var player = players[i];       if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){           player.resumeCamera();       }       else{           player.play();       }   } },
  "updateVideoCues": function(playList, index){    var playListItem = playList.get('items')[index];   var video = playListItem.get('media');   if(video.get('cues').length == 0)       return;   var player = playListItem.get('player');   var cues = [];   var changeFunction = function(){       if(playList.get('selectedIndex') != index){           video.unbind('cueChange', cueChangeFunction, this);           playList.unbind('change', changeFunction, this);       }   };   var cueChangeFunction = function(event){       var activeCues = event.data.activeCues;       for(var i = 0, count = cues.length; i<count; ++i){           var cue = cues[i];           if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){               cue.trigger('end');           }       }       cues = activeCues;   };   video.bind('cueChange', cueChangeFunction, this);   playList.bind('change', changeFunction, this); },
  "resumeGlobalAudios": function(caller){    if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller)       return;   window.currentGlobalAudiosActionCaller = undefined;   var audios = window.currentGlobalAudios;   if(!audios) return;   for(var audio in audios){       audios[audio].play();   } },
  "autotriggerAtStart": function(player, callback){    var stateChangeFunction = function(event){        if(event.data.state == 'playing'){           callback();           player.unbind('stateChange', stateChangeFunction, this);       }   };   player.bind('stateChange', stateChangeFunction, this); },
  "stopGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];       delete audios[audio.get('id')];   }   audio.stop(); },
  "changeBackgroundWhilePlay": function(playList, index, color){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           playList.unbind('change', changeFunction, this);           if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){               viewerArea.set('backgroundColor', backgroundColorBackup);               viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup);           }       }   };   var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var viewerArea = player.get('viewerArea');   var backgroundColorBackup = viewerArea.get('backgroundColor');   var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios');   var colorRatios = [0];   if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){       viewerArea.set('backgroundColor', color);       viewerArea.set('backgroundColorRatios', colorRatios);       playList.bind('change', changeFunction, this);   } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){    this.unregisterKey('visibility_'+component.get('id'));   var changeVisibility = function(){        if(effect && propertyEffect){            component.set(propertyEffect, effect);        }        component.set('visible', visible);       if(component.get('class') == 'ViewerArea'){           try{               if(visible) component.restart();               else        component.pause();           }           catch(e){};       }   };   var effectTimeoutName = 'effectTimeout_'+component.get('id');   if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){       var effectTimeout = window[effectTimeoutName];       if(effectTimeout instanceof Array){           for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) }       }else{           clearTimeout(effectTimeout);       }       delete window[effectTimeoutName];   }   else if(visible == component.get('visible') && !ignoreClearTimeout)       return;   if(applyAt && applyAt > 0){       var effectTimeout = setTimeout(function(){            if(window[effectTimeoutName] instanceof Array) {                var arrayTimeoutVal = window[effectTimeoutName];               var index = arrayTimeoutVal.indexOf(effectTimeout);               arrayTimeoutVal.splice(index, 1);               if(arrayTimeoutVal.length == 0){                   delete window[effectTimeoutName];               }           }else{               delete window[effectTimeoutName];            }           changeVisibility();        }, applyAt);       if(window.hasOwnProperty(effectTimeoutName)){           window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout];       }else{           window[effectTimeoutName] = effectTimeout;       }   }   else{       changeVisibility();   } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){    var self = this;   var endObject = undefined;   var changePlayListFunction = function(event){       if(event.data.previousSelectedIndex == index){           if(changeFunction) changeFunction();           if(endFunction) endObject.unbind('end', endFunction, self);           playList.unbind('change', changePlayListFunction, self);       }   };   if(endFunction){       var playListItem = playList.get('items')[index];       var playListItemClass = playListItem.get('class');       if(playListItemClass == 'PanoramaPlayListItem'){           var camera = playListItem.get('camera');           endObject = camera.get('initialSequence');           if(!endObject) return;       }       else{           endObject = playListItem.get('media');       }       endObject.bind('end', endFunction, this);   }   playList.bind('change', changePlayListFunction, this); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){    var endFunction = function(){       if(playList.get('selectedIndex') == fromIndex)           playList.set('selectedIndex', toIndex);   };   this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){    var enabled = this.get(playerFlag);   for(var i in components){       components[i].set('visible', enabled);   } },
  "unregisterKey": function(key){    delete window[key]; },
  "getActivePlayerWithViewer": function(viewerArea){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   players = players.concat(this.getByClassName('MapPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('viewerArea') == viewerArea) {           var playerClass = player.get('class');           if(playerClass == 'PanoramaPlayer' && player.get('panorama') != undefined) return player;           else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player;           else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player;           else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player;       }   }   return undefined; },
  "setMainMediaByIndex": function(index){    if(index >= 0 && index < this.mainPlayList.get('items').length){       this.mainPlayList.set('selectedIndex', index);   } },
  "registerKey": function(key, value){    window[key] = value; },
  "getGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios != undefined && audio.get('id') in audios){       audio = audios[audio.get('id')];   }   return audio; },
  "setMainMediaByName": function(name){    var items = this.mainPlayList.get('items');   for(var i = 0; i<items.length; ++i){       if(items[i].get('media').get('label') == name) {           this.mainPlayList.set('selectedIndex', i);           return;       }   } },
  "fixTogglePlayPauseButton": function(player){    var state = player.get('state');   var button = player.get('buttonPlayPause');   if(typeof button !== 'undefined' && player.get('state') == 'playing'){       button.set('pressed', true);   } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){    var self = this;   var stateChangeFunction = function(event){       if(event.data.state == 'stopped'){           dispose();       }   };   var changeFunction = function(){       var index = playListDispatcher.get('selectedIndex');       if(index != -1){           indexDispatcher = index;           dispose();       }   };   var dispose = function(){       if(!playListDispatcher) return;       playList.set('selectedIndex', -1);       if(panoramaSequence && panoramaSequenceIndex != -1){           if(panoramaSequence) {               if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){                   var initialPosition = camera.get('initialPosition');                   var oldYaw = initialPosition.get('yaw');                   var oldPitch = initialPosition.get('pitch');                   var oldHfov = initialPosition.get('hfov');                   var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1];                   initialPosition.set('yaw', previousMovement.get('targetYaw'));                   initialPosition.set('pitch', previousMovement.get('targetPitch'));                   initialPosition.set('hfov', previousMovement.get('targetHfov'));                   var restoreInitialPositionFunction = function(event){                       initialPosition.set('yaw', oldYaw);                       initialPosition.set('pitch', oldPitch);                       initialPosition.set('hfov', oldHfov);                       itemDispatcher.unbind('end', restoreInitialPositionFunction, self);                   };                   itemDispatcher.bind('end', restoreInitialPositionFunction, self);               }               panoramaSequence.set('movementIndex', panoramaSequenceIndex);           }       }       playListDispatcher.set('selectedIndex', indexDispatcher);       if(player){           player.unbind('stateChange', stateChangeFunction, self);       }       if(sameViewerArea){           if(playList != playListDispatcher)               playListDispatcher.unbind('change', changeFunction, self);       }       else{           viewerArea.set('visible', false);       }       playListDispatcher = undefined;   };   if(!mediaDispatcher){       var currentIndex = playList.get('selectedIndex');       var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer);       if(currentPlayer) {           var playerClass = currentPlayer.get('class');           if(playerClass == 'PanoramaPlayer') mediaDispatcher = currentPlayer.get('panorama');           else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video');           else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum');           else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map');       }   }   var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined;   if(!playListDispatcher){       playList.set('selectedIndex', index);       return;   }   var indexDispatcher = playListDispatcher.get('selectedIndex');   if(playList.get('selectedIndex') == index || indexDispatcher == -1){       return;   }   var item = playList.get('items')[index];   var itemDispatcher = playListDispatcher.get('items')[indexDispatcher];   var viewerArea = item.get('player').get('viewerArea');   var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea');   if(sameViewerArea){       if(playList != playListDispatcher){           playListDispatcher.set('selectedIndex', -1);           playListDispatcher.bind('change', changeFunction, this);       }   }   else{       viewerArea.set('visible', true);   }   var panoramaSequenceIndex = -1;   var panoramaSequence = undefined;   var camera = itemDispatcher.get('camera');   if(camera){       panoramaSequence = camera.get('initialSequence');       if(panoramaSequence) {           panoramaSequenceIndex = panoramaSequence.get('movementIndex');       }   }   playList.set('selectedIndex', index);   var player = undefined;   if(item.get('player') != itemDispatcher.get('player')){       player = item.get('player');       player.bind('stateChange', stateChangeFunction, this);   }   this.executeFunctionWhenChange(playList, index, dispose); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){    var resetFunction = function(){       panoramaPlayListItem.unbind('stop', resetFunction, this);       player.set('mapPlayer', null);   };   panoramaPlayListItem.bind('stop', resetFunction, this);   var player = panoramaPlayListItem.get('player');   player.set('mapPlayer', mapPlayer); }
 },
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "minWidth": 20,
 "start": "this.playAudioList([this.audio_A0506B1C_AF6E_0D92_41CD_BE6FC628C667]); this.syncPlaylists([this.playList_A778EE3D_AF6A_078D_41D2_27D1B992A088,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_A1E435C3_AF9A_04F6_41D5_8E1A9611C737].forEach(function(component) { component.set('visible', false); }) }",
 "minHeight": 20,
 "shadow": false,
 "contentOpaque": false,
 "verticalAlign": "top",
 "borderRadius": 0,
 "buttonToggleFullscreen": "this.IconButton_A1E435C3_AF9A_04F6_41D5_8E1A9611C737",
 "paddingTop": 0,
 "buttonToggleMute": "this.Button_A1C7783F_AF96_0B8E_41D7_BD529DDBCFDA",
 "class": "Player",
 "backgroundPreloadEnabled": true,
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "mouseWheelEnabled": true,
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "gap": 10,
 "paddingRight": 0,
 "width": "100%",
 "id": "rootPlayer",
 "overflow": "visible",
 "height": "100%"
})