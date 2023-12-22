"use strict";(this.webpackChunkInfragisticsBlazor=this.webpackChunkInfragisticsBlazor||[]).push([[207],{45275:(e,t,a)=>{a.r(t),a.d(t,{DateRangeType:()=>fe,IgcAccordionComponent:()=>ee,IgcAvatarComponent:()=>f,IgcBadgeComponent:()=>le,IgcButtonComponent:()=>ve,IgcCalendarComponent:()=>at,IgcCardActionsComponent:()=>dt,IgcCardComponent:()=>Dt,IgcCardContentComponent:()=>mt,IgcCardHeaderComponent:()=>ft,IgcCardMediaComponent:()=>kt,IgcCheckboxComponent:()=>Rt,IgcChipComponent:()=>aa,IgcCircularGradientComponent:()=>Kt,IgcCircularProgressComponent:()=>qt,IgcComboComponent:()=>qa,IgcDateTimeInputComponent:()=>li,IgcDialogComponent:()=>mi,IgcDropdownComponent:()=>Oi,IgcDropdownGroupComponent:()=>zi,IgcDropdownHeaderComponent:()=>Si,IgcDropdownItemComponent:()=>Ti,IgcExpansionPanelComponent:()=>Z,IgcFormComponent:()=>ar,IgcIconButtonComponent:()=>er,IgcIconComponent:()=>U,IgcInputComponent:()=>Ea,IgcLinearProgressComponent:()=>gr,IgcListComponent:()=>zr,IgcListHeaderComponent:()=>pr,IgcListItemComponent:()=>wr,IgcMaskInputComponent:()=>Dr,IgcNavDrawerComponent:()=>Br,IgcNavDrawerHeaderItemComponent:()=>Mr,IgcNavDrawerItemComponent:()=>Fr,IgcNavbarComponent:()=>Yr,IgcRadioComponent:()=>al,IgcRadioGroupComponent:()=>ol,IgcRangeSliderComponent:()=>Tl,IgcRatingComponent:()=>ul,IgcRatingSymbolComponent:()=>pl,IgcRippleComponent:()=>fl,IgcSelectComponent:()=>Hi,IgcSelectGroupComponent:()=>Vi,IgcSelectHeaderComponent:()=>Li,IgcSelectItemComponent:()=>Fi,IgcSliderComponent:()=>_l,IgcSliderLabelComponent:()=>Sl,IgcSnackbarComponent:()=>Rl,IgcStepComponent:()=>Kn,IgcStepperComponent:()=>Zn,IgcSwitchComponent:()=>kn,IgcTabComponent:()=>Jl,IgcTabPanelComponent:()=>tn,IgcTabsComponent:()=>nn,IgcToastComponent:()=>bn,IgcTreeComponent:()=>Rn,IgcTreeItemComponent:()=>An,configureTheme:()=>h,defineAllComponents:()=>es,defineComponents:()=>k,registerIcon:()=>R,registerIconFromText:()=>F});var i=a(40182),r=a(85013),l=a(68942),n=a(13113);const s="igc-change-theme";let o;function g(e){return["bootstrap","material","indigo","fluent"].includes(e)}const d=()=>{if(!o){const[e,t]=Object.entries(((e,t=document.body,a="")=>{const i=window.getComputedStyle(t,a),r={};return e.forEach((e=>{const t=i.getPropertyValue(e);t&&(r[(e=>e.replace("--","").replace(/-./g,(e=>e.toUpperCase()[1])))(e)]=t.trim())})),r})(((e=document.styleSheets)=>{const t=[];return Array.from(e).forEach((e=>{try{Array.from(e.cssRules).forEach((e=>{e&&e.style&&Array.from(e.style).forEach((e=>{e.startsWith("--")&&-1==t.indexOf(e)&&t.push(e)}))}))}catch(e){}})),t})(),document.documentElement)).find((([e])=>"igTheme"===e))||[];o=t&&g(t)?t:"bootstrap"}return o},h=e=>{var t;g(e)&&(o=e),t={theme:o},window.dispatchEvent(new CustomEvent(s,{detail:t}))};class c{constructor(e,t){this.__themingEventHandler=()=>{this.adoptStyles(),this.host.requestUpdate()},this.host=e,this.themes=t}hostConnected(){this.adoptStyles(),window.addEventListener(s,this.__themingEventHandler)}hostDisconnected(){window.removeEventListener(s,this.__themingEventHandler)}adoptStyles(){this.theme=d();const e=this.host.constructor,t=window.ShadowRoot&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;let a=i.iv``;const[r]=Object.entries(this.themes).filter((([e])=>e===this.theme));if(r){const[e,t]=r;a=t}t||[...this.host.renderRoot.querySelectorAll("style")].slice(1).forEach((e=>e.remove())),(0,i.ec)(this.host.shadowRoot,[...e.elementStyles,a])}}function b(e){return t=>(t.addInitializer((t=>{const a=((e,t)=>{const a=new c(e,t);return e.addController(a),a})(t,e);"themeAdopted"in t&&t.themeAdopted(a)})),t)}function m(e,t){return(a,i)=>{const{willUpdate:r}=a;t=Object.assign({waitUntilFirstUpdate:!1},t),a.willUpdate=function(a){if(r.call(this,a),a.has(e)){const r=a.get(e),l=this[e];r!==l&&((null==t?void 0:t.waitUntilFirstUpdate)&&!this.hasUpdated||this[i].call(this,r,l))}}}}const p=e=>{class t extends e{constructor(){super(...arguments),this.size="large"}}return function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);l>3&&n&&Object.defineProperty(t,a,n)}([(0,r.Cb)({reflect:!0})],t.prototype,"size",void 0),t},v=i.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  --size: max(var(--is-large, 1) * max(5.5rem, -1 * 5.5rem), var(--is-medium, 1) * max(4rem, -1 * 4rem), var(--is-small, 1) * max(2.5rem, -1 * 2.5rem));
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
}

[part=base] {
  position: relative;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
  background: hsla(var(--ig-gray-400), var(--ig-gray-a));
  border-radius: 0;
  outline-style: none;
  -ms-flex-negative: 0;
      flex-shrink: 0;
  overflow: hidden;
  font-family: var(--ig-font-family);
  width: var(--size);
  height: var(--size);
}
[part=base] [part=initials] {
  font-size: calc(var(--size) / 2);
  line-height: calc(var(--size) / 2);
}

img {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background-color: inherit;
  -o-object-fit: cover;
     object-fit: cover;
}

[part=initials] {
  text-transform: uppercase;
}

:host([size=large]) {
  --component-size: var(--ig-size, var(--ig-size-large));
}

:host([size=medium]) {
  --component-size: var(--ig-size, var(--ig-size-medium));
}

:host([size=small]) {
  --component-size: var(--ig-size, var(--ig-size-small));
}

:host([shape=rounded]) [part=base] {
  border-radius: 0.5rem;
}

:host([shape=circle]) [part=base] {
  border-radius: calc(var(--size) / 2);
}`,y=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host([shape=square]) [part=base],
:host([shape=rounded]) [part=base] {
  border-radius: 0.25rem;
}`;var u=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n};let x=class extends(p(i.oi)){get classes(){const{size:e,shape:t}=this;return{circle:"circle"===t,rounded:"rounded"===t,square:"square"===t,small:"small"===e,medium:"medium"===e,large:"large"===e}}constructor(){super(),this.hasError=!1,this.shape="square",this.size="small"}handleErrorState(){this.hasError=!1}render(){return i.dy`
      <div
        part="base"
        role="img"
        aria-label="avatar"
        aria-roledescription=${this.size+" "+this.shape}
        class=${(0,l.$)(this.classes)}
      >
        ${this.initials?i.dy`<span part="initials">${this.initials}</span>`:i.dy` <slot></slot> `}
        ${this.src&&!this.hasError?i.dy`
              <img
                part="image"
                alt=${(0,n.o)(this.alt)}
                src=${(0,n.o)(this.src)}
                @error="${()=>this.hasError=!0}"
              />
            `:""}
      </div>
    `}};x.tagName="igc-avatar",x.styles=v,u([(0,r.Cb)()],x.prototype,"src",void 0),u([(0,r.SB)()],x.prototype,"hasError",void 0),u([(0,r.Cb)()],x.prototype,"alt",void 0),u([(0,r.Cb)()],x.prototype,"initials",void 0),u([(0,r.Cb)({reflect:!0})],x.prototype,"shape",void 0),u([m("src")],x.prototype,"handleErrorState",null),x=u([b({bootstrap:y})],x);const f=x,w=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host ::slotted(igc-expansion-panel) {
  --lines-clamped: 4;
  -webkit-transition: margin 350ms ease-out;
  -o-transition: margin 350ms ease-out;
  transition: margin 350ms ease-out;
}
:host ::slotted(igc-expansion-panel[open]) {
  margin: 0.5rem 0;
}
:host ::slotted(igc-expansion-panel:first-of-type) {
  margin-top: 0;
}
:host ::slotted(igc-expansion-panel:last-of-type) {
  margin-bottom: 0;
}
@media (prefers-reduced-motion) {
  :host ::slotted(igc-expansion-panel) {
    -webkit-transition: none;
    -o-transition: none;
    transition: none;
  }
}`,k=(...e)=>{for(const t of e){const e=t.tagName;e&&!window.customElements.get(e)&&window.customElements.define(e,t)}};function z(e){return class extends e{addEventListener(e,t,a){super.addEventListener(e,t,a)}removeEventListener(e,t,a){super.removeEventListener(e,t,a)}emitEvent(e,t){return this.dispatchEvent(new CustomEvent(e,Object.assign({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t)))}}}const C=i.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  --lines-clamped: 1;
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
  background: hsla(var(--ig-surface-500), var(--ig-surface-a));
  width: auto;
  overflow: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}

[part=header] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  cursor: pointer;
  padding-inline: max(var(--is-large, 1) * max(24px, -1 * 24px) * var(--ig-spacing-inline-large, var(--ig-spacing-inline, --ig-spacing)), var(--is-medium, 1) * max(24px, -1 * 24px) * var(--ig-spacing-inline-medium, var(--ig-spacing-inline, --ig-spacing)), var(--is-small, 1) * max(24px, -1 * 24px) * var(--ig-spacing-inline-small, var(--ig-spacing-inline, --ig-spacing)));
  padding-block: max(var(--is-large, 1) * max(16px, -1 * 16px) * var(--ig-spacing-block-large, var(--ig-spacing-block, --ig-spacing)), var(--is-medium, 1) * max(16px, -1 * 16px) * var(--ig-spacing-block-medium, var(--ig-spacing-block, --ig-spacing)), var(--is-small, 1) * max(16px, -1 * 16px) * var(--ig-spacing-block-small, var(--ig-spacing-block, --ig-spacing)));
}
[part=header]:focus, [part=header]:active {
  outline: transparent;
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
}
[part=header] *:not([part~=indicator]) {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-flex: 1;
      -ms-flex: 1 0 0%;
          flex: 1 0 0%;
  overflow: hidden;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}

[part=title]::slotted(*) {
  font-family: var(--ig-h5-font-family, var(--ig-font-family));
  font-size: var(--ig-h5-font-size);
  font-weight: var(--ig-h5-font-weight);
  font-style: var(--ig-h5-font-style);
  line-height: var(--ig-h5-line-height);
  letter-spacing: var(--ig-h5-letter-spacing);
  text-transform: var(--ig-h5-text-transform);
  margin-top: var(--ig-h5-margin-top);
  margin-bottom: var(--ig-h5-margin-bottom);
  display: -webkit-inline-box;
  -webkit-line-clamp: var(--lines-clamped);
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0;
}

[part=subtitle] {
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}
[part=subtitle]::slotted(*) {
  font-family: var(--ig-subtitle-2-font-family, var(--ig-font-family));
  font-size: var(--ig-subtitle-2-font-size);
  font-weight: var(--ig-subtitle-2-font-weight);
  font-style: var(--ig-subtitle-2-font-style);
  line-height: var(--ig-subtitle-2-line-height);
  letter-spacing: var(--ig-subtitle-2-letter-spacing);
  text-transform: var(--ig-subtitle-2-text-transform);
  margin-top: var(--ig-subtitle-2-margin-top);
  margin-bottom: var(--ig-subtitle-2-margin-bottom);
  white-space: nowrap;
  -o-text-overflow: ellipsis;
     text-overflow: ellipsis;
  overflow: hidden;
}

[part=content] ::slotted(*) {
  font-family: var(--ig-body-2-font-family, var(--ig-font-family));
  font-size: var(--ig-body-2-font-size);
  font-weight: var(--ig-body-2-font-weight);
  font-style: var(--ig-body-2-font-style);
  line-height: var(--ig-body-2-line-height);
  letter-spacing: var(--ig-body-2-letter-spacing);
  text-transform: var(--ig-body-2-text-transform);
  margin-top: var(--ig-body-2-margin-top);
  margin-bottom: var(--ig-body-2-margin-bottom);
}

[part~=content] {
  overflow: hidden;
}
[part~=content] > slot {
  display: block;
  padding-inline: max(var(--is-large, 1) * max(24px, -1 * 24px) * var(--ig-spacing-inline-large, var(--ig-spacing-inline, --ig-spacing)), var(--is-medium, 1) * max(24px, -1 * 24px) * var(--ig-spacing-inline-medium, var(--ig-spacing-inline, --ig-spacing)), var(--is-small, 1) * max(24px, -1 * 24px) * var(--ig-spacing-inline-small, var(--ig-spacing-inline, --ig-spacing)));
  padding-block: max(var(--is-large, 1) * max(16px, -1 * 16px) * var(--ig-spacing-block-large, var(--ig-spacing-block, --ig-spacing)), var(--is-medium, 1) * max(16px, -1 * 16px) * var(--ig-spacing-block-medium, var(--ig-spacing-block, --ig-spacing)), var(--is-small, 1) * max(16px, -1 * 16px) * var(--ig-spacing-block-small, var(--ig-spacing-block, --ig-spacing)));
}

:host(:not([open])) [part~=content] {
  height: 0;
}

:host([open]) [part~=content] {
  height: auto;
}

[part~=indicator] {
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
}

[part~=indicator] igc-icon {
  --size: 1.5rem;
}

:host([indicator-position=start]) [part~=indicator] {
  -webkit-margin-end: max(var(--is-large, 1) * max(16px, -1 * 16px) * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * max(16px, -1 * 16px) * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * max(16px, -1 * 16px) * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
          margin-inline-end: max(var(--is-large, 1) * max(16px, -1 * 16px) * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * max(16px, -1 * 16px) * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * max(16px, -1 * 16px) * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
}

:host([indicator-position=end]) [part~=indicator] {
  -webkit-box-ordinal-group: 3;
      -ms-flex-order: 2;
          order: 2;
  -webkit-margin-start: max(var(--is-large, 1) * max(16px, -1 * 16px) * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * max(16px, -1 * 16px) * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * max(16px, -1 * 16px) * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
          margin-inline-start: max(var(--is-large, 1) * max(16px, -1 * 16px) * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * max(16px, -1 * 16px) * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * max(16px, -1 * 16px) * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
}

:host([indicator-position=none]) [part~=indicator] {
  display: none;
}

:host([disabled]) {
  pointer-events: none;
}
:host([disabled]) [part=title],
:host([disabled]) [part=subtitle],
:host([disabled]) [part~=indicator] {
  color: var(--disabled-color, hsla(var(--ig-gray-500), var(--ig-gray-a)));
}`,D=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
[part=title],
[part~=indicator] {
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
}

[part=subtitle] {
  color: hsla(var(--ig-gray-600), var(--ig-gray-a));
}
[part=subtitle]::slotted(*) {
  font-family: var(--ig-body-2-font-family, var(--ig-font-family));
  font-size: var(--ig-body-2-font-size);
  font-weight: var(--ig-body-2-font-weight);
  font-style: var(--ig-body-2-font-style);
  line-height: var(--ig-body-2-line-height);
  letter-spacing: var(--ig-body-2-letter-spacing);
  text-transform: var(--ig-body-2-text-transform);
  margin-top: var(--ig-body-2-margin-top);
  margin-bottom: var(--ig-body-2-margin-bottom);
}

:host([open]) [part~=content] {
  font-family: var(--ig-body-1-font-family, var(--ig-font-family));
  font-size: var(--ig-body-1-font-size);
  font-weight: var(--ig-body-1-font-weight);
  font-style: var(--ig-body-1-font-style);
  line-height: var(--ig-body-1-line-height);
  letter-spacing: var(--ig-body-1-letter-spacing);
  text-transform: var(--ig-body-1-text-transform);
  margin-top: var(--ig-body-1-margin-top);
  margin-bottom: var(--ig-body-1-margin-bottom);
}`,S=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
[part=title]::slotted(*) {
  font-family: var(--ig-subtitle-1-font-family, var(--ig-font-family));
  font-size: var(--ig-subtitle-1-font-size);
  font-weight: var(--ig-subtitle-1-font-weight);
  font-style: var(--ig-subtitle-1-font-style);
  line-height: var(--ig-subtitle-1-line-height);
  letter-spacing: var(--ig-subtitle-1-letter-spacing);
  text-transform: var(--ig-subtitle-1-text-transform);
  margin-top: var(--ig-subtitle-1-margin-top);
  margin-bottom: var(--ig-subtitle-1-margin-bottom);
}

[part=subtitle]::slotted(*) {
  font-family: var(--ig-body-2-font-family, var(--ig-font-family));
  font-size: var(--ig-body-2-font-size);
  font-weight: var(--ig-body-2-font-weight);
  font-style: var(--ig-body-2-font-style);
  line-height: var(--ig-body-2-line-height);
  letter-spacing: var(--ig-body-2-letter-spacing);
  text-transform: var(--ig-body-2-text-transform);
  margin-top: var(--ig-body-2-margin-top);
  margin-bottom: var(--ig-body-2-margin-bottom);
}

:host([open]) [part~=content] {
  font-family: var(--ig-caption-font-family, var(--ig-font-family));
  font-size: var(--ig-caption-font-size);
  font-weight: var(--ig-caption-font-weight);
  font-style: var(--ig-caption-font-style);
  line-height: var(--ig-caption-line-height);
  letter-spacing: var(--ig-caption-letter-spacing);
  text-transform: var(--ig-caption-text-transform);
  margin-top: var(--ig-caption-margin-top);
  margin-bottom: var(--ig-caption-margin-bottom);
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}

:host([disabled]) [part~=indicator],
:host([disabled]) [part=title],
:host([disabled]) [part=subtitle] {
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}`,I=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
[part~=indicator] {
  color: hsla(var(--ig-gray-600), var(--ig-gray-a));
}

[part=subtitle] {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}

:host([open]) [part~=content] {
  font-family: var(--ig-body-1-font-family, var(--ig-font-family));
  font-size: var(--ig-body-1-font-size);
  font-weight: var(--ig-body-1-font-weight);
  font-style: var(--ig-body-1-font-style);
  line-height: var(--ig-body-1-line-height);
  letter-spacing: var(--ig-body-1-letter-spacing);
  text-transform: var(--ig-body-1-text-transform);
  margin-top: var(--ig-body-1-margin-top);
  margin-bottom: var(--ig-body-1-margin-bottom);
}

:host([disabled]) [part~=indicator],
:host([disabled]) [part=title],
:host([disabled]) [part=subtitle] {
  color: hsla(var(--ig-gray-300), var(--ig-gray-a));
}`,$=e=>Object.keys(e).filter((t=>e[t])).join(" "),P=(e,t)=>e/t*100,T=(e,t,a)=>Math.max(t,Math.min(e,a));function E(e,t){const{top:a,left:i,bottom:r,right:l}=e.getBoundingClientRect(),{top:n,left:s,bottom:o,right:g}=t.getBoundingClientRect();return{top:Math.round(a-n),left:Math.round(i-s),right:Math.round(l-g),bottom:Math.round(r-o)}}function M(){let e=0;return function(){return e++,e}}function O(e){return"ltr"===getComputedStyle(e).getPropertyValue("direction")}var A=a(77661);const V=i.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
svg {
  height: var(--size);
  width: var(--size);
}

:host {
  --size: max(var(--is-large, 1) * max(1.5rem, -1 * 1.5rem), var(--is-medium, 1) * max(1.25rem, -1 * 1.25rem), var(--is-small, 1) * max(1rem, -1 * 1rem));
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  width: var(--size);
  height: var(--size);
  fill: currentcolor;
}

:host([size=small]) {
  --component-size: var(--ig-size, var(--ig-size-small));
}

:host([size=medium]) {
  --component-size: var(--ig-size, var(--ig-size-medium));
}

:host([size=large]) {
  --component-size: var(--ig-size, var(--ig-size-large));
}

:host([mirrored]) {
  -webkit-transform: scaleX(-1);
      -ms-transform: scaleX(-1);
          transform: scaleX(-1);
}`;class L{static instance(){return L._instance||(L._instance=new L),L._instance}constructor(){this.iconsRegistry=new Map,this.callbacks=new Set,this.iconsRegistry.set("internal",_)}subscribe(e){this.callbacks.add(e)}unsubscribe(e){this.callbacks.delete(e)}registerIcon(e,t,a="default"){const i=document.createElement("div");i.innerHTML=t;const r=i.querySelector("svg");if(!r)throw new Error("SVG element not found.");{r.setAttribute("fit",""),r.setAttribute("preserveAspectRatio","xMidYMid meet");const t=r.outerHTML;this.getOrCreateIconCollection(a)[e]=t,this.callbacks.forEach((t=>t(e,a)))}}getIcon(e,t="default"){if(this.iconsRegistry.has(t))return this.iconsRegistry.get(t)[e]}getOrCreateIconCollection(e){let t;return this.iconsRegistry.has(e)?t=this.iconsRegistry.get(e):(t={},this.iconsRegistry.set(e,t)),t}}const R=async(e,t,a="default")=>{const i=await fetch(t);if(!i.ok)throw new Error(`Icon request failed. Status: ${i.status}.`);{const t=await i.text();L.instance().registerIcon(e,t,a)}},F=(e,t,a="default")=>{L.instance().registerIcon(e,t,a)},_={navigate_before:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.61 7.41L14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z"/></svg>',navigate_next:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z"/></svg>',keyboard_arrow_up:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/></svg>',keyboard_arrow_down:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>',keyboard_arrow_right:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>',chip_cancel:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/></svg>',chip_select:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>',star_border:'<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>',case_sensitive:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path d="M21.2 16.5c0-.2-.1-.5-.1-.7v-4.4c0-.4-.1-.8-.3-1.2-.2-.3-.5-.6-.8-.7-.3-.2-.7-.3-1.1-.3-.4-.1-.8-.1-1.2-.1-.5 0-.9 0-1.4.1-.4.1-.8.3-1.2.5-.3.2-.6.5-.8.9s-.3.9-.3 1.3h1.4c0-.5.2-1 .7-1.3.5-.2 1-.4 1.5-.3.2 0 .5 0 .7.1.2 0 .4.1.6.2.2.1.3.2.5.4.1.2.2.5.2.7s-.1.4-.2.6c-.2.2-.4.3-.6.3-.3.1-.6.1-.9.2-.4 0-.7.1-1.1.2-.4.1-.7.1-1.1.2-.3.1-.7.2-1 .4s-.5.5-.7.8c-.2.4-.3.8-.3 1.2s.1.8.2 1.1c.1.3.4.5.6.7.3.2.6.3.9.4.9.2 1.9.2 2.8-.2.5-.2 1-.6 1.4-1 0 .4.1.7.3 1 .2.2.6.3.9.3.4 0 .7-.1 1-.2v-1.1c-.1 0-.3.1-.4.1-.1.1-.2 0-.2-.2zm-1.5-1.7c0 .2-.1.4-.2.6-.1.2-.3.5-.5.6-.2.2-.5.4-.8.5-.4.1-.8.2-1.2.2-.2 0-.4 0-.6-.1-.2 0-.4-.1-.5-.2-.2-.1-.3-.2-.4-.4-.1-.2-.2-.4-.1-.6 0-.3.1-.6.2-.8.2-.2.4-.4.6-.5.3-.1.6-.2.9-.2s.7-.1 1-.1.6-.1.9-.1.5-.1.7-.3v1.4zm-9.6-.4l1.3 3.6h1.8L8.5 6H6.7L2 18h1.7L5 14.4h5.1zm-2.5-7l2.1 5.5H5.5l2.1-5.5z"></path></svg>',clear:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>',arrow_drop_up:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 14l5-5 5 5z"/></svg>',arrow_drop_down:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 10l5 5 5-5z"/></svg>',arrow_downward:'<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"/></svg>',arrow_upward:'<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></svg>'};var j,B,X,N=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n};class U extends(p(i.oi)){constructor(){super(),this.svg="",this.name="",this.collection="default",this.mirrored=!1,this.iconLoaded=(e,t)=>{this.name===e&&this.collection===t&&this.getIcon()},this.size="medium"}connectedCallback(){super.connectedCallback(),this.hasAttribute("role")||this.setAttribute("role","img"),L.instance().subscribe(this.iconLoaded)}disconnectedCallback(){L.instance().unsubscribe(this.iconLoaded),super.disconnectedCallback()}iconChanged(e,t){e!==t&&this.getIcon()}getIcon(){const e=this.name&&this.collection?L.instance().getIcon(this.name,this.collection):"";this.svg=null!=e?e:""}render(){return i.dy` ${(0,A.c)(this.svg)} `}async registerIcon(e,t,a="default"){await R(e,t,a)}registerIconFromText(e,t,a="default"){F(e,t,a)}}U.tagName="igc-icon",U.styles=V,N([(0,r.SB)()],U.prototype,"svg",void 0),N([(0,r.Cb)(),(e,t)=>{}],U.prototype,"name",void 0),N([(0,r.Cb)()],U.prototype,"collection",void 0),N([(0,r.Cb)({type:Boolean,reflect:!0})],U.prototype,"mirrored",void 0),N([m("name"),m("collection")],U.prototype,"iconChanged",null),N([(e,t)=>{}],U.prototype,"registerIcon",null),N([(e,t)=>{}],U.prototype,"registerIconFromText",null);class K{constructor(e){this.target=e}prefersReducedMotion(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}parseKeyframes(e){return e.map((e=>({...e,height:"auto"===e.height?`${this.target.scrollHeight}px`:e.height})))}async play(e){const{steps:t,options:a}=e;return new Promise((e=>{if((null==a?void 0:a.duration)===1/0)throw new Error("Promise-based animations must be finite.");const i=this.parseKeyframes(t),r=this.target.animate(i,{...a,duration:this.prefersReducedMotion()?0:a.duration});r.addEventListener("cancel",e,{once:!0}),r.addEventListener("finish",e,{once:!0})}))}stopAll(){return Promise.all(this.target.getAnimations().map((e=>new Promise((t=>{const a=()=>requestAnimationFrame(t);e.addEventListener("cancel",a,{once:!0}),e.addEventListener("finish",a,{once:!0}),e.cancel()})))))}}function H(e,t){return{steps:e,options:t}}!function(e){e.Quad="cubic-bezier(0.550, 0.085, 0.680, 0.530)",e.Cubic="cubic-bezier(0.550, 0.055, 0.675, 0.190)",e.Quart="cubic-bezier(0.895, 0.030, 0.685, 0.220)",e.Quint="cubic-bezier(0.755, 0.050, 0.855, 0.060)",e.Sine="cubic-bezier(0.470, 0.000, 0.745, 0.715)",e.Expo="cubic-bezier(0.950, 0.050, 0.795, 0.035)",e.Circ="cubic-bezier(0.600, 0.040, 0.980, 0.335)",e.Back="cubic-bezier(0.600, -0.280, 0.735, 0.045)"}(j||(j={})),function(e){e.Quad="cubic-bezier(0.250, 0.460, 0.450, 0.940)",e.Cubic="cubic-bezier(0.215, 0.610, 0.355, 1.000)",e.Quart="cubic-bezier(0.165, 0.840, 0.440, 1.000)",e.Quint="cubic-bezier(0.230, 1.000, 0.320, 1.000)",e.Sine="cubic-bezier(0.390, 0.575, 0.565, 1.000)",e.Expo="cubic-bezier(0.190, 1.000, 0.220, 1.000)",e.Circ="cubic-bezier(0.075, 0.820, 0.165, 1.000)",e.Back="cubic-bezier(0.175, 0.885, 0.320, 1.275)"}(B||(B={})),function(e){e.Quad="cubic-bezier(0.455, 0.030, 0.515, 0.955)",e.Cubic="cubic-bezier(0.645, 0.045, 0.355, 1.000)",e.Quart="cubic-bezier(0.770, 0.000, 0.175, 1.000)",e.Quint="cubic-bezier(0.860, 0.000, 0.070, 1.000)",e.Sine="cubic-bezier(0.445, 0.050, 0.550, 0.950)",e.Expo="cubic-bezier(1.000, 0.000, 0.000, 1.000)",e.Circ="cubic-bezier(0.785, 0.135, 0.150, 0.860)",e.Back="cubic-bezier(0.680, -0.550, 0.265, 1.550)"}(X||(X={}));const Y=H([{opacity:0,height:0},{opacity:1,height:"auto"}],{duration:350,easing:B.Quad}),q=H([{opacity:1,height:"auto"},{opacity:0,height:0}],{duration:350,easing:B.Quad});var W,Q=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n};k(U);let G=W=class extends(z(i.oi)){constructor(){super(...arguments),this.open=!1,this.disabled=!1,this.indicatorPosition="start"}connectedCallback(){super.connectedCallback(),this.panelId=this.getAttribute("id")||`igc-expansion-panel-${W.increment()}`}firstUpdated(){this.animationPlayer=new K(this.panelContent)}handleClicked(){this.panelHeader.focus(),this.open?this.closeWithEvent():this.openWithEvent()}handleKeydown(e){if(!this.disabled)switch(e.key.toLowerCase()){case"arrowdown":case"down":e.altKey&&this.openWithEvent();break;case"arrowup":case"up":e.altKey&&this.closeWithEvent();break;case"enter":case" ":this.open?this.closeWithEvent():this.openWithEvent()}}async toggleAnimation(e){const t="open"===e?Y:q,[a,i]=await Promise.all([this.animationPlayer.stopAll(),this.animationPlayer.play(t)]);return"finish"===i.type}async openWithEvent(){if(this.open)return;const e={cancelable:!0,detail:this};this.emitEvent("igcOpening",e)&&(this.open=!0,await this.toggleAnimation("open")&&this.emitEvent("igcOpened",{detail:this}))}async closeWithEvent(){if(!this.open)return;const e={cancelable:!0,detail:this};this.emitEvent("igcClosing",e)&&(this.open=!1,await this.toggleAnimation("close")&&this.emitEvent("igcClosed",{detail:this}))}toggle(){this.open?this.hide():this.show()}hide(){this.open&&this.toggleAnimation("close"),this.open=!1}show(){this.open||this.toggleAnimation("open"),this.open=!0}indicatorTemplate(){return i.dy`
      <div part="indicator" aria-hidden="true">
        <slot name="indicator">
          <igc-icon
            name=${this.open?"keyboard_arrow_up":"keyboard_arrow_down"}
            collection="internal"
          >
          </igc-icon>
        </slot>
      </div>
    `}headerTemplate(){return i.dy`
      <div
        part="header"
        id="${this.panelId}-header"
        role="button"
        aria-expanded="${this.open}"
        aria-disabled="${this.disabled}"
        aria-controls="${this.panelId}-content"
        tabindex=${this.disabled?"-1":"0"}
        @click=${this.handleClicked}
        @keydown=${this.handleKeydown}
      >
        ${this.indicatorTemplate()}
        <div>
          <slot name="title" part="title"></slot>
          <slot name="subtitle" part="subtitle"></slot>
        </div>
      </div>
    `}contentTemplate(){return i.dy`
      <div
        part="content"
        role="region"
        id="${this.panelId}-content"
        aria-labelledby="${this.panelId}-header"
        aria-hidden=${!this.open}
      >
        <slot></slot>
      </div>
    `}render(){return i.dy` ${this.headerTemplate()} ${this.contentTemplate()}`}};G.tagName="igc-expansion-panel",G.styles=C,G.increment=M(),Q([(0,r.Cb)({reflect:!0,type:Boolean})],G.prototype,"open",void 0),Q([(0,r.Cb)({reflect:!0,type:Boolean})],G.prototype,"disabled",void 0),Q([(0,r.Cb)({reflect:!0,attribute:"indicator-position"})],G.prototype,"indicatorPosition",void 0),Q([(0,r.IO)('[part~="header"]',!0)],G.prototype,"panelHeader",void 0),Q([(0,r.IO)('[part~="content"]',!0)],G.prototype,"panelContent",void 0),G=W=Q([b({bootstrap:D,fluent:S,indigo:I})],G);const Z=G;var J=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n};k(Z);class ee extends i.oi{get _enabledPanels(){return this.panels.filter((e=>!e.disabled))}constructor(){super(),this.singleExpand=!1,this.handleKeydown=e=>{if("igc-expansion-panel"===e.target.tagName.toLowerCase()&&this._enabledPanels.includes(e.target))switch(e.key.toLowerCase()){case"home":this.getPanelHeader(this._enabledPanels.at(0)).focus();break;case"end":this.getPanelHeader(this._enabledPanels.at(-1)).focus();break;case"arrowup":case"up":this.handleUpDownArrow(!0,e);break;case"arrowdown":case"down":this.handleUpDownArrow(!1,e)}},this.addEventListener("keydown",this.handleKeydown,{capture:!0}),this.addEventListener("igcOpening",this.handlePanelOpening)}handlePanelOpening(e){const t=e.target;this.singleExpand&&this.panels.includes(t)&&this._enabledPanels.forEach((e=>{e.open&&e!==t&&this.closePanel(e)}))}handleUpDownArrow(e,t){const a=t.target;if(!t.altKey){const t=this.getNextPanel(a,e?-1:1);if(t===a)return;this.getPanelHeader(t).focus()}if(t.shiftKey&&t.altKey){if(this.singleExpand&&!e)return void this._enabledPanels.forEach((e=>e!==a?this.closePanel(e):this.openPanel(e)));e?this._enabledPanels.forEach((e=>this.closePanel(e))):this._enabledPanels.forEach((e=>this.openPanel(e)))}}getNextPanel(e,t=1){const a=this._enabledPanels.indexOf(e);return this._enabledPanels[a+t]||e}getPanelHeader(e){var t;return null===(t=e.shadowRoot)||void 0===t?void 0:t.querySelector('div[part="header"]')}async closePanel(e){e.open&&e.emitEvent("igcClosing",{cancelable:!0,detail:e})&&(e.hide(),await e.updateComplete,e.emitEvent("igcClosed",{detail:e}))}async openPanel(e){e.open||e.emitEvent("igcOpening",{cancelable:!0,detail:e})&&(e.show(),await e.updateComplete,e.emitEvent("igcOpened",{detail:e}))}hideAll(){this.panels.forEach((e=>e.hide()))}showAll(){this.panels.forEach((e=>e.show()))}render(){return i.dy`<slot></slot>`}}ee.tagName="igc-accordion",ee.styles=w,J([(0,r.Cb)({attribute:"single-expand",reflect:!0,type:Boolean})],ee.prototype,"singleExpand",void 0),J([(0,r.NH)({selector:"igc-expansion-panel"}),(e,t)=>{}],ee.prototype,"panels",void 0);const te=i.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  --size: 1.375rem;
  --_badge-size: var(--size);
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  font-weight: 500;
  vertical-align: top;
}

[part=base] {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  min-width: var(--size);
  min-height: var(--size);
  line-height: 1;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  overflow: hidden;
  white-space: nowrap;
  font-family: var(--ig-font-family);
  font-weight: inherit;
}

::slotted(*) {
  --size: calc(var(--_badge-size) / 2);
  font-size: calc(var(--_badge-size) / 2) !important;
}

:host(:not(:empty)) [part=base] {
  padding: calc(var(--size) / 8) calc(var(--size) / 5.5);
}

:host([variant=primary]) {
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  color: var(--ig-primary-500-contrast);
}

:host([variant=info]) {
  background: hsla(var(--ig-info-500), var(--ig-info-a));
  color: var(--ig-info-500-contrast);
}

:host([variant=success]) {
  background: hsla(var(--ig-success-500), var(--ig-success-a));
  color: var(--ig-success-500-contrast);
}

:host([variant=warning]) {
  background: hsla(var(--ig-warn-500), var(--ig-warn-a));
  color: var(--ig-warn-500-contrast);
}

:host([variant=danger]) {
  background: hsla(var(--ig-error-500), var(--ig-error-a));
  color: var(--ig-error-500-contrast);
}

:host([shape=rounded]),
:host([outlined][shape=rounded]) [part=base] {
  border-radius: calc(var(--size) * 2);
}

:host([shape=square]),
:host([outlined][shape=square]) [part=base] {
  border-radius: 0;
}

:host([outlined]) [part=base] {
  -webkit-box-shadow: inset 0 0 0 0.125rem hsla(var(--ig-gray-50), var(--ig-gray-a));
          box-shadow: inset 0 0 0 0.125rem hsla(var(--ig-gray-50), var(--ig-gray-a));
}`,ae=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host([shape=square]),
:host([outlined][shape=square]) [part=base] {
  border-radius: 0.25rem;
}

:host([outlined]) [part=base] {
  -webkit-box-shadow: inset 0 0 0 0.0625rem hsla(var(--ig-gray-50), var(--ig-gray-a));
          box-shadow: inset 0 0 0 0.0625rem hsla(var(--ig-gray-50), var(--ig-gray-a));
}`;var ie=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n};let re=class extends i.oi{constructor(){super(...arguments),this.variant="primary",this.outlined=!1,this.shape="rounded"}render(){return i.dy`
      <span part="base" role="img" aria-label="badge">
        <slot></slot>
      </span>
    `}};re.tagName="igc-badge",re.styles=te,ie([(0,r.Cb)({reflect:!0})],re.prototype,"variant",void 0),ie([(0,r.Cb)({type:Boolean,reflect:!0})],re.prototype,"outlined",void 0),ie([(0,r.Cb)({reflect:!0})],re.prototype,"shape",void 0),re=ie([b({bootstrap:ae})],re);const le=re;function ne(e){}var se=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n};let oe=class extends(p(z(i.oi))){constructor(){super(...arguments),this.disabled=!1}set ariaLabel(e){const t=this._ariaLabel;this._ariaLabel=e,this.hasAttribute("aria-label")&&this.removeAttribute("aria-label"),this.requestUpdate("ariaLabel",t)}get ariaLabel(){return this._ariaLabel}focus(e){this.nativeElement.focus(e)}blur(){this.nativeElement.blur()}handleFocus(){this.emitEvent("igcFocus")}handleBlur(){this.emitEvent("igcBlur")}get classes(){return{}}renderButton(){return i.dy`
      <button
        part="base"
        aria-label=${(0,n.o)(this.ariaLabel)}
        .disabled=${this.disabled}
        class=${(0,l.$)(this.classes)}
        type=${(0,n.o)(this.type)}
        @focus=${this.handleFocus}
        @blur=${this.handleBlur}
      >
        ${this.renderContent()}
      </button>
    `}renderLinkButton(){return i.dy`
      <a
        part="base"
        role="button"
        href=${(0,n.o)(this.href)}
        target=${(0,n.o)(this.target)}
        download=${(0,n.o)(this.download)}
        rel=${(0,n.o)(this.rel)}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label=${(0,n.o)(this.ariaLabel)}
        class=${(0,l.$)(this.classes)}
        @focus=${!this.disabled&&this.handleFocus}
        @blur=${!this.disabled&&this.handleBlur}
      >
        ${this.renderContent()}
      </a>
    `}render(){return void 0!==this.href?this.renderLinkButton():this.renderButton()}};oe.shadowRootOptions={...i.oi.shadowRootOptions,delegatesFocus:!0},se([(0,r.IO)('[part="base"]',!0)],oe.prototype,"nativeElement",void 0),se([(e,t)=>{},(0,r.Cb)()],oe.prototype,"type",void 0),se([(0,r.Cb)()],oe.prototype,"href",void 0),se([(0,r.Cb)()],oe.prototype,"download",void 0),se([(0,r.Cb)()],oe.prototype,"target",void 0),se([(0,r.Cb)()],oe.prototype,"rel",void 0),se([(0,r.Cb)({type:Boolean,reflect:!0})],oe.prototype,"disabled",void 0),se([(0,r.Cb)({attribute:"aria-label"})],oe.prototype,"ariaLabel",null),se([(e,t)=>{}],oe.prototype,"focus",null),se([(e,t)=>{}],oe.prototype,"blur",null),oe=se([ne],oe);const ge=i.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  --size: max(var(--is-large, 1) * max(2.25rem, -1 * 2.25rem), var(--is-medium, 1) * max(1.875rem, -1 * 1.875rem), var(--is-small, 1) * max(1.5rem, -1 * 1.5rem));
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  vertical-align: middle;
  height: var(--size);
}
:host ::slotted(*) {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  font-size: inherit !important;
}

:host([size=small]) {
  --component-size: var(--ig-size, var(--ig-size-small));
}

:host([size=medium]) {
  --component-size: var(--ig-size, var(--ig-size-medium));
}

:host([size=large]) {
  --component-size: var(--ig-size, var(--ig-size-large));
}

[part=base] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.25rem), 0.25rem);
  font-family: var(--ig-button-font-family, var(--ig-font-family));
  font-size: var(--ig-button-font-size);
  font-weight: var(--ig-button-font-weight);
  font-style: var(--ig-button-font-style);
  line-height: var(--ig-button-line-height);
  letter-spacing: var(--ig-button-letter-spacing);
  text-transform: var(--ig-button-text-transform);
  margin-top: var(--ig-button-margin-top);
  margin-bottom: var(--ig-button-margin-bottom);
  position: relative;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
  border: none;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  outline-style: none;
  -webkit-tap-highlight-color: transparent;
  overflow: hidden;
  white-space: nowrap;
  text-decoration: none;
  z-index: 0;
  height: var(--size);
  padding: 0 max(var(--is-large, 1) * max(16px, -1 * 16px) * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * max(12px, -1 * 12px) * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * max(8px, -1 * 8px) * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
  gap: 0.5rem;
}

:host(:not([disabled])) [part=base]:hover {
  cursor: pointer;
}

:host([disabled]) {
  pointer-events: none;
}
:host([disabled]) [part=base] {
  background: hsla(var(--ig-gray-300), var(--ig-gray-a));
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
  -webkit-box-shadow: none;
          box-shadow: none;
}

:host(:not([disabled])[variant=outlined]) [part=base], :host(:not([disabled])[variant=flat]) [part=base] {
  color: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
  background: transparent;
  -webkit-transition: background-color 0.1s ease-out 0s;
  -o-transition: background-color 0.1s ease-out 0s;
  transition: background-color 0.1s ease-out 0s;
}
:host(:not([disabled])[variant=outlined]) [part=base]:hover, :host(:not([disabled])[variant=flat]) [part=base]:hover {
  background: hsla(var(--ig-secondary-500), 0.12);
}
:host(:not([disabled])[variant=outlined]) [part=base]:focus, :host(:not([disabled])[variant=flat]) [part=base]:focus, :host(:not([disabled])[variant=outlined]) [part=base]:active, :host(:not([disabled])[variant=flat]) [part=base]:active {
  background: hsla(var(--ig-secondary-500), 0.24);
}

:host([disabled][variant=flat]) [part=base] {
  background: transparent;
}

:host(:not([disabled])[variant=outlined]) [part=base] {
  -webkit-box-shadow: inset 0 0 0 0.0625rem hsla(var(--ig-secondary-500), var(--ig-secondary-a));
          box-shadow: inset 0 0 0 0.0625rem hsla(var(--ig-secondary-500), var(--ig-secondary-a));
}

:host([disabled][variant=outlined]) [part=base] {
  background: transparent;
  -webkit-box-shadow: inset 0 0 0 0.0625rem hsla(var(--ig-gray-300), var(--ig-gray-a));
          box-shadow: inset 0 0 0 0.0625rem hsla(var(--ig-gray-300), var(--ig-gray-a));
}

:host(:not([disabled])[variant=fab]) [part=base], :host(:not([disabled])[variant=contained]) [part=base] {
  background: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
  color: var(--ig-secondary-500-contrast);
}

:host([variant=fab]) {
  --size: max(var(--is-large, 1) * max(3rem, -1 * 3rem), var(--is-medium, 1) * max(2.5rem, -1 * 2.5rem), var(--is-small, 1) * max(2rem, -1 * 2rem));
}

:host([variant=fab]) [part=base] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * calc(var(--size) / 2)), calc(var(--size) / 2));
  min-width: var(--size);
  min-height: var(--size);
}`,de=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  --size: max(var(--is-large, 1) * max(3rem, -1 * 3rem), var(--is-medium, 1) * max(2.375rem, -1 * 2.375rem), var(--is-small, 1) * max(1.9375rem, -1 * 1.9375rem));
}

:host [part=base] {
  -webkit-transition: all 0.15s ease-out;
  -o-transition: all 0.15s ease-out;
  transition: all 0.15s ease-out;
}

:host(:not([disabled])[variant=flat]) [part=base] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.25rem), 0.25rem);
  color: hsla(var(--ig-primary-500), var(--ig-primary-a));
}
:host(:not([disabled])[variant=flat]) [part=base]:hover {
  color: hsla(var(--ig-primary-800), var(--ig-primary-a));
  background: transparent;
}
:host(:not([disabled])[variant=flat]) [part=base]:focus, :host(:not([disabled])[variant=flat]) [part=base]:active {
  color: hsla(var(--ig-primary-600), var(--ig-primary-a));
  -webkit-box-shadow: 0 0 0 0.25rem hsla(var(--ig-primary-200), 0.5);
          box-shadow: 0 0 0 0.25rem hsla(var(--ig-primary-200), 0.5);
  background: transparent;
}

:host([disabled][variant=flat]) [part=base] {
  background: transparent;
  color: hsla(var(--ig-primary-100), var(--ig-primary-a));
}

:host([disabled][variant=fab]) [part=base],
:host([disabled][variant=contained]) [part=base] {
  background: hsla(var(--ig-primary-200), var(--ig-primary-a));
  color: var(--ig-primary-600-contrast);
}

:host(:not([disabled])[variant=contained]) [part=base] {
  color: var(--ig-primary-600-contrast);
  -webkit-box-shadow: var(--ig-elevation-0);
          box-shadow: var(--ig-elevation-0);
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  opacity: 1;
}
:host(:not([disabled])[variant=contained]) [part=base]:hover {
  color: var(--ig-primary-600-contrast);
}
:host(:not([disabled])[variant=contained]) [part=base]:focus, :host(:not([disabled])[variant=contained]) [part=base]:active {
  color: var(--ig-primary-600-contrast);
  -webkit-box-shadow: 0 0 0 0.25rem hsla(var(--ig-primary-200), 0.5);
          box-shadow: 0 0 0 0.25rem hsla(var(--ig-primary-200), 0.5);
}
:host(:not([disabled])[variant=contained]) [part=base]:hover, :host(:not([disabled])[variant=contained]) [part=base]:focus, :host(:not([disabled])[variant=contained]) [part=base]:active {
  background: hsla(var(--ig-primary-600), var(--ig-primary-a));
}

:host(:not([disabled])[variant=outlined]) [part=base] {
  color: hsla(var(--ig-primary-500), var(--ig-primary-a));
  border: 0.0625rem solid hsla(var(--ig-primary-500), var(--ig-primary-a));
  -webkit-box-shadow: none;
          box-shadow: none;
  overflow: visible;
}
:host(:not([disabled])[variant=outlined]) [part=base]:focus {
  background: transparent;
  -webkit-box-shadow: 0 0 0 0.25rem hsla(var(--ig-primary-200), 0.5);
          box-shadow: 0 0 0 0.25rem hsla(var(--ig-primary-200), 0.5);
}
:host(:not([disabled])[variant=outlined]) [part=base]:hover, :host(:not([disabled])[variant=outlined]) [part=base]:active {
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  color: var(--ig-primary-600-contrast);
}

:host([disabled][variant=outlined]) [part=base] {
  -webkit-box-shadow: none;
          box-shadow: none;
  color: hsla(var(--ig-primary-200), var(--ig-primary-a));
  border: 0.0625rem solid hsla(var(--ig-primary-200), var(--ig-primary-a));
  background: transparent;
}

:host([variant=fab][size=large]) [part=base] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 1rem), 1rem);
}

:host([variant=fab][size=medium]) [part=base] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.75rem), 0.75rem);
}

:host([variant=fab][size=small]) [part=base] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.5rem), 0.5rem);
}

:host(:not([disabled])[variant=fab]) [part=base] {
  color: var(--ig-primary-600-contrast);
  -webkit-box-shadow: var(--ig-elevation-0);
          box-shadow: var(--ig-elevation-0);
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
}
:host(:not([disabled])[variant=fab]) [part=base]:hover {
  color: var(--ig-primary-600-contrast);
}
:host(:not([disabled])[variant=fab]) [part=base]:focus, :host(:not([disabled])[variant=fab]) [part=base]:active {
  color: var(--ig-primary-600-contrast);
  -webkit-box-shadow: 0 0 0 0.25rem hsla(var(--ig-primary-200), 0.5);
          box-shadow: 0 0 0 0.25rem hsla(var(--ig-primary-200), 0.5);
}
:host(:not([disabled])[variant=fab]) [part=base]:hover, :host(:not([disabled])[variant=fab]) [part=base]:focus, :host(:not([disabled])[variant=fab]) [part=base]:active {
  background: hsla(var(--ig-primary-600), var(--ig-primary-a));
}`,he=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  --size: max(var(--is-large, 1) * max(2.375rem, -1 * 2.375rem), var(--is-medium, 1) * max(2rem, -1 * 2rem), var(--is-small, 1) * max(1.5rem, -1 * 1.5rem));
}

[part=base] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.125rem), 0.125rem);
  padding: 0 max(var(--is-large, 1) * max(16px, -1 * 16px) * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * max(16px, -1 * 16px) * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * max(8px, -1 * 8px) * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
}

:host(:not([disabled])[variant=flat]) [part=base] {
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
}
:host(:not([disabled])[variant=flat]) [part=base]:hover {
  color: hsla(var(--ig-primary-500), var(--ig-primary-a));
}
:host(:not([disabled])[variant=flat]) [part=base]:active {
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
}
:host(:not([disabled])[variant=flat]) [part=base]:hover, :host(:not([disabled])[variant=flat]) [part=base]:focus, :host(:not([disabled])[variant=flat]) [part=base]:active {
  background: transparent;
}

:host(:not([disabled])[variant=outlined]) [part=base] {
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
  -webkit-transition: color 0.15s ease-out;
  -o-transition: color 0.15s ease-out;
  transition: color 0.15s ease-out;
  -webkit-box-shadow: 0 0 0 1px hsla(var(--ig-gray-700), var(--ig-gray-a));
          box-shadow: 0 0 0 1px hsla(var(--ig-gray-700), var(--ig-gray-a));
}
:host(:not([disabled])[variant=outlined]) [part=base]:hover, :host(:not([disabled])[variant=outlined]) [part=base]:focus:hover {
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
}
:host(:not([disabled])[variant=outlined]) [part=base]:focus {
  background: transparent;
}
:host(:not([disabled])[variant=outlined]) [part=base]:focus:active {
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
}
:host(:not([disabled])[variant=outlined]) [part=base]:hover, :host(:not([disabled])[variant=outlined]) [part=base]:focus, :host(:not([disabled])[variant=outlined]) [part=base]:active {
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
}
:host(:not([disabled])[variant=outlined]) [part=base]:active, :host(:not([disabled])[variant=outlined]) [part=base]:focus:active, :host(:not([disabled])[variant=outlined]) [part=base]:focus-visible:hover:active, :host(:not([disabled])[variant=outlined]) [part=base]:focus-visible:active {
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
}
:host(:not([disabled])[variant=outlined]) [part=base]:focus-visible:hover {
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
}

:host(:not([disabled])[variant=flat]) [part=base]:focus-visible,
:host(:not([disabled])[variant=outlined]) [part=base]:focus-visible {
  position: relative;
  background: transparent;
}
:host(:not([disabled])[variant=flat]) [part=base]:focus-visible::after,
:host(:not([disabled])[variant=outlined]) [part=base]:focus-visible::after {
  content: "";
  -webkit-box-shadow: 0 0 0 1px hsla(var(--ig-gray-800), var(--ig-gray-a));
          box-shadow: 0 0 0 1px hsla(var(--ig-gray-800), var(--ig-gray-a));
  position: absolute;
  top: 2px;
  left: 2px;
  pointer-events: none;
  width: calc(100% - 4px);
  height: calc(100% - 4px);
}

:host(:not([disabled])[variant=contained]) [part=base],
:host(:not([disabled])[variant=fab]) [part=base] {
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  color: var(--text-color, var(--ig-primary-600-contrast));
  -webkit-box-shadow: none;
          box-shadow: none;
}
:host(:not([disabled])[variant=contained]) [part=base]:hover, :host(:not([disabled])[variant=contained]) [part=base]:focus-visible:hover,
:host(:not([disabled])[variant=fab]) [part=base]:hover,
:host(:not([disabled])[variant=fab]) [part=base]:focus-visible:hover {
  color: var(--text-color, var(--ig-primary-600-contrast));
  background: var(--hover-background, hsla(var(--ig-primary-600), var(--ig-primary-a)));
}
:host(:not([disabled])[variant=contained]) [part=base]:focus, :host(:not([disabled])[variant=contained]) [part=base]:active,
:host(:not([disabled])[variant=fab]) [part=base]:focus,
:host(:not([disabled])[variant=fab]) [part=base]:active {
  color: var(--text-color, var(--ig-primary-600-contrast));
}
:host(:not([disabled])[variant=contained]) [part=base]:active, :host(:not([disabled])[variant=contained]) [part=base]:focus-visible:active,
:host(:not([disabled])[variant=fab]) [part=base]:active,
:host(:not([disabled])[variant=fab]) [part=base]:focus-visible:active {
  background: var(--active-background, hsla(var(--ig-primary-700), var(--ig-primary-a)));
}
:host(:not([disabled])[variant=contained]) [part=base]:focus-visible,
:host(:not([disabled])[variant=fab]) [part=base]:focus-visible {
  position: relative;
}
:host(:not([disabled])[variant=contained]) [part=base]:focus-visible::after,
:host(:not([disabled])[variant=fab]) [part=base]:focus-visible::after {
  content: "";
  -webkit-box-shadow: 0 0 0 1px var(--ig-primary-600-contrast);
          box-shadow: 0 0 0 1px var(--ig-primary-600-contrast);
  position: absolute;
  top: 3px;
  left: 3px;
  pointer-events: none;
  width: calc(100% - 6px);
  height: calc(100% - 6px);
}

:host([variant=fab]) [part=base] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.875rem), 0.875rem);
}
:host([variant=fab]) [part=base]::after {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.75rem), 0.75rem);
}

:host([disabled][variant=flat]) [part=base] {
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
  background: transparent;
}

:host([disabled][variant=fab]) [part=base],
:host([disabled][variant=contained]) [part=base] {
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
}

:host([disabled][variant=outlined]) [part=base] {
  -webkit-box-shadow: none;
          box-shadow: none;
  color: hsla(var(--ig-gray-500), 8);
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
}`,ce=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  --size: max(var(--is-large, 1) * max(2.25rem, -1 * 2.25rem), var(--is-medium, 1) * max(2rem, -1 * 2rem), var(--is-small, 1) * max(1.75rem, -1 * 1.75rem));
}

[part=base] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * calc(var(--size) / 2)), calc(var(--size) / 2));
}
[part=base]::after {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * calc(var(--size) / 2)), calc(var(--size) / 2));
}

:host([variant=fab]) {
  --size: max(var(--is-large, 1) * max(3rem, -1 * 3rem), var(--is-medium, 1) * max(2.625rem, -1 * 2.625rem), var(--is-small, 1) * max(2.25rem, -1 * 2.25rem));
}

:host(:not([disabled])[variant=flat]) [part=base] {
  background: transparent;
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
  -webkit-transition: color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
  -o-transition: color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
}
:host(:not([disabled])[variant=flat]) [part=base]:hover, :host(:not([disabled])[variant=flat]) [part=base]:focus, :host(:not([disabled])[variant=flat]) [part=base]:active {
  background: transparent;
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
}
:host(:not([disabled])[variant=flat]) [part=base]:focus, :host(:not([disabled])[variant=flat]) [part=base]:active {
  -webkit-box-shadow: 0 0 0 0.1875rem hsla(var(--ig-gray-300), var(--ig-gray-a));
          box-shadow: 0 0 0 0.1875rem hsla(var(--ig-gray-300), var(--ig-gray-a));
}

:host(:not([disabled])[variant=outlined]) [part=base] {
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
  -webkit-transition: color 0.15s ease-out, background-color 0.1s ease-out 0s;
  -o-transition: color 0.15s ease-out, background-color 0.1s ease-out 0s;
  transition: color 0.15s ease-out, background-color 0.1s ease-out 0s;
  -webkit-box-shadow: inset 0 0 0 2px hsla(var(--ig-gray-500), var(--ig-gray-a));
          box-shadow: inset 0 0 0 2px hsla(var(--ig-gray-500), var(--ig-gray-a));
  overflow: visible;
}
:host(:not([disabled])[variant=outlined]) [part=base]::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  -webkit-transition: -webkit-box-shadow 0.15s ease-out;
  transition: -webkit-box-shadow 0.15s ease-out;
  -o-transition: box-shadow 0.15s ease-out;
  transition: box-shadow 0.15s ease-out;
  transition: box-shadow 0.15s ease-out, -webkit-box-shadow 0.15s ease-out;
}
:host(:not([disabled])[variant=outlined]) [part=base]:hover {
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
  background: hsla(var(--ig-secondary-500), 0.12);
}
:host(:not([disabled])[variant=outlined]) [part=base]:focus, :host(:not([disabled])[variant=outlined]) [part=base]:active {
  background: transparent;
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
}
:host(:not([disabled])[variant=outlined]) [part=base]:focus::after, :host(:not([disabled])[variant=outlined]) [part=base]:active::after {
  -webkit-box-shadow: 0 0 0 0.1875rem hsla(var(--ig-gray-300), var(--ig-gray-a));
          box-shadow: 0 0 0 0.1875rem hsla(var(--ig-gray-300), var(--ig-gray-a));
}

:host([disabled][variant=fab]) [part=base],
:host(:not([disabled])[variant=fab]) [part=base],
:host([disabled][variant=contained]) [part=base],
:host(:not([disabled])[variant=contained]) [part=base] {
  -webkit-box-shadow: var(--ig-elevation-0);
          box-shadow: var(--ig-elevation-0);
}
:host([disabled][variant=fab]) [part=base]:hover,
:host(:not([disabled])[variant=fab]) [part=base]:hover,
:host([disabled][variant=contained]) [part=base]:hover,
:host(:not([disabled])[variant=contained]) [part=base]:hover {
  -webkit-box-shadow: var(--ig-elevation-0);
          box-shadow: var(--ig-elevation-0);
}

:host(:not([disabled])[variant=fab]) [part=base],
:host(:not([disabled])[variant=contained]) [part=base] {
  color: var(--ig-primary-600-contrast);
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
}
:host(:not([disabled])[variant=fab]) [part=base]:hover,
:host(:not([disabled])[variant=contained]) [part=base]:hover {
  color: var(--ig-primary-600-contrast);
}
:host(:not([disabled])[variant=fab]) [part=base]:focus, :host(:not([disabled])[variant=fab]) [part=base]:active,
:host(:not([disabled])[variant=contained]) [part=base]:focus,
:host(:not([disabled])[variant=contained]) [part=base]:active {
  color: var(--ig-primary-600-contrast);
  -webkit-box-shadow: 0 0 0 0.1875rem hsla(var(--ig-primary-200), var(--ig-primary-a));
          box-shadow: 0 0 0 0.1875rem hsla(var(--ig-primary-200), var(--ig-primary-a));
}
:host(:not([disabled])[variant=fab]) [part=base]:hover, :host(:not([disabled])[variant=fab]) [part=base]:focus, :host(:not([disabled])[variant=fab]) [part=base]:active,
:host(:not([disabled])[variant=contained]) [part=base]:hover,
:host(:not([disabled])[variant=contained]) [part=base]:focus,
:host(:not([disabled])[variant=contained]) [part=base]:active {
  background: hsla(var(--ig-primary-400), var(--ig-primary-a));
}

:host([disabled][variant=flat]) [part=base],
:host([disabled][variant=outlined]) [part=base] {
  background: transparent;
  -webkit-box-shadow: none;
          box-shadow: none;
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}

:host([disabled][variant=fab]) [part=base],
:host([disabled][variant=contained]) [part=base] {
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}`,be=i.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  --size: max(var(--is-large, 1) * max(2.25rem, -1 * 2.25rem), var(--is-medium, 1) * max(1.875rem, -1 * 1.875rem), var(--is-small, 1) * max(1.5rem, -1 * 1.5rem));
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  vertical-align: middle;
  height: var(--size);
}
:host ::slotted(*) {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  font-size: inherit !important;
}

:host([size=small]) {
  --component-size: var(--ig-size, var(--ig-size-small));
}

:host([size=medium]) {
  --component-size: var(--ig-size, var(--ig-size-medium));
}

:host([size=large]) {
  --component-size: var(--ig-size, var(--ig-size-large));
}

[part=base] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.25rem), 0.25rem);
  font-family: var(--ig-button-font-family, var(--ig-font-family));
  font-size: var(--ig-button-font-size);
  font-weight: var(--ig-button-font-weight);
  font-style: var(--ig-button-font-style);
  line-height: var(--ig-button-line-height);
  letter-spacing: var(--ig-button-letter-spacing);
  text-transform: var(--ig-button-text-transform);
  margin-top: var(--ig-button-margin-top);
  margin-bottom: var(--ig-button-margin-bottom);
  position: relative;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
  border: none;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  outline-style: none;
  -webkit-tap-highlight-color: transparent;
  overflow: hidden;
  white-space: nowrap;
  text-decoration: none;
  z-index: 0;
  height: var(--size);
  padding: 0 max(var(--is-large, 1) * max(16px, -1 * 16px) * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * max(12px, -1 * 12px) * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * max(8px, -1 * 8px) * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
  gap: 0.5rem;
}

:host(:not([disabled])) [part=base]:hover {
  cursor: pointer;
}

:host([disabled]) {
  pointer-events: none;
}
:host([disabled]) [part=base] {
  background: hsla(var(--ig-gray-300), var(--ig-gray-a));
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
  -webkit-box-shadow: none;
          box-shadow: none;
}

:host(:not([disabled])[variant=outlined]) [part=base], :host(:not([disabled])[variant=flat]) [part=base] {
  color: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
  background: transparent;
  -webkit-transition: background-color 0.1s ease-out 0s;
  -o-transition: background-color 0.1s ease-out 0s;
  transition: background-color 0.1s ease-out 0s;
}
:host(:not([disabled])[variant=outlined]) [part=base]:hover, :host(:not([disabled])[variant=flat]) [part=base]:hover {
  background: hsla(var(--ig-secondary-500), 0.12);
}
:host(:not([disabled])[variant=outlined]) [part=base]:focus, :host(:not([disabled])[variant=flat]) [part=base]:focus, :host(:not([disabled])[variant=outlined]) [part=base]:active, :host(:not([disabled])[variant=flat]) [part=base]:active {
  background: hsla(var(--ig-secondary-500), 0.24);
}

:host([disabled][variant=flat]) [part=base] {
  background: transparent;
}

:host(:not([disabled])[variant=outlined]) [part=base] {
  -webkit-box-shadow: inset 0 0 0 0.0625rem hsla(var(--ig-secondary-500), var(--ig-secondary-a));
          box-shadow: inset 0 0 0 0.0625rem hsla(var(--ig-secondary-500), var(--ig-secondary-a));
}

:host([disabled][variant=outlined]) [part=base] {
  background: transparent;
  -webkit-box-shadow: inset 0 0 0 0.0625rem hsla(var(--ig-gray-300), var(--ig-gray-a));
          box-shadow: inset 0 0 0 0.0625rem hsla(var(--ig-gray-300), var(--ig-gray-a));
}

:host(:not([disabled])[variant=contained]) [part=base], :host(:not([disabled])[variant=fab]) [part=base] {
  background: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
  color: var(--ig-secondary-500-contrast);
}

:host([variant=fab]) {
  --size: max(var(--is-large, 1) * max(3rem, -1 * 3rem), var(--is-medium, 1) * max(2.5rem, -1 * 2.5rem), var(--is-small, 1) * max(2rem, -1 * 2rem));
}

:host([variant=fab]) [part=base] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * calc(var(--size) / 2)), calc(var(--size) / 2));
  min-width: var(--size);
  min-height: var(--size);
}

:host(:not([disabled])[variant=fab]) [part=base], :host(:not([disabled])[variant=contained]) [part=base] {
  -webkit-transition: -webkit-box-shadow 0.1s ease-out;
  transition: -webkit-box-shadow 0.1s ease-out;
  -o-transition: box-shadow 0.1s ease-out;
  transition: box-shadow 0.1s ease-out;
  transition: box-shadow 0.1s ease-out, -webkit-box-shadow 0.1s ease-out;
}
:host(:not([disabled])[variant=fab]) [part=base]::before, :host(:not([disabled])[variant=contained]) [part=base]::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  inset-inline-start: 0;
  inset-block-start: 0;
  opacity: 0;
}
:host(:not([disabled])[variant=fab]) [part=base]:hover, :host(:not([disabled])[variant=contained]) [part=base]:hover {
  -webkit-box-shadow: var(--ig-elevation-4);
          box-shadow: var(--ig-elevation-4);
}
:host(:not([disabled])[variant=fab]) [part=base]:hover::before, :host(:not([disabled])[variant=contained]) [part=base]:hover::before {
  background: #fff;
  opacity: 0.12;
}
:host(:not([disabled])[variant=fab]) [part=base]:focus, :host(:not([disabled])[variant=contained]) [part=base]:focus, :host(:not([disabled])[variant=fab]) [part=base]:active, :host(:not([disabled])[variant=contained]) [part=base]:active {
  -webkit-box-shadow: var(--ig-elevation-8);
          box-shadow: var(--ig-elevation-8);
}
:host(:not([disabled])[variant=fab]) [part=base]:focus::before, :host(:not([disabled])[variant=contained]) [part=base]:focus::before, :host(:not([disabled])[variant=fab]) [part=base]:active::before, :host(:not([disabled])[variant=contained]) [part=base]:active::before {
  background: #fff;
  opacity: 0.24;
}

:host(:not([disabled])[variant=contained]) [part=base] {
  -webkit-box-shadow: var(--ig-elevation-2);
          box-shadow: var(--ig-elevation-2);
}

:host(:not([disabled])[variant=fab]) [part=base] {
  -webkit-box-shadow: var(--ig-elevation-6);
          box-shadow: var(--ig-elevation-6);
}
:host(:not([disabled])[variant=fab]) [part=base]:hover, :host(:not([disabled])[variant=fab]) [part=base]:focus, :host(:not([disabled])[variant=fab]) [part=base]:active {
  -webkit-box-shadow: var(--ig-elevation-12);
          box-shadow: var(--ig-elevation-12);
}`;var me=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n};let pe=class extends oe{constructor(){super(),this.variant="contained",this.size="medium"}get classes(){const{size:e,variant:t}=this;return{flat:"flat"===t,outlined:"outlined"===t,contained:"contained"===t,fab:"fab"===t,small:"small"===e,medium:"medium"===e,large:"large"===e,disabled:this.disabled}}renderContent(){return i.dy`
      <slot name="prefix"></slot>
      <slot></slot>
      <slot name="suffix"></slot>
    `}};pe.tagName="igc-button",pe.styles=ge,me([(0,r.Cb)({reflect:!0})],pe.prototype,"variant",void 0),pe=me([b({bootstrap:de,indigo:ce,fluent:he,material:be})],pe);const ve=pe;var ye=a(85618);const ue={selectMonth:"Select month",selectYear:"Select year",selectDate:"Select date",selectRange:"Select range",selectedDate:"Selected date",startDate:"Start",endDate:"End",previousMonth:"Previous month",nextMonth:"Next month",previousYear:"Previous year",nextYear:"Next year",previousYears:"Previous {0} years",nextYears:"Next {0} years",weekLabel:"Wk"};function xe(e){}var fe,we;!function(e){e[e.After=0]="After",e[e.Before=1]="Before",e[e.Between=2]="Between",e[e.Specific=3]="Specific",e[e.Weekdays=4]="Weekdays",e[e.Weekends=5]="Weekends"}(fe||(fe={})),function(e){e[e.Second=0]="Second",e[e.Minute=1]="Minute",e[e.Hour=2]="Hour",e[e.Day=3]="Day",e[e.Week=4]="Week",e[e.Month=5]="Month",e[e.Quarter=6]="Quarter",e[e.Year=7]="Year"}(we||(we={}));const ke=(e=0,t,a=1)=>{const i=[],r=void 0===t?e:t;for(let l=void 0===t?0:e;a<0?l>r:l<r;l+=a)i.push(l);return i},ze=(e,t)=>{const a=(e=new Date(e.getFullYear(),e.getMonth(),e.getDate())).getTime();if(!t)return!1;for(const i of t){const t=i.dateRange?i.dateRange.map((e=>new Date(e.getFullYear(),e.getMonth(),e.getDate()))):[];switch(i.type){case fe.After:if(a>t[0].getTime())return!0;break;case fe.Before:if(a<t[0].getTime())return!0;break;case fe.Between:{const e=t.map((e=>e.getTime())),i=Math.min(e[0],e[1]),r=Math.max(e[0],e[1]);if(a>=i&&a<=r)return!0;break}case fe.Specific:{const e=t.map((e=>e.getTime()));for(const t of e)if(a===t)return!0;break}case fe.Weekdays:if(e.getDay()%6!=0)return!0;break;case fe.Weekends:if(e.getDay()%6==0)return!0;break;default:return!1}}return!1};var Ce;!function(e){e[e.SUNDAY=0]="SUNDAY",e[e.MONDAY=1]="MONDAY",e[e.TUESDAY=2]="TUESDAY",e[e.WEDNESDAY=3]="WEDNESDAY",e[e.THURSDAY=4]="THURSDAY",e[e.FRIDAY=5]="FRIDAY",e[e.SATURDAY=6]="SATURDAY"}(Ce||(Ce={}));class De{constructor(e=Ce.SUNDAY){this._firstWeekDay=e}get firstWeekDay(){return this._firstWeekDay%7}set firstWeekDay(e){this._firstWeekDay=e}weekdays(){const e=[];for(const t of ke(this.firstWeekDay,this.firstWeekDay+7))e.push(t%7);return e}monthdates(e,t,a=!1){let i=new Date(e,t,1),r=(i.getDay()-this.firstWeekDay)%7;r<0&&(r=7-Math.abs(r)),i=this.timedelta(i,we.Day,-r);const l=[];let n;for(;;)if(n=this.generateICalendarDate(i,e,t),l.push(n),i=this.timedelta(i,we.Day,1),i.getMonth()!==t&&i.getDay()===this.firstWeekDay){if(a&&l.length<=35)for(const a of ke(0,7))n=this.generateICalendarDate(i,e,t),l.push(n),i=this.timedelta(i,we.Day,1);break}return l}monthdatescalendar(e,t,a=!1){const i=this.monthdates(e,t,a),r=[];for(const e of ke(0,i.length,7))r.push(i.slice(e,e+7));return r}timedelta(e,t,a){const i=new Date(e),r=()=>{i.getDate()!==e.getDate()&&i.setDate(0)};switch(t){case we.Year:i.setFullYear(i.getFullYear()+a),r();break;case we.Quarter:i.setMonth(i.getMonth()+3*a),r();break;case we.Month:i.setMonth(i.getMonth()+a),r();break;case we.Week:i.setDate(i.getDate()+7*a);break;case we.Day:i.setDate(i.getDate()+a);break;case we.Hour:i.setTime(i.getTime()+36e5*a);break;case we.Minute:i.setTime(i.getTime()+6e4*a);break;case we.Second:i.setTime(i.getTime()+1e3*a);break;default:throw new Error("Invalid interval specifier")}return i}getNextMonth(e){return this.timedelta(e,we.Month,1)}getPrevMonth(e){return this.timedelta(e,we.Month,-1)}getNextYear(e){return this.timedelta(e,we.Year,1)}getPrevYear(e){return this.timedelta(e,we.Year,-1)}getWeekNumber(e){const t=new Date(e.getFullYear(),0,1).getTime(),a=(new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime()-t+1)/864e5;return Math.ceil(a/7)}generateICalendarDate(e,t,a){return{date:e,isCurrentMonth:e.getFullYear()===t&&e.getMonth()===a,isNextMonth:this.isNextMonth(e,t,a),isPrevMonth:this.isPreviousMonth(e,t,a)}}isPreviousMonth(e,t,a){return e.getFullYear()===t?e.getMonth()<a:e.getFullYear()<t}isNextMonth(e,t,a){return e.getFullYear()===t?e.getMonth()>a:e.getFullYear()>t}}const Se={sunday:0,monday:1,tuesday:2,wednesday:3,thursday:4,friday:5,saturday:6},Ie=864e13,$e=(new Date(Ie),new Date(-Ie),e=>e instanceof Date),Pe=(e,t,a=!0)=>a?e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate():e.getTime()===t.getTime(),Te=(e,t)=>{e.setDate(t),e.getDate()!==t&&e.setDate(0)},Ee=(e,t)=>$e(e)&&$e(t)?e.getTime()===t.getTime():e===t,Me=e=>{const t=(e=>!!$e(e)&&!isNaN(e.getTime()))(a=e)?a:new Date;var a;return new Date(t.getFullYear(),t.getMonth(),t.getDate())},Oe=(e,t)=>{const a=e.getFullYear();return Math.floor(a/t)*t};var Ae=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n};let Ve=class extends i.oi{constructor(){super(...arguments),this.calendarModel=new De,this.selection="single",this.showWeekNumbers=!1,this.weekStart="sunday",this.activeDate=new Date,this.locale="en"}weekStartChange(){var e;this.calendarModel.firstWeekDay=(e=this.weekStart,Se[e])}selectionChange(){this.value=void 0}};Ae([(e,t)=>{},(0,r.Cb)({converter:{fromAttribute:e=>e?new Date(e):void 0,toAttribute:e=>e.toISOString()}})],Ve.prototype,"value",void 0),Ae([(e,t)=>{},(0,r.Cb)({converter:{fromAttribute:e=>e?e.split(",").map((e=>e.trim())).filter((e=>e)).map((e=>new Date(e))):void 0,toAttribute:e=>e.map((e=>e.toISOString())).join(",")}})],Ve.prototype,"values",void 0),Ae([(0,r.Cb)()],Ve.prototype,"selection",void 0),Ae([(0,r.Cb)({type:Boolean,attribute:"show-week-numbers",reflect:!0})],Ve.prototype,"showWeekNumbers",void 0),Ae([(0,r.Cb)({attribute:"week-start"})],Ve.prototype,"weekStart",void 0),Ae([(e,t)=>{},(0,r.Cb)({attribute:"active-date",converter:{fromAttribute:e=>e?new Date(e):new Date,toAttribute:e=>e.toISOString()}})],Ve.prototype,"activeDate",void 0),Ae([(0,r.Cb)()],Ve.prototype,"locale",void 0),Ae([(0,r.Cb)({attribute:!1})],Ve.prototype,"disabledDates",void 0),Ae([(0,r.Cb)({attribute:!1})],Ve.prototype,"specialDates",void 0),Ae([m("weekStart")],Ve.prototype,"weekStartChange",null),Ae([m("selection",{waitUntilFirstUpdate:!0})],Ve.prototype,"selectionChange",null),Ve=Ae([xe,ne],Ve);const Le=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host(igc-calendar) {
  border: 0.0625rem solid hsla(var(--ig-gray-300), var(--ig-gray-a));
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.25rem), 0.25rem);
}

:host(igc-calendar[size=large]) igc-days-view::part(date-inner),
:host(igc-calendar[size=large]) igc-months-view::part(month-inner),
:host(igc-calendar[size=large]) igc-years-view::part(year-inner),
:host(igc-calendar[size=medium]) igc-days-view::part(date-inner),
:host(igc-calendar[size=medium]) igc-months-view::part(month-inner),
:host(igc-calendar[size=medium]) igc-years-view::part(year-inner),
:host(igc-calendar[size=small]) igc-days-view::part(date-inner),
:host(igc-calendar[size=small]) igc-months-view::part(month-inner),
:host(igc-calendar[size=small]) igc-years-view::part(year-inner) {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.25rem), 0.25rem);
}

[part~=navigation-button] {
  color: hsla(var(--ig-primary-500), var(--ig-primary-a));
}
[part~=navigation-button]:hover, [part~=navigation-button]:focus {
  color: hsla(var(--ig-primary-600), var(--ig-primary-a));
}

[part~=navigation],
[part~=header] {
  background: hsla(var(--ig-secondary-50), 0.2);
  color: var(--ig-gray-50-contrast);
}

[part=header-title] {
  font-family: var(--ig-subtitle-1-font-family, var(--ig-font-family));
  font-size: var(--ig-subtitle-1-font-size);
  font-weight: var(--ig-subtitle-1-font-weight);
  font-style: var(--ig-subtitle-1-font-style);
  line-height: var(--ig-subtitle-1-line-height);
  letter-spacing: var(--ig-subtitle-1-letter-spacing);
  text-transform: var(--ig-subtitle-1-text-transform);
  margin-top: var(--ig-subtitle-1-margin-top);
  margin-bottom: var(--ig-subtitle-1-margin-bottom);
}`,Re=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

:host(igc-calendar) {
  --size: max(var(--is-large, 1) * max(2rem, -1 * 2rem), var(--is-medium, 1) * max(1.75rem, -1 * 1.75rem), var(--is-small, 1) * max(1.5rem, -1 * 1.5rem));
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  font-family: var(--ig-font-family);
  background: hsla(var(--ig-surface-500), var(--ig-surface-a));
  color: var(--ig-surface-500-contrast);
}
:host(igc-calendar) > * {
  font-family: var(--ig-font-family);
}
:host(igc-calendar) igc-days-view::part(date),
:host(igc-calendar) igc-days-view::part(week-number),
:host(igc-calendar) igc-days-view::part(label),
:host(igc-calendar) igc-days-view::part(days-row) {
  height: var(--size);
}
:host(igc-calendar) igc-days-view::part(week-number-inner),
:host(igc-calendar) igc-days-view::part(date-inner) {
  width: calc(var(--size) - 0.125rem);
  min-width: calc(var(--size) - 0.125rem);
  height: 100%;
}
:host(igc-calendar) igc-days-view::part(label) {
  min-width: var(--size);
  height: var(--size);
}
:host(igc-calendar) igc-days-view::part(date-inner) {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * calc(calc(var(--size) / 2) + 0.125rem)), calc(calc(var(--size) / 2) + 0.125rem));
}
:host(igc-calendar) igc-months-view {
  grid-template-rows: repeat(4, minmax(var(--size), 1fr));
}
:host(igc-calendar) igc-months-view::part(month-inner) {
  height: var(--size);
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * calc(calc(var(--size) / 2) + 0.125rem)), calc(calc(var(--size) / 2) + 0.125rem));
}
:host(igc-calendar) igc-years-view {
  grid-template-rows: repeat(5, minmax(var(--size), 1fr));
}
:host(igc-calendar) igc-years-view::part(year-inner) {
  height: var(--size);
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * calc(calc(var(--size) / 2) + 0.125rem)), calc(calc(var(--size) / 2) + 0.125rem));
}

:host(igc-calendar[size=large]) {
  --component-size: var(--ig-size, var(--ig-size-large));
}

:host(igc-calendar[size=medium]) {
  --component-size: var(--ig-size, var(--ig-size-medium));
}

:host(igc-calendar[size=small]) {
  --component-size: var(--ig-size, var(--ig-size-small));
}

[part=navigation] {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  height: 1.25rem;
  padding: 1.5625rem 1.125rem;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}

[part=months-navigation],
[part=years-navigation],
[part~=navigation-button] {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  background: transparent;
  border: none;
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
  font-size: 1rem;
  padding: 0;
  -webkit-transition: color 150ms ease-in-out;
  -o-transition: color 150ms ease-in-out;
  transition: color 150ms ease-in-out;
}
[part=months-navigation]:hover, [part=months-navigation]:focus,
[part=years-navigation]:hover,
[part=years-navigation]:focus,
[part~=navigation-button]:hover,
[part~=navigation-button]:focus {
  color: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
  cursor: pointer;
}
[part=months-navigation]:focus,
[part=years-navigation]:focus,
[part~=navigation-button]:focus {
  outline: none;
}

[part~=navigation-button][part~=vertical] {
  -webkit-transform: rotate(90deg);
      -ms-transform: rotate(90deg);
          transform: rotate(90deg);
}

[part=navigation-buttons] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  gap: 1.5rem;
}

:host(igc-calendar[header-orientation=vertical]) {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
}
:host(igc-calendar[header-orientation=vertical]) [part=header] {
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  width: 8.75rem;
}
:host(igc-calendar[header-orientation=vertical]) [part=header-date] {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}

[part=days-view-container] {
  -webkit-box-flex: 1;
      -ms-flex-positive: 1;
          flex-grow: 1;
}

[part=header] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  padding: 1rem;
  background: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
  color: var(--ig-secondary-600-contrast);
}

[part=header-date],
[part=header-title] {
  margin: 0;
}

[part=header-date] {
  font-family: var(--ig-h4-font-family, var(--ig-font-family));
  font-size: var(--ig-h4-font-size);
  font-weight: var(--ig-h4-font-weight);
  font-style: var(--ig-h4-font-style);
  line-height: var(--ig-h4-line-height);
  letter-spacing: var(--ig-h4-letter-spacing);
  text-transform: var(--ig-h4-text-transform);
  margin-top: var(--ig-h4-margin-top);
  margin-bottom: var(--ig-h4-margin-bottom);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  white-space: pre-wrap;
}

[part=header-title] {
  font-family: var(--ig-overline-font-family, var(--ig-font-family));
  font-size: var(--ig-overline-font-size);
  font-weight: var(--ig-overline-font-weight);
  font-style: var(--ig-overline-font-style);
  line-height: var(--ig-overline-line-height);
  letter-spacing: var(--ig-overline-letter-spacing);
  text-transform: var(--ig-overline-text-transform);
  margin-top: var(--ig-overline-margin-top);
  margin-bottom: var(--ig-overline-margin-bottom);
}

.aria-off-screen {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: none;
  clip: rect(0, 0, 0, 0);
  outline: 0;
  pointer-events: none;
  overflow: hidden;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}`,Fe=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

:host(igc-calendar) {
  --size: max(var(--is-large, 1) * max(2rem, -1 * 2rem), var(--is-medium, 1) * max(1.75rem, -1 * 1.75rem), var(--is-small, 1) * max(1.5rem, -1 * 1.5rem));
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  font-family: var(--ig-font-family);
  background: hsla(var(--ig-surface-500), var(--ig-surface-a));
  color: var(--ig-surface-500-contrast);
}
:host(igc-calendar) > * {
  font-family: var(--ig-font-family);
}
:host(igc-calendar) igc-days-view::part(date),
:host(igc-calendar) igc-days-view::part(week-number),
:host(igc-calendar) igc-days-view::part(label),
:host(igc-calendar) igc-days-view::part(days-row) {
  height: var(--size);
}
:host(igc-calendar) igc-days-view::part(week-number-inner),
:host(igc-calendar) igc-days-view::part(date-inner) {
  width: calc(var(--size) - 0.125rem);
  min-width: calc(var(--size) - 0.125rem);
  height: 100%;
}
:host(igc-calendar) igc-days-view::part(label) {
  min-width: var(--size);
  height: var(--size);
}
:host(igc-calendar) igc-days-view::part(date-inner) {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * calc(calc(var(--size) / 2) + 0.125rem)), calc(calc(var(--size) / 2) + 0.125rem));
}
:host(igc-calendar) igc-months-view {
  grid-template-rows: repeat(4, minmax(var(--size), 1fr));
}
:host(igc-calendar) igc-months-view::part(month-inner) {
  height: var(--size);
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * calc(calc(var(--size) / 2) + 0.125rem)), calc(calc(var(--size) / 2) + 0.125rem));
}
:host(igc-calendar) igc-years-view {
  grid-template-rows: repeat(5, minmax(var(--size), 1fr));
}
:host(igc-calendar) igc-years-view::part(year-inner) {
  height: var(--size);
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * calc(calc(var(--size) / 2) + 0.125rem)), calc(calc(var(--size) / 2) + 0.125rem));
}

:host(igc-calendar[size=large]) {
  --component-size: var(--ig-size, var(--ig-size-large));
}

:host(igc-calendar[size=medium]) {
  --component-size: var(--ig-size, var(--ig-size-medium));
}

:host(igc-calendar[size=small]) {
  --component-size: var(--ig-size, var(--ig-size-small));
}

[part=navigation] {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  height: 1.25rem;
  padding: 1.5625rem 1.125rem;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}

[part=months-navigation],
[part=years-navigation],
[part~=navigation-button] {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  background: transparent;
  border: none;
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
  font-size: 1rem;
  padding: 0;
  -webkit-transition: color 150ms ease-in-out;
  -o-transition: color 150ms ease-in-out;
  transition: color 150ms ease-in-out;
}
[part=months-navigation]:hover, [part=months-navigation]:focus,
[part=years-navigation]:hover,
[part=years-navigation]:focus,
[part~=navigation-button]:hover,
[part~=navigation-button]:focus {
  color: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
  cursor: pointer;
}
[part=months-navigation]:focus,
[part=years-navigation]:focus,
[part~=navigation-button]:focus {
  outline: none;
}

[part~=navigation-button][part~=vertical] {
  -webkit-transform: rotate(90deg);
      -ms-transform: rotate(90deg);
          transform: rotate(90deg);
}

[part=navigation-buttons] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  gap: 1.5rem;
}

:host(igc-calendar[header-orientation=vertical]) {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
}
:host(igc-calendar[header-orientation=vertical]) [part=header] {
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  width: 8.75rem;
}
:host(igc-calendar[header-orientation=vertical]) [part=header-date] {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}

[part=days-view-container] {
  -webkit-box-flex: 1;
      -ms-flex-positive: 1;
          flex-grow: 1;
}

[part=header] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  padding: 1rem;
  background: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
  color: var(--ig-secondary-600-contrast);
}

[part=header-date],
[part=header-title] {
  margin: 0;
}

[part=header-date] {
  font-family: var(--ig-h4-font-family, var(--ig-font-family));
  font-size: var(--ig-h4-font-size);
  font-weight: var(--ig-h4-font-weight);
  font-style: var(--ig-h4-font-style);
  line-height: var(--ig-h4-line-height);
  letter-spacing: var(--ig-h4-letter-spacing);
  text-transform: var(--ig-h4-text-transform);
  margin-top: var(--ig-h4-margin-top);
  margin-bottom: var(--ig-h4-margin-bottom);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  white-space: pre-wrap;
}

[part=header-title] {
  font-family: var(--ig-overline-font-family, var(--ig-font-family));
  font-size: var(--ig-overline-font-size);
  font-weight: var(--ig-overline-font-weight);
  font-style: var(--ig-overline-font-style);
  line-height: var(--ig-overline-line-height);
  letter-spacing: var(--ig-overline-letter-spacing);
  text-transform: var(--ig-overline-text-transform);
  margin-top: var(--ig-overline-margin-top);
  margin-bottom: var(--ig-overline-margin-bottom);
}

.aria-off-screen {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: none;
  clip: rect(0, 0, 0, 0);
  outline: 0;
  pointer-events: none;
  overflow: hidden;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}

:host([size=large]) igc-days-view::part(date-inner),
:host([size=large]) igc-months-view::part(month-inner),
:host([size=large]) igc-years-view::part(year-inner),
:host([size=medium]) igc-days-view::part(date-inner),
:host([size=medium]) igc-months-view::part(month-inner),
:host([size=medium]) igc-years-view::part(year-inner),
:host([size=small]) igc-days-view::part(date-inner),
:host([size=small]) igc-months-view::part(month-inner),
:host([size=small]) igc-years-view::part(year-inner) {
  border-radius: 0;
}

[part=header] {
  background: var(--header-bg, hsla(var(--ig-primary-500), var(--ig-primary-a)));
  color: var(--header-color, var(--ig-primary-600-contrast));
}

[part~=navigation-buttons] {
  gap: 0.5rem;
}

[part~=navigation-button][part~=vertical] {
  -webkit-transform: none;
      -ms-transform: none;
          transform: none;
}

[part=months-navigation],
[part=years-navigation],
[part=years-range] {
  font-family: var(--ig-subtitle-2-font-family, var(--ig-font-family));
  font-size: var(--ig-subtitle-2-font-size);
  font-weight: var(--ig-subtitle-2-font-weight);
  font-style: var(--ig-subtitle-2-font-style);
  line-height: var(--ig-subtitle-2-line-height);
  letter-spacing: var(--ig-subtitle-2-letter-spacing);
  text-transform: var(--ig-subtitle-2-text-transform);
  margin-top: var(--ig-subtitle-2-margin-top);
  margin-bottom: var(--ig-subtitle-2-margin-bottom);
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
}`;function _e(e){}const je=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  -webkit-padding-before: 1rem;
          padding-block-start: 1rem;
}

[part~=month-inner],
[part~=year-inner] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.25rem), 0.25rem);
}

[part~=month-inner][part~=selected],
[part~=year-inner][part~=selected] {
  color: var(--ig-primary-600-contrast);
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
}
[part~=month-inner][part~=selected]:focus, [part~=month-inner][part~=selected]:hover,
[part~=year-inner][part~=selected]:focus,
[part~=year-inner][part~=selected]:hover {
  color: var(--ig-primary-600-contrast);
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
}

[part~=month-inner][part~=current],
[part~=year-inner][part~=current] {
  -webkit-box-shadow: none;
          box-shadow: none;
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
}
[part~=month-inner][part~=current]:hover, [part~=month-inner][part~=current]:focus,
[part~=year-inner][part~=current]:hover,
[part~=year-inner][part~=current]:focus {
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
}

[part~=month-inner][part~=selected][part~=current],
[part~=year-inner][part~=selected][part~=current] {
  -webkit-box-shadow: none;
          box-shadow: none;
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  color: var(--ig-primary-600-contrast);
}
[part~=month-inner][part~=selected][part~=current]:hover, [part~=month-inner][part~=selected][part~=current]:focus,
[part~=year-inner][part~=selected][part~=current]:hover,
[part~=year-inner][part~=selected][part~=current]:focus {
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  color: var(--ig-primary-600-contrast);
}

[part~=months-navigation]:focus, [part~=months-navigation]:hover,
[part~=years-navigation]:focus,
[part~=years-navigation]:hover {
  color: hsla(var(--ig-primary-500), var(--ig-primary-a));
}`,Be=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  min-width: 18.125rem;
  outline: none;
  padding: 0 0.75rem 1rem 0.75rem;
  overflow: hidden;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  gap: 0.25rem;
}

[part=months-row],
[part=years-row] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

[part~=month],
[part~=year] {
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
}

[part~=month],
[part~=year],
[part~=month-inner],
[part~=year-inner] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

[part~=month-inner],
[part~=year-inner] {
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  cursor: pointer;
  padding: 0 0.75rem;
}
[part~=month-inner]:hover, [part~=month-inner]:focus,
[part~=year-inner]:hover,
[part~=year-inner]:focus {
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
}
[part~=month-inner]:hover,
[part~=year-inner]:hover {
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
}

[part~=month-inner][part~=selected],
[part~=year-inner][part~=selected] {
  background: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
  color: var(--ig-secondary-600-contrast);
}
[part~=month-inner][part~=selected]:hover,
[part~=year-inner][part~=selected]:hover {
  background: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
  color: var(--ig-secondary-600-contrast);
}
[part~=month-inner][part~=selected]:focus,
[part~=year-inner][part~=selected]:focus {
  outline: none;
  background: hsla(var(--ig-secondary-700), var(--ig-secondary-a));
  color: var(--ig-secondary-700-contrast);
}

[part~=month-inner][part~=current],
[part~=year-inner][part~=current] {
  -webkit-box-shadow: inset 0 0 0 0.0625rem hsla(var(--ig-gray-600), var(--ig-gray-a));
          box-shadow: inset 0 0 0 0.0625rem hsla(var(--ig-gray-600), var(--ig-gray-a));
}

[part~=month-inner][part~=selected][part~=current],
[part~=year-inner][part~=selected][part~=current] {
  -webkit-box-shadow: inset 0 0 0 0.0625rem hsla(var(--ig-surface-500), var(--ig-surface-a)), 0 0 0 0.0625rem hsla(var(--ig-secondary-500), var(--ig-secondary-a));
          box-shadow: inset 0 0 0 0.0625rem hsla(var(--ig-surface-500), var(--ig-surface-a)), 0 0 0 0.0625rem hsla(var(--ig-secondary-500), var(--ig-secondary-a));
}

[part~=month-inner][part~=current],
[part~=year-inner][part~=current] {
  -webkit-box-shadow: none;
          box-shadow: none;
  background: var(--current-month-year-bg, hsla(var(--ig-gray-200), var(--ig-gray-a)));
  color: var(--current-month-year-color, var(--ig-gray-200-contrast));
}
[part~=month-inner][part~=current]:hover, [part~=month-inner][part~=current]:focus,
[part~=year-inner][part~=current]:hover,
[part~=year-inner][part~=current]:focus {
  background: var(--current-month-year-bg-hover, hsla(var(--ig-gray-300), var(--ig-gray-a)));
  color: var(--current-month-year-color-hover, var(--ig-gray-300-contrast));
}

[part~=month-inner][part~=selected],
[part~=year-inner][part~=selected],
[part~=month-inner][part~=selected][part~=current],
[part~=year-inner][part~=selected][part~=current] {
  -webkit-box-shadow: none;
          box-shadow: none;
  background: var(--selected-month-year-bg, hsla(var(--ig-primary-50), var(--ig-primary-a)));
  color: var(--selected-month-year-color, var(--ig-primary-50-contrast));
}
[part~=month-inner][part~=selected]:hover, [part~=month-inner][part~=selected]:focus,
[part~=year-inner][part~=selected]:hover,
[part~=year-inner][part~=selected]:focus,
[part~=month-inner][part~=selected][part~=current]:hover,
[part~=month-inner][part~=selected][part~=current]:focus,
[part~=year-inner][part~=selected][part~=current]:hover,
[part~=year-inner][part~=selected][part~=current]:focus {
  background: var(--selected-month-year-bg-hover, hsla(var(--ig-primary-100), var(--ig-primary-a)));
  color: var(--selected-month-year-color-hover, var(--ig-primary-100-contrast));
}`,Xe=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  min-width: 18.125rem;
  outline: none;
  padding: 0 0.75rem 1rem 0.75rem;
  overflow: hidden;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  gap: 0.25rem;
}

[part=months-row],
[part=years-row] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

[part~=month],
[part~=year] {
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
}

[part~=month],
[part~=year],
[part~=month-inner],
[part~=year-inner] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

[part~=month-inner],
[part~=year-inner] {
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  cursor: pointer;
  padding: 0 0.75rem;
}
[part~=month-inner]:hover, [part~=month-inner]:focus,
[part~=year-inner]:hover,
[part~=year-inner]:focus {
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
}
[part~=month-inner]:hover,
[part~=year-inner]:hover {
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
}

[part~=month-inner][part~=selected],
[part~=year-inner][part~=selected] {
  background: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
  color: var(--ig-secondary-600-contrast);
}
[part~=month-inner][part~=selected]:hover,
[part~=year-inner][part~=selected]:hover {
  background: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
  color: var(--ig-secondary-600-contrast);
}
[part~=month-inner][part~=selected]:focus,
[part~=year-inner][part~=selected]:focus {
  outline: none;
  background: hsla(var(--ig-secondary-700), var(--ig-secondary-a));
  color: var(--ig-secondary-700-contrast);
}

[part~=month-inner][part~=current],
[part~=year-inner][part~=current] {
  -webkit-box-shadow: inset 0 0 0 0.0625rem hsla(var(--ig-gray-600), var(--ig-gray-a));
          box-shadow: inset 0 0 0 0.0625rem hsla(var(--ig-gray-600), var(--ig-gray-a));
}

[part~=month-inner][part~=selected][part~=current],
[part~=year-inner][part~=selected][part~=current] {
  -webkit-box-shadow: inset 0 0 0 0.0625rem hsla(var(--ig-surface-500), var(--ig-surface-a)), 0 0 0 0.0625rem hsla(var(--ig-secondary-500), var(--ig-secondary-a));
          box-shadow: inset 0 0 0 0.0625rem hsla(var(--ig-surface-500), var(--ig-surface-a)), 0 0 0 0.0625rem hsla(var(--ig-secondary-500), var(--ig-secondary-a));
}`;var Ne=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n};let Ue=class extends(z(i.oi)){datesChange(){this.years=this.generateYears()}constructor(){super(),this.value=new Date,this.yearsPerPage=15,this.setAttribute("role","grid")}focusActiveDate(){this.activeYear.focus()}formattedYear(e){return`${e.getFullYear()}`}generateYears(){const e=Oe(this.value,this.yearsPerPage),t=this.value.getMonth(),a=[],i=this.yearsPerPage/3;for(let r=0;r<i;r++){const i=[];for(let a=0;a<3;a++){const l=e+3*r+a,n=new Date(l,t,1);n.setFullYear(l),i.push(n)}a.push(i)}return a}resolveYearPartName(e){const t=new Date;return{year:!0,selected:e.getFullYear()===this.value.getFullYear(),current:e.getFullYear()===t.getFullYear()}}selectYear(e){const t=new Date(e);Te(t,this.value.getDate()),this.value=t,this.emitEvent("igcChange",{detail:this.value})}yearKeyDown(e,t){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this.selectYear(t))}render(){return i.dy`${this.years.map((e=>i.dy`<div part="years-row" role="row">
        ${e.map((e=>{const t=$(this.resolveYearPartName(e)),a=t.replace("year","year-inner");return i.dy`<span part=${t}>
            <span
              part=${a}
              role="gridcell"
              aria-selected=${e.getFullYear()===this.value.getFullYear()}
              tabindex="${e.getFullYear()===this.value.getFullYear()?0:-1}"
              @click=${()=>this.selectYear(e)}
              @keydown=${t=>this.yearKeyDown(t,e)}
            >
              ${this.formattedYear(e)}
            </span>
          </span>`}))}
      </div>`))}`}};Ue.tagName="igc-years-view",Ue.styles=Xe,Ne([(0,r.IO)('[tabindex="0"]')],Ue.prototype,"activeYear",void 0),Ne([(0,r.Cb)({attribute:!1})],Ue.prototype,"value",void 0),Ne([(0,r.Cb)({type:Number,attribute:"years-per-page"})],Ue.prototype,"yearsPerPage",void 0),Ne([m("value"),m("yearsPerPage")],Ue.prototype,"datesChange",null),Ue=Ne([xe,_e,b({bootstrap:je,fluent:Be})],Ue);const Ke=Ue,He=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host([part=days-view]) {
  overflow: hidden;
  position: relative;
  padding: 0 0 0.25rem 0;
  gap: 0.25rem;
}

:host([part=days-view]) + :host([part=days-view]) {
  -webkit-margin-start: 0.5rem;
          margin-inline-start: 0.5rem;
}

[part~=days-row][part~=first] {
  background: hsla(var(--ig-secondary-50), 0.2);
  border-bottom: 0.0625rem solid hsla(var(--ig-gray-300), var(--ig-gray-a));
}

[part~=label] {
  font-style: italic;
  color: hsla(var(--ig-info-300), var(--ig-info-a));
}

[part~=date-inner] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.25rem), 0.25rem);
}

[part~=date-inner][part~=current] {
  -webkit-box-shadow: none;
          box-shadow: none;
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
  border-color: hsla(var(--ig-gray-200), var(--ig-gray-a));
}
[part~=date-inner][part~=current]:hover {
  -webkit-box-shadow: none;
          box-shadow: none;
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
  border-color: hsla(var(--ig-gray-200), var(--ig-gray-a));
}

[part~=date-inner][part~=selected][part~=single],
[part~=date-inner][part~=selected][part~=weekend][part~=single],
[part~=date-inner][part~=selected][part~=weekend][part~=current][part~=single],
[part~=date-inner][part~=selected][part~=current][part~=single] {
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  border-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
  color: var(--ig-primary-600-contrast);
}
[part~=date-inner][part~=selected][part~=single]:focus, [part~=date-inner][part~=selected][part~=single]:hover,
[part~=date-inner][part~=selected][part~=weekend][part~=single]:focus,
[part~=date-inner][part~=selected][part~=weekend][part~=single]:hover,
[part~=date-inner][part~=selected][part~=weekend][part~=current][part~=single]:focus,
[part~=date-inner][part~=selected][part~=weekend][part~=current][part~=single]:hover,
[part~=date-inner][part~=selected][part~=current][part~=single]:focus,
[part~=date-inner][part~=selected][part~=current][part~=single]:hover {
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  border-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
  color: var(--ig-primary-600-contrast);
}

[part~=date-inner][part~=first][part~=last][part~=selected],
[part~=date-inner][part~=first][part~=selected][part~=range],
[part~=date-inner][part~=first][part~=selected][part~=range][part~=preview],
[part~=date-inner][part~=last][part~=selected][part~=range],
[part~=date-inner][part~=last][part~=selected][part~=range][part~=preview],
[part~=date-inner][part~=selected][part~=range],
[part~=date-inner][part~=selected][part~=range][part~=preview] {
  border-radius: 0 !important;
}

[part~=date-inner][part~=selected][part~=range],
[part~=date-inner][part~=selected][part~=range][part~=weekend],
[part~=date-inner][part~=selected][part~=range][part~=preview],
[part~=date-inner][part~=selected][part~=range][part~=current] {
  background: hsla(var(--ig-primary-200), var(--ig-primary-a));
  border-color: hsla(var(--ig-primary-200), var(--ig-primary-a));
  color: var(--ig-primary-600-contrast);
}
[part~=date-inner][part~=selected][part~=range]:hover, [part~=date-inner][part~=selected][part~=range]:focus,
[part~=date-inner][part~=selected][part~=range][part~=weekend]:hover,
[part~=date-inner][part~=selected][part~=range][part~=weekend]:focus,
[part~=date-inner][part~=selected][part~=range][part~=preview]:hover,
[part~=date-inner][part~=selected][part~=range][part~=preview]:focus,
[part~=date-inner][part~=selected][part~=range][part~=current]:hover,
[part~=date-inner][part~=selected][part~=range][part~=current]:focus {
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  border-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
  color: var(--ig-primary-600-contrast);
}

[part~=date][part~=range],
[part~=date][part~=range][part~=preview] {
  border-top-style: solid;
  border-bottom-style: solid;
  background: hsla(var(--ig-primary-200), var(--ig-primary-a));
  border-top-color: hsla(var(--ig-primary-200), var(--ig-primary-a));
  border-bottom-color: hsla(var(--ig-primary-200), var(--ig-primary-a));
}

[part~=date][part~=first][part~=range],
[part~=date][part~=last][part~=range] {
  background: transparent;
  border-top-color: transparent;
  border-bottom-color: transparent;
}

[part~=date-inner][part~=range][part~=preview],
[part~=date-inner][part~=range] {
  color: var(--ig-primary-600-contrast);
}

[part~=date][part~=first][part~=selected][part~=range]::after,
[part~=date][part~=first][part~=range][part~=preview]::after,
[part~=date][part~=last][part~=selected][part~=range]::after,
[part~=date][part~=last][part~=range][part~=preview]::after {
  background: hsla(var(--ig-primary-200), var(--ig-primary-a));
  border-color: hsla(var(--ig-primary-200), var(--ig-primary-a));
}

[part~=date-inner][part~=current][part~=selected],
[part~=date-inner][part~=current][part~=range][part~=selected],
[part~=date-inner][part~=current][part~=range][part~=preview] {
  border-color: hsla(var(--ig-primary-200), var(--ig-primary-a));
  background: hsla(var(--ig-primary-200), var(--ig-primary-a));
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
  position: relative;
}
[part~=date-inner][part~=current][part~=selected]:hover,
[part~=date-inner][part~=current][part~=range][part~=selected]:hover,
[part~=date-inner][part~=current][part~=range][part~=preview]:hover {
  border-color: hsla(var(--ig-primary-200), var(--ig-primary-a));
  background: hsla(var(--ig-primary-200), var(--ig-primary-a));
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
}
[part~=date-inner][part~=current][part~=selected]::after,
[part~=date-inner][part~=current][part~=range][part~=selected]::after,
[part~=date-inner][part~=current][part~=range][part~=preview]::after {
  content: "";
  position: absolute;
  width: calc(100% - 4px);
  height: calc(100% - 4px);
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.25rem), 0.25rem);
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
  z-index: -1;
}

[part~=date-inner][part~=current][part~=selected] {
  -webkit-box-shadow: none;
          box-shadow: none;
}

[part~=date-inner][part~=current][part~=single]:focus, [part~=date-inner][part~=current][part~=single]:hover {
  -webkit-box-shadow: none;
          box-shadow: none;
}

[part~=date-inner][part~=current][part~=selected][part~=single] {
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  border-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
}
[part~=date-inner][part~=current][part~=selected][part~=single]:focus, [part~=date-inner][part~=current][part~=selected][part~=single]:hover {
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  border-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
}

[part~=date-inner][part~=last][part~=range][part~=preview],
[part~=date-inner][part~=first][part~=range][part~=preview],
[part~=date-inner][part~=first][part~=last][part~=selected],
[part~=date-inner][part~=first][part~=selected][part~=range],
[part~=date-inner][part~=last][part~=selected][part~=range],
[part~=date-inner][part~=first][part~=range][part~=pewview],
[part~=date-inner][part~=first][part~=range][part~=current][part~=preview],
[part~=date-inner][part~=last][part~=range][part~=pewview],
[part~=date-inner][part~=last][part~=range][part~=current][part~=preview] {
  border-radius: 0 !important;
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  border-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
  color: var(--ig-primary-600-contrast);
}
[part~=date-inner][part~=last][part~=range][part~=preview]:hover, [part~=date-inner][part~=last][part~=range][part~=preview]:focus,
[part~=date-inner][part~=first][part~=range][part~=preview]:hover,
[part~=date-inner][part~=first][part~=range][part~=preview]:focus,
[part~=date-inner][part~=first][part~=last][part~=selected]:hover,
[part~=date-inner][part~=first][part~=last][part~=selected]:focus,
[part~=date-inner][part~=first][part~=selected][part~=range]:hover,
[part~=date-inner][part~=first][part~=selected][part~=range]:focus,
[part~=date-inner][part~=last][part~=selected][part~=range]:hover,
[part~=date-inner][part~=last][part~=selected][part~=range]:focus,
[part~=date-inner][part~=first][part~=range][part~=pewview]:hover,
[part~=date-inner][part~=first][part~=range][part~=pewview]:focus,
[part~=date-inner][part~=first][part~=range][part~=current][part~=preview]:hover,
[part~=date-inner][part~=first][part~=range][part~=current][part~=preview]:focus,
[part~=date-inner][part~=last][part~=range][part~=pewview]:hover,
[part~=date-inner][part~=last][part~=range][part~=pewview]:focus,
[part~=date-inner][part~=last][part~=range][part~=current][part~=preview]:hover,
[part~=date-inner][part~=last][part~=range][part~=current][part~=preview]:focus {
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  border-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
  color: var(--ig-primary-600-contrast);
}

[part~=date-inner][part~=first][part~=last][part~=selected][part~=current]:hover, [part~=date-inner][part~=first][part~=last][part~=selected][part~=current]:focus,
[part~=date-inner][part~=last][part~=range][part~=current][part~=preview]:hover,
[part~=date-inner][part~=last][part~=range][part~=current][part~=preview]:focus,
[part~=date-inner][part~=first][part~=range][part~=current][part~=preview]:hover,
[part~=date-inner][part~=first][part~=range][part~=current][part~=preview]:focus {
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
}

[part~=date-inner][part~=first][part~=current][part~=range][part~=preview],
[part~=date-inner][part~=first][part~=current][part~=range][part~=selected],
[part~=date-inner][part~=last][part~=current][part~=range][part~=preview],
[part~=date-inner][part~=last][part~=current][part~=range][part~=selected] {
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  border-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
}

[part~=date-inner][part~=first][part~=selected][part~=current][part~=range],
[part~=date-inner][part~=last][part~=selected][part~=current][part~=range] {
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  border-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
}
[part~=date-inner][part~=first][part~=selected][part~=current][part~=range]:hover, [part~=date-inner][part~=first][part~=selected][part~=current][part~=range]:focus,
[part~=date-inner][part~=last][part~=selected][part~=current][part~=range]:hover,
[part~=date-inner][part~=last][part~=selected][part~=current][part~=range]:focus {
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  border-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
}

[part~=date-inner][part~=selected][part~=current][part~=range] {
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
}
[part~=date-inner][part~=selected][part~=current][part~=range]:hover, [part~=date-inner][part~=selected][part~=current][part~=range]:focus {
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  border-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
}

[part~=week-number-inner] {
  font-style: italic;
  background: transparent;
  border: none;
}
[part~=week-number-inner]::after {
  display: none;
}

[part~=date-inner][part~=special] {
  background: hsla(var(--ig-primary-300), var(--ig-primary-a));
  border-color: hsla(var(--ig-primary-300), var(--ig-primary-a));
  color: var(--ig-primary-600-contrast);
}

[part~=date-inner][part~=special][part~=selected] {
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  border-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
  color: var(--ig-primary-600-contrast);
}`,Ye=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host([part=days-view]) {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  min-width: 18.125rem;
  outline: none;
  padding: 0 0.75rem 1rem 0.75rem;
  overflow: hidden;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  gap: 0.375rem;
}

[part~=days-row] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

[part~=date-inner] {
  cursor: pointer;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  z-index: 2;
}
[part~=date-inner]:hover, [part~=date-inner]:focus {
  background: hsla(var(--ig-secondary-100), var(--ig-secondary-a));
  color: var(--ig-secondary-100-contrast);
  border-color: hsla(var(--ig-secondary-100), var(--ig-secondary-a));
}

[part~=date-inner][part~=current][part~=selected] {
  -webkit-box-shadow: inset 0 0 0 0.0625rem hsla(var(--ig-surface-500), var(--ig-surface-a)), 0 0 0 0.0625rem hsla(var(--ig-secondary-500), var(--ig-secondary-a));
          box-shadow: inset 0 0 0 0.0625rem hsla(var(--ig-surface-500), var(--ig-surface-a)), 0 0 0 0.0625rem hsla(var(--ig-secondary-500), var(--ig-secondary-a));
}

[part~=current][part~=date-inner] {
  -webkit-box-shadow: inset 0 0 0 0.0625rem hsla(var(--ig-gray-600), var(--ig-gray-a));
          box-shadow: inset 0 0 0 0.0625rem hsla(var(--ig-gray-600), var(--ig-gray-a));
}
[part~=current][part~=date-inner]:hover, [part~=current][part~=date-inner]:focus {
  -webkit-box-shadow: inset 0 0 0 0.0625rem hsla(var(--ig-surface-500), var(--ig-surface-a));
          box-shadow: inset 0 0 0 0.0625rem hsla(var(--ig-surface-500), var(--ig-surface-a));
}

[part~=date],
[part~=week-number],
[part~=label] {
  font-size: var(--ig-subtitle-1-font-size);
  width: 100%;
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  outline: none;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  border-top: 0.0625rem solid transparent;
  border-bottom: 0.0625rem solid transparent;
}

[part=label-inner] {
  -o-text-overflow: ellipsis;
     text-overflow: ellipsis;
  overflow: hidden;
  min-width: 4ch;
  text-align: center;
}

[part~=date-inner],
[part~=week-number-inner] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  border: 0.0625rem solid transparent;
}
[part~=date-inner]:focus,
[part~=week-number-inner]:focus {
  outline: none;
}

[part~=date][part~=range] {
  background: hsla(var(--ig-secondary-50), var(--ig-secondary-a));
}

[part~=date][part~=range][part~=preview] {
  background: transparent;
  border-top: 0.0625rem dashed hsla(var(--ig-gray-300), var(--ig-gray-a));
  border-bottom: 0.0625rem dashed hsla(var(--ig-gray-300), var(--ig-gray-a));
}

[part~=date][part~=range][part~=preview][part~=first],
[part~=date][part~=range][part~=preview][part~=last] {
  background: transparent;
  border-top-color: transparent;
  border-bottom-color: transparent;
}
[part~=date][part~=range][part~=preview][part~=first]::after,
[part~=date][part~=range][part~=preview][part~=last]::after {
  border-top: 0.0625rem dashed hsla(var(--ig-gray-300), var(--ig-gray-a));
  border-bottom: 0.0625rem dashed hsla(var(--ig-gray-300), var(--ig-gray-a));
  background: transparent;
}

[part~=date][part~=range][part~=first],
[part~=date][part~=range][part~=last] {
  background: transparent;
}
[part~=date][part~=range][part~=first]::after,
[part~=date][part~=range][part~=last]::after {
  content: "";
  position: absolute;
  height: 100%;
  width: calc(50% + 0.0625rem);
  background: hsla(var(--ig-secondary-50), var(--ig-secondary-a));
  border-top: 0.0625rem solid hsla(var(--ig-secondary-50), var(--ig-secondary-a));
  border-bottom: 0.0625rem solid hsla(var(--ig-secondary-50), var(--ig-secondary-a));
  z-index: 1;
}

[part~=date][part~=range][part~=first]::after {
  inset-inline-start: 50%;
}

[part~=date][part~=range][part~=last]::after {
  inset-inline-end: calc(50% - 0.0625rem);
}

[part~=date][part~=range] + [part~=date][part~=range][part~=last]::after {
  inset-inline-end: 50%;
}

[part~=date-inner][part~=inactive],
[part~=date-inner][part~=label],
[part~=date-inner][part~=disabled] {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}

[part~=date-inner][part~=weekend]:hover, [part~=date-inner][part~=weekend]:focus,
[part~=date-inner][part~=inactive]:hover,
[part~=date-inner][part~=inactive]:focus {
  color: var(--ig-secondary-100-contrast);
}

[part~=date-inner][part~=selected][part~=range][part~=first],
[part~=date-inner][part~=selected][part~=range][part~=last],
[part~=date-inner][part~=selected][part~=range][part~=weekend][part~=first],
[part~=date-inner][part~=selected][part~=range][part~=weekend][part~=last],
[part~=date-inner][part~=selected][part~=range][part~=inactive][part~=first],
[part~=date-inner][part~=selected][part~=range][part~=inactive][part~=last] {
  color: var(--ig-secondary-700-contrast);
}

[part~=date-inner][part~=selected][part~=range][part~=weekend],
[part~=date-inner][part~=selected][part~=range][part~=inactive],
[part~=date-inner][part~=selected][part~=range] {
  color: var(--ig-secondary-50-contrast);
}
[part~=date-inner][part~=selected][part~=range][part~=weekend]:hover, [part~=date-inner][part~=selected][part~=range][part~=weekend]:focus,
[part~=date-inner][part~=selected][part~=range][part~=inactive]:hover,
[part~=date-inner][part~=selected][part~=range][part~=inactive]:focus,
[part~=date-inner][part~=selected][part~=range]:hover,
[part~=date-inner][part~=selected][part~=range]:focus {
  color: var(--ig-secondary-100-contrast);
  background: hsla(var(--ig-secondary-100), var(--ig-secondary-a));
  border-color: hsla(var(--ig-secondary-100), var(--ig-secondary-a));
}

[part~=date-inner][part~=selected][part~=range][part~=first],
[part~=date-inner][part~=selected][part~=range][part~=last],
[part~=date-inner][part~=selected]:not([part~=range]) {
  background: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
  border-color: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
}
[part~=date-inner][part~=selected][part~=range][part~=first]:hover, [part~=date-inner][part~=selected][part~=range][part~=first]:focus,
[part~=date-inner][part~=selected][part~=range][part~=last]:hover,
[part~=date-inner][part~=selected][part~=range][part~=last]:focus,
[part~=date-inner][part~=selected]:not([part~=range]):hover,
[part~=date-inner][part~=selected]:not([part~=range]):focus {
  background: hsla(var(--ig-secondary-700), var(--ig-secondary-a));
  border-color: hsla(var(--ig-secondary-700), var(--ig-secondary-a));
  color: var(--ig-secondary-700-contrast);
}

[part~=date-inner][part~=selected][part~=weekend]:not([part~=range]),
[part~=date-inner][part~=selected][part~=inactive]:not([part~=range]),
[part~=date-inner][part~=selected]:not([part~=range]) {
  color: var(--ig-secondary-700-contrast);
}

[part~=week-number] {
  -webkit-box-ordinal-group: 1;
      -ms-flex-order: 0;
          order: 0;
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
  cursor: default;
}

[part="week-number-inner first"] {
  border-top-left-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.25rem), 0.25rem);
  border-top-right-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.25rem), 0.25rem);
}
[part="week-number-inner first"]::after {
  display: none;
}

[part="week-number-inner last"] {
  border-bottom-left-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.25rem), 0.25rem);
  border-bottom-right-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.25rem), 0.25rem);
}

[part~=week-number-inner] {
  position: relative;
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
  border-inline-end-color: hsla(var(--ig-gray-200), var(--ig-gray-a));
}
[part~=week-number-inner]::after {
  content: "";
  position: absolute;
  bottom: 100%;
  height: calc(0.375rem + (0.0625rem * 2 + 2px));
  width: 100%;
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
  -webkit-border-start: 0.0625rem solid hsla(var(--ig-gray-200), var(--ig-gray-a));
          border-inline-start: 0.0625rem solid hsla(var(--ig-gray-200), var(--ig-gray-a));
  -webkit-border-end: 0.0625rem solid hsla(var(--ig-gray-200), var(--ig-gray-a));
          border-inline-end: 0.0625rem solid hsla(var(--ig-gray-200), var(--ig-gray-a));
}

[part~=date-inner][part~=disabled] {
  pointer-events: none;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  cursor: not-allowed;
}

[part~=date-inner][part~=special][part~=range],
[part~=date-inner][part~=special] {
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
  border-color: hsla(var(--ig-gray-100), var(--ig-gray-a));
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
  font-weight: 900;
}
[part~=date-inner][part~=special][part~=range]:hover, [part~=date-inner][part~=special][part~=range]:focus,
[part~=date-inner][part~=special]:hover,
[part~=date-inner][part~=special]:focus {
  background: hsla(var(--ig-secondary-100), var(--ig-secondary-a));
  border-color: hsla(var(--ig-secondary-100), var(--ig-secondary-a));
}

[part~=hidden] {
  visibility: hidden;
}`,qe=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
[part~=date-inner]:focus, [part~=date-inner]:hover {
  background: hsla(var(--ig-gray-300), var(--ig-gray-a));
  border-color: hsla(var(--ig-gray-300), var(--ig-gray-a));
  color: var(--date-color-hover, var(--ig-gray-300-contrast));
}

[part~=date-inner][part~=weekend]:focus, [part~=date-inner][part~=weekend]:hover,
[part~=date-inner][part~=inactive]:focus,
[part~=date-inner][part~=inactive]:hover,
[part~=date-inner][part~=selected][part~=single]:focus,
[part~=date-inner][part~=selected][part~=single]:hover {
  background: hsla(var(--ig-gray-300), var(--ig-gray-a));
  border-color: hsla(var(--ig-gray-700), var(--ig-gray-a));
  color: var(--date-color-hover, var(--ig-gray-300-contrast));
}

[part~=current][part~=date-inner][part~=current],
[part~=current][part~=date-inner],
[part~=current][part~=single][part~=date-inner] {
  -webkit-box-shadow: none;
          box-shadow: none;
  position: relative;
  overflow: hidden;
  color: var(--date-current-color, var(--ig-secondary-700-contrast));
}
[part~=current][part~=date-inner][part~=current]::after,
[part~=current][part~=date-inner]::after,
[part~=current][part~=single][part~=date-inner]::after {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 1rem), 1rem);
  content: "";
  position: absolute;
  top: 0.0625rem;
  inset-inline-start: 0.0625rem;
  width: calc(100% - 0.125rem);
  height: calc(100% - 0.125rem);
  background: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
  z-index: -1;
}
[part~=current][part~=date-inner][part~=current]:focus, [part~=current][part~=date-inner][part~=current]:hover,
[part~=current][part~=date-inner]:focus,
[part~=current][part~=date-inner]:hover,
[part~=current][part~=single][part~=date-inner]:focus,
[part~=current][part~=single][part~=date-inner]:hover {
  color: var(--date-current-color, var(--ig-secondary-700-contrast));
}
[part~=current][part~=date-inner][part~=current]:focus::after, [part~=current][part~=date-inner][part~=current]:hover::after,
[part~=current][part~=date-inner]:focus::after,
[part~=current][part~=date-inner]:hover::after,
[part~=current][part~=single][part~=date-inner]:focus::after,
[part~=current][part~=single][part~=date-inner]:hover::after {
  background: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
}

[part~=selected][part~=date-inner][part~=single],
[part~=selected][part~=date-inner][part~=single][part~=weekend] {
  border-color: hsla(var(--ig-gray-700), var(--ig-gray-a));
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
  color: var(--ig-gray-200-contrast);
  border-radius: 0;
}

[part~=date-inner][part~=selected][part~=current][part~=single] {
  color: var(--date-current-color, var(--ig-secondary-700-contrast));
}

[part~=week-number-inner] {
  border-inline-end-color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}
[part~=week-number-inner]::after {
  border-inline-end-color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}

[part="week-number-inner last"],
[part="week-number-inner first"] {
  border-radius: 0;
}

[part~=date-inner][part~=selected][part~=range][part~=first],
[part~=date-inner][part~=selected][part~=range][part~=last],
[part~=date-inner][part~=selected]:not([part~=range]) {
  border-top-color: hsla(var(--ig-gray-700), var(--ig-gray-a));
  border-bottom-color: hsla(var(--ig-gray-700), var(--ig-gray-a));
  border-inline-start-color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}
[part~=date-inner][part~=selected][part~=range][part~=first]:hover, [part~=date-inner][part~=selected][part~=range][part~=first]:focus,
[part~=date-inner][part~=selected][part~=range][part~=last]:hover,
[part~=date-inner][part~=selected][part~=range][part~=last]:focus,
[part~=date-inner][part~=selected]:not([part~=range]):hover,
[part~=date-inner][part~=selected]:not([part~=range]):focus {
  border-color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}
[part~=date-inner][part~=selected][part~=range][part~=first]:hover,
[part~=date-inner][part~=selected][part~=range][part~=last]:hover,
[part~=date-inner][part~=selected]:not([part~=range]):hover {
  background: hsla(var(--ig-gray-300), var(--ig-gray-a));
}
[part~=date-inner][part~=selected][part~=range][part~=first]:focus,
[part~=date-inner][part~=selected][part~=range][part~=last]:focus,
[part~=date-inner][part~=selected]:not([part~=range]):focus {
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
}

[part~=date-inner][part~=selected][part~=range][part~=last] {
  border-inline-start-color: transparent;
  -webkit-border-end: 0;
          border-inline-end: 0;
}

[part~=date-inner][part~=selected][part~=range][part~=first] {
  border-inline-end-color: transparent;
  -webkit-border-start: 0;
          border-inline-start: 0;
}

[part~=date-inner][part~=selected][part~=range][part~=weekend],
[part~=date-inner][part~=selected][part~=range][part~=inactive] {
  color: var(--ig-gray-200-contrast);
}
[part~=date-inner][part~=selected][part~=range][part~=weekend]:hover, [part~=date-inner][part~=selected][part~=range][part~=weekend]:focus,
[part~=date-inner][part~=selected][part~=range][part~=inactive]:hover,
[part~=date-inner][part~=selected][part~=range][part~=inactive]:focus {
  color: var(--ig-gray-300-contrast);
  background: hsla(var(--ig-gray-300), var(--ig-gray-a));
  border-color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}

[part~=date-inner][part~=last][part~=range] {
  border-color: transparent;
}

[part~=date-inner][part~=selected][part~=range] {
  border-top: 0;
  border-bottom: 0;
  color: var(--ig-gray-200-contrast);
}
[part~=date-inner][part~=selected][part~=range]:hover {
  color: var(--date-color-hover, var(--ig-gray-300-contrast));
  background: hsla(var(--ig-gray-300), var(--ig-gray-a));
  border-color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}
[part~=date-inner][part~=selected][part~=range]:focus {
  color: var(--date-color-hover, var(--ig-gray-300-contrast));
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
  border-color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}

[part~=date-inner][part~=selected][part~=range][part~=preview]:focus {
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
  border-color: hsla(var(--ig-gray-200), var(--ig-gray-a));
}

[part~=date][part~=selected][part~=range] {
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
  border-top-color: hsla(var(--ig-gray-700), var(--ig-gray-a));
  border-bottom-color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}

[part~=date][part~=first][part~=selected][part~=range],
[part~=date][part~=last][part~=selected][part~=range] {
  background: transparent;
  border-color: transparent;
}
[part~=date][part~=first][part~=selected][part~=range]::after,
[part~=date][part~=last][part~=selected][part~=range]::after {
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
  border-top-color: hsla(var(--ig-gray-700), var(--ig-gray-a));
  border-bottom-color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}
[part~=date][part~=first][part~=selected][part~=range]::before,
[part~=date][part~=last][part~=selected][part~=range]::before {
  content: "";
  position: absolute;
  top: -0.0625rem;
  width: var(--size);
  height: 100%;
  border: 0.0625rem solid hsla(var(--ig-gray-700), var(--ig-gray-a));
  z-index: 3;
  pointer-events: none;
}

[part~=date][part~=first][part~=selected][part~=range]::before {
  border-inline-end-color: transparent;
}

[part~=date][part~=last][part~=selected][part~=range]::before {
  border-inline-start-color: transparent;
}

:host(igc-calendar[size=large]) igc-days-view::part(date first selected range)::before {
  margin: 0;
  inset-inline-start: calc(50% - 1rem);
}
:host(igc-calendar[size=large]) igc-days-view::part(date last selected range)::before {
  inset-inline-end: calc(50% - 1rem);
}

:host(igc-calendar[size=medium]) igc-days-view::part(date first selected range)::before {
  inset-inline-start: calc(50% - 0.875rem);
}
:host(igc-calendar[size=medium]) igc-days-view::part(date last selected range)::before {
  inset-inline-end: calc(50% - 0.875rem);
}

:host(igc-calendar[size=small]) igc-days-view::part(date first selected range)::before {
  inset-inline-start: calc(50% - 0.75rem);
}
:host(igc-calendar[size=small]) igc-days-view::part(date last selected range)::before {
  inset-inline-end: calc(50% - 0.75rem);
}

[part~=date][part~=first][part~=last][part~=selected][part~=range]::before {
  border-color: hsla(var(--ig-gray-200), var(--ig-gray-a));
  border-inline-end-color: transparent;
}

[part~=date-inner][part~=selected][part~=current][part~=range],
[part~=date-inner][part~=first][part~=last][part~=selected][part~=current][part~=range],
[part~=date-inner][part~=first][part~=last][part~=selected][part~=current],
[part~=date-inner][part~=first][part~=selected][part~=current][part~=range],
[part~=date-inner][part~=last][part~=selected][part~=current][part~=range] {
  color: var(--date-current-color, var(--ig-secondary-700-contrast)) !important;
}
[part~=date-inner][part~=selected][part~=current][part~=range]:focus, [part~=date-inner][part~=selected][part~=current][part~=range]:hover,
[part~=date-inner][part~=first][part~=last][part~=selected][part~=current][part~=range]:focus,
[part~=date-inner][part~=first][part~=last][part~=selected][part~=current][part~=range]:hover,
[part~=date-inner][part~=first][part~=last][part~=selected][part~=current]:focus,
[part~=date-inner][part~=first][part~=last][part~=selected][part~=current]:hover,
[part~=date-inner][part~=first][part~=selected][part~=current][part~=range]:focus,
[part~=date-inner][part~=first][part~=selected][part~=current][part~=range]:hover,
[part~=date-inner][part~=last][part~=selected][part~=current][part~=range]:focus,
[part~=date-inner][part~=last][part~=selected][part~=current][part~=range]:hover {
  border-color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}

[part~=date-inner][part~=first][part~=range][part~=preview],
[part~=date-inner][part~=first][part~=selected][part~=range][part~=preview] {
  border-top-color: hsla(var(--ig-gray-200), var(--ig-gray-a));
  border-bottom-color: hsla(var(--ig-gray-200), var(--ig-gray-a));
  border-inline-start-color: hsla(var(--ig-gray-200), var(--ig-gray-a));
  border-inline-end-color: transparent;
  background: transparent;
}

[part~=date-inner][part~=last][part~=range][part~=preview],
[part~=date-inner][part~=last][part~=selected][part~=range][part~=preview] {
  border-top-color: hsla(var(--ig-gray-200), var(--ig-gray-a));
  border-bottom-color: hsla(var(--ig-gray-200), var(--ig-gray-a));
  border-inline-end-color: hsla(var(--ig-gray-200), var(--ig-gray-a));
  border-inline-start-color: transparent;
  background: transparent;
}

[part~=date][part~=range][part~=preview] {
  border-top-style: solid;
  border-bottom-style: solid;
  border-top-color: hsla(var(--ig-gray-200), var(--ig-gray-a));
  border-bottom-color: hsla(var(--ig-gray-200), var(--ig-gray-a));
}
[part~=date][part~=range][part~=preview]::after {
  border-top-style: solid;
  border-bottom-style: solid;
  border-top-color: hsla(var(--ig-gray-200), var(--ig-gray-a));
  border-bottom-color: hsla(var(--ig-gray-200), var(--ig-gray-a));
  background: transparent;
}

[part~=date][part~=range][part~=preview][part~=first],
[part~=date][part~=range][part~=preview][part~=last] {
  border-top-color: transparent;
  border-bottom-color: transparent;
}
[part~=date][part~=range][part~=preview][part~=first]::after,
[part~=date][part~=range][part~=preview][part~=last]::after {
  border-top-style: solid;
  border-bottom-style: solid;
  border-top-color: hsla(var(--ig-gray-200), var(--ig-gray-a));
  border-bottom-color: hsla(var(--ig-gray-200), var(--ig-gray-a));
}

[part~=date][part~=first][part~=selected][part~=range][part~=preview],
[part~=date][part~=last][part~=selected][part~=range][part~=preview] {
  background: transparent;
}
[part~=date][part~=first][part~=selected][part~=range][part~=preview]::before,
[part~=date][part~=last][part~=selected][part~=range][part~=preview]::before {
  border-block-start-color: hsla(var(--ig-gray-200), var(--ig-gray-a));
  border-block-end-color: hsla(var(--ig-gray-200), var(--ig-gray-a));
}
[part~=date][part~=first][part~=selected][part~=range][part~=preview]::after,
[part~=date][part~=last][part~=selected][part~=range][part~=preview]::after {
  border-style: solid;
  border-top-color: hsla(var(--ig-gray-200), var(--ig-gray-a));
  border-bottom-color: hsla(var(--ig-gray-200), var(--ig-gray-a));
  background: transparent;
}

[part~=date][part~=first][part~=selected][part~=range][part~=preview]::before {
  border-inline-start-color: hsla(var(--ig-gray-200), var(--ig-gray-a));
  border-inline-end-color: transparent;
}
[part~=date][part~=first][part~=selected][part~=range][part~=preview]::after {
  -webkit-border-end: 0;
          border-inline-end: 0;
}

[part~=date][part~=last][part~=selected][part~=range][part~=preview]::before {
  border-inline-end-color: hsla(var(--ig-gray-200), var(--ig-gray-a));
  border-inline-start-color: transparent;
}
[part~=date][part~=last][part~=selected][part~=range][part~=preview]::after {
  -webkit-border-start: 0;
          border-inline-start: 0;
}

[part~=date-inner][part~=first][part~=last][part~=selected] {
  border-color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}

[part~=date-inner][part~=first][part~=last][part~=selected],
[part~=date-inner][part~=first][part~=selected],
[part~=date-inner][part~=last][part~=selected] {
  background: hsla(var(--ig-gray-200), var(--ig-gray-a)) !important;
  color: var(--ig-gray-200-contrast) !important;
}
[part~=date-inner][part~=first][part~=last][part~=selected]:focus,
[part~=date-inner][part~=first][part~=selected]:focus,
[part~=date-inner][part~=last][part~=selected]:focus {
  background: hsla(var(--ig-gray-200), var(--ig-gray-a)) !important;
  color: var(--ig-gray-200-contrast) !important;
}

[part~=date-inner][part~=first][part~=last][part~=selected][part~=current] {
  color: var(--date-current-color, var(--ig-secondary-700-contrast)) !important;
}

[part~=date-inner][part~=first][part~=selected][part~=current][part~=range][part~=preview]:focus,
[part~=date-inner][part~=last][part~=selected][part~=current][part~=range][part~=preview]:focus {
  border-color: transparent;
}`;var We=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n};let Qe=class extends(z(Ve)){formattersChange(){this.initFormatters()}datesChange(){this.dates=this.getCalendarMonth()}constructor(){super(),this.hideLeadingDays=!1,this.hideTrailingDays=!1,this.active=!1,this.weekDayFormat="narrow",this.resourceStrings=ue,this.setAttribute("role","grid"),this.initFormatters()}focusActiveDate(){this.activeDay.focus()}initFormatters(){this.formatterWeekday=new Intl.DateTimeFormat(this.locale,{weekday:this.weekDayFormat}),this.labelFormatter=new Intl.DateTimeFormat(this.locale,{weekday:"long",year:"numeric",month:"long",day:"numeric"})}generateWeekHeader(){const e=[],t=this.calendarModel.monthdatescalendar(this.activeDate.getFullYear(),this.activeDate.getMonth())[0];for(const a of t)e.push({label:this.formatterWeekday.format(a.date),ariaLabel:a.date.toLocaleString(this.locale,{weekday:"long"})});return e}getCalendarMonth(){return this.calendarModel.monthdatescalendar(this.activeDate.getFullYear(),this.activeDate.getMonth(),!0)}titleCase(e){return e.charAt(0).toUpperCase()+e.slice(1)}getWeekNumber(e){return this.calendarModel.getWeekNumber(e)}formattedDate(e){return`${e.getDate()}`}get isSingleSelection(){return"range"!==this.selection}isLastInRange(e){if(this.isSingleSelection||!this.values||0===this.values.length)return!1;const t=this.values;let a=t[t.length-1];return this.rangePreviewDate&&this.rangePreviewDate>a&&(a=this.rangePreviewDate),Ee(a,e.date)}isFirstInRange(e){if(this.isSingleSelection||!this.values||0===this.values.length)return!1;let t=this.values[0];return this.rangePreviewDate&&this.rangePreviewDate<t&&(t=this.rangePreviewDate),Ee(t,e.date)}isDisabled(e){return!!this.disabledDates&&ze(e,this.disabledDates)}isWithinRange(e,t,a){return ze(e,[{type:fe.Between,dateRange:[t,a]}])}isRangeDate(e){if("range"!==this.selection||!this.values||0===this.values.length)return!1;const t=this.values,a=t[0];let i;if(1===t.length){if(!this.rangePreviewDate)return!1;i=this.rangePreviewDate}else i=t[t.length-1];return ze(e,[{type:fe.Between,dateRange:[a,i]}])}isRangePreview(e){return!!("range"===this.selection&&this.values&&this.values.length>0&&this.rangePreviewDate)&&ze(e,[{type:fe.Between,dateRange:[this.values[0],this.rangePreviewDate]}])}isSelected(e){if(this.isDisabled(e.date))return!1;if("single"===this.selection)return!!this.value&&Me(this.value).getTime()===e.date.getTime();if(!this.values||0===this.values.length)return!1;if("range"===this.selection&&1===this.values.length)return Me(this.values[0]).getTime()===e.date.getTime();if("multiple"===this.selection){const t=Me(this.values[0]),a=Me(this.values[this.values.length-1]);return!!this.isWithinRange(e.date,t,a)&&!!this.values.find((t=>t.getTime()===e.date.getTime()))}return this.isWithinRange(e.date,this.values[0],this.values[this.values.length-1])}isToday(e){const t=new Date(Date.now()),a=e.date;return a.getFullYear()===t.getFullYear()&&a.getMonth()===t.getMonth()&&a.getDate()===t.getDate()}isWeekend(e){const t=e.date.getDay();return 0===t||6===t}isSpecial(e){return null!==this.specialDates&&ze(e.date,this.specialDates)}dateClicked(e,t){e.stopPropagation(),this.selectDay(t),this.changeActiveDate(t)}selectDay(e){this.rangePreviewDate&&this.setRangePreviewDate(void 0),this.selectDate(e.date)&&this.emitEvent("igcChange",{detail:e.date})}selectDate(e){var t;if(this.isDisabled(e))return!1;switch(this.selection){case"single":if((null===(t=this.value)||void 0===t?void 0:t.getTime())===e.getTime())return!1;this.selectSingle(e);break;case"multiple":this.selectMultiple(e);break;case"range":this.selectRange(e)}return!0}generateDateRange(e,t){const a=[];for(e=Me(e),t=Me(t);e.getTime()<t.getTime();)e=this.calendarModel.timedelta(e,we.Day,1),a.push(e);return a}selectRange(e){var t;let a,i,r=null!==(t=this.values)&&void 0!==t?t:[];if(1!==r.length)r=[e];else{if(r[0].getTime()===e.getTime())return void(this.values=[]);r.push(e),r.sort(((e,t)=>e.valueOf()-t.valueOf())),a=r.shift(),i=r.pop(),r=[a,...this.generateDateRange(a,i)]}r=r.filter((e=>!this.isDisabled(e))),this.values=[...r]}selectSingle(e){this.value=Me(e)}selectMultiple(e){var t;let a=null!==(t=this.values)&&void 0!==t?t:[];const i=Me(e),r=[];a.every((e=>e.getTime()!==i.getTime()))?r.push(i):a=a.filter((e=>e.getTime()!==i.getTime())),r.length>0&&(a=a.concat(r)),a=a.filter((e=>!this.isDisabled(e))),a.sort(((e,t)=>e.valueOf()-t.valueOf())),this.values=[...a]}changeActiveDate(e){this.activeDate=e.date,this.emitEvent("igcActiveDateChange",{detail:e})}dateKeyDown(e,t){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this.selectDay(t))}changeRangePreview(e){"range"===this.selection&&this.values&&1===this.values.length&&!Ee(this.values[0],e)&&this.setRangePreviewDate(e)}clearRangePreview(){this.rangePreviewDate&&this.setRangePreviewDate(void 0)}setRangePreviewDate(e){this.rangePreviewDate=e,this.emitEvent("igcRangePreviewDateChange",{detail:e})}resolveDayItemPartName(e){const t=e.isNextMonth||e.isPrevMonth,a=this.hideLeadingDays&&e.isPrevMonth||this.hideTrailingDays&&e.isNextMonth,i=this.isDisabled(e.date);return{date:!0,first:this.isFirstInRange(e),last:this.isLastInRange(e),selected:!i&&this.isSelected(e),inactive:t,hidden:a,current:this.isToday(e),weekend:this.isWeekend(e),range:"range"===this.selection&&this.isRangeDate(e.date),special:this.isSpecial(e),disabled:a||i,single:"range"!==this.selection,preview:this.isRangePreview(e.date)}}renderWeekHeaders(){return i.dy`<div role="row" part="days-row first">
      ${this.showWeekNumbers?i.dy`<span role="columnheader" part="label week-number first">
            <span part="week-number-inner first"
              >${this.resourceStrings.weekLabel}</span
            >
          </span>`:""}
      ${this.generateWeekHeader().map((e=>i.dy`<span
          role="columnheader"
          part="label"
          aria-label=${e.ariaLabel}
        >
          <span part="label-inner">${this.titleCase(e.label)}</span>
        </span> `))}
    </div>`}renderDates(){return this.dates.map(((e,t)=>{const a=t===this.dates.length-1;return i.dy`<div role="row" part="days-row">
        ${this.showWeekNumbers?i.dy`<span
              role="rowheader"
              part=${$({"week-number":!0,last:a})}
            >
              <span part=${$({"week-number-inner":!0,last:a})}
                >${this.getWeekNumber(e[0].date)}</span
              >
            </span>`:""}
        ${e.map((e=>this.renderDateItem(e)))}
      </div>`}))}dayLabelFormatter(e){return this.rangePreviewDate&&Pe(this.rangePreviewDate,e.date)?this.labelFormatter.formatRange(this.values.at(0),this.rangePreviewDate):this.isFirstInRange(e)||this.isLastInRange(e)?this.labelFormatter.formatRange(this.values.at(0),this.values.at(-1)):this.labelFormatter.format(e.date)}renderDateItem(e){const t=$(this.resolveDayItemPartName(e)),a=t.replace("date","date-inner");return i.dy`<span part=${t}>
      <span
        part=${a}
        role="gridcell"
        aria-label=${this.dayLabelFormatter(e)}
        aria-selected=${this.isSelected(e)}
        aria-disabled=${this.isDisabled(e.date)}
        tabindex=${this.active&&Pe(this.activeDate,e.date)?0:-1}
        @click=${t=>this.dateClicked(t,e)}
        @focus=${()=>this.changeRangePreview(e.date)}
        @blur=${()=>this.clearRangePreview()}
        @keydown=${t=>this.dateKeyDown(t,e)}
        @mouseenter=${()=>this.changeRangePreview(e.date)}
        @mouseleave=${()=>this.clearRangePreview()}
        >${this.formattedDate(e.date)}</span
      >
    </span>`}render(){return i.dy`${this.renderWeekHeaders()} ${this.renderDates()}`}};Qe.tagName="igc-days-view",Qe.styles=Ye,We([(0,r.IO)('[tabindex="0"]')],Qe.prototype,"activeDay",void 0),We([(0,r.Cb)({type:Boolean,attribute:"hide-leading-days"})],Qe.prototype,"hideLeadingDays",void 0),We([(0,r.Cb)({type:Boolean,attribute:"hide-trailing-days"})],Qe.prototype,"hideTrailingDays",void 0),We([(0,r.Cb)({type:Boolean})],Qe.prototype,"active",void 0),We([(0,r.Cb)({attribute:!1})],Qe.prototype,"rangePreviewDate",void 0),We([(0,r.Cb)({attribute:"week-day-format"})],Qe.prototype,"weekDayFormat",void 0),We([(0,r.Cb)({attribute:!1})],Qe.prototype,"resourceStrings",void 0),We([m("weekDayFormat"),m("locale")],Qe.prototype,"formattersChange",null),We([m("weekStart"),m("activeDate")],Qe.prototype,"datesChange",null),Qe=We([_e,xe,b({bootstrap:He,fluent:qe})],Qe);const Ge=Qe;var Ze=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n};let Je=class extends(z(i.oi)){formatChange(){this.initMonthFormatter()}constructor(){super(),this.calendarModel=new De,this.value=new Date,this.locale="en",this.monthFormat="long",this.setAttribute("role","grid"),this.initMonthFormatter()}focusActiveDate(){this.activeMonth.focus()}initMonthFormatter(){this.monthFormatter=new Intl.DateTimeFormat(this.locale,{month:this.monthFormat})}formattedMonth(e){return this.monthFormatter.format(e)}get months(){let e=new Date(this.value.getFullYear(),0,1);const t=[];for(let a=0;a<4;a++){const a=[];for(let t=0;t<3;t++)a.push(e),e=this.calendarModel.timedelta(e,we.Month,1);t.push(a)}return t}resolveMonthPartName(e){const t=new Date;return{month:!0,selected:e.getMonth()===this.value.getMonth(),current:e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()}}selectMonth(e){const t=new Date(e);Te(t,this.value.getDate()),this.value=t,this.emitEvent("igcChange",{detail:this.value})}monthKeyDown(e,t){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this.selectMonth(t))}render(){return i.dy`${this.months.map((e=>i.dy`<div part="months-row" role="row">
        ${e.map((e=>{const t=$(this.resolveMonthPartName(e)),a=t.replace("month","month-inner");return i.dy`<span part=${t}>
            <span
              part=${a}
              role="gridcell"
              aria-label=${e.toLocaleString(this.locale,{month:"long",year:"numeric"})}
              aria-selected=${e.getMonth()===this.value.getMonth()}
              tabindex="${e.getFullYear()===this.value.getFullYear()&&e.getMonth()===this.value.getMonth()?0:-1}"
              @click=${()=>this.selectMonth(e)}
              @keydown=${t=>this.monthKeyDown(t,e)}
            >
              ${this.formattedMonth(e)}
            </span>
          </span>`}))}
      </div>`))}`}};Je.tagName="igc-months-view",Je.styles=Xe,Ze([(0,r.IO)('[tabindex="0"]')],Je.prototype,"activeMonth",void 0),Ze([(0,r.Cb)({attribute:!1})],Je.prototype,"value",void 0),Ze([(0,r.Cb)()],Je.prototype,"locale",void 0),Ze([(0,r.Cb)({attribute:"month-format"})],Je.prototype,"monthFormat",void 0),Ze([m("locale"),m("monthFormat")],Je.prototype,"formatChange",null),Je=Ze([xe,_e,b({bootstrap:je,fluent:Be})],Je);var et=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n};k(U,Ge,Je,Ke);let tt=class extends(p(z(Ve))){formattersChange(){this.initFormatters()}themeAdopted(e){this.themeController=e}willUpdate(){this.theme=this.themeController.theme}constructor(){super(),this.activeDaysViewIndex=0,this.hideOutsideDays=!1,this.hideHeader=!1,this.headerOrientation="horizontal",this.orientation="horizontal",this.visibleMonths=1,this.activeView="days",this.formatOptions={month:"long",weekday:"narrow"},this.resourceStrings=ue,this.handleKeyDown=e=>{const t=e.target.tagName.toLowerCase();if("igc-days-view"===t||"igc-months-view"===t||"igc-years-view"===t)switch(e.key){case"PageDown":e.preventDefault(),e.shiftKey&&"days"===this.activeView?this.nextYear():this.navigateNext(),"days"===this.activeView&&this.focusActiveDate();break;case"PageUp":e.preventDefault(),e.shiftKey&&"days"===this.activeView?this.previousYear():this.navigatePrevious(),"days"===this.activeView&&this.focusActiveDate();break;case"Home":if(e.preventDefault(),"days"===this.activeView){const e=this.daysViews[0].activeDate,t=new Date(e);t.setDate(1),this.activeDate=t,this.activeDaysViewIndex=0}else if("months"===this.activeView){const e=new Date(this.activeDate);e.setMonth(0),this.activeDate=e}else if("years"===this.activeView){const e=Oe(this.activeDate,this.yearPerPage),t=new Date(this.activeDate);t.setDate(1),t.setFullYear(e),Te(t,this.activeDate.getDate()),this.activeDate=t}this.focusActiveDate();break;case"End":if(e.preventDefault(),"days"===this.activeView){const e=this.daysViews.length-1,t=this.daysViews[e].activeDate,a=new Date(t);a.setDate(1),a.setMonth(a.getMonth()+1),a.setDate(0),this.activeDate=a,this.activeDaysViewIndex=e}else if("months"===this.activeView){const e=new Date(this.activeDate);e.setMonth(11),this.activeDate=e}else if("years"===this.activeView){const e=Oe(this.activeDate,this.yearPerPage),t=new Date(this.activeDate);t.setDate(1),t.setFullYear(e+this.yearPerPage-1),Te(t,this.activeDate.getDate()),this.activeDate=t}this.focusActiveDate();break;case"ArrowLeft":if(e.preventDefault(),"days"===this.activeView){const e=this.calendarModel.timedelta(this.activeDate,we.Day,-1);this.visibleMonths>1&&this.daysViews[this.activeDaysViewIndex].activeDate.getMonth()!==e.getMonth()&&(this.activeDaysViewIndex=this.activeDaysViewIndex>0?this.activeDaysViewIndex-1:0),this.activeDate=e}else"months"===this.activeView?this.previousMonth():"years"===this.activeView&&this.previousYear();this.focusActiveDate();break;case"ArrowRight":if(e.preventDefault(),"days"===this.activeView){const e=this.calendarModel.timedelta(this.activeDate,we.Day,1);this.visibleMonths>1&&this.daysViews[this.activeDaysViewIndex].activeDate.getMonth()!==e.getMonth()&&(this.activeDaysViewIndex=this.activeDaysViewIndex===this.visibleMonths-1?this.activeDaysViewIndex:this.activeDaysViewIndex+1),this.activeDate=e}else"months"===this.activeView?this.nextMonth():"years"===this.activeView&&this.nextYear();this.focusActiveDate();break;case"ArrowUp":if(e.preventDefault(),"days"===this.activeView){const e=this.calendarModel.timedelta(this.activeDate,we.Week,-1);this.visibleMonths>1&&this.daysViews[this.activeDaysViewIndex].activeDate.getMonth()!==e.getMonth()&&(this.activeDaysViewIndex=this.activeDaysViewIndex>0?this.activeDaysViewIndex-1:0),this.activeDate=e}else"months"===this.activeView?this.activeDate=this.calendarModel.timedelta(this.activeDate,we.Month,-3):"years"===this.activeView&&(this.activeDate=this.calendarModel.timedelta(this.activeDate,we.Year,-3));this.focusActiveDate();break;case"ArrowDown":if(e.preventDefault(),"days"===this.activeView){const e=this.calendarModel.timedelta(this.activeDate,we.Week,1);this.visibleMonths>1&&this.daysViews[this.activeDaysViewIndex].activeDate.getMonth()!==e.getMonth()&&(this.activeDaysViewIndex=this.activeDaysViewIndex===this.visibleMonths-1?this.activeDaysViewIndex:this.activeDaysViewIndex+1),this.activeDate=e}else"months"===this.activeView?this.activeDate=this.calendarModel.timedelta(this.activeDate,we.Month,3):"years"===this.activeView&&(this.activeDate=this.calendarModel.timedelta(this.activeDate,we.Year,3));this.focusActiveDate()}},this.initFormatters()}get yearPerPage(){return"small"===this.size?18:15}get previousButtonLabel(){return"days"===this.activeView?this.resourceStrings.previousMonth:"months"===this.activeView?this.resourceStrings.previousYear:"years"===this.activeView?this.resourceStrings.previousYears.replace("{0}",this.yearPerPage.toString()):""}get nextButtonLabel(){return"days"===this.activeView?this.resourceStrings.nextMonth:"months"===this.activeView?this.resourceStrings.nextYear:"years"===this.activeView?this.resourceStrings.nextYears.replace("{0}",this.yearPerPage.toString()):""}monthSelectLabel(e){return e.toLocaleString(this.locale,{month:"long"})+", "+this.resourceStrings.selectMonth}yearSelectLabel(e){return e.getFullYear()+", "+this.resourceStrings.selectYear}async focusActiveDate(){await this.updateComplete,"days"===this.activeView?this.daysViews[this.activeDaysViewIndex].focusActiveDate():"months"===this.activeView?this.monthsView.focusActiveDate():"years"===this.activeView&&this.yearsView.focusActiveDate()}initFormatters(){this.formatterMonth=new Intl.DateTimeFormat(this.locale,{month:this.formatOptions.month}),this.formatterWeekday=new Intl.DateTimeFormat(this.locale,{weekday:"short"}),this.formatterMonthDay=new Intl.DateTimeFormat(this.locale,{month:"short",day:"numeric"})}formattedMonth(e){return this.formatterMonth.format(e)}changeValue(e){e.stopPropagation();const t=e.target;let a;"single"===this.selection?(this.value=t.value,a=this.value):(this.values=t.values,a=this.values),this.emitEvent("igcChange",{detail:a})}changeMonth(e){e.stopPropagation(),this.activeDate=e.target.value,this.activeView="days",this.focusActiveDate()}changeYear(e){e.stopPropagation(),this.activeDate=e.target.value,this.activeView="months",this.focusActiveDate()}switchToMonths(e){this.activateDaysView(e),this.activeView="months"}switchToYears(e){"days"===this.activeView&&this.activateDaysView(e),this.activeView="years"}activateDaysView(e){const t=this.daysViews[e];this.activeDate=t.activeDate,this.activeDaysViewIndex=e}activeDateChanged(e){const t=e.detail,a=Array.from(this.daysViews);this.activeDaysViewIndex=a.indexOf(e.target),this.activeDate=t.date,t.isCurrentMonth||this.focusActiveDate()}rangePreviewDateChange(e){this.rangePreviewDate=e.detail}nextMonth(){this.activeDate=this.calendarModel.getNextMonth(this.activeDate)}previousMonth(){this.activeDate=this.calendarModel.getPrevMonth(this.activeDate)}nextYear(){this.activeDate=this.calendarModel.getNextYear(this.activeDate)}previousYear(){this.activeDate=this.calendarModel.getPrevYear(this.activeDate)}nextYearsPage(){this.activeDate=this.calendarModel.timedelta(this.activeDate,we.Year,this.yearPerPage)}previousYearsPage(){this.activeDate=this.calendarModel.timedelta(this.activeDate,we.Year,-this.yearPerPage)}navigateNext(){"days"===this.activeView?this.nextMonth():"months"===this.activeView?this.nextYear():"years"===this.activeView&&this.nextYearsPage()}navigatePrevious(){"days"===this.activeView?this.previousMonth():"months"===this.activeView?this.previousYear():"years"===this.activeView&&this.previousYearsPage()}renderNavigation(e,t=!0,a=0){let r,l;e=null!=e?e:this.activeDate;const n="fluent"===this.theme?"arrow_upward":"navigate_before",s="fluent"===this.theme?"arrow_downward":"navigate_next";return"years"===this.activeView&&(r=Oe(e,this.yearPerPage),l=r+this.yearPerPage-1),i.dy`<div part="navigation">
      <div>
        ${"days"===this.activeView?i.dy`<button
              part="months-navigation"
              aria-label=${this.monthSelectLabel(e)}
              @click=${()=>this.switchToMonths(a)}
            >
              ${this.formattedMonth(e)}
            </button>`:""}
        ${"days"===this.activeView||"months"===this.activeView?i.dy`<span class="aria-off-screen" aria-live="polite">
                ${"days"===this.activeView?e.toLocaleString(this.locale,{month:"long",year:"numeric"}):e.getFullYear()}
              </span>
              <button
                part="years-navigation"
                aria-label=${this.yearSelectLabel(e)}
                @click=${()=>this.switchToYears(a)}
              >
                ${e.getFullYear()}
              </button>`:""}
        ${"years"===this.activeView?i.dy`<span part="years-range" aria-live="polite"
              >${`${r} - ${l}`}</span
            >`:""}
      </div>
      ${t?i.dy`<div part="navigation-buttons">
            <button
              part=${$({"navigation-button":!0,vertical:"vertical"===this.orientation})}
              aria-label=${this.previousButtonLabel}
              @click=${this.navigatePrevious}
            >
              <igc-icon
                aria-hidden="true"
                name=${n}
                collection="internal"
              ></igc-icon>
            </button>
            <button
              part=${$({"navigation-button":!0,vertical:"vertical"===this.orientation})}
              aria-label=${this.nextButtonLabel}
              @click=${this.navigateNext}
            >
              <igc-icon
                aria-hidden="true"
                name=${s}
                collection="internal"
              ></igc-icon>
            </button>
          </div>`:""}
    </div>`}renderHeader(){return this.hideHeader||"multiple"===this.selection?"":i.dy`<div part="header">
      <h5 part="header-title">
        <slot name="title"
          >${"single"===this.selection?this.resourceStrings.selectDate:this.resourceStrings.selectRange}</slot
        >
      </h5>
      <h2 part="header-date">${this.renderHeaderDate()}</h2>
    </div>`}renderHeaderDate(){if("single"===this.selection){const e=this.value;return i.dy`${e?i.dy`${this.formatterWeekday.format(e)},${"vertical"===this.headerOrientation?i.dy`<br />`:" "}${this.formatterMonthDay.format(e)}`:this.resourceStrings.selectedDate}`}const e=this.values;return i.dy`<span
        >${e&&e.length?this.formatterMonthDay.format(e[0]):this.resourceStrings.startDate}</span
      >
      <span> - </span>
      <span
        >${e&&e.length>1?this.formatterMonthDay.format(e[e.length-1]):this.resourceStrings.endDate}</span
      >`}render(){const e=[],t=this.visibleMonths>1?this.visibleMonths:1;for(let a=0;a<t;a++)e.push(this.calendarModel.timedelta(this.activeDate,we.Month,a-this.activeDaysViewIndex));return i.dy`
      ${this.renderHeader()}
      <div
        part="content"
        style=${(0,ye.V)({display:"flex",flexGrow:"1",flexDirection:"days"===this.activeView&&"horizontal"===this.orientation?"row":"column"})}
        @keydown=${this.handleKeyDown}
      >
        ${"days"===this.activeView?e.map(((t,a)=>i.dy`<div part="days-view-container">
                ${this.renderNavigation(t,"horizontal"===this.orientation?a===e.length-1:0===a,a)}
                <igc-days-view
                  part="days-view"
                  .active=${this.activeDaysViewIndex===a}
                  .activeDate=${t}
                  .weekStart=${this.weekStart}
                  .weekDayFormat=${this.formatOptions.weekday}
                  .locale=${this.locale}
                  .selection=${this.selection}
                  .value=${this.value}
                  .values=${this.values}
                  .hideLeadingDays=${this.hideOutsideDays||0!==a}
                  .hideTrailingDays=${this.hideOutsideDays||a!==e.length-1}
                  .showWeekNumbers=${this.showWeekNumbers}
                  .disabledDates=${this.disabledDates}
                  .specialDates=${this.specialDates}
                  .rangePreviewDate=${this.rangePreviewDate}
                  .resourceStrings=${this.resourceStrings}
                  exportparts="days-row, label, date-inner, week-number-inner, week-number, date, first, last, selected, inactive, hidden, current, weekend, range, special, disabled, single, preview"
                  @igcChange=${this.changeValue}
                  @igcActiveDateChange=${this.activeDateChanged}
                  @igcRangePreviewDateChange=${this.rangePreviewDateChange}
                ></igc-days-view>
              </div>`)):""}
        ${"months"===this.activeView?i.dy` ${this.renderNavigation()}
              <igc-months-view
                part="months-view"
                .value=${this.activeDate}
                .locale=${this.locale}
                .monthFormat=${this.formatOptions.month}
                exportparts="month, selected, month-inner, current"
                @igcChange=${this.changeMonth}
              ></igc-months-view>`:""}
        ${"years"===this.activeView?i.dy`${this.renderNavigation()}
              <igc-years-view
                part="years-view"
                .value=${this.activeDate}
                .yearsPerPage=${this.yearPerPage}
                exportparts="year, selected, year-inner, current"
                @igcChange=${this.changeYear}
              ></igc-years-view>`:""}
      </div>
    `}};tt.styles=Re,tt.tagName="igc-calendar",et([(0,r.SB)()],tt.prototype,"rangePreviewDate",void 0),et([(0,r.SB)()],tt.prototype,"activeDaysViewIndex",void 0),et([(0,r.Kt)("igc-days-view")],tt.prototype,"daysViews",void 0),et([(0,r.IO)("igc-months-view")],tt.prototype,"monthsView",void 0),et([(0,r.IO)("igc-years-view")],tt.prototype,"yearsView",void 0),et([(0,r.Cb)({type:Boolean,attribute:"hide-outside-days"})],tt.prototype,"hideOutsideDays",void 0),et([(0,r.Cb)({type:Boolean,attribute:"hide-header"})],tt.prototype,"hideHeader",void 0),et([(0,r.Cb)({attribute:"header-orientation",reflect:!0})],tt.prototype,"headerOrientation",void 0),et([(0,r.Cb)()],tt.prototype,"orientation",void 0),et([(0,r.Cb)({type:Number,attribute:"visible-months"})],tt.prototype,"visibleMonths",void 0),et([(0,r.Cb)({attribute:"active-view"})],tt.prototype,"activeView",void 0),et([(0,r.Cb)({attribute:!1})],tt.prototype,"formatOptions",void 0),et([(0,r.Cb)({attribute:!1})],tt.prototype,"resourceStrings",void 0),et([m("formatOptions"),m("locale")],tt.prototype,"formattersChange",null),tt=et([b({bootstrap:Le,fluent:Fe})],tt);const at=tt,it=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.25rem), 0.25rem);
}

:host([elevated]),
:host([elevated]:hover),
:host([elevated]:focus-within) {
  -webkit-box-shadow: var(--ig-elevation-2);
          box-shadow: var(--ig-elevation-2);
}`,rt=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  border: 0.0625rem solid hsla(var(--ig-gray-100), var(--ig-gray-a));
  border-radius: 0;
}

:host([elevated]:hover)::after,
:host([elevated]:focus-within)::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  -webkit-transition: -webkit-box-shadow 0.1s ease-out;
  transition: -webkit-box-shadow 0.1s ease-out;
  -o-transition: box-shadow 0.1s ease-out;
  transition: box-shadow 0.1s ease-out;
  transition: box-shadow 0.1s ease-out, -webkit-box-shadow 0.1s ease-out;
  -webkit-box-shadow: inset 0 0 0 0.125rem hsla(var(--ig-gray-300), var(--ig-gray-a));
          box-shadow: inset 0 0 0 0.125rem hsla(var(--ig-gray-300), var(--ig-gray-a));
  pointer-events: none;
}`,lt=i.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.1875rem), 0.1875rem);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  border: 0.0625rem solid hsla(var(--ig-gray-400), var(--ig-gray-a));
  overflow: hidden;
  background: hsla(var(--ig-surface-500), var(--ig-surface-a));
  font-family: var(--ig-font-family);
}

:host([elevated]) {
  border: none;
  -webkit-box-shadow: var(--ig-elevation-4);
          box-shadow: var(--ig-elevation-4);
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
  -webkit-transition: -webkit-box-shadow 0.1s ease-out;
  transition: -webkit-box-shadow 0.1s ease-out;
  -o-transition: box-shadow 0.1s ease-out;
  transition: box-shadow 0.1s ease-out;
  transition: box-shadow 0.1s ease-out, -webkit-box-shadow 0.1s ease-out;
}

:host([elevated]:hover),
:host([elevated]:focus-within) {
  -webkit-box-shadow: var(--ig-elevation-6);
          box-shadow: var(--ig-elevation-6);
}`,nt=i.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-flow: column nowrap;
          flex-flow: column nowrap;
  -webkit-box-align: end;
      -ms-flex-align: end;
          align-items: flex-end;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  padding: 0.5rem;
  -ms-flex-preferred-size: min-content;
      flex-basis: min-content;
}

:host(:not([orientation=vertical])) {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-flow: row wrap;
          flex-flow: row wrap;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
:host(:not([orientation=vertical])) ::slotted(igc-icon-button:not(:first-of-type)),
:host(:not([orientation=vertical])) ::slotted(igc-button:not(:first-of-type)) {
  -webkit-margin-start: 0.5rem;
          margin-inline-start: 0.5rem;
}

::slotted([slot=start]) {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-ordinal-group: 1;
      -ms-flex-order: 0;
          order: 0;
}

::slotted([slot=end]) {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-margin-start: auto;
          margin-inline-start: auto;
  -webkit-box-ordinal-group: 2;
      -ms-flex-order: 1;
          order: 1;
}

::slotted(igc-icon) {
  opacity: 0.6;
}

:host {
  padding: 1rem;
}`,st=i.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-flow: column nowrap;
          flex-flow: column nowrap;
  -webkit-box-align: end;
      -ms-flex-align: end;
          align-items: flex-end;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  padding: 0.5rem;
  -ms-flex-preferred-size: min-content;
      flex-basis: min-content;
}

:host(:not([orientation=vertical])) {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-flow: row wrap;
          flex-flow: row wrap;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
:host(:not([orientation=vertical])) ::slotted(igc-icon-button:not(:first-of-type)),
:host(:not([orientation=vertical])) ::slotted(igc-button:not(:first-of-type)) {
  -webkit-margin-start: 0.5rem;
          margin-inline-start: 0.5rem;
}

::slotted([slot=start]) {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-ordinal-group: 1;
      -ms-flex-order: 0;
          order: 0;
}

::slotted([slot=end]) {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-margin-start: auto;
          margin-inline-start: auto;
  -webkit-box-ordinal-group: 2;
      -ms-flex-order: 1;
          order: 1;
}

::slotted(igc-icon) {
  opacity: 0.6;
}`;var ot=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n};let gt=class extends i.oi{constructor(){super(...arguments),this.orientation="horizontal"}render(){return i.dy`
      <slot name="start"></slot>
      <slot></slot>
      <slot name="end"></slot>
    `}};gt.tagName="igc-card-actions",gt.styles=st,ot([(0,r.Cb)({reflect:!0})],gt.prototype,"orientation",void 0),gt=ot([b({bootstrap:nt})],gt);const dt=gt,ht=i.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  display: block;
  width: 100%;
  -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
          flex: 1 1 auto;
  padding: 1rem;
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}

::slotted(*) {
  font-family: var(--ig-body-2-font-family, var(--ig-font-family));
  font-size: var(--ig-body-2-font-size);
  font-weight: var(--ig-body-2-font-weight);
  font-style: var(--ig-body-2-font-style);
  line-height: var(--ig-body-2-line-height);
  letter-spacing: var(--ig-body-2-letter-spacing);
  text-transform: var(--ig-body-2-text-transform);
  margin-top: var(--ig-body-2-margin-top);
  margin-bottom: var(--ig-body-2-margin-bottom);
  margin: 0;
}

:host {
  font-family: var(--ig-body-1-font-family, var(--ig-font-family));
  font-size: var(--ig-body-1-font-size);
  font-weight: var(--ig-body-1-font-weight);
  font-style: var(--ig-body-1-font-style);
  line-height: var(--ig-body-1-line-height);
  letter-spacing: var(--ig-body-1-letter-spacing);
  text-transform: var(--ig-body-1-text-transform);
  margin-top: var(--ig-body-1-margin-top);
  margin-bottom: var(--ig-body-1-margin-bottom);
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
}

::slotted(*) {
  font-family: var(--ig-body-1-font-family, var(--ig-font-family));
  font-size: var(--ig-body-1-font-size);
  font-weight: var(--ig-body-1-font-weight);
  font-style: var(--ig-body-1-font-style);
  line-height: var(--ig-body-1-line-height);
  letter-spacing: var(--ig-body-1-letter-spacing);
  text-transform: var(--ig-body-1-text-transform);
  margin-top: var(--ig-body-1-margin-top);
  margin-bottom: var(--ig-body-1-margin-bottom);
}`,ct=i.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  display: block;
  width: 100%;
  -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
          flex: 1 1 auto;
  padding: 1rem;
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}

::slotted(*) {
  font-family: var(--ig-body-2-font-family, var(--ig-font-family));
  font-size: var(--ig-body-2-font-size);
  font-weight: var(--ig-body-2-font-weight);
  font-style: var(--ig-body-2-font-style);
  line-height: var(--ig-body-2-line-height);
  letter-spacing: var(--ig-body-2-letter-spacing);
  text-transform: var(--ig-body-2-text-transform);
  margin-top: var(--ig-body-2-margin-top);
  margin-bottom: var(--ig-body-2-margin-bottom);
  margin: 0;
}`;let bt=class extends i.oi{render(){return i.dy` <slot></slot> `}};bt.tagName="igc-card-content",bt.styles=ct,bt=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n}([b({bootstrap:ht})],bt);const mt=bt,pt=i.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-flow: row wrap;
          flex-flow: row wrap;
  -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
          flex: 1 1 auto;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -ms-flex-line-pack: start;
      align-content: flex-start;
  width: 100%;
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
  padding: 1rem;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

::slotted(*) {
  margin: 0;
  font: inherit;
  opacity: inherit;
}

header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-flow: column nowrap;
          flex-flow: column nowrap;
  overflow: hidden;
  -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
          flex: 1 1 auto;
}

::slotted([slot=title]) {
  font-family: var(--ig-h6-font-family, var(--ig-font-family));
  font-size: var(--ig-h6-font-size);
  font-weight: var(--ig-h6-font-weight);
  font-style: var(--ig-h6-font-style);
  line-height: var(--ig-h6-line-height);
  letter-spacing: var(--ig-h6-letter-spacing);
  text-transform: var(--ig-h6-text-transform);
  margin-top: var(--ig-h6-margin-top);
  margin-bottom: var(--ig-h6-margin-bottom);
}

::slotted([slot=subtitle]) {
  font-family: var(--ig-subtitle-2-font-family, var(--ig-font-family));
  font-size: var(--ig-subtitle-2-font-size);
  font-weight: var(--ig-subtitle-2-font-weight);
  font-style: var(--ig-subtitle-2-font-style);
  line-height: var(--ig-subtitle-2-line-height);
  letter-spacing: var(--ig-subtitle-2-letter-spacing);
  text-transform: var(--ig-subtitle-2-text-transform);
  margin-top: var(--ig-subtitle-2-margin-top);
  margin-bottom: var(--ig-subtitle-2-margin-bottom);
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}

::slotted([slot=thumbnail]) {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-item-align: start;
      align-self: flex-start;
  -webkit-margin-end: 1rem;
          margin-inline-end: 1rem;
}

::slotted([slot=title]) {
  font-family: var(--ig-h5-font-family, var(--ig-font-family));
  font-size: var(--ig-h5-font-size);
  font-weight: var(--ig-h5-font-weight);
  font-style: var(--ig-h5-font-style);
  line-height: var(--ig-h5-line-height);
  letter-spacing: var(--ig-h5-letter-spacing);
  text-transform: var(--ig-h5-text-transform);
  margin-top: var(--ig-h5-margin-top);
  margin-bottom: var(--ig-h5-margin-bottom);
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
}

::slotted([slot=subtitle]) {
  font-family: var(--ig-body-1-font-family, var(--ig-font-family));
  font-size: var(--ig-body-1-font-size);
  font-weight: var(--ig-body-1-font-weight);
  font-style: var(--ig-body-1-font-style);
  line-height: var(--ig-body-1-line-height);
  letter-spacing: var(--ig-body-1-letter-spacing);
  text-transform: var(--ig-body-1-text-transform);
  margin-top: var(--ig-body-1-margin-top);
  margin-bottom: var(--ig-body-1-margin-bottom);
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
}`,vt=i.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-flow: row wrap;
          flex-flow: row wrap;
  -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
          flex: 1 1 auto;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -ms-flex-line-pack: start;
      align-content: flex-start;
  width: 100%;
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
  padding: 1rem;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

::slotted(*) {
  margin: 0;
  font: inherit;
  opacity: inherit;
}

header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-flow: column nowrap;
          flex-flow: column nowrap;
  overflow: hidden;
  -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
          flex: 1 1 auto;
}

::slotted([slot=title]) {
  font-family: var(--ig-h6-font-family, var(--ig-font-family));
  font-size: var(--ig-h6-font-size);
  font-weight: var(--ig-h6-font-weight);
  font-style: var(--ig-h6-font-style);
  line-height: var(--ig-h6-line-height);
  letter-spacing: var(--ig-h6-letter-spacing);
  text-transform: var(--ig-h6-text-transform);
  margin-top: var(--ig-h6-margin-top);
  margin-bottom: var(--ig-h6-margin-bottom);
}

::slotted([slot=subtitle]) {
  font-family: var(--ig-subtitle-2-font-family, var(--ig-font-family));
  font-size: var(--ig-subtitle-2-font-size);
  font-weight: var(--ig-subtitle-2-font-weight);
  font-style: var(--ig-subtitle-2-font-style);
  line-height: var(--ig-subtitle-2-line-height);
  letter-spacing: var(--ig-subtitle-2-letter-spacing);
  text-transform: var(--ig-subtitle-2-text-transform);
  margin-top: var(--ig-subtitle-2-margin-top);
  margin-bottom: var(--ig-subtitle-2-margin-bottom);
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}

::slotted([slot=thumbnail]) {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-item-align: start;
      align-self: flex-start;
  -webkit-margin-end: 1rem;
          margin-inline-end: 1rem;
}

::slotted([slot=title]) {
  font-family: var(--ig-subtitle-1-font-family, var(--ig-font-family));
  font-size: var(--ig-subtitle-1-font-size);
  font-weight: var(--ig-subtitle-1-font-weight);
  font-style: var(--ig-subtitle-1-font-style);
  line-height: var(--ig-subtitle-1-line-height);
  letter-spacing: var(--ig-subtitle-1-letter-spacing);
  text-transform: var(--ig-subtitle-1-text-transform);
  margin-top: var(--ig-subtitle-1-margin-top);
  margin-bottom: var(--ig-subtitle-1-margin-bottom);
}

::slotted([slot=subtitle]) {
  font-family: var(--ig-body-2-font-family, var(--ig-font-family));
  font-size: var(--ig-body-2-font-size);
  font-weight: var(--ig-body-2-font-weight);
  font-style: var(--ig-body-2-font-style);
  line-height: var(--ig-body-2-line-height);
  letter-spacing: var(--ig-body-2-letter-spacing);
  text-transform: var(--ig-body-2-text-transform);
  margin-top: var(--ig-body-2-margin-top);
  margin-bottom: var(--ig-body-2-margin-bottom);
}`,yt=i.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-flow: row wrap;
          flex-flow: row wrap;
  -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
          flex: 1 1 auto;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -ms-flex-line-pack: start;
      align-content: flex-start;
  width: 100%;
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
  padding: 1rem;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

::slotted(*) {
  margin: 0;
  font: inherit;
  opacity: inherit;
}

header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-flow: column nowrap;
          flex-flow: column nowrap;
  overflow: hidden;
  -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
          flex: 1 1 auto;
}

::slotted([slot=title]) {
  font-family: var(--ig-h6-font-family, var(--ig-font-family));
  font-size: var(--ig-h6-font-size);
  font-weight: var(--ig-h6-font-weight);
  font-style: var(--ig-h6-font-style);
  line-height: var(--ig-h6-line-height);
  letter-spacing: var(--ig-h6-letter-spacing);
  text-transform: var(--ig-h6-text-transform);
  margin-top: var(--ig-h6-margin-top);
  margin-bottom: var(--ig-h6-margin-bottom);
}

::slotted([slot=subtitle]) {
  font-family: var(--ig-subtitle-2-font-family, var(--ig-font-family));
  font-size: var(--ig-subtitle-2-font-size);
  font-weight: var(--ig-subtitle-2-font-weight);
  font-style: var(--ig-subtitle-2-font-style);
  line-height: var(--ig-subtitle-2-line-height);
  letter-spacing: var(--ig-subtitle-2-letter-spacing);
  text-transform: var(--ig-subtitle-2-text-transform);
  margin-top: var(--ig-subtitle-2-margin-top);
  margin-bottom: var(--ig-subtitle-2-margin-bottom);
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}

::slotted([slot=thumbnail]) {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-item-align: start;
      align-self: flex-start;
  -webkit-margin-end: 1rem;
          margin-inline-end: 1rem;
}

::slotted([slot=title]) {
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
}

::slotted([slot=subtitle]) {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}`,ut=i.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-flow: row wrap;
          flex-flow: row wrap;
  -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
          flex: 1 1 auto;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -ms-flex-line-pack: start;
      align-content: flex-start;
  width: 100%;
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
  padding: 1rem;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

::slotted(*) {
  margin: 0;
  font: inherit;
  opacity: inherit;
}

header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-flow: column nowrap;
          flex-flow: column nowrap;
  overflow: hidden;
  -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
          flex: 1 1 auto;
}

::slotted([slot=title]) {
  font-family: var(--ig-h6-font-family, var(--ig-font-family));
  font-size: var(--ig-h6-font-size);
  font-weight: var(--ig-h6-font-weight);
  font-style: var(--ig-h6-font-style);
  line-height: var(--ig-h6-line-height);
  letter-spacing: var(--ig-h6-letter-spacing);
  text-transform: var(--ig-h6-text-transform);
  margin-top: var(--ig-h6-margin-top);
  margin-bottom: var(--ig-h6-margin-bottom);
}

::slotted([slot=subtitle]) {
  font-family: var(--ig-subtitle-2-font-family, var(--ig-font-family));
  font-size: var(--ig-subtitle-2-font-size);
  font-weight: var(--ig-subtitle-2-font-weight);
  font-style: var(--ig-subtitle-2-font-style);
  line-height: var(--ig-subtitle-2-line-height);
  letter-spacing: var(--ig-subtitle-2-letter-spacing);
  text-transform: var(--ig-subtitle-2-text-transform);
  margin-top: var(--ig-subtitle-2-margin-top);
  margin-bottom: var(--ig-subtitle-2-margin-bottom);
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}

::slotted([slot=thumbnail]) {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-item-align: start;
      align-self: flex-start;
  -webkit-margin-end: 1rem;
          margin-inline-end: 1rem;
}`;let xt=class extends i.oi{render(){return i.dy`
      <section>
        <slot name="thumbnail"></slot>
      </section>
      <section>
        <header part="header">
          <slot part="title" name="title"></slot>
          <slot part="subtitle" name="subtitle"></slot>
        </header>
        <slot></slot>
      </section>
    `}};xt.tagName="igc-card-header",xt.styles=ut,xt=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n}([b({bootstrap:pt,fluent:vt,indigo:yt})],xt);const ft=xt,wt=i.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  overflow: hidden;
}

::slotted(*) {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}`;class kt extends i.oi{render(){return i.dy` <slot></slot> `}}kt.tagName="igc-card-media",kt.styles=wt;var zt=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n};k(dt,mt,ft,kt);let Ct=class extends i.oi{constructor(){super(...arguments),this.elevated=!1}render(){return i.dy` <slot></slot> `}};Ct.tagName="igc-card",Ct.styles=lt,zt([(0,r.Cb)({type:Boolean,reflect:!0})],Ct.prototype,"elevated",void 0),Ct=zt([b({bootstrap:it,fluent:rt})],Ct);const Dt=Ct;var St=a(83770),It=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n};let $t=class extends(z(i.oi)){constructor(){super(...arguments),this.focused=!1,this.hideLabel=!1,this.disabled=!1,this.checked=!1,this.required=!1,this.invalid=!1,this.labelPosition="after"}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}reportValidity(){return this.input.reportValidity()}checkValidity(){return this.input.checkValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.invalid=!this.input.checkValidity()}handleBlur(){this.emitEvent("igcBlur"),this.focused=!1}handleFocus(){this.emitEvent("igcFocus")}handleMouseDown(e){e.preventDefault(),this.input.focus(),this.focused=!1}connectedCallback(){super.connectedCallback(),this.addEventListener("keyup",this.handleKeyUp)}disconnectedCallback(){this.removeEventListener("keyup",this.handleKeyUp),super.disconnectedCallback()}handleKeyUp(){this.focused||(this.focused=!0)}async firstUpdated(){0===this.label.length&&(this.hideLabel=!0),await this.updateComplete}};It([(0,r.IO)('input[type="checkbox"]',!0)],$t.prototype,"input",void 0),It([(0,r.vZ)({flatten:!0})],$t.prototype,"label",void 0),It([(0,r.SB)()],$t.prototype,"focused",void 0),It([(0,r.SB)()],$t.prototype,"hideLabel",void 0),It([(0,r.Cb)()],$t.prototype,"name",void 0),It([(0,r.Cb)()],$t.prototype,"value",void 0),It([(0,r.Cb)({type:Boolean,reflect:!0})],$t.prototype,"disabled",void 0),It([(0,r.Cb)({type:Boolean}),(e,t)=>{}],$t.prototype,"checked",void 0),It([(0,r.Cb)({type:Boolean,reflect:!0})],$t.prototype,"required",void 0),It([(0,r.Cb)({type:Boolean,reflect:!0})],$t.prototype,"invalid",void 0),It([(0,r.Cb)({reflect:!0,attribute:"label-position"})],$t.prototype,"labelPosition",void 0),It([(0,r.Cb)({reflect:!0,attribute:"aria-labelledby"})],$t.prototype,"ariaLabelledby",void 0),It([(e,t)=>{}],$t.prototype,"focus",null),It([(e,t)=>{}],$t.prototype,"blur",null),$t=It([ne],$t);const Pt=i.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  font-family: var(--ig-font-family);
}

input[type=checkbox] {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: none;
  clip: rect(0, 0, 0, 0);
  outline: 0;
  pointer-events: none;
  overflow: hidden;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}

[part~=control] {
  --size: 1.25rem;
  position: relative;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
[part~=control]::after {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.125rem), 0.125rem);
  position: absolute;
  content: "";
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  width: var(--size);
  height: var(--size);
  border: 0.125rem solid hsla(var(--ig-gray-600), var(--ig-gray-a));
  -webkit-transition: all 0.15s ease-in;
  -o-transition: all 0.15s ease-in;
  transition: all 0.15s ease-in;
}

[part~=label] {
  display: inline-block;
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
  cursor: pointer;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  word-wrap: break-all;
  -webkit-transition: color 0.2s ease-in-out;
  -o-transition: color 0.2s ease-in-out;
  transition: color 0.2s ease-in-out;
}

[part~=indicator] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  stroke-linecap: square;
  stroke-width: 3;
  stroke-dasharray: 24;
  stroke-dashoffset: 24;
  fill: none;
  opacity: 0;
  z-index: 1;
  -webkit-transform: scale(0.45);
      -ms-transform: scale(0.45);
          transform: scale(0.45);
  -webkit-transform-origin: center;
      -ms-transform-origin: center;
          transform-origin: center;
}
[part~=indicator] svg {
  width: 100%;
  height: 100%;
}

label {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  cursor: pointer;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-flow: row nowrap;
          flex-flow: row nowrap;
  gap: 0.5rem;
}
label:hover [part="control checked"] {
  background: hsla(var(--ig-secondary-500), 0.06);
}
label:focus-within [part="control checked"] {
  background: hsla(var(--ig-secondary-500), 0.12);
}

[part="control checked"]::after {
  border-color: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
  background: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
}

[part="indicator checked"] {
  -webkit-transition: all 0.2s ease-out;
  -o-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
  stroke-dashoffset: 0;
  opacity: 1;
}

:host([indeterminate]) [part~=base]:hover [part~=control] {
  background: hsla(var(--ig-secondary-500), 0.06);
}
:host([indeterminate]) [part~=base]:focus-within [part~=control] {
  background: hsla(var(--ig-secondary-500), 0.12);
}
:host([indeterminate]) [part~=control]::after {
  border-color: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
  background: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
}
:host([indeterminate]) [part~=indicator] {
  stroke-dashoffset: 41;
  opacity: 1;
  -webkit-transform: rotate(45deg) scale(0.45) translateX(-0.25rem);
      -ms-transform: rotate(45deg) scale(0.45) translateX(-0.25rem);
          transform: rotate(45deg) scale(0.45) translateX(-0.25rem);
}

:host(:not([disabled])[invalid]) [part~=label] {
  color: hsla(var(--ig-error-500), var(--ig-error-a));
}
:host(:not([disabled])[invalid]) [part~=control]::after {
  border-color: hsla(var(--ig-error-500), var(--ig-error-a));
}
:host(:not([disabled])[invalid]) [part="control checked"]::after {
  background: hsla(var(--ig-error-500), var(--ig-error-a));
}

:host(:not([disabled])[invalid][indeterminate]) [part~=control]::after {
  background: hsla(var(--ig-error-500), var(--ig-error-a));
}

:host([disabled]) {
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  cursor: initial;
  pointer-events: none;
}

:host([disabled][indeterminate]) [part~=control]::after {
  background: hsla(var(--ig-gray-300), var(--ig-gray-a));
}

:host([label-position=before]) [part~=label] {
  -webkit-box-ordinal-group: 0;
      -ms-flex-order: -1;
          order: -1;
}`,Tt=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
[part~=control] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.25rem), 0.25rem);
  --size: 1rem;
  width: var(--size);
  height: var(--size);
  min-width: var(--size);
  -webkit-transition: background-color 0.15s ease-in-out;
  -o-transition: background-color 0.15s ease-in-out;
  transition: background-color 0.15s ease-in-out;
}
[part~=control]::after {
  width: inherit;
  height: inherit;
  min-width: inherit;
  border-radius: inherit;
  border: none;
  -webkit-box-shadow: inset 0 0 0 1px hsla(var(--ig-gray-400), var(--ig-gray-a));
          box-shadow: inset 0 0 0 1px hsla(var(--ig-gray-400), var(--ig-gray-a));
  -webkit-transition: none;
  -o-transition: none;
  transition: none;
}

[part~=indicator] {
  stroke-width: 3;
  -webkit-transform: scale(0.7);
      -ms-transform: scale(0.7);
          transform: scale(0.7);
  -webkit-transition: none;
  -o-transition: none;
  transition: none;
  stroke: white;
}

[part~=label] {
  font-family: var(--ig-body-2-font-family, var(--ig-font-family));
  font-size: var(--ig-body-2-font-size);
  font-weight: var(--ig-body-2-font-weight);
  font-style: var(--ig-body-2-font-style);
  line-height: var(--ig-body-2-line-height);
  letter-spacing: var(--ig-body-2-letter-spacing);
  text-transform: var(--ig-body-2-text-transform);
  margin-top: var(--ig-body-2-margin-top);
  margin-bottom: var(--ig-body-2-margin-bottom);
  -webkit-transition: none;
  -o-transition: none;
  transition: none;
}

:host([indeterminate]) [part=indicator] {
  -webkit-transform: rotate(45deg) translateX(-0.075rem) scale(0.7);
      -ms-transform: rotate(45deg) translateX(-0.075rem) scale(0.7);
          transform: rotate(45deg) translateX(-0.075rem) scale(0.7);
}

:host(:focus-within) [part~=control] {
  -webkit-box-shadow: 0 0 0 4px hsla(var(--ig-primary-100), var(--ig-primary-a));
          box-shadow: 0 0 0 4px hsla(var(--ig-primary-100), var(--ig-primary-a));
}
:host(:focus-within) [part~=control]::after {
  -webkit-box-shadow: inset 0 0 0 1px hsla(var(--ig-primary-500), var(--ig-primary-a));
          box-shadow: inset 0 0 0 1px hsla(var(--ig-primary-500), var(--ig-primary-a));
}

[part="control checked"]::after,
:host([indeterminate]) [part~=control]::after {
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  -webkit-box-shadow: inset 0 0 0 1px hsla(var(--ig-primary-500), var(--ig-primary-a));
          box-shadow: inset 0 0 0 1px hsla(var(--ig-primary-500), var(--ig-primary-a));
}

:host([invalid]) [part=control]::after {
  -webkit-box-shadow: inset 0 0 0 1px hsla(var(--ig-error-500), var(--ig-error-a));
          box-shadow: inset 0 0 0 1px hsla(var(--ig-error-500), var(--ig-error-a));
}

:host([invalid]) [part="control checked"]::after,
:host([invalid][indeterminate]) [part=control]::after {
  -webkit-box-shadow: inset 0 0 0 1px hsla(var(--ig-error-500), var(--ig-error-a));
          box-shadow: inset 0 0 0 1px hsla(var(--ig-error-500), var(--ig-error-a));
}

:host([invalid]:focus-within) [part=control],
:host([invalid]:focus-within) [part="control checked"],
:host([invalid][indeterminate]:focus-within) [part=control] {
  -webkit-box-shadow: 0 0 0 4px hsla(var(--ig-error-100), var(--ig-error-a));
          box-shadow: 0 0 0 4px hsla(var(--ig-error-100), var(--ig-error-a));
}

:host([disabled]) [part=control]::after,
:host([disabled][invalid]) [part=control]::after {
  -webkit-box-shadow: inset 0 0 0 1px hsla(var(--ig-gray-300), var(--ig-gray-a));
          box-shadow: inset 0 0 0 1px hsla(var(--ig-gray-300), var(--ig-gray-a));
}

:host([disabled]) [part="control checked"]::after,
:host([disabled][invalid]) [part="control checked"]::after {
  background: hsla(var(--ig-primary-200), var(--ig-primary-a));
  -webkit-box-shadow: inset 0 0 0 1px hsla(var(--ig-primary-200), var(--ig-primary-a));
          box-shadow: inset 0 0 0 1px hsla(var(--ig-primary-200), var(--ig-primary-a));
}

:host([disabled][indeterminate]) [part=control]::after,
:host([disabled][invalid][indeterminate]) [part=control]::after {
  background: hsla(var(--ig-primary-200), var(--ig-primary-a));
  -webkit-box-shadow: inset 0 0 0 1px hsla(var(--ig-primary-200), var(--ig-primary-a));
          box-shadow: inset 0 0 0 1px hsla(var(--ig-primary-200), var(--ig-primary-a));
}`,Et=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
[part~=control] {
  width: var(--size, 1.25rem);
  height: var(--size, 1.25rem);
  min-width: var(--size, 1.25rem);
}
[part~=control]::after {
  border: none;
  background: transparent;
  -webkit-box-shadow: inset 0 0 0 1px var(--border-color, hsla(var(--ig-gray-900), var(--ig-gray-a)));
          box-shadow: inset 0 0 0 1px var(--border-color, hsla(var(--ig-gray-900), var(--ig-gray-a)));
}

[part~=label] {
  font-family: var(--ig-body-2-font-family, var(--ig-font-family));
  font-size: var(--ig-body-2-font-size);
  font-weight: var(--ig-body-2-font-weight);
  font-style: var(--ig-body-2-font-style);
  line-height: var(--ig-body-2-line-height);
  letter-spacing: var(--ig-body-2-letter-spacing);
  text-transform: var(--ig-body-2-text-transform);
  margin-top: var(--ig-body-2-margin-top);
  margin-bottom: var(--ig-body-2-margin-bottom);
}

[part~=indicator] {
  stroke: hsla(var(--ig-surface-500), var(--ig-surface-a));
  stroke-width: 1.5;
  -webkit-transform: scale(0.8);
      -ms-transform: scale(0.8);
          transform: scale(0.8);
}

:host(:hover) [part~=indicator] {
  opacity: 1;
  stroke: hsla(var(--ig-gray-700), var(--ig-gray-a));
  stroke-dashoffset: 0;
  -webkit-transition: opacity 0.1s ease-out;
  -o-transition: opacity 0.1s ease-out;
  transition: opacity 0.1s ease-out;
}
:host(:hover) [part="indicator checked"] {
  stroke: hsla(var(--ig-surface-500), var(--ig-surface-a));
}

:host(:hover) [part~=control]::after,
:host(:focus-within) [part~=control]::after {
  -webkit-box-shadow: inset 0 0 0 1px var(--hover-color, hsla(var(--ig-gray-800), var(--ig-gray-a)));
          box-shadow: inset 0 0 0 1px var(--hover-color, hsla(var(--ig-gray-800), var(--ig-gray-a)));
}

:host([indeterminate]) [part~=indicator] {
  display: none;
}
:host([indeterminate]) [part~=control]::before {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.125rem), 0.125rem);
  display: block;
  width: inherit;
  height: inherit;
  content: "";
  -webkit-transform: scale(0.5);
      -ms-transform: scale(0.5);
          transform: scale(0.5);
  -webkit-transition-duration: 0.1s;
       -o-transition-duration: 0.1s;
          transition-duration: 0.1s;
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  z-index: 1;
}
:host([indeterminate]) [part~=control]::after {
  -webkit-box-shadow: inset 0 0 0 1px hsla(var(--ig-primary-500), var(--ig-primary-a));
          box-shadow: inset 0 0 0 1px hsla(var(--ig-primary-500), var(--ig-primary-a));
  background: transparent;
}

:host([indeterminate]:hover) [part~=control]::before,
:host([indeterminate]:focus-within) [part~=control]::before {
  background: var(--checked-hover-color, hsla(var(--ig-primary-900), var(--ig-primary-a)));
}
:host([indeterminate]:hover) [part~=control]::after,
:host([indeterminate]:focus-within) [part~=control]::after {
  -webkit-box-shadow: inset 0 0 0 1px var(--checked-hover-color, hsla(var(--ig-primary-900), var(--ig-primary-a)));
          box-shadow: inset 0 0 0 1px var(--checked-hover-color, hsla(var(--ig-primary-900), var(--ig-primary-a)));
  background: transparent;
}

[part="control checked"]::after {
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  -webkit-box-shadow: inset 0 0 0 1px hsla(var(--ig-primary-500), var(--ig-primary-a));
          box-shadow: inset 0 0 0 1px hsla(var(--ig-primary-500), var(--ig-primary-a));
}

:host(:hover) [part="control checked"]::after,
:host(:focus-within) [part="control checked"]::after {
  background: var(--checked-hover-color, hsla(var(--ig-primary-900), var(--ig-primary-a)));
  -webkit-box-shadow: inset 0 0 0 1px var(--checked-hover-color, hsla(var(--ig-primary-900), var(--ig-primary-a)));
          box-shadow: inset 0 0 0 1px var(--checked-hover-color, hsla(var(--ig-primary-900), var(--ig-primary-a)));
}

:host(:not([disabled])[invalid]) [part~=label] {
  color: var(--invalid-color, hsla(var(--ig-error-500), var(--ig-error-a)));
}

:host([invalid]) [part~=control]::after {
  -webkit-box-shadow: inset 0 0 0 1px var(--invalid-color, hsla(var(--ig-error-500), var(--ig-error-a)));
          box-shadow: inset 0 0 0 1px var(--invalid-color, hsla(var(--ig-error-500), var(--ig-error-a)));
}

:host([invalid]:hover) [part~=indicator] {
  stroke: var(--invalid-color, hsla(var(--ig-error-500), var(--ig-error-a)));
}

:host([invalid]:hover) [part="indicator checked"] {
  stroke: hsla(var(--ig-surface-500), var(--ig-surface-a));
}

:host([invalid][checked]) [part="control checked"]::after {
  -webkit-box-shadow: inset 0 0 0 1px var(--invalid-color, hsla(var(--ig-error-500), var(--ig-error-a)));
          box-shadow: inset 0 0 0 1px var(--invalid-color, hsla(var(--ig-error-500), var(--ig-error-a)));
  background: var(--invalid-color, hsla(var(--ig-error-500), var(--ig-error-a)));
}

:host(:not([disabled])[invalid][indeterminate]) [part~=control]::before {
  background: var(--invalid-color, hsla(var(--ig-error-500), var(--ig-error-a)));
}
:host(:not([disabled])[invalid][indeterminate]) [part~=control]::after {
  -webkit-box-shadow: inset 0 0 0 1px var(--invalid-color, hsla(var(--ig-error-500), var(--ig-error-a)));
          box-shadow: inset 0 0 0 1px var(--invalid-color, hsla(var(--ig-error-500), var(--ig-error-a)));
  background: transparent;
}

:host([invalid]:hover) [part~=control]::after,
:host([invalid]:focus-within) [part~=control]::after {
  -webkit-box-shadow: inset 0 0 0 1px var(--invalid-hover-color, hsla(var(--ig-error-700), var(--ig-error-a)));
          box-shadow: inset 0 0 0 1px var(--invalid-hover-color, hsla(var(--ig-error-700), var(--ig-error-a)));
}

:host([invalid]:hover) [part="control checked"]::after,
:host([invalid]:focus-within) [part="control checked"]::after {
  background: var(--invalid-hover-color, hsla(var(--ig-error-700), var(--ig-error-a)));
}

:host([invalid][indeterminate]:hover) [part~=control]::before,
:host([invalid][indeterminate]:focus-within) [part~=control]::before {
  background: var(--invalid-hover-color, hsla(var(--ig-error-700), var(--ig-error-a)));
}
:host([invalid][indeterminate]:hover) [part~=control]::after,
:host([invalid][indeterminate]:focus-within) [part~=control]::after {
  -webkit-box-shadow: inset 0 0 0 1px var(--invalid-hover-color, hsla(var(--ig-error-700), var(--ig-error-a)));
          box-shadow: inset 0 0 0 1px var(--invalid-hover-color, hsla(var(--ig-error-700), var(--ig-error-a)));
  background: transparent;
}

:host([disabled]) [part~=label] {
  color: var(--disabled-color, hsla(var(--ig-gray-400), var(--ig-gray-a)));
}

:host([disabled]) [part~=control]::after,
:host([disabled][invalid]) [part~=control]::after {
  -webkit-box-shadow: inset 0 0 0 1px var(--disabled-color, hsla(var(--ig-gray-400), var(--ig-gray-a)));
          box-shadow: inset 0 0 0 1px var(--disabled-color, hsla(var(--ig-gray-400), var(--ig-gray-a)));
}

:host([disabled]) [part="control checked"]::after,
:host([disabled][invalid]) [part="control checked"]::after {
  background: var(--disabled-color, hsla(var(--ig-gray-400), var(--ig-gray-a)));
}

:host([disabled][indeterminate]) [part~=control]::before,
:host([disabled][invalid][indeterminate]) [part~=control]::before {
  background: var(--disabled-color, hsla(var(--ig-gray-400), var(--ig-gray-a)));
}
:host([disabled][indeterminate]) [part~=control]::after,
:host([disabled][invalid][indeterminate]) [part~=control]::after {
  -webkit-box-shadow: inset 0 0 0 1px var(--disabled-color, hsla(var(--ig-gray-400), var(--ig-gray-a)));
          box-shadow: inset 0 0 0 1px var(--disabled-color, hsla(var(--ig-gray-400), var(--ig-gray-a)));
  background: transparent;
}

[part~=focused] {
  position: relative;
}
[part~=focused]::after {
  content: "";
  position: absolute;
  top: -0.125rem;
  left: -0.125rem;
  -webkit-box-shadow: 0 0 0 1px hsla(var(--ig-gray-700), var(--ig-gray-a));
          box-shadow: 0 0 0 1px hsla(var(--ig-gray-700), var(--ig-gray-a));
  width: calc(100% + (0.125rem * 2));
  height: calc(100% + (0.125rem * 2));
}`,Mt=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  font-weight: 600;
}

[part~=control] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.1875rem), 0.1875rem);
  width: var(--size, 1.25rem);
  height: var(--size, 1.25rem);
  min-width: var(--size, 1.25rem);
}
[part~=control]::after {
  border-radius: inherit;
  border-color: var(--border-color, hsla(var(--ig-gray-500), var(--ig-gray-a)));
}

[part~=label] {
  font-family: var(--ig-body-1-font-family, var(--ig-font-family));
  font-size: var(--ig-body-1-font-size);
  font-weight: var(--ig-body-1-font-weight);
  font-style: var(--ig-body-1-font-style);
  line-height: var(--ig-body-1-line-height);
  letter-spacing: var(--ig-body-1-letter-spacing);
  text-transform: var(--ig-body-1-text-transform);
  margin-top: var(--ig-body-1-margin-top);
  margin-bottom: var(--ig-body-1-margin-bottom);
}

[part~=indicator] {
  stroke: hsla(var(--ig-surface-500), var(--ig-surface-a));
  -webkit-transform: scale(0.8);
      -ms-transform: scale(0.8);
          transform: scale(0.8);
}

:host([indeterminate]) [part~=indicator] {
  -webkit-transform: rotate(45deg) translateX(-0.125rem) scale(0.8);
      -ms-transform: rotate(45deg) translateX(-0.125rem) scale(0.8);
          transform: rotate(45deg) translateX(-0.125rem) scale(0.8);
}

:host(:not([invalid])) [part="control checked"]::after,
:host(:not([invalid])[indeterminate]) [part~=control]::after {
  background: var(--checked-color, hsla(var(--ig-secondary-500), var(--ig-secondary-a)));
  border-color: var(--checked-color, hsla(var(--ig-secondary-500), var(--ig-secondary-a)));
}

:host(:hover) [part~=control] {
  -webkit-box-shadow: 0 0 0 4px hsla(var(--ig-gray-200), 0.87);
          box-shadow: 0 0 0 4px hsla(var(--ig-gray-200), 0.87);
}

:host(:focus-within) [part~=control] {
  -webkit-box-shadow: 0 0 0 4px hsla(var(--ig-gray-300), 0.87);
          box-shadow: 0 0 0 4px hsla(var(--ig-gray-300), 0.87);
}

:host(:hover) [part="control checked"],
:host([indeterminate]:hover) [part~=control] {
  -webkit-box-shadow: 0 0 0 4px hsla(var(--ig-secondary-100), 0.87);
          box-shadow: 0 0 0 4px hsla(var(--ig-secondary-100), 0.87);
}

:host(:focus-within) [part="control checked"],
:host([indeterminate]:focus-within) [part~=control] {
  -webkit-box-shadow: 0 0 0 4px hsla(var(--ig-secondary-200), 0.87);
          box-shadow: 0 0 0 4px hsla(var(--ig-secondary-200), 0.87);
}

:host(:not([disabled])[invalid]) [part="control checked"],
:host(:not([disabled])[invalid][indeterminate]) [part~=control] {
  -webkit-box-shadow: inset 0 0 0 4px hsla(var(--ig-error-500), var(--ig-error-a));
          box-shadow: inset 0 0 0 4px hsla(var(--ig-error-500), var(--ig-error-a));
  background: hsla(var(--ig-error-500), var(--ig-error-a));
}

:host([invalid]:hover) [part~=control],
:host([invalid]:hover) [part="control checked"],
:host([invalid][indeterminate]:hover) [part~=control] {
  -webkit-box-shadow: 0 0 0 4px hsla(var(--ig-error-100), 0.87);
          box-shadow: 0 0 0 4px hsla(var(--ig-error-100), 0.87);
}

:host([invalid]:focus-within) [part~=control],
:host([invalid]:focus-within) [part="control checked"],
:host([invalid][indeterminate]:focus-within) [part~=control] {
  -webkit-box-shadow: 0 0 0 4px hsla(var(--ig-error-200), 0.87);
          box-shadow: 0 0 0 4px hsla(var(--ig-error-200), 0.87);
}

:host([disabled]) [part~=control]::after,
:host([disabled][invalid]) [part~=control]::after {
  border-color: var(--disabled-color, hsla(var(--ig-gray-300), var(--ig-gray-a)));
}
:host([disabled]) [part="control checked"]::after,
:host([disabled][invalid]) [part="control checked"]::after {
  background: var(--disabled-color, hsla(var(--ig-gray-300), var(--ig-gray-a)));
}
:host([disabled]) [part~=label],
:host([disabled][invalid]) [part~=label] {
  color: var(--disabled-color, hsla(var(--ig-gray-300), var(--ig-gray-a)));
}

:host([disabled][indeterminate]) [part~=control]::after {
  background: var(--disabled-color, hsla(var(--ig-gray-300), var(--ig-gray-a)));
  border-color: var(--disabled-color, hsla(var(--ig-gray-300), var(--ig-gray-a)));
}`,Ot=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
label:hover [part=control] {
  background: hsla(var(--ig-gray-600), 0.06);
}
label:focus-within [part=control] {
  background: hsla(var(--ig-gray-600), 0.12);
}

[part~=label] {
  font-family: var(--ig-subtitle-1-font-family, var(--ig-font-family));
  font-size: var(--ig-subtitle-1-font-size);
  font-weight: var(--ig-subtitle-1-font-weight);
  font-style: var(--ig-subtitle-1-font-style);
  line-height: var(--ig-subtitle-1-line-height);
  letter-spacing: var(--ig-subtitle-1-letter-spacing);
  text-transform: var(--ig-subtitle-1-text-transform);
  margin-top: var(--ig-subtitle-1-margin-top);
  margin-bottom: var(--ig-subtitle-1-margin-bottom);
}

[part~=indicator] {
  stroke: hsla(var(--ig-surface-500), var(--ig-surface-a));
}

[part~=control] {
  --size: 1.25rem;
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * calc(var(--size))), calc(var(--size)));
  width: calc(var(--size) * 2);
  height: calc(var(--size) * 2);
  min-width: calc(var(--size) * 2);
  -webkit-transition: background 0.15s ease-in;
  -o-transition: background 0.15s ease-in;
  transition: background 0.15s ease-in;
}

:host([invalid]) label:hover [part~=control],
:host([invalid][indeterminate]) label:hover [part~=control] {
  background: hsla(var(--ig-error-500), 0.06);
}
:host([invalid]) label:focus-within [part~=control],
:host([invalid][indeterminate]) label:focus-within [part~=control] {
  background: hsla(var(--ig-error-500), 0.12);
}

:host([disabled]) [part~=label] {
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}
:host([disabled]) [part~=control]::after {
  border-color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}
:host([disabled]) [part="control checked"]::after {
  background: hsla(var(--ig-gray-400), var(--ig-gray-a));
}

:host([disabled][indeterminate]) [part~=control]::after {
  background: hsla(var(--ig-secondary-100), var(--ig-secondary-a));
  border-color: transparent;
}`;var At,Vt=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n};let Lt=At=class extends $t{constructor(){super(...arguments),this.inputId=`checkbox-${At.increment()}`,this.labelId=`checkbox-label-${this.inputId}`,this.indeterminate=!1}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emitEvent("igcChange",{detail:this.checked})}handleChange(){this.invalid=!this.input.checkValidity()}render(){return i.dy`
      <label
        part=${$({base:!0,checked:this.checked,focused:this.focused})}
        for=${this.inputId}
        @pointerdown=${this.handleMouseDown}
      >
        <input
          id=${this.inputId}
          type="checkbox"
          name=${(0,n.o)(this.name)}
          value=${(0,n.o)(this.value)}
          .required=${this.required}
          .disabled=${this.disabled}
          .checked=${(0,St.a)(this.checked)}
          .indeterminate=${(0,St.a)(this.indeterminate)}
          aria-checked=${this.indeterminate&&!this.checked?"mixed":this.checked}
          aria-disabled=${this.disabled?"true":"false"}
          aria-labelledby=${this.ariaLabelledby?this.ariaLabelledby:this.labelId}
          @click=${this.handleClick}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
        />
        <span part=${$({control:!0,checked:this.checked})}>
          <span part=${$({indicator:!0,checked:this.checked})}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M4.1,12.7 9,17.6 20.3,6.3" />
            </svg>
          </span>
        </span>
        <span
          .hidden="${this.hideLabel}"
          part=${$({label:!0,checked:this.checked})}
          id=${this.labelId}
        >
          <slot></slot>
        </span>
      </label>
    `}};Lt.tagName="igc-checkbox",Lt.styles=Pt,Lt.increment=M(),Vt([(0,r.Cb)({type:Boolean,reflect:!0})],Lt.prototype,"indeterminate",void 0),Vt([m("checked",{waitUntilFirstUpdate:!0}),m("focused",{waitUntilFirstUpdate:!0}),m("indeterminate",{waitUntilFirstUpdate:!0})],Lt.prototype,"handleChange",null),Lt=At=Vt([b({material:Ot,bootstrap:Tt,fluent:Et,indigo:Mt})],Lt);const Rt=Lt;var Ft=a(75057),_t=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n};class jt extends i.oi{constructor(){super(...arguments),this.percentage=0,this.max=100,this.value=0,this.variant="primary",this.animationDuration=500,this.indeterminate=!1,this.hideLabel=!1}indeterminateChange(){this.cancelAnimations(),this.indeterminate||(this.percentage=Math.floor(P(this.value,this.max)))}maxChange(){this.max=Math.max(0,this.max),this.value>this.max?this.value=this.max:this.indeterminate||this.animateLabelTo(this.max,this.value)}valueChange(e){this.value=T(this.value,0,this.max),this.indeterminate||(cancelAnimationFrame(this.tick),this.percentage!==Math.floor(P(this.value,this.max))&&this.animateLabelTo(e,this.value))}slotChanges(){this.requestUpdate()}connectedCallback(){super.connectedCallback(),this.initialMax=Math.max(0,this.max),this.initialValue=T(this.value,0,this.initialMax),this.value=0,this.max=100}firstUpdated(){this.indeterminate||setTimeout((()=>{this.max=this.initialMax,this.value=this.initialValue}),0)}cancelAnimations(){requestAnimationFrame((()=>{var e;null===(e=this.progressIndicator)||void 0===e||e.getAnimations().forEach((e=>{e instanceof CSSTransition&&e.cancel()}))})),cancelAnimationFrame(this.tick)}animateLabelTo(e,t){let a;const i=r=>{a=null!=a?a:r;const l=Math.min((r-a)/(this.animationDuration||1),1);this.percentage=Math.floor(P(l*(t-e)+e,this.max)),l<1?this.tick=requestAnimationFrame(i):cancelAnimationFrame(this.tick)};requestAnimationFrame(i)}renderLabelFormat(){return this.labelFormat.replace(/\{0\}/gm,`${this.value}`).replace(/\{1\}/gm,`${this.max}`)}renderDefaultSlot(){return i.dy`<slot part="label" @slotchange=${this.slotChanges}></slot>
      ${(0,Ft.g)(this.indeterminate||this.hideLabel||this.assignedElements.length,(()=>i.Ld),(()=>i.dy`<span part="label value">${this.renderLabelText()}</span>`))}`}renderLabelText(){return this.labelFormat?this.renderLabelFormat():`${this.percentage}%`}}_t([(0,r.NH)()],jt.prototype,"assignedElements",void 0),_t([(0,r.IO)('[part~="fill"]',!0)],jt.prototype,"progressIndicator",void 0),_t([(0,r.SB)()],jt.prototype,"percentage",void 0),_t([(0,r.Cb)({type:Number})],jt.prototype,"max",void 0),_t([(0,r.Cb)({type:Number})],jt.prototype,"value",void 0),_t([(0,r.Cb)({reflect:!0})],jt.prototype,"variant",void 0),_t([(0,r.Cb)({type:Number,attribute:"animation-duration"})],jt.prototype,"animationDuration",void 0),_t([(0,r.Cb)({type:Boolean,reflect:!1})],jt.prototype,"indeterminate",void 0),_t([(0,r.Cb)({type:Boolean,attribute:"hide-label",reflect:!1})],jt.prototype,"hideLabel",void 0),_t([(0,r.Cb)({attribute:"label-format"})],jt.prototype,"labelFormat",void 0),_t([m("indeterminate",{waitUntilFirstUpdate:!0})],jt.prototype,"indeterminateChange",null),_t([m("max",{waitUntilFirstUpdate:!0})],jt.prototype,"maxChange",null),_t([m("value",{waitUntilFirstUpdate:!0})],jt.prototype,"valueChange",null);const Bt=i.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
@-webkit-keyframes indeterminate-primary {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  20% {
    -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.7017, 0.4958);
            animation-timing-function: cubic-bezier(0.5, 0, 0.7017, 0.4958);
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  59.15% {
    -webkit-animation-timing-function: cubic-bezier(0.3024, 0.3813, 0.55, 0.9563);
            animation-timing-function: cubic-bezier(0.3024, 0.3813, 0.55, 0.9563);
    -webkit-transform: translateX(83.671%);
            transform: translateX(83.671%);
  }
  100% {
    -webkit-transform: translateX(200.611%);
            transform: translateX(200.611%);
  }
}
@keyframes indeterminate-primary {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  20% {
    -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.7017, 0.4958);
            animation-timing-function: cubic-bezier(0.5, 0, 0.7017, 0.4958);
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  59.15% {
    -webkit-animation-timing-function: cubic-bezier(0.3024, 0.3813, 0.55, 0.9563);
            animation-timing-function: cubic-bezier(0.3024, 0.3813, 0.55, 0.9563);
    -webkit-transform: translateX(83.671%);
            transform: translateX(83.671%);
  }
  100% {
    -webkit-transform: translateX(200.611%);
            transform: translateX(200.611%);
  }
}
@-webkit-keyframes indeterminate-primary-scale {
  0% {
    -webkit-transform: scaleX(0.08);
            transform: scaleX(0.08);
  }
  36.65% {
    -webkit-animation-timing-function: cubic-bezier(0.3347, 0.124, 0.7858, 1);
            animation-timing-function: cubic-bezier(0.3347, 0.124, 0.7858, 1);
    -webkit-transform: scaleX(0.08);
            transform: scaleX(0.08);
  }
  69.15% {
    -webkit-animation-timing-function: cubic-bezier(0.3347, 0.124, 0.7858, 1);
            animation-timing-function: cubic-bezier(0.3347, 0.124, 0.7858, 1);
    -webkit-transform: scaleX(0.6614);
            transform: scaleX(0.6614);
  }
  100% {
    -webkit-transform: scaleX(0.08);
            transform: scaleX(0.08);
  }
}
@keyframes indeterminate-primary-scale {
  0% {
    -webkit-transform: scaleX(0.08);
            transform: scaleX(0.08);
  }
  36.65% {
    -webkit-animation-timing-function: cubic-bezier(0.3347, 0.124, 0.7858, 1);
            animation-timing-function: cubic-bezier(0.3347, 0.124, 0.7858, 1);
    -webkit-transform: scaleX(0.08);
            transform: scaleX(0.08);
  }
  69.15% {
    -webkit-animation-timing-function: cubic-bezier(0.3347, 0.124, 0.7858, 1);
            animation-timing-function: cubic-bezier(0.3347, 0.124, 0.7858, 1);
    -webkit-transform: scaleX(0.6614);
            transform: scaleX(0.6614);
  }
  100% {
    -webkit-transform: scaleX(0.08);
            transform: scaleX(0.08);
  }
}
@-webkit-keyframes indeterminate-secondary {
  0% {
    -webkit-animation-timing-function: cubic-bezier(0.15, 0, 0.515, 0.4096);
            animation-timing-function: cubic-bezier(0.15, 0, 0.515, 0.4096);
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  25% {
    -webkit-animation-timing-function: cubic-bezier(0.31, 0.284, 0.8, 0.7337);
            animation-timing-function: cubic-bezier(0.31, 0.284, 0.8, 0.7337);
    -webkit-transform: translateX(37.6519%);
            transform: translateX(37.6519%);
  }
  48.35% {
    -webkit-animation-timing-function: cubic-bezier(0.4, 0.627, 0.6, 0.902);
            animation-timing-function: cubic-bezier(0.4, 0.627, 0.6, 0.902);
    -webkit-transform: translateX(84.3861%);
            transform: translateX(84.3861%);
  }
  100% {
    -webkit-transform: translateX(160.2777%);
            transform: translateX(160.2777%);
  }
}
@keyframes indeterminate-secondary {
  0% {
    -webkit-animation-timing-function: cubic-bezier(0.15, 0, 0.515, 0.4096);
            animation-timing-function: cubic-bezier(0.15, 0, 0.515, 0.4096);
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  25% {
    -webkit-animation-timing-function: cubic-bezier(0.31, 0.284, 0.8, 0.7337);
            animation-timing-function: cubic-bezier(0.31, 0.284, 0.8, 0.7337);
    -webkit-transform: translateX(37.6519%);
            transform: translateX(37.6519%);
  }
  48.35% {
    -webkit-animation-timing-function: cubic-bezier(0.4, 0.627, 0.6, 0.902);
            animation-timing-function: cubic-bezier(0.4, 0.627, 0.6, 0.902);
    -webkit-transform: translateX(84.3861%);
            transform: translateX(84.3861%);
  }
  100% {
    -webkit-transform: translateX(160.2777%);
            transform: translateX(160.2777%);
  }
}
@-webkit-keyframes indeterminate-secondary-scale {
  0% {
    -webkit-animation-timing-function: cubic-bezier(0.15, 0, 0.515, 0.4096);
            animation-timing-function: cubic-bezier(0.15, 0, 0.515, 0.4096);
    -webkit-transform: scaleX(0.08);
            transform: scaleX(0.08);
  }
  19.15% {
    -webkit-animation-timing-function: cubic-bezier(0.31, 0.284, 0.8, 0.7337);
            animation-timing-function: cubic-bezier(0.31, 0.284, 0.8, 0.7337);
    -webkit-transform: scaleX(0.4571);
            transform: scaleX(0.4571);
  }
  44.15% {
    -webkit-animation-timing-function: cubic-bezier(0.4, 0.627, 0.6, 0.902);
            animation-timing-function: cubic-bezier(0.4, 0.627, 0.6, 0.902);
    -webkit-transform: scaleX(0.727);
            transform: scaleX(0.727);
  }
  100% {
    -webkit-transform: scaleX(0.08);
            transform: scaleX(0.08);
  }
}
@keyframes indeterminate-secondary-scale {
  0% {
    -webkit-animation-timing-function: cubic-bezier(0.15, 0, 0.515, 0.4096);
            animation-timing-function: cubic-bezier(0.15, 0, 0.515, 0.4096);
    -webkit-transform: scaleX(0.08);
            transform: scaleX(0.08);
  }
  19.15% {
    -webkit-animation-timing-function: cubic-bezier(0.31, 0.284, 0.8, 0.7337);
            animation-timing-function: cubic-bezier(0.31, 0.284, 0.8, 0.7337);
    -webkit-transform: scaleX(0.4571);
            transform: scaleX(0.4571);
  }
  44.15% {
    -webkit-animation-timing-function: cubic-bezier(0.4, 0.627, 0.6, 0.902);
            animation-timing-function: cubic-bezier(0.4, 0.627, 0.6, 0.902);
    -webkit-transform: scaleX(0.727);
            transform: scaleX(0.727);
  }
  100% {
    -webkit-transform: scaleX(0.08);
            transform: scaleX(0.08);
  }
}
@-webkit-keyframes indeterminate-bar-fluent {
  0% {
    -webkit-transform: translateX(-100%);
            transform: translateX(-100%);
    -webkit-transform-origin: left;
            transform-origin: left;
  }
  100% {
    -webkit-transform: translateX(310%);
            transform: translateX(310%);
    -webkit-transform-origin: right;
            transform-origin: right;
  }
}
@keyframes indeterminate-bar-fluent {
  0% {
    -webkit-transform: translateX(-100%);
            transform: translateX(-100%);
    -webkit-transform-origin: left;
            transform-origin: left;
  }
  100% {
    -webkit-transform: translateX(310%);
            transform: translateX(310%);
    -webkit-transform-origin: right;
            transform-origin: right;
  }
}
@-webkit-keyframes indeterminate-bar-fluent-rtl {
  0% {
    -webkit-transform: translateX(-310%);
            transform: translateX(-310%);
    -webkit-transform-origin: right;
            transform-origin: right;
  }
  100% {
    -webkit-transform: translateX(100%);
            transform: translateX(100%);
    -webkit-transform-origin: left;
            transform-origin: left;
  }
}
@keyframes indeterminate-bar-fluent-rtl {
  0% {
    -webkit-transform: translateX(-310%);
            transform: translateX(-310%);
    -webkit-transform-origin: right;
            transform-origin: right;
  }
  100% {
    -webkit-transform: translateX(100%);
            transform: translateX(100%);
    -webkit-transform-origin: left;
            transform-origin: left;
  }
}
@-webkit-keyframes indeterminate-accordion {
  0% {
    stroke-dashoffset: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * 2);
    stroke-dasharray: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * 9 / 10);
  }
  100% {
    stroke-dashoffset: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * 2 / 5);
  }
}
@keyframes indeterminate-accordion {
  0% {
    stroke-dashoffset: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * 2);
    stroke-dasharray: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * 9 / 10);
  }
  100% {
    stroke-dashoffset: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * 2 / 5);
  }
}
@-webkit-keyframes indeterminate-accordion-rtl {
  0% {
    stroke-dashoffset: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * -2);
    stroke-dasharray: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * 9 / 10);
  }
  100% {
    stroke-dashoffset: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * -2 / 5);
  }
}
@keyframes indeterminate-accordion-rtl {
  0% {
    stroke-dashoffset: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * -2);
    stroke-dasharray: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * 9 / 10);
  }
  100% {
    stroke-dashoffset: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * -2 / 5);
  }
}
@-webkit-keyframes rotate-center {
  0% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes rotate-center {
  0% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
:host {
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  font-family: var(--ig-font-family);
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
}

[part~=label] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  color: inherit;
  font-weight: 600;
}

:host {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  position: relative;
  --stroke-thickness: 2px;
  --diameter: 30px;
}

[part~=label] {
  fill: hsla(var(--ig-gray-900), var(--ig-gray-a));
  position: absolute;
  -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
}

[part~=label],
[part~=value] {
  font-size: calc(var(--diameter) / 3 - var(--stroke-thickness));
  line-height: normal;
}

[part="svg indeterminate"] {
  -webkit-transform-origin: 50% 50%;
      -ms-transform-origin: 50% 50%;
          transform-origin: 50% 50%;
  -webkit-animation: 3s linear 0s infinite normal none running rotate-center;
          animation: 3s linear 0s infinite normal none running rotate-center;
}

[part="svg indeterminate"] [part~=fill] {
  stroke-dashoffset: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * 2);
  -webkit-animation: indeterminate-accordion 1.5s cubic-bezier(0, 0.085, 0.68, 0.53) normal infinite;
          animation: indeterminate-accordion 1.5s cubic-bezier(0, 0.085, 0.68, 0.53) normal infinite;
}

[part~=svg] {
  width: calc(var(--diameter) + var(--stroke-thickness));
  height: calc(var(--diameter) + var(--stroke-thickness));
  -webkit-transform: rotate(-90deg);
      -ms-transform: rotate(-90deg);
          transform: rotate(-90deg);
}

[part~=track] {
  stroke: hsla(var(--ig-gray-300), var(--ig-gray-a));
}

[part~=fill] {
  stroke-dasharray: calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416);
  stroke-dashoffset: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) - var(--percentage) * calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416));
  -webkit-transition: stroke-dashoffset var(--duration) linear;
  -o-transition: stroke-dashoffset var(--duration) linear;
  transition: stroke-dashoffset var(--duration) linear;
  --percentage: 0;
  --duration: 500ms;
}

[part~=track],
[part~=fill] {
  width: 100%;
  height: 100%;
  fill: transparent;
  stroke-width: var(--stroke-thickness);
  cx: calc(calc(var(--diameter) + var(--stroke-thickness)) / 2);
  cy: calc(calc(var(--diameter) + var(--stroke-thickness)) / 2);
  r: calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5);
  -webkit-transform-origin: center;
      -ms-transform-origin: center;
          transform-origin: center;
}

[part~=gradient_start],
[part~=gradient_end] {
  stop-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
}

:host([variant=danger]) [part~=gradient_start],
:host([variant=danger]) [part~=gradient_end] {
  stop-color: hsla(var(--ig-error-500), var(--ig-error-a));
}

:host([variant=warning]) [part~=gradient_start],
:host([variant=warning]) [part~=gradient_end] {
  stop-color: hsla(var(--ig-warn-500), var(--ig-warn-a));
}

:host([variant=info]) [part~=gradient_start],
:host([variant=info]) [part~=gradient_end] {
  stop-color: hsla(var(--ig-info-500), var(--ig-info-a));
}

:host([variant=success]) [part~=gradient_start],
:host([variant=success]) [part~=gradient_end] {
  stop-color: hsla(var(--ig-success-500), var(--ig-success-a));
}

:host([dir=rtl]) [part="svg indeterminate"] [part~=fill] {
  -webkit-animation-name: indeterminate-accordion-rtl;
          animation-name: indeterminate-accordion-rtl;
}
:host([dir=rtl]) [part~=indeterminate] {
  animation-direction: reverse;
}
:host([dir=rtl]) [part~=indeterminate] [part~=track] {
  animation-direction: reverse;
}
:host([dir=rtl]) [part~=fill] {
  stroke-dashoffset: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) + var(--percentage) * calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416));
}`,Xt=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  --stroke-thickness: 4px;
  --diameter: 28px;
}

[part~=svg][part~=indeterminate] {
  -webkit-animation-duration: 0.75s;
          animation-duration: 0.75s;
}

[part="svg indeterminate"] [part~=fill] {
  stroke-dashoffset: 60% !important;
  -webkit-animation: none;
          animation: none;
}

[part~=track][part~=indeterminate] {
  stroke: transparent;
}`,Nt=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  --stroke-thickness: 1.5px;
}

[part~=track] {
  stroke: hsla(var(--ig-primary-50), 0.3);
}`;var Ut=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n};class Kt extends i.oi{constructor(){super(...arguments),this.offset="0%",this.color="black",this.opacity=1}render(){return i.Ld}}Kt.tagName="igc-circular-gradient",Ut([(0,r.Cb)()],Kt.prototype,"offset",void 0),Ut([(0,r.Cb)()],Kt.prototype,"color",void 0),Ut([(0,r.Cb)({type:Number})],Kt.prototype,"opacity",void 0);var Ht=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n};k(Kt);let Yt=class extends jt{constructor(){super(...arguments),this.gradientId=Date.now().toString(16)}get stroke(){return{stroke:`url(#${this.gradientId})`,"--percentage":(P(this.value,this.max)/100).toString(),"--duration":this.animationDuration+"ms"}}get svgParts(){return{indeterminate:this.indeterminate}}gradientChange(){this.requestUpdate()}renderSvg(){return i.YP`
      <circle part="track ${$(this.svgParts)}"/>
      <circle style="${(0,ye.V)(this.stroke)}" part="fill"/>

      <defs>
          <linearGradient id=${this.gradientId} gradientTransform="rotate(90)">
          ${(0,Ft.g)(this.gradientElements.length,(()=>this.gradientElements.map((e=>i.YP`<stop offset=${e.offset} stop-color=${e.color} stop-opacity=${e.opacity}/>`))),(()=>i.YP`
              <stop offset="0%" part="gradient_start" />
              <stop offset="100%" part="gradient_end" />
          `))}
          </linearGradient>
      </defs>
    `}renderWrapper(){return i.dy`
      <svg
        part="svg ${$(this.svgParts)}"
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax=${this.max}
        aria-valuenow=${this.indeterminate?i.Ld:this.value}
      >
        ${this.renderSvg()}
      </svg>
      <slot name="gradient" @slotchange=${this.gradientChange}></slot>
      ${this.renderDefaultSlot()}
    `}render(){return this.renderWrapper()}};Yt.tagName="igc-circular-progress",Yt.styles=Bt,Ht([(0,r.NH)({slot:"gradient"})],Yt.prototype,"gradientElements",void 0),Yt=Ht([b({bootstrap:Xt,fluent:Nt})],Yt);const qt=Yt,Wt=i.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  --size: max(var(--is-large, 1) * max(2rem, -1 * 2rem), var(--is-medium, 1) * max(1.5rem, -1 * 1.5rem), var(--is-small, 1) * max(1.25rem, -1 * 1.25rem));
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  vertical-align: top;
}

:host([size=small]) {
  --component-size: var(--ig-size, var(--ig-size-small));
}
:host([size=small]) [part=prefix] {
  -webkit-margin-end: 0.1875rem;
          margin-inline-end: 0.1875rem;
}
:host([size=small]) [part=suffix] {
  -webkit-margin-start: 0.1875rem;
          margin-inline-start: 0.1875rem;
}

:host([size=medium]) {
  --component-size: var(--ig-size, var(--ig-size-medium));
}
:host([size=medium]) [part=prefix] {
  -webkit-margin-end: 0.375rem;
          margin-inline-end: 0.375rem;
}
:host([size=medium]) [part=suffix] {
  -webkit-margin-start: 0.375rem;
          margin-inline-start: 0.375rem;
}

:host([size=large]) {
  --component-size: var(--ig-size, var(--ig-size-large));
}
:host([size=large]) [part=prefix] {
  -webkit-margin-end: 0.5rem;
          margin-inline-end: 0.5rem;
}
:host([size=large]) [part=suffix] {
  -webkit-margin-start: 0.5rem;
          margin-inline-start: 0.5rem;
}
:host([size=large]) igc-icon[size=large] {
  --size: 1.25rem;
}

:host button {
  font-family: var(--ig-body-2-font-family, var(--ig-font-family));
  font-size: var(--ig-body-2-font-size);
  font-weight: var(--ig-body-2-font-weight);
  font-style: var(--ig-body-2-font-style);
  line-height: var(--ig-body-2-line-height);
  letter-spacing: var(--ig-body-2-letter-spacing);
  text-transform: var(--ig-body-2-text-transform);
  margin-top: var(--ig-body-2-margin-top);
  margin-bottom: var(--ig-body-2-margin-bottom);
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 1rem), 1rem);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  font-family: var(--ig-font-family);
  border-style: none;
  -webkit-box-shadow: none;
          box-shadow: none;
  cursor: pointer;
  height: var(--size);
  padding: max(var(--is-large, 1) * max(12px, -1 * 12px) * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * max(6px, -1 * 6px) * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * max(2px, -1 * 2px) * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
}
:host button[disabled] {
  pointer-events: none;
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}

:host([variant=primary]) button,
:host([selected][variant=primary]) button:not([disabled]) {
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  color: var(--ig-primary-500-contrast);
}
:host([variant=primary]) button:hover,
:host([selected][variant=primary]) button:not([disabled]):hover {
  background: hsla(var(--ig-primary-600), var(--ig-primary-a));
  color: var(--ig-primary-600-contrast);
}
:host([variant=primary]) button:focus,
:host([selected][variant=primary]) button:not([disabled]):focus {
  background: hsla(var(--ig-primary-800), var(--ig-primary-a));
  color: var(--ig-primary-800-contrast);
}

:host([variant=info]) button,
:host([selected][variant=info]) button:not([disabled]) {
  background: hsla(var(--ig-info-500), var(--ig-info-a));
  color: var(--ig-info-500-contrast);
}
:host([variant=info]) button:hover,
:host([selected][variant=info]) button:not([disabled]):hover {
  background: hsla(var(--ig-info-600), var(--ig-info-a));
  color: var(--ig-info-600-contrast);
}
:host([variant=info]) button:focus,
:host([selected][variant=info]) button:not([disabled]):focus {
  background: hsla(var(--ig-info-800), var(--ig-info-a));
  color: var(--ig-info-800-contrast);
}

:host([variant=success]) button,
:host([selected][variant=success]) button:not([disabled]) {
  background: hsla(var(--ig-success-500), var(--ig-success-a));
  color: var(--ig-success-500-contrast);
}
:host([variant=success]) button:hover,
:host([selected][variant=success]) button:not([disabled]):hover {
  background: hsla(var(--ig-success-600), var(--ig-success-a));
  color: var(--ig-success-600-contrast);
}
:host([variant=success]) button:focus,
:host([selected][variant=success]) button:not([disabled]):focus {
  background: hsla(var(--ig-success-800), var(--ig-success-a));
  color: var(--ig-success-800-contrast);
}

:host([variant=warning]) button,
:host([selected][variant=warning]) button:not([disabled]) {
  background: hsla(var(--ig-warn-500), var(--ig-warn-a));
  color: var(--ig-warn-500-contrast);
}
:host([variant=warning]) button:hover,
:host([selected][variant=warning]) button:not([disabled]):hover {
  background: hsla(var(--ig-warn-600), var(--ig-warn-a));
  color: var(--ig-warn-600-contrast);
}
:host([variant=warning]) button:focus,
:host([selected][variant=warning]) button:not([disabled]):focus {
  background: hsla(var(--ig-warn-800), var(--ig-warn-a));
  color: var(--ig-warn-800-contrast);
}

:host([variant=danger]) button,
:host([selected][variant=danger]) button:not([disabled]) {
  background: hsla(var(--ig-error-500), var(--ig-error-a));
  color: var(--ig-error-500-contrast);
}
:host([variant=danger]) button:hover,
:host([selected][variant=danger]) button:not([disabled]):hover {
  background: hsla(var(--ig-error-600), var(--ig-error-a));
  color: var(--ig-error-600-contrast);
}
:host([variant=danger]) button:focus,
:host([selected][variant=danger]) button:not([disabled]):focus {
  background: hsla(var(--ig-error-800), var(--ig-error-a));
  color: var(--ig-error-800-contrast);
}

[part=prefix],
[part=suffix] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

::slotted(*) {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

:host([variant=primary]) button[disabled],
:host([variant=info]) button[disabled],
:host([variant=success]) button[disabled],
:host([variant=warning]) button[disabled],
:host([variant=danger]) button[disabled] {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}`,Qt=i.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  --size: max(var(--is-large, 1) * max(2rem, -1 * 2rem), var(--is-medium, 1) * max(1.5rem, -1 * 1.5rem), var(--is-small, 1) * max(1.25rem, -1 * 1.25rem));
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  vertical-align: top;
}

:host([size=small]) {
  --component-size: var(--ig-size, var(--ig-size-small));
}
:host([size=small]) [part=prefix] {
  -webkit-margin-end: 0.1875rem;
          margin-inline-end: 0.1875rem;
}
:host([size=small]) [part=suffix] {
  -webkit-margin-start: 0.1875rem;
          margin-inline-start: 0.1875rem;
}

:host([size=medium]) {
  --component-size: var(--ig-size, var(--ig-size-medium));
}
:host([size=medium]) [part=prefix] {
  -webkit-margin-end: 0.375rem;
          margin-inline-end: 0.375rem;
}
:host([size=medium]) [part=suffix] {
  -webkit-margin-start: 0.375rem;
          margin-inline-start: 0.375rem;
}

:host([size=large]) {
  --component-size: var(--ig-size, var(--ig-size-large));
}
:host([size=large]) [part=prefix] {
  -webkit-margin-end: 0.5rem;
          margin-inline-end: 0.5rem;
}
:host([size=large]) [part=suffix] {
  -webkit-margin-start: 0.5rem;
          margin-inline-start: 0.5rem;
}
:host([size=large]) igc-icon[size=large] {
  --size: 1.25rem;
}

:host button {
  font-family: var(--ig-body-2-font-family, var(--ig-font-family));
  font-size: var(--ig-body-2-font-size);
  font-weight: var(--ig-body-2-font-weight);
  font-style: var(--ig-body-2-font-style);
  line-height: var(--ig-body-2-line-height);
  letter-spacing: var(--ig-body-2-letter-spacing);
  text-transform: var(--ig-body-2-text-transform);
  margin-top: var(--ig-body-2-margin-top);
  margin-bottom: var(--ig-body-2-margin-bottom);
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 1rem), 1rem);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  font-family: var(--ig-font-family);
  border-style: none;
  -webkit-box-shadow: none;
          box-shadow: none;
  cursor: pointer;
  height: var(--size);
  padding: max(var(--is-large, 1) * max(12px, -1 * 12px) * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * max(6px, -1 * 6px) * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * max(2px, -1 * 2px) * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
}
:host button[disabled] {
  pointer-events: none;
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}

:host([variant=primary]) button,
:host([selected][variant=primary]) button:not([disabled]) {
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  color: var(--ig-primary-500-contrast);
}
:host([variant=primary]) button:hover,
:host([selected][variant=primary]) button:not([disabled]):hover {
  background: hsla(var(--ig-primary-600), var(--ig-primary-a));
  color: var(--ig-primary-600-contrast);
}
:host([variant=primary]) button:focus,
:host([selected][variant=primary]) button:not([disabled]):focus {
  background: hsla(var(--ig-primary-800), var(--ig-primary-a));
  color: var(--ig-primary-800-contrast);
}

:host([variant=info]) button,
:host([selected][variant=info]) button:not([disabled]) {
  background: hsla(var(--ig-info-500), var(--ig-info-a));
  color: var(--ig-info-500-contrast);
}
:host([variant=info]) button:hover,
:host([selected][variant=info]) button:not([disabled]):hover {
  background: hsla(var(--ig-info-600), var(--ig-info-a));
  color: var(--ig-info-600-contrast);
}
:host([variant=info]) button:focus,
:host([selected][variant=info]) button:not([disabled]):focus {
  background: hsla(var(--ig-info-800), var(--ig-info-a));
  color: var(--ig-info-800-contrast);
}

:host([variant=success]) button,
:host([selected][variant=success]) button:not([disabled]) {
  background: hsla(var(--ig-success-500), var(--ig-success-a));
  color: var(--ig-success-500-contrast);
}
:host([variant=success]) button:hover,
:host([selected][variant=success]) button:not([disabled]):hover {
  background: hsla(var(--ig-success-600), var(--ig-success-a));
  color: var(--ig-success-600-contrast);
}
:host([variant=success]) button:focus,
:host([selected][variant=success]) button:not([disabled]):focus {
  background: hsla(var(--ig-success-800), var(--ig-success-a));
  color: var(--ig-success-800-contrast);
}

:host([variant=warning]) button,
:host([selected][variant=warning]) button:not([disabled]) {
  background: hsla(var(--ig-warn-500), var(--ig-warn-a));
  color: var(--ig-warn-500-contrast);
}
:host([variant=warning]) button:hover,
:host([selected][variant=warning]) button:not([disabled]):hover {
  background: hsla(var(--ig-warn-600), var(--ig-warn-a));
  color: var(--ig-warn-600-contrast);
}
:host([variant=warning]) button:focus,
:host([selected][variant=warning]) button:not([disabled]):focus {
  background: hsla(var(--ig-warn-800), var(--ig-warn-a));
  color: var(--ig-warn-800-contrast);
}

:host([variant=danger]) button,
:host([selected][variant=danger]) button:not([disabled]) {
  background: hsla(var(--ig-error-500), var(--ig-error-a));
  color: var(--ig-error-500-contrast);
}
:host([variant=danger]) button:hover,
:host([selected][variant=danger]) button:not([disabled]):hover {
  background: hsla(var(--ig-error-600), var(--ig-error-a));
  color: var(--ig-error-600-contrast);
}
:host([variant=danger]) button:focus,
:host([selected][variant=danger]) button:not([disabled]):focus {
  background: hsla(var(--ig-error-800), var(--ig-error-a));
  color: var(--ig-error-800-contrast);
}

[part=prefix],
[part=suffix] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

::slotted(*) {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

:host([variant=primary]) button[disabled],
:host([variant=info]) button[disabled],
:host([variant=success]) button[disabled],
:host([variant=warning]) button[disabled],
:host([variant=danger]) button[disabled] {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}

:host button {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.25rem), 0.25rem);
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
  color: var(--ig-gray-200-contrast);
}
:host button:hover {
  background: hsla(var(--ig-gray-400), var(--ig-gray-a));
  color: var(--ig-gray-400-contrast);
}
:host button:focus {
  outline: 0.125rem solid hsla(var(--ig-gray-200), var(--ig-gray-a));
  background: hsla(var(--ig-gray-400), var(--ig-gray-a));
  color: var(--ig-gray-400-contrast);
}
:host button[disabled] {
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
}

:host([variant=primary]) button,
:host([variant=primary]) button:focus,
:host([variant=primary]) button:hover,
:host([selected][variant=primary]) button:not([disabled]) {
  color: var(--ig-primary-700-contrast);
}

:host([variant=primary]) button:focus {
  outline: 0.125rem solid hsla(var(--ig-primary-200), var(--ig-primary-a));
}

:host([variant=info]) button,
:host([variant=info]) button:focus,
:host([variant=info]) button:hover,
:host([selected][variant=info]) button:not([disabled]) {
  color: var(--ig-info-700-contrast);
}

:host([variant=info]) button:focus {
  outline: 0.125rem solid hsla(var(--ig-info-200), var(--ig-info-a));
}

:host([variant=success]) button,
:host([variant=success]) button:focus,
:host([variant=success]) button:hover,
:host([selected][variant=success]) button:not([disabled]) {
  color: var(--ig-success-700-contrast);
}

:host([variant=success]) button:focus {
  outline: 0.125rem solid hsla(var(--ig-success-200), var(--ig-success-a));
}

:host([variant=warning]) button,
:host([variant=warning]) button:focus,
:host([variant=warning]) button:hover,
:host([selected][variant=warning]) button:not([disabled]) {
  color: var(--ig-warn-700-contrast);
}

:host([variant=warning]) button:focus {
  outline: 0.125rem solid hsla(var(--ig-warn-200), var(--ig-warn-a));
}

:host([variant=danger]) button,
:host([variant=danger]) button:focus,
:host([variant=danger]) button:hover,
:host([selected][variant=danger]) button:not([disabled]) {
  color: var(--ig-error-700-contrast);
}

:host([variant=danger]) button:focus {
  outline: 0.125rem solid hsla(var(--ig-error-200), var(--ig-error-a));
}`,Gt=i.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  --size: max(var(--is-large, 1) * max(2rem, -1 * 2rem), var(--is-medium, 1) * max(1.5rem, -1 * 1.5rem), var(--is-small, 1) * max(1.25rem, -1 * 1.25rem));
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  vertical-align: top;
}

:host([size=small]) {
  --component-size: var(--ig-size, var(--ig-size-small));
}
:host([size=small]) [part=prefix] {
  -webkit-margin-end: 0.1875rem;
          margin-inline-end: 0.1875rem;
}
:host([size=small]) [part=suffix] {
  -webkit-margin-start: 0.1875rem;
          margin-inline-start: 0.1875rem;
}

:host([size=medium]) {
  --component-size: var(--ig-size, var(--ig-size-medium));
}
:host([size=medium]) [part=prefix] {
  -webkit-margin-end: 0.375rem;
          margin-inline-end: 0.375rem;
}
:host([size=medium]) [part=suffix] {
  -webkit-margin-start: 0.375rem;
          margin-inline-start: 0.375rem;
}

:host([size=large]) {
  --component-size: var(--ig-size, var(--ig-size-large));
}
:host([size=large]) [part=prefix] {
  -webkit-margin-end: 0.5rem;
          margin-inline-end: 0.5rem;
}
:host([size=large]) [part=suffix] {
  -webkit-margin-start: 0.5rem;
          margin-inline-start: 0.5rem;
}
:host([size=large]) igc-icon[size=large] {
  --size: 1.25rem;
}

:host button {
  font-family: var(--ig-body-2-font-family, var(--ig-font-family));
  font-size: var(--ig-body-2-font-size);
  font-weight: var(--ig-body-2-font-weight);
  font-style: var(--ig-body-2-font-style);
  line-height: var(--ig-body-2-line-height);
  letter-spacing: var(--ig-body-2-letter-spacing);
  text-transform: var(--ig-body-2-text-transform);
  margin-top: var(--ig-body-2-margin-top);
  margin-bottom: var(--ig-body-2-margin-bottom);
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 1rem), 1rem);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  font-family: var(--ig-font-family);
  border-style: none;
  -webkit-box-shadow: none;
          box-shadow: none;
  cursor: pointer;
  height: var(--size);
  padding: max(var(--is-large, 1) * max(12px, -1 * 12px) * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * max(6px, -1 * 6px) * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * max(2px, -1 * 2px) * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
}
:host button[disabled] {
  pointer-events: none;
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}

:host([variant=primary]) button,
:host([selected][variant=primary]) button:not([disabled]) {
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  color: var(--ig-primary-500-contrast);
}
:host([variant=primary]) button:hover,
:host([selected][variant=primary]) button:not([disabled]):hover {
  background: hsla(var(--ig-primary-600), var(--ig-primary-a));
  color: var(--ig-primary-600-contrast);
}
:host([variant=primary]) button:focus,
:host([selected][variant=primary]) button:not([disabled]):focus {
  background: hsla(var(--ig-primary-800), var(--ig-primary-a));
  color: var(--ig-primary-800-contrast);
}

:host([variant=info]) button,
:host([selected][variant=info]) button:not([disabled]) {
  background: hsla(var(--ig-info-500), var(--ig-info-a));
  color: var(--ig-info-500-contrast);
}
:host([variant=info]) button:hover,
:host([selected][variant=info]) button:not([disabled]):hover {
  background: hsla(var(--ig-info-600), var(--ig-info-a));
  color: var(--ig-info-600-contrast);
}
:host([variant=info]) button:focus,
:host([selected][variant=info]) button:not([disabled]):focus {
  background: hsla(var(--ig-info-800), var(--ig-info-a));
  color: var(--ig-info-800-contrast);
}

:host([variant=success]) button,
:host([selected][variant=success]) button:not([disabled]) {
  background: hsla(var(--ig-success-500), var(--ig-success-a));
  color: var(--ig-success-500-contrast);
}
:host([variant=success]) button:hover,
:host([selected][variant=success]) button:not([disabled]):hover {
  background: hsla(var(--ig-success-600), var(--ig-success-a));
  color: var(--ig-success-600-contrast);
}
:host([variant=success]) button:focus,
:host([selected][variant=success]) button:not([disabled]):focus {
  background: hsla(var(--ig-success-800), var(--ig-success-a));
  color: var(--ig-success-800-contrast);
}

:host([variant=warning]) button,
:host([selected][variant=warning]) button:not([disabled]) {
  background: hsla(var(--ig-warn-500), var(--ig-warn-a));
  color: var(--ig-warn-500-contrast);
}
:host([variant=warning]) button:hover,
:host([selected][variant=warning]) button:not([disabled]):hover {
  background: hsla(var(--ig-warn-600), var(--ig-warn-a));
  color: var(--ig-warn-600-contrast);
}
:host([variant=warning]) button:focus,
:host([selected][variant=warning]) button:not([disabled]):focus {
  background: hsla(var(--ig-warn-800), var(--ig-warn-a));
  color: var(--ig-warn-800-contrast);
}

:host([variant=danger]) button,
:host([selected][variant=danger]) button:not([disabled]) {
  background: hsla(var(--ig-error-500), var(--ig-error-a));
  color: var(--ig-error-500-contrast);
}
:host([variant=danger]) button:hover,
:host([selected][variant=danger]) button:not([disabled]):hover {
  background: hsla(var(--ig-error-600), var(--ig-error-a));
  color: var(--ig-error-600-contrast);
}
:host([variant=danger]) button:focus,
:host([selected][variant=danger]) button:not([disabled]):focus {
  background: hsla(var(--ig-error-800), var(--ig-error-a));
  color: var(--ig-error-800-contrast);
}

[part=prefix],
[part=suffix] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

::slotted(*) {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

:host([variant=primary]) button[disabled],
:host([variant=info]) button[disabled],
:host([variant=success]) button[disabled],
:host([variant=warning]) button[disabled],
:host([variant=danger]) button[disabled] {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}

:host button {
  font-family: var(--ig-subtitle-2-font-family, var(--ig-font-family));
  font-size: var(--ig-subtitle-2-font-size);
  font-weight: var(--ig-subtitle-2-font-weight);
  font-style: var(--ig-subtitle-2-font-style);
  line-height: var(--ig-subtitle-2-line-height);
  letter-spacing: var(--ig-subtitle-2-letter-spacing);
  text-transform: var(--ig-subtitle-2-text-transform);
  margin-top: var(--ig-subtitle-2-margin-top);
  margin-bottom: var(--ig-subtitle-2-margin-bottom);
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
  outline: none;
}
:host button:hover {
  color: var(--ig-gray-200-contrast);
}
:host button:focus {
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  color: var(--ig-primary-700-contrast);
}
:host button[disabled] {
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
}

:host([selected]) button:not([disabled]) {
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  color: var(--ig-primary-700-contrast);
}
:host([selected]) button:not([disabled]):hover {
  background: hsla(var(--ig-primary-600), var(--ig-primary-a));
}
:host([selected]) button:not([disabled]):focus {
  background: hsla(var(--ig-primary-800), var(--ig-primary-a));
}`,Zt=i.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  --size: max(var(--is-large, 1) * max(2rem, -1 * 2rem), var(--is-medium, 1) * max(1.5rem, -1 * 1.5rem), var(--is-small, 1) * max(1.25rem, -1 * 1.25rem));
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  vertical-align: top;
}

:host([size=small]) {
  --component-size: var(--ig-size, var(--ig-size-small));
}
:host([size=small]) [part=prefix] {
  -webkit-margin-end: 0.1875rem;
          margin-inline-end: 0.1875rem;
}
:host([size=small]) [part=suffix] {
  -webkit-margin-start: 0.1875rem;
          margin-inline-start: 0.1875rem;
}

:host([size=medium]) {
  --component-size: var(--ig-size, var(--ig-size-medium));
}
:host([size=medium]) [part=prefix] {
  -webkit-margin-end: 0.375rem;
          margin-inline-end: 0.375rem;
}
:host([size=medium]) [part=suffix] {
  -webkit-margin-start: 0.375rem;
          margin-inline-start: 0.375rem;
}

:host([size=large]) {
  --component-size: var(--ig-size, var(--ig-size-large));
}
:host([size=large]) [part=prefix] {
  -webkit-margin-end: 0.5rem;
          margin-inline-end: 0.5rem;
}
:host([size=large]) [part=suffix] {
  -webkit-margin-start: 0.5rem;
          margin-inline-start: 0.5rem;
}
:host([size=large]) igc-icon[size=large] {
  --size: 1.25rem;
}

:host button {
  font-family: var(--ig-body-2-font-family, var(--ig-font-family));
  font-size: var(--ig-body-2-font-size);
  font-weight: var(--ig-body-2-font-weight);
  font-style: var(--ig-body-2-font-style);
  line-height: var(--ig-body-2-line-height);
  letter-spacing: var(--ig-body-2-letter-spacing);
  text-transform: var(--ig-body-2-text-transform);
  margin-top: var(--ig-body-2-margin-top);
  margin-bottom: var(--ig-body-2-margin-bottom);
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 1rem), 1rem);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  font-family: var(--ig-font-family);
  border-style: none;
  -webkit-box-shadow: none;
          box-shadow: none;
  cursor: pointer;
  height: var(--size);
  padding: max(var(--is-large, 1) * max(12px, -1 * 12px) * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * max(6px, -1 * 6px) * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * max(2px, -1 * 2px) * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
}
:host button[disabled] {
  pointer-events: none;
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}

:host([variant=primary]) button,
:host([selected][variant=primary]) button:not([disabled]) {
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  color: var(--ig-primary-500-contrast);
}
:host([variant=primary]) button:hover,
:host([selected][variant=primary]) button:not([disabled]):hover {
  background: hsla(var(--ig-primary-600), var(--ig-primary-a));
  color: var(--ig-primary-600-contrast);
}
:host([variant=primary]) button:focus,
:host([selected][variant=primary]) button:not([disabled]):focus {
  background: hsla(var(--ig-primary-800), var(--ig-primary-a));
  color: var(--ig-primary-800-contrast);
}

:host([variant=info]) button,
:host([selected][variant=info]) button:not([disabled]) {
  background: hsla(var(--ig-info-500), var(--ig-info-a));
  color: var(--ig-info-500-contrast);
}
:host([variant=info]) button:hover,
:host([selected][variant=info]) button:not([disabled]):hover {
  background: hsla(var(--ig-info-600), var(--ig-info-a));
  color: var(--ig-info-600-contrast);
}
:host([variant=info]) button:focus,
:host([selected][variant=info]) button:not([disabled]):focus {
  background: hsla(var(--ig-info-800), var(--ig-info-a));
  color: var(--ig-info-800-contrast);
}

:host([variant=success]) button,
:host([selected][variant=success]) button:not([disabled]) {
  background: hsla(var(--ig-success-500), var(--ig-success-a));
  color: var(--ig-success-500-contrast);
}
:host([variant=success]) button:hover,
:host([selected][variant=success]) button:not([disabled]):hover {
  background: hsla(var(--ig-success-600), var(--ig-success-a));
  color: var(--ig-success-600-contrast);
}
:host([variant=success]) button:focus,
:host([selected][variant=success]) button:not([disabled]):focus {
  background: hsla(var(--ig-success-800), var(--ig-success-a));
  color: var(--ig-success-800-contrast);
}

:host([variant=warning]) button,
:host([selected][variant=warning]) button:not([disabled]) {
  background: hsla(var(--ig-warn-500), var(--ig-warn-a));
  color: var(--ig-warn-500-contrast);
}
:host([variant=warning]) button:hover,
:host([selected][variant=warning]) button:not([disabled]):hover {
  background: hsla(var(--ig-warn-600), var(--ig-warn-a));
  color: var(--ig-warn-600-contrast);
}
:host([variant=warning]) button:focus,
:host([selected][variant=warning]) button:not([disabled]):focus {
  background: hsla(var(--ig-warn-800), var(--ig-warn-a));
  color: var(--ig-warn-800-contrast);
}

:host([variant=danger]) button,
:host([selected][variant=danger]) button:not([disabled]) {
  background: hsla(var(--ig-error-500), var(--ig-error-a));
  color: var(--ig-error-500-contrast);
}
:host([variant=danger]) button:hover,
:host([selected][variant=danger]) button:not([disabled]):hover {
  background: hsla(var(--ig-error-600), var(--ig-error-a));
  color: var(--ig-error-600-contrast);
}
:host([variant=danger]) button:focus,
:host([selected][variant=danger]) button:not([disabled]):focus {
  background: hsla(var(--ig-error-800), var(--ig-error-a));
  color: var(--ig-error-800-contrast);
}

[part=prefix],
[part=suffix] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

::slotted(*) {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

:host([variant=primary]) button[disabled],
:host([variant=info]) button[disabled],
:host([variant=success]) button[disabled],
:host([variant=warning]) button[disabled],
:host([variant=danger]) button[disabled] {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}

:host button {
  border: 0.0625rem solid hsla(var(--ig-gray-400), var(--ig-gray-a));
  background: hsla(var(--ig-surface-500), var(--ig-surface-a));
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}
:host button:hover {
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
}
:host button:focus {
  outline: 0.1875rem solid hsla(var(--ig-gray-300), var(--ig-gray-a));
}
:host button[disabled] {
  border-color: hsla(var(--ig-gray-200), var(--ig-gray-a));
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}

:host([selected]) button:not([disabled]) {
  border-color: transparent;
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  color: var(--ig-primary-700-contrast);
}
:host([selected]) button:not([disabled]):hover {
  background: hsla(var(--ig-primary-600), var(--ig-primary-a));
}
:host([selected]) button:not([disabled]):focus {
  outline: 0.1875rem solid hsla(var(--ig-primary-200), var(--ig-primary-a));
}

:host([variant=primary]) button,
:host([selected][variant=primary]) button:not([disabled]) {
  border-color: transparent;
}
:host([variant=primary]) button:hover,
:host([selected][variant=primary]) button:not([disabled]):hover {
  background: hsla(var(--ig-primary-400), var(--ig-primary-a));
  color: var(--ig-primary-400-contrast);
}
:host([variant=primary]) button:focus,
:host([selected][variant=primary]) button:not([disabled]):focus {
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  color: var(--ig-primary-500-contrast);
  outline: 0.1875rem solid hsla(var(--ig-primary-200), var(--ig-primary-a));
}

:host([variant=primary]) button[disabled] {
  background: hsla(var(--ig-primary-200), var(--ig-primary-a));
  color: var(--ig-primary-400-contrast);
}

:host([variant=info]) button,
:host([selected][variant=info]) button:not([disabled]) {
  border-color: transparent;
}
:host([variant=info]) button:hover,
:host([selected][variant=info]) button:not([disabled]):hover {
  background: hsla(var(--ig-info-400), var(--ig-info-a));
  color: var(--ig-info-400-contrast);
}
:host([variant=info]) button:focus,
:host([selected][variant=info]) button:not([disabled]):focus {
  background: hsla(var(--ig-info-500), var(--ig-info-a));
  color: var(--ig-info-500-contrast);
  outline: 0.1875rem solid hsla(var(--ig-info-200), var(--ig-info-a));
}

:host([variant=info]) button[disabled] {
  background: hsla(var(--ig-info-200), var(--ig-info-a));
  color: var(--ig-info-400-contrast);
}

:host([variant=success]) button,
:host([selected][variant=success]) button:not([disabled]) {
  border-color: transparent;
}
:host([variant=success]) button:hover,
:host([selected][variant=success]) button:not([disabled]):hover {
  background: hsla(var(--ig-success-400), var(--ig-success-a));
  color: var(--ig-success-400-contrast);
}
:host([variant=success]) button:focus,
:host([selected][variant=success]) button:not([disabled]):focus {
  background: hsla(var(--ig-success-500), var(--ig-success-a));
  color: var(--ig-success-500-contrast);
  outline: 0.1875rem solid hsla(var(--ig-success-200), var(--ig-success-a));
}

:host([variant=success]) button[disabled] {
  background: hsla(var(--ig-success-200), var(--ig-success-a));
  color: var(--ig-success-800-contrast);
}

:host([variant=warning]) button,
:host([selected][variant=warning]) button:not([disabled]) {
  border-color: transparent;
}
:host([variant=warning]) button:hover,
:host([selected][variant=warning]) button:not([disabled]):hover {
  background: hsla(var(--ig-warn-400), var(--ig-warn-a));
  color: var(--ig-warn-400-contrast);
}
:host([variant=warning]) button:focus,
:host([selected][variant=warning]) button:not([disabled]):focus {
  background: hsla(var(--ig-warn-500), var(--ig-warn-a));
  color: var(--ig-warn-500-contrast);
  outline: 0.1875rem solid hsla(var(--ig-warn-200), var(--ig-warn-a));
}

:host([variant=warning]) button[disabled] {
  background: hsla(var(--ig-warn-200), var(--ig-warn-a));
  color: var(--ig-warn-900-contrast);
}

:host([variant=danger]) button,
:host([selected][variant=danger]) button:not([disabled]) {
  border-color: transparent;
}
:host([variant=danger]) button:hover,
:host([selected][variant=danger]) button:not([disabled]):hover {
  background: hsla(var(--ig-error-400), var(--ig-error-a));
  color: var(--ig-error-400-contrast);
}
:host([variant=danger]) button:focus,
:host([selected][variant=danger]) button:not([disabled]):focus {
  background: hsla(var(--ig-error-500), var(--ig-error-a));
  color: var(--ig-error-500-contrast);
  outline: 0.1875rem solid hsla(var(--ig-error-200), var(--ig-error-a));
}

:host([variant=danger]) button[disabled] {
  background: hsla(var(--ig-error-200), var(--ig-error-a));
  color: var(--ig-error-400-contrast);
}`,Jt=i.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  --size: max(var(--is-large, 1) * max(2rem, -1 * 2rem), var(--is-medium, 1) * max(1.5rem, -1 * 1.5rem), var(--is-small, 1) * max(1.25rem, -1 * 1.25rem));
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  vertical-align: top;
}

:host([size=small]) {
  --component-size: var(--ig-size, var(--ig-size-small));
}
:host([size=small]) [part=prefix] {
  -webkit-margin-end: 0.1875rem;
          margin-inline-end: 0.1875rem;
}
:host([size=small]) [part=suffix] {
  -webkit-margin-start: 0.1875rem;
          margin-inline-start: 0.1875rem;
}

:host([size=medium]) {
  --component-size: var(--ig-size, var(--ig-size-medium));
}
:host([size=medium]) [part=prefix] {
  -webkit-margin-end: 0.375rem;
          margin-inline-end: 0.375rem;
}
:host([size=medium]) [part=suffix] {
  -webkit-margin-start: 0.375rem;
          margin-inline-start: 0.375rem;
}

:host([size=large]) {
  --component-size: var(--ig-size, var(--ig-size-large));
}
:host([size=large]) [part=prefix] {
  -webkit-margin-end: 0.5rem;
          margin-inline-end: 0.5rem;
}
:host([size=large]) [part=suffix] {
  -webkit-margin-start: 0.5rem;
          margin-inline-start: 0.5rem;
}
:host([size=large]) igc-icon[size=large] {
  --size: 1.25rem;
}

:host button {
  font-family: var(--ig-body-2-font-family, var(--ig-font-family));
  font-size: var(--ig-body-2-font-size);
  font-weight: var(--ig-body-2-font-weight);
  font-style: var(--ig-body-2-font-style);
  line-height: var(--ig-body-2-line-height);
  letter-spacing: var(--ig-body-2-letter-spacing);
  text-transform: var(--ig-body-2-text-transform);
  margin-top: var(--ig-body-2-margin-top);
  margin-bottom: var(--ig-body-2-margin-bottom);
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 1rem), 1rem);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  font-family: var(--ig-font-family);
  border-style: none;
  -webkit-box-shadow: none;
          box-shadow: none;
  cursor: pointer;
  height: var(--size);
  padding: max(var(--is-large, 1) * max(12px, -1 * 12px) * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * max(6px, -1 * 6px) * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * max(2px, -1 * 2px) * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
}
:host button[disabled] {
  pointer-events: none;
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}

:host([variant=primary]) button,
:host([selected][variant=primary]) button:not([disabled]) {
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  color: var(--ig-primary-500-contrast);
}
:host([variant=primary]) button:hover,
:host([selected][variant=primary]) button:not([disabled]):hover {
  background: hsla(var(--ig-primary-600), var(--ig-primary-a));
  color: var(--ig-primary-600-contrast);
}
:host([variant=primary]) button:focus,
:host([selected][variant=primary]) button:not([disabled]):focus {
  background: hsla(var(--ig-primary-800), var(--ig-primary-a));
  color: var(--ig-primary-800-contrast);
}

:host([variant=info]) button,
:host([selected][variant=info]) button:not([disabled]) {
  background: hsla(var(--ig-info-500), var(--ig-info-a));
  color: var(--ig-info-500-contrast);
}
:host([variant=info]) button:hover,
:host([selected][variant=info]) button:not([disabled]):hover {
  background: hsla(var(--ig-info-600), var(--ig-info-a));
  color: var(--ig-info-600-contrast);
}
:host([variant=info]) button:focus,
:host([selected][variant=info]) button:not([disabled]):focus {
  background: hsla(var(--ig-info-800), var(--ig-info-a));
  color: var(--ig-info-800-contrast);
}

:host([variant=success]) button,
:host([selected][variant=success]) button:not([disabled]) {
  background: hsla(var(--ig-success-500), var(--ig-success-a));
  color: var(--ig-success-500-contrast);
}
:host([variant=success]) button:hover,
:host([selected][variant=success]) button:not([disabled]):hover {
  background: hsla(var(--ig-success-600), var(--ig-success-a));
  color: var(--ig-success-600-contrast);
}
:host([variant=success]) button:focus,
:host([selected][variant=success]) button:not([disabled]):focus {
  background: hsla(var(--ig-success-800), var(--ig-success-a));
  color: var(--ig-success-800-contrast);
}

:host([variant=warning]) button,
:host([selected][variant=warning]) button:not([disabled]) {
  background: hsla(var(--ig-warn-500), var(--ig-warn-a));
  color: var(--ig-warn-500-contrast);
}
:host([variant=warning]) button:hover,
:host([selected][variant=warning]) button:not([disabled]):hover {
  background: hsla(var(--ig-warn-600), var(--ig-warn-a));
  color: var(--ig-warn-600-contrast);
}
:host([variant=warning]) button:focus,
:host([selected][variant=warning]) button:not([disabled]):focus {
  background: hsla(var(--ig-warn-800), var(--ig-warn-a));
  color: var(--ig-warn-800-contrast);
}

:host([variant=danger]) button,
:host([selected][variant=danger]) button:not([disabled]) {
  background: hsla(var(--ig-error-500), var(--ig-error-a));
  color: var(--ig-error-500-contrast);
}
:host([variant=danger]) button:hover,
:host([selected][variant=danger]) button:not([disabled]):hover {
  background: hsla(var(--ig-error-600), var(--ig-error-a));
  color: var(--ig-error-600-contrast);
}
:host([variant=danger]) button:focus,
:host([selected][variant=danger]) button:not([disabled]):focus {
  background: hsla(var(--ig-error-800), var(--ig-error-a));
  color: var(--ig-error-800-contrast);
}

[part=prefix],
[part=suffix] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

::slotted(*) {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

:host([variant=primary]) button[disabled],
:host([variant=info]) button[disabled],
:host([variant=success]) button[disabled],
:host([variant=warning]) button[disabled],
:host([variant=danger]) button[disabled] {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}

:host button {
  background: hsla(var(--ig-gray-300), var(--ig-gray-a));
  color: var(--ig-gray-300-contrast);
  outline: none;
}
:host button:hover {
  background: hsla(var(--ig-gray-400), var(--ig-gray-a));
  color: var(--ig-gray-400-contrast);
}
:host button:focus {
  background: hsla(var(--ig-gray-500), var(--ig-gray-a));
  color: var(--ig-gray-500-contrast);
}
:host button[disabled] {
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
}`;var ea=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n};k(U);let ta=class extends(p(z(i.oi))){constructor(){super(),this.disabled=!1,this.removable=!1,this.selectable=!1,this.selected=!1,this.size="medium"}handleSelect(){this.selectable&&(this.selected=!this.selected,this.emitEvent("igcSelect",{detail:this.selected}))}handleRemove(e){this.emitEvent("igcRemove"),e.stopPropagation()}handleKeyup(e){/\s|enter/i.test(e.key)&&this.handleRemove(e)}render(){return i.dy`
      <button
        part="base"
        .disabled="${this.disabled}"
        aria-selected="${this.selected?"true":"false"}"
        aria-disabled="${this.disabled?"true":"false"}"
        @click=${this.handleSelect}
      >
        <span part="prefix">
          ${this.selectable&&this.selected?i.dy`<slot @slotchange=${this.slotChanges} name="select">
                <igc-icon
                  size=${this.size}
                  name="chip_select"
                  collection="internal"
                ></igc-icon>
              </slot>`:i.Ld}
          <slot name="start"></slot>
          <slot name="prefix"></slot>
        </span>
        <slot></slot>
        <span part="suffix">
          <slot name="end"></slot>
          <slot name="suffix"></slot>
          ${this.removable&&!this.disabled?i.dy`<slot
                @slotchange=${this.slotChanges}
                @click=${this.handleRemove}
                @keyup=${this.handleKeyup}
                name="remove"
              >
                <igc-icon
                  size=${this.size}
                  name="chip_cancel"
                  collection="internal"
                  tabindex="0"
                  role="button"
                  aria-label="remove"
                ></igc-icon>
              </slot>`:i.Ld}
        </span>
      </button>
    `}slotChanges(){this.requestUpdate()}};ta.tagName="igc-chip",ta.styles=Wt,ea([(0,r.Cb)({type:Boolean,reflect:!0})],ta.prototype,"disabled",void 0),ea([(0,r.Cb)({type:Boolean,reflect:!0})],ta.prototype,"removable",void 0),ea([(0,r.Cb)({type:Boolean,reflect:!0})],ta.prototype,"selectable",void 0),ea([(0,r.Cb)({type:Boolean,reflect:!0}),(e,t)=>{}],ta.prototype,"selected",void 0),ea([(0,r.Cb)({reflect:!0})],ta.prototype,"variant",void 0),ta=ea([b({material:Jt,bootstrap:Qt,fluent:Gt,indigo:Zt})],ta);const aa=ta,ia=i.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  --component-size: var(--ig-size, var(--ig-size-medium));
  display: block;
  font-family: var(--ig-font-family);
}
:host > igc-input::part(input) {
  -o-text-overflow: ellipsis;
     text-overflow: ellipsis;
  cursor: pointer;
}

:host(:not([single-select])) > igc-input::part(input)::-moz-selection {
  background: transparent;
}

:host(:not([single-select])) > igc-input::part(input)::selection {
  background: transparent;
}

:host([invalid]) ::slotted([slot=helper-text]) {
  color: hsla(var(--ig-error-500), var(--ig-error-a));
}

:host([disabled]) {
  pointer-events: none;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
:host([disabled]) igc-input::part(input)::-moz-selection {
  background: transparent;
}
:host([disabled]) igc-input::part(input)::selection {
  background: transparent;
}

[part=helper-text] {
  line-height: 1;
}
[part=helper-text] ::slotted([slot=helper-text]) {
  font-family: var(--ig-caption-font-family, var(--ig-font-family));
  font-size: var(--ig-caption-font-size);
  font-weight: var(--ig-caption-font-weight);
  font-style: var(--ig-caption-font-style);
  line-height: var(--ig-caption-line-height);
  letter-spacing: var(--ig-caption-letter-spacing);
  text-transform: var(--ig-caption-text-transform);
  margin-top: var(--ig-caption-margin-top);
  margin-bottom: var(--ig-caption-margin-bottom);
  line-height: inherit;
}

[part=clear-icon],
[part=toggle-icon],
[part~=case-icon] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  cursor: pointer;
}

[part=list-wrapper] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.25rem), 0.25rem);
  position: absolute;
  width: 100%;
  background: hsla(var(--ig-surface-500), var(--ig-surface-a));
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
  -webkit-box-shadow: var(--ig-elevation-8);
          box-shadow: var(--ig-elevation-8);
  overflow: hidden;
  outline-style: none;
  z-index: 999999;
}
[part=list-wrapper] igc-input {
  --ig-size: var(--ig-size-small);
  --ig-theme: material;
}
[part=list-wrapper] igc-input::part(container) {
  background: transparent;
  -webkit-border-start: 0;
          border-inline-start: 0;
  border-inline-end-color: transparent;
  -webkit-border-before: 0;
          border-block-start: 0;
  border-radius: 0;
}
[part=list-wrapper] igc-input::part(start) {
  display: none;
}
[part=list-wrapper] igc-input::part(input) {
  border-radius: 0;
  padding: 0;
  -webkit-border-start: 0;
          border-inline-start: 0;
  border-inline-end-color: transparent;
  -webkit-border-before: 0;
          border-block-start: 0;
  -webkit-box-shadow: none;
          box-shadow: none;
}
[part=list-wrapper] igc-input::part(input)::-moz-selection {
  background: hsla(var(--ig-primary-100), var(--ig-primary-a));
}
[part=list-wrapper] igc-input::part(input)::selection {
  background: hsla(var(--ig-primary-100), var(--ig-primary-a));
}
[part=list-wrapper] [part="case-icon active"] {
  color: hsla(var(--ig-primary-500), var(--ig-primary-a));
}

[part=filter-input] {
  padding-inline: max(var(--is-large, 1) * max(16px, -1 * 16px) * var(--ig-spacing-inline-large, var(--ig-spacing-inline, --ig-spacing)), var(--is-medium, 1) * max(8px, -1 * 8px) * var(--ig-spacing-inline-medium, var(--ig-spacing-inline, --ig-spacing)), var(--is-small, 1) * max(4px, -1 * 4px) * var(--ig-spacing-inline-small, var(--ig-spacing-inline, --ig-spacing)));
  padding-block: max(var(--is-large, 1) * max(8px, -1 * 8px) * var(--ig-spacing-block-large, var(--ig-spacing-block, --ig-spacing)), var(--is-medium, 1) * max(8px, -1 * 8px) * var(--ig-spacing-block-medium, var(--ig-spacing-block, --ig-spacing)), var(--is-small, 1) * max(8px, -1 * 8px) * var(--ig-spacing-block-small, var(--ig-spacing-block, --ig-spacing)));
  z-index: 26;
}

[part=list] {
  min-height: 12.5rem !important;
  outline-style: none;
}

[part=case-icon] {
  color: hsla(var(--ig-gray-600), var(--ig-gray-a));
}

[part="case-icon active"] {
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
}

[part=empty] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  width: 100%;
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
  padding: 1rem 1.5rem;
  font-size: 0.8125rem;
}`,ra=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host [part=helper-text] {
  margin-top: 0.25rem;
}
:host ::slotted([slot=helper-text]) {
  font-family: var(--ig-body-2-font-family, var(--ig-font-family));
  font-size: var(--ig-body-2-font-size);
  font-weight: var(--ig-body-2-font-weight);
  font-style: var(--ig-body-2-font-style);
  line-height: var(--ig-body-2-line-height);
  letter-spacing: var(--ig-body-2-letter-spacing);
  text-transform: var(--ig-body-2-text-transform);
  margin-top: var(--ig-body-2-margin-top);
  margin-bottom: var(--ig-body-2-margin-bottom);
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}

:host(:focus-within) igc-input[readonly]:not([disabled])::part(input) {
  -webkit-box-shadow: 0 0 0 0.25rem hsla(var(--ig-primary-500), 0.38);
          box-shadow: 0 0 0 0.25rem hsla(var(--ig-primary-500), 0.38);
  border-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
}

:host([invalid]) igc-input[readonly]:not([disabled])::part(input),
:host([invalid]:focus-within) igc-input[readonly]:not([disabled])::part(input) {
  -webkit-box-shadow: 0 0 0 0.25rem hsla(var(--ig-error-500), 0.38);
          box-shadow: 0 0 0 0.25rem hsla(var(--ig-error-500), 0.38);
  border-color: hsla(var(--ig-error-500), var(--ig-error-a));
}

:host([disabled]) ::slotted([slot=helper-text]) {
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}

igc-input[readonly]:not([disabled])::part(prefix),
igc-input[readonly]:not([disabled])::part(suffix) {
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
  background: hsla(var(--ig-gray-300), var(--ig-gray-a));
}

igc-input[readonly]:not([disabled])::part(prefix),
igc-input[readonly]:not([disabled])::part(suffix),
igc-input[readonly]:not([disabled])::part(container) {
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
}

igc-input[readonly]:not([disabled])::part(container) {
  background: var(--input-background, #fff);
}

igc-input[readonly]:not([disabled])::part(prefix),
igc-input[readonly]:not([disabled])::part(suffix),
igc-input[readonly]:not([disabled])::part(input) {
  border-color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}

igc-input[disabled] {
  pointer-events: none;
}

igc-input[disabled]::part(prefix),
igc-input[disabled]::part(suffix),
igc-input[disabled]::part(container) {
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}

igc-input[disabled]::part(prefix),
igc-input[disabled]::part(suffix),
igc-input[disabled]::part(input) {
  border-color: hsla(var(--ig-gray-300), var(--ig-gray-a));
}

[part=helper-text] {
  margin-top: 0.25rem;
}

[part=clear-icon] {
  -webkit-border-end: 0.0625rem solid hsla(var(--ig-gray-400), var(--ig-gray-a));
          border-inline-end: 0.0625rem solid hsla(var(--ig-gray-400), var(--ig-gray-a));
}

[part=list-wrapper] igc-input::part(suffix) {
  background: transparent;
  border: none;
  border-radius: 0;
}
[part=list-wrapper] [part=search-input] [part~=case-icon] {
  -webkit-border-after: 0.0625rem solid hsla(var(--ig-gray-400), var(--ig-gray-a));
          border-block-end: 0.0625rem solid hsla(var(--ig-gray-400), var(--ig-gray-a));
  -webkit-transition: border 0.15s ease-out;
  -o-transition: border 0.15s ease-out;
  transition: border 0.15s ease-out;
}
[part=list-wrapper] [part=search-input]:focus [part~=case-icon], [part=list-wrapper] [part=search-input]:focus-within [part~=case-icon] {
  -webkit-border-after: 0.0625rem solid hsla(var(--ig-primary-500), var(--ig-primary-a));
          border-block-end: 0.0625rem solid hsla(var(--ig-primary-500), var(--ig-primary-a));
}

:host([disabled]) igc-input::part(input)::-webkit-input-placeholder {
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}

:host([disabled]) igc-input::part(input)::-moz-placeholder {
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}

:host([disabled]) igc-input::part(input):-ms-input-placeholder {
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}

:host([disabled]) igc-input::part(input)::-ms-input-placeholder {
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}

:host([disabled]) igc-input::part(label),
:host([disabled]) igc-input::part(input)::placeholder,
:host([disabled]) ::slotted([slot=helper-text]) {
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}
:host([disabled]) [part=clear-icon] {
  -webkit-border-end: 0.0625rem solid hsla(var(--ig-gray-300), var(--ig-gray-a));
          border-inline-end: 0.0625rem solid hsla(var(--ig-gray-300), var(--ig-gray-a));
}`,la=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host([outlined]:focus-within) igc-input[readonly]:not([disabled])::part(start) {
  border-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
  border-inline-start-width: 0.125rem;
  border-block-start-width: 0.125rem;
  border-block-end-width: 0.125rem;
}
:host([outlined]:focus-within) igc-input[readonly]:not([disabled])::part(notch) {
  border-width: 0.125rem;
  border-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
  border-top: 0.0625rem solid transparent;
}
:host([outlined]:focus-within) igc-input[readonly]:not([disabled])::part(filler) {
  border-width: 0.125rem;
  border-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
}
:host([outlined]:focus-within) igc-input[readonly]:not([disabled])::part(end) {
  border-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
  border-inline-end-width: 0.125rem;
  border-block-start-width: 0.125rem;
  border-block-end-width: 0.125rem;
}
:host([outlined]:focus-within) igc-input[readonly]:not([disabled])::part(label) {
  color: hsla(var(--ig-primary-500), var(--ig-primary-a));
}

:host([outlined][invalid]:focus-within) igc-input[readonly]:not([disabled])::part(start) {
  border-color: hsla(var(--ig-error-500), var(--ig-error-a));
  border-inline-start-width: 0.125rem;
  border-block-start-width: 0.125rem;
  border-block-end-width: 0.125rem;
}
:host([outlined][invalid]:focus-within) igc-input[readonly]:not([disabled])::part(notch) {
  border-width: 0.125rem;
  border-color: hsla(var(--ig-error-500), var(--ig-error-a));
  border-top: 0.0625rem solid transparent;
}
:host([outlined][invalid]:focus-within) igc-input[readonly]:not([disabled])::part(filler) {
  border-width: 0.125rem;
  border-color: hsla(var(--ig-error-500), var(--ig-error-a));
}
:host([outlined][invalid]:focus-within) igc-input[readonly]:not([disabled])::part(end) {
  border-color: hsla(var(--ig-error-500), var(--ig-error-a));
  border-inline-end-width: 0.125rem;
  border-block-start-width: 0.125rem;
  border-block-end-width: 0.125rem;
}
:host([outlined][invalid]:focus-within) igc-input[readonly]:not([disabled])::part(label) {
  color: hsla(var(--ig-error-500), var(--ig-error-a));
}

[part~=toggle-icon] {
  background: hsla(var(--ig-gray-300), var(--ig-gray-a));
}

[part=helper-text] {
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
  margin-top: 0.3125rem;
  padding-inline: max(var(--is-large, 1) * max(1.125rem, -1 * 1.125rem) * var(--ig-spacing-inline-large, var(--ig-spacing-inline, --ig-spacing)), var(--is-medium, 1) * max(1rem, -1 * 1rem) * var(--ig-spacing-inline-medium, var(--ig-spacing-inline, --ig-spacing)), var(--is-small, 1) * max(0.875rem, -1 * 0.875rem) * var(--ig-spacing-inline-small, var(--ig-spacing-inline, --ig-spacing)));
}

:host([disabled]) [part~=toggle-icon],
:host([disabled]) ::slotted([slot=helper-text]) {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}
:host([disabled]) [part~=toggle-icon] {
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
}

igc-input:not([outlined]):focus-within [part~=toggle-icon] {
  background: hsla(var(--ig-gray-400), 0.3);
}

[part=helper-text] {
  margin-top: 0.3125rem;
  padding-inline: max(var(--is-large, 1) * max(1.125rem, -1 * 1.125rem) * var(--ig-spacing-inline-large, var(--ig-spacing-inline, --ig-spacing)), var(--is-medium, 1) * max(1rem, -1 * 1rem) * var(--ig-spacing-inline-medium, var(--ig-spacing-inline, --ig-spacing)), var(--is-small, 1) * max(0.875rem, -1 * 0.875rem) * var(--ig-spacing-inline-small, var(--ig-spacing-inline, --ig-spacing)));
}

:host([disabled]) igc-input::part(input)::-webkit-input-placeholder {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}

:host([disabled]) igc-input::part(input)::-moz-placeholder {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}

:host([disabled]) igc-input::part(input):-ms-input-placeholder {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}

:host([disabled]) igc-input::part(input)::-ms-input-placeholder {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}

:host([disabled]) igc-input::part(label),
:host([disabled]) igc-input::part(input)::placeholder,
:host([disabled]) [part~=toggle-icon],
:host([disabled]) ::slotted([slot=helper-text]) {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}
:host([disabled]) [part~=toggle-icon] {
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
}

:host([outlined]:focus-within) igc-input::part(suffix) {
  -webkit-margin-end: -1px;
          margin-inline-end: -1px;
}
:host([outlined]:focus-within) igc-input::part(prefix) {
  -webkit-margin-start: -1px;
          margin-inline-start: -1px;
}

:host ::slotted([slot=helper-text]) {
  font-family: var(--ig-caption-font-family, var(--ig-font-family));
  font-size: var(--ig-caption-font-size);
  font-weight: var(--ig-caption-font-weight);
  font-style: var(--ig-caption-font-style);
  line-height: var(--ig-caption-line-height);
  letter-spacing: var(--ig-caption-letter-spacing);
  text-transform: var(--ig-caption-text-transform);
  margin-top: var(--ig-caption-margin-top);
  margin-bottom: var(--ig-caption-margin-bottom);
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
  line-height: 1;
}`,na=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
[part=helper-text] {
  margin-top: 0.3125rem;
}
[part=helper-text] ::slotted([slot=helper-text]) {
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}

:host {
  --size: max(var(--is-large, 1) * max(3rem, -1 * 3rem), var(--is-medium, 1) * max(2.5rem, -1 * 2.5rem), var(--is-small, 1) * max(2rem, -1 * 2rem));
}

:host(:focus-within) igc-input[readonly]:not([disabled])::part(container) {
  border-width: 0.125rem;
}

:host(:not([invalid]):focus-within) igc-input[readonly]:not([disabled])::part(container) {
  border-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
  border-width: 0.125rem;
}
:host(:not([invalid]):focus-within) igc-input[readonly]:not([disabled])::part(prefix) {
  -webkit-margin-start: -0.0625rem;
          margin-inline-start: -0.0625rem;
}
:host(:not([invalid]):focus-within) igc-input[readonly]:not([disabled])::part(suffix) {
  -webkit-margin-end: -0.0625rem;
          margin-inline-end: -0.0625rem;
}
:host(:not([invalid]):focus-within) igc-input[readonly]:not([disabled])::part(input) {
  height: calc(var(--size) - 0.25rem);
}

:host([disabled]) [part=helper-text] ::slotted([slot=helper-text]) {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}

:host ::slotted([slot=helper-text]) {
  font-family: var(--ig-caption-font-family, var(--ig-font-family));
  font-size: var(--ig-caption-font-size);
  font-weight: var(--ig-caption-font-weight);
  font-style: var(--ig-caption-font-style);
  line-height: var(--ig-caption-line-height);
  letter-spacing: var(--ig-caption-letter-spacing);
  text-transform: var(--ig-caption-text-transform);
  margin-top: var(--ig-caption-margin-top);
  margin-bottom: var(--ig-caption-margin-bottom);
  display: block;
  padding: 0;
  margin-top: 0.3125rem;
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}

:host([disabled]) igc-input::part(input)::-webkit-input-placeholder {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}

:host([disabled]) igc-input::part(input)::-moz-placeholder {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}

:host([disabled]) igc-input::part(input):-ms-input-placeholder {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}

:host([disabled]) igc-input::part(input)::-ms-input-placeholder {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}

:host([disabled]) igc-input::part(label),
:host([disabled]) igc-input::part(input)::placeholder,
:host([disabled]) ::slotted([slot=helper-text]) {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}

:host([invalid]:focus-within) igc-input::part(input) {
  height: calc(var(--size) - 0.25rem);
}
:host([invalid]:focus-within) igc-input::part(suffix) {
  height: var(--size);
  -webkit-margin-end: -0.0625rem;
          margin-inline-end: -0.0625rem;
  -webkit-margin-before: -0.125rem;
          margin-block-start: -0.125rem;
}
:host([invalid]:focus-within) igc-input::part(prefix) {
  -webkit-margin-start: -0.0625rem;
          margin-inline-start: -0.0625rem;
  -webkit-margin-before: -0.125rem;
          margin-block-start: -0.125rem;
}

[part=filter-input] {
  padding: max(var(--is-large, 1) * max(8px, -1 * 8px) * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * max(4px, -1 * 4px) * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * max(2px, -1 * 2px) * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
}

[part=list-wrapper] igc-input::part(suffix) {
  background: transparent;
}
[part=list-wrapper] igc-input::part(input) {
  height: var(--size);
}`,sa=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
[part~=toggle-icon] {
  background: hsla(var(--ig-gray-300), var(--ig-gray-a));
}

[part=helper-text] {
  margin-top: 0.375rem;
  padding-inline: max(var(--is-large, 1) * max(1rem, -1 * 1rem) * var(--ig-spacing-inline-large, var(--ig-spacing-inline, --ig-spacing)), var(--is-medium, 1) * max(0.75rem, -1 * 0.75rem) * var(--ig-spacing-inline-medium, var(--ig-spacing-inline, --ig-spacing)), var(--is-small, 1) * max(0.5rem, -1 * 0.5rem) * var(--ig-spacing-inline-small, var(--ig-spacing-inline, --ig-spacing)));
  color: hsla(var(--ig-gray-600), var(--ig-gray-a));
}

:host ::slotted([slot=helper-text]) {
  color: hsla(var(--ig-gray-600), var(--ig-gray-a));
}

:host([disabled]) [part=helper-text] ::slotted([slot=helper-text]) {
  color: hsla(var(--ig-gray-300), var(--ig-gray-a));
}
:host([disabled]) [part=toggle-icon] {
  background: transparent;
}

:host(:focus-within) igc-input[readonly]:not([disabled])::part(container)::after {
  -webkit-transform: scaleY(1);
      -ms-transform: scaleY(1);
          transform: scaleY(1);
}

:host(:not([invalid]):focus-within) igc-input[readonly]:not([disabled])::part(container) {
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
}
:host(:not([invalid]):focus-within) igc-input[readonly]:not([disabled])::part(label) {
  color: var(--label-focus-color, hsla(var(--ig-primary-500), var(--ig-primary-a)));
}

[part=helper-text] {
  margin-top: 0.375rem;
  padding-inline: max(var(--is-large, 1) * max(1rem, -1 * 1rem) * var(--ig-spacing-inline-large, var(--ig-spacing-inline, --ig-spacing)), var(--is-medium, 1) * max(0.75rem, -1 * 0.75rem) * var(--ig-spacing-inline-medium, var(--ig-spacing-inline, --ig-spacing)), var(--is-small, 1) * max(0.5rem, -1 * 0.5rem) * var(--ig-spacing-inline-small, var(--ig-spacing-inline, --ig-spacing)));
}
[part=helper-text] ::slotted([slot=helper-text]) {
  color: hsla(var(--ig-gray-600), var(--ig-gray-a));
}

:host([disabled]) [part=helper-text] ::slotted([slot=helper-text]) {
  color: hsla(var(--ig-gray-300), var(--ig-gray-a));
}
:host([disabled]) [part=toggle-icon] {
  background: transparent;
}`;var oa=a(42943);class ga extends oa.ky{constructor(){super(...arguments),this.scroller=!0}async connectedCallback(){await super.layoutComplete,super.connectedCallback(),this.setAttribute("tabindex","0"),this.setAttribute("role","listbox")}}ga.tagName="igc-combo-list";const da=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

:host {
  font-family: var(--ig-body-2-font-family, var(--ig-font-family));
  font-size: var(--ig-body-2-font-size);
  font-weight: var(--ig-body-2-font-weight);
  font-style: var(--ig-body-2-font-style);
  line-height: var(--ig-body-2-line-height);
  letter-spacing: var(--ig-body-2-letter-spacing);
  text-transform: var(--ig-body-2-text-transform);
  margin-top: var(--ig-body-2-margin-top);
  margin-bottom: var(--ig-body-2-margin-bottom);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  width: 100%;
  white-space: nowrap;
  position: relative;
  cursor: pointer;
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
  outline-style: none;
  padding-inline: max(var(--is-large, 1) * max(24px, -1 * 24px) * var(--ig-spacing-inline-large, var(--ig-spacing-inline, --ig-spacing)), var(--is-medium, 1) * max(12px, -1 * 12px) * var(--ig-spacing-inline-medium, var(--ig-spacing-inline, --ig-spacing)), var(--is-small, 1) * max(6px, -1 * 6px) * var(--ig-spacing-inline-small, var(--ig-spacing-inline, --ig-spacing)));
  padding-block: max(var(--is-large, 1) * max(8px, -1 * 8px) * var(--ig-spacing-block-large, var(--ig-spacing-block, --ig-spacing)), var(--is-medium, 1) * max(4px, -1 * 4px) * var(--ig-spacing-block-medium, var(--ig-spacing-block, --ig-spacing)), var(--is-small, 1) * max(2px, -1 * 2px) * var(--ig-spacing-block-small, var(--ig-spacing-block, --ig-spacing)));
}

:host(:hover),
:host([active]) {
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
}

:host([selected]) {
  background: hsla(var(--ig-secondary-100), var(--ig-secondary-a));
  color: var(--ig-secondary-100-contrast);
}

:host([selected]:hover),
:host([selected][active]) {
  background: hsla(var(--ig-secondary-200), var(--ig-secondary-a));
  color: var(--ig-secondary-200-contrast);
}

:host([disabled]) {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
  cursor: default;
  pointer-events: none;
}

::slotted(*) {
  font: inherit;
}

[part=content] {
  white-space: nowrap;
  -o-text-overflow: ellipsis;
     text-overflow: ellipsis;
  overflow: hidden;
  display: block;
  width: 100%;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

[part=prefix],
[part=suffix] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

[name=prefix]::slotted(*) {
  -webkit-margin-end: max(var(--is-large, 1) * max(16px, -1 * 16px) * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * max(16px, -1 * 16px) * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * max(16px, -1 * 16px) * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
          margin-inline-end: max(var(--is-large, 1) * max(16px, -1 * 16px) * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * max(16px, -1 * 16px) * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * max(16px, -1 * 16px) * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
}

[name=suffix]::slotted(*) {
  -webkit-margin-start: max(var(--is-large, 1) * max(16px, -1 * 16px) * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * max(16px, -1 * 16px) * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * max(16px, -1 * 16px) * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
          margin-inline-start: max(var(--is-large, 1) * max(16px, -1 * 16px) * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * max(16px, -1 * 16px) * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * max(16px, -1 * 16px) * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
}

:host {
  --component-size: var(--ig-size, var(--ig-size-medium));
  gap: 0.5rem;
  border-radius: 0 !important;
}

igc-checkbox {
  pointer-events: none;
}`,ha=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  color: var(--item-color, hsla(var(--ig-gray-900), var(--ig-gray-a)));
}

:host(:hover),
:host([active]) {
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
  color: var(--hover-item-color, var(--ig-gray-100-contrast));
}

:host([selected]) {
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  color: var(--ig-primary-600-contrast);
}

:host([selected]:hover),
:host([selected][active]) {
  background: hsla(var(--ig-primary-600), var(--ig-primary-a));
  color: var(--ig-primary-600-contrast);
}

:host([disabled]) {
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}`,ca=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  padding: max(var(--is-large, 1) * max(8px, -1 * 8px) * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * max(4px, -1 * 4px) * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * max(2px, -1 * 2px) * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
}

:host(:hover),
:host([active]) {
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
  color: var(--ig-gray-100-contrast);
}

:host([selected]) {
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
  color: var(--selected-item-color, var(--ig-gray-200-contrast));
}

:host([selected]:hover),
:host([selected][active]) {
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
  color: var(--selected-item-color, var(--ig-gray-200-contrast));
}

:host([disabled]) {
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}`,ba=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.125rem), 0.125rem);
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}

:host(:hover),
:host([active]) {
  background: hsla(var(--ig-primary-500), 0.15);
}

:host([selected]) {
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  color: var(--ig-primary-500-contrast);
}

:host([selected]:hover),
:host([selected][active]) {
  background: hsla(var(--ig-primary-400), var(--ig-primary-a));
  color: var(--ig-primary-400-contrast);
}

:host([disabled]) {
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}`;var ma=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n};k(Rt);let pa=class extends i.oi{constructor(){super(...arguments),this.selected=!1,this.active=!1,this.hideCheckbox=!1}selectedChange(){this.selected?this.setAttribute("aria-selected","true"):this.removeAttribute("aria-selected")}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option")}renderCheckbox(){return i.dy`<section part="prefix">
      <igc-checkbox
        aria-hidden="true"
        ?checked=${this.selected}
        tabindex="-1"
        exportparts="control: checkbox, indicator: checkbox-indicator, checked"
      ></igc-checkbox>
    </section>`}render(){return i.dy`
      ${this.hideCheckbox?i.Ld:this.renderCheckbox()}
      <section id="content" part="content">
        <slot></slot>
      </section>
    `}};pa.tagName="igc-combo-item",pa.styles=da,ma([(0,r.Cb)({attribute:!1})],pa.prototype,"index",void 0),ma([(0,r.Cb)({type:Boolean,reflect:!0})],pa.prototype,"selected",void 0),ma([(0,r.Cb)({type:Boolean,reflect:!0})],pa.prototype,"active",void 0),ma([(0,r.Cb)({attribute:"hide-checkbox",type:Boolean,reflect:!1})],pa.prototype,"hideCheckbox",void 0),ma([m("selected")],pa.prototype,"selectedChange",null),pa=ma([b({bootstrap:ha,fluent:ca,indigo:ba})],pa);const va=pa,ya=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

:host {
  font-family: var(--ig-overline-font-family, var(--ig-font-family));
  font-size: var(--ig-overline-font-size);
  font-weight: var(--ig-overline-font-weight);
  font-style: var(--ig-overline-font-style);
  line-height: var(--ig-overline-line-height);
  letter-spacing: var(--ig-overline-letter-spacing);
  text-transform: var(--ig-overline-text-transform);
  margin-top: var(--ig-overline-margin-top);
  margin-bottom: var(--ig-overline-margin-bottom);
  white-space: nowrap;
  -o-text-overflow: ellipsis;
     text-overflow: ellipsis;
  overflow: hidden;
  display: block;
  white-space: nowrap;
  position: relative;
  color: var(--header-color, hsla(var(--ig-secondary-500), var(--ig-secondary-a)));
  pointer-events: none;
  padding-inline: max(var(--is-large, 1) * max(16px, -1 * 16px) * var(--ig-spacing-inline-large, var(--ig-spacing-inline, --ig-spacing)), var(--is-medium, 1) * max(8px, -1 * 8px) * var(--ig-spacing-inline-medium, var(--ig-spacing-inline, --ig-spacing)), var(--is-small, 1) * max(4px, -1 * 4px) * var(--ig-spacing-inline-small, var(--ig-spacing-inline, --ig-spacing)));
  padding-block: max(var(--is-large, 1) * max(8px, -1 * 8px) * var(--ig-spacing-block-large, var(--ig-spacing-block, --ig-spacing)), var(--is-medium, 1) * max(4px, -1 * 4px) * var(--ig-spacing-block-medium, var(--ig-spacing-block, --ig-spacing)), var(--is-small, 1) * max(2px, -1 * 2px) * var(--ig-spacing-block-small, var(--ig-spacing-block, --ig-spacing)));
}

::slotted(*) {
  font: inherit;
}

:host {
  --component-size: var(--ig-size, var(--ig-size-medium));
}`,ua=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}`,xa=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  padding: max(var(--is-large, 1) * max(8px, -1 * 8px) * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * max(4px, -1 * 4px) * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * max(2px, -1 * 2px) * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
}`;let fa=class extends i.oi{render(){return i.dy`<slot></slot>`}};fa.tagName="igc-combo-header",fa.styles=ya,fa=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n}([b({bootstrap:ua,fluent:xa})],fa);const wa=fa,ka=i.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
[part~=suffixed] [part=suffix], [part~=prefixed] [part=prefix] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}

:host {
  --size: max(var(--is-large, 1) * max(3.5rem, -1 * 3.5rem), var(--is-medium, 1) * max(3rem, -1 * 3rem), var(--is-small, 1) * max(2.5rem, -1 * 2.5rem));
  position: relative;
  display: block;
  font-family: var(--ig-font-family);
  outline-style: none;
}

:host([invalid]) [part=helper-text] {
  color: hsla(var(--ig-error-500), var(--ig-error-a));
}

:host([size=large]) {
  --component-size: var(--ig-size, var(--ig-size-large));
}

:host([size=medium]) {
  --component-size: var(--ig-size, var(--ig-size-medium));
}

:host([size=small]) {
  --component-size: var(--ig-size, var(--ig-size-small));
}

[part=label] {
  display: inline-block;
  white-space: nowrap;
  -o-text-overflow: ellipsis;
     text-overflow: ellipsis;
  overflow: hidden;
}

[part~=input] {
  width: 100%;
  height: var(--size);
  border: none;
  outline-style: none;
  color: inherit;
  font-family: var(--ig-font-family);
  z-index: 1;
}

[part^=container] {
  position: relative;
  display: grid;
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
  height: var(--size);
}

[part=prefix],
[part=suffix] {
  display: none;
  overflow: hidden;
}

:host([required]) [part=label]::after {
  content: "*";
}

[part=helper-text] {
  font-family: var(--ig-caption-font-family, var(--ig-font-family));
  font-size: var(--ig-caption-font-size);
  font-weight: var(--ig-caption-font-weight);
  font-style: var(--ig-caption-font-style);
  line-height: var(--ig-caption-line-height);
  letter-spacing: var(--ig-caption-letter-spacing);
  text-transform: var(--ig-caption-text-transform);
  margin-top: var(--ig-caption-margin-top);
  margin-bottom: var(--ig-caption-margin-bottom);
}`,za=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host([size=large]) {
  --component-size: var(--ig-size, var(--ig-size-large));
}

:host([size=medium]) {
  --component-size: var(--ig-size, var(--ig-size-medium));
}

:host([size=small]) {
  --component-size: var(--ig-size, var(--ig-size-small));
}

:host {
  --size: max(var(--is-large, 1) * max(3rem, -1 * 3rem), var(--is-medium, 1) * max(2.375rem, -1 * 2.375rem), var(--is-small, 1) * max(1.9375rem, -1 * 1.9375rem));
  --font: max(var(--is-large, 1) * max(1.25rem, -1 * 1.25rem), var(--is-medium, 1) * max(1rem, -1 * 1rem), var(--is-small, 1) * max(0.875rem, -1 * 0.875rem));
  --input-font: max(var(--is-large, 1) * max(1.25rem, -1 * 1.25rem), var(--is-medium, 1) * max(1rem, -1 * 1rem), var(--is-small, 1) * max(1rem, -1 * 1rem));
}
:host::after {
  background: none;
}
:host [part~=container] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.25rem), 0.25rem);
  border-style: none;
  grid-template-columns: auto 1fr auto;
  background: var(--input-background, #fff);
  height: var(--size);
}
:host [part~=container]::after {
  display: none;
}
:host [part~=input] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.25rem), 0.25rem);
  height: var(--size);
  font-size: var(--input-font);
  padding-inline: max(var(--is-large, 1) * max(16px, -1 * 16px) * var(--ig-spacing-inline-large, var(--ig-spacing-inline, --ig-spacing)), var(--is-medium, 1) * max(12px, -1 * 12px) * var(--ig-spacing-inline-medium, var(--ig-spacing-inline, --ig-spacing)), var(--is-small, 1) * max(8px, -1 * 8px) * var(--ig-spacing-inline-small, var(--ig-spacing-inline, --ig-spacing)));
  padding-block: max(var(--is-large, 1) * max(8px, -1 * 8px) * var(--ig-spacing-block-large, var(--ig-spacing-block, --ig-spacing)), var(--is-medium, 1) * max(6px, -1 * 6px) * var(--ig-spacing-block-medium, var(--ig-spacing-block, --ig-spacing)), var(--is-small, 1) * max(4px, -1 * 4px) * var(--ig-spacing-block-small, var(--ig-spacing-block, --ig-spacing)));
  background: inherit;
  -webkit-box-shadow: 0 0 0 0 transparent;
          box-shadow: 0 0 0 0 transparent;
  z-index: 1;
  border: 1px solid hsla(var(--ig-gray-400), var(--ig-gray-a));
  -webkit-transition: border 0.15s ease-out, -webkit-box-shadow 0.15s ease-out;
  transition: border 0.15s ease-out, -webkit-box-shadow 0.15s ease-out;
  -o-transition: box-shadow 0.15s ease-out, border 0.15s ease-out;
  transition: box-shadow 0.15s ease-out, border 0.15s ease-out;
  transition: box-shadow 0.15s ease-out, border 0.15s ease-out, -webkit-box-shadow 0.15s ease-out;
  grid-area: 1/2;
  background-clip: padding-box;
}
:host [part*="input prefixed"] {
  border-start-start-radius: 0;
  border-end-start-radius: 0;
}
:host [part*="input suffixed"] {
  border-start-end-radius: 0;
  border-end-end-radius: 0;
}
:host [part*="input prefixed suffixed"] {
  border-radius: 0;
}
:host label {
  line-height: 1.5rem;
  margin-bottom: 0.25rem;
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}
:host label:empty {
  display: none;
}
:host [part=prefix],
:host [part=suffix] {
  position: relative;
  border-radius: none;
  min-width: auto;
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
  background: hsla(var(--ig-gray-300), var(--ig-gray-a));
  -webkit-transition: border 0.15s ease-out, -webkit-box-shadow 0.15s ease-out;
  transition: border 0.15s ease-out, -webkit-box-shadow 0.15s ease-out;
  -o-transition: box-shadow 0.15s ease-out, border 0.15s ease-out;
  transition: box-shadow 0.15s ease-out, border 0.15s ease-out;
  transition: box-shadow 0.15s ease-out, border 0.15s ease-out, -webkit-box-shadow 0.15s ease-out;
  font-size: var(--font);
}
:host [part=prefix]:focus-within,
:host [part=suffix]:focus-within {
  -webkit-box-shadow: 0 0 0 0.25rem hsla(var(--ig-gray-300), 0.38);
          box-shadow: 0 0 0 0.25rem hsla(var(--ig-gray-300), 0.38);
}
:host [part=prefix] {
  grid-area: 1/1;
  border-style: solid;
  border-color: hsla(var(--ig-gray-400), var(--ig-gray-a));
  border-inline-start-width: 1px;
  border-inline-end-width: 0;
  border-block-start-width: 1px;
  border-block-end-width: 1px;
  border-start-start-radius: 0.25rem;
  border-end-start-radius: 0.25rem;
}
:host [name=prefix]::slotted(*),
:host [name=suffix]::slotted(*) {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  height: 100%;
  padding-inline: max(var(--is-large, 1) * max(16px, -1 * 16px) * var(--ig-spacing-inline-large, var(--ig-spacing-inline, --ig-spacing)), var(--is-medium, 1) * max(12px, -1 * 12px) * var(--ig-spacing-inline-medium, var(--ig-spacing-inline, --ig-spacing)), var(--is-small, 1) * max(8px, -1 * 8px) * var(--ig-spacing-inline-small, var(--ig-spacing-inline, --ig-spacing)));
}
:host [part=suffix] {
  grid-area: 1/3;
  border-style: solid;
  border-color: hsla(var(--ig-gray-400), var(--ig-gray-a));
  border-inline-start-width: 0;
  border-inline-end-width: 1px;
  border-block-start-width: 1px;
  border-block-end-width: 1px;
  border-start-end-radius: 0.25rem;
  border-end-end-radius: 0.25rem;
}
:host [part=helper-text] {
  font-family: var(--ig-body-2-font-family, var(--ig-font-family));
  font-size: var(--ig-body-2-font-size);
  font-weight: var(--ig-body-2-font-weight);
  font-style: var(--ig-body-2-font-style);
  line-height: var(--ig-body-2-line-height);
  letter-spacing: var(--ig-body-2-letter-spacing);
  text-transform: var(--ig-body-2-text-transform);
  margin-top: var(--ig-body-2-margin-top);
  margin-bottom: var(--ig-body-2-margin-bottom);
  margin-top: 0.25rem;
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}

:host(:focus-within) [part~=input] {
  -webkit-box-shadow: 0 0 0 0.25rem hsla(var(--ig-primary-500), 0.38);
          box-shadow: 0 0 0 0.25rem hsla(var(--ig-primary-500), 0.38);
  border-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
}

:host(:not([disabled])[invalid]) [part~=input],
:host(:not([disabled])[invalid]:focus-within) [part~=input] {
  -webkit-box-shadow: 0 0 0 0.25rem hsla(var(--ig-error-500), 0.38);
          box-shadow: 0 0 0 0.25rem hsla(var(--ig-error-500), 0.38);
  border-color: hsla(var(--ig-error-500), var(--ig-error-a));
}

:host([disabled]) [part=prefix],
:host([disabled]) [part=suffix],
:host([disabled]) [part~=container],
:host([readonly]) [part=prefix],
:host([readonly]) [part=suffix],
:host([readonly]) [part~=container] {
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
  border-block-color: hsla(var(--ig-gray-300), var(--ig-gray-a));
}
:host([disabled]) [part=prefix],
:host([readonly]) [part=prefix] {
  border-inline-start-color: hsla(var(--ig-gray-300), var(--ig-gray-a));
}
:host([disabled]) [part=suffix],
:host([readonly]) [part=suffix] {
  border-inline-end-color: hsla(var(--ig-gray-300), var(--ig-gray-a));
}
:host([disabled]) [part~=input],
:host([readonly]) [part~=input] {
  border-color: hsla(var(--ig-gray-300), var(--ig-gray-a));
}

:host([disabled]) [part~=input]::-webkit-input-placeholder {
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}

:host([disabled]) [part~=input]::-moz-placeholder {
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}

:host([disabled]) [part~=input]:-ms-input-placeholder {
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}

:host([disabled]) [part~=input]::-ms-input-placeholder {
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}

:host([disabled]) [part=label],
:host([disabled]) [part=helper-text],
:host([disabled]) [part~=input]::placeholder {
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}

:host([readonly]) [part=prefix],
:host([readonly]) [part=suffix],
:host([readonly]) [part~=container] {
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
}

:host(:focus-within[readonly]) [part~=input] {
  -webkit-box-shadow: 0 0 0 0.25rem hsla(var(--ig-gray-400), 0.38);
          box-shadow: 0 0 0 0.25rem hsla(var(--ig-gray-400), 0.38);
  border-color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}`,Ca=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host([size=large]) {
  --component-size: var(--ig-size, var(--ig-size-large));
}

:host([size=medium]) {
  --component-size: var(--ig-size, var(--ig-size-medium));
}

:host([size=small]) {
  --component-size: var(--ig-size, var(--ig-size-small));
}

:host {
  --size: max(var(--is-large, 1) * max(3rem, -1 * 3rem), var(--is-medium, 1) * max(2.5rem, -1 * 2.5rem), var(--is-small, 1) * max(2rem, -1 * 2rem));
}
:host [part=prefix],
:host [part=suffix] {
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
  font-size: 0.875rem;
  cursor: default;
}
:host [name=prefix]::slotted(*),
:host [name=suffix]::slotted(*) {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  height: 100%;
  padding-inline: max(var(--is-large, 1) * max(16px, -1 * 16px) * var(--ig-spacing-inline-large, var(--ig-spacing-inline, --ig-spacing)), var(--is-medium, 1) * max(12px, -1 * 12px) * var(--ig-spacing-inline-medium, var(--ig-spacing-inline, --ig-spacing)), var(--is-small, 1) * max(8px, -1 * 8px) * var(--ig-spacing-inline-small, var(--ig-spacing-inline, --ig-spacing)));
}
:host [part=prefix] {
  grid-area: 1/1;
}
:host [part=suffix] {
  grid-area: 1/3;
}
:host [part=label] {
  font-size: 0.875rem;
  font-weight: 600;
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
}
:host [part^=container] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 2px), 2px);
  border: 0.0625rem solid hsla(var(--ig-gray-500), var(--ig-gray-a));
  -webkit-transition: none;
  -o-transition: none;
  transition: none;
  background: var(--container-background, hsla(var(--ig-surface-500), var(--ig-surface-a)));
  cursor: text;
  grid-template-columns: auto 1fr auto;
  overflow: hidden;
  height: var(--size);
}
:host [part^=container]::after {
  background: transparent;
  -webkit-transform: none;
      -ms-transform: none;
          transform: none;
  height: initial;
}
:host [part~=input] {
  height: calc(var(--size) - 0.125rem);
  background: initial;
  font-size: 0.875rem;
  padding: 0.5rem;
  max-height: 100%;
  border: none;
  grid-area: 1/2;
}
:host [part=helper-text] {
  padding: 0;
  margin-top: 0.3125rem;
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}

:host(:not([invalid]):hover) [part^=container] {
  border-color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}

:host(:focus-within) [part^=container] {
  border-width: 0.125rem;
}
:host(:focus-within) [part~=input] {
  height: calc(var(--size) - 0.25rem);
}
:host(:focus-within) [part=prefix] {
  -webkit-margin-start: -0.0625rem;
          margin-inline-start: -0.0625rem;
}
:host(:focus-within) [part=suffix] {
  -webkit-margin-end: -0.0625rem;
          margin-inline-end: -0.0625rem;
}
:host(:focus-within) [name=prefix]::slotted(*),
:host(:focus-within) [name=suffix]::slotted(*) {
  padding-block: max(var(--is-large, 1) * max(10px, -1 * 10px) * var(--ig-spacing-block-large, var(--ig-spacing-block, --ig-spacing)), var(--is-medium, 1) * max(8px, -1 * 8px) * var(--ig-spacing-block-medium, var(--ig-spacing-block, --ig-spacing)), var(--is-small, 1) * max(6px, -1 * 6px) * var(--ig-spacing-block-small, var(--ig-spacing-block, --ig-spacing)));
}

:host(:not([invalid]):focus-within) [part^=container],
:host(:not([invalid]):focus-within:hover) [part^=container] {
  border-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
}

:host([required]) [part=label]::after,
:host([outlined][required]) [part=label]::after {
  color: hsla(var(--ig-error-500), var(--ig-error-a));
}

:host([invalid]) [part^=container],
:host([outlined][invalid]) [part^=container] {
  border-color: hsla(var(--ig-error-500), var(--ig-error-a));
}

:host([disabled][outlined][invalid]) [part^=container] {
  border-color: hsla(var(--ig-gray-100), var(--ig-gray-a));
}

:host([disabled]) {
  pointer-events: none;
}
:host([disabled]) [part^=container] {
  border-color: hsla(var(--ig-gray-100), var(--ig-gray-a));
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}
:host([disabled]) [part^=container],
:host([disabled]) [part=prefix],
:host([disabled]) [part=suffix] {
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
}
:host([disabled]) [part~=input]::-webkit-input-placeholder {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}
:host([disabled]) [part~=input]::-moz-placeholder {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}
:host([disabled]) [part~=input]:-ms-input-placeholder {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}
:host([disabled]) [part~=input]::-ms-input-placeholder {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}
:host([disabled]) [part=prefix],
:host([disabled]) [part=suffix],
:host([disabled]) [part=label],
:host([disabled]) [part=label]::after,
:host([disabled]) [part=helper-text],
:host([disabled]) [part~=input],
:host([disabled]) [part~=input]::placeholder {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}`,Da=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host [part=suffix] ::slotted(*), :host [part=prefix] ::slotted(*) {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  height: calc(100% - 0.125rem);
  padding-inline: max(var(--is-large, 1) * max(16px, -1 * 16px) * var(--ig-spacing-inline-large, var(--ig-spacing-inline, --ig-spacing)), var(--is-medium, 1) * max(12px, -1 * 12px) * var(--ig-spacing-inline-medium, var(--ig-spacing-inline, --ig-spacing)), var(--is-small, 1) * max(8px, -1 * 8px) * var(--ig-spacing-inline-small, var(--ig-spacing-inline, --ig-spacing)));
}

:host [part=prefix],
:host [part=suffix] {
  color: hsla(var(--ig-gray-600), var(--ig-gray-a));
}
:host [part=prefix] {
  grid-area: 1/1;
}
:host [part=suffix] {
  grid-area: 1/3;
}
:host [part~=label] {
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1;
}
:host [part^=container] {
  background: transparent;
  border-bottom: 1px solid hsla(var(--ig-gray-500), var(--ig-gray-a));
  -webkit-transition: background 0.25s ease-out;
  -o-transition: background 0.25s ease-out;
  transition: background 0.25s ease-out;
  grid-template-columns: auto 1fr auto;
}
:host [part^=container]::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 0.125rem;
  left: 0;
  right: 0;
  bottom: -1px;
  background: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
  -webkit-transform: scaleY(0);
      -ms-transform: scaleY(0);
          transform: scaleY(0);
  -webkit-transition: opacity 180ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 180ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 180ms cubic-bezier(0.4, 0, 0.2, 1);
  -o-transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 180ms cubic-bezier(0.4, 0, 0.2, 1);
  -webkit-transform-origin: bottom center;
      -ms-transform-origin: bottom center;
          transform-origin: bottom center;
}
:host [part~=input] {
  font-size: 1rem;
  background: initial;
  padding-block: 0.5rem;
  padding-inline: max(var(--is-large, 1) * max(1rem, -1 * 1rem) * var(--ig-spacing-inline-large, var(--ig-spacing-inline, --ig-spacing)), var(--is-medium, 1) * max(0.75rem, -1 * 0.75rem) * var(--ig-spacing-inline-medium, var(--ig-spacing-inline, --ig-spacing)), var(--is-small, 1) * max(0.5rem, -1 * 0.5rem) * var(--ig-spacing-inline-small, var(--ig-spacing-inline, --ig-spacing)));
  border: none;
  grid-area: 1/2;
}
:host [part*="input prefixed"] {
  -webkit-padding-start: 0;
          padding-inline-start: 0;
}
:host [part*="input suffixed"] {
  -webkit-padding-end: 0;
          padding-inline-end: 0;
}
:host [part=helper-text] {
  margin-top: 0.375rem;
  padding-inline: max(var(--is-large, 1) * max(1rem, -1 * 1rem) * var(--ig-spacing-inline-large, var(--ig-spacing-inline, --ig-spacing)), var(--is-medium, 1) * max(0.75rem, -1 * 0.75rem) * var(--ig-spacing-inline-medium, var(--ig-spacing-inline, --ig-spacing)), var(--is-small, 1) * max(0.5rem, -1 * 0.5rem) * var(--ig-spacing-inline-small, var(--ig-spacing-inline, --ig-spacing)));
  color: hsla(var(--ig-gray-600), var(--ig-gray-a));
}

:host(:hover) [part^=container],
:host([outlined]:hover) [part^=container] {
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
}

:host(:focus-within) [part^=container],
:host([outlined]:focus-within) [part^=container] {
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
}
:host(:focus-within) [part^=container]::after,
:host([outlined]:focus-within) [part^=container]::after {
  -webkit-transform: scaleY(1);
      -ms-transform: scaleY(1);
          transform: scaleY(1);
}
:host(:focus-within) [part=label],
:host([outlined]:focus-within) [part=label] {
  color: var(--label-focus-color, hsla(var(--ig-primary-500), var(--ig-primary-a)));
}

:host([invalid]) [part^=container] {
  border-color: hsla(var(--ig-error-500), var(--ig-error-a));
}
:host([invalid]) [part^=container]::after {
  background: hsla(var(--ig-error-500), var(--ig-error-a));
}
:host([invalid]) [part=label] {
  color: hsla(var(--ig-error-500), var(--ig-error-a));
}

:host([disabled]) {
  pointer-events: none;
}
:host([disabled]) [part^=container] {
  border-color: hsla(var(--ig-gray-300), var(--ig-gray-a));
  color: hsla(var(--ig-gray-300), var(--ig-gray-a));
}
:host([disabled]) [part~=input]::-webkit-input-placeholder {
  color: hsla(var(--ig-gray-300), var(--ig-gray-a));
}
:host([disabled]) [part~=input]::-moz-placeholder {
  color: hsla(var(--ig-gray-300), var(--ig-gray-a));
}
:host([disabled]) [part~=input]:-ms-input-placeholder {
  color: hsla(var(--ig-gray-300), var(--ig-gray-a));
}
:host([disabled]) [part~=input]::-ms-input-placeholder {
  color: hsla(var(--ig-gray-300), var(--ig-gray-a));
}
:host([disabled]) [part=prefix],
:host([disabled]) [part=suffix],
:host([disabled]) [part=label],
:host([disabled]) [part=helper-text],
:host([disabled]) [part~=input]::placeholder {
  color: hsla(var(--ig-gray-300), var(--ig-gray-a));
}`,Sa=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
input:-moz-placeholder-shown + [part=notch] [part=label] {
  --label-position: max(var(--is-large, 1) * max(26px, -1 * 26px), var(--is-medium, 1) * max(22px, -1 * 22px), var(--is-small, 1) * max(18px, -1 * 18px));
  transform: translateY(calc(var(--label-position) * -1));
  font-size: 0.75rem;
}
input:-ms-input-placeholder + [part=notch] [part=label] {
  --label-position: max(var(--is-large, 1) * max(26px, -1 * 26px), var(--is-medium, 1) * max(22px, -1 * 22px), var(--is-small, 1) * max(18px, -1 * 18px));
  -ms-transform: translateY(calc(var(--label-position) * -1));
      transform: translateY(calc(var(--label-position) * -1));
  font-size: 0.75rem;
}
:host(:focus-within) [part=label], input:placeholder-shown + [part=notch] [part=label],
[part~=filled] + [part=notch] [part=label] {
  --label-position: max(var(--is-large, 1) * max(26px, -1 * 26px), var(--is-medium, 1) * max(22px, -1 * 22px), var(--is-small, 1) * max(18px, -1 * 18px));
  -webkit-transform: translateY(calc(var(--label-position) * -1));
      -ms-transform: translateY(calc(var(--label-position) * -1));
          transform: translateY(calc(var(--label-position) * -1));
  font-size: 0.75rem;
}

:host input:-moz-placeholder-shown + [part=notch] {
  border-top: 0.0625rem solid transparent;
}

:host input:-ms-input-placeholder + [part=notch] {
  border-top: 0.0625rem solid transparent;
}

:host([disabled]) [part~=filled] + [part=notch], :host([invalid]) [part~=filled] + [part=notch],
:host([invalid]:focus-within) [part~=filled] + [part=notch], :host input:placeholder-shown + [part=notch],
:host [part~=filled] + [part=notch] {
  border-top: 0.0625rem solid transparent;
}

[part=end] > [part=suffix] ::slotted(*), [part=start] > [part=prefix] ::slotted(*) {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  height: 100%;
  padding-inline: max(var(--is-large, 1) * max(1rem, -1 * 1rem) * var(--ig-spacing-inline-large, var(--ig-spacing-inline, --ig-spacing)), var(--is-medium, 1) * max(0.875rem, -1 * 0.875rem) * var(--ig-spacing-inline-medium, var(--ig-spacing-inline, --ig-spacing)), var(--is-small, 1) * max(0.75rem, -1 * 0.75rem) * var(--ig-spacing-inline-small, var(--ig-spacing-inline, --ig-spacing)));
}

:host input::-webkit-input-placeholder {
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}

:host input::-moz-placeholder {
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}

:host input:-ms-input-placeholder {
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}

:host input::-ms-input-placeholder {
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}

:host input::placeholder {
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}

[part~=input] {
  background: transparent;
  padding: 0 0.25rem;
  font-size: 1rem;
  grid-area: 1/2/span 1/span 2;
}

[part=label] {
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
  -webkit-transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1), font-size 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1), font-size 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
  -o-transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1), font-size 150ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1), font-size 150ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1), font-size 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
  line-height: 1;
  -o-text-overflow: ellipsis;
     text-overflow: ellipsis;
  overflow: hidden;
  will-change: font-size, color, transform;
}

:host(:focus-within) [part=start] {
  border-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
  border-inline-start-width: 0.125rem;
  border-block-start-width: 0.125rem;
  border-block-end-width: 0.125rem;
}
:host(:focus-within) [part=notch] {
  border-width: 0.125rem;
  border-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
  border-top: 0.0625rem solid transparent;
}
:host(:focus-within) [part=filler] {
  border-width: 0.125rem;
  border-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
}
:host(:focus-within) [part=end] {
  border-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
  border-inline-end-width: 0.125rem;
  border-block-start-width: 0.125rem;
  border-block-end-width: 0.125rem;
}
:host(:focus-within) [part=label] {
  color: hsla(var(--ig-primary-500), var(--ig-primary-a));
}
:host(:focus-within) [part~=prefix],
:host(:focus-within) [part~=suffix] {
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
}

[part~=filled] [part~=prefix],
[part~=filled] [part~=suffix] {
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
}

[part^=container] {
  grid-template-columns: auto auto 1fr auto;
}

[part=start] {
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  grid-area: 1/1;
  border-style: solid;
  border-color: hsla(var(--ig-gray-500), var(--ig-gray-a));
  border-inline-start-width: 0.0625rem;
  border-inline-end-width: 0;
  border-block-start-width: 0.0625rem;
  border-block-end-width: 0.0625rem;
  border-start-start-radius: 0.25rem;
  border-end-start-radius: 0.25rem;
}
[part=notch] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  width: auto;
  min-width: 0;
  height: 100%;
  grid-area: 1/2;
  padding: 0 0.25rem;
  border-width: 0.0625rem;
  border-style: solid;
  border-color: hsla(var(--ig-gray-500), var(--ig-gray-a));
  border-left: none;
  border-right: none;
  overflow: visible;
}
[part=notch]:empty {
  display: none;
}

[part=filler] {
  grid-area: 1/3;
  border-width: 0.0625rem;
  border-style: solid;
  border-color: hsla(var(--ig-gray-500), var(--ig-gray-a));
  border-left: none;
  border-right: none;
}

[part=end] {
  -webkit-box-pack: end;
      -ms-flex-pack: end;
          justify-content: flex-end;
  grid-area: 1/4;
  border-style: solid;
  border-color: hsla(var(--ig-gray-500), var(--ig-gray-a));
  border-inline-start-width: 0;
  border-inline-end-width: 0.0625rem;
  border-block-start-width: 0.0625rem;
  border-block-end-width: 0.0625rem;
  border-start-end-radius: 0.25rem;
  border-end-end-radius: 0.25rem;
}
[part=start],
[part=end] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  min-width: max(var(--is-large, 1) * max(0.875rem, -1 * 0.875rem), var(--is-medium, 1) * max(0.75rem, -1 * 0.75rem), var(--is-small, 1) * max(0.625rem, -1 * 0.625rem));
  height: var(--size);
  overflow: hidden;
}

[part=helper-text] {
  font-family: var(--ig-caption-font-family, var(--ig-font-family));
  font-size: var(--ig-caption-font-size);
  font-weight: var(--ig-caption-font-weight);
  font-style: var(--ig-caption-font-style);
  line-height: var(--ig-caption-line-height);
  letter-spacing: var(--ig-caption-letter-spacing);
  text-transform: var(--ig-caption-text-transform);
  margin-top: var(--ig-caption-margin-top);
  margin-bottom: var(--ig-caption-margin-bottom);
  padding-inline: max(var(--is-large, 1) * max(1.125rem, -1 * 1.125rem) * var(--ig-spacing-inline-large, var(--ig-spacing-inline, --ig-spacing)), var(--is-medium, 1) * max(1rem, -1 * 1rem) * var(--ig-spacing-inline-medium, var(--ig-spacing-inline, --ig-spacing)), var(--is-small, 1) * max(0.875rem, -1 * 0.875rem) * var(--ig-spacing-inline-small, var(--ig-spacing-inline, --ig-spacing)));
  margin-top: 0.3125rem;
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}

:host([invalid]) [part=start],
:host([invalid]) [part=notch],
:host([invalid]) [part=filler],
:host([invalid]) [part=end],
:host([invalid]:focus-within) [part=start],
:host([invalid]:focus-within) [part=notch],
:host([invalid]:focus-within) [part=filler],
:host([invalid]:focus-within) [part=end] {
  border-color: hsla(var(--ig-error-500), var(--ig-error-a));
}
:host([invalid]) [part=label],
:host([invalid]:focus-within) [part=label] {
  color: hsla(var(--ig-error-500), var(--ig-error-a));
}
:host([invalid]:focus-within) [part=notch] {
  border-top: 0.0625rem solid transparent;
}

:host([disabled]) {
  pointer-events: none;
}
:host([disabled]) [part~=input],
:host([disabled]) [part=label],
:host([disabled]) [part=prefix],
:host([disabled]) [part=suffix],
:host([disabled]) [part=helper-text] {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}
:host([disabled]) [part=start],
:host([disabled]) [part=filler],
:host([disabled]) [part=notch],
:host([disabled]) [part=end] {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
  border-color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}
:host([disabled]) input::-webkit-input-placeholder {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}
:host([disabled]) input::-moz-placeholder {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}
:host([disabled]) input:-ms-input-placeholder {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}
:host([disabled]) input::-ms-input-placeholder {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}
:host([disabled]) input::placeholder {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}
:host([outlined]:active) [part=suffix],
:host([outlined]:focus) [part=suffix],
:host([outlined]:focus-within) [part=suffix] {
  -webkit-margin-end: -0.0625rem;
          margin-inline-end: -0.0625rem;
}
:host([outlined]:active) [part=prefix],
:host([outlined]:focus) [part=prefix],
:host([outlined]:focus-within) [part=prefix] {
  -webkit-margin-start: -0.0625rem;
          margin-inline-start: -0.0625rem;
}
:host([outlined]:active) [part=suffix] ::slotted(*),
:host([outlined]:active) [part=prefix] ::slotted(*),
:host([outlined]:focus) [part=suffix] ::slotted(*),
:host([outlined]:focus) [part=prefix] ::slotted(*),
:host([outlined]:focus-within) [part=suffix] ::slotted(*),
:host([outlined]:focus-within) [part=prefix] ::slotted(*) {
  padding-block: max(var(--is-large, 1) * max(14px, -1 * 14px) * var(--ig-spacing-block-large, var(--ig-spacing-block, --ig-spacing)), var(--is-medium, 1) * max(12px, -1 * 12px) * var(--ig-spacing-block-medium, var(--ig-spacing-block, --ig-spacing)), var(--is-small, 1) * max(10px, -1 * 10px) * var(--ig-spacing-block-small, var(--ig-spacing-block, --ig-spacing)));
}

:host(:not([outlined])) [part=start],
:host(:not([outlined])) [part=end] {
  border-color: transparent;
  border-width: 0.0625rem;
}
:host(:not([outlined])) [part=start] {
  border-end-start-radius: 0;
}
:host(:not([outlined])) [part=end] {
  border-end-end-radius: 0;
}
:host(:not([outlined])) [part=notch],
:host(:not([outlined])) [part=filler] {
  border-top: 1px solid transparent;
  border-bottom: transparent;
  border-bottom-width: 0.0625rem;
}
:host(:not([outlined])) [part=label] {
  inset-inline-start: 0.125rem;
}
:host(:not([outlined])) [part~=container] {
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
  border-bottom: 1px solid hsla(var(--ig-gray-500), var(--ig-gray-a));
  border-start-end-radius: 0.25rem;
  border-start-start-radius: 0.25rem;
  -webkit-transition: border-bottom-width 150ms cubic-bezier(0.4, 0, 0.2, 1);
  -o-transition: border-bottom-width 150ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: border-bottom-width 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
:host(:not([outlined])) [part~=container]::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 0.125rem;
  left: 0;
  right: 0;
  bottom: -1px;
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  -webkit-transform: scaleX(0);
      -ms-transform: scaleX(0);
          transform: scaleX(0);
  -webkit-transition: opacity 180ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 180ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 180ms cubic-bezier(0.4, 0, 0.2, 1);
  -o-transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
:host(:not([outlined])) [part~=labelled] [part~=input] {
  padding-top: 1.25rem;
  padding-bottom: 0.375rem;
}
:host(:not([outlined])) input:-moz-placeholder-shown + [part=notch] [part=label] {
  transform: translateY(-106%);
}
:host(:not([outlined])) input:-ms-input-placeholder + [part=notch] [part=label] {
  -ms-transform: translateY(-106%);
      transform: translateY(-106%);
}
:host(:not([outlined])) input:placeholder-shown + [part=notch] [part=label],
:host(:not([outlined])) [part~=filled] + [part=notch] [part=label] {
  -webkit-transform: translateY(-106%);
      -ms-transform: translateY(-106%);
          transform: translateY(-106%);
}

:host(:not([outlined]):hover) [part~=container] {
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
  border-bottom: 1px solid hsla(var(--ig-gray-800), var(--ig-gray-a));
}

:host(:not([outlined]):focus-within) [part~=container] {
  background: var(--focus-background, hsla(var(--ig-gray-300), var(--ig-gray-a)));
  border-bottom: 1px solid hsla(var(--ig-primary-500), var(--ig-primary-a));
}
:host(:not([outlined]):focus-within) [part~=container]::after {
  -webkit-transform: scaleX(1);
      -ms-transform: scaleX(1);
          transform: scaleX(1);
  opacity: 1;
}
:host(:not([outlined]):focus-within) [part=notch] [part=label] {
  -webkit-transform: translateY(-106%);
      -ms-transform: translateY(-106%);
          transform: translateY(-106%);
}

:host(:not([outlined])[invalid]) [part=start],
:host(:not([outlined])[invalid]) [part=notch],
:host(:not([outlined])[invalid]) [part=filler],
:host(:not([outlined])[invalid]) [part=end],
:host(:not([outlined])[invalid]:focus-within) [part=start],
:host(:not([outlined])[invalid]:focus-within) [part=notch],
:host(:not([outlined])[invalid]:focus-within) [part=filler],
:host(:not([outlined])[invalid]:focus-within) [part=end] {
  border-color: transparent;
}
:host(:not([outlined])[invalid]) [part~=container],
:host(:not([outlined])[invalid]:focus-within) [part~=container] {
  border-color: hsla(var(--ig-error-500), var(--ig-error-a));
}
:host(:not([outlined])[invalid]) [part~=container]::after,
:host(:not([outlined])[invalid]:focus-within) [part~=container]::after {
  background: hsla(var(--ig-error-500), var(--ig-error-a));
}

:host(:not([outlined])[disabled]) [part~=input],
:host(:not([outlined])[disabled]) [part=label],
:host(:not([outlined])[disabled]) [part=prefix],
:host(:not([outlined])[disabled]) [part=suffix],
:host(:not([outlined])[disabled]) [part=helper-text] {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}
:host(:not([outlined])[disabled]) [part~=container] {
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
  border-color: hsla(var(--ig-gray-500), var(--ig-gray-a));
  border-bottom-style: dashed;
}`;var Ia,$a=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n};let Pa=Ia=class extends(p(z(i.oi))){constructor(){super(),this.inputId=`input-${Ia.increment()}`,this.dir="auto",this.outlined=!1,this.required=!1,this.disabled=!1,this.readonly=!1,this.size="medium"}connectedCallback(){super.connectedCallback(),this.shadowRoot.addEventListener("slotchange",(()=>this.requestUpdate()))}themeAdopted(e){this.themeController=e}focus(e){this.input.focus(e)}blur(){this.input.blur()}resolvePartNames(e){return{[e]:!0,prefixed:this.prefixes.length>0,suffixed:this.suffixes.length>0,filled:!!this.value}}handleFocus(){this.emitEvent("igcFocus")}handleBlur(){this.emitEvent("igcBlur")}setSelectionRange(e,t,a="none"){this.input.setSelectionRange(e,t,a)}setRangeText(e,t,a,i="preserve"){this.input.setRangeText(e,t,a,i)}renderPrefix(){return i.dy`<div part="prefix">
      <slot name="prefix"></slot>
    </div>`}renderSuffix(){return i.dy`<div part="suffix">
      <slot name="suffix"></slot>
    </div>`}renderLabel(){return this.label?i.dy`<label part="label" for="${this.inputId}"> ${this.label} </label>`:i.Ld}renderMaterial(){return i.dy`
      <div
        part="${$({...this.resolvePartNames("container"),labelled:this.label})}"
      >
        <div part="start">${this.renderPrefix()}</div>
        ${this.renderInput()}
        <div part="notch">${this.renderLabel()}</div>
        <div part="filler"></div>
        <div part="end">${this.renderSuffix()}</div>
      </div>
      <div part="helper-text" .hidden="${0==this.helperText.length}">
        <slot name="helper-text"></slot>
      </div>
    `}renderStandard(){return i.dy`${this.renderLabel()}
      <div part="${$(this.resolvePartNames("container"))}">
        ${this.renderPrefix()} ${this.renderInput()} ${this.renderSuffix()}
      </div>
      <div part="helper-text" .hidden="${0==this.helperText.length}">
        <slot name="helper-text"></slot>
      </div>`}render(){return i.dy`${"material"===this.themeController.theme?this.renderMaterial():this.renderStandard()}`}};Pa.shadowRootOptions={...i.oi.shadowRootOptions,delegatesFocus:!0},Pa.styles=ka,Pa.increment=M(),$a([(e,t)=>{}],Pa.prototype,"value",void 0),$a([(0,r.IO)("input")],Pa.prototype,"input",void 0),$a([(0,r.NH)({slot:"prefix"})],Pa.prototype,"prefixes",void 0),$a([(0,r.NH)({slot:"suffix"})],Pa.prototype,"suffixes",void 0),$a([(0,r.NH)({slot:"helper-text"})],Pa.prototype,"helperText",void 0),$a([(0,r.Cb)({reflect:!0}),(e,t)=>{}],Pa.prototype,"dir",void 0),$a([(0,r.Cb)()],Pa.prototype,"name",void 0),$a([(0,r.Cb)({reflect:!0,type:Boolean})],Pa.prototype,"outlined",void 0),$a([(0,r.Cb)({reflect:!0,type:Boolean})],Pa.prototype,"required",void 0),$a([(0,r.Cb)({reflect:!0,type:Boolean})],Pa.prototype,"disabled",void 0),$a([(0,r.Cb)({reflect:!0,type:Boolean})],Pa.prototype,"readonly",void 0),$a([(0,r.Cb)({type:String})],Pa.prototype,"placeholder",void 0),$a([(0,r.Cb)({type:String})],Pa.prototype,"label",void 0),$a([(e,t)=>{}],Pa.prototype,"focus",null),$a([(e,t)=>{}],Pa.prototype,"blur",null),Pa=Ia=$a([b({bootstrap:za,material:Sa,fluent:Ca,indigo:Da}),ne],Pa);var Ta=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n};class Ea extends Pa{constructor(){super(...arguments),this.value="",this.type="text",this.invalid=!1,this.tabIndex=0}reportValidity(){return this.input.reportValidity()}checkValidity(){return this.input.checkValidity()}setRangeText(e,t,a,i="preserve"){super.setRangeText(e,t,a,i),this.value=this.input.value}setCustomValidity(e){this.input.setCustomValidity(e),this.invalid=!this.input.checkValidity()}select(){return this.input.select()}stepUp(e){this.input.stepUp(e),this.handleChange()}stepDown(e){this.input.stepDown(e),this.handleChange()}handleInvalid(){this.invalid=!0}handleInput(){this.value=this.input.value,this.emitEvent("igcInput",{detail:this.value})}handleChange(){this.value=this.input.value,this.emitEvent("igcChange",{detail:this.value})}handleValueChange(){this.updateComplete.then((()=>this.invalid=!this.input.checkValidity()))}renderInput(){return i.dy`
      <input
        id="${this.inputId}"
        part="${$(this.resolvePartNames("input"))}"
        name="${(0,n.o)(this.name)}"
        type="${(0,n.o)(this.type)}"
        pattern="${(0,n.o)(this.pattern)}"
        placeholder="${(0,n.o)(this.placeholder)}"
        .value="${(0,St.a)(this.value)}"
        ?readonly="${this.readonly}"
        ?disabled="${this.disabled}"
        ?required="${this.required}"
        ?autofocus="${this.autofocus}"
        tabindex=${this.tabIndex}
        autocomplete="${(0,n.o)(this.autocomplete)}"
        inputmode="${(0,n.o)(this.inputmode)}"
        min="${(0,n.o)(this.min)}"
        max="${(0,n.o)(this.max)}"
        minlength="${(0,n.o)(this.minlength)}"
        maxlength="${(0,n.o)(this.maxlength)}"
        step="${(0,n.o)(this.step)}"
        aria-invalid="${this.invalid?"true":"false"}"
        @invalid="${this.handleInvalid}"
        @change="${this.handleChange}"
        @input="${this.handleInput}"
        @focus="${this.handleFocus}"
        @blur="${this.handleBlur}"
      />
    `}}Ea.tagName="igc-input",Ta([(0,r.Cb)(),(e,t)=>{}],Ea.prototype,"value",void 0),Ta([(e,t)=>{},(0,r.Cb)({reflect:!0})],Ea.prototype,"type",void 0),Ta([(0,r.Cb)()],Ea.prototype,"inputmode",void 0),Ta([(0,r.Cb)({type:String})],Ea.prototype,"pattern",void 0),Ta([(0,r.Cb)({reflect:!0,type:Boolean})],Ea.prototype,"invalid",void 0),Ta([(0,r.Cb)({type:Number})],Ea.prototype,"minlength",void 0),Ta([(0,r.Cb)({type:Number})],Ea.prototype,"maxlength",void 0),Ta([(0,r.Cb)()],Ea.prototype,"min",void 0),Ta([(0,r.Cb)()],Ea.prototype,"max",void 0),Ta([(0,r.Cb)({type:Number})],Ea.prototype,"step",void 0),Ta([(0,r.Cb)({type:Boolean})],Ea.prototype,"autofocus",void 0),Ta([(0,r.Cb)()],Ea.prototype,"autocomplete",void 0),Ta([(0,r.Cb)({type:Number})],Ea.prototype,"tabIndex",void 0),Ta([(e,t)=>{}],Ea.prototype,"setRangeText",null),Ta([m("value",{waitUntilFirstUpdate:!0})],Ea.prototype,"handleValueChange",null);const Ma=-1;var Oa;!function(e){e[e.Up=-1]="Up",e[e.Down=1]="Down"}(Oa||(Oa={}));class Aa{get input(){return this.host.singleSelect?this.host.target:this.host.input}get dataState(){return this.host.dataState}show(){this.host._show(!0)}hide(){this.host._hide(!0)}toggleSelect(e){this.host.toggleSelect(e)}get currentItem(){const e=this.active;return e===Ma?Ma:e}get firstItem(){return this.dataState.findIndex((e=>!0!==e.header))}get lastItem(){return this.dataState.length-1}scrollToActive(e,t="auto"){var a;null===(a=e.element(this.active))||void 0===a||a.scrollIntoView({block:"center",behavior:t}),e.requestUpdate()}get active(){return this._active}set active(e){this._active=e,this.host.requestUpdate()}constructor(e){this.host=e,this.hostHandlers=new Map(Object.entries({Escape:this.escape})),this.mainInputHandlers=new Map(Object.entries({Escape:this.escape,ArrowUp:this.hide,ArrowDown:this.mainInputArrowDown,Tab:this.tab,Enter:this.enter})),this.searchInputHandlers=new Map(Object.entries({Escape:this.escape,ArrowUp:this.escape,ArrowDown:this.inputArrowDown,Tab:this.inputArrowDown})),this.listHandlers=new Map(Object.entries({ArrowDown:this.arrowDown,ArrowUp:this.arrowUp," ":this.space,Enter:this.enter,Escape:this.escape,Tab:this.tab,Home:this.home,End:this.end})),this._active=Ma,this.host.addController(this)}home(e){this.active=this.firstItem,this.scrollToActive(e,"smooth")}end(e){this.active=this.lastItem,this.scrollToActive(e,"smooth")}space(){this.active!==Ma&&(this.dataState[this.active].header||this.toggleSelect(this.active))}escape(){this.hide(),this.host.focus()}enter(){this.active!==Ma&&(this.space(),this.hide(),requestAnimationFrame((()=>this.input.select())),this.host.focus())}inputArrowDown(e){e.focus(),this.arrowDown(e)}async mainInputArrowDown(e){this.show(),await e.updateComplete,this.host.singleSelect&&(e.focus(),this.arrowDown(e))}tab(){this.hide(),this.host.blur()}arrowDown(e){this.getNextItem(Oa.Down),this.scrollToActive(e)}arrowUp(e){this.getNextItem(Oa.Up),this.scrollToActive(e)}getNextItem(e){const t=this.getNearestItem(this.currentItem,e);-1!==t?this.active=t:this.active===this.firstItem&&(this.input.focus(),this.active=Ma)}getNearestItem(e,t){var a;let i=e;const r=this.dataState;for(;null===(a=r[i+t])||void 0===a?void 0:a.header;)i+=t;return i+=t,i>=0&&i<r.length?i:-1}hostConnected(){}hostDisconnected(){this.active=Ma}navigateTo(e,t){this.active=this.dataState.findIndex((t=>t===e)),this.scrollToActive(t,"smooth")}navigateHost(e){this.hostHandlers.has(e.key)&&(e.preventDefault(),this.hostHandlers.get(e.key).call(this))}navigateMainInput(e,t){e.stopPropagation(),this.mainInputHandlers.has(e.key)&&(e.preventDefault(),this.mainInputHandlers.get(e.key).call(this,t))}navigateSearchInput(e,t){e.stopPropagation(),this.searchInputHandlers.has(e.key)&&(e.preventDefault(),this.searchInputHandlers.get(e.key).call(this,t))}navigateList(e,t){e.stopPropagation(),this.listHandlers.has(e.key)&&(e.preventDefault(),this.listHandlers.get(e.key).call(this,t))}}class Va{get data(){return this.host.data}resetSearchTerm(){this.host.resetSearchTerm()}getValue(e){return e.map((e=>"object"==typeof e&&null!==e&&this.host.displayKey?String(e[this.host.displayKey]):String(e))).join(", ")}handleChange(e){return this.host.requestUpdate("value"),this.host.emitEvent("igcChange",{cancelable:!0,detail:e})}getItemsByValueKey(e){return e.map((e=>this.data.find((t=>t[this.host.valueKey]===e))))}selectValueKeys(e){0!==e.length&&this.getItemsByValueKey(e).forEach((e=>e&&this._selected.add(e)))}deselectValueKeys(e){0!==e.length&&this.getItemsByValueKey(e).forEach((e=>e&&this._selected.delete(e)))}selectObjects(e){0!==e.length&&e.forEach((e=>{this.data.includes(e)&&this._selected.add(e)}))}deselectObjects(e){0!==e.length&&e.forEach((e=>{this.data.includes(e)&&this._selected.delete(e)}))}selectAll(){this.data.forEach((e=>{this._selected.add(e)})),this.host.requestUpdate()}deselectAll(){this._selected.clear(),this.host.requestUpdate()}async select(e,t=!1){const{singleSelect:a}=this.host;if(a&&(this._selected.clear(),this.resetSearchTerm()),!e||0===e.length)return void(!a&&this.selectAll());const i=a?e.slice(0,1):e,r=this.host.valueKey?this.getItemsByValueKey(i):i,l=Array.from(this._selected.values()),n=[...r,...l];t&&!this.handleChange({newValue:this.getValue(n),items:r,type:"selection"})||(this.host.valueKey?this.selectValueKeys(i):this.selectObjects(i),this.host.requestUpdate())}async deselect(e,t=!1){const{singleSelect:a}=this.host;if(!e||0===e.length){if(t&&!this.handleChange({newValue:"",items:Array.from(this.selected),type:"deselection"}))return;return void(!a&&this.deselectAll())}const i=this.host.singleSelect?e.slice(0,1):e,r=this.host.valueKey?this.getItemsByValueKey(i):i,l=Array.from(this._selected.values()),n=structuredClone(l);n.splice(l.indexOf(r[0])),t&&!this.handleChange({newValue:this.getValue(n),items:r,type:"deselection"})||(this.host.valueKey?this.deselectValueKeys(i):this.deselectObjects(i),this.host.requestUpdate())}get selected(){return this._selected}changeSelection(e){const t=this.data[e];this.host.valueKey?this.selected.has(t)?this.deselect([t[this.host.valueKey]],!0):this.select([t[this.host.valueKey]],!0):this.selected.has(t)?this.deselect([t],!0):this.select([t],!0)}constructor(e){this.host=e,this._selected=new Set,this.host.addController(this)}hostConnected(){}hostDisconnected(){}}var La=a(72767),Ra=a(62170),Fa=a(53816);class _a extends Fa.Xe{updatePosition(e,t,a){var r,l;if(this.floatingElement=this.createFloatingElement(t.open),!e)return a&&(a.rendered=Promise.resolve()),i.Jb;const n=(0,La.oo)(e,this.floatingElement,{placement:null!==(r=t.placement)&&void 0!==r?r:"bottom-start",strategy:null!==(l=t.positionStrategy)&&void 0!==l?l:"absolute",middleware:this.createMiddleware(t)}).then((({x:e,y:t})=>{Object.assign(this.floatingElement.style,{left:0,top:0,transform:`translate(${e}px,${t}px)`})}));return a&&(a.rendered=n),i.Jb}createFloatingElement(e=!1){return this.floatingElement||(this.floatingElement=this.part.element),this.floatingElement.style.display=e?"":"none",this.floatingElement}createMiddleware(e){const t=[];if(e.distance&&t.push((0,Ra.cv)({mainAxis:e.distance})),e.flip&&t.push((0,Ra.RR)()),this.shiftOptions&&t.push((0,Ra.uY)(this.shiftOptions)),Object.assign(this.floatingElement.style,{width:""}),e.sameWidth){const e=this.floatingElement;t.push((0,Ra.dp)({apply({rects:t}){Object.assign(e.style,{width:`${t.reference.width}px`})}}))}return t}constructor(e){if(super(e),this.shiftOptions={mainAxis:!0},this.part=e,e.type!==Fa.pX.ELEMENT)throw new Error("The `igcToggle` directive must be attached to an element tag.")}render(e,t,a){return this.updatePosition(e,t,a)}}const ja=(0,Fa.XM)(_a);class Ba{get abortController(){return this._abortController.signal.aborted&&(this._abortController=new AbortController),this._abortController}set target(e){this._target=e,this.update()}get target(){return this._target}constructor(e,t){this.initialScrollTop=0,this.initialScrollLeft=0,this._abortController=new AbortController,this.blockScroll=e=>{var t,a,i,r;e.preventDefault(),this.sourceElement&&this.sourceElement===e.target||(this.sourceElement=e.target,this.initialScrollTop=null!==(t=this.sourceElement.scrollTop)&&void 0!==t?t:null===(a=this.sourceElement.firstElementChild)||void 0===a?void 0:a.scrollTop,this.initialScrollLeft=null!==(i=this.sourceElement.scrollLeft)&&void 0!==i?i:null===(r=this.sourceElement.firstElementChild)||void 0===r?void 0:r.scrollLeft),this.sourceElement.scrollTop=this.initialScrollTop,this.sourceElement.scrollLeft=this.initialScrollLeft,this.sourceElement.firstElementChild&&(this.sourceElement.firstElementChild.scrollTop=this.initialScrollTop,this.sourceElement.firstElementChild.scrollLeft=this.initialScrollLeft)},this.documentClicked=e=>{if(!this.host.keepOpenOnOutsideClick){const t=e.composed?e.composedPath():[e.target];if(t.includes(this.host)||t.includes(this.target))return;this.hide()}},this.handleScroll=e=>{switch(this.host.scrollStrategy){case"scroll":break;case"block":this.blockScroll(e);break;case"close":this.hide()}},(this.host=e).addController(this),(null==t?void 0:t.target)&&(this._target=t.target),(null==t?void 0:t.closeCallback)&&(this._hide=t.closeCallback),this.update()}hostDisconnected(){this.abortController.abort()}update(){this.toggleDirective=ja(this.target,this.host,this),this.configureListeners()}hide(){this._hide?this._hide():this.host.hide()}addEventListeners(){const e={capture:!0,signal:this.abortController.signal};this.host.keepOpenOnOutsideClick||document.addEventListener("click",this.documentClicked,e),document.addEventListener("scroll",this.handleScroll,e)}configureListeners(){this.host.open?this.addEventListeners():this.abortController.abort()}}class Xa{constructor(){this.orderBy=new Map(Object.entries({asc:1,desc:-1}))}resolveValue(e,t){return e[t]}compareValues(e,t){return"string"==typeof e&&"string"==typeof t?e.localeCompare(t):e>t?1:e<t?-1:0}compareObjects(e,t,a,i){const[r,l]=[this.resolveValue(e,a),this.resolveValue(t,a)];return this.orderBy.get(i)*this.compareValues(r,l)}apply(e,t){const{groupingOptions:{groupKey:a,valueKey:i,displayKey:r,direction:l}}=t;if(!a)return e;const n=new Map;return e.forEach((e=>{var t,l;if("object"!=typeof e||null===e)return;const s=null!==(t=e[a])&&void 0!==t?t:"Other",o=null!==(l=n.get(s))&&void 0!==l?l:[];0===o.length&&o.push({[i]:s,[r]:s,[a]:s,header:!0}),o.push(e),n.set(s,o)})),n.forEach((e=>{e.sort(((e,t)=>{if(!e.header&&!t.header)return this.compareObjects(e,t,r,l)}))})),Array.from(n.values()).flat()}}class Na{apply(e,t){const{searchTerm:a,filteringOptions:{filterKey:i,caseSensitive:r}}=t;if(!a)return e;const l=r?a:a.toLocaleLowerCase();return e.filter((e=>{const t=String(i?e[i]:e);return r?t.includes(l):t.toLocaleLowerCase().includes(l)}))}}class Ua{constructor(e){this.host=e,this.grouping=new Xa,this.filtering=new Na,this._searchTerm="",this.host.addController(this)}set searchTerm(e){this._searchTerm=e,this.host.requestUpdate("pipeline")}get searchTerm(){return this._searchTerm}get filteringOptions(){return this.host.filteringOptions}get groupingOptions(){return{valueKey:this.host.valueKey,displayKey:this.host.displayKey,groupKey:this.host.groupKey,direction:this.host.groupSorting}}index(e){return e.map(((e,t)=>({...e,dataIndex:t})))}hostConnected(){}async apply(e){return e=this.index(e),e=this.filtering.apply(e,this),this.grouping.apply(e,this)}}const Ka={toAttribute:e=>JSON.stringify(e),fromAttribute:e=>JSON.parse(e.replace(/'/gi,'"'))};var Ha=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n};k(U,ga,va,wa,Ea);let Ya=class extends(z(i.oi)){dataChanged(){this.dataState=structuredClone(this.data),this.hasUpdated&&this.pipeline()}updateDisplayKey(){var e;this.displayKey=null!==(e=this.displayKey)&&void 0!==e?e:this.valueKey}updateFilterKey(){var e;this.filteringOptions.filterKey=null!==(e=this.filteringOptions.filterKey)&&void 0!==e?e:this.displayKey}async pipeline(){this.dataState=await this.dataController.apply([...this.data])}toggleDirectiveChange(){this.target&&(this.toggleController.target=this.target,this.target.setAttribute("aria-expanded",this.open?"true":"false"))}constructor(){super(),this._value="",this.navigationController=new Aa(this),this.selectionController=new Va(this),this.dataController=new Ua(this),this.data=[],this.disabled=!1,this.required=!1,this.invalid=!1,this.outlined=!1,this.singleSelect=!1,this.autofocusList=!1,this.placeholderSearch="Search",this.dir="auto",this.open=!1,this.flip=!0,this.displayKey=this.valueKey,this.groupKey=this.displayKey,this.groupSorting="asc",this.filteringOptions={filterKey:this.displayKey,caseSensitive:!1},this.caseSensitiveIcon=!1,this.disableFiltering=!1,this.itemTemplate=({item:e})=>"object"!=typeof e||null===e?String(e):this.displayKey?i.dy`${e[this.displayKey]}`:i.dy`${String(e)}`,this.groupHeaderTemplate=({item:e})=>i.dy`${this.groupKey&&e[this.groupKey]}`,this.dataState=[],this.itemRenderer=(e,t)=>{const a=e,r=this.data.at(a.dataIndex),l=this.navigationController.active===t,n=this.selectionController.selected.has(r),s=i.dy`<igc-combo-header part="group-header"
      >${this.groupHeaderTemplate({item:a})}</igc-combo-header
    >`,o=$({item:!0,selected:n,active:l}),g=i.dy`<igc-combo-item
      part="${o}"
      exportparts="checkbox, checkbox-indicator, checked"
      @click=${this.itemClickHandler.bind(this)}
      .index=${t}
      .active=${l}
      ?selected=${n}
      ?hide-checkbox=${this.singleSelect}
      >${this.itemTemplate({item:a})}</igc-combo-item
    >`;return i.dy`${this.groupKey&&a.header?s:g}`},this.toggleController=new Ba(this,{target:this.target,closeCallback:async()=>{this.handleClosing()&&(this.open=!1,await this.updateComplete,this.emitEvent("igcClosed"))}}),this.addEventListener("focus",(()=>{this.emitEvent("igcFocus")})),this.addEventListener("blur",(()=>{const{selected:e}=this.selectionController;0===e.size&&(this.target.value="",this.resetSearchTerm()),this.emitEvent("igcBlur")})),this.addEventListener("keydown",this.navigationController.navigateHost.bind(this.navigationController))}themeAdopted(e){this.themeController=e}willUpdate(){this.theme=this.themeController.theme}async getUpdateComplete(){const e=await super.getUpdateComplete();return await this.toggleController.rendered,e}resetSearchTerm(){this.dataController.searchTerm=""}async resetState(){await this.updateComplete,this.selectionController.selected.clear(),this.updateValue(),this.resetSearchTerm(),this.navigationController.active=-1}get value(){return this._value}async updateValue(){this._value=this.selectionController.getValue(Array.from(this.selectionController.selected)),await this.updateComplete,this.target.value=this._value}validate(){this.updateComplete.then((()=>this.reportValidity()))}reportValidity(){return this.invalid=this.required&&!this.value,!this.invalid}checkValidity(){return this.reportValidity()}focus(e){this.target.focus(e)}blur(){this.target.blur()}normalizeSelection(e=[]){return Array.isArray(e)?e:[e]}select(e){const t=this.normalizeSelection(e);this.selectionController.select(t,!1),this.list.requestUpdate(),this.updateValue()}deselect(e){const t=this.normalizeSelection(e);this.selectionController.deselect(t,!1),this.list.requestUpdate(),this.updateValue()}async handleMainInput(e){this._show(),this.dataController.searchTerm=e.detail,await this.updateComplete;const t=this.dataState.findIndex((e=>!e.header));this.navigationController.active=e.detail.length>0?t:-1,this.list.requestUpdate(),this.clearSingleSelection()}handleSearchInput(e){this.dataController.searchTerm=e.detail}handleOpening(){return this.emitEvent("igcOpening",{cancelable:!0})}handleClosing(){return this.emitEvent("igcClosing",{cancelable:!0})}async _show(e=!0){this.open||e&&!this.handleOpening()||(this.open=!0,await this.updateComplete,e&&this.emitEvent("igcOpened"),this.singleSelect||this.list.focus(),this.autofocusList||this.input.focus())}show(){this._show(!1)}async _hide(e=!0){this.open&&(e&&!this.handleClosing()||(this.open=!1,await this.updateComplete,e&&this.emitEvent("igcClosed"),this.navigationController.active=-1))}hide(){this._hide(!1)}_toggle(e=!0){this.open?this._hide(e):this._show(e)}toggle(){this._toggle(!1)}listKeydownHandler(e){const t=e.composedPath().find((e=>e instanceof ga));t&&this.navigationController.navigateList(e,t)}itemClickHandler(e){const t=this.singleSelect?this.target:this.input,a=e.composedPath().find((e=>e instanceof va));this.toggleSelect(a.index),t.focus(),this.singleSelect&&this._hide()}toggleSelect(e){const{dataIndex:t}=this.dataState.at(e);this.selectionController.changeSelection(t),this.navigationController.active=e,this.updateValue(),this.list.requestUpdate()}navigateTo(e){this.navigationController.navigateTo(e,this.list)}clearSingleSelection(){const{selected:e}=this.selectionController,t=e.values().next().value;if(t){const a=this.valueKey?t[this.valueKey]:t;this.selectionController.deselect([a],e.size>0)}}handleClearIconClick(e){e.stopPropagation(),this.singleSelect?(this.resetSearchTerm(),this.clearSingleSelection()):this.selectionController.deselect([],!0),this.updateValue(),this.navigationController.active=-1,this.list.requestUpdate()}handleMainInputKeydown(e){this.navigationController.navigateMainInput(e,this.list)}handleSearchInputKeydown(e){this.navigationController.navigateSearchInput(e,this.list)}toggleCaseSensitivity(){this.filteringOptions.caseSensitive=!this.filteringOptions.caseSensitive,this.requestUpdate("pipeline")}get hasPrefixes(){return this.inputPrefix.length>0}get hasSuffixes(){return this.inputSuffix.length>0}renderToggleIcon(){const e="material"===this.theme?"keyboard_arrow_up":"arrow_drop_up",t="material"===this.theme?"keyboard_arrow_down":"arrow_drop_down";return i.dy`
      <span slot="suffix" part="toggle-icon">
        <slot name="toggle-icon">
          <igc-icon
            name=${this.open?e:t}
            collection="internal"
            aria-hidden="true"
          ></igc-icon>
        </slot>
      </span>
    `}renderClearIcon(){const{selected:e}=this.selectionController,t="material"===this.theme?"chip_cancel":"clear";return i.dy`<span
      slot="suffix"
      part="clear-icon"
      @click=${this.handleClearIconClick}
      ?hidden=${0===e.size}
    >
      <slot name="clear-icon">
        <igc-icon
          name="${t}"
          collection="internal"
          aria-hidden="true"
        ></igc-icon>
      </slot>
    </span>`}renderMainInput(){return i.dy`<igc-input
      id="target"
      role="combobox"
      aria-owns="dropdown"
      aria-describedby="helper-text"
      aria-disabled=${this.disabled}
      exportparts="container: input, input: native-input, label, prefix, suffix"
      @click=${e=>{e.preventDefault(),this._toggle(!0)}}
      placeholder=${(0,n.o)(this.placeholder)}
      label=${(0,n.o)(this.label)}
      dir=${this.dir}
      @igcChange=${e=>e.stopPropagation()}
      @igcFocus=${e=>{e.stopPropagation(),requestAnimationFrame((()=>{this.target.select()}))}}
      @igcBlur=${e=>e.stopPropagation()}
      @igcInput=${this.handleMainInput}
      @keydown=${this.handleMainInputKeydown}
      .disabled=${this.disabled}
      .required=${this.required}
      .invalid=${this.invalid}
      .outlined=${this.outlined}
      .autofocus=${this.autofocus}
      ?readonly=${!this.singleSelect}
    >
      <span slot=${this.hasPrefixes&&"prefix"}>
        <slot name="prefix"></slot>
      </span>
      ${this.renderClearIcon()}
      <span slot=${this.hasSuffixes&&"suffix"}>
        <slot name="suffix"></slot>
      </span>
      ${this.renderToggleIcon()}
    </igc-input>`}renderSearchInput(){var e;return i.dy`<div
      part="filter-input"
      ?hidden=${this.disableFiltering||this.singleSelect}
    >
      <igc-input
        part="search-input"
        placeholder=${this.placeholderSearch}
        exportparts="input: search-input"
        @igcFocus=${e=>e.stopPropagation()}
        @igcBlur=${e=>e.stopPropagation()}
        @igcInput=${this.handleSearchInput}
        @keydown=${this.handleSearchInputKeydown}
        dir=${this.dir}
      >
        <igc-icon
          slot=${this.caseSensitiveIcon&&"suffix"}
          name="case_sensitive"
          collection="internal"
          part=${$({"case-icon":!0,active:null!==(e=this.filteringOptions.caseSensitive)&&void 0!==e&&e})}
          @click=${this.toggleCaseSensitivity}
        ></igc-icon>
      </igc-input>
    </div>`}renderEmptyTemplate(){return i.dy`<div part="empty" ?hidden=${this.dataState.length>0}>
      <slot name="empty">The list is empty</slot>
    </div>`}renderList(){return i.dy`<div
      @keydown=${this.listKeydownHandler}
      part="list-wrapper"
      ${this.toggleController.toggleDirective}
    >
      ${this.renderSearchInput()}
      <div part="header">
        <slot name="header"></slot>
      </div>
      <igc-combo-list
        id="dropdown"
        part="list"
        aria-label="${this.label}"
        .items=${this.dataState}
        .renderItem=${this.itemRenderer}
        ?hidden=${0===this.dataState.length}
      >
      </igc-combo-list>
      ${this.renderEmptyTemplate()}
      <div part="footer">
        <slot name="footer"></slot>
      </div>
    </div>`}renderHelperText(){return i.dy`<div
      id="helper-text"
      part="helper-text"
      ?hidden="${0===this.helperText.length}"
    >
      <slot name="helper-text"></slot>
    </div>`}render(){return i.dy`
      ${this.renderMainInput()}${this.renderList()}${this.renderHelperText()}
    `}};Ya.tagName="igc-combo",Ya.styles=ia,Ha([(0,r.NH)({slot:"helper-text"})],Ya.prototype,"helperText",void 0),Ha([(0,r.NH)({slot:"suffix"})],Ya.prototype,"inputSuffix",void 0),Ha([(0,r.NH)({slot:"prefix"})],Ya.prototype,"inputPrefix",void 0),Ha([(0,r.IO)('[part="search-input"]')],Ya.prototype,"input",void 0),Ha([(0,r.IO)("igc-input#target")],Ya.prototype,"target",void 0),Ha([(0,r.IO)("igc-combo-list")],Ya.prototype,"list",void 0),Ha([(0,r.Cb)({attribute:!1})],Ya.prototype,"data",void 0),Ha([(0,r.Cb)()],Ya.prototype,"name",void 0),Ha([(0,r.Cb)({reflect:!0,type:Boolean})],Ya.prototype,"disabled",void 0),Ha([(0,r.Cb)({reflect:!0,type:Boolean})],Ya.prototype,"required",void 0),Ha([(0,r.Cb)({reflect:!0,type:Boolean})],Ya.prototype,"invalid",void 0),Ha([(0,r.Cb)({reflect:!0,type:Boolean})],Ya.prototype,"outlined",void 0),Ha([(0,r.Cb)({attribute:"single-select",reflect:!0,type:Boolean})],Ya.prototype,"singleSelect",void 0),Ha([(0,r.Cb)({type:Boolean})],Ya.prototype,"autofocus",void 0),Ha([(0,r.Cb)({attribute:"autofocus-list",type:Boolean})],Ya.prototype,"autofocusList",void 0),Ha([(0,r.Cb)({type:String})],Ya.prototype,"label",void 0),Ha([(0,r.Cb)({type:String})],Ya.prototype,"placeholder",void 0),Ha([(0,r.Cb)({attribute:"placeholder-search",type:String})],Ya.prototype,"placeholderSearch",void 0),Ha([(0,r.Cb)({reflect:!0})],Ya.prototype,"dir",void 0),Ha([(0,r.Cb)({type:Boolean})],Ya.prototype,"open",void 0),Ha([(0,r.Cb)({type:Boolean})],Ya.prototype,"flip",void 0),Ha([(0,r.Cb)({attribute:"value-key",reflect:!1})],Ya.prototype,"valueKey",void 0),Ha([(0,r.Cb)({attribute:"display-key",reflect:!1})],Ya.prototype,"displayKey",void 0),Ha([(0,r.Cb)({attribute:"group-key",reflect:!1})],Ya.prototype,"groupKey",void 0),Ha([(0,r.Cb)({attribute:"group-sorting",reflect:!1})],Ya.prototype,"groupSorting",void 0),Ha([(0,r.Cb)({attribute:"filtering-options",reflect:!1,converter:Ka})],Ya.prototype,"filteringOptions",void 0),Ha([(0,r.Cb)({type:Boolean,attribute:"case-sensitive-icon",reflect:!1})],Ya.prototype,"caseSensitiveIcon",void 0),Ha([(0,r.Cb)({type:Boolean,attribute:"disable-filtering",reflect:!1})],Ya.prototype,"disableFiltering",void 0),Ha([(0,r.Cb)({attribute:!1})],Ya.prototype,"itemTemplate",void 0),Ha([(0,r.Cb)({attribute:!1})],Ya.prototype,"groupHeaderTemplate",void 0),Ha([(0,r.SB)()],Ya.prototype,"dataState",void 0),Ha([m("data")],Ya.prototype,"dataChanged",null),Ha([m("valueKey")],Ya.prototype,"updateDisplayKey",null),Ha([m("displayKey")],Ya.prototype,"updateFilterKey",null),Ha([m("groupKey"),m("groupSorting"),m("pipeline")],Ya.prototype,"pipeline",null),Ha([m("open")],Ya.prototype,"toggleDirectiveChange",null),Ha([m("singleSelect",{waitUntilFirstUpdate:!0})],Ya.prototype,"resetState",null),Ha([m("value")],Ya.prototype,"validate",null),Ya=Ha([b({material:la,bootstrap:ra,fluent:na,indigo:sa}),e=>e,xe],Ya);const qa=Ya,Wa=new Set("aACL09#&?"),Qa=new Map([["C",/(?!^$)/u],["&",/[^\p{Separator}]/u],["a",/[\p{Letter}\d\p{Separator}]/u],["A",/[\p{Letter}\d]/u],["?",/[\p{Letter}\p{Separator}]/u],["L",/\p{Letter}/u],["0",/\d/],["9",/[\d\p{Separator}]/u],["#",/[\d\-+]/]]),Ga=new Set("0#LA&");class Za{constructor(e={format:"CCCCCCCCCC",promptCharacter:"_"}){this.literals=new Map,this.options=e}get literalPositions(){return this.getMaskLiterals(),Array.from(this.literals.keys())}get escapedMask(){return this.getMaskLiterals(),this._escapedMask}get mask(){return this.options.format}set mask(e){this.options.format=e||this.options.format,this.getMaskLiterals()}get prompt(){return this.options.promptCharacter}set prompt(e){this.options.promptCharacter=e?e.substring(0,1):this.options.promptCharacter}getMaskLiterals(){this.literals.clear(),this._escapedMask=this.mask;for(let e=0,t=0;e<this.mask.length;e++,t++){const[a,i]=[this.mask.charAt(e),this.mask.charAt(e+1)];"\\"===a&&Wa.has(i)?(this._escapedMask=this.replaceCharAt(this._escapedMask,t,""),this.literals.set(t,i),e++):Wa.has(a)||this.literals.set(t,a)}}isPromptChar(e){return e===this.prompt}replaceCharAt(e,t,a){return`${e.substring(0,t)}${a}${e.substring(t+1)}`}validate(e,t){const a=Qa.get(t);return!!a&&a.test(e)}getNonLiteralPositions(e=""){const t=this.literalPositions;return Array.from(e).map(((e,a)=>t.includes(a)?-1:a)).filter((e=>e>-1))}getRequiredNonLiteralPositions(e){const t=this.literalPositions;return Array.from(e).map(((e,a)=>Ga.has(e)&&!t.includes(a)?a:-1)).filter((e=>e>-1))}getPreviousNonLiteralPosition(e){const t=this.literalPositions;for(let a=e;a>0;a--)if(!t.includes(a))return a;return e}getNextNonLiteralPosition(e){const t=this.literalPositions;for(let a=e;a<this._escapedMask.length;a++)if(!t.includes(a))return a;return e}replace(e="",t,a,i){const r=Array.from(t.replace(/[０１２３４５６７８９]/g,(e=>({"１":"1","２":"2","３":"3","４":"4","５":"5","６":"6","７":"7","８":"8","９":"9","０":"0"}[e])))),l=this.literalPositions;i=Math.min(i,e.length);let n=a;for(let t=a;t<i||r.length&&t<e.length;t++){if(l.includes(t)){r[0]===e[t]&&(n=t+1,r.shift());continue}if(r[0]&&!this.validate(r[0],this._escapedMask[t])&&!this.isPromptChar(r[0]))break;let a=this.prompt;r.length&&(n=t+1,a=r.shift()),e=this.replaceCharAt(e,t,a)}return{value:e,end:n}}parse(e=""){return Array.from(e).reduce(((e,t,a)=>`${e}${this.literalPositions.includes(a)||this.isPromptChar(t)?"":t}`),"")}isValidString(e=""){const t=this.getRequiredNonLiteralPositions(this._escapedMask);return!(t.length>this.parse(e).length)&&t.every((t=>{const a=e.charAt(t);return void 0!==a&&this.validate(a,this._escapedMask.charAt(t))&&!this.isPromptChar(a)}))}apply(e=""){const t=this.getNonLiteralPositions(this._escapedMask);let a=new Array(this._escapedMask.length).fill(this.prompt).join("");if(this.literals.forEach(((e,t)=>{a=this.replaceCharAt(a,t,e)})),!e)return a;const i=t.map(((t,a)=>{const i=e.charAt(a);return this.validate(i,this._escapedMask.charAt(t))||this.isPromptChar(i)?i:this.prompt}));i.length>t.length&&i.splice(t.length);let r=0;for(const e of i)a=this.replaceCharAt(a,t[r++],e);return a}}var Ja,ei;!function(e){e.Day="day",e.Month="month",e.Year="year",e.Date="date",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.AmPm="amPm",e.Literal="literal"}(Ja||(Ja={})),function(e){e.Month="month",e.Year="year",e.Date="date",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.AmPm="amPm"}(ei||(ei={}));class ti{static parseValueFromMask(e,t,a){const i={};if(t.forEach((t=>{let r=parseInt(ti.getCleanVal(e,t,a),10);r||(r=t.type===Ja.Date||t.type===Ja.Month?1:0),i[t.type]=r})),i[Ja.Month]-=1,i[Ja.Month]<0||11<i[Ja.Month])return null;if(i[Ja.Year]<50&&(i[Ja.Year]+=2e3),i[Ja.Date]>ti.daysInMonth(i[Ja.Year],i[Ja.Month]))return null;if(i[Ja.Hours]>23||i[Ja.Minutes]>59||i[Ja.Seconds]>59)return null;const r=t.find((e=>e.type===Ja.AmPm));return r&&(i[Ja.Hours]%=12),r&&"pm"===ti.getCleanVal(e,r,a).toLowerCase()&&(i[Ja.Hours]+=12),new Date(i[Ja.Year]||2e3,i[Ja.Month]||0,i[Ja.Date]||1,i[Ja.Hours]||0,i[Ja.Minutes]||0,i[Ja.Seconds]||0)}static getDefaultMask(e){e=e||ti.DEFAULT_LOCALE;const t=ti.getDefaultLocaleMask(e);return void 0!==t?(t.forEach((e=>{e.type!==Ja.Year&&e.type!==ti.SEPARATOR&&(e.formatType="2-digit")})),ti.getMask(t)):""}static parseDateTimeFormat(e,t=ti.DEFAULT_LOCALE,a=!1){const i=e||ti.getDefaultMask(t),r=[],l=Array.from(i);let n=null,s=0;for(let e=0;e<l.length;e++,s++){const t=ti.determineDatePart(l[e]);if(n){if(n.type===t&&(n.format+=l[e],e<l.length-1))continue;ti.addCurrentPart(n,r,a),s=n.end}n={start:s,end:s+l[e].length,type:t,format:l[e]}}r.filter((e=>e.format.includes(n.format))).length||ti.addCurrentPart(n,r,a);const o=r.filter((e=>e.type===Ja.Year))[0];return o&&"yy"!==o.format&&(o.end+=4-o.format.length,o.format="yyyy"),r}static parseIsoDate(e){let t=/^\d{4}/g;if(t.test(e))return new Date(e+""+(-1===e.indexOf("T")?"T00:00:00":""));if(t=/^\d{2}/g,t.test(e)){const t=(new Date).toISOString();let[a,i]=t.split("T");return new Date(`${a}T${e}`)}return null}static isValidDate(e){return!!$e(e)&&!isNaN(e.getTime())}static formatDate(e,t,a,i=!1){const r={};let l,n="";switch(a){case"short":case"long":case"medium":case"full":r.dateStyle=a,r.timeStyle=a;break;case"shortDate":case"longDate":case"mediumDate":case"fullDate":r.dateStyle=a.toLowerCase().split("date")[0];break;case"shortTime":case"longTime":case"mediumTime":case"fullTime":r.timeStyle=a.toLowerCase().split("time")[0];break;default:return this.setDisplayFormatOptions(e,a,t,i)}try{l=new Intl.DateTimeFormat(t,r)}catch{l=new Intl.DateTimeFormat(this.DEFAULT_LOCALE,r)}return n=l.format(e),n}static getPartValue(e,t,a){let i;switch(e.type){case Ja.Date:i=a.getDate();break;case Ja.Month:i=a.getMonth()+1;break;case Ja.Year:i=2===t?this.prependValue(parseInt(a.getFullYear().toString().slice(-2),10),t,"0"):a.getFullYear();break;case Ja.Hours:i=-1!==e.format.indexOf("h")?this.prependValue(this.toTwelveHourFormat(a.getHours().toString()),t,"0"):a.getHours();break;case Ja.Minutes:i=a.getMinutes();break;case Ja.Seconds:i=a.getSeconds();break;case Ja.AmPm:i=a.getHours()>=12?"PM":"AM"}return e.type!==Ja.AmPm?this.prependValue(i,t,"0"):i}static spinYear(e,t){const a=ti.daysInMonth(t.getFullYear()+e,t.getMonth());return t.getDate()>a&&t.setDate(a),t.setFullYear(t.getFullYear()+e),t}static spinMonth(e,t,a){const i=ti.daysInMonth(t.getFullYear(),t.getMonth()+e);t.getDate()>i&&t.setDate(i);let r=t.getMonth()+e;r>11?r=a?r%11-1:11:r<0&&(r=a?11+r%11+1:0),t.setMonth(r)}static spinDate(e,t,a){const i=ti.daysInMonth(t.getFullYear(),t.getMonth());let r=t.getDate()+e;r>i?r=a?r%i:i:r<1&&(r=a?i+r%i:1),t.setDate(r)}static spinHours(e,t,a){let i=t.getHours()+e;i>23?i=a?i%23-1:23:i<0&&(i=a?23+i%23+1:0),t.setHours(i)}static spinMinutes(e,t,a){let i=t.getMinutes()+e;i>59?i=a?i%59-1:59:i<0&&(i=a?59+i%59+1:0),t.setMinutes(i)}static spinSeconds(e,t,a){let i=t.getSeconds()+e;i>59?i=a?i%59-1:59:i<0&&(i=a?59+i%59+1:0),t.setSeconds(i)}static spinAmPm(e,t,a){switch(a){case"AM":e=new Date(e.setHours(e.getHours()+12));break;case"PM":e=new Date(e.setHours(e.getHours()-12))}return e.getDate()!==t.getDate()?t:e}static greaterThanMaxValue(e,t,a=!0,i=!0){if(a&&i)return e.getTime()>t.getTime();const r=new Date(e.getTime()),l=new Date(t.getTime());return a||(r.setHours(0,0,0,0),l.setHours(0,0,0,0)),i||(r.setFullYear(0,0,0),l.setFullYear(0,0,0)),r.getTime()>l.getTime()}static lessThanMinValue(e,t,a=!0,i=!0){if(a&&i)return e.getTime()<t.getTime();const r=new Date(e.getTime()),l=new Date(t.getTime());return a||(r.setHours(0,0,0,0),l.setHours(0,0,0,0)),i||(r.setFullYear(0,0,0),l.setFullYear(0,0,0)),r.getTime()<l.getTime()}static validateMinMax(e,t,a,i=!0,r=!0){const l={},n=ti.isValidDate(t)?t:ti.parseIsoDate(t),s=ti.isValidDate(a)?a:ti.parseIsoDate(a);return n&&e&&ti.lessThanMinValue(e,n,i,r)&&Object.assign(l,{minValue:!0}),s&&e&&ti.greaterThanMaxValue(e,s,i,r)&&Object.assign(l,{maxValue:!0}),l}static setDisplayFormatOptions(e,t,a,i=!1){var r;const l={},n=this.parseDateTimeFormat(t,a,i),s=new Map([[Ja.Date,"day"],[Ja.Month,"month"],[Ja.Year,"year"],[Ja.Hours,"hour"],[Ja.Minutes,"minute"],[Ja.Seconds,"second"],[Ja.AmPm,"dayPeriod"]]),o=new Map([["d","numeric"],["dd","2-digit"],["M","numeric"],["MM","2-digit"],["MMM","short"],["MMMM","long"],["MMMMM","narrow"],["y","numeric"],["yy","2-digit"],["yyy","numeric"],["yyyy","numeric"],["h","numeric"],["hh","2-digit"],["H","numeric"],["HH","2-digit"],["m","numeric"],["mm","2-digit"],["s","numeric"],["ss","2-digit"],["ttt","short"],["tttt","long"],["ttttt","narrow"]]);for(const e of n)if(e.type!==Ja.Literal){const t=s.get(e.type),a=o.get(e.format)||o.get(e.format.substring(0,2));t&&a&&(l[t]=a,e.type===Ja.Hours&&("h"===e.format.charAt(0)?l.hour12=!0:l.hour12=!1)),e.type===Ja.AmPm&&e.format.length<=2&&(l.hour="2-digit",l.hour12=!0)}let g;try{g=new Intl.DateTimeFormat(a,l)}catch{g=new Intl.DateTimeFormat(this.DEFAULT_LOCALE,l)}const d=g.formatToParts(e);let h="";for(const e of n){if(e.type===Ja.Literal){h+=e.format;continue}const t=s.get(e.type);h+=(null===(r=d.filter((e=>e.type===t))[0])||void 0===r?void 0:r.value)||""}return h}static getMask(e){const t=[];for(const a of e){switch(a.formatType){case"numeric":a.type===Ja.Day?t.push("d"):a.type===Ja.Month?t.push("M"):t.push("yyyy");break;case"2-digit":a.type===Ja.Day?t.push("dd"):a.type===Ja.Month?t.push("MM"):t.push("yy")}a.type===ti.SEPARATOR&&t.push(a.value)}return t.join("")}static addCurrentPart(e,t,a=!1){ti.ensureLeadingZero(e,a),e.end=e.start+e.format.length,t.push(e)}static ensureLeadingZero(e,t=!1){switch(e.type){case Ja.Date:case Ja.Month:case Ja.Hours:case Ja.Minutes:case Ja.Seconds:1!==e.format.length||t||(e.format=e.format.repeat(2))}}static determineDatePart(e){switch(e){case"d":case"D":return Ja.Date;case"M":return Ja.Month;case"y":case"Y":return Ja.Year;case"h":case"H":return Ja.Hours;case"m":return Ja.Minutes;case"s":case"S":return Ja.Seconds;case"t":case"T":return Ja.AmPm;default:return Ja.Literal}}static getDefaultLocaleMask(e){const t=[];let a;try{a=new Intl.DateTimeFormat(e)}catch{return}const i=a.formatToParts(new Date);for(const e of i)e.type===ti.SEPARATOR?t.push({type:ti.SEPARATOR,value:e.value}):t.push({type:e.type});const r=a.resolvedOptions();for(const e of t)switch(e.type){case Ja.Day:e.formatType=r.day;break;case Ja.Month:e.formatType=r.month;break;case Ja.Year:e.formatType=r.year}return ti.fillDatePartsPositions(t),t}static fillDatePartsPositions(e){let t=0;for(const a of e)if(a.type===Ja.Day||a.type===Ja.Month)a.position=[t,t+2],t+=2;else if(a.type===Ja.Year)switch(a.formatType){case"numeric":a.position=[t,t+4],t+=4;break;case"2-digit":a.position=[t,t+2],t+=2}else a.type===ti.SEPARATOR&&(a.position=[t,t+1],t++)}static getCleanVal(e,t,a){return ti.trimEmptyPlaceholders(e.substring(t.start,t.end),a)}static trimEmptyPlaceholders(e,t){return e.replace(new RegExp(t||"_","g"),"")}static daysInMonth(e,t){return new Date(e,t+1,0).getDate()}static prependValue(e,t,a){return(a+e.toString()).slice(-t)}static toTwelveHourFormat(e){let t=parseInt(e.replace(new RegExp(this._parser.prompt,"g"),"0"),10);return t>12?t-=12:0===t&&(t=12),t}}ti.DEFAULT_INPUT_FORMAT="MM/dd/yyyy",ti.DEFAULT_TIME_INPUT_FORMAT="hh:mm tt",ti.SEPARATOR="literal",ti.DEFAULT_LOCALE="en",ti._parser=new Za;var ai=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n};let ii=class extends Pa{constructor(){super(...arguments),this.parser=new Za,this.selection={start:0,end:0},this.compositionStart=0,this.hasFocus=!1,this.maskedValue="",this._mask="",this.invalid=!1}get inputSelection(){return{start:this.input.selectionStart||0,end:this.input.selectionEnd||0}}get emptyMask(){return this.parser.apply()}connectedCallback(){super.connectedCallback(),this._mask=this._mask||this.parser.mask,this.prompt=this.prompt||this.parser.prompt}setCustomValidity(e){this.input.setCustomValidity(e),this.invalid=!this.input.checkValidity()}select(){this.input.select()}handleInput({inputType:e,isComposing:t}){const a=this.input.value,{start:i,end:r}=this.selection,l=this.parser.getNextNonLiteralPosition(r)+1;switch(e){case"deleteContentForward":return this.updateInput("",{start:i,end:l}),this.updateComplete.then((()=>this.input.setSelectionRange(l,l)));case"deleteContentBackward":if(t)return;return this.updateInput("",{start:this.parser.getPreviousNonLiteralPosition(this.inputSelection.start),end:r});case"deleteByCut":return this.updateInput("",this.selection);case"insertText":return this.updateInput(a.substring(i,this.inputSelection.end),this.selection);case"insertFromPaste":return this.updateInput(a.substring(i,this.inputSelection.end),{start:i,end:this.inputSelection.start});case"insertFromDrop":return this.updateInput(a.substring(this.inputSelection.start,this.inputSelection.end),{...this.inputSelection})}}handleKeydown({key:e}){e&&(this.selection=this.inputSelection)}handleCut(){this.selection=this.inputSelection}handleDragStart(){this.selection=this.inputSelection}handleCompositionStart(){this.compositionStart=this.inputSelection.start}handleCompositionEnd({data:e}){this.updateInput(e,{start:this.compositionStart,end:this.inputSelection.end})}handleInvalid(){this.invalid=!0}setSelectionRange(e,t,a){super.setSelectionRange(e,t,a),this.selection={start:e,end:t}}};ai([(0,r.SB)()],ii.prototype,"hasFocus",void 0),ai([(0,r.SB)()],ii.prototype,"maskedValue",void 0),ai([(0,r.SB)()],ii.prototype,"_mask",void 0),ai([(0,r.Cb)()],ii.prototype,"prompt",void 0),ai([(0,r.Cb)({reflect:!0,type:Boolean})],ii.prototype,"invalid",void 0),ai([(e,t)=>{}],ii.prototype,"setSelectionRange",null),ii=ai([ne],ii);var ri=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n};class li extends(z(ii)){get inputFormat(){return this._inputFormat||this._defaultMask}set inputFormat(e){e&&(this.setMask(e),this._inputFormat=e)}get value(){return this._value}set value(e){this._value=e?ti.isValidDate(e)?e:ti.parseIsoDate(e):null,this.updateMask(),this.validate()}setDefaultMask(){this._inputFormat||(this.updateDefaultMask(),this.setMask(this._defaultMask)),this.value&&this.updateMask()}setDisplayFormat(){this.displayFormat&&this.value&&(this.maskedValue=ti.formatDate(this.value,this.locale,this.displayFormat,!0))}promptChange(){this.prompt?this.parser.prompt=this.prompt:this.prompt=this.parser.prompt}handleInvalidState(){this.updateComplete.then((()=>this.invalid=!this.input.checkValidity()))}validate(){if(!this.value)return null;let e={};return(this.minValue||this.maxValue)&&(e=ti.validateMinMax(this.value,this.minValue,this.maxValue,this.hasTimeParts,this.hasDateParts),Object.keys(e).length>0?this.invalid=!0:this.invalid=!1),e}get hasDateParts(){return(this._inputDateParts||ti.parseDateTimeFormat(this.inputFormat)).some((e=>e.type===Ja.Date||e.type===Ja.Month||e.type===Ja.Year))}get hasTimeParts(){return(this._inputDateParts||ti.parseDateTimeFormat(this.inputFormat)).some((e=>e.type===Ja.Hours||e.type===Ja.Minutes||e.type===Ja.Seconds))}get targetDatePart(){var e;let t;if(this.hasFocus){const a=null===(e=this._inputDateParts.find((e=>e.start<=this.inputSelection.start&&this.inputSelection.start<=e.end&&e.type!==Ja.Literal)))||void 0===e?void 0:e.type;a&&(t=a)}else t=this._inputDateParts.some((e=>e.type===Ja.Date))?ei.Date:this._inputDateParts.some((e=>e.type===Ja.Hours))?ei.Hours:this._inputDateParts[0].type;return t}get datePartDeltas(){return Object.assign({},this._datePartDeltas,this.spinDelta)}constructor(){super(),this._oldValue=null,this._datePartDeltas={date:1,month:1,year:1,hours:1,minutes:1,seconds:1},this.spinLoop=!0,this.locale="en",this.addEventListener("wheel",this.onWheel)}connectedCallback(){super.connectedCallback(),this.updateDefaultMask(),this.setMask(this.inputFormat),this.value&&this.updateMask()}reportValidity(){const e=this._value?0===Object.keys(this.validate()).length:this.input.reportValidity();return this.invalid=!e,e}checkValidity(){return this.disabled?this.input.checkValidity():this._value?this.input.checkValidity()&&0===Object.keys(this.validate()).length:!this.required}stepUp(e,t){const a=e||this.targetDatePart;if(!a)return;const i=this.trySpinValue(a,t);this.value=i,this.handleInput()}stepDown(e,t){const a=e||this.targetDatePart;if(!a)return;const i=this.trySpinValue(a,t,!0);this.value=i,this.handleInput()}clear(){this.maskedValue="",this.value=null}updateMask(){if(this.hasFocus)this.maskedValue=this.getMaskedValue();else{if(!this.value||!ti.isValidDate(this.value))return void(this.maskedValue="");const e=this.displayFormat||this.inputFormat;this.displayFormat?this.maskedValue=ti.formatDate(this.value,this.locale,e,!0):this.inputFormat?this.maskedValue=ti.formatDate(this.value,this.locale,e):this.maskedValue=this.value.toLocaleString()}}handleChange(){this.emitEvent("igcChange",{detail:this.value}),this.invalid=!this.checkValidity()}handleInput(){var e;this.emitEvent("igcInput",{detail:null===(e=this.value)||void 0===e?void 0:e.toString()})}handleDragLeave(){this.hasFocus||this.updateMask()}handleDragEnter(){this.hasFocus||(this.maskedValue=this.getMaskedValue())}async updateInput(e,t){var a;const{value:i,end:r}=this.parser.replace(this.maskedValue,e,t.start,t.end);this.maskedValue=i,this.updateValue(),this.requestUpdate(),t.start!==this.inputFormat.length&&this.emitEvent("igcInput",{detail:null===(a=this.value)||void 0===a?void 0:a.toString()}),await this.updateComplete,this.input.setSelectionRange(r,r)}trySpinValue(e,t,a=!1){t||(t=this.datePartDeltas[e]||1);const i=a?-Math.abs(t):Math.abs(t);return this.spinValue(e,i)}spinValue(e,t){if(!this.value||!ti.isValidDate(this.value))return new Date;const a=new Date(this.value.getTime());let i,r;switch(e){case ei.Date:ti.spinDate(t,a,this.spinLoop);break;case ei.Month:ti.spinMonth(t,a,this.spinLoop);break;case ei.Year:ti.spinYear(t,a);break;case ei.Hours:ti.spinHours(t,a,this.spinLoop);break;case ei.Minutes:ti.spinMinutes(t,a,this.spinLoop);break;case ei.Seconds:ti.spinSeconds(t,a,this.spinLoop);break;case ei.AmPm:if(i=this._inputDateParts.find((e=>e.type===Ja.AmPm)),void 0!==i)return r=this.maskedValue.substring(i.start,i.end),ti.spinAmPm(a,this.value,r)}return a}onWheel(e){this.hasFocus&&(this.selection=this.inputSelection,e.preventDefault(),e.stopPropagation(),e.deltaY>0?this.stepDown():this.stepUp(),this.updateComplete.then((()=>this.setSelectionRange(this.selection.start,this.selection.end))))}updateDefaultMask(){this._defaultMask=ti.getDefaultMask(this.locale)}setMask(e){var t;const a=null===(t=this._inputDateParts)||void 0===t?void 0:t.map((e=>e.format)).join("");this._inputDateParts=ti.parseDateTimeFormat(e),e=this._inputDateParts.map((e=>e.format)).join(""),this._defaultMask=e;const i=(e||ti.DEFAULT_INPUT_FORMAT).replace(new RegExp(/(?=[^t])[\w]/,"g"),"0");this._mask=-1!==i.indexOf("tt")?i.replace(new RegExp("tt","g"),"LL"):i,this.parser.mask=this._mask,this.parser.prompt=this.prompt,this.placeholder&&a!==this.placeholder||(this.placeholder=e)}parseDate(e){return e?ti.parseValueFromMask(e,this._inputDateParts,this.prompt):null}getMaskedValue(){let e=this.emptyMask;if(ti.isValidDate(this.value)){for(const t of this._inputDateParts){if(t.type===Ja.Literal)continue;const a=ti.getPartValue(t,t.format.length,this.value);e=this.parser.replace(e,a,t.start,t.end).value}return e}return""===this.maskedValue?e:this.maskedValue}isComplete(){return-1===this.maskedValue.indexOf(this.prompt)}updateValue(){if(this.isComplete()){const e=this.parseDate(this.maskedValue);ti.isValidDate(e)?this.value=e:this.value=null}else this.value=null}getNewPosition(e,t=0){const a=this._inputDateParts.filter((e=>e.type===Ja.Literal));let i=this.selection.start;if(t){do{i++}while(!a.some((e=>e.start===i))&&i<e.length);return i}do{i=i>0?--i:i}while(!a.some((e=>e.end===i))&&i>0);return i}handleFocus(){this.hasFocus=!0,this._oldValue=this.value,this.updateMask(),this.emitEvent("igcFocus")}handleBlur(){if(this.hasFocus=!1,this.isComplete()||this.maskedValue===this.emptyMask)this.updateMask();else{const e=this.parseDate(this.maskedValue);e?this.value=e:(this.value=null,this.maskedValue="")}this._oldValue!==this.value&&this.handleChange(),this.emitEvent("igcBlur")}handleKeydown(e){super.handleKeydown(e);const t=e.key;switch(t){case"ArrowLeft":case"ArrowRight":if(e.ctrlKey){e.preventDefault();const a=e.target.value,i="ArrowRight"===t?1:0,r=this.getNewPosition(a,i);this.setSelectionRange(r,r)}break;case"ArrowUp":case"ArrowDown":e.preventDefault(),"ArrowUp"===t?this.stepUp():this.stepDown(),this.updateComplete.then((()=>this.setSelectionRange(this.selection.start,this.selection.end)));break;case";":e.ctrlKey&&(this.value=new Date)}}renderInput(){return i.dy`
      <input
        type="text"
        part=${$(this.resolvePartNames("input"))}
        name=${(0,n.o)(this.name)}
        .value=${(0,St.a)(this.maskedValue)}
        .placeholder=${(0,St.a)(this.placeholder||this.emptyMask)}
        ?readonly=${this.readonly}
        ?disabled=${this.disabled}
        ?required=${this.required}
        @invalid="${this.handleInvalid}"
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @input=${super.handleInput}
        @keydown=${this.handleKeydown}
        @cut=${this.handleCut}
        @compositionstart=${this.handleCompositionStart}
        @compositionend=${this.handleCompositionEnd}
        @dragenter=${this.handleDragEnter}
        @dragleave=${this.handleDragLeave}
        @dragstart=${this.handleDragStart}
      />
    `}}li.tagName="igc-date-time-input",ri([(0,r.Cb)({attribute:"input-format"})],li.prototype,"inputFormat",null),ri([(0,r.Cb)({converter:{fromAttribute:e=>e?ti.parseIsoDate(e):null,toAttribute:e=>e.toISOString()}}),(e,t)=>{}],li.prototype,"value",null),ri([(0,r.Cb)({attribute:"min-value",converter:{fromAttribute:e=>e?ti.parseIsoDate(e):null,toAttribute:e=>e.toISOString()}})],li.prototype,"minValue",void 0),ri([(0,r.Cb)({attribute:"max-value",converter:{fromAttribute:e=>e?ti.parseIsoDate(e):null,toAttribute:e=>e.toISOString()}})],li.prototype,"maxValue",void 0),ri([(0,r.Cb)({attribute:"display-format"})],li.prototype,"displayFormat",void 0),ri([(0,r.Cb)({attribute:!1})],li.prototype,"spinDelta",void 0),ri([(0,r.Cb)({type:Boolean,attribute:"spin-loop"})],li.prototype,"spinLoop",void 0),ri([(0,r.Cb)()],li.prototype,"locale",void 0),ri([m("locale",{waitUntilFirstUpdate:!0})],li.prototype,"setDefaultMask",null),ri([m("displayFormat",{waitUntilFirstUpdate:!0})],li.prototype,"setDisplayFormat",null),ri([m("prompt",{waitUntilFirstUpdate:!0})],li.prototype,"promptChange",null),ri([m("required",{waitUntilFirstUpdate:!0}),m("disabled",{waitUntilFirstUpdate:!0}),m("value",{waitUntilFirstUpdate:!0})],li.prototype,"handleInvalidState",null),ri([m("maxValue"),m("minValue")],li.prototype,"validate",null);const ni=i.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 2px), 2px);
  background: hsla(var(--ig-surface-500), var(--ig-surface-a));
  color: var(--ig-surface-500-contrast);
  border-style: none;
  padding: unset;
}

[part=base] {
  background: inherit;
  color: inherit;
  border-style: inherit;
  padding: inherit;
  border: inherit;
  border-radius: inherit;
  min-width: inherit;
  -webkit-box-shadow: var(--ig-elevation-24);
          box-shadow: var(--ig-elevation-24);
}

[part=content] {
  color: var(--content-color, hsla(var(--ig-gray-700), var(--ig-gray-a)));
  font-family: var(--ig-body-1-font-family, var(--ig-font-family));
  font-size: var(--ig-body-1-font-size);
  font-weight: var(--ig-body-1-font-weight);
  font-style: var(--ig-body-1-font-style);
  line-height: var(--ig-body-1-line-height);
  letter-spacing: var(--ig-body-1-letter-spacing);
  text-transform: var(--ig-body-1-text-transform);
  margin-top: var(--ig-body-1-margin-top);
  margin-bottom: var(--ig-body-1-margin-bottom);
  margin: 0;
}

[part=title],
[part=footer] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
  font-family: var(--ig-h6-font-family, var(--ig-font-family));
  font-size: var(--ig-h6-font-size);
  font-weight: var(--ig-h6-font-weight);
  font-style: var(--ig-h6-font-style);
  line-height: var(--ig-h6-line-height);
  letter-spacing: var(--ig-h6-letter-spacing);
  text-transform: var(--ig-h6-text-transform);
  margin-top: var(--ig-h6-margin-top);
  margin-bottom: var(--ig-h6-margin-bottom);
  margin: 0;
}

[part=footer] {
  -ms-flex-wrap: nowrap;
      flex-wrap: nowrap;
  -webkit-box-pack: end;
      -ms-flex-pack: end;
          justify-content: flex-end;
}

::slotted(*) {
  font: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  text-transform: inherit;
  margin: 0;
}

slot[name=title]::slotted(:not(:last-child)),
slot[name=footer]::slotted(:not(:last-child)) {
  -webkit-margin-end: 0.5rem;
          margin-inline-end: 0.5rem;
}

dialog::-webkit-backdrop {
  background: none;
}

dialog::backdrop {
  background: none;
}

[part=backdrop] {
  position: fixed;
  inset: 0;
  background: hsla(var(--ig-gray-500), 0.54);
}`,si=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 4px), 4px);
}

[part=base] {
  min-width: 18rem;
  border: 1px solid var(--border-color, hsla(var(--ig-gray-300), var(--ig-gray-a)));
  -webkit-box-shadow: none;
          box-shadow: none;
}

[part=title],
[part=footer] {
  font-family: var(--ig-h5-font-family, var(--ig-font-family));
  font-size: var(--ig-h5-font-size);
  font-weight: var(--ig-h5-font-weight);
  font-style: var(--ig-h5-font-style);
  line-height: var(--ig-h5-line-height);
  letter-spacing: var(--ig-h5-letter-spacing);
  text-transform: var(--ig-h5-text-transform);
  margin-top: var(--ig-h5-margin-top);
  margin-bottom: var(--ig-h5-margin-bottom);
  margin: 0;
  padding: 1rem;
}

[part=content] {
  padding: 1rem;
}

[part=title] {
  -webkit-border-after: 1px solid var(--border-color, hsla(var(--ig-gray-300), var(--ig-gray-a)));
          border-block-end: 1px solid var(--border-color, hsla(var(--ig-gray-300), var(--ig-gray-a)));
}

[part=footer] {
  -webkit-border-before: 1px solid var(--border-color, hsla(var(--ig-gray-300), var(--ig-gray-a)));
          border-block-start: 1px solid var(--border-color, hsla(var(--ig-gray-300), var(--ig-gray-a)));
}`,oi=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
[part=title] {
  padding: 1.5rem;
  -webkit-padding-before: 1rem;
          padding-block-start: 1rem;
}

[part=content] {
  padding-inline: 1.5rem;
  -webkit-padding-after: 1.25rem;
          padding-block-end: 1.25rem;
}

[part=footer] {
  padding: 1.5rem;
  -webkit-padding-before: 0;
          padding-block-start: 0;
}

[part=backdrop] {
  background: hsla(var(--ig-gray-900), 0.4);
}`,gi=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
[part=title] {
  padding: 1rem 1.5rem;
}

[part=content] {
  padding-inline: 1.5rem;
  -webkit-padding-after: 0.5rem;
          padding-block-end: 0.5rem;
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}

[part=footer] {
  padding: 0.5rem;
}`,di=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
[part=title] {
  padding-inline: 1.5rem;
  -webkit-padding-before: 1rem;
          padding-block-start: 1rem;
}

[part=content] {
  padding: 0.875rem 1.5rem;
}

[part=footer] {
  padding: 0.5rem;
  -webkit-padding-before: 0;
          padding-block-start: 0;
}`;var hi,ci=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n};k(ve);let bi=hi=class extends(z(i.oi)){constructor(){super(...arguments),this.titleId=`title-${hi.increment()}`,this.closeOnEscape=!0,this.closeOnOutsideClick=!1,this.hideDefaultAction=!1,this.open=!1,this.formSubmitHandler=e=>{var t;e instanceof SubmitEvent&&e.submitter&&(this.returnValue=(null===(t=e.submitter)||void 0===t?void 0:t.value)||""),e.defaultPrevented||this.hideWithEvent()}}handleOpenState(){this.open?this.dialog.showModal():this.dialog.close()}async firstUpdated(){await this.updateComplete,this.open&&this.dialog.showModal()}show(){this.open||(this.open=!0)}hide(){this.open&&(this.open=!1)}toggle(){this.open?this.hide():this.show()}async hideWithEvent(){this.open&&this.handleClosing()&&(this.open=!1,await this.updateComplete,this.emitEvent("igcClosed"))}handleCancel(e){e.preventDefault(),this.closeOnEscape&&this.hideWithEvent()}handleClick({clientX:e,clientY:t,target:a}){if(this.closeOnOutsideClick&&this.dialog.isSameNode(a)){const{left:a,top:i,right:r,bottom:l}=this.dialog.getBoundingClientRect(),n=(e,t,a)=>e>=t&&e<=a;n(e,a,r)&&n(t,i,l)||this.hideWithEvent()}}handleClosing(){return this.emitEvent("igcClosing",{cancelable:!0})}handleSlotChange(){Array.from(this.querySelectorAll("igc-form, form")).filter((e=>"dialog"===e.getAttribute("method"))).forEach((e=>{const t=/igc-form/i.test(e.tagName)?"igcSubmit":"submit";e.removeEventListener(t,this.formSubmitHandler),e.addEventListener(t,this.formSubmitHandler)}))}render(){const e=this.ariaLabel?this.ariaLabel:void 0,t=e?void 0:this.titleId;return i.dy`
      <div part="backdrop" aria-hidden="true" ?hidden=${!this.open}></div>
      <dialog
        part="base"
        role="dialog"
        @click=${this.handleClick}
        @cancel=${this.handleCancel}
        aria-label=${(0,n.o)(e)}
        aria-labelledby=${(0,n.o)(t)}
      >
        <header part="title" id=${this.titleId}>
          <slot name="title"><span>${this.title}</span></slot>
        </header>
        <section part="content">
          <slot @slotchange=${this.handleSlotChange}></slot>
        </section>
        <footer part="footer">
          <slot name="footer">
            ${this.hideDefaultAction?i.Ld:i.dy`<igc-button variant="flat" @click=${this.hideWithEvent}
                  >OK</igc-button
                >`}
          </slot>
        </footer>
      </dialog>
    `}};bi.tagName="igc-dialog",bi.styles=[ni],bi.increment=M(),ci([(0,r.IO)("dialog",!0)],bi.prototype,"dialog",void 0),ci([(0,r.Cb)({type:Boolean,attribute:"close-on-escape"})],bi.prototype,"closeOnEscape",void 0),ci([(0,r.Cb)({type:Boolean,attribute:"close-on-outside-click"})],bi.prototype,"closeOnOutsideClick",void 0),ci([(0,r.Cb)({type:Boolean,attribute:"hide-default-action"})],bi.prototype,"hideDefaultAction",void 0),ci([(0,r.Cb)({type:Boolean,reflect:!0})],bi.prototype,"open",void 0),ci([(0,r.Cb)()],bi.prototype,"title",void 0),ci([(0,r.Cb)({attribute:!1})],bi.prototype,"returnValue",void 0),ci([m("open",{waitUntilFirstUpdate:!0})],bi.prototype,"handleOpenState",null),bi=hi=ci([b({bootstrap:si,material:di,fluent:oi,indigo:gi}),e=>e],bi);const mi=bi,pi=i.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-family: var(--ig-font-family);
}

[part=base] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.25rem), 0.25rem);
  overflow-y: auto;
  overflow-x: hidden;
  background: hsla(var(--ig-surface-500), var(--ig-surface-a));
  -webkit-box-shadow: var(--ig-elevation-8);
          box-shadow: var(--ig-elevation-8);
  min-width: 7rem;
  padding: 0.5rem 0;
  z-index: 10005;
}

:host([size=small]) {
  --component-size: var(--ig-size, var(--ig-size-small));
}

:host([size=medium]) {
  --component-size: var(--ig-size, var(--ig-size-medium));
}

:host([size=large]) {
  --component-size: var(--ig-size, var(--ig-size-large));
}`,vi=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
[part=base] {
  -webkit-box-shadow: none;
          box-shadow: none;
  border: 1px solid var(--border-color, hsla(var(--ig-gray-300), var(--ig-gray-a)));
}`,yi=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
[part=base] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.125rem), 0.125rem);
  -webkit-box-shadow: var(--ig-elevation-4);
          box-shadow: var(--ig-elevation-4);
  padding: 0;
}`,ui=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
[part=base] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.125rem), 0.125rem);
  -webkit-box-shadow: var(--ig-elevation-3);
          box-shadow: var(--ig-elevation-3);
  padding: 0;
}`,xi=i.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  pointer-events: auto;
}
:host ::slotted([slot=label]) {
  font-family: var(--ig-overline-font-family, var(--ig-font-family));
  font-size: var(--ig-overline-font-size);
  font-weight: var(--ig-overline-font-weight);
  font-style: var(--ig-overline-font-style);
  line-height: var(--ig-overline-line-height);
  letter-spacing: var(--ig-overline-letter-spacing);
  text-transform: var(--ig-overline-text-transform);
  margin-top: var(--ig-overline-margin-top);
  margin-bottom: var(--ig-overline-margin-bottom);
  white-space: nowrap;
  -o-text-overflow: ellipsis;
     text-overflow: ellipsis;
  overflow: hidden;
  display: block;
  white-space: nowrap;
  position: relative;
  color: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
  pointer-events: none;
  padding-inline: max(var(--is-large, 1) * max(16px, -1 * 16px) * var(--ig-spacing-inline-large, var(--ig-spacing-inline, --ig-spacing)), var(--is-medium, 1) * max(8px, -1 * 8px) * var(--ig-spacing-inline-medium, var(--ig-spacing-inline, --ig-spacing)), var(--is-small, 1) * max(4px, -1 * 4px) * var(--ig-spacing-inline-small, var(--ig-spacing-inline, --ig-spacing)));
  padding-block: max(var(--is-large, 1) * max(8px, -1 * 8px) * var(--ig-spacing-block-large, var(--ig-spacing-block, --ig-spacing)), var(--is-medium, 1) * max(4px, -1 * 4px) * var(--ig-spacing-block-medium, var(--ig-spacing-block, --ig-spacing)), var(--is-small, 1) * max(2px, -1 * 2px) * var(--ig-spacing-block-small, var(--ig-spacing-block, --ig-spacing)));
}`,fi=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host ::slotted([slot=label]) {
  padding: max(var(--is-large, 1) * max(8px, -1 * 8px) * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * max(4px, -1 * 4px) * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * max(2px, -1 * 2px) * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
}`;var wi=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n};let ki=class extends i.oi{connectedCallback(){super.connectedCallback(),this.setAttribute("role","group"),this.parent=this.getParent()}getParent(){return this.closest("igc-dropdown")}render(){var e,t;return this.setAttribute("size",null!==(t=null===(e=this.parent)||void 0===e?void 0:e.size)&&void 0!==t?t:"large"),i.dy`
      <label part="label"><slot name="label"></slot></label>
      <slot></slot>
    `}};ki.tagName="igc-dropdown-group",ki.styles=xi,wi([(e,t)=>{},(0,r.NH)({flatten:!0,selector:"igc-dropdown-item"})],ki.prototype,"items",void 0),ki=wi([b({fluent:fi})],ki);const zi=ki,Ci=i.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  font-family: var(--ig-overline-font-family, var(--ig-font-family));
  font-size: var(--ig-overline-font-size);
  font-weight: var(--ig-overline-font-weight);
  font-style: var(--ig-overline-font-style);
  line-height: var(--ig-overline-line-height);
  letter-spacing: var(--ig-overline-letter-spacing);
  text-transform: var(--ig-overline-text-transform);
  margin-top: var(--ig-overline-margin-top);
  margin-bottom: var(--ig-overline-margin-bottom);
  white-space: nowrap;
  -o-text-overflow: ellipsis;
     text-overflow: ellipsis;
  overflow: hidden;
  display: block;
  white-space: nowrap;
  position: relative;
  color: var(--header-color, hsla(var(--ig-secondary-500), var(--ig-secondary-a)));
  pointer-events: none;
  padding-inline: max(var(--is-large, 1) * max(16px, -1 * 16px) * var(--ig-spacing-inline-large, var(--ig-spacing-inline, --ig-spacing)), var(--is-medium, 1) * max(8px, -1 * 8px) * var(--ig-spacing-inline-medium, var(--ig-spacing-inline, --ig-spacing)), var(--is-small, 1) * max(4px, -1 * 4px) * var(--ig-spacing-inline-small, var(--ig-spacing-inline, --ig-spacing)));
  padding-block: max(var(--is-large, 1) * max(8px, -1 * 8px) * var(--ig-spacing-block-large, var(--ig-spacing-block, --ig-spacing)), var(--is-medium, 1) * max(4px, -1 * 4px) * var(--ig-spacing-block-medium, var(--ig-spacing-block, --ig-spacing)), var(--is-small, 1) * max(2px, -1 * 2px) * var(--ig-spacing-block-small, var(--ig-spacing-block, --ig-spacing)));
}

::slotted(*) {
  font: inherit;
}`;let Di=class extends i.oi{render(){return i.dy`<slot></slot>`}};Di.tagName="igc-dropdown-header",Di.styles=Ci,Di=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n}([b({bootstrap:ua,fluent:xa})],Di);const Si=Di,Ii=i.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  font-family: var(--ig-body-2-font-family, var(--ig-font-family));
  font-size: var(--ig-body-2-font-size);
  font-weight: var(--ig-body-2-font-weight);
  font-style: var(--ig-body-2-font-style);
  line-height: var(--ig-body-2-line-height);
  letter-spacing: var(--ig-body-2-letter-spacing);
  text-transform: var(--ig-body-2-text-transform);
  margin-top: var(--ig-body-2-margin-top);
  margin-bottom: var(--ig-body-2-margin-bottom);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  width: 100%;
  white-space: nowrap;
  position: relative;
  cursor: pointer;
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
  outline-style: none;
  padding-inline: max(var(--is-large, 1) * max(24px, -1 * 24px) * var(--ig-spacing-inline-large, var(--ig-spacing-inline, --ig-spacing)), var(--is-medium, 1) * max(12px, -1 * 12px) * var(--ig-spacing-inline-medium, var(--ig-spacing-inline, --ig-spacing)), var(--is-small, 1) * max(6px, -1 * 6px) * var(--ig-spacing-inline-small, var(--ig-spacing-inline, --ig-spacing)));
  padding-block: max(var(--is-large, 1) * max(8px, -1 * 8px) * var(--ig-spacing-block-large, var(--ig-spacing-block, --ig-spacing)), var(--is-medium, 1) * max(4px, -1 * 4px) * var(--ig-spacing-block-medium, var(--ig-spacing-block, --ig-spacing)), var(--is-small, 1) * max(2px, -1 * 2px) * var(--ig-spacing-block-small, var(--ig-spacing-block, --ig-spacing)));
}

:host(:hover),
:host([active]) {
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
}

:host([selected]) {
  background: hsla(var(--ig-secondary-100), var(--ig-secondary-a));
  color: var(--ig-secondary-100-contrast);
}

:host([selected]:hover),
:host([selected][active]) {
  background: hsla(var(--ig-secondary-200), var(--ig-secondary-a));
  color: var(--ig-secondary-200-contrast);
}

:host([disabled]) {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
  cursor: default;
  pointer-events: none;
}

::slotted(*) {
  font: inherit;
}

[part=content] {
  white-space: nowrap;
  -o-text-overflow: ellipsis;
     text-overflow: ellipsis;
  overflow: hidden;
  display: block;
  width: 100%;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

[part=prefix],
[part=suffix] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

[name=prefix]::slotted(*) {
  -webkit-margin-end: max(var(--is-large, 1) * max(16px, -1 * 16px) * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * max(16px, -1 * 16px) * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * max(16px, -1 * 16px) * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
          margin-inline-end: max(var(--is-large, 1) * max(16px, -1 * 16px) * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * max(16px, -1 * 16px) * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * max(16px, -1 * 16px) * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
}

[name=suffix]::slotted(*) {
  -webkit-margin-start: max(var(--is-large, 1) * max(16px, -1 * 16px) * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * max(16px, -1 * 16px) * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * max(16px, -1 * 16px) * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
          margin-inline-start: max(var(--is-large, 1) * max(16px, -1 * 16px) * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * max(16px, -1 * 16px) * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * max(16px, -1 * 16px) * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
}`;var $i=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n};let Pi=class extends i.oi{constructor(){super(...arguments),this.selected=!1,this.active=!1,this.disabled=!1}get value(){var e;return this._value?this._value:null!==(e=this.textContent)&&void 0!==e?e:""}set value(e){const t=this._value;this._value=e,this.requestUpdate("value",t)}selectedChange(){this.selected?this.setAttribute("aria-selected","true"):this.removeAttribute("aria-selected"),this.active=this.selected}disabledChange(){this.disabled?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option")}render(){return i.dy`
      <section part="prefix"><slot name="prefix"></slot></section>
      <section part="content"><slot></slot></section>
      <section part="suffix"><slot name="suffix"></slot></section>
    `}};Pi.tagName="igc-dropdown-item",Pi.styles=Ii,$i([(0,r.Cb)()],Pi.prototype,"value",null),$i([(0,r.Cb)({type:Boolean,reflect:!0})],Pi.prototype,"selected",void 0),$i([(0,r.Cb)({type:Boolean,reflect:!0})],Pi.prototype,"active",void 0),$i([(0,r.Cb)({type:Boolean,reflect:!0})],Pi.prototype,"disabled",void 0),$i([m("selected")],Pi.prototype,"selectedChange",null),$i([m("disabled")],Pi.prototype,"disabledChange",null),Pi=$i([b({bootstrap:ha,fluent:ca,indigo:ba})],Pi);const Ti=Pi;var Ei=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n};k(zi,Si,Ti);let Mi=class extends(p(z(i.oi))){get allItems(){return[...this.items,...this.groups.flatMap((e=>e.items))]}toggleDirectiveChange(){var e;this.target&&(this.toggleController.target=this.target,this.open?(document.addEventListener("keydown",this.handleKeyDown),this.target.addEventListener("focusout",this.handleFocusout),this.selectedItem=null!==(e=this.allItems.find((e=>e.selected)))&&void 0!==e?e:null):(document.removeEventListener("keydown",this.handleKeyDown),this.target.removeEventListener("focusout",this.handleFocusout)),this.target.setAttribute("aria-expanded",this.open?"true":"false"))}updateOptions(){this.toggleController&&this.toggleController.update()}sizeChange(){this.groups.forEach((e=>e.requestUpdate()))}constructor(){super(),this.keyDownHandlers=new Map(Object.entries({Escape:this.onEscapeKey,Enter:this.onEnterKey,ArrowUp:this.onArrowUpKeyDown,ArrowDown:this.onArrowDownKeyDown,ArrowLeft:this.onArrowUpKeyDown,ArrowRight:this.onArrowDownKeyDown,Home:this.onHomeKey,End:this.onEndKey})),this.keepOpenOnSelect=!1,this.open=!1,this.placement="bottom-start",this.positionStrategy="absolute",this.scrollStrategy="scroll",this.flip=!1,this.distance=0,this.keepOpenOnOutsideClick=!1,this.sameWidth=!1,this.handleKeyDown=e=>{var t;const a=e.composedPath();(a.includes(this.target)||a.includes(this.content))&&this.keyDownHandlers.has(e.key)&&(e.preventDefault(),e.stopPropagation(),null===(t=this.keyDownHandlers.get(e.key))||void 0===t||t.call(this))},this.handleTargetClick=async()=>{if(this.open)this._hide();else{if(!this.handleOpening())return;this.show(),await this.updateComplete,this.emitEvent("igcOpened")}},this.toggleController=new Ba(this,{target:this.target,closeCallback:()=>this._hide()})}async firstUpdated(){this.targetNodes.length&&(this.target=this.targetNodes[0],this.target.setAttribute("aria-haspopup","listbox")),await this.updateComplete,this.setInitialSelection()}async getUpdateComplete(){const e=await super.getUpdateComplete();return await this.toggleController.rendered,e}setInitialSelection(){const e=this.allItems.filter((e=>e.selected)).at(-1);this.allItems.forEach((e=>e.selected=!1)),e&&this.selectItem(e,!1)}onHomeKey(){this.navigateTo(this.allItems.filter((e=>!e.disabled)).at(0).value)}onEndKey(){this.navigateTo(this.allItems.filter((e=>!e.disabled)).at(-1).value)}onEscapeKey(){this._hide()}onEnterKey(){this.selectItem(this.activeItem)}handleClick(e){const t=e.composedPath().find((e=>e instanceof Ti));t&&!t.disabled&&this.selectItem(t)}handleOpening(){return this.emitEvent("igcOpening",{cancelable:!0})}handleClosing(){return this.emitEvent("igcClosing",{cancelable:!0})}handleChange(e){const t={detail:e};this.emitEvent("igcChange",t)}handleSlotChange(){this.target&&this.target.setAttribute("aria-expanded",this.open?"true":"false")}handleFocusout(e){e.preventDefault(),e.target.focus()}getItem(e){let t,a=-1;return this.allItems.find(((i,r)=>{i.value===e&&(t=i,a=r)})),{item:t,index:a}}activateItem(e){e&&(this.activeItem&&(this.activeItem.active=!1),this.activeItem=e,this.activeItem.active=!0)}selectItem(e,t=!0){return e?(this.selectedItem&&(this.selectedItem.selected=!1),this.activateItem(e),this.selectedItem=e,this.selectedItem.selected=!0,t&&this.handleChange(this.selectedItem),t&&!this.keepOpenOnSelect&&this._hide(),this.selectedItem):null}navigate(e,t){var a;let i=-1;this.activeItem&&(i=t||(null!==(a=[...this.allItems].indexOf(this.activeItem))&&void 0!==a?a:i));const r=this.getNearestSiblingFocusableItemIndex(i,e);this.navigateItem(r)}navigateItem(e){if(!this.allItems)return null;if(e<0||e>=this.allItems.length)return null;const t=this.allItems[e];return this.activateItem(t),this.scrollToHiddenItem(t),t}scrollToHiddenItem(e){const t=e.getBoundingClientRect(),a=this.content.getBoundingClientRect();a.top>t.top&&(this.content.scrollTop-=a.top-t.top),a.bottom<t.bottom&&(this.content.scrollTop+=t.bottom-a.bottom)}getNearestSiblingFocusableItemIndex(e,t){let a=e;const i=this.allItems;if(!i)return-1;for(;i[a+t]&&i[a+t].disabled;)a+=t;return a+=t,a>-1&&a<i.length?a:-1}navigateNext(){this.navigate(1)}navigatePrev(){this.navigate(-1)}onArrowDownKeyDown(){this.navigateNext()}onArrowUpKeyDown(){this.navigatePrev()}async _hide(e=!0){this.open&&(e&&!this.handleClosing()||(this.open=!1,e&&(await this.updateComplete,this.emitEvent("igcClosed"))))}show(e){this.open&&!e||(e&&(this.target=e),this.open=!0)}hide(){this._hide(!1)}toggle(e){this.open?this.hide():this.show(e)}navigateTo(e){const t="string"==typeof e?this.getItem(e).index:e;return this.navigateItem(t)}select(e){const t="string"==typeof e?this.getItem(e).item:this.allItems[e];return this.selectItem(t,!1)}clearSelection(){this.selectedItem&&(this.selectedItem.selected=!1),this.selectedItem=null}render(){return i.dy`
      <slot
        id="igcDDLTarget"
        name="target"
        @click=${this.handleTargetClick}
        @slotchange=${this.handleSlotChange}
      >
      </slot>
      <div
        part="base"
        style=${(0,ye.V)({position:this.positionStrategy})}
        @click=${this.handleClick}
        ${this.toggleController.toggleDirective}
      >
        <div role="listbox" part="list" aria-labelledby="igcDDLTarget">
          <slot></slot>
        </div>
      </div>
    `}};Mi.tagName="igc-dropdown",Mi.styles=pi,Ei([(0,r.SB)()],Mi.prototype,"activeItem",void 0),Ei([(0,r.NH)({slot:"target"})],Mi.prototype,"targetNodes",void 0),Ei([(0,r.IO)('[part="base"]')],Mi.prototype,"content",void 0),Ei([(0,r.IO)('[part="list"]')],Mi.prototype,"scrollContainer",void 0),Ei([(0,r.NH)({flatten:!0,selector:"igc-dropdown-item"})],Mi.prototype,"items",void 0),Ei([(0,r.NH)({flatten:!0,selector:"igc-dropdown-group"})],Mi.prototype,"groups",void 0),Ei([(0,r.Cb)({type:Boolean,attribute:"keep-open-on-select"})],Mi.prototype,"keepOpenOnSelect",void 0),Ei([(0,r.Cb)({type:Boolean})],Mi.prototype,"open",void 0),Ei([(0,r.Cb)()],Mi.prototype,"placement",void 0),Ei([(0,r.Cb)({attribute:"position-strategy"})],Mi.prototype,"positionStrategy",void 0),Ei([(0,r.Cb)({attribute:"scroll-strategy"})],Mi.prototype,"scrollStrategy",void 0),Ei([(0,r.Cb)({type:Boolean})],Mi.prototype,"flip",void 0),Ei([(0,r.Cb)({type:Number})],Mi.prototype,"distance",void 0),Ei([(0,r.Cb)({type:Boolean,attribute:"keep-open-on-outside-click"})],Mi.prototype,"keepOpenOnOutsideClick",void 0),Ei([(0,r.Cb)({type:Boolean,attribute:"same-width"})],Mi.prototype,"sameWidth",void 0),Ei([m("open")],Mi.prototype,"toggleDirectiveChange",null),Ei([m("placement"),m("flip"),m("positionStrategy"),m("closeOnOutsideClick"),m("distance"),m("sameWidth")],Mi.prototype,"updateOptions",null),Ei([m("size")],Mi.prototype,"sizeChange",null),Ei([(e,t)=>{}],Mi.prototype,"show",null),Ei([(e,t)=>{}],Mi.prototype,"toggle",null),Ei([(e,t)=>{}],Mi.prototype,"navigateTo",null),Ei([(e,t)=>{}],Mi.prototype,"select",null),Mi=Ei([b({bootstrap:vi,fluent:yi,indigo:ui}),e=>e],Mi);const Oi=Mi;var Ai=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n};class Vi extends zi{constructor(){super(),this.disabled=!1,this.observer=new MutationObserver(this.updateControlledItems.bind(this))}disconnectedCallback(){this.observer.disconnect(),super.disconnectedCallback()}getParent(){return this.closest("igc-select")}async firstUpdated(){await this.updateComplete,this.controlledItems=this.activeItems,this.setAttribute("role","presentation"),this.items.forEach((e=>{this.observer.observe(e,{attributes:!0,attributeFilter:["disabled"]})})),this.updateDisabled()}updateControlledItems(e){e.forEach((e=>{const t=e.target;this.disabled||(this.controlledItems=this.activeItems),this.disabled&&!t.disabled&&(t.disabled=!0)}))}updateDisabled(){var e;this.disabled?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled"),null===(e=this.controlledItems)||void 0===e||e.forEach((e=>e.disabled=this.disabled))}}Vi.tagName="igc-select-group",Ai([(0,r.NH)({flatten:!0,selector:"igc-select-item"})],Vi.prototype,"items",void 0),Ai([(0,r.NH)({flatten:!0,selector:"igc-select-item:not([disabled])"})],Vi.prototype,"activeItems",void 0),Ai([(0,r.Cb)({reflect:!0,type:Boolean})],Vi.prototype,"disabled",void 0),Ai([m("disabled",{waitUntilFirstUpdate:!0})],Vi.prototype,"updateDisabled",null);class Li extends Si{}Li.tagName="igc-select-header";var Ri=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n};class Fi extends Ti{constructor(){super()}activeChange(){this.tabIndex=this.active?0:-1,this.active&&this.focus()}get textContent(){return this.content.map((e=>{var t;return null===(t=e.textContent)||void 0===t?void 0:t.trim()})).filter((e=>""!==e)).join(" ")}set textContent(e){const t=new Text(e);this.content.forEach((e=>e.remove())),this.appendChild(t)}}Fi.tagName="igc-select-item",Ri([(0,r.vZ)({flatten:!0})],Fi.prototype,"content",void 0),Ri([m("active")],Fi.prototype,"activeChange",null);const _i=i.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-family: var(--ig-font-family);
}

[part=base] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.25rem), 0.25rem);
  overflow-y: auto;
  overflow-x: hidden;
  background: hsla(var(--ig-surface-500), var(--ig-surface-a));
  -webkit-box-shadow: var(--ig-elevation-8);
          box-shadow: var(--ig-elevation-8);
  min-width: 7rem;
  padding: 0.5rem 0;
  z-index: 10005;
}

:host([size=small]) {
  --component-size: var(--ig-size, var(--ig-size-small));
}

:host([size=medium]) {
  --component-size: var(--ig-size, var(--ig-size-medium));
}

:host([size=large]) {
  --component-size: var(--ig-size, var(--ig-size-large));
}

:host {
  display: block;
}

[role=combobox] {
  outline-style: none;
}

:host([invalid]) ::slotted([slot=helper-text]) {
  color: hsla(var(--ig-error-500), var(--ig-error-a));
}

:host([disabled]) [role=combobox] {
  pointer-events: none;
}

igc-input {
  cursor: pointer;
}

igc-input::part(input) {
  cursor: pointer;
}
igc-input::part(input)::-moz-selection {
  background: transparent;
}
igc-input::part(input)::selection {
  background: transparent;
}

[part=helper-text] {
  line-height: 1;
}
[part=helper-text] ::slotted([slot=helper-text]) {
  font-family: var(--ig-caption-font-family, var(--ig-font-family));
  font-size: var(--ig-caption-font-size);
  font-weight: var(--ig-caption-font-weight);
  font-style: var(--ig-caption-font-style);
  line-height: var(--ig-caption-line-height);
  letter-spacing: var(--ig-caption-letter-spacing);
  text-transform: var(--ig-caption-text-transform);
  margin-top: var(--ig-caption-margin-top);
  margin-bottom: var(--ig-caption-margin-bottom);
  line-height: inherit;
}

[name=prefix]::slotted(*),
[name=suffix]::slotted(*) {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}`,ji=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host [part=helper-text] {
  margin-top: 0.25rem;
}
:host ::slotted([slot=helper-text]) {
  font-family: var(--ig-body-2-font-family, var(--ig-font-family));
  font-size: var(--ig-body-2-font-size);
  font-weight: var(--ig-body-2-font-weight);
  font-style: var(--ig-body-2-font-style);
  line-height: var(--ig-body-2-line-height);
  letter-spacing: var(--ig-body-2-letter-spacing);
  text-transform: var(--ig-body-2-text-transform);
  margin-top: var(--ig-body-2-margin-top);
  margin-bottom: var(--ig-body-2-margin-bottom);
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}

:host(:focus-within) igc-input[readonly]:not([disabled])::part(input) {
  -webkit-box-shadow: 0 0 0 0.25rem hsla(var(--ig-primary-500), 0.38);
          box-shadow: 0 0 0 0.25rem hsla(var(--ig-primary-500), 0.38);
  border-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
}

:host([invalid]) igc-input[readonly]:not([disabled])::part(input),
:host([invalid]:focus-within) igc-input[readonly]:not([disabled])::part(input) {
  -webkit-box-shadow: 0 0 0 0.25rem hsla(var(--ig-error-500), 0.38);
          box-shadow: 0 0 0 0.25rem hsla(var(--ig-error-500), 0.38);
  border-color: hsla(var(--ig-error-500), var(--ig-error-a));
}

:host([disabled]) ::slotted([slot=helper-text]) {
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}

igc-input[readonly]:not([disabled])::part(prefix),
igc-input[readonly]:not([disabled])::part(suffix) {
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
  background: hsla(var(--ig-gray-300), var(--ig-gray-a));
}

igc-input[readonly]:not([disabled])::part(prefix),
igc-input[readonly]:not([disabled])::part(suffix),
igc-input[readonly]:not([disabled])::part(container) {
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
}

igc-input[readonly]:not([disabled])::part(container) {
  background: var(--input-background, #fff);
}

igc-input[readonly]:not([disabled])::part(prefix),
igc-input[readonly]:not([disabled])::part(suffix),
igc-input[readonly]:not([disabled])::part(input) {
  border-color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}

igc-input[disabled] {
  pointer-events: none;
}

igc-input[disabled]::part(prefix),
igc-input[disabled]::part(suffix),
igc-input[disabled]::part(container) {
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}

igc-input[disabled]::part(prefix),
igc-input[disabled]::part(suffix),
igc-input[disabled]::part(input) {
  border-color: hsla(var(--ig-gray-300), var(--ig-gray-a));
}`,Bi=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
[part=helper-text] {
  margin-top: 0.3125rem;
}
[part=helper-text] ::slotted([slot=helper-text]) {
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}

:host {
  --size: max(var(--is-large, 1) * max(3rem, -1 * 3rem), var(--is-medium, 1) * max(2.5rem, -1 * 2.5rem), var(--is-small, 1) * max(2rem, -1 * 2rem));
}

:host(:focus-within) igc-input[readonly]:not([disabled])::part(container) {
  border-width: 0.125rem;
}

:host(:not([invalid]):focus-within) igc-input[readonly]:not([disabled])::part(container) {
  border-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
  border-width: 0.125rem;
}
:host(:not([invalid]):focus-within) igc-input[readonly]:not([disabled])::part(prefix) {
  -webkit-margin-start: -0.0625rem;
          margin-inline-start: -0.0625rem;
}
:host(:not([invalid]):focus-within) igc-input[readonly]:not([disabled])::part(suffix) {
  -webkit-margin-end: -0.0625rem;
          margin-inline-end: -0.0625rem;
}
:host(:not([invalid]):focus-within) igc-input[readonly]:not([disabled])::part(input) {
  height: calc(var(--size) - 0.25rem);
}

:host([disabled]) [part=helper-text] ::slotted([slot=helper-text]) {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}`,Xi=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
[part~=toggle-icon] {
  background: hsla(var(--ig-gray-300), var(--ig-gray-a));
}

[part=helper-text] {
  margin-top: 0.375rem;
  padding-inline: max(var(--is-large, 1) * max(1rem, -1 * 1rem) * var(--ig-spacing-inline-large, var(--ig-spacing-inline, --ig-spacing)), var(--is-medium, 1) * max(0.75rem, -1 * 0.75rem) * var(--ig-spacing-inline-medium, var(--ig-spacing-inline, --ig-spacing)), var(--is-small, 1) * max(0.5rem, -1 * 0.5rem) * var(--ig-spacing-inline-small, var(--ig-spacing-inline, --ig-spacing)));
  color: hsla(var(--ig-gray-600), var(--ig-gray-a));
}

:host ::slotted([slot=helper-text]) {
  color: hsla(var(--ig-gray-600), var(--ig-gray-a));
}

:host([disabled]) [part=helper-text] ::slotted([slot=helper-text]) {
  color: hsla(var(--ig-gray-300), var(--ig-gray-a));
}
:host([disabled]) [part=toggle-icon] {
  background: transparent;
}

:host(:focus-within) igc-input[readonly]:not([disabled])::part(container)::after {
  -webkit-transform: scaleY(1);
      -ms-transform: scaleY(1);
          transform: scaleY(1);
}

:host(:not([invalid]):focus-within) igc-input[readonly]:not([disabled])::part(container) {
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
}
:host(:not([invalid]):focus-within) igc-input[readonly]:not([disabled])::part(label) {
  color: var(--label-focus-color, hsla(var(--ig-primary-500), var(--ig-primary-a)));
}`,Ni=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host([outlined]:focus-within) igc-input[readonly]:not([disabled])::part(start) {
  border-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
  border-inline-start-width: 0.125rem;
  border-block-start-width: 0.125rem;
  border-block-end-width: 0.125rem;
}
:host([outlined]:focus-within) igc-input[readonly]:not([disabled])::part(notch) {
  border-width: 0.125rem;
  border-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
  border-top: 0.0625rem solid transparent;
}
:host([outlined]:focus-within) igc-input[readonly]:not([disabled])::part(filler) {
  border-width: 0.125rem;
  border-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
}
:host([outlined]:focus-within) igc-input[readonly]:not([disabled])::part(end) {
  border-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
  border-inline-end-width: 0.125rem;
  border-block-start-width: 0.125rem;
  border-block-end-width: 0.125rem;
}
:host([outlined]:focus-within) igc-input[readonly]:not([disabled])::part(label) {
  color: hsla(var(--ig-primary-500), var(--ig-primary-a));
}

:host([outlined][invalid]:focus-within) igc-input[readonly]:not([disabled])::part(start) {
  border-color: hsla(var(--ig-error-500), var(--ig-error-a));
  border-inline-start-width: 0.125rem;
  border-block-start-width: 0.125rem;
  border-block-end-width: 0.125rem;
}
:host([outlined][invalid]:focus-within) igc-input[readonly]:not([disabled])::part(notch) {
  border-width: 0.125rem;
  border-color: hsla(var(--ig-error-500), var(--ig-error-a));
  border-top: 0.0625rem solid transparent;
}
:host([outlined][invalid]:focus-within) igc-input[readonly]:not([disabled])::part(filler) {
  border-width: 0.125rem;
  border-color: hsla(var(--ig-error-500), var(--ig-error-a));
}
:host([outlined][invalid]:focus-within) igc-input[readonly]:not([disabled])::part(end) {
  border-color: hsla(var(--ig-error-500), var(--ig-error-a));
  border-inline-end-width: 0.125rem;
  border-block-start-width: 0.125rem;
  border-block-end-width: 0.125rem;
}
:host([outlined][invalid]:focus-within) igc-input[readonly]:not([disabled])::part(label) {
  color: hsla(var(--ig-error-500), var(--ig-error-a));
}

[part~=toggle-icon] {
  background: hsla(var(--ig-gray-300), var(--ig-gray-a));
}

[part=helper-text] {
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
  margin-top: 0.3125rem;
  padding-inline: max(var(--is-large, 1) * max(1.125rem, -1 * 1.125rem) * var(--ig-spacing-inline-large, var(--ig-spacing-inline, --ig-spacing)), var(--is-medium, 1) * max(1rem, -1 * 1rem) * var(--ig-spacing-inline-medium, var(--ig-spacing-inline, --ig-spacing)), var(--is-small, 1) * max(0.875rem, -1 * 0.875rem) * var(--ig-spacing-inline-small, var(--ig-spacing-inline, --ig-spacing)));
}

:host([disabled]) [part~=toggle-icon],
:host([disabled]) ::slotted([slot=helper-text]) {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}
:host([disabled]) [part~=toggle-icon] {
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
}

igc-input:not([outlined]):focus-within [part~=toggle-icon] {
  background: hsla(var(--ig-gray-400), 0.3);
}`;var Ui=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n};k(U,Ea,Vi,Li,Fi);let Ki=class extends(z(Oi)){constructor(){super(),this.searchTerm="",this.lastKeyTime=Date.now(),this.targetKeyHandlers=new Map(Object.entries({" ":this.onTargetEnterKey,Tab:this.onTargetTabKey,Escape:this.onEscapeKey,Enter:this.onTargetEnterKey,ArrowLeft:this.onTargetArrowLeftKeyDown,ArrowRight:this.onTargetArrowRightKeyDown,ArrowUp:this.onTargetArrowUpKeyDown,ArrowDown:this.onTargetArrowDownKeyDown,Home:this.onTargetHomeKey,End:this.onTargetEndKey})),this.disabled=!1,this.required=!1,this.invalid=!1,this.outlined=!1,this.sameWidth=!0,this.dir="auto",this.size="medium",this.addEventListener("igcChange",(()=>{this.open&&this.target.focus()}))}themeAdopted(e){this.themeController=e}willUpdate(e){super.willUpdate(e),this.theme=this.themeController.theme}handleFocusout(){}focus(e){this.target.focus(e)}blur(){this.target.blur()}reportValidity(){const e=this.checkValidity();return e||this.target.focus(),e}checkValidity(){return this.invalid=this.required&&!this.value,!this.invalid}async firstUpdated(){super.firstUpdated(),await this.updateComplete,!this.selectedItem&&this.value&&this.updateSelected(),this.autofocus&&this.target.focus()}updateValue(){var e;this.value=null===(e=this.selectedItem)||void 0===e?void 0:e.value}updateSelected(){var e;if(0!==this.allItems.length&&(null===(e=this.selectedItem)||void 0===e?void 0:e.value)!==this.value){const e=this.allItems.filter((e=>e.value===this.value)),t=this.allItems.indexOf(e.at(-1));if(-1===t)return this.value=void 0,void this.clearSelection();this.select(t)}}validate(){this.updateComplete.then((()=>this.reportValidity()))}selectNext(){var e;const t=[...this.allItems].indexOf(null!==(e=this.selectedItem)&&void 0!==e?e:this.activeItem),a=this.getNearestSiblingFocusableItemIndex(null!=t?t:-1,1);this.selectItem(this.allItems[a],!0)}selectPrev(){var e;const t=[...this.allItems].indexOf(null!==(e=this.selectedItem)&&void 0!==e?e:this.activeItem),a=this.getNearestSiblingFocusableItemIndex(null!=t?t:-1,-1);this.selectItem(this.allItems[a],!0)}selectInteractiveItem(e){const t=this.allItems.filter((e=>!e.disabled)).at(e);t.value!==this.value&&this.selectItem(t,!0)}searchItem(e){if(!/^.$/u.test(e.key))return;const t=Date.now();t-this.lastKeyTime>500&&(this.searchTerm=""),this.searchTerm+=e.key,this.lastKeyTime=t;const a=this.allItems.filter((e=>!e.disabled)).find((e=>{var t;return null===(t=e.textContent)||void 0===t?void 0:t.trim().toLowerCase().startsWith(this.searchTerm.toLowerCase())}));a&&this.value!==a.value&&(this.open?this.activateItem(a):this.selectItem(a))}handleFocus(){this.open||this.emitEvent("igcFocus")}handleBlur(){this.open||this.emitEvent("igcBlur")}onTargetTabKey(){this.target.blur(),this.open&&this.hide()}onTargetEnterKey(){this.open?this.onEnterKey():this.target.click()}onTargetArrowLeftKeyDown(){this.open?this.onArrowUpKeyDown():this.selectPrev()}onTargetArrowRightKeyDown(){this.open?this.onArrowDownKeyDown():this.selectNext()}onTargetArrowUpKeyDown(e){e.altKey?this.toggle():this.open?this.onArrowUpKeyDown():this.selectPrev()}onTargetArrowDownKeyDown(e){e.altKey?this.toggle():this.open?this.onArrowDownKeyDown():this.selectNext()}onTargetHomeKey(){this.open?this.onHomeKey():this.selectInteractiveItem(0)}onTargetEndKey(){this.open?this.onEndKey():this.selectInteractiveItem(-1)}handleTargetKeyDown(e){var t;e.stopPropagation(),this.targetKeyHandlers.has(e.key)?(e.preventDefault(),null===(t=this.targetKeyHandlers.get(e.key))||void 0===t||t.call(this,e)):this.searchItem(e)}get hasPrefixes(){return this.inputPrefix.length>0}get hasSuffixes(){return this.inputSuffix.length>0}render(){var e,t;const a="material"===this.theme?"keyboard_arrow_up":"arrow_drop_up",r="material"===this.theme?"keyboard_arrow_down":"arrow_drop_down";return i.dy`
      <div
        role="combobox"
        tabindex=${this.disabled?-1:0}
        aria-owns="dropdown"
        aria-describedby="helper-text"
        aria-disabled=${this.disabled}
        @focusin=${this.handleFocus}
        @focusout=${this.handleBlur}
        @keydown=${this.handleTargetKeyDown}
        @click=${this.handleTargetClick}
      >
        <igc-input
          id="input"
          readonly
          exportparts="container: input, input: native-input, label, prefix, suffix"
          value=${(0,n.o)(null===(t=null===(e=this.selectedItem)||void 0===e?void 0:e.textContent)||void 0===t?void 0:t.trim())}
          placeholder=${(0,n.o)(this.placeholder)}
          label=${(0,n.o)(this.label)}
          size=${this.size}
          dir=${this.dir}
          tabindex="-1"
          .disabled="${this.disabled}"
          .required=${this.required}
          .invalid=${this.invalid}
          .outlined=${this.outlined}
          @igcBlur=${e=>e.stopPropagation()}
          @igcFocus=${e=>e.stopPropagation()}
        >
          <span slot=${this.hasPrefixes?"prefix":""}>
            <slot name="prefix"></slot>
          </span>
          <span slot=${this.hasSuffixes?"suffix":""}>
            <slot name="suffix"></slot>
          </span>
          <span slot="suffix" part="toggle-icon" style="display: flex">
            <slot name="toggle-icon">
              <igc-icon
                size=${this.size}
                name=${this.open?a:r}
                collection="internal"
                aria-hidden="true"
              ></igc-icon>
            </slot>
          </span>
        </igc-input>
      </div>
      <div
        id="helper-text"
        part="helper-text"
        ?hidden="${0===this.helperText.length}"
      >
        <slot name="helper-text"></slot>
      </div>
      <div
        part="base"
        style=${(0,ye.V)({position:this.positionStrategy})}
        @click=${this.handleClick}
        ${this.toggleController.toggleDirective}
      >
        <div id="dropdown" role="listbox" part="list" aria-labelledby="input">
          <slot name="header"></slot>
          <slot></slot>
          <slot name="footer"></slot>
        </div>
      </div>
    `}};Ki.tagName="igc-select",Ki.styles=_i,Ui([(0,r.NH)({flatten:!0,selector:"igc-select-item"})],Ki.prototype,"items",void 0),Ui([(0,r.NH)({flatten:!0,selector:"igc-select-group"})],Ki.prototype,"groups",void 0),Ui([(0,r.NH)({slot:"helper-text"})],Ki.prototype,"helperText",void 0),Ui([(0,r.NH)({slot:"suffix"})],Ki.prototype,"inputSuffix",void 0),Ui([(0,r.NH)({slot:"prefix"})],Ki.prototype,"inputPrefix",void 0),Ui([(0,r.SB)()],Ki.prototype,"selectedItem",void 0),Ui([(0,r.IO)('div[role="combobox"]')],Ki.prototype,"target",void 0),Ui([(0,r.Cb)({reflect:!1,type:String})],Ki.prototype,"value",void 0),Ui([(0,r.Cb)()],Ki.prototype,"name",void 0),Ui([(0,r.Cb)({reflect:!0,type:Boolean})],Ki.prototype,"disabled",void 0),Ui([(0,r.Cb)({reflect:!0,type:Boolean})],Ki.prototype,"required",void 0),Ui([(0,r.Cb)({reflect:!0,type:Boolean})],Ki.prototype,"invalid",void 0),Ui([(0,r.Cb)({reflect:!0,type:Boolean})],Ki.prototype,"outlined",void 0),Ui([(0,r.Cb)({type:Boolean})],Ki.prototype,"autofocus",void 0),Ui([(0,r.Cb)()],Ki.prototype,"label",void 0),Ui([(0,r.Cb)()],Ki.prototype,"placeholder",void 0),Ui([(0,r.Cb)({type:Boolean,attribute:"same-width"})],Ki.prototype,"sameWidth",void 0),Ui([(0,r.Cb)({reflect:!0})],Ki.prototype,"dir",void 0),Ui([(e,t)=>{}],Ki.prototype,"focus",null),Ui([(e,t)=>{}],Ki.prototype,"blur",null),Ui([m("selectedItem")],Ki.prototype,"updateValue",null),Ui([m("value")],Ki.prototype,"updateSelected",null),Ui([m("value")],Ki.prototype,"validate",null),Ki=Ui([b({bootstrap:ji,material:Ni,fluent:Bi,indigo:Xi}),e=>e],Ki);const Hi=Ki,Yi=i.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  --icon-size: 1.125rem;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  vertical-align: middle;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
}

::slotted(:not(igc-ripple)) {
  --icon-size: 1.125rem;
  font-size: var(--icon-size) !important;
  vertical-align: middle;
  pointer-events: none;
}

[part=icon] {
  --size: 1.125rem;
}

[part=base] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 50%), 50%);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  border: none;
  outline-style: none;
  background: transparent;
  padding: max(var(--is-large, 1) * max(6px, -1 * 6px) * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * max(5px, -1 * 5px) * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * max(4px, -1 * 4px) * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  -webkit-transition: background 0.15s ease-out, -webkit-box-shadow 0.2s ease-in;
  transition: background 0.15s ease-out, -webkit-box-shadow 0.2s ease-in;
  -o-transition: box-shadow 0.2s ease-in, background 0.15s ease-out;
  transition: box-shadow 0.2s ease-in, background 0.15s ease-out;
  transition: box-shadow 0.2s ease-in, background 0.15s ease-out, -webkit-box-shadow 0.2s ease-in;
  -webkit-transition-delay: 0.05s;
       -o-transition-delay: 0.05s;
          transition-delay: 0.05s;
  font-size: var(--icon-size);
  line-height: 1;
}

:host([size=small]) {
  --component-size: var(--ig-size, var(--ig-size-small));
}

:host([size=medium]) {
  --component-size: var(--ig-size, var(--ig-size-medium));
}

:host([size=large]) {
  --component-size: var(--ig-size, var(--ig-size-large));
}

:host([disabled]) {
  pointer-events: none;
}`,qi=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  --size: max(var(--is-large, 1) * max(3rem, -1 * 3rem), var(--is-medium, 1) * max(2.375rem, -1 * 2.375rem), var(--is-small, 1) * max(1.9375rem, -1 * 1.9375rem));
}

[part=base] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.25rem), 0.25rem);
  width: var(--size);
  height: var(--size);
  -webkit-transition: color 0.15s ease-out, background 0.15s ease-out, -webkit-box-shadow 0.15s ease-out;
  transition: color 0.15s ease-out, background 0.15s ease-out, -webkit-box-shadow 0.15s ease-out;
  -o-transition: box-shadow 0.15s ease-out, color 0.15s ease-out, background 0.15s ease-out;
  transition: box-shadow 0.15s ease-out, color 0.15s ease-out, background 0.15s ease-out;
  transition: box-shadow 0.15s ease-out, color 0.15s ease-out, background 0.15s ease-out, -webkit-box-shadow 0.15s ease-out;
  color: hsla(var(--ig-primary-500), var(--ig-primary-a));
  padding: max(var(--is-large, 1) * max(12px, -1 * 12px) * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * max(9px, -1 * 9px) * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * max(7.5px, -1 * 7.5px) * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
}
[part=base]:hover {
  color: hsla(var(--ig-primary-800), var(--ig-primary-a));
}
[part=base]:focus, [part=base]:active {
  color: hsla(var(--ig-primary-600), var(--ig-primary-a));
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
  -webkit-box-shadow: none;
          box-shadow: none;
}

:host([variant=contained]) [part=base] {
  color: var(--ig-primary-600-contrast);
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
}
:host([variant=contained]) [part=base]:hover {
  background: hsla(var(--ig-primary-600), var(--ig-primary-a));
}
:host([variant=contained]) [part=base]:focus, :host([variant=contained]) [part=base]:active {
  background: hsla(var(--ig-primary-600), var(--ig-primary-a));
  -webkit-box-shadow: 0 0 0 0.25rem hsla(var(--ig-primary-200), 0.5);
          box-shadow: 0 0 0 0.25rem hsla(var(--ig-primary-200), 0.5);
}

:host([variant=outlined]) [part=base] {
  -webkit-box-shadow: 0 0 0 0.0625rem hsla(var(--ig-primary-500), var(--ig-primary-a));
          box-shadow: 0 0 0 0.0625rem hsla(var(--ig-primary-500), var(--ig-primary-a));
}
:host([variant=outlined]) [part=base]:hover {
  color: var(--ig-primary-600-contrast);
  background: hsla(var(--ig-primary-600), var(--ig-primary-a));
}
:host([variant=outlined]) [part=base]:focus, :host([variant=outlined]) [part=base]:active {
  color: var(--ig-primary-600-contrast);
  background: hsla(var(--ig-primary-600), var(--ig-primary-a));
  -webkit-box-shadow: 0 0 0 0.25rem hsla(var(--ig-primary-200), 0.5);
          box-shadow: 0 0 0 0.25rem hsla(var(--ig-primary-200), 0.5);
}

:host([disabled]) [part=base] {
  color: hsla(var(--ig-primary-100), var(--ig-primary-a));
  background: transparent;
}

:host([disabled][variant=contained]) [part=base] {
  background: hsla(var(--ig-primary-100), var(--ig-primary-a));
  color: hsla(var(--ig-primary-300), var(--ig-primary-a));
}

:host([disabled][variant=outlined]) [part=base] {
  color: hsla(var(--ig-primary-100), var(--ig-primary-a));
  -webkit-box-shadow: 0 0 0 0.0625rem hsla(var(--ig-primary-100), var(--ig-primary-a));
          box-shadow: 0 0 0 0.0625rem hsla(var(--ig-primary-100), var(--ig-primary-a));
}`,Wi=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  --size: max(var(--is-large, 1) * max(2.375rem, -1 * 2.375rem), var(--is-medium, 1) * max(2rem, -1 * 2rem), var(--is-small, 1) * max(1.5rem, -1 * 1.5rem));
}

[part=base] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.125rem), 0.125rem);
  background: transparent;
  color: hsla(var(--ig-primary-500), var(--ig-primary-a));
  -webkit-transition: color 0.15s ease-out, background 0.15s ease-out;
  -o-transition: color 0.15s ease-out, background 0.15s ease-out;
  transition: color 0.15s ease-out, background 0.15s ease-out;
  -webkit-box-shadow: none;
          box-shadow: none;
  width: var(--size);
  height: var(--size);
  padding: max(var(--is-large, 1) * max(7px, -1 * 7px) * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * max(6px, -1 * 6px) * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * max(4px, -1 * 4px) * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
}
[part=base]::after {
  position: absolute;
  content: "";
  pointer-events: none;
  top: 2px;
  left: 2px;
  width: calc(100% - 4px);
  height: calc(100% - 4px);
}
[part=base]:hover {
  color: hsla(var(--ig-primary-500), var(--ig-primary-a));
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
}
[part=base]:active {
  color: hsla(var(--ig-primary-500), var(--ig-primary-a));
  background: hsla(var(--ig-gray-300), var(--ig-gray-a));
}
[part=base]:focus-visible::after {
  -webkit-box-shadow: 0 0 0 0.0625rem hsla(var(--ig-gray-500), var(--ig-gray-a));
          box-shadow: 0 0 0 0.0625rem hsla(var(--ig-gray-500), var(--ig-gray-a));
}

:host([variant=contained]) [part=base] {
  color: var(--text-color, var(--ig-primary-600-contrast));
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
}
:host([variant=contained]) [part=base]:hover {
  background: var(--hover-background, hsla(var(--ig-primary-600), var(--ig-primary-a)));
}
:host([variant=contained]) [part=base]:active {
  color: var(--ig-primary-800-contrast);
  background: hsla(var(--ig-primary-800), var(--ig-primary-a));
}
:host([variant=contained]) [part=base]:focus-visible::after {
  -webkit-box-shadow: 0 0 0 0.0625rem var(--ig-primary-600-contrast);
          box-shadow: 0 0 0 0.0625rem var(--ig-primary-600-contrast);
}

:host([variant=outlined]) [part=base] {
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
  -webkit-box-shadow: 0 0 0 1px hsla(var(--ig-gray-700), var(--ig-gray-a));
          box-shadow: 0 0 0 1px hsla(var(--ig-gray-700), var(--ig-gray-a));
}
:host([variant=outlined]) [part=base]:focus {
  background: transparent;
}
:host([variant=outlined]) [part=base]:hover, :host([variant=outlined]) [part=base]:focus:hover {
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
}
:host([variant=outlined]) [part=base]:focus:active {
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
}

:host([disabled]) [part=base] {
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
}

:host([disabled][variant=contained]) [part=base],
:host([disabled][variant=outlined]) [part=base] {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}`,Qi=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  --size: max(var(--is-large, 1) * max(2.25rem, -1 * 2.25rem), var(--is-medium, 1) * max(2rem, -1 * 2rem), var(--is-small, 1) * max(1.75rem, -1 * 1.75rem));
}

[part=base] {
  -webkit-transition: color 0.15s ease-in-out, background 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
  -o-transition: color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, background 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, background 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, background 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
  width: var(--size);
  height: var(--size);
  padding: max(var(--is-large, 1) * max(6px, -1 * 6px) * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * max(6px, -1 * 6px) * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * max(6px, -1 * 6px) * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
}
[part=base]:hover {
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
  background: transparent;
}
[part=base]:focus, [part=base]:active {
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
  background: transparent;
  -webkit-box-shadow: 0 0 0 0.1875rem hsla(var(--ig-gray-300), var(--ig-gray-a));
          box-shadow: 0 0 0 0.1875rem hsla(var(--ig-gray-300), var(--ig-gray-a));
}

:host([variant=contained]) [part=base] {
  color: var(--ig-primary-600-contrast);
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
}
:host([variant=contained]) [part=base]:hover {
  background: hsla(var(--ig-primary-400), var(--ig-primary-a));
}
:host([variant=contained]) [part=base]:focus, :host([variant=contained]) [part=base]:active {
  background: hsla(var(--ig-primary-400), var(--ig-primary-a));
  -webkit-box-shadow: 0 0 0 0.1875rem hsla(var(--ig-primary-200), var(--ig-primary-a));
          box-shadow: 0 0 0 0.1875rem hsla(var(--ig-primary-200), var(--ig-primary-a));
}

:host([variant=outlined]) [part=base] {
  -webkit-box-shadow: none;
          box-shadow: none;
}
:host([variant=outlined]) [part=base]::after {
  position: absolute;
  content: "";
  -webkit-box-shadow: inset 0 0 0 0.125rem hsla(var(--ig-gray-500), var(--ig-gray-a));
          box-shadow: inset 0 0 0 0.125rem hsla(var(--ig-gray-500), var(--ig-gray-a));
  width: 100%;
  height: 100%;
  border-radius: inherit;
}
:host([variant=outlined]) [part=base]:hover {
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
}
:host([variant=outlined]) [part=base]:focus, :host([variant=outlined]) [part=base]:active {
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
  -webkit-box-shadow: 0 0 0 0.1875rem hsla(var(--ig-gray-300), var(--ig-gray-a));
          box-shadow: 0 0 0 0.1875rem hsla(var(--ig-gray-300), var(--ig-gray-a));
}

:host([disabled]) [part=base] {
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
  background: transparent;
  -webkit-box-shadow: none;
          box-shadow: none;
}

:host([disabled][variant=contained]) [part=base] {
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}`,Gi=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  --size: max(var(--is-large, 1) * max(2.25rem, -1 * 2.25rem), var(--is-medium, 1) * max(1.875rem, -1 * 1.875rem), var(--is-small, 1) * max(1.5rem, -1 * 1.5rem));
}

[part=base] {
  width: var(--size);
  height: var(--size);
  padding: max(var(--is-large, 1) * max(6px, -1 * 6px) * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * max(6px, -1 * 6px) * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * max(6px, -1 * 6px) * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
}

:host([variant=contained]) [part=base] {
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
}

:host([variant=outlined]) [part=base] {
  -webkit-box-shadow: inset 0 0 0 1px hsla(var(--ig-gray-300), var(--ig-gray-a));
          box-shadow: inset 0 0 0 1px hsla(var(--ig-gray-300), var(--ig-gray-a));
}

:host(:focus-within) [part=base] {
  -webkit-transition: none;
  -o-transition: none;
  transition: none;
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
  -webkit-box-shadow: inset 0 0 0 1px hsla(var(--ig-gray-400), var(--ig-gray-a));
          box-shadow: inset 0 0 0 1px hsla(var(--ig-gray-400), var(--ig-gray-a));
}

:host([variant=contained]:focus-within) [part=base] {
  background: hsla(var(--ig-gray-300), var(--ig-gray-a));
}

:host([disabled]) [part=base] {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}

:host([disabled][variant=contained]) [part=base] {
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
}

:host([disabled][variant=outlined]) [part=base] {
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
  -webkit-box-shadow: inset 0 0 0 1px hsla(var(--ig-gray-100), var(--ig-gray-a));
          box-shadow: inset 0 0 0 1px hsla(var(--ig-gray-100), var(--ig-gray-a));
}`;var Zi=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n};k(U);let Ji=class extends oe{constructor(){super(...arguments),this.mirrored=!1,this.variant="contained"}renderContent(){return i.dy`
      ${this.name||this.mirrored?i.dy`
            <igc-icon
              part="icon"
              name=${(0,n.o)(this.name)}
              collection=${(0,n.o)(this.collection)}
              .mirrored=${this.mirrored}
              size="small"
              aria-hidden="true"
            ></igc-icon>
            <slot></slot>
          `:i.dy`<slot></slot>`}
    `}async registerIcon(e,t,a="default"){await R(e,t,a)}registerIconFromText(e,t,a="default"){F(e,t,a)}};Ji.tagName="igc-icon-button",Ji.styles=Yi,Zi([(e,t)=>{},(0,r.Cb)()],Ji.prototype,"name",void 0),Zi([(0,r.Cb)()],Ji.prototype,"collection",void 0),Zi([(0,r.Cb)({type:Boolean})],Ji.prototype,"mirrored",void 0),Zi([(0,r.Cb)({reflect:!0})],Ji.prototype,"variant",void 0),Zi([(e,t)=>{}],Ji.prototype,"registerIcon",null),Zi([(e,t)=>{}],Ji.prototype,"registerIconFromText",null),Ji=Zi([b({bootstrap:qi,material:Gi,fluent:Wi,indigo:Qi})],Ji);const er=Ji;var tr=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n};class ar extends(z(i.oi)){constructor(){super(),this._controlsWithChecked=["input","radio","igc-radio","igc-switch","igc-checkbox"],this._controlsWithValue=["input","igc-input","igc-mask-input","textarea","igc-rating","igc-select","igc-combo","igc-date-time-input"],this._controlsThatSubmit=["input","button","igc-button","igc-icon-button"],this.novalidate=!1,this.addEventListener("click",this.handleClick)}submit(){const e=this.getFormData();return!(!this.novalidate&&!this.reportValidity()||(this.emitEvent("igcSubmit",{detail:e}),0))}reset(){this.getFormElements().forEach((e=>{const t=e.tagName.toLowerCase();if("select"===t)for(let t=0;t<e.options.length;t++){const a=e.options[t];a.selected=a.defaultSelected}else"input"===t&&("checkbox"===e.type||"radio"==e.type)||"input"!==t&&this._controlsWithChecked.includes(t)?e.checked=e.hasAttribute("checked"):"igc-input"===t||"igc-rating"===t||"igc-mask-input"===t||"igc-date-time-input"===t?e.value=e.getAttribute("value"):this._controlsWithValue.includes(t)&&(e.value=e.defaultValue)})),this.emitEvent("igcReset")}getFormElements(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("slot"),a=null==t?void 0:t.assignedElements({flatten:!0}),i=[];return null==a||a.forEach((e=>{e.disabled||i.push(e);const t=Array.from(e.getElementsByTagName("*")).filter((e=>!e.disabled));i.push(...t)})),i}getFormData(){const e=new FormData;return this.getFormElements().forEach((t=>{const a=t.tagName.toLowerCase();if("select"===a)for(let a=0;a<t.options.length;a++){const i=t.options[a];i.selected&&e.append(t.name,i.value)}else this._controlsWithChecked.includes(a)&&t.checked?e.append(t.name,t.value||"on"):this._controlsWithValue.includes(a)&&"checkbox"!==t.type&&"radio"!==t.type&&"submit"!==t.type&&e.append(t.name,t.value)})),e}reportValidity(){return!this.getFormElements().some((e=>"function"==typeof e.reportValidity&&!1===e.reportValidity()))}handleClick(e){var t,a;const i=e.target;return this._controlsThatSubmit.includes(i.tagName.toLowerCase())&&"submit"===(null===(t=i.type)||void 0===t?void 0:t.toLowerCase())?this.submit():"reset"===(null===(a=i.type)||void 0===a?void 0:a.toLowerCase())&&this.reset(),!0}render(){return i.dy`<slot></slot>`}}ar.tagName="igc-form",ar.styles=i.iv`
    :host {
      display: block;
    }
  `,tr([(0,r.Cb)({type:Boolean,reflect:!0})],ar.prototype,"novalidate",void 0),tr([(e,t)=>{}],ar.prototype,"submit",null),tr([(e,t)=>{}],ar.prototype,"reset",null),tr([(e,t)=>{}],ar.prototype,"getFormData",null);const ir=i.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
@-webkit-keyframes indeterminate-primary {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  20% {
    -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.7017, 0.4958);
            animation-timing-function: cubic-bezier(0.5, 0, 0.7017, 0.4958);
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  59.15% {
    -webkit-animation-timing-function: cubic-bezier(0.3024, 0.3813, 0.55, 0.9563);
            animation-timing-function: cubic-bezier(0.3024, 0.3813, 0.55, 0.9563);
    -webkit-transform: translateX(83.671%);
            transform: translateX(83.671%);
  }
  100% {
    -webkit-transform: translateX(200.611%);
            transform: translateX(200.611%);
  }
}
@keyframes indeterminate-primary {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  20% {
    -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.7017, 0.4958);
            animation-timing-function: cubic-bezier(0.5, 0, 0.7017, 0.4958);
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  59.15% {
    -webkit-animation-timing-function: cubic-bezier(0.3024, 0.3813, 0.55, 0.9563);
            animation-timing-function: cubic-bezier(0.3024, 0.3813, 0.55, 0.9563);
    -webkit-transform: translateX(83.671%);
            transform: translateX(83.671%);
  }
  100% {
    -webkit-transform: translateX(200.611%);
            transform: translateX(200.611%);
  }
}
@-webkit-keyframes indeterminate-primary-scale {
  0% {
    -webkit-transform: scaleX(0.08);
            transform: scaleX(0.08);
  }
  36.65% {
    -webkit-animation-timing-function: cubic-bezier(0.3347, 0.124, 0.7858, 1);
            animation-timing-function: cubic-bezier(0.3347, 0.124, 0.7858, 1);
    -webkit-transform: scaleX(0.08);
            transform: scaleX(0.08);
  }
  69.15% {
    -webkit-animation-timing-function: cubic-bezier(0.3347, 0.124, 0.7858, 1);
            animation-timing-function: cubic-bezier(0.3347, 0.124, 0.7858, 1);
    -webkit-transform: scaleX(0.6614);
            transform: scaleX(0.6614);
  }
  100% {
    -webkit-transform: scaleX(0.08);
            transform: scaleX(0.08);
  }
}
@keyframes indeterminate-primary-scale {
  0% {
    -webkit-transform: scaleX(0.08);
            transform: scaleX(0.08);
  }
  36.65% {
    -webkit-animation-timing-function: cubic-bezier(0.3347, 0.124, 0.7858, 1);
            animation-timing-function: cubic-bezier(0.3347, 0.124, 0.7858, 1);
    -webkit-transform: scaleX(0.08);
            transform: scaleX(0.08);
  }
  69.15% {
    -webkit-animation-timing-function: cubic-bezier(0.3347, 0.124, 0.7858, 1);
            animation-timing-function: cubic-bezier(0.3347, 0.124, 0.7858, 1);
    -webkit-transform: scaleX(0.6614);
            transform: scaleX(0.6614);
  }
  100% {
    -webkit-transform: scaleX(0.08);
            transform: scaleX(0.08);
  }
}
@-webkit-keyframes indeterminate-secondary {
  0% {
    -webkit-animation-timing-function: cubic-bezier(0.15, 0, 0.515, 0.4096);
            animation-timing-function: cubic-bezier(0.15, 0, 0.515, 0.4096);
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  25% {
    -webkit-animation-timing-function: cubic-bezier(0.31, 0.284, 0.8, 0.7337);
            animation-timing-function: cubic-bezier(0.31, 0.284, 0.8, 0.7337);
    -webkit-transform: translateX(37.6519%);
            transform: translateX(37.6519%);
  }
  48.35% {
    -webkit-animation-timing-function: cubic-bezier(0.4, 0.627, 0.6, 0.902);
            animation-timing-function: cubic-bezier(0.4, 0.627, 0.6, 0.902);
    -webkit-transform: translateX(84.3861%);
            transform: translateX(84.3861%);
  }
  100% {
    -webkit-transform: translateX(160.2777%);
            transform: translateX(160.2777%);
  }
}
@keyframes indeterminate-secondary {
  0% {
    -webkit-animation-timing-function: cubic-bezier(0.15, 0, 0.515, 0.4096);
            animation-timing-function: cubic-bezier(0.15, 0, 0.515, 0.4096);
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  25% {
    -webkit-animation-timing-function: cubic-bezier(0.31, 0.284, 0.8, 0.7337);
            animation-timing-function: cubic-bezier(0.31, 0.284, 0.8, 0.7337);
    -webkit-transform: translateX(37.6519%);
            transform: translateX(37.6519%);
  }
  48.35% {
    -webkit-animation-timing-function: cubic-bezier(0.4, 0.627, 0.6, 0.902);
            animation-timing-function: cubic-bezier(0.4, 0.627, 0.6, 0.902);
    -webkit-transform: translateX(84.3861%);
            transform: translateX(84.3861%);
  }
  100% {
    -webkit-transform: translateX(160.2777%);
            transform: translateX(160.2777%);
  }
}
@-webkit-keyframes indeterminate-secondary-scale {
  0% {
    -webkit-animation-timing-function: cubic-bezier(0.15, 0, 0.515, 0.4096);
            animation-timing-function: cubic-bezier(0.15, 0, 0.515, 0.4096);
    -webkit-transform: scaleX(0.08);
            transform: scaleX(0.08);
  }
  19.15% {
    -webkit-animation-timing-function: cubic-bezier(0.31, 0.284, 0.8, 0.7337);
            animation-timing-function: cubic-bezier(0.31, 0.284, 0.8, 0.7337);
    -webkit-transform: scaleX(0.4571);
            transform: scaleX(0.4571);
  }
  44.15% {
    -webkit-animation-timing-function: cubic-bezier(0.4, 0.627, 0.6, 0.902);
            animation-timing-function: cubic-bezier(0.4, 0.627, 0.6, 0.902);
    -webkit-transform: scaleX(0.727);
            transform: scaleX(0.727);
  }
  100% {
    -webkit-transform: scaleX(0.08);
            transform: scaleX(0.08);
  }
}
@keyframes indeterminate-secondary-scale {
  0% {
    -webkit-animation-timing-function: cubic-bezier(0.15, 0, 0.515, 0.4096);
            animation-timing-function: cubic-bezier(0.15, 0, 0.515, 0.4096);
    -webkit-transform: scaleX(0.08);
            transform: scaleX(0.08);
  }
  19.15% {
    -webkit-animation-timing-function: cubic-bezier(0.31, 0.284, 0.8, 0.7337);
            animation-timing-function: cubic-bezier(0.31, 0.284, 0.8, 0.7337);
    -webkit-transform: scaleX(0.4571);
            transform: scaleX(0.4571);
  }
  44.15% {
    -webkit-animation-timing-function: cubic-bezier(0.4, 0.627, 0.6, 0.902);
            animation-timing-function: cubic-bezier(0.4, 0.627, 0.6, 0.902);
    -webkit-transform: scaleX(0.727);
            transform: scaleX(0.727);
  }
  100% {
    -webkit-transform: scaleX(0.08);
            transform: scaleX(0.08);
  }
}
@-webkit-keyframes indeterminate-bar-fluent {
  0% {
    -webkit-transform: translateX(-100%);
            transform: translateX(-100%);
    -webkit-transform-origin: left;
            transform-origin: left;
  }
  100% {
    -webkit-transform: translateX(310%);
            transform: translateX(310%);
    -webkit-transform-origin: right;
            transform-origin: right;
  }
}
@keyframes indeterminate-bar-fluent {
  0% {
    -webkit-transform: translateX(-100%);
            transform: translateX(-100%);
    -webkit-transform-origin: left;
            transform-origin: left;
  }
  100% {
    -webkit-transform: translateX(310%);
            transform: translateX(310%);
    -webkit-transform-origin: right;
            transform-origin: right;
  }
}
@-webkit-keyframes indeterminate-bar-fluent-rtl {
  0% {
    -webkit-transform: translateX(-310%);
            transform: translateX(-310%);
    -webkit-transform-origin: right;
            transform-origin: right;
  }
  100% {
    -webkit-transform: translateX(100%);
            transform: translateX(100%);
    -webkit-transform-origin: left;
            transform-origin: left;
  }
}
@keyframes indeterminate-bar-fluent-rtl {
  0% {
    -webkit-transform: translateX(-310%);
            transform: translateX(-310%);
    -webkit-transform-origin: right;
            transform-origin: right;
  }
  100% {
    -webkit-transform: translateX(100%);
            transform: translateX(100%);
    -webkit-transform-origin: left;
            transform-origin: left;
  }
}
@-webkit-keyframes indeterminate-accordion {
  0% {
    stroke-dashoffset: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * 2);
    stroke-dasharray: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * 9 / 10);
  }
  100% {
    stroke-dashoffset: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * 2 / 5);
  }
}
@keyframes indeterminate-accordion {
  0% {
    stroke-dashoffset: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * 2);
    stroke-dasharray: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * 9 / 10);
  }
  100% {
    stroke-dashoffset: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * 2 / 5);
  }
}
@-webkit-keyframes indeterminate-accordion-rtl {
  0% {
    stroke-dashoffset: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * -2);
    stroke-dasharray: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * 9 / 10);
  }
  100% {
    stroke-dashoffset: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * -2 / 5);
  }
}
@keyframes indeterminate-accordion-rtl {
  0% {
    stroke-dashoffset: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * -2);
    stroke-dasharray: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * 9 / 10);
  }
  100% {
    stroke-dashoffset: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * -2 / 5);
  }
}
@-webkit-keyframes rotate-center {
  0% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes rotate-center {
  0% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
:host {
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  font-family: var(--ig-font-family);
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
}

[part~=label] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  color: inherit;
  font-weight: 600;
}

:host {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: relative;
  width: 100%;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-flex: 1;
      -ms-flex: 1 1 100%;
          flex: 1 1 100%;
  --track-size: 0.25rem;
  --linear-animation-duration: 2000ms;
}

:host([dir=rtl][indeterminate]) [part~=track] {
  -webkit-transform: rotateY(180deg);
          transform: rotateY(180deg);
}

[part~=track] {
  position: relative;
  width: inherit;
  height: var(--track-size);
  background: hsla(var(--ig-gray-300), var(--ig-gray-a));
  overflow: hidden;
  border-radius: 0;
  z-index: 0;
}

[part~=fill] {
  -webkit-transition: width var(--duration) linear, background-color var(--duration) linear;
  -o-transition: width var(--duration) linear, background-color var(--duration) linear;
  transition: width var(--duration) linear, background-color var(--duration) linear;
  position: relative;
  height: inherit;
}

[part~=indeterminate],
[part~="indeterminate secondary"] {
  width: 100% !important;
  height: inherit;
  position: absolute;
  background: transparent;
}
[part~=indeterminate]::after,
[part~="indeterminate secondary"]::after {
  content: "";
  position: absolute;
  top: 0;
  inset-inline-start: 0;
  width: inherit;
  height: inherit;
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
}

[part~=indeterminate]:not([part~=secondary]) {
  -webkit-transform: scale3d(0, 1, 1);
          transform: scale3d(0, 1, 1);
  -webkit-animation: indeterminate-primary var(--linear-animation-duration) infinite linear;
          animation: indeterminate-primary var(--linear-animation-duration) infinite linear;
  left: -145.1666%;
}
[part~=indeterminate]:not([part~=secondary])::after {
  -webkit-animation: indeterminate-primary-scale var(--linear-animation-duration) infinite linear;
          animation: indeterminate-primary-scale var(--linear-animation-duration) infinite linear;
}

[part~=secondary] {
  -webkit-animation: indeterminate-secondary var(--linear-animation-duration) infinite linear;
          animation: indeterminate-secondary var(--linear-animation-duration) infinite linear;
  left: -54.8888%;
}
[part~=secondary]::after {
  -webkit-animation: indeterminate-secondary-scale var(--linear-animation-duration) infinite linear;
          animation: indeterminate-secondary-scale var(--linear-animation-duration) infinite linear;
  width: 100%;
  height: inherit;
}

[part~=value] {
  margin: 0;
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
  font-size: 0.875em;
  font-weight: 600;
}

[part~=primary]:not([part~=indeterminate]) {
  background-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
}

[part~=primary]::after {
  background-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
}

[part~=striped][part~=primary]:not([part~=indeterminate]) {
  width: 100%;
  height: 100%;
  /* stylelint-disable */
  background: hsla(var(--ig-primary-500), var(--ig-primary-a)) -o-repeating-linear-gradient(135deg, hsla(var(--ig-primary-500), var(--ig-primary-a)), hsla(var(--ig-primary-500), var(--ig-primary-a)) 1rem, hsla(var(--ig-gray-50), 0.7) 1rem, hsla(var(--ig-gray-50), 0.7) 2rem);
  background: hsla(var(--ig-primary-500), var(--ig-primary-a)) repeating-linear-gradient(-45deg, hsla(var(--ig-primary-500), var(--ig-primary-a)), hsla(var(--ig-primary-500), var(--ig-primary-a)) 1rem, hsla(var(--ig-gray-50), 0.7) 1rem, hsla(var(--ig-gray-50), 0.7) 2rem);
  /* stylelint-enable */
}

[part~=striped][part~=primary]::after {
  /* stylelint-disable */
  background: hsla(var(--ig-primary-500), var(--ig-primary-a)) -o-repeating-linear-gradient(135deg, hsla(var(--ig-primary-500), var(--ig-primary-a)), hsla(var(--ig-primary-500), var(--ig-primary-a)) 1rem, hsla(var(--ig-gray-50), 0.7) 1rem, hsla(var(--ig-gray-50), 0.7) 2rem);
  background: hsla(var(--ig-primary-500), var(--ig-primary-a)) repeating-linear-gradient(-45deg, hsla(var(--ig-primary-500), var(--ig-primary-a)), hsla(var(--ig-primary-500), var(--ig-primary-a)) 1rem, hsla(var(--ig-gray-50), 0.7) 1rem, hsla(var(--ig-gray-50), 0.7) 2rem);
  /* stylelint-enable */
}

[part~=danger]:not([part~=indeterminate]) {
  background-color: hsla(var(--ig-error-500), var(--ig-error-a));
}

[part~=danger]::after {
  background-color: hsla(var(--ig-error-500), var(--ig-error-a));
}

[part~=striped][part~=danger]:not([part~=indeterminate]) {
  /* stylelint-disable */
  background: hsla(var(--ig-error-500), var(--ig-error-a)) -o-repeating-linear-gradient(135deg, hsla(var(--ig-error-500), var(--ig-error-a)), hsla(var(--ig-error-500), var(--ig-error-a)) 1rem, hsla(var(--ig-gray-50), 0.7) 1rem, hsla(var(--ig-gray-50), 0.7) 2rem);
  background: hsla(var(--ig-error-500), var(--ig-error-a)) repeating-linear-gradient(-45deg, hsla(var(--ig-error-500), var(--ig-error-a)), hsla(var(--ig-error-500), var(--ig-error-a)) 1rem, hsla(var(--ig-gray-50), 0.7) 1rem, hsla(var(--ig-gray-50), 0.7) 2rem);
  /* stylelint-enable */
}

[part~=striped][part~=danger]::after {
  /* stylelint-disable */
  background: hsla(var(--ig-error-500), var(--ig-error-a)) -o-repeating-linear-gradient(135deg, hsla(var(--ig-error-500), var(--ig-error-a)), hsla(var(--ig-error-500), var(--ig-error-a)) 1rem, hsla(var(--ig-gray-50), 0.7) 1rem, hsla(var(--ig-gray-50), 0.7) 2rem);
  background: hsla(var(--ig-error-500), var(--ig-error-a)) repeating-linear-gradient(-45deg, hsla(var(--ig-error-500), var(--ig-error-a)), hsla(var(--ig-error-500), var(--ig-error-a)) 1rem, hsla(var(--ig-gray-50), 0.7) 1rem, hsla(var(--ig-gray-50), 0.7) 2rem);
  /* stylelint-enable */
}

[part~=warning]:not([part~=indeterminate]) {
  background-color: hsla(var(--ig-warn-500), var(--ig-warn-a));
}

[part~=warning]::after {
  background-color: hsla(var(--ig-warn-500), var(--ig-warn-a));
}

[part~=striped][part~=warning]:not([part~=indeterminate]) {
  /* stylelint-disable */
  background: hsla(var(--ig-warn-500), var(--ig-warn-a)) -o-repeating-linear-gradient(135deg, hsla(var(--ig-warn-500), var(--ig-warn-a)), hsla(var(--ig-warn-500), var(--ig-warn-a)) 1rem, hsla(var(--ig-gray-50), 0.7) 1rem, hsla(var(--ig-gray-50), 0.7) 2rem);
  background: hsla(var(--ig-warn-500), var(--ig-warn-a)) repeating-linear-gradient(-45deg, hsla(var(--ig-warn-500), var(--ig-warn-a)), hsla(var(--ig-warn-500), var(--ig-warn-a)) 1rem, hsla(var(--ig-gray-50), 0.7) 1rem, hsla(var(--ig-gray-50), 0.7) 2rem);
  /* stylelint-enable */
}

[part~=striped][part~=warning]::after {
  /* stylelint-disable */
  background: hsla(var(--ig-warn-500), var(--ig-warn-a)) -o-repeating-linear-gradient(135deg, hsla(var(--ig-warn-500), var(--ig-warn-a)), hsla(var(--ig-warn-500), var(--ig-warn-a)) 1rem, hsla(var(--ig-gray-50), 0.7) 1rem, hsla(var(--ig-gray-50), 0.7) 2rem);
  background: hsla(var(--ig-warn-500), var(--ig-warn-a)) repeating-linear-gradient(-45deg, hsla(var(--ig-warn-500), var(--ig-warn-a)), hsla(var(--ig-warn-500), var(--ig-warn-a)) 1rem, hsla(var(--ig-gray-50), 0.7) 1rem, hsla(var(--ig-gray-50), 0.7) 2rem);
  /* stylelint-enable */
}

[part~=info]:not([part~=indeterminate]) {
  background-color: hsla(var(--ig-info-500), var(--ig-info-a));
}

[part~=info]::after {
  background-color: hsla(var(--ig-info-500), var(--ig-info-a));
}

[part~=striped][part~=info]:not([part~=indeterminate]) {
  /* stylelint-disable */
  background: hsla(var(--ig-info-500), var(--ig-info-a)) -o-repeating-linear-gradient(135deg, hsla(var(--ig-info-500), var(--ig-info-a)), hsla(var(--ig-info-500), var(--ig-info-a)) 1rem, hsla(var(--ig-gray-50), 0.7) 1rem, hsla(var(--ig-gray-50), 0.7) 2rem);
  background: hsla(var(--ig-info-500), var(--ig-info-a)) repeating-linear-gradient(-45deg, hsla(var(--ig-info-500), var(--ig-info-a)), hsla(var(--ig-info-500), var(--ig-info-a)) 1rem, hsla(var(--ig-gray-50), 0.7) 1rem, hsla(var(--ig-gray-50), 0.7) 2rem);
  /* stylelint-enable */
}

[part~=striped][part~=info]::after {
  /* stylelint-disable */
  background: hsla(var(--ig-info-500), var(--ig-info-a)) -o-repeating-linear-gradient(135deg, hsla(var(--ig-info-500), var(--ig-info-a)), hsla(var(--ig-info-500), var(--ig-info-a)) 1rem, hsla(var(--ig-gray-50), 0.7) 1rem, hsla(var(--ig-gray-50), 0.7) 2rem);
  background: hsla(var(--ig-info-500), var(--ig-info-a)) repeating-linear-gradient(-45deg, hsla(var(--ig-info-500), var(--ig-info-a)), hsla(var(--ig-info-500), var(--ig-info-a)) 1rem, hsla(var(--ig-gray-50), 0.7) 1rem, hsla(var(--ig-gray-50), 0.7) 2rem);
  /* stylelint-enable */
}

[part~=success]:not([part~=indeterminate]) {
  background-color: hsla(var(--ig-success-500), var(--ig-success-a));
}

[part~=success]::after {
  background-color: hsla(var(--ig-success-500), var(--ig-success-a));
}

[part~=striped][part~=success]:not([part~=indeterminate]) {
  /* stylelint-disable */
  background: hsla(var(--ig-success-500), var(--ig-success-a)) -o-repeating-linear-gradient(135deg, hsla(var(--ig-success-500), var(--ig-success-a)), hsla(var(--ig-success-500), var(--ig-success-a)) 1rem, hsla(var(--ig-gray-50), 0.7) 1rem, hsla(var(--ig-gray-50), 0.7) 2rem);
  background: hsla(var(--ig-success-500), var(--ig-success-a)) repeating-linear-gradient(-45deg, hsla(var(--ig-success-500), var(--ig-success-a)), hsla(var(--ig-success-500), var(--ig-success-a)) 1rem, hsla(var(--ig-gray-50), 0.7) 1rem, hsla(var(--ig-gray-50), 0.7) 2rem);
  /* stylelint-enable */
}

[part~=striped][part~=success]::after {
  /* stylelint-disable */
  background: hsla(var(--ig-success-500), var(--ig-success-a)) -o-repeating-linear-gradient(135deg, hsla(var(--ig-success-500), var(--ig-success-a)), hsla(var(--ig-success-500), var(--ig-success-a)) 1rem, hsla(var(--ig-gray-50), 0.7) 1rem, hsla(var(--ig-gray-50), 0.7) 2rem);
  background: hsla(var(--ig-success-500), var(--ig-success-a)) repeating-linear-gradient(-45deg, hsla(var(--ig-success-500), var(--ig-success-a)), hsla(var(--ig-success-500), var(--ig-success-a)) 1rem, hsla(var(--ig-gray-50), 0.7) 1rem, hsla(var(--ig-gray-50), 0.7) 2rem);
  /* stylelint-enable */
}

:host([label-align=top]) [part~=label],
:host([label-align=top-start]) [part~=label],
:host([label-align=top-end]) [part~=label] {
  -webkit-box-ordinal-group: 0;
      -ms-flex-order: -1;
          order: -1;
}

:host([label-align=top-start]) [part~=label],
:host([label-align=bottom-start]) [part~=label],
:host([label-align=start]) [part~=label] {
  -ms-flex-item-align: start;
      align-self: flex-start;
}

:host([label-align=bottom-end]) [part~=label],
:host([label-align=top-end]) [part~=label],
:host([label-align=end]) [part~=label] {
  -ms-flex-item-align: end;
      align-self: flex-end;
}

:host([label-align=top]) [part~=label],
:host([label-align=bottom]) [part~=label] {
  -ms-flex-item-align: center;
      align-self: center;
}

[part~=hidden] {
  display: none;
}`,rr=i.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
@-webkit-keyframes indeterminate-primary {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  20% {
    -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.7017, 0.4958);
            animation-timing-function: cubic-bezier(0.5, 0, 0.7017, 0.4958);
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  59.15% {
    -webkit-animation-timing-function: cubic-bezier(0.3024, 0.3813, 0.55, 0.9563);
            animation-timing-function: cubic-bezier(0.3024, 0.3813, 0.55, 0.9563);
    -webkit-transform: translateX(83.671%);
            transform: translateX(83.671%);
  }
  100% {
    -webkit-transform: translateX(200.611%);
            transform: translateX(200.611%);
  }
}
@keyframes indeterminate-primary {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  20% {
    -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.7017, 0.4958);
            animation-timing-function: cubic-bezier(0.5, 0, 0.7017, 0.4958);
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  59.15% {
    -webkit-animation-timing-function: cubic-bezier(0.3024, 0.3813, 0.55, 0.9563);
            animation-timing-function: cubic-bezier(0.3024, 0.3813, 0.55, 0.9563);
    -webkit-transform: translateX(83.671%);
            transform: translateX(83.671%);
  }
  100% {
    -webkit-transform: translateX(200.611%);
            transform: translateX(200.611%);
  }
}
@-webkit-keyframes indeterminate-primary-scale {
  0% {
    -webkit-transform: scaleX(0.08);
            transform: scaleX(0.08);
  }
  36.65% {
    -webkit-animation-timing-function: cubic-bezier(0.3347, 0.124, 0.7858, 1);
            animation-timing-function: cubic-bezier(0.3347, 0.124, 0.7858, 1);
    -webkit-transform: scaleX(0.08);
            transform: scaleX(0.08);
  }
  69.15% {
    -webkit-animation-timing-function: cubic-bezier(0.3347, 0.124, 0.7858, 1);
            animation-timing-function: cubic-bezier(0.3347, 0.124, 0.7858, 1);
    -webkit-transform: scaleX(0.6614);
            transform: scaleX(0.6614);
  }
  100% {
    -webkit-transform: scaleX(0.08);
            transform: scaleX(0.08);
  }
}
@keyframes indeterminate-primary-scale {
  0% {
    -webkit-transform: scaleX(0.08);
            transform: scaleX(0.08);
  }
  36.65% {
    -webkit-animation-timing-function: cubic-bezier(0.3347, 0.124, 0.7858, 1);
            animation-timing-function: cubic-bezier(0.3347, 0.124, 0.7858, 1);
    -webkit-transform: scaleX(0.08);
            transform: scaleX(0.08);
  }
  69.15% {
    -webkit-animation-timing-function: cubic-bezier(0.3347, 0.124, 0.7858, 1);
            animation-timing-function: cubic-bezier(0.3347, 0.124, 0.7858, 1);
    -webkit-transform: scaleX(0.6614);
            transform: scaleX(0.6614);
  }
  100% {
    -webkit-transform: scaleX(0.08);
            transform: scaleX(0.08);
  }
}
@-webkit-keyframes indeterminate-secondary {
  0% {
    -webkit-animation-timing-function: cubic-bezier(0.15, 0, 0.515, 0.4096);
            animation-timing-function: cubic-bezier(0.15, 0, 0.515, 0.4096);
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  25% {
    -webkit-animation-timing-function: cubic-bezier(0.31, 0.284, 0.8, 0.7337);
            animation-timing-function: cubic-bezier(0.31, 0.284, 0.8, 0.7337);
    -webkit-transform: translateX(37.6519%);
            transform: translateX(37.6519%);
  }
  48.35% {
    -webkit-animation-timing-function: cubic-bezier(0.4, 0.627, 0.6, 0.902);
            animation-timing-function: cubic-bezier(0.4, 0.627, 0.6, 0.902);
    -webkit-transform: translateX(84.3861%);
            transform: translateX(84.3861%);
  }
  100% {
    -webkit-transform: translateX(160.2777%);
            transform: translateX(160.2777%);
  }
}
@keyframes indeterminate-secondary {
  0% {
    -webkit-animation-timing-function: cubic-bezier(0.15, 0, 0.515, 0.4096);
            animation-timing-function: cubic-bezier(0.15, 0, 0.515, 0.4096);
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  25% {
    -webkit-animation-timing-function: cubic-bezier(0.31, 0.284, 0.8, 0.7337);
            animation-timing-function: cubic-bezier(0.31, 0.284, 0.8, 0.7337);
    -webkit-transform: translateX(37.6519%);
            transform: translateX(37.6519%);
  }
  48.35% {
    -webkit-animation-timing-function: cubic-bezier(0.4, 0.627, 0.6, 0.902);
            animation-timing-function: cubic-bezier(0.4, 0.627, 0.6, 0.902);
    -webkit-transform: translateX(84.3861%);
            transform: translateX(84.3861%);
  }
  100% {
    -webkit-transform: translateX(160.2777%);
            transform: translateX(160.2777%);
  }
}
@-webkit-keyframes indeterminate-secondary-scale {
  0% {
    -webkit-animation-timing-function: cubic-bezier(0.15, 0, 0.515, 0.4096);
            animation-timing-function: cubic-bezier(0.15, 0, 0.515, 0.4096);
    -webkit-transform: scaleX(0.08);
            transform: scaleX(0.08);
  }
  19.15% {
    -webkit-animation-timing-function: cubic-bezier(0.31, 0.284, 0.8, 0.7337);
            animation-timing-function: cubic-bezier(0.31, 0.284, 0.8, 0.7337);
    -webkit-transform: scaleX(0.4571);
            transform: scaleX(0.4571);
  }
  44.15% {
    -webkit-animation-timing-function: cubic-bezier(0.4, 0.627, 0.6, 0.902);
            animation-timing-function: cubic-bezier(0.4, 0.627, 0.6, 0.902);
    -webkit-transform: scaleX(0.727);
            transform: scaleX(0.727);
  }
  100% {
    -webkit-transform: scaleX(0.08);
            transform: scaleX(0.08);
  }
}
@keyframes indeterminate-secondary-scale {
  0% {
    -webkit-animation-timing-function: cubic-bezier(0.15, 0, 0.515, 0.4096);
            animation-timing-function: cubic-bezier(0.15, 0, 0.515, 0.4096);
    -webkit-transform: scaleX(0.08);
            transform: scaleX(0.08);
  }
  19.15% {
    -webkit-animation-timing-function: cubic-bezier(0.31, 0.284, 0.8, 0.7337);
            animation-timing-function: cubic-bezier(0.31, 0.284, 0.8, 0.7337);
    -webkit-transform: scaleX(0.4571);
            transform: scaleX(0.4571);
  }
  44.15% {
    -webkit-animation-timing-function: cubic-bezier(0.4, 0.627, 0.6, 0.902);
            animation-timing-function: cubic-bezier(0.4, 0.627, 0.6, 0.902);
    -webkit-transform: scaleX(0.727);
            transform: scaleX(0.727);
  }
  100% {
    -webkit-transform: scaleX(0.08);
            transform: scaleX(0.08);
  }
}
@-webkit-keyframes indeterminate-bar-fluent {
  0% {
    -webkit-transform: translateX(-100%);
            transform: translateX(-100%);
    -webkit-transform-origin: left;
            transform-origin: left;
  }
  100% {
    -webkit-transform: translateX(310%);
            transform: translateX(310%);
    -webkit-transform-origin: right;
            transform-origin: right;
  }
}
@keyframes indeterminate-bar-fluent {
  0% {
    -webkit-transform: translateX(-100%);
            transform: translateX(-100%);
    -webkit-transform-origin: left;
            transform-origin: left;
  }
  100% {
    -webkit-transform: translateX(310%);
            transform: translateX(310%);
    -webkit-transform-origin: right;
            transform-origin: right;
  }
}
@-webkit-keyframes indeterminate-bar-fluent-rtl {
  0% {
    -webkit-transform: translateX(-310%);
            transform: translateX(-310%);
    -webkit-transform-origin: right;
            transform-origin: right;
  }
  100% {
    -webkit-transform: translateX(100%);
            transform: translateX(100%);
    -webkit-transform-origin: left;
            transform-origin: left;
  }
}
@keyframes indeterminate-bar-fluent-rtl {
  0% {
    -webkit-transform: translateX(-310%);
            transform: translateX(-310%);
    -webkit-transform-origin: right;
            transform-origin: right;
  }
  100% {
    -webkit-transform: translateX(100%);
            transform: translateX(100%);
    -webkit-transform-origin: left;
            transform-origin: left;
  }
}
@-webkit-keyframes indeterminate-accordion {
  0% {
    stroke-dashoffset: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * 2);
    stroke-dasharray: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * 9 / 10);
  }
  100% {
    stroke-dashoffset: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * 2 / 5);
  }
}
@keyframes indeterminate-accordion {
  0% {
    stroke-dashoffset: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * 2);
    stroke-dasharray: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * 9 / 10);
  }
  100% {
    stroke-dashoffset: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * 2 / 5);
  }
}
@-webkit-keyframes indeterminate-accordion-rtl {
  0% {
    stroke-dashoffset: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * -2);
    stroke-dasharray: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * 9 / 10);
  }
  100% {
    stroke-dashoffset: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * -2 / 5);
  }
}
@keyframes indeterminate-accordion-rtl {
  0% {
    stroke-dashoffset: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * -2);
    stroke-dasharray: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * 9 / 10);
  }
  100% {
    stroke-dashoffset: calc(calc(calc(var(--diameter) / 2 - var(--stroke-thickness) * 0.5) * 2 * 3.1416) * -2 / 5);
  }
}
@-webkit-keyframes rotate-center {
  0% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes rotate-center {
  0% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
:host {
  --track-size: 1rem;
}

[part~=track] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.25rem), 0.25rem);
}

[part~=striped][part~=primary]:not([part~=indeterminate]) {
  /* stylelint-disable */
  background: hsla(var(--ig-primary-500), var(--ig-primary-a)) -o-repeating-linear-gradient(45deg, hsla(var(--ig-primary-500), var(--ig-primary-a)), hsla(var(--ig-primary-500), var(--ig-primary-a)) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.625rem);
  background: hsla(var(--ig-primary-500), var(--ig-primary-a)) repeating-linear-gradient(45deg, hsla(var(--ig-primary-500), var(--ig-primary-a)), hsla(var(--ig-primary-500), var(--ig-primary-a)) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.625rem);
  /* stylelint-enable */
}

[part~=striped][part~=primary]::after {
  /* stylelint-disable */
  background: hsla(var(--ig-primary-500), var(--ig-primary-a)) -o-repeating-linear-gradient(45deg, hsla(var(--ig-primary-500), var(--ig-primary-a)), hsla(var(--ig-primary-500), var(--ig-primary-a)) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.625rem);
  background: hsla(var(--ig-primary-500), var(--ig-primary-a)) repeating-linear-gradient(45deg, hsla(var(--ig-primary-500), var(--ig-primary-a)), hsla(var(--ig-primary-500), var(--ig-primary-a)) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.625rem);
  /* stylelint-enable */
}

[part~=striped][part~=danger]:not([part~=indeterminate]) {
  /* stylelint-disable */
  background: hsla(var(--ig-error-500), var(--ig-error-a)) -o-repeating-linear-gradient(45deg, hsla(var(--ig-error-500), var(--ig-error-a)), hsla(var(--ig-error-500), var(--ig-error-a)) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.625rem);
  background: hsla(var(--ig-error-500), var(--ig-error-a)) repeating-linear-gradient(45deg, hsla(var(--ig-error-500), var(--ig-error-a)), hsla(var(--ig-error-500), var(--ig-error-a)) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.625rem);
  /* stylelint-enable */
}

[part~=striped][part~=danger]::after {
  /* stylelint-disable */
  background: hsla(var(--ig-error-500), var(--ig-error-a)) -o-repeating-linear-gradient(45deg, hsla(var(--ig-error-500), var(--ig-error-a)), hsla(var(--ig-error-500), var(--ig-error-a)) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.625rem);
  background: hsla(var(--ig-error-500), var(--ig-error-a)) repeating-linear-gradient(45deg, hsla(var(--ig-error-500), var(--ig-error-a)), hsla(var(--ig-error-500), var(--ig-error-a)) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.625rem);
  /* stylelint-enable */
}

[part~=striped][part~=warning]:not([part~=indeterminate]) {
  /* stylelint-disable */
  background: hsla(var(--ig-warn-500), var(--ig-warn-a)) -o-repeating-linear-gradient(45deg, hsla(var(--ig-warn-500), var(--ig-warn-a)), hsla(var(--ig-warn-500), var(--ig-warn-a)) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.625rem);
  background: hsla(var(--ig-warn-500), var(--ig-warn-a)) repeating-linear-gradient(45deg, hsla(var(--ig-warn-500), var(--ig-warn-a)), hsla(var(--ig-warn-500), var(--ig-warn-a)) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.625rem);
  /* stylelint-enable */
}

[part~=striped][part~=warning]::after {
  /* stylelint-disable */
  background: hsla(var(--ig-warn-500), var(--ig-warn-a)) -o-repeating-linear-gradient(45deg, hsla(var(--ig-warn-500), var(--ig-warn-a)), hsla(var(--ig-warn-500), var(--ig-warn-a)) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.625rem);
  background: hsla(var(--ig-warn-500), var(--ig-warn-a)) repeating-linear-gradient(45deg, hsla(var(--ig-warn-500), var(--ig-warn-a)), hsla(var(--ig-warn-500), var(--ig-warn-a)) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.625rem);
  /* stylelint-enable */
}

[part~=striped][part~=info]:not([part~=indeterminate]) {
  /* stylelint-disable */
  background: hsla(var(--ig-info-500), var(--ig-info-a)) -o-repeating-linear-gradient(45deg, hsla(var(--ig-info-500), var(--ig-info-a)), hsla(var(--ig-info-500), var(--ig-info-a)) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.625rem);
  background: hsla(var(--ig-info-500), var(--ig-info-a)) repeating-linear-gradient(45deg, hsla(var(--ig-info-500), var(--ig-info-a)), hsla(var(--ig-info-500), var(--ig-info-a)) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.625rem);
  /* stylelint-enable */
}

[part~=striped][part~=info]::after {
  /* stylelint-disable */
  background: hsla(var(--ig-info-500), var(--ig-info-a)) -o-repeating-linear-gradient(45deg, hsla(var(--ig-info-500), var(--ig-info-a)), hsla(var(--ig-info-500), var(--ig-info-a)) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.625rem);
  background: hsla(var(--ig-info-500), var(--ig-info-a)) repeating-linear-gradient(45deg, hsla(var(--ig-info-500), var(--ig-info-a)), hsla(var(--ig-info-500), var(--ig-info-a)) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.625rem);
  /* stylelint-enable */
}

[part~=striped][part~=success]:not([part~=indeterminate]) {
  /* stylelint-disable */
  background: hsla(var(--ig-success-500), var(--ig-success-a)) -o-repeating-linear-gradient(45deg, hsla(var(--ig-success-500), var(--ig-success-a)), hsla(var(--ig-success-500), var(--ig-success-a)) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.625rem);
  background: hsla(var(--ig-success-500), var(--ig-success-a)) repeating-linear-gradient(45deg, hsla(var(--ig-success-500), var(--ig-success-a)), hsla(var(--ig-success-500), var(--ig-success-a)) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.625rem);
  /* stylelint-enable */
}

[part~=striped][part~=success]::after {
  /* stylelint-disable */
  background: hsla(var(--ig-success-500), var(--ig-success-a)) -o-repeating-linear-gradient(45deg, hsla(var(--ig-success-500), var(--ig-success-a)), hsla(var(--ig-success-500), var(--ig-success-a)) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.625rem);
  background: hsla(var(--ig-success-500), var(--ig-success-a)) repeating-linear-gradient(45deg, hsla(var(--ig-success-500), var(--ig-success-a)), hsla(var(--ig-success-500), var(--ig-success-a)) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.3125rem, hsla(var(--ig-gray-50), 0.2) 0.625rem);
  /* stylelint-enable */
}`,lr=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  --track-size: 0.125rem;
  --linear-animation-duration: 3000ms;
}

[part~=track] {
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
  margin: 0.5rem 0;
}

[part~=label] {
  font-size: 0.875rem;
  font-weight: 400;
}

[part~=indeterminate]:not([part~=secondary]) {
  width: 33% !important;
  min-width: 33%;
  -webkit-animation-name: indeterminate-bar-fluent;
          animation-name: indeterminate-bar-fluent;
  -webkit-animation-duration: var(--linear-animation-duration);
          animation-duration: var(--linear-animation-duration);
  -webkit-animation-timing-function: ease;
          animation-timing-function: ease;
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  left: auto;
}
[part~=indeterminate]:not([part~=secondary])::after {
  display: none;
}

[part~=secondary] {
  display: none;
}

:host([dir=rtl]) [part~=indeterminate] {
  -webkit-animation-name: indeterminate-bar-fluent-rtl;
          animation-name: indeterminate-bar-fluent-rtl;
}

[part~=primary][part~=indeterminate] {
  background: -webkit-gradient(linear, left top, right top, from(transparent), color-stop(50%, hsla(var(--ig-primary-500), var(--ig-primary-a))), to(transparent));
  background: -o-linear-gradient(left, transparent 0%, hsla(var(--ig-primary-500), var(--ig-primary-a)) 50%, transparent 100%);
  background: linear-gradient(90deg, transparent 0%, hsla(var(--ig-primary-500), var(--ig-primary-a)) 50%, transparent 100%);
}

[part~=danger][part~=indeterminate] {
  background: -webkit-gradient(linear, left top, right top, from(transparent), color-stop(50%, hsla(var(--ig-error-500), var(--ig-error-a))), to(transparent));
  background: -o-linear-gradient(left, transparent 0%, hsla(var(--ig-error-500), var(--ig-error-a)) 50%, transparent 100%);
  background: linear-gradient(90deg, transparent 0%, hsla(var(--ig-error-500), var(--ig-error-a)) 50%, transparent 100%);
}

[part~=warning][part~=indeterminate] {
  background: -webkit-gradient(linear, left top, right top, from(transparent), color-stop(50%, hsla(var(--ig-warn-500), var(--ig-warn-a))), to(transparent));
  background: -o-linear-gradient(left, transparent 0%, hsla(var(--ig-warn-500), var(--ig-warn-a)) 50%, transparent 100%);
  background: linear-gradient(90deg, transparent 0%, hsla(var(--ig-warn-500), var(--ig-warn-a)) 50%, transparent 100%);
}

[part~=info][part~=indeterminate] {
  background: -webkit-gradient(linear, left top, right top, from(transparent), color-stop(50%, hsla(var(--ig-info-500), var(--ig-info-a))), to(transparent));
  background: -o-linear-gradient(left, transparent 0%, hsla(var(--ig-info-500), var(--ig-info-a)) 50%, transparent 100%);
  background: linear-gradient(90deg, transparent 0%, hsla(var(--ig-info-500), var(--ig-info-a)) 50%, transparent 100%);
}

[part~=success][part~=indeterminate] {
  background: -webkit-gradient(linear, left top, right top, from(transparent), color-stop(50%, hsla(var(--ig-success-500), var(--ig-success-a))), to(transparent));
  background: -o-linear-gradient(left, transparent 0%, hsla(var(--ig-success-500), var(--ig-success-a)) 50%, transparent 100%);
  background: linear-gradient(90deg, transparent 0%, hsla(var(--ig-success-500), var(--ig-success-a)) 50%, transparent 100%);
}`,nr=i.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
[part~=striped]:not([part~=indeterminate]) {
  /* stylelint-disable */
  background: hsla(var(--ig-secondary-500), var(--ig-secondary-a)) -o-repeating-linear-gradient(45deg, hsla(var(--ig-secondary-500), var(--ig-secondary-a)), hsla(var(--ig-secondary-500), var(--ig-secondary-a)) 0.375rem, hsla(var(--ig-gray-50), 0.7) 0.375rem, hsla(var(--ig-gray-50), 0.7) 0.875rem);
  background: hsla(var(--ig-secondary-500), var(--ig-secondary-a)) repeating-linear-gradient(45deg, hsla(var(--ig-secondary-500), var(--ig-secondary-a)), hsla(var(--ig-secondary-500), var(--ig-secondary-a)) 0.375rem, hsla(var(--ig-gray-50), 0.7) 0.375rem, hsla(var(--ig-gray-50), 0.7) 0.875rem);
  /* stylelint-enable */
}`;var sr=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n};let or=class extends jt{constructor(){super(...arguments),this.striped=!1,this.labelAlign="top-start"}get wrapperParts(){return{fill:!0,striped:this.striped,indeterminate:this.indeterminate,primary:"primary"===this.variant,success:"success"===this.variant,danger:"danger"===this.variant,warning:"warning"===this.variant,info:"info"===this.variant}}get animInfo(){return{width:P(this.value,this.max)+"%","--duration":this.animationDuration+"ms"}}render(){return i.dy`
      <div
        part="track"
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax=${this.max}
        aria-valuenow=${this.indeterminate?i.Ld:this.value}
      >
        <div
          part="${$(this.wrapperParts)}"
          style="${(0,ye.V)(this.animInfo)}"
        ></div>
        <div part="${$(this.wrapperParts)} secondary"></div>
      </div>
      ${this.renderDefaultSlot()}
    `}};or.tagName="igc-linear-progress",or.styles=ir,sr([(0,r.Cb)({type:Boolean,reflect:!0})],or.prototype,"striped",void 0),sr([(0,r.Cb)({attribute:"label-align",reflect:!0})],or.prototype,"labelAlign",void 0),or=sr([b({bootstrap:rr,indigo:nr,fluent:lr})],or);const gr=or,dr=i.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-flow: column nowrap;
          flex-flow: column nowrap;
  font-family: var(--ig-font-family);
  overflow: hidden auto;
  height: auto;
  background: hsla(var(--ig-surface-500), var(--ig-surface-a));
}

:host([size=small]) {
  --component-size: var(--ig-size, var(--ig-size-small));
}

:host([size=medium]) {
  --component-size: var(--ig-size, var(--ig-size-medium));
}

:host([size=large]) {
  --component-size: var(--ig-size, var(--ig-size-large));
}`,hr=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.25rem), 0.25rem);
  background: var(--ig-gray-900-contrast);
  border: 0.0625rem solid hsla(var(--ig-gray-300), var(--ig-gray-a));
}`,cr=i.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  color: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
  background: inherit;
  padding-inline: max(var(--is-large, 1) * max(16px, -1 * 16px) * var(--ig-spacing-inline-large, var(--ig-spacing-inline, --ig-spacing)), var(--is-medium, 1) * max(8px, -1 * 8px) * var(--ig-spacing-inline-medium, var(--ig-spacing-inline, --ig-spacing)), var(--is-small, 1) * max(4px, -1 * 4px) * var(--ig-spacing-inline-small, var(--ig-spacing-inline, --ig-spacing)));
  padding-block: max(var(--is-large, 1) * max(8px, -1 * 8px) * var(--ig-spacing-block-large, var(--ig-spacing-block, --ig-spacing)), var(--is-medium, 1) * max(4px, -1 * 4px) * var(--ig-spacing-block-medium, var(--ig-spacing-block, --ig-spacing)), var(--is-small, 1) * max(2px, -1 * 2px) * var(--ig-spacing-block-small, var(--ig-spacing-block, --ig-spacing)));
  font-family: var(--ig-overline-font-family, var(--ig-font-family));
  font-size: var(--ig-overline-font-size);
  font-weight: var(--ig-overline-font-weight);
  font-style: var(--ig-overline-font-style);
  line-height: var(--ig-overline-line-height);
  letter-spacing: var(--ig-overline-letter-spacing);
  text-transform: var(--ig-overline-text-transform);
  margin-top: var(--ig-overline-margin-top);
  margin-bottom: var(--ig-overline-margin-bottom);
}

::slotted(*) {
  font: inherit;
  margin: inherit;
}`,br=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  color: hsla(var(--ig-primary-500), var(--ig-primary-a));
}`;let mr=class extends i.oi{constructor(){super()}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}render(){return i.dy`<slot></slot>`}};mr.tagName="igc-list-header",mr.styles=cr,mr=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n}([b({indigo:br})],mr);const pr=mr,vr=i.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  position: relative;
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
  background: hsla(var(--ig-surface-500), var(--ig-surface-a));
  -webkit-transition: background 0.15s ease-out;
  -o-transition: background 0.15s ease-out;
  transition: background 0.15s ease-out;
  padding-inline: max(var(--is-large, 1) * max(16px, -1 * 16px) * var(--ig-spacing-inline-large, var(--ig-spacing-inline, --ig-spacing)), var(--is-medium, 1) * max(8px, -1 * 8px) * var(--ig-spacing-inline-medium, var(--ig-spacing-inline, --ig-spacing)), var(--is-small, 1) * max(4px, -1 * 4px) * var(--ig-spacing-inline-small, var(--ig-spacing-inline, --ig-spacing)));
  padding-block: max(var(--is-large, 1) * max(8px, -1 * 8px) * var(--ig-spacing-block-large, var(--ig-spacing-block, --ig-spacing)), var(--is-medium, 1) * max(4px, -1 * 4px) * var(--ig-spacing-block-medium, var(--ig-spacing-block, --ig-spacing)), var(--is-small, 1) * max(2px, -1 * 2px) * var(--ig-spacing-block-small, var(--ig-spacing-block, --ig-spacing)));
}

:host(:hover),
:host(:focus-within) {
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
}

::slotted(*) {
  margin: 0;
  font: inherit;
  opacity: inherit;
}

[part=content] {
  -webkit-box-flex: 1;
      -ms-flex-positive: 1;
          flex-grow: 1;
}

[part=start],
[part=end] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

[name=start]::slotted(*) {
  -webkit-margin-end: max(var(--is-large, 1) * max(16px, -1 * 16px) * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * max(16px, -1 * 16px) * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * max(16px, -1 * 16px) * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
          margin-inline-end: max(var(--is-large, 1) * max(16px, -1 * 16px) * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * max(16px, -1 * 16px) * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * max(16px, -1 * 16px) * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
}

[name=end]::slotted(*) {
  -webkit-margin-start: max(var(--is-large, 1) * max(16px, -1 * 16px) * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * max(16px, -1 * 16px) * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * max(16px, -1 * 16px) * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
          margin-inline-start: max(var(--is-large, 1) * max(16px, -1 * 16px) * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * max(16px, -1 * 16px) * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * max(16px, -1 * 16px) * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
}

[part=title] {
  font-family: var(--ig-subtitle-1-font-family, var(--ig-font-family));
  font-size: var(--ig-subtitle-1-font-size);
  font-weight: var(--ig-subtitle-1-font-weight);
  font-style: var(--ig-subtitle-1-font-style);
  line-height: var(--ig-subtitle-1-line-height);
  letter-spacing: var(--ig-subtitle-1-letter-spacing);
  text-transform: var(--ig-subtitle-1-text-transform);
  margin-top: var(--ig-subtitle-1-margin-top);
  margin-bottom: var(--ig-subtitle-1-margin-bottom);
}

[part=subtitle] {
  font-family: var(--ig-caption-font-family, var(--ig-font-family));
  font-size: var(--ig-caption-font-size);
  font-weight: var(--ig-caption-font-weight);
  font-style: var(--ig-caption-font-style);
  line-height: var(--ig-caption-line-height);
  letter-spacing: var(--ig-caption-letter-spacing);
  text-transform: var(--ig-caption-text-transform);
  margin-top: var(--ig-caption-margin-top);
  margin-bottom: var(--ig-caption-margin-bottom);
  opacity: 0.74;
}`,yr=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  background: var(--ig-gray-900-contrast);
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
  border-bottom: 0.0625rem solid hsla(var(--ig-gray-200), var(--ig-gray-a));
}

:host(:hover),
:host(:focus-within) {
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
}

:host(:last-of-type) {
  border-bottom: none;
}

[part=title] {
  font-family: var(--ig-body-1-font-family, var(--ig-font-family));
  font-size: var(--ig-body-1-font-size);
  font-weight: var(--ig-body-1-font-weight);
  font-style: var(--ig-body-1-font-style);
  line-height: var(--ig-body-1-line-height);
  letter-spacing: var(--ig-body-1-letter-spacing);
  text-transform: var(--ig-body-1-text-transform);
  margin-top: var(--ig-body-1-margin-top);
  margin-bottom: var(--ig-body-1-margin-bottom);
}

[part=subtitle] {
  font-family: var(--ig-subtitle-1-font-family, var(--ig-font-family));
  font-size: var(--ig-subtitle-1-font-size);
  font-weight: var(--ig-subtitle-1-font-weight);
  font-style: var(--ig-subtitle-1-font-style);
  line-height: var(--ig-subtitle-1-line-height);
  letter-spacing: var(--ig-subtitle-1-letter-spacing);
  text-transform: var(--ig-subtitle-1-text-transform);
  margin-top: var(--ig-subtitle-1-margin-top);
  margin-bottom: var(--ig-subtitle-1-margin-bottom);
}`,ur=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
[part=title] {
  font-family: var(--ig-caption-font-family, var(--ig-font-family));
  font-size: var(--ig-caption-font-size);
  font-weight: var(--ig-caption-font-weight);
  font-style: var(--ig-caption-font-style);
  line-height: var(--ig-caption-line-height);
  letter-spacing: var(--ig-caption-letter-spacing);
  text-transform: var(--ig-caption-text-transform);
  margin-top: var(--ig-caption-margin-top);
  margin-bottom: var(--ig-caption-margin-bottom);
}

:host {
  border-bottom: 0.0625rem solid hsla(var(--ig-gray-100), var(--ig-gray-a));
}

:host(:hover),
:host(:focus-within) {
  background: var(--item-hover-bg, hsla(var(--ig-gray-200), var(--ig-gray-a)));
}

:host(:last-of-type) {
  border-bottom: none;
}`,xr=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
}
:host [part=subtitle] {
  font-family: var(--ig-body-2-font-family, var(--ig-font-family));
  font-size: var(--ig-body-2-font-size);
  font-weight: var(--ig-body-2-font-weight);
  font-style: var(--ig-body-2-font-style);
  line-height: var(--ig-body-2-line-height);
  letter-spacing: var(--ig-body-2-letter-spacing);
  text-transform: var(--ig-body-2-text-transform);
  margin-top: var(--ig-body-2-margin-top);
  margin-bottom: var(--ig-body-2-margin-bottom);
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
}

:host(:hover),
:host(:focus-within) {
  background: var(--item-hover-bg, hsla(var(--ig-gray-50), var(--ig-gray-a)));
}`;let fr=class extends i.oi{constructor(){super()}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem")}render(){return i.dy`
      <section part="start">
        <slot name="start"></slot>
      </section>
      <section part="content">
        <header part="header">
          <slot part="title" name="title"></slot>
          <slot part="subtitle" name="subtitle"></slot>
        </header>
        <slot></slot>
      </section>
      <section part="end">
        <slot name="end"></slot>
      </section>
    `}};fr.tagName="igc-list-item",fr.styles=vr,fr=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n}([b({bootstrap:yr,fluent:ur,indigo:xr})],fr);const wr=fr;k(wr,pr);let kr=class extends(p(i.oi)){constructor(){super()}connectedCallback(){super.connectedCallback(),this.setAttribute("role","list")}render(){return i.dy`<slot></slot>`}};kr.tagName="igc-list",kr.styles=dr,kr=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n}([b({bootstrap:hr})],kr);const zr=kr;var Cr=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n};class Dr extends ii{constructor(){super(...arguments),this._value="",this.valueMode="raw"}get value(){return this._value&&"raw"!==this.valueMode?this.maskedValue:this._value}set value(e){this._value=null!=e?e:"",this.maskedValue=this.parser.apply(this._value)}get mask(){return this._mask}set mask(e){this._mask=e,this.parser.mask=e,this.value&&(this.maskedValue=this.parser.apply(this._value))}promptChange(){this.parser.prompt=this.prompt,this.value&&(this.maskedValue=this.parser.apply(this._value))}async handleInvalidState(){await this.updateComplete,this.invalid=!this.checkValidity()}async updateInput(e,t){const{value:a,end:i}=this.parser.replace(this.maskedValue,e,t.start,t.end);this.maskedValue=a,this._value=this.parser.parse(a),this.requestUpdate(),t.start!==this.mask.length&&this.emitEvent("igcInput",{detail:this.value}),await this.updateComplete,this.input.setSelectionRange(i,i),this.invalid=!this.checkValidity()}handleDragEnter(){this.hasFocus||this._value||(this.maskedValue=this.parser.apply())}handleDragLeave(){this.hasFocus||this.updateMaskedValue()}async handleFocus(){this.hasFocus=!0,super.handleFocus(),this.readonly||this._value||(this.maskedValue=this.parser.apply(),await this.updateComplete,this.select())}handleBlur(){this.hasFocus=!1,this.updateMaskedValue(),super.handleBlur()}handleChange(){this.emitEvent("igcChange",{detail:this.value}),this.invalid=!this.checkValidity()}handleClick(){this.input.selectionStart===this.input.selectionEnd&&this.input.selectionStart===this.maskedValue.length&&this.select()}updateMaskedValue(){this.maskedValue===this.parser.apply()&&(this.maskedValue="")}setRangeText(e,t,a,i="preserve"){this.input.value=this.parser.replace(this.input.value,e,t,a).value,this.maskedValue=this.parser.apply(this.parser.parse(this.input.value)),this._value=this.parser.parse(this.maskedValue)}reportValidity(){const e=this._value?this.parser.isValidString(this.input.value):this.input.reportValidity();return this.invalid=!e,e}checkValidity(){return this.disabled?this.input.checkValidity():this._value?this.input.checkValidity()&&this.parser.isValidString(this.input.value):!this.required}renderInput(){var e;return i.dy`
      <input
        type="text"
        part=${$(this.resolvePartNames("input"))}
        name=${(0,n.o)(this.name)}
        .value=${(0,St.a)(this.maskedValue)}
        .placeholder=${(0,St.a)(null!==(e=this.placeholder)&&void 0!==e?e:this.parser.escapedMask)}
        ?readonly=${this.readonly}
        ?disabled=${this.disabled}
        ?required=${this.required}
        @dragenter=${this.handleDragEnter}
        @dragleave=${this.handleDragLeave}
        @dragstart=${this.handleDragStart}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @cut=${this.handleCut}
        @change=${this.handleChange}
        @click=${this.handleClick}
        @compositionstart=${this.handleCompositionStart}
        @compositionend=${this.handleCompositionEnd}
        @input=${this.handleInput}
        aria-invalid="${this.invalid?"true":"false"}"
        @invalid="${this.handleInvalid}"
        @keydown=${this.handleKeydown}
      />
    `}}Dr.tagName="igc-mask-input",Cr([(0,r.Cb)({attribute:"value-mode"})],Dr.prototype,"valueMode",void 0),Cr([(0,r.Cb)(),(e,t)=>{}],Dr.prototype,"value",null),Cr([(0,r.Cb)()],Dr.prototype,"mask",null),Cr([m("prompt")],Dr.prototype,"promptChange",null),Cr([m("required",{waitUntilFirstUpdate:!0}),m("disabled",{waitUntilFirstUpdate:!0}),m("value",{waitUntilFirstUpdate:!0})],Dr.prototype,"handleInvalidState",null);const Sr=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host [part=base] {
  background: var(--background, hsla(var(--ig-gray-700), var(--ig-gray-a)));
  border: none;
  -webkit-box-shadow: none;
          box-shadow: none;
}

:host([position=start]) [part=mini],
:host([position=end]) [part=mini] {
  background: var(--background, hsla(var(--ig-gray-700), var(--ig-gray-a)));
}`,Ir=i.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  -ms-flex-negative: 0;
      flex-shrink: 0;
  font-family: var(--ig-font-family);
}
:host [part=base] {
  position: fixed;
  height: 100%;
  min-height: 100%;
  overflow-x: hidden;
  top: 0;
  bottom: 0;
  inset-inline-start: 0;
  z-index: 999;
  background: hsla(var(--ig-surface-500), var(--ig-surface-a));
  border-radius: 0;
  -webkit-transition: all ease-out 0.3s, 0.3s;
  -o-transition: all ease-out 0.3s, 0.3s;
  transition: all ease-out 0.3s, 0.3s;
}
:host [part=main] {
  width: 16rem;
}
:host [part=mini] {
  width: 3.75rem;
}
:host [part=overlay] {
  background: hsla(var(--ig-gray-500), 0.54);
  position: fixed;
  inset: 0;
  z-index: 2;
}

:host([position=start]) [part=mini],
:host([position=end]) [part=mini] {
  background: hsla(var(--ig-surface-500), var(--ig-surface-a));
  -webkit-box-shadow: var(--ig-elevation-16);
          box-shadow: var(--ig-elevation-16);
  position: fixed;
  top: 0;
  bottom: 0;
}

:host([position=start]) [part=mini] {
  -webkit-border-end: 1px solid hsla(var(--ig-gray-900), 0.14);
          border-inline-end: 1px solid hsla(var(--ig-gray-900), 0.14);
  inset-inline-start: 0;
}

:host([position=end]) [part=mini] {
  -webkit-border-start: 1px solid hsla(var(--ig-gray-900), 0.14);
          border-inline-start: 1px solid hsla(var(--ig-gray-900), 0.14);
  inset-inline-end: 0;
}

:host([position=top]) [part=main],
:host([position=bottom]) [part=main] {
  width: 100%;
}
:host([position=top]) [part=base],
:host([position=bottom]) [part=base] {
  height: 50vh;
  min-height: initial;
  top: auto;
  width: 100%;
}

:host([position=top]) [part=base] {
  top: 0;
  bottom: auto;
}

:host(:not([open])[position=top]) [part=base],
:host(:not([open])[position=bottom]) [part=base] {
  -webkit-transform: translate3d(0, -60vh, 0);
          transform: translate3d(0, -60vh, 0);
}
:host(:not([open])[position=top]) [part=mini],
:host(:not([open])[position=bottom]) [part=mini] {
  display: none;
}

:host(:not([open])[position=bottom]) [part=base] {
  -webkit-transform: translate3d(0, 60vh, 0);
          transform: translate3d(0, 60vh, 0);
}

:host([open][position=end]) [part=base] {
  -webkit-border-end: none;
          border-inline-end: none;
  -webkit-border-start: 1px solid hsla(var(--ig-gray-900), 0.14);
          border-inline-start: 1px solid hsla(var(--ig-gray-900), 0.14);
  inset-inline-start: auto;
  inset-inline-end: 0;
}

:host([position=relative]) [part=base] {
  position: relative;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  -webkit-box-shadow: none;
          box-shadow: none;
  z-index: initial;
  -webkit-border-end: 1px solid hsla(var(--ig-gray-300), var(--ig-gray-a));
          border-inline-end: 1px solid hsla(var(--ig-gray-300), var(--ig-gray-a));
}
:host([position=relative]) [part=overlay] {
  display: none;
}

:host([open]) [part=mini] {
  display: none;
}

:host([open]:not([position=relative])) [part=base] {
  -webkit-border-end: 1px solid hsla(var(--ig-gray-900), 0.14);
          border-inline-end: 1px solid hsla(var(--ig-gray-900), 0.14);
  -webkit-box-shadow: var(--ig-elevation-16);
          box-shadow: var(--ig-elevation-16);
}

:host(:not([open])) [part=main] {
  display: none;
}
:host(:not([open])) [part=overlay] {
  display: none;
}`,$r=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  font-family: var(--ig-caption-font-family, var(--ig-font-family));
  font-size: var(--ig-caption-font-size);
  font-weight: var(--ig-caption-font-weight);
  font-style: var(--ig-caption-font-style);
  line-height: var(--ig-caption-line-height);
  letter-spacing: var(--ig-caption-letter-spacing);
  text-transform: var(--ig-caption-text-transform);
  margin-top: var(--ig-caption-margin-top);
  margin-bottom: var(--ig-caption-margin-bottom);
}`,Pr=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  color: hsla(var(--ig-gray-50), var(--ig-gray-a));
}`,Tr=i.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  display: block;
  padding: 1.25rem 1rem;
  white-space: nowrap;
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
  font-family: var(--ig-subtitle-1-font-family, var(--ig-font-family));
  font-size: var(--ig-subtitle-1-font-size);
  font-weight: var(--ig-subtitle-1-font-weight);
  font-style: var(--ig-subtitle-1-font-style);
  line-height: var(--ig-subtitle-1-line-height);
  letter-spacing: var(--ig-subtitle-1-letter-spacing);
  text-transform: var(--ig-subtitle-1-text-transform);
  margin-top: var(--ig-subtitle-1-margin-top);
  margin-bottom: var(--ig-subtitle-1-margin-bottom);
}`;let Er=class extends i.oi{render(){return i.dy`<slot></slot>`}};Er.tagName="igc-nav-drawer-header-item",Er.styles=Tr,Er=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n}([b({fluent:$r,indigo:Pr})],Er);const Mr=Er,Or=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
[part=content] {
  font-family: var(--ig-body-2-font-family, var(--ig-font-family));
  font-size: var(--ig-body-2-font-size);
  font-weight: var(--ig-body-2-font-weight);
  font-style: var(--ig-body-2-font-style);
  line-height: var(--ig-body-2-line-height);
  letter-spacing: var(--ig-body-2-letter-spacing);
  text-transform: var(--ig-body-2-text-transform);
  margin-top: var(--ig-body-2-margin-top);
  margin-bottom: var(--ig-body-2-margin-bottom);
}

:host([active]) [part=icon] {
  color: var(--active-icon-color, hsla(var(--ig-primary-500), var(--ig-primary-a)));
}`,Ar=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host [part~=base] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 1.5rem), 1.5rem);
  gap: 1.5rem;
  color: var(--text-color, hsla(var(--ig-gray-300), 0.8));
  padding: 0.25rem;
  margin: 0.9375rem 0.5rem;
}
:host [part~=base]:hover, :host [part~=base]:focus-within {
  background: transparent;
  color: var(--hover-text-color, hsla(var(--ig-gray-100), var(--ig-gray-a)));
}
:host [part=content] {
  -webkit-padding-start: 0.5rem;
          padding-inline-start: 0.5rem;
}

:host([active]) [part~=base] {
  background: var(--active-background, hsla(var(--ig-gray-600), 0.8));
  color: hsla(var(--ig-gray-50), var(--ig-gray-a));
}`,Vr=i.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
[part~=base] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.25rem), 0.25rem);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 2rem;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-flow: row nowrap;
          flex-flow: row nowrap;
  position: relative;
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
  max-height: 3rem;
  margin: 0.5rem;
  padding: 0.75rem 0.5rem;
  cursor: pointer;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  outline: transparent;
  white-space: nowrap;
  text-decoration: none;
  width: calc(100% - 1rem);
  border: none;
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  -webkit-transition: background 0.15s ease-out;
  -o-transition: background 0.15s ease-out;
  transition: background 0.15s ease-out;
}
[part~=base] ::slotted(igc-icon) {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font: inherit;
}
[part~=base]:hover, [part~=base]:focus-within {
  background: var(--hover-background, hsla(var(--ig-gray-200), 0.8));
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
}

[part=content] {
  white-space: nowrap;
  -o-text-overflow: ellipsis;
     text-overflow: ellipsis;
  overflow: hidden;
  font-family: var(--ig-subtitle-2-font-family, var(--ig-font-family));
  font-size: var(--ig-subtitle-2-font-size);
  font-weight: var(--ig-subtitle-2-font-weight);
  font-style: var(--ig-subtitle-2-font-style);
  line-height: var(--ig-subtitle-2-line-height);
  letter-spacing: var(--ig-subtitle-2-letter-spacing);
  text-transform: var(--ig-subtitle-2-text-transform);
  margin-top: var(--ig-subtitle-2-margin-top);
  margin-bottom: var(--ig-subtitle-2-margin-bottom);
}

[part="base mini"] {
  display: block;
}
[part="base mini"] [part=content] {
  display: none;
}
[part="base mini"] ::slotted(igc-icon) {
  width: 100%;
}

:host([disabled]) {
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  cursor: initial;
  pointer-events: none;
}
:host([disabled]) [part~=base] {
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}

:host([active]) [part~=base] {
  background: var(--active-background, hsla(var(--ig-primary-500), 0.12));
  color: var(--active-text-color, hsla(var(--ig-primary-500), var(--ig-primary-a)));
}`;var Lr=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n};let Rr=class extends i.oi{constructor(){super(...arguments),this.disabled=!1,this.active=!1}connectedCallback(){var e;super.connectedCallback(),null===(e=this.shadowRoot)||void 0===e||e.addEventListener("slotchange",(e=>{this._textLength=this._text.length}))}resolvePartNames(e){return{[e]:!0,mini:this._textLength<1}}render(){return i.dy`
      <div part="${$(this.resolvePartNames("base"))}">
        <span part="icon" .hidden="${0==this.navdrawerIcon.length}">
          <slot name="icon"></slot>
        </span>
        <span part="content">
          <slot name="content"></slot>
        </span>
      </div>
    `}};Rr.tagName="igc-nav-drawer-item",Rr.styles=Vr,Lr([(0,r.Cb)({type:Boolean,reflect:!0})],Rr.prototype,"disabled",void 0),Lr([(0,r.Cb)({type:Boolean,reflect:!0})],Rr.prototype,"active",void 0),Lr([(0,r.SB)()],Rr.prototype,"_textLength",void 0),Lr([(0,r.NH)({slot:"content"})],Rr.prototype,"_text",void 0),Lr([(0,r.vZ)({slot:"icon",flatten:!0})],Rr.prototype,"navdrawerIcon",void 0),Rr=Lr([b({fluent:Or,indigo:Ar})],Rr);const Fr=Rr;var _r=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n};k(Mr,Fr);let jr=class extends i.oi{constructor(){super(...arguments),this.position="start",this.open=!1}show(){this.open||(this.open=!0)}hide(){this.open&&(this.open=!1)}toggle(){this.open?this.hide():this.show()}resolvePartNames(e){const t=document.querySelector('div[slot="mini"]');return{[e]:!0,hidden:!(null!==t&&t.children.length>0)}}render(){return i.dy`
      <div part="overlay" @click=${this.hide}></div>
      <div part="base">
        <div part="main">
          <slot></slot>
        </div>

        <div part="${$(this.resolvePartNames("mini"))}">
          <slot name="mini"></slot>
        </div>
      </div>
    `}};jr.tagName="igc-nav-drawer",jr.styles=Ir,_r([(0,r.Cb)({reflect:!0})],jr.prototype,"position",void 0),_r([(0,r.Cb)({type:Boolean,reflect:!0})],jr.prototype,"open",void 0),jr=_r([b({indigo:Sr})],jr);const Br=jr,Xr=i.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  min-height: 3.5rem;
  max-height: 8rem;
  padding: 0 1rem;
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  color: var(--ig-primary-600-contrast);
  -webkit-box-shadow: var(--ig-elevation-4);
          box-shadow: var(--ig-elevation-4);
  font-family: var(--ig-font-family);
  z-index: 4;
}

[part=base] {
  display: inherit;
  position: relative;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-flow: row nowrap;
          flex-flow: row nowrap;
  -webkit-box-flex: 1;
      -ms-flex-positive: 1;
          flex-grow: 1;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  overflow: hidden;
}

[part=middle] {
  display: -webkit-inline-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-user-select: text;
     -moz-user-select: text;
      -ms-user-select: text;
          user-select: text;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
      -ms-flex-positive: 1;
          flex-grow: 1;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

[part=start],
[part=end] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}

[name=start]::slotted(*) {
  -webkit-margin-end: 1rem;
          margin-inline-end: 1rem;
  -webkit-margin-start: 0.0625rem;
          margin-inline-start: 0.0625rem;
}

[name=end]::slotted(*) {
  -webkit-margin-start: 1rem;
          margin-inline-start: 1rem;
  -webkit-margin-end: 0.0625rem;
          margin-inline-end: 0.0625rem;
}

::slotted(igc-avatar[part=base]) {
  max-width: 2rem;
  max-height: 2rem;
  min-height: 0;
  min-width: 0;
}

::slotted(igc-icon) {
  cursor: pointer;
  color: var(--ig-primary-600-contrast);
  width: 2rem;
  height: 2rem;
  font-size: 2rem;
}

::slotted(*) {
  font-family: var(--ig-h6-font-family, var(--ig-font-family));
  font-size: var(--ig-h6-font-size);
  font-weight: var(--ig-h6-font-weight);
  font-style: var(--ig-h6-font-style);
  line-height: var(--ig-h6-line-height);
  letter-spacing: var(--ig-h6-letter-spacing);
  text-transform: var(--ig-h6-text-transform);
  margin-top: var(--ig-h6-margin-top);
  margin-bottom: var(--ig-h6-margin-bottom);
  line-height: normal;
  margin: 0;
}`,Nr=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  padding: 0 0.5rem;
  background: hsla(var(--ig-surface-500), var(--ig-surface-a));
  color: var(--ig-surface-500-contrast);
  -webkit-box-shadow: none;
          box-shadow: none;
}

::slotted(igc-icon) {
  color: var(--ig-surface-500-contrast);
}

[part=base] {
  -webkit-padding-start: 0.25rem;
          padding-inline-start: 0.25rem;
  -webkit-padding-end: 0.25rem;
          padding-inline-end: 0.25rem;
}

::slotted(*) {
  font-family: var(--ig-h5-font-family, var(--ig-font-family));
  font-size: var(--ig-h5-font-size);
  font-weight: var(--ig-h5-font-weight);
  font-style: var(--ig-h5-font-style);
  line-height: var(--ig-h5-line-height);
  letter-spacing: var(--ig-h5-letter-spacing);
  text-transform: var(--ig-h5-text-transform);
  margin-top: var(--ig-h5-margin-top);
  margin-bottom: var(--ig-h5-margin-bottom);
  line-height: normal;
  margin: 0;
}`,Ur=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
::slotted(*) {
  font-family: var(--ig-subtitle-2-font-family, var(--ig-font-family));
  font-size: var(--ig-subtitle-2-font-size);
  font-weight: var(--ig-subtitle-2-font-weight);
  font-style: var(--ig-subtitle-2-font-style);
  line-height: var(--ig-subtitle-2-line-height);
  letter-spacing: var(--ig-subtitle-2-letter-spacing);
  text-transform: var(--ig-subtitle-2-text-transform);
  margin-top: var(--ig-subtitle-2-margin-top);
  margin-bottom: var(--ig-subtitle-2-margin-bottom);
  line-height: normal;
  margin: 0;
}`,Kr=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  -webkit-box-shadow: none;
          box-shadow: none;
}`;let Hr=class extends i.oi{render(){return i.dy`
      <div part="base">
        <span part="start">
          <slot name="start"></slot>
        </span>
        <span part="middle">
          <slot></slot>
        </span>
        <span part="end">
          <slot name="end"></slot>
        </span>
      </div>
    `}};Hr.tagName="igc-navbar",Hr.styles=Xr,Hr=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n}([b({bootstrap:Nr,fluent:Ur,indigo:Kr})],Hr);const Yr=Hr,qr=i.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
  font-family: var(--ig-font-family);
}

input[type=radio] {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: none;
  clip: rect(0, 0, 0, 0);
  outline: 0;
  pointer-events: none;
  overflow: hidden;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}

[part~=base] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  -webkit-transition: color 0.15s ease-in;
  -o-transition: color 0.15s ease-in;
  transition: color 0.15s ease-in;
}

[part~=label] {
  font-family: var(--ig-subtitle-1-font-family, var(--ig-font-family));
  font-size: var(--ig-subtitle-1-font-size);
  font-weight: var(--ig-subtitle-1-font-weight);
  font-style: var(--ig-subtitle-1-font-style);
  line-height: var(--ig-subtitle-1-line-height);
  letter-spacing: var(--ig-subtitle-1-letter-spacing);
  text-transform: var(--ig-subtitle-1-text-transform);
  margin-top: var(--ig-subtitle-1-margin-top);
  margin-bottom: var(--ig-subtitle-1-margin-bottom);
}

[part~=control] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * var(--size)), var(--size));
  --size: 1.25rem;
  position: relative;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  width: calc(var(--size) * 2);
  height: calc(var(--size) * 2);
  min-width: calc(var(--size) * 2);
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  -webkit-transition: background 0.15s ease-in;
  -o-transition: background 0.15s ease-in;
  transition: background 0.15s ease-in;
}
[part~=control]::before, [part~=control]::after {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * calc(var(--size) / 2)), calc(var(--size) / 2));
  position: absolute;
  content: "";
  width: var(--size);
  height: var(--size);
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transition: all 0.15s ease-in;
  -o-transition: all 0.15s ease-in;
  transition: all 0.15s ease-in;
}
[part~=control]::before {
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
  -webkit-transform: translate(-50%, -50%) scale(0.1);
      -ms-transform: translate(-50%, -50%) scale(0.1);
          transform: translate(-50%, -50%) scale(0.1);
  -webkit-transform-origin: center;
      -ms-transform-origin: center;
          transform-origin: center;
  z-index: 1;
}
[part~=control]::after {
  border: calc(var(--size) / 10) solid hsla(var(--ig-gray-600), var(--ig-gray-a));
}

[part="control checked"]::before {
  border-color: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
  background: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
  -webkit-transform: translate(-50%, -50%) scale(0.5);
      -ms-transform: translate(-50%, -50%) scale(0.5);
          transform: translate(-50%, -50%) scale(0.5);
}
[part="control checked"]::after {
  border-color: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
}

:host(:not([disabled])[invalid]) [part~=label] {
  color: hsla(var(--ig-error-500), var(--ig-error-a));
}
:host(:not([disabled])[invalid]) [part~=control]::after {
  border-color: hsla(var(--ig-error-500), var(--ig-error-a));
}

:host([disabled]) {
  pointer-events: none;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
:host([disabled]) [part~=label] {
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}
:host([disabled]) [part~=control]::after {
  border-color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}
:host([disabled]) [part="control checked"]::before {
  background: hsla(var(--ig-gray-400), var(--ig-gray-a));
  border-color: transparent;
}

:host([label-position=before]) [part~=label] {
  -webkit-box-ordinal-group: 0;
      -ms-flex-order: -1;
          order: -1;
}`,Wr=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host::part(base) {
  -webkit-transition: none;
  -o-transition: none;
  transition: none;
}

:host [part~=control] {
  --size: 1rem;
  width: var(--size);
  height: var(--size);
  min-width: var(--size);
  background: none;
  -webkit-transition: transparent;
  -o-transition: transparent;
  transition: transparent;
}
:host [part~=control]::before, :host [part~=control]::after {
  -webkit-transition: none;
  -o-transition: none;
  transition: none;
}
:host [part~=control]::before {
  -webkit-transform: translate(-50%, -50%) scale(0.375);
      -ms-transform: translate(-50%, -50%) scale(0.375);
          transform: translate(-50%, -50%) scale(0.375);
}
:host [part~=control]::after {
  width: inherit;
  height: inherit;
  min-width: inherit;
  border-color: hsla(var(--ig-gray-400), var(--ig-gray-a));
  border-width: calc(var(--size, 0.625rem) / 10);
}

:host(:focus-within) [part~=control] {
  -webkit-box-shadow: 0 0 0 calc(var(--size, 1rem) / 4) hsla(var(--ig-primary-100), var(--ig-primary-a));
          box-shadow: 0 0 0 calc(var(--size, 1rem) / 4) hsla(var(--ig-primary-100), var(--ig-primary-a));
}
:host(:focus-within) [part~=control]::after {
  border-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
}

:host [part="control checked"]::after {
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  border-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
}
:host [part="control checked"]::before {
  background: white;
}

:host(:not([disabled])[invalid]) [part~=control]::after {
  border-color: hsla(var(--ig-error-500), var(--ig-error-a));
}
:host(:not([disabled])[invalid]) [part="control checked"]::after {
  background: hsla(var(--ig-error-500), var(--ig-error-a));
}

:host([invalid]:focus-within) [part~=control] {
  -webkit-box-shadow: 0 0 0 calc(var(--size, 1rem) / 4) hsla(var(--ig-error-100), var(--ig-error-a));
          box-shadow: 0 0 0 calc(var(--size, 1rem) / 4) hsla(var(--ig-error-100), var(--ig-error-a));
}

:host([disabled]) [part=control]::after {
  border-color: hsla(var(--ig-gray-300), var(--ig-gray-a));
}
:host([disabled]) [part="control checked"]::after {
  background: hsla(var(--ig-primary-200), var(--ig-primary-a));
  border-color: hsla(var(--ig-primary-200), var(--ig-primary-a));
}
:host([disabled]) [part="control checked"]::before {
  background: white;
}`,Qr=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host [part~=base] {
  -webkit-transition-duration: 0.1s;
       -o-transition-duration: 0.1s;
          transition-duration: 0.1s;
  gap: 0.375rem;
}

:host [part~=control] {
  width: var(--size, 1.25rem);
  height: var(--size, 1.25rem);
  min-width: var(--size, 1.25rem);
  background: transparent;
  -webkit-transition: none;
  -o-transition: none;
  transition: none;
}
:host [part~=control]::before, :host [part~=control]::after {
  -webkit-transition-duration: 0.1s;
       -o-transition-duration: 0.1s;
          transition-duration: 0.1s;
}
:host [part~=control]::before {
  -webkit-transform: translate(-50%, -50%) scale(0.5);
      -ms-transform: translate(-50%, -50%) scale(0.5);
          transform: translate(-50%, -50%) scale(0.5);
}
:host [part~=control]::after {
  border: calc(var(--size, 20px) / 20) solid hsla(var(--ig-gray-900), var(--ig-gray-a));
}

:host [part~=label] {
  font-family: var(--ig-body-2-font-family, var(--ig-font-family));
  font-size: var(--ig-body-2-font-size);
  font-weight: var(--ig-body-2-font-weight);
  font-style: var(--ig-body-2-font-style);
  line-height: var(--ig-body-2-line-height);
  letter-spacing: var(--ig-body-2-letter-spacing);
  text-transform: var(--ig-body-2-text-transform);
  margin-top: var(--ig-body-2-margin-top);
  margin-bottom: var(--ig-body-2-margin-bottom);
}

:host(:hover) [part="control checked"]::after {
  border-color: var(--checked-hover-color, hsla(var(--ig-primary-800), var(--ig-primary-a)));
}
:host(:hover) [part="control checked"]::before {
  background: var(--checked-hover-color, hsla(var(--ig-primary-800), var(--ig-primary-a)));
}

:host(:hover) [part=control]::before,
:host(:focus-within) [part=control]::before {
  background: var(--hover-color, hsla(var(--ig-gray-700), var(--ig-gray-a)));
}

:host [part="control checked"]::before {
  background: var(--checked-color, hsla(var(--ig-primary-500), var(--ig-primary-a)));
}
:host [part="control checked"]::after {
  border-color: var(--checked-color, hsla(var(--ig-primary-500), var(--ig-primary-a)));
}

:host(:not([disabled])[invalid]) [part="control checked"]::before {
  background: hsla(var(--ig-error-500), var(--ig-error-a));
}
:host(:not([disabled])[invalid]) [part~=control]::after {
  border-color: hsla(var(--ig-error-500), var(--ig-error-a));
}

:host(:not([disabled])[invalid]:hover) [part="control checked"]::after {
  border-color: var(--invalid-hover-color, hsla(var(--ig-error-700), var(--ig-error-a)));
}
:host(:not([disabled])[invalid]:hover) [part="control checked"]::before {
  background: var(--invalid-hover-color, hsla(var(--ig-error-700), var(--ig-error-a)));
}

:host(:not([disabled])[invalid]:hover) [part=control]::after,
:host(:not([disabled])[invalid]:focus-within) [part=control]::after {
  border-color: hsla(var(--ig-error-500), var(--ig-error-a));
}
:host(:not([disabled])[invalid]:hover) [part=control]::before,
:host(:not([disabled])[invalid]:focus-within) [part=control]::before {
  background: hsla(var(--ig-error-500), var(--ig-error-a));
}

:host([disabled]) [part~=label] {
  color: var(--disabled-label-color, hsla(var(--ig-gray-500), var(--ig-gray-a)));
}
:host([disabled]) [part~=control]::after {
  border-color: var(--disabled-color, hsla(var(--ig-gray-400), var(--ig-gray-a)));
}
:host([disabled]) [part="control checked"]::before {
  background: var(--disabled-color, hsla(var(--ig-gray-400), var(--ig-gray-a)));
}

[part~=focused] {
  position: relative;
}
[part~=focused]::after {
  content: "";
  position: absolute;
  top: -0.125rem;
  left: -0.125rem;
  -webkit-box-shadow: 0 0 0 1px hsla(var(--ig-gray-700), var(--ig-gray-a));
          box-shadow: 0 0 0 1px hsla(var(--ig-gray-700), var(--ig-gray-a));
  width: calc(100% + (0.125rem * 2));
  height: calc(100% + (0.125rem * 2));
}`,Gr=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  font-weight: 600;
}

:host [part~=control] {
  width: var(--size, 1.25rem);
  height: var(--size, 1.25rem);
  min-width: var(--size, 1.25rem);
  -webkit-transition: none;
  -o-transition: none;
  transition: none;
  background: none;
}

:host(:not([invalid])) [part=control]::after {
  border-color: var(--border-color, hsla(var(--ig-gray-600), var(--ig-gray-a)));
}

:host(:hover) [part=control] {
  -webkit-box-shadow: 0 0 0 0.25rem hsla(var(--ig-gray-200), 0.87);
          box-shadow: 0 0 0 0.25rem hsla(var(--ig-gray-200), 0.87);
}

:host(:focus-within) [part=control] {
  -webkit-box-shadow: 0 0 0 0.25rem hsla(var(--ig-gray-300), 0.87);
          box-shadow: 0 0 0 0.25rem hsla(var(--ig-gray-300), 0.87);
}

:host(:not([invalid])) [part="control checked"]::after {
  border-color: var(--checked-color, hsla(var(--ig-secondary-500), var(--ig-secondary-a)));
}

:host(:not([invalid])) [part="control checked"]::before {
  background: var(--checked-color, hsla(var(--ig-secondary-500), var(--ig-secondary-a)));
  border-color: var(--checked-color, hsla(var(--ig-secondary-500), var(--ig-secondary-a)));
}

:host(:hover) [part="control checked"] {
  background: transparent;
  -webkit-box-shadow: 0 0 0 0.25rem hsla(var(--ig-secondary-100), 0.87);
          box-shadow: 0 0 0 0.25rem hsla(var(--ig-secondary-100), 0.87);
}

:host(:focus-within) [part="control checked"] {
  background: transparent;
  -webkit-box-shadow: 0 0 0 0.25rem hsla(var(--ig-secondary-200), 0.87);
          box-shadow: 0 0 0 0.25rem hsla(var(--ig-secondary-200), 0.87);
}

:host(:not([disabled])[invalid]) [part="control checked"]::before {
  background: hsla(var(--ig-error-500), var(--ig-error-a));
}

:host([invalid]:hover) [part~=control] {
  -webkit-box-shadow: 0 0 0 0.25rem hsla(var(--ig-error-100), 0.87);
          box-shadow: 0 0 0 0.25rem hsla(var(--ig-error-100), 0.87);
}

:host([invalid]:focus-within) [part~=control] {
  -webkit-box-shadow: 0 0 0 0.25rem hsla(var(--ig-error-200), 0.87);
          box-shadow: 0 0 0 0.25rem hsla(var(--ig-error-200), 0.87);
}

:host([disabled]) {
  pointer-events: none;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
:host([disabled]) [part=control]::after {
  background: transparent;
}

:host([disabled]) [part=control]::after,
:host([disabled]) [part="control checked"]::after {
  border-color: var(--disabled-color, hsla(var(--ig-gray-300), var(--ig-gray-a)));
}

:host([disabled]) [part="control checked"]::before {
  background: var(--disabled-color, hsla(var(--ig-gray-300), var(--ig-gray-a)));
}

:host([disabled]) [part~=label] {
  color: var(--disabled-color, hsla(var(--ig-gray-300), var(--ig-gray-a)));
}`,Zr=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
[part~=base] {
  gap: 0.125rem;
}
[part~=base]:hover [part=control] {
  background: var(--hover-background, hsla(var(--ig-gray-600), 0.06));
}
[part~=base]:focus-within [part=control] {
  background: var(--focus-background, hsla(var(--ig-gray-600), 0.12));
}

[part="base checked"]:hover [part~=control] {
  background: var(--hover-selected-background, hsla(var(--ig-secondary-500), 0.06));
}
[part="base checked"]:focus-within [part~=control] {
  background: var(--focus-selected-background, hsla(var(--ig-secondary-500), 0.12));
}

:host(:not([disabled])[invalid]) [part="control checked"]::before {
  background: hsla(var(--ig-error-500), var(--ig-error-a));
}
:host(:not([disabled])[invalid]) [part~=base]:hover [part~=control],
:host(:not([disabled])[invalid]) [part="base checked"]:hover [part~=control] {
  background: var(--hover-invalid-background, hsla(var(--ig-error-500), 0.06));
}
:host(:not([disabled])[invalid]) [part~=base]:focus-within [part~=control],
:host(:not([disabled])[invalid]) [part="base checked"]:focus-within [part~=control] {
  background: var(--focus-invalid-background, hsla(var(--ig-error-500), 0.12));
}`;var Jr,el=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n};let tl=Jr=class extends(z(i.oi)){constructor(){super(...arguments),this.inputId=`radio-${Jr.increment()}`,this.labelId=`radio-label-${this.inputId}`,this._tabIndex=0,this.focused=!1,this.hideLabel=!1,this.required=!1,this.checked=!1,this.disabled=!1,this.invalid=!1,this.labelPosition="after"}click(){this.input.click()}connectedCallback(){super.connectedCallback(),this.addEventListener("keyup",this.handleKeyUp)}disconnectedCallback(){this.removeEventListener("keyup",this.handleKeyUp),super.disconnectedCallback()}handleKeyUp(){this.focused||(this.focused=!0)}focus(e){this.input.focus(e)}blur(){this.input.blur()}reportValidity(){return this.input.reportValidity()}checkValidity(){return this.input.checkValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.invalid=!this.input.checkValidity()}handleMouseDown(e){e.preventDefault(),this.input.focus(),this.focused=!1}handleClick(){this.checked=!0}handleBlur(){this.emitEvent("igcBlur"),this.focused=!1}handleFocus(){this.emitEvent("igcFocus")}handleChange(){this.checked?(this.getSiblings().forEach((e=>{e.checked=!1,e._tabIndex=-1})),this.input.focus(),this._tabIndex=0,this.emitEvent("igcChange",{detail:this.checked})):this.required&&(this.required=!1,this.getAllInGroup()[0].required=!0)}getSiblings(){return this.getAllInGroup().filter((e=>e.name===this.name&&e!==this))}getAllInGroup(){const e=this.closest("igc-radio-group");return e?Array.from(e.querySelectorAll("igc-radio")):[]}async firstUpdated(){0===this.label.length&&(this.hideLabel=!0),await this.updateComplete}render(){return i.dy`
      <label
        part="${$({base:!0,checked:this.checked,focused:this.focused})}"
        for="${this.inputId}"
        @pointerdown="${this.handleMouseDown}"
      >
        <input
          id="${this.inputId}"
          type="radio"
          name="${(0,n.o)(this.name)}"
          value="${(0,n.o)(this.value)}"
          .required="${this.required}"
          .disabled="${this.disabled}"
          .checked="${(0,St.a)(this.checked)}"
          tabindex=${this._tabIndex}
          aria-checked="${this.checked?"true":"false"}"
          aria-disabled="${this.disabled?"true":"false"}"
          aria-labelledby="${this.ariaLabelledby?this.ariaLabelledby:this.labelId}"
          @click="${this.handleClick}"
          @blur="${this.handleBlur}"
          @focus="${this.handleFocus}"
        />
        <span
          part="${$({control:!0,checked:this.checked})}"
        ></span>
        <span
          .hidden="${this.hideLabel}"
          part="${$({label:!0,checked:this.checked})}"
          id="${this.labelId}"
        >
          <slot></slot>
        </span>
      </label>
    `}};tl.tagName="igc-radio",tl.styles=qr,tl.increment=M(),el([(0,r.IO)('input[type="radio"]',!0)],tl.prototype,"input",void 0),el([(0,r.vZ)({flatten:!0})],tl.prototype,"label",void 0),el([(0,r.SB)()],tl.prototype,"_tabIndex",void 0),el([(0,r.SB)()],tl.prototype,"focused",void 0),el([(0,r.SB)()],tl.prototype,"hideLabel",void 0),el([(0,r.Cb)()],tl.prototype,"name",void 0),el([(0,r.Cb)()],tl.prototype,"value",void 0),el([(0,r.Cb)({type:Boolean,reflect:!0})],tl.prototype,"required",void 0),el([(0,r.Cb)({type:Boolean}),(e,t)=>{}],tl.prototype,"checked",void 0),el([(0,r.Cb)({type:Boolean,reflect:!0})],tl.prototype,"disabled",void 0),el([(0,r.Cb)({type:Boolean,reflect:!0})],tl.prototype,"invalid",void 0),el([(0,r.Cb)({reflect:!0,attribute:"label-position"})],tl.prototype,"labelPosition",void 0),el([(0,r.Cb)({reflect:!0,attribute:"aria-labelledby"})],tl.prototype,"ariaLabelledby",void 0),el([(e,t)=>{}],tl.prototype,"focus",null),el([(e,t)=>{}],tl.prototype,"blur",null),el([m("checked",{waitUntilFirstUpdate:!0})],tl.prototype,"handleChange",null),tl=Jr=el([b({material:Zr,bootstrap:Wr,fluent:Qr,indigo:Gr})],tl);const al=tl,il=i.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

:host([alignment=vertical]) {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  gap: 0.5rem;
}

:host([alignment=horizontal]) {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  gap: 0.5rem;
}`,rl=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host([alignment=vertical]) {
  gap: 0;
}

:host([alignment=horizontal]) {
  gap: 1rem;
}`,ll=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host([alignment=horizontal]) {
  gap: 0.75rem;
}`;var nl=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n};k(al);let sl=class extends i.oi{constructor(){super(),this.alignment="vertical",this.handleKeydown=e=>{const{key:t}=e;if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t)){const a=this.radios.find((e=>e.checked));let i=this.radios.indexOf(a);const r=O(this);switch(t){case"ArrowUp":i+=-1;break;case"ArrowLeft":i+=r?-1:1;break;case"ArrowRight":i+=r?1:-1;break;default:i+=1}i<0&&(i=this.radios.length-1),i>this.radios.length-1&&(i=0),this.radios.forEach((e=>e.checked=!1)),this.radios[i].focus(),this.radios[i].checked=!0,e.preventDefault()}},this.addEventListener("keydown",this.handleKeydown),this.addEventListener("igcChange",this.updateRequiredState)}updateRequiredState(){this.radios.some((e=>e.required))&&(this.radios.forEach((e=>e.required=!1)),this.radios.some((e=>e.checked))?this.radios.filter((e=>e.checked))[0].required=!0:this.radios[0].required=!0)}render(){return i.dy`<slot @slotchange=${this.updateRequiredState}></slot>`}};sl.tagName="igc-radio-group",sl.styles=il,nl([(0,r.NH)({flatten:!0,selector:"igc-radio:not([disabled])"})],sl.prototype,"radios",void 0),nl([(0,r.Cb)({reflect:!0})],sl.prototype,"alignment",void 0),sl=nl([b({material:rl,fluent:ll})],sl);const ol=sl;var gl=a(1474);const dl=i.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  --symbol-full-color: hsla(var(--ig-warn-500), var(--ig-warn-a));
  --symbol-empty-color: hsla(var(--ig-gray-600), var(--ig-gray-a));
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  font-family: var(--ig-font-family);
  -webkit-box-align: start;
      -ms-flex-align: start;
          align-items: flex-start;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  gap: 0.25rem;
}

:host([size=large]) {
  --component-size: var(--ig-size, var(--ig-size-large));
}

:host([size=medium]) {
  --component-size: var(--ig-size, var(--ig-size-medium));
}

:host([size=small]) {
  --component-size: var(--ig-size, var(--ig-size-small));
}

[part=base] {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  gap: 0.25rem;
}

[part~=symbols] {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  padding: 0.125rem;
  gap: 0.125rem;
  inset-inline-start: 0;
}

[part~=value-label] {
  font-family: var(--ig-subtitle-1-font-family, var(--ig-font-family));
  font-size: var(--ig-subtitle-1-font-size);
  font-weight: var(--ig-subtitle-1-font-weight);
  font-style: var(--ig-subtitle-1-font-style);
  line-height: var(--ig-subtitle-1-line-height);
  letter-spacing: var(--ig-subtitle-1-letter-spacing);
  text-transform: var(--ig-subtitle-1-text-transform);
  margin-top: var(--ig-subtitle-1-margin-top);
  margin-bottom: var(--ig-subtitle-1-margin-bottom);
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
}

[part~=label] {
  font-family: var(--ig-caption-font-family, var(--ig-font-family));
  font-size: var(--ig-caption-font-size);
  font-weight: var(--ig-caption-font-weight);
  font-style: var(--ig-caption-font-style);
  line-height: var(--ig-caption-line-height);
  letter-spacing: var(--ig-caption-letter-spacing);
  text-transform: var(--ig-caption-text-transform);
  margin-top: var(--ig-caption-margin-top);
  margin-bottom: var(--ig-caption-margin-bottom);
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
  -webkit-padding-start: 0.25rem;
          padding-inline-start: 0.25rem;
  height: auto;
  width: auto;
  min-height: 0;
  min-width: 0;
  margin: 0;
}

:host(:not([disabled], [readonly])) [part~=symbols] {
  cursor: pointer;
}

:host([disabled]) {
  --symbol-full-color: hsla(var(--ig-warn-200), var(--ig-warn-a));
  --symbol-empty-color: hsla(var(--ig-gray-400), var(--ig-gray-a));
  --symbol-full-filter: grayscale(50%);
  --symbol-empty-filter: grayscale(100%) opacity(50%);
}
:host([disabled]) [part~=value-label],
:host([disabled]) [part~=label] {
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}
:host([disabled]) [part~=symbols] {
  cursor: initial;
}`,hl=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
[part=base] {
  gap: 0.4375rem;
}

[part~=label] {
  font-family: var(--ig-body-1-font-family, var(--ig-font-family));
  font-size: var(--ig-body-1-font-size);
  font-weight: var(--ig-body-1-font-weight);
  font-style: var(--ig-body-1-font-style);
  line-height: var(--ig-body-1-line-height);
  letter-spacing: var(--ig-body-1-letter-spacing);
  text-transform: var(--ig-body-1-text-transform);
  margin-top: var(--ig-body-1-margin-top);
  margin-bottom: var(--ig-body-1-margin-bottom);
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
}

[part~=value-label] {
  font-family: var(--ig-body-2-font-family, var(--ig-font-family));
  font-size: var(--ig-body-2-font-size);
  font-weight: var(--ig-body-2-font-weight);
  font-style: var(--ig-body-2-font-style);
  line-height: var(--ig-body-2-line-height);
  letter-spacing: var(--ig-body-2-letter-spacing);
  text-transform: var(--ig-body-2-text-transform);
  margin-top: var(--ig-body-2-margin-top);
  margin-bottom: var(--ig-body-2-margin-bottom);
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
}`,cl=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
[part=base],
:host {
  gap: 0.375rem;
}

[part~=label] {
  font-family: var(--ig-subtitle-2-font-family, var(--ig-font-family));
  font-size: var(--ig-subtitle-2-font-size);
  font-weight: var(--ig-subtitle-2-font-weight);
  font-style: var(--ig-subtitle-2-font-style);
  line-height: var(--ig-subtitle-2-line-height);
  letter-spacing: var(--ig-subtitle-2-letter-spacing);
  text-transform: var(--ig-subtitle-2-text-transform);
  margin-top: var(--ig-subtitle-2-margin-top);
  margin-bottom: var(--ig-subtitle-2-margin-bottom);
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
}

[part~=value-label] {
  font-family: var(--ig-body-2-font-family, var(--ig-font-family));
  font-size: var(--ig-body-2-font-size);
  font-weight: var(--ig-body-2-font-weight);
  font-style: var(--ig-body-2-font-style);
  line-height: var(--ig-body-2-line-height);
  letter-spacing: var(--ig-body-2-letter-spacing);
  text-transform: var(--ig-body-2-text-transform);
  margin-top: var(--ig-body-2-margin-top);
  margin-bottom: var(--ig-body-2-margin-bottom);
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
}

:host([disabled]) [part~=symbols-wrapper] {
  color: hsla(var(--ig-gray-200), var(--ig-gray-a));
}
:host([disabled]) [part~=value-label],
:host([disabled]) [part~=label] {
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}
:host([disabled]) [part="symbols-wrapper selected"] {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}`,bl=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  gap: 0.3125rem;
}

[part=base] {
  gap: 0.5rem;
}

[part~=label] {
  font-family: var(--ig-body-1-font-family, var(--ig-font-family));
  font-size: var(--ig-body-1-font-size);
  font-weight: var(--ig-body-1-font-weight);
  font-style: var(--ig-body-1-font-style);
  line-height: var(--ig-body-1-line-height);
  letter-spacing: var(--ig-body-1-letter-spacing);
  text-transform: var(--ig-body-1-text-transform);
  margin-top: var(--ig-body-1-margin-top);
  margin-bottom: var(--ig-body-1-margin-bottom);
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
}

[part~=value-label] {
  font-family: var(--ig-body-1-font-family, var(--ig-font-family));
  font-size: var(--ig-body-1-font-size);
  font-weight: var(--ig-body-1-font-weight);
  font-style: var(--ig-body-1-font-style);
  line-height: var(--ig-body-1-line-height);
  letter-spacing: var(--ig-body-1-letter-spacing);
  text-transform: var(--ig-body-1-text-transform);
  margin-top: var(--ig-body-1-margin-top);
  margin-bottom: var(--ig-body-1-margin-bottom);
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
}`,ml=i.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  --symbol-size: max(var(--is-large, 1) * max(2.25rem, -1 * 2.25rem), var(--is-medium, 1) * max(1.5rem, -1 * 1.5rem), var(--is-small, 1) * max(1.125rem, -1 * 1.125rem));
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  width: var(--symbol-size);
  height: var(--symbol-size);
}

[part~=symbol] {
  position: absolute;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  color: inherit;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  width: var(--symbol-size);
  height: var(--symbol-size);
  min-width: var(--symbol-size);
  min-height: var(--symbol-size);
  font-size: var(--symbol-size);
  font-family: sans-serif;
  line-height: 100%;
  letter-spacing: 0;
}
[part~=symbol] igc-icon {
  --size: var(--symbol-size);
}

[part="symbol full"] {
  color: var(--symbol-full-color);
}

[part="symbol empty"] {
  color: var(--symbol-empty-color);
}

::slotted(*) {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

::slotted(igc-icon) {
  --size: var(--symbol-size);
}

slot:not([name])::slotted(:not(igc-icon)) {
  -webkit-filter: var(--symbol-full-filter, grayscale(0));
          filter: var(--symbol-full-filter, grayscale(0));
}

[name=empty]::slotted(:not(igc-icon)) {
  -webkit-filter: var(--symbol-empty-filter, grayscale(1));
          filter: var(--symbol-empty-filter, grayscale(1));
}`;class pl extends i.oi{connectedCallback(){super.connectedCallback(),this.slot=this.slot.length>0?this.slot:"symbol"}render(){return i.dy`
      <div part="symbol full">
        <slot> </slot>
      </div>
      <div part="symbol empty">
        <slot name="empty"></slot>
      </div>
    `}}pl.tagName="igc-rating-symbol",pl.styles=[ml];var vl=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n};k(pl,U);let yl=class extends(p(z(i.oi))){get isInteractive(){return!(this.readonly||this.disabled)}get hasProjectedSymbols(){return this.ratingSymbols.length>0}get valueText(){const e=this.round(this.value);return this.valueFormat?this.valueFormat.replace(/\{0\}/gm,`${e}`).replace(/\{1\}/gm,`${this.max}`):`${e} of ${this.max}`}handleMaxChange(){this.hasProjectedSymbols?this.max=this.ratingSymbols.length:this.max=Math.max(0,this.max),this.max<this.value&&(this.value=this.max)}handleValueChange(){this.value=T(this.value,0,this.max)}handlePrecisionChange(){this.step=this.single?1:T(this.step,.001,1)}handleSelectionChange(){this.single&&(this.step=1,this.value=Math.ceil(this.value))}constructor(){super(),this.ratingSymbols=[],this.hoverValue=-1,this.hoverState=!1,this.max=5,this.step=1,this.value=0,this.disabled=!1,this.hoverPreview=!1,this.readonly=!1,this.single=!1,this.addEventListener("keydown",this.handleKeyDown)}handleClick({clientX:e}){if(!this.isInteractive)return;const t=this.calcNewValue(e);this.value===t?this.value=0:this.value=t,this.emitEvent("igcChange",{detail:this.value})}handleMouseMove({clientX:e}){if(!this.isInteractive)return;const t=this.calcNewValue(e);this.hoverValue!==t&&(this.hoverValue=t,this.emitEvent("igcHover",{detail:this.hoverValue}))}handleMouseEnter(){this.isInteractive&&(this.hoverState=!0)}handleMouseLeave(){this.isInteractive&&(this.hoverState=!1)}handleKeyDown({key:e}){if(!this.isInteractive)return;let t=this.value;const a=O(this);switch(e){case"ArrowUp":case"ArrowRight":t+=a?this.step:-this.step;break;case"ArrowDown":case"ArrowLeft":t-=a?this.step:-this.step;break;case"Home":t=this.step;break;case"End":t=this.max;break;default:return}this.value=T(t,0,this.max),t===this.value&&this.emitEvent("igcChange",{detail:this.value})}handleSlotChange(e){const t=e.target;this.ratingSymbols=t.assignedElements().filter((e=>e instanceof pl)),this.hasProjectedSymbols&&(this.max=this.ratingSymbols.length),this.requestUpdate()}calcNewValue(e){const{width:t,left:a,right:i}=this.container.getBoundingClientRect(),r=O(this)?(e-a)/t:(i-e)/t,l=this.round(this.max*r+this.step/2);return T(l,this.step,this.max)}getPrecision(e){const[t,a]=e.toString().split(".");return a?a.length:0}round(e){return e=Math.round(e/this.step)*this.step,Number(e.toFixed(this.getPrecision(this.step)))}clipSymbol(e,t=!0){const a=e+1-(this.hoverState?this.hoverValue:this.value),i=0===a||this.value===e+1?0:1,r=this.single?i:a,l=e=>T(100*e,0,100),n=`inset(0 ${l(t?r:1-r)}% 0 0)`,s=`inset(0 0 0 ${l(t?1-r:r)}%)`;return{backward:t?s:n,forward:t?n:s}}stepUp(e=1){this.value+=this.round(e*this.step)}stepDown(e=1){this.value-=this.round(e*this.step)}*renderSymbols(){const e=O(this);for(let t=0;t<this.max;t++){const{forward:a,backward:r}=this.clipSymbol(t,e);yield i.dy`<igc-rating-symbol exportparts="symbol, full, empty">
        <igc-icon
          collection="internal"
          name="star"
          style=${(0,ye.V)({clipPath:a})}
        ></igc-icon>
        <igc-icon
          collection="internal"
          name="star_border"
          style=${(0,ye.V)({clipPath:r})}
          slot="empty"
        ></igc-icon>
      </igc-rating-symbol>`}}clipProjected(){if(this.hasProjectedSymbols){const e=O(this);this.ratingSymbols.forEach(((t,a)=>{var i,r;const l=null===(i=t.shadowRoot)||void 0===i?void 0:i.querySelector('[part="symbol full"]'),n=null===(r=t.shadowRoot)||void 0===r?void 0:r.querySelector('[part="symbol empty"]'),{forward:s,backward:o}=this.clipSymbol(a,e);l&&(l.style.clipPath=s),n&&(n.style.clipPath=o)}))}}render(){const e=[this.value,this.hoverValue,this.max,this.step,this.single,this.hoverState,this.ratingSymbols];return i.dy`
      <label part="label" id="rating-label" ?hidden=${!this.label}
        >${this.label}</label
      >
      <div
        part="base"
        role="slider"
        tabindex=${(0,n.o)(this.disabled?void 0:0)}
        aria-labelledby="rating-label"
        aria-valuemin="0"
        aria-valuenow=${this.value}
        aria-valuemax=${this.max}
        aria-valuetext=${this.valueText}
      >
        <div
          aria-hidden="true"
          part="symbols"
          @click=${this.handleClick}
          @mouseenter=${this.hoverPreview?this.handleMouseEnter:i.Ld}
          @mouseleave=${this.hoverPreview?this.handleMouseLeave:i.Ld}
          @mousemove=${this.hoverPreview?this.handleMouseMove:i.Ld}
        >
          <slot name="symbol" @slotchange=${this.handleSlotChange}>
            ${(0,gl.l)(e,(()=>(this.clipProjected(),this.renderSymbols())))}
          </slot>
        </div>
        <label part="value-label" ?hidden=${0===this.valueLabel.length}>
          <slot name="value-label"></slot>
        </label>
      </div>
    `}};yl.tagName="igc-rating",yl.styles=[dl],vl([(0,r.IO)('[part="symbols"]',!0)],yl.prototype,"container",void 0),vl([(0,r.vZ)({slot:"value-label",flatten:!0})],yl.prototype,"valueLabel",void 0),vl([(0,r.SB)()],yl.prototype,"hoverValue",void 0),vl([(0,r.SB)()],yl.prototype,"hoverState",void 0),vl([(0,r.Cb)({type:Number})],yl.prototype,"max",void 0),vl([(0,r.Cb)({type:Number})],yl.prototype,"step",void 0),vl([(0,r.Cb)()],yl.prototype,"name",void 0),vl([(0,r.Cb)()],yl.prototype,"label",void 0),vl([(0,r.Cb)({attribute:"value-format"})],yl.prototype,"valueFormat",void 0),vl([(0,r.Cb)({type:Number})],yl.prototype,"value",void 0),vl([(0,r.Cb)({type:Boolean,reflect:!0})],yl.prototype,"disabled",void 0),vl([(0,r.Cb)({type:Boolean,reflect:!0,attribute:"hover-preview"})],yl.prototype,"hoverPreview",void 0),vl([(0,r.Cb)({type:Boolean,reflect:!0})],yl.prototype,"readonly",void 0),vl([(0,r.Cb)({type:Boolean})],yl.prototype,"single",void 0),vl([m("max")],yl.prototype,"handleMaxChange",null),vl([m("value")],yl.prototype,"handleValueChange",null),vl([m("step")],yl.prototype,"handlePrecisionChange",null),vl([m("single")],yl.prototype,"handleSelectionChange",null),yl=vl([b({fluent:cl,bootstrap:hl,indigo:bl})],yl);const ul=yl,xl=i.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

:host {
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  contain: content;
  overflow: hidden;
}`;class fl extends i.oi{constructor(){super(),this.handler=({clientX:e,clientY:t})=>{var a;const i=document.createElement("span"),{radius:r,top:l,left:n}=this.getDimensions(e,t),s={position:"absolute",display:"block",pointerEvents:"none",transformOrigin:"center",transform:"translate3d(0, 0, 0) scale(0)",willChange:"opacity, transform",margin:"0 !important",border:"none !important",width:`${r}px`,height:`${r}px`,borderRadius:"50%",top:`${l}px`,left:`${n}px`,background:"var(--color, hsl(var(--ig-gray-800)))"};Object.assign(i.style,s),null===(a=this.shadowRoot)||void 0===a||a.appendChild(i),i.animate([{opacity:.5,transform:"scale(.3)"},{opacity:0,transform:"scale(2)"}],{duration:600,fill:"forwards",easing:"linear"}).finished.then((()=>i.remove()))},this.addEventListener("mousedown",this.handler)}getDimensions(e,t){const{width:a,height:i,left:r,top:l}=this.getBoundingClientRect(),n=Math.max(a,i),s=Math.round(e-r-n/2);return{radius:n,top:Math.round(t-l-n/2),left:s}}render(){return i.dy`<div></div>`}}fl.tagName="igc-ripple",fl.styles=xl;const wl=i.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  display: block;
}

slot {
  display: none;
}

[part~=base] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: relative;
  -webkit-box-flex: 1;
      -ms-flex-positive: 1;
          flex-grow: 1;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  height: 3rem;
  -webkit-transition: all 0.2s ease-out;
  -o-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
  font-family: var(--ig-font-family);
}

[part=track] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 2rem), 2rem);
  position: relative;
  width: 100%;
  overflow: hidden;
}

[part=fill] {
  position: absolute;
  background: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
  border-radius: inherit;
}

[part=inactive] {
  position: absolute;
  width: 100%;
  top: 0.0625rem;
  background: hsla(var(--ig-secondary-500), 0.24);
  -webkit-transition: background 0.2s ease-out;
  -o-transition: background 0.2s ease-out;
  transition: background 0.2s ease-out;
  border-radius: inherit;
}

[part=steps] {
  position: absolute;
  width: 100%;
  height: 0.25rem;
  opacity: 0.85;
  -webkit-transition: opacity 0.2s ease-out;
  -o-transition: opacity 0.2s ease-out;
  transition: opacity 0.2s ease-out;
  top: 50%;
  -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
          transform: translateY(-50%);
  color: white;
}
[part=steps] svg {
  -webkit-clip-path: inset(0 0.1875rem 0 0.1875rem);
          clip-path: inset(0 0.1875rem 0 0.1875rem);
}
[part=steps] line {
  -webkit-transform: translateY(25%);
      -ms-transform: translateY(25%);
          transform: translateY(25%);
  stroke: currentcolor;
  stroke-width: 0.1875rem;
  stroke-linecap: round;
}

[part=ticks] {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: absolute;
  bottom: 0;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}
[part=ticks]:first-child {
  bottom: auto;
  top: 0;
  -webkit-box-align: end;
      -ms-flex-align: end;
          align-items: flex-end;
}
[part=ticks]:first-child [part=tick-label] {
  top: auto;
  bottom: 1.5rem;
}

[part=tick-group]:first-of-type {
  -webkit-margin-start: -0.0625rem;
          margin-inline-start: -0.0625rem;
}
[part=tick-group]:last-of-type {
  -webkit-margin-start: -0.0625rem;
          margin-inline-start: -0.0625rem;
}

[part=tick] {
  background: hsla(var(--ig-gray-500), var(--ig-gray-a));
  height: 0.5rem;
  width: 0.125rem;
}

[part=tick][data-primary=true] {
  height: 1rem;
}

[part=tick-label] {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
  position: absolute;
  top: 1.5rem;
  line-height: 0.7;
  opacity: 1;
  -webkit-transition: opacity 0.2s ease-in-out;
  -o-transition: opacity 0.2s ease-in-out;
  transition: opacity 0.2s ease-in-out;
  font-family: var(--ig-caption-font-family, var(--ig-font-family));
  font-size: var(--ig-caption-font-size);
  font-weight: var(--ig-caption-font-weight);
  font-style: var(--ig-caption-font-style);
  line-height: var(--ig-caption-line-height);
  letter-spacing: var(--ig-caption-letter-spacing);
  text-transform: var(--ig-caption-text-transform);
  margin-top: var(--ig-caption-margin-top);
  margin-bottom: var(--ig-caption-margin-bottom);
}

[part=tick-label-inner] {
  -webkit-margin-start: -50%;
          margin-inline-start: -50%;
}

[part=thumbs] {
  position: absolute;
  width: 100%;
  height: 0;
  cursor: default;
  inset-inline-start: 0;
}

[part~=thumb] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.625rem), 0.625rem);
  position: absolute;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  outline-style: none;
  -webkit-transition: border-radius 0.1s ease-out, -webkit-transform 0.1s ease-out;
  transition: border-radius 0.1s ease-out, -webkit-transform 0.1s ease-out;
  -o-transition: transform 0.1s ease-out, border-radius 0.1s ease-out;
  transition: transform 0.1s ease-out, border-radius 0.1s ease-out;
  transition: transform 0.1s ease-out, border-radius 0.1s ease-out, -webkit-transform 0.1s ease-out;
  background: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
}

[part=thumb-label] {
  position: absolute;
  top: calc((1.875rem + 1.25rem) * -1);
  pointer-events: none;
  height: 1.875rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

[part=thumb-label-inner] {
  font-family: var(--ig-caption-font-family, var(--ig-font-family));
  font-size: var(--ig-caption-font-size);
  font-weight: var(--ig-caption-font-weight);
  font-style: var(--ig-caption-font-style);
  line-height: var(--ig-caption-line-height);
  letter-spacing: var(--ig-caption-letter-spacing);
  text-transform: var(--ig-caption-text-transform);
  margin-top: var(--ig-caption-margin-top);
  margin-bottom: var(--ig-caption-margin-bottom);
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.125rem), 0.125rem);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  min-width: 2.5rem;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  white-space: nowrap;
  -webkit-margin-start: -50%;
          margin-inline-start: -50%;
  padding: 0 0.125rem;
  color: var(--ig-gray-700-contrast);
  background: hsla(var(--ig-gray-700), var(--ig-gray-a));
}
[part=thumb-label-inner]::after {
  content: "";
  position: absolute;
  top: 85%;
  border-left: 0.625rem solid transparent;
  border-right: 0.625rem solid transparent;
  border-top: 0.625rem solid hsla(var(--ig-gray-700), var(--ig-gray-a));
}

:host(:not([tick-label-rotation="0"])) [part=tick-label-inner] {
  -webkit-writing-mode: vertical-rl;
      -ms-writing-mode: tb-rl;
          writing-mode: vertical-rl;
  -webkit-margin-start: 0;
          margin-inline-start: 0;
  margin-block: -50%;
}

:host([tick-label-rotation="-90"]) [part=tick-label-inner] {
  -webkit-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
          transform: rotate(180deg);
}

:host([disabled]) {
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  pointer-events: none;
  cursor: initial;
}
:host([disabled]) [part=inactive] {
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
}
:host([disabled]) [part=fill],
:host([disabled]) [part=tick] {
  background: hsla(var(--ig-gray-400), var(--ig-gray-a));
}
:host([disabled]) [part=tick-label] {
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}
:host([disabled]) [part~=thumb] {
  background: hsla(var(--ig-gray-400), var(--ig-gray-a));
}
:host([disabled]) [part~=thumb]:focus::after {
  -webkit-transform: scale(0);
      -ms-transform: scale(0);
          transform: scale(0);
}
:host([disabled]):hover [part=inactive] {
  background: hsla(var(--ig-gray-400), var(--ig-gray-a));
}
:host([disabled]):hover [part~=thumb] {
  border-color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}`,kl=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
[part=track],
[part=inactive] {
  height: 0.5rem;
}

[part=fill] {
  display: none;
}

[part=inactive] {
  background: var(--inactive-background, hsla(var(--ig-secondary-500), 0.24));
}

[part~=thumb] {
  width: 1rem;
  height: 1rem;
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  top: calc((1rem - calc(1rem / 2)) * -1);
  -webkit-margin-start: calc((1rem - calc(1rem / 2)) * -1);
          margin-inline-start: calc((1rem - calc(1rem / 2)) * -1);
}
[part~=thumb]:focus {
  border: 0.0625rem solid hsla(var(--ig-surface-500), var(--ig-surface-a));
  -webkit-box-shadow: 0 0 0 0.1875rem hsla(var(--ig-primary-200), var(--ig-primary-a));
          box-shadow: 0 0 0 0.1875rem hsla(var(--ig-primary-200), var(--ig-primary-a));
}`,zl=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host(:hover) [part=fill] {
  background: var(--fill-hover-background, hsla(var(--ig-primary-500), var(--ig-primary-a)));
}
:host(:hover) [part~=thumb] {
  border-color: var(--thumb-hover-border, hsla(var(--ig-primary-700), var(--ig-primary-a)));
}

[part~=focused]::after {
  position: absolute;
  content: "";
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-box-shadow: 0 0 0 0.0625rem hsla(var(--ig-gray-700), var(--ig-gray-a));
          box-shadow: 0 0 0 0.0625rem hsla(var(--ig-gray-700), var(--ig-gray-a));
  width: calc(1rem + (0.125rem * 2));
  height: calc(1rem + (0.125rem * 2));
}

[part=track],
[part=fill],
[part=inactive] {
  height: 0.25rem;
}

[part=inactive] {
  background: var(--inactive-background, hsla(var(--ig-gray-600), var(--ig-gray-a)));
  top: initial;
}

[part=fill] {
  background: var(--fill-background, hsla(var(--ig-gray-800), var(--ig-gray-a)));
}

[part~=thumb] {
  background: hsla(var(--ig-surface-500), var(--ig-surface-a));
  border: 0.125rem solid var(--thumb-border, hsla(var(--ig-gray-700), var(--ig-gray-a)));
  width: 1rem;
  height: 1rem;
  top: calc((1rem - 0.5rem) * -1);
  -webkit-margin-start: calc((1rem - 0.5rem) * -1);
          margin-inline-start: calc((1rem - 0.5rem) * -1);
}

[part=thumb-label-inner] {
  background: var(--fill-hover-background, hsla(var(--ig-primary-500), var(--ig-primary-a)));
}
[part=thumb-label-inner]::after {
  border-top: 0.625rem solid var(--fill-hover-background, hsla(var(--ig-primary-500), var(--ig-primary-a)));
}

:host([disabled]) [part=inactive] {
  background: var(--inactive-disabled-background, hsla(var(--ig-gray-100), var(--ig-gray-a)));
}
:host([disabled]) [part=fill] {
  background: var(--fill-disabled-background, hsla(var(--ig-gray-500), var(--ig-gray-a)));
}
:host([disabled]) [part~=thumb] {
  background: hsla(var(--ig-surface-500), var(--ig-surface-a));
  border-color: var(--thumb-disabled-border, hsla(var(--ig-gray-400), var(--ig-gray-a)));
}`,Cl=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
[part=base]:hover [part=inactive] {
  background: var(--inactive-hover-background, hsla(var(--ig-gray-500), var(--ig-gray-a)));
}
[part=base]:hover [part=fill] {
  background: hsla(var(--ig-primary-400), var(--ig-primary-a));
}

[part=inactive] {
  background: var(--inactive-background, hsla(var(--ig-gray-400), var(--ig-gray-a)));
}

[part=track],
[part=fill],
[part=inactive] {
  height: 0.125rem;
  top: initial;
  border-radius: initial;
}

[part=steps] {
  height: 0.125rem;
}
[part=steps] line {
  -webkit-transform: none;
      -ms-transform: none;
          transform: none;
}

[part~=thumb] {
  width: 0.875rem;
  height: 0.875rem;
  top: calc((0.875rem - 0.4375rem) * -1);
  -webkit-margin-start: calc((0.875rem - 0.4375rem) * -1);
          margin-inline-start: calc((0.875rem - 0.4375rem) * -1);
}
[part~=thumb]:focus {
  -webkit-box-shadow: 0 0 0 0.1875rem hsla(var(--ig-primary-200), var(--ig-primary-a));
          box-shadow: 0 0 0 0.1875rem hsla(var(--ig-primary-200), var(--ig-primary-a));
}
[part~=thumb]::after {
  display: none;
}

:host([disabled]) [part~=thumb],
:host([disabled]) [part=fill],
:host([disabled]) [part=inactive] {
  background: hsla(var(--ig-gray-300), var(--ig-gray-a));
}`,Dl=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
[part=track] {
  height: 0.375rem;
}

[part=fill] {
  height: 0.375rem;
}

[part=inactive] {
  height: 0.25rem;
  top: 0.0625rem;
}

[part=steps] {
  color: hsla(var(--ig-secondary-200), var(--ig-secondary-a));
}

[part~=thumb] {
  width: 1.25rem;
  height: 1.25rem;
  top: calc((1.25rem - 0.625rem) * -1);
  -webkit-margin-start: calc((1.25rem - 0.625rem) * -1);
          margin-inline-start: calc((1.25rem - 0.625rem) * -1);
}
[part~=thumb]::after {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 1.25rem), 1.25rem);
  position: absolute;
  content: "";
  width: 2.5rem;
  height: 2.5rem;
  background: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
  top: calc(50% - 1.25rem);
  inset-inline-start: calc(50% - 1.25rem);
  opacity: 0;
  -webkit-transform: scale(0);
      -ms-transform: scale(0);
          transform: scale(0);
  -webkit-transform-origin: center center;
      -ms-transform-origin: center center;
          transform-origin: center center;
  -webkit-transition: opacity 0.1s ease-out, -webkit-transform 0.1s ease-out;
  transition: opacity 0.1s ease-out, -webkit-transform 0.1s ease-out;
  -o-transition: transform 0.1s ease-out, opacity 0.1s ease-out;
  transition: transform 0.1s ease-out, opacity 0.1s ease-out;
  transition: transform 0.1s ease-out, opacity 0.1s ease-out, -webkit-transform 0.1s ease-out;
  overflow: hidden;
}
[part~=thumb]:hover::after {
  opacity: 0.12;
  -webkit-transform: scale(1);
      -ms-transform: scale(1);
          transform: scale(1);
}
[part~=thumb]:focus::after {
  opacity: 0.18;
  -webkit-transform: scale(1);
      -ms-transform: scale(1);
          transform: scale(1);
}
[part~=thumb]:active::after {
  opacity: 0.24;
}`;class Sl extends i.oi{createRenderRoot(){return this}}Sl.styles=i.iv`
    :host {
      display: none;
    }
  `,Sl.tagName="igc-slider-label";var Il=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n};k(Sl);let $l=class extends i.oi{set min(e){if(e<this.max){const t=this._min;this._min=this.labels?0:e,this.requestUpdate("min",t),"number"==typeof this.lowerBound&&this.lowerBound<e&&(this.lowerBound=e)}}get min(){return this._min}set max(e){if(e>this.min){const t=this._max;this._max=this.labels?this.labels.length-1:e,this.requestUpdate("max",t),"number"==typeof this.upperBound&&this.upperBound>e&&(this.upperBound=e)}}get max(){return this._max}set lowerBound(e){const t=this._lowerBound;this._lowerBound="number"==typeof e?this.valueInRange(e,this.min,this.actualMax):e,this.requestUpdate("lowerBound",t)}get lowerBound(){return this._lowerBound}set upperBound(e){const t=this._upperBound;this._upperBound="number"==typeof e?this.valueInRange(e,this.actualMin,this.max):e,this.requestUpdate("upperBound",t)}get upperBound(){return this._upperBound}set step(e){const t=this._step;this._step=this.labels?1:e,this.requestUpdate("step",t)}get step(){return this._step}constraintsChange(){this.normalizeValue()}labelsChange(){this.labels&&(this.min=0,this.max=this.labels.length-1,this.step=1)}constructor(){super(),this._min=0,this._max=100,this._step=1,this.pointerCaptured=!1,this.thumbLabelsVisible=!1,this.disabled=!1,this.discreteTrack=!1,this.hideTooltip=!1,this.primaryTicks=0,this.secondaryTicks=0,this.tickOrientation="end",this.hidePrimaryLabels=!1,this.hideSecondaryLabels=!1,this.locale="en",this.tickLabelRotation=0,this.pointerDown=e=>{var t;this.closestHandle(e).focus(),this.startValue=this.activeValue,this.updateSlider(e.clientX),this.setPointerCapture(e.pointerId),this.pointerCaptured=!0,this.showThumbLabels(),e.preventDefault(),null===(t=this.activeThumb)||void 0===t||t.part.remove("focused")},this.pointerMove=e=>{this.pointerCaptured&&this.updateSlider(e.clientX)},this.lostPointerCapture=()=>{this.pointerCaptured=!1,this.hideThumbLabels(),this.startValue!==this.activeValue&&this.emitChangeEvent(),this.startValue=void 0},this.handleKeydown=e=>{if(this.disabled)return;const{key:t}=e;let a=0;const i=this.activeValue,r=this.step?this.step:1,l=O(this);switch(t){case"ArrowLeft":a+=l?-r:r;break;case"ArrowRight":a+=l?r:-r;break;case"ArrowUp":a=r;break;case"ArrowDown":a=-r;break;case"Home":a=this.actualMin-i;break;case"End":a=this.actualMax-i;break;case"PageUp":a=Math.max((this.actualMax-this.actualMin)/10,r);break;case"PageDown":a=-Math.max((this.actualMax-this.actualMin)/10,r);break;default:return}if(a){const e=this.updateValue(a);this.showThumbLabels(),this.hideThumbLabels(),e&&this.emitChangeEvent()}},this.handleThumbPointerEnter=()=>{this.showThumbLabels()},this.handleThumbPointerLeave=()=>{this.hideThumbLabels()},this.addEventListener("pointerdown",this.pointerDown),this.addEventListener("pointermove",this.pointerMove),this.addEventListener("lostpointercapture",this.lostPointerCapture),this.addEventListener("keydown",this.handleKeydown)}connectedCallback(){super.connectedCallback(),this.normalizeValue(),this.addEventListener("keyup",this.handleKeyUp)}disconnectedCallback(){this.removeEventListener("keyup",this.handleKeyUp),super.disconnectedCallback()}handleKeyUp(){var e;null===(e=this.activeThumb)||void 0===e||e.part.add("focused")}handleSlotChange(){this.labels=this.labelElements&&this.labelElements.length?this.labelElements.map((e=>e.textContent)):void 0}get activeValue(){return 0}normalizeValue(){}getTrackStyle(){return{}}updateValue(e){return!1}renderThumbs(){return i.dy``}emitInputEvent(){}emitChangeEvent(){}get actualMin(){return"number"==typeof this.lowerBound?this.lowerBound:this.min}get actualMax(){return"number"==typeof this.upperBound?this.upperBound:this.max}validateValue(e){return e=this.valueInRange(e,this.actualMin,this.actualMax),this.normalizeByStep(e)}formatValue(e){return this.valueFormat?this.valueFormat.replace("{0}",e.toLocaleString(this.locale,this.valueFormatOptions)):e.toLocaleString(this.locale,this.valueFormatOptions)}normalizeByStep(e){return this.step?e-(e-this.actualMin)%this.step:e}closestHandle(e){return this.thumb}totalTickCount(){const e=this.labels?this.primaryTicks>0?this.labels.length:0:1===this.primaryTicks?2:this.primaryTicks;return e>0?(e-1)*this.secondaryTicks+e:this.secondaryTicks>0?this.secondaryTicks:0}tickValue(e){const t=this.totalTickCount(),a=(t>1?(this.max-this.min)/(t-1):this.max-this.min)*e;return this.min+a}isPrimary(e){return!(this.primaryTicks<=0)&&e%(this.secondaryTicks+1)==0}showThumbLabels(){this.disabled||this.hideTooltip||(this.thumbHoverTimer&&(clearTimeout(this.thumbHoverTimer),this.thumbHoverTimer=null),this.thumbLabelsVisible=!0)}hideThumbLabels(){!this.pointerCaptured&&this.thumbLabelsVisible&&(this.thumbHoverTimer=setTimeout((()=>{this.thumbLabelsVisible=!1}),750))}valueInRange(e,t=0,a=100){return Math.max(Math.min(e,a),t)}valueToFraction(e){return(e-this.min)/(this.max-this.min)}calculateTrackUpdate(e){if(!this.activeThumb)return 0;const t=this.activeThumb.getBoundingClientRect(),a=(t.right-t.left)/2,i=t.left+a,r=this.getBoundingClientRect().width/(this.max-this.min),l=O(this)?e-i:i-e;if(this.step){const e=r*this.step,t=e/2;return Math.abs(l)<t?0:Math.round(l/e)*this.step}return l/r}updateSlider(e){if(this.disabled)return;const t=this.calculateTrackUpdate(e);this.activeThumb&&0!==t&&this.updateValue(t)}renderTicks(){const e=[];for(let t=0,a=this.totalTickCount();t<a;t++){const a=this.isPrimary(t);e.push(i.dy`
        <div part="tick-group">
          <div part="tick" data-primary=${a}>
            ${(a?this.hidePrimaryLabels:this.hideSecondaryLabels)?i.dy``:i.dy`
                  <div part="tick-label">
                    <span part="tick-label-inner">
                      ${this.labels?a?this.labels[Math.round(t/(this.secondaryTicks+1))]:"":this.formatValue(this.tickValue(t))}
                    </span>
                  </div>
                `}
          </div>
        </div>
      `)}return e}renderThumb(e,t,a){const r=100*this.valueToFraction(e)+"%";return i.dy`
      <div
        part="thumb"
        id=${(0,n.o)(a)}
        tabindex=${this.disabled?-1:0}
        style=${(0,ye.V)({insetInlineStart:r})}
        role="slider"
        aria-valuemin=${this.actualMin}
        aria-valuemax=${this.actualMax}
        aria-valuenow=${e}
        aria-valuetext=${(0,n.o)(this.labels?this.labels[e]:this.valueFormat||this.valueFormatOptions?this.formatValue(e):void 0)}
        aria-label=${(0,n.o)(t)}
        aria-disabled=${this.disabled?"true":"false"}
        @pointerenter=${this.handleThumbPointerEnter}
        @pointerleave=${this.handleThumbPointerLeave}
        @focus=${e=>this.activeThumb=e.target}
        @blur=${()=>{var e;return null===(e=this.activeThumb)||void 0===e||e.part.remove("focused"),this.activeThumb=void 0}}
      ></div>
      ${this.hideTooltip?i.dy``:i.dy`
            <div
              part="thumb-label"
              style=${(0,ye.V)({opacity:this.thumbLabelsVisible?"1":"0",insetInlineStart:r})}
            >
              <div part="thumb-label-inner">
                ${this.labels?this.labels[e]:this.formatValue(e)}
              </div>
            </div>
          `}
    `}renderSteps(){if(!this.discreteTrack||!this.step)return i.dy``;const e=100/((this.max-this.min)/this.step)*10/10;return i.dy`
      <div part="steps">
        <svg width="100%" height="100%" style="display: flex">
          <line
            x1="0"
            y1="1"
            x2="100%"
            y2="1"
            stroke="currentColor"
            stroke-dasharray="0, calc(${e*Math.sqrt(2)}%)"
            stroke-linecap="round"
            stroke-width="2px"
          ></line>
        </svg>
      </div>
    `}render(){return i.dy`
      <div part="base">
        ${"mirror"===this.tickOrientation||"start"===this.tickOrientation?i.dy`<div part="ticks">${this.renderTicks()}</div>`:i.dy``}
        <div part="track">
          <div part="inactive"></div>
          <div part="fill" style=${(0,ye.V)(this.getTrackStyle())}></div>
          ${this.renderSteps()}
        </div>
        ${"start"!==this.tickOrientation?i.dy`<div part="ticks">${this.renderTicks()}</div>`:i.dy``}
        <div part="thumbs">${this.renderThumbs()}</div>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};$l.styles=wl,Il([(0,r.IO)("[part~='thumb']")],$l.prototype,"thumb",void 0),Il([(0,r.NH)({selector:"igc-slider-label"})],$l.prototype,"labelElements",void 0),Il([(0,r.SB)()],$l.prototype,"thumbLabelsVisible",void 0),Il([(0,r.SB)()],$l.prototype,"labels",void 0),Il([(0,r.Cb)({type:Number})],$l.prototype,"min",null),Il([(0,r.Cb)({type:Number})],$l.prototype,"max",null),Il([(0,r.Cb)({type:Number,attribute:"lower-bound"})],$l.prototype,"lowerBound",null),Il([(0,r.Cb)({type:Number,attribute:"upper-bound"})],$l.prototype,"upperBound",null),Il([(0,r.Cb)({type:Boolean,reflect:!0})],$l.prototype,"disabled",void 0),Il([(0,r.Cb)({type:Boolean,attribute:"discrete-track"})],$l.prototype,"discreteTrack",void 0),Il([(0,r.Cb)({type:Boolean,attribute:"hide-tooltip"})],$l.prototype,"hideTooltip",void 0),Il([(0,r.Cb)({type:Number})],$l.prototype,"step",null),Il([(0,r.Cb)({type:Number,attribute:"primary-ticks"})],$l.prototype,"primaryTicks",void 0),Il([(0,r.Cb)({type:Number,attribute:"secondary-ticks"})],$l.prototype,"secondaryTicks",void 0),Il([(0,r.Cb)({attribute:"tick-orientation"})],$l.prototype,"tickOrientation",void 0),Il([(0,r.Cb)({type:Boolean,attribute:"hide-primary-labels"})],$l.prototype,"hidePrimaryLabels",void 0),Il([(0,r.Cb)({type:Boolean,attribute:"hide-secondary-labels"})],$l.prototype,"hideSecondaryLabels",void 0),Il([(0,r.Cb)()],$l.prototype,"locale",void 0),Il([(0,r.Cb)({attribute:"value-format"})],$l.prototype,"valueFormat",void 0),Il([(0,r.Cb)({attribute:!1})],$l.prototype,"valueFormatOptions",void 0),Il([(0,r.Cb)({type:Number,reflect:!0,attribute:"tick-label-rotation"}),(e,t)=>{}],$l.prototype,"tickLabelRotation",void 0),Il([m("min",{waitUntilFirstUpdate:!0}),m("max",{waitUntilFirstUpdate:!0}),m("lowerBound",{waitUntilFirstUpdate:!0}),m("upperBound",{waitUntilFirstUpdate:!0}),m("step",{waitUntilFirstUpdate:!0})],$l.prototype,"constraintsChange",null),Il([m("labels")],$l.prototype,"labelsChange",null),$l=Il([b({material:Dl,bootstrap:kl,fluent:zl,indigo:Cl}),ne],$l);var Pl=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n};class Tl extends(z($l)){constructor(){super(...arguments),this._lower=0,this._upper=0}set lower(e){const t=this._lower;this._lower=this.validateValue(e),this.requestUpdate("lower",t)}get lower(){return this._lower}set upper(e){const t=this._upper;this._upper=this.validateValue(e),this.requestUpdate("upper",t)}get upper(){return this._upper}get activeValue(){return this.activeThumb===this.thumbFrom?this.lower:this.upper}normalizeValue(){this._lower=this.validateValue(this._lower),this._upper=this.validateValue(this._upper)}getTrackStyle(){const e=this.valueToFraction(this.upper),t=this.valueToFraction(this.lower);return{width:100*(e-t)+"%",insetInlineStart:100*t+"%"}}closestTo(e,t){return t.reduce(((t,a)=>Math.abs(e-a)<Math.abs(e-t)?a:t))}closestHandle(e){const t=this.thumbFrom.offsetLeft+this.thumbFrom.offsetWidth/2,a=this.thumbTo.offsetLeft+this.thumbTo.offsetWidth/2,i=e.clientX-this.getBoundingClientRect().left,r=this.closestTo(i,[t,a]);return t===a&&a<i?this.thumbTo:t===a&&a>i||r===t?this.thumbFrom:this.thumbTo}updateValue(e){const t=this.activeValue;let a=this.lower,i=this.upper;return this.activeThumb===this.thumbFrom?a+=e:i+=e,a>=i?(this.swapValues(a,i),this.toggleActiveThumb()):this.activeThumb===this.thumbFrom?this.lower=a:this.upper=i,t!==this.activeValue&&(this.emitInputEvent(),!0)}emitInputEvent(){this.emitEvent("igcInput",{detail:{lower:this.lower,upper:this.upper}})}emitChangeEvent(){this.emitEvent("igcChange",{detail:{lower:this.lower,upper:this.upper}})}swapValues(e,t){this.lower=t,this.upper=e}toggleActiveThumb(){(this.activeThumb===this.thumbFrom?this.thumbTo:this.thumbFrom).focus()}handleFocus(e){var t,a;this.activeThumb=e.target;const i=null===(t=this.activeThumb)||void 0===t?void 0:t.id,r=null===(a=this.shadowRoot)||void 0===a?void 0:a.querySelectorAll('div[part="thumb"]');null==r||r.forEach((e=>{var t;if(e.id!==i){const a=parseFloat(this.activeThumb.ariaValueNow),i=parseFloat(e.ariaValueNow),r=Math.min(a,i),l=Math.max(a,i);null===(t=this.activeThumb)||void 0===t||t.setAttribute("aria-valuetext",`${this.formatValue(r)} - ${this.formatValue(l)}`)}}))}renderThumb(e,t,a){const r=100*this.valueToFraction(e)+"%",l="thumbFrom"===a?`min ${this.lower}`:`max ${this.upper}`,s=this.labels?this.labels[e]:this.valueFormat||this.valueFormatOptions?this.formatValue(e):l;return i.dy`
      <div
        part="thumb"
        id=${(0,n.o)(a)}
        tabindex=${this.disabled?-1:0}
        style=${(0,ye.V)({insetInlineStart:r})}
        role="slider"
        aria-valuemin=${this.actualMin}
        aria-valuemax=${this.actualMax}
        aria-valuenow=${e}
        aria-valuetext=${(0,n.o)(s)}
        aria-label=${(0,n.o)(t)}
        aria-disabled=${this.disabled?"true":"false"}
        @pointerenter=${this.handleThumbPointerEnter}
        @pointerleave=${this.handleThumbPointerLeave}
        @focus=${e=>this.handleFocus(e)}
        @blur=${()=>{var e;return null===(e=this.activeThumb)||void 0===e||e.part.remove("focused"),this.activeThumb=void 0}}
      ></div>
      ${this.hideTooltip?i.dy``:i.dy`
            <div
              part="thumb-label"
              style=${(0,ye.V)({opacity:this.thumbLabelsVisible?"1":"0",insetInlineStart:r})}
            >
              <div part="thumb-label-inner">
                ${this.labels?this.labels[e]:this.formatValue(e)}
              </div>
            </div>
          `}
    `}renderThumbs(){return i.dy`${this.renderThumb(this.lower,this.ariaLabelLower,"thumbFrom")}
    ${this.renderThumb(this.upper,this.ariaLabelUpper,"thumbTo")}`}}Tl.tagName="igc-range-slider",Pl([(0,r.IO)("#thumbFrom")],Tl.prototype,"thumbFrom",void 0),Pl([(0,r.IO)("#thumbTo")],Tl.prototype,"thumbTo",void 0),Pl([(0,r.Cb)({type:Number})],Tl.prototype,"lower",null),Pl([(0,r.Cb)({type:Number})],Tl.prototype,"upper",null),Pl([(0,r.Cb)({attribute:"aria-label-lower"})],Tl.prototype,"ariaLabelLower",void 0),Pl([(0,r.Cb)({attribute:"aria-label-upper"})],Tl.prototype,"ariaLabelUpper",void 0);const El=i.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  font-family: var(--ig-font-family);
  position: fixed;
  bottom: 0;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
}

[part~=base] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.25rem), 0.25rem);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: row nowrap;
      flex-wrap: row nowrap;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  min-height: 3rem;
  padding: 0.4375rem 1.5rem;
  margin: 0.5rem;
  gap: 1.5rem;
  color: var(--ig-gray-900-contrast);
  background: hsla(var(--ig-gray-900), 0.9);
  -webkit-box-shadow: var(--ig-elevation-4);
          box-shadow: var(--ig-elevation-4);
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
  -webkit-backdrop-filter: blur(8px);
          backdrop-filter: blur(8px);
}

[part~=message] {
  font-family: var(--ig-body-2-font-family, var(--ig-font-family));
  font-size: var(--ig-body-2-font-size);
  font-weight: var(--ig-body-2-font-weight);
  font-style: var(--ig-body-2-font-style);
  line-height: var(--ig-body-2-line-height);
  letter-spacing: var(--ig-body-2-letter-spacing);
  text-transform: var(--ig-body-2-text-transform);
  margin-top: var(--ig-body-2-margin-top);
  margin-bottom: var(--ig-body-2-margin-bottom);
  display: -webkit-inline-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-box-flex: 1;
      -ms-flex: 1 1 50%;
          flex: 1 1 50%;
}

:host([action-text]) igc-button::part(base) {
  text-transform: uppercase;
  font-weight: 600;
}
:host([action-text]) igc-button::part(base):hover::before {
  background: transparent;
}
:host([action-text]) igc-button::part(base):focus {
  background: transparent;
  outline: none;
  -webkit-box-shadow: none;
          box-shadow: none;
}
:host([action-text]) igc-button::part(base):focus::before {
  background: transparent;
}

:host(:not([open])) [part=base] {
  display: none;
}`,Ml=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
[part~=base] {
  background: hsla(var(--ig-surface-500), var(--ig-surface-a));
  color: var(--ig-surface-500-contrast);
  -webkit-box-shadow: var(--ig-elevation-10);
          box-shadow: var(--ig-elevation-10);
}

igc-button::part(base):hover {
  color: hsla(var(--ig-primary-500), var(--ig-primary-a));
}`,Ol=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
[part~=base] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.125rem), 0.125rem);
}

[part~=message] {
  font-family: var(--ig-caption-font-family, var(--ig-font-family));
  font-size: var(--ig-caption-font-size);
  font-weight: var(--ig-caption-font-weight);
  font-style: var(--ig-caption-font-style);
  line-height: var(--ig-caption-line-height);
  letter-spacing: var(--ig-caption-letter-spacing);
  text-transform: var(--ig-caption-text-transform);
  margin-top: var(--ig-caption-margin-top);
  margin-bottom: var(--ig-caption-margin-bottom);
}

igc-button::part(base),
igc-button::part(base):hover {
  color: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
}

igc-button::part(base):focus-visible::after {
  display: none;
}`,Al=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
[part~=base] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.375rem), 0.375rem);
  background: var(--background-color, hsla(var(--ig-gray-700), 0.9));
  color: var(--text-color, var(--ig-gray-700-contrast));
}

igc-button::part(base),
igc-button::part(base):hover {
  color: var(--text-color, var(--ig-gray-700-contrast));
}`;var Vl=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n};k(ve);let Ll=class extends(z(i.oi)){constructor(){super(...arguments),this.open=!1,this.displayTime=4e3,this.keepOpen=!1}show(){this.open||(this.open=!0,clearTimeout(this.autoHideTimeout),this.open&&!this.keepOpen&&(this.autoHideTimeout=window.setTimeout((()=>this.hide()),this.displayTime)))}hide(){this.open&&(this.open=!1,clearTimeout(this.autoHideTimeout))}toggle(){this.open?this.hide():this.show()}handleClick(){this.emitEvent("igcAction")}render(){return i.dy`
      <div part="base">
        <span part="message">
          <slot></slot>
        </span>
        ${this.actionText?i.dy`
              <igc-button
                variant="flat"
                part="action"
                size="small"
                @click=${this.handleClick}
              >
                ${(0,n.o)(this.actionText)}
              </igc-button>
            `:i.Ld}
      </div>
    `}};Ll.tagName="igc-snackbar",Ll.styles=El,Vl([(0,r.Cb)({type:Boolean,reflect:!0})],Ll.prototype,"open",void 0),Vl([(0,r.Cb)({type:Number,attribute:"display-time"})],Ll.prototype,"displayTime",void 0),Vl([(0,r.Cb)({type:Boolean,attribute:"keep-open"})],Ll.prototype,"keepOpen",void 0),Vl([(0,r.Cb)({attribute:"action-text"})],Ll.prototype,"actionText",void 0),Ll=Vl([b({bootstrap:Ml,fluent:Ol,indigo:Al})],Ll);const Rl=Ll;var Fl=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n};class _l extends(z($l)){constructor(){super(...arguments),this._value=0}set value(e){const t=this._value;this._value=this.validateValue(e),this.requestUpdate("value",t)}get value(){return this._value}set ariaLabel(e){const t=this._ariaLabel;this._ariaLabel=e,this.hasAttribute("aria-label")&&this.removeAttribute("aria-label"),this.requestUpdate("ariaLabel",t)}get ariaLabel(){return this._ariaLabel}get activeValue(){return this.value}normalizeValue(){this._value=this.validateValue(this._value)}getTrackStyle(){return{width:100*this.valueToFraction(this.value)+"%"}}updateValue(e){const t=this.value;return this.value=this.value+e,t!==this.value&&(this.emitInputEvent(),!0)}emitInputEvent(){this.emitEvent("igcInput",{detail:this.value})}emitChangeEvent(){this.emitEvent("igcChange",{detail:this.value})}stepUp(e=1){this.value=this.value+e*this.step}stepDown(e=1){this.value=this.value-e*this.step}renderThumbs(){return i.dy`${this.renderThumb(this.value,this.ariaLabel)}`}}_l.tagName="igc-slider",Fl([(0,r.Cb)({type:Number})],_l.prototype,"value",null),Fl([(0,r.Cb)({attribute:"aria-label"})],_l.prototype,"ariaLabel",null);const jl=i.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  display: block;
}

:host([alignment=start]) [part=headers-scroll] ::slotted(igc-tab:last-of-type) {
  -webkit-margin-end: auto;
          margin-inline-end: auto;
}

:host([alignment=end]) [part=headers-scroll] ::slotted(igc-tab:first-of-type) {
  -webkit-margin-start: auto;
          margin-inline-start: auto;
}

:host([alignment=center]) [part=headers-scroll] ::slotted(igc-tab:first-of-type) {
  -webkit-margin-start: auto;
          margin-inline-start: auto;
}
:host([alignment=center]) [part=headers-scroll] ::slotted(igc-tab:last-of-type) {
  -webkit-margin-end: auto;
          margin-inline-end: auto;
}

:host([alignment=justify]) [part=headers-scroll] ::slotted(igc-tab) {
  -ms-flex-preferred-size: 100px;
      flex-basis: 100px;
  -webkit-box-flex: 1;
      -ms-flex-positive: 1;
          flex-grow: 1;
  max-width: 100%;
}

[part=headers] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  overflow: hidden;
  min-height: 2.625rem;
  background: hsla(var(--ig-surface-500), var(--ig-surface-a));
}

[part=headers-content] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
          flex: 1 1 auto;
  scroll-behavior: smooth;
  overflow: hidden;
}

[part=headers-wrapper] {
  position: relative;
  -webkit-box-flex: 1;
      -ms-flex-positive: 1;
          flex-grow: 1;
}

[part=headers-scroll] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
}

[part=selected-indicator] {
  position: absolute;
  inset-inline-start: 0;
  bottom: 0;
  -webkit-transform: translateX(0);
      -ms-transform: translateX(0);
          transform: translateX(0);
  height: 0.125rem;
  min-width: 5.625rem;
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  -webkit-transition: width 0.2s cubic-bezier(0.35, 0, 0.25, 1), -webkit-transform 0.3s cubic-bezier(0.35, 0, 0.25, 1);
  transition: width 0.2s cubic-bezier(0.35, 0, 0.25, 1), -webkit-transform 0.3s cubic-bezier(0.35, 0, 0.25, 1);
  -o-transition: transform 0.3s cubic-bezier(0.35, 0, 0.25, 1), width 0.2s cubic-bezier(0.35, 0, 0.25, 1);
  transition: transform 0.3s cubic-bezier(0.35, 0, 0.25, 1), width 0.2s cubic-bezier(0.35, 0, 0.25, 1);
  transition: transform 0.3s cubic-bezier(0.35, 0, 0.25, 1), width 0.2s cubic-bezier(0.35, 0, 0.25, 1), -webkit-transform 0.3s cubic-bezier(0.35, 0, 0.25, 1);
}

[part=start-scroll-button],
[part=end-scroll-button] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  z-index: 1;
  border: none;
  padding: 0;
  min-width: 3rem;
  width: 3rem;
  cursor: pointer;
  position: relative;
  background: hsla(var(--ig-surface-500), var(--ig-surface-a));
}
[part=start-scroll-button]:hover, [part=start-scroll-button]:focus,
[part=end-scroll-button]:hover,
[part=end-scroll-button]:focus {
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
}
[part=start-scroll-button] ::slotted(*),
[part=end-scroll-button] ::slotted(*) {
  -webkit-box-shadow: none;
          box-shadow: none;
}

igc-icon-button::part(base) {
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}
igc-icon-button::part(base):hover, igc-icon-button::part(base):focus-within {
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
  background: transparent;
  -webkit-box-shadow: none;
          box-shadow: none;
}

igc-icon-button[disabled]::part(base) {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}

:host([dir=rtl]) [part=start-scroll-button],
:host([dir=rtl]) [part=end-scroll-button] {
  -webkit-transform: scaleX(-1);
      -ms-transform: scaleX(-1);
          transform: scaleX(-1);
}`,Bl=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
[part=headers] {
  background: hsla(var(--ig-surface-500), var(--ig-surface-a));
}

[part=headers-wrapper]::after {
  content: "";
  position: absolute;
  bottom: 0;
  inset-inline-start: 0;
  width: 100%;
  height: 0.0625rem;
  background: hsla(var(--ig-gray-300), var(--ig-gray-a));
  z-index: 0;
}

igc-icon-button::part(base) {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}
igc-icon-button::part(base):hover, igc-icon-button::part(base):focus-within {
  color: hsla(var(--ig-gray-600), var(--ig-gray-a));
}

igc-icon-button[disabled]::part(base) {
  color: hsla(var(--ig-primary-500), 0.5);
}

[part=selected-indicator] {
  display: none;
}`,Xl=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
igc-icon-button::part(base) {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}
igc-icon-button::part(base):hover, igc-icon-button::part(base):focus-within {
  color: hsla(var(--ig-gray-600), var(--ig-gray-a));
}

igc-icon-button[disabled]::part(base) {
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
  background: inherit;
}`,Nl=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
[part=headers] {
  background: transparent;
}

[part=start-scroll-button],
[part=end-scroll-button] {
  background: transparent;
}
[part=start-scroll-button]:hover, [part=start-scroll-button]:focus,
[part=end-scroll-button]:hover,
[part=end-scroll-button]:focus {
  background: transparent;
}

[part=selected-indicator] {
  background: hsla(var(--ig-primary-400), var(--ig-primary-a));
}`,Ul={attributes:!0,attributeFilter:["selected"],childList:!0,subtree:!0};function Kl(e,...t){return!t||t.includes(e.nodeName.toLowerCase())}const Hl=i.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -ms-flex-negative: 0;
      flex-shrink: 0;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  min-width: 5.625rem;
  max-width: 22.5rem;
  word-wrap: break-word;
  padding: 0.75rem 1rem;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  -webkit-transition: all 0.3s cubic-bezier(0.35, 0, 0.25, 1);
  -o-transition: all 0.3s cubic-bezier(0.35, 0, 0.25, 1);
  transition: all 0.3s cubic-bezier(0.35, 0, 0.25, 1);
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  background: hsla(var(--ig-surface-500), var(--ig-surface-a));
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}

:host(:hover),
:host(:focus-within) {
  background: var(--hover-background, hsla(var(--ig-gray-200), var(--ig-gray-a)));
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}

:host([selected]) {
  color: hsla(var(--ig-primary-500), var(--ig-primary-a));
}
:host([selected]) ::slotted(igc-icon) {
  color: hsla(var(--ig-primary-500), var(--ig-primary-a));
}

:host([selected]:hover),
:host([selected]:focus-within) {
  color: hsla(var(--ig-primary-500), var(--ig-primary-a));
}

:host([disabled]) {
  pointer-events: none;
  cursor: initial;
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
}

[part=base] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  outline-style: none;
  gap: 0.5rem;
}

[part=content] {
  font-family: var(--ig-button-font-family, var(--ig-font-family));
  font-size: var(--ig-button-font-size);
  font-weight: var(--ig-button-font-weight);
  font-style: var(--ig-button-font-style);
  line-height: var(--ig-button-line-height);
  letter-spacing: var(--ig-button-letter-spacing);
  text-transform: var(--ig-button-text-transform);
  margin-top: var(--ig-button-margin-top);
  margin-bottom: var(--ig-button-margin-bottom);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  text-align: center;
  outline-style: none;
}
[part=content] ::slotted(*) {
  display: -webkit-inline-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
[part=content] ::slotted(igc-icon:not(:only-child)) {
  margin-bottom: 0.5rem;
}

::slotted(igc-icon) {
  --size: 1.5rem;
}`,Yl=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  background: transparent;
  -webkit-transition: none;
  -o-transition: none;
  transition: none;
  border-start-start-radius: 0.25rem;
  border-start-end-radius: 0.25rem;
  color: hsla(var(--ig-primary-500), var(--ig-primary-a));
}

:host(:hover) {
  background: transparent;
  color: var(--hover-color, hsla(var(--ig-primary-700), var(--ig-primary-a)));
  -webkit-box-shadow: inset 0 0 0 0.0625rem hsla(var(--ig-gray-200), var(--ig-gray-a));
          box-shadow: inset 0 0 0 0.0625rem hsla(var(--ig-gray-200), var(--ig-gray-a));
}

:host([selected]) {
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
  position: relative;
  -webkit-box-shadow: inset 0 0 0 0.0625rem hsla(var(--ig-gray-300), var(--ig-gray-a));
          box-shadow: inset 0 0 0 0.0625rem hsla(var(--ig-gray-300), var(--ig-gray-a));
}
:host([selected]) ::slotted(igc-icon) {
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
}
:host([selected])::after {
  content: "";
  position: absolute;
  bottom: 0;
  inset-inline-start: 0;
  width: 100%;
  height: 0.0625rem;
  background: hsla(var(--ig-surface-500), var(--ig-surface-a));
  z-index: 1;
}

:host([selected]:hover) {
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
  border-top-color: hsla(var(--ig-gray-300), var(--ig-gray-a));
  border-inline-color: hsla(var(--ig-gray-300), var(--ig-gray-a));
  border-bottom-color: hsla(var(--ig-surface-500), var(--ig-surface-a));
}

:host(:focus-within),
:host([selected]:focus-within) {
  color: var(--hover-color, hsla(var(--ig-primary-700), var(--ig-primary-a)));
  background: transparent;
  -webkit-box-shadow: inset 0 0 0 0.125rem hsla(var(--ig-primary-700), var(--ig-primary-a));
          box-shadow: inset 0 0 0 0.125rem hsla(var(--ig-primary-700), var(--ig-primary-a));
  border-radius: 0.25rem;
  z-index: 1;
}
:host(:focus-within)::after,
:host([selected]:focus-within)::after {
  display: none;
}

:host([selected]:focus-within) {
  color: hsla(var(--ig-gray-800), var(--ig-gray-a));
}

:host([disabled]) {
  color: hsla(var(--ig-primary-500), 0.5);
}`,ql=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
}
:host ::slotted(igc-icon) {
  color: hsla(var(--ig-gray-700), var(--ig-gray-a));
}

:host(:hover),
:host(:focus-within) {
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
}

:host([disabled]) {
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}
:host([disabled]) ::slotted(igc-icon) {
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}`,Wl=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  background: transparent;
}

:host(:hover),
:host(:focus-within) {
  background: transparent;
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
}

:host([selected]) {
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
}
:host([selected]) ::slotted(igc-icon) {
  color: hsla(var(--ig-primary-400), var(--ig-primary-a));
}

:host([selected]:hover),
:host([selected]:focus-within) {
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
}`;var Ql,Gl=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n};let Zl=Ql=class extends i.oi{constructor(){super(...arguments),this.panel="",this.selected=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.id=this.getAttribute("id")||`igc-tab-${Ql.increment()}`}focus(e){this.tab.focus(e)}blur(){this.tab.blur()}render(){return i.dy`
      <div
        part="base"
        role="tab"
        aria-disabled=${this.disabled?"true":"false"}
        aria-selected=${this.selected?"true":"false"}
        tabindex=${this.disabled||!this.selected?-1:0}
      >
        <slot name="prefix" part="prefix"></slot>
        <div part="content">
          <slot></slot>
        </div>
        <slot name="suffix" part="suffix"></slot>
      </div>
    `}};Zl.tagName="igc-tab",Zl.styles=Hl,Zl.increment=M(),Gl([(0,r.IO)('[part="base"]',!0)],Zl.prototype,"tab",void 0),Gl([(0,r.Cb)()],Zl.prototype,"panel",void 0),Gl([(0,r.Cb)({type:Boolean,reflect:!0})],Zl.prototype,"selected",void 0),Gl([(0,r.Cb)({type:Boolean,reflect:!0})],Zl.prototype,"disabled",void 0),Zl=Ql=Gl([b({bootstrap:Yl,fluent:ql,indigo:Wl})],Zl);const Jl=Zl,en=i.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  overflow: hidden;
  -webkit-box-flex: 1;
      -ms-flex-positive: 1;
          flex-grow: 1;
}`;class tn extends i.oi{connectedCallback(){super.connectedCallback(),this.setAttribute("role","tabpanel"),this.tabIndex=this.hasAttribute("tabindex")?this.tabIndex:0,this.slot=this.slot.length>0?this.slot:"panel",this.id=this.getAttribute("id")||`igc-tab-panel-${tn.increment()}`}render(){return i.dy`<slot></slot>`}}tn.tagName="igc-tab-panel",tn.styles=en,tn.increment=M();var an,rn=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n};k(Jl,tn,er);let ln=an=class extends(z(i.oi)){constructor(){super(...arguments),this.showScrollButtons=!1,this.disableStartScrollButton=!0,this.disableEndScrollButton=!1,this.alignment="start",this.activation="auto",this.handleKeyDown=e=>{var t;const{key:a}=e,i=this.enabledTabs,r=O(this);let l=i.indexOf(null===(t=document.activeElement)||void 0===t?void 0:t.closest("igc-tab"));switch(a){case"ArrowLeft":l=r?(i.length+l-1)%i.length:(l+1)%i.length;break;case"ArrowRight":l=r?(l+1)%i.length:(i.length+l-1)%i.length;break;case"Home":l=0;break;case"End":l=i.length-1;break;case"Enter":case" ":this.setSelectedTab(i[l]);break;default:return}i[l].focus({preventScroll:!0}),"auto"===this.activation?(this.setSelectedTab(i[l]),this.emitEvent("igcChange",{detail:this.activeTab})):i[l].scrollIntoView({block:"nearest"}),e.preventDefault()}}get enabledTabs(){return this.tabs.filter((e=>!e.disabled))}get selected(){var e,t;return null!==(t=null===(e=this.activeTab)||void 0===e?void 0:e.panel)&&void 0!==t?t:""}alignIndicator(){const e={visibility:this.activeTab?"visible":"hidden",transitionDuration:"0.3s"};this.activeTab&&Object.assign(e,{width:`${this.activeTab.offsetWidth}px`,transform:`translate(${O(this)?E(this.activeTab,this.wrapper).left:E(this.activeTab,this.wrapper).right}px)`}),Object.assign(this.selectedIndicator.style,e)}async firstUpdated(){var e;this.showScrollButtons=this.container.scrollWidth>this.container.clientWidth,await this.updateComplete,this.syncAttributes(),this.setupObserver(),this.setSelectedTab(null!==(e=this.tabs.filter((e=>e.selected)).at(-1))&&void 0!==e?e:this.enabledTabs.at(0)),this.updateSelectedTab()}disconnectedCallback(){var e,t;null===(e=this.resizeObserver)||void 0===e||e.disconnect(),null===(t=this.mutationObserver)||void 0===t||t.disconnect(),super.disconnectedCallback()}updateButtonsOnResize(){this.showScrollButtons=!1,this.performUpdate(),this.showScrollButtons=this.container.scrollWidth>this.container.clientWidth,this.updateScrollButtons()}updateScrollButtons(){const{scrollLeft:e,offsetWidth:t}=this.container,{scrollWidth:a}=this.wrapper;this.disableEndScrollButton=a<=Math.abs(e)+t,this.disableStartScrollButton=0===e}setupObserver(){this.resizeObserver=new ResizeObserver((()=>{this.updateButtonsOnResize(),this.alignIndicator()})),[this.container,this.wrapper,...this.tabs].forEach((e=>this.resizeObserver.observe(e))),this.mutationObserver=new MutationObserver((async(e,t)=>{var a;t.disconnect();const i=function(e,...t){return e.filter((({type:e,target:a})=>"attributes"===e&&Kl(a,...t))).map((({target:e})=>e))}(e,"igc-tab"),r=function(e,t,...a){const i={addedNodes:[],removedNodes:[]};return e.filter((({type:e,target:a})=>"childList"===e&&(!t||a.isSameNode(t)))).reduce(((e,t)=>(e.addedNodes=e.addedNodes.concat(Array.from(t.addedNodes).filter((e=>Kl(e,...a))).map((e=>e))),e.removedNodes=e.removedNodes.concat(Array.from(t.removedNodes).filter((e=>Kl(e,...a))).map((e=>e))),e)),i),i.addedNodes.length||i.removedNodes.length?i:null}(e,this,"igc-tab");i.length>0&&(this.activeTab=i.find((e=>e.selected))),r&&(r.addedNodes.forEach((e=>{this.resizeObserver.observe(e),e.selected&&(this.activeTab=e)})),r.removedNodes.forEach((e=>{this.resizeObserver.unobserve(e),(e.selected||this.activeTab===e)&&(this.activeTab=void 0)})),this.syncAttributes()),this.updateSelectedTab(),null===(a=this.activeTab)||void 0===a||a.scrollIntoView({block:"nearest"}),this.alignIndicator(),await this.updateComplete,t.observe(this,Ul)})),this.mutationObserver.observe(this,Ul)}updateSelectedTab(){this.tabs.forEach((e=>e.selected=e===this.activeTab)),this.panels.forEach((e=>{var t;e.hidden=e.id!==(null===(t=this.activeTab)||void 0===t?void 0:t.panel)}))}syncAttributes(){const e=this.id?`${this.id}-`:"";this.tabs.forEach(((t,a)=>{var i,r,l;t.panel||(t.panel=null!==(r=null===(i=this.panels.at(a))||void 0===i?void 0:i.id)&&void 0!==r?r:`${e}tab-${an.increment()}`),null===(l=this.panels.find((e=>e.id===t.panel)))||void 0===l||l.setAttribute("aria-labelledby",t.id)}))}setSelectedTab(e){e&&e!==this.activeTab&&(this.activeTab&&(this.activeTab.selected=!1),this.activeTab=e,this.activeTab.selected=!0)}scrollByTabOffset(e){const{scrollLeft:t,offsetWidth:a}=this.container,i=O(this),r="end"===e,l=Math.abs(r?a+t:t);let n=this.tabs.map((e=>({start:i?E(e,this.wrapper).left:Math.abs(E(e,this.wrapper).right),width:e.offsetWidth}))).filter((e=>r?e.start+e.width>l:e.start<l)).at(r?0:-1).width;n*=r?1:-1,this.container.scrollBy({left:i?n:-n})}handleClick(e){const t=e.target.closest("igc-tab");t&&this.contains(t)&&!t.disabled&&(t.focus(),this.setSelectedTab(t),this.emitEvent("igcChange",{detail:this.activeTab}))}handleScroll(){this.updateScrollButtons()}select(e){this.setSelectedTab(this.tabs.find((t=>t.panel===e)))}renderScrollButton(e){const t="start"===e;return this.showScrollButtons?i.dy`<igc-icon-button
          tabindex="-1"
          aria-hidden="true"
          size="large"
          variant="flat"
          collection="internal"
          part="${e}-scroll-button"
          name="navigate_${t?"before":"next"}"
          .disabled=${t?this.disableStartScrollButton:this.disableEndScrollButton}
          @click=${()=>this.scrollByTabOffset(e)}
        ></igc-icon-button>`:i.Ld}render(){return i.dy`
      <div part="headers">
        ${this.renderScrollButton("start")}
        <div part="headers-content" @scroll=${this.handleScroll}>
          <div part="headers-wrapper">
            <div
              part="headers-scroll"
              role="tablist"
              @click=${this.handleClick}
              @keydown=${this.handleKeyDown}
            >
              <slot></slot>
            </div>
            <div part="selected-indicator"></div>
          </div>
        </div>
        ${this.renderScrollButton("end")}
      </div>
      <div part="content">
        <slot name="panel"></slot>
      </div>
    `}};ln.tagName="igc-tabs",ln.styles=jl,ln.increment=M(),rn([(0,r.NH)({selector:"igc-tab"})],ln.prototype,"tabs",void 0),rn([(0,r.NH)({slot:"panel"})],ln.prototype,"panels",void 0),rn([(0,r.IO)('[part="headers-wrapper"]',!0)],ln.prototype,"wrapper",void 0),rn([(0,r.IO)('[part="headers-content"]',!0)],ln.prototype,"container",void 0),rn([(0,r.IO)('[part="selected-indicator"]',!0)],ln.prototype,"selectedIndicator",void 0),rn([(0,r.SB)()],ln.prototype,"showScrollButtons",void 0),rn([(0,r.SB)()],ln.prototype,"disableStartScrollButton",void 0),rn([(0,r.SB)()],ln.prototype,"disableEndScrollButton",void 0),rn([(0,r.SB)()],ln.prototype,"activeTab",void 0),rn([(0,r.Cb)({reflect:!0})],ln.prototype,"alignment",void 0),rn([(0,r.Cb)()],ln.prototype,"activation",void 0),rn([m("alignment",{waitUntilFirstUpdate:!0})],ln.prototype,"alignIndicator",null),rn([(0,r.hO)({passive:!0})],ln.prototype,"handleScroll",null),ln=an=rn([b({bootstrap:Bl,fluent:Xl,indigo:Nl}),e=>e],ln);const nn=ln,sn=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  font-family: var(--ig-body-2-font-family, var(--ig-font-family));
  font-size: var(--ig-body-2-font-size);
  font-weight: var(--ig-body-2-font-weight);
  font-style: var(--ig-body-2-font-style);
  line-height: var(--ig-body-2-line-height);
  letter-spacing: var(--ig-body-2-letter-spacing);
  text-transform: var(--ig-body-2-text-transform);
  margin-top: var(--ig-body-2-margin-top);
  margin-bottom: var(--ig-body-2-margin-bottom);
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 1.625rem), 1.625rem);
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  font-family: var(--ig-font-family);
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  background: hsla(var(--ig-gray-700), var(--ig-gray-a));
  color: var(--ig-gray-700-contrast);
  padding: 1rem 1.5rem;
  margin: 2.625rem auto;
  min-width: 3.25rem;
  -webkit-backdrop-filter: blur(10px);
          backdrop-filter: blur(10px);
}

:host(:not([open])) {
  display: none;
}`,on=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.25rem), 0.25rem);
  color: var(--ig-surface-500-contrast);
  background: hsla(var(--ig-surface-500), var(--ig-surface-a));
  outline: 1px solid hsla(var(--ig-gray-300), var(--ig-gray-a));
  padding: 0.6875rem;
  -webkit-box-shadow: var(--ig-elevation-10);
          box-shadow: var(--ig-elevation-10);
}`,gn=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  font-family: var(--ig-caption-font-family, var(--ig-font-family));
  font-size: var(--ig-caption-font-size);
  font-weight: var(--ig-caption-font-weight);
  font-style: var(--ig-caption-font-style);
  line-height: var(--ig-caption-line-height);
  letter-spacing: var(--ig-caption-letter-spacing);
  text-transform: var(--ig-caption-text-transform);
  margin-top: var(--ig-caption-margin-top);
  margin-bottom: var(--ig-caption-margin-bottom);
  color: var(--ig-gray-100-contrast);
  background: hsla(var(--ig-gray-100), var(--ig-gray-a));
  padding: 0.5rem 0.75rem;
  border-radius: 0;
}`,dn=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.375rem), 0.375rem);
  color: var(--ig-gray-700-contrast);
  background: hsla(var(--ig-gray-700), var(--ig-gray-a));
  padding: 0.625rem 1rem;
}`;var hn=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n};let cn=class extends i.oi{constructor(){super(...arguments),this.open=!1,this.displayTime=4e3,this.keepOpen=!1}hide(){this.open&&(this.open=!1)}show(){window.clearTimeout(this.displayTimeout),this.open||(this.open=!0),!1===this.keepOpen&&(this.displayTimeout=setTimeout((()=>{this.open=!1}),this.displayTime))}toggle(){this.open?this.hide():this.show()}connectedCallback(){super.connectedCallback(),this.hasAttribute("role")||this.setAttribute("role","alert"),this.hasAttribute("aria-live")||this.setAttribute("aria-live","polite")}render(){return i.dy`<slot></slot>`}};cn.tagName="igc-toast",cn.styles=[sn],hn([(0,r.Cb)({type:Boolean,reflect:!0})],cn.prototype,"open",void 0),hn([(0,r.Cb)({type:Number,reflect:!1,attribute:"display-time"})],cn.prototype,"displayTime",void 0),hn([(0,r.Cb)({type:Boolean,reflect:!0,attribute:"keep-open"})],cn.prototype,"keepOpen",void 0),cn=hn([b({bootstrap:on,fluent:gn,indigo:dn})],cn);const bn=cn,mn=i.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  font-family: var(--ig-font-family);
  --size: 2.25rem;
  --thumb-size: 1.25rem;
  --thumb-offset: -0.0625rem;
}

input[type=checkbox] {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: none;
  clip: rect(0, 0, 0, 0);
  outline: 0;
  pointer-events: none;
  overflow: hidden;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}

label {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-flow: row nowrap;
          flex-flow: row nowrap;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  cursor: pointer;
  gap: 0.5rem;
}
label:hover [part~=thumb]::after {
  background: hsla(var(--ig-gray-600), 0.06);
}
label:focus-within [part~=thumb]::after {
  background: hsla(var(--ig-gray-600), 0.12);
}

[part~=control] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-negative: 0;
      flex-shrink: 0;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  -webkit-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

[part~=thumb] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.625rem), 0.625rem);
  position: relative;
  -webkit-animation-name: thumb-off;
          animation-name: thumb-off;
  -webkit-animation-duration: 0.2s;
          animation-duration: 0.2s;
  -webkit-animation-fill-mode: none;
          animation-fill-mode: none;
  -webkit-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

[part~=thumb][part~=checked] {
  -webkit-animation-name: thumb-on;
          animation-name: thumb-on;
  -webkit-animation-duration: 0.2s;
          animation-duration: 0.2s;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
}

[part~=label] {
  font-family: var(--ig-subtitle-1-font-family, var(--ig-font-family));
  font-size: var(--ig-subtitle-1-font-size);
  font-weight: var(--ig-subtitle-1-font-weight);
  font-style: var(--ig-subtitle-1-font-style);
  line-height: var(--ig-subtitle-1-line-height);
  letter-spacing: var(--ig-subtitle-1-letter-spacing);
  text-transform: var(--ig-subtitle-1-text-transform);
  margin-top: var(--ig-subtitle-1-margin-top);
  margin-bottom: var(--ig-subtitle-1-margin-bottom);
  display: inline-block;
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
  cursor: pointer;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  word-wrap: break-all;
  -webkit-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

:host([disabled]) {
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  pointer-events: none;
  cursor: initial;
}
:host([disabled]) [part~=label] {
  color: hsla(var(--ig-gray-400), var(--ig-gray-a));
}

:host(:not([disabled])[invalid]) [part~=label] {
  color: hsla(var(--ig-error-500), var(--ig-error-a));
}
:host(:not([disabled])[invalid]) [part~=thumb] {
  background: hsla(var(--ig-error-500), var(--ig-error-a));
}

:host([label-position=before]) [part~=label] {
  -webkit-box-ordinal-group: 0;
      -ms-flex-order: -1;
          order: -1;
}

@-webkit-keyframes thumb-on {
  from {
    -webkit-margin-start: var(--thumb-offset);
            margin-inline-start: var(--thumb-offset);
  }
  to {
    -webkit-margin-start: calc(var(--size) - var(--thumb-size) - var(--thumb-offset));
            margin-inline-start: calc(var(--size) - var(--thumb-size) - var(--thumb-offset));
  }
}

@keyframes thumb-on {
  from {
    -webkit-margin-start: var(--thumb-offset);
            margin-inline-start: var(--thumb-offset);
  }
  to {
    -webkit-margin-start: calc(var(--size) - var(--thumb-size) - var(--thumb-offset));
            margin-inline-start: calc(var(--size) - var(--thumb-size) - var(--thumb-offset));
  }
}
@-webkit-keyframes thumb-off {
  from {
    -webkit-margin-start: calc(var(--size) - var(--thumb-size) - var(--thumb-offset));
            margin-inline-start: calc(var(--size) - var(--thumb-size) - var(--thumb-offset));
  }
  to {
    -webkit-margin-start: var(--thumb-offset);
            margin-inline-start: var(--thumb-offset);
  }
}
@keyframes thumb-off {
  from {
    -webkit-margin-start: calc(var(--size) - var(--thumb-size) - var(--thumb-offset));
            margin-inline-start: calc(var(--size) - var(--thumb-size) - var(--thumb-offset));
  }
  to {
    -webkit-margin-start: var(--thumb-offset);
            margin-inline-start: var(--thumb-offset);
  }
}`,pn=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  --size: 2rem;
  --thumb-size: 0.625rem;
  --thumb-offset: calc(var(--thumb-size) / 4);
}

[part~=control] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.25rem), 0.25rem);
  width: var(--size);
  height: 1rem;
  -webkit-box-shadow: inset 0 0 0 1px hsla(var(--ig-gray-400), var(--ig-gray-a));
          box-shadow: inset 0 0 0 1px hsla(var(--ig-gray-400), var(--ig-gray-a));
  background: transparent;
  -webkit-transition: background-color 0.15s ease-in-out;
  -o-transition: background-color 0.15s ease-in-out;
  transition: background-color 0.15s ease-in-out;
}
[part~=control]::after {
  content: "";
  position: absolute;
  width: inherit;
  height: inherit;
  border-radius: inherit;
}

[part~=label] {
  -webkit-transition: none;
  -o-transition: none;
  transition: none;
}

:host(:focus-within) [part~=control] {
  -webkit-box-shadow: 0 0 0 4px hsla(var(--ig-primary-100), var(--ig-primary-a));
          box-shadow: 0 0 0 4px hsla(var(--ig-primary-100), var(--ig-primary-a));
}
:host(:focus-within) [part~=control]::after {
  border: 1px solid hsla(var(--ig-primary-200), var(--ig-primary-a));
}
:host(:focus-within) [part~=thumb] {
  background: hsla(var(--ig-primary-200), var(--ig-primary-a));
}

:host(:focus-within) [part~=control][part~=checked] {
  -webkit-box-shadow: 0 0 0 4px hsla(var(--ig-primary-200), var(--ig-primary-a));
          box-shadow: 0 0 0 4px hsla(var(--ig-primary-200), var(--ig-primary-a));
}
:host(:focus-within) [part~=control][part~=checked]::after {
  border: 1px solid hsla(var(--ig-primary-500), var(--ig-primary-a));
}

[part~=control][part~=checked] {
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  -webkit-box-shadow: inset 0 0 0 1px hsla(var(--ig-primary-500), var(--ig-primary-a));
          box-shadow: inset 0 0 0 1px hsla(var(--ig-primary-500), var(--ig-primary-a));
}

:host([invalid]) [part~=control],
:host([invalid]) [part~=control][part~=checked] {
  -webkit-box-shadow: inset 0 0 0 1px hsla(var(--ig-error-500), var(--ig-error-a));
          box-shadow: inset 0 0 0 1px hsla(var(--ig-error-500), var(--ig-error-a));
}

:host([invalid]) [part~=control][part~=checked],
:host([invalid]) [part~=thumb] {
  background: hsla(var(--ig-error-500), var(--ig-error-a));
}

:host([invalid]:focus-within) [part~=control] {
  -webkit-box-shadow: 0 0 0 4px hsla(var(--ig-error-100), var(--ig-error-a));
          box-shadow: 0 0 0 4px hsla(var(--ig-error-100), var(--ig-error-a));
  background: transparent;
}
:host([invalid]:focus-within) [part~=control]::after {
  border: 1px solid hsla(var(--ig-error-500), var(--ig-error-a));
}

:host([invalid]:focus-within) [part~=control][part~=checked] {
  -webkit-box-shadow: 0 0 0 4px hsla(var(--ig-error-200), var(--ig-error-a));
          box-shadow: 0 0 0 4px hsla(var(--ig-error-200), var(--ig-error-a));
  background: hsla(var(--ig-error-500), var(--ig-error-a));
}
:host([invalid]:focus-within) [part~=control][part~=checked]::after {
  border: 1px solid hsla(var(--ig-error-500), var(--ig-error-a));
}

:host([disabled]) [part~=control],
:host([disabled][invalid]) [part~=control] {
  -webkit-box-shadow: inset 0 0 0 1px hsla(var(--ig-gray-300), var(--ig-gray-a));
          box-shadow: inset 0 0 0 1px hsla(var(--ig-gray-300), var(--ig-gray-a));
}

:host([disabled]) [part~=control][part~=checked],
:host([disabled][invalid]) [part~=control][part~=checked] {
  background: hsla(var(--ig-primary-200), var(--ig-primary-a));
  -webkit-box-shadow: inset 0 0 0 1px hsla(var(--ig-primary-200), var(--ig-primary-a));
          box-shadow: inset 0 0 0 1px hsla(var(--ig-primary-200), var(--ig-primary-a));
}

[part~=thumb] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.125rem), 0.125rem);
  width: var(--thumb-size);
  height: var(--thumb-size);
  min-width: var(--thumb-size);
  -webkit-margin-start: var(--thumb-offset);
          margin-inline-start: var(--thumb-offset);
  background: hsla(var(--ig-gray-400), var(--ig-gray-a));
}

:host(:focus-within) [part~=thumb][part~=checked],
[part~=thumb][part~=checked] {
  background: white;
  -webkit-margin-start: calc(var(--size) - var(--thumb-size) - var(--thumb-offset));
          margin-inline-start: calc(var(--size) - var(--thumb-size) - var(--thumb-offset));
}

:host([disabled]) [part~=thumb],
:host([disabled][invalid]) [part~=thumb] {
  background: hsla(var(--ig-gray-300), var(--ig-gray-a));
}

:host([disabled]) [part~=thumb][part~=checked],
:host([invalid]) [part~=thumb][part~=checked],
:host([disabled][invalid]) [part~=thumb][part~=checked] {
  background: white;
}`,vn=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  --size: 2.5rem;
  --thumb-size: 0.75rem;
  --thumb-offset: calc(var(--thumb-size) / 2);
}

[part~=control] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.625rem), 0.625rem);
  width: var(--size);
  height: 1.25rem;
  -webkit-box-shadow: inset 0 0 0 1px hsla(var(--ig-gray-700), var(--ig-gray-a));
          box-shadow: inset 0 0 0 1px hsla(var(--ig-gray-700), var(--ig-gray-a));
  background: transparent;
}

[part~=label] {
  font-family: var(--ig-body-2-font-family, var(--ig-font-family));
  font-size: var(--ig-body-2-font-size);
  font-weight: var(--ig-body-2-font-weight);
  font-style: var(--ig-body-2-font-style);
  line-height: var(--ig-body-2-line-height);
  letter-spacing: var(--ig-body-2-letter-spacing);
  text-transform: var(--ig-body-2-text-transform);
  margin-top: var(--ig-body-2-margin-top);
  margin-bottom: var(--ig-body-2-margin-bottom);
}

:host(:hover) [part~=control] {
  -webkit-box-shadow: inset 0 0 0 1px var(--hover-color, hsla(var(--ig-gray-800), var(--ig-gray-a)));
          box-shadow: inset 0 0 0 1px var(--hover-color, hsla(var(--ig-gray-800), var(--ig-gray-a)));
}

[part~=focused] {
  position: relative;
}
[part~=focused]::after {
  content: "";
  position: absolute;
  top: -0.125rem;
  left: -0.125rem;
  -webkit-box-shadow: 0 0 0 1px hsla(var(--ig-gray-700), var(--ig-gray-a));
          box-shadow: 0 0 0 1px hsla(var(--ig-gray-700), var(--ig-gray-a));
  width: calc(100% + (0.125rem * 2));
  height: calc(100% + (0.125rem * 2));
}

:host(:hover) [part~=thumb] {
  background: var(--hover-color, hsla(var(--ig-gray-800), var(--ig-gray-a)));
}

[part~=control][part~=checked] {
  background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  -webkit-box-shadow: inset 0 0 0 1px hsla(var(--ig-primary-500), var(--ig-primary-a));
          box-shadow: inset 0 0 0 1px hsla(var(--ig-primary-500), var(--ig-primary-a));
}

:host(:hover) [part~=control][part~=checked] {
  background: var(--checked-hover-color, hsla(var(--ig-primary-900), var(--ig-primary-a)));
  -webkit-box-shadow: inset 0 0 0 1px var(--checked-hover-color, hsla(var(--ig-primary-900), var(--ig-primary-a)));
          box-shadow: inset 0 0 0 1px var(--checked-hover-color, hsla(var(--ig-primary-900), var(--ig-primary-a)));
}

:host([invalid]) [part~=control] {
  -webkit-box-shadow: inset 0 0 0 1px var(--invalid-color, hsla(var(--ig-error-500), var(--ig-error-a)));
          box-shadow: inset 0 0 0 1px var(--invalid-color, hsla(var(--ig-error-500), var(--ig-error-a)));
}

:host([invalid]) [part~=control][part~=checked] {
  background: var(--invalid-color, hsla(var(--ig-error-500), var(--ig-error-a)));
  -webkit-box-shadow: inset 0 0 0 1px var(--invalid-color, hsla(var(--ig-error-500), var(--ig-error-a)));
          box-shadow: inset 0 0 0 1px var(--invalid-color, hsla(var(--ig-error-500), var(--ig-error-a)));
}

:host([invalid]:hover) [part~=control] {
  -webkit-box-shadow: inset 0 0 0 1px var(--invalid-hover-color, hsla(var(--ig-error-700), var(--ig-error-a)));
          box-shadow: inset 0 0 0 1px var(--invalid-hover-color, hsla(var(--ig-error-700), var(--ig-error-a)));
}

:host([invalid]:hover) [part~=thumb] {
  background: var(--invalid-hover-color, hsla(var(--ig-error-700), var(--ig-error-a)));
}

:host([invalid]) [part~=thumb][part~=checked],
:host([invalid]:hover) [part~=thumb][part~=checked] {
  background: hsla(var(--ig-surface-500), var(--ig-surface-a));
}

:host([invalid]:hover) [part~=control][part~=checked] {
  -webkit-box-shadow: inset 0 0 0 1px var(--invalid-hover-color, hsla(var(--ig-error-700), var(--ig-error-a)));
          box-shadow: inset 0 0 0 1px var(--invalid-hover-color, hsla(var(--ig-error-700), var(--ig-error-a)));
  background: var(--invalid-hover-color, hsla(var(--ig-error-700), var(--ig-error-a)));
}

:host([disabled]) [part~=label] {
  color: var(--disabled-color, hsla(var(--ig-gray-400), var(--ig-gray-a)));
}

:host([disabled]) [part~=control],
:host([disabled][invalid]) [part~=control] {
  -webkit-box-shadow: inset 0 0 0 1px var(--disabled-color, hsla(var(--ig-gray-400), var(--ig-gray-a)));
          box-shadow: inset 0 0 0 1px var(--disabled-color, hsla(var(--ig-gray-400), var(--ig-gray-a)));
}

:host([disabled]) [part~=control][part~=checked],
:host([disabled][invalid]) [part~=control][part~=checked],
:host([disabled]) [part~=thumb],
:host([disabled][invalid]) [part~=thumb] {
  background: var(--disabled-color, hsla(var(--ig-gray-400), var(--ig-gray-a)));
}

[part~=thumb] {
  width: var(--thumb-size);
  height: var(--thumb-size);
  min-width: var(--thumb-size);
  -webkit-margin-start: var(--thumb-offset);
          margin-inline-start: var(--thumb-offset);
  background: var(--thumb-color, hsla(var(--ig-gray-700), var(--ig-gray-a)));
}

[part~=thumb][part~=checked],
:host(:hover) [part~=thumb][part~=checked] {
  background: hsla(var(--ig-gray-50), var(--ig-gray-a));
  -webkit-margin-start: calc(var(--size) - var(--thumb-size) - var(--thumb-offset));
          margin-inline-start: calc(var(--size) - var(--thumb-size) - var(--thumb-offset));
}

:host([disabled]) [part~=thumb][part~=checked],
:host([disabled][invalid]) [part~=thumb][part~=checked] {
  background: var(--disabled-thumb-color, hsla(var(--ig-gray-100), var(--ig-gray-a)));
}`,yn=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  font-weight: 600;
  --size: 2.125rem;
  --thumb-size: 0.5rem;
  --thumb-offset: calc(var(--thumb-size) / 2);
}

[part~=control] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.5rem), 0.5rem);
  width: var(--size);
  height: 1rem;
  -webkit-box-shadow: inset 0 0 0 2px var(--border-color, hsla(var(--ig-gray-500), var(--ig-gray-a)));
          box-shadow: inset 0 0 0 2px var(--border-color, hsla(var(--ig-gray-500), var(--ig-gray-a)));
  background: transparent;
}
[part~=control]::after {
  content: "";
  position: absolute;
  width: inherit;
  height: inherit;
  border-radius: inherit;
}

:host(:hover) [part~=control] {
  -webkit-box-shadow: 0 0 0 2px hsla(var(--ig-gray-200), 0.87);
          box-shadow: 0 0 0 2px hsla(var(--ig-gray-200), 0.87);
}
:host(:hover) [part~=control]::after {
  border: 2px solid var(--border-color, hsla(var(--ig-gray-500), var(--ig-gray-a)));
}

:host(:focus-within) [part~=control] {
  -webkit-box-shadow: 0 0 0 2px hsla(var(--ig-gray-300), 0.87);
          box-shadow: 0 0 0 2px hsla(var(--ig-gray-300), 0.87);
}
:host(:focus-within) [part~=control]::after {
  border: 2px solid var(--border-color, hsla(var(--ig-gray-500), var(--ig-gray-a)));
}

[part~=control][part~=checked] {
  background: var(--checked-color, hsla(var(--ig-secondary-500), var(--ig-secondary-a)));
  -webkit-box-shadow: inset 0 0 0 2px var(--checked-color, hsla(var(--ig-secondary-500), var(--ig-secondary-a)));
          box-shadow: inset 0 0 0 2px var(--checked-color, hsla(var(--ig-secondary-500), var(--ig-secondary-a)));
}

:host(:hover) [part~=control][part~=checked] {
  -webkit-box-shadow: 0 0 0 2px hsla(var(--ig-secondary-100), 0.87);
          box-shadow: 0 0 0 2px hsla(var(--ig-secondary-100), 0.87);
}
:host(:hover) [part~=control][part~=checked]::after {
  border: 2px solid var(--checked-color, hsla(var(--ig-secondary-500), var(--ig-secondary-a)));
}

:host(:focus-within) [part~=control][part~=checked] {
  -webkit-box-shadow: 0 0 0 2px hsla(var(--ig-secondary-200), 0.87);
          box-shadow: 0 0 0 2px hsla(var(--ig-secondary-200), 0.87);
}
:host(:focus-within) [part~=control][part~=checked]::after {
  border: 2px solid var(--checked-color, hsla(var(--ig-secondary-500), var(--ig-secondary-a)));
}

:host([invalid]) [part~=control],
:host([invalid]) [part~=control][part~=checked] {
  -webkit-box-shadow: inset 0 0 0 2px hsla(var(--ig-error-500), var(--ig-error-a));
          box-shadow: inset 0 0 0 2px hsla(var(--ig-error-500), var(--ig-error-a));
}

:host([invalid]) [part~=control][part~=checked],
:host([invalid]) [part~=thumb] {
  background: hsla(var(--ig-error-500), var(--ig-error-a));
}

:host([invalid]:hover) [part~=control] {
  -webkit-box-shadow: 0 0 0 2px hsla(var(--ig-error-100), 0.87);
          box-shadow: 0 0 0 2px hsla(var(--ig-error-100), 0.87);
}
:host([invalid]:hover) [part~=control]::after {
  border: 2px solid hsla(var(--ig-error-500), var(--ig-error-a));
}

:host([invalid]:focus-within) [part~=control],
:host([invalid]:focus-within) [part~=control][part~=checked] {
  -webkit-box-shadow: 0 0 0 2px hsla(var(--ig-error-200), 0.87);
          box-shadow: 0 0 0 2px hsla(var(--ig-error-200), 0.87);
}
:host([invalid]:focus-within) [part~=control]::after,
:host([invalid]:focus-within) [part~=control][part~=checked]::after {
  border: 2px solid hsla(var(--ig-error-500), var(--ig-error-a));
}

:host([disabled]) [part~=control],
:host([disabled][invalid]) [part~=control] {
  -webkit-box-shadow: inset 0 0 0 2px var(--disabled-color, hsla(var(--ig-gray-300), var(--ig-gray-a)));
          box-shadow: inset 0 0 0 2px var(--disabled-color, hsla(var(--ig-gray-300), var(--ig-gray-a)));
}

:host([disabled]) [part~=control][part~=checked],
:host([disabled][invalid]) [part~=control][part~=checked] {
  background: transparent;
}

[part~=thumb] {
  width: var(--thumb-size);
  height: var(--thumb-size);
  min-width: var(--thumb-size);
  -webkit-animation-name: thumb-off;
          animation-name: thumb-off;
  -webkit-margin-start: var(--thumb-offset);
          margin-inline-start: var(--thumb-offset);
  background: var(--thumb-color, hsla(var(--ig-gray-600), var(--ig-gray-a)));
}

[part~=thumb][part~=checked],
:host([invalid]) [part~=thumb][part~=checked] {
  background: hsla(var(--ig-surface-500), var(--ig-surface-a));
  -webkit-animation-name: thumb-on;
          animation-name: thumb-on;
  -webkit-margin-start: calc(var(--size) - var(--thumb-size) - var(--thumb-offset));
          margin-inline-start: calc(var(--size) - var(--thumb-size) - var(--thumb-offset));
}

:host([disabled]) [part~=thumb],
:host([disabled][invalid]) [part~=thumb] {
  background: var(--disabled-color, hsla(var(--ig-gray-300), var(--ig-gray-a)));
}

:host([disabled]) [part~=label] {
  color: var(--disabled-color, hsla(var(--ig-gray-300), var(--ig-gray-a)));
}`,un=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
[part~=control] {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * 0.4375rem), 0.4375rem);
  width: var(--size);
  height: 0.875rem;
  background: hsla(var(--ig-gray-500), var(--ig-gray-a));
}

[part~=thumb] {
  width: var(--thumb-size);
  height: var(--thumb-size);
  min-width: var(--thumb-size);
  background: hsla(var(--ig-gray-50), var(--ig-gray-a));
  -webkit-box-shadow: var(--ig-elevation-2);
          box-shadow: var(--ig-elevation-2);
  -webkit-margin-start: var(--thumb-offset);
          margin-inline-start: var(--thumb-offset);
}
[part~=thumb]::after {
  border-radius: clamp(0rem, calc(var(--ig-radius-factor) * calc(2.5rem / 2)), calc(2.5rem / 2));
  position: absolute;
  content: "";
  top: calc(50% - calc(2.5rem / 2));
  left: calc(50% - calc(2.5rem / 2));
  width: 2.5rem;
  height: 2.5rem;
  overflow: hidden;
}
[part~=thumb]:hover {
  -webkit-box-shadow: var(--ig-elevation-3);
          box-shadow: var(--ig-elevation-3);
}

label:hover [part~=thumb][part~=checked]::after {
  background: hsla(var(--ig-secondary-500), 0.06);
}
label:focus-within [part~=thumb][part~=checked]::after {
  background: hsla(var(--ig-secondary-500), 0.12);
}

:host([invalid]) label:hover [part~=thumb]::after {
  background: hsla(var(--ig-error-500), 0.06);
}
:host([invalid]) label:focus-within [part~=thumb]::after {
  background: hsla(var(--ig-error-500), 0.12);
}

[part~=control][part~=checked] {
  background: hsla(var(--ig-secondary-200), var(--ig-secondary-a));
}

[part~=thumb][part~=checked] {
  background: hsla(var(--ig-secondary-500), var(--ig-secondary-a));
  -webkit-margin-start: calc(var(--size) - var(--thumb-size) - var(--thumb-offset));
          margin-inline-start: calc(var(--size) - var(--thumb-size) - var(--thumb-offset));
  -webkit-animation-name: thumb-on;
          animation-name: thumb-on;
  -webkit-animation-duration: 0.2s;
          animation-duration: 0.2s;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
}

:host([disabled]) [part~=thumb] {
  -webkit-box-shadow: var(--ig-elevation-1);
          box-shadow: var(--ig-elevation-1);
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
}
:host([disabled]) [part~=control] {
  background: hsla(var(--ig-gray-300), var(--ig-gray-a));
}
:host([disabled]) [part~=thumb][part~=checked] {
  background: hsla(var(--ig-secondary-100), var(--ig-secondary-a));
}
:host([disabled]) [part~=control][part~=checked] {
  background: hsla(var(--ig-secondary-50), var(--ig-secondary-a));
}

:host(:not([disabled])[invalid]) [part~=control] {
  background: hsla(var(--ig-error-500), 0.5);
}`;var xn,fn=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n};let wn=xn=class extends $t{constructor(){super(...arguments),this.inputId=`switch-${xn.increment()}`,this.labelId=`switch-label-${this.inputId}`}handleClick(){this.checked=!this.checked,this.emitEvent("igcChange",{detail:this.checked})}handleChange(){this.invalid=!this.input.checkValidity()}render(){return i.dy`
      <label
        part=${$({base:!0,checked:this.checked})}
        for=${this.inputId}
        @pointerdown=${this.handleMouseDown}
      >
        <input
          id=${this.inputId}
          type="checkbox"
          name=${(0,n.o)(this.name)}
          value=${(0,n.o)(this.value)}
          .required=${this.required}
          .disabled=${this.disabled}
          .checked=${(0,St.a)(this.checked)}
          aria-checked=${this.checked?"true":"false"}
          aria-disabled=${this.disabled?"true":"false"}
          aria-labelledby=${this.ariaLabelledby?this.ariaLabelledby:this.labelId}
          @click=${this.handleClick}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
        />
        <span
          part=${$({control:!0,checked:this.checked,focused:this.focused})}
        >
          <span
            part=${$({thumb:!0,checked:this.checked})}
          ></span>
        </span>
        <span
          .hidden="${this.hideLabel}"
          part=${$({label:!0,checked:this.checked})}
          id=${this.labelId}
        >
          <slot></slot>
        </span>
      </label>
    `}};wn.tagName="igc-switch",wn.styles=mn,wn.increment=M(),fn([m("checked",{waitUntilFirstUpdate:!0})],wn.prototype,"handleChange",null),wn=xn=fn([b({material:un,bootstrap:pn,fluent:vn,indigo:yn})],wn);const kn=wn,zn=i.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  display: block;
  overflow: auto;
  font-family: var(--ig-font-family);
}

:host([size=small]) {
  --component-size: var(--ig-size, var(--ig-size-small));
}

:host([size=medium]) {
  --component-size: var(--ig-size, var(--ig-size-medium));
}

:host([size=large]) {
  --component-size: var(--ig-size, var(--ig-size-large));
}`,Cn=new Set(["down","up","left","right","arrowdown","arrowup","arrowleft","arrowright","home","end","space","spacebar"," "]);class Dn{constructor(e,t){this._focusedItem=null,this._lastFocusedItem=null,this._activeItem=null,this._visibleChildren=[],this._invisibleChildren=new Set,this._disabledChildren=new Set,this.tree=e,this.selectionService=t}updateVisChild(){var e;this._visibleChildren=(null===(e=this.tree)||void 0===e?void 0:e.items)?this.tree.items.filter((e=>!(this._invisibleChildren.has(e)||this._disabledChildren.has(e)))):[]}get focusedItem(){return this._focusedItem}focusItem(e,t=!0){var a;this._focusedItem!==e&&(this._lastFocusedItem=this._focusedItem,this._lastFocusedItem&&this._lastFocusedItem.removeAttribute("tabindex"),this._focusedItem=e,null!==this._focusedItem&&t&&(this._focusedItem.tabIndex=0,this._focusedItem.focus({preventScroll:!0}),null===(a=this._focusedItem.wrapper)||void 0===a||a.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"})))}get activeItem(){return this._activeItem}setActiveItem(e,t=!0){this._activeItem!==e&&(this._activeItem&&e&&(this._activeItem.active=!1),this._activeItem=e,this._activeItem&&(this._activeItem.active=!0),t&&this._activeItem&&this.tree.emitEvent("igcActiveItem",{detail:this._activeItem}))}get visibleChildren(){return this._visibleChildren}update_disabled_cache(e){e.disabled?this._disabledChildren.add(e):this._disabledChildren.delete(e),this.updateVisChild()}delete_item(e){if(this.activeItem===e&&this.setActiveItem(null),this.focusedItem===e){this.focusItem(null,!1);const e=this.tree.items.find((e=>!e.disabled));e&&(e.tabIndex=0,this.focusItem(e,!1))}}update_visible_cache(e,t,a=!0,i=!0){var r,l;t&&!this._invisibleChildren.has(e)?null===(r=e.getChildren())||void 0===r||r.forEach((e=>{this._invisibleChildren.delete(e),a&&this.update_visible_cache(e,e.expanded,!0,!1)})):null===(l=e.getChildren({flatten:!0}))||void 0===l||l.forEach((e=>this._invisibleChildren.add(e))),i&&this.updateVisChild()}setFocusedAndActiveItem(e,t=!0,a=!0){t&&this.setActiveItem(e),this.focusItem(e,a)}handleKeydown(e){const t=e.key.toLowerCase();this.focusedItem&&(Cn.has(t)||"*"===t?(e.preventDefault(),this.handleNavigation(e)):"enter"===t&&this.setActiveItem(this.focusedItem))}handleNavigation(e){switch(e.key.toLowerCase()){case"home":this.setFocusedAndActiveItem(this.visibleChildren[0]);break;case"end":this.setFocusedAndActiveItem(this.visibleChildren[this.visibleChildren.length-1]);break;case"arrowleft":case"left":"rtl"===this.tree.dir?this.handleArrowRight():this.handleArrowLeft();break;case"arrowright":case"right":"rtl"===this.tree.dir?this.handleArrowLeft():this.handleArrowRight();break;case"arrowup":case"up":this.handleUpDownArrow(!0,e);break;case"arrowdown":case"down":this.handleUpDownArrow(!1,e);break;case"*":this.handleAsterisk();break;case" ":case"spacebar":case"space":this.handleSpace(e.shiftKey);break;default:return}}handleArrowLeft(){var e,t,a;if((null===(e=this.focusedItem)||void 0===e?void 0:e.expanded)&&(null===(t=this.focusedItem.getChildren())||void 0===t?void 0:t.length))this.setActiveItem(this.focusedItem),this.focusedItem.collapseWithEvent();else{const e=null===(a=this.focusedItem)||void 0===a?void 0:a.parent;e&&!e.disabled&&this.setFocusedAndActiveItem(e)}}handleArrowRight(){var e,t;if((null===(e=this.focusedItem.getChildren())||void 0===e?void 0:e.length)>0)if(null===(t=this.focusedItem)||void 0===t?void 0:t.expanded){const e=this.focusedItem.getChildren().find((e=>!e.disabled));e&&this.setFocusedAndActiveItem(e)}else this.setActiveItem(this.focusedItem),this.focusedItem.expandWithEvent()}handleUpDownArrow(e,t){const a=this.getVisibleItem(this.focusedItem,e?-1:1);a!==this.focusedItem&&(t.ctrlKey?this.setFocusedAndActiveItem(a,!1):this.setFocusedAndActiveItem(a))}handleAsterisk(){var e,t,a;const i=(null===(e=this.focusedItem)||void 0===e?void 0:e.parent)?null===(t=this.focusedItem.parent)||void 0===t?void 0:t.getChildren():null===(a=this.tree.items)||void 0===a?void 0:a.filter((e=>0===e.level));null==i||i.forEach((e=>{e.disabled||e.expanded||!e.hasChildren||e.expandWithEvent()}))}handleSpace(e=!1){"none"!==this.tree.selection?(this.setActiveItem(this.focusedItem),e?this.selectionService.selectMultipleItems(this.focusedItem):this.focusedItem.selected?this.selectionService.deselectItem(this.focusedItem):this.selectionService.selectItem(this.focusedItem)):this.setActiveItem(this.focusedItem)}getVisibleItem(e,t=1){const a=this.visibleChildren.indexOf(e);return this.visibleChildren[a+t]||e}}class Sn{constructor(e){this.itemSelection=new Set,this.indeterminateItems=new Set,this.tree=e}selectMultipleItems(e){if(!this.itemSelection.size)return void this.selectItem(e);const t=this.tree.items.indexOf(this.getSelectedItems()[this.itemSelection.size-1]),a=this.tree.items.indexOf(e),i=this.tree.items.slice(Math.min(a,t),Math.max(a,t)+1).filter((e=>!this.isItemSelected(e))),r=this.getSelectedItems().concat(i);this.emitItemSelectionEvent(r,i,[])}selectItem(e){"none"!==this.tree.selection&&this.emitItemSelectionEvent([...this.getSelectedItems(),e],[e],[])}deselectItem(e){const t=this.getSelectedItems().filter((t=>t!==e));this.emitItemSelectionEvent(t,[],[e])}clearItemsSelection(){const e=this.getSelectedItems(),t=this.getIndeterminateItems();this.itemSelection.clear(),this.indeterminateItems.clear(),e.forEach((e=>e.selected=!1)),t.forEach((e=>e.indeterminate=!1))}isItemSelected(e){return this.itemSelection.has(e)}isItemIndeterminate(e){return this.indeterminateItems.has(e)}ensureStateOnItemDelete(e){this.deselectItemsWithNoEvent([e,...e.getChildren({flatten:!0})],!0)}retriggerItemState(e){e.selected?(this.itemSelection.delete(e),this.selectItemsWithNoEvent([e])):(this.itemSelection.add(e),this.deselectItemsWithNoEvent([e]))}emitItemSelectionEvent(e,t,a){const i=this.getSelectedItems();if(this.areEqualCollections(i,e))return;if("cascade"===this.tree.selection)return void this.emitCascadeItemSelectionEvent(i,t,a);const r={detail:{newSelection:e},cancelable:!0};this.tree.emitEvent("igcSelection",r)&&this.areEqualCollections(e,r.detail.newSelection)&&(this.itemSelection=new Set(e),this.updateItemsState(i))}selectItemsWithNoEvent(e){const t=this.getSelectedItems();this.tree&&"cascade"===this.tree.selection?this.cascadeSelectItemsWithNoEvent(e,t):(e.forEach((e=>this.itemSelection.add(e))),this.updateItemsState(t))}deselectItemsWithNoEvent(e,t=!1){if(this.tree&&"cascade"===this.tree.selection)return void this.cascadeDeselectItemsWithNoEvent(e,t);const a=new Set(e),i=t?this.getSelectedItems().filter((e=>!a.has(e))):this.getSelectedItems();e?e.forEach((e=>this.itemSelection.delete(e))):this.itemSelection.clear(),this.updateItemsState(i)}emitCascadeItemSelectionEvent(e,t,a){const i=this.getIndeterminateItems();this.calculateItemsNewSelectionState(e,t,a);const r={detail:{newSelection:Array.from(this.itemsToBeSelected)},cancelable:!0};this.tree.emitEvent("igcSelection",r)&&this.areEqualCollections(Array.from(this.itemsToBeSelected),r.detail.newSelection)&&(this.itemSelection=new Set(this.itemsToBeSelected),this.indeterminateItems=new Set(this.itemsToBeIndeterminate),this.updateItemsState(e,i))}cascadeSelectItemsWithNoEvent(e,t){const a=this.getIndeterminateItems(),i=[...t,...e],r=new Set(i),l=t.filter((e=>!r.has(e))),n=i.filter((e=>!this.itemSelection.has(e)));this.calculateItemsNewSelectionState(t,n,l),this.itemSelection=new Set(this.itemsToBeSelected),this.indeterminateItems=new Set(this.itemsToBeIndeterminate),this.updateItemsState(t,a)}cascadeDeselectItemsWithNoEvent(e,t=!1){const a=new Set(e),i=t?this.getSelectedItems().filter((e=>!a.has(e))):this.getSelectedItems(),r=t?this.getIndeterminateItems().filter((e=>!a.has(e))):this.getIndeterminateItems();e?(this.calculateItemsNewSelectionState(i,[],e),this.itemSelection=new Set(this.itemsToBeSelected),this.indeterminateItems=new Set(this.itemsToBeIndeterminate)):(this.itemSelection.clear(),this.indeterminateItems.clear()),this.updateItemsState(i,r)}calculateItemsNewSelectionState(e,t,a){this.itemsToBeSelected=new Set(e),this.itemsToBeIndeterminate=new Set(this.getIndeterminateItems()),this.cascadeSelectionState(a,!1),this.cascadeSelectionState(t,!0)}cascadeSelectionState(e,t){if(!e||0===e.length)return;const a=new Set;e.forEach((e=>{this.selectDeselectItem(e,t),(e.getChildren({flatten:!0})||[]).forEach((e=>{this.selectDeselectItem(e,t)})),e&&e.parent&&a.add(e.parent)}));for(const e of a)this.handleParentSelectionState(e)}handleParentSelectionState(e){e&&(this.handleItemSelectionState(e),e.parent&&this.handleParentSelectionState(e.parent))}handleItemSelectionState(e){const t=e&&e.getChildren()?e.getChildren():[];t.length?t.every((e=>this.itemsToBeSelected.has(e)))?this.selectDeselectItem(e,!0):t.some((e=>this.itemsToBeSelected.has(e)||this.itemsToBeIndeterminate.has(e)))?this.selectDeselectItem(e,!1,!0):this.selectDeselectItem(e,!1):this.isItemSelected(e)?this.selectDeselectItem(e,!0):this.selectDeselectItem(e,!1)}updateItemsState(e,t=[]){const a=new Set(e),i=new Set(t);this.getSelectedItems().forEach((e=>{a.has(e)||(e.selected=!0)})),e.forEach((e=>{this.itemSelection.has(e)||(e.selected=!1)})),"cascade"===this.tree.selection&&(this.indeterminateItems.forEach((e=>{i.has(e)||(e.indeterminate=!0)})),t.forEach((e=>{this.indeterminateItems.has(e)||(e.indeterminate=!1)})))}getSelectedItems(){return this.itemSelection.size?Array.from(this.itemSelection):[]}getIndeterminateItems(){return this.indeterminateItems.size?Array.from(this.indeterminateItems):[]}areEqualCollections(e,t){return e.length===t.length&&new Set(e.concat(t)).size===e.length}selectDeselectItem(e,t,a=!1){if(a)return this.itemsToBeIndeterminate.add(e),void this.itemsToBeSelected.delete(e);t?(this.itemsToBeSelected.add(e),this.itemsToBeIndeterminate.delete(e)):(this.itemsToBeSelected.delete(e),this.itemsToBeIndeterminate.delete(e))}}const In=i.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  --size: max(var(--is-large, 1) * max(3.125rem, -1 * 3.125rem), var(--is-medium, 1) * max(2.5rem, -1 * 2.5rem), var(--is-small, 1) * max(2rem, -1 * 2rem));
  --igc-tree-indentation-size: 24px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  font-family: inherit;
}

:host(:focus-within) {
  outline: none;
}

:host([disabled]) {
  color: hsla(var(--ig-gray-500), var(--ig-gray-a));
  background: hsla(var(--ig-surface-500), var(--ig-surface-a));
}

[part~=wrapper] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  position: relative;
  background: hsla(var(--ig-surface-500), var(--ig-surface-a));
  color: var(--ig-surface-500-contrast);
  height: var(--size);
  padding: 0 max(var(--is-large, 1) * max(24px, -1 * 24px) * var(--ig-spacing-large, var(--ig-spacing, --ig-spacing)), var(--is-medium, 1) * max(16px, -1 * 16px) * var(--ig-spacing-medium, var(--ig-spacing, --ig-spacing)), var(--is-small, 1) * max(12px, -1 * 12px) * var(--ig-spacing-small, var(--ig-spacing, --ig-spacing)));
}
[part~=wrapper]::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background: transparent;
}
[part~=wrapper]:hover::after {
  background: var(--hover-color, hsla(var(--ig-gray-900), 0.1));
}

[part~=active] {
  background: hsla(var(--ig-gray-200), var(--ig-gray-a));
  color: var(--ig-gray-200-contrast);
}

[part~=selected] {
  background: hsla(var(--ig-secondary-200), var(--ig-secondary-a));
  color: var(--ig-secondary-200-contrast);
}

[part~=selected][part~=focused][part~=active],
[part~=selected][part~=focused],
[part~=selected][part~=active] {
  background: hsla(var(--ig-secondary-300), var(--ig-secondary-a));
  color: var(--ig-secondary-300-contrast);
}

[part~=focused] {
  -webkit-box-shadow: inset 0 0 0 1px hsla(var(--ig-secondary-500), var(--ig-secondary-a));
          box-shadow: inset 0 0 0 1px hsla(var(--ig-secondary-500), var(--ig-secondary-a));
}

[part~=indicator] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  z-index: 1;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  cursor: pointer;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  -webkit-margin-end: 0.25rem;
          margin-inline-end: 0.25rem;
  min-width: 1.5rem;
}
[part~=indicator] igc-icon {
  width: 1.5rem;
  height: 1.5rem;
  font-size: 1.5rem;
}

[part~=label] {
  display: block;
  font-family: var(--ig-body-2-font-family, var(--ig-font-family));
  font-size: var(--ig-body-2-font-size);
  font-weight: var(--ig-body-2-font-weight);
  font-style: var(--ig-body-2-font-style);
  line-height: var(--ig-body-2-line-height);
  letter-spacing: var(--ig-body-2-letter-spacing);
  text-transform: var(--ig-body-2-text-transform);
  margin-top: var(--ig-body-2-margin-top);
  margin-bottom: var(--ig-body-2-margin-bottom);
  margin: 0;
}

[part~=label],
[part~=text] {
  z-index: 1;
  white-space: nowrap;
  -o-text-overflow: ellipsis;
     text-overflow: ellipsis;
  overflow: hidden;
}

[part~=select] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  z-index: 1;
  -webkit-margin-end: 0.25rem;
          margin-inline-end: 0.25rem;
}
[part~=select] igc-checkbox::part(label) {
  display: none;
}

[part~=large] igc-circular-progress {
  --diameter: 1.5rem;
}

[part~=medium] igc-circular-progress {
  --diameter: 1.25rem;
}

[part~=small] igc-circular-progress {
  --diameter: 1.125rem;
}`,$n=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
[part~=active] {
  background: var(--active-background, hsla(var(--ig-gray-200), var(--ig-gray-a)));
  color: var(--active-color, var(--ig-gray-200-contrast));
}

[part~=selected] {
  background: var(--selected-background, hsla(var(--ig-primary-500), var(--ig-primary-a)));
  color: var(--selected-color, var(--ig-primary-600-contrast));
}

[part~=selected][part~=focused][part~=active],
[part~=selected][part~=focused],
[part~=selected][part~=active] {
  background: var(--active-selected-background, hsla(var(--ig-primary-600), var(--ig-primary-a)));
  color: var(--active-selected-color, var(--ig-primary-600-contrast));
}

[part~=select] {
  -webkit-margin-end: 0.5rem;
          margin-inline-end: 0.5rem;
}

[part~=focused] {
  -webkit-box-shadow: inset 0 0 0 1px var(--focused-border-color, hsla(var(--ig-primary-200), var(--ig-primary-a)));
          box-shadow: inset 0 0 0 1px var(--focused-border-color, hsla(var(--ig-primary-200), var(--ig-primary-a)));
}`,Pn=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
[part~=active] {
  background: var(--active-background, hsla(var(--ig-gray-200), var(--ig-gray-a)));
  color: var(--active-color, var(--ig-gray-200-contrast));
}

[part~=selected] {
  background: var(--selected-background, hsla(var(--ig-gray-200), var(--ig-gray-a)));
  color: var(--selected-color, var(--ig-gray-200-contrast));
}

[part~=selected][part~=focused][part~=active],
[part~=selected][part~=focused],
[part~=selected][part~=active] {
  background: var(--active-selected-background, hsla(var(--ig-gray-300), var(--ig-gray-a)));
  color: var(--active-selected-color, var(--ig-gray-300-contrast));
}

[part~=select] {
  -webkit-margin-end: 0.5rem;
          margin-inline-end: 0.5rem;
}

[part~=focused] {
  -webkit-box-shadow: inset 0 0 0 1px var(--focused-border-color, hsla(var(--ig-gray-800), var(--ig-gray-a)));
          box-shadow: inset 0 0 0 1px var(--focused-border-color, hsla(var(--ig-gray-800), var(--ig-gray-a)));
}`,Tn=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
[part~=active] {
  background: var(--active-background, hsla(var(--ig-surface-500), var(--ig-surface-a)));
  color: var(--active-color, hsla(var(--ig-primary-500), var(--ig-primary-a)));
}
[part~=active]:hover {
  color: var(--active-color, hsla(var(--ig-primary-500), var(--ig-primary-a)));
}

[part~=selected] {
  background: var(--selected-background, hsla(var(--ig-primary-500), var(--ig-primary-a)));
  color: var(--selected-color, var(--ig-primary-600-contrast));
}

[part~=selected][part~=focused][part~=active],
[part~=selected][part~=focused],
[part~=selected][part~=active] {
  background: var(--active-selected-background, hsla(var(--ig-primary-400), var(--ig-primary-a)));
  color: var(--active-selected-color, var(--ig-primary-400-contrast));
}

[part~=select] {
  -webkit-margin-end: 0.5rem;
          margin-inline-end: 0.5rem;
}

[part~=focused] {
  -webkit-box-shadow: inset 0 0 0 1px var(--focused-border-color, hsla(var(--ig-primary-300), var(--ig-primary-a)));
          box-shadow: inset 0 0 0 1px var(--focused-border-color, hsla(var(--ig-primary-300), var(--ig-primary-a)));
}`;var En=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n};k(U,Rt,qt);const Mn={small:.5,medium:2/3,large:1};let On=class extends i.oi{constructor(){super(...arguments),this.focusedProgrammatically=!1,this.parent=null,this.init=!1,this.isFocused=!1,this.hasChildren=!1,this.level=0,this.indeterminate=!1,this.label="",this.expanded=!1,this.active=!1,this.disabled=!1,this.selected=!1,this.loading=!1,this.value=void 0}bothChange(){this.hasChildren?this.setAttribute("aria-expanded",this.expanded.toString()):this.removeAttribute("aria-expanded")}expandedChange(e){var t;null===(t=this.navService)||void 0===t||t.update_visible_cache(this,this.expanded),e&&Promise.resolve().then((()=>{var e,t,a,i;(null===(e=this.navService)||void 0===e?void 0:e.focusedItem)===this||this.isFocused||null===(i=null===(a=null===(t=this.navService)||void 0===t?void 0:t.focusedItem)||void 0===a?void 0:a.wrapper)||void 0===i||i.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"})}))}activeChange(){var e,t;this.active&&(null===(e=this.navService)||void 0===e?void 0:e.activeItem)===this||!this.active||(this.navService&&this.navService.setActiveItem(this,!1),null===(t=this.tree)||void 0===t||t.expandToItem(this),Promise.resolve().then((()=>{var e;null===(e=this.wrapper)||void 0===e||e.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"})})))}disabledChange(){var e;null===(e=this.navService)||void 0===e||e.update_disabled_cache(this)}selectedChange(){var e,t,a,i;this.selected&&!(null===(e=this.selectionService)||void 0===e?void 0:e.isItemSelected(this))&&(null===(t=this.selectionService)||void 0===t||t.selectItemsWithNoEvent([this])),!this.selected&&(null===(a=this.selectionService)||void 0===a?void 0:a.isItemSelected(this))&&(null===(i=this.selectionService)||void 0===i||i.deselectItemsWithNoEvent([this]))}connectedCallback(){var e,t;super.connectedCallback(),this.tree=this.closest("igc-tree"),this.parent="igc-tree-item"===(null===(e=this.parentElement)||void 0===e?void 0:e.tagName.toLowerCase())?this.parentElement:null,this.level=this.parent?this.parent.level+1:0,this.setAttribute("role","treeitem"),this.addEventListener("blur",this.onBlur),this.addEventListener("focus",this.onFocus),this.addEventListener("pointerdown",this.pointerDown),this.activeChange(),this.init?this.selectedChange():null===(t=this.selectionService)||void 0===t||t.retriggerItemState(this),this.init=!1}disconnectedCallback(){var e,t;super.disconnectedCallback(),null===(e=this.selectionService)||void 0===e||e.ensureStateOnItemDelete(this),null===(t=this.navService)||void 0===t||t.delete_item(this)}get selectionService(){var e;return null===(e=this.tree)||void 0===e?void 0:e.selectionService}get navService(){var e;return null===(e=this.tree)||void 0===e?void 0:e.navService}get parts(){return{selected:this.selected,focused:this.isFocused,active:this.active}}get directChildren(){return Array.from(this.children).filter((e=>"igc-tree-item"===e.tagName.toLowerCase()))}get allChildren(){return Array.from(this.querySelectorAll("igc-tree-item"))}get path(){var e;return(null===(e=this.parent)||void 0===e?void 0:e.path)?[...this.parent.path,this]:[this]}pointerDown(e){var t;e.stopPropagation(),this.disabled||(this.tabIndex=0,null===(t=this.navService)||void 0===t||t.setFocusedAndActiveItem(this,!0,!1))}expandIndicatorClick(){this.disabled||(this.expanded?this.collapseWithEvent():this.expandWithEvent())}selectorClick(e){var t,a,i;e.preventDefault(),e.shiftKey?null===(t=this.selectionService)||void 0===t||t.selectMultipleItems(this):this.selected?null===(a=this.selectionService)||void 0===a||a.deselectItem(this):null===(i=this.selectionService)||void 0===i||i.selectItem(this)}onFocus(){var e,t,a;if(!this.disabled){if((null===(e=this.navService)||void 0===e?void 0:e.focusedItem)!==this&&(null===(t=this.navService)||void 0===t||t.focusItem(this,!1),null===(a=this.wrapper)||void 0===a||a.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"})),this.tabbableEl&&this.tabbableEl.length)return this.tabbableEl.forEach((e=>{e.tabIndex=0})),this.focusedProgrammatically=!0,void this.tabbableEl[0].focus();this.isFocused=!0}}onBlur(){this.isFocused=!1}onFocusIn(e){var t;null==e||e.stopPropagation(),this.disabled||(this.focusedProgrammatically||null===(t=this.tabbableEl)||void 0===t||t.forEach((e=>{e.tabIndex=0})),this.removeAttribute("tabIndex"),this.isFocused=!0,this.focusedProgrammatically=!1)}onFocusOut(e){var t,a;null==e||e.stopPropagation(),this.isFocused=!1,null===(t=this.tabbableEl)||void 0===t||t.forEach((e=>{e.tabIndex=-1})),(null===(a=this.navService)||void 0===a?void 0:a.focusedItem)===this&&this.setAttribute("tabindex","0")}labelChange(){const e=this.contentList[0],t='a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])';this.tabbableEl=[...e.querySelectorAll(t)],e.matches(t)&&this.tabbableEl.splice(0,0,e),this.tabbableEl&&this.tabbableEl.length?(this.setAttribute("role","none"),this.tabbableEl[0].setAttribute("role","treeitem"),this.tabbableEl.forEach((e=>{e.tabIndex=-1}))):this.setAttribute("role","treeitem")}handleChange(){var e;this.hasChildren=!!this.directChildren.length,null===(e=this.navService)||void 0===e||e.update_visible_cache(this,this.expanded,!1)}getChildren(e={flatten:!1}){return e.flatten?this.allChildren:this.directChildren}expandWithEvent(){var e,t,a;if(this.expanded)return;const i={detail:this,cancelable:!0};if(null===(e=this.tree)||void 0===e?void 0:e.emitEvent("igcItemExpanding",i)){if(null===(t=this.tree)||void 0===t?void 0:t.singleBranchExpand){const e=new Set(this.path.splice(0,this.path.length-1));this.tree.items.forEach((t=>{e.has(t)||t.collapseWithEvent()}))}this.expanded=!0,null===(a=this.tree)||void 0===a||a.emitEvent("igcItemExpanded",{detail:this})}}collapseWithEvent(){var e,t;if(!this.expanded)return;const a={detail:this,cancelable:!0};(null===(e=this.tree)||void 0===e?void 0:e.emitEvent("igcItemCollapsing",a))&&(this.expanded=!1,null===(t=this.tree)||void 0===t||t.emitEvent("igcItemCollapsed",{detail:this}))}toggle(){this.expanded=!this.expanded}expand(){this.expanded=!0}collapse(){this.expanded=!1}render(){var e,t,a;const r=this.level*(this.tree?Mn[this.tree.size]:1);return i.dy`
      <div
        id="wrapper"
        part="wrapper ${null===(e=this.tree)||void 0===e?void 0:e.size} ${$(this.parts)}"
      >
        <div
          style="width: calc(${r} * var(--igc-tree-indentation-size))"
          part="indentation"
          aria-hidden="true"
        >
          <slot name="indentation"></slot>
        </div>
        <div part="indicator" aria-hidden="true">
          ${this.loading?i.dy`
                <slot name="loading">
                  <igc-circular-progress indeterminate></igc-circular-progress>
                </slot>
              `:i.dy`
                <slot name="indicator" @click=${this.expandIndicatorClick}>
                  ${this.hasChildren?i.dy`
                        <igc-icon
                          name=${this.expanded?"keyboard_arrow_down":"rtl"===(null===(t=this.tree)||void 0===t?void 0:t.dir)?"navigate_before":"keyboard_arrow_right"}
                          collection="internal"
                        >
                        </igc-icon>
                      `:""}
                </slot>
              `}
        </div>
        ${"none"!==(null===(a=this.tree)||void 0===a?void 0:a.selection)?i.dy`
              <div part="select" aria-hidden="true">
                <igc-checkbox
                  @click=${this.selectorClick}
                  .checked=${this.selected}
                  .indeterminate=${this.indeterminate}
                  .disabled=${this.disabled}
                  tabindex="-1"
                >
                </igc-checkbox>
              </div>
            `:""}
        <div part="label">
          <slot
            name="label"
            @slotchange=${this.labelChange}
            @focusin=${this.onFocusIn}
            @focusout=${this.onFocusOut}
          >
            <span part="text">${this.label}</span>
          </slot>
        </div>
      </div>
      <div role="group">
        <slot @slotchange=${this.handleChange} ?hidden=${!this.expanded}></slot>
      </div>
    `}};On.tagName="igc-tree-item",On.styles=In,En([(e,t)=>{}],On.prototype,"tree",void 0),En([(e,t)=>{}],On.prototype,"init",void 0),En([(0,r.NH)({slot:"label",flatten:!0})],On.prototype,"contentList",void 0),En([(0,r.IO)("#wrapper"),(e,t)=>{}],On.prototype,"wrapper",void 0),En([(0,r.SB)()],On.prototype,"isFocused",void 0),En([(0,r.SB)(),(e,t)=>{}],On.prototype,"hasChildren",void 0),En([(0,r.SB)()],On.prototype,"level",void 0),En([(0,r.SB)(),(e,t)=>{}],On.prototype,"indeterminate",void 0),En([(0,r.Cb)()],On.prototype,"label",void 0),En([(0,r.Cb)({reflect:!0,type:Boolean})],On.prototype,"expanded",void 0),En([(0,r.Cb)({reflect:!0,type:Boolean})],On.prototype,"active",void 0),En([(0,r.Cb)({reflect:!0,type:Boolean})],On.prototype,"disabled",void 0),En([(0,r.Cb)({reflect:!0,type:Boolean})],On.prototype,"selected",void 0),En([(0,r.Cb)({reflect:!0,type:Boolean})],On.prototype,"loading",void 0),En([(0,r.Cb)({attribute:!0})],On.prototype,"value",void 0),En([m("expanded",{waitUntilFirstUpdate:!0}),m("hasChildren",{waitUntilFirstUpdate:!0})],On.prototype,"bothChange",null),En([m("expanded")],On.prototype,"expandedChange",null),En([m("active",{waitUntilFirstUpdate:!0})],On.prototype,"activeChange",null),En([m("disabled")],On.prototype,"disabledChange",null),En([m("selected",{waitUntilFirstUpdate:!0})],On.prototype,"selectedChange",null),En([(e,t)=>{}],On.prototype,"getChildren",null),On=En([b({bootstrap:$n,fluent:Pn,indigo:Tn})],On);const An=On;var Vn=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n};k(An);let Ln=class extends(p(z(i.oi))){onDirChange(){var e;null===(e=this.items)||void 0===e||e.forEach((e=>{e.requestUpdate()}))}onSizeChange(){var e,t,a;null===(e=this.items)||void 0===e||e.forEach((e=>{e.requestUpdate()})),null===(a=null===(t=this.navService.activeItem)||void 0===t?void 0:t.wrapper)||void 0===a||a.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"})}selectionModeChange(){var e;this.selectionService.clearItemsSelection(),null===(e=this.items)||void 0===e||e.forEach((e=>{e.requestUpdate()}))}singleBranchExpandChange(){if(this.singleBranchExpand)if(this.navService.activeItem){const e=this.navService.activeItem.path,t=new Set(e.splice(0,e.length-1));this.items.forEach((e=>{t.has(e)||e.collapseWithEvent()}))}else this.items.forEach((e=>e.collapseWithEvent()))}constructor(){super(),this.singleBranchExpand=!1,this.selection="none",this.dir="auto",this.selectionService=new Sn(this),this.navService=new Dn(this,this.selectionService)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.addEventListener("keydown",this.handleKeydown),this.items.forEach((e=>{e.init=!0}));const e=this.items.find((e=>!e.disabled));e&&(e.tabIndex=0,this.navService.focusItem(e))}get items(){return Array.from(this.querySelectorAll("igc-tree-item"))}handleKeydown(e){this.navService.handleKeydown(e)}expandToItem(e){e&&e.parent&&e.path.forEach((t=>{t===e||t.expanded||(t.expanded=!0)}))}select(e){e||(e="cascade"===this.selection?this.items.filter((e=>0===e.level)):this.items),this.selectionService.selectItemsWithNoEvent(e)}deselect(e){this.selectionService.deselectItemsWithNoEvent(e)}expand(e){(e=e||this.items).forEach((e=>e.expanded=!0))}collapse(e){(e=e||this.items).forEach((e=>e.expanded=!1))}render(){return i.dy`<slot></slot>`}};Ln.tagName="igc-tree",Ln.styles=zn,Vn([(e,t)=>{}],Ln.prototype,"selectionService",void 0),Vn([(e,t)=>{}],Ln.prototype,"navService",void 0),Vn([(0,r.Cb)({attribute:"single-branch-expand",reflect:!0,type:Boolean})],Ln.prototype,"singleBranchExpand",void 0),Vn([(0,r.Cb)({reflect:!0})],Ln.prototype,"selection",void 0),Vn([(0,r.Cb)({reflect:!0})],Ln.prototype,"dir",void 0),Vn([m("dir")],Ln.prototype,"onDirChange",null),Vn([m("size",{waitUntilFirstUpdate:!0})],Ln.prototype,"onSizeChange",null),Vn([m("selection",{waitUntilFirstUpdate:!0})],Ln.prototype,"selectionModeChange",null),Vn([m("singleBranchExpand")],Ln.prototype,"singleBranchExpandChange",null),Vn([(e,t)=>{}],Ln.prototype,"items",null),Vn([(e,t)=>{}],Ln.prototype,"select",null),Vn([(e,t)=>{}],Ln.prototype,"deselect",null),Vn([(e,t)=>{}],Ln.prototype,"expand",null),Vn([(e,t)=>{}],Ln.prototype,"collapse",null),Ln=Vn([e=>e],Ln);const Rn=Ln,Fn=i.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  --title-color: var(--ig-gray-50-contrast);
  --subtitle-color: hsla(var(--ig-gray-700), var(--ig-gray-a));
  --separator-color: hsla(var(--ig-gray-300), var(--ig-gray-a));
  --separator-color--completed: hsla(var(--ig-gray-900), var(--ig-gray-a));
  --header-color: var(--ig-gray-50-contrast);
  --header-background--hover: hsla(var(--ig-gray-200), var(--ig-gray-a));
  --header-background--focus: hsla(var(--ig-gray-100), var(--ig-gray-a));
  --header-shadow: hsla(var(--ig-gray-50), 0);
  --indicator-color: hsla(var(--ig-gray-900), var(--ig-gray-a));
  --indicator-background: hsla(var(--ig-gray-400), var(--ig-gray-a));
  --indicator-shadow: var(--indicator-background);
  --optional-indicator-color: var(--indicator-color);
  --optional-indicator-background: var(--indicator-background);
  --optional-indicator-shadow: var(--indicator-shadow);
  --completed-indicator-color: var(--indicator-color);
  --completed-indicator-background: var(--indicator-background);
  --completed-indicator-shadow: var(--indicator-shadow);
  --active-indicator-color: var(--ig-primary-800-contrast);
  --active-indicator-background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  --active-indicator-shadow: var(--active-indicator-background);
  --active-title-color: var(--title-color);
  --active-subtitle-color: var(--subtitle-color);
  --error-color: var(--ig-error-800-contrast);
  --error-background: hsla(var(--ig-error-500), var(--ig-error-a));
  --error-shadow: var(--error-background);
  --disabled-color: hsla(var(--ig-gray-500), var(--ig-gray-a));
  --disabled-background: hsla(var(--ig-gray-100), var(--ig-gray-a));
  --disabled-shadow: var(--disabled-background);
  -webkit-box-align: start;
      -ms-flex-align: start;
          align-items: flex-start;
}

[part~=header-container],
[part~=header] {
  width: var(--header-width-vertical, auto);
}
[part~=header-container]::before,
[part~=header]::before {
  content: "";
  width: auto;
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
  -webkit-border-before: var(--separator-size) var(--separator-type) var(--separator-color);
          border-block-start: var(--separator-size) var(--separator-type) var(--separator-color);
  height: var(--separator-size);
  position: relative;
}

[part~=header-container] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  pointer-events: none;
  position: relative;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  z-index: 0;
}
[part~=header-container] [part~=header] {
  pointer-events: all;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
[part~=header-container] [part=indicator],
[part~=header-container] [part=title],
[part~=header-container] [part=subtitle] {
  pointer-events: none;
}
[part~=header-container]::before {
  min-width: var(--separator-min-width);
  display: var(--hide-horizontal-separator, var(--horizontal-separator-display--first-of-type));
}

[part~=header] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: var(--align-items, flex-start);
      -ms-flex-align: var(--align-items, flex-start);
          align-items: var(--align-items, flex-start);
  grid-row: var(--header-bottom, 1);
  position: relative;
  overflow: hidden;
  padding: var(--header-padding);
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  gap: var(--header-gap);
  color: var(--header-color);
  z-index: var(--vertical-header-z-index);
}
[part~=header]::before, [part~=header]::after {
  content: "";
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
  -webkit-border-before: var(--separator-size) var(--separator-type) var(--separator-color);
          border-block-start: var(--separator-size) var(--separator-type) var(--separator-color);
  height: var(--separator-size);
  min-width: var(--separator-min-width--header);
  width: calc(50% - var(--indicator-size) / 2 - var(--header-padding));
  position: absolute;
  z-index: -1;
}
[part~=header]::before {
  inset-inline-start: 0;
  /* stylelint-disable */
  display: var(--hide-horizontal-separator, var(--separator-disply-not-full, var(--horizontal-separator-display--first-of-type)));
  /* stylelint-enable */
}
[part~=header]::after {
  inset-inline-end: 0;
  /* stylelint-disable */
  display: var(--hide-horizontal-separator, var(--separator-disply-not-full, var(--horizontal-separator-display--last-of-type)));
  /* stylelint-enable */
}
[part~=header]:focus, [part~=header]:hover {
  cursor: pointer;
  outline: none;
}
[part~=header]:hover {
  background: var(--header-background--hover);
}
[part~=header]:hover::before, [part~=header]:hover::after {
  visibility: var(--header-separator-visibility--hover);
}
[part~=header]:focus, [part~=header]:focus-within, [part~=header]:active {
  background: var(--header-background--focus);
  -webkit-box-shadow: inset 0 0 0 0.0625rem var(--header-shadow);
          box-shadow: inset 0 0 0 0.0625rem var(--header-shadow);
}
[part~=header]:focus::before, [part~=header]:focus::after, [part~=header]:focus-within::before, [part~=header]:focus-within::after, [part~=header]:active::before, [part~=header]:active::after {
  visibility: var(--header-separator-visibility--hover);
}

[part~=body] {
  display: var(--vertical-body-disply--last-of-type, var(--vertical-body-disply, none));
  grid-row-start: var(--body-top, 2);
  grid-column: span var(--steps-count);
  -webkit-margin-start: calc(var(--body-indent--vertical) / 2);
          margin-inline-start: calc(var(--body-indent--vertical) / 2);
  -webkit-padding-start: var(--horizontal-body-padding, calc(var(--body-indent--vertical) / 2));
          padding-inline-start: var(--horizontal-body-padding, calc(var(--body-indent--vertical) / 2));
  -webkit-padding-end: var(--horizontal-body-padding, var(--vertical-body-padding));
          padding-inline-end: var(--horizontal-body-padding, var(--vertical-body-padding));
  -webkit-padding-before: var(--horizontal-body-padding, var(--vertical-body-padding));
          padding-block-start: var(--horizontal-body-padding, var(--vertical-body-padding));
  -webkit-padding-after: var(--horizontal-body-padding, var(--vertical-body-padding));
          padding-block-end: var(--horizontal-body-padding, var(--vertical-body-padding));
  z-index: 1;
  position: relative;
  color: hsla(var(--ig-gray-900), var(--ig-gray-a));
  width: 0;
  min-width: 100%;
}
[part~=body]::before {
  display: var(--hide-last-separator, var(--hide-first-separator, var(--vertical-separator-visibility)));
  content: "";
  position: absolute;
  inset-inline-start: calc(var(--separator-size) / 2 * -1);
  height: 100%;
  inset-block-start: 0 !important;
  -webkit-border-start: var(--separator-size) var(--separator-type) var(--separator-color);
          border-inline-start: var(--separator-size) var(--separator-type) var(--separator-color);
}

[part=content] {
  display: var(--horizontal-content-disply, none);
}

[part~=top] {
  -webkit-box-align: var(--step-not-full-header-aligmnet, flex-end);
      -ms-flex-align: var(--step-not-full-header-aligmnet, flex-end);
          align-items: var(--step-not-full-header-aligmnet, flex-end);
}
[part~=top]::before, [part~=top]::after {
  inset-block-end: var(--step-separator-position);
}
[part~=top] [part~=header] {
  -webkit-box-align: var(--align-items, flex-start);
      -ms-flex-align: var(--align-items, flex-start);
          align-items: var(--align-items, flex-start);
  -webkit-box-orient: vertical;
  -webkit-box-direction: reverse;
      -ms-flex-direction: column-reverse;
          flex-direction: column-reverse;
}
[part~=top] [part~=header]::before, [part~=top] [part~=header]::after {
  inset-block-end: var(--step-separator-position);
}

[part~=bottom] {
  -webkit-box-align: var(--step-not-full-header-aligmnet, start);
      -ms-flex-align: var(--step-not-full-header-aligmnet, start);
          align-items: var(--step-not-full-header-aligmnet, start);
}
[part~=bottom]::before, [part~=bottom]::after {
  inset-block-start: var(--step-separator-position);
}
[part~=bottom] [part~=header] {
  -webkit-box-align: var(--align-items, flex-start);
      -ms-flex-align: var(--align-items, flex-start);
          align-items: var(--align-items, flex-start);
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}
[part~=bottom] [part~=header]::before, [part~=bottom] [part~=header]::after {
  inset-block-start: var(--step-separator-position);
}

[part~=top] [part~=text],
[part~=bottom] [part~=text] {
  width: 100%;
}

[part~=start] [part=text] {
  -webkit-box-ordinal-group: 0;
      -ms-flex-order: -1;
          order: -1;
}

[part~=start],
[part~=end] {
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
[part~=start] [part~=text],
[part~=end] [part~=text] {
  overflow: hidden;
}
[part~=start] [part~=header]::before, [part~=start] [part~=header]::after,
[part~=end] [part~=header]::before,
[part~=end] [part~=header]::after {
  display: none;
}

[part~=indicator] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  width: var(--indicator-size);
  min-width: var(--indicator-size);
  height: var(--indicator-size);
  position: relative;
}
[part~=indicator] span {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  width: var(--indicator-size);
  height: var(--indicator-size);
  border-radius: var(--indicator-roundness);
  background: var(--indicator-background);
  color: var(--indicator-color);
  -webkit-box-shadow: inset 0 0 0 var(--indicator-box-shadow-size) var(--indicator-shadow);
          box-shadow: inset 0 0 0 var(--indicator-box-shadow-size) var(--indicator-shadow);
  font-family: var(--ig-caption-font-family, var(--ig-font-family));
  font-size: var(--ig-caption-font-size);
  font-weight: var(--ig-caption-font-weight);
  font-style: var(--ig-caption-font-style);
  line-height: var(--ig-caption-line-height);
  letter-spacing: var(--ig-caption-letter-spacing);
  text-transform: var(--ig-caption-text-transform);
  margin-top: var(--ig-caption-margin-top);
  margin-bottom: var(--ig-caption-margin-bottom);
}

[part~=text] {
  text-align: var(--align-text, initial);
  min-width: var(--indicator-size);
}

[part~=subtitle],
[part~=title] {
  overflow: hidden;
  -o-text-overflow: ellipsis;
     text-overflow: ellipsis;
  white-space: nowrap;
}

[part~=title] {
  font-family: var(--ig-body-2-font-family, var(--ig-font-family));
  font-size: var(--ig-body-2-font-size);
  font-weight: var(--ig-body-2-font-weight);
  font-style: var(--ig-body-2-font-style);
  line-height: var(--ig-body-2-line-height);
  letter-spacing: var(--ig-body-2-letter-spacing);
  text-transform: var(--ig-body-2-text-transform);
  margin-top: var(--ig-body-2-margin-top);
  margin-bottom: var(--ig-body-2-margin-bottom);
  color: var(--title-color);
}

[part~=subtitle] {
  font-family: var(--ig-caption-font-family, var(--ig-font-family));
  font-size: var(--ig-caption-font-size);
  font-weight: var(--ig-caption-font-weight);
  font-style: var(--ig-caption-font-style);
  line-height: var(--ig-caption-line-height);
  letter-spacing: var(--ig-caption-letter-spacing);
  text-transform: var(--ig-caption-text-transform);
  margin-top: var(--ig-caption-margin-top);
  margin-bottom: var(--ig-caption-margin-bottom);
  color: var(--subtitle-color);
}

[part~=empty] {
  display: none;
}

[part~=optional] [part~=indicator] span {
  color: var(--optional-indicator-color);
  background: var(--optional-indicator-background);
  -webkit-box-shadow: inset 0 0 0 var(--indicator-box-shadow-size) var(--optional-indicator-shadow);
          box-shadow: inset 0 0 0 var(--indicator-box-shadow-size) var(--optional-indicator-shadow);
}

[part~=complete-start]::after {
  border-block-start-style: var(--separator-type--completed);
  border-block-start-color: var(--separator-color--completed);
}
[part~=complete-start] [part~=header]::after {
  border-block-start-style: var(--separator-type--completed);
  border-block-start-color: var(--separator-color--completed);
}
[part~=complete-start] [part~=indicator] span {
  background: var(--completed-indicator-background);
  color: var(--completed-indicator-color);
  -webkit-box-shadow: inset 0 0 0 var(--indicator-box-shadow-size) var(--completed-indicator-shadow);
          box-shadow: inset 0 0 0 var(--indicator-box-shadow-size) var(--completed-indicator-shadow);
}

:host([complete]) [part~=body]::before {
  border-inline-start-style: var(--separator-type--completed);
  border-inline-start-color: var(--separator-color--completed);
}

[part~=complete-end]::before {
  border-block-start-style: var(--separator-type--completed);
  border-block-start-color: var(--separator-color--completed);
}
[part~=complete-end] [part~=header]::before {
  border-block-start-style: var(--separator-type--completed);
  border-block-start-color: var(--separator-color--completed);
}

[part~=invalid] [part~=indicator] span {
  color: var(--error-color);
  background: var(--error-background);
  -webkit-box-shadow: inset 0 0 0 var(--indicator-box-shadow-size) var(--error-shadow);
          box-shadow: inset 0 0 0 var(--indicator-box-shadow-size) var(--error-shadow);
}
[part~=invalid] [part~=title],
[part~=invalid] [part~=subtitle] {
  color: var(--error-background);
}

:host([active]) [part~=body] {
  display: var(--vertical-body-disply, block);
}
:host([active]) [part~="body bottom"]::before {
  inset-block-start: 0;
}
:host([active]) [part=content] {
  display: var(--horizontal-content-disply, block);
  pointer-events: all;
}
:host([active]) [part~=indicator] span {
  background: var(--active-indicator-background);
  color: var(--active-indicator-color);
  -webkit-box-shadow: inset 0 0 0 var(--indicator-box-shadow-size) var(--active-indicator-shadow);
          box-shadow: inset 0 0 0 var(--indicator-box-shadow-size) var(--active-indicator-shadow);
}
:host([active]) [part~=title] {
  color: var(--active-title-color);
  font-weight: 600;
}
:host([active]) [part~=subtitle] {
  color: var(--active-subtitle-color);
}

[part~=disabled] [part=header] {
  background: hsla(var(--ig-gray-50), 0);
}
[part~=disabled]:focus [part=header], [part~=disabled]:focus-visible [part=header], [part~=disabled]:focus-within [part=header], [part~=disabled]:active [part=header], [part~=disabled]:hover [part=header] {
  background: hsla(var(--ig-gray-50), 0);
  cursor: default;
  -webkit-box-shadow: inset 0 0 0 0.0625rem hsla(var(--ig-gray-50), 0);
          box-shadow: inset 0 0 0 0.0625rem hsla(var(--ig-gray-50), 0);
}
[part~=disabled] [part~=indicator] span {
  color: var(--disabled-color);
  background: var(--disabled-background);
  -webkit-box-shadow: inset 0 0 0 var(--indicator-box-shadow-size) var(--disabled-shadow);
          box-shadow: inset 0 0 0 var(--indicator-box-shadow-size) var(--disabled-shadow);
}
[part~=disabled] [part~=title],
[part~=disabled] [part~=subtitle] {
  color: var(--disabled-color);
}`,_n=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  --separator-color: hsla(var(--ig-gray-300), var(--ig-gray-a));
  --separator-color--completed: hsla(var(--ig-primary-500), var(--ig-primary-a));
  --header-background--hover: hsla(var(--ig-gray-300), 0.5);
  --header-background--focus: var(--header-background--hover);
  --header-shadow: hsla(var(--ig-gray-300), var(--ig-gray-a));
  --indicator-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
  --indicator-background: hsla(var(--ig-gray-50), 0);
  --indicator-shadow: hsla(var(--ig-gray-400), var(--ig-gray-a));
  --optional-indicator-color: var(--indicator-color);
  --optional-indicator-background: var(--indicator-background);
  --optional-indicator-shadow: var(--indicator-shadow);
  --completed-indicator-color: var(--ig-gray-50-contrast);
  --completed-indicator-background: hsla(var(--ig-gray-400), var(--ig-gray-a));
  --completed-indicator-shadow: hsla(var(--ig-gray-400), var(--ig-gray-a));
  --active-title-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
  --active-subtitle-color: var(--active-title-color);
  --disabled-background: hsla(var(--ig-gray-50), 0);
  --disabled-shadow: hsla(var(--ig-gray-300), var(--ig-gray-a));
}`,jn=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  --header-color: hsla(var(--ig-gray-900), var(--ig-gray-a));
  --header-background--hover: hsla(var(--ig-gray-100), var(--ig-gray-a));
  --header-background--focus: hsla(var(--ig-gray-100), var(--ig-gray-a));
  --header-shadow: hsla(var(--ig-gray-50), 0);
  --title-color: hsla(var(--ig-gray-900), var(--ig-gray-a));
  --subtitle-color: hsla(var(--ig-gray-700), var(--ig-gray-a));
  --separator-color: hsla(var(--ig-gray-300), var(--ig-gray-a));
  --separator-color--completed: hsla(var(--ig-primary-500), var(--ig-primary-a));
  --separator-type: solid;
  --indicator-color: hsla(var(--ig-primary-500), var(--ig-primary-a));
  --indicator-background: hsla(var(--ig-gray-50), 0);
  --indicator-shadow: hsla(var(--ig-gray-300), var(--ig-gray-a));
  --optional-indicator-color: var(--indicator-color);
  --optional-indicator-background: var(--indicator-background);
  --optional-indicator-shadow: var(--indicator-shadow);
  --completed-indicator-color: var(--indicator-color);
  --completed-indicator-background: hsla(var(--ig-primary-100), var(--ig-primary-a));
  --completed-indicator-shadow: var(--completed-indicator-background);
  --active-indicator-color: var(--ig-primary-800-contrast);
  --active-indicator-background: hsla(var(--ig-primary-500), var(--ig-primary-a));
  --active-indicator-shadow: var(--active-indicator-background);
  --disabled-color: hsla(var(--ig-gray-500), var(--ig-gray-a));
  --disabled-background: hsla(var(--ig-gray-50), 0);
  --disabled-shadow: hsla(var(--ig-gray-200), var(--ig-gray-a));
}`,Bn=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  --indicator-color: hsla(var(--ig-gray-900), var(--ig-gray-a));
  --indicator-background: hsla(var(--ig-gray-50), 0);
  --indicator-shadow: var(--indicator-background);
  --completed-indicator-color: var(--ig-gray-50-contrast);
  --completed-indicator-background: hsla(var(--ig-gray-300), var(--ig-gray-a));
  --completed-indicator-shadow: hsla(var(--ig-gray-300), var(--ig-gray-a));
  --optional-indicator-color: var(--indicator-color);
  --optional-indicator-background: var(--indicator-background);
  --optional-indicator-shadow: var(--indicator-shadow);
  --disabled-background: hsla(var(--ig-gray-200), var(--ig-gray-a));
  --disabled-shadow: var(--disabled-background);
}`,Xn=i.iv`/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  --completed-indicator-color: var(--ig-gray-900-contrast);
  --completed-indicator-background: hsla(var(--ig-gray-900), var(--ig-gray-a));
  --completed-indicator-shadow: var(--completed-indicator-background);
}`;var Nn=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n};let Un=class extends i.oi{constructor(){super(...arguments),this.invalid=!1,this.active=!1,this.optional=!1,this.disabled=!1,this.complete=!1,this.previousComplete=!1,this.stepType="full",this.orientation="horizontal",this.index=-1,this.contentTop=!1,this.linearDisabled=!1,this.visited=!1}activeChange(){this.active&&this.dispatchEvent(new CustomEvent("stepActiveChanged",{bubbles:!0,detail:!1}))}disabledInvalidOptionalChange(){this.dispatchEvent(new CustomEvent("stepDisabledInvalidChanged",{bubbles:!0}))}completeChange(){this.dispatchEvent(new CustomEvent("stepCompleteChanged",{bubbles:!0}))}handleClick(e){e.stopPropagation(),this.isAccessible&&this.dispatchEvent(new CustomEvent("stepActiveChanged",{bubbles:!0,detail:!0}))}handleKeydown(e){this.dispatchEvent(new CustomEvent("stepHeaderKeydown",{bubbles:!0,detail:{event:e,focusedStep:this}}))}get isAccessible(){return!this.disabled&&!this.linearDisabled}get headerContainerParts(){return{"header-container":!0,disabled:!this.isAccessible,"complete-start":this.complete,"complete-end":this.previousComplete,optional:this.optional,invalid:this.invalid&&this.visited&&!this.active&&this.isAccessible,top:"top"===this.titlePosition,bottom:"bottom"===this.titlePosition||"horizontal"===this.orientation&&!this.titlePosition,start:"start"===this.titlePosition,end:"end"===this.titlePosition||"vertical"===this.orientation&&!this.titlePosition}}get textParts(){return{text:!0,empty:"indicator"===this.stepType||"full"===this.stepType&&!this._titleChildren.length&&!this._subTitleChildren.length}}renderIndicator(){return"title"!==this.stepType?i.dy`
        <div part="indicator">
          <slot name="indicator">
            <span>${this.index+1}</span>
          </slot>
        </div>
      `:i.Ld}renderTitleAndSubtitle(){return i.dy`
      <div part="${$(this.textParts)}">
        <div part="title">
          <slot name="title"></slot>
        </div>
        <div part="subtitle">
          <slot name="subtitle"></slot>
        </div>
      </div>
    `}renderContent(){return i.dy`<div
      id="igc-step-content-${this.index}"
      part="body"
      role="tabpanel"
      aria-labelledby="igc-step-header-${this.index}"
    >
      <div part="content">
        <slot></slot>
      </div>
    </div>`}render(){return i.dy`
      ${(0,Ft.g)(this.contentTop&&"horizontal"===this.orientation,(()=>this.renderContent()),(()=>i.Ld))}
      <div part="${$(this.headerContainerParts)}">
        <div
          part="header"
          tabindex="${this.active?"0":"-1"}"
          role="tab"
          aria-selected="${this.active}"
          @click=${this.handleClick}
          @keydown=${this.handleKeydown}
        >
          ${this.renderIndicator()} ${this.renderTitleAndSubtitle()}
        </div>
      </div>
      ${(0,Ft.g)("vertical"===this.orientation||!this.contentTop,(()=>this.renderContent()),(()=>i.Ld))}
    `}};Un.tagName="igc-step",Un.styles=Fn,Nn([(0,r.NH)({slot:"title"})],Un.prototype,"_titleChildren",void 0),Nn([(0,r.NH)({slot:"subtitle"})],Un.prototype,"_subTitleChildren",void 0),Nn([(0,r.IO)('[part~="header"]')],Un.prototype,"header",void 0),Nn([(0,r.IO)('[part~="body"]')],Un.prototype,"contentBody",void 0),Nn([(0,r.Cb)({reflect:!0,type:Boolean})],Un.prototype,"invalid",void 0),Nn([(0,r.Cb)({reflect:!0,type:Boolean})],Un.prototype,"active",void 0),Nn([(0,r.Cb)({type:Boolean})],Un.prototype,"optional",void 0),Nn([(0,r.Cb)({reflect:!0,type:Boolean})],Un.prototype,"disabled",void 0),Nn([(0,r.Cb)({reflect:!0,type:Boolean})],Un.prototype,"complete",void 0),Nn([(0,r.Cb)({attribute:!1})],Un.prototype,"previousComplete",void 0),Nn([(0,r.Cb)({attribute:!1})],Un.prototype,"stepType",void 0),Nn([(0,r.Cb)({attribute:!1})],Un.prototype,"titlePosition",void 0),Nn([(0,r.Cb)({attribute:!1})],Un.prototype,"orientation",void 0),Nn([(0,r.Cb)({attribute:!1})],Un.prototype,"index",void 0),Nn([(0,r.Cb)({attribute:!1})],Un.prototype,"contentTop",void 0),Nn([(0,r.Cb)({attribute:!1})],Un.prototype,"linearDisabled",void 0),Nn([(0,r.Cb)({attribute:!1})],Un.prototype,"visited",void 0),Nn([m("active",{waitUntilFirstUpdate:!0})],Un.prototype,"activeChange",null),Nn([m("disabled",{waitUntilFirstUpdate:!0}),m("invalid",{waitUntilFirstUpdate:!0}),m("optional",{waitUntilFirstUpdate:!0})],Un.prototype,"disabledInvalidOptionalChange",null),Nn([m("complete",{waitUntilFirstUpdate:!0})],Un.prototype,"completeChange",null),Un=Nn([b({bootstrap:_n,indigo:jn,fluent:Bn,material:Xn})],Un);const Kn=Un,Hn=i.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  font-family: var(--ig-font-family);
  --margin: 1rem;
  --body-padding: 1rem;
  --header-gap: 0.5rem;
  --header-padding: 0.5rem;
  --vertical-body-padding: var(--body-padding);
  --indicator-size: 1.5rem;
  --indicator-roundness: calc(var(--indicator-size) / 2);
  --indicator-box-shadow-size: 0.0625rem;
  --separator-size: 0.0625rem;
  --separator-type: dashed;
  --separator-type--completed: solid;
  --separator-position: calc(var(--header-padding) + (var(--indicator-size) / 2) - (var(--separator-size) / 2));
  --separator-min-width: 2.25rem;
  --separator-min-width--header: 0.25rem;
  --separator-min-width--full: calc(var(--separator-min-width) + var(--separator-min-width--header));
  --text-min-width: var(--indicator-size);
  --header-min-width: calc(var(--indicator-size) + (var(--header-padding) * 2));
  --step-min-width: calc(var(--header-min-width) + var(--separator-min-width--full));
  --step-min-width--first-step: var(--header-min-width);
}

:host([orientation=horizontal]) {
  --horizontal-content-disply: block;
  --vertical-separator-visibility: none;
  --horizontal-body-padding: 0.5rem;
  display: grid;
  /* stylelint-disable */
  grid-template-columns: minmax(var(--step-min-width--first-step), -webkit-max-content) repeat(calc(var(--steps-count) - 1), minmax(var(--step-min-width), auto));
  grid-template-columns: minmax(var(--step-min-width--first-step), max-content) repeat(calc(var(--steps-count) - 1), minmax(var(--step-min-width), auto));
  /* stylelint-enable */
}
:host([orientation=horizontal]) ::slotted(igc-step) {
  display: contents;
  pointer-events: none;
  --align-text: center;
  --align-items: center;
}
:host([orientation=horizontal]) ::slotted(igc-step:first-of-type) {
  --horizontal-separator-visibility--first-of-type: none;
}
:host([orientation=horizontal]) ::slotted(igc-step:last-of-type) {
  --horizontal-separator-visibility--last-of-type: none;
}

:host([orientation=horizontal][title-position=start]),
:host([orientation=horizontal][title-position=end]) {
  --step-min-width--first-step: calc(var(--header-min-width) + var(--indicator-size) + var(--header-padding));
  /* stylelint-disable */
  --step-min-width: calc(var(--header-min-width) + var(--separator-min-width--full) - var(--separator-min-width--header) + var(--indicator-size) + var(--header-padding));
  /* stylelint-enable */
}

::slotted(igc-step:first-of-type) {
  --horizontal-separator-display--first-of-type: none;
}

::slotted(igc-step:last-of-type) {
  --vertical-body-disply--last-of-type: none;
  --horizontal-separator-display--last-of-type: none;
}

:host(:not([step-type=full])) {
  /* stylelint-disable */
  --step-min-width: calc(var(--header-min-width) + var(--separator-min-width--full) - var(--separator-min-width--header));
  /* stylelint-enable */
  --separator-disply-not-full: none;
}
:host(:not([step-type=full])) ::slotted(igc-step) {
  --step-not-full-header-aligmnet: center;
}

:host([step-type=full]) ::slotted(igc-step) {
  --step-separator-position: var(--separator-position);
}

:host([content-top]) ::slotted(igc-step) {
  --header-bottom: 2;
  --body-top: 1;
}

:host(:not([orientation=horizontal])) {
  --vertical-header-z-index: 2;
  --vertical-body-disply: block;
  --header-width-vertical: 100%;
  --hide-horizontal-separator: none;
  display: block;
}
:host(:not([orientation=horizontal])) ::slotted(igc-step) {
  --horizontal-separator-display: none;
  --step-hide-last-of-type: none;
  --step-hide-first-of-type: none;
  --step-width: 100%;
  --body-indent--vertical: calc(var(--header-padding) + var(--indicator-size) + var(--header-gap));
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}
:host(:not([orientation=horizontal])) ::slotted(igc-step:last-of-type) {
  --hide-last-separator: none;
}`,Yn=i.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  --header-gap: 0.5rem;
  --header-padding: 0.5rem;
  --step-not-top-bottom-min-width: 6rem;
  --indicator-size: 2.5rem;
  --indicator-roundness: 0.25rem;
  --separator-size: 0.5rem;
  --indicator-box-shadow-size: 0.0625rem;
  --separator-type: solid;
}`,qn=i.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  --indicator-roundness: 0.125rem;
  --indicator-box-shadow-size: 0.0625rem;
}`,Wn=i.iv`:host {
  --is-large: clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-large, 3), 1);
  --is-medium:
      min(
          clamp(0, (var(--component-size, 1) + 1) - var(--ig-size-medium, 2), 1),
          clamp(0, var(--ig-size-large, 3) - var(--component-size, 1), 1)
      );
  --is-small: clamp(0, var(--ig-size-medium) - var(--component-size, 1), 1);
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  scrollbar-width: var(--ig-scrollbar-size);
  scrollbar-color: var(--ig-scrollbar-thumb-background) var(--ig-scrollbar-track-background);
}
:host *,
:host *::before,
:host *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
:host ::-webkit-scrollbar {
  width: var(--ig-scrollbar-size);
  height: var(--ig-scrollbar-size);
  background: var(--ig-scrollbar-track-background);
}
:host ::-webkit-scrollbar-thumb {
  background: var(--ig-scrollbar-thumb-background);
}

[hidden] {
  display: none !important;
}

/* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */ /* stylelint-disable max-line-length */
:host {
  --indicator-box-shadow-size: 0.125rem;
  --separator-size: 0.125rem;
}`;var Qn=function(e,t,a,i){var r,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(l<3?r(n):l>3?r(t,a,n):r(t,a))||n);return l>3&&n&&Object.defineProperty(t,a,n),n};k(Kn);let Gn=class extends(p(z(i.oi))){orientationChange(){this.setAttribute("aria-orientation",this.orientation),this.steps.forEach((e=>e.orientation=this.orientation))}stepTypeChange(){this.steps.forEach((e=>e.stepType=this.stepType))}titlePositionChange(){this.steps.forEach((e=>e.titlePosition=this.titlePosition))}contentTopChange(){this.steps.forEach((e=>e.contentTop=this.contentTop))}linearChange(){this.steps.forEach((e=>{e.linearDisabled=this.linear,e.index<=this.activeStep.index?e.visited=!0:e.visited=!1})),this.linear&&this.updateStepsLinearDisabled()}constructor(){super(),this.keyDownHandlers=new Map(Object.entries({Enter:this.activateStep,Space:this.activateStep,SpaceBar:this.activateStep," ":this.activateStep,ArrowUp:this.onArrowUpKeyDown,ArrowDown:this.onArrowDownKeyDown,ArrowLeft:this.onArrowLeftKeyDown,ArrowRight:this.onArrowRightKeyDown,Home:this.onHomeKey,End:this.onEndKey})),this.orientation="horizontal",this.stepType="full",this.linear=!1,this.contentTop=!1,this.dir="auto",this.addEventListener("stepActiveChanged",(e=>{e.stopPropagation(),this.activateStep(e.target,e.detail)})),this.addEventListener("stepDisabledInvalidChanged",(e=>{e.stopPropagation(),this.linear&&this.updateStepsLinearDisabled()})),this.addEventListener("stepCompleteChanged",(e=>{e.stopPropagation();const t=this.steps[e.target.index+1];t&&(t.previousComplete=e.target.complete)})),this.addEventListener("stepHeaderKeydown",(e=>{e.stopPropagation(),this.handleKeydown(e.detail.event,e.detail.focusedStep)}))}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tablist"),this.setAttribute("aria-orientation",this.orientation)}activateFirstStep(){const e=this.steps.find((e=>!e.disabled));e&&this.activateStep(e,!1)}activateStep(e,t=!0){if(e!==this.activeStep)if(t){const t={detail:{owner:this,oldIndex:this.activeStep.index,newIndex:e.index},cancelable:!0};if(!this.emitEvent("igcActiveStepChanging",t))return;this.changeActiveStep(e),this.emitEvent("igcActiveStepChanged",{detail:{owner:this,index:e.index}})}else this.changeActiveStep(e)}changeActiveStep(e){this.activeStep&&(this.activeStep.active=!1),e.active=!0,e.visited=!0,this.activeStep=e}moveToNextStep(e=!0){let t=this.steps,a=this.activeStep.index;e||(t=this.steps.reverse(),a=t.findIndex((e=>e===this.activeStep)));const i=t.find(((e,t)=>t>a&&e.isAccessible));i&&this.activateStep(i,!1)}handleKeydown(e,t){var a;const i=e.key.toLowerCase();this.keyDownHandlers.has(e.key)&&(e.preventDefault(),null===(a=this.keyDownHandlers.get(e.key))||void 0===a||a.call(this,t)),"tab"===i&&"vertical"===this.orientation||"tab"===i&&this.activeStep.index!==t.index&&this.activeStep.header.focus()}onHomeKey(){var e,t;null===(t=null===(e=this.steps.filter((e=>e.isAccessible))[0])||void 0===e?void 0:e.header)||void 0===t||t.focus()}onEndKey(){var e,t;null===(t=null===(e=this.steps.filter((e=>e.isAccessible)).pop())||void 0===e?void 0:e.header)||void 0===t||t.focus()}onArrowDownKeyDown(e){var t,a;"horizontal"!==this.orientation&&(null===(a=null===(t=this.getNextStep(e))||void 0===t?void 0:t.header)||void 0===a||a.focus())}onArrowUpKeyDown(e){var t,a;"horizontal"!==this.orientation&&(null===(a=null===(t=this.getPreviousStep(e))||void 0===t?void 0:t.header)||void 0===a||a.focus())}onArrowRightKeyDown(e){var t,a,i,r;"rtl"===this.dir&&"horizontal"===this.orientation?null===(a=null===(t=this.getPreviousStep(e))||void 0===t?void 0:t.header)||void 0===a||a.focus():null===(r=null===(i=this.getNextStep(e))||void 0===i?void 0:i.header)||void 0===r||r.focus()}onArrowLeftKeyDown(e){var t,a,i,r;"rtl"===this.dir&&"horizontal"===this.orientation?null===(a=null===(t=this.getNextStep(e))||void 0===t?void 0:t.header)||void 0===a||a.focus():null===(r=null===(i=this.getPreviousStep(e))||void 0===i?void 0:i.header)||void 0===r||r.focus()}getNextStep(e){if(e.index===this.steps.length-1)return this.steps.find((e=>e.isAccessible));const t=this.steps.find(((t,a)=>a>e.index&&t.isAccessible));return t||this.steps.find((e=>e.isAccessible))}getPreviousStep(e){if(0===e.index)return this.steps.filter((e=>e.isAccessible)).pop();let t;for(let a=e.index-1;a>=0;a--){const e=this.steps[a];if(e.isAccessible){t=e;break}}return t||this.steps.filter((e=>e.isAccessible)).pop()}updateStepsLinearDisabled(){const e=this.steps.filter((e=>!e.disabled&&!e.optional)).find((e=>e.invalid));e?this.steps.forEach((t=>{t.index<=e.index?t.linearDisabled=!1:t.linearDisabled=!0})):this.steps.forEach((e=>e.linearDisabled=!1))}syncProperties(){this.steps.forEach(((e,t)=>{var a,i,r,l;e.orientation=this.orientation,e.stepType=this.stepType,e.titlePosition=this.titlePosition,e.contentTop=this.contentTop,e.index=t,e.active=this.activeStep===e,null===(a=e.header)||void 0===a||a.setAttribute("aria-posinset",(t+1).toString()),null===(i=e.header)||void 0===i||i.setAttribute("aria-setsize",this.steps.length.toString()),null===(r=e.header)||void 0===r||r.setAttribute("id",`igc-step-header-${t}`),null===(l=e.header)||void 0===l||l.setAttribute("aria-controls",`igc-step-content-${t}`),t>0&&(e.previousComplete=this.steps[t-1].complete)}))}stepsChanged(){this.style.setProperty("--steps-count",this.steps.length.toString());const e=this.steps.reverse().find((e=>e.active));e?this.activateStep(e,!1):this.activateFirstStep(),this.syncProperties(),this.linear&&this.updateStepsLinearDisabled()}navigateTo(e){const t=this.steps[e];t&&this.activateStep(t,!1)}next(){this.moveToNextStep()}prev(){this.moveToNextStep(!1)}reset(){this.steps.forEach((e=>e.visited=!1)),this.activateFirstStep()}render(){return i.dy`<slot @slotchange=${this.stepsChanged}></slot>`}};Gn.tagName="igc-stepper",Gn.styles=Hn,Qn([(0,r.NH)({selector:"igc-step"})],Gn.prototype,"steps",void 0),Qn([(0,r.Cb)({reflect:!0})],Gn.prototype,"orientation",void 0),Qn([(0,r.Cb)({reflect:!0,attribute:"step-type"})],Gn.prototype,"stepType",void 0),Qn([(0,r.Cb)({type:Boolean})],Gn.prototype,"linear",void 0),Qn([(0,r.Cb)({reflect:!0,type:Boolean,attribute:"content-top"})],Gn.prototype,"contentTop",void 0),Qn([(0,r.Cb)({reflect:!0})],Gn.prototype,"dir",void 0),Qn([(0,r.Cb)({reflect:!1,attribute:"title-position"})],Gn.prototype,"titlePosition",void 0),Qn([m("orientation",{waitUntilFirstUpdate:!0})],Gn.prototype,"orientationChange",null),Qn([m("stepType",{waitUntilFirstUpdate:!0})],Gn.prototype,"stepTypeChange",null),Qn([m("titlePosition",{waitUntilFirstUpdate:!0})],Gn.prototype,"titlePositionChange",null),Qn([m("contentTop",{waitUntilFirstUpdate:!0})],Gn.prototype,"contentTopChange",null),Qn([m("linear",{waitUntilFirstUpdate:!0})],Gn.prototype,"linearChange",null),Gn=Qn([b({bootstrap:Yn,fluent:qn,indigo:Wn})],Gn);const Zn=Gn,Jn=[f,ee,le,ve,er,at,dt,mt,ft,kt,Dt,Rt,aa,qa,Oi,zi,Si,Ti,mi,kn,Z,ar,U,Ea,pr,wr,zr,Dr,Mr,Fr,Br,Yr,al,ol,ul,pl,fl,Vi,Li,Fi,Hi,Rn,An,_l,bn,Sl,Tl,nn,Jl,tn,qt,gr,Kt,Rl,li,Gn,Kn],es=()=>{k(...Jn)}}}]);