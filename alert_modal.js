(function(){

    function alert_modal(text, options={}){
        const {modal_type="default", header="Attention!"} = options;
        if(!text) throw new Error("Modal text is required!");
        const modal_wrapper = document.createElement("div");
        modal_wrapper.className = "alert_modal_wrapper";
        modal_wrapper.innerHTML = `
            <div class="alert_modal ${modal_type !== "default"? modal_type : ""}">
                <div class="alert_modal_header">
                    ${header}
                </div>
                <div class="alert_modal_content">
                    <p>${text}</p>
                </div>
                <div class="alert_modal_btns">
                    <span class="accept_btn btn">OK</span>
                </div>
            </div>
        `;
        modal_wrapper.querySelector(".accept_btn").addEventListener("click", ()=> modal_wrapper.remove());
        document.body.appendChild(modal_wrapper);
    }

    window.alert_modal = alert_modal;
})();
