module.exports = {

 title: 'Demo Website',
 description: 'Description',
 themeConfig: {
       nav: [
         { text: 'Home', link: '/' },
         { text: 'About Us', link: '/aboutus/' },
		 { text: 'Blog', link: '/blog/' },
         { text: 'Contact Us', link: '/contactus/' },
       ],
	  sidebar: {
         '/aboutus/': [
               '',
               'More Informations'
           ]
       }	 
   }
}