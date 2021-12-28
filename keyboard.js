   var capital=false;
   var numlock=false;
   var shiftk=false;
   $('#disp').keypress(function(event){
     event.preventDefault();
     return false;
    });
    $(".capl").click(function(){
        // console.log(capital)
            if(capital==true){
                capital=false;
                $(".capl").css("background-color","black");
            }
            else{
                capital=true;
                $(".capl").css("background-color","grey"); 
            }
        }            
    )
    $(".buton").hide();
    $("#disp").click(function(){
       
        $("p").hide();
        $(".buton").show();
    })
    
    function valuek(e){ 
        // console.log(e.value);
    
       if(capital==true && e.value!="Enter" && e.value!="Tab" && e.value!="space"){
             if(shiftk==true){
                e.value=e.value.toLowerCase();
    
            }
            // console.log(e.value.toUpperCase())
            else{
            e.value=e.value.toUpperCase();
            }
        }
        else if(shiftk==true){
            e.value=e.value.toUpperCase();
        }
         else if(e.value=="Enter"){
            e.value ="\n";
        }
        
        else if(e.value=="Tab"){
            e.value="    ";
    
        }
        else if(e.value=="space"){
            e.value=" ";
        }
        else if(capital==true  &&  numlock==true){
            e.value=e.value.toLowerCase();
        }
    
        else{
        
        e.value=e.value.toLowerCase();
        }
        text=e.value;
        console.log(disp.selectionStart )
       if (disp.selectionStart || disp.selectionStart == '0') {
           console.log(disp.selectionStart )
            var startPos = disp.selectionStart;
            var endPos = disp.selectionEnd;
            console.log(disp.value.length +" ")
                    disp.value = disp.value.substring(0, startPos)
                        + text
                        + disp.value.substring(endPos, disp.value.length);
                        disp.focus();
                        disp.selectionStart=startPos+1;
                        disp.selectionEnd = endPos+1;

                } 
             }
        function back(){
        var start = disp.selectionStart;
        console.log("sstst"+start)
        
        var end = disp.selectionEnd;
        console.log("end"+end)

        var ln  = disp.value.length;
        var prev = disp.value.substring( 0, start );   
        var after = disp.value.substring( end, ln );    
        
        if(start==end)
        {
            disp.value = disp.value.substring(0, start-1 ) + disp.value.substring(end, ln );
            disp.focus();
            disp.selectionStart = start-1;
            disp.selectionEnd = start-1;
        }
      
    }
    function disapp(){
        let disapp=document.getElementById("disp");
        disapp.value="";
    }
    function valuen(n){
          if(numlock===true){
                    if(n.value==1){
                        n.value="!";
                       setTimeout(()=>{
                        n.value=1;
                       },2000)
                        console.log(n.value);
                    }
                    else if(n.value=="`"){
                        n.value="~";
                        setTimeout(()=>{
                            n.value="`";
                           },2000)
                    }
                    else if(n.value==2){
                        n.value="@";
                        setTimeout(()=>{
                            n.value=2;
                           },2000)
                        console.log(n.value);

                    }
                    else if(n.value==3){
                        n.value="#";
                        setTimeout(()=>{
                            n.value=3;
                           },2000)
                    }
                    else if(n.value==4){
                        n.value="$";
                        setTimeout(()=>{
                            n.value=4;
                           },2000)
                    }
                    else if(n.value==5){
                        n.value="%";
                        setTimeout(()=>{
                            n.value=5;
                           },2000)
                    }
                    else if(n.value==6){
                        n.value="^";
                        setTimeout(()=>{
                            n.value=6;
                           },2000)
                    }
                    else if(n.value==7){
                        n.value="&";
                        setTimeout(()=>{
                            n.value=7;
                           },2000)
                    }
                    else if(n.value==8){
                        n.value="*";
                        setTimeout(()=>{
                            n.value=8;
                           },2000)
                    }
                    else if(n.value==9){
                        n.value="(";
                        setTimeout(()=>{
                            n.value=9;
                           },2000)
                    }
                    else if(n.value==0){
                        n.value=")";
                        setTimeout(()=>{
                            n.value=0;
                           },2000)
                    }
                    else if(n.value=="-"){
                        n.value="_";
                        setTimeout(()=>{
                            n.value="-";
                           },2000)
                    }
                    else if(n.value==";"){
                        n.value=":";
                        setTimeout(()=>{
                            n.value=";";
                           },2000)
                    }
                    else if(n.value=="'"){
                        n.value='"';
                        setTimeout(()=>{
                            n.value="'";
                           },2000)
                    }
                    else if(n.value=="<"){
                        n.value=',';
                        setTimeout(()=>{
                            n.value="<";
                           },2000)
                    }
                    else if(n.value==">"){
                        n.value='.';
                        setTimeout(()=>{
                            n.value=">";
                           },2000)
                    }
                    else if(n.value=="/"){
                        n.value='?';
                        setTimeout(()=>{
                            n.value="/";
                           },2000)
                    }
                    else if(n.value=="["){
                        n.value='{';
                        setTimeout(()=>{
                            n.value="[";
                           },2000)
                    }
                    else if(n.value=="]"){
                        n.value='}';
                        setTimeout(()=>{
                            n.value="]";
                           },2000)
                    }
                    else if(n.value=='\\'){
                        n.value='|';
                        
                        setTimeout(()=>{
                            n.value='\\';
                           },2000)
                    }
                    else{
                        n.value="=";
                        setTimeout(()=>{
                            n.value="+";
                           },2000)
                    }
                    console.log("True");
                    
                }
            else(numlock===false)
            {    
                console.log(n.value);
                n.value=n.value;
                console.log("false");
            }
            text=n.value;
        
            if (disp.selectionStart || disp.selectionStart == '0') {
                console.log(disp.selectionStart)
                 var startPos = disp.selectionStart;
                 var endPos = disp.selectionEnd;
                         disp.value = disp.value.substring(0, startPos)
                             + text
                             + disp.value.substring(endPos, disp.value.length);
                             disp.focus();
                             disp.selectionStart=startPos+1;
                             disp.selectionEnd = endPos+1;
     
                     } 
                 }
          $(".shift").click(function()
        {
            numlock=true;
            shiftk=true;
            console.log("Caps"+ capital);
            console.log("numlock"+numlock)
            $(".shiftl").css("background-color","grey");
            $(".shiftr").css("background-color","grey");
        
        setTimeout(()=>{
            console.log("Caps"+ capital);
            numlock=false;
            shiftk=false;
            console.log("numlock"+numlock); 
            $(".shiftl").css("background-color","black");
            $(".shiftr").css("background-color","black");
           
        },2000);     
    })
    function control(){
        var cop=document.getElementById("disp");
        let option=prompt("What would you like to do?\n A-SelectAll\n C-Copy\nV-Paste string present in text area","A ,C or V");
        console.log(option);
        option=option.toUpperCase();

        switch(option){
            case "A":
                console.log("A");
                cop.select();
                break;
            case "C":
                console.log("C");
                cop.select();
                navigator.clipboard.writeText(cop.value);
                 alert("CopiedText "+ cop.value);
                break;
            case "V":
                var paste=disp.value;
                cop.select();
                disp.value+= " "+paste;
           
        }        
    }   
    $(".lfn").click(function(){
        $("#disp,.butt").animate({
            opacity:.6,
        })
      
    })
    $(".rfn").click(function(){
        $("#disp,.butt").animate({
            opacity:1,
        })
       
    })
    function de(){
       var start = disp.selectionStart;
       var end = disp.selectionEnd;
       var ln  = disp.value.length;
       disp.value=disp.value.substring(0,start)+disp.value.substring(end+1,ln);
       disp.focus();
       disp.selectionStart=start;
       disp.selectionEnd=end;
       console.log(start + " " +end)
    }
    function capitali(){
        var ar="",a,sc="";
        var a=disp.value.split(" ");
        console.log(a)
        for(var i=0;i<a.length;i++){
            ar+=sc+a[i][0].toUpperCase()+a[i].substring(1).toLowerCase();
            console.log(ar[i]);
            sc=" "
        }
        tex= ar.toString()
        disp.value=disp.value.trim();
        disp.value=tex;
    }
       



