TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMax": 100,
  "class": "Panorama",
  "partial": false,
  "label": "Front View",
  "hfovMin": 60,
  "id": "panorama_3E7B75B8_366B_7918_4166_1323C2615BE4",
  "hfov": 360,
  "thumbnailUrl": "media/panorama_3E7B75B8_366B_7918_4166_1323C2615BE4_t.jpg",
  "vfov": 180,
  "pitch": 0,
  "frames": [
   {
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_3E7B75B8_366B_7918_4166_1323C2615BE4_r_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_3E7B75B8_366B_7918_4166_1323C2615BE4_r.jpeg",
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
       "url": "media/panorama_3E7B75B8_366B_7918_4166_1323C2615BE4_f_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_3E7B75B8_366B_7918_4166_1323C2615BE4_f.jpeg",
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
       "url": "media/panorama_3E7B75B8_366B_7918_4166_1323C2615BE4_b_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_3E7B75B8_366B_7918_4166_1323C2615BE4_b.jpeg",
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
       "url": "media/panorama_3E7B75B8_366B_7918_4166_1323C2615BE4_u_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_3E7B75B8_366B_7918_4166_1323C2615BE4_u.jpeg",
       "height": 1273,
       "class": "ImageResourceLevel",
       "width": 1273
      }
     ]
    },
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_3E7B65B9_366B_7918_41B1_2A96965A6BBA",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_3E7B75B8_366B_7918_4166_1323C2615BE4_0_HS_16_0.png",
           "height": 37,
           "class": "ImageResourceLevel",
           "width": 142
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 8.51,
        "roll": 0,
        "pitch": 4.79,
        "yaw": 13.61
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "toolTip": "About Us",
        "displayTooltipInTouchScreens": true,
        "click": "var newWindow = window.open(\"https://theexhibitsource.com/\", \"_blank\"); newWindow.focus()"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_3E7B75B8_366B_7918_4166_1323C2615BE4_0_HS_16_1_0_map.gif",
           "height": 18,
           "class": "ImageResourceLevel",
           "width": 71
          }
         ]
        },
        "pitch": 4.79,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 13.61,
        "hfov": 8.51
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_3E7B15B9_366B_7918_41C7_F65D58A1F19E",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_3E7B75B8_366B_7918_4166_1323C2615BE4_0_HS_15_0.png",
           "height": 41,
           "class": "ImageResourceLevel",
           "width": 41
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 2.47,
        "pitch": -0.48,
        "yaw": -19.53
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "toolTip": "Contact Us",
        "displayTooltipInTouchScreens": true,
        "click": "var newWindow = window.open(\"mailto:contactus@theexhibitsource.com\", \"_blank\"); newWindow.focus()"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_3E7B75B8_366B_7918_4166_1323C2615BE4_0_HS_15_0_0_map.gif",
           "height": 20,
           "class": "ImageResourceLevel",
           "width": 20
          }
         ]
        },
        "pitch": -0.48,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -19.53,
        "hfov": 2.47
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_3E7B05B9_366B_7918_41B4_E4994D4CC9EA",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_3E7B75B8_366B_7918_4166_1323C2615BE4_0_HS_14_0.png",
           "height": 75,
           "class": "ImageResourceLevel",
           "width": 137
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 8.22,
        "roll": 0,
        "pitch": 1.12,
        "yaw": 2.24
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "toolTip": "Portfolio",
        "displayTooltipInTouchScreens": true,
        "click": "var newWindow = window.open(\"https://theexhibitsource.com/rental-tabletop10x10.htm\", \"_blank\"); newWindow.focus()"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_3E7B75B8_366B_7918_4166_1323C2615BE4_0_HS_14_1_0_map.gif",
           "height": 37,
           "class": "ImageResourceLevel",
           "width": 68
          }
         ]
        },
        "pitch": 1.12,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 2.24,
        "hfov": 8.22
       }
      ]
     }
    ],
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_3E7B75B8_366B_7918_4166_1323C2615BE4_d_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_3E7B75B8_366B_7918_4166_1323C2615BE4_d.jpeg",
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
       "url": "media/panorama_3E7B75B8_366B_7918_4166_1323C2615BE4_l_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_3E7B75B8_366B_7918_4166_1323C2615BE4_l.jpeg",
       "height": 1273,
       "class": "ImageResourceLevel",
       "width": 1273
      }
     ]
    },
    "thumbnailUrl": "media/panorama_3E7B75B8_366B_7918_4166_1323C2615BE4_t.jpg"
   }
  ]
 },
 {
  "viewerArea": "this.MainViewer",
  "class": "PanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "gyroscopeVerticalDraggingEnabled": true,
  "mouseControlMode": "drag_rotation",
  "displayPlaybackBar": true,
  "id": "MainViewerPanoramaPlayer",
  "preloadEnabled": false
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
  "id": "panorama_3E7B75B8_366B_7918_4166_1323C2615BE4_camera"
 },
 {
  "hfovMax": 120,
  "class": "Panorama",
  "partial": false,
  "label": "Meeting Space",
  "hfovMin": 60,
  "id": "panorama_319C60DD_366B_D718_4180_843A87D36DBA",
  "hfov": 360,
  "thumbnailUrl": "media/panorama_319C60DD_366B_D718_4180_843A87D36DBA_t.jpg",
  "vfov": 180,
  "pitch": 0,
  "frames": [
   {
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_319C60DD_366B_D718_4180_843A87D36DBA_r_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_319C60DD_366B_D718_4180_843A87D36DBA_r.jpeg",
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
       "url": "media/panorama_319C60DD_366B_D718_4180_843A87D36DBA_f_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_319C60DD_366B_D718_4180_843A87D36DBA_f.jpeg",
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
       "url": "media/panorama_319C60DD_366B_D718_4180_843A87D36DBA_b_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_319C60DD_366B_D718_4180_843A87D36DBA_b.jpeg",
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
       "url": "media/panorama_319C60DD_366B_D718_4180_843A87D36DBA_u_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_319C60DD_366B_D718_4180_843A87D36DBA_u.jpeg",
       "height": 1273,
       "class": "ImageResourceLevel",
       "width": 1273
      }
     ]
    },
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_319C70DD_366B_D718_418C_264112886499",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_319C60DD_366B_D718_4180_843A87D36DBA_0_HS_7_0.png",
           "height": 41,
           "class": "ImageResourceLevel",
           "width": 41
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 2.45,
        "pitch": -8.47,
        "yaw": 15.37
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "toolTip": "Zoom Meeting",
        "displayTooltipInTouchScreens": true,
        "click": "var newWindow = window.open(\"https://zoom.us/meetings\", \"_blank\"); newWindow.focus()"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_319C60DD_366B_D718_4180_843A87D36DBA_0_HS_7_0_0_map.gif",
           "height": 20,
           "class": "ImageResourceLevel",
           "width": 20
          }
         ]
        },
        "pitch": -8.47,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 15.37,
        "hfov": 2.45
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_3CDAC63F_3665_DB18_41B0_2CF6232606E7",
      "enabledInCardboard": true,
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_319C60DD_366B_D718_4180_843A87D36DBA_0_HS_9_0.png",
           "height": 162,
           "class": "ImageResourceLevel",
           "width": 276
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 16.46,
        "roll": 0,
        "pitch": 4.11,
        "yaw": 19.48
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "toolTip": "Play Animation",
        "displayTooltipInTouchScreens": true,
        "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_3DB285D5_366D_D968_41C7_9984DF02D706, {'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','borderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':0,'pressedIconHeight':20,'rollOverBorderSize':0,'rollOverBackgroundColorDirection':'vertical','paddingBottom':0,'pressedBorderColor':'#000000','iconLineWidth':5,'rollOverIconLineWidth':5,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'pressedIconColor':'#888888','backgroundColorDirection':'vertical','paddingLeft':0,'rollOverIconWidth':20,'rollOverIconColor':'#666666','iconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'borderSize':0,'backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'iconColor':'#000000','rollOverBorderColor':'#000000','pressedIconLineWidth':5,'rollOverIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':0}) } else { this.showPopupMedia(this.window_3D8A5798_366D_D918_41AE_B96CA92C4849, this.video_3D24018C_366A_D9F8_41C6_C00810A27035, this.PlayList_3A2EAF49_366E_E979_41B4_AF3C12497689, '100%', '100%', true, true); this.PlayList_3A2EAF49_366E_E979_41B4_AF3C12497689.set('selectedIndex', 0); ; this.viewer_uid3A293F46_366E_E96B_4199_680C83657318VideoPlayer.play(); ; this.pauseGlobalAudios() }"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_319C60DD_366B_D718_4180_843A87D36DBA_0_HS_9_1_0_map.gif",
           "height": 81,
           "class": "ImageResourceLevel",
           "width": 138
          }
         ]
        },
        "pitch": 4.11,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 19.48,
        "hfov": 16.46
       }
      ]
     },
     {
      "class": "PopupPanoramaOverlay",
      "popupMaxWidth": "95%",
      "yaw": 19.48,
      "rotationX": 0,
      "hideDuration": 500,
      "rotationY": 0,
      "hideEasing": "cubic_out",
      "showEasing": "cubic_in",
      "showDuration": 500,
      "id": "popup_3D5C9F15_3665_2AE8_41A4_D66359947240",
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
      "autoplay": true,
      "rotationZ": 0
     },
     {
      "class": "PopupPanoramaOverlay",
      "popupMaxWidth": "100%",
      "yaw": 19.48,
      "rotationX": 0,
      "hideDuration": 500,
      "rotationY": 0,
      "hideEasing": "cubic_out",
      "showEasing": "cubic_in",
      "showDuration": 500,
      "id": "popup_3DB285D5_366D_D968_41C7_9984DF02D706",
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
      "autoplay": true,
      "rotationZ": 0
     }
    ],
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_319C60DD_366B_D718_4180_843A87D36DBA_d_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_319C60DD_366B_D718_4180_843A87D36DBA_d.jpeg",
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
       "url": "media/panorama_319C60DD_366B_D718_4180_843A87D36DBA_l_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_319C60DD_366B_D718_4180_843A87D36DBA_l.jpeg",
       "height": 1273,
       "class": "ImageResourceLevel",
       "width": 1273
      }
     ]
    },
    "thumbnailUrl": "media/panorama_319C60DD_366B_D718_4180_843A87D36DBA_t.jpg"
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
  "id": "panorama_319C60DD_366B_D718_4180_843A87D36DBA_camera"
 },
 {
  "items": [
   {
    "media": "this.panorama_3E7B75B8_366B_7918_4166_1323C2615BE4",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "camera": "this.panorama_3E7B75B8_366B_7918_4166_1323C2615BE4_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_319C60DD_366B_D718_4180_843A87D36DBA",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 0)",
    "camera": "this.panorama_319C60DD_366B_D718_4180_843A87D36DBA_camera",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ],
  "class": "PlayList",
  "id": "mainPlayList"
 },
 {
  "items": [
   {
    "media": "this.panorama_3E7B75B8_366B_7918_4166_1323C2615BE4",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_0C8220F3_0217_7925_4177_A3813F3BC9BA, 0, 1)",
    "camera": "this.panorama_3E7B75B8_366B_7918_4166_1323C2615BE4_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_319C60DD_366B_D718_4180_843A87D36DBA",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_0C8220F3_0217_7925_4177_A3813F3BC9BA, 1, 0)",
    "camera": "this.panorama_319C60DD_366B_D718_4180_843A87D36DBA_camera",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ],
  "class": "PlayList",
  "id": "playList_0C8220F3_0217_7925_4177_A3813F3BC9BA"
 },
 {
  "scaleMode": "fit_inside",
  "class": "Video",
  "width": 10,
  "height": 20,
  "id": "video_3D24018C_366A_D9F8_41C6_C00810A27035",
  "label": "tamozz-vr-animate-Desktop",
  "thumbnailUrl": "media/video_3D24018C_366A_D9F8_41C6_C00810A27035_t.jpg",
  "video": {
   "height": 20,
   "class": "VideoResource",
   "mp4Url": "media/video_3D24018C_366A_D9F8_41C6_C00810A27035.mp4",
   "width": 10
  }
 },
 {
  "items": [
   {
    "media": "this.video_3D24018C_366A_D9F8_41C6_C00810A27035",
    "start": "this.changeBackgroundWhilePlay(this.PlayList_3A2EAF49_366E_E979_41B4_AF3C12497689, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_3A2EAF49_366E_E979_41B4_AF3C12497689, 0, this.video_3D24018C_366A_D9F8_41C6_C00810A27035)",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid3A293F46_366E_E96B_4199_680C83657318VideoPlayer)",
    "player": {
     "displayPlaybackBar": true,
     "viewerArea": {
      "borderRadius": 0,
      "toolTipTextShadowColor": "#000000",
      "progressLeft": 0,
      "shadow": false,
      "playbackBarProgressOpacity": 1,
      "playbackBarHeadBorderColor": "#000000",
      "toolTipFontSize": 12,
      "toolTipPaddingBottom": 4,
      "toolTipOpacity": 1,
      "minWidth": 100,
      "playbackBarBorderSize": 0,
      "paddingLeft": 0,
      "playbackBarBackgroundOpacity": 1,
      "toolTipShadowOpacity": 1,
      "playbackBarHeadBorderSize": 0,
      "playbackBarHeadShadowColor": "#000000",
      "minHeight": 50,
      "toolTipBorderColor": "#767676",
      "toolTipFontWeight": "normal",
      "progressBarBackgroundColorDirection": "vertical",
      "toolTipTextShadowBlurRadius": 3,
      "progressOpacity": 1,
      "progressRight": 0,
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
       0,
       1
      ],
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
      "toolTipShadowVerticalLength": 0,
      "progressBackgroundColor": [
       "#FFFFFF",
       "#000000"
      ],
      "id": "viewer_uid3D05444F_3667_5F78_41B6_238485205E8A",
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "paddingRight": 0,
      "toolTipShadowBlurRadius": 3,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarHeadShadowVerticalLength": 0,
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
      "playbackBarHeadShadowHorizontalLength": 0,
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
      "toolTipShadowHorizontalLength": 0,
      "playbackBarBorderRadius": 0,
      "toolTipFontStyle": "normal",
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "playbackBarProgressBorderColor": "#000000",
      "playbackBarHeadBorderRadius": 0
     },
     "class": "VideoPlayer",
     "id": "viewer_uid3A293F46_366E_E96B_4199_680C83657318VideoPlayer"
    }
   }
  ],
  "class": "PlayList",
  "id": "PlayList_3A2EAF49_366E_E979_41B4_AF3C12497689"
 },
 {
  "veilShowEffect": {
   "duration": 500,
   "class": "FadeInEffect",
   "easing": "cubic_in_out"
  },
  "shadow": true,
  "bodyPaddingLeft": 0,
  "veilHideEffect": {
   "duration": 500,
   "class": "FadeOutEffect",
   "easing": "cubic_in_out"
  },
  "closeButtonRollOverIconLineWidth": 5,
  "headerPaddingRight": 0,
  "minWidth": 20,
  "closeButtonPressedBackgroundOpacity": 0.3,
  "bodyPaddingRight": 0,
  "closeButtonBorderRadius": 0,
  "paddingLeft": 0,
  "bodyPaddingBottom": 0,
  "scrollBarVisible": "rollOver",
  "scrollBarWidth": 10,
  "modal": true,
  "minHeight": 20,
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
   0,
   0.1,
   1
  ],
  "closeButtonPressedBorderSize": 0,
  "scrollBarMargin": 2,
  "closeButtonRollOverIconColor": "#666666",
  "closeButtonIconColor": "#000000",
  "footerBackgroundOpacity": 0,
  "closeButtonPaddingBottom": 0,
  "verticalAlign": "middle",
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonBackgroundOpacity": 0.3,
  "shadowSpread": 1,
  "closeButtonBorderSize": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingTop": 0,
  "titleFontSize": 14,
  "veilOpacity": 0.4,
  "closeButtonIconWidth": 20,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "paddingBottom": 0,
  "scrollBarColor": "#000000",
  "backgroundColorDirection": "vertical",
  "close": "this.PlayList_3A2EAF49_366E_E979_41B4_AF3C12497689.set('selectedIndex', -1);; this.resumeGlobalAudios()",
  "shadowBlurRadius": 6,
  "id": "window_3D8A5798_366D_D918_41AE_B96CA92C4849",
  "children": [
   "this.viewer_uid3D05444F_3667_5F78_41B6_238485205E8A"
  ],
  "closeButtonPressedIconColor": "#888888",
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "shadowColor": "#000000",
  "titlePaddingBottom": 5,
  "hideEffect": {
   "duration": 500,
   "class": "FadeOutEffect",
   "easing": "cubic_in_out"
  },
  "layout": "vertical",
  "paddingRight": 0,
  "showEffect": {
   "duration": 500,
   "class": "FadeInEffect",
   "easing": "cubic_in_out"
  },
  "titleFontFamily": "Arial",
  "headerPaddingTop": 10,
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonRollOverBorderSize": 0,
  "closeButtonRollOverBorderColor": "#000000",
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadowOpacity": 0.5,
  "footerHeight": 5,
  "bodyBackgroundOpacity": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "borderSize": 0,
  "closeButtonPressedIconLineWidth": 5,
  "titlePaddingLeft": 5,
  "overflow": "scroll",
  "titlePaddingRight": 5,
  "closeButtonBackgroundColorDirection": "vertical",
  "class": "Window",
  "closeButtonBorderColor": "#000000",
  "paddingTop": 0,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerBackgroundColorDirection": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonPaddingRight": 0,
  "headerPaddingLeft": 10,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "closeButtonIconHeight": 20,
  "footerBackgroundColorDirection": "vertical",
  "headerBackgroundOpacity": 0,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonPaddingLeft": 0,
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonIconLineWidth": 5,
  "shadowHorizontalLength": 3,
  "shadowVerticalLength": 0,
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "gap": 10,
  "scrollBarOpacity": 0.5,
  "headerPaddingBottom": 5,
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
  "borderRadius": 5,
  "backgroundOpacity": 1,
  "closeButtonPressedBorderColor": "#000000",
  "backgroundColorRatios": [],
  "closeButtonPaddingTop": 0
 },
 "this.popup_3DB285D5_366D_D968_41C7_9984DF02D706",
 {
  "class": "MediaAudio",
  "autoplay": true,
  "id": "audio_0B054FF3_01C3_0BB5_412A_75378B1B73A4",
  "audio": {
   "oggUrl": "media/audio_0B054FF3_01C3_0BB5_412A_75378B1B73A4.ogg",
   "class": "AudioResource",
   "mp3Url": "media/audio_0B054FF3_01C3_0BB5_412A_75378B1B73A4.mp3"
  }
 }
], "children": [
 {
  "borderRadius": 0,
  "toolTipTextShadowColor": "#000000",
  "progressLeft": 0,
  "shadow": false,
  "playbackBarProgressOpacity": 1,
  "playbackBarHeadBorderColor": "#000000",
  "toolTipFontSize": 12,
  "toolTipPaddingBottom": 4,
  "top": 0,
  "toolTipOpacity": 1,
  "minWidth": 100,
  "playbackBarBorderSize": 0,
  "paddingLeft": 0,
  "playbackBarBackgroundOpacity": 1,
  "toolTipShadowOpacity": 1,
  "playbackBarHeadBorderSize": 0,
  "playbackBarHeadShadowColor": "#000000",
  "minHeight": 50,
  "toolTipBorderColor": "#767676",
  "toolTipFontWeight": "normal",
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipTextShadowBlurRadius": 3,
  "progressOpacity": 1,
  "progressRight": 0,
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
   0,
   1
  ],
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
  "toolTipShadowVerticalLength": 0,
  "progressBackgroundColor": [
   "#FFFFFF",
   "#000000"
  ],
  "id": "MainViewer",
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "paddingRight": 0,
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarHeadShadowVerticalLength": 0,
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
  "playbackBarHeadShadowHorizontalLength": 0,
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
  "toolTipShadowHorizontalLength": 0,
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
    "horizontalAlign": "left",
    "itemBackgroundOpacity": 0,
    "itemLabelFontSize": 14,
    "backgroundColorRatios": [
     0
    ],
    "itemLabelFontFamily": "Arial",
    "itemLabelFontWeight": "normal",
    "itemBorderRadius": 0,
    "itemPaddingBottom": 3,
    "minWidth": 0,
    "itemThumbnailShadow": true,
    "itemThumbnailShadowBlurRadius": 4,
    "itemThumbnailWidth": 100,
    "paddingLeft": 20,
    "itemThumbnailOpacity": 1,
    "itemThumbnailShadowHorizontalLength": 3,
    "itemPaddingTop": 3,
    "borderSize": 0,
    "scrollBarWidth": 10,
    "itemLabelHorizontalAlign": "center",
    "minHeight": 0,
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
    "scrollBarVisible": "rollOver",
    "itemPaddingRight": 3,
    "maxWidth": 800,
    "itemOpacity": 1,
    "itemLabelTextDecoration": "none",
    "itemLabelPosition": "bottom",
    "itemThumbnailShadowVerticalLength": 3,
    "itemLabelGap": 5,
    "maxHeight": 600,
    "paddingBottom": 10,
    "itemThumbnailHeight": 75,
    "scrollBarColor": "#FFFFFF",
    "itemThumbnailShadowOpacity": 0.8,
    "gap": 10,
    "itemThumbnailScaleMode": "fit_outside",
    "scrollBarOpacity": 0.5,
    "layout": "horizontal",
    "itemLabelFontStyle": "normal",
    "backgroundColor": [
     "#000000"
    ],
    "backgroundOpacity": 0.2,
    "itemVerticalAlign": "middle",
    "itemHorizontalAlign": "center",
    "selectedItemLabelFontWeight": "bold",
    "borderRadius": 5,
    "itemBackgroundColorDirection": "vertical",
    "backgroundColorDirection": "vertical",
    "playList": "this.playList_0C8220F3_0217_7925_4177_A3813F3BC9BA",
    "shadow": false,
    "paddingRight": 20
   }
  ],
  "layout": "horizontal",
  "bottom": 0,
  "minWidth": 20,
  "borderSize": 0,
  "paddingLeft": 0,
  "scrollBarWidth": 10,
  "minHeight": 20,
  "scrollBarMargin": 2,
  "class": "Container",
  "verticalAlign": "bottom",
  "overflow": "visible",
  "paddingTop": 0,
  "scrollBarVisible": "rollOver",
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
  "shadow": false,
  "paddingRight": 0
 },
 {
  "horizontalAlign": "left",
  "backgroundColor": [
   "#FFFFFF",
   "#666666"
  ],
  "contentOpaque": false,
  "backgroundColorRatios": [
   0,
   1
  ],
  "children": [
   {
    "horizontalAlign": "center",
    "iconURL": "skin/IconButton_0D0876D9_0241_3DF5_4187_A924F6D29064.png",
    "minWidth": 0,
    "top": "10%",
    "borderSize": 0,
    "paddingLeft": 0,
    "minHeight": 0,
    "verticalAlign": "middle",
    "mode": "toggle",
    "class": "IconButton",
    "paddingTop": 0,
    "transparencyActive": false,
    "cursor": "hand",
    "paddingBottom": 0,
    "right": "25%",
    "height": 40,
    "backgroundOpacity": 0,
    "pressedIconURL": "skin/IconButton_0D0876D9_0241_3DF5_4187_A924F6D29064_pressed.png",
    "id": "IconButton_0D0876D9_0241_3DF5_4187_A924F6D29064",
    "width": 40,
    "borderRadius": 0,
    "shadow": false,
    "paddingRight": 0
   },
   {
    "backgroundOpacity": 0,
    "top": "-9.5%",
    "minWidth": 1,
    "borderSize": 0,
    "paddingLeft": 0,
    "minHeight": 1,
    "scaleMode": "fit_inside",
    "class": "Image",
    "verticalAlign": "middle",
    "paddingTop": 0,
    "maxWidth": 55,
    "left": "-1573.12%",
    "maxHeight": 55,
    "paddingBottom": 0,
    "width": "45.161%",
    "height": "22%",
    "horizontalAlign": "center",
    "id": "Image_0C22F72F_0247_1CAD_4160_60AF7851E5E0",
    "borderRadius": 0,
    "url": "skin/Image_0C22F72F_0247_1CAD_4160_60AF7851E5E0.png",
    "shadow": false,
    "paddingRight": 0
   },
   {
    "backgroundOpacity": 0,
    "bottom": "10%",
    "minWidth": 0,
    "borderSize": 0,
    "paddingLeft": 0,
    "minHeight": 0,
    "verticalAlign": "middle",
    "scaleMode": "fit_inside",
    "class": "Image",
    "paddingTop": 0,
    "click": "var newWindow = window.open(\"mailto:contactus@theexhibitsource.com\", \"_blank\"); newWindow.focus()",
    "cursor": "hand",
    "paddingBottom": 0,
    "right": "25%",
    "width": 40,
    "height": 40,
    "horizontalAlign": "center",
    "id": "Image_0CB084F8_0241_1DB3_4184_27716B06A03C",
    "borderRadius": 0,
    "url": "skin/Image_0CB084F8_0241_1DB3_4184_27716B06A03C.png",
    "shadow": false,
    "paddingRight": 0
   },
   {
    "horizontalAlign": "center",
    "iconURL": "skin/IconButton_2A4F6CBE_270F_D947_41C0_5020863FDCEA.png",
    "bottom": "37.85%",
    "minWidth": 1,
    "borderSize": 0,
    "paddingLeft": 0,
    "minHeight": 1,
    "verticalAlign": "middle",
    "mode": "toggle",
    "class": "IconButton",
    "paddingTop": 0,
    "maxWidth": 128,
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
    "shadow": false,
    "paddingRight": 0
   }
  ],
  "layout": "absolute",
  "minWidth": 0,
  "top": "2%",
  "paddingLeft": 0,
  "shadowOpacity": 0.72,
  "borderSize": 1,
  "scrollBarWidth": 10,
  "minHeight": 0,
  "borderColor": "#FFFFFF",
  "class": "Container",
  "scrollBarMargin": 2,
  "overflow": "scroll",
  "paddingTop": 0,
  "verticalAlign": "top",
  "scrollBarVisible": "rollOver",
  "shadowSpread": 1,
  "shadowHorizontalLength": 7,
  "paddingBottom": 0,
  "right": "2%",
  "shadowVerticalLength": 10,
  "scrollBarColor": "#000000",
  "gap": 10,
  "width": 85.04,
  "height": 214,
  "backgroundOpacity": 0.5,
  "id": "Container_0C6F931C_0241_3473_4178_6DCA3B5132B4",
  "scrollBarOpacity": 0.5,
  "borderRadius": 10,
  "shadowBlurRadius": 10,
  "backgroundColorDirection": "vertical",
  "shadowColor": "#333333",
  "shadow": true,
  "paddingRight": 0
 },
 {
  "backgroundColorRatios": [
   0
  ],
  "showEffect": {
   "duration": 350,
   "class": "FadeInEffect",
   "easing": "cubic_in_out"
  },
  "top": 0,
  "bottom": 0,
  "minWidth": 0,
  "paddingLeft": 0,
  "borderSize": 0,
  "minHeight": 0,
  "class": "UIComponent",
  "paddingTop": 0,
  "left": 0,
  "paddingBottom": 0,
  "right": 0,
  "backgroundColor": [
   "#000000"
  ],
  "backgroundOpacity": 0.55,
  "id": "veilPopupPanorama",
  "borderRadius": 0,
  "visible": false,
  "backgroundColorDirection": "vertical",
  "shadow": false,
  "paddingRight": 0
 },
 {
  "backgroundColorRatios": [],
  "top": 0,
  "bottom": 0,
  "minWidth": 0,
  "paddingLeft": 0,
  "borderSize": 0,
  "minHeight": 0,
  "scaleMode": "custom",
  "class": "ZoomImage",
  "paddingTop": 0,
  "left": 0,
  "paddingBottom": 0,
  "right": 0,
  "backgroundColor": [],
  "backgroundOpacity": 1,
  "id": "zoomImagePopupPanorama",
  "borderRadius": 0,
  "visible": false,
  "backgroundColorDirection": "vertical",
  "shadow": false,
  "paddingRight": 0
 },
 {
  "fontFamily": "Arial",
  "horizontalAlign": "center",
  "fontSize": 12,
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "label": "",
  "showEffect": {
   "duration": 350,
   "class": "FadeInEffect",
   "easing": "cubic_in_out"
  },
  "layout": "horizontal",
  "top": 10,
  "iconBeforeLabel": true,
  "minWidth": 0,
  "iconHeight": 20,
  "paddingLeft": 5,
  "fontStyle": "normal",
  "rollOverIconColor": "#666666",
  "borderSize": 0,
  "iconWidth": 20,
  "minHeight": 0,
  "verticalAlign": "middle",
  "mode": "push",
  "borderColor": "#000000",
  "class": "CloseButton",
  "fontWeight": "normal",
  "paddingTop": 5,
  "fontColor": "#FFFFFF",
  "shadowSpread": 1,
  "iconLineWidth": 5,
  "cursor": "hand",
  "pressedIconColor": "#888888",
  "paddingBottom": 5,
  "right": 10,
  "gap": 5,
  "textDecoration": "none",
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundOpacity": 0.3,
  "id": "closeButtonPopupPanorama",
  "iconColor": "#000000",
  "borderRadius": 0,
  "shadowBlurRadius": 6,
  "visible": false,
  "backgroundColorDirection": "vertical",
  "shadowColor": "#000000",
  "shadow": false,
  "paddingRight": 5
 }
], 
 "horizontalAlign": "left",
 "contentOpaque": false,
 "start": "this.playAudioList([this.audio_0B054FF3_01C3_0BB5_412A_75378B1B73A4]); this.syncPlaylists([this.playList_0C8220F3_0217_7925_4177_A3813F3BC9BA,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_2A4F6CBE_270F_D947_41C0_5020863FDCEA].forEach(function(component) { component.set('visible', false); }) }",
 "layout": "absolute",
 "minWidth": 20,
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "minHeight": 20,
 "scrollBarMargin": 2,
 "buttonToggleFullscreen": "this.IconButton_2A4F6CBE_270F_D947_41C0_5020863FDCEA",
 "class": "Player",
 "verticalAlign": "top",
 "overflow": "visible",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundPreloadEnabled": true,
 "mouseWheelEnabled": true,
 "scripts": {
  "syncPlaylists": function(playLists){    var changeToMedia = function(media, playListDispatched){       for(var i = 0, count = playLists.length; i<count; ++i){           var playList = playLists[i];           if(playList != playListDispatched){               var items = playList.get('items');               for(var j = 0, countJ = items.length; j<countJ; ++j){                   if(items[j].get('media') == media){                       if(playList.get('selectedIndex') != j){                           playList.set('selectedIndex', j);                       }                       break;                   }               }           }       }   };   var changeFunction = function(event){       var playListDispatched = event.source;       var selectedIndex = playListDispatched.get('selectedIndex');       if(selectedIndex < 0)           return;       var media = playListDispatched.get('items')[selectedIndex].get('media');       changeToMedia(media, playListDispatched);   };   var mapPlayerChangeFunction = function(event){       var panoramaMapLocation = event.source.get('panoramaMapLocation');       if(panoramaMapLocation){           var map = panoramaMapLocation.get('map');           changeToMedia(map);       }   };   for(var i = 0, count = playLists.length; i<count; ++i){       playLists[i].bind('change', changeFunction, this);   }   var mapPlayers = this.getByClassName('MapPlayer');   for(var i = 0, count = mapPlayers.length; i<count; ++i){       mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this);   } },
  "shareFacebook": function(url){    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){    var self = this;   var closed = false;   var playerClickFunction = function() {       zoomImage.unbind('loaded', loadedFunction, self);       hideFunction();   };   var clearAutoClose = function(){       zoomImage.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var loadedFunction = function(){       self.unbind('click', playerClickFunction, self);       veil.set('visible', true);       setCloseButtonPosition();       closeButton.set('visible', true);       zoomImage.unbind('loaded', loadedFunction, this);       zoomImage.bind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this);       timeoutID = setTimeout(timeoutFunction, 200);   };   var timeoutFunction = function(){       timeoutID = undefined;       if(autoCloseMilliSeconds){           var autoCloseFunction = function(){               hideFunction();           };           zoomImage.bind('click', clearAutoClose, this);           timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);       }       zoomImage.bind('backgroundClick', hideFunction, this);       if(toggleImage) {           zoomImage.bind('click', toggleFunction, this);           zoomImage.set('imageCursor', 'hand');       }       closeButton.bind('click', hideFunction, this);       if(loadedCallback)           loadedCallback();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       closed = true;       if(timeoutID)           clearTimeout(timeoutID);       if(autoCloseMilliSeconds)           clearAutoClose();       if(hideCallback)           hideCallback();       zoomImage.set('visible', false);       if(hideEffect && hideEffect.get('duration') > 0){           hideEffect.bind('end', endEffectFunction, this);       }       else{           zoomImage.set('image', null);       }       closeButton.set('visible', false);       veil.set('visible', false);       self.unbind('click', playerClickFunction, self);       zoomImage.unbind('backgroundClick', hideFunction, this);       zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true);       if(toggleImage) {           zoomImage.unbind('click', toggleFunction, this);           zoomImage.set('cursor', 'default');       }       closeButton.unbind('click', hideFunction, this);       self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               self.resumeGlobalAudios();           }           self.stopGlobalAudio(audio);       }   };   var endEffectFunction = function() {       zoomImage.set('image', null);       hideEffect.unbind('end', endEffectFunction, this);   };   var toggleFunction = function() {       zoomImage.set('image', isToggleVisible() ? image : toggleImage);   };   var isToggleVisible = function() {       return zoomImage.get('image') == toggleImage;   };   var setCloseButtonPosition = function() {       var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10;       var top = zoomImage.get('imageTop') + 10;       if(right < 10) right = 10;       if(top < 10) top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var userInteractionStartFunction = function() {       if(timeoutUserInteractionID){           clearTimeout(timeoutUserInteractionID);           timeoutUserInteractionID = undefined;       }       else{           closeButton.set('visible', false);       }   };   var userInteractionEndFunction = function() {       if(!closed){           timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300);       }   };   var userInteractionTimeoutFunction = function() {       timeoutUserInteractionID = undefined;       closeButton.set('visible', true);       setCloseButtonPosition();   };   this.MainViewer.set('toolTipEnabled', false);   var veil = this.veilPopupPanorama;   var zoomImage = this.zoomImagePopupPanorama;   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);   if(audio){       if(stopBackgroundAudio){           this.pauseGlobalAudios();       }       this.playGlobalAudio(audio);   }   var timeoutID = undefined;   var timeoutUserInteractionID = undefined;   zoomImage.bind('loaded', loadedFunction, this);   setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0);   zoomImage.set('image', image);   zoomImage.set('customWidth', customWidth);   zoomImage.set('customHeight', customHeight);   zoomImage.set('showEffect', showEffect);   zoomImage.set('hideEffect', hideEffect);   zoomImage.set('visible', true);   return zoomImage; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){    var self = this;   var stateChangeFunction = function(event){       if(event.data.state == 'stopped'){           dispose();       }   };   var changeFunction = function(){       var index = playListDispatcher.get('selectedIndex');       if(index != -1){           indexDispatcher = index;           dispose();       }   };   var dispose = function(){       if(!playListDispatcher) return;       playList.set('selectedIndex', -1);       if(panoramaSequence && panoramaSequenceIndex != -1){           if(panoramaSequence) {               if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){                   var initialPosition = camera.get('initialPosition');                   var oldYaw = initialPosition.get('yaw');                   var oldPitch = initialPosition.get('pitch');                   var oldHfov = initialPosition.get('hfov');                   var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1];                   initialPosition.set('yaw', previousMovement.get('targetYaw'));                   initialPosition.set('pitch', previousMovement.get('targetPitch'));                   initialPosition.set('hfov', previousMovement.get('targetHfov'));                   var restoreInitialPositionFunction = function(event){                       initialPosition.set('yaw', oldYaw);                       initialPosition.set('pitch', oldPitch);                       initialPosition.set('hfov', oldHfov);                       itemDispatcher.unbind('end', restoreInitialPositionFunction, self);                   };                   itemDispatcher.bind('end', restoreInitialPositionFunction, self);               }               panoramaSequence.set('movementIndex', panoramaSequenceIndex);           }       }       playListDispatcher.set('selectedIndex', indexDispatcher);       if(player){           player.unbind('stateChange', stateChangeFunction, self);       }       if(sameViewerArea){           if(playList != playListDispatcher)               playListDispatcher.unbind('change', changeFunction, self);       }       else{           viewerArea.set('visible', false);       }       playListDispatcher = undefined;   };   if(!mediaDispatcher){       var currentIndex = playList.get('selectedIndex');       var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer);       if(currentPlayer) {           var playerClass = currentPlayer.get('class');           if(playerClass == 'PanoramaPlayer') mediaDispatcher = currentPlayer.get('panorama');           else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video');           else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum');           else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map');       }   }   var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined;   if(!playListDispatcher){       playList.set('selectedIndex', index);       return;   }   var indexDispatcher = playListDispatcher.get('selectedIndex');   if(playList.get('selectedIndex') == index || indexDispatcher == -1){       return;   }   var item = playList.get('items')[index];   var itemDispatcher = playListDispatcher.get('items')[indexDispatcher];   var viewerArea = item.get('player').get('viewerArea');   var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea');   if(sameViewerArea){       if(playList != playListDispatcher){           playListDispatcher.set('selectedIndex', -1);           playListDispatcher.bind('change', changeFunction, this);       }   }   else{       viewerArea.set('visible', true);   }   var panoramaSequenceIndex = -1;   var panoramaSequence = undefined;   var camera = itemDispatcher.get('camera');   if(camera){       panoramaSequence = camera.get('initialSequence');       if(panoramaSequence) {           panoramaSequenceIndex = panoramaSequence.get('movementIndex');       }   }   playList.set('selectedIndex', index);   var player = undefined;   if(item.get('player') != itemDispatcher.get('player')){       player = item.get('player');       player.bind('stateChange', stateChangeFunction, this);   }   this.executeFunctionWhenChange(playList, index, dispose); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){    var setVisibility = function(visible){       for(var i = 0, length = components.length; i<length; i++){           components[i].set('visible', visible);       }   };   if (this.rootPlayer.touchEnabled){       setVisibility(true);   } else {       var timeoutID = -1;       var rollOverFunction = function(){           setVisibility(true);           if(timeoutID >= 0) clearTimeout(timeoutID);           parentComponent.unbind('rollOver', rollOverFunction, this);           parentComponent.bind('rollOut', rollOutFunction, this);       };       var rollOutFunction = function(){           var timeoutFunction = function(){               setVisibility(false);               parentComponent.unbind('rollOver', rollOverFunction, this);           };           parentComponent.unbind('rollOut', rollOutFunction, this);           parentComponent.bind('rollOver', rollOverFunction, this);           timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut);       };       parentComponent.bind('rollOver', rollOverFunction, this);   } },
  "setMainMediaByName": function(name){    var items = this.mainPlayList.get('items');   for(var i = 0; i<items.length; ++i){       if(items[i].get('media').get('label') == name) {           this.mainPlayList.set('selectedIndex', i);           return;       }   } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){    var audios = window.currentGlobalAudios;   if(!audios) return;   var resumeFunction = this.resumeGlobalAudios;   var endFunction = function(){       if(playList.get('selectedIndex') != index) {           resumeFunction(caller);       }   };   this.pauseGlobalAudios(caller);   this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "startPanoramaWithCamera": function(panorama, camera){    var playLists = this.getByClassName('PlayList');   if(playLists.length == 0)       return;    var restoreItems = [];   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           var item = items[j];           if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){               restoreItems.push({camera: item.get('camera'), item: item});               item.set('camera', camera);           }       }   }   if(restoreItems.length > 0) {       var restoreCameraOnStop = function(){           for (var i = 0; i < restoreItems.length; i++) {               restoreItems[i].item.set('camera', restoreItems[i].camera);           }           restoreItems[0].item.unbind('stop', restoreCameraOnStop, this);       };       restoreItems[0].item.bind('stop', restoreCameraOnStop, this);   } },
  "setMainMediaByIndex": function(index){    if(index >= 0 && index < this.mainPlayList.get('items').length){       this.mainPlayList.set('selectedIndex', index);   } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('state') == 'playing') {           if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){               player.pauseCamera();           }           else{               player.pause();           }       }       else {           players.splice(i, 1);       }   }   return players; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){    var resetFunction = function(){       panoramaPlayListItem.unbind('stop', resetFunction, this);       player.set('mapPlayer', null);   };   panoramaPlayListItem.bind('stop', resetFunction, this);   var player = panoramaPlayListItem.get('player');   player.set('mapPlayer', mapPlayer); },
  "loadFromCurrentMediaPlayList": function(playList, delta){    var currentIndex = playList.get('selectedIndex');   var totalItems = playList.get('items').length;   var newIndex = (currentIndex + delta) % totalItems;   while(newIndex < 0){       newIndex = totalItems + newIndex;   };   if(currentIndex != newIndex){       playList.set('selectedIndex', newIndex);   }; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){    var self = this;   var showEndFunction = function() {       popupPanoramaOverlay.unbind('showEnd', showEndFunction);       closeButton.bind('click', hideFunction, this);       setCloseButtonPosition();       closeButton.set('visible', true);   };   var endFunction = function() {       if(!popupPanoramaOverlay.get('loop'))           hideFunction();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       if(!self.isCardboardViewMode())           popupPanoramaOverlay.set('visible', false);       closeButton.set('visible', false);       closeButton.unbind('click', hideFunction, this);       popupPanoramaOverlay.unbind('end', endFunction, self);       self.resumePlayers(playersPaused, true);       self.resumeGlobalAudios();   };   var setCloseButtonPosition = function() {       var right = 10;       var top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   this.MainViewer.set('toolTipEnabled', false);   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(true);   this.pauseGlobalAudios();   popupPanoramaOverlay.bind('end', endFunction, this, true);   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){    var endFunction = function(){       if(playList.get('selectedIndex') == fromIndex)           playList.set('selectedIndex', toIndex);   };   this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "loopAlbum": function(playList, index){    var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var loopFunction = function(){       player.play();   };   this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){    this.unregisterKey('visibility_'+component.get('id'));   var changeVisibility = function(){        if(effect && propertyEffect){            component.set(propertyEffect, effect);        }        component.set('visible', visible);       if(component.get('class') == 'ViewerArea'){           try{               if(visible) component.restart();               else        component.pause();           }           catch(e){};       }   };   var effectTimeoutName = 'effectTimeout_'+component.get('id');   if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){       var effectTimeout = window[effectTimeoutName];       if(effectTimeout instanceof Array){           for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) }       }else{           clearTimeout(effectTimeout);       }       delete window[effectTimeoutName];   }   else if(visible == component.get('visible') && !ignoreClearTimeout)       return;   if(applyAt && applyAt > 0){       var effectTimeout = setTimeout(function(){            if(window[effectTimeoutName] instanceof Array) {                var arrayTimeoutVal = window[effectTimeoutName];               var index = arrayTimeoutVal.indexOf(effectTimeout);               arrayTimeoutVal.splice(index, 1);               if(arrayTimeoutVal.length == 0){                   delete window[effectTimeoutName];               }           }else{               delete window[effectTimeoutName];            }           changeVisibility();        }, applyAt);       if(window.hasOwnProperty(effectTimeoutName)){           window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout];       }else{           window[effectTimeoutName] = effectTimeout;       }   }   else{       changeVisibility();   } },
  "isCardboardViewMode": function(){    var players = this.getByClassName('PanoramaPlayer');   return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){    var self = this;   this.MainViewer.set('toolTipEnabled', false);   var cardboardEnabled = this.isCardboardViewMode();   if(!cardboardEnabled) {       var zoomImage = this.zoomImagePopupPanorama;       var showDuration = popupPanoramaOverlay.get('showDuration');       var hideDuration = popupPanoramaOverlay.get('hideDuration');       var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);       var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth');       var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight');       var showEndFunction = function() {           var loadedFunction = function(){               if(!self.isCardboardViewMode())                   popupPanoramaOverlay.set('visible', false);           };           popupPanoramaOverlay.unbind('showEnd', showEndFunction, self);           popupPanoramaOverlay.set('showDuration', 1);           popupPanoramaOverlay.set('hideDuration', 1);           self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null,            closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction);       };       var hideFunction = function() {           var restoreShowDurationFunction = function(){                popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self);                popupPanoramaOverlay.set('visible', false);               popupPanoramaOverlay.set('showDuration', showDuration);               popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup);               popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup);           };           self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio);           var currentWidth = zoomImage.get('imageWidth');           var currentHeight = zoomImage.get('imageHeight');           popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true);           popupPanoramaOverlay.set('showDuration', 1);           popupPanoramaOverlay.set('hideDuration', hideDuration);           popupPanoramaOverlay.set('popupMaxWidth', currentWidth);           popupPanoramaOverlay.set('popupMaxHeight', currentHeight);          if(popupPanoramaOverlay.get('visible'))              restoreShowDurationFunction();          else              popupPanoramaOverlay.set('visible', true);           self.MainViewer.set('toolTipEnabled', true);       };       if(!imageHD){           imageHD = popupPanoramaOverlay.get('image');       }       if(!toggleImageHD && toggleImage){           toggleImageHD = toggleImage;       }       popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   } else {       var hideEndFunction = function() {           self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);           if(audio){               if(stopBackgroundAudio){                   self.resumeGlobalAudios();               }               self.stopGlobalAudio(audio);           }           popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self);           self.MainViewer.set('toolTipEnabled', true);       };       var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               this.pauseGlobalAudios();           }           this.playGlobalAudio(audio);       }       popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true);   }   popupPanoramaOverlay.set('visible', true); },
  "stopGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];       delete audios[audio.get('id')];   }   audio.stop(); },
  "updateVideoCues": function(playList, index){    var playListItem = playList.get('items')[index];   var video = playListItem.get('media');   if(video.get('cues').length == 0)       return;   var player = playListItem.get('player');   var cues = [];   var changeFunction = function(){       if(playList.get('selectedIndex') != index){           video.unbind('cueChange', cueChangeFunction, this);           playList.unbind('change', changeFunction, this);       }   };   var cueChangeFunction = function(event){       var activeCues = event.data.activeCues;       for(var i = 0, count = cues.length; i<count; ++i){           var cue = cues[i];           if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){               cue.trigger('end');           }       }       cues = activeCues;   };   video.bind('cueChange', cueChangeFunction, this);   playList.bind('change', changeFunction, this); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){    var self = this;   var closeFunction = function(){       self.MainViewer.set('toolTipEnabled', true);       this.resumePlayers(playersPaused, !containsAudio);       if(isVideo) {           this.unbind('resize', resizeFunction, this);       }       w.unbind('close', closeFunction, this);   };   var endFunction = function(){       w.hide();   };   var resizeFunction = function(){       var parentWidth = self.get('actualWidth');       var parentHeight = self.get('actualHeight');       var mediaWidth = media.get('width');       var mediaHeight = media.get('height');       var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100;       var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100;       var windowWidth = popupMaxWidthNumber * parentWidth;       var windowHeight = popupMaxHeightNumber * parentHeight;       var footerHeight = w.get('footerHeight');       var headerHeight = w.get('headerHeight');       if(!headerHeight) {           var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom');           var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom');           headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight;           headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom');       }       if(!footerHeight) {           footerHeight = 0;       }       var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight');       var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom');       var parentAspectRatio = contentWindowWidth / contentWindowHeight;       var mediaAspectRatio = mediaWidth / mediaHeight;       if(parentAspectRatio > mediaAspectRatio) {           windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight');       }       else {           windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom');       }       if(windowWidth > parentWidth * popupMaxWidthNumber) {           windowWidth = parentWidth * popupMaxWidthNumber;       }       if(windowHeight > parentHeight * popupMaxHeightNumber) {           windowHeight = parentHeight * popupMaxHeightNumber;       }       w.set('width', windowWidth);       w.set('height', windowHeight);       w.set('x', (parentWidth - w.get('actualWidth')) * 0.5);       w.set('y', (parentHeight - w.get('actualHeight')) * 0.5);   };   if(autoCloseWhenFinished){       this.executeFunctionWhenChange(playList, 0, endFunction);   }   var isVideo = media.get('class') == 'Video';   if(isVideo){       this.bind('resize', resizeFunction, this);       resizeFunction();   }   else {       w.set('width', popupMaxWidth);       w.set('height', popupMaxHeight);   }   this.MainViewer.set('toolTipEnabled', false);   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "getPlayListWithMedia": function(media, onlySelected){    var playLists = this.getByClassName('PlayList');   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       if(onlySelected && playList.get('selectedIndex') == -1)           continue;       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           if(items[j].get('media') == media)               return playList;       }   }   return undefined; },
  "registerKey": function(key, value){    window[key] = value; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){    var enabled = this.get(playerFlag);   for(var i in components){       components[i].set('visible', enabled);   } },
  "getActivePlayerWithViewer": function(viewerArea){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   players = players.concat(this.getByClassName('MapPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('viewerArea') == viewerArea) {           var playerClass = player.get('class');           if(playerClass == 'PanoramaPlayer' && player.get('panorama') != undefined) return player;           else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player;           else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player;           else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player;       }   }   return undefined; },
  "resumeGlobalAudios": function(caller){    if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller)       return;   window.currentGlobalAudiosActionCaller = undefined;   var audios = window.currentGlobalAudios;   if(!audios) return;   for(var audio in audios){       audios[audio].play();   } },
  "getGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios != undefined && audio.get('id') in audios){       audio = audios[audio.get('id')];   }   return audio; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){    var self = this;   var endObject = undefined;   var changePlayListFunction = function(event){       if(event.data.previousSelectedIndex == index){           if(changeFunction) changeFunction();           if(endFunction) endObject.unbind('end', endFunction, self);           playList.unbind('change', changePlayListFunction, self);       }   };   if(endFunction){       var playListItem = playList.get('items')[index];       var playListItemClass = playListItem.get('class');       if(playListItemClass == 'PanoramaPlayListItem'){           var camera = playListItem.get('camera');           endObject = camera.get('initialSequence');           if(!endObject) return;       }       else{           endObject = playListItem.get('media');       }       endObject.bind('end', endFunction, this);   }   playList.bind('change', changePlayListFunction, this); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){    var closeFunction = function(){       clearAutoClose();       this.resumePlayers(playersPaused, !containsAudio);       w.unbind('close', closeFunction, this);   };   var clearAutoClose = function(){       w.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var timeoutID = undefined;   if(autoCloseMilliSeconds){       var autoCloseFunction = function(){           w.hide();       };       w.bind('click', clearAutoClose, this);       timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){    for(var i = 0; i<players.length; ++i){       var player = players[i];       if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){           player.resumeCamera();       }       else{           player.play();       }   } },
  "changeBackgroundWhilePlay": function(playList, index, color){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           playList.unbind('change', changeFunction, this);           if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){               viewerArea.set('backgroundColor', backgroundColorBackup);               viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup);           }       }   };   var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var viewerArea = player.get('viewerArea');   var backgroundColorBackup = viewerArea.get('backgroundColor');   var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios');   var colorRatios = [0];   if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){       viewerArea.set('backgroundColor', color);       viewerArea.set('backgroundColorRatios', colorRatios);       playList.bind('change', changeFunction, this);   } },
  "playGlobalAudio": function(audio, endCallback){    var endFunction = function(){       audio.unbind('end', endFunction, this);       this.stopGlobalAudio(audio);       if(endCallback)           endCallback();   };   audio = this.getGlobalAudio(audio);   var audios = window.currentGlobalAudios;   if(!audios){       audios = window.currentGlobalAudios = {};   }   audios[audio.get('id')] = audio;   if(audio.get('state') == 'playing'){       return;   }   if(!audio.get('loop')){       audio.bind('end', endFunction, this);   }   audio.play(); },
  "autotriggerAtStart": function(player, callback){    var stateChangeFunction = function(event){        if(event.data.state == 'playing'){           callback();           player.unbind('stateChange', stateChangeFunction, this);       }   };   player.bind('stateChange', stateChangeFunction, this); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           this.stopGlobalAudio(audio);           if(isPanorama) {               var media = playListItem.get('media');               var audios = media.get('audios');               audios.splice(audios.indexOf(audio), 1);               media.set('audios', audios);           }           playList.unbind('change', changeFunction, this);           if(endCallback)               endCallback();       }   };   var audios = window.currentGlobalAudios;   if(audios && audio.get('id') in audios){       audio = audios[audio.get('id')];       if(audio.get('state') != 'playing'){           audio.play();       }       return;   }   playList.bind('change', changeFunction, this);   var playListItem = playList.get('items')[index];   var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem';   if(isPanorama) {       var media = playListItem.get('media');       var audios = (media.get('audios') || []).slice();       if(audio.get('class') == 'MediaAudio') {           var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio');           panoramaAudio.set('autoplay', false);           panoramaAudio.set('audio', audio.get('audio'));           panoramaAudio.set('loop', audio.get('loop'));           panoramaAudio.set('id', audio.get('id'));           audio = panoramaAudio;       }       audios.push(audio);       media.set('audios', audios);   }   this.playGlobalAudio(audio, endCallback); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){    var changeFunction = function(){       var index = playList.get('selectedIndex');       if(index >= 0){           var beginFunction = function(){               playListItem.unbind('begin', beginFunction);               setMediaLabel(index);           };           var setMediaLabel = function(index){               var media = playListItem.get('media');               var text = media.get('data');               if(!text)                   text = media.get('label');               setHtml(text);           };           var setHtml = function(text){               if(text !== undefined)                   htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>');               else                   htmlText.set('html', '');           };           var playListItem = playList.get('items')[index];           if(htmlText.get('html')){               setHtml('Loading...');               playListItem.bind('begin', beginFunction);           }           else{               setMediaLabel(index);           }       }   };   var disposeFunction = function(){       htmlText.set('html', undefined);       playList.unbind('change', changeFunction, this);       playListItemStopToDispose.unbind('stop', disposeFunction, this);   };   if(playListItemStopToDispose){       playListItemStopToDispose.bind('stop', disposeFunction, this);   }   playList.bind('change', changeFunction, this);   changeFunction(); },
  "unregisterKey": function(key){    delete window[key]; },
  "getKey": function(key){    return window[key]; },
  "playAudioList": function(audios){    if(audios.length == 0) return;   var currentAudioCount = -1;   var currentAudio;   var playGlobalAudioFunction = this.playGlobalAudio;   var playNext = function(){       if(++currentAudioCount >= audios.length)           currentAudioCount = 0;       currentAudio = audios[currentAudioCount];       playGlobalAudioFunction(currentAudio, playNext);   };   playNext(); },
  "fixTogglePlayPauseButton": function(player){    var state = player.get('state');   var button = player.get('buttonPlayPause');   if(typeof button !== 'undefined' && player.get('state') == 'playing'){       button.set('pressed', true);   } },
  "pauseGlobalAudios": function(caller){    var audios = window.currentGlobalAudios;   window.currentGlobalAudiosActionCaller = caller;   if(!audios) return;   for(var audio in audios){       audios[audio].pause();   } },
  "existsKey": function(key){    return key in window; },
  "shareTwitter": function(url){    window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "pauseGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];   }   audio.pause(); },
  "shareGoogle": function(url){    window.open('https://plus.google.com/share?url=' + url, '_blank'); }
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
 "shadow": false,
 "paddingRight": 0
})