TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMax": 100,
  "class": "Panorama",
  "partial": false,
  "label": "Front View",
  "hfovMin": 60,
  "id": "panorama_F1A2B387_E1A4_B4AA_41E3_375C2D56F379",
  "hfov": 360,
  "thumbnailUrl": "media/panorama_F1A2B387_E1A4_B4AA_41E3_375C2D56F379_t.jpg",
  "vfov": 180,
  "pitch": 0,
  "frames": [
   {
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_F1A2B387_E1A4_B4AA_41E3_375C2D56F379_r_hq.jpeg",
       "height": 2304,
       "class": "ImageResourceLevel",
       "width": 2304
      },
      {
       "url": "media/panorama_F1A2B387_E1A4_B4AA_41E3_375C2D56F379_r.jpeg",
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
       "url": "media/panorama_F1A2B387_E1A4_B4AA_41E3_375C2D56F379_f_hq.jpeg",
       "height": 2304,
       "class": "ImageResourceLevel",
       "width": 2304
      },
      {
       "url": "media/panorama_F1A2B387_E1A4_B4AA_41E3_375C2D56F379_f.jpeg",
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
       "url": "media/panorama_F1A2B387_E1A4_B4AA_41E3_375C2D56F379_b_hq.jpeg",
       "height": 2304,
       "class": "ImageResourceLevel",
       "width": 2304
      },
      {
       "url": "media/panorama_F1A2B387_E1A4_B4AA_41E3_375C2D56F379_b.jpeg",
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
       "url": "media/panorama_F1A2B387_E1A4_B4AA_41E3_375C2D56F379_u_hq.jpeg",
       "height": 2304,
       "class": "ImageResourceLevel",
       "width": 2304
      },
      {
       "url": "media/panorama_F1A2B387_E1A4_B4AA_41E3_375C2D56F379_u.jpeg",
       "height": 1273,
       "class": "ImageResourceLevel",
       "width": 1273
      }
     ]
    },
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_E8093A6C_E1A4_947E_41EA_A9F8D9F1DE83",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_F1A2B387_E1A4_B4AA_41E3_375C2D56F379_0_HS_22_0.png",
           "height": 27,
           "class": "ImageResourceLevel",
           "width": 27
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 1.35,
        "pitch": 3.9,
        "yaw": 14.28
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "var newWindow = window.open(\"https://www.golder.com/project/assessing-human-health-risks-at-a-fly-ash-storage-facility-in-indonesia/\", \"_blank\"); newWindow.focus()",
        "displayTooltipInTouchScreens": true,
        "toolTip": "Assessing Human Health Risks At A Fly Ash Storage Facility In Indonesia"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_F1A2B387_E1A4_B4AA_41E3_375C2D56F379_0_HS_22_0_0_map.gif",
           "height": 13,
           "class": "ImageResourceLevel",
           "width": 13
          }
         ]
        },
        "pitch": 3.9,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 14.28,
        "hfov": 1.35
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_E8617CEE_E1A4_AC7A_41D9_957634F8FD81",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_F1A2B387_E1A4_B4AA_41E3_375C2D56F379_0_HS_21_0.png",
           "height": 27,
           "class": "ImageResourceLevel",
           "width": 27
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 1.35,
        "pitch": 4.01,
        "yaw": 1.46
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "var newWindow = window.open(\"https://www.youtube.com/watch?v=N0IeR42P09A\", \"_blank\"); newWindow.focus()",
        "displayTooltipInTouchScreens": true,
        "toolTip": "Underground Drones Exploring Abandoned Mines"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_F1A2B387_E1A4_B4AA_41E3_375C2D56F379_0_HS_21_0_0_map.gif",
           "height": 13,
           "class": "ImageResourceLevel",
           "width": 13
          }
         ]
        },
        "pitch": 4.01,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 1.46,
        "hfov": 1.35
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_E87843B1_E1A7_94E9_41D6_E3FD38530B51",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_F1A2B387_E1A4_B4AA_41E3_375C2D56F379_0_HS_20_0.png",
           "height": 27,
           "class": "ImageResourceLevel",
           "width": 27
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 1.34,
        "pitch": 5.29,
        "yaw": 8.81
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "var newWindow = window.open(\"files/709_BR2_18_MIS_CCRM_externalprint.pdf\", \"_blank\"); newWindow.focus()",
        "displayTooltipInTouchScreens": true,
        "toolTip": "Coal Combustion\u000aResidual\u000aManagement"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_F1A2B387_E1A4_B4AA_41E3_375C2D56F379_0_HS_20_0_0_map.gif",
           "height": 13,
           "class": "ImageResourceLevel",
           "width": 13
          }
         ]
        },
        "pitch": 5.29,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 8.81,
        "hfov": 1.34
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_E849BF4C_E1A7_6DBE_41E6_2A2F8F09E8CA",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_F1A2B387_E1A4_B4AA_41E3_375C2D56F379_0_HS_19_0.png",
           "height": 36,
           "class": "ImageResourceLevel",
           "width": 36
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 1.8,
        "pitch": -0.6,
        "yaw": -20.84
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "var newWindow = window.open(\"files/710_BR2_18_MIS_Power_Sector_Services_externalprint.pdf\", \"_blank\"); newWindow.focus()",
        "displayTooltipInTouchScreens": true,
        "toolTip": "Power Sector\u000aServices"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_F1A2B387_E1A4_B4AA_41E3_375C2D56F379_0_HS_19_0_0_map.gif",
           "height": 18,
           "class": "ImageResourceLevel",
           "width": 18
          }
         ]
        },
        "pitch": -0.6,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -20.84,
        "hfov": 1.8
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_E85670B1_E1A4_F4E6_41BE_4562AD8931F4",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_F1A2B387_E1A4_B4AA_41E3_375C2D56F379_0_HS_18_0.png",
           "height": 36,
           "class": "ImageResourceLevel",
           "width": 36
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 1.8,
        "pitch": -0.69,
        "yaw": -7.34
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "var newWindow = window.open(\"files/764 - FracMan - Fractured and Unconventional Reservoirs_Email.pdf\", \"_blank\"); newWindow.focus()",
        "displayTooltipInTouchScreens": true,
        "toolTip": "Fractured and\u000aUnconventional\u000aReservoirs"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_F1A2B387_E1A4_B4AA_41E3_375C2D56F379_0_HS_18_0_0_map.gif",
           "height": 18,
           "class": "ImageResourceLevel",
           "width": 18
          }
         ]
        },
        "pitch": -0.69,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -7.34,
        "hfov": 1.8
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_E852DE57_E1A5_6FAA_41E5_8BF40D32B46E",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_F1A2B387_E1A4_B4AA_41E3_375C2D56F379_0_HS_17_0.png",
           "height": 27,
           "class": "ImageResourceLevel",
           "width": 27
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 1.35,
        "pitch": -2.43,
        "yaw": 11.6
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "var newWindow = window.open(\"https://www.golder.com/insights/protecting-surface-water-and-groundwater-from-coal-combustion-waste-through-paste-technology/\", \"_blank\"); newWindow.focus()",
        "displayTooltipInTouchScreens": true,
        "toolTip": "Protecting Surface Water And Groundwater From Coal Combustion Waste, Through Paste Technology"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_F1A2B387_E1A4_B4AA_41E3_375C2D56F379_0_HS_17_0_0_map.gif",
           "height": 13,
           "class": "ImageResourceLevel",
           "width": 13
          }
         ]
        },
        "pitch": -2.43,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 11.6,
        "hfov": 1.35
       }
      ]
     }
    ],
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_F1A2B387_E1A4_B4AA_41E3_375C2D56F379_d_hq.jpeg",
       "height": 2304,
       "class": "ImageResourceLevel",
       "width": 2304
      },
      {
       "url": "media/panorama_F1A2B387_E1A4_B4AA_41E3_375C2D56F379_d.jpeg",
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
       "url": "media/panorama_F1A2B387_E1A4_B4AA_41E3_375C2D56F379_l_hq.jpeg",
       "height": 2304,
       "class": "ImageResourceLevel",
       "width": 2304
      },
      {
       "url": "media/panorama_F1A2B387_E1A4_B4AA_41E3_375C2D56F379_l.jpeg",
       "height": 1273,
       "class": "ImageResourceLevel",
       "width": 1273
      }
     ]
    },
    "thumbnailUrl": "media/panorama_F1A2B387_E1A4_B4AA_41E3_375C2D56F379_t.jpg"
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
  "id": "panorama_F1A2B387_E1A4_B4AA_41E3_375C2D56F379_camera"
 },
 {
  "hfovMax": 120,
  "class": "Panorama",
  "partial": false,
  "label": "Meeting Space",
  "hfovMin": 60,
  "id": "panorama_F1540D0A_E1A4_ADBA_41B2_5BC38794ED22",
  "hfov": 360,
  "thumbnailUrl": "media/panorama_F1540D0A_E1A4_ADBA_41B2_5BC38794ED22_t.jpg",
  "vfov": 180,
  "pitch": 0,
  "frames": [
   {
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_F1540D0A_E1A4_ADBA_41B2_5BC38794ED22_r_hq.jpeg",
       "height": 2304,
       "class": "ImageResourceLevel",
       "width": 2304
      },
      {
       "url": "media/panorama_F1540D0A_E1A4_ADBA_41B2_5BC38794ED22_r.jpeg",
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
       "url": "media/panorama_F1540D0A_E1A4_ADBA_41B2_5BC38794ED22_f_hq.jpeg",
       "height": 2304,
       "class": "ImageResourceLevel",
       "width": 2304
      },
      {
       "url": "media/panorama_F1540D0A_E1A4_ADBA_41B2_5BC38794ED22_f.jpeg",
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
       "url": "media/panorama_F1540D0A_E1A4_ADBA_41B2_5BC38794ED22_b_hq.jpeg",
       "height": 2304,
       "class": "ImageResourceLevel",
       "width": 2304
      },
      {
       "url": "media/panorama_F1540D0A_E1A4_ADBA_41B2_5BC38794ED22_b.jpeg",
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
       "url": "media/panorama_F1540D0A_E1A4_ADBA_41B2_5BC38794ED22_u_hq.jpeg",
       "height": 2304,
       "class": "ImageResourceLevel",
       "width": 2304
      },
      {
       "url": "media/panorama_F1540D0A_E1A4_ADBA_41B2_5BC38794ED22_u.jpeg",
       "height": 1273,
       "class": "ImageResourceLevel",
       "width": 1273
      }
     ]
    },
    "overlays": [
     {
      "class": "PopupPanoramaOverlay",
      "popupMaxWidth": "95%",
      "hideDuration": 500,
      "rotationX": 0,
      "rotationY": 0,
      "hideEasing": "cubic_out",
      "showEasing": "cubic_in",
      "rotationZ": 0,
      "yaw": 19.48,
      "showDuration": 500,
      "id": "popup_F154DD0A_E1A4_ADBA_41D5_8641F4190A44",
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
      "class": "PopupPanoramaOverlay",
      "popupMaxWidth": "100%",
      "hideDuration": 500,
      "rotationX": 0,
      "rotationY": 0,
      "hideEasing": "cubic_out",
      "showEasing": "cubic_in",
      "rotationZ": 0,
      "yaw": 19.48,
      "showDuration": 500,
      "id": "popup_F154FD0B_E1A4_ADBA_41EA_EC39327595BD",
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
      "id": "overlay_EA04894A_E1A7_95BA_419E_65624BA196CC",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_F1540D0A_E1A4_ADBA_41B2_5BC38794ED22_0_HS_15_0.png",
           "height": 54,
           "class": "ImageResourceLevel",
           "width": 54
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 2.66,
        "pitch": 10.21,
        "yaw": 20.44
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "var newWindow = window.open(\"https://www.golder.com/project/assessing-human-health-risks-at-a-fly-ash-storage-facility-in-indonesia/\", \"_blank\"); newWindow.focus()",
        "displayTooltipInTouchScreens": true,
        "toolTip": "Assessing Human Health Risks\u000aAt A Fly Ash Storage Facility\u000aIn Indonesia"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_F1540D0A_E1A4_ADBA_41B2_5BC38794ED22_0_HS_15_0_0_map.gif",
           "height": 27,
           "class": "ImageResourceLevel",
           "width": 27
          }
         ]
        },
        "pitch": 10.21,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 20.44,
        "hfov": 2.66
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_EA2C33DD_E1A5_745E_41D3_24F7FF94521B",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_F1540D0A_E1A4_ADBA_41B2_5BC38794ED22_0_HS_14_0.png",
           "height": 63,
           "class": "ImageResourceLevel",
           "width": 63
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 3.13,
        "pitch": -6.17,
        "yaw": 20.39
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "var newWindow = window.open(\"https://www.golder.com/insights/protecting-surface-water-and-groundwater-from-coal-combustion-waste-through-paste-technology/\", \"_blank\"); newWindow.focus()",
        "displayTooltipInTouchScreens": true,
        "toolTip": "Protecting Surface Water And\u000aGroundwater From Coal Combustion\u000aWaste, Through Paste Technology"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_F1540D0A_E1A4_ADBA_41B2_5BC38794ED22_0_HS_14_0_0_map.gif",
           "height": 31,
           "class": "ImageResourceLevel",
           "width": 31
          }
         ]
        },
        "pitch": -6.17,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 20.39,
        "hfov": 3.13
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_EA274C36_E1A3_B3EA_41E6_56EFF618B8EF",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_F1540D0A_E1A4_ADBA_41B2_5BC38794ED22_0_HS_13_0.png",
           "height": 54,
           "class": "ImageResourceLevel",
           "width": 54
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 2.67,
        "pitch": 8.35,
        "yaw": -2.73
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "var newWindow = window.open(\"https://www.youtube.com/watch?v=N0IeR42P09A\", \"_blank\"); newWindow.focus()",
        "displayTooltipInTouchScreens": true,
        "toolTip": "Underground Drones Exploring\u000aAbandoned Mines"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_F1540D0A_E1A4_ADBA_41B2_5BC38794ED22_0_HS_13_0_0_map.gif",
           "height": 27,
           "class": "ImageResourceLevel",
           "width": 27
          }
         ]
        },
        "pitch": 8.35,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -2.73,
        "hfov": 2.67
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_EA091D7C_E1AC_AC5E_41E3_51B0CABDC2EB",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_F1540D0A_E1A4_ADBA_41B2_5BC38794ED22_0_HS_12_0.png",
           "height": 54,
           "class": "ImageResourceLevel",
           "width": 54
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 2.64,
        "pitch": 11.66,
        "yaw": 9.22
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "var newWindow = window.open(\"files/709_BR2_18_MIS_CCRM_externalprint.pdf\", \"_blank\"); newWindow.focus()",
        "displayTooltipInTouchScreens": true,
        "toolTip": "Coal Combustion\u000aResidual\u000aManagement"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_F1540D0A_E1A4_ADBA_41B2_5BC38794ED22_0_HS_12_0_0_map.gif",
           "height": 27,
           "class": "ImageResourceLevel",
           "width": 27
          }
         ]
        },
        "pitch": 11.66,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 9.22,
        "hfov": 2.64
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_EA0403C0_E1AD_B4A6_41CE_E63DF2D7CD12",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_F1540D0A_E1A4_ADBA_41B2_5BC38794ED22_0_HS_11_0.png",
           "height": 54,
           "class": "ImageResourceLevel",
           "width": 54
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 2.7,
        "pitch": 2.11,
        "yaw": -28.76
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "var newWindow = window.open(\"files/764 - FracMan - Fractured and Unconventional Reservoirs_Email.pdf\", \"_blank\"); newWindow.focus()",
        "displayTooltipInTouchScreens": true,
        "toolTip": "Fractured and\u000aUnconventional\u000aReservoirs"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_F1540D0A_E1A4_ADBA_41B2_5BC38794ED22_0_HS_11_0_0_map.gif",
           "height": 27,
           "class": "ImageResourceLevel",
           "width": 27
          }
         ]
        },
        "pitch": 2.11,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -28.76,
        "hfov": 2.7
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_EA32B23E_E1A3_77DA_419E_5483EFD1C630",
      "useHandCursor": true,
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_F1540D0A_E1A4_ADBA_41B2_5BC38794ED22_0_HS_10_0.png",
           "height": 45,
           "class": "ImageResourceLevel",
           "width": 45
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 2.25,
        "pitch": 1.89,
        "yaw": -37.49
       }
      ],
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "var newWindow = window.open(\"files/710_BR2_18_MIS_Power_Sector_Services_externalprint.pdf\", \"_blank\"); newWindow.focus()",
        "displayTooltipInTouchScreens": true,
        "toolTip": "Power Sector\u000aServices"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "url": "media/panorama_F1540D0A_E1A4_ADBA_41B2_5BC38794ED22_0_HS_10_0_0_map.gif",
           "height": 22,
           "class": "ImageResourceLevel",
           "width": 22
          }
         ]
        },
        "pitch": 1.89,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -37.49,
        "hfov": 2.25
       }
      ]
     }
    ],
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "url": "media/panorama_F1540D0A_E1A4_ADBA_41B2_5BC38794ED22_d_hq.jpeg",
       "height": 2304,
       "class": "ImageResourceLevel",
       "width": 2304
      },
      {
       "url": "media/panorama_F1540D0A_E1A4_ADBA_41B2_5BC38794ED22_d.jpeg",
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
       "url": "media/panorama_F1540D0A_E1A4_ADBA_41B2_5BC38794ED22_l_hq.jpeg",
       "height": 2304,
       "class": "ImageResourceLevel",
       "width": 2304
      },
      {
       "url": "media/panorama_F1540D0A_E1A4_ADBA_41B2_5BC38794ED22_l.jpeg",
       "height": 1273,
       "class": "ImageResourceLevel",
       "width": 1273
      }
     ]
    },
    "thumbnailUrl": "media/panorama_F1540D0A_E1A4_ADBA_41B2_5BC38794ED22_t.jpg"
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
  "id": "panorama_F1540D0A_E1A4_ADBA_41B2_5BC38794ED22_camera"
 },
 {
  "items": [
   {
    "media": "this.panorama_F1A2B387_E1A4_B4AA_41E3_375C2D56F379",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "camera": "this.panorama_F1A2B387_E1A4_B4AA_41E3_375C2D56F379_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_F1540D0A_E1A4_ADBA_41B2_5BC38794ED22",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 0)",
    "camera": "this.panorama_F1540D0A_E1A4_ADBA_41B2_5BC38794ED22_camera",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ],
  "class": "PlayList",
  "id": "mainPlayList"
 },
 {
  "items": [
   {
    "media": "this.panorama_F1A2B387_E1A4_B4AA_41E3_375C2D56F379",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_0C8220F3_0217_7925_4177_A3813F3BC9BA, 0, 1)",
    "camera": "this.panorama_F1A2B387_E1A4_B4AA_41E3_375C2D56F379_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "media": "this.panorama_F1540D0A_E1A4_ADBA_41B2_5BC38794ED22",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_0C8220F3_0217_7925_4177_A3813F3BC9BA, 1, 0)",
    "camera": "this.panorama_F1540D0A_E1A4_ADBA_41B2_5BC38794ED22_camera",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ],
  "class": "PlayList",
  "id": "playList_0C8220F3_0217_7925_4177_A3813F3BC9BA"
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
   "#FFFFFF",
   "#000000"
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
  "progressBarBorderRadius": 0,
  "class": "ViewerArea",
  "progressBarBorderSize": 0,
  "toolTipFontColor": "#606060",
  "paddingTop": 0,
  "toolTipFontFamily": "Arial",
  "transitionMode": "blending",
  "toolTipShadowHorizontalLength": 0,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
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
    "selectedItemLabelFontWeight": "bold",
    "itemBackgroundColorDirection": "vertical",
    "layout": "horizontal",
    "itemLabelHorizontalAlign": "center",
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
    "minWidth": 0,
    "itemThumbnailShadowVerticalLength": 3,
    "itemLabelGap": 5,
    "paddingBottom": 10,
    "maxHeight": 600,
    "itemThumbnailHeight": 75,
    "itemThumbnailShadowHorizontalLength": 3,
    "scrollBarColor": "#FFFFFF",
    "backgroundColor": [
     "#000000"
    ],
    "gap": 10,
    "itemThumbnailScaleMode": "fit_outside",
    "scrollBarOpacity": 0.5,
    "itemLabelFontStyle": "normal",
    "backgroundOpacity": 0.2,
    "itemVerticalAlign": "middle",
    "itemHorizontalAlign": "center",
    "itemThumbnailShadowOpacity": 0.8,
    "borderRadius": 5,
    "minHeight": 0,
    "backgroundColorDirection": "vertical",
    "playList": "this.playList_0C8220F3_0217_7925_4177_A3813F3BC9BA",
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
  "minHeight": 0,
  "horizontalAlign": "left",
  "contentOpaque": false,
  "children": [
   {
    "horizontalAlign": "center",
    "iconURL": "skin/IconButton_0D0876D9_0241_3DF5_4187_A924F6D29064.png",
    "top": "10%",
    "borderSize": 0,
    "paddingLeft": 0,
    "shadow": false,
    "verticalAlign": "middle",
    "mode": "toggle",
    "class": "IconButton",
    "paddingTop": 0,
    "transparencyActive": false,
    "minWidth": 0,
    "paddingBottom": 0,
    "right": "25%",
    "cursor": "hand",
    "width": 40,
    "minHeight": 0,
    "backgroundOpacity": 0,
    "pressedIconURL": "skin/IconButton_0D0876D9_0241_3DF5_4187_A924F6D29064_pressed.png",
    "id": "IconButton_0D0876D9_0241_3DF5_4187_A924F6D29064",
    "borderRadius": 0,
    "height": 40,
    "paddingRight": 0
   },
   {
    "height": "22%",
    "backgroundOpacity": 0,
    "maxWidth": 55,
    "top": "-9.5%",
    "borderSize": 0,
    "paddingLeft": 0,
    "shadow": false,
    "verticalAlign": "middle",
    "scaleMode": "fit_inside",
    "class": "Image",
    "paddingTop": 0,
    "left": "-1573.12%",
    "paddingBottom": 0,
    "maxHeight": 55,
    "minWidth": 1,
    "minHeight": 1,
    "horizontalAlign": "center",
    "id": "Image_0C22F72F_0247_1CAD_4160_60AF7851E5E0",
    "width": "45.161%",
    "borderRadius": 0,
    "url": "skin/Image_0C22F72F_0247_1CAD_4160_60AF7851E5E0.png",
    "paddingRight": 0
   },
   {
    "backgroundOpacity": 0,
    "url": "skin/Image_0CB084F8_0241_1DB3_4184_27716B06A03C.png",
    "bottom": "10%",
    "borderSize": 0,
    "paddingLeft": 0,
    "shadow": false,
    "verticalAlign": "middle",
    "scaleMode": "fit_inside",
    "class": "Image",
    "paddingTop": 0,
    "click": "var newWindow = window.open(\"https://www.golder.com/contact/\", \"_blank\"); newWindow.focus()",
    "minWidth": 0,
    "paddingBottom": 0,
    "right": "25%",
    "cursor": "hand",
    "width": 40,
    "minHeight": 0,
    "horizontalAlign": "center",
    "id": "Image_0CB084F8_0241_1DB3_4184_27716B06A03C",
    "borderRadius": 0,
    "height": 40,
    "paddingRight": 0
   },
   {
    "horizontalAlign": "center",
    "maxWidth": 128,
    "iconURL": "skin/IconButton_2A4F6CBE_270F_D947_41C0_5020863FDCEA.png",
    "bottom": "37.85%",
    "borderSize": 0,
    "paddingLeft": 0,
    "shadow": false,
    "verticalAlign": "middle",
    "mode": "toggle",
    "class": "IconButton",
    "paddingTop": 0,
    "transparencyActive": true,
    "minWidth": 1,
    "paddingBottom": 0,
    "maxHeight": 128,
    "right": "12.69%",
    "cursor": "hand",
    "width": 60.45,
    "minHeight": 1,
    "backgroundOpacity": 0,
    "id": "IconButton_2A4F6CBE_270F_D947_41C0_5020863FDCEA",
    "borderRadius": 0,
    "height": 48,
    "paddingRight": 0
   }
  ],
  "layout": "absolute",
  "shadowVerticalLength": 10,
  "top": "2%",
  "paddingLeft": 0,
  "shadowOpacity": 0.72,
  "borderSize": 1,
  "scrollBarWidth": 10,
  "shadow": true,
  "scrollBarVisible": "rollOver",
  "shadowHorizontalLength": 7,
  "borderColor": "#FFFFFF",
  "class": "Container",
  "scrollBarMargin": 2,
  "overflow": "scroll",
  "paddingTop": 0,
  "verticalAlign": "top",
  "shadowSpread": 1,
  "minWidth": 0,
  "paddingBottom": 0,
  "right": "2%",
  "scrollBarColor": "#000000",
  "backgroundColor": [
   "#FFFFFF",
   "#666666"
  ],
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
 "buttonToggleMute": "this.IconButton_0D0876D9_0241_3DF5_4187_A924F6D29064",
 "start": "this.playAudioList([this.audio_0B054FF3_01C3_0BB5_412A_75378B1B73A4]); this.syncPlaylists([this.playList_0C8220F3_0217_7925_4177_A3813F3BC9BA,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_2A4F6CBE_270F_D947_41C0_5020863FDCEA].forEach(function(component) { component.set('visible', false); }) }",
 "width": "100%",
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "buttonToggleFullscreen": "this.IconButton_2A4F6CBE_270F_D947_41C0_5020863FDCEA",
 "class": "Player",
 "verticalAlign": "top",
 "overflow": "visible",
 "paddingTop": 0,
 "backgroundPreloadEnabled": true,
 "mouseWheelEnabled": true,
 "minWidth": 20,
 "scripts": {
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){    var changeFunction = function(){       var index = playList.get('selectedIndex');       if(index >= 0){           var beginFunction = function(){               playListItem.unbind('begin', beginFunction);               setMediaLabel(index);           };           var setMediaLabel = function(index){               var media = playListItem.get('media');               var text = media.get('data');               if(!text)                   text = media.get('label');               setHtml(text);           };           var setHtml = function(text){               if(text !== undefined)                   htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>');               else                   htmlText.set('html', '');           };           var playListItem = playList.get('items')[index];           if(htmlText.get('html')){               setHtml('Loading...');               playListItem.bind('begin', beginFunction);           }           else{               setMediaLabel(index);           }       }   };   var disposeFunction = function(){       htmlText.set('html', undefined);       playList.unbind('change', changeFunction, this);       playListItemStopToDispose.unbind('stop', disposeFunction, this);   };   if(playListItemStopToDispose){       playListItemStopToDispose.bind('stop', disposeFunction, this);   }   playList.bind('change', changeFunction, this);   changeFunction(); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){    var self = this;   var closed = false;   var playerClickFunction = function() {       zoomImage.unbind('loaded', loadedFunction, self);       hideFunction();   };   var clearAutoClose = function(){       zoomImage.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var loadedFunction = function(){       self.unbind('click', playerClickFunction, self);       veil.set('visible', true);       setCloseButtonPosition();       closeButton.set('visible', true);       zoomImage.unbind('loaded', loadedFunction, this);       zoomImage.bind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this);       timeoutID = setTimeout(timeoutFunction, 200);   };   var timeoutFunction = function(){       timeoutID = undefined;       if(autoCloseMilliSeconds){           var autoCloseFunction = function(){               hideFunction();           };           zoomImage.bind('click', clearAutoClose, this);           timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);       }       zoomImage.bind('backgroundClick', hideFunction, this);       if(toggleImage) {           zoomImage.bind('click', toggleFunction, this);           zoomImage.set('imageCursor', 'hand');       }       closeButton.bind('click', hideFunction, this);       if(loadedCallback)           loadedCallback();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       closed = true;       if(timeoutID)           clearTimeout(timeoutID);       if(autoCloseMilliSeconds)           clearAutoClose();       if(hideCallback)           hideCallback();       zoomImage.set('visible', false);       if(hideEffect && hideEffect.get('duration') > 0){           hideEffect.bind('end', endEffectFunction, this);       }       else{           zoomImage.set('image', null);       }       closeButton.set('visible', false);       veil.set('visible', false);       self.unbind('click', playerClickFunction, self);       zoomImage.unbind('backgroundClick', hideFunction, this);       zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true);       if(toggleImage) {           zoomImage.unbind('click', toggleFunction, this);           zoomImage.set('cursor', 'default');       }       closeButton.unbind('click', hideFunction, this);       self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               self.resumeGlobalAudios();           }           self.stopGlobalAudio(audio);       }   };   var endEffectFunction = function() {       zoomImage.set('image', null);       hideEffect.unbind('end', endEffectFunction, this);   };   var toggleFunction = function() {       zoomImage.set('image', isToggleVisible() ? image : toggleImage);   };   var isToggleVisible = function() {       return zoomImage.get('image') == toggleImage;   };   var setCloseButtonPosition = function() {       var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10;       var top = zoomImage.get('imageTop') + 10;       if(right < 10) right = 10;       if(top < 10) top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var userInteractionStartFunction = function() {       if(timeoutUserInteractionID){           clearTimeout(timeoutUserInteractionID);           timeoutUserInteractionID = undefined;       }       else{           closeButton.set('visible', false);       }   };   var userInteractionEndFunction = function() {       if(!closed){           timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300);       }   };   var userInteractionTimeoutFunction = function() {       timeoutUserInteractionID = undefined;       closeButton.set('visible', true);       setCloseButtonPosition();   };   this.MainViewer.set('toolTipEnabled', false);   var veil = this.veilPopupPanorama;   var zoomImage = this.zoomImagePopupPanorama;   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);   if(audio){       if(stopBackgroundAudio){           this.pauseGlobalAudios();       }       this.playGlobalAudio(audio);   }   var timeoutID = undefined;   var timeoutUserInteractionID = undefined;   zoomImage.bind('loaded', loadedFunction, this);   setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0);   zoomImage.set('image', image);   zoomImage.set('customWidth', customWidth);   zoomImage.set('customHeight', customHeight);   zoomImage.set('showEffect', showEffect);   zoomImage.set('hideEffect', hideEffect);   zoomImage.set('visible', true);   return zoomImage; },
  "registerKey": function(key, value){    window[key] = value; },
  "syncPlaylists": function(playLists){    var changeToMedia = function(media, playListDispatched){       for(var i = 0, count = playLists.length; i<count; ++i){           var playList = playLists[i];           if(playList != playListDispatched){               var items = playList.get('items');               for(var j = 0, countJ = items.length; j<countJ; ++j){                   if(items[j].get('media') == media){                       if(playList.get('selectedIndex') != j){                           playList.set('selectedIndex', j);                       }                       break;                   }               }           }       }   };   var changeFunction = function(event){       var playListDispatched = event.source;       var selectedIndex = playListDispatched.get('selectedIndex');       if(selectedIndex < 0)           return;       var media = playListDispatched.get('items')[selectedIndex].get('media');       changeToMedia(media, playListDispatched);   };   var mapPlayerChangeFunction = function(event){       var panoramaMapLocation = event.source.get('panoramaMapLocation');       if(panoramaMapLocation){           var map = panoramaMapLocation.get('map');           changeToMedia(map);       }   };   for(var i = 0, count = playLists.length; i<count; ++i){       playLists[i].bind('change', changeFunction, this);   }   var mapPlayers = this.getByClassName('MapPlayer');   for(var i = 0, count = mapPlayers.length; i<count; ++i){       mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this);   } },
  "pauseGlobalAudios": function(caller){    var audios = window.currentGlobalAudios;   window.currentGlobalAudiosActionCaller = caller;   if(!audios) return;   for(var audio in audios){       audios[audio].pause();   } },
  "pauseGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];   }   audio.pause(); },
  "existsKey": function(key){    return key in window; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){    var self = this;   var closeFunction = function(){       self.MainViewer.set('toolTipEnabled', true);       this.resumePlayers(playersPaused, !containsAudio);       if(isVideo) {           this.unbind('resize', resizeFunction, this);       }       w.unbind('close', closeFunction, this);   };   var endFunction = function(){       w.hide();   };   var resizeFunction = function(){       var parentWidth = self.get('actualWidth');       var parentHeight = self.get('actualHeight');       var mediaWidth = media.get('width');       var mediaHeight = media.get('height');       var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100;       var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100;       var windowWidth = popupMaxWidthNumber * parentWidth;       var windowHeight = popupMaxHeightNumber * parentHeight;       var footerHeight = w.get('footerHeight');       var headerHeight = w.get('headerHeight');       if(!headerHeight) {           var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom');           var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom');           headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight;           headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom');       }       if(!footerHeight) {           footerHeight = 0;       }       var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight');       var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom');       var parentAspectRatio = contentWindowWidth / contentWindowHeight;       var mediaAspectRatio = mediaWidth / mediaHeight;       if(parentAspectRatio > mediaAspectRatio) {           windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight');       }       else {           windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom');       }       if(windowWidth > parentWidth * popupMaxWidthNumber) {           windowWidth = parentWidth * popupMaxWidthNumber;       }       if(windowHeight > parentHeight * popupMaxHeightNumber) {           windowHeight = parentHeight * popupMaxHeightNumber;       }       w.set('width', windowWidth);       w.set('height', windowHeight);       w.set('x', (parentWidth - w.get('actualWidth')) * 0.5);       w.set('y', (parentHeight - w.get('actualHeight')) * 0.5);   };   if(autoCloseWhenFinished){       this.executeFunctionWhenChange(playList, 0, endFunction);   }   var isVideo = media.get('class') == 'Video';   if(isVideo){       this.bind('resize', resizeFunction, this);       resizeFunction();   }   else {       w.set('width', popupMaxWidth);       w.set('height', popupMaxHeight);   }   this.MainViewer.set('toolTipEnabled', false);   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){    var audios = window.currentGlobalAudios;   if(!audios) return;   var resumeFunction = this.resumeGlobalAudios;   var endFunction = function(){       if(playList.get('selectedIndex') != index) {           resumeFunction(caller);       }   };   this.pauseGlobalAudios(caller);   this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "updateVideoCues": function(playList, index){    var playListItem = playList.get('items')[index];   var video = playListItem.get('media');   if(video.get('cues').length == 0)       return;   var player = playListItem.get('player');   var cues = [];   var changeFunction = function(){       if(playList.get('selectedIndex') != index){           video.unbind('cueChange', cueChangeFunction, this);           playList.unbind('change', changeFunction, this);       }   };   var cueChangeFunction = function(event){       var activeCues = event.data.activeCues;       for(var i = 0, count = cues.length; i<count; ++i){           var cue = cues[i];           if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){               cue.trigger('end');           }       }       cues = activeCues;   };   video.bind('cueChange', cueChangeFunction, this);   playList.bind('change', changeFunction, this); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){    var setVisibility = function(visible){       for(var i = 0, length = components.length; i<length; i++){           components[i].set('visible', visible);       }   };   if (this.rootPlayer.touchEnabled){       setVisibility(true);   } else {       var timeoutID = -1;       var rollOverFunction = function(){           setVisibility(true);           if(timeoutID >= 0) clearTimeout(timeoutID);           parentComponent.unbind('rollOver', rollOverFunction, this);           parentComponent.bind('rollOut', rollOutFunction, this);       };       var rollOutFunction = function(){           var timeoutFunction = function(){               setVisibility(false);               parentComponent.unbind('rollOver', rollOverFunction, this);           };           parentComponent.unbind('rollOut', rollOutFunction, this);           parentComponent.bind('rollOver', rollOverFunction, this);           timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut);       };       parentComponent.bind('rollOver', rollOverFunction, this);   } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('state') == 'playing') {           if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){               player.pauseCamera();           }           else{               player.pause();           }       }       else {           players.splice(i, 1);       }   }   return players; },
  "shareTwitter": function(url){    window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "loadFromCurrentMediaPlayList": function(playList, delta){    var currentIndex = playList.get('selectedIndex');   var totalItems = playList.get('items').length;   var newIndex = (currentIndex + delta) % totalItems;   while(newIndex < 0){       newIndex = totalItems + newIndex;   };   if(currentIndex != newIndex){       playList.set('selectedIndex', newIndex);   }; },
  "shareGoogle": function(url){    window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "loopAlbum": function(playList, index){    var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var loopFunction = function(){       player.play();   };   this.executeFunctionWhenChange(playList, index, loopFunction); },
  "shareFacebook": function(url){    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getPlayListWithMedia": function(media, onlySelected){    var playLists = this.getByClassName('PlayList');   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       if(onlySelected && playList.get('selectedIndex') == -1)           continue;       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           if(items[j].get('media') == media)               return playList;       }   }   return undefined; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){    var self = this;   var stateChangeFunction = function(event){       if(event.data.state == 'stopped'){           dispose();       }   };   var changeFunction = function(){       var index = playListDispatcher.get('selectedIndex');       if(index != -1){           indexDispatcher = index;           dispose();       }   };   var dispose = function(){       if(!playListDispatcher) return;       playList.set('selectedIndex', -1);       if(panoramaSequence && panoramaSequenceIndex != -1){           if(panoramaSequence) {               if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){                   var initialPosition = camera.get('initialPosition');                   var oldYaw = initialPosition.get('yaw');                   var oldPitch = initialPosition.get('pitch');                   var oldHfov = initialPosition.get('hfov');                   var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1];                   initialPosition.set('yaw', previousMovement.get('targetYaw'));                   initialPosition.set('pitch', previousMovement.get('targetPitch'));                   initialPosition.set('hfov', previousMovement.get('targetHfov'));                   var restoreInitialPositionFunction = function(event){                       initialPosition.set('yaw', oldYaw);                       initialPosition.set('pitch', oldPitch);                       initialPosition.set('hfov', oldHfov);                       itemDispatcher.unbind('end', restoreInitialPositionFunction, self);                   };                   itemDispatcher.bind('end', restoreInitialPositionFunction, self);               }               panoramaSequence.set('movementIndex', panoramaSequenceIndex);           }       }       playListDispatcher.set('selectedIndex', indexDispatcher);       if(player){           player.unbind('stateChange', stateChangeFunction, self);       }       if(sameViewerArea){           if(playList != playListDispatcher)               playListDispatcher.unbind('change', changeFunction, self);       }       else{           viewerArea.set('visible', false);       }       playListDispatcher = undefined;   };   if(!mediaDispatcher){       var currentIndex = playList.get('selectedIndex');       var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer);       if(currentPlayer) {           var playerClass = currentPlayer.get('class');           if(playerClass == 'PanoramaPlayer') mediaDispatcher = currentPlayer.get('panorama');           else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video');           else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum');           else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map');       }   }   var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined;   if(!playListDispatcher){       playList.set('selectedIndex', index);       return;   }   var indexDispatcher = playListDispatcher.get('selectedIndex');   if(playList.get('selectedIndex') == index || indexDispatcher == -1){       return;   }   var item = playList.get('items')[index];   var itemDispatcher = playListDispatcher.get('items')[indexDispatcher];   var viewerArea = item.get('player').get('viewerArea');   var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea');   if(sameViewerArea){       if(playList != playListDispatcher){           playListDispatcher.set('selectedIndex', -1);           playListDispatcher.bind('change', changeFunction, this);       }   }   else{       viewerArea.set('visible', true);   }   var panoramaSequenceIndex = -1;   var panoramaSequence = undefined;   var camera = itemDispatcher.get('camera');   if(camera){       panoramaSequence = camera.get('initialSequence');       if(panoramaSequence) {           panoramaSequenceIndex = panoramaSequence.get('movementIndex');       }   }   playList.set('selectedIndex', index);   var player = undefined;   if(item.get('player') != itemDispatcher.get('player')){       player = item.get('player');       player.bind('stateChange', stateChangeFunction, this);   }   this.executeFunctionWhenChange(playList, index, dispose); },
  "unregisterKey": function(key){    delete window[key]; },
  "setMainMediaByName": function(name){    var items = this.mainPlayList.get('items');   for(var i = 0; i<items.length; ++i){       if(items[i].get('media').get('label') == name) {           this.mainPlayList.set('selectedIndex', i);           return;       }   } },
  "getGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios != undefined && audio.get('id') in audios){       audio = audios[audio.get('id')];   }   return audio; },
  "isCardboardViewMode": function(){    var players = this.getByClassName('PanoramaPlayer');   return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getActivePlayerWithViewer": function(viewerArea){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   players = players.concat(this.getByClassName('MapPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('viewerArea') == viewerArea) {           var playerClass = player.get('class');           if(playerClass == 'PanoramaPlayer' && player.get('panorama') != undefined) return player;           else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player;           else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player;           else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player;       }   }   return undefined; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){    var enabled = this.get(playerFlag);   for(var i in components){       components[i].set('visible', enabled);   } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){    var endFunction = function(){       if(playList.get('selectedIndex') == fromIndex)           playList.set('selectedIndex', toIndex);   };   this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){    var self = this;   var endObject = undefined;   var changePlayListFunction = function(event){       if(event.data.previousSelectedIndex == index){           if(changeFunction) changeFunction();           if(endFunction) endObject.unbind('end', endFunction, self);           playList.unbind('change', changePlayListFunction, self);       }   };   if(endFunction){       var playListItem = playList.get('items')[index];       var playListItemClass = playListItem.get('class');       if(playListItemClass == 'PanoramaPlayListItem'){           var camera = playListItem.get('camera');           endObject = camera.get('initialSequence');           if(!endObject) return;       }       else{           endObject = playListItem.get('media');       }       endObject.bind('end', endFunction, this);   }   playList.bind('change', changePlayListFunction, this); },
  "setMainMediaByIndex": function(index){    if(index >= 0 && index < this.mainPlayList.get('items').length){       this.mainPlayList.set('selectedIndex', index);   } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){    this.unregisterKey('visibility_'+component.get('id'));   var changeVisibility = function(){        if(effect && propertyEffect){            component.set(propertyEffect, effect);        }        component.set('visible', visible);       if(component.get('class') == 'ViewerArea'){           try{               if(visible) component.restart();               else        component.pause();           }           catch(e){};       }   };   var effectTimeoutName = 'effectTimeout_'+component.get('id');   if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){       var effectTimeout = window[effectTimeoutName];       if(effectTimeout instanceof Array){           for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) }       }else{           clearTimeout(effectTimeout);       }       delete window[effectTimeoutName];   }   else if(visible == component.get('visible') && !ignoreClearTimeout)       return;   if(applyAt && applyAt > 0){       var effectTimeout = setTimeout(function(){            if(window[effectTimeoutName] instanceof Array) {                var arrayTimeoutVal = window[effectTimeoutName];               var index = arrayTimeoutVal.indexOf(effectTimeout);               arrayTimeoutVal.splice(index, 1);               if(arrayTimeoutVal.length == 0){                   delete window[effectTimeoutName];               }           }else{               delete window[effectTimeoutName];            }           changeVisibility();        }, applyAt);       if(window.hasOwnProperty(effectTimeoutName)){           window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout];       }else{           window[effectTimeoutName] = effectTimeout;       }   }   else{       changeVisibility();   } },
  "changeBackgroundWhilePlay": function(playList, index, color){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           playList.unbind('change', changeFunction, this);           if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){               viewerArea.set('backgroundColor', backgroundColorBackup);               viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup);           }       }   };   var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var viewerArea = player.get('viewerArea');   var backgroundColorBackup = viewerArea.get('backgroundColor');   var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios');   var colorRatios = [0];   if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){       viewerArea.set('backgroundColor', color);       viewerArea.set('backgroundColorRatios', colorRatios);       playList.bind('change', changeFunction, this);   } },
  "stopGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];       delete audios[audio.get('id')];   }   audio.stop(); },
  "autotriggerAtStart": function(player, callback){    var stateChangeFunction = function(event){        if(event.data.state == 'playing'){           callback();           player.unbind('stateChange', stateChangeFunction, this);       }   };   player.bind('stateChange', stateChangeFunction, this); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){    var resetFunction = function(){       panoramaPlayListItem.unbind('stop', resetFunction, this);       player.set('mapPlayer', null);   };   panoramaPlayListItem.bind('stop', resetFunction, this);   var player = panoramaPlayListItem.get('player');   player.set('mapPlayer', mapPlayer); },
  "resumeGlobalAudios": function(caller){    if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller)       return;   window.currentGlobalAudiosActionCaller = undefined;   var audios = window.currentGlobalAudios;   if(!audios) return;   for(var audio in audios){       audios[audio].play();   } },
  "getKey": function(key){    return window[key]; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){    for(var i = 0; i<players.length; ++i){       var player = players[i];       if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){           player.resumeCamera();       }       else{           player.play();       }   } },
  "startPanoramaWithCamera": function(panorama, camera){    var playLists = this.getByClassName('PlayList');   if(playLists.length == 0)       return;    var restoreItems = [];   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           var item = items[j];           if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){               restoreItems.push({camera: item.get('camera'), item: item});               item.set('camera', camera);           }       }   }   if(restoreItems.length > 0) {       var restoreCameraOnStop = function(){           for (var i = 0; i < restoreItems.length; i++) {               restoreItems[i].item.set('camera', restoreItems[i].camera);           }           restoreItems[0].item.unbind('stop', restoreCameraOnStop, this);       };       restoreItems[0].item.bind('stop', restoreCameraOnStop, this);   } },
  "playGlobalAudio": function(audio, endCallback){    var endFunction = function(){       audio.unbind('end', endFunction, this);       this.stopGlobalAudio(audio);       if(endCallback)           endCallback();   };   audio = this.getGlobalAudio(audio);   var audios = window.currentGlobalAudios;   if(!audios){       audios = window.currentGlobalAudios = {};   }   audios[audio.get('id')] = audio;   if(audio.get('state') == 'playing'){       return;   }   if(!audio.get('loop')){       audio.bind('end', endFunction, this);   }   audio.play(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){    var closeFunction = function(){       clearAutoClose();       this.resumePlayers(playersPaused, !containsAudio);       w.unbind('close', closeFunction, this);   };   var clearAutoClose = function(){       w.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var timeoutID = undefined;   if(autoCloseMilliSeconds){       var autoCloseFunction = function(){           w.hide();       };       w.bind('click', clearAutoClose, this);       timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           this.stopGlobalAudio(audio);           if(isPanorama) {               var media = playListItem.get('media');               var audios = media.get('audios');               audios.splice(audios.indexOf(audio), 1);               media.set('audios', audios);           }           playList.unbind('change', changeFunction, this);           if(endCallback)               endCallback();       }   };   var audios = window.currentGlobalAudios;   if(audios && audio.get('id') in audios){       audio = audios[audio.get('id')];       if(audio.get('state') != 'playing'){           audio.play();       }       return;   }   playList.bind('change', changeFunction, this);   var playListItem = playList.get('items')[index];   var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem';   if(isPanorama) {       var media = playListItem.get('media');       var audios = (media.get('audios') || []).slice();       if(audio.get('class') == 'MediaAudio') {           var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio');           panoramaAudio.set('autoplay', false);           panoramaAudio.set('audio', audio.get('audio'));           panoramaAudio.set('loop', audio.get('loop'));           panoramaAudio.set('id', audio.get('id'));           audio = panoramaAudio;       }       audios.push(audio);       media.set('audios', audios);   }   this.playGlobalAudio(audio, endCallback); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){    var self = this;   var showEndFunction = function() {       popupPanoramaOverlay.unbind('showEnd', showEndFunction);       closeButton.bind('click', hideFunction, this);       setCloseButtonPosition();       closeButton.set('visible', true);   };   var endFunction = function() {       if(!popupPanoramaOverlay.get('loop'))           hideFunction();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       if(!self.isCardboardViewMode())           popupPanoramaOverlay.set('visible', false);       closeButton.set('visible', false);       closeButton.unbind('click', hideFunction, this);       popupPanoramaOverlay.unbind('end', endFunction, self);       self.resumePlayers(playersPaused, true);       self.resumeGlobalAudios();   };   var setCloseButtonPosition = function() {       var right = 10;       var top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   this.MainViewer.set('toolTipEnabled', false);   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(true);   this.pauseGlobalAudios();   popupPanoramaOverlay.bind('end', endFunction, this, true);   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); },
  "playAudioList": function(audios){    if(audios.length == 0) return;   var currentAudioCount = -1;   var currentAudio;   var playGlobalAudioFunction = this.playGlobalAudio;   var playNext = function(){       if(++currentAudioCount >= audios.length)           currentAudioCount = 0;       currentAudio = audios[currentAudioCount];       playGlobalAudioFunction(currentAudio, playNext);   };   playNext(); },
  "fixTogglePlayPauseButton": function(player){    var state = player.get('state');   var button = player.get('buttonPlayPause');   if(typeof button !== 'undefined' && player.get('state') == 'playing'){       button.set('pressed', true);   } }
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