<aura:application >
    <!-- styles="{!$Resource.satish+'/bootstrap-3.3.7-dist/css/bootstrap.min.css'}" -->
	<ltng:require styles="/resource/satish/bootstrap-3.3.7-dist/css/bootstrap.min.css"
      scripts="{!join(',', 
        $Resource.jquery224 , 
        $Resource.satish + '/bootstrap-3.3.7-dist/js/bootstrap.min.js')
      }" afterScriptsLoaded="{!c.scriptsLoaded}" />
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li><a href="#">Page 1</a></li>
      <li><a href="#">Page 2</a></li>
      <li><a href="#">Page 3</a></li>
    </ul>
    <div class="slds-clearfix">
  		<div class="slds-float_left">
    		<p>I’m not floooaaaating</p>
  		</div>
  		<div class="slds-float_right">
    	<p>I’m not floooaaaating</p>
  	</div>
</div>
</aura:application>