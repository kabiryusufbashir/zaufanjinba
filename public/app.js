function payWithPaystack(donator_name,email,phone_number,amount) {
    console.log(donator_name)
    console.log(email)
    console.log(phone_number)
    console.log(amount)

    if(donator_name !== ''){
        if(phone_number !== ''){
            if(email !== ''){
                if(amount !== ''){
                    var handler = PaystackPop.setup({
                        key: 'pk_live_8f9936e528f21f65b48ad3d46f5a0f369082696a', // Replace with your public key
                        email: email,
                        amount: amount * 100, // the amount value is multiplied by 100 to convert to the lowest currency unit
                        currency: 'NGN', // Use GHS for Ghana Cedis or USD for US Dollars
                        ref: generateREF(), // Replace with a reference you generated
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

function generateREF(){
    var d = new Date().getTime();
    if(window.performance && typeof window.performance.now === "function"){
      d += performance.now(); //use high-precision timer if available
    }
    var ref = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (d + Math.random()*16)%16 | 0;
      d = Math.floor(d/16);
      return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return ref;
  }

export {payWithPaystack}