TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "partial": true,
  "hfovMax": 120,
  "vfov": 180,
  "label": "TES Lobby VR - 01",
  "frames": [
   {
    "overlays": [
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.showPopupMedia(this.window_FF3EAD28_F6E8_3C99_41CF_E8329CA8C13B, this.album_FF50EC84_F6E8_1D88_41EB_D360A962CD2B, this.playList_A253AD06_AB9A_DCEA_41C0_4736C5E57AEB, '50%', '50%', false, false); this.playList_A253AD06_AB9A_DCEA_41C0_4736C5E57AEB.set('selectedIndex', 0); ",
        "displayTooltipInTouchScreens": true,
        "toolTip": "Check-in"
       }
      ],
      "id": "overlay_FB0732F2_FC25_AF39_41E3_CD20D4A80F06",
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_0_HS_3_0_0_map.gif",
           "height": 38,
           "class": "ImageResourceLevel",
           "width": 29
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -1.44,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -12.74,
        "hfov": 2.7
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_0_HS_3_0.png",
           "height": 77,
           "class": "ImageResourceLevel",
           "width": 59
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -1.44,
        "yaw": -12.74,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 2.7
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "displayTooltipInTouchScreens": true,
        "toolTip": "Right Hall"
       }
      ],
      "id": "overlay_FB07D2F2_FC25_AF39_41E9_B75218BCB4B4",
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_0_HS_1_0_0_map.gif",
           "height": 51,
           "class": "ImageResourceLevel",
           "width": 40
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -12.48,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 23.57,
        "hfov": 3.51
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_0_HS_1_0.png",
           "height": 103,
           "class": "ImageResourceLevel",
           "width": 80
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -12.48,
        "yaw": 23.57,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 3.51
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 2)",
        "displayTooltipInTouchScreens": true,
        "toolTip": "Left Hall"
       }
      ],
      "id": "overlay_FB07C2F2_FC25_AF39_41E0_A360978AEB99",
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_0_HS_0_0_0_map.gif",
           "height": 51,
           "class": "ImageResourceLevel",
           "width": 40
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -12.64,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -25.09,
        "hfov": 3.51
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_0_HS_0_0.png",
           "height": 103,
           "class": "ImageResourceLevel",
           "width": 80
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -12.64,
        "yaw": -25.09,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 3.51
       }
      ]
     }
    ],
    "right": {
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
     ],
     "class": "ImageResource"
    },
    "front": {
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
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "top": {
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
     ],
     "class": "ImageResource"
    },
    "bottom": {
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
     ],
     "class": "ImageResource"
    },
    "left": {
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
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_t.jpg"
   }
  ],
  "hfovMin": 80,
  "thumbnailUrl": "media/panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_t.jpg",
  "cardboardMenu": {
   "fontFamily": "Arial",
   "label": "Media",
   "rollOverBackgroundColor": "#000000",
   "selectedFontColor": "#FFFFFF",
   "backgroundColor": "#404040",
   "opacity": 0.4,
   "rollOverOpacity": 0.8,
   "id": "Menu_A1B83653_AB9E_CD69_41BE_B4399E1BC3D2",
   "class": "Menu",
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
   "rollOverFontColor": "#FFFFFF",
   "selectedBackgroundColor": "#202020",
   "fontColor": "#FFFFFF"
  },
  "id": "panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65",
  "class": "Panorama",
  "pitch": 0,
  "hfov": 180
 },
 {
  "touchControlMode": "drag_rotation",
  "viewerArea": "this.MainViewer",
  "displayPlaybackBar": true,
  "id": "MainViewerPanoramaPlayer",
  "class": "PanoramaPlayer",
  "preloadEnabled": false,
  "gyroscopeVerticalDraggingEnabled": true,
  "mouseControlMode": "drag_rotation"
 },
 {
  "id": "panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "partial": true,
  "hfovMax": 120,
  "vfov": 180,
  "label": "TES Lobby VR - 02",
  "frames": [
   {
    "overlays": [
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "var newWindow = window.open(\"https://htranboston.github.io/vr/\", \"_blank\"); newWindow.focus()",
        "displayTooltipInTouchScreens": true,
        "toolTip": "Play Video"
       }
      ],
      "id": "overlay_F1C3C256_FC26_6F79_41EE_95B7C36DF70E",
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_0_HS_5_0_0_map.gif",
           "height": 51,
           "class": "ImageResourceLevel",
           "width": 40
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 8,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 11.83,
        "hfov": 3.56
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_0_HS_5_0.png",
           "height": 103,
           "class": "ImageResourceLevel",
           "width": 80
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 8,
        "yaw": 11.83,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 3.56
       }
      ]
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "var newWindow = window.open(\"https://zoom.us/meetings\", \"_blank\"); newWindow.focus()",
        "displayTooltipInTouchScreens": true,
        "toolTip": "Zoom Meeting"
       }
      ],
      "id": "overlay_F1C3D256_FC26_6F79_41D2_0CD43118C8D3",
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_0_HS_4_0_0_map.gif",
           "height": 38,
           "class": "ImageResourceLevel",
           "width": 30
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -7.4,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 71.93,
        "hfov": 2.68
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_0_HS_4_0.png",
           "height": 77,
           "class": "ImageResourceLevel",
           "width": 60
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -7.4,
        "yaw": 71.93,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 2.68
       }
      ]
     }
    ],
    "right": {
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
     ],
     "class": "ImageResource"
    },
    "front": {
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
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "top": {
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
     ],
     "class": "ImageResource"
    },
    "bottom": {
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
     ],
     "class": "ImageResource"
    },
    "left": {
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
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_t.jpg"
   }
  ],
  "hfovMin": 80,
  "thumbnailUrl": "media/panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_t.jpg",
  "cardboardMenu": "this.Menu_A1B83653_AB9E_CD69_41BE_B4399E1BC3D2",
  "id": "panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62",
  "class": "Panorama",
  "pitch": 0,
  "hfov": 180
 },
 {
  "id": "panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "partial": true,
  "hfovMax": 120,
  "vfov": 180,
  "label": "TES Lobby VR - 03",
  "frames": [
   {
    "right": {
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
     ],
     "class": "ImageResource"
    },
    "front": {
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
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "top": {
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
     ],
     "class": "ImageResource"
    },
    "bottom": {
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
     ],
     "class": "ImageResource"
    },
    "left": {
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
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_F23C8009_FC26_6AEB_41B6_0319817B8314_t.jpg"
   }
  ],
  "hfovMin": 80,
  "thumbnailUrl": "media/panorama_F23C8009_FC26_6AEB_41B6_0319817B8314_t.jpg",
  "cardboardMenu": "this.Menu_A1B83653_AB9E_CD69_41BE_B4399E1BC3D2",
  "id": "panorama_F23C8009_FC26_6AEB_41B6_0319817B8314",
  "class": "Panorama",
  "pitch": 0,
  "hfov": 180
 },
 {
  "id": "panorama_F23C8009_FC26_6AEB_41B6_0319817B8314_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "items": [
   {
    "media": "this.panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "media": "this.panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "media": "this.panorama_F23C8009_FC26_6AEB_41B6_0319817B8314",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_F23C8009_FC26_6AEB_41B6_0319817B8314_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 0)"
   }
  ],
  "id": "mainPlayList",
  "class": "PlayList"
 },
 {
  "items": [
   {
    "media": "this.panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_camera",
    "begin": "this.setEndToItemIndex(this.playList_A778EE3D_AF6A_078D_41D2_27D1B992A088, 0, 1)"
   },
   {
    "media": "this.panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_camera",
    "begin": "this.setEndToItemIndex(this.playList_A778EE3D_AF6A_078D_41D2_27D1B992A088, 1, 2)"
   },
   {
    "media": "this.panorama_F23C8009_FC26_6AEB_41B6_0319817B8314",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_F23C8009_FC26_6AEB_41B6_0319817B8314_camera",
    "begin": "this.setEndToItemIndex(this.playList_A778EE3D_AF6A_078D_41D2_27D1B992A088, 2, 0)"
   }
  ],
  "id": "playList_A778EE3D_AF6A_078D_41D2_27D1B992A088",
  "class": "PlayList"
 },
 {
  "label": "Photo Album teslogin",
  "thumbnailUrl": "media/album_FF50EC84_F6E8_1D88_41EB_D360A962CD2B_t.png",
  "id": "album_FF50EC84_F6E8_1D88_41EB_D360A962CD2B",
  "class": "PhotoAlbum",
  "playList": {
   "items": [
    {
     "media": {
      "duration": 5000,
      "label": "TES Login",
      "image": {
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_FF50EC84_F6E8_1D88_41EB_D360A962CD2B_0.png"
        }
       ],
       "class": "ImageResource"
      },
      "thumbnailUrl": "media/album_FF50EC84_F6E8_1D88_41EB_D360A962CD2B_0_t.png",
      "width": 522,
      "height": 427,
      "id": "album_FF50EC84_F6E8_1D88_41EB_D360A962CD2B_0",
      "class": "Photo"
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
  }
 },
 "this.album_FF50EC84_F6E8_1D88_41EB_D360A962CD2B_0",
 {
  "items": [
   {
    "media": "this.album_FF50EC84_F6E8_1D88_41EB_D360A962CD2B",
    "begin": "this.updateMediaLabelFromPlayList(this.album_FF50EC84_F6E8_1D88_41EB_D360A962CD2B_AlbumPlayList, this.htmltext_A1BDB64B_AB9E_CD79_41D2_EEA35941FA7F, this.albumitem_A2517D08_AB9A_DCE6_41E3_3E1DA7CA13EF); this.loopAlbum(this.playList_A253AD06_AB9A_DCEA_41C0_4736C5E57AEB, 0)",
    "class": "PhotoAlbumPlayListItem",
    "id": "albumitem_A2517D08_AB9A_DCE6_41E3_3E1DA7CA13EF",
    "player": {
     "viewerArea": {
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "playbackBarProgressBorderRadius": 0,
      "progressBarBorderSize": 0,
      "transitionMode": "blending",
      "toolTipShadowColor": "#333333",
      "toolTipTextShadowOpacity": 0,
      "paddingLeft": 0,
      "borderRadius": 0,
      "shadow": false,
      "toolTipShadowHorizontalLength": 0,
      "toolTipFontFamily": "Arial",
      "toolTipFontWeight": "normal",
      "playbackBarProgressBorderColor": "#000000",
      "playbackBarBorderRadius": 0,
      "toolTipBorderColor": "#767676",
      "toolTipBorderRadius": 3,
      "toolTipFontSize": 12,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarHeadBorderRadius": 0,
      "class": "ViewerArea",
      "toolTipOpacity": 1,
      "toolTipPaddingRight": 6,
      "progressLeft": 0,
      "playbackBarHeadBorderColor": "#000000",
      "progressBackgroundColorRatios": [
       0
      ],
      "minWidth": 100,
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarLeft": 0,
      "playbackBarBorderSize": 0,
      "paddingBottom": 0,
      "toolTipShadowOpacity": 1,
      "playbackBarBackgroundOpacity": 1,
      "playbackBarProgressOpacity": 1,
      "height": "100%",
      "toolTipBackgroundColor": "#F6F6F6",
      "borderSize": 0,
      "playbackBarHeadShadowColor": "#000000",
      "toolTipShadowBlurRadius": 3,
      "playbackBarHeadBorderSize": 0,
      "id": "viewer_uidA183564B_AB9E_CD79_41D5_2937FB67DE16",
      "progressRight": 0,
      "playbackBarHeadHeight": 15,
      "paddingRight": 0,
      "progressOpacity": 1,
      "toolTipPaddingLeft": 6,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "progressBarBackgroundColorDirection": "vertical",
      "playbackBarHeadShadow": true,
      "toolTipFontColor": "#606060",
      "progressBarBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadOpacity": 1,
      "toolTipShadowSpread": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarHeadShadowHorizontalLength": 0,
      "progressBackgroundColorDirection": "vertical",
      "playbackBarOpacity": 1,
      "minHeight": 50,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "width": "100%",
      "progressBarOpacity": 1,
      "playbackBarBottom": 0,
      "progressBorderColor": "#000000",
      "progressBottom": 2,
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "progressHeight": 10,
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "progressBorderSize": 0,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "paddingTop": 0,
      "toolTipFontStyle": "normal",
      "toolTipPaddingBottom": 4,
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "playbackBarHeight": 10,
      "playbackBarHeadShadowOpacity": 0.7,
      "progressBorderRadius": 0,
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadWidth": 6,
      "playbackBarRight": 0,
      "playbackBarBorderColor": "#FFFFFF",
      "toolTipTextShadowColor": "#000000",
      "progressBarBorderRadius": 0
     },
     "id": "viewer_uidA252DD07_AB9A_DCEA_41D6_0E1E93CA442APhotoAlbumPlayer",
     "class": "PhotoAlbumPlayer"
    }
   }
  ],
  "id": "playList_A253AD06_AB9A_DCEA_41C0_4736C5E57AEB",
  "class": "PlayList"
 },
 "this.Menu_A1B83653_AB9E_CD69_41BE_B4399E1BC3D2",
 {
  "headerBorderSize": 0,
  "closeButtonBackgroundColorRatios": [],
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "scrollBarOpacity": 0.5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingTop": 0,
  "closeButtonPressedBackgroundColor": [],
  "bodyPaddingBottom": 0,
  "paddingLeft": 0,
  "closeButtonPressedIconLineWidth": 3,
  "contentOpaque": false,
  "backgroundColorRatios": [],
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "shadow": true,
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "closeButtonIconLineWidth": 2,
  "borderRadius": 5,
  "titleFontFamily": "Arial",
  "verticalAlign": "middle",
  "headerBackgroundOpacity": 0,
  "closeButtonBorderRadius": 11,
  "veilColorDirection": "horizontal",
  "scrollBarVisible": "rollOver",
  "modal": true,
  "shadowSpread": 1,
  "scrollBarWidth": 10,
  "class": "Window",
  "titlePaddingBottom": 5,
  "scrollBarMargin": 2,
  "bodyBackgroundColorDirection": "vertical",
  "minWidth": 20,
  "headerBorderColor": "#000000",
  "paddingBottom": 0,
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "close": "this.playList_A253AD06_AB9A_DCEA_41C0_4736C5E57AEB.set('selectedIndex', -1);",
  "height": 600,
  "id": "window_FF3EAD28_F6E8_3C99_41CF_E8329CA8C13B",
  "minHeight": 20,
  "titlePaddingRight": 5,
  "borderSize": 0,
  "shadowColor": "#000000",
  "paddingRight": 0,
  "scrollBarColor": "#000000",
  "titlePaddingLeft": 5,
  "shadowBlurRadius": 6,
  "width": 400,
  "backgroundColorDirection": "vertical",
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "headerPaddingRight": 0,
  "title": "Check-in",
  "footerBackgroundColorDirection": "vertical",
  "children": [
   {
    "scrollBarColor": "#000000",
    "horizontalAlign": "left",
    "paddingRight": 0,
    "backgroundColorDirection": "vertical",
    "borderSize": 0,
    "rollOver": "this.showComponentsWhileMouseOver(this.container_A183764B_AB9E_CD79_41E1_2D29BAF5C42C, [this.htmltext_A1BDB64B_AB9E_CD79_41D2_EEA35941FA7F,this.component_A1BD064C_AB9E_CD7F_41E2_5C02A72C08EF,this.component_A1BD364C_AB9E_CD7F_41D6_B3542894655F], 2000)",
    "scrollBarOpacity": 0.5,
    "children": [
     "this.viewer_uidA183564B_AB9E_CD79_41D5_2937FB67DE16",
     {
      "scrollBarColor": "#FFFFFF",
      "horizontalAlign": "left",
      "paddingRight": 0,
      "backgroundColorDirection": "vertical",
      "minHeight": 20,
      "bottom": 0,
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "scrollBarColor": "#000000",
        "paddingRight": 10,
        "backgroundColorDirection": "vertical",
        "borderSize": 0,
        "scrollBarOpacity": 0.5,
        "width": "100%",
        "paddingLeft": 10,
        "borderRadius": 0,
        "shadow": false,
        "backgroundColorRatios": [
         0
        ],
        "scrollBarVisible": "rollOver",
        "paddingTop": 5,
        "html": "",
        "scrollBarWidth": 10,
        "class": "HTMLText",
        "scrollBarMargin": 2,
        "backgroundOpacity": 0.7,
        "paddingBottom": 5,
        "minWidth": 0,
        "backgroundColor": [
         "#000000"
        ],
        "hideEffect": {
         "duration": 250,
         "easing": "cubic_in_out",
         "class": "FadeOutEffect"
        },
        "id": "htmltext_A1BDB64B_AB9E_CD79_41D2_EEA35941FA7F",
        "minHeight": 0,
        "visible": false,
        "showEffect": {
         "duration": 250,
         "easing": "cubic_in_out",
         "class": "FadeInEffect"
        }
       }
      ],
      "paddingLeft": 0,
      "contentOpaque": true,
      "borderRadius": 0,
      "shadow": false,
      "height": "30%",
      "backgroundColorRatios": [],
      "verticalAlign": "bottom",
      "scrollBarVisible": "rollOver",
      "paddingTop": 0,
      "scrollBarWidth": 7,
      "class": "Container",
      "left": 0,
      "scrollBarMargin": 2,
      "backgroundOpacity": 0.3,
      "paddingBottom": 0,
      "minWidth": 20,
      "overflow": "scroll",
      "backgroundColor": [],
      "right": 0,
      "gap": 10,
      "borderSize": 0,
      "layout": "vertical"
     },
     {
      "transparencyActive": false,
      "paddingRight": 0,
      "top": "45%",
      "paddingLeft": 0,
      "borderRadius": 0,
      "shadow": false,
      "verticalAlign": "middle",
      "mode": "push",
      "paddingTop": 0,
      "iconURL": "skin/album_left.png",
      "class": "IconButton",
      "click": "this.loadFromCurrentMediaPlayList(this.album_FF50EC84_F6E8_1D88_41EB_D360A962CD2B_AlbumPlayList, -1)",
      "left": 10,
      "backgroundOpacity": 0,
      "paddingBottom": 0,
      "minWidth": 0,
      "hideEffect": {
       "duration": 250,
       "easing": "cubic_in_out",
       "class": "FadeOutEffect"
      },
      "cursor": "hand",
      "horizontalAlign": "center",
      "borderSize": 0,
      "visible": false,
      "id": "component_A1BD064C_AB9E_CD7F_41E2_5C02A72C08EF",
      "showEffect": {
       "duration": 250,
       "easing": "cubic_in_out",
       "class": "FadeInEffect"
      },
      "minHeight": 0
     },
     {
      "transparencyActive": false,
      "paddingRight": 0,
      "top": "45%",
      "paddingLeft": 0,
      "borderRadius": 0,
      "shadow": false,
      "verticalAlign": "middle",
      "mode": "push",
      "paddingTop": 0,
      "iconURL": "skin/album_right.png",
      "class": "IconButton",
      "click": "this.loadFromCurrentMediaPlayList(this.album_FF50EC84_F6E8_1D88_41EB_D360A962CD2B_AlbumPlayList, 1)",
      "backgroundOpacity": 0,
      "paddingBottom": 0,
      "minWidth": 0,
      "cursor": "hand",
      "right": 10,
      "hideEffect": {
       "duration": 250,
       "easing": "cubic_in_out",
       "class": "FadeOutEffect"
      },
      "horizontalAlign": "center",
      "borderSize": 0,
      "minHeight": 0,
      "visible": false,
      "id": "component_A1BD364C_AB9E_CD7F_41D6_B3542894655F",
      "showEffect": {
       "duration": 250,
       "easing": "cubic_in_out",
       "class": "FadeInEffect"
      }
     }
    ],
    "paddingLeft": 0,
    "contentOpaque": false,
    "borderRadius": 0,
    "width": "100%",
    "shadow": false,
    "height": "100%",
    "backgroundColorRatios": [],
    "verticalAlign": "top",
    "scrollBarVisible": "rollOver",
    "paddingTop": 0,
    "scrollBarWidth": 10,
    "class": "Container",
    "scrollBarMargin": 2,
    "backgroundOpacity": 0.3,
    "paddingBottom": 0,
    "minWidth": 20,
    "overflow": "scroll",
    "backgroundColor": [],
    "gap": 10,
    "id": "container_A183764B_AB9E_CD79_41E1_2D29BAF5C42C",
    "minHeight": 20,
    "layout": "absolute"
   }
  ],
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "headerPaddingLeft": 10,
  "titleFontWeight": "normal",
  "bodyPaddingRight": 0,
  "titleTextDecoration": "none",
  "titlePaddingTop": 5,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonBackgroundColor": [],
  "headerBackgroundColorDirection": "vertical",
  "headerVerticalAlign": "middle",
  "bodyPaddingLeft": 0,
  "closeButtonIconWidth": 20,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "shadowOpacity": 0.5,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "closeButtonRollOverBackgroundColor": [],
  "bodyBackgroundOpacity": 0,
  "paddingTop": 0,
  "closeButtonIconHeight": 20,
  "headerPaddingBottom": 5,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "veilOpacity": 0.4,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "headerPaddingTop": 10,
  "footerBackgroundOpacity": 0,
  "shadowHorizontalLength": 3,
  "shadowVerticalLength": 0,
  "titleFontSize": 14,
  "backgroundOpacity": 1,
  "closeButtonPressedIconColor": "#FFFFFF",
  "overflow": "scroll",
  "veilColorRatios": [
   0,
   1
  ],
  "backgroundColor": [],
  "closeButtonRollOverIconColor": "#FFFFFF",
  "closeButtonIconColor": "#B2B2B2",
  "horizontalAlign": "center",
  "gap": 10,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "titleFontStyle": "normal",
  "footerHeight": 5,
  "titleFontColor": "#000000",
  "layout": "vertical"
 },
 {
  "id": "audio_A0506B1C_AF6E_0D92_41CD_BE6FC628C667",
  "class": "MediaAudio",
  "autoplay": true,
  "audio": {
   "mp3Url": "media/audio_A0506B1C_AF6E_0D92_41CD_BE6FC628C667.mp3",
   "class": "AudioResource",
   "oggUrl": "media/audio_A0506B1C_AF6E_0D92_41CD_BE6FC628C667.ogg"
  }
 }
], "children": [
 {
  "toolTipBorderSize": 1,
  "toolTipPaddingTop": 4,
  "playbackBarProgressBorderRadius": 0,
  "progressBarBorderSize": 0,
  "transitionMode": "blending",
  "top": 0,
  "toolTipTextShadowOpacity": 0,
  "toolTipShadowColor": "#333333",
  "paddingLeft": 0,
  "borderRadius": 0,
  "shadow": false,
  "toolTipShadowHorizontalLength": 0,
  "toolTipFontFamily": "Arial",
  "toolTipFontWeight": "normal",
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarBorderRadius": 0,
  "toolTipBorderColor": "#767676",
  "toolTipBorderRadius": 3,
  "toolTipFontSize": 12,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarHeadBorderRadius": 0,
  "class": "ViewerArea",
  "toolTipOpacity": 1,
  "toolTipPaddingRight": 6,
  "progressLeft": 0,
  "playbackBarHeadBorderColor": "#000000",
  "progressBackgroundColorRatios": [
   0
  ],
  "minWidth": 100,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarLeft": 0,
  "playbackBarBorderSize": 0,
  "paddingBottom": 0,
  "toolTipShadowOpacity": 1,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarProgressOpacity": 1,
  "height": "100%",
  "toolTipBackgroundColor": "#F6F6F6",
  "borderSize": 0,
  "toolTipShadowSpread": 0,
  "minHeight": 50,
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadBorderSize": 0,
  "id": "MainViewer",
  "progressRight": 0,
  "playbackBarHeadHeight": 15,
  "paddingRight": 0,
  "progressOpacity": 1,
  "toolTipPaddingLeft": 6,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadShadow": true,
  "toolTipFontColor": "#606060",
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipShadowVerticalLength": 0,
  "playbackBarHeadOpacity": 1,
  "progressBackgroundOpacity": 1,
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarOpacity": 1,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "width": "100%",
  "progressBarOpacity": 1,
  "playbackBarBottom": 5,
  "playbackBarHeadShadowColor": "#000000",
  "progressBorderColor": "#000000",
  "progressBottom": 0,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressHeight": 10,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBorderSize": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "paddingTop": 0,
  "toolTipFontStyle": "normal",
  "toolTipPaddingBottom": 4,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowOpacity": 0.7,
  "left": 0,
  "progressBorderRadius": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeight": 10,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarProgressBorderSize": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarHeadWidth": 6,
  "playbackBarRight": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "toolTipTextShadowColor": "#000000",
  "progressBarBorderRadius": 0
 },
 {
  "scrollBarColor": "#000000",
  "paddingRight": 0,
  "scrollBarOpacity": 0.5,
  "bottom": 0,
  "children": [
   {
    "scrollBarColor": "#FFFFFF",
    "itemThumbnailShadowBlurRadius": 4,
    "horizontalAlign": "left",
    "itemBackgroundColorDirection": "vertical",
    "paddingRight": 20,
    "backgroundColorDirection": "vertical",
    "itemPaddingBottom": 3,
    "layout": "horizontal",
    "itemThumbnailShadow": true,
    "scrollBarOpacity": 0.5,
    "itemThumbnailWidth": 100,
    "itemPaddingLeft": 3,
    "itemThumbnailShadowColor": "#000000",
    "maxWidth": 800,
    "itemLabelFontStyle": "normal",
    "itemThumbnailShadowSpread": 1,
    "itemBackgroundColor": [],
    "playList": "this.playList_A778EE3D_AF6A_078D_41D2_27D1B992A088",
    "selectedItemLabelFontWeight": "bold",
    "paddingLeft": 20,
    "itemPaddingRight": 3,
    "itemBorderRadius": 0,
    "itemLabelPosition": "bottom",
    "maxHeight": 600,
    "borderRadius": 5,
    "shadow": false,
    "itemPaddingTop": 3,
    "backgroundColorRatios": [
     0
    ],
    "itemLabelGap": 5,
    "itemBackgroundOpacity": 0,
    "itemThumbnailHeight": 75,
    "verticalAlign": "top",
    "itemBackgroundColorRatios": [],
    "itemOpacity": 1,
    "scrollBarVisible": "rollOver",
    "paddingTop": 10,
    "itemMode": "normal",
    "itemLabelFontWeight": "normal",
    "itemThumbnailScaleMode": "fit_outside",
    "scrollBarWidth": 10,
    "class": "ThumbnailList",
    "itemHorizontalAlign": "center",
    "itemThumbnailOpacity": 1,
    "itemLabelFontFamily": "Arial",
    "scrollBarMargin": 2,
    "backgroundOpacity": 0.2,
    "itemThumbnailShadowVerticalLength": 3,
    "paddingBottom": 10,
    "minWidth": 0,
    "itemLabelFontColor": "#FFFFFF",
    "itemLabelHorizontalAlign": "center",
    "itemVerticalAlign": "middle",
    "itemThumbnailShadowOpacity": 0.8,
    "backgroundColor": [
     "#000000"
    ],
    "gap": 10,
    "itemThumbnailShadowHorizontalLength": 3,
    "itemLabelTextDecoration": "none",
    "borderSize": 0,
    "minHeight": 0,
    "itemThumbnailBorderRadius": 5,
    "itemLabelFontSize": 14
   }
  ],
  "paddingLeft": 0,
  "contentOpaque": false,
  "borderRadius": 0,
  "shadow": false,
  "verticalAlign": "bottom",
  "scrollBarVisible": "rollOver",
  "paddingTop": 0,
  "scrollBarWidth": 10,
  "class": "Container",
  "left": 0,
  "scrollBarMargin": 2,
  "backgroundOpacity": 0,
  "paddingBottom": 0,
  "minWidth": 20,
  "overflow": "visible",
  "right": 0,
  "gap": 10,
  "horizontalAlign": "center",
  "borderSize": 0,
  "height": 200,
  "layout": "horizontal",
  "minHeight": 20
 },
 {
  "scrollBarColor": "#000000",
  "height": 125,
  "paddingRight": 0,
  "backgroundColorDirection": "vertical",
  "minHeight": 1,
  "top": "5%",
  "scrollBarOpacity": 0.5,
  "children": [
   {
    "toolTipShadowBlurRadius": 3,
    "transparencyActive": true,
    "toolTipPaddingLeft": 6,
    "paddingRight": 0,
    "toolTipPaddingTop": 4,
    "toolTipFontColor": "#606060",
    "minHeight": 1,
    "toolTipShadowColor": "#333333",
    "bottom": 15,
    "maxWidth": 128,
    "toolTipShadowVerticalLength": 0,
    "toolTipTextShadowOpacity": 0,
    "paddingLeft": 0,
    "maxHeight": 128,
    "borderRadius": 0,
    "shadow": false,
    "toolTipShadowHorizontalLength": 0,
    "toolTipFontFamily": "Arial",
    "toolTipBorderColor": "#767676",
    "verticalAlign": "middle",
    "mode": "toggle",
    "toolTipFontWeight": "normal",
    "toolTipBorderRadius": 3,
    "toolTipFontSize": 12,
    "paddingTop": 0,
    "iconURL": "skin/IconButton_A1E435C3_AF9A_04F6_41D5_8E1A9611C737.png",
    "toolTipFontStyle": "normal",
    "toolTipTextShadowBlurRadius": 3,
    "toolTipPaddingBottom": 4,
    "class": "IconButton",
    "toolTipOpacity": 1,
    "toolTipPaddingRight": 6,
    "backgroundOpacity": 0,
    "paddingBottom": 0,
    "minWidth": 1,
    "cursor": "hand",
    "toolTipBackgroundColor": "#F6F6F6",
    "right": 15,
    "toolTip": "Fullscreen",
    "toolTipTextShadowColor": "#000000",
    "horizontalAlign": "center",
    "toolTipShadowOpacity": 1,
    "borderSize": 0,
    "toolTipShadowSpread": 0,
    "height": 40,
    "id": "IconButton_A1E435C3_AF9A_04F6_41D5_8E1A9611C737",
    "toolTipBorderSize": 1,
    "width": 40
   },
   {
    "fontFamily": "Arial",
    "backgroundColor": [
     "#5794FE",
     "#0065CD"
    ],
    "paddingRight": 0,
    "width": 40,
    "fontColor": "#FFFFFF",
    "rollOverIconHeight": 40,
    "shadowBlurRadius": 6,
    "fontSize": 12,
    "top": 15,
    "shadowColor": "#000000",
    "backgroundColorDirection": "vertical",
    "iconHeight": 40,
    "paddingLeft": 0,
    "fontStyle": "normal",
    "rollOverIconWidth": 40,
    "borderRadius": 0,
    "iconWidth": 40,
    "shadow": false,
    "borderColor": "#000000",
    "backgroundColorRatios": [
     0,
     1
    ],
    "rollOverBackgroundOpacity": 0,
    "iconBeforeLabel": true,
    "textDecoration": "none",
    "pressedBackgroundOpacity": 0,
    "verticalAlign": "middle",
    "mode": "toggle",
    "fontWeight": "normal",
    "paddingTop": 0,
    "iconURL": "skin/Button_A1C7783F_AF96_0B8E_41D7_BD529DDBCFDA.png",
    "shadowSpread": 1,
    "class": "Button",
    "pressedIconURL": "skin/Button_A1C7783F_AF96_0B8E_41D7_BD529DDBCFDA_pressed.png",
    "backgroundOpacity": 0,
    "paddingBottom": 0,
    "minWidth": 0,
    "cursor": "hand",
    "right": 15,
    "gap": 0,
    "pressedIconHeight": 40,
    "horizontalAlign": "center",
    "borderSize": 0,
    "pressedIconWidth": 40,
    "minHeight": 0,
    "height": 40,
    "id": "Button_A1C7783F_AF96_0B8E_41D7_BD529DDBCFDA",
    "layout": "horizontal"
   }
  ],
  "paddingLeft": 0,
  "contentOpaque": false,
  "borderRadius": 5,
  "shadow": false,
  "borderColor": "#000000",
  "backgroundColorRatios": [
   0,
   1
  ],
  "verticalAlign": "top",
  "scrollBarVisible": "rollOver",
  "paddingTop": 0,
  "scrollBarWidth": 10,
  "class": "Container",
  "scrollBarMargin": 2,
  "backgroundOpacity": 0.3,
  "minWidth": 1,
  "overflow": "scroll",
  "paddingBottom": 0,
  "right": "3%",
  "gap": 10,
  "horizontalAlign": "left",
  "borderSize": 1,
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "id": "Container_BFADFF8B_AF6A_0575_41BD_D158D2D6CE02",
  "layout": "absolute",
  "width": 70
 }
], 
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "buttonToggleMute": "this.Button_A1C7783F_AF96_0B8E_41D7_BD529DDBCFDA",
 "paddingRight": 0,
 "borderSize": 0,
 "buttonToggleFullscreen": "this.IconButton_A1E435C3_AF9A_04F6_41D5_8E1A9611C737",
 "scrollBarOpacity": 0.5,
 "start": "this.playAudioList([this.audio_A0506B1C_AF6E_0D92_41CD_BE6FC628C667]); this.syncPlaylists([this.playList_A778EE3D_AF6A_078D_41D2_27D1B992A088,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_A1E435C3_AF9A_04F6_41D5_8E1A9611C737].forEach(function(component) { component.set('visible', false); }) }",
 "scripts": {
  "fixTogglePlayPauseButton": function(player){    var state = player.get('state');   var button = player.get('buttonPlayPause');   if(typeof button !== 'undefined' && player.get('state') == 'playing'){       button.set('pressed', true);   } },
  "stopGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];       delete audios[audio.get('id')];   }   audio.stop(); },
  "pauseGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];   }   audio.pause(); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){    var audios = window.currentGlobalAudios;   if(!audios) return;   var resumeFunction = this.resumeGlobalAudios;   var endFunction = function(){       if(playList.get('selectedIndex') != index) {           resumeFunction(caller);       }   };   this.pauseGlobalAudios(caller);   this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){    var setVisibility = function(visible){       for(var i = 0, length = components.length; i<length; i++){           components[i].set('visible', visible);       }   };   if (this.rootPlayer.touchEnabled){       setVisibility(true);   } else {       var timeoutID = -1;       var rollOverFunction = function(){           setVisibility(true);           if(timeoutID >= 0) clearTimeout(timeoutID);           parentComponent.unbind('rollOver', rollOverFunction, this);           parentComponent.bind('rollOut', rollOutFunction, this);       };       var rollOutFunction = function(){           var timeoutFunction = function(){               setVisibility(false);               parentComponent.unbind('rollOver', rollOverFunction, this);           };           parentComponent.unbind('rollOut', rollOutFunction, this);           parentComponent.bind('rollOver', rollOverFunction, this);           timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut);       };       parentComponent.bind('rollOver', rollOverFunction, this);   } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){    var self = this;   var closeFunction = function(){       self.MainViewer.set('toolTipEnabled', true);       this.resumePlayers(playersPaused, !containsAudio);       if(isVideo) {           this.unbind('resize', resizeFunction, this);       }       w.unbind('close', closeFunction, this);   };   var endFunction = function(){       w.hide();   };   var resizeFunction = function(){       var parentWidth = self.get('actualWidth');       var parentHeight = self.get('actualHeight');       var mediaWidth = media.get('width');       var mediaHeight = media.get('height');       var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100;       var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100;       var windowWidth = popupMaxWidthNumber * parentWidth;       var windowHeight = popupMaxHeightNumber * parentHeight;       var footerHeight = w.get('footerHeight');       var headerHeight = w.get('headerHeight');       if(!headerHeight) {           var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom');           var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom');           headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight;           headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom');       }       if(!footerHeight) {           footerHeight = 0;       }       var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight');       var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom');       var parentAspectRatio = contentWindowWidth / contentWindowHeight;       var mediaAspectRatio = mediaWidth / mediaHeight;       if(parentAspectRatio > mediaAspectRatio) {           windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight');       }       else {           windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom');       }       if(windowWidth > parentWidth * popupMaxWidthNumber) {           windowWidth = parentWidth * popupMaxWidthNumber;       }       if(windowHeight > parentHeight * popupMaxHeightNumber) {           windowHeight = parentHeight * popupMaxHeightNumber;       }       w.set('width', windowWidth);       w.set('height', windowHeight);       w.set('x', (parentWidth - w.get('actualWidth')) * 0.5);       w.set('y', (parentHeight - w.get('actualHeight')) * 0.5);   };   if(autoCloseWhenFinished){       this.executeFunctionWhenChange(playList, 0, endFunction);   }   var isVideo = media.get('class') == 'Video';   if(isVideo){       this.bind('resize', resizeFunction, this);       resizeFunction();   }   else {       w.set('width', popupMaxWidth);       w.set('height', popupMaxHeight);   }   this.MainViewer.set('toolTipEnabled', false);   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('state') == 'playing') {           if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){               player.pauseCamera();           }           else{               player.pause();           }       }       else {           players.splice(i, 1);       }   }   return players; },
  "resumeGlobalAudios": function(caller){    if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller)       return;   window.currentGlobalAudiosActionCaller = undefined;   var audios = window.currentGlobalAudios;   if(!audios) return;   for(var audio in audios){       audios[audio].play();   } },
  "loadFromCurrentMediaPlayList": function(playList, delta){    var currentIndex = playList.get('selectedIndex');   var totalItems = playList.get('items').length;   var newIndex = (currentIndex + delta) % totalItems;   while(newIndex < 0){       newIndex = totalItems + newIndex;   };   if(currentIndex != newIndex){       playList.set('selectedIndex', newIndex);   }; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){    for(var i = 0; i<players.length; ++i){       var player = players[i];       if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){           player.resumeCamera();       }       else{           player.play();       }   } },
  "playGlobalAudio": function(audio, endCallback){    var endFunction = function(){       audio.unbind('end', endFunction, this);       this.stopGlobalAudio(audio);       if(endCallback)           endCallback();   };   audio = this.getGlobalAudio(audio);   var audios = window.currentGlobalAudios;   if(!audios){       audios = window.currentGlobalAudios = {};   }   audios[audio.get('id')] = audio;   if(audio.get('state') == 'playing'){       return;   }   if(!audio.get('loop')){       audio.bind('end', endFunction, this);   }   audio.play(); },
  "unregisterKey": function(key){    delete window[key]; },
  "shareGoogle": function(url){    window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "loopAlbum": function(playList, index){    var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var loopFunction = function(){       player.play();   };   this.executeFunctionWhenChange(playList, index, loopFunction); },
  "shareTwitter": function(url){    window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "isCardboardViewMode": function(){    var players = this.getByClassName('PanoramaPlayer');   return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "startPanoramaWithCamera": function(panorama, camera){    var playLists = this.getByClassName('PlayList');   if(playLists.length == 0)       return;    var restoreItems = [];   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           var item = items[j];           if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){               restoreItems.push({camera: item.get('camera'), item: item});               item.set('camera', camera);           }       }   }   if(restoreItems.length > 0) {       var restoreCameraOnStop = function(){           for (var i = 0; i < restoreItems.length; i++) {               restoreItems[i].item.set('camera', restoreItems[i].camera);           }           restoreItems[0].item.unbind('stop', restoreCameraOnStop, this);       };       restoreItems[0].item.bind('stop', restoreCameraOnStop, this);   } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){    var enabled = this.get(playerFlag);   for(var i in components){       components[i].set('visible', enabled);   } },
  "setMainMediaByName": function(name){    var items = this.mainPlayList.get('items');   for(var i = 0; i<items.length; ++i){       if(items[i].get('media').get('label') == name) {           this.mainPlayList.set('selectedIndex', i);           return;       }   } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){    var closeFunction = function(){       clearAutoClose();       this.resumePlayers(playersPaused, !containsAudio);       w.unbind('close', closeFunction, this);   };   var clearAutoClose = function(){       w.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var timeoutID = undefined;   if(autoCloseMilliSeconds){       var autoCloseFunction = function(){           w.hide();       };       w.bind('click', clearAutoClose, this);       timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "shareFacebook": function(url){    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios != undefined && audio.get('id') in audios){       audio = audios[audio.get('id')];   }   return audio; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           this.stopGlobalAudio(audio);           if(isPanorama) {               var media = playListItem.get('media');               var audios = media.get('audios');               audios.splice(audios.indexOf(audio), 1);               media.set('audios', audios);           }           playList.unbind('change', changeFunction, this);           if(endCallback)               endCallback();       }   };   var audios = window.currentGlobalAudios;   if(audios && audio.get('id') in audios){       audio = audios[audio.get('id')];       if(audio.get('state') != 'playing'){           audio.play();       }       return;   }   playList.bind('change', changeFunction, this);   var playListItem = playList.get('items')[index];   var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem';   if(isPanorama) {       var media = playListItem.get('media');       var audios = (media.get('audios') || []).slice();       if(audio.get('class') == 'MediaAudio') {           var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio');           panoramaAudio.set('autoplay', false);           panoramaAudio.set('audio', audio.get('audio'));           panoramaAudio.set('loop', audio.get('loop'));           panoramaAudio.set('id', audio.get('id'));           audio = panoramaAudio;       }       audios.push(audio);       media.set('audios', audios);   }   this.playGlobalAudio(audio, endCallback); },
  "autotriggerAtStart": function(player, callback){    var stateChangeFunction = function(event){        if(event.data.state == 'playing'){           callback();           player.unbind('stateChange', stateChangeFunction, this);       }   };   player.bind('stateChange', stateChangeFunction, this); },
  "getActivePlayerWithViewer": function(viewerArea){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   players = players.concat(this.getByClassName('MapPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('viewerArea') == viewerArea) {           var playerClass = player.get('class');           if(playerClass == 'PanoramaPlayer' && player.get('panorama') != undefined) return player;           else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player;           else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player;           else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player;       }   }   return undefined; },
  "playAudioList": function(audios){    if(audios.length == 0) return;   var currentAudioCount = -1;   var currentAudio;   var playGlobalAudioFunction = this.playGlobalAudio;   var playNext = function(){       if(++currentAudioCount >= audios.length)           currentAudioCount = 0;       currentAudio = audios[currentAudioCount];       playGlobalAudioFunction(currentAudio, playNext);   };   playNext(); },
  "syncPlaylists": function(playLists){    var changeToMedia = function(media, playListDispatched){       for(var i = 0, count = playLists.length; i<count; ++i){           var playList = playLists[i];           if(playList != playListDispatched){               var items = playList.get('items');               for(var j = 0, countJ = items.length; j<countJ; ++j){                   if(items[j].get('media') == media){                       if(playList.get('selectedIndex') != j){                           playList.set('selectedIndex', j);                       }                       break;                   }               }           }       }   };   var changeFunction = function(event){       var playListDispatched = event.source;       var selectedIndex = playListDispatched.get('selectedIndex');       if(selectedIndex < 0)           return;       var media = playListDispatched.get('items')[selectedIndex].get('media');       changeToMedia(media, playListDispatched);   };   var mapPlayerChangeFunction = function(event){       var panoramaMapLocation = event.source.get('panoramaMapLocation');       if(panoramaMapLocation){           var map = panoramaMapLocation.get('map');           changeToMedia(map);       }   };   for(var i = 0, count = playLists.length; i<count; ++i){       playLists[i].bind('change', changeFunction, this);   }   var mapPlayers = this.getByClassName('MapPlayer');   for(var i = 0, count = mapPlayers.length; i<count; ++i){       mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this);   } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){    var endFunction = function(){       if(playList.get('selectedIndex') == fromIndex)           playList.set('selectedIndex', toIndex);   };   this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){    var self = this;   var closed = false;   var playerClickFunction = function() {       zoomImage.unbind('loaded', loadedFunction, self);       hideFunction();   };   var clearAutoClose = function(){       zoomImage.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var loadedFunction = function(){       self.unbind('click', playerClickFunction, self);       veil.set('visible', true);       setCloseButtonPosition();       closeButton.set('visible', true);       zoomImage.unbind('loaded', loadedFunction, this);       zoomImage.bind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this);       timeoutID = setTimeout(timeoutFunction, 200);   };   var timeoutFunction = function(){       timeoutID = undefined;       if(autoCloseMilliSeconds){           var autoCloseFunction = function(){               hideFunction();           };           zoomImage.bind('click', clearAutoClose, this);           timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);       }       zoomImage.bind('backgroundClick', hideFunction, this);       if(toggleImage) {           zoomImage.bind('click', toggleFunction, this);           zoomImage.set('imageCursor', 'hand');       }       closeButton.bind('click', hideFunction, this);       if(loadedCallback)           loadedCallback();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       closed = true;       if(timeoutID)           clearTimeout(timeoutID);       if(autoCloseMilliSeconds)           clearAutoClose();       if(hideCallback)           hideCallback();       zoomImage.set('visible', false);       if(hideEffect && hideEffect.get('duration') > 0){           hideEffect.bind('end', endEffectFunction, this);       }       else{           zoomImage.set('image', null);       }       closeButton.set('visible', false);       veil.set('visible', false);       self.unbind('click', playerClickFunction, self);       zoomImage.unbind('backgroundClick', hideFunction, this);       zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true);       if(toggleImage) {           zoomImage.unbind('click', toggleFunction, this);           zoomImage.set('cursor', 'default');       }       closeButton.unbind('click', hideFunction, this);       self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               self.resumeGlobalAudios();           }           self.stopGlobalAudio(audio);       }   };   var endEffectFunction = function() {       zoomImage.set('image', null);       hideEffect.unbind('end', endEffectFunction, this);   };   var toggleFunction = function() {       zoomImage.set('image', isToggleVisible() ? image : toggleImage);   };   var isToggleVisible = function() {       return zoomImage.get('image') == toggleImage;   };   var setCloseButtonPosition = function() {       var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10;       var top = zoomImage.get('imageTop') + 10;       if(right < 10) right = 10;       if(top < 10) top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var userInteractionStartFunction = function() {       if(timeoutUserInteractionID){           clearTimeout(timeoutUserInteractionID);           timeoutUserInteractionID = undefined;       }       else{           closeButton.set('visible', false);       }   };   var userInteractionEndFunction = function() {       if(!closed){           timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300);       }   };   var userInteractionTimeoutFunction = function() {       timeoutUserInteractionID = undefined;       closeButton.set('visible', true);       setCloseButtonPosition();   };   this.MainViewer.set('toolTipEnabled', false);   var veil = this.veilPopupPanorama;   var zoomImage = this.zoomImagePopupPanorama;   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);   if(audio){       if(stopBackgroundAudio){           this.pauseGlobalAudios();       }       this.playGlobalAudio(audio);   }   var timeoutID = undefined;   var timeoutUserInteractionID = undefined;   zoomImage.bind('loaded', loadedFunction, this);   setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0);   zoomImage.set('image', image);   zoomImage.set('customWidth', customWidth);   zoomImage.set('customHeight', customHeight);   zoomImage.set('showEffect', showEffect);   zoomImage.set('hideEffect', hideEffect);   zoomImage.set('visible', true);   return zoomImage; },
  "setMainMediaByIndex": function(index){    if(index >= 0 && index < this.mainPlayList.get('items').length){       this.mainPlayList.set('selectedIndex', index);   } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){    var self = this;   var endObject = undefined;   var changePlayListFunction = function(event){       if(event.data.previousSelectedIndex == index){           if(changeFunction) changeFunction();           if(endFunction) endObject.unbind('end', endFunction, self);           playList.unbind('change', changePlayListFunction, self);       }   };   if(endFunction){       var playListItem = playList.get('items')[index];       var playListItemClass = playListItem.get('class');       if(playListItemClass == 'PanoramaPlayListItem'){           var camera = playListItem.get('camera');           endObject = camera.get('initialSequence');           if(!endObject) return;       }       else{           endObject = playListItem.get('media');       }       endObject.bind('end', endFunction, this);   }   playList.bind('change', changePlayListFunction, this); },
  "updateVideoCues": function(playList, index){    var playListItem = playList.get('items')[index];   var video = playListItem.get('media');   if(video.get('cues').length == 0)       return;   var player = playListItem.get('player');   var cues = [];   var changeFunction = function(){       if(playList.get('selectedIndex') != index){           video.unbind('cueChange', cueChangeFunction, this);           playList.unbind('change', changeFunction, this);       }   };   var cueChangeFunction = function(event){       var activeCues = event.data.activeCues;       for(var i = 0, count = cues.length; i<count; ++i){           var cue = cues[i];           if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){               cue.trigger('end');           }       }       cues = activeCues;   };   video.bind('cueChange', cueChangeFunction, this);   playList.bind('change', changeFunction, this); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){    var self = this;   var stateChangeFunction = function(event){       if(event.data.state == 'stopped'){           dispose();       }   };   var changeFunction = function(){       var index = playListDispatcher.get('selectedIndex');       if(index != -1){           indexDispatcher = index;           dispose();       }   };   var dispose = function(){       if(!playListDispatcher) return;       playList.set('selectedIndex', -1);       if(panoramaSequence && panoramaSequenceIndex != -1){           if(panoramaSequence) {               if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){                   var initialPosition = camera.get('initialPosition');                   var oldYaw = initialPosition.get('yaw');                   var oldPitch = initialPosition.get('pitch');                   var oldHfov = initialPosition.get('hfov');                   var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1];                   initialPosition.set('yaw', previousMovement.get('targetYaw'));                   initialPosition.set('pitch', previousMovement.get('targetPitch'));                   initialPosition.set('hfov', previousMovement.get('targetHfov'));                   var restoreInitialPositionFunction = function(event){                       initialPosition.set('yaw', oldYaw);                       initialPosition.set('pitch', oldPitch);                       initialPosition.set('hfov', oldHfov);                       itemDispatcher.unbind('end', restoreInitialPositionFunction, self);                   };                   itemDispatcher.bind('end', restoreInitialPositionFunction, self);               }               panoramaSequence.set('movementIndex', panoramaSequenceIndex);           }       }       playListDispatcher.set('selectedIndex', indexDispatcher);       if(player){           player.unbind('stateChange', stateChangeFunction, self);       }       if(sameViewerArea){           if(playList != playListDispatcher)               playListDispatcher.unbind('change', changeFunction, self);       }       else{           viewerArea.set('visible', false);       }       playListDispatcher = undefined;   };   if(!mediaDispatcher){       var currentIndex = playList.get('selectedIndex');       var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer);       if(currentPlayer) {           var playerClass = currentPlayer.get('class');           if(playerClass == 'PanoramaPlayer') mediaDispatcher = currentPlayer.get('panorama');           else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video');           else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum');           else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map');       }   }   var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined;   if(!playListDispatcher){       playList.set('selectedIndex', index);       return;   }   var indexDispatcher = playListDispatcher.get('selectedIndex');   if(playList.get('selectedIndex') == index || indexDispatcher == -1){       return;   }   var item = playList.get('items')[index];   var itemDispatcher = playListDispatcher.get('items')[indexDispatcher];   var viewerArea = item.get('player').get('viewerArea');   var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea');   if(sameViewerArea){       if(playList != playListDispatcher){           playListDispatcher.set('selectedIndex', -1);           playListDispatcher.bind('change', changeFunction, this);       }   }   else{       viewerArea.set('visible', true);   }   var panoramaSequenceIndex = -1;   var panoramaSequence = undefined;   var camera = itemDispatcher.get('camera');   if(camera){       panoramaSequence = camera.get('initialSequence');       if(panoramaSequence) {           panoramaSequenceIndex = panoramaSequence.get('movementIndex');       }   }   playList.set('selectedIndex', index);   var player = undefined;   if(item.get('player') != itemDispatcher.get('player')){       player = item.get('player');       player.bind('stateChange', stateChangeFunction, this);   }   this.executeFunctionWhenChange(playList, index, dispose); },
  "changeBackgroundWhilePlay": function(playList, index, color){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           playList.unbind('change', changeFunction, this);           if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){               viewerArea.set('backgroundColor', backgroundColorBackup);               viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup);           }       }   };   var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var viewerArea = player.get('viewerArea');   var backgroundColorBackup = viewerArea.get('backgroundColor');   var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios');   var colorRatios = [0];   if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){       viewerArea.set('backgroundColor', color);       viewerArea.set('backgroundColorRatios', colorRatios);       playList.bind('change', changeFunction, this);   } },
  "registerKey": function(key, value){    window[key] = value; },
  "existsKey": function(key){    return key in window; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){    var self = this;   var showEndFunction = function() {       popupPanoramaOverlay.unbind('showEnd', showEndFunction);       closeButton.bind('click', hideFunction, this);       setCloseButtonPosition();       closeButton.set('visible', true);   };   var endFunction = function() {       if(!popupPanoramaOverlay.get('loop'))           hideFunction();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       if(!self.isCardboardViewMode())           popupPanoramaOverlay.set('visible', false);       closeButton.set('visible', false);       closeButton.unbind('click', hideFunction, this);       popupPanoramaOverlay.unbind('end', endFunction, self);       self.resumePlayers(playersPaused, true);       self.resumeGlobalAudios();   };   var setCloseButtonPosition = function() {       var right = 10;       var top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   this.MainViewer.set('toolTipEnabled', false);   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(true);   this.pauseGlobalAudios();   popupPanoramaOverlay.bind('end', endFunction, this, true);   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){    var changeFunction = function(){       var index = playList.get('selectedIndex');       if(index >= 0){           var beginFunction = function(){               playListItem.unbind('begin', beginFunction);               setMediaLabel(index);           };           var setMediaLabel = function(index){               var media = playListItem.get('media');               var text = media.get('data');               if(!text)                   text = media.get('label');               setHtml(text);           };           var setHtml = function(text){               if(text !== undefined)                   htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>');               else                   htmlText.set('html', '');           };           var playListItem = playList.get('items')[index];           if(htmlText.get('html')){               setHtml('Loading...');               playListItem.bind('begin', beginFunction);           }           else{               setMediaLabel(index);           }       }   };   var disposeFunction = function(){       htmlText.set('html', undefined);       playList.unbind('change', changeFunction, this);       playListItemStopToDispose.unbind('stop', disposeFunction, this);   };   if(playListItemStopToDispose){       playListItemStopToDispose.bind('stop', disposeFunction, this);   }   playList.bind('change', changeFunction, this);   changeFunction(); },
  "getKey": function(key){    return window[key]; },
  "pauseGlobalAudios": function(caller){    var audios = window.currentGlobalAudios;   window.currentGlobalAudiosActionCaller = caller;   if(!audios) return;   for(var audio in audios){       audios[audio].pause();   } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){    var resetFunction = function(){       panoramaPlayListItem.unbind('stop', resetFunction, this);       player.set('mapPlayer', null);   };   panoramaPlayListItem.bind('stop', resetFunction, this);   var player = panoramaPlayListItem.get('player');   player.set('mapPlayer', mapPlayer); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){    this.unregisterKey('visibility_'+component.get('id'));   var changeVisibility = function(){        if(effect && propertyEffect){            component.set(propertyEffect, effect);        }        component.set('visible', visible);       if(component.get('class') == 'ViewerArea'){           try{               if(visible) component.restart();               else        component.pause();           }           catch(e){};       }   };   var effectTimeoutName = 'effectTimeout_'+component.get('id');   if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){       var effectTimeout = window[effectTimeoutName];       if(effectTimeout instanceof Array){           for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) }       }else{           clearTimeout(effectTimeout);       }       delete window[effectTimeoutName];   }   else if(visible == component.get('visible') && !ignoreClearTimeout)       return;   if(applyAt && applyAt > 0){       var effectTimeout = setTimeout(function(){            if(window[effectTimeoutName] instanceof Array) {                var arrayTimeoutVal = window[effectTimeoutName];               var index = arrayTimeoutVal.indexOf(effectTimeout);               arrayTimeoutVal.splice(index, 1);               if(arrayTimeoutVal.length == 0){                   delete window[effectTimeoutName];               }           }else{               delete window[effectTimeoutName];            }           changeVisibility();        }, applyAt);       if(window.hasOwnProperty(effectTimeoutName)){           window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout];       }else{           window[effectTimeoutName] = effectTimeout;       }   }   else{       changeVisibility();   } },
  "getPlayListWithMedia": function(media, onlySelected){    var playLists = this.getByClassName('PlayList');   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       if(onlySelected && playList.get('selectedIndex') == -1)           continue;       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           if(items[j].get('media') == media)               return playList;       }   }   return undefined; }
 },
 "paddingLeft": 0,
 "contentOpaque": false,
 "borderRadius": 0,
 "width": "100%",
 "shadow": false,
 "height": "100%",
 "verticalAlign": "top",
 "backgroundPreloadEnabled": true,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "class": "Player",
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "minWidth": 20,
 "mouseWheelEnabled": true,
 "overflow": "visible",
 "gap": 10,
 "id": "rootPlayer",
 "minHeight": 20,
 "layout": "absolute"
})