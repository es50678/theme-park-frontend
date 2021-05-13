/*! Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *  SPDX-License-Identifier: MIT-0

  Welcome Workshopper!
  This is the application configuration file.

  This is the ONLY file you need to modify in the front-end application.
  Each section is separated by MODULE # for you to modify.
*/

export const appConfig = {
  // MODULE 1- BACKEND
  initStateAPI: 'https://tbdojckjrb.execute-api.us-east-1.amazonaws.com/Prod/InitState/',
  // MODULE 2 - REALTIME
  iot: {
    poolId: 'us-east-1:de285989-7b67-431a-9d89-ea1fecdab7b1', // e.g. 'us-west-2:1abcdef-1234-abcd-1234-abcde123456'
    host: 'a30z42nuov05mm-ats.iot.us-east-1.amazonaws.com', // e.g. 'ab12ab12abcde.iot.us-east-1.amazonaws.com'
    region: 'us-east-1' // e.g. 'us-west-1'
  },
  // MODULE 3 - PHOTOS
  photoUploadURL: 'https://tbdojckjrb.execute-api.us-east-1.amazonaws.com/Prod/Upload',
  //
  // Don't modify anything below this comment!
  //
  images: {
    parkMapURL: 'https://d15l97sovqpx31.cloudfront.net/images/theme-park-map-large.jpg',
    logoURL: 'https://d15l97sovqpx31.cloudfront.net/images/theme-park-logo-150.png'
  },
  icons: {
    restroom: 'https://d15l97sovqpx31.cloudfront.net/icons/icon-restroom.png',
    dining: 'https://d15l97sovqpx31.cloudfront.net/icons/icon-dining.png',
    atm: 'https://d15l97sovqpx31.cloudfront.net/icons/icon-atm.png'
  }
}
