// common functions
import { AiFillInstagram,AiFillFacebook,  AiOutlineTwitter} from 'react-icons/ai';
import {IoLogoWhatsapp} from 'react-icons/io';
import AddressCardImage from './images/trading_school.jpeg';
import PolygonBg from './images/polygon2.png';
import FounderImage from './images/founderImage.jpeg';
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
        content: "Festive Offer Paradise course @999 grab the deal soon",
        buttons: [
            {
                to:'https://rpy.club/g/ZOIPTY0A5B',
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
    Heading:"React out to us",
    CardHeading:"Trading School address",
    CardImage:AddressCardImage,
    embededLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3493.353612090765!2d76.61132911508841!3d28.88783838231777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc815a7139ca41e5c!2zMjjCsDUzJzE2LjIiTiA3NsKwMzYnNDguNyJF!5e0!3m2!1sen!2sin!4v1677228196545!5m2!1sen!2sin",
    addressCard: [
        {
            Heading:"Society",
            Value: "Model Town, Suren Rd"
        },
        {
            Heading:"City",
            Value: "Rohtak"
        },
        {
            Heading:"State",
            Value: "Haryana"
        },
        {
            Heading:"Society",
            Value: "124001"
        }
    ]
}
export const CoursesData = {
    Courses: [
        {
        Type: "Telegram Channel",
        Price: 1499,
        DiscountedPrice: 999,
        Overview: {heading: "Overview", content:"Daily Live trade with logic behind them"},
        Details:{
            heading:"Channel Details", 
            content: [
                    {heading:"Language", content:"Hinglish"},
                    {heading:"Duration", content:"1 Month"}
                ]
        }, 
        showEnroll:true,
        EnrollSteps:[
            "Pay using the pay button.",
            "After successful payment, you’ll get the invite link via SMS to join the exclusive channel within 2 hours. You can join the channel through that link.",
            "More over you can came to us and pay your fee offline will do the rest of the things for you."
        ],
        Payment:{
            heading:"Pay Now",
            to:'https://rpy.club/g/ZOIPTY0A5B'
        }
    },
    {
        Type: "Online Course",
        Price: 6999,
        DiscountedPrice: 5999,
        Overview: {heading: "Overview", content:"Non interactive online class on Zoom with mentor support"},
        Details:{
            heading:"Class Details", 
            content: [
                    {heading:"Duration", content:"Lifetime (Monday - Friday)"},
                    {heading:"Timing", content:"8:00 PM - 9:30 PM"},
                    {heading:"Language", content:"Hinglish"},
                ]
        },
        showEnroll:false,
        EnrollSteps:[
            "Pay using the pay button.",
            "Took the payment screenshot and send to our WhatsApp number along with your details",
            "Verfication will be done within 12Hr after that you will recive your class details within 24Hr over mail or provided whats app number",
            "More over you can came to us and pay your fee offline will do the rest of the things for you."
        ],
        Payment:{
            heading:"Pay Now",
            to:'https://web.fankonnect.com/g/2068'
        }
    },
    {
        Type: "Offline Course",
        Price: 6999,
        DiscountedPrice: 5999,
        Overview: {heading: "Overview", content:"Interactive offline class, with live trading"},
        Details:{
            heading:"Class Details", 
            content: [
                    {heading:"Duration", content:"Lifetime (Monday - Friday)"},
                    {heading:"Timing", content:"10:00 AM to 4:00 PM"},
                    {heading:"Language", content:"Hinglish"},
                ]
        },
        showEnroll:false,
        EnrollSteps:[
            "Pay using the pay button.",
            "Took the payment screenshot and send to our WhatsApp number along with your details",
            "After that you can join the classes same day after payment verification.",
            "More over you can came to us and pay your fee offline will do the rest of the things for you."
        ],
        Payment:{
            heading:"Pay Now",
            to:'https://web.fankonnect.com/g/2068'
        }
    },
    
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
export const FooterData = {
    // left part is of logo should be done in footer itself
    Center:{
        Header:"Important Links",
        Links: [{title:"Privacy Policy", to:'/privacypolicy'}, {title:"FAQ", to:'/faq'}, {title:"Contact", to:"/contact"}]
    },
    Right:{
        Header:'GET IN TOUCH',
        Email:"support@tradingschool.com"
    },
    CopyRight:'Copyright © 2023 Trading School. All Rights Reserved'
}

export const SocialWhatsApp = {
    to:'https://wa.me/+917015257395', child: <IoLogoWhatsapp />
}
export const Socials = [
    {to:'https://www.instagram.com/trading_school_rohtak/', child: <AiFillInstagram />},
    SocialWhatsApp,
    {to:'https://wa.me/+917015257395', child: <AiFillFacebook/>},
    {to:'https://wa.me/+917015257395', child: <AiOutlineTwitter/>}
];

export const ContactFormData = [
    {
        label:"Full Name",
        name:"fullname",
        isRequired:true,
        type:'text',
        variant:'flushed',
        placeholder:'Your full name',
        fontSize:'24px',
        fontWeight:600
    },
    {
        label:"Email",
        name:"email",
        isRequired:false,
        type:'text',
        variant:'flushed',
        placeholder:'Your email address',
        fontSize:'24px',
        fontWeight:600
    },
    {
        label:"Phone",
        name:"phone",
        isRequired:true,
        type:'text',
        variant:'flushed',
        placeholder:'Your mobile number /Whats app Number',
        fontSize:'24px',
        fontWeight:600
    }
]

export const AboutData = {
    Header:{
        image:PolygonBg,
        details:[
            {
                heading:"Our Vision",
                content:"This is an effort to empower the Indian citizens, through guided investing - in one of the best asset classes in the world i.e. the stock market. As per National Securities Depository Limited, out of a population of 125 crore, the Demat account holders in India are less than 1.5 crore. Our aim to increase this number by guiding them to invest wisely, for maximum profits. We help them become financial literate, via online/offline workshops PAN India."
            },
            {
                heading:"Why we?",
                content:"We are not just another run-of-the-mill company offering Stock and financial courses. Our vision is to enhance your knowledge to a new level altogether. To make this possible, we use our domain expertise, and the application of the best technologies, to make learning convenient, effective, and affordable for all. The courses we offer are designed to offer unmatched expertise and thus benefit our student"
            }
        ]
    },
    Founder:{
        image:FounderImage,
        name:"Yogesh Ahlawat",
        overview:"Founder -Trading Schoool, Instructor, CGL Qualified",
        info:["Yogesh holds a bachelor's degree inscience from the Jatt college Rohtak .He has a passion to thrive as a financial planner and investment adviser to help people create wealth.",
            "Although he started as a ssc aspirat , after qualifying exams like CGL, CHSLit wasn’t long before yogesh’s long standing passion drove him to choose stock trading as his profession."
        ]
    }
}

export const FAQData = [
    {
        heading:"What happens after I make the payment?",
        content:"After successful payment, you’ll get the invite link via SMS to join the exclusive channel within 2 hours. You can join the channel through that link."
    },
    {
        heading:"What if I don’t get an invite link to the channel after successful payment?",
        content:"If you don’t get an invite link to the channel even after payment, reach out to us on our support email-  support@fankonnect.com. Our team will help you in getting added to the group"
    },
    {
        heading:"What is the refund policy?",
        content:"Once you have made the payment and joined the channel, there won’t be any refund."
    }
    ,
    {
        heading:"I don’t have a Telegram account, so how can I join this group?",
        content:"First, you will have to create an account on Telegram and then once you have purchased the channel subscription you will be given an invite link to join the channel via SMS."
    }
]
