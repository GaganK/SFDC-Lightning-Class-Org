<aura:application >
    
   <ltng:require styles="/resource/satish/bootstrap-3.3.7-dist/css/bootstrap.min.css"
      scripts="{!join(',', 
        $Resource.jquery224 , 
        $Resource.satish + '/bootstrap-3.3.7-dist/js/bootstrap.min.js')
      }" afterScriptsLoaded="{!c.scriptsLoaded}" /> 
<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
  <span class="caret"></span></button>
  <ul class="dropdown-menu">
    <li><a href="#">HTML</a></li>
    <li><a href="#">CSS</a></li>
    <li><a href="#">JavaScript</a></li>
  </ul>
</div>	
</aura:application>