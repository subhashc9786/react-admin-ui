
export const menu = [
    {
        id: 1,
        title: "main",
        listItems: [
            {
                id: 1,
                title: "Homepage",
                url: "/",
                icon: "home.svg",
            }, {
                id: 2,
                title: "Profile",
                url: "/users/1",
                icon: "user.svg"
            }
        ],
    }, {
        id: 2,
        title: "lists",
        listItems: [
            {
                id: 1,
                title: "Users",
                url: "/users",
                icon: "user.svg",
            },
            {
                id: 2,
                title: "Products",
                url: "/products",
                icon: "product.svg",
            },
            {
                id: 3,
                title: "Orders",
                url: "/orders",
                icon: "order.svg",
            },
            {
                id: 4,
                title: "Posts",
                url: "/posts",
                icon: "post2.svg",
            },
        ],
    },
    {
        id: 3,
        title: "general",
        listItems: [
            {
                id: 1,
                title: "Elements",
                url: "/",
                icon: "element.svg",
            },
            {
                id: 2,
                title: "Notes",
                url: "/",
                icon: "note.svg",
            },
            {
                id: 3,
                title: "Forms",
                url: "/",
                icon: "form.svg",
            },
            {
                id: 4,
                title: "Calendar",
                url: "/",
                icon: "calendar.svg",
            },
        ],
    },
    {
        id: 4,
        title: "Maintenance",
        listItems: [
            {
                id: 1,
                title: "Settings",
                url: "/",
                icon: "setting.svg",
            },
            {
                id: 2,
                title: "Backups",
                url: "/",
                icon: "backup.svg",
            },
        ],
    },
    {
        id: 5,
        title: "analytics",
        listItems: [
            {
                id: 1,
                title: "Charts",
                url: "/",
                icon: "chart.svg",
            },
            {
                id: 2,
                title: "Logs",
                url: "/",
                icon: "log.svg",
            },
        ],
    },
]


export const topDealUsers = [
    {
        id: 1,
        img: "https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        username: "Elva McDonald",
        email: "elva@gmail.com",
        amount: "3.668",
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/18567049/pexels-photo-18567049/free-photo-of-model-sitting-and-posing-on-chair.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        username: "Linnie Nelson",
        email: "linnie@gmail.com",
        amount: "3.256",
    },
    {
        id: 3,
        img: "https://images.pexels.com/photos/6598111/pexels-photo-6598111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        username: "Brent Reeves",
        email: "adeline@gmail.com",
        amount: "2.512",
    },
    {
        id: 4,
        img: "https://images.pexels.com/photos/18813169/pexels-photo-18813169/free-photo-of-teenager-in-sportswear.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        username: "Adeline Watson",
        email: "adeline@gmail.com",
        amount: "2.512",
    },
    {
        id: 5,
        img: "https://images.pexels.com/photos/17884023/pexels-photo-17884023/free-photo-of-a-woman-in-a-yellow-dress-with-yellow-flowers.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        username: "Juan Harrington",
        email: "juan@gmail.com",
        amount: "2.134",
    },
    {
        id: 6,
        img: "https://images.pexels.com/photos/18596167/pexels-photo-18596167/free-photo-of-beautiful-blonde-woman-in-jacket-sitting-on-ground-in-garden.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        username: "Augusta McGee",
        email: "augusta@gmail.com",
        amount: "1.932",
    },
    {
        id: 7,
        img: "https://images.pexels.com/photos/18172588/pexels-photo-18172588/free-photo-of-beautiful-young-women-with-red-hair-on-the-white-background-portrait.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        username: "Angel Thomas",
        email: "angel@gmail.com",
        amount: "1.560",
    }

]


export const chartBoxUser = {
    color: "#8884d8",
    icon: "/userIcon.svg",
    title: "Total Users",
    number: "11.238",
    dataKey: "users",
    percentage: 45,
    chartData: [
        { name: "Sun", users: 400 },
        { name: "mon", users: 600 },
        { name: "Tue", users: 500 },
        { name: "Wed", users: 700 },
        { name: "Thu", users: 400 },
        { name: "Fri", users: 500 },
        { name: "Sat", users: 450 }
    ]

}

export const chartBoxProduct = {
    color: "skyblue",
    icon: "/productIcon.svg",
    title: "Total Products",
    number: "238",
    dataKey: "products",
    percentage: 21,
    chartData: [
        { name: "Sun", products: 400 },
        { name: "mon", products: 600 },
        { name: "Tue", products: 500 },
        { name: "Wed", products: 700 },
        { name: "Thu", products: 400 },
        { name: "Fri", products: 500 },
        { name: "Sat", products: 450 }
    ]

}
export const chartBoxRevenue = {
    color: "teal",
    icon: "/revenueIcon.svg",
    title: "Total Revenue",
    number: "$56.432",
    dataKey: "revenue",
    percentage: -12,
    chartData: [
        { name: "Sun", revenue: 400 },
        { name: "mon", revenue: 600 },
        { name: "Tue", revenue: 500 },
        { name: "Wed", revenue: 700 },
        { name: "Thu", revenue: 400 },
        { name: "Fri", revenue: 500 },
        { name: "Sat", revenue: 450 }
    ]

}

export const chartBoxConversion = {
    color: "gold",
    icon: "/conversionIcon.svg",
    title: "Total Ratio",
    number: "2.6",
    dataKey: "ratio",
    percentage: 12,
    chartData: [
        { name: "Sun", ratio: 400 },
        { name: "mon", ratio: 600 },
        { name: "Tue", ratio: 500 },
        { name: "Wed", ratio: 700 },
        { name: "Thu", ratio: 400 },
        { name: "Fri", ratio: 500 },
        { name: "Sat", ratio: 450 }
    ]

}
export const barChartBoxRevenue = {
    title: "Profile Earned",
    color: "#8884d8",
    dataKey: "profit",
    chartData: [
        {
            name: "Sun",
            profit: 4000,
        },
        {
            name: "Mon",
            profit: 3000,
        },
        {
            name: "Tue",
            profit: 2000,
        },
        {
            name: "Wed",
            profit: 2780,
        },
        {
            name: "Fri",
            profit: 2390,
        },
        {
            name: "Sun",
            profit: 4000,
        },
        {
            name: "Sat",
            profit: 3490,
        }
    ]

}

export const barChartBoxVisit = {
    title: "Total Visit",
    color: "#FF8042",
    dataKey: "visit",
    chartData: [
        {
            name: "Sun",
            visit: 4000,
        },
        {
            name: "Mon",
            visit: 3000,
        },
        {
            name: "Tue",
            visit: 2000,
        },
        {
            name: "Wed",
            visit: 2780,
        },
        {
            name: "Fri",
            visit: 2390,
        },
        {
            name: "Sun",
            visit: 4000,
        },
        {
            name: "Sat",
            visit: 3490,
        }
    ]

}

export const userRows = [
    {
        id: 1,
        img: "https://images.pexels.com/photos/10392242/pexels-photo-10392242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        lastName: "Iron",
        firstName: "Man",
        email: "IronMan@gmail.com",
        phone: "9876543210",
        createdAt: "01.02.2023",
        verified: true,
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/3149865/pexels-photo-3149865.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "Hubbard",
        firstName: "Eula",
        email: "fdgdfgdfgd@gmail.com",
        phone: "454354354353",
        createdAt: "01.02.2023",
        verified: true,
    },
    {
        id: 3,
        img: "https://images.pexels.com/photos/15304383/pexels-photo-15304383/free-photo-of-a-girl-in-red-animation-shirt-smiling.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "dora",
        firstName: "Eula",
        email: "dora2gmail.com",
        phone: "53654674435",
        createdAt: "01.02.2023",
        verified: true,
    },
    {
        id: 4,
        img: "https://images.pexels.com/photos/3779760/pexels-photo-3779760.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "Load",
        firstName: "Durs",
        email: "load2gmai.com",
        phone: "4534534545",
        createdAt: "01.02.2023",
        verified: true,
    },
    {
        id: 5,
        img: "https://images.pexels.com/photos/13246954/pexels-photo-13246954.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "spider",
        firstName: "Man",
        email: "spiderman@gmail.com",
        phone: "",
        createdAt: "01.02.2023",
        verified: true,
    },
    {
        id: 6,
        img: "https://images.pexels.com/photos/18486319/pexels-photo-18486319/free-photo-of-daredevil-wallpaper-for-phones.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "harbard",
        firstName: "Eula",
        email: "harbard@gmail.com",
        phone: "785676756567",
        createdAt: "30.04.2023",
        verified: true,
    },
    {
        id: 7,
        img: "https://images.pexels.com/photos/14683726/pexels-photo-14683726.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "ghost",
        firstName: "Rupa",
        email: "ghost@gmail.com",
        phone: "5656565656",
        createdAt: "21.03.2023",
        verified: true,
    },
    {
        id: 8,
        img: "https://images.pexels.com/photos/16774972/pexels-photo-16774972/free-photo-of-portrait.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "Photo",
        firstName: "tic",
        email: "photo2gmail.com",
        phone: "5646565656",
        createdAt: "03.11.2023",
        verified: true,
    },
    {
        id: 9,
        img: "https://images.pexels.com/photos/16132920/pexels-photo-16132920/free-photo-of-majestic-marvel-the-enchanting-dome-of-taj-mahal.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "Taj Mahal",
        firstName: "Agra",
        email: "tajmahal@gmail.com",
        phone: "4545454545",
        createdAt: "01.02.2023",
        verified: true,
    },
    {
        id: 10,
        img: "https://images.pexels.com/photos/1772475/pexels-photo-1772475.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "sweety",
        firstName: "Sharma",
        email: "sweetySharma@gmail.com",
        phone: "89675545677",
        createdAt: "05.09.1998",
        verified: true,
    },
    {
        id: 11,
        img: "https://images.pexels.com/photos/3444087/pexels-photo-3444087.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "Beauty",
        firstName: "Queen",
        email: "Beautyqueen@gmail.com",
        phone: "23433333343",
        createdAt: "15.06.2023",
        verified: true,
    },
    {
        id: 12,
        img: "https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "musks",
        firstName: "kule",
        email: "muks@gmail.com",
        phone: "67665655464",
        createdAt: "11.02.2023",
        verified: true,
    },
    {
        id: 13,
        img: "https://images.pexels.com/photos/5615665/pexels-photo-5615665.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "Green",
        firstName: "jula",
        email: "green@gmail.com",
        phone: "9876566777",
        createdAt: "24.08.2023",
        verified: true,
    },
    {
        id: 14,
        img: "https://images.pexels.com/photos/5682847/pexels-photo-5682847.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "World",
        firstName: "Hello",
        email: "hello@gmail.com",
        phone: "657567575464",
        createdAt: "01.08.2023",
        verified: true,
    },
    {
        id: 15,
        img: "https://images.pexels.com/photos/6976943/pexels-photo-6976943.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "huka",
        firstName: "leya",
        email: "huke@gmail.com",
        phone: "5345345324343",
        createdAt: "01.02.2023",
        verified: true,
    }
]

export const products = [
    {
        id: 1,
        img: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: "Camera",
        color: "White",
        producer: "Sony",
        price: "$250.99",
        createdAt: "01.02.2023",
        inStock: true,
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: "Iphone 15",
        color: "White",
        producer: "Apple",
        price: "$25.99",
        createdAt: "01.02.2023",
        inStock: true,
    },
    {
        id: 3,
        img: "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: "Watch",
        color: "White",
        producer: "sonata",
        price: "$80.99",
        createdAt: "10.06.2023",
        inStock: true,
    },
    {
        id: 4,
        img: "https://images.pexels.com/photos/3373739/pexels-photo-3373739.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: "Makeup Kit",
        color: "Blue",
        producer: "lackme",
        price: "$67.99",
        createdAt: "01.02.2022",
        inStock: true,
    },
    {
        id: 5,
        img: "https://images.pexels.com/photos/279906/pexels-photo-279906.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: "Camera lens 70 mm",
        color: "Black",
        producer: "Sony",
        price: "$200.99",
        createdAt: "01.02.2023",
        inStock: true,
    },
    {
        id: 6,
        img: "https://images.pexels.com/photos/236748/pexels-photo-236748.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: "Water Pipe",
        color: "White",
        producer: "Tata",
        price: "$20.99",
        createdAt: "14.12.2023",
        inStock: true,
    },
    {
        id: 7,
        img: "https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: "HeadPhone",
        color: "White",
        producer: "JBL",
        price: "$50.99",
        createdAt: "16.02.2023",
        inStock: true,
    },
    {
        id: 8,
        img: "https://images.pexels.com/photos/6634680/pexels-photo-6634680.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: "Hair Brush",
        color: "White",
        producer: "titan",
        price: "$50.99",
        createdAt: "01.02.2023",
        inStock: true,
    },
    {
        id: 9,
        img: "https://images.pexels.com/photos/10574057/pexels-photo-10574057.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: "HandWash",
        color: "White",
        producer: "Dettol",
        price: "$10.99",
        createdAt: "01.02.2023",
        inStock: true,
    },
    {
        id: 10,
        img: "https://images.pexels.com/photos/8467975/pexels-photo-8467975.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: "Shampoo",
        color: "White",
        producer: "Dove",
        price: "$250.99",
        createdAt: "01.02.2023",
        inStock: true,
    }

]



export const singleUser = {

    id: 1,
    title: "Jhon Dode",
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
    info: {
        username: "Johndoe99",
        fullname: "John Doe",
        email: "jhondoe@gmail.com",
        phone: "454 343 565",
        status: "verified",
    },
    chart: {
        dataKeys: [
            { name: "visits", color: "#82ca9d" },
            { name: "clicks", color: "#8884d8" }
        ],
        data: [
            {
                name: "Sun",
                visits: 4000,
                clicks: 2400,
            },
            {
                name: "Mon",
                visits: 3000,
                clicks: 1398,
            },
            {
                name: "Tue",
                visits: 2000,
                clicks: 3800,
            },
            {
                name: "Wed",
                visits: 2780,
                clicks: 3908,
            },
            {
                name: "Thu",
                visits: 1890,
                clicks: 4800,
            },
            {
                name: "Fri",
                visits: 2390,
                clicks: 3800,
            },
            {
                name: "Sat",
                visits: 3490,
                clicks: 4300,
            },
        ],
    },
    activities:[
    {
    text:"John Doe purchased Playstation 5 Digital Edition",
    time:"3 day ago",
    },
    {
    text:"John Doe added 3 items intp their wishlist",
    time:"1 week ago",
    },
    {
    text:"John Doe purchased Sony Bravia KD-32w800",
    time:"2 weeks ago",
    },
    {
    text:"John Doe reviewed a product",
    time:"1 month ago",
    },
    {
    text:"John Doe added 1 items into their wishlist",
    time:"1 month ago",
    },
    {
    text:"John Doe reviewed a product",
    time:"2 month ago",
    },
    ]
}
export const singleProduct = {

    id: 1,
    title: "Playstation 5 digital Edition ",
    img: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1600",
    info: {
        productId: "Ps5SDF1156d",
        color:"white",
        price: "$250.99",
        producer: "Sony",
        export: "Japan",
    },
    chart: {
        dataKeys: [
            { name: "visits", color: "#82ca9d" },
            { name: "clicks", color: "#8884d8" }
        ],
        data: [
            {
                name: "Sun",
                visits: 4000,
                clicks: 2400,
            },
            {
                name: "Mon",
                visits: 3000,
                clicks: 1398,
            },
            {
                name: "Tue",
                visits: 2000,
                clicks: 3800,
            },
            {
                name: "Wed",
                visits: 2780,
                clicks: 3908,
            },
            {
                name: "Thu",
                visits: 1890,
                clicks: 4800,
            },
            {
                name: "Fri",
                visits: 2390,
                clicks: 3800,
            },
            {
                name: "Sat",
                visits: 3490,
                clicks: 4300,
            },
        ],
    },
    activities:[
    {
    text:"John Doe purchased Playstation 5 Digital Edition",
    time:"3 day ago",
    },
    {
    text:"John Doe added 3 items intp their wishlist",
    time:"1 week ago",
    },
    {
    text:"John Doe purchased Sony Bravia KD-32w800",
    time:"2 weeks ago",
    },
    {
    text:"John Doe reviewed a product",
    time:"1 month ago",
    },
    {
    text:"John Doe added 1 items into their wishlist",
    time:"1 month ago",
    },
    {
    text:"John Doe reviewed a product",
    time:"2 month ago",
    },
    ]
}