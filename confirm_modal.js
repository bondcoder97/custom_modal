(function(){
    async function confirm_modal(text, options={}){
        const {modal_type="default", header="Attention!"} = options;
        if(!text) throw new Error("Modal text is required!");
        const modal_wrapper = document.createElement("div");
        modal_wrapper.className = "custom_modal_wrapper";
        modal_wrapper.innerHTML = `
            <div class="custom_modal ${modal_type !== "default"? modal_type : ""}">
                <div class="custom_modal_header">
                    ${header}
                </div>
                <div class="custom_modal_content">
                    <p>${text}</p>
                </div>
                <div class="custom_modal_btns">
                    <span class="accept_btn btn">OK</span>
                    <span class="cancel_btn btn">CANCEL</span>
                </div>
            </div>
        `;
        
        modal_wrapper.querySelector(".accept_btn").addEventListener("click", ()=> {
            modal_wrapper.dispatchEvent(new CustomEvent("user_answer", {detail: {answer: true}}));
        });

        modal_wrapper.querySelector(".cancel_btn").addEventListener("click", ()=> {
            modal_wrapper.dispatchEvent(new CustomEvent("user_answer", {detail: {answer: false}}));
        });
        document.body.appendChild(modal_wrapper);

        const answer = await new Promise((resolve, reject) => {
            modal_wrapper.addEventListener("user_answer", function({detail: {answer}}) {
                resolve(answer);
                modal_wrapper.remove();
            })
        });
        return answer;
    }

    window.confirm_modal = confirm_modal;
})();