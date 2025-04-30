import { Title } from "@mui/icons-material"

let xAxisData = [
    {
        "name":"Jan",
        "Sale": 100_000
    },
    {
        "name":"Feb",
        "Sale": 44_000
    },
    {
        "name":"Mar",
        "Sale": 54_000
    },
    {
        "name":"Apr",
        "Sale": 21_000
    },
    {
        "name":"May",
        "Sale": 52_000
    },
    {
        "name":"Jun",
        "Sale": 34_000
    },
    {
        "name":"Jul",
        "Sale": 89_000
    },
    {
        "name":"Aug",
        "Sale": 76_000
    },
    {
        "name":"Sep",
        "Sale": 60_000
    },
    {
        "name":"Oct",
        "Sale": 12_000
    },
    {
        "name":"Nov",
        "Sale": 3_000
    },
    {
        "name":"Dec",
        "Sale": 77_000
    },
]

const newMembers= [
    {
        id: 1,
        username: "John Doe",
        title: "Software Engineer",
        img: "https://picsum.photos/300"
    },
    {
        id: 2,
        username: "Lucy Doe",
        title: "Hacker",
        img: "https://picsum.photos/400"
    },
    {
        id: 3,
        username: "Anna Doe",
        title: "Seo Engineer",
        img: "https://picsum.photos/500"
    },
    {
        id: 4,
        username: "Kate Doe",
        title: "Web Developer",
        img: "https://picsum.photos/600"
    }
]

const transactions = [
    {
        id: 1,
        costumer: "John Doe",
        date:"12 jun 2021",
        amount: 1200,
        status: "Approved",
        img: "https://picsum.photos/700",
    },
    {
        id: 2,
        costumer: "Lucy Doe",
        date:"12 jun 2021",
        amount: 1200,
        status: "Rejected",
        img: "https://picsum.photos/800"
    },
    {
        id: 3,
        costumer: "Anna Doe",
        date:"12 jun 2021",
        amount: 1200,
        status: "Pending",
        img: "https://picsum.photos/900"
    },
    {
        id: 4,
        costumer: "Kate Doe",
        date:"12 jun 2021",
        amount: 1200,
        status: "Approved",
        img: "https://picsum.photos/1000"
    }
]


let userRows =[
    {
        id: 1,
        username: "John Doe",
        email: "johndoe@gmail.com",
        status: "Active",
        transaction: "$120.00",
        avatar: "https://picsum.photos/1200",
    },
    {
        id: 2,
        username: "Lucy Doe",
        email: "lucydoe@gmail.com",
        status: "Active",
        transaction: "$111.65",
        avatar: "https://picsum.photos/1300"
    },
    {
        id: 3,
        username: "Anna Doe",
        email: "annadoe@gmail.com",
        status: "Active",
        transaction: "$220.49",
        avatar: "https://picsum.photos/1400"
    },
    {
        id: 4,
        username: "Kate Doe",
        email: "katedoe@gmail.com",
        status: "Active",
        transaction: "$34.12",
        avatar: "https://picsum.photos/1500"
    }
]


let productData = [
    {
        id: 1,
        name: "Product 1",
        price: 1200,
        img: "https://picsum.photos/2000"
    },
    {
        id: 2,
        name: "Product 2",
        price: 300,
        img: "https://picsum.photos/3000"
    },
    {
        id: 3,
        name: "Product 3",
        price: 12100,
        img: "https://picsum.photos/4000"
    },
    {
        id: 4,
        name: "Product 4",
        price: 897,
        img: "https://picsum.photos/5000"
    },
    {
        id: 5,
        name: "Product 5",
        price: 432,
        img: "https://picsum.photos/4400"
    }
    
]

const productsDataChart = [
    {
        name: "jan",
        sales: 4000,
    },
    {
        name: "feb",
        sales: 3000,
    },
    {
        name: "mar",
        sales: 5000,
    },
    {
        name: "apr",
        sales: 4000,
    },
    {
        name: "may",
        sales: 3000,
    },
]

// توابع کمکی برای تولید داده‌های داینامیک
const generateRandomSales = () => Math.floor(Math.random() * 10000) + 1000;
const generateRandomDate = () => {
    const date = new Date();
    date.setDate(date.getDate() - Math.floor(Math.random() * 30));
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
};

// تابع برای به‌روزرسانی داده‌ها
export const updateData = () => {
    return {
        xAxisData: xAxisData.map(item => ({
            ...item,
            Sale: generateRandomSales()
        })),
        transactions: transactions.map(item => ({
            ...item,
            amount: generateRandomSales(),
            date: generateRandomDate()
        }))
    };
};

export {xAxisData, newMembers, transactions, userRows, productData, productsDataChart}