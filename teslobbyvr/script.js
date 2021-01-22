TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMax": 120,
  "class": "Panorama",
  "partial": true,
  "cardboardMenu": {
   "opacity": 0.4,
   "class": "Menu",
   "fontColor": "#FFFFFF",
   "backgroundColor": "#404040",
   "label": "Media",
   "rollOverFontColor": "#FFFFFF",
   "selectedBackgroundColor": "#202020",
   "selectedFontColor": "#FFFFFF",
   "id": "Menu_2C9E3DCD_26D0_4EB6_41B8_94696AE8D5FC",
   "children": [
    {
     "click": "this.mainPlayList.set('selectedIndex', 0)",
     "class": "MenuItem",
     "label": "TES Lobby VR - 01"
    },
    {
     "click": "this.mainPlayList.set('selectedIndex', 1)",
     "class": "MenuItem",
     "label": "TES Lobby VR - 02"
    },
    {
     "click": "this.mainPlayList.set('selectedIndex', 2)",
     "class": "MenuItem",
     "label": "TES Lobby VR - 03"
    }
   ],
   "rollOverBackgroundColor": "#000000",
   "fontFamily": "Arial",
   "rollOverOpacity": 0.8
  },
  "label": "TES Lobby VR - 01",
  "hfovMin": 80,
  "id": "panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65",
  "hfov": 180,
  "thumbnailUrl": "media/panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_t.jpg",
  "vfov": 180,
  "pitch": 0,
  "frames": [
   {
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_r_hq.jpeg",
       "height": 2544,
       "class": "ImageResourceLevel",
       "width": 2544
      },
      {
       "url": "media/panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_r.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_f_hq.jpeg",
       "height": 2544,
       "class": "ImageResourceLevel",
       "width": 2544
      },
      {
       "url": "media/panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_f.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_u_hq.jpeg",
       "height": 2544,
       "class": "ImageResourceLevel",
       "width": 2544
      },
      {
       "url": "media/panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_u.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_FB0732F2_FC25_AF39_41E3_CD20D4A80F06",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_0_HS_3_0.png",
           "height": 77,
           "class": "ImageResourceLevel",
           "width": 59
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 2.7,
        "pitch": -1.44,
        "yaw": -12.74
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.showPopupMedia(this.window_FF3EAD28_F6E8_3C99_41CF_E8329CA8C13B, this.album_FF50EC84_F6E8_1D88_41EB_D360A962CD2B, this.playList_2C975DC5_26D0_4EB6_41A9_80F0C548855F, '50%', '50%', false, false); this.playList_2C975DC5_26D0_4EB6_41A9_80F0C548855F.set('selectedIndex', 0); ",
        "toolTip": "Check-in"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_0_HS_3_0_0_map.gif",
           "height": 38,
           "class": "ImageResourceLevel",
           "width": 29
          }
         ]
        },
        "pitch": -1.44,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -12.74,
        "hfov": 2.7
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_FB07D2F2_FC25_AF39_41E9_B75218BCB4B4",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_0_HS_1_0.png",
           "height": 103,
           "class": "ImageResourceLevel",
           "width": 80
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 3.51,
        "pitch": -12.48,
        "yaw": 23.57
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "toolTip": "Right Hall"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_0_HS_1_0_0_map.gif",
           "height": 51,
           "class": "ImageResourceLevel",
           "width": 40
          }
         ]
        },
        "pitch": -12.48,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 23.57,
        "hfov": 3.51
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_FB07C2F2_FC25_AF39_41E0_A360978AEB99",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_0_HS_0_0.png",
           "height": 103,
           "class": "ImageResourceLevel",
           "width": 80
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 3.51,
        "pitch": -12.64,
        "yaw": -25.09
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 2)",
        "toolTip": "Left Hall",
        "url": "https://yahoo.com",
        "label": "Left Hall"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_0_HS_0_0_0_map.gif",
           "height": 51,
           "class": "ImageResourceLevel",
           "width": 40
          }
         ]
        },
        "pitch": -12.64,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -25.09,
        "hfov": 3.51
       }
      ]
     }
    ],
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_d_hq.jpeg",
       "height": 2544,
       "class": "ImageResourceLevel",
       "width": 2544
      },
      {
       "url": "media/panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_d.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_l_hq.jpeg",
       "height": 2544,
       "class": "ImageResourceLevel",
       "width": 2544
      },
      {
       "url": "media/panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_l.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_t.jpg"
   }
  ]
 },
 {
  "mouseControlMode": "drag_rotation",
  "class": "PanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "gyroscopeVerticalDraggingEnabled": true,
  "displayPlaybackBar": true,
  "viewerArea": "this.MainViewer",
  "id": "MainViewerPanoramaPlayer",
  "preloadEnabled": false
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "id": "panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_camera"
 },
 {
  "hfovMax": 120,
  "class": "Panorama",
  "partial": true,
  "cardboardMenu": "this.Menu_2C9E3DCD_26D0_4EB6_41B8_94696AE8D5FC",
  "label": "TES Lobby VR - 02",
  "hfovMin": 80,
  "id": "panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62",
  "hfov": 180,
  "thumbnailUrl": "media/panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_t.jpg",
  "vfov": 180,
  "pitch": 0,
  "frames": [
   {
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_r_hq.jpeg",
       "height": 2544,
       "class": "ImageResourceLevel",
       "width": 2544
      },
      {
       "url": "media/panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_r.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_f_hq.jpeg",
       "height": 2544,
       "class": "ImageResourceLevel",
       "width": 2544
      },
      {
       "url": "media/panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_f.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_u_hq.jpeg",
       "height": 2544,
       "class": "ImageResourceLevel",
       "width": 2544
      },
      {
       "url": "media/panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_u.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_F1C3C256_FC26_6F79_41EE_95B7C36DF70E",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_0_HS_5_0.png",
           "height": 103,
           "class": "ImageResourceLevel",
           "width": 80
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 3.56,
        "pitch": 8,
        "yaw": 11.83
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "var newWindow = window.open(\"https://htranboston.github.io/vr/\", \"_blank\"); newWindow.focus()",
        "toolTip": "Play Video"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_0_HS_5_0_0_map.gif",
           "height": 51,
           "class": "ImageResourceLevel",
           "width": 40
          }
         ]
        },
        "pitch": 8,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 11.83,
        "hfov": 3.56
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_F1C3D256_FC26_6F79_41D2_0CD43118C8D3",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_0_HS_4_0.png",
           "height": 77,
           "class": "ImageResourceLevel",
           "width": 60
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 2.68,
        "pitch": -7.38,
        "yaw": 71.93
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "var newWindow = window.open(\"https://zoom.us/meetings\", \"_blank\"); newWindow.focus()",
        "toolTip": "Zoom Meeting"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_0_HS_4_0_0_map.gif",
           "height": 38,
           "class": "ImageResourceLevel",
           "width": 30
          }
         ]
        },
        "pitch": -7.38,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 71.93,
        "hfov": 2.68
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_2FD438F4_26D1_F656_41AC_58B116FB8D2B",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_0_HS_6_0.png",
           "height": 199,
           "class": "ImageResourceLevel",
           "width": 130
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 11.72,
        "roll": 0,
        "pitch": 1.34,
        "yaw": -30.52
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "var newWindow = window.open(\"https://google.com\", \"_blank\"); newWindow.focus()",
        "toolTip": "2021-tip"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_0_HS_6_1_0_map.gif",
           "height": 99,
           "class": "ImageResourceLevel",
           "width": 65
          }
         ]
        },
        "pitch": 1.34,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -30.52,
        "hfov": 11.72
       }
      ]
     }
    ],
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_d_hq.jpeg",
       "height": 2544,
       "class": "ImageResourceLevel",
       "width": 2544
      },
      {
       "url": "media/panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_d.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_l_hq.jpeg",
       "height": 2544,
       "class": "ImageResourceLevel",
       "width": 2544
      },
      {
       "url": "media/panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_l.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_t.jpg"
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "id": "panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_camera"
 },
 {
  "hfovMax": 120,
  "class": "Panorama",
  "partial": true,
  "cardboardMenu": "this.Menu_2C9E3DCD_26D0_4EB6_41B8_94696AE8D5FC",
  "label": "TES Lobby VR - 03",
  "hfovMin": 80,
  "id": "panorama_F23C8009_FC26_6AEB_41B6_0319817B8314",
  "hfov": 180,
  "thumbnailUrl": "media/panorama_F23C8009_FC26_6AEB_41B6_0319817B8314_t.jpg",
  "vfov": 180,
  "pitch": 0,
  "frames": [
   {
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_F23C8009_FC26_6AEB_41B6_0319817B8314_r_hq.jpeg",
       "height": 2544,
       "class": "ImageResourceLevel",
       "width": 2544
      },
      {
       "url": "media/panorama_F23C8009_FC26_6AEB_41B6_0319817B8314_r.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_F23C8009_FC26_6AEB_41B6_0319817B8314_f_hq.jpeg",
       "height": 2544,
       "class": "ImageResourceLevel",
       "width": 2544
      },
      {
       "url": "media/panorama_F23C8009_FC26_6AEB_41B6_0319817B8314_f.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "thumbnailUrl": "media/panorama_F23C8009_FC26_6AEB_41B6_0319817B8314_t.jpg",
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_F23C8009_FC26_6AEB_41B6_0319817B8314_d_hq.jpeg",
       "height": 2544,
       "class": "ImageResourceLevel",
       "width": 2544
      },
      {
       "url": "media/panorama_F23C8009_FC26_6AEB_41B6_0319817B8314_d.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_F23C8009_FC26_6AEB_41B6_0319817B8314_l_hq.jpeg",
       "height": 2544,
       "class": "ImageResourceLevel",
       "width": 2544
      },
      {
       "url": "media/panorama_F23C8009_FC26_6AEB_41B6_0319817B8314_l.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_F23C8009_FC26_6AEB_41B6_0319817B8314_u_hq.jpeg",
       "height": 2544,
       "class": "ImageResourceLevel",
       "width": 2544
      },
      {
       "url": "media/panorama_F23C8009_FC26_6AEB_41B6_0319817B8314_u.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "id": "panorama_F23C8009_FC26_6AEB_41B6_0319817B8314_camera"
 },
 {
  "items": [
   {
    "media": "this.panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "camera": "this.panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "camera": "this.panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_F23C8009_FC26_6AEB_41B6_0319817B8314",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 0)",
    "camera": "this.panorama_F23C8009_FC26_6AEB_41B6_0319817B8314_camera",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ],
  "class": "PlayList",
  "id": "mainPlayList"
 },
 {
  "items": [
   {
    "media": "this.panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_A778EE3D_AF6A_078D_41D2_27D1B992A088, 0, 1)",
    "camera": "this.panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_A778EE3D_AF6A_078D_41D2_27D1B992A088, 1, 2)",
    "camera": "this.panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_F23C8009_FC26_6AEB_41B6_0319817B8314",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_A778EE3D_AF6A_078D_41D2_27D1B992A088, 2, 0)",
    "camera": "this.panorama_F23C8009_FC26_6AEB_41B6_0319817B8314_camera",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ],
  "class": "PlayList",
  "id": "playList_A778EE3D_AF6A_078D_41D2_27D1B992A088"
 },
 {
  "class": "PhotoAlbum",
  "label": "Photo Album teslogin",
  "id": "album_FF50EC84_F6E8_1D88_41EB_D360A962CD2B",
  "thumbnailUrl": "media/album_FF50EC84_F6E8_1D88_41EB_D360A962CD2B_t.png",
  "playList": {
   "items": [
    {
     "media": {
      "duration": 5000,
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_FF50EC84_F6E8_1D88_41EB_D360A962CD2B_0.png"
        }
       ]
      },
      "label": "TES Login",
      "width": 522,
      "height": 427,
      "id": "album_FF50EC84_F6E8_1D88_41EB_D360A962CD2B_0",
      "thumbnailUrl": "media/album_FF50EC84_F6E8_1D88_41EB_D360A962CD2B_0_t.png"
     },
     "camera": {
      "class": "PhotoCamera",
      "scaleMode": "fit_inside"
     },
     "class": "PhotoPlayListItem"
    }
   ],
   "class": "PhotoPlayList",
   "id": "album_FF50EC84_F6E8_1D88_41EB_D360A962CD2B_AlbumPlayList"
  }
 },
 "this.album_FF50EC84_F6E8_1D88_41EB_D360A962CD2B_0",
 {
  "items": [
   {
    "media": "this.album_FF50EC84_F6E8_1D88_41EB_D360A962CD2B",
    "class": "PhotoAlbumPlayListItem",
    "begin": "this.updateMediaLabelFromPlayList(this.album_FF50EC84_F6E8_1D88_41EB_D360A962CD2B_AlbumPlayList, this.htmltext_2C985DC7_26D0_4EB2_41BB_8B65CBA51F0E, this.albumitem_2C992DC6_26D0_4EB2_41A9_5B76399726A1); this.loopAlbum(this.playList_2C975DC5_26D0_4EB6_41A9_80F0C548855F, 0)",
    "id": "albumitem_2C992DC6_26D0_4EB2_41A9_5B76399726A1",
    "player": {
     "viewerArea": {
      "borderRadius": 0,
      "toolTipTextShadowColor": "#000000",
      "progressLeft": 0,
      "playbackBarProgressOpacity": 1,
      "playbackBarHeadBorderColor": "#000000",
      "toolTipFontSize": 12,
      "toolTipPaddingBottom": 4,
      "toolTipOpacity": 1,
      "playbackBarBackgroundOpacity": 1,
      "playbackBarBorderSize": 0,
      "paddingLeft": 0,
      "toolTipShadowOpacity": 1,
      "playbackBarHeadBorderSize": 0,
      "playbackBarHeadShadowColor": "#000000",
      "shadow": false,
      "toolTipBorderColor": "#767676",
      "toolTipFontWeight": "normal",
      "progressRight": 0,
      "progressBarBackgroundColorDirection": "vertical",
      "toolTipTextShadowBlurRadius": 3,
      "progressOpacity": 1,
      "playbackBarHeadShadow": true,
      "playbackBarHeadShadowHorizontalLength": 0,
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
      "minWidth": 100,
      "toolTipShadowVerticalLength": 0,
      "paddingBottom": 0,
      "toolTipBackgroundColor": "#F6F6F6",
      "progressBottom": 2,
      "toolTipTextShadowOpacity": 0,
      "progressBarBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadOpacity": 1,
      "progressHeight": 10,
      "minHeight": 50,
      "progressBorderSize": 0,
      "playbackBarBottom": 0,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "progressBorderColor": "#000000",
      "height": "100%",
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "progressBackgroundColorDirection": "vertical",
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "id": "viewer_uid2C961DC5_26D0_4EB6_4195_CF0D478857C9",
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "paddingRight": 0,
      "toolTipShadowBlurRadius": 3,
      "playbackBarHeadShadowOpacity": 0.7,
      "progressBorderRadius": 0,
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "toolTipPaddingRight": 6,
      "playbackBarHeight": 10,
      "playbackBarBorderColor": "#FFFFFF",
      "toolTipPaddingLeft": 6,
      "playbackBarHeadWidth": 6,
      "playbackBarHeadShadowVerticalLength": 0,
      "borderSize": 0,
      "playbackBarProgressBorderSize": 0,
      "width": "100%",
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarRight": 0,
      "toolTipShadowSpread": 0,
      "progressBarBorderRadius": 0,
      "class": "ViewerArea",
      "progressBarBorderSize": 0,
      "toolTipFontColor": "#606060",
      "paddingTop": 0,
      "toolTipFontFamily": "Arial",
      "transitionMode": "blending",
      "toolTipShadowHorizontalLength": 0,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarBorderRadius": 0,
      "toolTipFontStyle": "normal",
      "toolTipPaddingTop": 4,
      "toolTipBorderSize": 1,
      "playbackBarProgressBorderColor": "#000000",
      "playbackBarHeadBorderRadius": 0
     },
     "class": "PhotoAlbumPlayer",
     "id": "viewer_uid2C961DC5_26D0_4EB6_4195_CF0D478857C9PhotoAlbumPlayer"
    }
   }
  ],
  "class": "PlayList",
  "id": "playList_2C975DC5_26D0_4EB6_41A9_80F0C548855F"
 },
 "this.Menu_2C9E3DCD_26D0_4EB6_41B8_94696AE8D5FC",
 {
  "headerBackgroundOpacity": 0,
  "backgroundOpacity": 1,
  "titleFontColor": "#000000",
  "veilHideEffect": {
   "duration": 500,
   "class": "FadeOutEffect",
   "easing": "cubic_in_out"
  },
  "layout": "vertical",
  "bodyPaddingTop": 0,
  "closeButtonBorderRadius": 11,
  "paddingLeft": 0,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "scrollBarVisible": "rollOver",
  "scrollBarWidth": 10,
  "shadow": true,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "modal": true,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "veilOpacity": 0.4,
  "scrollBarMargin": 2,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "headerBorderSize": 0,
  "titleFontWeight": "normal",
  "titleFontSize": 14,
  "closeButtonIconColor": "#B2B2B2",
  "verticalAlign": "middle",
  "veilColorDirection": "horizontal",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "shadowSpread": 1,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "bodyPaddingBottom": 0,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyBackgroundOpacity": 0,
  "paddingBottom": 0,
  "closeButtonIconWidth": 20,
  "minWidth": 20,
  "scrollBarColor": "#000000",
  "backgroundColorDirection": "vertical",
  "titleFontFamily": "Arial",
  "width": 400,
  "minHeight": 20,
  "title": "Check-in",
  "id": "window_FF3EAD28_F6E8_3C99_41CF_E8329CA8C13B",
  "close": "this.playList_2C975DC5_26D0_4EB6_41A9_80F0C548855F.set('selectedIndex', -1);",
  "children": [
   {
    "height": "100%",
    "horizontalAlign": "left",
    "contentOpaque": false,
    "children": [
     "this.viewer_uid2C961DC5_26D0_4EB6_4195_CF0D478857C9",
     {
      "height": "30%",
      "horizontalAlign": "left",
      "children": [
       {
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
        "width": "100%",
        "paddingLeft": 10,
        "borderSize": 0,
        "scrollBarWidth": 10,
        "shadow": false,
        "scrollBarVisible": "rollOver",
        "html": "",
        "scrollBarMargin": 2,
        "class": "HTMLText",
        "paddingTop": 5,
        "minWidth": 0,
        "paddingBottom": 5,
        "scrollBarColor": "#000000",
        "backgroundColor": [
         "#000000"
        ],
        "backgroundOpacity": 0.7,
        "id": "htmltext_2C985DC7_26D0_4EB2_41BB_8B65CBA51F0E",
        "scrollBarOpacity": 0.5,
        "borderRadius": 0,
        "minHeight": 0,
        "visible": false,
        "backgroundColorDirection": "vertical",
        "backgroundColorRatios": [
         0
        ],
        "paddingRight": 10
       }
      ],
      "layout": "vertical",
      "bottom": 0,
      "paddingLeft": 0,
      "borderSize": 0,
      "scrollBarWidth": 7,
      "shadow": false,
      "scrollBarVisible": "rollOver",
      "scrollBarMargin": 2,
      "class": "Container",
      "verticalAlign": "bottom",
      "overflow": "scroll",
      "paddingTop": 0,
      "left": 0,
      "paddingBottom": 0,
      "right": 0,
      "scrollBarColor": "#FFFFFF",
      "backgroundColor": [],
      "gap": 10,
      "minWidth": 20,
      "scrollBarOpacity": 0.5,
      "backgroundOpacity": 0.3,
      "contentOpaque": true,
      "borderRadius": 0,
      "minHeight": 20,
      "backgroundColorDirection": "vertical",
      "backgroundColorRatios": [],
      "paddingRight": 0
     },
     {
      "hideEffect": {
       "duration": 250,
       "class": "FadeOutEffect",
       "easing": "cubic_in_out"
      },
      "horizontalAlign": "center",
      "paddingRight": 0,
      "showEffect": {
       "duration": 250,
       "class": "FadeInEffect",
       "easing": "cubic_in_out"
      },
      "iconURL": "skin/album_left.png",
      "top": "45%",
      "borderSize": 0,
      "paddingLeft": 0,
      "shadow": false,
      "verticalAlign": "middle",
      "mode": "push",
      "class": "IconButton",
      "paddingTop": 0,
      "transparencyActive": false,
      "click": "this.loadFromCurrentMediaPlayList(this.album_FF50EC84_F6E8_1D88_41EB_D360A962CD2B_AlbumPlayList, -1)",
      "left": 10,
      "paddingBottom": 0,
      "minWidth": 0,
      "minHeight": 0,
      "backgroundOpacity": 0,
      "id": "component_2C9ACDC8_26D0_4EBE_41C2_0EF604D4DD44",
      "cursor": "hand",
      "borderRadius": 0,
      "visible": false
     },
     {
      "hideEffect": {
       "duration": 250,
       "class": "FadeOutEffect",
       "easing": "cubic_in_out"
      },
      "horizontalAlign": "center",
      "showEffect": {
       "duration": 250,
       "class": "FadeInEffect",
       "easing": "cubic_in_out"
      },
      "iconURL": "skin/album_right.png",
      "top": "45%",
      "borderSize": 0,
      "paddingLeft": 0,
      "shadow": false,
      "verticalAlign": "middle",
      "mode": "push",
      "class": "IconButton",
      "paddingTop": 0,
      "transparencyActive": false,
      "click": "this.loadFromCurrentMediaPlayList(this.album_FF50EC84_F6E8_1D88_41EB_D360A962CD2B_AlbumPlayList, 1)",
      "minWidth": 0,
      "paddingBottom": 0,
      "right": 10,
      "cursor": "hand",
      "minHeight": 0,
      "backgroundOpacity": 0,
      "id": "component_2C9AFDC8_26D0_4EBE_41C1_C7E962696A9F",
      "borderRadius": 0,
      "visible": false,
      "paddingRight": 0
     }
    ],
    "layout": "absolute",
    "rollOver": "this.showComponentsWhileMouseOver(this.container_2C98FDC7_26D0_4EB2_41B0_E3E894589A55, [this.htmltext_2C985DC7_26D0_4EB2_41BB_8B65CBA51F0E,this.component_2C9ACDC8_26D0_4EBE_41C2_0EF604D4DD44,this.component_2C9AFDC8_26D0_4EBE_41C1_C7E962696A9F], 2000)",
    "width": "100%",
    "paddingLeft": 0,
    "borderSize": 0,
    "scrollBarWidth": 10,
    "shadow": false,
    "scrollBarVisible": "rollOver",
    "scrollBarMargin": 2,
    "class": "Container",
    "verticalAlign": "top",
    "overflow": "scroll",
    "paddingTop": 0,
    "minWidth": 20,
    "paddingBottom": 0,
    "scrollBarColor": "#000000",
    "backgroundColor": [],
    "gap": 10,
    "backgroundOpacity": 0.3,
    "id": "container_2C98FDC7_26D0_4EB2_41B0_E3E894589A55",
    "scrollBarOpacity": 0.5,
    "borderRadius": 0,
    "minHeight": 20,
    "backgroundColorDirection": "vertical",
    "backgroundColorRatios": [],
    "paddingRight": 0
   }
  ],
  "height": 600,
  "shadowColor": "#000000",
  "titlePaddingBottom": 5,
  "hideEffect": {
   "duration": 500,
   "class": "FadeOutEffect",
   "easing": "cubic_in_out"
  },
  "paddingRight": 0,
  "shadowHorizontalLength": 3,
  "shadowBlurRadius": 6,
  "showEffect": {
   "duration": 500,
   "class": "FadeInEffect",
   "easing": "cubic_in_out"
  },
  "shadowVerticalLength": 0,
  "footerBackgroundOpacity": 0,
  "headerPaddingTop": 10,
  "bodyBackgroundColorDirection": "vertical",
  "headerPaddingBottom": 5,
  "headerBorderColor": "#000000",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "shadowOpacity": 0.5,
  "footerHeight": 5,
  "bodyPaddingRight": 0,
  "closeButtonRollOverBackgroundColor": [],
  "titleTextDecoration": "none",
  "headerPaddingRight": 0,
  "borderSize": 0,
  "titlePaddingLeft": 5,
  "veilColorRatios": [
   0,
   1
  ],
  "overflow": "scroll",
  "titlePaddingRight": 5,
  "closeButtonPressedIconColor": "#FFFFFF",
  "closeButtonPressedIconLineWidth": 3,
  "class": "Window",
  "paddingTop": 0,
  "bodyPaddingLeft": 0,
  "headerBackgroundColorDirection": "vertical",
  "headerPaddingLeft": 10,
  "closeButtonIconLineWidth": 2,
  "footerBackgroundColorDirection": "vertical",
  "closeButtonIconHeight": 20,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonBackgroundColorRatios": [],
  "backgroundColor": [],
  "gap": 10,
  "titlePaddingTop": 5,
  "veilShowEffect": {
   "duration": 500,
   "class": "FadeInEffect",
   "easing": "cubic_in_out"
  },
  "horizontalAlign": "center",
  "contentOpaque": false,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "scrollBarOpacity": 0.5,
  "headerVerticalAlign": "middle",
  "borderRadius": 5,
  "closeButtonBackgroundColor": [],
  "titleFontStyle": "normal",
  "backgroundColorRatios": [],
  "closeButtonPressedBackgroundColor": []
 },
 {
  "class": "MediaAudio",
  "autoplay": true,
  "id": "audio_A0506B1C_AF6E_0D92_41CD_BE6FC628C667",
  "audio": {
   "oggUrl": "media/audio_A0506B1C_AF6E_0D92_41CD_BE6FC628C667.ogg",
   "class": "AudioResource",
   "mp3Url": "media/audio_A0506B1C_AF6E_0D92_41CD_BE6FC628C667.mp3"
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
  "toolTipPaddingBottom": 4,
  "top": 0,
  "toolTipOpacity": 1,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarBorderSize": 0,
  "paddingLeft": 0,
  "toolTipShadowOpacity": 1,
  "playbackBarHeadBorderSize": 0,
  "playbackBarHeadShadowColor": "#000000",
  "shadow": false,
  "toolTipBorderColor": "#767676",
  "toolTipFontWeight": "normal",
  "progressRight": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipTextShadowBlurRadius": 3,
  "progressOpacity": 1,
  "playbackBarHeadShadow": true,
  "playbackBarHeadShadowHorizontalLength": 0,
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
  "minWidth": 100,
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
  "minHeight": 50,
  "progressBorderSize": 0,
  "playbackBarBottom": 5,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBorderColor": "#000000",
  "height": "100%",
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "progressBackgroundColorDirection": "vertical",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "id": "MainViewer",
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "paddingRight": 0,
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBorderRadius": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipPaddingRight": 6,
  "playbackBarHeight": 10,
  "playbackBarBorderColor": "#FFFFFF",
  "toolTipPaddingLeft": 6,
  "playbackBarHeadWidth": 6,
  "playbackBarHeadShadowVerticalLength": 0,
  "borderSize": 0,
  "playbackBarProgressBorderSize": 0,
  "width": "100%",
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarRight": 0,
  "toolTipShadowSpread": 0,
  "progressBarBorderRadius": 0,
  "class": "ViewerArea",
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
  "toolTipPaddingTop": 4,
  "toolTipBorderSize": 1,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadBorderRadius": 0
 },
 {
  "horizontalAlign": "center",
  "children": [
   {
    "horizontalAlign": "left",
    "itemBackgroundOpacity": 0,
    "itemLabelFontSize": 14,
    "itemLabelFontFamily": "Arial",
    "itemBackgroundColorDirection": "vertical",
    "layout": "horizontal",
    "itemThumbnailShadowVerticalLength": 3,
    "itemLabelFontStyle": "normal",
    "itemLabelFontWeight": "normal",
    "maxWidth": 800,
    "itemBorderRadius": 0,
    "itemPaddingBottom": 3,
    "itemThumbnailShadow": true,
    "itemThumbnailShadowBlurRadius": 4,
    "itemThumbnailWidth": 100,
    "paddingLeft": 20,
    "itemThumbnailOpacity": 1,
    "itemPaddingTop": 3,
    "borderSize": 0,
    "scrollBarWidth": 10,
    "shadow": false,
    "itemLabelHorizontalAlign": "center",
    "scrollBarVisible": "rollOver",
    "itemBackgroundColorRatios": [],
    "itemMode": "normal",
    "scrollBarMargin": 2,
    "itemThumbnailBorderRadius": 5,
    "itemThumbnailShadowSpread": 1,
    "class": "ThumbnailList",
    "verticalAlign": "top",
    "itemPaddingLeft": 3,
    "paddingTop": 10,
    "itemLabelFontColor": "#FFFFFF",
    "itemThumbnailShadowColor": "#000000",
    "itemBackgroundColor": [],
    "itemPaddingRight": 3,
    "itemOpacity": 1,
    "itemLabelTextDecoration": "none",
    "itemLabelPosition": "bottom",
    "itemThumbnailShadowHorizontalLength": 3,
    "minWidth": 0,
    "itemLabelGap": 5,
    "paddingBottom": 10,
    "itemThumbnailHeight": 75,
    "scrollBarColor": "#FFFFFF",
    "maxHeight": 600,
    "backgroundColor": [
     "#000000"
    ],
    "itemThumbnailShadowOpacity": 0.8,
    "gap": 10,
    "itemThumbnailScaleMode": "fit_outside",
    "scrollBarOpacity": 0.5,
    "backgroundOpacity": 0.2,
    "itemVerticalAlign": "middle",
    "itemHorizontalAlign": "center",
    "selectedItemLabelFontWeight": "bold",
    "borderRadius": 5,
    "minHeight": 0,
    "backgroundColorDirection": "vertical",
    "playList": "this.playList_A778EE3D_AF6A_078D_41D2_27D1B992A088",
    "backgroundColorRatios": [
     0
    ],
    "paddingRight": 20
   }
  ],
  "layout": "horizontal",
  "bottom": 0,
  "borderSize": 0,
  "paddingLeft": 0,
  "scrollBarWidth": 10,
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "scrollBarMargin": 2,
  "class": "Container",
  "verticalAlign": "bottom",
  "overflow": "visible",
  "paddingTop": 0,
  "left": 0,
  "paddingBottom": 0,
  "right": 0,
  "scrollBarColor": "#000000",
  "gap": 10,
  "minWidth": 20,
  "scrollBarOpacity": 0.5,
  "minHeight": 20,
  "backgroundOpacity": 0,
  "contentOpaque": false,
  "borderRadius": 0,
  "height": 200,
  "paddingRight": 0
 },
 {
  "height": 125,
  "horizontalAlign": "left",
  "contentOpaque": false,
  "children": [
   {
    "toolTipTextShadowColor": "#000000",
    "horizontalAlign": "center",
    "toolTipShadowBlurRadius": 3,
    "toolTipFontSize": 12,
    "toolTipPaddingBottom": 4,
    "maxWidth": 128,
    "iconURL": "skin/IconButton_A1E435C3_AF9A_04F6_41D5_8E1A9611C737.png",
    "toolTipPaddingRight": 6,
    "toolTipOpacity": 1,
    "bottom": 15,
    "borderSize": 0,
    "paddingLeft": 0,
    "toolTipShadowOpacity": 1,
    "toolTipPaddingLeft": 6,
    "shadow": false,
    "toolTipBorderColor": "#767676",
    "toolTipFontWeight": "normal",
    "toolTipShadowSpread": 0,
    "toolTipTextShadowBlurRadius": 3,
    "verticalAlign": "middle",
    "mode": "toggle",
    "class": "IconButton",
    "toolTipFontColor": "#606060",
    "paddingTop": 0,
    "toolTipBorderRadius": 3,
    "toolTipShadowHorizontalLength": 0,
    "toolTipFontFamily": "Arial",
    "toolTipShadowColor": "#333333",
    "transparencyActive": true,
    "toolTipShadowVerticalLength": 0,
    "minWidth": 1,
    "paddingBottom": 0,
    "right": 15,
    "toolTipTextShadowOpacity": 0,
    "maxHeight": 128,
    "toolTipBorderSize": 1,
    "toolTipBackgroundColor": "#F6F6F6",
    "toolTipPaddingTop": 4,
    "cursor": "hand",
    "width": 40,
    "toolTip": "Fullscreen",
    "toolTipFontStyle": "normal",
    "minHeight": 1,
    "backgroundOpacity": 0,
    "id": "IconButton_A1E435C3_AF9A_04F6_41D5_8E1A9611C737",
    "borderRadius": 0,
    "height": 40,
    "paddingRight": 0
   },
   {
    "shadowBlurRadius": 6,
    "horizontalAlign": "center",
    "backgroundColor": [
     "#5794FE",
     "#0065CD"
    ],
    "rollOverIconHeight": 40,
    "gap": 0,
    "fontSize": 12,
    "pressedBackgroundOpacity": 0,
    "pressedIconHeight": 40,
    "iconURL": "skin/Button_A1C7783F_AF96_0B8E_41D7_BD529DDBCFDA.png",
    "pressedIconWidth": 40,
    "top": 15,
    "iconHeight": 40,
    "borderSize": 0,
    "paddingLeft": 0,
    "fontStyle": "normal",
    "fontFamily": "Arial",
    "iconWidth": 40,
    "shadow": false,
    "verticalAlign": "middle",
    "mode": "toggle",
    "borderColor": "#000000",
    "class": "Button",
    "fontWeight": "normal",
    "paddingTop": 0,
    "rollOverIconWidth": 40,
    "fontColor": "#FFFFFF",
    "shadowSpread": 1,
    "layout": "horizontal",
    "minWidth": 0,
    "paddingBottom": 0,
    "right": 15,
    "rollOverBackgroundOpacity": 0,
    "cursor": "hand",
    "width": 40,
    "minHeight": 0,
    "backgroundOpacity": 0,
    "pressedIconURL": "skin/Button_A1C7783F_AF96_0B8E_41D7_BD529DDBCFDA_pressed.png",
    "id": "Button_A1C7783F_AF96_0B8E_41D7_BD529DDBCFDA",
    "iconBeforeLabel": true,
    "textDecoration": "none",
    "borderRadius": 0,
    "height": 40,
    "backgroundColorDirection": "vertical",
    "shadowColor": "#000000",
    "backgroundColorRatios": [
     0,
     1
    ],
    "paddingRight": 0
   }
  ],
  "layout": "absolute",
  "top": "5%",
  "paddingLeft": 0,
  "borderSize": 1,
  "scrollBarWidth": 10,
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "borderColor": "#000000",
  "scrollBarMargin": 2,
  "class": "Container",
  "verticalAlign": "top",
  "overflow": "scroll",
  "paddingTop": 0,
  "minWidth": 1,
  "paddingBottom": 0,
  "right": "3%",
  "scrollBarColor": "#000000",
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "gap": 10,
  "width": 70,
  "backgroundOpacity": 0.3,
  "id": "Container_BFADFF8B_AF6A_0575_41BD_D158D2D6CE02",
  "scrollBarOpacity": 0.5,
  "borderRadius": 5,
  "minHeight": 1,
  "backgroundColorDirection": "vertical",
  "backgroundColorRatios": [
   0,
   1
  ],
  "paddingRight": 0
 }
], 
 "height": "100%",
 "horizontalAlign": "left",
 "contentOpaque": false,
 "layout": "absolute",
 "buttonToggleMute": "this.Button_A1C7783F_AF96_0B8E_41D7_BD529DDBCFDA",
 "start": "this.playAudioList([this.audio_A0506B1C_AF6E_0D92_41CD_BE6FC628C667]); this.syncPlaylists([this.playList_A778EE3D_AF6A_078D_41D2_27D1B992A088,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_A1E435C3_AF9A_04F6_41D5_8E1A9611C737].forEach(function(component) { component.set('visible', false); }) }",
 "width": "100%",
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "buttonToggleFullscreen": "this.IconButton_A1E435C3_AF9A_04F6_41D5_8E1A9611C737",
 "class": "Player",
 "verticalAlign": "top",
 "overflow": "visible",
 "paddingTop": 0,
 "backgroundPreloadEnabled": true,
 "mouseWheelEnabled": true,
 "minWidth": 20,
 "scripts": {
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           this.stopGlobalAudio(audio);           if(isPanorama) {               var media = playListItem.get('media');               var audios = media.get('audios');               audios.splice(audios.indexOf(audio), 1);               media.set('audios', audios);           }           playList.unbind('change', changeFunction, this);           if(endCallback)               endCallback();       }   };   var audios = window.currentGlobalAudios;   if(audios && audio.get('id') in audios){       audio = audios[audio.get('id')];       if(audio.get('state') != 'playing'){           audio.play();       }       return;   }   playList.bind('change', changeFunction, this);   var playListItem = playList.get('items')[index];   var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem';   if(isPanorama) {       var media = playListItem.get('media');       var audios = (media.get('audios') || []).slice();       if(audio.get('class') == 'MediaAudio') {           var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio');           panoramaAudio.set('autoplay', false);           panoramaAudio.set('audio', audio.get('audio'));           panoramaAudio.set('loop', audio.get('loop'));           panoramaAudio.set('id', audio.get('id'));           audio = panoramaAudio;       }       audios.push(audio);       media.set('audios', audios);   }   this.playGlobalAudio(audio, endCallback); },
  "registerKey": function(key, value){    window[key] = value; },
  "playAudioList": function(audios){    if(audios.length == 0) return;   var currentAudioCount = -1;   var currentAudio;   var playGlobalAudioFunction = this.playGlobalAudio;   var playNext = function(){       if(++currentAudioCount >= audios.length)           currentAudioCount = 0;       currentAudio = audios[currentAudioCount];       playGlobalAudioFunction(currentAudio, playNext);   };   playNext(); },
  "changeBackgroundWhilePlay": function(playList, index, color){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           playList.unbind('change', changeFunction, this);           if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){               viewerArea.set('backgroundColor', backgroundColorBackup);               viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup);           }       }   };   var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var viewerArea = player.get('viewerArea');   var backgroundColorBackup = viewerArea.get('backgroundColor');   var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios');   var colorRatios = [0];   if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){       viewerArea.set('backgroundColor', color);       viewerArea.set('backgroundColorRatios', colorRatios);       playList.bind('change', changeFunction, this);   } },
  "shareFacebook": function(url){    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "pauseGlobalAudios": function(caller){    var audios = window.currentGlobalAudios;   window.currentGlobalAudiosActionCaller = caller;   if(!audios) return;   for(var audio in audios){       audios[audio].pause();   } },
  "autotriggerAtStart": function(player, callback){    var stateChangeFunction = function(event){        if(event.data.state == 'playing'){           callback();           player.unbind('stateChange', stateChangeFunction, this);       }   };   player.bind('stateChange', stateChangeFunction, this); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){    var self = this;   var endObject = undefined;   var changePlayListFunction = function(event){       if(event.data.previousSelectedIndex == index){           if(changeFunction) changeFunction();           if(endFunction) endObject.unbind('end', endFunction, self);           playList.unbind('change', changePlayListFunction, self);       }   };   if(endFunction){       var playListItem = playList.get('items')[index];       var playListItemClass = playListItem.get('class');       if(playListItemClass == 'PanoramaPlayListItem'){           var camera = playListItem.get('camera');           endObject = camera.get('initialSequence');           if(!endObject) return;       }       else{           endObject = playListItem.get('media');       }       endObject.bind('end', endFunction, this);   }   playList.bind('change', changePlayListFunction, this); },
  "pauseGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];   }   audio.pause(); },
  "existsKey": function(key){    return key in window; },
  "startPanoramaWithCamera": function(panorama, camera){    var playLists = this.getByClassName('PlayList');   if(playLists.length == 0)       return;    var restoreItems = [];   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           var item = items[j];           if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){               restoreItems.push({camera: item.get('camera'), item: item});               item.set('camera', camera);           }       }   }   if(restoreItems.length > 0) {       var restoreCameraOnStop = function(){           for (var i = 0; i < restoreItems.length; i++) {               restoreItems[i].item.set('camera', restoreItems[i].camera);           }           restoreItems[0].item.unbind('stop', restoreCameraOnStop, this);       };       restoreItems[0].item.bind('stop', restoreCameraOnStop, this);   } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){    var audios = window.currentGlobalAudios;   if(!audios) return;   var resumeFunction = this.resumeGlobalAudios;   var endFunction = function(){       if(playList.get('selectedIndex') != index) {           resumeFunction(caller);       }   };   this.pauseGlobalAudios(caller);   this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "unregisterKey": function(key){    delete window[key]; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){    this.unregisterKey('visibility_'+component.get('id'));   var changeVisibility = function(){        if(effect && propertyEffect){            component.set(propertyEffect, effect);        }        component.set('visible', visible);       if(component.get('class') == 'ViewerArea'){           try{               if(visible) component.restart();               else        component.pause();           }           catch(e){};       }   };   var effectTimeoutName = 'effectTimeout_'+component.get('id');   if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){       var effectTimeout = window[effectTimeoutName];       if(effectTimeout instanceof Array){           for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) }       }else{           clearTimeout(effectTimeout);       }       delete window[effectTimeoutName];   }   else if(visible == component.get('visible') && !ignoreClearTimeout)       return;   if(applyAt && applyAt > 0){       var effectTimeout = setTimeout(function(){            if(window[effectTimeoutName] instanceof Array) {                var arrayTimeoutVal = window[effectTimeoutName];               var index = arrayTimeoutVal.indexOf(effectTimeout);               arrayTimeoutVal.splice(index, 1);               if(arrayTimeoutVal.length == 0){                   delete window[effectTimeoutName];               }           }else{               delete window[effectTimeoutName];            }           changeVisibility();        }, applyAt);       if(window.hasOwnProperty(effectTimeoutName)){           window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout];       }else{           window[effectTimeoutName] = effectTimeout;       }   }   else{       changeVisibility();   } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('state') == 'playing') {           if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){               player.pauseCamera();           }           else{               player.pause();           }       }       else {           players.splice(i, 1);       }   }   return players; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){    var self = this;   var closeFunction = function(){       self.MainViewer.set('toolTipEnabled', true);       this.resumePlayers(playersPaused, !containsAudio);       if(isVideo) {           this.unbind('resize', resizeFunction, this);       }       w.unbind('close', closeFunction, this);   };   var endFunction = function(){       w.hide();   };   var resizeFunction = function(){       var parentWidth = self.get('actualWidth');       var parentHeight = self.get('actualHeight');       var mediaWidth = media.get('width');       var mediaHeight = media.get('height');       var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100;       var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100;       var windowWidth = popupMaxWidthNumber * parentWidth;       var windowHeight = popupMaxHeightNumber * parentHeight;       var footerHeight = w.get('footerHeight');       var headerHeight = w.get('headerHeight');       if(!headerHeight) {           var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom');           var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom');           headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight;           headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom');       }       if(!footerHeight) {           footerHeight = 0;       }       var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight');       var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom');       var parentAspectRatio = contentWindowWidth / contentWindowHeight;       var mediaAspectRatio = mediaWidth / mediaHeight;       if(parentAspectRatio > mediaAspectRatio) {           windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight');       }       else {           windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom');       }       if(windowWidth > parentWidth * popupMaxWidthNumber) {           windowWidth = parentWidth * popupMaxWidthNumber;       }       if(windowHeight > parentHeight * popupMaxHeightNumber) {           windowHeight = parentHeight * popupMaxHeightNumber;       }       w.set('width', windowWidth);       w.set('height', windowHeight);       w.set('x', (parentWidth - w.get('actualWidth')) * 0.5);       w.set('y', (parentHeight - w.get('actualHeight')) * 0.5);   };   if(autoCloseWhenFinished){       this.executeFunctionWhenChange(playList, 0, endFunction);   }   var isVideo = media.get('class') == 'Video';   if(isVideo){       this.bind('resize', resizeFunction, this);       resizeFunction();   }   else {       w.set('width', popupMaxWidth);       w.set('height', popupMaxHeight);   }   this.MainViewer.set('toolTipEnabled', false);   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "loadFromCurrentMediaPlayList": function(playList, delta){    var currentIndex = playList.get('selectedIndex');   var totalItems = playList.get('items').length;   var newIndex = (currentIndex + delta) % totalItems;   while(newIndex < 0){       newIndex = totalItems + newIndex;   };   if(currentIndex != newIndex){       playList.set('selectedIndex', newIndex);   }; },
  "fixTogglePlayPauseButton": function(player){    var state = player.get('state');   var button = player.get('buttonPlayPause');   if(typeof button !== 'undefined' && player.get('state') == 'playing'){       button.set('pressed', true);   } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){    var resetFunction = function(){       panoramaPlayListItem.unbind('stop', resetFunction, this);       player.set('mapPlayer', null);   };   panoramaPlayListItem.bind('stop', resetFunction, this);   var player = panoramaPlayListItem.get('player');   player.set('mapPlayer', mapPlayer); },
  "loopAlbum": function(playList, index){    var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var loopFunction = function(){       player.play();   };   this.executeFunctionWhenChange(playList, index, loopFunction); },
  "updateVideoCues": function(playList, index){    var playListItem = playList.get('items')[index];   var video = playListItem.get('media');   if(video.get('cues').length == 0)       return;   var player = playListItem.get('player');   var cues = [];   var changeFunction = function(){       if(playList.get('selectedIndex') != index){           video.unbind('cueChange', cueChangeFunction, this);           playList.unbind('change', changeFunction, this);       }   };   var cueChangeFunction = function(event){       var activeCues = event.data.activeCues;       for(var i = 0, count = cues.length; i<count; ++i){           var cue = cues[i];           if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){               cue.trigger('end');           }       }       cues = activeCues;   };   video.bind('cueChange', cueChangeFunction, this);   playList.bind('change', changeFunction, this); },
  "getPlayListWithMedia": function(media, onlySelected){    var playLists = this.getByClassName('PlayList');   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       if(onlySelected && playList.get('selectedIndex') == -1)           continue;       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           if(items[j].get('media') == media)               return playList;       }   }   return undefined; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){    var closeFunction = function(){       clearAutoClose();       this.resumePlayers(playersPaused, !containsAudio);       w.unbind('close', closeFunction, this);   };   var clearAutoClose = function(){       w.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var timeoutID = undefined;   if(autoCloseMilliSeconds){       var autoCloseFunction = function(){           w.hide();       };       w.bind('click', clearAutoClose, this);       timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){    var setVisibility = function(visible){       for(var i = 0, length = components.length; i<length; i++){           components[i].set('visible', visible);       }   };   if (this.rootPlayer.touchEnabled){       setVisibility(true);   } else {       var timeoutID = -1;       var rollOverFunction = function(){           setVisibility(true);           if(timeoutID >= 0) clearTimeout(timeoutID);           parentComponent.unbind('rollOver', rollOverFunction, this);           parentComponent.bind('rollOut', rollOutFunction, this);       };       var rollOutFunction = function(){           var timeoutFunction = function(){               setVisibility(false);               parentComponent.unbind('rollOver', rollOverFunction, this);           };           parentComponent.unbind('rollOut', rollOutFunction, this);           parentComponent.bind('rollOver', rollOverFunction, this);           timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut);       };       parentComponent.bind('rollOver', rollOverFunction, this);   } },
  "stopGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];       delete audios[audio.get('id')];   }   audio.stop(); },
  "setMainMediaByName": function(name){    var items = this.mainPlayList.get('items');   for(var i = 0; i<items.length; ++i){       if(items[i].get('media').get('label') == name) {           this.mainPlayList.set('selectedIndex', i);           return;       }   } },
  "shareTwitter": function(url){    window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){    var self = this;   var stateChangeFunction = function(event){       if(event.data.state == 'stopped'){           dispose();       }   };   var changeFunction = function(){       var index = playListDispatcher.get('selectedIndex');       if(index != -1){           indexDispatcher = index;           dispose();       }   };   var dispose = function(){       if(!playListDispatcher) return;       playList.set('selectedIndex', -1);       if(panoramaSequence && panoramaSequenceIndex != -1){           if(panoramaSequence) {               if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){                   var initialPosition = camera.get('initialPosition');                   var oldYaw = initialPosition.get('yaw');                   var oldPitch = initialPosition.get('pitch');                   var oldHfov = initialPosition.get('hfov');                   var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1];                   initialPosition.set('yaw', previousMovement.get('targetYaw'));                   initialPosition.set('pitch', previousMovement.get('targetPitch'));                   initialPosition.set('hfov', previousMovement.get('targetHfov'));                   var restoreInitialPositionFunction = function(event){                       initialPosition.set('yaw', oldYaw);                       initialPosition.set('pitch', oldPitch);                       initialPosition.set('hfov', oldHfov);                       itemDispatcher.unbind('end', restoreInitialPositionFunction, self);                   };                   itemDispatcher.bind('end', restoreInitialPositionFunction, self);               }               panoramaSequence.set('movementIndex', panoramaSequenceIndex);           }       }       playListDispatcher.set('selectedIndex', indexDispatcher);       if(player){           player.unbind('stateChange', stateChangeFunction, self);       }       if(sameViewerArea){           if(playList != playListDispatcher)               playListDispatcher.unbind('change', changeFunction, self);       }       else{           viewerArea.set('visible', false);       }       playListDispatcher = undefined;   };   if(!mediaDispatcher){       var currentIndex = playList.get('selectedIndex');       var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer);       if(currentPlayer) {           var playerClass = currentPlayer.get('class');           if(playerClass == 'PanoramaPlayer') mediaDispatcher = currentPlayer.get('panorama');           else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video');           else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum');           else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map');       }   }   var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined;   if(!playListDispatcher){       playList.set('selectedIndex', index);       return;   }   var indexDispatcher = playListDispatcher.get('selectedIndex');   if(playList.get('selectedIndex') == index || indexDispatcher == -1){       return;   }   var item = playList.get('items')[index];   var itemDispatcher = playListDispatcher.get('items')[indexDispatcher];   var viewerArea = item.get('player').get('viewerArea');   var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea');   if(sameViewerArea){       if(playList != playListDispatcher){           playListDispatcher.set('selectedIndex', -1);           playListDispatcher.bind('change', changeFunction, this);       }   }   else{       viewerArea.set('visible', true);   }   var panoramaSequenceIndex = -1;   var panoramaSequence = undefined;   var camera = itemDispatcher.get('camera');   if(camera){       panoramaSequence = camera.get('initialSequence');       if(panoramaSequence) {           panoramaSequenceIndex = panoramaSequence.get('movementIndex');       }   }   playList.set('selectedIndex', index);   var player = undefined;   if(item.get('player') != itemDispatcher.get('player')){       player = item.get('player');       player.bind('stateChange', stateChangeFunction, this);   }   this.executeFunctionWhenChange(playList, index, dispose); },
  "setMainMediaByIndex": function(index){    if(index >= 0 && index < this.mainPlayList.get('items').length){       this.mainPlayList.set('selectedIndex', index);   } },
  "isCardboardViewMode": function(){    var players = this.getByClassName('PanoramaPlayer');   return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "resumeGlobalAudios": function(caller){    if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller)       return;   window.currentGlobalAudiosActionCaller = undefined;   var audios = window.currentGlobalAudios;   if(!audios) return;   for(var audio in audios){       audios[audio].play();   } },
  "shareGoogle": function(url){    window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){    var self = this;   var closed = false;   var playerClickFunction = function() {       zoomImage.unbind('loaded', loadedFunction, self);       hideFunction();   };   var clearAutoClose = function(){       zoomImage.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var loadedFunction = function(){       self.unbind('click', playerClickFunction, self);       veil.set('visible', true);       setCloseButtonPosition();       closeButton.set('visible', true);       zoomImage.unbind('loaded', loadedFunction, this);       zoomImage.bind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this);       timeoutID = setTimeout(timeoutFunction, 200);   };   var timeoutFunction = function(){       timeoutID = undefined;       if(autoCloseMilliSeconds){           var autoCloseFunction = function(){               hideFunction();           };           zoomImage.bind('click', clearAutoClose, this);           timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);       }       zoomImage.bind('backgroundClick', hideFunction, this);       if(toggleImage) {           zoomImage.bind('click', toggleFunction, this);           zoomImage.set('imageCursor', 'hand');       }       closeButton.bind('click', hideFunction, this);       if(loadedCallback)           loadedCallback();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       closed = true;       if(timeoutID)           clearTimeout(timeoutID);       if(autoCloseMilliSeconds)           clearAutoClose();       if(hideCallback)           hideCallback();       zoomImage.set('visible', false);       if(hideEffect && hideEffect.get('duration') > 0){           hideEffect.bind('end', endEffectFunction, this);       }       else{           zoomImage.set('image', null);       }       closeButton.set('visible', false);       veil.set('visible', false);       self.unbind('click', playerClickFunction, self);       zoomImage.unbind('backgroundClick', hideFunction, this);       zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true);       if(toggleImage) {           zoomImage.unbind('click', toggleFunction, this);           zoomImage.set('cursor', 'default');       }       closeButton.unbind('click', hideFunction, this);       self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               self.resumeGlobalAudios();           }           self.stopGlobalAudio(audio);       }   };   var endEffectFunction = function() {       zoomImage.set('image', null);       hideEffect.unbind('end', endEffectFunction, this);   };   var toggleFunction = function() {       zoomImage.set('image', isToggleVisible() ? image : toggleImage);   };   var isToggleVisible = function() {       return zoomImage.get('image') == toggleImage;   };   var setCloseButtonPosition = function() {       var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10;       var top = zoomImage.get('imageTop') + 10;       if(right < 10) right = 10;       if(top < 10) top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var userInteractionStartFunction = function() {       if(timeoutUserInteractionID){           clearTimeout(timeoutUserInteractionID);           timeoutUserInteractionID = undefined;       }       else{           closeButton.set('visible', false);       }   };   var userInteractionEndFunction = function() {       if(!closed){           timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300);       }   };   var userInteractionTimeoutFunction = function() {       timeoutUserInteractionID = undefined;       closeButton.set('visible', true);       setCloseButtonPosition();   };   this.MainViewer.set('toolTipEnabled', false);   var veil = this.veilPopupPanorama;   var zoomImage = this.zoomImagePopupPanorama;   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);   if(audio){       if(stopBackgroundAudio){           this.pauseGlobalAudios();       }       this.playGlobalAudio(audio);   }   var timeoutID = undefined;   var timeoutUserInteractionID = undefined;   zoomImage.bind('loaded', loadedFunction, this);   setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0);   zoomImage.set('image', image);   zoomImage.set('customWidth', customWidth);   zoomImage.set('customHeight', customHeight);   zoomImage.set('showEffect', showEffect);   zoomImage.set('hideEffect', hideEffect);   zoomImage.set('visible', true);   return zoomImage; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){    var endFunction = function(){       if(playList.get('selectedIndex') == fromIndex)           playList.set('selectedIndex', toIndex);   };   this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){    for(var i = 0; i<players.length; ++i){       var player = players[i];       if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){           player.resumeCamera();       }       else{           player.play();       }   } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){    var changeFunction = function(){       var index = playList.get('selectedIndex');       if(index >= 0){           var beginFunction = function(){               playListItem.unbind('begin', beginFunction);               setMediaLabel(index);           };           var setMediaLabel = function(index){               var media = playListItem.get('media');               var text = media.get('data');               if(!text)                   text = media.get('label');               setHtml(text);           };           var setHtml = function(text){               if(text !== undefined)                   htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>');               else                   htmlText.set('html', '');           };           var playListItem = playList.get('items')[index];           if(htmlText.get('html')){               setHtml('Loading...');               playListItem.bind('begin', beginFunction);           }           else{               setMediaLabel(index);           }       }   };   var disposeFunction = function(){       htmlText.set('html', undefined);       playList.unbind('change', changeFunction, this);       playListItemStopToDispose.unbind('stop', disposeFunction, this);   };   if(playListItemStopToDispose){       playListItemStopToDispose.bind('stop', disposeFunction, this);   }   playList.bind('change', changeFunction, this);   changeFunction(); },
  "getKey": function(key){    return window[key]; },
  "getGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios != undefined && audio.get('id') in audios){       audio = audios[audio.get('id')];   }   return audio; },
  "getActivePlayerWithViewer": function(viewerArea){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   players = players.concat(this.getByClassName('MapPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('viewerArea') == viewerArea) {           var playerClass = player.get('class');           if(playerClass == 'PanoramaPlayer' && player.get('panorama') != undefined) return player;           else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player;           else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player;           else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player;       }   }   return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){    var self = this;   var showEndFunction = function() {       popupPanoramaOverlay.unbind('showEnd', showEndFunction);       closeButton.bind('click', hideFunction, this);       setCloseButtonPosition();       closeButton.set('visible', true);   };   var endFunction = function() {       if(!popupPanoramaOverlay.get('loop'))           hideFunction();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       if(!self.isCardboardViewMode())           popupPanoramaOverlay.set('visible', false);       closeButton.set('visible', false);       closeButton.unbind('click', hideFunction, this);       popupPanoramaOverlay.unbind('end', endFunction, self);       self.resumePlayers(playersPaused, true);       self.resumeGlobalAudios();   };   var setCloseButtonPosition = function() {       var right = 10;       var top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   this.MainViewer.set('toolTipEnabled', false);   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(true);   this.pauseGlobalAudios();   popupPanoramaOverlay.bind('end', endFunction, this, true);   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); },
  "playGlobalAudio": function(audio, endCallback){    var endFunction = function(){       audio.unbind('end', endFunction, this);       this.stopGlobalAudio(audio);       if(endCallback)           endCallback();   };   audio = this.getGlobalAudio(audio);   var audios = window.currentGlobalAudios;   if(!audios){       audios = window.currentGlobalAudios = {};   }   audios[audio.get('id')] = audio;   if(audio.get('state') == 'playing'){       return;   }   if(!audio.get('loop')){       audio.bind('end', endFunction, this);   }   audio.play(); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){    var enabled = this.get(playerFlag);   for(var i in components){       components[i].set('visible', enabled);   } },
  "syncPlaylists": function(playLists){    var changeToMedia = function(media, playListDispatched){       for(var i = 0, count = playLists.length; i<count; ++i){           var playList = playLists[i];           if(playList != playListDispatched){               var items = playList.get('items');               for(var j = 0, countJ = items.length; j<countJ; ++j){                   if(items[j].get('media') == media){                       if(playList.get('selectedIndex') != j){                           playList.set('selectedIndex', j);                       }                       break;                   }               }           }       }   };   var changeFunction = function(event){       var playListDispatched = event.source;       var selectedIndex = playListDispatched.get('selectedIndex');       if(selectedIndex < 0)           return;       var media = playListDispatched.get('items')[selectedIndex].get('media');       changeToMedia(media, playListDispatched);   };   var mapPlayerChangeFunction = function(event){       var panoramaMapLocation = event.source.get('panoramaMapLocation');       if(panoramaMapLocation){           var map = panoramaMapLocation.get('map');           changeToMedia(map);       }   };   for(var i = 0, count = playLists.length; i<count; ++i){       playLists[i].bind('change', changeFunction, this);   }   var mapPlayers = this.getByClassName('MapPlayer');   for(var i = 0, count = mapPlayers.length; i<count; ++i){       mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this);   } }
 },
 "paddingBottom": 0,
 "scrollBarColor": "#000000",
 "gap": 10,
 "id": "rootPlayer",
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "minHeight": 20,
 "paddingRight": 0
})