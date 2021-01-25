TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "thumbnailUrl": "media/panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_t.jpg",
  "hfovMin": 80,
  "hfovMax": 120,
  "label": "TES Lobby VR - 01",
  "class": "Panorama",
  "hfov": 180,
  "partial": true,
  "id": "panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65",
  "cardboardMenu": {
   "rollOverBackgroundColor": "#000000",
   "selectedBackgroundColor": "#202020",
   "rollOverOpacity": 0.8,
   "backgroundColor": "#404040",
   "opacity": 0.4,
   "label": "Media",
   "class": "Menu",
   "fontColor": "#FFFFFF",
   "id": "Menu_31D4156C_3B1E_D1BB_4165_973AB2084621",
   "rollOverFontColor": "#FFFFFF",
   "children": [
    {
     "click": "this.mainPlayList.set('selectedIndex', 0)",
     "label": "TES Lobby VR - 01",
     "class": "MenuItem"
    },
    {
     "click": "this.mainPlayList.set('selectedIndex', 1)",
     "label": "TES Lobby VR - 02",
     "class": "MenuItem"
    },
    {
     "click": "this.mainPlayList.set('selectedIndex', 2)",
     "label": "TES Lobby VR - 03",
     "class": "MenuItem"
    }
   ],
   "fontFamily": "Arial",
   "selectedFontColor": "#FFFFFF"
  },
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
      "maps": [
       {
        "hfov": 2.7,
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
        "yaw": -12.74
       }
      ],
      "id": "overlay_FB0732F2_FC25_AF39_41E3_CD20D4A80F06",
      "rollOverDisplay": false,
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
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "toolTip": "Check-in",
        "click": "this.showPopupMedia(this.window_FF3EAD28_F6E8_3C99_41CF_E8329CA8C13B, this.album_FF50EC84_F6E8_1D88_41EB_D360A962CD2B, this.playList_302160B9_3B1D_D09A_41BA_8A5885E80138, '50%', '50%', false, false); this.playList_302160B9_3B1D_D09A_41BA_8A5885E80138.set('selectedIndex', 0); ",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 3.51,
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
        "yaw": 23.57
       }
      ],
      "id": "overlay_FB07D2F2_FC25_AF39_41E9_B75218BCB4B4",
      "enabledInCardboard": true,
      "rollOverDisplay": false,
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
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "toolTip": "Right Hall",
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 3.51,
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
        "yaw": -25.09
       }
      ],
      "id": "overlay_FB07C2F2_FC25_AF39_41E0_A360978AEB99",
      "enabledInCardboard": true,
      "rollOverDisplay": false,
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
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "toolTip": "Left Hall",
        "click": "this.mainPlayList.set('selectedIndex', 2)",
        "class": "HotspotPanoramaOverlayArea"
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
    "thumbnailUrl": "media/panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_t.jpg",
    "class": "CubicPanoramaFrame"
   }
  ],
  "pitch": 0,
  "vfov": 180
 },
 {
  "displayPlaybackBar": true,
  "id": "MainViewerPanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "gyroscopeVerticalDraggingEnabled": true,
  "preloadEnabled": false,
  "mouseControlMode": "drag_rotation",
  "viewerArea": "this.MainViewer",
  "class": "PanoramaPlayer"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  }
 },
 {
  "thumbnailUrl": "media/panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_t.jpg",
  "hfovMin": 80,
  "hfovMax": 120,
  "label": "TES Lobby VR - 02",
  "class": "Panorama",
  "hfov": 180,
  "partial": true,
  "id": "panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62",
  "cardboardMenu": "this.Menu_31D4156C_3B1E_D1BB_4165_973AB2084621",
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
      "maps": [
       {
        "hfov": 3.56,
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
        "yaw": 11.83
       }
      ],
      "id": "overlay_F1C3C256_FC26_6F79_41EE_95B7C36DF70E",
      "rollOverDisplay": false,
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
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "toolTip": "Play Video",
        "click": "var newWindow = window.open(\"https://htranboston.github.io/vr/\", \"_blank\"); newWindow.focus()",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 2.68,
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
        "pitch": -7.4,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 71.93
       }
      ],
      "id": "overlay_F1C3D256_FC26_6F79_41D2_0CD43118C8D3",
      "rollOverDisplay": false,
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
        "pitch": -7.4,
        "yaw": 71.93
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "toolTip": "Zoom Meeting",
        "click": "var newWindow = window.open(\"https://zoom.us/meetings\", \"_blank\"); newWindow.focus()",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 11.5,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_0_HS_6_1_0_map.gif",
           "height": 99,
           "class": "ImageResourceLevel",
           "width": 64
          }
         ]
        },
        "pitch": 1.38,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -30.68
       }
      ],
      "id": "overlay_37054F01_3B1B_D16D_41B0_7C92CF7EB260",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_0_HS_6_0.png",
           "height": 198,
           "class": "ImageResourceLevel",
           "width": 128
          }
         ]
        },
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 11.5,
        "pitch": 1.38,
        "yaw": -30.68
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.setComponentVisibility(this.Container_31AE2E4A_3B06_B3FE_415D_8F56FFDA3801, true, 0, null, null, false)",
        "class": "HotspotPanoramaOverlayArea"
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
    "thumbnailUrl": "media/panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_t.jpg",
    "class": "CubicPanoramaFrame"
   }
  ],
  "pitch": 0,
  "vfov": 180
 },
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  }
 },
 {
  "thumbnailUrl": "media/panorama_F23C8009_FC26_6AEB_41B6_0319817B8314_t.jpg",
  "hfovMin": 80,
  "hfovMax": 120,
  "label": "TES Lobby VR - 03",
  "class": "Panorama",
  "hfov": 180,
  "partial": true,
  "id": "panorama_F23C8009_FC26_6AEB_41B6_0319817B8314",
  "cardboardMenu": "this.Menu_31D4156C_3B1E_D1BB_4165_973AB2084621",
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
    },
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
    "thumbnailUrl": "media/panorama_F23C8009_FC26_6AEB_41B6_0319817B8314_t.jpg",
    "class": "CubicPanoramaFrame"
   }
  ],
  "pitch": 0,
  "vfov": 180
 },
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_F23C8009_FC26_6AEB_41B6_0319817B8314_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  }
 },
 {
  "items": [
   {
    "media": "this.panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_camera"
   },
   {
    "media": "this.panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_camera"
   },
   {
    "media": "this.panorama_F23C8009_FC26_6AEB_41B6_0319817B8314",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 0)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_F23C8009_FC26_6AEB_41B6_0319817B8314_camera"
   }
  ],
  "id": "mainPlayList",
  "class": "PlayList"
 },
 {
  "items": [
   {
    "media": "this.panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65",
    "begin": "this.setEndToItemIndex(this.playList_A778EE3D_AF6A_078D_41D2_27D1B992A088, 0, 1)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_camera"
   },
   {
    "media": "this.panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62",
    "begin": "this.setEndToItemIndex(this.playList_A778EE3D_AF6A_078D_41D2_27D1B992A088, 1, 2)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_camera"
   },
   {
    "media": "this.panorama_F23C8009_FC26_6AEB_41B6_0319817B8314",
    "begin": "this.setEndToItemIndex(this.playList_A778EE3D_AF6A_078D_41D2_27D1B992A088, 2, 0)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_F23C8009_FC26_6AEB_41B6_0319817B8314_camera"
   }
  ],
  "id": "playList_A778EE3D_AF6A_078D_41D2_27D1B992A088",
  "class": "PlayList"
 },
 {
  "label": "Photo Album teslogin",
  "class": "PhotoAlbum",
  "id": "album_FF50EC84_F6E8_1D88_41EB_D360A962CD2B",
  "playList": {
   "items": [
    {
     "media": {
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
      "thumbnailUrl": "media/album_FF50EC84_F6E8_1D88_41EB_D360A962CD2B_0_t.png",
      "width": 522,
      "height": 427,
      "id": "album_FF50EC84_F6E8_1D88_41EB_D360A962CD2B_0",
      "class": "Photo",
      "duration": 5000
     },
     "camera": {
      "scaleMode": "fit_inside",
      "class": "PhotoCamera"
     },
     "class": "PhotoPlayListItem"
    }
   ],
   "id": "album_FF50EC84_F6E8_1D88_41EB_D360A962CD2B_AlbumPlayList",
   "class": "PhotoPlayList"
  },
  "thumbnailUrl": "media/album_FF50EC84_F6E8_1D88_41EB_D360A962CD2B_t.png"
 },
 "this.album_FF50EC84_F6E8_1D88_41EB_D360A962CD2B_0",
 {
  "items": [
   {
    "media": "this.album_FF50EC84_F6E8_1D88_41EB_D360A962CD2B",
    "begin": "this.updateMediaLabelFromPlayList(this.album_FF50EC84_F6E8_1D88_41EB_D360A962CD2B_AlbumPlayList, this.htmltext_31D6556A_3B1E_D1BE_41A8_139DD5AE5193, this.albumitem_3022C0BA_3B1D_D09E_41C8_A042A6E038B2); this.loopAlbum(this.playList_302160B9_3B1D_D09A_41BA_8A5885E80138, 0)",
    "id": "albumitem_3022C0BA_3B1D_D09E_41C8_A042A6E038B2",
    "class": "PhotoAlbumPlayListItem",
    "player": {
     "id": "viewer_uid302010B9_3B1D_D09A_41C2_93C025CB7ECDPhotoAlbumPlayer",
     "class": "PhotoAlbumPlayer",
     "viewerArea": {
      "progressRight": 0,
      "progressOpacity": 1,
      "toolTipShadowSpread": 0,
      "toolTipShadowVerticalLength": 0,
      "toolTipShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "vertical",
      "playbackBarHeadShadow": true,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipPaddingLeft": 6,
      "playbackBarHeadShadowVerticalLength": 0,
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
      "playbackBarHeadOpacity": 1,
      "toolTipFontColor": "#606060",
      "progressBackgroundColorDirection": "vertical",
      "paddingTop": 0,
      "progressBarOpacity": 1,
      "progressHeight": 10,
      "playbackBarBottom": 0,
      "progressBorderColor": "#000000",
      "progressBottom": 2,
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "progressBorderSize": 0,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarHeadShadowHorizontalLength": 0,
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
      "id": "viewer_uid31D1756A_3B1E_D1BE_41BF_495EFE567A14",
      "playbackBarHeadWidth": 6,
      "playbackBarBorderColor": "#FFFFFF",
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarRight": 0,
      "toolTipPaddingBottom": 4,
      "paddingLeft": 0,
      "toolTipPaddingTop": 4,
      "progressBarBorderRadius": 0,
      "minWidth": 100,
      "progressBarBorderSize": 0,
      "toolTipTextShadowColor": "#000000",
      "playbackBarProgressBorderRadius": 0,
      "toolTipBorderSize": 1,
      "transitionMode": "blending",
      "borderRadius": 0,
      "minHeight": 50,
      "toolTipShadowColor": "#333333",
      "toolTipTextShadowOpacity": 0,
      "playbackBarProgressBorderColor": "#000000",
      "playbackBarBorderRadius": 0,
      "toolTipShadowHorizontalLength": 0,
      "toolTipBorderColor": "#767676",
      "class": "ViewerArea",
      "toolTipFontFamily": "Arial",
      "toolTipFontWeight": "normal",
      "toolTipBorderRadius": 3,
      "toolTipFontSize": 12,
      "playbackBarHeadBorderRadius": 0,
      "paddingBottom": 0,
      "toolTipOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarProgressOpacity": 1,
      "progressLeft": 0,
      "playbackBarHeadBorderColor": "#000000",
      "paddingRight": 0,
      "toolTipShadowOpacity": 1,
      "progressBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarBorderSize": 0,
      "playbackBarLeft": 0,
      "playbackBarBackgroundOpacity": 1,
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipPaddingRight": 6,
      "borderSize": 0,
      "playbackBarHeadHeight": 15,
      "playbackBarHeadShadowColor": "#000000",
      "playbackBarHeadBorderSize": 0
     }
    }
   }
  ],
  "id": "playList_302160B9_3B1D_D09A_41BA_8A5885E80138",
  "class": "PlayList"
 },
 "this.Menu_31D4156C_3B1E_D1BB_4165_973AB2084621",
 {
  "shadowVerticalLength": 0,
  "scrollBarColor": "#000000",
  "titlePaddingTop": 5,
  "borderSize": 0,
  "closeButtonBackgroundColor": [],
  "bodyPaddingLeft": 0,
  "backgroundColorDirection": "vertical",
  "shadowHorizontalLength": 3,
  "footerBackgroundColorDirection": "vertical",
  "closeButtonIconWidth": 20,
  "headerVerticalAlign": "middle",
  "layout": "vertical",
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "shadowBlurRadius": 6,
  "bodyBackgroundOpacity": 0,
  "closeButtonIconHeight": 20,
  "closeButtonRollOverBackgroundColor": [],
  "headerPaddingBottom": 5,
  "shadow": true,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "paddingTop": 0,
  "veilColorRatios": [
   0,
   1
  ],
  "shadowOpacity": 0.5,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonPressedIconColor": "#FFFFFF",
  "modal": true,
  "footerBackgroundOpacity": 0,
  "closeButtonBorderRadius": 11,
  "closeButtonIconColor": "#B2B2B2",
  "closeButtonBackgroundColorRatios": [],
  "closeButtonRollOverIconColor": "#FFFFFF",
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "titleFontWeight": "normal",
  "headerBorderSize": 0,
  "close": "this.playList_302160B9_3B1D_D09A_41BA_8A5885E80138.set('selectedIndex', -1);",
  "titleTextDecoration": "none",
  "overflow": "scroll",
  "title": "Check-in",
  "width": 400,
  "horizontalAlign": "center",
  "gap": 10,
  "height": 600,
  "id": "window_FF3EAD28_F6E8_3C99_41CF_E8329CA8C13B",
  "children": [
   {
    "rollOver": "this.showComponentsWhileMouseOver(this.container_31D1456A_3B1E_D1BE_41C1_3B8CE24DE6A8, [this.htmltext_31D6556A_3B1E_D1BE_41A8_139DD5AE5193,this.component_31D6256B_3B1E_D1BE_41A2_69FAFC8F38D5,this.component_31D6356B_3B1E_D1BE_41C3_53BAD7893087], 2000)",
    "overflow": "scroll",
    "scrollBarColor": "#000000",
    "paddingLeft": 0,
    "scrollBarOpacity": 0.5,
    "backgroundColorDirection": "vertical",
    "minWidth": 20,
    "children": [
     "this.viewer_uid31D1756A_3B1E_D1BE_41BF_495EFE567A14",
     {
      "overflow": "scroll",
      "scrollBarColor": "#FFFFFF",
      "paddingLeft": 0,
      "scrollBarOpacity": 0.5,
      "backgroundColorDirection": "vertical",
      "minWidth": 20,
      "children": [
       {
        "borderSize": 0,
        "scrollBarColor": "#000000",
        "paddingLeft": 10,
        "scrollBarOpacity": 0.5,
        "backgroundColorDirection": "vertical",
        "minWidth": 0,
        "borderRadius": 0,
        "minHeight": 0,
        "shadow": false,
        "backgroundColorRatios": [
         0
        ],
        "paddingTop": 5,
        "html": "",
        "scrollBarVisible": "rollOver",
        "class": "HTMLText",
        "scrollBarWidth": 10,
        "paddingBottom": 5,
        "scrollBarMargin": 2,
        "paddingRight": 10,
        "backgroundColor": [
         "#000000"
        ],
        "width": "100%",
        "id": "htmltext_31D6556A_3B1E_D1BE_41A8_139DD5AE5193",
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
        "backgroundOpacity": 0.7
       }
      ],
      "layout": "vertical",
      "bottom": 0,
      "borderRadius": 0,
      "minHeight": 20,
      "shadow": false,
      "backgroundColorRatios": [],
      "contentOpaque": true,
      "verticalAlign": "bottom",
      "paddingTop": 0,
      "scrollBarVisible": "rollOver",
      "class": "Container",
      "scrollBarWidth": 7,
      "paddingBottom": 0,
      "left": 0,
      "scrollBarMargin": 2,
      "right": 0,
      "paddingRight": 0,
      "horizontalAlign": "left",
      "backgroundColor": [],
      "gap": 10,
      "backgroundOpacity": 0.3,
      "borderSize": 0,
      "height": "30%"
     },
     {
      "borderSize": 0,
      "paddingLeft": 0,
      "minWidth": 0,
      "backgroundOpacity": 0,
      "top": "45%",
      "borderRadius": 0,
      "minHeight": 0,
      "shadow": false,
      "verticalAlign": "middle",
      "paddingTop": 0,
      "mode": "push",
      "iconURL": "skin/album_left.png",
      "class": "IconButton",
      "paddingBottom": 0,
      "click": "this.loadFromCurrentMediaPlayList(this.album_FF50EC84_F6E8_1D88_41EB_D360A962CD2B_AlbumPlayList, -1)",
      "cursor": "hand",
      "left": 10,
      "paddingRight": 0,
      "horizontalAlign": "center",
      "transparencyActive": false,
      "id": "component_31D6256B_3B1E_D1BE_41A2_69FAFC8F38D5",
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
     },
     {
      "borderSize": 0,
      "paddingLeft": 0,
      "minWidth": 0,
      "backgroundOpacity": 0,
      "top": "45%",
      "borderRadius": 0,
      "minHeight": 0,
      "shadow": false,
      "verticalAlign": "middle",
      "paddingTop": 0,
      "mode": "push",
      "iconURL": "skin/album_right.png",
      "class": "IconButton",
      "paddingBottom": 0,
      "click": "this.loadFromCurrentMediaPlayList(this.album_FF50EC84_F6E8_1D88_41EB_D360A962CD2B_AlbumPlayList, 1)",
      "cursor": "hand",
      "right": 10,
      "paddingRight": 0,
      "horizontalAlign": "center",
      "transparencyActive": false,
      "id": "component_31D6356B_3B1E_D1BE_41C3_53BAD7893087",
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
    "layout": "absolute",
    "borderRadius": 0,
    "minHeight": 20,
    "shadow": false,
    "backgroundColorRatios": [],
    "contentOpaque": false,
    "verticalAlign": "top",
    "paddingTop": 0,
    "scrollBarVisible": "rollOver",
    "class": "Container",
    "scrollBarWidth": 10,
    "paddingBottom": 0,
    "scrollBarMargin": 2,
    "paddingRight": 0,
    "horizontalAlign": "left",
    "backgroundColor": [],
    "width": "100%",
    "gap": 10,
    "id": "container_31D1456A_3B1E_D1BE_41C1_3B8CE24DE6A8",
    "backgroundOpacity": 0.3,
    "borderSize": 0,
    "height": "100%"
   }
  ],
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingBottom": 0,
  "shadowColor": "#000000",
  "bodyPaddingTop": 0,
  "closeButtonPressedBackgroundColor": [],
  "headerBackgroundOpacity": 0,
  "backgroundOpacity": 1,
  "paddingLeft": 0,
  "scrollBarOpacity": 0.5,
  "minWidth": 20,
  "closeButtonIconLineWidth": 2,
  "veilColorDirection": "horizontal",
  "titlePaddingBottom": 5,
  "titleFontColor": "#000000",
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "titleFontSize": 14,
  "titleFontStyle": "normal",
  "borderRadius": 5,
  "minHeight": 20,
  "veilOpacity": 0.4,
  "closeButtonPressedIconLineWidth": 3,
  "backgroundColorRatios": [],
  "contentOpaque": false,
  "verticalAlign": "middle",
  "footerHeight": 5,
  "bodyBackgroundColorDirection": "vertical",
  "headerBorderColor": "#000000",
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "titlePaddingRight": 5,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "scrollBarVisible": "rollOver",
  "class": "Window",
  "scrollBarWidth": 10,
  "headerPaddingTop": 10,
  "paddingBottom": 0,
  "titlePaddingLeft": 5,
  "headerBackgroundColorDirection": "vertical",
  "shadowSpread": 1,
  "scrollBarMargin": 2,
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
  "hideEffect": {
   "duration": 500,
   "class": "FadeOutEffect",
   "easing": "cubic_in_out"
  },
  "headerPaddingLeft": 10,
  "headerPaddingRight": 0,
  "bodyPaddingRight": 0,
  "showEffect": {
   "duration": 500,
   "class": "FadeInEffect",
   "easing": "cubic_in_out"
  },
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ]
 },
 {
  "id": "audio_A0506B1C_AF6E_0D92_41CD_BE6FC628C667",
  "class": "MediaAudio",
  "autoplay": true,
  "audio": {
   "mp3Url": "media/audio_A0506B1C_AF6E_0D92_41CD_BE6FC628C667.mp3",
   "oggUrl": "media/audio_A0506B1C_AF6E_0D92_41CD_BE6FC628C667.ogg",
   "class": "AudioResource"
  }
 }
], "children": [
 {
  "progressRight": 0,
  "progressOpacity": 1,
  "toolTipShadowSpread": 0,
  "toolTipShadowVerticalLength": 0,
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
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarHeadOpacity": 1,
  "toolTipFontColor": "#606060",
  "progressBackgroundColorDirection": "vertical",
  "paddingTop": 0,
  "progressBarOpacity": 1,
  "progressHeight": 10,
  "playbackBarBottom": 5,
  "progressBorderColor": "#000000",
  "progressBottom": 0,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressBorderSize": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarHeadShadowHorizontalLength": 0,
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
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarRight": 0,
  "toolTipPaddingBottom": 4,
  "paddingLeft": 0,
  "toolTipPaddingTop": 4,
  "progressBarBorderRadius": 0,
  "minWidth": 100,
  "progressBarBorderSize": 0,
  "toolTipTextShadowColor": "#000000",
  "playbackBarProgressBorderRadius": 0,
  "toolTipBorderSize": 1,
  "transitionMode": "blending",
  "borderRadius": 0,
  "minHeight": 50,
  "toolTipShadowColor": "#333333",
  "toolTipTextShadowOpacity": 0,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarBorderRadius": 0,
  "toolTipShadowHorizontalLength": 0,
  "toolTipBorderColor": "#767676",
  "class": "ViewerArea",
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
  "paddingRight": 0,
  "toolTipShadowOpacity": 1,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarBorderSize": 0,
  "playbackBarLeft": 0,
  "playbackBarBackgroundOpacity": 1,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipPaddingRight": 6,
  "borderSize": 0,
  "playbackBarHeadHeight": 15,
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarHeadBorderSize": 0
 },
 {
  "overflow": "visible",
  "scrollBarColor": "#000000",
  "paddingLeft": 0,
  "scrollBarOpacity": 0.5,
  "layout": "horizontal",
  "minWidth": 20,
  "children": [
   {
    "itemPaddingLeft": 3,
    "horizontalAlign": "left",
    "scrollBarColor": "#FFFFFF",
    "itemOpacity": 1,
    "paddingLeft": 20,
    "itemThumbnailShadow": true,
    "scrollBarOpacity": 0.5,
    "playList": "this.playList_A778EE3D_AF6A_078D_41D2_27D1B992A088",
    "backgroundColorDirection": "vertical",
    "minWidth": 0,
    "itemBackgroundOpacity": 0,
    "itemMode": "normal",
    "itemThumbnailOpacity": 1,
    "itemThumbnailWidth": 100,
    "itemBackgroundColor": [],
    "itemLabelHorizontalAlign": "center",
    "itemLabelFontColor": "#FFFFFF",
    "itemHorizontalAlign": "center",
    "borderRadius": 5,
    "itemLabelFontFamily": "Arial",
    "minHeight": 0,
    "itemVerticalAlign": "middle",
    "shadow": false,
    "backgroundColorRatios": [
     0
    ],
    "itemThumbnailShadowBlurRadius": 4,
    "itemThumbnailShadowHorizontalLength": 3,
    "itemThumbnailHeight": 75,
    "verticalAlign": "top",
    "itemThumbnailShadowOpacity": 0.8,
    "paddingTop": 10,
    "itemThumbnailShadowSpread": 1,
    "itemLabelPosition": "bottom",
    "itemThumbnailScaleMode": "fit_outside",
    "itemThumbnailBorderRadius": 5,
    "itemThumbnailShadowVerticalLength": 3,
    "maxWidth": 800,
    "itemBorderRadius": 0,
    "class": "ThumbnailList",
    "scrollBarVisible": "rollOver",
    "scrollBarWidth": 10,
    "paddingBottom": 10,
    "selectedItemLabelFontWeight": "bold",
    "itemLabelFontSize": 14,
    "itemThumbnailShadowColor": "#000000",
    "scrollBarMargin": 2,
    "maxHeight": 600,
    "itemPaddingBottom": 3,
    "itemBackgroundColorRatios": [],
    "itemPaddingRight": 3,
    "itemLabelFontWeight": "normal",
    "paddingRight": 20,
    "backgroundColor": [
     "#000000"
    ],
    "itemLabelFontStyle": "normal",
    "gap": 10,
    "layout": "horizontal",
    "itemPaddingTop": 3,
    "backgroundOpacity": 0.2,
    "borderSize": 0,
    "itemBackgroundColorDirection": "vertical",
    "itemLabelTextDecoration": "none",
    "itemLabelGap": 5
   }
  ],
  "bottom": 0,
  "borderRadius": 0,
  "minHeight": 20,
  "shadow": false,
  "contentOpaque": false,
  "verticalAlign": "bottom",
  "paddingTop": 0,
  "scrollBarVisible": "rollOver",
  "class": "Container",
  "scrollBarWidth": 10,
  "paddingBottom": 0,
  "left": 0,
  "scrollBarMargin": 2,
  "right": 0,
  "paddingRight": 0,
  "horizontalAlign": "center",
  "gap": 10,
  "backgroundOpacity": 0,
  "borderSize": 0,
  "height": 200
 },
 {
  "overflow": "scroll",
  "scrollBarColor": "#000000",
  "paddingLeft": 0,
  "scrollBarOpacity": 0.5,
  "backgroundColorDirection": "vertical",
  "minWidth": 1,
  "children": [
   {
    "transparencyActive": true,
    "horizontalAlign": "center",
    "paddingLeft": 0,
    "toolTipPaddingTop": 4,
    "toolTipShadowSpread": 0,
    "minWidth": 1,
    "toolTipShadowVerticalLength": 0,
    "toolTipShadowBlurRadius": 3,
    "bottom": 15,
    "toolTipPaddingLeft": 6,
    "toolTipBorderSize": 1,
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
    "toolTip": "Fullscreen",
    "toolTipShadowHorizontalLength": 0,
    "toolTipBorderColor": "#767676",
    "maxWidth": 128,
    "iconURL": "skin/IconButton_A1E435C3_AF9A_04F6_41D5_8E1A9611C737.png",
    "class": "IconButton",
    "toolTipFontFamily": "Arial",
    "toolTipFontWeight": "normal",
    "toolTipBorderRadius": 3,
    "toolTipFontSize": 12,
    "paddingBottom": 0,
    "toolTipOpacity": 1,
    "cursor": "hand",
    "maxHeight": 128,
    "right": 15,
    "paddingRight": 0,
    "toolTipShadowOpacity": 1,
    "toolTipTextShadowBlurRadius": 3,
    "width": 40,
    "toolTipPaddingRight": 6,
    "toolTipBackgroundColor": "#F6F6F6",
    "id": "IconButton_A1E435C3_AF9A_04F6_41D5_8E1A9611C737",
    "toolTipFontStyle": "normal",
    "backgroundOpacity": 0,
    "borderSize": 0,
    "height": 40,
    "toolTipPaddingBottom": 4
   },
   {
    "fontFamily": "Arial",
    "fontSize": 12,
    "shadowColor": "#000000",
    "paddingLeft": 0,
    "fontColor": "#FFFFFF",
    "backgroundColorDirection": "vertical",
    "minWidth": 0,
    "pressedBackgroundOpacity": 0,
    "top": 15,
    "pressedIconWidth": 40,
    "rollOverIconHeight": 40,
    "iconWidth": 40,
    "iconHeight": 40,
    "shadowBlurRadius": 6,
    "borderRadius": 0,
    "minHeight": 0,
    "rollOverIconWidth": 40,
    "fontStyle": "normal",
    "layout": "horizontal",
    "shadow": false,
    "backgroundColorRatios": [
     0,
     1
    ],
    "pressedIconURL": "skin/Button_A1C7783F_AF96_0B8E_41D7_BD529DDBCFDA_pressed.png",
    "verticalAlign": "middle",
    "paddingTop": 0,
    "mode": "toggle",
    "borderColor": "#000000",
    "iconURL": "skin/Button_A1C7783F_AF96_0B8E_41D7_BD529DDBCFDA.png",
    "fontWeight": "normal",
    "pressedIconHeight": 40,
    "class": "Button",
    "paddingBottom": 0,
    "rollOverBackgroundOpacity": 0,
    "shadowSpread": 1,
    "iconBeforeLabel": true,
    "right": 15,
    "cursor": "hand",
    "paddingRight": 0,
    "horizontalAlign": "center",
    "gap": 0,
    "backgroundColor": [
     "#5794FE",
     "#0065CD"
    ],
    "width": 40,
    "id": "Button_A1C7783F_AF96_0B8E_41D7_BD529DDBCFDA",
    "textDecoration": "none",
    "backgroundOpacity": 0,
    "borderSize": 0,
    "height": 40
   }
  ],
  "top": "5%",
  "layout": "absolute",
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
  "scrollBarVisible": "rollOver",
  "class": "Container",
  "scrollBarWidth": 10,
  "paddingBottom": 0,
  "scrollBarMargin": 2,
  "right": "3%",
  "paddingRight": 0,
  "horizontalAlign": "left",
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "width": 70,
  "gap": 10,
  "id": "Container_BFADFF8B_AF6A_0575_41BD_D158D2D6CE02",
  "backgroundOpacity": 0.3,
  "borderSize": 1,
  "height": 125
 },
 {
  "overflow": "scroll",
  "scrollBarColor": "#000000",
  "paddingLeft": 0,
  "scrollBarOpacity": 0.5,
  "backgroundColorDirection": "vertical",
  "minWidth": 1,
  "children": [
   {
    "horizontalAlign": "center",
    "paddingLeft": 0,
    "minWidth": 1,
    "top": "6.5%",
    "borderRadius": 0,
    "minHeight": 1,
    "shadow": false,
    "height": "50%",
    "verticalAlign": "middle",
    "paddingTop": 0,
    "scaleMode": "fit_inside",
    "maxWidth": 522,
    "class": "Image",
    "paddingBottom": 0,
    "click": "var newWindow = window.open(\"https://google.com\", \"_blank\"); newWindow.focus()",
    "left": "24.5%",
    "maxHeight": 427,
    "cursor": "hand",
    "paddingRight": 0,
    "width": "50%",
    "id": "Image_32F55BF3_3B06_B0AE_418A_3FFADE79B291",
    "backgroundOpacity": 0,
    "borderSize": 0,
    "url": "skin/Image_32F55BF3_3B06_B0AE_418A_3FFADE79B291.png"
   },
   {
    "transparencyActive": false,
    "paddingLeft": 0,
    "minWidth": 0,
    "top": "4%",
    "rollOverIconURL": "skin/IconButton_3176A6FC_3B1A_509A_41B6_FF6B60676B70_rollover.png",
    "borderRadius": 0,
    "minHeight": 0,
    "shadow": false,
    "pressedIconURL": "skin/IconButton_3176A6FC_3B1A_509A_41B6_FF6B60676B70_pressed.png",
    "verticalAlign": "middle",
    "paddingTop": 0,
    "mode": "push",
    "iconURL": "skin/IconButton_3176A6FC_3B1A_509A_41B6_FF6B60676B70.png",
    "class": "IconButton",
    "paddingBottom": 0,
    "click": "this.setComponentVisibility(this.Container_31AE2E4A_3B06_B3FE_415D_8F56FFDA3801, false, 0, null, null, false)",
    "right": "4.5%",
    "cursor": "hand",
    "paddingRight": 0,
    "horizontalAlign": "center",
    "width": 32,
    "id": "IconButton_3176A6FC_3B1A_509A_41B6_FF6B60676B70",
    "backgroundOpacity": 0,
    "borderSize": 0,
    "height": 32
   }
  ],
  "top": "15.37%",
  "layout": "absolute",
  "borderRadius": 0,
  "minHeight": 1,
  "shadow": false,
  "backgroundColorRatios": [
   0,
   1
  ],
  "contentOpaque": false,
  "verticalAlign": "top",
  "paddingTop": 0,
  "scrollBarVisible": "rollOver",
  "class": "Container",
  "scrollBarWidth": 10,
  "paddingBottom": 0,
  "left": "41.71%",
  "scrollBarMargin": 2,
  "paddingRight": 0,
  "horizontalAlign": "left",
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "width": "15.798%",
  "gap": 10,
  "id": "Container_31AE2E4A_3B06_B3FE_415D_8F56FFDA3801",
  "backgroundOpacity": 0.3,
  "borderSize": 0,
  "height": "28.736%",
  "visible": false
 }
], 
 "overflow": "visible",
 "scrollBarColor": "#000000",
 "scripts": {
  "setMainMediaByName": function(name){    var items = this.mainPlayList.get('items');   for(var i = 0; i<items.length; ++i){       if(items[i].get('media').get('label') == name) {           this.mainPlayList.set('selectedIndex', i);           return;       }   } },
  "getGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios != undefined && audio.get('id') in audios){       audio = audios[audio.get('id')];   }   return audio; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){    var changeFunction = function(){       var index = playList.get('selectedIndex');       if(index >= 0){           var beginFunction = function(){               playListItem.unbind('begin', beginFunction);               setMediaLabel(index);           };           var setMediaLabel = function(index){               var media = playListItem.get('media');               var text = media.get('data');               if(!text)                   text = media.get('label');               setHtml(text);           };           var setHtml = function(text){               if(text !== undefined)                   htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>');               else                   htmlText.set('html', '');           };           var playListItem = playList.get('items')[index];           if(htmlText.get('html')){               setHtml('Loading...');               playListItem.bind('begin', beginFunction);           }           else{               setMediaLabel(index);           }       }   };   var disposeFunction = function(){       htmlText.set('html', undefined);       playList.unbind('change', changeFunction, this);       playListItemStopToDispose.unbind('stop', disposeFunction, this);   };   if(playListItemStopToDispose){       playListItemStopToDispose.bind('stop', disposeFunction, this);   }   playList.bind('change', changeFunction, this);   changeFunction(); },
  "getActivePlayerWithViewer": function(viewerArea){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   players = players.concat(this.getByClassName('MapPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('viewerArea') == viewerArea) {           var playerClass = player.get('class');           if(playerClass == 'PanoramaPlayer' && player.get('panorama') != undefined) return player;           else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player;           else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player;           else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player;       }   }   return undefined; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){    var resetFunction = function(){       panoramaPlayListItem.unbind('stop', resetFunction, this);       player.set('mapPlayer', null);   };   panoramaPlayListItem.bind('stop', resetFunction, this);   var player = panoramaPlayListItem.get('player');   player.set('mapPlayer', mapPlayer); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){    var self = this;   var closeFunction = function(){       self.MainViewer.set('toolTipEnabled', true);       this.resumePlayers(playersPaused, !containsAudio);       if(isVideo) {           this.unbind('resize', resizeFunction, this);       }       w.unbind('close', closeFunction, this);   };   var endFunction = function(){       w.hide();   };   var resizeFunction = function(){       var parentWidth = self.get('actualWidth');       var parentHeight = self.get('actualHeight');       var mediaWidth = media.get('width');       var mediaHeight = media.get('height');       var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100;       var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100;       var windowWidth = popupMaxWidthNumber * parentWidth;       var windowHeight = popupMaxHeightNumber * parentHeight;       var footerHeight = w.get('footerHeight');       var headerHeight = w.get('headerHeight');       if(!headerHeight) {           var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom');           var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom');           headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight;           headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom');       }       if(!footerHeight) {           footerHeight = 0;       }       var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight');       var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom');       var parentAspectRatio = contentWindowWidth / contentWindowHeight;       var mediaAspectRatio = mediaWidth / mediaHeight;       if(parentAspectRatio > mediaAspectRatio) {           windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight');       }       else {           windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom');       }       if(windowWidth > parentWidth * popupMaxWidthNumber) {           windowWidth = parentWidth * popupMaxWidthNumber;       }       if(windowHeight > parentHeight * popupMaxHeightNumber) {           windowHeight = parentHeight * popupMaxHeightNumber;       }       w.set('width', windowWidth);       w.set('height', windowHeight);       w.set('x', (parentWidth - w.get('actualWidth')) * 0.5);       w.set('y', (parentHeight - w.get('actualHeight')) * 0.5);   };   if(autoCloseWhenFinished){       this.executeFunctionWhenChange(playList, 0, endFunction);   }   var isVideo = media.get('class') == 'Video';   if(isVideo){       this.bind('resize', resizeFunction, this);       resizeFunction();   }   else {       w.set('width', popupMaxWidth);       w.set('height', popupMaxHeight);   }   this.MainViewer.set('toolTipEnabled', false);   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           this.stopGlobalAudio(audio);           if(isPanorama) {               var media = playListItem.get('media');               var audios = media.get('audios');               audios.splice(audios.indexOf(audio), 1);               media.set('audios', audios);           }           playList.unbind('change', changeFunction, this);           if(endCallback)               endCallback();       }   };   var audios = window.currentGlobalAudios;   if(audios && audio.get('id') in audios){       audio = audios[audio.get('id')];       if(audio.get('state') != 'playing'){           audio.play();       }       return;   }   playList.bind('change', changeFunction, this);   var playListItem = playList.get('items')[index];   var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem';   if(isPanorama) {       var media = playListItem.get('media');       var audios = (media.get('audios') || []).slice();       if(audio.get('class') == 'MediaAudio') {           var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio');           panoramaAudio.set('autoplay', false);           panoramaAudio.set('audio', audio.get('audio'));           panoramaAudio.set('loop', audio.get('loop'));           panoramaAudio.set('id', audio.get('id'));           audio = panoramaAudio;       }       audios.push(audio);       media.set('audios', audios);   }   this.playGlobalAudio(audio, endCallback); },
  "playAudioList": function(audios){    if(audios.length == 0) return;   var currentAudioCount = -1;   var currentAudio;   var playGlobalAudioFunction = this.playGlobalAudio;   var playNext = function(){       if(++currentAudioCount >= audios.length)           currentAudioCount = 0;       currentAudio = audios[currentAudioCount];       playGlobalAudioFunction(currentAudio, playNext);   };   playNext(); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){    var self = this;   var endObject = undefined;   var changePlayListFunction = function(event){       if(event.data.previousSelectedIndex == index){           if(changeFunction) changeFunction();           if(endFunction) endObject.unbind('end', endFunction, self);           playList.unbind('change', changePlayListFunction, self);       }   };   if(endFunction){       var playListItem = playList.get('items')[index];       var playListItemClass = playListItem.get('class');       if(playListItemClass == 'PanoramaPlayListItem'){           var camera = playListItem.get('camera');           endObject = camera.get('initialSequence');           if(!endObject) return;       }       else{           endObject = playListItem.get('media');       }       endObject.bind('end', endFunction, this);   }   playList.bind('change', changePlayListFunction, this); },
  "pauseGlobalAudios": function(caller){    var audios = window.currentGlobalAudios;   window.currentGlobalAudiosActionCaller = caller;   if(!audios) return;   for(var audio in audios){       audios[audio].pause();   } },
  "getKey": function(key){    return window[key]; },
  "changeBackgroundWhilePlay": function(playList, index, color){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           playList.unbind('change', changeFunction, this);           if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){               viewerArea.set('backgroundColor', backgroundColorBackup);               viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup);           }       }   };   var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var viewerArea = player.get('viewerArea');   var backgroundColorBackup = viewerArea.get('backgroundColor');   var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios');   var colorRatios = [0];   if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){       viewerArea.set('backgroundColor', color);       viewerArea.set('backgroundColorRatios', colorRatios);       playList.bind('change', changeFunction, this);   } },
  "autotriggerAtStart": function(player, callback){    var stateChangeFunction = function(event){        if(event.data.state == 'playing'){           callback();           player.unbind('stateChange', stateChangeFunction, this);       }   };   player.bind('stateChange', stateChangeFunction, this); },
  "pauseGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];   }   audio.pause(); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){    var self = this;   var closed = false;   var playerClickFunction = function() {       zoomImage.unbind('loaded', loadedFunction, self);       hideFunction();   };   var clearAutoClose = function(){       zoomImage.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var loadedFunction = function(){       self.unbind('click', playerClickFunction, self);       veil.set('visible', true);       setCloseButtonPosition();       closeButton.set('visible', true);       zoomImage.unbind('loaded', loadedFunction, this);       zoomImage.bind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this);       timeoutID = setTimeout(timeoutFunction, 200);   };   var timeoutFunction = function(){       timeoutID = undefined;       if(autoCloseMilliSeconds){           var autoCloseFunction = function(){               hideFunction();           };           zoomImage.bind('click', clearAutoClose, this);           timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);       }       zoomImage.bind('backgroundClick', hideFunction, this);       if(toggleImage) {           zoomImage.bind('click', toggleFunction, this);           zoomImage.set('imageCursor', 'hand');       }       closeButton.bind('click', hideFunction, this);       if(loadedCallback)           loadedCallback();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       closed = true;       if(timeoutID)           clearTimeout(timeoutID);       if(autoCloseMilliSeconds)           clearAutoClose();       if(hideCallback)           hideCallback();       zoomImage.set('visible', false);       if(hideEffect && hideEffect.get('duration') > 0){           hideEffect.bind('end', endEffectFunction, this);       }       else{           zoomImage.set('image', null);       }       closeButton.set('visible', false);       veil.set('visible', false);       self.unbind('click', playerClickFunction, self);       zoomImage.unbind('backgroundClick', hideFunction, this);       zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true);       if(toggleImage) {           zoomImage.unbind('click', toggleFunction, this);           zoomImage.set('cursor', 'default');       }       closeButton.unbind('click', hideFunction, this);       self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               self.resumeGlobalAudios();           }           self.stopGlobalAudio(audio);       }   };   var endEffectFunction = function() {       zoomImage.set('image', null);       hideEffect.unbind('end', endEffectFunction, this);   };   var toggleFunction = function() {       zoomImage.set('image', isToggleVisible() ? image : toggleImage);   };   var isToggleVisible = function() {       return zoomImage.get('image') == toggleImage;   };   var setCloseButtonPosition = function() {       var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10;       var top = zoomImage.get('imageTop') + 10;       if(right < 10) right = 10;       if(top < 10) top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var userInteractionStartFunction = function() {       if(timeoutUserInteractionID){           clearTimeout(timeoutUserInteractionID);           timeoutUserInteractionID = undefined;       }       else{           closeButton.set('visible', false);       }   };   var userInteractionEndFunction = function() {       if(!closed){           timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300);       }   };   var userInteractionTimeoutFunction = function() {       timeoutUserInteractionID = undefined;       closeButton.set('visible', true);       setCloseButtonPosition();   };   this.MainViewer.set('toolTipEnabled', false);   var veil = this.veilPopupPanorama;   var zoomImage = this.zoomImagePopupPanorama;   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);   if(audio){       if(stopBackgroundAudio){           this.pauseGlobalAudios();       }       this.playGlobalAudio(audio);   }   var timeoutID = undefined;   var timeoutUserInteractionID = undefined;   zoomImage.bind('loaded', loadedFunction, this);   setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0);   zoomImage.set('image', image);   zoomImage.set('customWidth', customWidth);   zoomImage.set('customHeight', customHeight);   zoomImage.set('showEffect', showEffect);   zoomImage.set('hideEffect', hideEffect);   zoomImage.set('visible', true);   return zoomImage; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){    var endFunction = function(){       if(playList.get('selectedIndex') == fromIndex)           playList.set('selectedIndex', toIndex);   };   this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){    this.unregisterKey('visibility_'+component.get('id'));   var changeVisibility = function(){        if(effect && propertyEffect){            component.set(propertyEffect, effect);        }        component.set('visible', visible);       if(component.get('class') == 'ViewerArea'){           try{               if(visible) component.restart();               else        component.pause();           }           catch(e){};       }   };   var effectTimeoutName = 'effectTimeout_'+component.get('id');   if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){       var effectTimeout = window[effectTimeoutName];       if(effectTimeout instanceof Array){           for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) }       }else{           clearTimeout(effectTimeout);       }       delete window[effectTimeoutName];   }   else if(visible == component.get('visible') && !ignoreClearTimeout)       return;   if(applyAt && applyAt > 0){       var effectTimeout = setTimeout(function(){            if(window[effectTimeoutName] instanceof Array) {                var arrayTimeoutVal = window[effectTimeoutName];               var index = arrayTimeoutVal.indexOf(effectTimeout);               arrayTimeoutVal.splice(index, 1);               if(arrayTimeoutVal.length == 0){                   delete window[effectTimeoutName];               }           }else{               delete window[effectTimeoutName];            }           changeVisibility();        }, applyAt);       if(window.hasOwnProperty(effectTimeoutName)){           window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout];       }else{           window[effectTimeoutName] = effectTimeout;       }   }   else{       changeVisibility();   } },
  "fixTogglePlayPauseButton": function(player){    var state = player.get('state');   var button = player.get('buttonPlayPause');   if(typeof button !== 'undefined' && player.get('state') == 'playing'){       button.set('pressed', true);   } },
  "stopGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];       delete audios[audio.get('id')];   }   audio.stop(); },
  "shareTwitter": function(url){    window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "shareGoogle": function(url){    window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "resumeGlobalAudios": function(caller){    if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller)       return;   window.currentGlobalAudiosActionCaller = undefined;   var audios = window.currentGlobalAudios;   if(!audios) return;   for(var audio in audios){       audios[audio].play();   } },
  "shareFacebook": function(url){    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "existsKey": function(key){    return key in window; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){    for(var i = 0; i<players.length; ++i){       var player = players[i];       if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){           player.resumeCamera();       }       else{           player.play();       }   } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){    var audios = window.currentGlobalAudios;   if(!audios) return;   var resumeFunction = this.resumeGlobalAudios;   var endFunction = function(){       if(playList.get('selectedIndex') != index) {           resumeFunction(caller);       }   };   this.pauseGlobalAudios(caller);   this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "getPlayListWithMedia": function(media, onlySelected){    var playLists = this.getByClassName('PlayList');   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       if(onlySelected && playList.get('selectedIndex') == -1)           continue;       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           if(items[j].get('media') == media)               return playList;       }   }   return undefined; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){    var closeFunction = function(){       clearAutoClose();       this.resumePlayers(playersPaused, !containsAudio);       w.unbind('close', closeFunction, this);   };   var clearAutoClose = function(){       w.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var timeoutID = undefined;   if(autoCloseMilliSeconds){       var autoCloseFunction = function(){           w.hide();       };       w.bind('click', clearAutoClose, this);       timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('state') == 'playing') {           if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){               player.pauseCamera();           }           else{               player.pause();           }       }       else {           players.splice(i, 1);       }   }   return players; },
  "registerKey": function(key, value){    window[key] = value; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){    var setVisibility = function(visible){       for(var i = 0, length = components.length; i<length; i++){           components[i].set('visible', visible);       }   };   if (this.rootPlayer.touchEnabled){       setVisibility(true);   } else {       var timeoutID = -1;       var rollOverFunction = function(){           setVisibility(true);           if(timeoutID >= 0) clearTimeout(timeoutID);           parentComponent.unbind('rollOver', rollOverFunction, this);           parentComponent.bind('rollOut', rollOutFunction, this);       };       var rollOutFunction = function(){           var timeoutFunction = function(){               setVisibility(false);               parentComponent.unbind('rollOver', rollOverFunction, this);           };           parentComponent.unbind('rollOut', rollOutFunction, this);           parentComponent.bind('rollOver', rollOverFunction, this);           timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut);       };       parentComponent.bind('rollOver', rollOverFunction, this);   } },
  "loadFromCurrentMediaPlayList": function(playList, delta){    var currentIndex = playList.get('selectedIndex');   var totalItems = playList.get('items').length;   var newIndex = (currentIndex + delta) % totalItems;   while(newIndex < 0){       newIndex = totalItems + newIndex;   };   if(currentIndex != newIndex){       playList.set('selectedIndex', newIndex);   }; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){    var self = this;   var showEndFunction = function() {       popupPanoramaOverlay.unbind('showEnd', showEndFunction);       closeButton.bind('click', hideFunction, this);       setCloseButtonPosition();       closeButton.set('visible', true);   };   var endFunction = function() {       if(!popupPanoramaOverlay.get('loop'))           hideFunction();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       if(!self.isCardboardViewMode())           popupPanoramaOverlay.set('visible', false);       closeButton.set('visible', false);       closeButton.unbind('click', hideFunction, this);       popupPanoramaOverlay.unbind('end', endFunction, self);       self.resumePlayers(playersPaused, true);       self.resumeGlobalAudios();   };   var setCloseButtonPosition = function() {       var right = 10;       var top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   this.MainViewer.set('toolTipEnabled', false);   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(true);   this.pauseGlobalAudios();   popupPanoramaOverlay.bind('end', endFunction, this, true);   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); },
  "unregisterKey": function(key){    delete window[key]; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){    var enabled = this.get(playerFlag);   for(var i in components){       components[i].set('visible', enabled);   } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){    var self = this;   var stateChangeFunction = function(event){       if(event.data.state == 'stopped'){           dispose();       }   };   var changeFunction = function(){       var index = playListDispatcher.get('selectedIndex');       if(index != -1){           indexDispatcher = index;           dispose();       }   };   var dispose = function(){       if(!playListDispatcher) return;       playList.set('selectedIndex', -1);       if(panoramaSequence && panoramaSequenceIndex != -1){           if(panoramaSequence) {               if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){                   var initialPosition = camera.get('initialPosition');                   var oldYaw = initialPosition.get('yaw');                   var oldPitch = initialPosition.get('pitch');                   var oldHfov = initialPosition.get('hfov');                   var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1];                   initialPosition.set('yaw', previousMovement.get('targetYaw'));                   initialPosition.set('pitch', previousMovement.get('targetPitch'));                   initialPosition.set('hfov', previousMovement.get('targetHfov'));                   var restoreInitialPositionFunction = function(event){                       initialPosition.set('yaw', oldYaw);                       initialPosition.set('pitch', oldPitch);                       initialPosition.set('hfov', oldHfov);                       itemDispatcher.unbind('end', restoreInitialPositionFunction, self);                   };                   itemDispatcher.bind('end', restoreInitialPositionFunction, self);               }               panoramaSequence.set('movementIndex', panoramaSequenceIndex);           }       }       playListDispatcher.set('selectedIndex', indexDispatcher);       if(player){           player.unbind('stateChange', stateChangeFunction, self);       }       if(sameViewerArea){           if(playList != playListDispatcher)               playListDispatcher.unbind('change', changeFunction, self);       }       else{           viewerArea.set('visible', false);       }       playListDispatcher = undefined;   };   if(!mediaDispatcher){       var currentIndex = playList.get('selectedIndex');       var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer);       if(currentPlayer) {           var playerClass = currentPlayer.get('class');           if(playerClass == 'PanoramaPlayer') mediaDispatcher = currentPlayer.get('panorama');           else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video');           else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum');           else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map');       }   }   var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined;   if(!playListDispatcher){       playList.set('selectedIndex', index);       return;   }   var indexDispatcher = playListDispatcher.get('selectedIndex');   if(playList.get('selectedIndex') == index || indexDispatcher == -1){       return;   }   var item = playList.get('items')[index];   var itemDispatcher = playListDispatcher.get('items')[indexDispatcher];   var viewerArea = item.get('player').get('viewerArea');   var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea');   if(sameViewerArea){       if(playList != playListDispatcher){           playListDispatcher.set('selectedIndex', -1);           playListDispatcher.bind('change', changeFunction, this);       }   }   else{       viewerArea.set('visible', true);   }   var panoramaSequenceIndex = -1;   var panoramaSequence = undefined;   var camera = itemDispatcher.get('camera');   if(camera){       panoramaSequence = camera.get('initialSequence');       if(panoramaSequence) {           panoramaSequenceIndex = panoramaSequence.get('movementIndex');       }   }   playList.set('selectedIndex', index);   var player = undefined;   if(item.get('player') != itemDispatcher.get('player')){       player = item.get('player');       player.bind('stateChange', stateChangeFunction, this);   }   this.executeFunctionWhenChange(playList, index, dispose); },
  "loopAlbum": function(playList, index){    var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var loopFunction = function(){       player.play();   };   this.executeFunctionWhenChange(playList, index, loopFunction); },
  "isCardboardViewMode": function(){    var players = this.getByClassName('PanoramaPlayer');   return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "startPanoramaWithCamera": function(panorama, camera){    var playLists = this.getByClassName('PlayList');   if(playLists.length == 0)       return;    var restoreItems = [];   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           var item = items[j];           if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){               restoreItems.push({camera: item.get('camera'), item: item});               item.set('camera', camera);           }       }   }   if(restoreItems.length > 0) {       var restoreCameraOnStop = function(){           for (var i = 0; i < restoreItems.length; i++) {               restoreItems[i].item.set('camera', restoreItems[i].camera);           }           restoreItems[0].item.unbind('stop', restoreCameraOnStop, this);       };       restoreItems[0].item.bind('stop', restoreCameraOnStop, this);   } },
  "setMainMediaByIndex": function(index){    if(index >= 0 && index < this.mainPlayList.get('items').length){       this.mainPlayList.set('selectedIndex', index);   } },
  "updateVideoCues": function(playList, index){    var playListItem = playList.get('items')[index];   var video = playListItem.get('media');   if(video.get('cues').length == 0)       return;   var player = playListItem.get('player');   var cues = [];   var changeFunction = function(){       if(playList.get('selectedIndex') != index){           video.unbind('cueChange', cueChangeFunction, this);           playList.unbind('change', changeFunction, this);       }   };   var cueChangeFunction = function(event){       var activeCues = event.data.activeCues;       for(var i = 0, count = cues.length; i<count; ++i){           var cue = cues[i];           if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){               cue.trigger('end');           }       }       cues = activeCues;   };   video.bind('cueChange', cueChangeFunction, this);   playList.bind('change', changeFunction, this); },
  "playGlobalAudio": function(audio, endCallback){    var endFunction = function(){       audio.unbind('end', endFunction, this);       this.stopGlobalAudio(audio);       if(endCallback)           endCallback();   };   audio = this.getGlobalAudio(audio);   var audios = window.currentGlobalAudios;   if(!audios){       audios = window.currentGlobalAudios = {};   }   audios[audio.get('id')] = audio;   if(audio.get('state') == 'playing'){       return;   }   if(!audio.get('loop')){       audio.bind('end', endFunction, this);   }   audio.play(); },
  "syncPlaylists": function(playLists){    var changeToMedia = function(media, playListDispatched){       for(var i = 0, count = playLists.length; i<count; ++i){           var playList = playLists[i];           if(playList != playListDispatched){               var items = playList.get('items');               for(var j = 0, countJ = items.length; j<countJ; ++j){                   if(items[j].get('media') == media){                       if(playList.get('selectedIndex') != j){                           playList.set('selectedIndex', j);                       }                       break;                   }               }           }       }   };   var changeFunction = function(event){       var playListDispatched = event.source;       var selectedIndex = playListDispatched.get('selectedIndex');       if(selectedIndex < 0)           return;       var media = playListDispatched.get('items')[selectedIndex].get('media');       changeToMedia(media, playListDispatched);   };   var mapPlayerChangeFunction = function(event){       var panoramaMapLocation = event.source.get('panoramaMapLocation');       if(panoramaMapLocation){           var map = panoramaMapLocation.get('map');           changeToMedia(map);       }   };   for(var i = 0, count = playLists.length; i<count; ++i){       playLists[i].bind('change', changeFunction, this);   }   var mapPlayers = this.getByClassName('MapPlayer');   for(var i = 0, count = mapPlayers.length; i<count; ++i){       mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this);   } }
 },
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "minWidth": 20,
 "layout": "absolute",
 "start": "this.playAudioList([this.audio_A0506B1C_AF6E_0D92_41CD_BE6FC628C667]); this.syncPlaylists([this.playList_A778EE3D_AF6A_078D_41D2_27D1B992A088,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_A1E435C3_AF9A_04F6_41D5_8E1A9611C737].forEach(function(component) { component.set('visible', false); }) }",
 "borderRadius": 0,
 "minHeight": 20,
 "shadow": false,
 "contentOpaque": false,
 "verticalAlign": "top",
 "buttonToggleFullscreen": "this.IconButton_A1E435C3_AF9A_04F6_41D5_8E1A9611C737",
 "paddingTop": 0,
 "buttonToggleMute": "this.Button_A1C7783F_AF96_0B8E_41D7_BD529DDBCFDA",
 "backgroundPreloadEnabled": true,
 "scrollBarVisible": "rollOver",
 "class": "Player",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "mouseWheelEnabled": true,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "gap": 10,
 "id": "rootPlayer",
 "borderSize": 0,
 "height": "100%"
})