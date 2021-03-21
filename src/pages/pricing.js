import React from 'react'; 
import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';

const Pricing = () => { 
return ( 
	<div 
	// style={{ 
	// 	display: 'flex', 
	// 	justifyContent: 'Right', 
	// 	alignItems: 'Right', 
	// 	height: '100vh'
	// }} 
	> 
	<PricingTable  highlightColor='#1976D2'>
    <PricingSlot  buttonText='TRY IT FREE' title='FREE' priceText='$0/month'>
        <PricingDetail> <b>2</b> teams</PricingDetail>
        <PricingDetail> <b>5 GB</b> storage</PricingDetail>
        <PricingDetail> <b>5</b> users</PricingDetail>
        <PricingDetail strikethrough> <b>Time tracking</b></PricingDetail>
    </PricingSlot>
    <PricingSlot highlighted buttonText='SIGN UP' title='BASIC' priceText='$9.99/month'>
        <PricingDetail> <b>7</b> teams</PricingDetail>
        <PricingDetail> <b>10 GB</b> storage</PricingDetail>
        <PricingDetail> <b>Unlimited</b> users</PricingDetail>
        <PricingDetail> <b>Time tracking</b></PricingDetail>
    </PricingSlot>
    <PricingSlot  buttonText='SIGN UP' title='PROFESSIONAL' priceText='$13.99/month'>
        <PricingDetail> <b>20</b> teams</PricingDetail>
        <PricingDetail> <b>50 GB</b> storage</PricingDetail>
        <PricingDetail> <b>Unlimited</b> users</PricingDetail>
        <PricingDetail> <b>Time tracking</b></PricingDetail>
    </PricingSlot>
    <PricingSlot  buttonText='SIGN UP' title='ENTERPRISE' priceText='$19.99/month'>
        <PricingDetail> <b>Unlimited</b> teams</PricingDetail>
        <PricingDetail> <b>100 GB</b> storage</PricingDetail>
        <PricingDetail> <b>Unlimited</b> users</PricingDetail>
        <PricingDetail> <b>Time tracking</b></PricingDetail>
    </PricingSlot>
</PricingTable>



	</div> 
); 
}; 

export default Pricing;
