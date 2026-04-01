import React from 'react';



const Servicios = () => {
    const services = [
        {
            name: 'Normal',
            description: 'Perfect for getting started with basic features and support.',
            features: ['Feature 1', 'Feature 2', 'Feature 3'],
            price: '$9.99/mo',
        },
        {
            name: 'Advanced',
            description: 'Enhanced features and priority support for growing needs.',
            features: ['All Normal features', 'Feature 4', 'Feature 5'],
            price: '$29.99/mo',
        },
        {
            name: 'Plus',
            description: 'Premium tier with all features and dedicated support.',
            features: ['All Advanced features', 'Feature 6', 'Feature 7'],
            price: '$59.99/mo',
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
      
            <div className="max-w-7xl mx-auto">
                
                <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.name}
                            className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition"
                        >
                            <h2 className="text-2xl font-bold mb-2">{service.name}</h2>
                            <p className="text-gray-600 mb-4">{service.description}</p>
                            
                            <div className="text-3xl font-bold text-blue-600 mb-6">
                                {service.price}
                            </div>
                            
                            <ul className="space-y-2 mb-8">
                                {service.features.map((feature) => (
                                    <li key={feature} className="text-gray-700 flex items-center">
                                        ✓ {feature}
                                    </li>
                                ))}
                            </ul>
                            
                            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                                Choose Plan
                            </button>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Servicios;