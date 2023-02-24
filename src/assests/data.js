// common functions
export const calculateDiscount = (val1, val2) => {
    let diff = Math.abs(val1 - val2);
    let avg = (val1 + val2) / 2;
    let percentage = (diff / avg) * 100;
    return Math.floor(percentage);
}
// common exports
export const Logo = {
    first: 'Trading',
    second: 'School'
};
export const Slogan = ["Learn and Earn", "Have faith in us"];
export const Links = [{ "linkName": "Home", "to": "/" }, { "linkName": "Courses", "to": "/courses" }, { "linkName": "About", "to": "/about" }, { "linkName": "Contact", "to": "/contact" }];
export const Email = "support@tradingschool.com";
// large export
export const TopBarData = {
    Banner: {
        content: "Festive Offer Paradise course @1989 grab the deal soon",
        buttons: [
            {
                to: 'https://web.fankonnect.com/g/1712',
                title: 'Buy Now'
            }
        ]
    },
    NavBar: {
        HeroLg: {
            first: Logo.first,
            second: Logo.second
        },
        HeroSm: {
            first: Logo.first[0],
            second: Logo.second[0]
        },
        Links: Links
    }
};
export const Home = {
    LeftContainer: {
        TypeWriter: Slogan,
        buttons: [
            {
                title: "View Courses",
                to: '/courses',
                colorScheme: 'blue',
                variant: 'solid'
            },
            {
                title: "Contact Us",
                to: '/contact',
                colorScheme: 'blue',
                variant: 'outline'
            }
        ]
    }
}
export const AddressData = {
    embededLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3493.353612090765!2d76.61132911508841!3d28.88783838231777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc815a7139ca41e5c!2zMjjCsDUzJzE2LjIiTiA3NsKwMzYnNDguNyJF!5e0!3m2!1sen!2sin!4v1677228196545!5m2!1sen!2sin",
    addressCard: {
        Society: "Model Town, Suren Rd",
        City: "Rohtak",
        State: "Haryana",
        Pincode: "124001",
    }
}
export const CoursesData = {
    Courses: [
    {
        Type: "Online Course",
        Price: 6999,
        DiscountedPrice: 5999,
        Overview: "Non interactive online class on Google Meet",
        ClassDuration: "3 Months (Monday - Friday)",
        ClassTiming: "8:00 PM - 9:30 PM",
        ModeOfLanguage: 'Hinglish'
    },
    {
        Type: "Offline Course",
        Price: 6999,
        DiscountedPrice: 5999,
        Overview: "Interactive offline class, do live trading",
        ClassDuration: "3 Months (Monday - Friday)",
        ClassTiming: "10:00 AM to 4:00 PM",
        ModeOfLanguage: 'Hinglish'
    }
    ],
    WhatYouLearn:[
        'Share Market Basic and Advance',
        'Live trading (OFFLINE COURSE)',
        'Techincal Analysis', 
        'Fundamental Analysis', 
        'Price Action', 
        'Intraday and Positional Trading', 
        'Future and Option',
        'Option buying and selling',
        'IPO allotments',
        'Long Tern Investement'
    ]
}