import{m as n}from"./mitt-70879f8c.js";const t=n(),i={global:!0,inject:!0,globalPropertyName:"$eventBus",injectName:"$eventBus"};t.install=r;function r(o,l){let e={...i,...l};return e.global&&(o.config.globalProperties[e.globalPropertyName]=t),e.inject&&o.provide(e.injectName,t),t}export{t as e};
