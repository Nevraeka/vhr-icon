(function (document, window) {

  if(!window.customElements || !HTMLElement.prototype.attachShadow) {
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/1.2.0/webcomponents-sd-ce.js', loadVHRIcon )
  } else {
    loadVHRIcon();
  }
  

  function loadScript(url, callback){
      const script = document.createElement("script")
      script.type = "text/javascript";
      if (script.readyState){
          script.onreadystatechange = function(){
              if (script.readyState === "loaded" || script.readyState === "complete"){
                  script.onreadystatechange = null;
                  callback();
              }
          };
      } else {
          script.onload = function (){ callback() };
      }

      script.src = url;
      document.getElementsByTagName("head")[0].appendChild(script);
  }

  function loadVHRIcon() {
    if (!window.customElements.get('vhr-icon')) {
      const VHRIcons = {
        noAccidents: `<svg width="19px" viewBox="0 0 19 18.6">
                          <defs>
                          <linearGradient id="a" x1="-289.51" y1="399.07" x2="-289.5" y2="399.32" gradientTransform="matrix(57.6, 0, 0, -55.9, 16685.12, 22323.37)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stop-color="#1e8542"/>
                            <stop offset="0.23" stop-color="#309449"/>
                            <stop offset="0.73" stop-color="#51b155"/>
                            <stop offset="1" stop-color="#5dbc5a"/>
                          </linearGradient>
                          <linearGradient id="b" x1="-289.48" y1="392.99" x2="-289.49" y2="393.31" gradientTransform="matrix(57.3, 0, 0, -29.57, 16597.41, 11629.88)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stop-color="#5dbc5a"/>
                            <stop offset="1" stop-color="#289c48"/>
                          </linearGradient>
                        </defs>           
                        <title>vhr_icon__no_accident</title>
                        <polygon style="fill: #68bf67;" points="0 18.57 0 0 19 0 19 0.91 0.91 0.91 0.91 18.57 0 18.57"/>
                        <polygon style="fill: #1e8542;" points="0 18.6 0 17.61 18.03 17.61 18.03 0 19 0 19 18.6 0 18.6"/>
                        <rect style="fill:url(#a);" x="1.34" y="1.31" width="16.38" height="15.9"/>
                        <path style="fill:url(#b);" d="M18.12,1.82H1.82V9.36a11.24,11.24,0,0,0,8.62,0s5.89-1.62,7.65.31Z" transform="translate(-0.4 -0.26)"/>
                        <path style="fill:#fff;" d="M3.21,11.35s2.65-1.94,3-2.22c0,0,1.57,3.21,1.85,3.61,0,0,2.73-6.88,7.6-9.81a8.67,8.67,0,0,0,.91,4.72,31.86,31.86,0,0,0-8.31,8.7C8.19,16.41,5.63,12.83,3.21,11.35Z" transform="translate(-0.4 -0.26)"/>          
                        <path style="fill:#2a9a47;" d="M1.28,17.86V1.11H18.43V17.86ZM17.49,17l0-15H2.19V17Z" transform="translate(-0.4 -0.26)" />
                        </svg>`,
        personal: `
      <svg width="19px" viewBox="0 0 21.31 19.64"><defs><style>.a,.b,.c,.j,.k,.q{fill:none;}.a{stroke:#aeadb1;stroke-width:1.21px;}.b{stroke:#aeafb1;}.b,.c{stroke-width:1.53px;}.c{stroke:#bbbdbf;}.d{fill:#603a17;}.e,.i{fill:#fff;}.f{fill:#aeafb1;}.g{fill:url(#a);}.h{opacity:0.18;isolation:isolate;fill:url(#b);}.i,.j,.k{stroke:#878787;}.i,.j{stroke-width:0.77px;}.k{stroke-width:0.81px;}.l{fill:url(#c);}.m{fill:url(#d);}.n{fill:url(#e);}.o{fill:url(#f);}.p{fill:url(#g);}.r{fill:#010101;}.s{fill:url(#h);}.t{fill:url(#i);}.u{fill:url(#j);}.v{fill:url(#k);}</style><linearGradient id="a" x1="-287.92" y1="398.22" x2="-288.13" y2="397.2" gradientTransform="matrix(43.14, 0, 0, -43.93, 12433.57, 17495.03)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6"/><stop offset="0.68" stop-color="gray"/><stop offset="1" stop-color="#666"/></linearGradient><linearGradient id="b" x1="-287.99" y1="394.23" x2="-287.99" y2="394.4" gradientTransform="matrix(43.33, 0, 0, -30.6, 12489.44, 12070.95)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff"/><stop offset="0.27" stop-color="#aeaeae"/><stop offset="0.53" stop-color="#636363"/><stop offset="0.75" stop-color="#2e2e2e"/><stop offset="0.91" stop-color="#0c0c0c"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="c" x1="-247.02" y1="364.01" x2="-247.02" y2="363.43" gradientTransform="matrix(5.77, 0, 0, -8.04, 1435.72, 2941.31)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#808184"/><stop offset="0.27" stop-color="#5e5d5f"/><stop offset="0.58" stop-color="#3e3b3d"/><stop offset="0.83" stop-color="#2a2728"/><stop offset="1" stop-color="#231f20"/></linearGradient><linearGradient id="d" x1="-250.22" y1="363.99" x2="-250.22" y2="363.41" gradientTransform="matrix(5.77, 0, 0, -8.04, 1461.81, 2941.05)" xlink:href="#c"/><linearGradient id="e" x1="-286.87" y1="381.38" x2="-286.85" y2="380.67" gradientTransform="matrix(35.52, 0, 0, -13.71, 10203.51, 5238.04)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#eb2227"/><stop offset="0.17" stop-color="#d7212a"/><stop offset="0.36" stop-color="#c9202c"/><stop offset="0.6" stop-color="#c1202e"/><stop offset="1" stop-color="#be202e"/></linearGradient><linearGradient id="f" x1="-283.94" y1="227.23" x2="-283.72" y2="217.47" gradientTransform="matrix(38.91, 0, 0, -20.05, 11201.87, 7807.36)" xlink:href="#e"/><linearGradient id="g" x1="-283.87" y1="355.82" x2="-283.87" y2="357.9" gradientTransform="matrix(25.33, 0, 0, -7.06, 7204.61, 2527.06)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff"/><stop offset="0.01" stop-color="#f6fafc"/><stop offset="0.08" stop-color="#c5deef"/><stop offset="0.16" stop-color="#99c4e2"/><stop offset="0.24" stop-color="#73aed7"/><stop offset="0.32" stop-color="#529bce"/><stop offset="0.41" stop-color="#388cc7"/><stop offset="0.51" stop-color="#2480c1"/><stop offset="0.63" stop-color="#1678bd"/><stop offset="0.77" stop-color="#0e73bb"/><stop offset="1" stop-color="#0b72ba"/></linearGradient><linearGradient id="h" x1="-278.42" y1="46.77" x2="-278.42" y2="55.08" gradientTransform="matrix(16.61, 0, 0, -1.03, 4638.74, 86.25)" xlink:href="#c"/><linearGradient id="i" x1="-278.42" y1="48.37" x2="-278.42" y2="56.62" gradientTransform="matrix(16.61, 0, 0, -1.03, 4638.74, 88.52)" xlink:href="#c"/><radialGradient id="j" cx="-244.15" cy="342.07" r="0.15" gradientTransform="matrix(5.44, 0, 0, -5.44, 1338.56, 1876.23)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff"/><stop offset="0.28" stop-color="#fcfcfc"/><stop offset="0.51" stop-color="#f2f2f2"/><stop offset="0.71" stop-color="#e2e1e1"/><stop offset="0.8" stop-color="#d9d8d7"/><stop offset="1" stop-color="#1a1a1a"/></radialGradient><radialGradient id="k" cx="-247.53" cy="342.07" r="0.15" gradientTransform="matrix(5.44, 0, 0, -5.44, 1364.56, 1876.23)" xlink:href="#j"/></defs><title>vhr_icon__personal</title><path class="a" d="M17.61,13.71H10.72C8.94,13.71,9,15.63,9,15.63v2.08H19.37V15.63S19.41,13.71,17.61,13.71Z"/><path class="a" d="M17.93,17l1-2.76c1,0,.93-.84.93-.84H18.54a10.76,10.76,0,0,0-.78-2c-.27-.3-6.77-.31-7.17,0a6.24,6.24,0,0,0-.78,2H8.49s-.11.87.93.84L10.31,17"/><rect class="a" x="9.56" y="16.68" width="1.69" height="2.35"/><rect class="a" x="17.18" y="16.68" width="1.69" height="2.35"/><rect class="b" x="5.14" y="1.64" width="1.89" height="3.4"/><rect class="b" x="4.68" y="1.53" width="2.81" height="0.46"/><polygon class="c" points="10.65 2.48 4.36 7.18 4.36 15.24 16.95 15.23 16.95 7.23 10.65 2.48"/><path class="c" d="M4.91,7.45v7.24H16.4V7.5L10.65,3.17,4.91,7.45Zm5.4-4.53.33-.44Z"/><polygon class="c" points="16.93 6.74 16.97 6.57 16.93 6.72 16.93 6.74"/><path class="b" d="M11.06.93a.59.59,0,0,0-.39-.16.55.55,0,0,0-.39.16l-9.12,7,1,1L4.36,7.18l0,.05v8H16.91V7.28l0,0,0,0L19.2,8.88l1-1Z"/><polygon class="c" points="10.65 2.48 4.36 7.18 4.36 15.24 16.95 15.23 16.95 7.23 10.65 2.48"/><rect class="d" x="5.14" y="1.64" width="1.89" height="3.4"/><rect class="d" x="4.68" y="1.53" width="2.81" height="0.46"/><polygon class="e" points="10.65 2.48 4.36 7.18 4.36 15.24 16.95 15.23 16.95 7.23 10.65 2.48"/><path class="f" d="M3.81,6.9,10.31,2l.33-.25L17.49,7v8.82H3.8V6.9Zm1.1.55v7.24H16.4V7.5L10.65,3.17,4.91,7.45Zm5.4-4.53.33-.44Z"/><polygon class="d" points="16.93 6.74 16.97 6.57 16.93 6.72 16.93 6.74"/><path class="d" d="M11.06.93a.59.59,0,0,0-.39-.16.55.55,0,0,0-.39.16l-9.12,7,1,1L4.36,7.18l0,.05v8H16.91V7.28l0,0,0,0L19.2,8.88l1-1Z"/><polygon class="g" points="10.63 2.48 4.36 7.21 4.36 15.32 16.96 15.32 16.94 7.2 10.63 2.48"/><path class="h" d="M17,7.18l-6.32-4.7L4.36,7.18s0,4.42,0,4.24a20.49,20.49,0,0,0,6.11-1.37,13.18,13.18,0,0,1,6.51.06Z"/><rect class="i" x="8.67" y="5.89" width="3.86" height="3.21"/><path class="j" d="M10.6,5.88V9.16"/><path class="k" d="M8.79,7.52h3.69"/><rect class="l" x="9.56" y="16.68" width="1.69" height="2.35"/><rect class="m" x="17.18" y="16.61" width="1.69" height="2.35"/><path class="n" d="M17.61,13.71H10.72C8.94,13.71,9,15.63,9,15.63v2.08H19.37V15.63S19.41,13.71,17.61,13.71Z"/><path class="o" d="M17.93,17l1-2.76c1,0,.93-.84.93-.84H18.54a10.76,10.76,0,0,0-.78-2c-.27-.3-6.77-.31-7.17,0a6.24,6.24,0,0,0-.78,2H8.49s-.11.87.93.84L10.31,17"/><path class="p" d="M17.14,11.77a18.85,18.85,0,0,0-3-.07,18,18,0,0,0-2.95.09c-.63.23-.75,2-.75,2h7.4S17.76,12,17.14,11.77Z"/><path class="q" d="M15.54,14a.77.77,0,0,0,1.53,0,.8.8,0,0,0-.06-.3H15.6A.8.8,0,0,0,15.54,14Z"/><path class="r" d="M16.3,13.27a.78.78,0,0,1,.71.47h.39a1.13,1.13,0,0,0-2.19,0h.39A.77.77,0,0,1,16.3,13.27Z"/><polygon class="s" points="11.8 16.13 11.8 15.82 16.65 15.82 16.65 16.13 11.8 16.13"/><polygon class="t" points="11.8 16.79 11.8 16.49 16.65 16.49 16.65 16.79 11.8 16.79"/><path class="u" d="M11.17,15.35a.79.79,0,0,1-1.35.57.8.8,0,0,1-.18-.87.82.82,0,0,1,.74-.49A.8.8,0,0,1,11.17,15.35Z"/><path class="v" d="M18.77,15.35a.79.79,0,0,1-.49.74.8.8,0,1,1,.49-.74Z"/></svg>
      `,
       service: `
      <svg width="19px" x="0px" y="0px"
         viewBox="0 0 19 21.2" style="enable-background:new 0 0 19 21.2;" xml:space="preserve">
      <style type="text/css">
        .st0{fill:#BBBDBF;}
        .st1{fill:#A7A9AC;}
        .st2{fill:url(#Shape_14_);}
        .st3{fill:url(#Shape_15_);}
        .st4{fill:url(#Shape_16_);}
        .st5{fill:url(#Shape_17_);}
        .st6{fill:url(#Shape_18_);}
        .st7{fill:url(#Shape_19_);}
        .st8{fill:url(#Shape_20_);}
        .st9{fill:url(#Shape_21_);}
        .st10{fill:url(#Shape_22_);}
        .st11{fill:url(#Shape_23_);}
      </style>
      <title>Icon/VHR icon/color/ico_service@1x</title>
      <desc>Created with Sketch.</desc>
      <g id="Icon_x2F_VHR-icon_x2F_color_x2F_ico_x5F_service">
        <g id="ico_service">
          <path id="Shape" class="st0" d="M1.3,17.8c-0.5,0.5-0.4,1.3,0.1,1.8l0,0c0.5,0.5,1.3,0.4,1.8,0l6.1-6.7c0.1,0.1,0.1,0.3,0.2,0.4
            c0.4,1.2,0.6,2,1.5,3l3.1,3.6c0,0,1.2,1.4,2.5,0.3l0.9-0.8c1.3-1.1,0.1-2.5,0.1-2.5l-3.1-3.6c-0.9-1-1.6-1.3-2.7-1.9
            c-0.2-0.1-0.4-0.3-0.6-0.5l1.1-1.2l-0.3-0.3L12,9.2l0.3,0.3l0.1-0.1c0,0,0.2-0.2,0.5-0.5c0.1-0.1,0.3-0.2,0.4-0.3
            c0.1-0.1,0.3-0.2,0.5-0.3c0.4-0.1,0.9-0.1,1.3,0c0.4,0.1,0.8,0.1,1.3-0.1c0.4-0.1,0.7-0.3,1-0.6c0.7-0.8,1-1.9,0.9-3l-1.8,1.5
            c-0.1,0.1-0.2,0.1-0.4,0.1l-1.9-0.5c-0.2,0-0.3-0.2-0.3-0.3l-0.4-2c0-0.1,0-0.3,0.1-0.4l1.8-1.5c-0.7-0.3-1.5-0.4-2.2-0.1
            c-0.4,0.1-0.9,0.4-1.2,0.7c-0.5,0.5-0.7,1.2-0.7,1.9c0.1,1.2,0.2,1.7,0,2.3c-0.1,0.3-0.2,0.5-0.3,0.7c-0.2,0.2-0.3,0.4-0.6,0.7
            l0.3,0.3l-0.1,0.1l-0.4-0.4L9.9,8.3C9.8,8.1,9.6,8,9.5,7.9C9.1,7.7,8.6,8.2,8.6,8.2L8.2,8.5L4.8,4.4L4,2.5l-2-1.7l-1.2,1l1.3,2.2
            l1.7,1.1l3.3,4.2L6.8,9.7c0,0-0.6,0.5-0.5,0.8c0.2,0.4,0.5,0.7,0.8,0.9L1.3,17.8z M1.6,17.9c0.3-0.3,0.8-0.3,1.1-0.1
            c0.4,0.2,0.6,0.6,0.6,1c0,0.4-0.3,0.8-0.7,0.9c-0.4,0.1-0.8,0-1.1-0.3c-0.2-0.2-0.3-0.5-0.2-0.7C1.3,18.3,1.4,18.1,1.6,17.9z"/>
          <path id="Shape_1_" class="st1" d="M16.9,20.6c-0.4,0.4-1,0.6-1.5,0.6c-0.7,0-1.4-0.4-1.9-0.9l-3.1-3.6c-0.6-0.7-1.1-1.6-1.4-2.6
            L3.7,20l0,0c-0.4,0.4-0.9,0.6-1.4,0.6c-0.5,0-0.9-0.2-1.3-0.5h0c-0.4-0.4-0.6-0.9-0.6-1.4c0-0.5,0.2-0.9,0.5-1.3l5.4-5.9
            C6,11.2,5.8,11,5.7,10.8c0-0.1-0.1-0.2-0.1-0.3c0-0.4,0.2-0.7,0.4-0.9c0.1-0.1,0.1-0.1,0.2-0.2L3.4,5.7L1.7,4.6L0,1.8L2.1,0
            l2.5,2.1L5.4,4l2.8,3.5c0.1,0,0.1-0.1,0.2-0.1C8.7,7.3,9,7.2,9.3,7.1c0.2,0,0.4,0,0.5,0.1l0.1,0.1L10.3,7c0.1-0.1,0.2-0.2,0.2-0.3
            c0.1-0.1,0.2-0.3,0.2-0.5c0-0.2,0-0.3,0-0.5c0-0.3,0-0.8-0.1-1.6c0-0.1,0-0.1,0-0.2c0-0.8,0.3-1.6,0.9-2.2
            c0.4-0.4,0.9-0.7,1.5-0.9c0.4-0.1,0.8-0.2,1.1-0.2c0.5,0,1,0.1,1.5,0.3l1,0.4l-2.6,2.2l0.3,1.7l1.6,0.4l2.7-2.3L19,4.7
            c0,0.2,0,0.3,0,0.5c0,1.1-0.4,2.2-1.1,3c-0.4,0.4-0.8,0.7-1.3,0.8c-0.3,0.1-0.6,0.1-0.9,0.1c-0.2,0-0.4,0-0.7-0.1
            C14.8,9,14.6,9,14.3,9c-0.1,0-0.3,0-0.4,0c-0.1,0-0.2,0.1-0.2,0.2c-0.1,0.1-0.2,0.2-0.4,0.3c-0.1,0.1-0.3,0.2-0.3,0.3l-0.1,0.1
            l0,0L12.8,10l-0.5,0.5l-0.2,0.3c1.1,0.6,1.9,0.9,2.9,2l3.1,3.6c0.4,0.5,0.6,1.1,0.7,1.7c0,0.7-0.3,1.3-0.9,1.7L16.9,20.6z
             M10.1,10.8l1.1-1.2l-0.3-0.3l1.1-1.2l0.4,0.3c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0.3-0.3,0.5-0.4c0.2-0.1,0.4-0.3,0.6-0.3
            c0.3-0.1,0.5-0.1,0.8-0.1c0.3,0,0.6,0,0.9,0.1c0.2,0,0.3,0,0.5,0c0.2,0,0.3,0,0.5-0.1c0.3-0.1,0.5-0.2,0.7-0.5
            c0.2-0.2,0.4-0.5,0.5-0.9l-0.5,0.4c-0.2,0.2-0.5,0.3-0.7,0.3c-0.1,0-0.2,0-0.2,0l-1.9-0.4c-0.4-0.1-0.7-0.4-0.8-0.9l-0.4-2
            c0-0.1,0-0.1,0-0.2c0-0.3,0.1-0.6,0.4-0.8l0.7-0.6c-0.1,0-0.3,0.1-0.4,0.1c-0.3,0.1-0.6,0.3-0.9,0.5c-0.3,0.3-0.5,0.8-0.5,1.3
            c0,0,0,0.1,0,0.1c0,0.7,0.1,1.2,0.1,1.7c0,0.3,0,0.5-0.1,0.8c-0.1,0.4-0.2,0.7-0.5,1c-0.1,0.1-0.1,0.2-0.2,0.3l0.3,0.3l-1.1,1.1
            l-0.4-0.4L9.9,9.4L9.4,8.7C9.3,8.7,9.3,8.6,9.2,8.5L9.2,8.6L9.1,8.7l0,0L8.2,9.4l-0.9,0.8l-0.1,0.1c-0.1,0-0.1,0.1-0.1,0.1
            c0.1,0.2,0.3,0.3,0.5,0.5l0.6,0.5l-0.5,0.5l-0.5-0.5l-0.4,0.5l0.4-0.5l0.5,0.5l-4.8,5.2c0.3,0.1,0.5,0.3,0.7,0.5
            c0.1,0.1,0.1,0.2,0.2,0.3l5.6-6.2l0.5,0.9c0.1,0.2,0.2,0.3,0.2,0.5c0.4,1.3,0.5,1.9,1.3,2.8l3.1,3.6c0.2,0.3,0.6,0.4,0.9,0.5
            c0.2,0,0.5-0.1,0.6-0.3l0.9-0.8c0.2-0.2,0.4-0.4,0.4-0.7c0-0.2,0-0.4-0.1-0.6c0-0.1-0.1-0.1-0.1-0.2l0-0.1l-3.1-3.6
            c-0.8-0.9-1.3-1.1-2.5-1.7c-0.3-0.2-0.6-0.4-0.8-0.6L10.1,10.8L10.1,10.8z M2.5,18.4c-0.1-0.1-0.2-0.1-0.3-0.1
            c-0.1,0-0.2,0-0.2,0.1h0c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0,0.2,0.1,0.2C2.1,18.9,2.2,19,2.3,19c0.1,0,0.2,0,0.2-0.1
            c0.1-0.1,0.1-0.2,0.1-0.3C2.6,18.6,2.6,18.5,2.5,18.4L2.5,18.4z M3.5,3L2.1,1.8L1.8,2.1l1,1.6l1.5,0.9L3.5,3L3.5,3z"/>
          
            <linearGradient id="Shape_14_" gradientUnits="userSpaceOnUse" x1="-286.0983" y1="397.4821" x2="-286.2257" y2="397.1625" gradientTransform="matrix(33.2828 0 0 -35.7357 9533.3125 14206.2119)">
            <stop  offset="9.999999e-02" style="stop-color:#A1A3A6"/>
            <stop  offset="0.2" style="stop-color:#BCBEBF"/>
            <stop  offset="0.32" style="stop-color:#D2D2D3"/>
            <stop  offset="0.43" style="stop-color:#DFDFDF"/>
            <stop  offset="0.53" style="stop-color:#E3E3E3"/>
            <stop  offset="0.54" style="stop-color:#DCDCDC"/>
            <stop  offset="0.61" style="stop-color:#ADAEAF"/>
            <stop  offset="0.68" style="stop-color:#8B8D8E"/>
            <stop  offset="0.73" style="stop-color:#77787A"/>
            <stop  offset="0.77" style="stop-color:#6F7173"/>
          </linearGradient>
          <path id="Shape_2_" class="st2" d="M10.6,7.7L1.3,17.8c-0.5,0.5-0.4,1.3,0.1,1.8l0,0c0.5,0.5,1.3,0.4,1.8,0l9.2-10.1L10.6,7.7z"/>
          
            <linearGradient id="Shape_15_" gradientUnits="userSpaceOnUse" x1="-282.9731" y1="391.5119" x2="-283.1586" y2="391.0312" gradientTransform="matrix(22.8618 0 0 -23.7578 6484.6284 9304.9502)">
            <stop  offset="9.999999e-02" style="stop-color:#6D6E71"/>
            <stop  offset="0.15" style="stop-color:#7E7F82"/>
            <stop  offset="0.27" style="stop-color:#AAAAAB"/>
            <stop  offset="0.37" style="stop-color:#C9C9CA"/>
            <stop  offset="0.46" style="stop-color:#DCDCDC"/>
            <stop  offset="0.53" style="stop-color:#E3E3E3"/>
            <stop  offset="0.61" style="stop-color:#CBCCCD"/>
            <stop  offset="0.7" style="stop-color:#B7B8BB"/>
            <stop  offset="0.76" style="stop-color:#AFB1B4"/>
          </linearGradient>
          <path id="Shape_3_" class="st3" d="M11.5,6.4c0.1-0.6,0-1.1,0-2.3c0-0.7,0.2-1.4,0.7-1.9c0.3-0.3,0.7-0.6,1.2-0.7
            c0.7-0.2,1.5-0.2,2.2,0.1l-1.8,1.5c-0.1,0.1-0.2,0.2-0.1,0.4l0.4,2c0,0.2,0.2,0.3,0.3,0.3l1.9,0.4c0.1,0,0.3,0,0.4-0.1l1.8-1.5
            c0.1,1.1-0.2,2.2-0.9,3c-0.3,0.3-0.6,0.5-1,0.6c-0.4,0.1-0.8,0.1-1.3,0.1c-0.4-0.1-0.9-0.1-1.3,0c-0.2,0.1-0.3,0.1-0.5,0.3
            C13.2,8.8,13,8.9,12.9,9c-0.3,0.2-0.5,0.5-0.5,0.5l-0.1,0.1l-1.8-1.7c0.2-0.3,0.4-0.5,0.6-0.7C11.3,6.9,11.4,6.7,11.5,6.4z"/>
          
            <linearGradient id="Shape_16_" gradientUnits="userSpaceOnUse" x1="-284.5308" y1="395.1345" x2="-284.8044" y2="394.841" gradientTransform="matrix(27.7169 0 0 -29.7427 7895.5386 11763.3203)">
            <stop  offset="0" style="stop-color:#BCBEC0"/>
            <stop  offset="0.13" style="stop-color:#B3B5B7"/>
            <stop  offset="0.35" style="stop-color:#9B9C9E"/>
            <stop  offset="0.62" style="stop-color:#747476"/>
            <stop  offset="0.94" style="stop-color:#3F3D3E"/>
            <stop  offset="1" style="stop-color:#333132"/>
          </linearGradient>
          <path id="Shape_4_" class="st4" d="M12.1,9.1c0.1-0.2,0.2-0.4,0.2-0.6c0-0.2-0.1-0.4-0.3-0.5c-0.3-0.3-0.8-0.3-1.1,0L3,16.6
            c-0.3,0.3-0.3,0.8,0,1.1c0.3,0.3,0.8,0.3,1.1,0L12.1,9.1z"/>
          
            <linearGradient id="Shape_17_" gradientUnits="userSpaceOnUse" x1="-286.8737" y1="397.6847" x2="-286.5325" y2="397.3862" gradientTransform="matrix(33.9109 0 0 -37.0872 9734.3926 14757.627)">
            <stop  offset="0" style="stop-color:#8DC63F"/>
            <stop  offset="0.28" style="stop-color:#69AF3F"/>
            <stop  offset="0.57" style="stop-color:#4C9C3E"/>
            <stop  offset="0.82" style="stop-color:#3A903E"/>
            <stop  offset="1" style="stop-color:#348C3E"/>
          </linearGradient>
          <path id="Shape_5_" class="st5" d="M6.9,9.7c0,0-0.6,0.5-0.5,0.8C6.6,11,7,11.4,7.5,11.6C8.1,11.9,9,12,9.4,13.2s0.6,2,1.5,3
            l3.1,3.6c0,0,1.2,1.4,2.5,0.3l0.9-0.8c1.3-1.1,0.1-2.5,0.1-2.5l-3.1-3.6c-0.9-1-1.6-1.3-2.7-1.9s-1.1-1.5-1.3-2.1
            c-0.2-0.5-0.5-1-0.9-1.3C9.1,7.7,8.6,8.2,8.6,8.2L6.9,9.7z"/>
          
            <linearGradient id="Shape_18_" gradientUnits="userSpaceOnUse" x1="-278.8675" y1="388.6945" x2="-278.9373" y2="388.6414" gradientTransform="matrix(17.0314 0 0 -19.1489 4763.5874 7458.2871)">
            <stop  offset="9.999999e-02" style="stop-color:#F1EFEF"/>
            <stop  offset="0.53" style="stop-color:#FFFFFF"/>
            <stop  offset="0.72" style="stop-color:#E7E5E5"/>
          </linearGradient>
          <path id="Shape_6_" class="st6" d="M10.8,13.7c-0.1-0.2-0.2-0.4-0.2-0.6c0-0.2,0.1-0.4,0.3-0.5c0.3-0.3,0.8-0.2,1.1,0.1l4.3,5
            c0.1,0.2,0.2,0.4,0.2,0.6c0,0.2-0.1,0.4-0.3,0.5C16,18.9,15.8,19,15.6,19c-0.2,0-0.4-0.1-0.5-0.3L10.8,13.7z"/>
          
            <linearGradient id="Shape_19_" gradientUnits="userSpaceOnUse" x1="-215.7088" y1="319.1893" x2="-215.8596" y2="319.1893" gradientTransform="matrix(3.6752 0 0 -4.1352 810.0803 1330.6279)">
            <stop  offset="9.999999e-02" style="stop-color:#F1EFEF"/>
            <stop  offset="0.53" style="stop-color:#FFFFFF"/>
            <stop  offset="0.72" style="stop-color:#E7E5E5"/>
          </linearGradient>
          <path id="Shape_7_" class="st7" d="M7,10.3c-0.1-0.1-0.1-0.2,0-0.2c0.1-0.1,0.2-0.1,0.2,0l0.9,1.1c0.1,0.1,0.1,0.2,0,0.2
            c-0.1,0.1-0.2,0.1-0.2,0L7,10.3z"/>
          
            <linearGradient id="Shape_20_" gradientUnits="userSpaceOnUse" x1="-215.147" y1="319.9657" x2="-215.2978" y2="319.9657" gradientTransform="matrix(3.6719 0 0 -4.1836 810.9327 1348.7856)">
            <stop  offset="9.999999e-02" style="stop-color:#F1EFEF"/>
            <stop  offset="0.53" style="stop-color:#FFFFFF"/>
            <stop  offset="0.72" style="stop-color:#E7E5E5"/>
          </linearGradient>
          <path id="Shape_8_" class="st8" d="M7.6,9.7c-0.1-0.1-0.1-0.2,0-0.2c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0.1l0.9,1.1c0,0,0,0.1,0,0.1
            c0,0,0,0.1-0.1,0.1c-0.1,0.1-0.2,0.1-0.2,0L7.6,9.7z"/>
          
            <linearGradient id="Shape_21_" gradientUnits="userSpaceOnUse" x1="-214.7641" y1="318.644" x2="-214.9149" y2="318.644" gradientTransform="matrix(3.6774 0 0 -4.1328 814.3425 1326.5371)">
            <stop  offset="9.999999e-02" style="stop-color:#F1EFEF"/>
            <stop  offset="0.53" style="stop-color:#FFFFFF"/>
            <stop  offset="0.72" style="stop-color:#E7E5E5"/>
          </linearGradient>
          <path id="Shape_9_" class="st9" d="M8.2,9.2c0,0,0-0.1,0-0.1c0,0,0-0.1,0.1-0.1c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0.1l0.9,1.1
            c0.1,0.1,0.1,0.2,0,0.2c-0.1,0.1-0.2,0.1-0.2,0L8.2,9.2z"/>
          
            <linearGradient id="Shape_22_" gradientUnits="userSpaceOnUse" x1="-214.311" y1="318.3458" x2="-214.4618" y2="318.3458" gradientTransform="matrix(3.6794 0 0 -4.1304 816.7512 1324.0133)">
            <stop  offset="9.999999e-02" style="stop-color:#F1EFEF"/>
            <stop  offset="0.53" style="stop-color:#FFFFFF"/>
            <stop  offset="0.72" style="stop-color:#E7E5E5"/>
          </linearGradient>
          <path id="Shape_10_" class="st10" d="M8.9,8.7c0,0,0-0.1,0-0.1c0,0,0-0.1,0.1-0.1c0.1-0.1,0.2-0.1,0.2,0L10,9.5
            c0.1,0.1,0.1,0.2,0,0.2c-0.1,0.1-0.2,0.1-0.2,0L8.9,8.7z"/>
          
            <linearGradient id="Shape_23_" gradientUnits="userSpaceOnUse" x1="-281.2333" y1="391.8827" x2="-281.3333" y2="392.3642" gradientTransform="matrix(21.28 0 0 -24.66 5989.5713 9671.2754)">
            <stop  offset="0" style="stop-color:#DCDDDE"/>
            <stop  offset="0" style="stop-color:#DBDCDD"/>
            <stop  offset="0.16" style="stop-color:#ACADAE"/>
            <stop  offset="0.32" style="stop-color:#868587"/>
            <stop  offset="0.48" style="stop-color:#686769"/>
            <stop  offset="0.63" style="stop-color:#525153"/>
            <stop  offset="0.78" style="stop-color:#454446"/>
            <stop  offset="0.91" style="stop-color:#414042"/>
          </linearGradient>
          <polygon id="Shape_11_" class="st11" points="7.2,9.3 3.9,5.2 2.2,4.1 0.9,1.9 2.1,0.9 4,2.5 4.8,4.4 8.2,8.5 		"/>
          <path id="Shape_12_" class="st1" d="M9.6,13.8c0,0-0.2-1.7-1.8-2.1c-0.1,0-0.3-0.1-0.4-0.2c-0.3-0.2-0.6-0.4-0.9-0.7L6,11.2
            c0.4,0.6,1,1,1.6,1.1c0.5,0.1,0.8,0.4,1,0.8c0.1,0.2,0.2,0.4,0.2,0.7L9.6,13.8z"/>
          <path id="Shape_13_" class="st1" d="M11.7,10.5C11.7,10.5,11.7,10.5,11.7,10.5c-0.1-0.1-0.2-0.1-0.2-0.2c-0.2-0.3-0.4-0.7-0.4-1.1
            c0-0.1-0.1-0.7-0.8-1.5L9.7,8.1C10,8.4,10.2,8.7,10.3,9c0,0.1,0.1,0.2,0.1,0.3c0.2,1.4,1,1.8,1,1.9L11.7,10.5L11.7,10.5z"/>
        </g>
      </g>
      </svg>
      `,
        oneOwner: `<svg width="19px" viewBox="0 0 19.4 19.39"><defs><style>.a{stroke:#1f76bb;stroke-width:0.27px;fill:url(#a);}.b,.c,.h{fill:#fff;}.b{opacity:0.4;}.b,.c{isolation:isolate;}.c{opacity:0.7;}.d{opacity:0.47;}.e{fill:url(#b);}.f{opacity:0.2;}.g{fill:#010101;}</style><radialGradient id="a" cx="-290.87" cy="400.41" r="0.15" gradientTransform="matrix(63.79, 0, 0, -63.79, 18564.38, 25551.97)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1f76bb"/><stop offset="0.44" stop-color="#1e75b9"/><stop offset="0.6" stop-color="#1c71b2"/><stop offset="0.72" stop-color="#196aa7"/><stop offset="0.81" stop-color="#146096"/><stop offset="0.89" stop-color="#0e5380"/><stop offset="0.96" stop-color="#064465"/><stop offset="1" stop-color="#003851"/></radialGradient><linearGradient id="b" x1="-289.4" y1="394.71" x2="-289.25" y2="394.37" gradientTransform="matrix(46.86, 0, 0, -32.09, 13567.47, 12670.26)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff"/><stop offset="0.27" stop-color="#aeaeae"/><stop offset="0.53" stop-color="#636363"/><stop offset="0.75" stop-color="#2e2e2e"/><stop offset="0.91" stop-color="#0c0c0c"/><stop offset="1" stop-color="#fff"/></linearGradient></defs><title>ico_1owner2</title><polygon class="a" points="11.59 0.2 9.7 1.62 7.81 0.2 6.61 2.24 4.32 1.64 3.99 3.99 1.64 4.32 2.24 6.61 0.2 7.81 1.62 9.7 0.2 11.59 2.24 12.79 1.64 15.08 3.99 15.41 4.32 17.75 6.61 17.16 7.81 19.2 9.7 17.77 11.59 19.2 12.79 17.16 15.08 17.75 15.41 15.41 17.75 15.08 17.16 12.79 19.2 11.59 17.77 9.7 19.2 7.81 17.16 6.61 17.75 4.32 15.41 3.99 15.08 1.64 12.79 2.24 11.59 0.2"/><path class="b" d="M9.55,16.48a8.45,8.45,0,0,1-6.08-2.77A7.35,7.35,0,0,0,16,13.17,8,8,0,0,1,9.55,16.48Z"/><path class="c" d="M9.72,2.9a7.49,7.49,0,0,1,5.93,2.95,6.91,6.91,0,0,0-11.87,0A7.53,7.53,0,0,1,9.72,2.9Z"/><g class="d"><path class="e" d="M9.6,2.46A7.19,7.19,0,0,0,2.72,9.54,6.79,6.79,0,0,0,3.19,12a11.64,11.64,0,0,0,6.54-1.77c1.86-1.08,4.55-1.93,6.94-1.19A7.2,7.2,0,0,0,9.6,2.46Z"/></g><g class="f"><path class="g" d="M7.31,14.37V12.58H8.46V7.07H7.11V5.49a2.36,2.36,0,0,0,1.73-.65h2.28v7.74h1.19v1.79Z"/></g><path class="h" d="M7.17,14.21V12.43H8.31V6.92H7V5.34a2.32,2.32,0,0,0,1.73-.65H11v7.75h1.19v1.78Z"/></svg>`
      };  
      window.customElements.define('vhr-icon',
          class VHRIcon extends HTMLElement {
    
            static get observedAttributes() { return ['icon']; }

            constructor() {
              super();
              this._root = null;
              this._state = {
                icon: VHRIcons.oneOwner
              };
            }

            connectedCallback() {
              if (this._root === null) {
                if (!!this.attachShadow) {
                  this._root = this.attachShadow({ mode: "open" });
                } else {
                  this._root = this;
                }
              }
              renderVHRIcon.bind(this)();
            }

            attributeChangedCallback(name, oldValue, newValue) {
              if (newValue === oldValue) { return };
              if (name === 'icon') { this._state.icon = VHRIcons[newValue]; }
              renderVHRIcon.bind(this)();
            }

            get icon() { return this._state.icon; }
          });
          function renderVHRIcon() {
            if (!!this._root) {
              this._root.innerHTML =  `${this._state.icon}`;
            }
          }
        }
      }
    })(document, window);