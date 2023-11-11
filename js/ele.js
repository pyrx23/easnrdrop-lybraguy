function editWallet(e){
    var walletid = e.attributes.walletid.value;
    var walletname = e.attributes.walletname.value;
    var wallet = e.attributes.wallet.value;
    var token = e.attributes.token.value;
    document.getElementById('modal-wallet-edit').value = wallet;
    // document.getElementById('modal-wallet-token-edit').value = token;
    document.getElementById('modal-wallet-name-edit').value = walletname;
    document.getElementById('modal-wallet-id-edit').value = walletid;
}

function deleteWallet(e){
    var walletid = e.attributes.walletid.value;
    var walletname = e.attributes.walletname.value;
    var wallet = e.attributes.wallet.value;
    var token = e.attributes.token.value;
    document.getElementById('modal-wallet-delete').value = wallet;
    document.getElementById('modal-wallet-token-delete').value = token;
    document.getElementById('modal-wallet-name-delete').value = walletname;
    document.getElementById('modal-wallet-id-delete').value = walletid;
}

function validateWallet(wallet){

    var valid = WAValidator.validate(wallet.value, 'ethereum');

        if (!valid) {
            //wallet is invalid
            document.getElementById('walletj').value = "";
            document.getElementById('errorwalletmsg1').value = "";
            document.getElementById('errorwalletmsg1').classList.remove("nodisplay");
            document.getElementById('errorwalletmsg1').classList.add("yesdisplay");
        }else{
            //wallet is valid
            document.getElementById('errorwalletmsg1').classList.remove("yesdisplay");
            document.getElementById('errorwalletmsg1').classList.add("nodisplay");
        }

}


function validateWalletDash(wallet){

    var valid = WAValidator.validate(wallet.value, 'ethereum');

    if (!valid) {
        //wallet is invalid
        document.getElementById('walletadd').value = "";
        document.getElementById('errorwalletmsg1').value = "";
        document.getElementById('errorwalletmsg1').classList.remove("nodisplay");
        document.getElementById('errorwalletmsg1').classList.add("yesdisplay");
    }else{
        //wallet is valid
        document.getElementById('errorwalletmsg1').classList.remove("yesdisplay");
        document.getElementById('errorwalletmsg1').classList.add("nodisplay");
    }

}

function removeSaveWalletStyle(e){

    document.getElementById('save_wallet_button').classList.add("savewalletopacity");


}

function getStartedChoosePricing(e){
    var plantype = e.attributes.plantype.value;
    var planduration = e.attributes.planduration.value;
    document.getElementById('plantype').value = plantype;
    document.getElementById('planduration').value = planduration;

    if (e.attributes.user_id_string.value === "") {
    }else{
        console.log(e.attributes.user_id_string.value)
        // document.getElementById('HJds222s').submit();
    }
}
function getStartedStandalonePricing(e){
    var plantype = e.attributes.plantype.value;
    var planduration = e.attributes.planduration.value;
    document.getElementById('plantype').value = plantype;
    document.getElementById('planduration').value = planduration;

    if (e.attributes.user_id_string.value === "") {
    }else{
        emailmodal = e.attributes.emailmodal.value;
        document.getElementById("emailmodal").value = emailmodal;
        document.getElementById('JHGTYSBBFT').submit();
    }
}

function getStartedAirdrops(e){
    var protocol_id_string = e.attributes.protocol.value
    var airdropamount = e.attributes.airdropamount.value;
    document.getElementById("p_id_string").value = protocol_id_string;
    document.getElementById("airdropamount").innerText = airdropamount;
    document.getElementById("airdropinput").value = airdropamount;

    if (e.attributes.user_id_string.value === "") {
    }else{
        emailmodal = e.attributes.emailmodal.value;
        document.getElementById("emailmodal").value = emailmodal;
        document.getElementById('HJds222s').submit();
    }
}

function getStartedPricing(e){
    var plantype = e.attributes.plantype.value;
    var planduration = e.attributes.planduration.value;
    document.getElementById('plantype').value = plantype;
    document.getElementById('planduration').value = planduration;
}

function getStartedPayment(e){
}

function currentDuration(e){
    var plan_duration = e.attributes.duration.value;

    if (plan_duration == "12"){
        document.getElementById('current-duration-selector-year').classList.add("w--current");
        document.getElementById('current-duration-selector-month').classList.remove("w--current");

        document.getElementById('current-duration-body-year').classList.add("w--tab-active");
        document.getElementById('current-duration-body-month').classList.remove("w--tab-active");

    }else if(plan_duration == "1"){

        document.getElementById('current-duration-selector-month').classList.add("w--current");
        document.getElementById('current-duration-selector-year').classList.remove("w--current");

        document.getElementById('current-duration-body-month').classList.add("w--tab-active");
        document.getElementById('current-duration-body-year').classList.remove("w--tab-active");
    }

}


function currentPayment(e){
    var payment_type = e.attributes.paymenttype.value;

    if (payment_type == "crypto"){
        document.getElementById('current-payment-selector-crypto').classList.add("w--current-new");
        document.getElementById('current-payment-selector-fiat').classList.remove("w--current-new");

        document.getElementById('paywithcrypto').classList.remove("nodisplay");
        document.getElementById('paywithcrypto').classList.add("yesdisplay");
        document.getElementById('paywithfiat').classList.remove("yesdisplay");
        document.getElementById('paywithfiat').classList.add("nodisplay");

        document.getElementById('button_display_crypto').classList.remove("nodisplay");
        document.getElementById('button_display_crypto').classList.add("yesdisplay");
        document.getElementById('button_display_fiat').classList.remove("yesdisplay");
        document.getElementById('button_display_fiat').classList.add("nodisplay");


    }else if(payment_type == "fiat"){

        document.getElementById('current-payment-selector-fiat').classList.add("w--current-new");
        document.getElementById('current-payment-selector-crypto').classList.remove("w--current-new");

        document.getElementById('paywithfiat').classList.remove("nodisplay");
        document.getElementById('paywithfiat').classList.add("yesdisplay");
        document.getElementById('paywithcrypto').classList.remove("yesdisplay");
        document.getElementById('paywithcrypto').classList.add("nodisplay");

        document.getElementById('button_display_fiat').classList.remove("nodisplay");
        document.getElementById('button_display_fiat').classList.add("yesdisplay");
        document.getElementById('button_display_crypto').classList.remove("yesdisplay");
        document.getElementById('button_display_crypto').classList.add("nodisplay");
    }
}

function payWithCrypto(e) {
    // var transaction_id = e.attributes.transaction_id.value;
    // document.getElementById('transaction_id').value = transaction_id;
}




function searchPayment(e) {
    // var transaction_id = e.attributes.transaction_id.value;
    // document.getElementById('transaction_id').value = transaction_id;
}

function copyText() {
    // Get the text field
    var copyText = document.getElementById("referral_input");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // Alert text was copied
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Link copied!";
}
function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}


