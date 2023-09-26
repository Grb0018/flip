const lc = document.querySelector('.curtain_left');
const slc = document.querySelector('.short_curtain_left');
const rc = document.querySelector('.curtain_right');
const src = document.querySelector('.short_curtain_right');

window.onload=()=>{
    var device_orientation_potrait=window.matchMedia("(orientation: portrait)");
    if(device_orientation_potrait.matches==true){
        $('.rotate').css({display:"flex"});
        $('.stage').css({display:"none"});
    }else{
        $('.rotate').css({display:"none"});
        $('.stage').css({display:"flex"});
        $.getScript("./pc.js");
        document.onclick=()=>{
            lc.style.transform="translateX(-40vw)";
            slc.style.transform="translateX(-40vw)";
            rc.style.transform="translateX(40vw)";
            src.style.transform="translateX(40vw)";
            setTimeout(()=>{
                document.querySelector('.tableContainer').style.zIndex='400';
                document.querySelector('.table').style.zIndex='300';
                document.querySelector('.book1').style.zIndex='300';
                document.querySelector('.center_light').style.height='171vh';
                document.querySelector('.center_light').style.animation='opacity1 0.7s linear';
                $('.book1').css({animation:'brighting 1s linear'});
                $('.table').css({animation:'brighting_table 1s linear'});
                setTimeout(()=>{
                    $('.book1').css({filter: "drop-shadow(#dfd7d9 0px 0px 60px) brightness(1)"});
                    $('.table').css({filter: "brightness(1)"});
                },950)
                setTimeout(()=>{document.querySelector('.center_light').style.opacity='1';},650)
        setTimeout(()=>{
            // document.querySelector('.book1').style.transition='0.15s ease';
            
            document.querySelector('.book1').onclick=(e)=>{
                $('.table').fadeOut();
                $(e.target).css({
                    position: "fixed",
                    top:"25vh",
                    filter: "none"
                })
                setTimeout(()=>{
                    $(e.target).stop(true,false).animate({
                        top: $('.album').offset().top+'px',
                        left: $('.album').offset().left+parseInt($('.album').css('width'))/2+'px',
                        width:parseInt($('.album').css('width'))/2+'px',
                        height:$('.album').css('height')
                    },370)
                })
                setTimeout(()=>{
                  
                        document.querySelector('#leath').style.visibility='visible';
                        document.querySelector('.book1').style.visibility='hidden';
                        document.querySelector('#btn').style.display="flex"
                        
                        // document.querySelector('.book1').style.top = parseInt($('.book1').css('top'))- (window.innerHeight/100)*50 +'px';
                        // document.querySelector('.book1').style.position="fixed";
                        // document.querySelector('.book1').style.transition='2.5s ease';
                        // document.querySelector('.book1').style.left = parseInt($('#leath').css('width'))/2+ parseInt($('#leath').css('left')) +"px";
                        // document.querySelector('.book1').style.top = parseInt($('#leath').css('top')) + parseInt($('#album').css('margin')) + 'px';
                        // // document.querySelector('.book1').style.transition='1s ease';
                        // document.querySelector('.book1').style.height = $('#leath').css('height');
                        // document.querySelector('.book1').style.width = parseInt($('#album').css('width'))/2 + "px";
                        // document.querySelector('.book1').style.zIndex = '400';
                        // document.querySelector('#btn').style.display="flex"
                        // document.querySelector('#leath').style.zIndex='300';
                
                        // setTimeout(()=>{
                        //     document.querySelector('#leath').style.visibility='visible';
                        //     document.querySelector('.book1').style.transition='unset';
                        //     document.querySelector('.book1').style.visibility='hidden';
                        //     document.querySelector('.tableContainer').style.visibility='hidden';
                        //     document.querySelector('.book1').style.zIndex='300';
                        // },2400)
                    
                },400)
               
            }
        
        },800)
        
        var width = window.innerWidth;
        
        if(width <= 1024 && width >786){
            document.querySelector('.left_light').style.height='132vh';
            document.querySelector('.left_light').style.animation='opacity 3s linear';
            setTimeout(()=>{document.querySelector('.left_light').style.opacity='0';},2950)
            document.querySelector('.right_light').style.height='147vh';
            document.querySelector('.right_light').style.animation='opacity 3s linear';
            setTimeout(()=>{document.querySelector('.right_light').style.opacity='0';},2950) ;
            lc.style.filter=' drop-shadow(2px 15px 30px black) brightness(0.15)';
            slc.style.filter='brightness(0.15)';
            rc.style.filter='drop-shadow(2px 15px 30px black) brightness(0.15)';
            src.style.filter='brightness(0.15)';
            document.querySelector('.top_curtain_left').style.filter='drop-shadow(2px 4px 30px black) brightness(0.15)';
            document.querySelector('.top_curtain_left2').style.filter='drop-shadow(2px 4px 30px black) brightness(0.15)';
            document.querySelector('.top_curtain_right').style.filter='drop-shadow(2px 4px 30px black) brightness(0.15)';
            document.querySelector('.top_curtain_right2').style.filter='drop-shadow(2px 4px 30px black) brightness(0.15)';
            document.querySelector('.floor').style.filter='brightness(0.2)';
        
        }
        else if(width <= 1440 && width >1024){
            document.querySelector('.left_light').style.height='152vh';
            document.querySelector('.left_light').style.animation='opacity 3s linear';
            setTimeout(()=>{document.querySelector('.left_light').style.opacity='0';},2950)
            document.querySelector('.right_light').style.height='143vh';
            document.querySelector('.right_light').style.animation='opacity 3s linear';
            setTimeout(()=>{document.querySelector('.right_light').style.opacity='0';},2950) 
            lc.style.filter=' drop-shadow(2px 15px 30px black) brightness(0.15)';
            slc.style.filter='brightness(0.15)';
            rc.style.filter='drop-shadow(2px 15px 30px black) brightness(0.15)';
            src.style.filter='brightness(0.15)';
            document.querySelector('.top_curtain_left').style.filter='drop-shadow(2px 4px 30px black) brightness(0.15)';
            document.querySelector('.top_curtain_left2').style.filter='drop-shadow(2px 4px 30px black) brightness(0.15)';
            document.querySelector('.top_curtain_right').style.filter='drop-shadow(2px 4px 30px black) brightness(0.15)';
            document.querySelector('.top_curtain_right2').style.filter='drop-shadow(2px 4px 30px black) brightness(0.15)';
            document.querySelector('.floor').style.filter='brightness(0.2)';
        }
        else if(width <= 2560 && width >1440){
            document.querySelector('.left_light').style.height='146vh';
            document.querySelector('.left_light').style.animation='opacity 3s linear';
            setTimeout(()=>{document.querySelector('.left_light').style.opacity='0';},2950)
            document.querySelector('.right_light').style.height='151vh';
            document.querySelector('.right_light').style.animation='opacity 3s linear';
            setTimeout(()=>{document.querySelector('.right_light').style.opacity='0';},2950) 
            lc.style.filter=' drop-shadow(2px 15px 30px black) brightness(0.15)';
            slc.style.filter='brightness(0.15)';
            rc.style.filter='drop-shadow(2px 15px 30px black) brightness(0.15)';
            src.style.filter='brightness(0.15)';
            document.querySelector('.top_curtain_left').style.filter='drop-shadow(2px 4px 30px black) brightness(0.15)';
            document.querySelector('.top_curtain_left2').style.filter='drop-shadow(2px 4px 30px black) brightness(0.15)';
            document.querySelector('.top_curtain_right').style.filter='drop-shadow(2px 4px 30px black) brightness(0.15)';
            document.querySelector('.top_curtain_right2').style.filter='drop-shadow(2px 4px 30px black) brightness(0.15)';
            document.querySelector('.floor').style.filter='brightness(0.2)';
        }
        else if(width < 785 && width >0){
            document.querySelector('.left_light').style.height='113vh';
            document.querySelector('.left_light').style.animation='opacity 3s linear';
            setTimeout(()=>{document.querySelector('.left_light').style.opacity='0';},2950)
            document.querySelector('.right_light').style.height='108vh';
            document.querySelector('.right_light').style.animation='opacity 3s linear';
            setTimeout(()=>{document.querySelector('.right_light').style.opacity='0';},2950) 
            lc.style.filter=' drop-shadow(2px 15px 30px black) brightness(0.15)';
            slc.style.filter='brightness(0.15)';
            rc.style.filter='drop-shadow(2px 15px 30px black) brightness(0.15)';
            src.style.filter='brightness(0.15)';
            document.querySelector('.top_curtain_left').style.filter='drop-shadow(2px 4px 30px black) brightness(0.15)';
            document.querySelector('.top_curtain_left2').style.filter='drop-shadow(2px 4px 30px black) brightness(0.15)';
            document.querySelector('.top_curtain_right').style.filter='drop-shadow(2px 4px 30px black) brightness(0.15)';
            document.querySelector('.top_curtain_right2').style.filter='drop-shadow(2px 4px 30px black) brightness(0.15)';
            document.querySelector('.floor').style.filter='brightness(0.2)';
        }
        
        
            },3000)
        }
    }
    screen.orientation.onchange=(e)=>{
       window.location.reload();
    }

}

