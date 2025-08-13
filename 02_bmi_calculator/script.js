let form=document.querySelector('#form')

form.addEventListener('submit',function(event){
    event.preventDefault()

    const result=document.querySelector('#resultHeading')

    const height=document.querySelector('#heightInput')
    const weight=document.querySelector('#weightInput')
    const heightValue=parseFloat(height.value);
    const weightValue=parseFloat(weight.value);

    result.innerHTML='';
    result.style.display=`block`

    const errorMessages=[]
    if(Number.isNaN(heightValue) || heightValue<0){
        errorMessages.push("<p>PLEASE PROVIDE A VALID HEIGHT</p>")
    }
    if(Number.isNaN(weightValue) || weightValue<0){
        errorMessages.push("<p>PLEASE PROIDE A VALID WEIGHT</p>")
    }
    if(errorMessages.length>0){
        result.innerHTML=errorMessages.join('')
    }
    else{
        const heightInMeters = heightValue / 100;
        const bmi=weightValue/(heightInMeters*heightInMeters)
        const formattedBmi=bmi.toFixed(2)
        let bmiCategory=''
        if(bmi<18.6){
            bmiCategory='<p>You are underweight.</p>'
        }else if(bmi>=18.6 && bmi<=24.9){
            bmiCategory='<p>You are in the normal range</p>'
        }else{
            bmiCategory='<p>You are overweight</p>'
        }
        result.innerHTML=`Result: ${formattedBmi} ${bmiCategory}`
    }

})