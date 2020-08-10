TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMax": 50,
  "class": "Panorama",
  "partial": true,
  "label": "tomatosnack-front-cylinder",
  "hfovMin": 30,
  "id": "panorama_C8D4201C_C46C_BC4B_41E6_A6B7B34CE227",
  "hfov": 180,
  "thumbnailUrl": "media/panorama_C8D4201C_C46C_BC4B_41E6_A6B7B34CE227_t.jpg",
  "vfov": 99.21,
  "pitch": 0,
  "frames": [
   {
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_C8D4201C_C46C_BC4B_41E6_A6B7B34CE227_r_hq.jpeg",
       "height": 3632,
       "class": "ImageResourceLevel",
       "width": 3632
      },
      {
       "url": "media/panorama_C8D4201C_C46C_BC4B_41E6_A6B7B34CE227_r.jpeg",
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
       "url": "media/panorama_C8D4201C_C46C_BC4B_41E6_A6B7B34CE227_f_hq.jpeg",
       "height": 3632,
       "class": "ImageResourceLevel",
       "width": 3632
      },
      {
       "url": "media/panorama_C8D4201C_C46C_BC4B_41E6_A6B7B34CE227_f.jpeg",
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
       "url": "media/panorama_C8D4201C_C46C_BC4B_41E6_A6B7B34CE227_u_hq.jpeg",
       "height": 3632,
       "class": "ImageResourceLevel",
       "width": 3632
      },
      {
       "url": "media/panorama_C8D4201C_C46C_BC4B_41E6_A6B7B34CE227_u.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "overlays": [
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_C87D1C28_C454_844B_41E3_E45BA4FF4284",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_C8D4201C_C46C_BC4B_41E6_A6B7B34CE227_0_HS_0_0.png",
           "height": 63,
           "class": "ImageResourceLevel",
           "width": 64
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 2.03,
        "pitch": -1.73,
        "yaw": 3.62
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_C8D4201C_C46C_BC4B_41E6_A6B7B34CE227_0_HS_0_0_0_map.gif",
           "height": 31,
           "class": "ImageResourceLevel",
           "width": 32
          }
         ]
        },
        "pitch": -1.73,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 3.62,
        "hfov": 2.03
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_C9312D78_C48B_D42C_41DA_C359249E50E0",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_C8D4201C_C46C_BC4B_41E6_A6B7B34CE227_0_HS_1_0.png",
           "height": 50,
           "class": "ImageResourceLevel",
           "width": 50
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 1.58,
        "pitch": -3.63,
        "yaw": 7.2
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "click": "this.showWindow(this.window_CA255B36_C48A_5C24_41CE_94543B0BBD34, null, false)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_C8D4201C_C46C_BC4B_41E6_A6B7B34CE227_0_HS_1_0_0_map.gif",
           "height": 25,
           "class": "ImageResourceLevel",
           "width": 25
          }
         ]
        },
        "pitch": -3.63,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 7.2,
        "hfov": 1.58
       }
      ]
     }
    ],
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_C8D4201C_C46C_BC4B_41E6_A6B7B34CE227_d_hq.jpeg",
       "height": 3632,
       "class": "ImageResourceLevel",
       "width": 3632
      },
      {
       "url": "media/panorama_C8D4201C_C46C_BC4B_41E6_A6B7B34CE227_d.jpeg",
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
       "url": "media/panorama_C8D4201C_C46C_BC4B_41E6_A6B7B34CE227_l_hq.jpeg",
       "height": 3632,
       "class": "ImageResourceLevel",
       "width": 3632
      },
      {
       "url": "media/panorama_C8D4201C_C46C_BC4B_41E6_A6B7B34CE227_l.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_C8D4201C_C46C_BC4B_41E6_A6B7B34CE227_t.jpg"
   }
  ]
 },
 {
  "displayPlaybackBar": true,
  "viewerArea": "this.MainViewer",
  "class": "PanoramaPlayer",
  "id": "MainViewerPanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true,
  "touchControlMode": "drag_acceleration",
  "mouseControlMode": "drag_acceleration",
  "preloadEnabled": false
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "targetYaw": 4,
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 3.01
    },
    {
     "targetYaw": 66,
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 3.01
    },
    {
     "targetYaw": 70,
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 3.01
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 40,
   "yaw": 0
  },
  "id": "panorama_C8D4201C_C46C_BC4B_41E6_A6B7B34CE227_camera"
 },
 {
  "hfovMax": 50,
  "class": "Panorama",
  "partial": true,
  "label": "tomatosnack-interior1-cylinder",
  "hfovMin": 30,
  "id": "panorama_CFB64BFE_C46C_83C7_41A1_1C9882C7E7DB",
  "hfov": 180,
  "thumbnailUrl": "media/panorama_CFB64BFE_C46C_83C7_41A1_1C9882C7E7DB_t.jpg",
  "vfov": 99.21,
  "pitch": 0,
  "frames": [
   {
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_CFB64BFE_C46C_83C7_41A1_1C9882C7E7DB_r_hq.jpeg",
       "height": 3632,
       "class": "ImageResourceLevel",
       "width": 3632
      },
      {
       "url": "media/panorama_CFB64BFE_C46C_83C7_41A1_1C9882C7E7DB_r.jpeg",
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
       "url": "media/panorama_CFB64BFE_C46C_83C7_41A1_1C9882C7E7DB_f_hq.jpeg",
       "height": 3632,
       "class": "ImageResourceLevel",
       "width": 3632
      },
      {
       "url": "media/panorama_CFB64BFE_C46C_83C7_41A1_1C9882C7E7DB_f.jpeg",
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
       "url": "media/panorama_CFB64BFE_C46C_83C7_41A1_1C9882C7E7DB_u_hq.jpeg",
       "height": 3632,
       "class": "ImageResourceLevel",
       "width": 3632
      },
      {
       "url": "media/panorama_CFB64BFE_C46C_83C7_41A1_1C9882C7E7DB_u.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "overlays": [
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_CC908A8B_C476_5CED_41C4_923D2F517DE4",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_CFB64BFE_C46C_83C7_41A1_1C9882C7E7DB_0_HS_0_0.png",
           "height": 63,
           "class": "ImageResourceLevel",
           "width": 62
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 1.96,
        "pitch": -1.85,
        "yaw": 6.81
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 2)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_CFB64BFE_C46C_83C7_41A1_1C9882C7E7DB_0_HS_0_0_0_map.gif",
           "height": 31,
           "class": "ImageResourceLevel",
           "width": 31
          }
         ]
        },
        "pitch": -1.85,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 6.81,
        "hfov": 1.96
       }
      ]
     }
    ],
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_CFB64BFE_C46C_83C7_41A1_1C9882C7E7DB_d_hq.jpeg",
       "height": 3632,
       "class": "ImageResourceLevel",
       "width": 3632
      },
      {
       "url": "media/panorama_CFB64BFE_C46C_83C7_41A1_1C9882C7E7DB_d.jpeg",
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
       "url": "media/panorama_CFB64BFE_C46C_83C7_41A1_1C9882C7E7DB_l_hq.jpeg",
       "height": 3632,
       "class": "ImageResourceLevel",
       "width": 3632
      },
      {
       "url": "media/panorama_CFB64BFE_C46C_83C7_41A1_1C9882C7E7DB_l.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_CFB64BFE_C46C_83C7_41A1_1C9882C7E7DB_t.jpg"
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "targetYaw": 4,
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 3.01
    },
    {
     "targetYaw": 66,
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 3.01
    },
    {
     "targetYaw": 70,
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 3.01
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 40,
   "yaw": 0
  },
  "id": "panorama_CFB64BFE_C46C_83C7_41A1_1C9882C7E7DB_camera"
 },
 {
  "hfovMax": 50,
  "class": "Panorama",
  "partial": true,
  "label": "tomatosnack-interior2-cylinder",
  "hfovMin": 30,
  "id": "panorama_CFB6138F_C46C_9C45_4194_1B04F4BFEF72",
  "hfov": 180,
  "thumbnailUrl": "media/panorama_CFB6138F_C46C_9C45_4194_1B04F4BFEF72_t.jpg",
  "vfov": 99.21,
  "pitch": 0,
  "frames": [
   {
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_CFB6138F_C46C_9C45_4194_1B04F4BFEF72_r_hq.jpeg",
       "height": 3632,
       "class": "ImageResourceLevel",
       "width": 3632
      },
      {
       "url": "media/panorama_CFB6138F_C46C_9C45_4194_1B04F4BFEF72_r.jpeg",
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
       "url": "media/panorama_CFB6138F_C46C_9C45_4194_1B04F4BFEF72_f_hq.jpeg",
       "height": 3632,
       "class": "ImageResourceLevel",
       "width": 3632
      },
      {
       "url": "media/panorama_CFB6138F_C46C_9C45_4194_1B04F4BFEF72_f.jpeg",
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
       "url": "media/panorama_CFB6138F_C46C_9C45_4194_1B04F4BFEF72_u_hq.jpeg",
       "height": 3632,
       "class": "ImageResourceLevel",
       "width": 3632
      },
      {
       "url": "media/panorama_CFB6138F_C46C_9C45_4194_1B04F4BFEF72_u.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_CD6192CE_C497_AC64_41C3_EDCDDA19B4EA",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_CFB6138F_C46C_9C45_4194_1B04F4BFEF72_0_HS_1_0.png",
           "height": 43,
           "class": "ImageResourceLevel",
           "width": 75
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 4.75,
        "roll": 0,
        "pitch": 0.21,
        "yaw": -0.09
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 3); this.MainViewerVideoPlayer.play()",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_CFB6138F_C46C_9C45_4194_1B04F4BFEF72_0_HS_1_1_0_map.gif",
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 37
          }
         ]
        },
        "pitch": 0.21,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -0.09,
        "hfov": 4.75
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_C9090F0E_C489_D5E4_41CA_EDDE740E78A5",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_CFB6138F_C46C_9C45_4194_1B04F4BFEF72_0_HS_2_0.png",
           "height": 71,
           "class": "ImageResourceLevel",
           "width": 79
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 2.49,
        "pitch": -7,
        "yaw": 10.04
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "click": "this.showWindow(this.window_CABAA8B7_C48A_DC25_41D6_530ECD90471C, null, false)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_CFB6138F_C46C_9C45_4194_1B04F4BFEF72_0_HS_2_0_0_map.gif",
           "height": 35,
           "class": "ImageResourceLevel",
           "width": 39
          }
         ]
        },
        "pitch": -7,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 10.04,
        "hfov": 2.49
       }
      ]
     }
    ],
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_CFB6138F_C46C_9C45_4194_1B04F4BFEF72_d_hq.jpeg",
       "height": 3632,
       "class": "ImageResourceLevel",
       "width": 3632
      },
      {
       "url": "media/panorama_CFB6138F_C46C_9C45_4194_1B04F4BFEF72_d.jpeg",
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
       "url": "media/panorama_CFB6138F_C46C_9C45_4194_1B04F4BFEF72_l_hq.jpeg",
       "height": 3632,
       "class": "ImageResourceLevel",
       "width": 3632
      },
      {
       "url": "media/panorama_CFB6138F_C46C_9C45_4194_1B04F4BFEF72_l.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_CFB6138F_C46C_9C45_4194_1B04F4BFEF72_t.jpg"
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "targetYaw": 4,
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 3.01
    },
    {
     "targetYaw": 66,
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 3.01
    },
    {
     "targetYaw": 70,
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 3.01
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 40,
   "yaw": 0
  },
  "id": "panorama_CFB6138F_C46C_9C45_4194_1B04F4BFEF72_camera"
 },
 {
  "scaleMode": "fit_inside",
  "class": "Video",
  "width": 1920,
  "height": 1080,
  "id": "video_CD145F23_C49E_55DC_41D1_ECC212028C30",
  "label": "coverr-sample-35-5027",
  "thumbnailUrl": "media/video_CD145F23_C49E_55DC_41D1_ECC212028C30_t.jpg",
  "video": {
   "height": 1080,
   "class": "VideoResource",
   "mp4Url": "media/video_CD145F23_C49E_55DC_41D1_ECC212028C30.mp4",
   "width": 1920
  }
 },
 {
  "displayPlaybackBar": true,
  "viewerArea": "this.MainViewer",
  "class": "VideoPlayer",
  "id": "MainViewerVideoPlayer"
 },
 {
  "items": [
   {
    "media": "this.panorama_C8D4201C_C46C_BC4B_41E6_A6B7B34CE227",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "camera": "this.panorama_C8D4201C_C46C_BC4B_41E6_A6B7B34CE227_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_CFB64BFE_C46C_83C7_41A1_1C9882C7E7DB",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "camera": "this.panorama_CFB64BFE_C46C_83C7_41A1_1C9882C7E7DB_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_CFB6138F_C46C_9C45_4194_1B04F4BFEF72",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "camera": "this.panorama_CFB6138F_C46C_9C45_4194_1B04F4BFEF72_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.video_CD145F23_C49E_55DC_41D1_ECC212028C30",
    "start": "this.changeBackgroundWhilePlay(this.mainPlayList, 3, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 3, this.video_CD145F23_C49E_55DC_41D1_ECC212028C30)",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 0)",
    "player": "this.MainViewerVideoPlayer"
   }
  ],
  "class": "PlayList",
  "id": "mainPlayList"
 },
 {
  "items": [
   {
    "media": "this.panorama_C8D4201C_C46C_BC4B_41E6_A6B7B34CE227",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_C8041C4D_C457_84C4_41CD_71DEC0B24163, 0, 1)",
    "camera": "this.panorama_C8D4201C_C46C_BC4B_41E6_A6B7B34CE227_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_CFB64BFE_C46C_83C7_41A1_1C9882C7E7DB",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_C8041C4D_C457_84C4_41CD_71DEC0B24163, 1, 2)",
    "camera": "this.panorama_CFB64BFE_C46C_83C7_41A1_1C9882C7E7DB_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_CFB6138F_C46C_9C45_4194_1B04F4BFEF72",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_C8041C4D_C457_84C4_41CD_71DEC0B24163, 2, 3)",
    "camera": "this.panorama_CFB6138F_C46C_9C45_4194_1B04F4BFEF72_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.video_CD145F23_C49E_55DC_41D1_ECC212028C30",
    "start": "this.changeBackgroundWhilePlay(this.playList_C8041C4D_C457_84C4_41CD_71DEC0B24163, 3, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_C8041C4D_C457_84C4_41CD_71DEC0B24163, 3, this.video_CD145F23_C49E_55DC_41D1_ECC212028C30)",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.playList_C8041C4D_C457_84C4_41CD_71DEC0B24163, 3, 0)",
    "player": "this.MainViewerVideoPlayer"
   }
  ],
  "class": "PlayList",
  "id": "playList_C8041C4D_C457_84C4_41CD_71DEC0B24163"
 },
 {
  "titleFontStyle": "normal",
  "backgroundColorRatios": [],
  "titleFontWeight": "normal",
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonBorderRadius": 11,
  "paddingLeft": 0,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "scrollBarVisible": "rollOver",
  "scrollBarWidth": 10,
  "modal": true,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "scrollBarMargin": 2,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "closeButtonIconColor": "#000000",
  "verticalAlign": "middle",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "minWidth": 20,
  "bodyBorderSize": 0,
  "layout": "vertical",
  "closeButtonIconWidth": 12,
  "titleFontColor": "#000000",
  "headerBorderSize": 0,
  "shadow": true,
  "headerBackgroundOpacity": 1,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyBackgroundOpacity": 1,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "shadowSpread": 1,
  "minHeight": 20,
  "scrollBarColor": "#000000",
  "backgroundColorDirection": "vertical",
  "title": "Sample",
  "width": 400,
  "shadowBlurRadius": 6,
  "paddingBottom": 0,
  "id": "window_CA255B36_C48A_5C24_41CE_94543B0BBD34",
  "children": [
   {
    "borderSize": 0,
    "paddingLeft": 10,
    "scrollBarVisible": "rollOver",
    "scrollBarWidth": 10,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Please Check In!</SPAN></DIV></div>",
    "scrollBarMargin": 2,
    "class": "HTMLText",
    "paddingTop": 10,
    "minWidth": 0,
    "shadow": false,
    "paddingBottom": 10,
    "scrollBarColor": "#000000",
    "minHeight": 0,
    "scrollBarOpacity": 0.5,
    "height": "100%",
    "backgroundOpacity": 0,
    "width": "100%",
    "borderRadius": 0,
    "id": "htmlText_uidD019D04A_D846_CCC0_41E7_60682341E4A8",
    "paddingRight": 10
   }
  ],
  "height": 600,
  "shadowColor": "#000000",
  "titlePaddingBottom": 5,
  "titleFontFamily": "Arial",
  "closeButtonIconLineWidth": 2,
  "paddingRight": 0,
  "headerPaddingBottom": 10,
  "closeButtonPressedIconColor": "#FFFFFF",
  "bodyBorderColor": "#000000",
  "bodyPaddingRight": 5,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "headerPaddingRight": 10,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "shadowHorizontalLength": 3,
  "bodyBackgroundColorDirection": "vertical",
  "headerBorderColor": "#000000",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "shadowOpacity": 0.5,
  "headerPaddingTop": 10,
  "titleTextDecoration": "none",
  "veilColorRatios": [
   0,
   1
  ],
  "bodyPaddingLeft": 5,
  "veilOpacity": 0.4,
  "borderSize": 0,
  "titlePaddingLeft": 5,
  "footerHeight": 5,
  "overflow": "scroll",
  "titlePaddingRight": 5,
  "shadowVerticalLength": 0,
  "veilColorDirection": "horizontal",
  "class": "Window",
  "paddingTop": 0,
  "headerBackgroundColorDirection": "vertical",
  "titleFontSize": 14,
  "headerPaddingLeft": 10,
  "footerBackgroundColorDirection": "vertical",
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "closeButtonIconHeight": 12,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonBackgroundColorRatios": [],
  "closeButtonBackgroundColor": [],
  "gap": 10,
  "titlePaddingTop": 5,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "backgroundColor": [],
  "backgroundOpacity": 1,
  "contentOpaque": false,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "bodyPaddingTop": 5,
  "headerVerticalAlign": "middle",
  "borderRadius": 5,
  "horizontalAlign": "center",
  "bodyPaddingBottom": 5,
  "scrollBarOpacity": 0.5
 },
 {
  "titleFontStyle": "normal",
  "backgroundColorRatios": [],
  "titleFontWeight": "normal",
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "closeButtonBorderRadius": 11,
  "paddingLeft": 0,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "scrollBarVisible": "rollOver",
  "scrollBarWidth": 10,
  "modal": true,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "scrollBarMargin": 2,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "closeButtonIconColor": "#000000",
  "verticalAlign": "middle",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "minWidth": 20,
  "bodyBorderSize": 0,
  "layout": "vertical",
  "closeButtonIconWidth": 12,
  "titleFontColor": "#000000",
  "headerBorderSize": 0,
  "shadow": true,
  "headerBackgroundOpacity": 1,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyBackgroundOpacity": 1,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "shadowSpread": 1,
  "minHeight": 20,
  "scrollBarColor": "#000000",
  "backgroundColorDirection": "vertical",
  "title": "Sample",
  "width": 400,
  "shadowBlurRadius": 6,
  "paddingBottom": 0,
  "id": "window_CABAA8B7_C48A_DC25_41D6_530ECD90471C",
  "children": [
   {
    "borderSize": 0,
    "paddingLeft": 10,
    "scrollBarVisible": "rollOver",
    "scrollBarWidth": 10,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Hello World !</SPAN></DIV></div>",
    "scrollBarMargin": 2,
    "class": "HTMLText",
    "paddingTop": 10,
    "minWidth": 0,
    "shadow": false,
    "paddingBottom": 10,
    "scrollBarColor": "#000000",
    "minHeight": 0,
    "scrollBarOpacity": 0.5,
    "height": "100%",
    "backgroundOpacity": 0,
    "width": "100%",
    "borderRadius": 0,
    "id": "htmlText_uidD024504D_D846_CCC0_41E3_10708D1D80A6",
    "paddingRight": 10
   }
  ],
  "height": 600,
  "shadowColor": "#000000",
  "titlePaddingBottom": 5,
  "titleFontFamily": "Arial",
  "closeButtonIconLineWidth": 2,
  "paddingRight": 0,
  "headerPaddingBottom": 10,
  "closeButtonPressedIconColor": "#FFFFFF",
  "bodyBorderColor": "#000000",
  "bodyPaddingRight": 5,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "headerPaddingRight": 10,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "shadowHorizontalLength": 3,
  "bodyBackgroundColorDirection": "vertical",
  "headerBorderColor": "#000000",
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "shadowOpacity": 0.5,
  "headerPaddingTop": 10,
  "titleTextDecoration": "none",
  "veilColorRatios": [
   0,
   1
  ],
  "bodyPaddingLeft": 5,
  "veilOpacity": 0.4,
  "borderSize": 0,
  "titlePaddingLeft": 5,
  "footerHeight": 5,
  "overflow": "scroll",
  "titlePaddingRight": 5,
  "shadowVerticalLength": 0,
  "veilColorDirection": "horizontal",
  "class": "Window",
  "paddingTop": 0,
  "headerBackgroundColorDirection": "vertical",
  "titleFontSize": 14,
  "headerPaddingLeft": 10,
  "footerBackgroundColorDirection": "vertical",
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "closeButtonIconHeight": 12,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonBackgroundColorRatios": [],
  "closeButtonBackgroundColor": [],
  "gap": 10,
  "titlePaddingTop": 5,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "backgroundColor": [],
  "backgroundOpacity": 1,
  "contentOpaque": false,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "bodyPaddingTop": 5,
  "headerVerticalAlign": "middle",
  "borderRadius": 5,
  "horizontalAlign": "center",
  "bodyPaddingBottom": 5,
  "scrollBarOpacity": 0.5
 },
 {
  "class": "MediaAudio",
  "autoplay": true,
  "id": "audio_C87C263F_C457_8444_41E6_BB2815D85FD0",
  "audio": {
   "oggUrl": "media/audio_C87C263F_C457_8444_41E6_BB2815D85FD0.ogg",
   "class": "AudioResource",
   "mp3Url": "media/audio_C87C263F_C457_8444_41E6_BB2815D85FD0.mp3"
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
  "minWidth": 100,
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
  "toolTipShadowVerticalLength": 0,
  "progressBarOpacity": 1,
  "paddingBottom": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "progressBottom": 0,
  "progressHeight": 10,
  "progressBackgroundColorRatios": [
   0
  ],
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadOpacity": 1,
  "minHeight": 50,
  "progressBarBorderColor": "#000000",
  "progressBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowVerticalLength": 0,
  "height": "100%",
  "progressBorderSize": 0,
  "playbackBarBottom": 5,
  "toolTipTextShadowOpacity": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBorderColor": "#000000",
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
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
  "borderSize": 0,
  "playbackBarProgressBorderSize": 0,
  "width": "100%",
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarRight": 0,
  "toolTipShadowSpread": 0,
  "toolTipShadowHorizontalLength": 0,
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
    "horizontalAlign": "left",
    "itemBackgroundOpacity": 0,
    "itemHorizontalAlign": "center",
    "itemLabelFontFamily": "Arial",
    "selectedItemLabelFontWeight": "bold",
    "maxWidth": 800,
    "itemLabelHorizontalAlign": "center",
    "itemThumbnailShadowVerticalLength": 3,
    "maxHeight": 600,
    "itemLabelFontWeight": "normal",
    "itemLabelFontSize": 14,
    "itemBorderRadius": 0,
    "itemPaddingBottom": 3,
    "itemThumbnailShadow": true,
    "itemThumbnailShadowBlurRadius": 4,
    "itemThumbnailWidth": 100,
    "paddingLeft": 20,
    "itemThumbnailOpacity": 1,
    "itemPaddingTop": 3,
    "borderSize": 0,
    "itemThumbnailShadowHorizontalLength": 3,
    "scrollBarWidth": 10,
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
    "minWidth": 0,
    "itemBackgroundColor": [],
    "shadow": false,
    "itemOpacity": 1,
    "itemLabelTextDecoration": "none",
    "itemLabelPosition": "bottom",
    "itemLabelGap": 5,
    "layout": "horizontal",
    "paddingBottom": 10,
    "itemThumbnailHeight": 75,
    "scrollBarColor": "#FFFFFF",
    "itemThumbnailShadowColor": "#000000",
    "gap": 10,
    "minHeight": 0,
    "itemThumbnailScaleMode": "fit_outside",
    "scrollBarOpacity": 0.5,
    "itemLabelFontStyle": "normal",
    "backgroundColor": [
     "#000000"
    ],
    "backgroundOpacity": 0.2,
    "itemVerticalAlign": "middle",
    "itemThumbnailShadowOpacity": 0.8,
    "borderRadius": 5,
    "itemBackgroundColorDirection": "vertical",
    "backgroundColorDirection": "vertical",
    "playList": "this.playList_C8041C4D_C457_84C4_41CD_71DEC0B24163",
    "backgroundColorRatios": [
     0
    ],
    "paddingRight": 20
   }
  ],
  "bottom": 0,
  "borderSize": 0,
  "paddingLeft": 0,
  "scrollBarWidth": 10,
  "scrollBarVisible": "rollOver",
  "scrollBarMargin": 2,
  "class": "Container",
  "verticalAlign": "bottom",
  "overflow": "visible",
  "paddingTop": 0,
  "minWidth": 20,
  "layout": "horizontal",
  "shadow": false,
  "left": 0,
  "paddingBottom": 0,
  "right": 0,
  "scrollBarColor": "#000000",
  "gap": 10,
  "minHeight": 20,
  "scrollBarOpacity": 0.5,
  "height": 200,
  "backgroundOpacity": 0,
  "borderRadius": 0,
  "contentOpaque": false,
  "paddingRight": 0
 },
 {
  "fontFamily": "Arial",
  "horizontalAlign": "center",
  "backgroundColor": [
   "#5794FE",
   "#0065CD"
  ],
  "pressedBackgroundOpacity": 0,
  "gap": 0,
  "backgroundColorDirection": "vertical",
  "fontSize": 12,
  "rollOverIconHeight": 40,
  "pressedIconHeight": 40,
  "iconURL": "skin/Button_CE24646F_C499_B424_41E2_2F1857906E4F.png",
  "top": "4.94%",
  "pressedIconWidth": 40,
  "iconHeight": 40,
  "borderSize": 0,
  "paddingLeft": 0,
  "fontStyle": "normal",
  "iconWidth": 40,
  "verticalAlign": "middle",
  "mode": "toggle",
  "borderColor": "#000000",
  "class": "Button",
  "fontWeight": "normal",
  "paddingTop": 0,
  "rollOverIconWidth": 40,
  "minWidth": 0,
  "fontColor": "#FFFFFF",
  "shadow": false,
  "layout": "horizontal",
  "shadowSpread": 1,
  "cursor": "hand",
  "paddingBottom": 0,
  "right": "2.9%",
  "rollOverBackgroundOpacity": 0,
  "minHeight": 0,
  "width": 40,
  "height": 40,
  "backgroundOpacity": 0,
  "pressedIconURL": "skin/Button_CE24646F_C499_B424_41E2_2F1857906E4F_pressed.png",
  "iconBeforeLabel": true,
  "textDecoration": "none",
  "borderRadius": 0,
  "shadowBlurRadius": 6,
  "id": "Button_CE24646F_C499_B424_41E2_2F1857906E4F",
  "shadowColor": "#000000",
  "backgroundColorRatios": [
   0,
   1
  ],
  "paddingRight": 0
 }
], 
 "height": "100%",
 "contentOpaque": false,
 "start": "this.playAudioList([this.audio_C87C263F_C457_8444_41E6_BB2815D85FD0]); this.syncPlaylists([this.playList_C8041C4D_C457_84C4_41CD_71DEC0B24163,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0)",
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "class": "Player",
 "verticalAlign": "top",
 "overflow": "visible",
 "paddingTop": 0,
 "minWidth": 20,
 "layout": "absolute",
 "shadow": false,
 "mouseWheelEnabled": true,
 "backgroundPreloadEnabled": true,
 "scrollBarColor": "#000000",
 "gap": 10,
 "minHeight": 20,
 "scrollBarOpacity": 0.5,
 "buttonToggleMute": "this.Button_CE24646F_C499_B424_41E2_2F1857906E4F",
 "paddingBottom": 0,
 "width": "100%",
 "borderRadius": 0,
 "scripts": {
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){    var self = this;   var closeFunction = function(){       self.MainViewer.set('toolTipEnabled', true);       this.resumePlayers(playersPaused, !containsAudio);       if(isVideo) {           this.unbind('resize', resizeFunction, this);       }       w.unbind('close', closeFunction, this);   };   var endFunction = function(){       w.hide();   };   var resizeFunction = function(){       var parentWidth = self.get('actualWidth');       var parentHeight = self.get('actualHeight');       var mediaWidth = media.get('width');       var mediaHeight = media.get('height');       var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100;       var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100;       var windowWidth = popupMaxWidthNumber * parentWidth;       var windowHeight = popupMaxHeightNumber * parentHeight;       var footerHeight = w.get('footerHeight');       var headerHeight = w.get('headerHeight');       if(!headerHeight) {           var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom');           var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom');           headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight;           headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom');       }       if(!footerHeight) {           footerHeight = 0;       }       var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight');       var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom');       var parentAspectRatio = contentWindowWidth / contentWindowHeight;       var mediaAspectRatio = mediaWidth / mediaHeight;       if(parentAspectRatio > mediaAspectRatio) {           windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight');       }       else {           windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom');       }       if(windowWidth > parentWidth * popupMaxWidthNumber) {           windowWidth = parentWidth * popupMaxWidthNumber;       }       if(windowHeight > parentHeight * popupMaxHeightNumber) {           windowHeight = parentHeight * popupMaxHeightNumber;       }       w.set('width', windowWidth);       w.set('height', windowHeight);       w.set('x', (parentWidth - w.get('actualWidth')) * 0.5);       w.set('y', (parentHeight - w.get('actualHeight')) * 0.5);   };   if(autoCloseWhenFinished){       this.executeFunctionWhenChange(playList, 0, endFunction);   }   var isVideo = media.get('class') == 'Video';   if(isVideo){       this.bind('resize', resizeFunction, this);       resizeFunction();   }   else {       w.set('width', popupMaxWidth);       w.set('height', popupMaxHeight);   }   this.MainViewer.set('toolTipEnabled', false);   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "existsKey": function(key){    return key in window; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){    var setVisibility = function(visible){       for(var i = 0, length = components.length; i<length; i++){           components[i].set('visible', visible);       }   };   if (this.rootPlayer.touchEnabled){       setVisibility(true);   } else {       var timeoutID = -1;       var rollOverFunction = function(){           setVisibility(true);           if(timeoutID >= 0) clearTimeout(timeoutID);           parentComponent.unbind('rollOver', rollOverFunction, this);           parentComponent.bind('rollOut', rollOutFunction, this);       };       var rollOutFunction = function(){           var timeoutFunction = function(){               setVisibility(false);               parentComponent.unbind('rollOver', rollOverFunction, this);           };           parentComponent.unbind('rollOut', rollOutFunction, this);           parentComponent.bind('rollOver', rollOverFunction, this);           timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut);       };       parentComponent.bind('rollOver', rollOverFunction, this);   } },
  "unregisterKey": function(key){    delete window[key]; },
  "shareTwitter": function(url){    window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "pauseGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];   }   audio.pause(); },
  "shareGoogle": function(url){    window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){    var resetFunction = function(){       panoramaPlayListItem.unbind('stop', resetFunction, this);       player.set('mapPlayer', null);   };   panoramaPlayListItem.bind('stop', resetFunction, this);   var player = panoramaPlayListItem.get('player');   player.set('mapPlayer', mapPlayer); },
  "registerKey": function(key, value){    window[key] = value; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){    var audios = window.currentGlobalAudios;   if(!audios) return;   var resumeFunction = this.resumeGlobalAudios;   var endFunction = function(){       if(playList.get('selectedIndex') != index) {           resumeFunction(caller);       }   };   this.pauseGlobalAudios(caller);   this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){    var self = this;   var stateChangeFunction = function(event){       if(event.data.state == 'stopped'){           dispose();       }   };   var changeFunction = function(){       var index = playListDispatcher.get('selectedIndex');       if(index != -1){           indexDispatcher = index;           dispose();       }   };   var dispose = function(){       if(!playListDispatcher) return;       playList.set('selectedIndex', -1);       if(panoramaSequence && panoramaSequenceIndex != -1){           if(panoramaSequence) {               if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){                   var initialPosition = camera.get('initialPosition');                   var oldYaw = initialPosition.get('yaw');                   var oldPitch = initialPosition.get('pitch');                   var oldHfov = initialPosition.get('hfov');                   var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1];                   initialPosition.set('yaw', previousMovement.get('targetYaw'));                   initialPosition.set('pitch', previousMovement.get('targetPitch'));                   initialPosition.set('hfov', previousMovement.get('targetHfov'));                   var restoreInitialPositionFunction = function(event){                       initialPosition.set('yaw', oldYaw);                       initialPosition.set('pitch', oldPitch);                       initialPosition.set('hfov', oldHfov);                       itemDispatcher.unbind('end', restoreInitialPositionFunction, self);                   };                   itemDispatcher.bind('end', restoreInitialPositionFunction, self);               }               panoramaSequence.set('movementIndex', panoramaSequenceIndex);           }       }       playListDispatcher.set('selectedIndex', indexDispatcher);       if(player){           player.unbind('stateChange', stateChangeFunction, self);       }       if(sameViewerArea){           if(playList != playListDispatcher)               playListDispatcher.unbind('change', changeFunction, self);       }       else{           viewerArea.set('visible', false);       }       playListDispatcher = undefined;   };   if(!mediaDispatcher){       var currentIndex = playList.get('selectedIndex');       var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer);       if(currentPlayer) {           var playerClass = currentPlayer.get('class');           if(playerClass == 'PanoramaPlayer') mediaDispatcher = currentPlayer.get('panorama');           else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video');           else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum');           else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map');       }   }   var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined;   if(!playListDispatcher){       playList.set('selectedIndex', index);       return;   }   var indexDispatcher = playListDispatcher.get('selectedIndex');   if(playList.get('selectedIndex') == index || indexDispatcher == -1){       return;   }   var item = playList.get('items')[index];   var itemDispatcher = playListDispatcher.get('items')[indexDispatcher];   var viewerArea = item.get('player').get('viewerArea');   var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea');   if(sameViewerArea){       if(playList != playListDispatcher){           playListDispatcher.set('selectedIndex', -1);           playListDispatcher.bind('change', changeFunction, this);       }   }   else{       viewerArea.set('visible', true);   }   var panoramaSequenceIndex = -1;   var panoramaSequence = undefined;   var camera = itemDispatcher.get('camera');   if(camera){       panoramaSequence = camera.get('initialSequence');       if(panoramaSequence) {           panoramaSequenceIndex = panoramaSequence.get('movementIndex');       }   }   playList.set('selectedIndex', index);   var player = undefined;   if(item.get('player') != itemDispatcher.get('player')){       player = item.get('player');       player.bind('stateChange', stateChangeFunction, this);   }   this.executeFunctionWhenChange(playList, index, dispose); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('state') == 'playing') {           if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){               player.pauseCamera();           }           else{               player.pause();           }       }       else {           players.splice(i, 1);       }   }   return players; },
  "setMainMediaByName": function(name){    var items = this.mainPlayList.get('items');   for(var i = 0; i<items.length; ++i){       if(items[i].get('media').get('label') == name) {           this.mainPlayList.set('selectedIndex', i);           return;       }   } },
  "loadFromCurrentMediaPlayList": function(playList, delta){    var currentIndex = playList.get('selectedIndex');   var totalItems = playList.get('items').length;   var newIndex = (currentIndex + delta) % totalItems;   while(newIndex < 0){       newIndex = totalItems + newIndex;   };   if(currentIndex != newIndex){       playList.set('selectedIndex', newIndex);   }; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){    var enabled = this.get(playerFlag);   for(var i in components){       components[i].set('visible', enabled);   } },
  "loopAlbum": function(playList, index){    var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var loopFunction = function(){       player.play();   };   this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setMainMediaByIndex": function(index){    if(index >= 0 && index < this.mainPlayList.get('items').length){       this.mainPlayList.set('selectedIndex', index);   } },
  "updateVideoCues": function(playList, index){    var playListItem = playList.get('items')[index];   var video = playListItem.get('media');   if(video.get('cues').length == 0)       return;   var player = playListItem.get('player');   var cues = [];   var changeFunction = function(){       if(playList.get('selectedIndex') != index){           video.unbind('cueChange', cueChangeFunction, this);           playList.unbind('change', changeFunction, this);       }   };   var cueChangeFunction = function(event){       var activeCues = event.data.activeCues;       for(var i = 0, count = cues.length; i<count; ++i){           var cue = cues[i];           if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){               cue.trigger('end');           }       }       cues = activeCues;   };   video.bind('cueChange', cueChangeFunction, this);   playList.bind('change', changeFunction, this); },
  "getPlayListWithMedia": function(media, onlySelected){    var playLists = this.getByClassName('PlayList');   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       if(onlySelected && playList.get('selectedIndex') == -1)           continue;       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           if(items[j].get('media') == media)               return playList;       }   }   return undefined; },
  "isCardboardViewMode": function(){    var players = this.getByClassName('PanoramaPlayer');   return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){    var endFunction = function(){       if(playList.get('selectedIndex') == fromIndex)           playList.set('selectedIndex', toIndex);   };   this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "fixTogglePlayPauseButton": function(player){    var state = player.get('state');   var button = player.get('buttonPlayPause');   if(typeof button !== 'undefined' && player.get('state') == 'playing'){       button.set('pressed', true);   } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){    this.unregisterKey('visibility_'+component.get('id'));   var changeVisibility = function(){        if(effect && propertyEffect){            component.set(propertyEffect, effect);        }        component.set('visible', visible);       if(component.get('class') == 'ViewerArea'){           try{               if(visible) component.restart();               else        component.pause();           }           catch(e){};       }   };   var effectTimeoutName = 'effectTimeout_'+component.get('id');   if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){       var effectTimeout = window[effectTimeoutName];       if(effectTimeout instanceof Array){           for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) }       }else{           clearTimeout(effectTimeout);       }       delete window[effectTimeoutName];   }   else if(visible == component.get('visible') && !ignoreClearTimeout)       return;   if(applyAt && applyAt > 0){       var effectTimeout = setTimeout(function(){            if(window[effectTimeoutName] instanceof Array) {                var arrayTimeoutVal = window[effectTimeoutName];               var index = arrayTimeoutVal.indexOf(effectTimeout);               arrayTimeoutVal.splice(index, 1);               if(arrayTimeoutVal.length == 0){                   delete window[effectTimeoutName];               }           }else{               delete window[effectTimeoutName];            }           changeVisibility();        }, applyAt);       if(window.hasOwnProperty(effectTimeoutName)){           window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout];       }else{           window[effectTimeoutName] = effectTimeout;       }   }   else{       changeVisibility();   } },
  "getGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios != undefined && audio.get('id') in audios){       audio = audios[audio.get('id')];   }   return audio; },
  "stopGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];       delete audios[audio.get('id')];   }   audio.stop(); },
  "getActivePlayerWithViewer": function(viewerArea){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   players = players.concat(this.getByClassName('MapPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('viewerArea') == viewerArea) {           var playerClass = player.get('class');           if(playerClass == 'PanoramaPlayer' && player.get('panorama') != undefined) return player;           else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player;           else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player;           else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player;       }   }   return undefined; },
  "resumeGlobalAudios": function(caller){    if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller)       return;   window.currentGlobalAudiosActionCaller = undefined;   var audios = window.currentGlobalAudios;   if(!audios) return;   for(var audio in audios){       audios[audio].play();   } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){    var changeFunction = function(){       var index = playList.get('selectedIndex');       if(index >= 0){           var beginFunction = function(){               playListItem.unbind('begin', beginFunction);               setMediaLabel(index);           };           var setMediaLabel = function(index){               var media = playListItem.get('media');               var text = media.get('data');               if(!text)                   text = media.get('label');               setHtml(text);           };           var setHtml = function(text){               if(text !== undefined)                   htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>');               else                   htmlText.set('html', '');           };           var playListItem = playList.get('items')[index];           if(htmlText.get('html')){               setHtml('Loading...');               playListItem.bind('begin', beginFunction);           }           else{               setMediaLabel(index);           }       }   };   var disposeFunction = function(){       htmlText.set('html', undefined);       playList.unbind('change', changeFunction, this);       playListItemStopToDispose.unbind('stop', disposeFunction, this);   };   if(playListItemStopToDispose){       playListItemStopToDispose.bind('stop', disposeFunction, this);   }   playList.bind('change', changeFunction, this);   changeFunction(); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){    for(var i = 0; i<players.length; ++i){       var player = players[i];       if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){           player.resumeCamera();       }       else{           player.play();       }   } },
  "syncPlaylists": function(playLists){    var changeToMedia = function(media, playListDispatched){       for(var i = 0, count = playLists.length; i<count; ++i){           var playList = playLists[i];           if(playList != playListDispatched){               var items = playList.get('items');               for(var j = 0, countJ = items.length; j<countJ; ++j){                   if(items[j].get('media') == media){                       if(playList.get('selectedIndex') != j){                           playList.set('selectedIndex', j);                       }                       break;                   }               }           }       }   };   var changeFunction = function(event){       var playListDispatched = event.source;       var selectedIndex = playListDispatched.get('selectedIndex');       if(selectedIndex < 0)           return;       var media = playListDispatched.get('items')[selectedIndex].get('media');       changeToMedia(media, playListDispatched);   };   var mapPlayerChangeFunction = function(event){       var panoramaMapLocation = event.source.get('panoramaMapLocation');       if(panoramaMapLocation){           var map = panoramaMapLocation.get('map');           changeToMedia(map);       }   };   for(var i = 0, count = playLists.length; i<count; ++i){       playLists[i].bind('change', changeFunction, this);   }   var mapPlayers = this.getByClassName('MapPlayer');   for(var i = 0, count = mapPlayers.length; i<count; ++i){       mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this);   } },
  "startPanoramaWithCamera": function(panorama, camera){    var playLists = this.getByClassName('PlayList');   if(playLists.length == 0)       return;    var restoreItems = [];   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           var item = items[j];           if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){               restoreItems.push({camera: item.get('camera'), item: item});               item.set('camera', camera);           }       }   }   if(restoreItems.length > 0) {       var restoreCameraOnStop = function(){           for (var i = 0; i < restoreItems.length; i++) {               restoreItems[i].item.set('camera', restoreItems[i].camera);           }           restoreItems[0].item.unbind('stop', restoreCameraOnStop, this);       };       restoreItems[0].item.bind('stop', restoreCameraOnStop, this);   } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){    var self = this;   var endObject = undefined;   var changePlayListFunction = function(event){       if(event.data.previousSelectedIndex == index){           if(changeFunction) changeFunction();           if(endFunction) endObject.unbind('end', endFunction, self);           playList.unbind('change', changePlayListFunction, self);       }   };   if(endFunction){       var playListItem = playList.get('items')[index];       var playListItemClass = playListItem.get('class');       if(playListItemClass == 'PanoramaPlayListItem'){           var camera = playListItem.get('camera');           endObject = camera.get('initialSequence');           if(!endObject) return;       }       else{           endObject = playListItem.get('media');       }       endObject.bind('end', endFunction, this);   }   playList.bind('change', changePlayListFunction, this); },
  "playGlobalAudio": function(audio, endCallback){    var endFunction = function(){       audio.unbind('end', endFunction, this);       this.stopGlobalAudio(audio);       if(endCallback)           endCallback();   };   audio = this.getGlobalAudio(audio);   var audios = window.currentGlobalAudios;   if(!audios){       audios = window.currentGlobalAudios = {};   }   audios[audio.get('id')] = audio;   if(audio.get('state') == 'playing'){       return;   }   if(!audio.get('loop')){       audio.bind('end', endFunction, this);   }   audio.play(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){    var closeFunction = function(){       clearAutoClose();       this.resumePlayers(playersPaused, !containsAudio);       w.unbind('close', closeFunction, this);   };   var clearAutoClose = function(){       w.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var timeoutID = undefined;   if(autoCloseMilliSeconds){       var autoCloseFunction = function(){           w.hide();       };       w.bind('click', clearAutoClose, this);       timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           this.stopGlobalAudio(audio);           if(isPanorama) {               var media = playListItem.get('media');               var audios = media.get('audios');               audios.splice(audios.indexOf(audio), 1);               media.set('audios', audios);           }           playList.unbind('change', changeFunction, this);           if(endCallback)               endCallback();       }   };   var audios = window.currentGlobalAudios;   if(audios && audio.get('id') in audios){       audio = audios[audio.get('id')];       if(audio.get('state') != 'playing'){           audio.play();       }       return;   }   playList.bind('change', changeFunction, this);   var playListItem = playList.get('items')[index];   var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem';   if(isPanorama) {       var media = playListItem.get('media');       var audios = (media.get('audios') || []).slice();       if(audio.get('class') == 'MediaAudio') {           var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio');           panoramaAudio.set('autoplay', false);           panoramaAudio.set('audio', audio.get('audio'));           panoramaAudio.set('loop', audio.get('loop'));           panoramaAudio.set('id', audio.get('id'));           audio = panoramaAudio;       }       audios.push(audio);       media.set('audios', audios);   }   this.playGlobalAudio(audio, endCallback); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){    var self = this;   var showEndFunction = function() {       popupPanoramaOverlay.unbind('showEnd', showEndFunction);       closeButton.bind('click', hideFunction, this);       setCloseButtonPosition();       closeButton.set('visible', true);   };   var endFunction = function() {       if(!popupPanoramaOverlay.get('loop'))           hideFunction();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       if(!self.isCardboardViewMode())           popupPanoramaOverlay.set('visible', false);       closeButton.set('visible', false);       closeButton.unbind('click', hideFunction, this);       popupPanoramaOverlay.unbind('end', endFunction, self);       self.resumePlayers(playersPaused, true);       self.resumeGlobalAudios();   };   var setCloseButtonPosition = function() {       var right = 10;       var top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   this.MainViewer.set('toolTipEnabled', false);   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(true);   this.pauseGlobalAudios();   popupPanoramaOverlay.bind('end', endFunction, this, true);   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); },
  "changeBackgroundWhilePlay": function(playList, index, color){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           playList.unbind('change', changeFunction, this);           if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){               viewerArea.set('backgroundColor', backgroundColorBackup);               viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup);           }       }   };   var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var viewerArea = player.get('viewerArea');   var backgroundColorBackup = viewerArea.get('backgroundColor');   var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios');   var colorRatios = [0];   if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){       viewerArea.set('backgroundColor', color);       viewerArea.set('backgroundColorRatios', colorRatios);       playList.bind('change', changeFunction, this);   } },
  "playAudioList": function(audios){    if(audios.length == 0) return;   var currentAudioCount = -1;   var currentAudio;   var playGlobalAudioFunction = this.playGlobalAudio;   var playNext = function(){       if(++currentAudioCount >= audios.length)           currentAudioCount = 0;       currentAudio = audios[currentAudioCount];       playGlobalAudioFunction(currentAudio, playNext);   };   playNext(); },
  "getKey": function(key){    return window[key]; },
  "autotriggerAtStart": function(player, callback){    var stateChangeFunction = function(event){        if(event.data.state == 'playing'){           callback();           player.unbind('stateChange', stateChangeFunction, this);       }   };   player.bind('stateChange', stateChangeFunction, this); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){    var self = this;   var closed = false;   var playerClickFunction = function() {       zoomImage.unbind('loaded', loadedFunction, self);       hideFunction();   };   var clearAutoClose = function(){       zoomImage.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var loadedFunction = function(){       self.unbind('click', playerClickFunction, self);       veil.set('visible', true);       setCloseButtonPosition();       closeButton.set('visible', true);       zoomImage.unbind('loaded', loadedFunction, this);       zoomImage.bind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this);       timeoutID = setTimeout(timeoutFunction, 200);   };   var timeoutFunction = function(){       timeoutID = undefined;       if(autoCloseMilliSeconds){           var autoCloseFunction = function(){               hideFunction();           };           zoomImage.bind('click', clearAutoClose, this);           timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);       }       zoomImage.bind('backgroundClick', hideFunction, this);       if(toggleImage) {           zoomImage.bind('click', toggleFunction, this);           zoomImage.set('imageCursor', 'hand');       }       closeButton.bind('click', hideFunction, this);       if(loadedCallback)           loadedCallback();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       closed = true;       if(timeoutID)           clearTimeout(timeoutID);       if(autoCloseMilliSeconds)           clearAutoClose();       if(hideCallback)           hideCallback();       zoomImage.set('visible', false);       if(hideEffect && hideEffect.get('duration') > 0){           hideEffect.bind('end', endEffectFunction, this);       }       else{           zoomImage.set('image', null);       }       closeButton.set('visible', false);       veil.set('visible', false);       self.unbind('click', playerClickFunction, self);       zoomImage.unbind('backgroundClick', hideFunction, this);       zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true);       if(toggleImage) {           zoomImage.unbind('click', toggleFunction, this);           zoomImage.set('cursor', 'default');       }       closeButton.unbind('click', hideFunction, this);       self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               self.resumeGlobalAudios();           }           self.stopGlobalAudio(audio);       }   };   var endEffectFunction = function() {       zoomImage.set('image', null);       hideEffect.unbind('end', endEffectFunction, this);   };   var toggleFunction = function() {       zoomImage.set('image', isToggleVisible() ? image : toggleImage);   };   var isToggleVisible = function() {       return zoomImage.get('image') == toggleImage;   };   var setCloseButtonPosition = function() {       var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10;       var top = zoomImage.get('imageTop') + 10;       if(right < 10) right = 10;       if(top < 10) top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var userInteractionStartFunction = function() {       if(timeoutUserInteractionID){           clearTimeout(timeoutUserInteractionID);           timeoutUserInteractionID = undefined;       }       else{           closeButton.set('visible', false);       }   };   var userInteractionEndFunction = function() {       if(!closed){           timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300);       }   };   var userInteractionTimeoutFunction = function() {       timeoutUserInteractionID = undefined;       closeButton.set('visible', true);       setCloseButtonPosition();   };   this.MainViewer.set('toolTipEnabled', false);   var veil = this.veilPopupPanorama;   var zoomImage = this.zoomImagePopupPanorama;   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);   if(audio){       if(stopBackgroundAudio){           this.pauseGlobalAudios();       }       this.playGlobalAudio(audio);   }   var timeoutID = undefined;   var timeoutUserInteractionID = undefined;   zoomImage.bind('loaded', loadedFunction, this);   setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0);   zoomImage.set('image', image);   zoomImage.set('customWidth', customWidth);   zoomImage.set('customHeight', customHeight);   zoomImage.set('showEffect', showEffect);   zoomImage.set('hideEffect', hideEffect);   zoomImage.set('visible', true);   return zoomImage; },
  "shareFacebook": function(url){    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "pauseGlobalAudios": function(caller){    var audios = window.currentGlobalAudios;   window.currentGlobalAudiosActionCaller = caller;   if(!audios) return;   for(var audio in audios){       audios[audio].pause();   } }
 },
 "id": "rootPlayer",
 "paddingRight": 0
})