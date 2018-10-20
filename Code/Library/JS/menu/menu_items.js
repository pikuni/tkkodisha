// items structure
// each item is the array of one or more properties:
// [text, link, settings, subitems ...]
// use the builder to export errors free structure if you experience problems with the syntax

var MENU_ITEMS = [
	['Home','/', {'tw' : '_parent'}],
	['Mission','/Code/Module/Mission/Mission.html', {'tw' : '_parent'}],
	['Achievements','/Code/Module/Achievements/Achievements.html', {'tw' : '_parent'}],
	['Donation','/Code/Module/Donation/Donation.html', {'tw' : '_parent'}],
	['Activity','/Code/Module/Activity/Activity.html', {'tw' : '_parent'}],
	['Program and Events','/Code/Module/Events/Events.html', {'tw' : '_parent'}],
	['Admission','/Code/Module/Admission/Admission.html', {'tw' : '_parent'}],
	['Photo Gallery','/Code/Module/PhotoGallery/PhotoGallery.html', {'tw' : '_parent'}],
	['FAQ','/Code/Module/FAQ/Faq.html', {'tw' : '_parent'}],
	['News',null, null
		,['News Clipping','/Code/Module/News/Newspaper_Clipping.html',{'tw':'_parent'}]
	],
	//['Contact Us','/Code/Module/ContactUs/ContactUs.html', {'tw' : '_parent'}
	['Contact Us',null, null
		,['Contact Info','/Code/Module/ContactUs/ContactInfo.html',{'tw':'_parent'}]
		,['Feedback','/Code/Module/ContactUs/Feedback.html',{'tw':'_parent'}]
	],
	//['About Us','/Code/Module/AboutUs/AboutUs.html', {'tw' : '_parent'},
	['About Us',null, null,
		['History','/Code/Module/AboutUs/History.html',{'tw':'_parent'}],
		['Profile','/Code/Module/AboutUs/Profile.html',{'tw':'_parent'}],
		['Personal Profile','/Code/Module/AboutUs/PersonalProfile.html',{'tw':'_parent'}],
		['Organising Committee','/Code/Module/AboutUs/OrgCommittee.html',{'tw':'_parent'}],
		['Our Family','/Code/Module/AboutUs/OurFamily.html',{'tw':'_parent'}]
	],
	['Site Map','/Code/Module/Sitemap/Sitemap.html', {'tw' : '_parent'}]
];