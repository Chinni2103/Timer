    // Get the button element
    const addHiddenElementBtn = document.getElementById('aa');

    // Add click event listener to the button
    addHiddenElementBtn.addEventListener('click', function() {
      // Get the hidden content element
      const hiddenContent = document.getElementById('instructions');
    
      // Toggle the display property of the hidden content element to reveal or hide its contents
      if (hiddenContent.style.display === 'none') {
        hiddenContent.style.display = 'block';
      } else {
        hiddenContent.style.display = 'none';
      }
    });
    
        function handleInput() {
            let inputValue = document.getElementsByTagName('bottom').innerText;
          }
        let set=document.querySelector("#set");
        function settimer(){
            let d=document.querySelector("#in1").textContent;
            let hr=document.querySelector("#in2").textContent;
            let min=document.querySelector("#in3").textContent;
            let sec=document.querySelector("#in4").textContent;
            d=Number(d);
            hr=Number(hr);
            min=Number(min);
            sec=Number(sec);
            if(sec>=60)
            {
                min=min+Math.floor(sec/60);
                sec=sec%60;
            }
            if(min>=60)
            {
                hr=hr+Math.floor(min/60);
                min=min%60;
            }
            if(hr>=24)
            {
                d=d+Math.floor(hr/24);
                hr=hr%24;
            }
            if(sec<10)
            {
                sec="0"+sec;
            }
            if(min<10)
            {
                min="0"+min;
            }
            if(hr<10)
            {
                hr="0"+hr;
            }
            if(d<10)
            {
                d="0"+d;
            }
            document.getElementById("sin1").innerHTML=d;
            document.getElementById("sin2").innerHTML=hr;
            document.getElementById("sin3").innerHTML=min;
            document.getElementById("sin4").innerHTML=sec;
            document.getElementById("in1").innerHTML="0";
            document.getElementById("in2").innerHTML="0";
            document.getElementById("in3").innerHTML="0";
            document.getElementById("in4").innerHTML="0";
            paused();
        }
        let v;
        
        function start(){
            let d=document.querySelector("#sin1").textContent;
            let hr=document.querySelector("#sin2").textContent;
            let min=document.querySelector("#sin3").textContent;
            let sec=document.querySelector("#sin4").textContent;
            d=Number(d);
            hr=Number(hr);
            min=Number(min);
            sec=Number(sec);
                v=setInterval(function(){
                    if(sec!=0){
                        sec--;
                      if(sec>=10){
                        document.getElementById("sin4").innerHTML=sec;
                       }
                      else{
                        document.getElementById("sin4").innerHTML="0"+sec;
                       }
                       if(sec==0 && min>0)
                       {
                        min--;
                        sec=59;
                           if(min>=10)
                             {
                              document.getElementById("sin3").innerHTML=min;
                             }
                           else{
                               document.getElementById("sin3").innerHTML="0"+min;
                            }
                        document.getElementById("sin4").innerHTML=sec;
                       }
                       else if(sec==0 && min==0 && hr>0)
                       {
                        hr--;
                        min=59;
                        sec=59;
                           if(hr>=10)
                           {
                            document.getElementById("sin2").innerHTML=hr;
                           }
                           else{
                            document.getElementById("sin2").innerHTML="0"+hr;
                           }
                           document.getElementById("sin3").innerHTML=min;
                           document.getElementById("sin3").innerHTML=sec;
                       }
                       else if(sec==0 && min==0 && hr==0 && d>0)
                       {
                        d--;
                        hr=23;
                        min=59;
                        sec=59;
                        if(d>=10)
                        {
                            document.getElementById("sin1").innerHTML=d;   
                        }
                        else{
                            document.getElementById("sin1").innerHTML="0"+d;
                        }
                        document.getElementById("sin2").innerHTML=hr;
                        document.getElementById("sin3").innerHTML=min;
                        document.getElementById("sin4").innerHTML=sec;
                       }
                   }
                  if(sec==0 && min==0 && hr>0)
                   {
                     hr--;
                     min=59;
                     sec=59;
                     if(hr>=10)
                     {
                        document.getElementById("sin2").innerHTML=hr;   
                     }
                     else{
                        document.getElementById("sin2").innerHTML="0"+hr;  
                     }
                     document.getElementById("sin4").innerHTML=sec;
                     document.getElementById("sin3").innerHTML=min;
                     
                   }
                   else if(sec==0 && min==0 && hr==0 &&d>0)
                   {
                        d--;
                        hr=23;
                        min=sec=59;
                        if(d>=10)
                        {
                            document.getElementById("sin1").innerHTML=d;   
                        }
                        else{
                            document.getElementById("sin1").innerHTML="0"+d;
                        }
                        document.getElementById("sin2").innerHTML=hr;
                        document.getElementById("sin3").innerHTML=min;
                        document.getElementById("sin4").innerHTML=sec;
                   }
                    else if(sec==0 && min>0)
                    {
                     min--;
                     sec=59;
                        if(min>=10)
                          {
                           document.getElementById("sin3").innerHTML=min;
                          }
                        else{
                            document.getElementById("sin3").innerHTML="0"+min;
                         }
                     document.getElementById("sin4").innerHTML=sec;
                    }
                },1000);
                
             
        }
        function paused(){
            clearInterval(v);
        }
        function reset(){
            
            document.getElementById("sin1").innerHTML="00";
            document.getElementById("sin2").innerHTML="00";
            document.getElementById("sin3").innerHTML="00";
            document.getElementById("sin4").innerHTML="00";
            document.getElementById("in1").innerHTML="0";
            document.getElementById("in2").innerHTML="0";
            document.getElementById("in3").innerHTML="0";
            document.getElementById("in4").innerHTML="0";
            paused();
        }