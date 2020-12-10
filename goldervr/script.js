TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMax": 100,
  "class": "Panorama",
  "partial": false,
  "label": "Front View",
  "hfovMin": 60,
  "id": "panorama_41ED3FA8_49B8_434B_41C4_B64EF257C1E3",
  "hfov": 360,
  "thumbnailUrl": "media/panorama_41ED3FA8_49B8_434B_41C4_B64EF257C1E3_t.jpg",
  "vfov": 180,
  "pitch": 0,
  "frames": [
   {
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_41ED3FA8_49B8_434B_41C4_B64EF257C1E3_r_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_41ED3FA8_49B8_434B_41C4_B64EF257C1E3_r.jpeg",
       "height": 1273,
       "class": "ImageResourceLevel",
       "width": 1273
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_41ED3FA8_49B8_434B_41C4_B64EF257C1E3_f_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_41ED3FA8_49B8_434B_41C4_B64EF257C1E3_f.jpeg",
       "height": 1273,
       "class": "ImageResourceLevel",
       "width": 1273
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_41ED3FA8_49B8_434B_41C4_B64EF257C1E3_b_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_41ED3FA8_49B8_434B_41C4_B64EF257C1E3_b.jpeg",
       "height": 1273,
       "class": "ImageResourceLevel",
       "width": 1273
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_41ED3FA8_49B8_434B_41C4_B64EF257C1E3_u_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_41ED3FA8_49B8_434B_41C4_B64EF257C1E3_u.jpeg",
       "height": 1273,
       "class": "ImageResourceLevel",
       "width": 1273
      }
     ]
    },
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_41ED7FA8_49B8_434B_41CF_6F490A69C51A",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_41ED3FA8_49B8_434B_41C4_B64EF257C1E3_0_HS_21_0.png",
           "height": 18,
           "class": "ImageResourceLevel",
           "width": 22
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 1.35,
        "pitch": 3.48,
        "yaw": 2.26
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "toolTip": "Celebrating 60 Years of Excellence",
        "mapColor": "#FF0000",
        "click": "var newWindow = window.open(\"https://www.youtube.com/watch?v=LouAbxh6W48\", \"_blank\"); newWindow.focus()",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_41ED3FA8_49B8_434B_41C4_B64EF257C1E3_0_HS_21_0_0_map.gif",
           "height": 9,
           "class": "ImageResourceLevel",
           "width": 11
          }
         ]
        },
        "pitch": 3.48,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 2.26,
        "hfov": 1.35
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_44704CE7_4A59_C6C5_41D2_16B9EE8C2296",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_41ED3FA8_49B8_434B_41C4_B64EF257C1E3_0_HS_28_0.png",
           "height": 25,
           "class": "ImageResourceLevel",
           "width": 86
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 5.19,
        "roll": 0,
        "pitch": 5.76,
        "yaw": -15.17
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "toolTip": "Home",
        "mapColor": "#FF0000",
        "click": "var newWindow = window.open(\"https://www.golder.com/\", \"_blank\"); newWindow.focus()",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_41ED3FA8_49B8_434B_41C4_B64EF257C1E3_0_HS_28_1_0_map.gif",
           "height": 12,
           "class": "ImageResourceLevel",
           "width": 43
          }
         ]
        },
        "pitch": 5.76,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -15.17,
        "hfov": 5.19
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_4425F110_4A58_DF5B_41C6_897AD1A26FD9",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_41ED3FA8_49B8_434B_41C4_B64EF257C1E3_0_HS_27_0.png",
           "height": 37,
           "class": "ImageResourceLevel",
           "width": 37
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 2.25,
        "pitch": 0.87,
        "yaw": -4.8
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "toolTip": "Login",
        "mapColor": "#FF0000",
        "click": "this.showPopupMedia(this.window_444618F4_4A48_4EDA_4194_764364817499, this.album_43321314_49D8_C35B_41A9_8BC9F257F2B0, this.playList_5A5FB793_4A48_C35D_419B_76E36238C524, '50%', '50%', false, false); this.playList_5A5FB793_4A48_C35D_419B_76E36238C524.set('selectedIndex', 0); ",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_41ED3FA8_49B8_434B_41C4_B64EF257C1E3_0_HS_27_0_0_map.gif",
           "height": 18,
           "class": "ImageResourceLevel",
           "width": 18
          }
         ]
        },
        "pitch": 0.87,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -4.8,
        "hfov": 2.25
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_4453A8C2_4A48_CD3E_41B8_6925B9E745FB",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_41ED3FA8_49B8_434B_41C4_B64EF257C1E3_0_HS_26_0.png",
           "height": 31,
           "class": "ImageResourceLevel",
           "width": 14
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 0.86,
        "roll": 0,
        "pitch": -1.72,
        "yaw": -16.99
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "toolTip": "Power Sector\u000aServices",
        "mapColor": "#FF0000",
        "click": "var newWindow = window.open(\"files/710_BR2_18_MIS_Power_Sector_Services_externalprint.pdf\", \"_blank\"); newWindow.focus()",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_41ED3FA8_49B8_434B_41C4_B64EF257C1E3_0_HS_26_1_0_map.gif",
           "height": 15,
           "class": "ImageResourceLevel",
           "width": 7
          }
         ]
        },
        "pitch": -1.72,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -16.99,
        "hfov": 0.86
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_44B9BB8E_4A4B_C347_41C7_7426C0598C19",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_41ED3FA8_49B8_434B_41C4_B64EF257C1E3_0_HS_25_0.png",
           "height": 35,
           "class": "ImageResourceLevel",
           "width": 14
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 0.86,
        "roll": 0,
        "pitch": -1.8,
        "yaw": -18.19
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "toolTip": "Coal Combustion\u000aResidual\u000aManagement",
        "mapColor": "#FF0000",
        "click": "var newWindow = window.open(\"files/709_BR2_18_MIS_CCRM_externalprint.pdf\", \"_blank\"); newWindow.focus()",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_41ED3FA8_49B8_434B_41C4_B64EF257C1E3_0_HS_25_1_0_map.gif",
           "height": 17,
           "class": "ImageResourceLevel",
           "width": 7
          }
         ]
        },
        "pitch": -1.8,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -18.19,
        "hfov": 0.86
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_4416AF65_4A48_43FA_41B5_B8DC638299E5",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_41ED3FA8_49B8_434B_41C4_B64EF257C1E3_0_HS_24_0.png",
           "height": 37,
           "class": "ImageResourceLevel",
           "width": 25
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 1.55,
        "roll": 0,
        "pitch": -1.93,
        "yaw": -19.61
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "toolTip": "Fractured and\u000aUnconventional\u000aReservoirs",
        "mapColor": "#FF0000",
        "click": "var newWindow = window.open(\"files/764 - FracMan - Fractured and Unconventional Reservoirs_Email.pdf\", \"_blank\"); newWindow.focus()",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_41ED3FA8_49B8_434B_41C4_B64EF257C1E3_0_HS_24_1_0_map.gif",
           "height": 18,
           "class": "ImageResourceLevel",
           "width": 12
          }
         ]
        },
        "pitch": -1.93,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -19.61,
        "hfov": 1.55
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_47F76FD0_4A48_42DB_41C8_AB7976E1E628",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_41ED3FA8_49B8_434B_41C4_B64EF257C1E3_0_HS_23_0.png",
           "height": 22,
           "class": "ImageResourceLevel",
           "width": 21
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 1.28,
        "pitch": 5,
        "yaw": 8.99
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "toolTip": "Integrated Solutions for\u000aCoal Ash",
        "mapColor": "#FF0000",
        "click": "this.showPopupMedia(this.window_47F4257E_4A48_47C7_41C9_A2D3B9E74888, this.album_42B9972D_49C8_4345_41C8_9E7E49A96BD0, this.playList_5A5D579C_4A48_C34B_41B0_4CFF4F43FE97, '90%', '90%', false, false); this.playList_5A5D579C_4A48_C34B_41B0_4CFF4F43FE97.set('selectedIndex', 0); ",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_41ED3FA8_49B8_434B_41C4_B64EF257C1E3_0_HS_23_0_0_map.gif",
           "height": 11,
           "class": "ImageResourceLevel",
           "width": 10
          }
         ]
        },
        "pitch": 5,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 8.99,
        "hfov": 1.28
       }
      ]
     }
    ],
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_41ED3FA8_49B8_434B_41C4_B64EF257C1E3_d_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_41ED3FA8_49B8_434B_41C4_B64EF257C1E3_d.jpeg",
       "height": 1273,
       "class": "ImageResourceLevel",
       "width": 1273
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_41ED3FA8_49B8_434B_41C4_B64EF257C1E3_l_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_41ED3FA8_49B8_434B_41C4_B64EF257C1E3_l.jpeg",
       "height": 1273,
       "class": "ImageResourceLevel",
       "width": 1273
      }
     ]
    },
    "thumbnailUrl": "media/panorama_41ED3FA8_49B8_434B_41C4_B64EF257C1E3_t.jpg"
   }
  ]
 },
 {
  "viewerArea": "this.MainViewer",
  "class": "PanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true,
  "mouseControlMode": "drag_rotation",
  "displayPlaybackBar": true,
  "id": "MainViewerPanoramaPlayer",
  "preloadEnabled": false,
  "touchControlMode": "drag_rotation"
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": []
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0.58,
   "class": "PanoramaCameraPosition",
   "hfov": 80,
   "yaw": -1.71
  },
  "id": "panorama_41ED3FA8_49B8_434B_41C4_B64EF257C1E3_camera"
 },
 {
  "hfovMax": 120,
  "class": "Panorama",
  "partial": false,
  "label": "Meeting Space",
  "hfovMin": 60,
  "id": "panorama_413BA399_49B8_434D_41C8_ECC90FB0889F",
  "hfov": 360,
  "thumbnailUrl": "media/panorama_413BA399_49B8_434D_41C8_ECC90FB0889F_t.jpg",
  "vfov": 180,
  "pitch": 0,
  "frames": [
   {
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_413BA399_49B8_434D_41C8_ECC90FB0889F_r_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_413BA399_49B8_434D_41C8_ECC90FB0889F_r.jpeg",
       "height": 1273,
       "class": "ImageResourceLevel",
       "width": 1273
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_413BA399_49B8_434D_41C8_ECC90FB0889F_f_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_413BA399_49B8_434D_41C8_ECC90FB0889F_f.jpeg",
       "height": 1273,
       "class": "ImageResourceLevel",
       "width": 1273
      }
     ]
    },
    "class": "CubicPanoramaFrame",
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_413BA399_49B8_434D_41C8_ECC90FB0889F_b_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_413BA399_49B8_434D_41C8_ECC90FB0889F_b.jpeg",
       "height": 1273,
       "class": "ImageResourceLevel",
       "width": 1273
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_413BA399_49B8_434D_41C8_ECC90FB0889F_u_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_413BA399_49B8_434D_41C8_ECC90FB0889F_u.jpeg",
       "height": 1273,
       "class": "ImageResourceLevel",
       "width": 1273
      }
     ]
    },
    "overlays": [
     {
      "showDuration": 500,
      "class": "PopupPanoramaOverlay",
      "popupMaxWidth": "95%",
      "yaw": 19.48,
      "rotationX": 0,
      "rotationY": 0,
      "hideEasing": "cubic_out",
      "showEasing": "cubic_in",
      "rotationZ": 0,
      "id": "popup_413BC399_49B8_434D_41CC_5BF8F1E87ED6",
      "hideDuration": 500,
      "hfov": 16.61,
      "loop": false,
      "pitch": 4.11,
      "popupMaxHeight": "95%",
      "video": {
       "height": 20,
       "class": "VideoResource",
       "mp4Url": "media/video_3EA322E9_3665_3B38_41C2_ABCBF276389C.mp4",
       "width": 10
      },
      "autoplay": true
     },
     {
      "showDuration": 500,
      "class": "PopupPanoramaOverlay",
      "popupMaxWidth": "100%",
      "yaw": 19.48,
      "rotationX": 0,
      "rotationY": 0,
      "hideEasing": "cubic_out",
      "showEasing": "cubic_in",
      "rotationZ": 0,
      "id": "popup_413B139A_49B8_434F_41C8_E441197F5D5C",
      "hideDuration": 500,
      "hfov": 16.61,
      "loop": false,
      "pitch": 4.11,
      "popupMaxHeight": "100%",
      "video": {
       "height": 20,
       "class": "VideoResource",
       "mp4Url": "media/video_3D24018C_366A_D9F8_41C6_C00810A27035.mp4",
       "width": 10
      },
      "autoplay": true
     },
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_413B039A_49B8_434F_41A4_085AF745AB9E",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_413BA399_49B8_434D_41C8_ECC90FB0889F_0_HS_15_0.png",
           "height": 30,
           "class": "ImageResourceLevel",
           "width": 30
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 1.78,
        "pitch": 8.71,
        "yaw": 25.57
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "toolTip": "Our Work",
        "mapColor": "#FF0000",
        "click": "var newWindow = window.open(\"https://www.golder.com/projects/\", \"_blank\"); newWindow.focus()",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_413BA399_49B8_434D_41C8_ECC90FB0889F_0_HS_15_0_0_map.gif",
           "height": 15,
           "class": "ImageResourceLevel",
           "width": 15
          }
         ]
        },
        "pitch": 8.71,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 25.57,
        "hfov": 1.78
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_413B339A_49B8_434F_41C3_2C3DBBCDD17A",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_413BA399_49B8_434D_41C8_ECC90FB0889F_0_HS_14_0.png",
           "height": 30,
           "class": "ImageResourceLevel",
           "width": 30
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 1.8,
        "pitch": 0.78,
        "yaw": 25.33
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "toolTip": "Underground Drones Exploring\u000aAbandoned Mines",
        "mapColor": "#FF0000",
        "click": "var newWindow = window.open(\"https://www.youtube.com/watch?v=N0IeR42P09A\", \"_blank\"); newWindow.focus()",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_413BA399_49B8_434D_41C8_ECC90FB0889F_0_HS_14_0_0_map.gif",
           "height": 15,
           "class": "ImageResourceLevel",
           "width": 15
          }
         ]
        },
        "pitch": 0.78,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 25.33,
        "hfov": 1.8
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_413B539A_49B8_434F_41CE_DB986D46C58A",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_413BA399_49B8_434D_41C8_ECC90FB0889F_0_HS_13_0.png",
           "height": 37,
           "class": "ImageResourceLevel",
           "width": 45
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 2.67,
        "pitch": 7.91,
        "yaw": -1.64
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "toolTip": "Celebrating 60 Years of Excellence",
        "mapColor": "#FF0000",
        "click": "var newWindow = window.open(\"https://www.youtube.com/watch?v=LouAbxh6W48\", \"_blank\"); newWindow.focus()",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_413BA399_49B8_434D_41C8_ECC90FB0889F_0_HS_13_0_0_map.gif",
           "height": 18,
           "class": "ImageResourceLevel",
           "width": 22
          }
         ]
        },
        "pitch": 7.91,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -1.64,
        "hfov": 2.67
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_401CDA67_49B8_CDC5_41B4_B11892482ED2",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_413BA399_49B8_434D_41C8_ECC90FB0889F_0_HS_19_0.png",
           "height": 54,
           "class": "ImageResourceLevel",
           "width": 18
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 1.12,
        "roll": 0,
        "pitch": -0.84,
        "yaw": -39.95
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "toolTip": "Fractured and\u000aUnconventional\u000aReservoirs",
        "mapColor": "#FF0000",
        "click": "var newWindow = window.open(\"files/764 - FracMan - Fractured and Unconventional Reservoirs_Email.pdf\", \"_blank\"); newWindow.focus()",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_413BA399_49B8_434D_41C8_ECC90FB0889F_0_HS_19_1_0_map.gif",
           "height": 27,
           "class": "ImageResourceLevel",
           "width": 9
          }
         ]
        },
        "pitch": -0.84,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -39.95,
        "hfov": 1.12
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_43B8FF8E_49B8_4347_41A2_1487052CC71A",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_413BA399_49B8_434D_41C8_ECC90FB0889F_0_HS_18_0.png",
           "height": 50,
           "class": "ImageResourceLevel",
           "width": 22
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 1.35,
        "roll": 0,
        "pitch": -0.83,
        "yaw": -36.27
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "toolTip": "Coal Combustion\u000aResidual\u000aManagement",
        "mapColor": "#FF0000",
        "click": "var newWindow = window.open(\"files/709_BR2_18_MIS_CCRM_externalprint.pdf\", \"_blank\"); newWindow.focus()",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_413BA399_49B8_434D_41C8_ECC90FB0889F_0_HS_18_1_0_map.gif",
           "height": 25,
           "class": "ImageResourceLevel",
           "width": 11
          }
         ]
        },
        "pitch": -0.83,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -36.27,
        "hfov": 1.35
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_43AE7F55_49C8_43C5_41A5_FF7F2571C9F8",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_413BA399_49B8_434D_41C8_ECC90FB0889F_0_HS_17_0.png",
           "height": 45,
           "class": "ImageResourceLevel",
           "width": 20
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 1.24,
        "roll": 0,
        "pitch": -0.91,
        "yaw": -32.66
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "toolTip": "Power Sector\u000aServices",
        "mapColor": "#FF0000",
        "click": "var newWindow = window.open(\"files/710_BR2_18_MIS_Power_Sector_Services_externalprint.pdf\", \"_blank\"); newWindow.focus()",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_413BA399_49B8_434D_41C8_ECC90FB0889F_0_HS_17_1_0_map.gif",
           "height": 22,
           "class": "ImageResourceLevel",
           "width": 10
          }
         ]
        },
        "pitch": -0.91,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -32.66,
        "hfov": 1.24
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_43CE4133_49C8_3F5C_41B3_E6C2F749A35F",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_413BA399_49B8_434D_41C8_ECC90FB0889F_0_HS_16_0.png",
           "height": 52,
           "class": "ImageResourceLevel",
           "width": 52
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 3.15,
        "pitch": 2.78,
        "yaw": -26.71
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "toolTip": "Login",
        "mapColor": "#FF0000",
        "click": "this.showPopupMedia(this.window_42DC226D_49D8_5DC5_41AB_B28FA7045B54, this.album_43321314_49D8_C35B_41A9_8BC9F257F2B0, this.playList_45F5F97A_49D8_4FCF_41D2_59D4064DA759, '50%', '50%', false, false); this.playList_45F5F97A_49D8_4FCF_41D2_59D4064DA759.set('selectedIndex', 0); ",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_413BA399_49B8_434D_41C8_ECC90FB0889F_0_HS_16_0_0_map.gif",
           "height": 26,
           "class": "ImageResourceLevel",
           "width": 26
          }
         ]
        },
        "pitch": 2.78,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -26.71,
        "hfov": 3.15
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_425D9252_49C8_5DDF_41BD_7B2C4747F820",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_413BA399_49B8_434D_41C8_ECC90FB0889F_0_HS_24_0.png",
           "height": 33,
           "class": "ImageResourceLevel",
           "width": 37
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 2.2,
        "pitch": 11.48,
        "yaw": 9.38
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "toolTip": "Integrated Solutions for\u000aCoal Ash",
        "mapColor": "#FF0000",
        "click": "this.showPopupMedia(this.window_45CF86E9_49C8_42CD_41B5_9017C42F7245, this.album_42B9972D_49C8_4345_41C8_9E7E49A96BD0, this.playList_5A5BE7A0_4A48_C37B_41B2_351C24ADFE79, '90%', '90%', false, false); this.playList_5A5BE7A0_4A48_C37B_41B2_351C24ADFE79.set('selectedIndex', 0); ",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_413BA399_49B8_434D_41C8_ECC90FB0889F_0_HS_24_0_0_map.gif",
           "height": 16,
           "class": "ImageResourceLevel",
           "width": 18
          }
         ]
        },
        "pitch": 11.48,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 9.38,
        "hfov": 2.2
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_47EDE3AD_4A48_4345_41CF_9A9B17BCEE44",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_413BA399_49B8_434D_41C8_ECC90FB0889F_0_HS_23_0.png",
           "height": 30,
           "class": "ImageResourceLevel",
           "width": 30
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 1.79,
        "pitch": 6.28,
        "yaw": 25.5
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "toolTip": "Protecting Surface Water and\u000aGroundwater",
        "mapColor": "#FF0000",
        "click": "var newWindow = window.open(\"https://www.golder.com/insights/protecting-surface-water-and-groundwater-from-coal-combustion-waste-through-paste-technology/\", \"_blank\"); newWindow.focus()",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_413BA399_49B8_434D_41C8_ECC90FB0889F_0_HS_23_0_0_map.gif",
           "height": 15,
           "class": "ImageResourceLevel",
           "width": 15
          }
         ]
        },
        "pitch": 6.28,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 25.5,
        "hfov": 1.79
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_47F5DD96_4A48_4747_41B9_D6CCAD7652D9",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_413BA399_49B8_434D_41C8_ECC90FB0889F_0_HS_22_0.png",
           "height": 30,
           "class": "ImageResourceLevel",
           "width": 30
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 1.8,
        "pitch": 3.49,
        "yaw": 25.48
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "toolTip": "Accessing Human Health Risks",
        "mapColor": "#FF0000",
        "click": "var newWindow = window.open(\"https://www.golder.com/project/assessing-human-health-risks-at-a-fly-ash-storage-facility-in-indonesia/\", \"_blank\"); newWindow.focus()",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_413BA399_49B8_434D_41C8_ECC90FB0889F_0_HS_22_0_0_map.gif",
           "height": 15,
           "class": "ImageResourceLevel",
           "width": 15
          }
         ]
        },
        "pitch": 3.49,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 25.48,
        "hfov": 1.8
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_47DD498E_4A58_4F47_417B_CE575EE96309",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_413BA399_49B8_434D_41C8_ECC90FB0889F_0_HS_21_0.png",
           "height": 55,
           "class": "ImageResourceLevel",
           "width": 57
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 3.4,
        "pitch": -8.39,
        "yaw": 15.7
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "toolTip": "Join Our Meeting",
        "mapColor": "#FF0000",
        "click": "var newWindow = window.open(\"https://zoom.us/meetings\", \"_blank\"); newWindow.focus()",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_413BA399_49B8_434D_41C8_ECC90FB0889F_0_HS_21_0_0_map.gif",
           "height": 27,
           "class": "ImageResourceLevel",
           "width": 28
          }
         ]
        },
        "pitch": -8.39,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 15.7,
        "hfov": 3.4
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_441D0EDE_4A59_C2C7_41C2_7B1B190CD5D3",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_413BA399_49B8_434D_41C8_ECC90FB0889F_0_HS_20_0.png",
           "height": 46,
           "class": "ImageResourceLevel",
           "width": 81
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 4.87,
        "roll": 0,
        "pitch": 8.9,
        "yaw": -21.32
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "toolTip": "Home",
        "mapColor": "#FF0000",
        "click": "var newWindow = window.open(\"https://www.golder.com/\", \"_blank\"); newWindow.focus()",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_413BA399_49B8_434D_41C8_ECC90FB0889F_0_HS_20_1_0_map.gif",
           "height": 23,
           "class": "ImageResourceLevel",
           "width": 40
          }
         ]
        },
        "pitch": 8.9,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -21.32,
        "hfov": 4.87
       }
      ]
     }
    ],
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_413BA399_49B8_434D_41C8_ECC90FB0889F_d_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_413BA399_49B8_434D_41C8_ECC90FB0889F_d.jpeg",
       "height": 1273,
       "class": "ImageResourceLevel",
       "width": 1273
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_413BA399_49B8_434D_41C8_ECC90FB0889F_l_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_413BA399_49B8_434D_41C8_ECC90FB0889F_l.jpeg",
       "height": 1273,
       "class": "ImageResourceLevel",
       "width": 1273
      }
     ]
    },
    "thumbnailUrl": "media/panorama_413BA399_49B8_434D_41C8_ECC90FB0889F_t.jpg"
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
  "id": "panorama_413BA399_49B8_434D_41C8_ECC90FB0889F_camera"
 },
 {
  "class": "PhotoAlbum",
  "label": "Photo Album Login",
  "id": "album_43321314_49D8_C35B_41A9_8BC9F257F2B0",
  "thumbnailUrl": "media/album_43321314_49D8_C35B_41A9_8BC9F257F2B0_t.png",
  "playList": {
   "items": [
    {
     "media": {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_43321314_49D8_C35B_41A9_8BC9F257F2B0_0.png"
        }
       ]
      },
      "class": "Photo",
      "label": "login",
      "width": 522,
      "height": 427,
      "thumbnailUrl": "media/album_43321314_49D8_C35B_41A9_8BC9F257F2B0_0_t.png",
      "id": "album_43321314_49D8_C35B_41A9_8BC9F257F2B0_0",
      "duration": 5000
     },
     "camera": {
      "class": "PhotoCamera",
      "scaleMode": "fit_inside"
     },
     "class": "PhotoPlayListItem"
    }
   ],
   "class": "PhotoPlayList",
   "id": "album_43321314_49D8_C35B_41A9_8BC9F257F2B0_AlbumPlayList"
  }
 },
 {
  "viewerArea": "this.MainViewer",
  "class": "PhotoAlbumPlayer",
  "id": "MainViewerPhotoAlbumPlayer"
 },
 "this.album_43321314_49D8_C35B_41A9_8BC9F257F2B0_0",
 {
  "class": "PhotoAlbum",
  "label": "Photo Album Popup Banner",
  "id": "album_42B9972D_49C8_4345_41C8_9E7E49A96BD0",
  "thumbnailUrl": "media/album_42B9972D_49C8_4345_41C8_9E7E49A96BD0_t.png",
  "playList": {
   "items": [
    {
     "media": {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/album_42B9972D_49C8_4345_41C8_9E7E49A96BD0_0.jpg"
        }
       ]
      },
      "class": "Photo",
      "label": "bannerpopup",
      "width": 631,
      "height": 1650,
      "thumbnailUrl": "media/album_42B9972D_49C8_4345_41C8_9E7E49A96BD0_0_t.jpg",
      "id": "album_42B9972D_49C8_4345_41C8_9E7E49A96BD0_0",
      "duration": 5000
     },
     "camera": {
      "class": "PhotoCamera",
      "scaleMode": "fit_inside"
     },
     "class": "PhotoPlayListItem"
    }
   ],
   "class": "PhotoPlayList",
   "id": "album_42B9972D_49C8_4345_41C8_9E7E49A96BD0_AlbumPlayList"
  }
 },
 "this.album_42B9972D_49C8_4345_41C8_9E7E49A96BD0_0",
 {
  "items": [
   {
    "media": "this.panorama_41ED3FA8_49B8_434B_41C4_B64EF257C1E3",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "camera": "this.panorama_41ED3FA8_49B8_434B_41C4_B64EF257C1E3_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_413BA399_49B8_434D_41C8_ECC90FB0889F",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "camera": "this.panorama_413BA399_49B8_434D_41C8_ECC90FB0889F_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.album_43321314_49D8_C35B_41A9_8BC9F257F2B0",
    "class": "PhotoAlbumPlayListItem",
    "player": "this.MainViewerPhotoAlbumPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "media": "this.album_42B9972D_49C8_4345_41C8_9E7E49A96BD0",
    "class": "PhotoAlbumPlayListItem",
    "player": "this.MainViewerPhotoAlbumPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 0)"
   }
  ],
  "class": "PlayList",
  "id": "mainPlayList"
 },
 {
  "items": [
   {
    "media": "this.panorama_41ED3FA8_49B8_434B_41C4_B64EF257C1E3",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_0C8220F3_0217_7925_4177_A3813F3BC9BA, 0, 1)",
    "camera": "this.panorama_41ED3FA8_49B8_434B_41C4_B64EF257C1E3_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_413BA399_49B8_434D_41C8_ECC90FB0889F",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_0C8220F3_0217_7925_4177_A3813F3BC9BA, 1, 2)",
    "camera": "this.panorama_413BA399_49B8_434D_41C8_ECC90FB0889F_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.album_43321314_49D8_C35B_41A9_8BC9F257F2B0",
    "class": "PhotoAlbumPlayListItem",
    "player": "this.MainViewerPhotoAlbumPlayer",
    "begin": "this.setEndToItemIndex(this.playList_0C8220F3_0217_7925_4177_A3813F3BC9BA, 2, 3)"
   },
   {
    "media": "this.album_42B9972D_49C8_4345_41C8_9E7E49A96BD0",
    "class": "PhotoAlbumPlayListItem",
    "player": "this.MainViewerPhotoAlbumPlayer",
    "begin": "this.setEndToItemIndex(this.playList_0C8220F3_0217_7925_4177_A3813F3BC9BA, 3, 0)"
   }
  ],
  "class": "PlayList",
  "id": "playList_0C8220F3_0217_7925_4177_A3813F3BC9BA"
 },
 {
  "items": [
   {
    "media": "this.album_43321314_49D8_C35B_41A9_8BC9F257F2B0",
    "class": "PhotoAlbumPlayListItem",
    "begin": "this.updateMediaLabelFromPlayList(this.album_43321314_49D8_C35B_41A9_8BC9F257F2B0_AlbumPlayList, this.htmltext_58B4891D_4A78_4F45_41A3_6D5FC24BA660, this.albumitem_5A5C4793_4A48_C35D_41CD_B5FE5C8024EC); this.loopAlbum(this.playList_5A5FB793_4A48_C35D_419B_76E36238C524, 0)",
    "id": "albumitem_5A5C4793_4A48_C35D_41CD_B5FE5C8024EC",
    "player": {
     "viewerArea": {
      "borderRadius": 0,
      "toolTipTextShadowColor": "#000000",
      "progressLeft": 0,
      "playbackBarProgressOpacity": 1,
      "playbackBarHeadBorderColor": "#000000",
      "toolTipFontSize": 12,
      "toolTipPaddingBottom": 4,
      "minHeight": 50,
      "toolTipOpacity": 1,
      "playbackBarBackgroundOpacity": 1,
      "toolTipShadowVerticalLength": 0,
      "playbackBarBorderSize": 0,
      "paddingLeft": 0,
      "toolTipShadowOpacity": 1,
      "minWidth": 100,
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
      "shadow": false,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadShadowHorizontalLength": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "progressBarOpacity": 1,
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
      "progressBackgroundColorDirection": "vertical",
      "height": "100%",
      "progressBorderSize": 0,
      "playbackBarBottom": 0,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "progressBorderColor": "#000000",
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarHeadShadowVerticalLength": 0,
      "progressBackgroundColor": [
       "#FFFFFF",
       "#000000"
      ],
      "id": "viewer_uid58BA791C_4A78_4F4B_41B0_3F04BA429B49",
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "paddingRight": 0,
      "toolTipShadowBlurRadius": 3,
      "playbackBarHeadShadowOpacity": 0.7,
      "toolTipShadowHorizontalLength": 0,
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
      "playbackBarProgressBorderRadius": 0,
      "playbackBarBorderRadius": 0,
      "toolTipFontStyle": "normal",
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "playbackBarProgressBorderColor": "#000000",
      "playbackBarHeadBorderRadius": 0
     },
     "class": "PhotoAlbumPlayer",
     "id": "viewer_uid5A5C6793_4A48_C35D_41A5_D2E81575E958PhotoAlbumPlayer"
    }
   }
  ],
  "class": "PlayList",
  "id": "playList_5A5FB793_4A48_C35D_419B_76E36238C524"
 },
 {
  "items": [
   {
    "media": "this.album_42B9972D_49C8_4345_41C8_9E7E49A96BD0",
    "class": "PhotoAlbumPlayListItem",
    "begin": "this.updateMediaLabelFromPlayList(this.album_42B9972D_49C8_4345_41C8_9E7E49A96BD0_AlbumPlayList, this.htmltext_58B7891F_4A78_4F45_41BD_75A7DBE648B3, this.albumitem_5A5D179C_4A48_C34B_41C6_DE8098214001); this.loopAlbum(this.playList_5A5D579C_4A48_C34B_41B0_4CFF4F43FE97, 0)",
    "id": "albumitem_5A5D179C_4A48_C34B_41C6_DE8098214001",
    "player": {
     "viewerArea": {
      "borderRadius": 0,
      "toolTipTextShadowColor": "#000000",
      "progressLeft": 0,
      "playbackBarProgressOpacity": 1,
      "playbackBarHeadBorderColor": "#000000",
      "toolTipFontSize": 12,
      "toolTipPaddingBottom": 4,
      "minHeight": 50,
      "toolTipOpacity": 1,
      "playbackBarBackgroundOpacity": 1,
      "toolTipShadowVerticalLength": 0,
      "playbackBarBorderSize": 0,
      "paddingLeft": 0,
      "toolTipShadowOpacity": 1,
      "minWidth": 100,
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
      "shadow": false,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadShadowHorizontalLength": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "progressBarOpacity": 1,
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
      "progressBackgroundColorDirection": "vertical",
      "height": "100%",
      "progressBorderSize": 0,
      "playbackBarBottom": 0,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "progressBorderColor": "#000000",
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarHeadShadowVerticalLength": 0,
      "progressBackgroundColor": [
       "#FFFFFF",
       "#000000"
      ],
      "id": "viewer_uid58B4391E_4A78_4F47_41D1_6702C34689BF",
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "paddingRight": 0,
      "toolTipShadowBlurRadius": 3,
      "playbackBarHeadShadowOpacity": 0.7,
      "toolTipShadowHorizontalLength": 0,
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
      "playbackBarProgressBorderRadius": 0,
      "playbackBarBorderRadius": 0,
      "toolTipFontStyle": "normal",
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "playbackBarProgressBorderColor": "#000000",
      "playbackBarHeadBorderRadius": 0
     },
     "class": "PhotoAlbumPlayer",
     "id": "viewer_uid5A5D379C_4A48_C34B_41C1_91BB3691980BPhotoAlbumPlayer"
    }
   }
  ],
  "class": "PlayList",
  "id": "playList_5A5D579C_4A48_C34B_41B0_4CFF4F43FE97"
 },
 {
  "items": [
   {
    "media": "this.album_43321314_49D8_C35B_41A9_8BC9F257F2B0",
    "class": "PhotoAlbumPlayListItem",
    "begin": "this.updateMediaLabelFromPlayList(this.album_43321314_49D8_C35B_41A9_8BC9F257F2B0_AlbumPlayList, this.htmltext_58B6D921_4A78_4F7D_41C5_06DA55C71206, this.albumitem_4588397C_49D8_4FCB_419A_89A4B6BBD5FA); this.loopAlbum(this.playList_45F5F97A_49D8_4FCF_41D2_59D4064DA759, 0)",
    "id": "albumitem_4588397C_49D8_4FCB_419A_89A4B6BBD5FA",
    "player": {
     "viewerArea": {
      "borderRadius": 0,
      "toolTipTextShadowColor": "#000000",
      "progressLeft": 0,
      "playbackBarProgressOpacity": 1,
      "playbackBarHeadBorderColor": "#000000",
      "toolTipFontSize": 12,
      "toolTipPaddingBottom": 4,
      "minHeight": 50,
      "toolTipOpacity": 1,
      "playbackBarBackgroundOpacity": 1,
      "toolTipShadowVerticalLength": 0,
      "playbackBarBorderSize": 0,
      "paddingLeft": 0,
      "toolTipShadowOpacity": 1,
      "minWidth": 100,
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
      "shadow": false,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadShadowHorizontalLength": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "progressBarOpacity": 1,
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
      "progressBackgroundColorDirection": "vertical",
      "height": "100%",
      "progressBorderSize": 0,
      "playbackBarBottom": 0,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "progressBorderColor": "#000000",
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarHeadShadowVerticalLength": 0,
      "progressBackgroundColor": [
       "#FFFFFF",
       "#000000"
      ],
      "id": "viewer_uid58B68921_4A78_4F7D_41A9_C2F62C43C68C",
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "paddingRight": 0,
      "toolTipShadowBlurRadius": 3,
      "playbackBarHeadShadowOpacity": 0.7,
      "toolTipShadowHorizontalLength": 0,
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
      "playbackBarProgressBorderRadius": 0,
      "playbackBarBorderRadius": 0,
      "toolTipFontStyle": "normal",
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "playbackBarProgressBorderColor": "#000000",
      "playbackBarHeadBorderRadius": 0
     },
     "class": "PhotoAlbumPlayer",
     "id": "viewer_uid458A097B_49D8_4FCD_41D1_54F90588C4B7PhotoAlbumPlayer"
    }
   }
  ],
  "class": "PlayList",
  "id": "playList_45F5F97A_49D8_4FCF_41D2_59D4064DA759"
 },
 {
  "items": [
   {
    "media": "this.album_42B9972D_49C8_4345_41C8_9E7E49A96BD0",
    "class": "PhotoAlbumPlayListItem",
    "begin": "this.updateMediaLabelFromPlayList(this.album_42B9972D_49C8_4345_41C8_9E7E49A96BD0_AlbumPlayList, this.htmltext_58B67923_4A78_4F7D_41C2_40612973E06F, this.albumitem_5A5BA7A0_4A48_C37B_41B7_6855FC701FDD); this.loopAlbum(this.playList_5A5BE7A0_4A48_C37B_41B2_351C24ADFE79, 0)",
    "id": "albumitem_5A5BA7A0_4A48_C37B_41B7_6855FC701FDD",
    "player": {
     "viewerArea": {
      "borderRadius": 0,
      "toolTipTextShadowColor": "#000000",
      "progressLeft": 0,
      "playbackBarProgressOpacity": 1,
      "playbackBarHeadBorderColor": "#000000",
      "toolTipFontSize": 12,
      "toolTipPaddingBottom": 4,
      "minHeight": 50,
      "toolTipOpacity": 1,
      "playbackBarBackgroundOpacity": 1,
      "toolTipShadowVerticalLength": 0,
      "playbackBarBorderSize": 0,
      "paddingLeft": 0,
      "toolTipShadowOpacity": 1,
      "minWidth": 100,
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
      "shadow": false,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "playbackBarHeadShadowHorizontalLength": 0,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "progressBarOpacity": 1,
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
      "progressBackgroundColorDirection": "vertical",
      "height": "100%",
      "progressBorderSize": 0,
      "playbackBarBottom": 0,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "progressBorderColor": "#000000",
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarHeadShadowVerticalLength": 0,
      "progressBackgroundColor": [
       "#FFFFFF",
       "#000000"
      ],
      "id": "viewer_uid58B64922_4A78_4F7F_41A6_45557CFA7194",
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "paddingRight": 0,
      "toolTipShadowBlurRadius": 3,
      "playbackBarHeadShadowOpacity": 0.7,
      "toolTipShadowHorizontalLength": 0,
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
      "playbackBarProgressBorderRadius": 0,
      "playbackBarBorderRadius": 0,
      "toolTipFontStyle": "normal",
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "playbackBarProgressBorderColor": "#000000",
      "playbackBarHeadBorderRadius": 0
     },
     "class": "PhotoAlbumPlayer",
     "id": "viewer_uid5A5BD7A0_4A48_C37B_41AE_0721679CAE0APhotoAlbumPlayer"
    }
   }
  ],
  "class": "PlayList",
  "id": "playList_5A5BE7A0_4A48_C37B_41B2_351C24ADFE79"
 },
 {
  "borderRadius": 5,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "titleFontWeight": "normal",
  "minHeight": 20,
  "titleFontStyle": "normal",
  "titleFontColor": "#000000",
  "closeButtonBorderRadius": 11,
  "paddingLeft": 0,
  "minWidth": 20,
  "scrollBarVisible": "rollOver",
  "scrollBarWidth": 10,
  "modal": true,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "scrollBarMargin": 2,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "headerBackgroundOpacity": 0,
  "closeButtonIconColor": "#B2B2B2",
  "verticalAlign": "middle",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "bodyBackgroundOpacity": 0,
  "closeButtonIconWidth": 20,
  "veilOpacity": 0.4,
  "shadow": true,
  "titleFontSize": 14,
  "layout": "vertical",
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowSpread": 1,
  "scrollBarColor": "#000000",
  "backgroundColorDirection": "vertical",
  "title": "Login",
  "close": "this.playList_5A5FB793_4A48_C35D_419B_76E36238C524.set('selectedIndex', -1);",
  "closeButtonPressedIconColor": "#FFFFFF",
  "paddingBottom": 0,
  "headerBorderSize": 0,
  "id": "window_444618F4_4A48_4EDA_4194_764364817499",
  "children": [
   {
    "horizontalAlign": "left",
    "contentOpaque": false,
    "children": [
     "this.viewer_uid58BA791C_4A78_4F4B_41B0_3F04BA429B49",
     {
      "horizontalAlign": "left",
      "children": [
       {
        "hideEffect": {
         "class": "FadeOutEffect",
         "duration": 250,
         "easing": "cubic_in_out"
        },
        "minHeight": 0,
        "showEffect": {
         "class": "FadeInEffect",
         "duration": 250,
         "easing": "cubic_in_out"
        },
        "paddingLeft": 10,
        "minWidth": 0,
        "borderSize": 0,
        "scrollBarWidth": 10,
        "html": "",
        "scrollBarVisible": "rollOver",
        "scrollBarMargin": 2,
        "class": "HTMLText",
        "paddingTop": 5,
        "shadow": false,
        "paddingBottom": 5,
        "scrollBarColor": "#000000",
        "scrollBarOpacity": 0.5,
        "backgroundColor": [
         "#000000"
        ],
        "backgroundOpacity": 0.7,
        "id": "htmltext_58B4891D_4A78_4F45_41A3_6D5FC24BA660",
        "width": "100%",
        "borderRadius": 0,
        "visible": false,
        "backgroundColorDirection": "vertical",
        "backgroundColorRatios": [
         0
        ],
        "paddingRight": 10
       }
      ],
      "minHeight": 20,
      "bottom": 0,
      "paddingLeft": 0,
      "minWidth": 20,
      "borderSize": 0,
      "scrollBarWidth": 7,
      "scrollBarVisible": "rollOver",
      "scrollBarMargin": 2,
      "class": "Container",
      "verticalAlign": "bottom",
      "overflow": "scroll",
      "paddingTop": 0,
      "shadow": false,
      "layout": "vertical",
      "left": 0,
      "paddingBottom": 0,
      "right": 0,
      "scrollBarColor": "#FFFFFF",
      "gap": 10,
      "scrollBarOpacity": 0.5,
      "backgroundColor": [],
      "backgroundOpacity": 0.3,
      "contentOpaque": true,
      "borderRadius": 0,
      "height": "30%",
      "backgroundColorDirection": "vertical",
      "backgroundColorRatios": [],
      "paddingRight": 0
     },
     {
      "hideEffect": {
       "class": "FadeOutEffect",
       "duration": 250,
       "easing": "cubic_in_out"
      },
      "horizontalAlign": "center",
      "minHeight": 0,
      "iconURL": "skin/album_left.png",
      "showEffect": {
       "class": "FadeInEffect",
       "duration": 250,
       "easing": "cubic_in_out"
      },
      "top": "45%",
      "borderSize": 0,
      "paddingLeft": 0,
      "minWidth": 0,
      "verticalAlign": "middle",
      "mode": "push",
      "class": "IconButton",
      "paddingTop": 0,
      "shadow": false,
      "transparencyActive": false,
      "click": "this.loadFromCurrentMediaPlayList(this.album_43321314_49D8_C35B_41A9_8BC9F257F2B0_AlbumPlayList, -1)",
      "left": 10,
      "paddingBottom": 0,
      "cursor": "hand",
      "backgroundOpacity": 0,
      "id": "component_58B4B91E_4A78_4F47_4189_34FBDB4F644C",
      "borderRadius": 0,
      "visible": false,
      "paddingRight": 0
     },
     {
      "hideEffect": {
       "class": "FadeOutEffect",
       "duration": 250,
       "easing": "cubic_in_out"
      },
      "horizontalAlign": "center",
      "minHeight": 0,
      "iconURL": "skin/album_right.png",
      "showEffect": {
       "class": "FadeInEffect",
       "duration": 250,
       "easing": "cubic_in_out"
      },
      "top": "45%",
      "borderSize": 0,
      "paddingLeft": 0,
      "minWidth": 0,
      "verticalAlign": "middle",
      "mode": "push",
      "class": "IconButton",
      "paddingTop": 0,
      "shadow": false,
      "transparencyActive": false,
      "click": "this.loadFromCurrentMediaPlayList(this.album_43321314_49D8_C35B_41A9_8BC9F257F2B0_AlbumPlayList, 1)",
      "cursor": "hand",
      "paddingBottom": 0,
      "right": 10,
      "backgroundOpacity": 0,
      "id": "component_58B4C91E_4A78_4F47_41D0_588F00D7CC94",
      "borderRadius": 0,
      "visible": false,
      "paddingRight": 0
     }
    ],
    "minHeight": 20,
    "rollOver": "this.showComponentsWhileMouseOver(this.container_58B5991C_4A78_4F4B_41CE_F2B5F8603C57, [this.htmltext_58B4891D_4A78_4F45_41A3_6D5FC24BA660,this.component_58B4B91E_4A78_4F47_4189_34FBDB4F644C,this.component_58B4C91E_4A78_4F47_41D0_588F00D7CC94], 2000)",
    "paddingLeft": 0,
    "minWidth": 20,
    "borderSize": 0,
    "scrollBarWidth": 10,
    "scrollBarVisible": "rollOver",
    "scrollBarMargin": 2,
    "class": "Container",
    "verticalAlign": "top",
    "overflow": "scroll",
    "paddingTop": 0,
    "shadow": false,
    "layout": "absolute",
    "paddingBottom": 0,
    "scrollBarColor": "#000000",
    "gap": 10,
    "scrollBarOpacity": 0.5,
    "backgroundColor": [],
    "backgroundOpacity": 0.3,
    "id": "container_58B5991C_4A78_4F4B_41CE_F2B5F8603C57",
    "width": "100%",
    "borderRadius": 0,
    "height": "100%",
    "backgroundColorDirection": "vertical",
    "backgroundColorRatios": [],
    "paddingRight": 0
   }
  ],
  "shadowBlurRadius": 6,
  "shadowColor": "#000000",
  "titlePaddingBottom": 5,
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "paddingRight": 0,
  "headerPaddingBottom": 5,
  "closeButtonIconLineWidth": 2,
  "closeButtonPressedBackgroundColor": [],
  "bodyPaddingRight": 0,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "titleFontFamily": "Arial",
  "closeButtonRollOverBackgroundColor": [],
  "headerPaddingTop": 10,
  "footerBackgroundOpacity": 0,
  "bodyBackgroundColorDirection": "vertical",
  "headerBorderColor": "#000000",
  "headerPaddingRight": 0,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "shadowVerticalLength": 0,
  "shadowOpacity": 0.5,
  "footerHeight": 5,
  "shadowHorizontalLength": 3,
  "bodyPaddingLeft": 0,
  "borderSize": 0,
  "titlePaddingLeft": 5,
  "bodyPaddingBottom": 0,
  "overflow": "scroll",
  "titlePaddingRight": 5,
  "class": "Window",
  "titleTextDecoration": "none",
  "paddingTop": 0,
  "headerBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "headerPaddingLeft": 10,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "footerBackgroundColorDirection": "vertical",
  "closeButtonPressedIconLineWidth": 3,
  "veilColorDirection": "horizontal",
  "closeButtonIconHeight": 20,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonBackgroundColorRatios": [],
  "closeButtonBackgroundColor": [],
  "gap": 10,
  "scrollBarOpacity": 0.5,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "backgroundColor": [],
  "horizontalAlign": "center",
  "contentOpaque": false,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "titlePaddingTop": 5,
  "headerVerticalAlign": "middle",
  "bodyPaddingTop": 0,
  "backgroundOpacity": 1,
  "backgroundColorRatios": []
 },
 {
  "borderRadius": 5,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "titleFontWeight": "normal",
  "minHeight": 20,
  "titleFontStyle": "normal",
  "titleFontColor": "#000000",
  "closeButtonBorderRadius": 11,
  "paddingLeft": 0,
  "minWidth": 20,
  "scrollBarVisible": "rollOver",
  "scrollBarWidth": 10,
  "modal": true,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "scrollBarMargin": 2,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "headerBackgroundOpacity": 0,
  "closeButtonIconColor": "#B2B2B2",
  "verticalAlign": "middle",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "bodyBackgroundOpacity": 0,
  "closeButtonIconWidth": 20,
  "veilOpacity": 0.4,
  "shadow": true,
  "titleFontSize": 14,
  "layout": "vertical",
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowSpread": 1,
  "scrollBarColor": "#000000",
  "backgroundColorDirection": "vertical",
  "title": "Integrated Solutions for Coal Ash",
  "close": "this.playList_5A5D579C_4A48_C34B_41B0_4CFF4F43FE97.set('selectedIndex', -1);",
  "closeButtonPressedIconColor": "#FFFFFF",
  "paddingBottom": 0,
  "headerBorderSize": 0,
  "id": "window_47F4257E_4A48_47C7_41C9_A2D3B9E74888",
  "children": [
   {
    "horizontalAlign": "left",
    "contentOpaque": false,
    "children": [
     "this.viewer_uid58B4391E_4A78_4F47_41D1_6702C34689BF",
     {
      "horizontalAlign": "left",
      "children": [
       {
        "hideEffect": {
         "class": "FadeOutEffect",
         "duration": 250,
         "easing": "cubic_in_out"
        },
        "minHeight": 0,
        "showEffect": {
         "class": "FadeInEffect",
         "duration": 250,
         "easing": "cubic_in_out"
        },
        "paddingLeft": 10,
        "minWidth": 0,
        "borderSize": 0,
        "scrollBarWidth": 10,
        "html": "",
        "scrollBarVisible": "rollOver",
        "scrollBarMargin": 2,
        "class": "HTMLText",
        "paddingTop": 5,
        "shadow": false,
        "paddingBottom": 5,
        "scrollBarColor": "#000000",
        "scrollBarOpacity": 0.5,
        "backgroundColor": [
         "#000000"
        ],
        "backgroundOpacity": 0.7,
        "id": "htmltext_58B7891F_4A78_4F45_41BD_75A7DBE648B3",
        "width": "100%",
        "borderRadius": 0,
        "visible": false,
        "backgroundColorDirection": "vertical",
        "backgroundColorRatios": [
         0
        ],
        "paddingRight": 10
       }
      ],
      "minHeight": 20,
      "bottom": 0,
      "paddingLeft": 0,
      "minWidth": 20,
      "borderSize": 0,
      "scrollBarWidth": 7,
      "scrollBarVisible": "rollOver",
      "scrollBarMargin": 2,
      "class": "Container",
      "verticalAlign": "bottom",
      "overflow": "scroll",
      "paddingTop": 0,
      "shadow": false,
      "layout": "vertical",
      "left": 0,
      "paddingBottom": 0,
      "right": 0,
      "scrollBarColor": "#FFFFFF",
      "gap": 10,
      "scrollBarOpacity": 0.5,
      "backgroundColor": [],
      "backgroundOpacity": 0.3,
      "contentOpaque": true,
      "borderRadius": 0,
      "height": "30%",
      "backgroundColorDirection": "vertical",
      "backgroundColorRatios": [],
      "paddingRight": 0
     },
     {
      "hideEffect": {
       "class": "FadeOutEffect",
       "duration": 250,
       "easing": "cubic_in_out"
      },
      "horizontalAlign": "center",
      "minHeight": 0,
      "iconURL": "skin/album_left.png",
      "showEffect": {
       "class": "FadeInEffect",
       "duration": 250,
       "easing": "cubic_in_out"
      },
      "top": "45%",
      "borderSize": 0,
      "paddingLeft": 0,
      "minWidth": 0,
      "verticalAlign": "middle",
      "mode": "push",
      "class": "IconButton",
      "paddingTop": 0,
      "shadow": false,
      "transparencyActive": false,
      "click": "this.loadFromCurrentMediaPlayList(this.album_42B9972D_49C8_4345_41C8_9E7E49A96BD0_AlbumPlayList, -1)",
      "left": 10,
      "paddingBottom": 0,
      "cursor": "hand",
      "backgroundOpacity": 0,
      "id": "component_58B7A920_4A78_4F7B_41CD_DFCB3CDDF736",
      "borderRadius": 0,
      "visible": false,
      "paddingRight": 0
     },
     {
      "hideEffect": {
       "class": "FadeOutEffect",
       "duration": 250,
       "easing": "cubic_in_out"
      },
      "horizontalAlign": "center",
      "minHeight": 0,
      "iconURL": "skin/album_right.png",
      "showEffect": {
       "class": "FadeInEffect",
       "duration": 250,
       "easing": "cubic_in_out"
      },
      "top": "45%",
      "borderSize": 0,
      "paddingLeft": 0,
      "minWidth": 0,
      "verticalAlign": "middle",
      "mode": "push",
      "class": "IconButton",
      "paddingTop": 0,
      "shadow": false,
      "transparencyActive": false,
      "click": "this.loadFromCurrentMediaPlayList(this.album_42B9972D_49C8_4345_41C8_9E7E49A96BD0_AlbumPlayList, 1)",
      "cursor": "hand",
      "paddingBottom": 0,
      "right": 10,
      "backgroundOpacity": 0,
      "id": "component_58B7B920_4A78_4F7B_41C4_F92A0B82CF13",
      "borderRadius": 0,
      "visible": false,
      "paddingRight": 0
     }
    ],
    "minHeight": 20,
    "rollOver": "this.showComponentsWhileMouseOver(this.container_58B4491E_4A78_4F47_41CA_C5919DD390A2, [this.htmltext_58B7891F_4A78_4F45_41BD_75A7DBE648B3,this.component_58B7A920_4A78_4F7B_41CD_DFCB3CDDF736,this.component_58B7B920_4A78_4F7B_41C4_F92A0B82CF13], 2000)",
    "paddingLeft": 0,
    "minWidth": 20,
    "borderSize": 0,
    "scrollBarWidth": 10,
    "scrollBarVisible": "rollOver",
    "scrollBarMargin": 2,
    "class": "Container",
    "verticalAlign": "top",
    "overflow": "scroll",
    "paddingTop": 0,
    "shadow": false,
    "layout": "absolute",
    "paddingBottom": 0,
    "scrollBarColor": "#000000",
    "gap": 10,
    "scrollBarOpacity": 0.5,
    "backgroundColor": [],
    "backgroundOpacity": 0.3,
    "id": "container_58B4491E_4A78_4F47_41CA_C5919DD390A2",
    "width": "100%",
    "borderRadius": 0,
    "height": "100%",
    "backgroundColorDirection": "vertical",
    "backgroundColorRatios": [],
    "paddingRight": 0
   }
  ],
  "shadowBlurRadius": 6,
  "shadowColor": "#000000",
  "titlePaddingBottom": 5,
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "paddingRight": 0,
  "headerPaddingBottom": 5,
  "closeButtonIconLineWidth": 2,
  "closeButtonPressedBackgroundColor": [],
  "bodyPaddingRight": 0,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "titleFontFamily": "Arial",
  "closeButtonRollOverBackgroundColor": [],
  "headerPaddingTop": 10,
  "footerBackgroundOpacity": 0,
  "bodyBackgroundColorDirection": "vertical",
  "headerBorderColor": "#000000",
  "headerPaddingRight": 0,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "shadowVerticalLength": 0,
  "shadowOpacity": 0.5,
  "footerHeight": 5,
  "shadowHorizontalLength": 3,
  "bodyPaddingLeft": 0,
  "borderSize": 0,
  "titlePaddingLeft": 5,
  "bodyPaddingBottom": 0,
  "overflow": "scroll",
  "titlePaddingRight": 5,
  "class": "Window",
  "titleTextDecoration": "none",
  "paddingTop": 0,
  "headerBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "headerPaddingLeft": 10,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "footerBackgroundColorDirection": "vertical",
  "closeButtonPressedIconLineWidth": 3,
  "veilColorDirection": "horizontal",
  "closeButtonIconHeight": 20,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonBackgroundColorRatios": [],
  "closeButtonBackgroundColor": [],
  "gap": 10,
  "scrollBarOpacity": 0.5,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "backgroundColor": [],
  "horizontalAlign": "center",
  "contentOpaque": false,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "titlePaddingTop": 5,
  "headerVerticalAlign": "middle",
  "bodyPaddingTop": 0,
  "backgroundOpacity": 1,
  "backgroundColorRatios": []
 },
 {
  "borderRadius": 5,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "titleFontWeight": "normal",
  "minHeight": 20,
  "titleFontStyle": "normal",
  "titleFontColor": "#000000",
  "closeButtonBorderRadius": 11,
  "paddingLeft": 0,
  "minWidth": 20,
  "scrollBarVisible": "rollOver",
  "scrollBarWidth": 10,
  "modal": true,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "scrollBarMargin": 2,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "headerBackgroundOpacity": 0,
  "closeButtonIconColor": "#B2B2B2",
  "verticalAlign": "middle",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "bodyBackgroundOpacity": 0,
  "closeButtonIconWidth": 20,
  "veilOpacity": 0.4,
  "shadow": true,
  "titleFontSize": 14,
  "layout": "vertical",
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowSpread": 1,
  "scrollBarColor": "#000000",
  "backgroundColorDirection": "vertical",
  "title": "Login",
  "close": "this.playList_45F5F97A_49D8_4FCF_41D2_59D4064DA759.set('selectedIndex', -1);",
  "closeButtonPressedIconColor": "#FFFFFF",
  "paddingBottom": 0,
  "headerBorderSize": 0,
  "id": "window_42DC226D_49D8_5DC5_41AB_B28FA7045B54",
  "children": [
   {
    "horizontalAlign": "left",
    "contentOpaque": false,
    "children": [
     "this.viewer_uid58B68921_4A78_4F7D_41A9_C2F62C43C68C",
     {
      "horizontalAlign": "left",
      "children": [
       {
        "hideEffect": {
         "class": "FadeOutEffect",
         "duration": 250,
         "easing": "cubic_in_out"
        },
        "minHeight": 0,
        "showEffect": {
         "class": "FadeInEffect",
         "duration": 250,
         "easing": "cubic_in_out"
        },
        "paddingLeft": 10,
        "minWidth": 0,
        "borderSize": 0,
        "scrollBarWidth": 10,
        "html": "",
        "scrollBarVisible": "rollOver",
        "scrollBarMargin": 2,
        "class": "HTMLText",
        "paddingTop": 5,
        "shadow": false,
        "paddingBottom": 5,
        "scrollBarColor": "#000000",
        "scrollBarOpacity": 0.5,
        "backgroundColor": [
         "#000000"
        ],
        "backgroundOpacity": 0.7,
        "id": "htmltext_58B6D921_4A78_4F7D_41C5_06DA55C71206",
        "width": "100%",
        "borderRadius": 0,
        "visible": false,
        "backgroundColorDirection": "vertical",
        "backgroundColorRatios": [
         0
        ],
        "paddingRight": 10
       }
      ],
      "minHeight": 20,
      "bottom": 0,
      "paddingLeft": 0,
      "minWidth": 20,
      "borderSize": 0,
      "scrollBarWidth": 7,
      "scrollBarVisible": "rollOver",
      "scrollBarMargin": 2,
      "class": "Container",
      "verticalAlign": "bottom",
      "overflow": "scroll",
      "paddingTop": 0,
      "shadow": false,
      "layout": "vertical",
      "left": 0,
      "paddingBottom": 0,
      "right": 0,
      "scrollBarColor": "#FFFFFF",
      "gap": 10,
      "scrollBarOpacity": 0.5,
      "backgroundColor": [],
      "backgroundOpacity": 0.3,
      "contentOpaque": true,
      "borderRadius": 0,
      "height": "30%",
      "backgroundColorDirection": "vertical",
      "backgroundColorRatios": [],
      "paddingRight": 0
     },
     {
      "hideEffect": {
       "class": "FadeOutEffect",
       "duration": 250,
       "easing": "cubic_in_out"
      },
      "horizontalAlign": "center",
      "minHeight": 0,
      "iconURL": "skin/album_left.png",
      "showEffect": {
       "class": "FadeInEffect",
       "duration": 250,
       "easing": "cubic_in_out"
      },
      "top": "45%",
      "borderSize": 0,
      "paddingLeft": 0,
      "minWidth": 0,
      "verticalAlign": "middle",
      "mode": "push",
      "class": "IconButton",
      "paddingTop": 0,
      "shadow": false,
      "transparencyActive": false,
      "click": "this.loadFromCurrentMediaPlayList(this.album_43321314_49D8_C35B_41A9_8BC9F257F2B0_AlbumPlayList, -1)",
      "left": 10,
      "paddingBottom": 0,
      "cursor": "hand",
      "backgroundOpacity": 0,
      "id": "component_58B6F922_4A78_4F7F_41A5_0560647E7D69",
      "borderRadius": 0,
      "visible": false,
      "paddingRight": 0
     },
     {
      "hideEffect": {
       "class": "FadeOutEffect",
       "duration": 250,
       "easing": "cubic_in_out"
      },
      "horizontalAlign": "center",
      "minHeight": 0,
      "iconURL": "skin/album_right.png",
      "showEffect": {
       "class": "FadeInEffect",
       "duration": 250,
       "easing": "cubic_in_out"
      },
      "top": "45%",
      "borderSize": 0,
      "paddingLeft": 0,
      "minWidth": 0,
      "verticalAlign": "middle",
      "mode": "push",
      "class": "IconButton",
      "paddingTop": 0,
      "shadow": false,
      "transparencyActive": false,
      "click": "this.loadFromCurrentMediaPlayList(this.album_43321314_49D8_C35B_41A9_8BC9F257F2B0_AlbumPlayList, 1)",
      "cursor": "hand",
      "paddingBottom": 0,
      "right": 10,
      "backgroundOpacity": 0,
      "id": "component_58B60922_4A78_4F7F_41B4_7EFB14A72BAC",
      "borderRadius": 0,
      "visible": false,
      "paddingRight": 0
     }
    ],
    "minHeight": 20,
    "rollOver": "this.showComponentsWhileMouseOver(this.container_58B6B921_4A78_4F7D_4199_C07F76C3E115, [this.htmltext_58B6D921_4A78_4F7D_41C5_06DA55C71206,this.component_58B6F922_4A78_4F7F_41A5_0560647E7D69,this.component_58B60922_4A78_4F7F_41B4_7EFB14A72BAC], 2000)",
    "paddingLeft": 0,
    "minWidth": 20,
    "borderSize": 0,
    "scrollBarWidth": 10,
    "scrollBarVisible": "rollOver",
    "scrollBarMargin": 2,
    "class": "Container",
    "verticalAlign": "top",
    "overflow": "scroll",
    "paddingTop": 0,
    "shadow": false,
    "layout": "absolute",
    "paddingBottom": 0,
    "scrollBarColor": "#000000",
    "gap": 10,
    "scrollBarOpacity": 0.5,
    "backgroundColor": [],
    "backgroundOpacity": 0.3,
    "id": "container_58B6B921_4A78_4F7D_4199_C07F76C3E115",
    "width": "100%",
    "borderRadius": 0,
    "height": "100%",
    "backgroundColorDirection": "vertical",
    "backgroundColorRatios": [],
    "paddingRight": 0
   }
  ],
  "shadowBlurRadius": 6,
  "shadowColor": "#000000",
  "titlePaddingBottom": 5,
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "paddingRight": 0,
  "headerPaddingBottom": 5,
  "closeButtonIconLineWidth": 2,
  "closeButtonPressedBackgroundColor": [],
  "bodyPaddingRight": 0,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "titleFontFamily": "Arial",
  "closeButtonRollOverBackgroundColor": [],
  "headerPaddingTop": 10,
  "footerBackgroundOpacity": 0,
  "bodyBackgroundColorDirection": "vertical",
  "headerBorderColor": "#000000",
  "headerPaddingRight": 0,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "shadowVerticalLength": 0,
  "shadowOpacity": 0.5,
  "footerHeight": 5,
  "shadowHorizontalLength": 3,
  "bodyPaddingLeft": 0,
  "borderSize": 0,
  "titlePaddingLeft": 5,
  "bodyPaddingBottom": 0,
  "overflow": "scroll",
  "titlePaddingRight": 5,
  "class": "Window",
  "titleTextDecoration": "none",
  "paddingTop": 0,
  "headerBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "headerPaddingLeft": 10,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "footerBackgroundColorDirection": "vertical",
  "closeButtonPressedIconLineWidth": 3,
  "veilColorDirection": "horizontal",
  "closeButtonIconHeight": 20,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonBackgroundColorRatios": [],
  "closeButtonBackgroundColor": [],
  "gap": 10,
  "scrollBarOpacity": 0.5,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "backgroundColor": [],
  "horizontalAlign": "center",
  "contentOpaque": false,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "titlePaddingTop": 5,
  "headerVerticalAlign": "middle",
  "bodyPaddingTop": 0,
  "backgroundOpacity": 1,
  "backgroundColorRatios": []
 },
 {
  "borderRadius": 5,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "titleFontWeight": "normal",
  "minHeight": 20,
  "titleFontStyle": "normal",
  "titleFontColor": "#000000",
  "closeButtonBorderRadius": 11,
  "paddingLeft": 0,
  "minWidth": 20,
  "scrollBarVisible": "rollOver",
  "scrollBarWidth": 10,
  "modal": true,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "scrollBarMargin": 2,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "headerBackgroundOpacity": 0,
  "closeButtonIconColor": "#B2B2B2",
  "verticalAlign": "middle",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "bodyBackgroundOpacity": 0,
  "closeButtonIconWidth": 20,
  "veilOpacity": 0.4,
  "shadow": true,
  "titleFontSize": 14,
  "layout": "vertical",
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowSpread": 1,
  "scrollBarColor": "#000000",
  "backgroundColorDirection": "vertical",
  "title": "Integrated Solutions for Coal Ash",
  "close": "this.playList_5A5BE7A0_4A48_C37B_41B2_351C24ADFE79.set('selectedIndex', -1);",
  "closeButtonPressedIconColor": "#FFFFFF",
  "paddingBottom": 0,
  "headerBorderSize": 0,
  "id": "window_45CF86E9_49C8_42CD_41B5_9017C42F7245",
  "children": [
   {
    "horizontalAlign": "left",
    "contentOpaque": false,
    "children": [
     "this.viewer_uid58B64922_4A78_4F7F_41A6_45557CFA7194",
     {
      "horizontalAlign": "left",
      "children": [
       {
        "hideEffect": {
         "class": "FadeOutEffect",
         "duration": 250,
         "easing": "cubic_in_out"
        },
        "minHeight": 0,
        "showEffect": {
         "class": "FadeInEffect",
         "duration": 250,
         "easing": "cubic_in_out"
        },
        "paddingLeft": 10,
        "minWidth": 0,
        "borderSize": 0,
        "scrollBarWidth": 10,
        "html": "",
        "scrollBarVisible": "rollOver",
        "scrollBarMargin": 2,
        "class": "HTMLText",
        "paddingTop": 5,
        "shadow": false,
        "paddingBottom": 5,
        "scrollBarColor": "#000000",
        "scrollBarOpacity": 0.5,
        "backgroundColor": [
         "#000000"
        ],
        "backgroundOpacity": 0.7,
        "id": "htmltext_58B67923_4A78_4F7D_41C2_40612973E06F",
        "width": "100%",
        "borderRadius": 0,
        "visible": false,
        "backgroundColorDirection": "vertical",
        "backgroundColorRatios": [
         0
        ],
        "paddingRight": 10
       }
      ],
      "minHeight": 20,
      "bottom": 0,
      "paddingLeft": 0,
      "minWidth": 20,
      "borderSize": 0,
      "scrollBarWidth": 7,
      "scrollBarVisible": "rollOver",
      "scrollBarMargin": 2,
      "class": "Container",
      "verticalAlign": "bottom",
      "overflow": "scroll",
      "paddingTop": 0,
      "shadow": false,
      "layout": "vertical",
      "left": 0,
      "paddingBottom": 0,
      "right": 0,
      "scrollBarColor": "#FFFFFF",
      "gap": 10,
      "scrollBarOpacity": 0.5,
      "backgroundColor": [],
      "backgroundOpacity": 0.3,
      "contentOpaque": true,
      "borderRadius": 0,
      "height": "30%",
      "backgroundColorDirection": "vertical",
      "backgroundColorRatios": [],
      "paddingRight": 0
     },
     {
      "hideEffect": {
       "class": "FadeOutEffect",
       "duration": 250,
       "easing": "cubic_in_out"
      },
      "horizontalAlign": "center",
      "minHeight": 0,
      "iconURL": "skin/album_left.png",
      "showEffect": {
       "class": "FadeInEffect",
       "duration": 250,
       "easing": "cubic_in_out"
      },
      "top": "45%",
      "borderSize": 0,
      "paddingLeft": 0,
      "minWidth": 0,
      "verticalAlign": "middle",
      "mode": "push",
      "class": "IconButton",
      "paddingTop": 0,
      "shadow": false,
      "transparencyActive": false,
      "click": "this.loadFromCurrentMediaPlayList(this.album_42B9972D_49C8_4345_41C8_9E7E49A96BD0_AlbumPlayList, -1)",
      "left": 10,
      "paddingBottom": 0,
      "cursor": "hand",
      "backgroundOpacity": 0,
      "id": "component_58B1B924_4A78_4F7B_41B2_4B64984B31E8",
      "borderRadius": 0,
      "visible": false,
      "paddingRight": 0
     },
     {
      "hideEffect": {
       "class": "FadeOutEffect",
       "duration": 250,
       "easing": "cubic_in_out"
      },
      "horizontalAlign": "center",
      "minHeight": 0,
      "iconURL": "skin/album_right.png",
      "showEffect": {
       "class": "FadeInEffect",
       "duration": 250,
       "easing": "cubic_in_out"
      },
      "top": "45%",
      "borderSize": 0,
      "paddingLeft": 0,
      "minWidth": 0,
      "verticalAlign": "middle",
      "mode": "push",
      "class": "IconButton",
      "paddingTop": 0,
      "shadow": false,
      "transparencyActive": false,
      "click": "this.loadFromCurrentMediaPlayList(this.album_42B9972D_49C8_4345_41C8_9E7E49A96BD0_AlbumPlayList, 1)",
      "cursor": "hand",
      "paddingBottom": 0,
      "right": 10,
      "backgroundOpacity": 0,
      "id": "component_58B1C924_4A78_4F7B_41B5_D270A7062171",
      "borderRadius": 0,
      "visible": false,
      "paddingRight": 0
     }
    ],
    "minHeight": 20,
    "rollOver": "this.showComponentsWhileMouseOver(this.container_58B65923_4A78_4F7D_41D2_694982DFE28E, [this.htmltext_58B67923_4A78_4F7D_41C2_40612973E06F,this.component_58B1B924_4A78_4F7B_41B2_4B64984B31E8,this.component_58B1C924_4A78_4F7B_41B5_D270A7062171], 2000)",
    "paddingLeft": 0,
    "minWidth": 20,
    "borderSize": 0,
    "scrollBarWidth": 10,
    "scrollBarVisible": "rollOver",
    "scrollBarMargin": 2,
    "class": "Container",
    "verticalAlign": "top",
    "overflow": "scroll",
    "paddingTop": 0,
    "shadow": false,
    "layout": "absolute",
    "paddingBottom": 0,
    "scrollBarColor": "#000000",
    "gap": 10,
    "scrollBarOpacity": 0.5,
    "backgroundColor": [],
    "backgroundOpacity": 0.3,
    "id": "container_58B65923_4A78_4F7D_41D2_694982DFE28E",
    "width": "100%",
    "borderRadius": 0,
    "height": "100%",
    "backgroundColorDirection": "vertical",
    "backgroundColorRatios": [],
    "paddingRight": 0
   }
  ],
  "shadowBlurRadius": 6,
  "shadowColor": "#000000",
  "titlePaddingBottom": 5,
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "paddingRight": 0,
  "headerPaddingBottom": 5,
  "closeButtonIconLineWidth": 2,
  "closeButtonPressedBackgroundColor": [],
  "bodyPaddingRight": 0,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "titleFontFamily": "Arial",
  "closeButtonRollOverBackgroundColor": [],
  "headerPaddingTop": 10,
  "footerBackgroundOpacity": 0,
  "bodyBackgroundColorDirection": "vertical",
  "headerBorderColor": "#000000",
  "headerPaddingRight": 0,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "shadowVerticalLength": 0,
  "shadowOpacity": 0.5,
  "footerHeight": 5,
  "shadowHorizontalLength": 3,
  "bodyPaddingLeft": 0,
  "borderSize": 0,
  "titlePaddingLeft": 5,
  "bodyPaddingBottom": 0,
  "overflow": "scroll",
  "titlePaddingRight": 5,
  "class": "Window",
  "titleTextDecoration": "none",
  "paddingTop": 0,
  "headerBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "headerPaddingLeft": 10,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "footerBackgroundColorDirection": "vertical",
  "closeButtonPressedIconLineWidth": 3,
  "veilColorDirection": "horizontal",
  "closeButtonIconHeight": 20,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonBackgroundColorRatios": [],
  "closeButtonBackgroundColor": [],
  "gap": 10,
  "scrollBarOpacity": 0.5,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "backgroundColor": [],
  "horizontalAlign": "center",
  "contentOpaque": false,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "titlePaddingTop": 5,
  "headerVerticalAlign": "middle",
  "bodyPaddingTop": 0,
  "backgroundOpacity": 1,
  "backgroundColorRatios": []
 },
 {
  "class": "MediaAudio",
  "autoplay": true,
  "id": "audio_0B054FF3_01C3_0BB5_412A_75378B1B73A4",
  "audio": {
   "oggUrl": "media/audio_0B054FF3_01C3_0BB5_412A_75378B1B73A4.ogg",
   "class": "AudioResource",
   "mp3Url": "media/audio_0B054FF3_01C3_0BB5_412A_75378B1B73A4.mp3"
  }
 },
 {
  "scaleMode": "fit_inside",
  "class": "Video",
  "width": 206,
  "height": 412,
  "id": "video_3947963F_36AA_DB18_41C5_9CA554196995",
  "label": "tamozz-vr-animate-Desktop",
  "thumbnailUrl": "media/video_3947963F_36AA_DB18_41C5_9CA554196995_t.jpg",
  "video": {
   "height": 412,
   "class": "VideoResource",
   "mp4Url": "media/video_3947963F_36AA_DB18_41C5_9CA554196995.mp4",
   "width": 206
  }
 },
 {
  "scaleMode": "fit_inside",
  "class": "Video",
  "width": 10,
  "height": 20,
  "id": "video_EE50DD72_E68A_C69A_41CA_D375EC0387A6",
  "label": "golder-vr-animate-Desktop",
  "thumbnailUrl": "media/video_EE50DD72_E68A_C69A_41CA_D375EC0387A6_t.jpg",
  "video": {
   "height": 20,
   "class": "VideoResource",
   "mp4Url": "media/video_EE50DD72_E68A_C69A_41CA_D375EC0387A6.mp4",
   "width": 10
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
  "minHeight": 50,
  "top": 0,
  "toolTipOpacity": 1,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarBorderSize": 0,
  "paddingLeft": 0,
  "toolTipShadowOpacity": 1,
  "minWidth": 100,
  "toolTipShadowVerticalLength": 0,
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
  "shadow": false,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "progressBarOpacity": 1,
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
  "progressBackgroundColorDirection": "vertical",
  "height": "100%",
  "progressBorderSize": 0,
  "playbackBarBottom": 5,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBorderColor": "#000000",
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadShadowVerticalLength": 0,
  "progressBackgroundColor": [
   "#FFFFFF",
   "#000000"
  ],
  "id": "MainViewer",
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "paddingRight": 0,
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadShadowOpacity": 0.7,
  "toolTipShadowHorizontalLength": 0,
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
  "playbackBarProgressBorderRadius": 0,
  "left": 0,
  "playbackBarBorderRadius": 0,
  "toolTipFontStyle": "normal",
  "toolTipBorderSize": 1,
  "toolTipPaddingTop": 4,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadBorderRadius": 0
 },
 {
  "horizontalAlign": "center",
  "children": [
   {
    "itemPaddingRight": 3,
    "backgroundOpacity": 0.2,
    "itemBackgroundOpacity": 0,
    "itemLabelFontSize": 14,
    "itemLabelFontFamily": "Arial",
    "minHeight": 0,
    "itemLabelFontWeight": "normal",
    "horizontalAlign": "left",
    "itemPaddingBottom": 3,
    "itemThumbnailShadowHorizontalLength": 3,
    "itemThumbnailShadowVerticalLength": 3,
    "itemThumbnailShadow": true,
    "itemThumbnailShadowBlurRadius": 4,
    "itemThumbnailWidth": 100,
    "paddingLeft": 20,
    "itemThumbnailOpacity": 1,
    "minWidth": 0,
    "itemPaddingTop": 3,
    "borderSize": 0,
    "scrollBarWidth": 10,
    "itemLabelHorizontalAlign": "center",
    "scrollBarVisible": "rollOver",
    "itemBackgroundColorRatios": [],
    "itemMode": "normal",
    "scrollBarMargin": 2,
    "itemBorderRadius": 0,
    "itemThumbnailShadowSpread": 1,
    "class": "ThumbnailList",
    "verticalAlign": "top",
    "itemPaddingLeft": 3,
    "paddingTop": 10,
    "itemLabelFontColor": "#FFFFFF",
    "itemThumbnailShadowColor": "#000000",
    "itemBackgroundColor": [],
    "shadow": false,
    "itemOpacity": 1,
    "itemLabelTextDecoration": "none",
    "itemLabelPosition": "bottom",
    "itemThumbnailBorderRadius": 5,
    "layout": "horizontal",
    "itemLabelGap": 5,
    "maxHeight": 600,
    "backgroundColorDirection": "vertical",
    "itemThumbnailHeight": 75,
    "itemThumbnailShadowOpacity": 0.8,
    "gap": 10,
    "itemThumbnailScaleMode": "fit_outside",
    "scrollBarOpacity": 0.5,
    "scrollBarColor": "#FFFFFF",
    "itemLabelFontStyle": "normal",
    "backgroundColor": [
     "#000000"
    ],
    "paddingBottom": 10,
    "itemVerticalAlign": "middle",
    "maxWidth": 800,
    "selectedItemLabelFontWeight": "bold",
    "borderRadius": 5,
    "itemBackgroundColorDirection": "vertical",
    "itemHorizontalAlign": "center",
    "playList": "this.playList_0C8220F3_0217_7925_4177_A3813F3BC9BA",
    "backgroundColorRatios": [
     0
    ],
    "paddingRight": 20
   }
  ],
  "minHeight": 20,
  "bottom": 0,
  "borderSize": 0,
  "paddingLeft": 0,
  "minWidth": 20,
  "scrollBarWidth": 10,
  "scrollBarVisible": "rollOver",
  "scrollBarMargin": 2,
  "class": "Container",
  "verticalAlign": "bottom",
  "overflow": "visible",
  "paddingTop": 0,
  "shadow": false,
  "layout": "horizontal",
  "left": 0,
  "paddingBottom": 0,
  "right": 0,
  "scrollBarColor": "#000000",
  "gap": 10,
  "scrollBarOpacity": 0.5,
  "height": 200,
  "backgroundOpacity": 0,
  "contentOpaque": false,
  "borderRadius": 0,
  "paddingRight": 0
 },
 {
  "backgroundOpacity": 0.5,
  "backgroundColor": [
   "#FFFFFF",
   "#666666"
  ],
  "children": [
   {
    "horizontalAlign": "center",
    "minHeight": 0,
    "iconURL": "skin/IconButton_0D0876D9_0241_3DF5_4187_A924F6D29064.png",
    "top": "10%",
    "borderSize": 0,
    "paddingLeft": 0,
    "minWidth": 0,
    "verticalAlign": "middle",
    "mode": "toggle",
    "class": "IconButton",
    "paddingTop": 0,
    "shadow": false,
    "transparencyActive": false,
    "cursor": "hand",
    "paddingBottom": 0,
    "right": "25%",
    "width": 40,
    "height": 40,
    "backgroundOpacity": 0,
    "pressedIconURL": "skin/IconButton_0D0876D9_0241_3DF5_4187_A924F6D29064_pressed.png",
    "id": "IconButton_0D0876D9_0241_3DF5_4187_A924F6D29064",
    "borderRadius": 0,
    "paddingRight": 0
   },
   {
    "backgroundOpacity": 0,
    "minHeight": 1,
    "top": "-9.5%",
    "paddingLeft": 0,
    "minWidth": 1,
    "borderSize": 0,
    "verticalAlign": "middle",
    "scaleMode": "fit_inside",
    "class": "Image",
    "paddingTop": 0,
    "shadow": false,
    "left": "-1573.12%",
    "maxHeight": 55,
    "paddingBottom": 0,
    "width": "45.161%",
    "height": "22%",
    "horizontalAlign": "center",
    "id": "Image_0C22F72F_0247_1CAD_4160_60AF7851E5E0",
    "borderRadius": 0,
    "url": "skin/Image_0C22F72F_0247_1CAD_4160_60AF7851E5E0.png",
    "maxWidth": 55,
    "paddingRight": 0
   },
   {
    "backgroundOpacity": 0,
    "minHeight": 0,
    "bottom": "10%",
    "borderSize": 0,
    "paddingLeft": 0,
    "minWidth": 0,
    "verticalAlign": "middle",
    "scaleMode": "fit_inside",
    "class": "Image",
    "paddingTop": 0,
    "shadow": false,
    "click": "var newWindow = window.open(\"https://www.golder.com/contact/\", \"_blank\"); newWindow.focus()",
    "cursor": "hand",
    "paddingBottom": 0,
    "right": "25%",
    "width": 40,
    "height": 40,
    "horizontalAlign": "center",
    "id": "Image_0CB084F8_0241_1DB3_4184_27716B06A03C",
    "borderRadius": 0,
    "url": "skin/Image_0CB084F8_0241_1DB3_4184_27716B06A03C.png",
    "paddingRight": 0
   },
   {
    "horizontalAlign": "center",
    "minHeight": 1,
    "iconURL": "skin/IconButton_2A4F6CBE_270F_D947_41C0_5020863FDCEA.png",
    "bottom": "37.85%",
    "paddingLeft": 0,
    "minWidth": 1,
    "borderSize": 0,
    "verticalAlign": "middle",
    "mode": "toggle",
    "class": "IconButton",
    "paddingTop": 0,
    "shadow": false,
    "transparencyActive": true,
    "cursor": "hand",
    "maxHeight": 128,
    "paddingBottom": 0,
    "right": "12.69%",
    "width": 60.45,
    "height": 48,
    "backgroundOpacity": 0,
    "id": "IconButton_2A4F6CBE_270F_D947_41C0_5020863FDCEA",
    "borderRadius": 0,
    "maxWidth": 128,
    "paddingRight": 0
   }
  ],
  "minHeight": 0,
  "shadowHorizontalLength": 7,
  "horizontalAlign": "left",
  "shadowVerticalLength": 10,
  "top": "2%",
  "paddingLeft": 0,
  "minWidth": 0,
  "shadowOpacity": 0.72,
  "borderSize": 1,
  "scrollBarWidth": 10,
  "scrollBarVisible": "rollOver",
  "borderColor": "#FFFFFF",
  "class": "Container",
  "scrollBarMargin": 2,
  "overflow": "scroll",
  "paddingTop": 0,
  "verticalAlign": "top",
  "shadow": true,
  "shadowSpread": 1,
  "layout": "absolute",
  "backgroundColorDirection": "vertical",
  "right": "2%",
  "scrollBarColor": "#000000",
  "gap": 10,
  "width": 85.04,
  "shadowBlurRadius": 10,
  "paddingBottom": 0,
  "id": "Container_0C6F931C_0241_3473_4178_6DCA3B5132B4",
  "scrollBarOpacity": 0.5,
  "borderRadius": 10,
  "height": 214,
  "contentOpaque": false,
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
 "start": "this.playAudioList([this.audio_0B054FF3_01C3_0BB5_412A_75378B1B73A4]); this.syncPlaylists([this.playList_0C8220F3_0217_7925_4177_A3813F3BC9BA,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_2A4F6CBE_270F_D947_41C0_5020863FDCEA].forEach(function(component) { component.set('visible', false); }) }",
 "paddingLeft": 0,
 "minWidth": 20,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "buttonToggleFullscreen": "this.IconButton_2A4F6CBE_270F_D947_41C0_5020863FDCEA",
 "class": "Player",
 "verticalAlign": "top",
 "overflow": "visible",
 "paddingTop": 0,
 "shadow": false,
 "mouseWheelEnabled": true,
 "backgroundPreloadEnabled": true,
 "layout": "absolute",
 "scripts": {
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){    var resetFunction = function(){       panoramaPlayListItem.unbind('stop', resetFunction, this);       player.set('mapPlayer', null);   };   panoramaPlayListItem.bind('stop', resetFunction, this);   var player = panoramaPlayListItem.get('player');   player.set('mapPlayer', mapPlayer); },
  "loadFromCurrentMediaPlayList": function(playList, delta){    var currentIndex = playList.get('selectedIndex');   var totalItems = playList.get('items').length;   var newIndex = (currentIndex + delta) % totalItems;   while(newIndex < 0){       newIndex = totalItems + newIndex;   };   if(currentIndex != newIndex){       playList.set('selectedIndex', newIndex);   }; },
  "playGlobalAudio": function(audio, endCallback){    var endFunction = function(){       audio.unbind('end', endFunction, this);       this.stopGlobalAudio(audio);       if(endCallback)           endCallback();   };   audio = this.getGlobalAudio(audio);   var audios = window.currentGlobalAudios;   if(!audios){       audios = window.currentGlobalAudios = {};   }   audios[audio.get('id')] = audio;   if(audio.get('state') == 'playing'){       return;   }   if(!audio.get('loop')){       audio.bind('end', endFunction, this);   }   audio.play(); },
  "loopAlbum": function(playList, index){    var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var loopFunction = function(){       player.play();   };   this.executeFunctionWhenChange(playList, index, loopFunction); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           this.stopGlobalAudio(audio);           if(isPanorama) {               var media = playListItem.get('media');               var audios = media.get('audios');               audios.splice(audios.indexOf(audio), 1);               media.set('audios', audios);           }           playList.unbind('change', changeFunction, this);           if(endCallback)               endCallback();       }   };   var audios = window.currentGlobalAudios;   if(audios && audio.get('id') in audios){       audio = audios[audio.get('id')];       if(audio.get('state') != 'playing'){           audio.play();       }       return;   }   playList.bind('change', changeFunction, this);   var playListItem = playList.get('items')[index];   var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem';   if(isPanorama) {       var media = playListItem.get('media');       var audios = (media.get('audios') || []).slice();       if(audio.get('class') == 'MediaAudio') {           var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio');           panoramaAudio.set('autoplay', false);           panoramaAudio.set('audio', audio.get('audio'));           panoramaAudio.set('loop', audio.get('loop'));           panoramaAudio.set('id', audio.get('id'));           audio = panoramaAudio;       }       audios.push(audio);       media.set('audios', audios);   }   this.playGlobalAudio(audio, endCallback); },
  "resumeGlobalAudios": function(caller){    if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller)       return;   window.currentGlobalAudiosActionCaller = undefined;   var audios = window.currentGlobalAudios;   if(!audios) return;   for(var audio in audios){       audios[audio].play();   } },
  "playAudioList": function(audios){    if(audios.length == 0) return;   var currentAudioCount = -1;   var currentAudio;   var playGlobalAudioFunction = this.playGlobalAudio;   var playNext = function(){       if(++currentAudioCount >= audios.length)           currentAudioCount = 0;       currentAudio = audios[currentAudioCount];       playGlobalAudioFunction(currentAudio, playNext);   };   playNext(); },
  "isCardboardViewMode": function(){    var players = this.getByClassName('PanoramaPlayer');   return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){    var closeFunction = function(){       clearAutoClose();       this.resumePlayers(playersPaused, !containsAudio);       w.unbind('close', closeFunction, this);   };   var clearAutoClose = function(){       w.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var timeoutID = undefined;   if(autoCloseMilliSeconds){       var autoCloseFunction = function(){           w.hide();       };       w.bind('click', clearAutoClose, this);       timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "existsKey": function(key){    return key in window; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){    for(var i = 0; i<players.length; ++i){       var player = players[i];       if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){           player.resumeCamera();       }       else{           player.play();       }   } },
  "getActivePlayerWithViewer": function(viewerArea){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   players = players.concat(this.getByClassName('MapPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('viewerArea') == viewerArea) {           var playerClass = player.get('class');           if(playerClass == 'PanoramaPlayer' && player.get('panorama') != undefined) return player;           else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player;           else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player;           else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player;       }   }   return undefined; },
  "startPanoramaWithCamera": function(panorama, camera){    var playLists = this.getByClassName('PlayList');   if(playLists.length == 0)       return;    var restoreItems = [];   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           var item = items[j];           if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){               restoreItems.push({camera: item.get('camera'), item: item});               item.set('camera', camera);           }       }   }   if(restoreItems.length > 0) {       var restoreCameraOnStop = function(){           for (var i = 0; i < restoreItems.length; i++) {               restoreItems[i].item.set('camera', restoreItems[i].camera);           }           restoreItems[0].item.unbind('stop', restoreCameraOnStop, this);       };       restoreItems[0].item.bind('stop', restoreCameraOnStop, this);   } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){    var setVisibility = function(visible){       for(var i = 0, length = components.length; i<length; i++){           components[i].set('visible', visible);       }   };   if (this.rootPlayer.touchEnabled){       setVisibility(true);   } else {       var timeoutID = -1;       var rollOverFunction = function(){           setVisibility(true);           if(timeoutID >= 0) clearTimeout(timeoutID);           parentComponent.unbind('rollOver', rollOverFunction, this);           parentComponent.bind('rollOut', rollOutFunction, this);       };       var rollOutFunction = function(){           var timeoutFunction = function(){               setVisibility(false);               parentComponent.unbind('rollOver', rollOverFunction, this);           };           parentComponent.unbind('rollOut', rollOutFunction, this);           parentComponent.bind('rollOver', rollOverFunction, this);           timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut);       };       parentComponent.bind('rollOver', rollOverFunction, this);   } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){    var enabled = this.get(playerFlag);   for(var i in components){       components[i].set('visible', enabled);   } },
  "updateVideoCues": function(playList, index){    var playListItem = playList.get('items')[index];   var video = playListItem.get('media');   if(video.get('cues').length == 0)       return;   var player = playListItem.get('player');   var cues = [];   var changeFunction = function(){       if(playList.get('selectedIndex') != index){           video.unbind('cueChange', cueChangeFunction, this);           playList.unbind('change', changeFunction, this);       }   };   var cueChangeFunction = function(event){       var activeCues = event.data.activeCues;       for(var i = 0, count = cues.length; i<count; ++i){           var cue = cues[i];           if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){               cue.trigger('end');           }       }       cues = activeCues;   };   video.bind('cueChange', cueChangeFunction, this);   playList.bind('change', changeFunction, this); },
  "getPlayListWithMedia": function(media, onlySelected){    var playLists = this.getByClassName('PlayList');   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       if(onlySelected && playList.get('selectedIndex') == -1)           continue;       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           if(items[j].get('media') == media)               return playList;       }   }   return undefined; },
  "pauseGlobalAudios": function(caller){    var audios = window.currentGlobalAudios;   window.currentGlobalAudiosActionCaller = caller;   if(!audios) return;   for(var audio in audios){       audios[audio].pause();   } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){    var self = this;   var closeFunction = function(){       self.MainViewer.set('toolTipEnabled', true);       this.resumePlayers(playersPaused, !containsAudio);       if(isVideo) {           this.unbind('resize', resizeFunction, this);       }       w.unbind('close', closeFunction, this);   };   var endFunction = function(){       w.hide();   };   var resizeFunction = function(){       var parentWidth = self.get('actualWidth');       var parentHeight = self.get('actualHeight');       var mediaWidth = media.get('width');       var mediaHeight = media.get('height');       var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100;       var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100;       var windowWidth = popupMaxWidthNumber * parentWidth;       var windowHeight = popupMaxHeightNumber * parentHeight;       var footerHeight = w.get('footerHeight');       var headerHeight = w.get('headerHeight');       if(!headerHeight) {           var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom');           var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom');           headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight;           headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom');       }       if(!footerHeight) {           footerHeight = 0;       }       var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight');       var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom');       var parentAspectRatio = contentWindowWidth / contentWindowHeight;       var mediaAspectRatio = mediaWidth / mediaHeight;       if(parentAspectRatio > mediaAspectRatio) {           windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight');       }       else {           windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom');       }       if(windowWidth > parentWidth * popupMaxWidthNumber) {           windowWidth = parentWidth * popupMaxWidthNumber;       }       if(windowHeight > parentHeight * popupMaxHeightNumber) {           windowHeight = parentHeight * popupMaxHeightNumber;       }       w.set('width', windowWidth);       w.set('height', windowHeight);       w.set('x', (parentWidth - w.get('actualWidth')) * 0.5);       w.set('y', (parentHeight - w.get('actualHeight')) * 0.5);   };   if(autoCloseWhenFinished){       this.executeFunctionWhenChange(playList, 0, endFunction);   }   var isVideo = media.get('class') == 'Video';   if(isVideo){       this.bind('resize', resizeFunction, this);       resizeFunction();   }   else {       w.set('width', popupMaxWidth);       w.set('height', popupMaxHeight);   }   this.MainViewer.set('toolTipEnabled', false);   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "pauseGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];   }   audio.pause(); },
  "shareTwitter": function(url){    window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){    var self = this;   var showEndFunction = function() {       popupPanoramaOverlay.unbind('showEnd', showEndFunction);       closeButton.bind('click', hideFunction, this);       setCloseButtonPosition();       closeButton.set('visible', true);   };   var endFunction = function() {       if(!popupPanoramaOverlay.get('loop'))           hideFunction();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       if(!self.isCardboardViewMode())           popupPanoramaOverlay.set('visible', false);       closeButton.set('visible', false);       closeButton.unbind('click', hideFunction, this);       popupPanoramaOverlay.unbind('end', endFunction, self);       self.resumePlayers(playersPaused, true);       self.resumeGlobalAudios();   };   var setCloseButtonPosition = function() {       var right = 10;       var top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   this.MainViewer.set('toolTipEnabled', false);   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(true);   this.pauseGlobalAudios();   popupPanoramaOverlay.bind('end', endFunction, this, true);   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); },
  "fixTogglePlayPauseButton": function(player){    var state = player.get('state');   var button = player.get('buttonPlayPause');   if(typeof button !== 'undefined' && player.get('state') == 'playing'){       button.set('pressed', true);   } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){    var self = this;   var closed = false;   var playerClickFunction = function() {       zoomImage.unbind('loaded', loadedFunction, self);       hideFunction();   };   var clearAutoClose = function(){       zoomImage.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var loadedFunction = function(){       self.unbind('click', playerClickFunction, self);       veil.set('visible', true);       setCloseButtonPosition();       closeButton.set('visible', true);       zoomImage.unbind('loaded', loadedFunction, this);       zoomImage.bind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this);       timeoutID = setTimeout(timeoutFunction, 200);   };   var timeoutFunction = function(){       timeoutID = undefined;       if(autoCloseMilliSeconds){           var autoCloseFunction = function(){               hideFunction();           };           zoomImage.bind('click', clearAutoClose, this);           timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);       }       zoomImage.bind('backgroundClick', hideFunction, this);       if(toggleImage) {           zoomImage.bind('click', toggleFunction, this);           zoomImage.set('imageCursor', 'hand');       }       closeButton.bind('click', hideFunction, this);       if(loadedCallback)           loadedCallback();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       closed = true;       if(timeoutID)           clearTimeout(timeoutID);       if(autoCloseMilliSeconds)           clearAutoClose();       if(hideCallback)           hideCallback();       zoomImage.set('visible', false);       if(hideEffect && hideEffect.get('duration') > 0){           hideEffect.bind('end', endEffectFunction, this);       }       else{           zoomImage.set('image', null);       }       closeButton.set('visible', false);       veil.set('visible', false);       self.unbind('click', playerClickFunction, self);       zoomImage.unbind('backgroundClick', hideFunction, this);       zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true);       if(toggleImage) {           zoomImage.unbind('click', toggleFunction, this);           zoomImage.set('cursor', 'default');       }       closeButton.unbind('click', hideFunction, this);       self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               self.resumeGlobalAudios();           }           self.stopGlobalAudio(audio);       }   };   var endEffectFunction = function() {       zoomImage.set('image', null);       hideEffect.unbind('end', endEffectFunction, this);   };   var toggleFunction = function() {       zoomImage.set('image', isToggleVisible() ? image : toggleImage);   };   var isToggleVisible = function() {       return zoomImage.get('image') == toggleImage;   };   var setCloseButtonPosition = function() {       var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10;       var top = zoomImage.get('imageTop') + 10;       if(right < 10) right = 10;       if(top < 10) top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var userInteractionStartFunction = function() {       if(timeoutUserInteractionID){           clearTimeout(timeoutUserInteractionID);           timeoutUserInteractionID = undefined;       }       else{           closeButton.set('visible', false);       }   };   var userInteractionEndFunction = function() {       if(!closed){           timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300);       }   };   var userInteractionTimeoutFunction = function() {       timeoutUserInteractionID = undefined;       closeButton.set('visible', true);       setCloseButtonPosition();   };   this.MainViewer.set('toolTipEnabled', false);   var veil = this.veilPopupPanorama;   var zoomImage = this.zoomImagePopupPanorama;   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);   if(audio){       if(stopBackgroundAudio){           this.pauseGlobalAudios();       }       this.playGlobalAudio(audio);   }   var timeoutID = undefined;   var timeoutUserInteractionID = undefined;   zoomImage.bind('loaded', loadedFunction, this);   setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0);   zoomImage.set('image', image);   zoomImage.set('customWidth', customWidth);   zoomImage.set('customHeight', customHeight);   zoomImage.set('showEffect', showEffect);   zoomImage.set('hideEffect', hideEffect);   zoomImage.set('visible', true);   return zoomImage; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){    var self = this;   var endObject = undefined;   var changePlayListFunction = function(event){       if(event.data.previousSelectedIndex == index){           if(changeFunction) changeFunction();           if(endFunction) endObject.unbind('end', endFunction, self);           playList.unbind('change', changePlayListFunction, self);       }   };   if(endFunction){       var playListItem = playList.get('items')[index];       var playListItemClass = playListItem.get('class');       if(playListItemClass == 'PanoramaPlayListItem'){           var camera = playListItem.get('camera');           endObject = camera.get('initialSequence');           if(!endObject) return;       }       else{           endObject = playListItem.get('media');       }       endObject.bind('end', endFunction, this);   }   playList.bind('change', changePlayListFunction, this); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){    var audios = window.currentGlobalAudios;   if(!audios) return;   var resumeFunction = this.resumeGlobalAudios;   var endFunction = function(){       if(playList.get('selectedIndex') != index) {           resumeFunction(caller);       }   };   this.pauseGlobalAudios(caller);   this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "getGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios != undefined && audio.get('id') in audios){       audio = audios[audio.get('id')];   }   return audio; },
  "changeBackgroundWhilePlay": function(playList, index, color){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           playList.unbind('change', changeFunction, this);           if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){               viewerArea.set('backgroundColor', backgroundColorBackup);               viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup);           }       }   };   var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var viewerArea = player.get('viewerArea');   var backgroundColorBackup = viewerArea.get('backgroundColor');   var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios');   var colorRatios = [0];   if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){       viewerArea.set('backgroundColor', color);       viewerArea.set('backgroundColorRatios', colorRatios);       playList.bind('change', changeFunction, this);   } },
  "shareGoogle": function(url){    window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "setMainMediaByName": function(name){    var items = this.mainPlayList.get('items');   for(var i = 0; i<items.length; ++i){       if(items[i].get('media').get('label') == name) {           this.mainPlayList.set('selectedIndex', i);           return;       }   } },
  "autotriggerAtStart": function(player, callback){    var stateChangeFunction = function(event){        if(event.data.state == 'playing'){           callback();           player.unbind('stateChange', stateChangeFunction, this);       }   };   player.bind('stateChange', stateChangeFunction, this); },
  "shareFacebook": function(url){    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "syncPlaylists": function(playLists){    var changeToMedia = function(media, playListDispatched){       for(var i = 0, count = playLists.length; i<count; ++i){           var playList = playLists[i];           if(playList != playListDispatched){               var items = playList.get('items');               for(var j = 0, countJ = items.length; j<countJ; ++j){                   if(items[j].get('media') == media){                       if(playList.get('selectedIndex') != j){                           playList.set('selectedIndex', j);                       }                       break;                   }               }           }       }   };   var changeFunction = function(event){       var playListDispatched = event.source;       var selectedIndex = playListDispatched.get('selectedIndex');       if(selectedIndex < 0)           return;       var media = playListDispatched.get('items')[selectedIndex].get('media');       changeToMedia(media, playListDispatched);   };   var mapPlayerChangeFunction = function(event){       var panoramaMapLocation = event.source.get('panoramaMapLocation');       if(panoramaMapLocation){           var map = panoramaMapLocation.get('map');           changeToMedia(map);       }   };   for(var i = 0, count = playLists.length; i<count; ++i){       playLists[i].bind('change', changeFunction, this);   }   var mapPlayers = this.getByClassName('MapPlayer');   for(var i = 0, count = mapPlayers.length; i<count; ++i){       mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this);   } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){    var self = this;   var stateChangeFunction = function(event){       if(event.data.state == 'stopped'){           dispose();       }   };   var changeFunction = function(){       var index = playListDispatcher.get('selectedIndex');       if(index != -1){           indexDispatcher = index;           dispose();       }   };   var dispose = function(){       if(!playListDispatcher) return;       playList.set('selectedIndex', -1);       if(panoramaSequence && panoramaSequenceIndex != -1){           if(panoramaSequence) {               if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){                   var initialPosition = camera.get('initialPosition');                   var oldYaw = initialPosition.get('yaw');                   var oldPitch = initialPosition.get('pitch');                   var oldHfov = initialPosition.get('hfov');                   var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1];                   initialPosition.set('yaw', previousMovement.get('targetYaw'));                   initialPosition.set('pitch', previousMovement.get('targetPitch'));                   initialPosition.set('hfov', previousMovement.get('targetHfov'));                   var restoreInitialPositionFunction = function(event){                       initialPosition.set('yaw', oldYaw);                       initialPosition.set('pitch', oldPitch);                       initialPosition.set('hfov', oldHfov);                       itemDispatcher.unbind('end', restoreInitialPositionFunction, self);                   };                   itemDispatcher.bind('end', restoreInitialPositionFunction, self);               }               panoramaSequence.set('movementIndex', panoramaSequenceIndex);           }       }       playListDispatcher.set('selectedIndex', indexDispatcher);       if(player){           player.unbind('stateChange', stateChangeFunction, self);       }       if(sameViewerArea){           if(playList != playListDispatcher)               playListDispatcher.unbind('change', changeFunction, self);       }       else{           viewerArea.set('visible', false);       }       playListDispatcher = undefined;   };   if(!mediaDispatcher){       var currentIndex = playList.get('selectedIndex');       var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer);       if(currentPlayer) {           var playerClass = currentPlayer.get('class');           if(playerClass == 'PanoramaPlayer') mediaDispatcher = currentPlayer.get('panorama');           else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video');           else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum');           else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map');       }   }   var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined;   if(!playListDispatcher){       playList.set('selectedIndex', index);       return;   }   var indexDispatcher = playListDispatcher.get('selectedIndex');   if(playList.get('selectedIndex') == index || indexDispatcher == -1){       return;   }   var item = playList.get('items')[index];   var itemDispatcher = playListDispatcher.get('items')[indexDispatcher];   var viewerArea = item.get('player').get('viewerArea');   var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea');   if(sameViewerArea){       if(playList != playListDispatcher){           playListDispatcher.set('selectedIndex', -1);           playListDispatcher.bind('change', changeFunction, this);       }   }   else{       viewerArea.set('visible', true);   }   var panoramaSequenceIndex = -1;   var panoramaSequence = undefined;   var camera = itemDispatcher.get('camera');   if(camera){       panoramaSequence = camera.get('initialSequence');       if(panoramaSequence) {           panoramaSequenceIndex = panoramaSequence.get('movementIndex');       }   }   playList.set('selectedIndex', index);   var player = undefined;   if(item.get('player') != itemDispatcher.get('player')){       player = item.get('player');       player.bind('stateChange', stateChangeFunction, this);   }   this.executeFunctionWhenChange(playList, index, dispose); },
  "setMainMediaByIndex": function(index){    if(index >= 0 && index < this.mainPlayList.get('items').length){       this.mainPlayList.set('selectedIndex', index);   } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){    var endFunction = function(){       if(playList.get('selectedIndex') == fromIndex)           playList.set('selectedIndex', toIndex);   };   this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "unregisterKey": function(key){    delete window[key]; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){    this.unregisterKey('visibility_'+component.get('id'));   var changeVisibility = function(){        if(effect && propertyEffect){            component.set(propertyEffect, effect);        }        component.set('visible', visible);       if(component.get('class') == 'ViewerArea'){           try{               if(visible) component.restart();               else        component.pause();           }           catch(e){};       }   };   var effectTimeoutName = 'effectTimeout_'+component.get('id');   if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){       var effectTimeout = window[effectTimeoutName];       if(effectTimeout instanceof Array){           for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) }       }else{           clearTimeout(effectTimeout);       }       delete window[effectTimeoutName];   }   else if(visible == component.get('visible') && !ignoreClearTimeout)       return;   if(applyAt && applyAt > 0){       var effectTimeout = setTimeout(function(){            if(window[effectTimeoutName] instanceof Array) {                var arrayTimeoutVal = window[effectTimeoutName];               var index = arrayTimeoutVal.indexOf(effectTimeout);               arrayTimeoutVal.splice(index, 1);               if(arrayTimeoutVal.length == 0){                   delete window[effectTimeoutName];               }           }else{               delete window[effectTimeoutName];            }           changeVisibility();        }, applyAt);       if(window.hasOwnProperty(effectTimeoutName)){           window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout];       }else{           window[effectTimeoutName] = effectTimeout;       }   }   else{       changeVisibility();   } },
  "getKey": function(key){    return window[key]; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('state') == 'playing') {           if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){               player.pauseCamera();           }           else{               player.pause();           }       }       else {           players.splice(i, 1);       }   }   return players; },
  "registerKey": function(key, value){    window[key] = value; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){    var changeFunction = function(){       var index = playList.get('selectedIndex');       if(index >= 0){           var beginFunction = function(){               playListItem.unbind('begin', beginFunction);               setMediaLabel(index);           };           var setMediaLabel = function(index){               var media = playListItem.get('media');               var text = media.get('data');               if(!text)                   text = media.get('label');               setHtml(text);           };           var setHtml = function(text){               if(text !== undefined)                   htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>');               else                   htmlText.set('html', '');           };           var playListItem = playList.get('items')[index];           if(htmlText.get('html')){               setHtml('Loading...');               playListItem.bind('begin', beginFunction);           }           else{               setMediaLabel(index);           }       }   };   var disposeFunction = function(){       htmlText.set('html', undefined);       playList.unbind('change', changeFunction, this);       playListItemStopToDispose.unbind('stop', disposeFunction, this);   };   if(playListItemStopToDispose){       playListItemStopToDispose.bind('stop', disposeFunction, this);   }   playList.bind('change', changeFunction, this);   changeFunction(); },
  "stopGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];       delete audios[audio.get('id')];   }   audio.stop(); }
 },
 "paddingBottom": 0,
 "scrollBarColor": "#000000",
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "buttonToggleMute": "this.IconButton_0D0876D9_0241_3DF5_4187_A924F6D29064",
 "id": "rootPlayer",
 "width": "100%",
 "borderRadius": 0,
 "height": "100%",
 "paddingRight": 0
})