"use strict";(globalThis["webpackChunkvircadia_domain_dashboard"]=globalThis["webpackChunkvircadia_domain_dashboard"]||[]).push([[869],{5593:(e,t,i)=>{i.d(t,{Z:()=>r});var s=i(7483),n=i(8563),a=function(e,t,i,s){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,a){function l(e){try{r(s.next(e))}catch(t){a(t)}}function o(e){try{r(s["throw"](e))}catch(t){a(t)}}function r(e){e.done?i(e.value):n(e.value).then(l,o)}r((s=s.apply(e,t||[])).next())}))};const l=i(52),o=[],r={getValues(){return a(this,void 0,void 0,(function*(){let e={};try{const t="settings.json",i=yield(0,s.YW)(t);return e=i.values,e}catch(t){const e=(0,s.GD)(t);console.log(e)}return e}))},getDescriptions(){return a(this,void 0,void 0,(function*(){let e=[];try{const t="settings.json",i=yield(0,s.YW)(t);return e=i.descriptions,e}catch(t){const e=(0,s.GD)(t);console.log(e)}return e}))},commitSettings(e){return l.post("/settings.json",JSON.stringify(e)).then((()=>(n.Z.info(n.Z.types.DOMAIN,"Successfully committed settings."),!0))).catch((e=>(n.Z.error(n.Z.types.DOMAIN,`Failed to commit settings to Domain: ${e}`),!1)))},automaticCommitSettings(e){o.forEach(((e,t)=>{clearTimeout(e),o.splice(t,1)})),o.push(window.setTimeout(this.commitSettings,5e3,e))},createNewDomainID(e){return a(this,void 0,void 0,(function*(){try{const t=`label=${e}`,i=yield l.post("/api/domains",t);if("failure"===i.data.status)return"";const s=i.data.domain.domainId;return s}catch(t){return console.log(t),""}}))},getDomains(){return a(this,void 0,void 0,(function*(){let e=[];try{const t="api/domains",i=yield(0,s.YW)(t);return e=i.data.domains,e}catch(t){console.log(t)}return e}))}}},7483:(e,t,i)=>{i.d(t,{ge:()=>d,YW:()=>u,GD:()=>o});var s=i(52),n=i.n(s);const a="http://localhost:40100/";var l=function(e,t,i,s){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,a){function l(e){try{r(s.next(e))}catch(t){a(t)}}function o(e){try{r(s["throw"](e))}catch(t){a(t)}}function r(e){e.done?i(e.value):n(e.value).then(l,o)}r((s=s.apply(e,t||[])).next())}))};function o(e){if("string"===typeof e)return e;const t=e;return"message"in t?t.message:`Error: ${JSON.stringify(e)}`}function r(e,t){return(null!==t&&void 0!==t?t:a)+e}function u(e,t){var i;return l(this,void 0,void 0,(function*(){const s=r(e,t);let a="";try{const t=yield n().get(s);if(t&&t.status){if(200===t.status)return t.data;a=`${null!==(i=t.statusText)&&void 0!==i?i:"unspecified"}`}else a=`Poorly formed response to GET ${e}: ${JSON.stringify(t)}`}catch(l){const t=o(l);a=`Exception on GET ${e}: ${t}`,console.log(a)}throw new Error(a)}))}function d(e,t){var i;return l(this,void 0,void 0,(function*(){const s=r(e,t);let a="";try{const t=yield n()["delete"](s);if(t&&t.status){if(200===t.status)return;a=`${null!==(i=t.statusText)&&void 0!==i?i:"unspecified"}`}else a=`Poorly formed response to DELETE ${e}: ${JSON.stringify(t)}`}catch(l){const t=o(l);a=`Exception on DELETE ${e}: ${t}`,console.log(a)}throw new Error(a)}))}},8869:(e,t,i)=>{i.r(t),i.d(t,{default:()=>le});var s=i(3673);const n={class:"q-pa-md"};function a(e,t,i,a,l,o){const r=(0,s.up)("EntitiesSettings"),u=(0,s.up)("AssetServerSettings"),d=(0,s.up)("EntityScriptServerSettings");return(0,s.wg)(),(0,s.iD)("div",n,[(0,s.Wm)(r),(0,s.Wm)(u),(0,s.Wm)(d)])}const l=(0,s._)("div",{class:"text-h5 text-center text-weight-bold q-mb-sm"},"Entities",-1),o=(0,s._)("div",{class:"q-ml-xs q-mt-xs text-caption text-grey-5"},'The maximum number of seconds for the lifetime of an entity which will be considered "temporary".',-1),r=(0,s._)("div",{class:"q-ml-xs q-mt-xs text-caption text-grey-5"},"The lower limit on the amount of time that passes before Dynamic Domain Verification on entities occurs. Units are seconds.",-1),u=(0,s._)("div",{class:"q-ml-xs q-mt-xs text-caption text-grey-5"},"The upper limit on the amount of time that passes before Dynamic Domain Verification on entities occurs. Units are seconds.",-1),d=(0,s._)("div",{class:"q-ml-xs q-mt-xs text-caption text-grey-5"},"Comma separated list of URLs (with optional paths) that entity scripts are allowed from. If someone attempts to create and entity or edit an entity to have a different domain, it will be rejected. If left blank, any domain is allowed.",-1),c=(0,s._)("div",{class:"q-ml-xs q-mt-xs text-caption text-grey-5"},"The path to the file entities are stored in. If this path is relative it will be relative to the application data directory. The filename must end in .json.gz.",-1),v=(0,s._)("div",{class:"q-ml-xs q-mt-xs text-caption text-grey-5"},"The path to the directory to store backups in. If this path is relative it will be relative to the application data directory.",-1),m=(0,s._)("div",{class:"q-ml-xs q-mt-xs text-caption text-grey-5"},"Milliseconds between checks for saving the current state of entities.",-1),g=(0,s._)("div",{class:"q-ml-xs q-mt-xs text-caption text-grey-5"},"Don't persist your entities to a file.",-1),h=(0,s._)("div",{class:"q-ml-xs q-mt-xs text-caption text-grey-5"},"Don't regularly backup your persisted entities to a backup file.",-1),p=(0,s._)("div",{class:"q-ml-xs q-mt-xs text-caption text-grey-5"},"Host name or IP address of the server for accessing the status page.",-1),f=(0,s._)("div",{class:"q-ml-xs q-mt-xs text-caption text-grey-5"},"Port of the server for accessing the status page.",-1),y=(0,s._)("div",{class:"q-ml-xs q-mt-xs text-caption text-grey-5"},"Includes a download link to the persist file in the server status page.",-1),_=(0,s._)("div",{class:"q-ml-xs q-mt-xs text-caption text-grey-5"},"Logging of all edits to entities.",-1),b=(0,s._)("div",{class:"q-ml-xs q-mt-xs text-caption text-grey-5"},"Logging of all edits to entities.",-1),x=(0,s._)("div",{class:"q-ml-xs q-mt-xs text-caption text-grey-5"},"Lots of debugging.",-1),S=(0,s._)("div",{class:"q-ml-xs q-mt-xs text-caption text-grey-5"},"Extra debugging on receiving.",-1),w=(0,s._)("div",{class:"q-ml-xs q-mt-xs text-caption text-grey-5"},"Extra debugging on sending.",-1),V=(0,s._)("div",{class:"q-ml-xs q-mt-xs text-caption text-grey-5"},"Extra debugging for usecTimestampNow() function.",-1),E=(0,s._)("div",{class:"q-ml-xs q-mt-xs text-caption text-grey-5"},"Number of msecs to skew the server clock by to test clock skew.",-1);function P(e,t,i,n,a,P){const k=(0,s.up)("q-separator"),W=(0,s.up)("q-input"),D=(0,s.up)("q-card-section"),T=(0,s.up)("q-toggle"),q=(0,s.up)("q-card"),L=(0,s.up)("q-expansion-item");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(q,{class:"my-card"},{default:(0,s.w5)((()=>[(0,s.Wm)(D,null,{default:(0,s.w5)((()=>[l,(0,s.Wm)(k),(0,s.Wm)(L,{modelValue:e.isWordPressSettingsToggled,"onUpdate:modelValue":t[19]||(t[19]=t=>e.isWordPressSettingsToggled=t),class:"q-mt-md text-subtitle1",popup:"",icon:"settings",label:"Advanced Settings"},{default:(0,s.w5)((()=>[(0,s.Wm)(q,null,{default:(0,s.w5)((()=>[(0,s.Wm)(D,null,{default:(0,s.w5)((()=>[(0,s.Wm)(W,{standout:"bg-primary text-white",class:"text-subtitle1",modelValue:e.maxLifetimeOfTemporaryEntities,"onUpdate:modelValue":t[0]||(t[0]=t=>e.maxLifetimeOfTemporaryEntities=t),label:"Maximum Lifetime of Temporary Entities"},null,8,["modelValue"]),o])),_:1}),(0,s.Wm)(D,null,{default:(0,s.w5)((()=>[(0,s.Wm)(W,{standout:"bg-primary text-white",class:"text-subtitle1",modelValue:e.minDomainVertificationTime,"onUpdate:modelValue":t[1]||(t[1]=t=>e.minDomainVertificationTime=t),label:"Dynamic Domain Verification Time (seconds) - Minimum"},null,8,["modelValue"]),r])),_:1}),(0,s.Wm)(D,null,{default:(0,s.w5)((()=>[(0,s.Wm)(W,{standout:"bg-primary text-white",class:"text-subtitle1",modelValue:e.maxDomainVertificationTime,"onUpdate:modelValue":t[2]||(t[2]=t=>e.maxDomainVertificationTime=t),label:"Dynamic Domain Verification Time (seconds) - Maximum"},null,8,["modelValue"]),u])),_:1}),(0,s.Wm)(D,null,{default:(0,s.w5)((()=>[(0,s.Wm)(W,{standout:"bg-primary text-white",class:"text-subtitle1",modelValue:e.scriptSourceWhitelist,"onUpdate:modelValue":t[3]||(t[3]=t=>e.scriptSourceWhitelist=t),label:"Entity Scripts Allowed from:"},null,8,["modelValue"]),d])),_:1}),(0,s.Wm)(D,null,{default:(0,s.w5)((()=>[(0,s.Wm)(W,{standout:"bg-primary text-white",class:"text-subtitle1",modelValue:e.entityFilePath,"onUpdate:modelValue":t[4]||(t[4]=t=>e.entityFilePath=t),label:"Entities File Path"},null,8,["modelValue"]),c])),_:1}),(0,s.Wm)(D,null,{default:(0,s.w5)((()=>[(0,s.Wm)(W,{standout:"bg-primary text-white",class:"text-subtitle1",modelValue:e.backupDirectoryPath,"onUpdate:modelValue":t[5]||(t[5]=t=>e.backupDirectoryPath=t),label:"Entities Backup Directory Path"},null,8,["modelValue"]),v])),_:1}),(0,s.Wm)(D,null,{default:(0,s.w5)((()=>[(0,s.Wm)(W,{standout:"bg-primary text-white",class:"text-subtitle1",modelValue:e.saveCheckInterval,"onUpdate:modelValue":t[6]||(t[6]=t=>e.saveCheckInterval=t),label:"Save Check Interval"},null,8,["modelValue"]),m])),_:1}),(0,s.Wm)(D,null,{default:(0,s.w5)((()=>[(0,s.Wm)(T,{modelValue:e.isNoPersistEnabled,"onUpdate:modelValue":t[7]||(t[7]=t=>e.isNoPersistEnabled=t),"checked-icon":"check",color:"positive",label:"Disable Persistence","unchecked-icon":"clear"},null,8,["modelValue"]),g])),_:1}),(0,s.Wm)(D,null,{default:(0,s.w5)((()=>[(0,s.Wm)(T,{modelValue:e.isNoBackupEnabled,"onUpdate:modelValue":t[8]||(t[8]=t=>e.isNoBackupEnabled=t),"checked-icon":"check",color:"positive",label:"Disable Backup","unchecked-icon":"clear"},null,8,["modelValue"]),h])),_:1}),(0,s.Wm)(D,null,{default:(0,s.w5)((()=>[(0,s.Wm)(W,{standout:"bg-primary text-white",class:"text-subtitle1",modelValue:e.statusHost,"onUpdate:modelValue":t[9]||(t[9]=t=>e.statusHost=t),label:"Status Hostname"},null,8,["modelValue"]),p])),_:1}),(0,s.Wm)(D,null,{default:(0,s.w5)((()=>[(0,s.Wm)(W,{standout:"bg-primary text-white",class:"text-subtitle1",modelValue:e.statusPort,"onUpdate:modelValue":t[10]||(t[10]=t=>e.statusPort=t),label:"Status Port"},null,8,["modelValue"]),f])),_:1}),(0,s.Wm)(D,null,{default:(0,s.w5)((()=>[(0,s.Wm)(T,{modelValue:e.isPersistFileDownloadEnabled,"onUpdate:modelValue":t[11]||(t[11]=t=>e.isPersistFileDownloadEnabled=t),"checked-icon":"check",color:"positive",label:"Persist File Download","unchecked-icon":"clear"},null,8,["modelValue"]),y])),_:1}),(0,s.Wm)(D,null,{default:(0,s.w5)((()=>[(0,s.Wm)(T,{modelValue:e.isEditLoggingEnabled,"onUpdate:modelValue":t[12]||(t[12]=t=>e.isEditLoggingEnabled=t),"checked-icon":"check",color:"positive",label:"Edit Logging","unchecked-icon":"clear"},null,8,["modelValue"]),_])),_:1}),(0,s.Wm)(D,null,{default:(0,s.w5)((()=>[(0,s.Wm)(T,{modelValue:e.isTerseEditLoggingEnabled,"onUpdate:modelValue":t[13]||(t[13]=t=>e.isTerseEditLoggingEnabled=t),"checked-icon":"check",color:"positive",label:"Edit Logging (Terse)","unchecked-icon":"clear"},null,8,["modelValue"]),b])),_:1}),(0,s.Wm)(D,null,{default:(0,s.w5)((()=>[(0,s.Wm)(T,{modelValue:e.isVerboseDebugEnabled,"onUpdate:modelValue":t[14]||(t[14]=t=>e.isVerboseDebugEnabled=t),"checked-icon":"check",color:"positive",label:"Verbose Debug","unchecked-icon":"clear"},null,8,["modelValue"]),x])),_:1}),(0,s.Wm)(D,null,{default:(0,s.w5)((()=>[(0,s.Wm)(T,{modelValue:e.isReceivingDebugEnabled,"onUpdate:modelValue":t[15]||(t[15]=t=>e.isReceivingDebugEnabled=t),"checked-icon":"check",color:"positive",label:"Extra Receiving Debug","unchecked-icon":"clear"},null,8,["modelValue"]),S])),_:1}),(0,s.Wm)(D,null,{default:(0,s.w5)((()=>[(0,s.Wm)(T,{modelValue:e.isSendingDebugEnabled,"onUpdate:modelValue":t[16]||(t[16]=t=>e.isSendingDebugEnabled=t),"checked-icon":"check",color:"positive",label:"Extra Sending Debug","unchecked-icon":"clear"},null,8,["modelValue"]),w])),_:1}),(0,s.Wm)(D,null,{default:(0,s.w5)((()=>[(0,s.Wm)(T,{modelValue:e.isTimestampDebugEnabled,"onUpdate:modelValue":t[17]||(t[17]=t=>e.isTimestampDebugEnabled=t),"checked-icon":"check",color:"positive",label:"Extra Timestamp Debugging","unchecked-icon":"clear"},null,8,["modelValue"]),V])),_:1}),(0,s.Wm)(D,null,{default:(0,s.w5)((()=>[(0,s.Wm)(W,{standout:"bg-primary text-white",class:"text-subtitle1",modelValue:e.clockSkew,"onUpdate:modelValue":t[18]||(t[18]=t=>e.clockSkew=t),label:"Clock Skew"},null,8,["modelValue"]),E])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})])}var k=i(5593),W=function(e,t,i,s){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,a){function l(e){try{r(s.next(e))}catch(t){a(t)}}function o(e){try{r(s["throw"](e))}catch(t){a(t)}}function r(e){e.done?i(e.value):n(e.value).then(l,o)}r((s=s.apply(e,t||[])).next())}))};const D=(0,s.aZ)({name:"EntitiesSettings",data(){return{isWordPressSettingsToggled:!1,values:{}}},methods:{refreshSettingsValues(){return W(this,void 0,void 0,(function*(){this.values=yield k.Z.getValues()}))},saveSettings(){const e={entity_server_settings:{maxTmpLifetime:this.maxLifetimeOfTemporaryEntities,dynamicDomainVerificationTimeMin:this.minDomainVertificationTime,dynamicDomainVerificationTimeMax:this.maxDomainVertificationTime,entityScriptSourceWhitelist:this.scriptSourceWhitelist,persistFilePath:this.entityFilePath,persistInterval:this.saveCheckInterval,NoPersist:this.isNoPersistEnabled,NoBackup:this.isNoBackupEnabled,statusHost:this.statusHost,statusPort:this.statusPort,persistFileDownload:this.isPersistFileDownloadEnabled,wantEditLogging:this.isEditLoggingEnabled,wantTerseEditLogging:this.isTerseEditLoggingEnabled,verboseDebug:this.isVerboseDebugEnabled,debugReceiving:this.isReceivingDebugEnabled,debugSending:this.isSendingDebugEnabled,debugTimestampNow:this.isTimestampDebugEnabled,clockSkew:this.clockSkew}};k.Z.automaticCommitSettings(e)}},computed:{maxLifetimeOfTemporaryEntities:{get(){var e,t;return null!==(t=null===(e=this.values.entity_server_settings)||void 0===e?void 0:e.maxTmpLifetime)&&void 0!==t?t:"error"},set(e){var t;"undefined"!==typeof(null===(t=this.values.entity_server_settings)||void 0===t?void 0:t.maxTmpLifetime)&&(this.values.entity_server_settings.maxTmpLifetime=e,this.saveSettings())}},minDomainVertificationTime:{get(){var e,t;return null!==(t=null===(e=this.values.entity_server_settings)||void 0===e?void 0:e.dynamicDomainVerificationTimeMin)&&void 0!==t?t:"error"},set(e){var t;"undefined"!==typeof(null===(t=this.values.entity_server_settings)||void 0===t?void 0:t.dynamicDomainVerificationTimeMin)&&(this.values.entity_server_settings.dynamicDomainVerificationTimeMin=e,this.saveSettings())}},maxDomainVertificationTime:{get(){var e,t;return null!==(t=null===(e=this.values.entity_server_settings)||void 0===e?void 0:e.dynamicDomainVerificationTimeMax)&&void 0!==t?t:"error"},set(e){var t;"undefined"!==typeof(null===(t=this.values.entity_server_settings)||void 0===t?void 0:t.dynamicDomainVerificationTimeMax)&&(this.values.entity_server_settings.dynamicDomainVerificationTimeMax=e,this.saveSettings())}},scriptSourceWhitelist:{get(){var e,t;return null!==(t=null===(e=this.values.entity_server_settings)||void 0===e?void 0:e.entityScriptSourceWhitelist)&&void 0!==t?t:"error"},set(e){var t;"undefined"!==typeof(null===(t=this.values.entity_server_settings)||void 0===t?void 0:t.entityScriptSourceWhitelist)&&(this.values.entity_server_settings.entityScriptSourceWhitelist=e,this.saveSettings())}},entityFilePath:{get(){var e,t;return null!==(t=null===(e=this.values.entity_server_settings)||void 0===e?void 0:e.persistFilePath)&&void 0!==t?t:"error"},set(e){var t;"undefined"!==typeof(null===(t=this.values.entity_server_settings)||void 0===t?void 0:t.persistFilePath)&&(this.values.entity_server_settings.persistFilePath=e,this.saveSettings())}},backupDirectoryPath:{get(){var e,t;return null!==(t=null===(e=this.values.entity_server_settings)||void 0===e?void 0:e.backupDirectoryPath)&&void 0!==t?t:"error"},set(e){var t;"undefined"!==typeof(null===(t=this.values.entity_server_settings)||void 0===t?void 0:t.backupDirectoryPath)&&(this.values.entity_server_settings.backupDirectoryPath=e,this.saveSettings())}},saveCheckInterval:{get(){var e,t;return null!==(t=null===(e=this.values.entity_server_settings)||void 0===e?void 0:e.persistInterval)&&void 0!==t?t:"error"},set(e){var t;"undefined"!==typeof(null===(t=this.values.entity_server_settings)||void 0===t?void 0:t.persistInterval)&&(this.values.entity_server_settings.persistInterval=e,this.saveSettings())}},isNoPersistEnabled:{get(){var e,t;return null!==(t=null===(e=this.values.entity_server_settings)||void 0===e?void 0:e.NoPersist)&&void 0!==t&&t},set(e){var t;"undefined"!==typeof(null===(t=this.values.entity_server_settings)||void 0===t?void 0:t.NoPersist)&&(this.values.entity_server_settings.NoPersist=e,this.saveSettings())}},isNoBackupEnabled:{get(){var e,t;return null!==(t=null===(e=this.values.entity_server_settings)||void 0===e?void 0:e.NoBackup)&&void 0!==t&&t},set(e){var t;"undefined"!==typeof(null===(t=this.values.entity_server_settings)||void 0===t?void 0:t.NoBackup)&&(this.values.entity_server_settings.NoBackup=e,this.saveSettings())}},statusHost:{get(){var e,t;return null!==(t=null===(e=this.values.entity_server_settings)||void 0===e?void 0:e.statusHost)&&void 0!==t?t:"error"},set(e){var t;"undefined"!==typeof(null===(t=this.values.entity_server_settings)||void 0===t?void 0:t.statusHost)&&(this.values.entity_server_settings.statusHost=e,this.saveSettings())}},statusPort:{get(){var e,t;return null!==(t=null===(e=this.values.entity_server_settings)||void 0===e?void 0:e.statusPort)&&void 0!==t?t:"error"},set(e){var t;"undefined"!==typeof(null===(t=this.values.entity_server_settings)||void 0===t?void 0:t.statusPort)&&(this.values.entity_server_settings.statusPort=e,this.saveSettings())}},isPersistFileDownloadEnabled:{get(){var e,t;return null!==(t=null===(e=this.values.entity_server_settings)||void 0===e?void 0:e.persistFileDownload)&&void 0!==t&&t},set(e){var t;"undefined"!==typeof(null===(t=this.values.entity_server_settings)||void 0===t?void 0:t.persistFileDownload)&&(this.values.entity_server_settings.persistFileDownload=e,this.saveSettings())}},isEditLoggingEnabled:{get(){var e,t;return null!==(t=null===(e=this.values.entity_server_settings)||void 0===e?void 0:e.wantEditLogging)&&void 0!==t&&t},set(e){var t;"undefined"!==typeof(null===(t=this.values.entity_server_settings)||void 0===t?void 0:t.wantEditLogging)&&(this.values.entity_server_settings.wantEditLogging=e,this.saveSettings())}},isTerseEditLoggingEnabled:{get(){var e,t;return null!==(t=null===(e=this.values.entity_server_settings)||void 0===e?void 0:e.wantTerseEditLogging)&&void 0!==t&&t},set(e){var t;"undefined"!==typeof(null===(t=this.values.entity_server_settings)||void 0===t?void 0:t.wantTerseEditLogging)&&(this.values.entity_server_settings.wantTerseEditLogging=e,this.saveSettings())}},isVerboseDebugEnabled:{get(){var e,t;return null!==(t=null===(e=this.values.entity_server_settings)||void 0===e?void 0:e.verboseDebug)&&void 0!==t&&t},set(e){var t;"undefined"!==typeof(null===(t=this.values.entity_server_settings)||void 0===t?void 0:t.verboseDebug)&&(this.values.entity_server_settings.verboseDebug=e,this.saveSettings())}},isReceivingDebugEnabled:{get(){var e,t;return null!==(t=null===(e=this.values.entity_server_settings)||void 0===e?void 0:e.debugReceiving)&&void 0!==t&&t},set(e){var t;"undefined"!==typeof(null===(t=this.values.entity_server_settings)||void 0===t?void 0:t.debugReceiving)&&(this.values.entity_server_settings.debugReceiving=e,this.saveSettings())}},isSendingDebugEnabled:{get(){var e,t;return null!==(t=null===(e=this.values.entity_server_settings)||void 0===e?void 0:e.debugSending)&&void 0!==t&&t},set(e){var t;"undefined"!==typeof(null===(t=this.values.entity_server_settings)||void 0===t?void 0:t.debugSending)&&(this.values.entity_server_settings.debugSending=e,this.saveSettings())}},isTimestampDebugEnabled:{get(){var e,t;return null!==(t=null===(e=this.values.entity_server_settings)||void 0===e?void 0:e.debugTimestampNow)&&void 0!==t&&t},set(e){var t;"undefined"!==typeof(null===(t=this.values.entity_server_settings)||void 0===t?void 0:t.debugTimestampNow)&&(this.values.entity_server_settings.debugTimestampNow=e,this.saveSettings())}},clockSkew:{get(){var e,t;return null!==(t=null===(e=this.values.entity_server_settings)||void 0===e?void 0:e.clockSkew)&&void 0!==t?t:"error"},set(e){var t;"undefined"!==typeof(null===(t=this.values.entity_server_settings)||void 0===t?void 0:t.clockSkew)&&(this.values.entity_server_settings.clockSkew=e,this.saveSettings())}}},beforeMount(){this.refreshSettingsValues()}});var T=i(4260),q=i(151),L=i(5589),Z=i(5869),U=i(429),N=i(4842),I=i(8886),F=i(7518),C=i.n(F);const M=(0,T.Z)(D,[["render",P]]),A=M;C()(D,"components",{QCard:q.Z,QCardSection:L.Z,QSeparator:Z.Z,QExpansionItem:U.Z,QInput:N.Z,QToggle:I.Z});const Q=(0,s._)("div",{class:"text-h5 text-center text-weight-bold q-mb-sm"},"Asset Server (ATP)",-1),$=(0,s._)("div",{class:"q-ml-xs q-mt-xs text-caption text-grey-5"},"Assigns an asset-server in your domain to serve files to clients via the ATP protocol (over UDP).",-1),z=(0,s._)("div",{class:"q-ml-xs q-mt-xs text-caption text-grey-5"},"The path to the directory assets are stored in. If this path is relative, it will be relative to the application data directory. If you change this path you will need to manually copy any existing assets from the previous directory.",-1),B=(0,s._)("div",{class:"q-ml-xs q-mt-xs text-caption text-grey-5"},"The file size limit of an asset that can be imported into the asset server in MBytes. 0 (default) means no limit on file size.",-1);function H(e,t,i,n,a,l){const o=(0,s.up)("q-separator"),r=(0,s.up)("q-toggle"),u=(0,s.up)("q-card-section"),d=(0,s.up)("q-input"),c=(0,s.up)("q-card"),v=(0,s.up)("q-expansion-item");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(c,{class:"my-card q-mt-md"},{default:(0,s.w5)((()=>[(0,s.Wm)(u,null,{default:(0,s.w5)((()=>[Q,(0,s.Wm)(o),(0,s.Wm)(v,{modelValue:e.isWordPressSettingsToggled,"onUpdate:modelValue":t[3]||(t[3]=t=>e.isWordPressSettingsToggled=t),class:"q-mt-md text-subtitle1",popup:"",icon:"settings",label:"Advanced Settings"},{default:(0,s.w5)((()=>[(0,s.Wm)(c,null,{default:(0,s.w5)((()=>[(0,s.Wm)(u,null,{default:(0,s.w5)((()=>[(0,s.Wm)(r,{modelValue:e.assetServerEnabled,"onUpdate:modelValue":t[0]||(t[0]=t=>e.assetServerEnabled=t),"checked-icon":"check",color:"positive",label:"Enable Asset Server","unchecked-icon":"clear"},null,8,["modelValue"]),$])),_:1}),(0,s.Wm)(u,null,{default:(0,s.w5)((()=>[(0,s.Wm)(d,{standout:"bg-primary text-white",class:"text-subtitle1",modelValue:e.assetsPath,"onUpdate:modelValue":t[1]||(t[1]=t=>e.assetsPath=t),label:"Assets Path"},null,8,["modelValue"]),z])),_:1}),(0,s.Wm)(u,null,{default:(0,s.w5)((()=>[(0,s.Wm)(d,{standout:"bg-primary text-white",class:"text-subtitle1",modelValue:e.fileSizeLimit,"onUpdate:modelValue":t[2]||(t[2]=t=>e.fileSizeLimit=t),label:"File Size Limit"},null,8,["modelValue"]),B])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})])}var O=function(e,t,i,s){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,a){function l(e){try{r(s.next(e))}catch(t){a(t)}}function o(e){try{r(s["throw"](e))}catch(t){a(t)}}function r(e){e.done?i(e.value):n(e.value).then(l,o)}r((s=s.apply(e,t||[])).next())}))};const R=(0,s.aZ)({name:"AssetServerSettings",data(){return{isWordPressSettingsToggled:!1,values:{}}},methods:{refreshSettingsValues(){return O(this,void 0,void 0,(function*(){this.values=yield k.Z.getValues()}))},saveSettings(){const e={asset_server:{enabled:this.assetServerEnabled,assets_path:this.assetsPath,assets_filesize_limit:this.fileSizeLimit}};k.Z.automaticCommitSettings(e)}},computed:{assetServerEnabled:{get(){var e,t;return null!==(t=null===(e=this.values.asset_server)||void 0===e?void 0:e.enabled)&&void 0!==t&&t},set(e){var t;"undefined"!==typeof(null===(t=this.values.asset_server)||void 0===t?void 0:t.enabled)&&(this.values.asset_server.enabled=e,this.saveSettings())}},assetsPath:{get(){var e,t;return null!==(t=null===(e=this.values.asset_server)||void 0===e?void 0:e.assets_path)&&void 0!==t?t:"error"},set(e){var t;"undefined"!==typeof(null===(t=this.values.asset_server)||void 0===t?void 0:t.assets_path)&&(this.values.asset_server.assets_path=e,this.saveSettings())}},fileSizeLimit:{get(){var e,t;return null!==(t=null===(e=this.values.asset_server)||void 0===e?void 0:e.assets_filesize_limit)&&void 0!==t?t:0},set(e){var t;"undefined"!==typeof(null===(t=this.values.asset_server)||void 0===t?void 0:t.assets_filesize_limit)&&(this.values.asset_server.assets_filesize_limit=e,this.saveSettings())}}},beforeMount(){this.refreshSettingsValues()}}),j=(0,T.Z)(R,[["render",H]]),G=j;C()(R,"components",{QCard:q.Z,QCardSection:L.Z,QSeparator:Z.Z,QExpansionItem:U.Z,QToggle:I.Z,QInput:N.Z});const J=(0,s._)("div",{class:"text-h5 text-center text-weight-bold q-mb-sm"},"Entity Script Server (ESS)",-1),Y=(0,s._)("div",{class:"q-ml-xs q-mt-xs text-caption text-grey-5"},[(0,s.Uk)("The number of packets per second (PPS) that can be sent to the entity server for each server entity script. This contributes to a total overall amount. "),(0,s._)("br"),(0,s.Uk)("Example: 1000 PPS with 5 entites gives a total PPS of 5000 that is shared among the entity scripts. A single could use 4000 PPS, leaving 1000 for the rest, for example.")],-1),K=(0,s._)("div",{class:"q-ml-xs q-mt-xs text-caption text-grey-5"},[(0,s.Uk)("The maximum total packets per seconds (PPS) that can be sent to the entity server. "),(0,s._)("br"),(0,s.Uk)("Example: 5 scripts @ 1000 PPS per script = 5000 total PPS. A maximum total PPS of 4000 would cap this 5000 total PPS to 4000.")],-1);function X(e,t,i,n,a,l){const o=(0,s.up)("q-separator"),r=(0,s.up)("q-input"),u=(0,s.up)("q-card-section"),d=(0,s.up)("q-card"),c=(0,s.up)("q-expansion-item");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(d,{class:"my-card q-mt-md"},{default:(0,s.w5)((()=>[(0,s.Wm)(u,null,{default:(0,s.w5)((()=>[J,(0,s.Wm)(o),(0,s.Wm)(c,{modelValue:e.isWordPressSettingsToggled,"onUpdate:modelValue":t[2]||(t[2]=t=>e.isWordPressSettingsToggled=t),class:"q-mt-md text-subtitle1",popup:"",icon:"settings",label:"Advanced Settings"},{default:(0,s.w5)((()=>[(0,s.Wm)(d,null,{default:(0,s.w5)((()=>[(0,s.Wm)(u,null,{default:(0,s.w5)((()=>[(0,s.Wm)(r,{standout:"bg-primary text-white",class:"text-subtitle1",modelValue:e.entityPPSPerScript,"onUpdate:modelValue":t[0]||(t[0]=t=>e.entityPPSPerScript=t),label:"Entity PPS per script",type:"number"},null,8,["modelValue"]),Y])),_:1}),(0,s.Wm)(u,null,{default:(0,s.w5)((()=>[(0,s.Wm)(r,{standout:"bg-primary text-white",class:"text-subtitle1",modelValue:e.maxEntityPPS,"onUpdate:modelValue":t[1]||(t[1]=t=>e.maxEntityPPS=t),label:"Maximum Total Entity PPS",type:"number"},null,8,["modelValue"]),K])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})])}var ee=function(e,t,i,s){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,a){function l(e){try{r(s.next(e))}catch(t){a(t)}}function o(e){try{r(s["throw"](e))}catch(t){a(t)}}function r(e){e.done?i(e.value):n(e.value).then(l,o)}r((s=s.apply(e,t||[])).next())}))};const te=(0,s.aZ)({name:"EntityScriptServerSettings",data(){return{isWordPressSettingsToggled:!1,values:{}}},methods:{refreshSettingsValues(){return ee(this,void 0,void 0,(function*(){this.values=yield k.Z.getValues()}))},saveSettings(){const e={entity_script_server:{entity_pps_per_script:this.entityPPSPerScript,max_total_entity_pps:this.maxEntityPPS}};k.Z.automaticCommitSettings(e)}},computed:{entityPPSPerScript:{get(){var e,t;return null!==(t=null===(e=this.values.entity_script_server)||void 0===e?void 0:e.entity_pps_per_script)&&void 0!==t?t:0},set(e){var t;"undefined"!==typeof(null===(t=this.values.entity_script_server)||void 0===t?void 0:t.entity_pps_per_script)&&(this.values.entity_script_server.entity_pps_per_script=e,this.saveSettings())}},maxEntityPPS:{get(){var e,t;return null!==(t=null===(e=this.values.entity_script_server)||void 0===e?void 0:e.max_total_entity_pps)&&void 0!==t?t:0},set(e){var t;"undefined"!==typeof(null===(t=this.values.entity_script_server)||void 0===t?void 0:t.max_total_entity_pps)&&(this.values.entity_script_server.max_total_entity_pps=e,this.saveSettings())}}},beforeMount(){this.refreshSettingsValues()}}),ie=(0,T.Z)(te,[["render",X]]),se=ie;C()(te,"components",{QCard:q.Z,QCardSection:L.Z,QSeparator:Z.Z,QExpansionItem:U.Z,QInput:N.Z});const ne=(0,s.aZ)({name:"Index",components:{EntitiesSettings:A,AssetServerSettings:G,EntityScriptServerSettings:se}}),ae=(0,T.Z)(ne,[["render",a]]),le=ae}}]);