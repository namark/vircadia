"use strict";(globalThis["webpackChunkvircadia_domain_dashboard"]=globalThis["webpackChunkvircadia_domain_dashboard"]||[]).push([[133],{5593:(e,t,i)=>{i.d(t,{Z:()=>r});var a=i(7483),l=i(8563),n=function(e,t,i,a){function l(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,n){function s(e){try{r(a.next(e))}catch(t){n(t)}}function o(e){try{r(a["throw"](e))}catch(t){n(t)}}function r(e){e.done?i(e.value):l(e.value).then(s,o)}r((a=a.apply(e,t||[])).next())}))};const s=i(52),o=[],r={getValues(){return n(this,void 0,void 0,(function*(){let e={};try{const t="settings.json",i=yield(0,a.YW)(t);return e=i.values,e}catch(t){const e=(0,a.GD)(t);console.log(e)}return e}))},getDescriptions(){return n(this,void 0,void 0,(function*(){let e=[];try{const t="settings.json",i=yield(0,a.YW)(t);return e=i.descriptions,e}catch(t){const e=(0,a.GD)(t);console.log(e)}return e}))},commitSettings(e){return s.post("/settings.json",JSON.stringify(e)).then((()=>(l.Z.info(l.Z.types.DOMAIN,"Successfully committed settings."),!0))).catch((e=>(l.Z.error(l.Z.types.DOMAIN,`Failed to commit settings to Domain: ${e}`),!1)))},automaticCommitSettings(e){o.forEach(((e,t)=>{clearTimeout(e),o.splice(t,1)})),o.push(window.setTimeout(this.commitSettings,5e3,e))},createNewDomainID(e){return n(this,void 0,void 0,(function*(){try{const t=`label=${e}`,i=yield s.post("/api/domains",t);if("failure"===i.data.status)return"";const a=i.data.domain.domainId;return a}catch(t){return console.log(t),""}}))},getDomains(){return n(this,void 0,void 0,(function*(){let e=[];try{const t="api/domains",i=yield(0,a.YW)(t);return e=i.data.domains,e}catch(t){console.log(t)}return e}))}}},7483:(e,t,i)=>{i.d(t,{ge:()=>u,YW:()=>c,GD:()=>o});var a=i(52),l=i.n(a);const n="http://localhost:40100/";var s=function(e,t,i,a){function l(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,n){function s(e){try{r(a.next(e))}catch(t){n(t)}}function o(e){try{r(a["throw"](e))}catch(t){n(t)}}function r(e){e.done?i(e.value):l(e.value).then(s,o)}r((a=a.apply(e,t||[])).next())}))};function o(e){if("string"===typeof e)return e;const t=e;return"message"in t?t.message:`Error: ${JSON.stringify(e)}`}function r(e,t){return(null!==t&&void 0!==t?t:n)+e}function c(e,t){var i;return s(this,void 0,void 0,(function*(){const a=r(e,t);let n="";try{const t=yield l().get(a);if(t&&t.status){if(200===t.status)return t.data;n=`${null!==(i=t.statusText)&&void 0!==i?i:"unspecified"}`}else n=`Poorly formed response to GET ${e}: ${JSON.stringify(t)}`}catch(s){const t=o(s);n=`Exception on GET ${e}: ${t}`,console.log(n)}throw new Error(n)}))}function u(e,t){var i;return s(this,void 0,void 0,(function*(){const a=r(e,t);let n="";try{const t=yield l()["delete"](a);if(t&&t.status){if(200===t.status)return;n=`${null!==(i=t.statusText)&&void 0!==i?i:"unspecified"}`}else n=`Poorly formed response to DELETE ${e}: ${JSON.stringify(t)}`}catch(s){const t=o(s);n=`Exception on DELETE ${e}: ${t}`,console.log(n)}throw new Error(n)}))}},2133:(e,t,i)=>{i.r(t),i.d(t,{default:()=>we});var a=i(3673);const l={class:"q-pa-md"};function n(e,t,i,n,s,o){const r=(0,a.up)("SSLClientSettings"),c=(0,a.up)("MonitoringSettings"),u=(0,a.up)("SecuritySettings");return(0,a.wg)(),(0,a.iD)("div",l,[(0,a.Wm)(r),(0,a.Wm)(c),(0,a.Wm)(u)])}const s=(0,a._)("div",{class:"text-h5 text-center text-weight-bold q-mb-sm"},"SSL ACME Client",-1),o=(0,a._)("div",{class:"q-ml-xs q-mt-xs text-caption text-grey-5"},"Enables ACME client that will manage the SSL certificates.",-1),r=(0,a._)("div",{class:"q-ml-xs q-mt-xs text-caption text-grey-5"},"URL of the certificate issuer ACME directory endpoint.",-1),c=(0,a._)("div",{class:"q-ml-xs q-mt-xs text-caption text-grey-5"},"Use ZeroSSL Rest API Instead of ACME protocol.",-1),u=(0,a._)("div",{class:"q-ml-xs q-mt-xs text-caption text-grey-5"},"Path to private key used to communicate with certificate issuer.",-1),d=(0,a._)("div",{class:"q-ml-xs q-mt-xs text-caption text-grey-5"},"API key to use for ZeroSSL REST API requests.",-1),m=(0,a._)("div",{class:"q-ml-xs q-mt-xs text-caption text-grey-5"},"Certificate files will be stored in this directory.",-1),p=(0,a._)("div",{class:"q-ml-xs q-mt-xs text-caption text-grey-5"},"Certificate will be stored with this filename in Certificate Directory.",-1),h=(0,a._)("div",{class:"q-ml-xs q-mt-xs text-caption text-grey-5"},"Certificate private key will be stored with this filename in Certificate Directory.",-1),v=(0,a._)("div",{class:"q-ml-xs q-mt-xs text-caption text-grey-5"},"Trusted certificate authority list will be stored with this filename in Certificate Directory. If unspecified system default CAs will be used.",-1),_=(0,a._)("div",{class:"q-ml-xs q-mt-xs text-caption text-grey-5"},"This settings determines how the client will attempt to complete the server's HTTP challenges. Possible Values are: server - client will attempt to host the challenges on port 80, files - client will attempt to save challenges as files in the directories associated with specified domains, manual - client will wait for a few minutes for the challenges to be completed.",-1);function f(e,t,i,l,n,f){const g=(0,a.up)("q-separator"),y=(0,a.up)("q-toggle"),x=(0,a.up)("q-card-section"),b=(0,a.up)("q-input"),w=(0,a.up)("q-icon"),S=(0,a.up)("q-select"),V=(0,a.up)("q-card"),W=(0,a.up)("q-expansion-item");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(V,{class:"my-card"},{default:(0,a.w5)((()=>[(0,a.Wm)(x,null,{default:(0,a.w5)((()=>[s,(0,a.Wm)(g),(0,a.Wm)(W,{modelValue:e.isSSLClientSettingsToggled,"onUpdate:modelValue":t[12]||(t[12]=t=>e.isSSLClientSettingsToggled=t),class:"q-mt-md text-subtitle1",popup:"",icon:"settings",label:"Advanced Settings"},{default:(0,a.w5)((()=>[(0,a.Wm)(V,null,{default:(0,a.w5)((()=>[(0,a.Wm)(x,null,{default:(0,a.w5)((()=>[(0,a.Wm)(y,{modelValue:e.isSSLClientEnabled,"onUpdate:modelValue":t[0]||(t[0]=t=>e.isSSLClientEnabled=t),"checked-icon":"check",color:"positive",label:"Enable ACME Client","unchecked-icon":"clear"},null,8,["modelValue"]),o])),_:1}),(0,a.Wm)(x,null,{default:(0,a.w5)((()=>[(0,a.Wm)(b,{standout:"bg-primary text-white",class:"text-subtitle1",modelValue:e.directoryEndpoint,"onUpdate:modelValue":t[1]||(t[1]=t=>e.directoryEndpoint=t),label:"ACME Directory Endpoint"},null,8,["modelValue"]),r])),_:1}),(0,a.Wm)(x,null,{default:(0,a.w5)((()=>[(0,a.Wm)(y,{modelValue:e.isZeroSSLEnabled,"onUpdate:modelValue":t[2]||(t[2]=t=>e.isZeroSSLEnabled=t),"checked-icon":"check",color:"positive",label:"Enable ZeroSSL REST API","unchecked-icon":"clear"},null,8,["modelValue"]),c])),_:1}),(0,a.Wm)(x,null,{default:(0,a.w5)((()=>[(0,a.Wm)(b,{standout:"bg-primary text-white",class:"text-subtitle1",modelValue:e.accountKeyPath,"onUpdate:modelValue":t[3]||(t[3]=t=>e.accountKeyPath=t),label:"Account Key Path",placeholder:"<Application Data Path>/acme_account_key.pem"},null,8,["modelValue"]),u])),_:1}),(0,a.Wm)(x,null,{default:(0,a.w5)((()=>[(0,a.Wm)(b,{standout:"bg-primary text-white",class:"text-subtitle1",modelValue:e.zeroSslAPIKey,"onUpdate:modelValue":t[4]||(t[4]=t=>e.zeroSslAPIKey=t),label:"ZeroSSL API Key"},null,8,["modelValue"]),d])),_:1}),(0,a.Wm)(x,null,{default:(0,a.w5)((()=>[(0,a.Wm)(b,{standout:"bg-primary text-white",class:"text-subtitle1",modelValue:e.externalAccountBindingKID,"onUpdate:modelValue":t[5]||(t[5]=t=>e.externalAccountBindingKID=t),label:"External Account Binding KID"},null,8,["modelValue"])])),_:1}),(0,a.Wm)(x,null,{default:(0,a.w5)((()=>[(0,a.Wm)(b,{standout:"bg-primary text-white",class:"text-subtitle1",modelValue:e.externalAccountBindingMAC,"onUpdate:modelValue":t[6]||(t[6]=t=>e.externalAccountBindingMAC=t),label:"External Account Binding MAC"},null,8,["modelValue"])])),_:1}),(0,a.Wm)(x,null,{default:(0,a.w5)((()=>[(0,a.Wm)(b,{standout:"bg-primary text-white",class:"text-subtitle1",modelValue:e.certificateDirectory,"onUpdate:modelValue":t[7]||(t[7]=t=>e.certificateDirectory=t),label:"Certificate Directory",placeholder:"Application Data Path"},null,8,["modelValue"]),m])),_:1}),(0,a.Wm)(x,null,{default:(0,a.w5)((()=>[(0,a.Wm)(b,{standout:"bg-primary text-white",class:"text-subtitle1",modelValue:e.certificateFilename,"onUpdate:modelValue":t[8]||(t[8]=t=>e.certificateFilename=t),label:"Certificate Filename"},null,8,["modelValue"]),p])),_:1}),(0,a.Wm)(x,null,{default:(0,a.w5)((()=>[(0,a.Wm)(b,{standout:"bg-primary text-white",class:"text-subtitle1",modelValue:e.certificateKeyFilename,"onUpdate:modelValue":t[9]||(t[9]=t=>e.certificateKeyFilename=t),label:"Certificate Key Filename"},null,8,["modelValue"]),h])),_:1}),(0,a.Wm)(x,null,{default:(0,a.w5)((()=>[(0,a.Wm)(b,{standout:"bg-primary text-white",class:"text-subtitle1",modelValue:e.certificateAuthorityFilename,"onUpdate:modelValue":t[10]||(t[10]=t=>e.certificateAuthorityFilename=t),label:"Certificate Authority Filename",placeholder:"System Default"},null,8,["modelValue"]),v])),_:1}),(0,a.Wm)(x,null,{default:(0,a.w5)((()=>[(0,a.Wm)(S,{standout:"bg-primary text-white",color:"primary","emit-value":"","map-options":"",modelValue:e.challengeHandler,"onUpdate:modelValue":t[11]||(t[11]=t=>e.challengeHandler=t),options:e.challengeHandlerOptions,label:"Type of HTTP Challenge Handler","transition-show":"jump-up","transition-hide":"jump-down"},{prepend:(0,a.w5)((()=>[(0,a.Wm)(w,{name:"https"})])),_:1},8,["modelValue","options"]),_])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})])}var g=i(5593),y=function(e,t,i,a){function l(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,n){function s(e){try{r(a.next(e))}catch(t){n(t)}}function o(e){try{r(a["throw"](e))}catch(t){n(t)}}function r(e){e.done?i(e.value):l(e.value).then(s,o)}r((a=a.apply(e,t||[])).next())}))};const x=(0,a.aZ)({name:"SSLClientSettings",data(){return{isSSLClientSettingsToggled:!1,values:{},challengeHandlerOptions:[{label:"SERVER: client will attempt to host the challenges on port 80",value:"server"},{label:"FILES: client will attempt to save challenges as files in the directories associated with specified domains",value:"files"},{label:"MANUAL: client will wait for a few minutes for the challenges to be completed",value:"manual"}]}},methods:{refreshSettingsValues(){return y(this,void 0,void 0,(function*(){this.values=yield g.Z.getValues()}))},saveSettings(){const e={acme:{enable_client:this.isSSLClientEnabled,directory_endpoint:this.directoryEndpoint,zerossl_rest_api:this.isZeroSSLEnabled,account_key_path:this.accountKeyPath,zerossl_api_key:this.zeroSslAPIKey,eab_kid:this.externalAccountBindingKID,eab_mac:this.externalAccountBindingMAC,certificate_directory:this.certificateDirectory,certificate_filename:this.certificateFilename,certificate_key_filename:this.certificateKeyFilename,certificate_authority_filename:this.certificateAuthorityFilename,challenge_handler_type:this.challengeHandler}};g.Z.automaticCommitSettings(e)}},computed:{isSSLClientEnabled:{get(){var e,t;return null!==(t=null===(e=this.values.acme)||void 0===e?void 0:e.enable_client)&&void 0!==t&&t},set(e){var t;"undefined"!==typeof(null===(t=this.values.acme)||void 0===t?void 0:t.enable_client)&&(this.values.acme.enable_client=e,this.saveSettings())}},directoryEndpoint:{get(){var e,t;return null!==(t=null===(e=this.values.acme)||void 0===e?void 0:e.directory_endpoint)&&void 0!==t?t:"error"},set(e){var t;"undefined"!==typeof(null===(t=this.values.acme)||void 0===t?void 0:t.directory_endpoint)&&(this.values.acme.directory_endpoint=e,this.saveSettings())}},isZeroSSLEnabled:{get(){var e,t;return null!==(t=null===(e=this.values.acme)||void 0===e?void 0:e.zerossl_rest_api)&&void 0!==t&&t},set(e){var t;"undefined"!==typeof(null===(t=this.values.acme)||void 0===t?void 0:t.zerossl_rest_api)&&(this.values.acme.zerossl_rest_api=e,this.saveSettings())}},accountKeyPath:{get(){var e,t;return null!==(t=null===(e=this.values.acme)||void 0===e?void 0:e.account_key_path)&&void 0!==t?t:"error"},set(e){var t;"undefined"!==typeof(null===(t=this.values.acme)||void 0===t?void 0:t.account_key_path)&&(this.values.acme.account_key_path=e,this.saveSettings())}},zeroSslAPIKey:{get(){var e,t;return null!==(t=null===(e=this.values.acme)||void 0===e?void 0:e.zerossl_api_key)&&void 0!==t?t:"error"},set(e){var t;"undefined"!==typeof(null===(t=this.values.acme)||void 0===t?void 0:t.zerossl_api_key)&&(this.values.acme.zerossl_api_key=e,this.saveSettings())}},externalAccountBindingKID:{get(){var e,t;return null!==(t=null===(e=this.values.acme)||void 0===e?void 0:e.eab_kid)&&void 0!==t?t:"error"},set(e){var t;"undefined"!==typeof(null===(t=this.values.acme)||void 0===t?void 0:t.eab_kid)&&(this.values.acme.eab_kid=e,this.saveSettings())}},externalAccountBindingMAC:{get(){var e,t;return null!==(t=null===(e=this.values.acme)||void 0===e?void 0:e.eab_mac)&&void 0!==t?t:"error"},set(e){var t;"undefined"!==typeof(null===(t=this.values.acme)||void 0===t?void 0:t.eab_mac)&&(this.values.acme.eab_mac=e,this.saveSettings())}},certificateDirectory:{get(){var e,t;return null!==(t=null===(e=this.values.acme)||void 0===e?void 0:e.certificate_directory)&&void 0!==t?t:"error"},set(e){var t;"undefined"!==typeof(null===(t=this.values.acme)||void 0===t?void 0:t.certificate_directory)&&(this.values.acme.certificate_directory=e,this.saveSettings())}},certificateFilename:{get(){var e,t;return null!==(t=null===(e=this.values.acme)||void 0===e?void 0:e.certificate_filename)&&void 0!==t?t:"error"},set(e){var t;"undefined"!==typeof(null===(t=this.values.acme)||void 0===t?void 0:t.certificate_filename)&&(this.values.acme.certificate_filename=e,this.saveSettings())}},certificateKeyFilename:{get(){var e,t;return null!==(t=null===(e=this.values.acme)||void 0===e?void 0:e.certificate_key_filename)&&void 0!==t?t:"error"},set(e){var t;"undefined"!==typeof(null===(t=this.values.acme)||void 0===t?void 0:t.certificate_key_filename)&&(this.values.acme.certificate_key_filename=e,this.saveSettings())}},certificateAuthorityFilename:{get(){var e,t;return null!==(t=null===(e=this.values.acme)||void 0===e?void 0:e.certificate_authority_filename)&&void 0!==t?t:"error"},set(e){var t;"undefined"!==typeof(null===(t=this.values.acme)||void 0===t?void 0:t.certificate_authority_filename)&&(this.values.acme.certificate_authority_filename=e,this.saveSettings())}},challengeHandler:{get(){var e,t;return null!==(t=null===(e=this.values.acme)||void 0===e?void 0:e.challenge_handler_type)&&void 0!==t?t:"error"},set(e){var t;"undefined"!==typeof(null===(t=this.values.acme)||void 0===t?void 0:t.challenge_handler_type)&&(this.values.acme.challenge_handler_type=e,this.saveSettings())}}},beforeMount(){this.refreshSettingsValues()}});var b=i(4260),w=i(151),S=i(5589),V=i(5869),W=i(429),U=i(8886),C=i(4842),q=i(7208),E=i(4554),k=i(7518),P=i.n(k);const T=(0,b.Z)(x,[["render",f]]),A=T;P()(x,"components",{QCard:w.Z,QCardSection:S.Z,QSeparator:V.Z,QExpansionItem:W.Z,QToggle:U.Z,QInput:C.Z,QSelect:q.Z,QIcon:E.Z});const Z=(0,a._)("div",{class:"text-h5 text-center text-weight-bold q-mb-sm"},"Monitoring",-1),z=(0,a._)("div",{class:"q-ml-xs q-mt-xs text-caption text-grey-5"},"Enable a Prometheus exporter to make it possible to gather stats about the mixers that are available in the Nodes tab with a Prometheus server. This makes it possible to keep track of long-term domain statistics for graphing, troubleshooting, and performance monitoring.",-1),D=(0,a._)("div",{class:"q-ml-xs q-mt-xs text-caption text-grey-5"},"This is the port where the Prometheus exporter accepts connections. It listens both on IPv4 and IPv6 and can be accessed remotely, so you should make sure to restrict access with a firewall as needed.",-1);function I(e,t,i,l,n,s){const o=(0,a.up)("q-separator"),r=(0,a.up)("q-toggle"),c=(0,a.up)("q-card-section"),u=(0,a.up)("q-input"),d=(0,a.up)("q-card"),m=(0,a.up)("q-expansion-item");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(d,{class:"my-card q-mt-md"},{default:(0,a.w5)((()=>[(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[Z,(0,a.Wm)(o),(0,a.Wm)(m,{modelValue:e.isMonitoringSettingsToggled,"onUpdate:modelValue":t[2]||(t[2]=t=>e.isMonitoringSettingsToggled=t),class:"q-mt-md text-subtitle1",popup:"",icon:"settings",label:"Advanced Settings"},{default:(0,a.w5)((()=>[(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[(0,a.Wm)(r,{modelValue:e.isPrometheusExporterEnabled,"onUpdate:modelValue":t[0]||(t[0]=t=>e.isPrometheusExporterEnabled=t),"checked-icon":"check",color:"positive",label:"Enable Prometheus Exporter","unchecked-icon":"clear"},null,8,["modelValue"]),z])),_:1}),(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[(0,a.Wm)(u,{standout:"bg-primary text-white",class:"text-subtitle1",modelValue:e.prometheusPort,"onUpdate:modelValue":t[1]||(t[1]=t=>e.prometheusPort=t),label:"Prometheus TCP Port"},null,8,["modelValue"]),D])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})])}var L=function(e,t,i,a){function l(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,n){function s(e){try{r(a.next(e))}catch(t){n(t)}}function o(e){try{r(a["throw"](e))}catch(t){n(t)}}function r(e){e.done?i(e.value):l(e.value).then(s,o)}r((a=a.apply(e,t||[])).next())}))};const M=(0,a.aZ)({name:"MonitoringSettings",data(){return{isMonitoringSettingsToggled:!1,values:{}}},methods:{refreshSettingsValues(){return L(this,void 0,void 0,(function*(){this.values=yield g.Z.getValues()}))},saveSettings(){const e={monitoring:{enable_prometheus_exporter:this.isPrometheusExporterEnabled,prometheus_exporter_port:this.prometheusPort}};g.Z.automaticCommitSettings(e)}},computed:{isPrometheusExporterEnabled:{get(){var e,t;return null!==(t=null===(e=this.values.monitoring)||void 0===e?void 0:e.enable_prometheus_exporter)&&void 0!==t&&t},set(e){var t;"undefined"!==typeof(null===(t=this.values.monitoring)||void 0===t?void 0:t.enable_prometheus_exporter)&&(this.values.monitoring.enable_prometheus_exporter=e,this.saveSettings())}},prometheusPort:{get(){var e,t;return null!==(t=null===(e=this.values.monitoring)||void 0===e?void 0:e.prometheus_exporter_port)&&void 0!==t?t:"error"},set(e){var t;"undefined"!==typeof(null===(t=this.values.monitoring)||void 0===t?void 0:t.prometheus_exporter_port)&&(this.values.monitoring.prometheus_exporter_port=e,this.saveSettings())}}},beforeMount(){this.refreshSettingsValues()}}),Q=(0,b.Z)(M,[["render",I]]),K=Q;P()(M,"components",{QCard:w.Z,QCardSection:S.Z,QSeparator:V.Z,QExpansionItem:W.Z,QToggle:U.Z,QInput:C.Z});var R=i(2323);const F=e=>((0,a.dD)("data-v-c09cb2de"),e=e(),(0,a.Cn)(),e),H=F((()=>(0,a._)("div",{class:"text-h5 text-center text-weight-bold q-mb-sm"},"Security",-1))),$=F((()=>(0,a._)("div",{class:"q-ml-xs q-mt-xs text-caption text-grey-5"},"Username used for basic HTTP authentication.",-1))),N=F((()=>(0,a._)("div",{class:"q-ml-xs q-mt-xs text-caption text-grey-5"},"These URLs will be sent to the Interface as safe URLs to allow through the whitelist if the Interface has this security option enabled.",-1))),B=F((()=>(0,a._)("div",{class:"q-ml-xs q-mt-xs text-caption text-grey-5"},"The limit on how many users can be connected at once (0 means no limit). Avatars connected from the same machine will not count towards this limit.",-1))),O=F((()=>(0,a._)("div",{class:"q-ml-xs q-mt-xs text-caption text-grey-5"},"The location to redirect users to when the maximum number of avatars are connected.",-1))),j=F((()=>(0,a._)("h5",{class:"q-mx-none q-my-sm text-weight-bold"},"Domain-Wide User Permissions",-1))),G={class:"text-body2"},Y={class:"text-accent cursor-pointer"},J=F((()=>(0,a._)("thead",null,[(0,a._)("tr",{class:"bg-primary"},[(0,a._)("th",{class:"text-center"},"Type of User"),(0,a._)("th",{class:"text-center"},"Connect"),(0,a._)("th",{class:"text-center"},"Avatar Entities"),(0,a._)("th",{class:"text-center"},"Lock / Unlock"),(0,a._)("th",{class:"text-center"},"Rez"),(0,a._)("th",{class:"text-center"},"Rez Temporary"),(0,a._)("th",{class:"text-center"},"Rez Certified"),(0,a._)("th",{class:"text-center"},"Rez Temporary Certified"),(0,a._)("th",{class:"text-center"},"Write Assets"),(0,a._)("th",{class:"text-center"},"Ignore Max Capacity"),(0,a._)("th",{class:"text-center"},"Kick Users"),(0,a._)("th",{class:"text-center"},"Replace Content"),(0,a._)("th",{class:"text-center"},"Get and Set Private User Data")])],-1))),X={class:"text-center"},ee={class:"text-center"},te={class:"text-center"},ie={class:"text-center"},ae={class:"text-center"},le={class:"text-center"},ne={class:"text-center"},se={class:"text-center"},oe={class:"text-center"},re={class:"text-center"},ce={class:"text-center"},ue={class:"text-center"},de={class:"text-center"};function me(e,t,i,l,n,s){const o=(0,a.up)("q-separator"),r=(0,a.up)("q-input"),c=(0,a.up)("q-card-section"),u=(0,a.up)("q-tooltip"),d=(0,a.up)("q-checkbox"),m=(0,a.up)("q-markup-table"),p=(0,a.up)("q-card"),h=(0,a.up)("q-expansion-item");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(p,{class:"my-card q-mt-md"},{default:(0,a.w5)((()=>[(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[H,(0,a.Wm)(o),(0,a.Wm)(h,{modelValue:e.isSecuritySettingsToggled,"onUpdate:modelValue":t[4]||(t[4]=t=>e.isSecuritySettingsToggled=t),class:"q-mt-md text-subtitle1",popup:"",icon:"settings",label:"Advanced Settings"},{default:(0,a.w5)((()=>[(0,a.Wm)(p,null,{default:(0,a.w5)((()=>[(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[(0,a.Wm)(r,{standout:"bg-primary text-white",class:"text-subtitle1",modelValue:e.HTTPUsername,"onUpdate:modelValue":t[0]||(t[0]=t=>e.HTTPUsername=t),label:"HTTP Username"},null,8,["modelValue"]),$])),_:1}),(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[(0,a.Wm)(r,{standout:"bg-primary text-white",class:"text-subtitle1",modelValue:e.approvedURLs,"onUpdate:modelValue":t[1]||(t[1]=t=>e.approvedURLs=t),label:"Approved Script and QML URLs (Not Enabled)"},null,8,["modelValue"]),N])),_:1}),(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[(0,a.Wm)(r,{standout:"bg-primary text-white",class:"text-subtitle1",modelValue:e.maximumCapacity,"onUpdate:modelValue":t[2]||(t[2]=t=>e.maximumCapacity=t),modelModifiers:{number:!0},label:"Maximum User Capacity",type:"number",rules:[e=>e>=0||"Maximum capacity cannot be negative"]},null,8,["modelValue","rules"]),B])),_:1}),(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[(0,a.Wm)(r,{standout:"bg-primary text-white",class:"text-subtitle1",modelValue:e.maximumCapacityRedirect,"onUpdate:modelValue":t[3]||(t[3]=t=>e.maximumCapacityRedirect=t),label:"Redirect to Location on Maximum Capacity"},null,8,["modelValue"]),O])),_:1}),(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[j,(0,a._)("p",G,[(0,a.Uk)("Indicate which types of users can have which "),(0,a._)("span",Y,[(0,a.Uk)("domain-wide permissions"),(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a.Uk)("yes")])),_:1})])]),(0,a.Wm)(m,{dark:"",class:"bg-grey-9"},{default:(0,a.w5)((()=>[J,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.standardPermissions,(t=>((0,a.wg)(),(0,a.iD)("tr",{key:t.permissions_id},[(0,a._)("td",X,(0,R.zw)(t.permissions_id),1),(0,a._)("td",ee,[(0,a.Wm)(d,{size:"sm",modelValue:t.id_can_connect,"onUpdate:modelValue":e=>t.id_can_connect=e,onChange:e.permissionChange},null,8,["modelValue","onUpdate:modelValue","onChange"])]),(0,a._)("td",te,[(0,a.Wm)(d,{size:"sm",modelValue:t.id_can_rez_avatar_entities,"onUpdate:modelValue":e=>t.id_can_rez_avatar_entities=e},null,8,["modelValue","onUpdate:modelValue"])]),(0,a._)("td",ie,[(0,a.Wm)(d,{size:"sm",modelValue:t.id_can_adjust_locks,"onUpdate:modelValue":e=>t.id_can_adjust_locks=e},null,8,["modelValue","onUpdate:modelValue"])]),(0,a._)("td",ae,[(0,a.Wm)(d,{size:"sm",modelValue:t.id_can_rez,"onUpdate:modelValue":e=>t.id_can_rez=e},null,8,["modelValue","onUpdate:modelValue"])]),(0,a._)("td",le,[(0,a.Wm)(d,{size:"sm",modelValue:t.id_can_rez_tmp,"onUpdate:modelValue":e=>t.id_can_rez_tmp=e},null,8,["modelValue","onUpdate:modelValue"])]),(0,a._)("td",ne,[(0,a.Wm)(d,{size:"sm",modelValue:t.id_can_rez_certified,"onUpdate:modelValue":e=>t.id_can_rez_certified=e},null,8,["modelValue","onUpdate:modelValue"])]),(0,a._)("td",se,[(0,a.Wm)(d,{size:"sm",modelValue:t.id_can_rez_tmp_certified,"onUpdate:modelValue":e=>t.id_can_rez_tmp_certified=e},null,8,["modelValue","onUpdate:modelValue"])]),(0,a._)("td",oe,[(0,a.Wm)(d,{size:"sm",modelValue:t.id_can_write_to_asset_server,"onUpdate:modelValue":e=>t.id_can_write_to_asset_server=e},null,8,["modelValue","onUpdate:modelValue"])]),(0,a._)("td",re,[(0,a.Wm)(d,{size:"sm",modelValue:t.id_can_connect_past_max_capacity,"onUpdate:modelValue":e=>t.id_can_connect_past_max_capacity=e},null,8,["modelValue","onUpdate:modelValue"])]),(0,a._)("td",ce,[(0,a.Wm)(d,{size:"sm",modelValue:t.id_can_kick,"onUpdate:modelValue":e=>t.id_can_kick=e},null,8,["modelValue","onUpdate:modelValue"])]),(0,a._)("td",ue,[(0,a.Wm)(d,{size:"sm",modelValue:t.id_can_replace_content,"onUpdate:modelValue":e=>t.id_can_replace_content=e},null,8,["modelValue","onUpdate:modelValue"])]),(0,a._)("td",de,[(0,a.Wm)(d,{size:"sm",modelValue:t.id_can_get_and_set_private_user_data,"onUpdate:modelValue":e=>t.id_can_get_and_set_private_user_data=e},null,8,["modelValue","onUpdate:modelValue"])])])))),128))])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})])}var pe=function(e,t,i,a){function l(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,n){function s(e){try{r(a.next(e))}catch(t){n(t)}}function o(e){try{r(a["throw"](e))}catch(t){n(t)}}function r(e){e.done?i(e.value):l(e.value).then(s,o)}r((a=a.apply(e,t||[])).next())}))};const he=(0,a.aZ)({name:"SecuritySettings",data(){return{isSecuritySettingsToggled:!1,values:{},standardPermissions:[]}},methods:{permissionChange(e){console.log(e)},refreshSettingsValues(){var e,t;return pe(this,void 0,void 0,(function*(){this.values=yield g.Z.getValues(),this.standardPermissions=null!==(t=null===(e=this.values.security)||void 0===e?void 0:e.standard_permissions)&&void 0!==t?t:[]}))},saveSettings(){const e={security:{http_username:this.HTTPUsername,approved_safe_urls:this.approvedURLs}};g.Z.automaticCommitSettings(e)}},watch:{standardPermission:{handler(e,t){console.log(e,t)},deep:!0}},computed:{HTTPUsername:{get(){var e,t;return null!==(t=null===(e=this.values.security)||void 0===e?void 0:e.http_username)&&void 0!==t?t:"error"},set(e){var t;"undefined"!==typeof(null===(t=this.values.security)||void 0===t?void 0:t.http_username)&&(this.values.security.http_username=e,this.saveSettings())}},approvedURLs:{get(){var e,t;return null!==(t=null===(e=this.values.security)||void 0===e?void 0:e.approved_safe_urls)&&void 0!==t?t:"error"},set(e){var t;"undefined"!==typeof(null===(t=this.values.security)||void 0===t?void 0:t.approved_safe_urls)&&(this.values.security.approved_safe_urls=e,this.saveSettings())}},maximumCapacity:{get(){var e;return"undefined"!==typeof(null===(e=this.values.security)||void 0===e?void 0:e.maximum_user_capacity)?parseInt(this.values.security.maximum_user_capacity):0},set(e){var t;"undefined"!==typeof(null===(t=this.values.security)||void 0===t?void 0:t.maximum_user_capacity)&&(this.values.security.maximum_user_capacity=`${e}`,this.saveSettings())}},maximumCapacityRedirect:{get(){var e,t;return null!==(t=null===(e=this.values.security)||void 0===e?void 0:e.maximum_user_capacity_redirect_location)&&void 0!==t?t:"error"},set(e){var t;"undefined"!==typeof(null===(t=this.values.security)||void 0===t?void 0:t.maximum_user_capacity_redirect_location)&&(this.values.security.maximum_user_capacity_redirect_location=e,this.saveSettings())}}},beforeMount(){this.refreshSettingsValues()}});var ve=i(8870),_e=i(481),fe=i(5735);const ge=(0,b.Z)(he,[["render",me],["__scopeId","data-v-c09cb2de"]]),ye=ge;P()(he,"components",{QCard:w.Z,QCardSection:S.Z,QSeparator:V.Z,QExpansionItem:W.Z,QInput:C.Z,QTooltip:ve.Z,QMarkupTable:_e.Z,QCheckbox:fe.Z});const xe=(0,a.aZ)({name:"Networking",components:{SSLClientSettings:A,MonitoringSettings:K,SecuritySettings:ye}}),be=(0,b.Z)(xe,[["render",n]]),we=be}}]);