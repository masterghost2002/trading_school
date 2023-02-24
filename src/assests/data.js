// common exports
export const Logo = {
    first:'Trading',
    second:'School'
};
export const Slogan = ["Learn and Earn", "Have faith in us"];
export const Links = [{"linkName":"Home", "to":"/"},{"linkName":"Courses",  "to":"/course"}, {"linkName":"About", "to":"/about"},{"linkName":"Contact", "to":"/contact"}];
export const Email = "support@tradingschool.com";
// large export
export const TopBarData = {
    Banner:{
        content:"Festive Offer Paradise course @1989 grab the deal soon",
        buttons:[
            {
                to:'https://web.fankonnect.com/g/1712',
                title:'Buy Now'
            }
        ]
    },
    NavBar:{
        HeroLg:{
            first:Logo.first,
            second:Logo.second
        },
        HeroSm:{
            first:Logo.first[0],
            second:Logo.second[0]
        },
        Links:Links
    }
};
export const Home = {
    LeftContainer:{
        TypeWriter:Slogan,
        buttons:[
            {
                title:"View Courses",
                to:'/courses',
                colorScheme: 'blue',
                variant:'solid'
            },
            {
                title:"Contact Us",
                to:'/contact',
                colorScheme: 'blue',
                variant:'outline'
            }
        ]
    }
}
export  const AddressData = {
    embededLink:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3493.353612090765!2d76.61132911508841!3d28.88783838231777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc815a7139ca41e5c!2zMjjCsDUzJzE2LjIiTiA3NsKwMzYnNDguNyJF!5e0!3m2!1sen!2sin!4v1677228196545!5m2!1sen!2sin",
    addressCard:{
        Society:"Model Town, Suren Rd",
        City:"Rohtak",
        State:"Haryana",
        Pincode:"124001",
    }
}