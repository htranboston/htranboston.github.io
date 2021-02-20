(function(){
    var script = {
 "definitions": [{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_AFEF0BB1_BBB3_FDF0_41E0_DD8E4C99DF2B",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_B031D0AF_BFF6_0E46_41B1_C6312440BAA7",
 "class": "PlayList"
},
{
 "items": [
  {
   "media": "this.panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_camera"
  },
  {
   "media": "this.panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_camera"
  },
  {
   "media": "this.panorama_F23C8009_FC26_6AEB_41B6_0319817B8314",
   "camera": "this.panorama_F23C8009_FC26_6AEB_41B6_0319817B8314_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.trigger('tourEnded')"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_F23C8009_FC26_6AEB_41B6_0319817B8314_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_A0506B1C_AF6E_0D92_41CD_BE6FC628C667.mp3",
  "oggUrl": "media/audio_A0506B1C_AF6E_0D92_41CD_BE6FC628C667.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_A0506B1C_AF6E_0D92_41CD_BE6FC628C667",
 "data": {
  "label": "bensound-inspire"
 }
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer"
},
{
 "label": "TES_360_Video-Desktop",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_A859C0D2_B806_37C2_41E1_CAC4C3832233_t.jpg",
 "width": 960,
 "loop": false,
 "id": "video_A859C0D2_B806_37C2_41E1_CAC4C3832233",
 "class": "Video",
 "height": 480,
 "video": {
  "width": 960,
  "class": "VideoResource",
  "height": 480,
  "mp4Url": "media/video_A859C0D2_B806_37C2_41E1_CAC4C3832233.mp4"
 }
},
{
 "hfovMax": 120,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F23C8009_FC26_6AEB_41B6_0319817B8314_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F23C8009_FC26_6AEB_41B6_0319817B8314_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F23C8009_FC26_6AEB_41B6_0319817B8314_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F23C8009_FC26_6AEB_41B6_0319817B8314_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F23C8009_FC26_6AEB_41B6_0319817B8314_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F23C8009_FC26_6AEB_41B6_0319817B8314_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F23C8009_FC26_6AEB_41B6_0319817B8314_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F23C8009_FC26_6AEB_41B6_0319817B8314_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F23C8009_FC26_6AEB_41B6_0319817B8314_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F23C8009_FC26_6AEB_41B6_0319817B8314_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F23C8009_FC26_6AEB_41B6_0319817B8314_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F23C8009_FC26_6AEB_41B6_0319817B8314_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F23C8009_FC26_6AEB_41B6_0319817B8314_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F23C8009_FC26_6AEB_41B6_0319817B8314_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F23C8009_FC26_6AEB_41B6_0319817B8314_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F23C8009_FC26_6AEB_41B6_0319817B8314_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F23C8009_FC26_6AEB_41B6_0319817B8314_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F23C8009_FC26_6AEB_41B6_0319817B8314_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F23C8009_FC26_6AEB_41B6_0319817B8314_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F23C8009_FC26_6AEB_41B6_0319817B8314_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F23C8009_FC26_6AEB_41B6_0319817B8314_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 180,
 "label": "TES Lobby VR - 03",
 "id": "panorama_F23C8009_FC26_6AEB_41B6_0319817B8314",
 "thumbnailUrl": "media/panorama_F23C8009_FC26_6AEB_41B6_0319817B8314_t.jpg",
 "partial": true,
 "class": "Panorama",
 "pitch": 0,
 "cardboardMenu": "this.Menu_B03B60B6_BFF6_0E46_41D5_C5105D92D46C"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "fieldOfViewOverlayOutsideOpacity": 0,
 "label": "floorplan",
 "id": "map_AFEF0BB1_BBB3_FDF0_41E0_DD8E4C99DF2B",
 "minimumZoomFactor": 0.5,
 "thumbnailUrl": "media/map_AFEF0BB1_BBB3_FDF0_41E0_DD8E4C99DF2B_t.png",
 "width": 676,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_AFEF0BB1_BBB3_FDF0_41E0_DD8E4C99DF2B.png",
    "width": 676,
    "class": "ImageResourceLevel",
    "height": 1090
   },
   {
    "url": "media/map_AFEF0BB1_BBB3_FDF0_41E0_DD8E4C99DF2B_lq.png",
    "width": 201,
    "class": "ImageResourceLevel",
    "height": 325,
    "tags": "preload"
   }
  ]
 },
 "fieldOfViewOverlayRadiusScale": 0.3,
 "maximumZoomFactor": 1.2,
 "class": "Map",
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "initialZoomFactor": 1,
 "scaleMode": "fit_inside",
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "height": 1090,
 "overlays": [
  "this.overlay_ADA76A3E_BBBD_3EF3_41C3_0F7F3ECDF745",
  "this.overlay_ADEA1DA8_BBBD_159F_41DF_22DF96F14502",
  "this.overlay_AC3B82FE_BBBD_0F73_41D0_15B91A771AC7"
 ]
},
{
 "partial": true,
 "id": "panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62",
 "thumbnailUrl": "media/panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_t.jpg",
 "hfov": 180,
 "label": "TES Lobby VR - 02",
 "pitch": 0,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_B03B60B6_BFF6_0E46_41D5_C5105D92D46C",
 "hfovMax": 120,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_F1C3C256_FC26_6F79_41EE_95B7C36DF70E",
  "this.overlay_F1C3D256_FC26_6F79_41D2_0CD43118C8D3",
  "this.overlay_A876ED5E_B806_CEC2_41DC_D576F76884BA"
 ]
},
{
 "items": [
  {
   "media": "this.panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_AF4A0CB6_BC78_D8D1_41CD_D391A94D1D17_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_camera"
  },
  {
   "media": "this.panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_AF4A0CB6_BC78_D8D1_41CD_D391A94D1D17_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_camera"
  },
  {
   "media": "this.panorama_F23C8009_FC26_6AEB_41B6_0319817B8314",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_AF4A0CB6_BC78_D8D1_41CD_D391A94D1D17_playlist, 2, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F23C8009_FC26_6AEB_41B6_0319817B8314_camera"
  }
 ],
 "id": "ThumbnailList_AF4A0CB6_BC78_D8D1_41CD_D391A94D1D17_playlist",
 "class": "PlayList"
},
{
 "label": "Photo Album teslogin",
 "thumbnailUrl": "media/album_FF50EC84_F6E8_1D88_41EB_D360A962CD2B_t.png",
 "playList": "this.album_FF50EC84_F6E8_1D88_41EB_D360A962CD2B_AlbumPlayList",
 "id": "album_FF50EC84_F6E8_1D88_41EB_D360A962CD2B",
 "class": "PhotoAlbum"
},
{
 "label": "TES_360_Video-Desktop",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_A89792ED_B806_5BC6_41C7_82AC37BA75B0_t.jpg",
 "width": 960,
 "loop": false,
 "id": "video_A89792ED_B806_5BC6_41C7_82AC37BA75B0",
 "class": "Video",
 "height": 480,
 "video": {
  "width": 960,
  "class": "VideoResource",
  "height": 480,
  "mp4Url": "media/video_A89792ED_B806_5BC6_41C7_82AC37BA75B0.mp4"
 }
},
{
 "items": [
  {
   "media": "this.video_A859C0D2_B806_37C2_41E1_CAC4C3832233",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_B031B0AF_BFF6_0E46_41E6_F9D385263A4D, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_B031B0AF_BFF6_0E46_41E6_F9D385263A4D, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_B031B0AF_BFF6_0E46_41E6_F9D385263A4D",
 "class": "PlayList"
},
{
 "viewerArea": "this.MainViewer",
 "buttonCardboardView": "this.Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
 "buttonToggleHotspots": "this.Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA",
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "buttonToggleGyroscope": "this.Button_485BFF41_598E_3DB2_41A9_33F36E014467",
 "mouseControlMode": "drag_rotation"
},
{
 "duration": 5000,
 "label": "TES Login",
 "id": "album_FF50EC84_F6E8_1D88_41EB_D360A962CD2B_0",
 "thumbnailUrl": "media/album_FF50EC84_F6E8_1D88_41EB_D360A962CD2B_0_t.png",
 "width": 522,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_FF50EC84_F6E8_1D88_41EB_D360A962CD2B_0.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "Photo",
 "height": 427
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_9D8B40D4_BC78_C858_41D2_5CDF86F6C770.mp3",
  "oggUrl": "media/audio_9D8B40D4_BC78_C858_41D2_5CDF86F6C770.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_9D8B40D4_BC78_C858_41D2_5CDF86F6C770",
 "data": {
  "label": "bensound-inspire"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F23C8009_FC26_6AEB_41B6_0319817B8314"
  }
 ],
 "hfov": 180,
 "id": "panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65",
 "thumbnailUrl": "media/panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_t.jpg",
 "label": "TES Lobby VR - 01",
 "pitch": 0,
 "partial": true,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_B03B60B6_BFF6_0E46_41D5_C5105D92D46C",
 "hfovMax": 120,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_FB0732F2_FC25_AF39_41E3_CD20D4A80F06",
  "this.overlay_ABD1D1D4_B83E_39C5_41CC_8DC213570B2A",
  "this.overlay_AC38E913_B802_7642_41E6_2B5A8AC5816A"
 ]
},
{
 "items": [
  {
   "media": "this.video_A89792ED_B806_5BC6_41C7_82AC37BA75B0",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_B03670AF_BFF6_0E46_41DA_6C72386E9596, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_B03670AF_BFF6_0E46_41DA_6C72386E9596, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_B03670AF_BFF6_0E46_41DA_6C72386E9596",
 "class": "PlayList"
},
{
 "items": [
  {
   "player": "this.MainViewerPhotoAlbumPlayer",
   "media": "this.album_FF50EC84_F6E8_1D88_41EB_D360A962CD2B",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "playList_B037B0AE_BFF6_0E46_41C5_36AE15B793EC",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "viewerArea": "this.MapViewer",
 "id": "MapViewerMapPlayer",
 "class": "MapPlayer",
 "movementMode": "constrained"
},
{
 "fontFamily": "Arial",
 "rollOverFontColor": "#FFFFFF",
 "children": [
  {
   "label": "TES Lobby VR - 01",
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "MenuItem"
  },
  {
   "label": "TES Lobby VR - 02",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "MenuItem"
  },
  {
   "label": "TES Lobby VR - 03",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "MenuItem"
  }
 ],
 "label": "Media",
 "id": "Menu_B03B60B6_BFF6_0E46_41D5_C5105D92D46C",
 "rollOverOpacity": 0.8,
 "selectedBackgroundColor": "#202020",
 "class": "Menu",
 "opacity": 0.4,
 "selectedFontColor": "#FFFFFF",
 "rollOverBackgroundColor": "#000000",
 "backgroundColor": "#404040",
 "fontColor": "#FFFFFF"
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer",
 "displayPlaybackBar": true,
 "class": "VideoPlayer"
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_AFEF0BB1_BBB3_FDF0_41E0_DD8E4C99DF2B",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_B035E0AE_BFF6_0E46_41E2_C4BE2BFF2EAF",
 "class": "PlayList"
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "MainViewer",
 "left": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "class": "ViewerArea",
 "minHeight": 50,
 "width": "100%",
 "toolTipOpacity": 0.5,
 "shadow": false,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 13,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 7,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "minWidth": 100,
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": 0,
 "paddingLeft": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 7,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 10,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "transitionDuration": 500,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "data": {
  "name": "--STICKER"
 },
 "children": [
  "this.Label_0C5F23A8_3BA0_A6FF_419F_468451E37918"
 ],
 "layout": "absolute",
 "left": 30,
 "width": 271,
 "scrollBarColor": "#000000",
 "id": "Container_0C5F33A8_3BA0_A6FF_41C3_2A6652E2CE94",
 "class": "Container",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "horizontalAlign": "left",
 "bottom": 20,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "height": 97,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "--BUTTON SET"
 },
 "children": [
  "this.Label_0E9CEE5D_36F3_E64E_419C_5A94FA5D3CA1",
  "this.Container_0542AAAA_3AA3_A6F3_41B2_0E208ADBBBE1"
 ],
 "layout": "absolute",
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "class": "Container",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "top": 0,
 "height": 60,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible"
},
{
 "backgroundColorRatios": [
  0.02
 ],
 "data": {
  "name": "-button set"
 },
 "children": [
  "this.Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
  "this.Button_485BFF41_598E_3DB2_41A9_33F36E014467",
  "this.Button_4C5C0864_5A8E_C472_41C4_7C0748488A41",
  "this.Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA",
  "this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A"
 ],
 "layout": "vertical",
 "id": "Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4",
 "width": 60,
 "scrollBarColor": "#000000",
 "class": "Container",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "right": 15,
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#333333"
 ],
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "top": 62,
 "height": 300,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "data": {
  "name": "-button set container"
 },
 "children": [
  "this.IconButton_7B206C51_3AA0_A251_41A3_B3DB657BC52B"
 ],
 "layout": "horizontal",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "class": "Container",
 "minHeight": 1,
 "horizontalAlign": "right",
 "shadow": false,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "width": "100%",
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 30,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "height": 90,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 3,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "---FLOORPLAN"
 },
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "layout": "absolute",
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "class": "Container",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "borderSize": 0,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "itemThumbnailShadowColor": "#000000",
 "id": "ThumbnailList_AF4A0CB6_BC78_D8D1_41CD_D391A94D1D17",
 "left": "33.93%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#FFFFFF",
 "itemLabelFontStyle": "normal",
 "class": "ThumbnailList",
 "minHeight": 1,
 "horizontalAlign": "center",
 "itemLabelHorizontalAlign": "center",
 "shadow": false,
 "itemMode": "normal",
 "scrollBarVisible": "rollOver",
 "itemThumbnailShadowHorizontalLength": 3,
 "itemLabelFontFamily": "Arial",
 "itemThumbnailOpacity": 1,
 "width": "31.962%",
 "itemThumbnailShadowOpacity": 0.8,
 "itemPaddingRight": 3,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000"
 ],
 "itemBorderRadius": 0,
 "paddingRight": 20,
 "itemPaddingLeft": 3,
 "itemHorizontalAlign": "center",
 "height": 100.05,
 "itemOpacity": 1,
 "itemBackgroundOpacity": 0,
 "itemLabelPosition": "bottom",
 "itemThumbnailShadowSpread": 1,
 "backgroundOpacity": 0.2,
 "itemThumbnailBorderRadius": 5,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "itemThumbnailShadowVerticalLength": 3,
 "propagateClick": false,
 "itemBackgroundColorRatios": [],
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "selectedItemLabelFontSize": "10px",
 "borderSize": 0,
 "selectedItemLabelFontWeight": "bold",
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "minWidth": 1,
 "playList": "this.ThumbnailList_AF4A0CB6_BC78_D8D1_41CD_D391A94D1D17_playlist",
 "itemThumbnailShadowBlurRadius": 4,
 "bottom": "0.06%",
 "itemLabelFontSize": "12px",
 "paddingLeft": 20,
 "scrollBarMargin": 2,
 "itemVerticalAlign": "middle",
 "itemLabelFontColor": "#FFFFFF",
 "itemThumbnailScaleMode": "fit_outside",
 "itemThumbnailHeight": 25,
 "paddingTop": 10,
 "itemBackgroundColorDirection": "vertical",
 "borderRadius": 5,
 "gap": 5,
 "paddingBottom": 10,
 "itemLabelGap": 10,
 "itemThumbnailShadow": true,
 "itemThumbnailWidth": 45,
 "itemPaddingBottom": 3,
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "ThumbnailList1355"
 },
 "scrollBarWidth": 10
},
{
 "fontFamily": "Arial",
 "backgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "id": "Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A",
 "rollOverBackgroundColor": [
  "#666666"
 ],
 "pressedIconWidth": 30,
 "width": 60,
 "data": {
  "name": "Button Settings Fullscreen"
 },
 "fontSize": 12,
 "class": "Button",
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "iconURL": "skin/Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A.png",
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColor": [
  "#333333"
 ],
 "paddingLeft": 0,
 "mode": "toggle",
 "paddingRight": 0,
 "pressedIconHeight": 30,
 "height": 60,
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundOpacity": 1,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "textDecoration": "none",
 "pressedIconURL": "skin/Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A_pressed.png",
 "fontStyle": "normal",
 "pressedRollOverBackgroundColor": [
  "#666666"
 ],
 "shadowSpread": 1,
 "cursor": "hand",
 "propagateClick": false,
 "fontWeight": "normal",
 "iconWidth": 30,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Arial",
 "backgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "id": "Button_4C5C0864_5A8E_C472_41C4_7C0748488A41",
 "rollOverBackgroundColor": [
  "#666666"
 ],
 "pressedIconWidth": 30,
 "width": 60,
 "data": {
  "name": "Button Settings Mute"
 },
 "fontSize": 12,
 "class": "Button",
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "iconURL": "skin/Button_4C5C0864_5A8E_C472_41C4_7C0748488A41.png",
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColor": [
  "#333333"
 ],
 "paddingLeft": 0,
 "mode": "toggle",
 "paddingRight": 0,
 "pressedIconHeight": 30,
 "height": 60,
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundOpacity": 1,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "textDecoration": "none",
 "pressedIconURL": "skin/Button_4C5C0864_5A8E_C472_41C4_7C0748488A41_pressed.png",
 "fontStyle": "normal",
 "pressedRollOverBackgroundColor": [
  "#666666"
 ],
 "shadowSpread": 1,
 "cursor": "hand",
 "propagateClick": false,
 "fontWeight": "normal",
 "iconWidth": 30,
 "iconBeforeLabel": true
},
{
 "map": {
  "width": 50,
  "x": 491.96,
  "class": "HotspotMapOverlayMap",
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_AFEF0BB1_BBB3_FDF0_41E0_DD8E4C99DF2B_HS_3_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "offsetY": 0,
  "height": 50,
  "y": 507.48
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea",
   "toolTip": "Right Hall"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_ADA76A3E_BBBD_3EF3_41C3_0F7F3ECDF745",
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 491.96,
  "height": 50,
  "y": 507.48,
  "width": 50,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_AFEF0BB1_BBB3_FDF0_41E0_DD8E4C99DF2B_HS_3.png",
     "width": 50,
     "class": "ImageResourceLevel",
     "height": 50
    }
   ]
  },
  "class": "HotspotMapOverlayImage"
 }
},
{
 "map": {
  "width": 50,
  "x": 132.61,
  "class": "HotspotMapOverlayMap",
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_AFEF0BB1_BBB3_FDF0_41E0_DD8E4C99DF2B_HS_4_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "offsetY": 0,
  "height": 50,
  "y": 378.43
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea",
   "toolTip": "Left Hall"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_ADEA1DA8_BBBD_159F_41DF_22DF96F14502",
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 132.61,
  "height": 50,
  "y": 378.43,
  "width": 50,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_AFEF0BB1_BBB3_FDF0_41E0_DD8E4C99DF2B_HS_4.png",
     "width": 50,
     "class": "ImageResourceLevel",
     "height": 50
    }
   ]
  },
  "class": "HotspotMapOverlayImage"
 }
},
{
 "map": {
  "width": 50,
  "x": 315.68,
  "class": "HotspotMapOverlayMap",
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_AFEF0BB1_BBB3_FDF0_41E0_DD8E4C99DF2B_HS_5_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "offsetY": 0,
  "height": 50,
  "y": 994.91
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea",
   "toolTip": "Front Lobby"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_AC3B82FE_BBBD_0F73_41D0_15B91A771AC7",
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 315.68,
  "height": 50,
  "y": 994.91,
  "width": 50,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_AFEF0BB1_BBB3_FDF0_41E0_DD8E4C99DF2B_HS_5.png",
     "width": 50,
     "class": "ImageResourceLevel",
     "height": 50
    }
   ]
  },
  "class": "HotspotMapOverlayImage"
 }
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_1_HS_5_0.png",
      "width": 52,
      "class": "ImageResourceLevel",
      "height": 56
     }
    ]
   },
   "hfov": 2.3,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -10.12,
   "yaw": 1.34
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.openLink('https://htranboston.github.io/vr/', '_blank')",
   "mapColor": "image",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Play Video"
  }
 ],
 "id": "overlay_F1C3C256_FC26_6F79_41EE_95B7C36DF70E",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": []
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F1C31256_FC26_6F79_41E6_28307EB2CE62_1_HS_4_0.png",
      "width": 60,
      "class": "ImageResourceLevel",
      "height": 77
     }
    ]
   },
   "hfov": 2.68,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -7.4,
   "yaw": 71.93
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.openLink('https://zoom.us/meetings', '_blank')",
   "mapColor": "image",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Zoom Meeting"
  }
 ],
 "id": "overlay_F1C3D256_FC26_6F79_41D2_0CD43118C8D3",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": []
},
{
 "blending": 0.25,
 "video": {
  "width": 960,
  "class": "VideoResource",
  "height": 480,
  "mp4Url": "media/video_A89792ED_B806_5BC6_41C7_82AC37BA75B0.mp4"
 },
 "hfov": 26.33,
 "id": "overlay_A876ED5E_B806_CEC2_41DC_D576F76884BA",
 "enabledInCardboard": true,
 "autoplay": true,
 "loop": true,
 "class": "VideoPanoramaOverlay",
 "pitch": 1.07,
 "useHandCursor": true,
 "yaw": 1.52,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_A876ED5E_B806_CEC2_41DC_D576F76884BA_t.jpg",
    "width": 960,
    "class": "ImageResourceLevel",
    "height": 480
   }
  ]
 },
 "rotationY": 4.6,
 "roll": 0.09,
 "rotationX": -0.67,
 "videoVisibleOnStop": false,
 "data": {
  "label": "Video"
 },
 "vfov": 14.48,
 "distance": 1.5
},
{
 "items": [
  {
   "camera": {
    "class": "PhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.album_FF50EC84_F6E8_1D88_41EB_D360A962CD2B_0",
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_FF50EC84_F6E8_1D88_41EB_D360A962CD2B_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "fontFamily": "Arial",
 "backgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "id": "Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
 "rollOverBackgroundColor": [
  "#666666"
 ],
 "width": 60,
 "data": {
  "name": "Button settings VR"
 },
 "fontSize": 12,
 "class": "Button",
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "iconURL": "skin/Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0.png",
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColor": [
  "#333333"
 ],
 "paddingLeft": 0,
 "mode": "push",
 "paddingRight": 0,
 "height": 60,
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundOpacity": 1,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "textDecoration": "none",
 "pressedIconURL": "skin/Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0_pressed.png",
 "fontStyle": "normal",
 "pressedRollOverBackgroundColor": [
  "#666666"
 ],
 "shadowSpread": 1,
 "cursor": "hand",
 "propagateClick": false,
 "fontWeight": "normal",
 "iconWidth": 30,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Arial",
 "backgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "id": "Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA",
 "rollOverIconWidth": 30,
 "rollOverBackgroundColor": [
  "#666666"
 ],
 "width": 60,
 "data": {
  "name": "Button Settings HS"
 },
 "fontSize": 12,
 "class": "Button",
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "rollOverIconHeight": 30,
 "borderSize": 0,
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "iconURL": "skin/Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA.png",
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColor": [
  "#333333"
 ],
 "paddingLeft": 0,
 "mode": "toggle",
 "paddingRight": 0,
 "pressedIconHeight": 30,
 "height": 60,
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundOpacity": 1,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "textDecoration": "none",
 "pressedIconWidth": 30,
 "fontStyle": "normal",
 "pressedRollOverBackgroundColor": [
  "#666666"
 ],
 "pressedIconURL": "skin/Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA_pressed.png",
 "shadowSpread": 1,
 "cursor": "hand",
 "propagateClick": false,
 "fontWeight": "normal",
 "iconWidth": 30,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Arial",
 "backgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "id": "Button_485BFF41_598E_3DB2_41A9_33F36E014467",
 "rollOverIconWidth": 30,
 "rollOverBackgroundColor": [
  "#666666"
 ],
 "width": 60,
 "data": {
  "name": "Button Settings Gyro"
 },
 "fontSize": 12,
 "class": "Button",
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "rollOverIconHeight": 30,
 "borderSize": 0,
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "iconURL": "skin/Button_485BFF41_598E_3DB2_41A9_33F36E014467.png",
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColor": [
  "#333333"
 ],
 "paddingLeft": 0,
 "mode": "toggle",
 "paddingRight": 0,
 "pressedIconHeight": 30,
 "height": 60,
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundOpacity": 1,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "textDecoration": "none",
 "pressedIconWidth": 30,
 "fontStyle": "normal",
 "pressedRollOverBackgroundColor": [
  "#666666"
 ],
 "pressedIconURL": "skin/Button_485BFF41_598E_3DB2_41A9_33F36E014467_pressed.png",
 "shadowSpread": 1,
 "cursor": "hand",
 "propagateClick": false,
 "fontWeight": "normal",
 "iconWidth": 30,
 "iconBeforeLabel": true
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_1_HS_3_0.png",
      "width": 59,
      "class": "ImageResourceLevel",
      "height": 77
     }
    ]
   },
   "hfov": 2.7,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -1.44,
   "yaw": -12.74
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.openLink('http://eepurl.com/hhBd0f', '_blank')",
   "mapColor": "image",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Sign-up"
  }
 ],
 "id": "overlay_FB0732F2_FC25_AF39_41E3_CD20D4A80F06",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": []
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.03,
   "image": "this.AnimatedImageResource_B048E0AC_BFF6_0E4A_41E5_43BAE0F41703",
   "pitch": -15.25,
   "yaw": -30.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Left Hall"
  }
 ],
 "id": "overlay_ABD1D1D4_B83E_39C5_41CC_8DC213570B2A",
 "data": {
  "label": "Arrow 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.03,
   "yaw": -30.26,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_1_HS_4_0_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.04,
   "image": "this.AnimatedImageResource_B04840AD_BFF6_0E4A_41D4_C77AEFF2FD9A",
   "pitch": -15.01,
   "yaw": 29.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Right Hall"
  }
 ],
 "id": "overlay_AC38E913_B802_7642_41E6_2B5A8AC5816A",
 "data": {
  "label": "Arrow 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.04,
   "yaw": 29.86,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_1_HS_5_0_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "MapViewer",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "class": "ViewerArea",
 "minHeight": 1,
 "width": "100%",
 "toolTipOpacity": 1,
 "shadow": false,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "minWidth": 1,
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "paddingLeft": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "transitionDuration": 500,
 "data": {
  "name": "Floor Plan"
 }
},
{
 "textShadowHorizontalLength": 0,
 "fontFamily": "Montserrat",
 "data": {
  "name": "text 2"
 },
 "left": 0,
 "width": 236,
 "id": "Label_0C5F23A8_3BA0_A6FF_419F_468451E37918",
 "class": "Label",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "borderSize": 0,
 "textShadowColor": "#000000",
 "text": "POWER BY THE EXHIBIT SOURCE",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "textShadowOpacity": 1,
 "textShadowVerticalLength": 0,
 "top": 66,
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": 32,
 "fontSize": "13px",
 "paddingTop": 0,
 "textShadowBlurRadius": 10,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "textDecoration": "none",
 "fontStyle": "normal",
 "propagateClick": false,
 "fontWeight": "normal"
},
{
 "fontFamily": "Montserrat",
 "data": {
  "name": "Label Company Name"
 },
 "left": 30,
 "width": 450,
 "id": "Label_0E9CEE5D_36F3_E64E_419C_5A94FA5D3CA1",
 "class": "Label",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "borderSize": 0,
 "text": "TES INTERACTIVE",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "top": "0%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": 60,
 "fontSize": 31,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "textDecoration": "none",
 "fontStyle": "normal",
 "propagateClick": false,
 "fontWeight": "normal"
},
{
 "data": {
  "name": "-button set container"
 },
 "children": [
  "this.Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89"
 ],
 "layout": "horizontal",
 "width": 1199,
 "scrollBarColor": "#000000",
 "id": "Container_0542AAAA_3AA3_A6F3_41B2_0E208ADBBBE1",
 "class": "Container",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "minWidth": 1,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 15,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "height": 60,
 "top": "0%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 3,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "id": "IconButton_7B206C51_3AA0_A251_41A3_B3DB657BC52B",
 "width": 44,
 "class": "IconButton",
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "transparencyActive": true,
 "minWidth": 1,
 "maxWidth": 101,
 "iconURL": "skin/IconButton_7B206C51_3AA0_A251_41A3_B3DB657BC52B.png",
 "maxHeight": 101,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 44,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_7B206C51_3AA0_A251_41A3_B3DB657BC52B_rollover.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton Floorplan"
 }
},
{
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "shadowVerticalLength": 0,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "class": "Container",
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "borderSize": 0,
 "shadowHorizontalLength": 0,
 "minWidth": 1,
 "layout": "absolute",
 "bottom": "10%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "visible",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "rowCount": 6,
 "frameCount": 30,
 "class": "AnimatedImageResource",
 "colCount": 5,
 "id": "AnimatedImageResource_B048E0AC_BFF6_0E4A_41E5_43BAE0F41703",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_1_HS_4_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 30,
 "class": "AnimatedImageResource",
 "colCount": 5,
 "id": "AnimatedImageResource_B04840AD_BFF6_0E4A_41D4_C77AEFF2FD9A",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FB0702F2_FC25_AF39_41E0_C824C23BDA65_1_HS_5_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "fontFamily": "Arial",
 "backgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "id": "Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89",
 "rollOverBackgroundColor": [
  "#333333"
 ],
 "width": 60,
 "data": {
  "name": "Button Settings"
 },
 "fontSize": 12,
 "class": "Button",
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "iconURL": "skin/Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89.png",
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "mode": "toggle",
 "paddingRight": 0,
 "height": 60,
 "click": "if(!this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4.get('visible')){ this.setComponentVisibility(this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4, false, 0, null, null, false) }",
 "iconHeight": 17,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "rollOverBackgroundOpacity": 1,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "textDecoration": "none",
 "pressedIconURL": "skin/Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89_pressed.png",
 "fontStyle": "normal",
 "shadowSpread": 1,
 "cursor": "hand",
 "propagateClick": false,
 "fontWeight": "normal",
 "iconWidth": 17,
 "iconBeforeLabel": true
},
{
 "data": {
  "name": "header"
 },
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "class": "Container",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "height": 140,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "horizontalAlign": "right",
 "class": "IconButton",
 "minHeight": 50,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "shadow": false,
 "borderSize": 0,
 "right": 20,
 "minWidth": 50,
 "maxWidth": 60,
 "top": 20,
 "width": "100%",
 "maxHeight": 60,
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": "36.14%",
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton X"
 }
}],
 "start": "this.playAudioList([this.audio_9D8B40D4_BC78_C858_41D2_5CDF86F6C770]); this.init(); this.initGA(); this.set('mute', true); this.visibleComponentsIfPlayerFlagEnabled([this.Button_485BFF41_598E_3DB2_41A9_33F36E014467], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_AF4A0CB6_BC78_D8D1_41CD_D391A94D1D17_playlist,this.mainPlayList]); this.playList_B035E0AE_BFF6_0E46_41E2_C4BE2BFF2EAF.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A].forEach(function(component) { component.set('visible', false); }) }",
 "data": {
  "name": "Player468"
 },
 "children": [
  "this.MainViewer",
  "this.Container_0C5F33A8_3BA0_A6FF_41C3_2A6652E2CE94",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.ThumbnailList_AF4A0CB6_BC78_D8D1_41CD_D391A94D1D17"
 ],
 "layout": "absolute",
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "class": "Player",
 "minHeight": 20,
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "backgroundPreloadEnabled": true,
 "minWidth": 20,
 "defaultVRPointer": "laser",
 "buttonToggleFullscreen": "this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A",
 "scripts": {
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getKey": function(key){  return window[key]; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "unregisterKey": function(key){  delete window[key]; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "registerKey": function(key, value){  window[key] = value; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "existsKey": function(key){  return key in window; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; }
 },
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "downloadEnabled": false,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "height": "100%",
 "paddingTop": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "buttonToggleMute": "this.Button_4C5C0864_5A8E_C472_41C4_7C0748488A41",
 "mouseWheelEnabled": true,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible",
 "desktopMipmappingEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
