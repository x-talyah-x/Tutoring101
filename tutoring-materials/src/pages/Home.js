import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-blue-600 mb-8">Welcome to Tutoring Materials</h1>
            <div className="space-y-4">
                <Link to="/shop">
                    <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600">
                        Shop Now
                    </button>
                </Link>
                <Link to="/contact">
                    <button className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-600">
                        Contact Us
                    </button>
                </Link>
                <Link to="/cart">
                    <button className="bg-purple-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-purple-600">
                        View Cart
                    </button>
                </Link>
                <Link to="/checkout">
                    <button className="bg-red-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-600">
                        Checkout
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
