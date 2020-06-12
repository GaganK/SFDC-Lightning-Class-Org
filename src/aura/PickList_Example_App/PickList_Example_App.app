<aura:application extends="force:slds">
     <aura:attribute name="myVal" type="String" />
    <c:PickList_Example myVal="{!v.myVal}" />
    Your Have selected : {!v.myVal}
</aura:application>