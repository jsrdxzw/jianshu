import {injectGlobal} from 'styled-components'

injectGlobal`
    
@font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1532062350366'); /* IE9*/
    src: url('./iconfont.eot?t=1532062350366#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
        url('iconfont.ttf?t=1532062350366') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
        url('iconfont.svg?t=1532062350366#iconfont') format('svg'); /* iOS 4.1- */
}

    .iconfont {
      font-family: "iconfont", serif !important;
      font-size:16px;
      font-style:normal;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  .icon-spin:before { content: "\\e851"; }
  .icon-icon-pencil:before { content: "\\e670"; }

  .icon-fangdajing:before { content: "\\e6e4"; }

  .icon-Aa:before { content: "\\e636"; }
`

