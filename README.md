Simple modals instead native "alert" that often can be blocked by browser. 

# Modal types
- success
- error
- default

# HTML file
<script src="alert_modal.js">  </script>
<script src="confirm_modal.js">  </script>

# Scss
@import "./custom_modal";

# Use
alert_modal("my text")
await confirm_modal("Are you really want to do it?")