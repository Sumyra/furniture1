$(function(){
    let proDes=$('.Description')
    let cusCare=$('.customerCare')

    proDes.click(function(){
        cusCare.toggle(300);
    })
    proDes.click(function(){
        proDes.toggleClass("active");
    })
  
    let addInfo=$('.Additional_Information')
    let cusCare2=$('.customerCare2')

    addInfo.click(function(){
        cusCare2.toggle(300);
    })
    addInfo.click(function(){
        addInfo.toggleClass("active");
    })
    let proRev=$('.Reviews')
    let cusCare3=$('.customerCare3')

    proRev.click(function(){
        cusCare3.toggle(300) ; 
      })
    proRev.click(function(){
        proRev.toggleClass("active");
    })
     let proPev=$('.Check')
        
     proPev.click(function(){
        proPev.toggleClass("now");
    })

      
})