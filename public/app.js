let donator_name = document.getElementById('name')
let phone_number = document.getElementById('phone_number')
let email = document.getElementById('email')
let amount = document.getElementById('amount')

function payWithPaystack() {
    if(donator_name !== ''){
        if(phone_number !== ''){
            if(email !== ''){
                if(amount !== ''){
                    var handler = PaystackPop.setup({
                        key: 'pk_live_8f9936e528f21f65b48ad3d46f5a0f369082696a', // Replace with your public key
                        email: email.value,
                        amount: amount.value * 100, // the amount value is multiplied by 100 to convert to the lowest currency unit
                        currency: 'NGN', // Use GHS for Ghana Cedis or USD for US Dollars
                        ref: 'YOUR_REFERENCE', // Replace with a reference you generated
                        callback: function(response) {
                          //this happens after the payment is completed successfully
                          var reference = response.reference;
                          alert('Payment complete! Reference: ' + reference);
                          // Make an AJAX call to your server with the reference to verify the transaction
                        },
                        onClose: function() {
                          alert('Transaction was not completed, window closed.');
                        },
                    })
                    handler.openIframe();
                }else{
                    alert('Amount field empty')
                }
            }else{
                alert('Email Address field empty')
            }
        }else{
            alert('Phone No field empty')
        }
    }else{
        alert('Name field empty')
    }
}