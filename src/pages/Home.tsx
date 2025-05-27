import React from 'react';
import {
	NavbarSection,
	HeroSection,
	OurServicesSection,
	AboutUsSection,
	PortfolioSection,
	ContactSection,
	CallToActionSection,
	TestimonialSection,
	PartnerSection,
	FooterSection,

} from '@/components/sections';

const Home = () => {
	const color: string = '#8cb964';

	return (
		<div className="generated-page">
			<NavbarSection color={color} />
			<HeroSection color={color} />
			<OurServicesSection color={color} />
			<AboutUsSection color={color} />
			<PortfolioSection color={color} />
			<ContactSection color={color} />
			{/* <CallToActionSection color={color} /> */}
			{/* <TestimonialSection color={color} /> */}
			{/* <PartnerSection color={color} /> */}
			{/* <FooterSection color={color} /> */}
		</div>
	);
};

export default Home;
