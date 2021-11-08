Simple modals instead native "alert" that often can be blocked by browser. 

## Modal types
- success
- error
- default

## 1. Include styles
CSS: <b>/style/css/custom_modal.css</b>  
SCSS: <b>/style/scss/custom_modal.scss</b>

## 2. Include Scripts

### Browser environment
alert_modal.js  
confirm_modal.js  

### CommonJS environment
import {alert_modal, confirm_modal} from "modals.js"; 


## Usage

alert_modal("my text")  
await confirm_modal("Are you really want to do it?")  
alert_modal("Error: Something went wrong!", {modal_type: "error"})