  function toggleDiv(div_id,show_id,hide_id,x){
    if (x>1){
      $(div_id).slideDown();
      $(show_id).hide();
      $(hide_id).show();
    } 
    else {
      $(div_id).slideUp();
      $(hide_id).hide();
      $(show_id).show();
    }
  };




    
  
