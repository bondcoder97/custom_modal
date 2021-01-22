(function(){
    function confirm_modal(text, options={}){
        const {modal_type="default", header="Attention!"} = options;
        if(!text) throw new Error("Modal text is required!");
        const modal_wrapper = document.createElement("div");
        modal_wrapper.className = "confirm_modal_wrapper";
        modal_wrapper.innerHTML = `
            <div class="confirm_modal ${modal_type !== "default"? modal_type : ""}">
                <div class="confirm_modal_header">
                    ${header}
                </div>
                <div class="confirm_modal_content">
                    <p>${text}</p>
                </div>
                <div class="confirm_modal_btns">
                    <span class="accept_btn btn">OK</span>
                    <span class="cancel_btn btn">CANCEL</span>
                </div>
            </div>
        `;
        modal_wrapper.querySelector(".accept_btn").addEventListener("click", ()=> modal_wrapper.remove());
        modal_wrapper.querySelector(".cancel_btn").addEventListener("click", ()=> modal_wrapper.remove());
        document.body.appendChild(modal_wrapper);
    }

    window.confirm_modal = confirm_modal;
})();