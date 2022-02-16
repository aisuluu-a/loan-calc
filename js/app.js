document.addEventListener('DOMContentLoaded', () => {
   
    const amount = document.querySelector('#amount');
    const interest = document.querySelector('#interest');
    const years = document.querySelector('#years');
  
    const monthly = document.querySelector('#monthly');
    const total = document.querySelector('#totally');
    const fees = document.querySelector('#fees');
    

  
  document.querySelector('#loan-form').addEventListener('submit', (e) => {
        
      e.preventDefault();
  
        if (amount.value === '' || interest.value === '' || years.value === '') {
            alert('Please, fill the fields');
            

        } else {

          document.querySelector('#loader').style.display = 'block';

          
          setTimeout(function() {
              document.querySelector('#loader').style.display = 'none';
              
            }, 1000)
            
          };
          document.querySelector('#output').style.display = 'block';
          const amountVal = Number(amount.value);
          const interestVal = Number(interest.value);
          const yearsVal = Number(years.value);
    
          const numberOfMonth = Number(yearsVal * 12);
    
         const totalLoun = amountVal + (((amountVal / 100)*interestVal)*yearsVal);
          const totalFee = ((amountVal / 100)*interestVal)*yearsVal;
          const monthlyPayment = totalLoun / numberOfMonth;
    
          const monthlyPaymentArounded = Math.round(monthlyPayment);
          
          monthly.innerHTML = monthlyPaymentArounded + "$";
          total.innerHTML = totalLoun + "$";
          fees.innerHTML = totalFee + "$";
        }
  
  

    );
  })
